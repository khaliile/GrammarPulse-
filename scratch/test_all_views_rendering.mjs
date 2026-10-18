import { ALL_TENSES_METADATA, getTenseData } from '../src/data/tensesRegistry.js';

console.log('Auditing all 14 tenses across all views rendering safety...');
let issues = 0;

ALL_TENSES_METADATA.forEach((tMeta) => {
  const d = getTenseData(tMeta.id);
  const meta = d.meta;

  // 1. Overview
  if (!d.overview?.definition || !d.overview?.coreConcept || !d.overview?.timelineInsight) {
    console.error(`[${tMeta.id}] Overview missing core texts`);
    issues++;
  }
  (d.overview?.pillars || []).forEach((p, idx) => {
    if (typeof p.label !== 'string' || typeof p.desc !== 'string') {
      console.error(`[${tMeta.id}] Overview pillar #${idx} has non-string`);
      issues++;
    }
  });
  (d.overview?.signalWords || []).forEach((sw, idx) => {
    if (typeof sw.word !== 'string' || typeof sw.example !== 'string') {
      console.error(`[${tMeta.id}] Overview signalWord #${idx} has non-string`);
      issues++;
    }
  });

  // 2. Use Cases
  (d.useCases || []).forEach((uc, idx) => {
    if (typeof uc.title !== 'string' || typeof uc.explanation !== 'string') {
      console.error(`[${tMeta.id}] UseCase #${idx} has non-string`);
      issues++;
    }
    (uc.examples || []).forEach((ex, eIdx) => {
      const sentence = ex.sentence || ex.en || (typeof ex === 'string' ? ex : null);
      if (!sentence) {
        console.error(`[${tMeta.id}] UseCase #${idx} ex #${eIdx} missing valid sentence`);
        issues++;
      }
    });
  });

  // 3. Formulas
  const gs = d.grammarStructures || {};
  ['affirmative', 'negative', 'interrogative', 'verbToBe', 'verbHave'].forEach((k) => {
    const s = gs[k];
    if (s && s.table) {
      s.table.forEach((row, rIdx) => {
        Object.entries(row).forEach(([col, val]) => {
          if (typeof val === 'object' && val !== null) {
            console.error(`[${tMeta.id}] Formula ${k} row #${rIdx} col ${col} is an object!`);
            issues++;
          }
        });
      });
    }
  });

  // 4. Spelling Lab
  const sr = d.spellingRules;
  const rules = Array.isArray(sr) ? sr : (sr?.rules || []);
  rules.forEach((r, idx) => {
    const statement = r.rule || r.ruleText || r.explanation || r.condition;
    if (typeof statement !== 'string') {
      console.error(`[${tMeta.id}] Spelling rule #${idx} has invalid statement`);
      issues++;
    }
  });
  const tips = sr?.phoneticTips || [];
  tips.forEach((tip, idx) => {
    if (typeof tip !== 'string' && (typeof tip !== 'object' || tip === null)) {
      console.error(`[${tMeta.id}] Spelling tip #${idx} invalid`);
      issues++;
    }
  });

  // 5. Frequency & Adverbs
  (d.adverbsOfFrequency || []).forEach((item, idx) => {
    if (typeof item.adverb !== 'string' || typeof item.example !== 'string') {
      console.error(`[${tMeta.id}] Frequency item #${idx} invalid`);
      issues++;
    }
  });
  (d.adverbPlacementRules || []).forEach((rule, idx) => {
    const rawExample = (rule.examples && rule.examples[0]) || rule.example || "";
    const goodText = typeof rawExample === 'object' && rawExample !== null
      ? rawExample.good
      : (typeof rule.example === 'string' ? rule.example : (typeof rawExample === 'string' ? rawExample : ""));
    const badText = typeof rawExample === 'object' && rawExample !== null
      ? rawExample.bad
      : (typeof rule.badExample === 'string' ? rule.badExample : "");

    if (!goodText || typeof goodText !== 'string') {
      console.error(`[${tMeta.id}] Placement rule #${idx} missing valid goodText!`);
      issues++;
    }
  });

  // 6. Common Traps
  (d.commonTraps || []).forEach((tr, idx) => {
    if (typeof tr.title !== 'string' || typeof tr.bad !== 'string' || typeof tr.good !== 'string' || typeof tr.explanation !== 'string') {
      console.error(`[${tMeta.id}] Trap #${idx} invalid`);
      issues++;
    }
  });

  // 7. Resume Summary
  (d.resumeSummary?.formulaMatrix || []).forEach((row, idx) => {
    ['form', 'formula', 'exampleI', 'exampleHe', 'memoryAnchor'].forEach((k) => {
      if (typeof row[k] !== 'string') {
        console.error(`[${tMeta.id}] Resume matrix row #${idx} col ${k} is not a string`);
        issues++;
      }
    });
  });
  (d.resumeSummary?.spellingPills || []).forEach((p, idx) => {
    if (typeof p.ending !== 'string' || typeof p.change !== 'string' || typeof p.example !== 'string') {
      console.error(`[${tMeta.id}] Resume spelling pill #${idx} invalid`);
      issues++;
    }
  });

  // 8. Practice Studio
  const ex = d.exercises || {};
  (ex.quiz || []).forEach((q, idx) => {
    if (typeof q.question !== 'string' || !Array.isArray(q.options) || typeof q.correct !== 'number') {
      console.error(`[${tMeta.id}] Quiz item #${idx} invalid`);
      issues++;
    }
  });
  (ex.fillBlanks || []).forEach((fb, idx) => {
    if (typeof fb.sentence !== 'string' || (!fb.answer && !fb.correctAnswer)) {
      console.error(`[${tMeta.id}] Fill-blanks item #${idx} invalid`);
      issues++;
    }
  });
  (ex.sentenceScrambler || []).forEach((sc, idx) => {
    if (!Array.isArray(sc.tokens)) {
      console.error(`[${tMeta.id}] Scrambler item #${idx} invalid`);
      issues++;
    }
  });
  (ex.errorDetective || []).forEach((ed, idx) => {
    if (!Array.isArray(ed.options)) {
      console.error(`[${tMeta.id}] Error Detective item #${idx} invalid`);
      issues++;
    }
  });

  // 9. Mastery Exam
  (ex.masteryExam || []).forEach((q, idx) => {
    if (typeof q.question !== 'string' || !Array.isArray(q.options) || typeof q.correct !== 'number') {
      console.error(`[${tMeta.id}] Exam item #${idx} invalid`);
      issues++;
    }
  });
});

console.log(`\n================================`);
console.log(`Total rendering issues: ${issues}`);
if (issues === 0) {
  console.log('SUCCESS! ALL 14 TENSES & ALL 10 MODULES PASS RENDERING AUDIT WITH ZERO ISSUES!');
} else {
  process.exit(1);
}
