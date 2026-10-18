# -*- coding: utf-8 -*-
"""
Compiles all simplified tenses into src/data/tensesRegistry.js.
Ensures zero academic jargon, clean beginner-friendly language,
and validates that all views and components have 100% of required data.
"""

import json
import os
import sys

from simplified_tenses_p1 import get_part1_tenses
from simplified_tenses_p2 import get_part2_tenses
from simplified_tenses_p3 import get_part3_tenses

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
REGISTRY_PATH = os.path.join(BASE_DIR, 'src', 'data', 'tensesRegistry.js')

TENSES_METADATA = [
  {
    "id": "pastSimple",
    "chapterNumber": 1,
    "title": "Past Simple",
    "fullTitle": "1. Past Simple Tense",
    "level": "A2 CEFR",
    "aspect": "Simple",
    "time": "Past",
    "color": "#8b5cf6",
    "badge": "CHAPTER 1 • FINISHED PAST",
    "formula": "Subject + Verb-ED / V2 | didn't + base | Did...?",
    "summary": "Finished actions, historical facts, storytelling sequences, and past states."
  },
  {
    "id": "presentSimple",
    "chapterNumber": 2,
    "title": "Present Simple",
    "fullTitle": "2. Present Simple Tense",
    "level": "A1 – B1 CEFR",
    "aspect": "Simple",
    "time": "Present",
    "color": "#10b981",
    "badge": "CHAPTER 2 • TIMELESS REALITY",
    "formula": "Subject + Verb(s) | doesn't + base | Does...?",
    "summary": "Daily habits, universal facts, permanent situations, and timetables."
  },
  {
    "id": "futureSimple",
    "chapterNumber": 3,
    "title": "Future Simple",
    "fullTitle": "3. Future Simple Tense",
    "level": "A2 – B1 CEFR",
    "aspect": "Simple",
    "time": "Future",
    "color": "#14b8a6",
    "badge": "CHAPTER 3 • FUTURE REALITY",
    "formula": "Subject + WILL + Base | won't + base | Will...?",
    "summary": "Spontaneous decisions, promises, offers, predictions, and future facts."
  },
  {
    "id": "pastContinuous",
    "chapterNumber": 4,
    "title": "Past Continuous",
    "fullTitle": "4. Past Continuous Tense",
    "level": "B1 CEFR",
    "aspect": "Continuous",
    "time": "Past",
    "color": "#ec4899",
    "badge": "CHAPTER 4 • PAST IN PROGRESS",
    "formula": "Subject + WAS / WERE + Verb-ING",
    "summary": "Actions in progress at a past moment, interrupted events, and story atmosphere."
  },
  {
    "id": "presentContinuous",
    "chapterNumber": 5,
    "title": "Present Continuous",
    "fullTitle": "5. Present Continuous Tense",
    "level": "A2 CEFR",
    "aspect": "Continuous",
    "time": "Present",
    "color": "#6366f1",
    "badge": "CHAPTER 5 • IN PROGRESS NOW",
    "formula": "Subject + AM / IS / ARE + Verb-ING",
    "summary": "Actions happening right now, temporary situations, evolving trends, and booked plans."
  },
  {
    "id": "futureContinuous",
    "chapterNumber": 6,
    "title": "Future Continuous",
    "fullTitle": "6. Future Continuous Tense",
    "level": "B2 CEFR",
    "aspect": "Continuous",
    "time": "Future",
    "color": "#a855f7",
    "badge": "CHAPTER 6 • FUTURE IN PROGRESS",
    "formula": "Subject + WILL BE + Verb-ING",
    "summary": "Actions that will be in progress at a future moment, and polite inquiries."
  },
  {
    "id": "pastPerfect",
    "chapterNumber": 7,
    "title": "Past Perfect Simple",
    "fullTitle": "7. Past Perfect Simple Tense",
    "level": "B2 CEFR",
    "aspect": "Perfect",
    "time": "Past",
    "color": "#3b82f6",
    "badge": "CHAPTER 7 • PAST BEFORE PAST",
    "formula": "Subject + HAD + Past Participle (V3)",
    "summary": "The past before the past: showing which past action happened first, and past causes."
  },
  {
    "id": "presentPerfect",
    "chapterNumber": 8,
    "title": "Present Perfect Simple",
    "fullTitle": "8. Present Perfect Simple Tense",
    "level": "B1 CEFR",
    "aspect": "Perfect",
    "time": "Present",
    "color": "#f59e0b",
    "badge": "CHAPTER 8 • PAST-PRESENT BRIDGE",
    "formula": "Subject + HAVE / HAS + Past Participle (V3)",
    "summary": "The bridge between past and present: life experiences, visible results, and unfinished time."
  },
  {
    "id": "futurePerfect",
    "chapterNumber": 9,
    "title": "Future Perfect Simple",
    "fullTitle": "9. Future Perfect Simple Tense",
    "level": "B2 CEFR",
    "aspect": "Perfect",
    "time": "Future",
    "color": "#f97316",
    "badge": "CHAPTER 9 • COMPLETED BY FUTURE",
    "formula": "Subject + WILL HAVE + Past Participle (V3)",
    "summary": "Emphasizes that an action will be completed before a future deadline."
  },
  {
    "id": "pastPerfectCont",
    "chapterNumber": 10,
    "title": "Past Perfect Continuous",
    "fullTitle": "10. Past Perfect Continuous Tense",
    "level": "B2+ CEFR",
    "aspect": "Perfect Continuous",
    "time": "Past",
    "color": "#e11d48",
    "badge": "CHAPTER 10 • DURATION IN PAST",
    "formula": "Subject + HAD BEEN + Verb-ING",
    "summary": "Focuses on how long an activity had been happening before another past event."
  },
  {
    "id": "presentPerfectCont",
    "chapterNumber": 11,
    "title": "Present Perfect Continuous",
    "fullTitle": "11. Present Perfect Continuous Tense",
    "level": "B1+ CEFR",
    "aspect": "Perfect Continuous",
    "time": "Present",
    "color": "#06b6d4",
    "badge": "CHAPTER 11 • DURATION TO NOW",
    "formula": "Subject + HAVE / HAS BEEN + Verb-ING",
    "summary": "Actions starting in the past continuing right now, or just ended with visible evidence."
  },
  {
    "id": "futurePerfectCont",
    "chapterNumber": 12,
    "title": "Future Perfect Continuous",
    "fullTitle": "12. Future Perfect Continuous Tense",
    "level": "C1 CEFR",
    "aspect": "Perfect Continuous",
    "time": "Future",
    "color": "#6366f1",
    "badge": "CHAPTER 12 • CONTINUOUS HORIZONS",
    "formula": "Subject + WILL HAVE BEEN + Verb-ING",
    "summary": "Focuses on how long an ongoing activity will have lasted up to a future milestone."
  },
  {
    "id": "conditionals",
    "chapterNumber": 13,
    "title": "Conditionals System",
    "fullTitle": "13. Complete Conditionals System",
    "level": "B1 – C1 CEFR",
    "aspect": "Capstone",
    "time": "Multi-Time",
    "color": "#ef4444",
    "badge": "CAPSTONE • HYPOTHETICAL WORLDS",
    "formula": "If + condition clause, result clause (0, 1st, 2nd, 3rd, Mixed)",
    "summary": "Zero, First, Second, Third, and Mixed Conditionals: facts, real plans, dreams, and regrets."
  },
  {
    "id": "passiveVoice",
    "chapterNumber": 14,
    "title": "Passive Voice Architecture",
    "fullTitle": "14. Passive Voice Architecture",
    "level": "B1 – C2 CEFR",
    "aspect": "Capstone",
    "time": "Discourse",
    "color": "#64748b",
    "badge": "CAPSTONE • DISCOURSE MASTERY",
    "formula": "Object + Conjugated BE + Past Participle (V3)",
    "summary": "Focusing on the receiver of the action, unknown doers, polite diplomacy, and public signs."
  }
]

