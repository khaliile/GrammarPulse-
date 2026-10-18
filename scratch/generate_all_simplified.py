# -*- coding: utf-8 -*-
"""
Script to build the complete, simplified tensesRegistry.js.
All explanations are rewritten to be super clear, friendly, and simple,
while preserving all 6 use cases, realistic examples, formulas, common traps, and tests.
"""

import json
import os

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'tensesRegistry.js'))

from tenses_specs import ALL_SIMPLIFIED_TENSES, TENSES_METADATA

def compile_registry():
    print(f"Compiling {len(ALL_SIMPLIFIED_TENSES)} tenses into {target_path}...")
    
    js_content = """// Comprehensive English Tenses Registry (All 14 Tenses)
// Simplified, Clear, and Pedagogical Data Architecture for GrammarPulse
import { PRESENT_SIMPLE_DATA } from './presentSimpleData.js';

export const TENSES_METADATA = """ + json.dumps(TENSES_METADATA, indent=2) + """;

export const OTHER_TENSES_DATA = """ + json.dumps(ALL_SIMPLIFIED_TENSES, indent=2) + """;

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

    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print("Successfully compiled tensesRegistry.js!")

if __name__ == '__main__':
    compile_registry()
