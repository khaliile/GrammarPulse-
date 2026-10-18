"""Local Piper Neural TTS Server for GrammarPulse English Studio.
Runs locally on port 8100 using the project's own tts-env and voices folder.
"""

import io
import os
import sys
import threading
import wave
from pathlib import Path

# Ensure UTF-8 output encoding
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from pydantic import BaseModel
from piper import PiperConfig, PiperVoice, SynthesisConfig

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Warm up default neural voice in background thread so port 8100 is bound instantly (<1s)
    def warmup():
        try:
            get_voice(DEFAULT_VOICE)
            print(f"[TTS Server] Preloaded neural voice: {DEFAULT_VOICE}")
        except Exception as e:
            print(f"[TTS Server] Preload warning: {e}")

    threading.Thread(target=warmup, daemon=True).start()
    yield

app = FastAPI(title="GrammarPulse Local TTS", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PORT = int(os.environ.get("PIPER_PORT", "8100"))
BASE_DIR = Path(__file__).parent
VOICE_DIR = BASE_DIR / "voices"
DEFAULT_VOICE = "en_US-amy-medium"

FAST_SYN_CONFIG = SynthesisConfig(length_scale=1.0)
_voice_lock = threading.Lock()
_loaded_voices = {}

def get_voice(voice_id: str) -> PiperVoice:
    if voice_id not in _loaded_voices:
        model_path = VOICE_DIR / f"{voice_id}.onnx"
        config_path = VOICE_DIR / f"{voice_id}.onnx.json"
        if not model_path.exists():
            # Fallback to default voice if specific one not found
            model_path = VOICE_DIR / f"{DEFAULT_VOICE}.onnx"
            config_path = VOICE_DIR / f"{DEFAULT_VOICE}.onnx.json"

        if not model_path.exists():
            raise HTTPException(status_code=404, detail=f"Voice {voice_id} not found in {VOICE_DIR}")

        voice = PiperVoice.load(str(model_path), str(config_path))
        _loaded_voices[voice_id] = voice

    return _loaded_voices[voice_id]

class TTSRequest(BaseModel):
    text: str
    voice: str | None = None
    slow: bool | None = False

@app.get("/health")
def health():
    return {
        "status": "ok",
        "engine": "piper",
        "default_voice": DEFAULT_VOICE,
        "voices_dir": str(VOICE_DIR),
        "ready": DEFAULT_VOICE in _loaded_voices,
    }

@app.get("/tts")
def tts_get(
    text: str = Query(..., description="Text to speak"),
    voice: str = Query(None, description="Voice ID"),
    slow: bool = Query(False, description="Slow speech")
):
    return handle_synthesis(text, voice, slow)

@app.post("/tts")
def tts_post(payload: TTSRequest):
    return handle_synthesis(payload.text, payload.voice, payload.slow)

def handle_synthesis(text: str, voice_id: str | None, slow: bool | None):
    clean_text = text.replace('*', '').replace('#', '').strip()
    if not clean_text:
        raise HTTPException(status_code=400, detail="Text cannot be empty")

    vid = voice_id or DEFAULT_VOICE
    syn_config = SynthesisConfig(length_scale=1.25 if slow else 1.0)

    try:
        voice = get_voice(vid)
        buffer = io.BytesIO()
        with _voice_lock:
            with wave.open(buffer, "wb") as wav_file:
                voice.synthesize_wav(clean_text, wav_file, syn_config=syn_config)

        audio_bytes = buffer.getvalue()
        return Response(
            content=audio_bytes,
            media_type="audio/wav",
            headers={
                "Cache-Control": "public, max-age=86400",
                "Content-Length": str(len(audio_bytes)),
            },
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=PORT, log_level="warning")