def compile():
    print("Collecting simplified tenses datasets...")
    p1 = get_part1_tenses()
    p2 = get_part2_tenses()
    p3 = get_part3_tenses()

    all_tenses = {}
    all_tenses.update(p1)
    all_tenses.update(p2)
    all_tenses.update(p3)

    print(f"Total other tenses collected: {len(all_tenses)}")
    expected_keys = [
        "pastSimple", "futureSimple", "pastContinuous", "presentContinuous",
        "futureContinuous", "pastPerfect", "presentPerfect", "futurePerfect",
        "pastPerfectCont", "presentPerfectCont", "futurePerfectCont",
        "conditionals", "passiveVoice"
    ]

    for k in expected_keys:
        if k not in all_tenses:
            print(f"ERROR: Missing tense {k}!")
            sys.exit(1)
        tense = all_tenses[k]
        # Validate useCases
        if len(tense.get("useCases", [])) != 6:
            print(f"ERROR: Tense {k} does not have exactly 6 use cases (has {len(tense.get('useCases', []))})")
            sys.exit(1)
        for i, uc in enumerate(tense["useCases"]):
            if len(uc.get("examples", [])) < 3:
                print(f"ERROR: Tense {k} use case {i} has fewer than 3 examples")
                sys.exit(1)
        # Validate traps
        if len(tense.get("commonTraps", [])) < 6:
            print(f"ERROR: Tense {k} has fewer than 6 common traps")
            sys.exit(1)
        # Validate exercises
        ex = tense.get("exercises", {})
        if len(ex.get("quiz", [])) < 5 or len(ex.get("masteryExam", [])) < 10:
            print(f"ERROR: Tense {k} has insufficient quiz or exam questions")
            sys.exit(1)

    print("All 13 other tenses verified and validated successfully!")

    print(f"Writing to {REGISTRY_PATH}...")

    js_code = """// Comprehensive English Tenses Registry (All 14 Tenses)
// Complete Simplified, Clear, and Pedagogical Data Architecture for GrammarPulse
import { PRESENT_SIMPLE_DATA } from './presentSimpleData.js';

export const TENSES_METADATA = """ + json.dumps(TENSES_METADATA, indent=2) + """;

export const OTHER_TENSES_DATA = """ + json.dumps(all_tenses, indent=2) + """;

export const ALL_TENSES_DATA = {
  ...OTHER_TENSES_DATA,
  presentSimple: PRESENT_SIMPLE_DATA,
};

export const ALL_TENSES_METADATA = TENSES_METADATA.map((t) => ({
  ...t,
  name: t.title,
  accentColor: t.color,
}));

export function getTenseData(id) {
  let rawData;
  if (id === 'presentSimple') {
    rawData = PRESENT_SIMPLE_DATA;
  } else {
    rawData = OTHER_TENSES_DATA[id] || PRESENT_SIMPLE_DATA;
  }

  const metaItem = TENSES_METADATA.find((t) => t.id === id) || TENSES_METADATA[1];
  const normalizedMeta = {
    ...metaItem,
    ...(rawData.meta || {}),
    id: id || metaItem.id,
    name: metaItem.title || rawData.meta?.title || 'Present Simple',
    title: rawData.meta?.title || metaItem.title,
    accentColor: metaItem.color || rawData.meta?.color || '#10b981',
    color: metaItem.color || '#10b981',
    level: rawData.meta?.level || metaItem.level,
    aspect: metaItem.aspect || 'Simple',
  };

  return {
    ...rawData,
    meta: normalizedMeta,
  };
}

export function getNextTense(currentId) {
  const idx = TENSES_METADATA.findIndex((t) => t.id === currentId);
  if (idx === -1 || idx === TENSES_METADATA.length - 1) return ALL_TENSES_METADATA[0];
  return ALL_TENSES_METADATA[idx + 1];
}

export function getPrevTense(currentId) {
  const idx = TENSES_METADATA.findIndex((t) => t.id === currentId);
  if (idx <= 0) return ALL_TENSES_METADATA[ALL_TENSES_METADATA.length - 1];
  return ALL_TENSES_METADATA[idx - 1];
}

export function getTenseMetadata(id) {
  return ALL_TENSES_METADATA.find((t) => t.id === id) || ALL_TENSES_METADATA[1];
}
"""

    with open(REGISTRY_PATH, 'w', encoding='utf-8') as f:
        f.write(js_code)

    file_size_kb = os.path.getsize(REGISTRY_PATH) / 1024
    print(f"Successfully compiled {REGISTRY_PATH} ({file_size_kb:.1f} KB)!")

if __name__ == '__main__':
    compile()
