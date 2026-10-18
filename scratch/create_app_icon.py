# -*- coding: utf-8 -*-
"""
Generates a premium, high-resolution multi-size .ico icon for GrammarPulse English Studio.
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_icon():
    sizes = [(256, 256), (128, 128), (64, 64), (48, 48), (32, 32), (16, 16)]
    images = []

    for size in sizes:
        w, h = size
        img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)

        # Draw rounded rectangle background with smooth gradient effect
        radius = int(w * 0.22)
        
        # Outer glow
        draw.rounded_rectangle([0, 0, w - 1, h - 1], radius=radius, fill=(99, 102, 241, 255))
        
        # Inner sleek dark card
        padding = max(1, int(w * 0.04))
        draw.rounded_rectangle([padding, padding, w - padding - 1, h - padding - 1], 
                               radius=max(1, radius - padding), 
                               fill=(15, 23, 42, 255))
        
        # Vibrant accent border
        accent_pad = max(2, int(w * 0.08))
        draw.rounded_rectangle([accent_pad, accent_pad, w - accent_pad - 1, h - accent_pad - 1], 
                               radius=max(1, radius - accent_pad), 
                               outline=(16, 185, 129, 200), width=max(1, int(w * 0.02)))

        # Draw stylized English "G" & "P" or Book/Pulse shape
        # Center circle or symbol
        cx, cy = w // 2, h // 2
        r = int(w * 0.24)
        
        # Golden pulse bar
        bar_h = max(2, int(w * 0.08))
        draw.rounded_rectangle([cx - r, cy - bar_h // 2, cx + r, cy + bar_h // 2], radius=bar_h // 2, fill=(245, 158, 11, 240))
        
        # Vertical pulse line
        bar_w = max(2, int(w * 0.08))
        draw.rounded_rectangle([cx - bar_w // 2, cy - r, cx + bar_w // 2, cy + r], radius=bar_w // 2, fill=(99, 102, 241, 255))
        
        # Central bright spark
        dot_r = max(2, int(w * 0.10))
        draw.ellipse([cx - dot_r, cy - dot_r, cx + dot_r, cy + dot_r], fill=(255, 255, 255, 255))

        images.append(img)

    ico_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'app_icon.ico'))
    electron_ico_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'electron', 'icon.ico'))
    
    images[0].save(ico_path, format="ICO", sizes=[(s[0], s[1]) for s in sizes], append_images=images[1:])
    images[0].save(electron_ico_path, format="ICO", sizes=[(s[0], s[1]) for s in sizes], append_images=images[1:])
    print(f"Generated icon at {ico_path} and {electron_ico_path}")

if __name__ == '__main__':
    create_icon()
