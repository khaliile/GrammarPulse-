const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '..', 'src', 'data', 'tensesRegistry.js');

const scriptContent = `import { PRESENT_SIMPLE_DATA } from './presentSimpleData';

export const TENSES_METADATA = [
  {
    id: 'pastSimple',
    chapterNumber: 1,
    title: 'Past Simple',
    fullTitle: '1. Past Simple Tense',
    level: 'A2 CEFR',
    aspect: 'Simple',
    time: 'Past',
    color: '#8b5cf6',
    badge: 'CHAPTER 1 • FINISHED PAST',
    formula: "Subject + Verb-ED / Irregular V2 | didn't + base | Did...?",
    summary: 'Finished actions, historical narratives, completed time periods, and past states.',
  },
  {
    id: 'presentSimple',
    chapterNumber: 2,
    title: 'Present Simple',
    fullTitle: '2. Present Simple Tense',
    level: 'A1 – B1 CEFR',
    aspect: 'Simple',
    time: 'Present',
    color: '#10b981',
    badge: 'CHAPTER 2 • TIMELESS REALITY',
    formula: "Subject + Verb(s) | doesn't + base | Does...?",
    summary: 'Timeless facts, daily habits, universal laws, permanent states, and timetables.',
  },
  {
    id: 'futureSimple',
    chapterNumber: 3,
    title: 'Future Simple',
    fullTitle: '3. Future Simple (Will & Going To)',
    level: 'A2 – B1 CEFR',
    aspect: 'Simple',
    time: 'Future',
    color: '#14b8a6',
    badge: 'CHAPTER 3 • FUTURE REALITY',
    formula: "Subject + WILL + Base | won't + base | Will...?",
    summary: 'Spontaneous decisions, promises, voluntary offers, predictions and intentions.',
  },
  {
    id: 'pastContinuous',
    chapterNumber: 4,
    title: 'Past Continuous',
    fullTitle: '4. Past Continuous Tense',
    level: 'B1 CEFR',
    aspect: 'Continuous',
    time: 'Past',
    color: '#ec4899',
    badge: 'CHAPTER 4 • PAST IN PROGRESS',
    formula: "Subject + WAS / WERE + Verb-ING",
    summary: 'Actions in progress at a specific past moment, parallel background activities, interrupted scenes.',
  },
  {
    id: 'presentContinuous',
    chapterNumber: 5,
    title: 'Present Continuous',
    fullTitle: '5. Present Continuous Tense',
    level: 'A2 CEFR',
    aspect: 'Continuous',
    time: 'Present',
    color: '#6366f1',
    badge: 'CHAPTER 5 • IN PROGRESS NOW',
    formula: "Subject + AM / IS / ARE + Verb-ING",
    summary: 'Actions happening right now, temporary situations, evolving trends, planned personal arrangements.',
  },
  {
    id: 'futureContinuous',
    chapterNumber: 6,
    title: 'Future Continuous',
    fullTitle: '6. Future Continuous Tense',
    level: 'B2 CEFR',
    aspect: 'Continuous',
    time: 'Future',
    color: '#a855f7',
    badge: 'CHAPTER 6 • FUTURE IN PROGRESS',
    formula: "Subject + WILL BE + Verb-ING",
    summary: 'Actions that will be actively in progress at a specific future benchmark moment.',
  },
  {
    id: 'pastPerfect',
    chapterNumber: 7,
    title: 'Past Perfect Simple',
    fullTitle: '7. Past Perfect Simple',
    level: 'B2 CEFR',
    aspect: 'Perfect',
    time: 'Past',
    color: '#3b82f6',
    badge: 'CHAPTER 7 • PAST BEFORE PAST',
    formula: "Subject + HAD + Past Participle (V3)",
    summary: 'Chronological precedence: establishing which of two past actions occurred first.',
  },
  {
    id: 'presentPerfect',
    chapterNumber: 8,
    title: 'Present Perfect Simple',
    fullTitle: '8. Present Perfect Simple',
    level: 'B1 CEFR',
    aspect: 'Perfect',
    time: 'Present',
    color: '#f59e0b',
    badge: 'CHAPTER 8 • PAST-PRESENT BRIDGE',
    formula: "Subject + HAVE / HAS + Past Participle (V3)",
    summary: 'The bridge between past and present: life experiences, recent actions with visible results.',
  },
  {
    id: 'futurePerfect',
    chapterNumber: 9,
    title: 'Future Perfect Simple',
    fullTitle: '9. Future Perfect Simple',
    level: 'B2 CEFR',
    aspect: 'Perfect',
    time: 'Future',
    color: '#f97316',
    badge: 'CHAPTER 9 • COMPLETED BY FUTURE',
    formula: "Subject + WILL HAVE + Past Participle (V3)",
    summary: 'Actions that will be completed and finished before a specific future deadline.',
  },
  {
    id: 'pastPerfectCont',
    chapterNumber: 10,
    title: 'Past Perfect Continuous',
    fullTitle: '10. Past Perfect Continuous',
    level: 'B2+ CEFR',
    aspect: 'Perfect Continuous',
    time: 'Past',
    color: '#e11d48',
    badge: 'CHAPTER 10 • PAST DURATION & CAUSE',
    formula: "Subject + HAD BEEN + Verb-ING",
    summary: 'Continuous duration leading up to a specific past moment, visible past evidence.',
  },
  {
    id: 'presentPerfectCont',
    chapterNumber: 11,
    title: 'Present Perfect Continuous',
    fullTitle: '11. Present Perfect Continuous',
    level: 'B1+ CEFR',
    aspect: 'Perfect Continuous',
    time: 'Present',
    color: '#06b6d4',
    badge: 'CHAPTER 11 • DURATION UP TO NOW',
    formula: "Subject + HAVE / HAS BEEN + Verb-ING",
    summary: 'Continuous duration continuing up to the present moment, recent visible evidence.',
  },
  {
    id: 'futurePerfectCont',
    chapterNumber: 12,
    title: 'Future Perfect Continuous',
    fullTitle: '12. Future Perfect Continuous',
    level: 'C1 CEFR',
    aspect: 'Perfect Continuous',
    time: 'Future',
    color: '#0284c7',
    badge: 'CHAPTER 12 • FUTURE DURATION BENCHMARK',
    formula: "Subject + WILL HAVE BEEN + Verb-ING",
    summary: 'Continuous ongoing duration measured up to a benchmark moment in the future.',
  },
  {
    id: 'conditionals',
    chapterNumber: 13,
    title: 'Conditionals System',
    fullTitle: '13. Complete Conditionals System',
    level: 'B1 – C1 CEFR',
    aspect: 'Capstone',
    time: 'Multi-Time',
    color: '#ef4444',
    badge: 'CAPSTONE • HYPOTHETICAL WORLDS',
    formula: "If + condition clause, result clause (0, 1st, 2nd, 3rd, Mixed)",
    summary: 'Cause & effect, hypothetical conditions, counterfactual scenarios, and conditional logic.',
  },
  {
    id: 'passiveVoice',
    chapterNumber: 14,
    title: 'Passive Voice Architecture',
    fullTitle: '14. Passive Voice Architecture',
    level: 'B1 – C2 CEFR',
    aspect: 'Capstone',
    time: 'Multi-Time',
    color: '#64748b',
    badge: 'CAPSTONE • AGENT TRANSFORMATION',
    formula: "Object + BE (tense-conjugated) + Past Participle (V3) (+ by Agent)",
    summary: 'Shifting informational focus from the actor to the action, object, and recipient.',
  },
];

export function getNextTense(currentId) {
  const idx = TENSES_METADATA.findIndex((t) => t.id === currentId);
  if (idx === -1 || idx === TENSES_METADATA.length - 1) return TENSES_METADATA[0];
  return TENSES_METADATA[idx + 1];
}

export function getPrevTense(currentId) {
  const idx = TENSES_METADATA.findIndex((t) => t.id === currentId);
  if (idx <= 0) return TENSES_METADATA[TENSES_METADATA.length - 1];
  return TENSES_METADATA[idx - 1];
}

export function getTenseMetadata(id) {
  return TENSES_METADATA.find((t) => t.id === id) || TENSES_METADATA[1];
}
`;

fs.writeFileSync(outputPath, scriptContent, 'utf8');
console.log("Metadata updated in tensesRegistry.js");
