// Full Chapter Data Architecture for Preview Studio & Course Workflow
// Canonical formulas, structures, signals, examples, contrasts, and mini-quizzes across all 14 English Tenses & Systems

export const TENSES_DATA = [
  // ==========================================
  // PHASE 1: SIMPLE ASPECT (Past -> Present -> Future)
  // ==========================================
  {
    id: 'pastSimple',
    title: '1. Past Simple',
    level: 'A2',
    aspect: 'Simple',
    time: 'Past',
    badge: 'CHAPTER 1 • FINISHED TIME',
    reality: 'Finished actions, historical narratives, completed time periods',
    summary: 'Finished actions, historical narratives, and events completed in definite past time periods.',
    formula: "Subject + Verb-ED / V2 | didn't + base | Did...?",
    color: '#8b5cf6',
    structures: {
      affirmative: 'Subject + Verb-ED / Irregular V2 (e.g., "Alexander Fleming discovered penicillin in 1928.")',
      negative: 'Subject + DID NOT (didn\'t) + Base Verb (e.g., "They didn\'t catch the morning flight.")',
      question: 'DID + Subject + Base Verb? (e.g., "Did you call the client yesterday afternoon?")',
    },
    signals: ['Yesterday', 'Last night / week / year', 'In 2018', 'Two hours ago', 'When I was young'],
    example: 'Alexander Fleming discovered penicillin in 1928 after returning from a summer vacation.',
    contrast: 'Requires a completely finished past time period. In negatives and questions, "did" absorbs the past tense so the main verb stays in its bare infinitive form ("Did you go?", never "Did you went?").',
    miniQuiz: {
      question: 'Which question correctly asks about a finished past event?',
      options: ['Did she went to the library?', 'Did she go to the library?', 'Does she went to the library?'],
      correct: 1,
      explanation: 'The auxiliary "Did" already takes the past tense, so "go" must remain in bare infinitive form.'
    }
  },
  {
    id: 'presentSimple',
    title: '2. Present Simple',
    level: 'A1 – B1',
    aspect: 'Simple',
    time: 'Present',
    badge: 'CHAPTER 2 • FOUNDATION (ACTIVE COURSE)',
    reality: 'Timeless facts, daily habits, universal laws, permanent states, timetables',
    summary: 'Bedrock of English: habits, universal scientific truths, permanent states, schedules, and stative verbs.',
    formula: "Subject + Verb(s) | doesn't + base | Does...?",
    color: '#10b981',
    structures: {
      affirmative: 'Subject + Verb(s) (e.g., "She works in Berlin as an architect.")',
      negative: 'Subject + DO / DOES NOT + Base Verb (e.g., "She doesn\'t work on Saturdays.")',
      question: '(Wh-) + DO / DOES + Subject + Base Verb? (e.g., "Does she work in Berlin?")',
    },
    signals: ['Every day / week', 'Always / Usually / Often', 'On Mondays', 'In the morning', 'Hardly ever / Never'],
    example: 'Water boils at 100 degrees Celsius, and the morning express train departs at 07:15.',
    contrast: 'Expresses permanent truths, timeless reality, and repeated habits. Never use -ing continuous forms for universal facts.',
    miniQuiz: {
      question: 'Which sentence correctly demonstrates a timeless scientific fact in Present Simple?',
      options: ['The Earth revolves around the Sun.', 'The Earth is revolving around the Sun.', 'The Earth revolve around the Sun.'],
      correct: 0,
      explanation: 'Universal scientific laws take the Present Simple with 3rd person singular "-s" (revolves).'
    }
  },
  {
    id: 'futureSimple',
    title: '3. Future Simple (Will & Going To)',
    level: 'A2 – B1',
    aspect: 'Simple',
    time: 'Future',
    badge: 'CHAPTER 3 • FUTURE REALITY',
    reality: 'Spontaneous decisions, promises, voluntary offers, predictions & plans',
    summary: 'Spontaneous instant decisions (will), firm pre-planned intentions, and predictions backed by evidence (be going to).',
    formula: 'Subject + WILL + Base  |  AM/IS/ARE + GOING TO + Base',
    color: '#14b8a6',
    structures: {
      affirmative: 'Subject + WILL + Base Verb (e.g., "The phone is ringing. I\'ll answer it immediately.")',
      negative: 'Subject + WON\'T + Base Verb (e.g., "I promise I won\'t reveal your secret.")',
      question: 'WILL + Subject + Base Verb? (e.g., "Will artificial intelligence transform medicine?")',
    },
    signals: ['Tomorrow', 'Next week / month', 'I think / believe', 'Probably', 'In the future'],
    example: 'Sit down and relax; I will make a fresh pot of coffee, and tomorrow we are going to explore the museum.',
    contrast: 'Will = Instant decision made at the moment of speaking. Be going to = Prior plan decided before speaking, or prediction with present sensory evidence.',
    miniQuiz: {
      question: 'Someone knocks on your office door. Which is the natural spontaneous response?',
      options: ['I am going to open it.', 'I will open it.', 'I open it.'],
      correct: 1,
      explanation: 'Instant spontaneous decisions made at the moment of speech always take "will".'
    }
  },

  // ==========================================
  // PHASE 2: CONTINUOUS ASPECT (Past -> Present -> Future)
  // ==========================================
  {
    id: 'pastContinuous',
    title: '4. Past Continuous',
    level: 'B1',
    aspect: 'Continuous',
    time: 'Past',
    badge: 'CHAPTER 4 • PAST IN PROGRESS',
    reality: 'Actions in progress at a specific past moment, parallel background activities',
    summary: 'Actions in progress at a specific past moment, parallel background activities, and interrupted scenes.',
    formula: 'Subject + WAS / WERE + Verb-ING',
    color: '#ec4899',
    structures: {
      affirmative: 'Subject + WAS / WERE + Verb-ing (e.g., "I was driving home when the storm struck.")',
      negative: 'Subject + WAS / WERE NOT (wasn\'t/weren\'t) + Verb-ing (e.g., "They weren\'t paying attention.")',
      question: 'WAS / WERE + Subject + Verb-ing? (e.g., "What were you doing at 8:00 PM yesterday?")',
    },
    signals: ['While', 'As', 'At 9:00 PM yesterday', 'All evening', 'When (interrupted by Past Simple)'],
    example: 'I was reading a fascinating novel by candlelight when the thunderstorm knocked out the power.',
    contrast: 'Past Continuous sets the ongoing scene ("was raining"), while Past Simple delivers the sudden completed action that interrupts it ("lightning struck").',
    miniQuiz: {
      question: 'Complete: "While Sarah was studying, her brother ________ dinner."',
      options: ['was cooking', 'cooked was', 'is cooking'],
      correct: 0,
      explanation: 'Two continuous parallel actions occurring simultaneously in the past both take Past Continuous with "while".'
    }
  },
  {
    id: 'presentContinuous',
    title: '5. Present Continuous',
    level: 'A2',
    aspect: 'Continuous',
    time: 'Present',
    badge: 'CHAPTER 5 • IN PROGRESS NOW',
    reality: 'Actions happening right now, temporary situations, evolving trends',
    summary: 'Actions happening right now, temporary situations, evolving trends, and planned personal arrangements.',
    formula: 'Subject + AM / IS / ARE + Verb-ING',
    color: '#6366f1',
    structures: {
      affirmative: 'Subject + AM / IS / ARE + Verb-ing (e.g., "I am studying linguistics right now.")',
      negative: 'Subject + AM / IS / ARE NOT + Verb-ing (e.g., "They aren\'t listening to music.")',
      question: 'AM / IS / ARE + Subject + Verb-ing? (e.g., "Are you working on the design?")',
    },
    signals: ['Now', 'Right now', 'At the moment', 'Currently', 'These days', 'Look!', 'Listen!'],
    example: 'Look! It is raining outside, and the children are running to the shelter.',
    contrast: 'Contrast with Present Simple: Present Simple is permanent lifestyle ("I live in Rome"); Present Continuous is temporary ("I am living with friends this month"). Stative verbs NEVER take -ing.',
    miniQuiz: {
      question: 'Why is "I am knowing three languages" grammatically incorrect?',
      options: ['"Know" is an irregular verb.', '"Know" is a stative verb describing a mental state in Present Simple.', 'Languages require the past tense.'],
      correct: 1,
      explanation: 'Verbs of perception, cognition, and emotion (know, love, believe) describe permanent states and stay in the Simple aspect.'
    }
  },
  {
    id: 'futureContinuous',
    title: '6. Future Continuous',
    level: 'B2',
    aspect: 'Continuous',
    time: 'Future',
    badge: 'CHAPTER 6 • FUTURE IN PROGRESS',
    reality: 'Actions in progress at a specific future moment, routine ongoing events',
    summary: 'Actions that will be actively in progress at a specific time in the future, or polite inquiries regarding plans.',
    formula: 'Subject + WILL BE + Verb-ING',
    color: '#a855f7',
    structures: {
      affirmative: 'Subject + WILL BE + Verb-ing (e.g., "This time tomorrow, I will be flying over the Atlantic.")',
      negative: 'Subject + WON\'T BE + Verb-ing (e.g., "We won\'t be using the conference room at 10 AM.")',
      question: 'WILL + Subject + BE + Verb-ing? (e.g., "Will you be working late this evening?")',
    },
    signals: ['This time tomorrow', 'At 8 PM next Friday', 'In ten years\' time', 'When you arrive'],
    example: 'This time next week, we will be relaxing on the Mediterranean coast under the warm sunshine.',
    contrast: 'Future Simple (will relax) = event will happen. Future Continuous (will be relaxing) = in the exact middle of an ongoing activity at that future moment.',
    miniQuiz: {
      question: 'Complete: "Don\'t phone me at 3 PM because I ________ an exam."',
      options: ['will be taking', 'will take been', 'am take'],
      correct: 0,
      explanation: 'Specifying an activity in progress at a future moment ("at 3 PM") demands Future Continuous ("will be taking").'
    }
  },

  // ==========================================
  // PHASE 3: PERFECT ASPECT (Past -> Present -> Future)
  // ==========================================
  {
    id: 'pastPerfect',
    title: '7. Past Perfect Simple',
    level: 'B2',
    aspect: 'Perfect',
    time: 'Past',
    badge: 'CHAPTER 7 • PAST BEFORE PAST',
    reality: 'Chronological precedence: action completed before another past event',
    summary: 'The past before the past: establishing chronological precedence between two completed past events.',
    formula: 'Subject + HAD + Past Participle (V3)',
    color: '#3b82f6',
    structures: {
      affirmative: 'Subject + HAD + V3 (e.g., "When the detective arrived, the suspect had already fled.")',
      negative: 'Subject + HAD NOT (hadn\'t) + V3 (e.g., "She hadn\'t eaten breakfast before the marathon.")',
      question: 'HAD + Subject + V3? (e.g., "Had they finished the report before the deadline?")',
    },
    signals: ['By the time', 'Before', 'After', 'Already', 'Until that moment'],
    example: 'By the time the international flight landed, the airport train service had already suspended operations.',
    contrast: 'Prevents chronological confusion. Event 1 (Earlier past event) takes Past Perfect; Event 2 (Later past event) takes Past Simple.',
    miniQuiz: {
      question: 'Complete: "When we arrived at the cinema, the movie ________."',
      options: ['had already started', 'already started has', 'was already start'],
      correct: 0,
      explanation: 'The movie started BEFORE our arrival, so the earlier event takes Past Perfect ("had started").'
    }
  },
  {
    id: 'presentPerfect',
    title: '8. Present Perfect Simple',
    level: 'B1',
    aspect: 'Perfect',
    time: 'Present',
    badge: 'CHAPTER 8 • PAST-PRESENT BRIDGE',
    reality: 'Bridge connecting past to present, life experiences, visible present results',
    summary: 'The bridge between past and present: life experiences, recent actions with visible results, unfinished time.',
    formula: 'Subject + HAVE / HAS + Past Participle (V3)',
    color: '#f59e0b',
    structures: {
      affirmative: 'Subject + HAVE / HAS + V3 (e.g., "I have visited Tokyo three times in my life.")',
      negative: 'Subject + HAVEN\'T / HASN\'T + V3 (e.g., "She hasn\'t received the official email yet.")',
      question: 'HAVE / HAS + Subject + V3? (e.g., "Have you ever seen the Northern Lights?")',
    },
    signals: ['Already', 'Yet', 'Just', 'Ever / Never', 'Since (2020)', 'For (5 years)', 'Recently', 'So far'],
    example: 'I have lost my apartment key (result: I cannot open the door right now at this present moment).',
    contrast: 'Never use with finished past dates ("in 2019" requires Past Simple). Present Perfect connects the past directly to the present state.',
    miniQuiz: {
      question: 'Select the sentence with correct Present Perfect usage for life experience:',
      options: ['I have already seen that documentary.', 'I have seen that documentary yesterday.', 'I have saw that documentary before.'],
      correct: 0,
      explanation: '"Yesterday" demands Past Simple, and "seen" is the correct V3 participle with "have already".'
    }
  },
  {
    id: 'futurePerfect',
    title: '9. Future Perfect Simple',
    level: 'B2',
    aspect: 'Perfect',
    time: 'Future',
    badge: 'CHAPTER 9 • COMPLETED BY FUTURE',
    reality: 'Actions completed and finished BEFORE a specified future benchmark deadline',
    summary: 'Emphasizes that an action will be completed prior to a definite future milestone.',
    formula: 'Subject + WILL HAVE + Past Participle (V3)',
    color: '#f97316',
    structures: {
      affirmative: 'Subject + WILL HAVE + V3 (e.g., "By 2030, scientists will have synthesized renewable fuel.")',
      negative: 'Subject + WON\'T HAVE + V3 (e.g., "They won\'t have finished the highway before winter.")',
      question: 'WILL + Subject + HAVE + V3? (e.g., "Will you have graduated by next June?")',
    },
    signals: ['By (next week / year)', 'By the time...', 'Before (future point)', 'In two months\' time'],
    example: 'By next December, the architectural firm will have completed construction of the new sustainable tower.',
    contrast: 'Future Simple (will complete) = completion happens. Future Perfect (will have completed) = looking backward from a future deadline to see the task already done.',
    miniQuiz: {
      question: 'Complete: "By the end of this month, our team ________ the entire project."',
      options: ['will have completed', 'will be completing', 'will complete have'],
      correct: 0,
      explanation: '"By the end of..." specifies a future completion deadline, requiring Future Perfect ("will have completed").'
    }
  },

  // ==========================================
  // PHASE 4: PERFECT CONTINUOUS ASPECT (Past -> Present -> Future)
  // ==========================================
  {
    id: 'pastPerfectCont',
    title: '10. Past Perfect Continuous',
    level: 'B2+',
    aspect: 'Perfect Continuous',
    time: 'Past',
    badge: 'CHAPTER 10 • DURATION IN PAST',
    reality: 'Continuous duration leading up to a specific past moment, visible past cause',
    summary: 'Focuses on how long an activity had been in progress before another event happened in the past, or past physical evidence.',
    formula: 'Subject + HAD BEEN + Verb-ING',
    color: '#e11d48',
    structures: {
      affirmative: 'Subject + HAD BEEN + Verb-ing (e.g., "He had been running for two hours before he felt dehydrated.")',
      negative: 'Subject + HADN\'T BEEN + Verb-ing (e.g., "They hadn\'t been practicing long when the match started.")',
      question: 'HAD + Subject + BEEN + Verb-ing? (e.g., "How long had you been waiting when the train arrived?")',
    },
    signals: ['For (duration) before...', 'Since morning when...', 'How long had you been...?', 'All day until'],
    example: 'The ground was wet because it had been raining heavily all morning before we walked out.',
    contrast: 'Past Perfect Simple focuses on the completed result ("had written 3 letters"). Past Perfect Continuous focuses on the duration and effort leading up to the past moment ("had been writing for 3 hours").',
    miniQuiz: {
      question: 'Select the correct sentence showing a past continuous cause:',
      options: ['She was exhausted because she had been working all night.', 'She was exhausted because she has been working all night.', 'She was exhausted because she had work all night.'],
      correct: 0,
      explanation: 'An ongoing activity causing a past state ("was exhausted") takes Past Perfect Continuous ("had been working").'
    }
  },
  {
    id: 'presentPerfectCont',
    title: '11. Present Perfect Continuous',
    level: 'B1+',
    aspect: 'Perfect Continuous',
    time: 'Present',
    badge: 'CHAPTER 11 • DURATION TO NOW',
    reality: 'Continuous duration continuing up to now, recent visible sensory evidence',
    summary: 'Emphasizes the duration, ongoing process, or immediate sensory evidence of recent continuous activity.',
    formula: 'Subject + HAVE / HAS + BEEN + Verb-ING',
    color: '#06b6d4',
    structures: {
      affirmative: 'Subject + HAVE / HAS BEEN + Verb-ing (e.g., "She has been coding this app for five hours.")',
      negative: 'Subject + HAVEN\'T / HASN\'T BEEN + Verb-ing (e.g., "We haven\'t been sleeping well lately.")',
      question: 'HAVE / HAS + Subject + BEEN + Verb-ing? (e.g., "How long have you been learning French?")',
    },
    signals: ['How long...?', 'For (duration)', 'Since (origin point)', 'All day / week', 'Lately'],
    example: 'The athlete is breathing heavily because she has been sprinting up the mountain trail.',
    contrast: 'Present Perfect Simple focuses on the COMPLETED RESULT ("I have painted the wall - it is done"). Present Perfect Continuous focuses on the ACTIVITY & DURATION ("I have been painting the wall - my shirt has wet paint").',
    miniQuiz: {
      question: 'Which question correctly asks about continuous duration starting in the past?',
      options: ['How long do you study English?', 'How long have you been studying English?', 'How long are you study English?'],
      correct: 1,
      explanation: 'Continuous duration spanning from a past start point up into the present moment uses Present Perfect Continuous.'
    }
  },
  {
    id: 'futurePerfectCont',
    title: '12. Future Perfect Continuous',
    level: 'C1',
    aspect: 'Perfect Continuous',
    time: 'Future',
    badge: 'CHAPTER 12 • FUTURE DURATION BENCHMARK',
    reality: 'Ongoing duration measured up to a benchmark moment in the future',
    summary: 'Emphasizes how long an ongoing action will have been happening when a future milestone is reached.',
    formula: 'Subject + WILL HAVE BEEN + Verb-ING',
    color: '#0284c7',
    structures: {
      affirmative: 'Subject + WILL HAVE BEEN + Verb-ing (e.g., "By next year, I will have been living in London for a decade.")',
      negative: 'Subject + WON\'T HAVE BEEN + Verb-ing (e.g., "They won\'t have been collaborating long enough to publish.")',
      question: 'WILL + Subject + HAVE BEEN + Verb-ing? (e.g., "How long will you have been teaching by retirement?")',
    },
    signals: ['By next (year)... for (10 years)', 'By the time you graduate... for...', 'When I turn 40, I will have been...'],
    example: 'By this October, the lead researcher will have been directing this laboratory for twenty consecutive years.',
    contrast: 'Combines Future projection + Perfect completion benchmark + Continuous ongoing duration. Measures milestone duration.',
    miniQuiz: {
      question: 'Complete: "By 2030, our professor ________ at this university for 25 years."',
      options: ['will have been teaching', 'will be taught have', 'will have teaching'],
      correct: 0,
      explanation: 'Measuring a continuous ongoing duration up to a future milestone ("by 2030... for 25 years") requires Future Perfect Continuous.'
    }
  },

  // ==========================================
  // CAPSTONE MASTER SYSTEMS
  // ==========================================
  {
    id: 'conditionals',
    title: '13. The Complete Conditionals System',
    level: 'B1 – C1',
    aspect: 'Capstone',
    time: 'Multi-Time',
    badge: 'CAPSTONE • HYPOTHETICAL WORLDS',
    reality: 'Cause & effect, hypothetical conditions, counterfactual scenarios (0, 1st, 2nd, 3rd, Mixed)',
    summary: 'Zero, First, Second, Third, and Mixed Conditionals: navigating facts, possibilities, and counterfactuals.',
    formula: 'If + condition clause, result clause',
    color: '#ef4444',
    structures: {
      affirmative: 'Zero: If + Pres., Pres. | 1st: If + Pres., will + V | 2nd: If + Past, would + V | 3rd: If + Had V3, would have V3',
      negative: 'Unless (If not) + affirmative verb',
      question: 'What would you do if you had the opportunity?',
    },
    signals: ['If', 'Unless', 'Provided that', 'As long as', 'Imagine if', 'In case'],
    example: 'If I had invested in renewable solar technology ten years ago, our company would be leading the clean energy market today.',
    contrast: 'Zero = 100% scientific certainty. First = Real future possibility. Second = Imaginary present/future. Third = Impossible past regret.',
    miniQuiz: {
      question: 'Select the Second Conditional (imaginary present scenario):',
      options: ['If it rains, we will cancel the picnic.', 'If I won a million dollars, I would build a hospital.', 'If you boil water, it evaporates.'],
      correct: 1,
      explanation: 'Second conditional uses "If + Past Simple, would + base verb" to discuss hypothetical/unreal situations.'
    }
  },
  {
    id: 'passiveVoice',
    title: '14. Passive Voice Architecture',
    level: 'B2 – C2',
    aspect: 'Capstone',
    time: 'Discourse',
    badge: 'CAPSTONE • DISCOURSE MASTERY',
    reality: 'Grammatical focus shifted to the action or receiver (BE + Past Participle)',
    summary: 'Agentless formal discourse, scientific reporting, and modals of deduction/regret across all English tenses.',
    formula: 'Object + Conjugated BE + Past Participle (V3)',
    color: '#64748b',
    structures: {
      affirmative: 'Passive: Object + Conjugated BE + V3 (e.g., "The ancient pyramids were built thousands of years ago.")',
      negative: 'Deduction: Subject + CAN\'T / MUST NOT HAVE + V3 (e.g., "He can\'t have stolen the jewels; he was with us.")',
      question: 'Could the experiment have been contaminated by airborne particles?',
    },
    signals: ['By (agent)', 'It is widely believed that', 'Must have been', 'Can\'t have been', 'Might have'],
    example: 'Groundbreaking quantum algorithms are being developed by international consortia across three continents.',
    contrast: 'Passive voice shifts focus from WHO did the action to the RESULT or OBJECT. Crucial in formal, journalistic, and scientific English.',
    miniQuiz: {
      question: 'Identify the passive voice sentence:',
      options: ['Fleming discovered penicillin in London.', 'Penicillin was discovered by Fleming in London.', 'Fleming was discovering penicillin.'],
      correct: 1,
      explanation: '"Was discovered" features the auxiliary BE + V3 past participle, placing grammatical focus on penicillin.'
    }
  }
];

export function getChapterData(id) {
  return TENSES_DATA.find((t) => t.id === id) || TENSES_DATA[0];
}
