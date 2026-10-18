// Comprehensive English Tenses Registry (All 14 Tenses)
// Complete Simplified, Clear, and Pedagogical Data Architecture for GrammarPulse
import { PRESENT_SIMPLE_DATA } from './presentSimpleData.js';

export const TENSES_METADATA = [
  {
    "id": "pastSimple",
    "chapterNumber": 1,
    "title": "Past Simple",
    "fullTitle": "1. Past Simple Tense",
    "level": "A2 CEFR",
    "aspect": "Simple",
    "time": "Past",
    "color": "#8b5cf6",
    "badge": "CHAPTER 1 \u2022 FINISHED PAST",
    "formula": "Subject + Verb-ED / V2 | didn't + base | Did...?",
    "summary": "Finished actions, historical facts, storytelling sequences, and past states."
  },
  {
    "id": "presentSimple",
    "chapterNumber": 2,
    "title": "Present Simple",
    "fullTitle": "2. Present Simple Tense",
    "level": "A1 \u2013 B1 CEFR",
    "aspect": "Simple",
    "time": "Present",
    "color": "#10b981",
    "badge": "CHAPTER 2 \u2022 TIMELESS REALITY",
    "formula": "Subject + Verb(s) | doesn't + base | Does...?",
    "summary": "Daily habits, universal facts, permanent situations, and timetables."
  },
  {
    "id": "futureSimple",
    "chapterNumber": 3,
    "title": "Future Simple",
    "fullTitle": "3. Future Simple Tense",
    "level": "A2 \u2013 B1 CEFR",
    "aspect": "Simple",
    "time": "Future",
    "color": "#14b8a6",
    "badge": "CHAPTER 3 \u2022 FUTURE REALITY",
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
    "badge": "CHAPTER 4 \u2022 PAST IN PROGRESS",
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
    "badge": "CHAPTER 5 \u2022 IN PROGRESS NOW",
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
    "badge": "CHAPTER 6 \u2022 FUTURE IN PROGRESS",
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
    "badge": "CHAPTER 7 \u2022 PAST BEFORE PAST",
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
    "badge": "CHAPTER 8 \u2022 PAST-PRESENT BRIDGE",
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
    "badge": "CHAPTER 9 \u2022 COMPLETED BY FUTURE",
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
    "badge": "CHAPTER 10 \u2022 DURATION IN PAST",
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
    "badge": "CHAPTER 11 \u2022 DURATION TO NOW",
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
    "badge": "CHAPTER 12 \u2022 CONTINUOUS HORIZONS",
    "formula": "Subject + WILL HAVE BEEN + Verb-ING",
    "summary": "Focuses on how long an ongoing activity will have lasted up to a future milestone."
  },
  {
    "id": "conditionals",
    "chapterNumber": 13,
    "title": "Conditionals System",
    "fullTitle": "13. Complete Conditionals System",
    "level": "B1 \u2013 C1 CEFR",
    "aspect": "Capstone",
    "time": "Multi-Time",
    "color": "#ef4444",
    "badge": "CAPSTONE \u2022 HYPOTHETICAL WORLDS",
    "formula": "If + condition clause, result clause (0, 1st, 2nd, 3rd, Mixed)",
    "summary": "Zero, First, Second, Third, and Mixed Conditionals: facts, real plans, dreams, and regrets."
  },
  {
    "id": "passiveVoice",
    "chapterNumber": 14,
    "title": "Passive Voice Architecture",
    "fullTitle": "14. Passive Voice Architecture",
    "level": "B1 \u2013 C2 CEFR",
    "aspect": "Capstone",
    "time": "Discourse",
    "color": "#64748b",
    "badge": "CAPSTONE \u2022 DISCOURSE MASTERY",
    "formula": "Object + Conjugated BE + Past Participle (V3)",
    "summary": "Focusing on the receiver of the action, unknown doers, polite diplomacy, and public signs."
  }
];

export const OTHER_TENSES_DATA = {
  "pastSimple": {
    "meta": {
      "id": "pastSimple",
      "chapterNumber": 1,
      "title": "Past Simple",
      "fullTitle": "1. Past Simple Tense",
      "level": "A2 CEFR",
      "aspect": "Simple",
      "time": "Past",
      "color": "#8b5cf6",
      "badge": "CHAPTER 1 \u2022 FINISHED PAST",
      "formula": "Subject + Verb-ED / V2 | didn't + base | Did...?",
      "summary": "Use this for actions and situations that finished completely in the past."
    },
    "overview": {
      "definition": "The Past Simple is used for actions, events, and feelings that happened and finished completely in the past.",
      "coreConcept": "The time is over and done (yesterday, last week, in 2015). There is no connection to right now.",
      "timelineInsight": "Imagine a solid point or block in the past, completely behind the present moment.",
      "signalWords": [
        {
          "word": "Yesterday",
          "example": "I saw a great movie yesterday."
        },
        {
          "word": "Last night / week / year",
          "example": "We visited our grandparents last week."
        },
        {
          "word": "Two hours ago / 3 days ago",
          "example": "The train left ten minutes ago."
        },
        {
          "word": "In 2015 / In 1999",
          "example": "They moved to Canada in 2018."
        },
        {
          "word": "When I was young",
          "example": "I played guitar when I was a teenager."
        },
        {
          "word": "Just now / That day",
          "example": "My package arrived just now."
        }
      ],
      "pillars": [
        {
          "icon": "Clock3",
          "label": "Finished Time",
          "desc": "The time period is 100% over (yesterday, in 2015).",
          "color": "#8b5cf6",
          "bg": "rgba(139, 92, 246, 0.08)",
          "border": "rgba(139, 92, 246, 0.25)"
        },
        {
          "icon": "Zap",
          "label": "Completed Event",
          "desc": "A single action that finished \u2014 'She dropped her phone.'",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        },
        {
          "icon": "BookOpen",
          "label": "Storytelling Steps",
          "desc": "Telling a story in order ('I woke up, ate breakfast, and left').",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        },
        {
          "icon": "Globe",
          "label": "Past Habits & States",
          "desc": "Things that were true in the past but not anymore.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "finished_time",
        "title": "1. Actions Finished at a Specific Past Time",
        "tag": "Finished Time",
        "icon": "Clock",
        "summary": "Actions that happened and concluded at a specific, known point in the past.",
        "explanation": "Whenever you say WHEN something happened in the past (yesterday, last week, in 2012), use the Past Simple.",
        "examples": [
          {
            "sentence": "I called my mother yesterday afternoon.",
            "translation": "Family phone call at a specific time.",
            "focus": "called"
          },
          {
            "sentence": "We bought our first car three years ago.",
            "translation": "Completed purchase in the past.",
            "focus": "bought"
          },
          {
            "sentence": "Did you get my message this morning?",
            "translation": "Asking about something earlier today.",
            "focus": "Did ... get"
          }
        ],
        "teacherNote": "Pro tip: If you see words like 'yesterday', 'ago', or 'last week', always use Past Simple!"
      },
      {
        "id": "story_sequence",
        "title": "2. A Series of Events in a Story",
        "tag": "Story Steps",
        "icon": "BookOpen",
        "summary": "Listing multiple actions that happened one after another in order.",
        "explanation": "When you tell a story about your day or a past event, use Past Simple for each action to move the story forward.",
        "examples": [
          {
            "sentence": "He opened the door, turned on the light, and sat down.",
            "translation": "Sequence of 3 quick actions.",
            "focus": "opened / turned / sat"
          },
          {
            "sentence": "I woke up at 7:00 AM, brushed my teeth, and made coffee.",
            "translation": "Morning routine in the past.",
            "focus": "woke up / brushed / made"
          },
          {
            "sentence": "She checked her watch and hurried to the meeting.",
            "translation": "Two connected actions in a story.",
            "focus": "checked / hurried"
          }
        ],
        "teacherNote": "Notice: Each verb stays in its simple past form without needing -ing."
      },
      {
        "id": "past_habits",
        "title": "3. Past Habits You Don't Do Anymore",
        "tag": "Old Habits",
        "icon": "Zap",
        "summary": "Things you used to do regularly in the past, but not anymore.",
        "explanation": "Use Past Simple with frequency words (always, every day) to describe old habits from your childhood or previous years.",
        "examples": [
          {
            "sentence": "When I was a kid, I played soccer every Saturday.",
            "translation": "Childhood sports routine.",
            "focus": "played"
          },
          {
            "sentence": "My grandfather always walked to work in the summer.",
            "translation": "Regular past lifestyle habit.",
            "focus": "walked"
          },
          {
            "sentence": "We ate dinner together every single evening.",
            "translation": "Past family routine.",
            "focus": "ate"
          }
        ],
        "teacherNote": "You can also say 'used to play', but Past Simple works just as naturally!"
      },
      {
        "id": "history_facts",
        "title": "4. Historical Facts & Inventions",
        "tag": "History",
        "icon": "Globe",
        "summary": "Talking about historical events, discoveries, and famous dates.",
        "explanation": "History is completely finished, so all historical moments, books, and scientific discoveries use Past Simple.",
        "examples": [
          {
            "sentence": "Alexander Fleming discovered penicillin in 1928.",
            "translation": "Famous medical discovery.",
            "focus": "discovered"
          },
          {
            "sentence": "Neil Armstrong walked on the moon in 1969.",
            "translation": "Historic space exploration event.",
            "focus": "walked"
          },
          {
            "sentence": "The ancient Romans built incredible roads and bridges.",
            "translation": "Civilization achievements in history.",
            "focus": "built"
          }
        ],
        "teacherNote": "Remember: Even if a discovery affects us today, the date ('in 1928') forces the verb into Past Simple."
      },
      {
        "id": "past_states",
        "title": "5. Past Feelings & Long-Term Situations",
        "tag": "Past States",
        "icon": "Heart",
        "summary": "Situations or feelings that lasted for a period of time in the past.",
        "explanation": "Use Past Simple for states, feelings, or jobs that continued for a while but are now completely over.",
        "examples": [
          {
            "sentence": "She lived in Madrid for three years before moving here.",
            "translation": "Past living situation (now over).",
            "focus": "lived"
          },
          {
            "sentence": "I felt nervous during the job interview yesterday.",
            "translation": "A past emotional state.",
            "focus": "felt"
          },
          {
            "sentence": "They owned a small bakery by the river.",
            "translation": "Past business ownership.",
            "focus": "owned"
          }
        ],
        "teacherNote": "Even if an action lasted 10 years, if it's over now, use Past Simple with 'for' ('I lived in Italy for 5 years')."
      },
      {
        "id": "when_questions",
        "title": "6. Asking 'When' and 'What Time'",
        "tag": "Time Inquiries",
        "icon": "Calendar",
        "summary": "Asking questions about the exact moment something happened.",
        "explanation": "Whenever you start a question with 'When' or 'What time' about the past, English always uses Past Simple with 'Did'.",
        "examples": [
          {
            "sentence": "When did you arrive at the hotel?",
            "translation": "Asking about arrival time.",
            "focus": "When did ... arrive"
          },
          {
            "sentence": "What time did the train leave?",
            "translation": "Asking about departure time.",
            "focus": "What time did ... leave"
          },
          {
            "sentence": "Where did you buy that jacket?",
            "translation": "Inquiring about past purchase location.",
            "focus": "Where did ... buy"
          }
        ],
        "teacherNote": "Never say 'When have you arrived?' \u2014 always say 'When did you arrive?'!"
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + Verb-ED (Regular) or V2 (Irregular)",
        "explanation": "To make a positive sentence, add -ed to regular verbs, or use the 2nd form (V2) for irregular verbs.",
        "table": [
          {
            "subject": "I / You / We / They",
            "auxiliary": "\u2014",
            "verb": "worked / went",
            "complement": "yesterday"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "\u2014",
            "verb": "worked / went",
            "complement": "yesterday"
          }
        ],
        "examples": [
          {
            "en": "I played tennis yesterday.",
            "context": "Regular verb with -ed"
          },
          {
            "en": "She went to the market.",
            "context": "Irregular verb (go \u2192 went)"
          }
        ]
      },
      "negative": {
        "formula": "Subject + didn't + Base Verb (infinitive)",
        "explanation": "To make a negative sentence, put 'didn't' before the verb. Keep the verb in its simple base form!",
        "table": [
          {
            "subject": "I / You / We / They",
            "auxiliary": "didn't",
            "verb": "work / go",
            "complement": "yesterday"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "didn't",
            "verb": "work / go",
            "complement": "yesterday"
          }
        ],
        "examples": [
          {
            "en": "I didn't watch TV last night.",
            "context": "Negative with didn't + base verb"
          },
          {
            "en": "He didn't come to the party.",
            "context": "Notice: 'didn't come', NOT 'didn't came'"
          }
        ]
      },
      "interrogative": {
        "formula": "Did + Subject + Base Verb...?",
        "explanation": "To ask a question, start with 'Did', then the person, then the base verb.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Did + Subject + Base Verb...?",
            "examples": [
              {
                "q": "Did you enjoy the concert?",
                "a": "Yes, I did! / No, I didn't."
              },
              {
                "q": "Did she finish her homework?",
                "a": "Yes, she did."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word (Where / What / Why) + did + Subject + Base Verb...?",
            "examples": [
              {
                "q": "Where did you go on vacation?",
                "a": "We went to Greece."
              },
              {
                "q": "Why did he leave so early?",
                "a": "Because he was tired."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Did you see my keys?",
            "context": "Yes/No question with Did"
          },
          {
            "en": "What did you buy at the mall?",
            "context": "Wh- question with Did"
          }
        ]
      },
      "verbToBe": {
        "formula": "Subject + was / were",
        "explanation": "The verb 'to be' is special in the past: use 'was' for singular, and 'were' for plural. It never uses 'did'!",
        "table": [
          {
            "subject": "I / He / She / It",
            "form": "was",
            "negative": "wasn't (was not)",
            "example": "I was happy yesterday."
          },
          {
            "subject": "You / We / They",
            "form": "were",
            "negative": "weren't (were not)",
            "example": "They were at home."
          }
        ],
        "examples": [
          {
            "en": "She was tired last night.",
            "context": "Singular subject with was"
          },
          {
            "en": "Were you at the meeting yesterday?",
            "context": "Question with Were (no did!)"
          }
        ]
      },
      "verbHave": {
        "formula": "Subject + had (positive) | didn't have (negative)",
        "explanation": "In the past simple, 'have' becomes 'had'. In negatives, say 'didn't have'.",
        "table": [
          {
            "subject": "All Subjects (I, You, He, She, We, They)",
            "form": "had",
            "negative": "didn't have",
            "example": "We had a great time."
          }
        ],
        "examples": [
          {
            "en": "I had a headache yesterday.",
            "context": "Positive with had"
          },
          {
            "en": "Did you have lunch?",
            "context": "Question with Did + have"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Spelling Rules for Regular Past Verbs (-ed)",
      "subtitle": "Easy rules for adding -ed to English verbs.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Normal Verbs",
          "condition": "Most verbs",
          "ruleText": "Just add -ed to the end of the verb.",
          "examples": [
            "play \u2192 played",
            "watch \u2192 watched",
            "clean \u2192 cleaned"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Verbs Ending in -e",
          "condition": "Ends in -e",
          "ruleText": "Just add -d (no need for a double e!).",
          "examples": [
            "live \u2192 lived",
            "like \u2192 liked",
            "smile \u2192 smiled"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Consonant + Y",
          "condition": "Consonant before 'y'",
          "ruleText": "Change the 'y' to 'i' and add -ed.",
          "examples": [
            "study \u2192 studied",
            "try \u2192 tried",
            "carry \u2192 carried"
          ]
        },
        {
          "ruleNumber": 4,
          "title": "Vowel + Y",
          "condition": "Vowel (a, e, o) before 'y'",
          "ruleText": "Do NOT change the 'y'! Just add -ed.",
          "examples": [
            "play \u2192 played",
            "enjoy \u2192 enjoyed",
            "stay \u2192 stayed"
          ]
        },
        {
          "ruleNumber": 5,
          "title": "Short Vowel + Single Consonant",
          "condition": "1 short vowel + 1 consonant",
          "ruleText": "Double the last consonant before adding -ed.",
          "examples": [
            "stop \u2192 stopped",
            "plan \u2192 planned",
            "fit \u2192 fitted"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "-ed sounds",
          "sound": "/t/, /d/, or /\u026ad/",
          "tip": "Only say an extra syllable (/\u026ad/) when the verb ends in a 't' or 'd' sound, like 'wanted' or 'needed'."
        },
        {
          "ending": "Silent -e",
          "sound": "Smooth vowel",
          "tip": "In words like 'lived' or 'closed', the 'e' is completely silent."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Always",
        "percentage": 100,
        "color": "#10b981",
        "example": "When I was young, I always walked to school."
      },
      {
        "adverb": "Usually",
        "percentage": 80,
        "color": "#06b6d4",
        "example": "We usually ate dinner at 7:00 PM."
      },
      {
        "adverb": "Often",
        "percentage": 70,
        "color": "#3b82f6",
        "example": "He often visited his grandmother on Sundays."
      },
      {
        "adverb": "Sometimes",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "They sometimes stayed up late on weekends."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "She rarely complained about anything."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#ef4444",
        "example": "I never drank coffee until I went to college."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BEFORE the main action verb",
        "formula": "Subject + [ADVERB] + Main Verb",
        "explanation": "Frequency adverbs sit directly in front of normal action verbs.",
        "examples": [
          {
            "bad": "He finished always his dinner.",
            "good": "He always finished his dinner."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: Put it AFTER the verb 'to be' (was / were)",
        "formula": "Subject + WAS / WERE + [ADVERB]",
        "explanation": "When using was or were, place the adverb right after it.",
        "examples": [
          {
            "bad": "She always was cheerful.",
            "good": "She was always cheerful."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: Put it AFTER 'didn't'",
        "formula": "Subject + didn't + [ADVERB] + Verb",
        "explanation": "In negative sentences, the adverb sits between didn't and the verb.",
        "examples": [
          {
            "bad": "I always didn't like broccoli.",
            "good": "I didn't always like broccoli."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Saying 'Did you went?' (Double Past Mistake)",
        "bad": "Did you went to the store yesterday?",
        "good": "Did you go to the store yesterday?",
        "explanation": "The word 'did' already has the past tense! You do not need past tense on the second verb. Keep it simple: Did you go? Did you see?"
      },
      {
        "title": "2. Saying 'I didn't knew'",
        "bad": "I didn't knew the answer.",
        "good": "I didn't know the answer.",
        "explanation": "Just like with questions, 'didn't' already carries the past tense. Always use the base verb after didn't ('didn't know', 'didn't have')."
      },
      {
        "title": "3. Using 'Did' with Was/Were",
        "bad": "Did you were at home yesterday?",
        "good": "Were you at home yesterday?",
        "explanation": "The verb 'to be' (was/were) is strong and never needs 'did'. Just swap the words: Were you? Was he?"
      },
      {
        "title": "4. Using Present Perfect with a Specific Past Date",
        "bad": "I have seen that movie yesterday.",
        "good": "I saw that movie yesterday.",
        "explanation": "When you mention a finished time like 'yesterday' or 'in 2018', you must use Past Simple ('saw'), never Present Perfect!"
      },
      {
        "title": "5. Forgetting to change irregular verbs",
        "bad": "She buyed a new winter coat.",
        "good": "She bought a new winter coat.",
        "explanation": "Irregular verbs don't use -ed. They have special forms you memorize: buy \u2192 bought, go \u2192 went, see \u2192 saw."
      },
      {
        "title": "6. Misspelling Consonant + Y",
        "bad": "He studyed until midnight.",
        "good": "He studied until midnight.",
        "explanation": "When a verb ends in a consonant + y (like study or try), change the 'y' to 'i' before adding -ed (studied, tried)."
      }
    ],
    "resumeSummary": {
      "title": "Past Simple Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Past Simple on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + Verb-ED / V2",
          "exampleI": "I worked yesterday.",
          "exampleHe": "He went home early.",
          "memoryAnchor": "Use -ed or V2 irregular form."
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + didn't + base verb",
          "exampleI": "I didn't work.",
          "exampleHe": "He didn't go.",
          "memoryAnchor": "didn't + bare infinitive!"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Did + Subject + base verb?",
          "exampleI": "Did you work?",
          "exampleHe": "Did he go?",
          "memoryAnchor": "Start with Did!"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + did + Subject + base?",
          "exampleI": "Where did you work?",
          "exampleHe": "Why did he go?",
          "memoryAnchor": "Where / Why + did + base."
        }
      ],
      "spellingPills": [
        {
          "ending": "Most verbs",
          "change": "+ed",
          "example": "play \u2192 played"
        },
        {
          "ending": "Ends in -e",
          "change": "+d",
          "example": "live \u2192 lived"
        },
        {
          "ending": "Consonant + y",
          "change": "y \u2192 ied",
          "example": "study \u2192 studied"
        },
        {
          "ending": "Short CVC",
          "change": "Double letter",
          "example": "stop \u2192 stopped"
        }
      ],
      "adverbGoldenFormula": "Subject + [Finished Past Time Word] + Verb-ED / V2"
    },
    "exercises": {
      "quiz": [
        {
          "question": "Which sentence correctly talks about yesterday?",
          "options": [
            "I have visited London yesterday.",
            "I visited London yesterday.",
            "I am visiting London yesterday.",
            "I visit London yesterday."
          ],
          "correct": 1,
          "explanation": "'Yesterday' is finished past time, so use the Past Simple 'visited'."
        },
        {
          "question": "What is the correct negative form of 'She went to school'?",
          "options": [
            "She didn't went to school.",
            "She didn't go to school.",
            "She wasn't go to school.",
            "She not went to school."
          ],
          "correct": 1,
          "explanation": "After 'didn't', the verb goes back to its base form 'go'."
        },
        {
          "question": "Choose the correct question:",
          "options": [
            "Did you arrived on time?",
            "Did you arrive on time?",
            "Were you arrive on time?",
            "Have you arrived yesterday?"
          ],
          "correct": 1,
          "explanation": "Use 'Did' + subject + base verb 'arrive'."
        },
        {
          "question": "What is the past simple of the verb 'buy'?",
          "options": [
            "buyed",
            "bought",
            "buys",
            "boughten"
          ],
          "correct": 1,
          "explanation": "'Buy' is an irregular verb: buy \u2192 bought."
        },
        {
          "question": "Complete the sentence: 'Where ________ you last night?'",
          "options": [
            "did",
            "were",
            "was",
            "are"
          ],
          "correct": 1,
          "explanation": "With 'you', use the past form 'were' (Where were you?)."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "Alexander Fleming ________ (discover) penicillin in 1928.",
          "correctAnswer": "discovered",
          "hint": "Just add -ed to discover.",
          "explanation": "Regular verb in the past takes -ed: discovered."
        },
        {
          "id": 2,
          "sentence": "I ________ (see) my old teacher at the grocery store yesterday.",
          "correctAnswer": "saw",
          "hint": "Irregular past of see.",
          "explanation": "The past form of see is saw."
        },
        {
          "id": 3,
          "sentence": "We didn't ________ (have) enough time to visit the museum.",
          "correctAnswer": "have",
          "hint": "After didn't, use the base verb.",
          "explanation": "After 'didn't', keep the base verb have."
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "He",
            "called",
            "me",
            "yesterday"
          ],
          "correctOrder": [
            "He",
            "called",
            "me",
            "yesterday"
          ],
          "targetSentence": "He called me yesterday.",
          "meaning": "Completed action at a finished time."
        },
        {
          "id": 2,
          "tokens": [
            "Did",
            "you",
            "enjoy",
            "the",
            "party?"
          ],
          "correctOrder": [
            "Did",
            "you",
            "enjoy",
            "the",
            "party?"
          ],
          "targetSentence": "Did you enjoy the party?",
          "meaning": "Past simple question."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "Did she went to the library yesterday?",
          "options": [
            "Did she went to the library yesterday?",
            "Did she go to the library yesterday?",
            "Does she went to the library yesterday?"
          ],
          "correctIndex": 1,
          "explanation": "'Did' already takes the past tense, so 'went' must be the base verb 'go'."
        },
        {
          "id": 2,
          "flawedSentence": "I didn't saw him at the conference.",
          "options": [
            "I didn't saw him at the conference.",
            "I didn't see him at the conference.",
            "I not saw him at the conference."
          ],
          "correctIndex": 1,
          "explanation": "After 'didn't', use the base verb 'see'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "always",
          "targetSentence": "My grandfather always walked to work.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "My grandfather",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "walked",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "to work.",
              "isSlot": false
            }
          ],
          "correctSlot": 1,
          "explanation": "Put the adverb directly BEFORE the action verb (walked)."
        },
        {
          "id": 2,
          "adverb": "often",
          "targetSentence": "We were often late for class.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "We",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "were",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "late for class.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Put the adverb directly AFTER were."
        }
      ],
      "masteryExam": [
        {
          "question": "Which sentence correctly expresses a finished past action with a closed time anchor?",
          "options": [
            "I have seen that movie yesterday.",
            "I saw that movie yesterday.",
            "I am seeing that movie yesterday.",
            "I see that movie yesterday."
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'Yesterday' requires the Past Simple 'saw'."
        },
        {
          "question": "What is the correct negative form of 'She went home early'?",
          "options": [
            "She didn't went home early.",
            "She didn't go home early.",
            "She wasn't go home early.",
            "She not went home early."
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Negative Past Simple uses didn't + base infinitive 'go'."
        },
        {
          "question": "Choose the correct question form:",
          "options": [
            "Did they arrived on time?",
            "Were they arrive on time?",
            "Did they arrive on time?",
            "Have they arrived yesterday?"
          ],
          "correct": 2,
          "level": "A2",
          "explanation": "'Did' + subject + base verb 'arrive'."
        },
        {
          "question": "How is the past simple of the verb 'marry' spelled?",
          "options": [
            "marryed",
            "married",
            "marrid",
            "marriled"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Consonant + y changes to -ied."
        },
        {
          "question": "Select the correct past simple form of the irregular verb 'catch':",
          "options": [
            "catched",
            "caught",
            "cot",
            "cought"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'Catch' is irregular: catch \u2192 caught."
        },
        {
          "question": "Complete: 'Why ________ you ________ to the doctor when you felt ill?'",
          "options": [
            "did / go",
            "did / went",
            "were / go",
            "have / went"
          ],
          "correct": 0,
          "level": "B1",
          "explanation": "Wh- questions use: Wh- + did + subject + base verb."
        },
        {
          "question": "Which time expression CANNOT be used with Past Simple?",
          "options": [
            "Three days ago",
            "Last winter",
            "Since 2015",
            "In the 19th century"
          ],
          "correct": 2,
          "level": "B1",
          "explanation": "'Since 2015' connects to now and requires Present Perfect."
        },
        {
          "question": "The past form of 'be' for plural subjects (We/They) is:",
          "options": [
            "was",
            "were",
            "did be",
            "been"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'We' and 'They' take 'were'."
        },
        {
          "question": "Identify the sentence with an error:",
          "options": [
            "He stopped the car abruptly.",
            "She planed her vacation carefully.",
            "They cried with joy.",
            "We preferred the first option."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'Plan' doubles the consonant: 'planned', not 'planed'."
        },
        {
          "question": "When you list multiple actions in a story in order, which tense do you use?",
          "options": [
            "Present Continuous",
            "Past Simple",
            "Future Simple",
            "Past Perfect Continuous"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Past Simple moves a story forward step by step."
        }
      ]
    }
  },
  "futureSimple": {
    "meta": {
      "id": "futureSimple",
      "chapterNumber": 3,
      "title": "Future Simple",
      "fullTitle": "3. Future Simple Tense",
      "level": "A2 \u2013 B1 CEFR",
      "aspect": "Simple",
      "time": "Future",
      "color": "#14b8a6",
      "badge": "CHAPTER 3 \u2022 FUTURE REALITY",
      "formula": "Subject + WILL + Base Verb | won't + base | Will...?",
      "summary": "Use this for instant decisions, predictions, promises, offers, and future facts."
    },
    "overview": {
      "definition": "The Future Simple with 'will' is used when we decide something right now, make predictions based on opinion, or promise to do something.",
      "coreConcept": "You did not make a plan before; you are choosing right now at this exact moment, or guessing what will happen tomorrow.",
      "timelineInsight": "Looking forward from NOW into the future, picturing an event that has not happened yet.",
      "signalWords": [
        {
          "word": "Tomorrow",
          "example": "I will call you tomorrow morning."
        },
        {
          "word": "Next week / month / year",
          "example": "They will travel to Spain next month."
        },
        {
          "word": "In the future / Soon",
          "example": "Electric planes will fly soon."
        },
        {
          "word": "I think / I believe",
          "example": "I think it will be sunny tomorrow."
        },
        {
          "word": "Probably / Maybe",
          "example": "She will probably pass the test."
        },
        {
          "word": "I promise",
          "example": "I will never forget your help."
        }
      ],
      "pillars": [
        {
          "icon": "Zap",
          "label": "Instant Decisions",
          "desc": "Deciding something right now at the moment of speaking.",
          "color": "#14b8a6",
          "bg": "rgba(20, 184, 166, 0.08)",
          "border": "rgba(20, 184, 166, 0.25)"
        },
        {
          "icon": "Sparkles",
          "label": "Predictions",
          "desc": "Guessing what will happen based on what you think.",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        },
        {
          "icon": "Heart",
          "label": "Promises & Offers",
          "desc": "Promising to do something or volunteering to help.",
          "color": "#ec4899",
          "bg": "rgba(236, 72, 153, 0.08)",
          "border": "rgba(236, 72, 153, 0.25)"
        },
        {
          "icon": "Calendar",
          "label": "Future Facts",
          "desc": "Events in the future that are certain and cannot be changed.",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "spontaneous_decisions",
        "title": "1. Instant Decisions Made Right Now",
        "tag": "Instant Choice",
        "icon": "Zap",
        "summary": "Making a quick decision at the very moment you are speaking, without prior planning.",
        "explanation": "Whenever something happens unexpectedly and you decide to take action on the spot, use 'will' (usually contracted as 'I'll').",
        "examples": [
          {
            "sentence": "The phone is ringing. I'll answer it!",
            "translation": "Spontaneous reaction to a sound.",
            "focus": "I'll answer"
          },
          {
            "sentence": "It is cold in here. I will close the window.",
            "translation": "Immediate decision based on room temperature.",
            "focus": "will close"
          },
          {
            "sentence": "We are out of milk. I'll run to the store.",
            "translation": "Deciding right now to go buy milk.",
            "focus": "I'll run"
          }
        ],
        "teacherNote": "Never use 'going to' here! If you decide right now, always say 'I will / I'll'."
      },
      {
        "id": "predictions_opinion",
        "title": "2. Predictions Based on Thoughts & Beliefs",
        "tag": "Predictions",
        "icon": "Sparkles",
        "summary": "Saying what you think or guess will happen in the future.",
        "explanation": "When you predict the future based on your opinion or feelings (with 'I think', 'I believe', 'probably'), use 'will'.",
        "examples": [
          {
            "sentence": "I think our team will win the championship.",
            "translation": "Personal opinion prediction.",
            "focus": "will win"
          },
          {
            "sentence": "Humans will land on Mars within the next twenty years.",
            "translation": "Scientific forecast based on belief.",
            "focus": "will land"
          },
          {
            "sentence": "Don't worry, you will do great on the test tomorrow.",
            "translation": "Encouraging prediction for a friend.",
            "focus": "will do"
          }
        ],
        "teacherNote": "If you have physical proof right now (like dark clouds), use 'going to'. If it's just in your head, use 'will'!"
      },
      {
        "id": "promises_commitments",
        "title": "3. Promises & Personal Commitments",
        "tag": "Promises",
        "icon": "Heart",
        "summary": "Making a solemn promise to someone that you will or won't do something.",
        "explanation": "English speakers always use 'will' or 'won't' to make promises. It shows strong personal loyalty.",
        "examples": [
          {
            "sentence": "I promise I will keep your secret safe.",
            "translation": "Direct promise with the word promise.",
            "focus": "will keep"
          },
          {
            "sentence": "I will always be there for you when you need help.",
            "translation": "Long-term friendship commitment.",
            "focus": "will always be"
          },
          {
            "sentence": "I won't let you down, I swear.",
            "translation": "Negative promise with won't.",
            "focus": "won't let"
          }
        ],
        "teacherNote": "The negative of 'will' is 'won't' (will not)."
      },
      {
        "id": "offers_requests",
        "title": "4. Volunteering to Help (Offers & Requests)",
        "tag": "Offers",
        "icon": "HandHeart",
        "summary": "Offering your help to someone or politely asking them to do something.",
        "explanation": "When someone is carrying something heavy or struggling, say 'I'll help you!' to offer assistance.",
        "examples": [
          {
            "sentence": "That suitcase looks heavy. I'll carry it for you.",
            "translation": "Friendly offer of physical assistance.",
            "focus": "I'll carry"
          },
          {
            "sentence": "Will you please pass the salt?",
            "translation": "Polite request at the dinner table.",
            "focus": "Will you ... pass"
          },
          {
            "sentence": "I'll drive you to the airport tomorrow morning.",
            "translation": "Volunteering to provide a ride.",
            "focus": "I'll drive"
          }
        ],
        "teacherNote": "You can also use 'Shall I...?' in British English when offering help ('Shall I open the door?')."
      },
      {
        "id": "warnings_threats",
        "title": "5. Warnings & Consequences",
        "tag": "Warnings",
        "icon": "AlertTriangle",
        "summary": "Telling someone what bad thing will happen if they don't be careful.",
        "explanation": "Use 'will' to state the direct consequence of an action: 'Do this, or that will happen!'",
        "examples": [
          {
            "sentence": "Be careful with that glass or you will drop it!",
            "translation": "Immediate safety warning.",
            "focus": "will drop"
          },
          {
            "sentence": "Eat your vegetables or you won't get any dessert.",
            "translation": "Parental rule with consequence.",
            "focus": "won't get"
          },
          {
            "sentence": "Hurry up, or we will miss the last train!",
            "translation": "Warning about running late.",
            "focus": "will miss"
          }
        ],
        "teacherNote": "This connects closely with the First Conditional ('If you hurry, you will catch the train')."
      },
      {
        "id": "future_facts",
        "title": "6. Inevitable Future Facts",
        "tag": "Future Facts",
        "icon": "Calendar",
        "summary": "Events that will happen automatically because of the calendar or nature.",
        "explanation": "When a future fact is 100% certain and outside anyone's control, use 'will'.",
        "examples": [
          {
            "sentence": "The sun will rise at 6:15 AM tomorrow.",
            "translation": "Astronomical natural certainty.",
            "focus": "will rise"
          },
          {
            "sentence": "My grandmother will turn 85 next Tuesday.",
            "translation": "Birthday milestone determined by calendar.",
            "focus": "will turn"
          },
          {
            "sentence": "Next year will be a leap year.",
            "translation": "Calendar fact.",
            "focus": "will be"
          }
        ],
        "teacherNote": "Because nobody can stop your birthday from coming, 'will' is the perfect natural choice."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + WILL + Base Verb",
        "explanation": "To make a positive sentence, just put 'will' (or 'll) before any base verb. 'Will' is the same for all persons (I, you, he, she, they)!",
        "table": [
          {
            "subject": "I / You / We / They",
            "auxiliary": "will ('ll)",
            "verb": "help / go",
            "complement": "tomorrow"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "will ('ll)",
            "verb": "help / go",
            "complement": "tomorrow"
          }
        ],
        "examples": [
          {
            "en": "I will call you later tonight.",
            "context": "Positive future statement with will"
          },
          {
            "en": "She'll come to the party.",
            "context": "Contraction: She will \u2192 She'll"
          }
        ]
      },
      "negative": {
        "formula": "Subject + WON'T (will not) + Base Verb",
        "explanation": "To make a negative sentence, put 'won't' before the base verb.",
        "table": [
          {
            "subject": "I / You / We / They",
            "auxiliary": "won't",
            "verb": "forget / leave",
            "complement": "your birthday"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "won't",
            "verb": "forget / leave",
            "complement": "your birthday"
          }
        ],
        "examples": [
          {
            "en": "I won't tell anyone your secret.",
            "context": "Negative promise with won't"
          },
          {
            "en": "It won't take very long.",
            "context": "Prediction about time"
          }
        ]
      },
      "interrogative": {
        "formula": "Will + Subject + Base Verb...?",
        "explanation": "To ask a question, start with 'Will', then the person, then the base verb.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Will + Subject + Base Verb...?",
            "examples": [
              {
                "q": "Will you help me with this box?",
                "a": "Yes, I will! / Of course."
              },
              {
                "q": "Will it rain tomorrow?",
                "a": "No, it won't."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + will + Subject + Base Verb...?",
            "examples": [
              {
                "q": "What will you do after university?",
                "a": "I will travel for a year."
              },
              {
                "q": "When will the meeting start?",
                "a": "It will start at 2:00 PM."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Will you come to dinner tomorrow?",
            "context": "Invitation with Will"
          },
          {
            "en": "Where will they stay in London?",
            "context": "Wh- question with Will"
          }
        ]
      },
      "verbToBe": {
        "formula": "Subject + will be + adjective / noun",
        "explanation": "With the verb 'to be', simply say 'will be' for everyone.",
        "table": [
          {
            "subject": "All Subjects",
            "form": "will be",
            "negative": "won't be",
            "example": "She will be very happy."
          }
        ],
        "examples": [
          {
            "en": "I will be 25 years old next week.",
            "context": "Age milestone"
          },
          {
            "en": "We won't be late, don't worry.",
            "context": "Reassurance with won't be"
          }
        ]
      },
      "verbHave": {
        "formula": "Subject + will have + object",
        "explanation": "To talk about possessing something in the future, say 'will have'.",
        "table": [
          {
            "subject": "All Subjects",
            "form": "will have",
            "negative": "won't have",
            "example": "You will have plenty of time."
          }
        ],
        "examples": [
          {
            "en": "We will have a test next Friday.",
            "context": "Scheduled future event"
          },
          {
            "en": "He won't have any problems.",
            "context": "Confidence in a friend"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Short Forms & Contractions with 'Will'",
      "subtitle": "How native speakers write and pronounce 'will' quickly.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "I will \u2192 I'll",
          "condition": "Subject + will",
          "ruleText": "Combine the pronoun with 'll.",
          "examples": [
            "I will \u2192 I'll",
            "you will \u2192 you'll",
            "we will \u2192 we'll"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "He will \u2192 He'll",
          "condition": "Third person pronouns",
          "ruleText": "Add 'll to he, she, and they.",
          "examples": [
            "he will \u2192 he'll",
            "she will \u2192 she'll",
            "they will \u2192 they'll"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "It will \u2192 It'll",
          "condition": "Neutral pronoun",
          "ruleText": "Say 'It'll' smoothly in conversation.",
          "examples": [
            "it will rain \u2192 it'll rain",
            "it will be fun \u2192 it'll be fun"
          ]
        },
        {
          "ruleNumber": 4,
          "title": "Negative: will not \u2192 won't",
          "condition": "Negative contraction",
          "ruleText": "Notice the spelling change: 'will not' becomes 'won't', NOT 'willn't'!",
          "examples": [
            "will not \u2192 won't",
            "I won't forget",
            "They won't come"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "'ll pronunciation",
          "sound": "/l/ sound",
          "tip": "Pronounce 'I'll' like 'aisle' and 'he'll' like 'heel'."
        },
        {
          "ending": "won't pronunciation",
          "sound": "/wo\u028ant/",
          "tip": "Rhymes with 'don't'. Don't confuse it with 'want' (/w\u0251\u02d0nt/)!"
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Definitely",
        "percentage": 100,
        "color": "#10b981",
        "example": "I will definitely call you tomorrow."
      },
      {
        "adverb": "Certainly",
        "percentage": 90,
        "color": "#06b6d4",
        "example": "She will certainly succeed."
      },
      {
        "adverb": "Probably",
        "percentage": 75,
        "color": "#3b82f6",
        "example": "They will probably arrive around 6:00 PM."
      },
      {
        "adverb": "Maybe / Perhaps",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "Maybe we will go to the beach this weekend."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "You will rarely find a better deal than this."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#ef4444",
        "example": "I will never forget your kindness."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN 'will' and the base verb",
        "formula": "Subject + WILL + [ADVERB] + Base Verb",
        "explanation": "In positive sentences, the adverb sits snugly in the middle between 'will' and the verb.",
        "examples": [
          {
            "bad": "I will call definitely you.",
            "good": "I will definitely call you."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: In negatives, 'probably' goes BEFORE 'won't'",
        "formula": "Subject + PROBABLY + won't + Base Verb",
        "explanation": "Special rule: 'probably' and 'definitely' go BEFORE 'won't' in negative sentences.",
        "examples": [
          {
            "bad": "I won't probably come.",
            "good": "I probably won't come."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: 'Maybe' and 'Perhaps' go at the very start",
        "formula": "MAYBE + Subject + will + Base Verb",
        "explanation": "'Maybe' and 'perhaps' are placed at the beginning of the entire sentence.",
        "examples": [
          {
            "bad": "I will maybe call you.",
            "good": "Maybe I will call you."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Using 'will' for already planned appointments",
        "bad": "I will visit the dentist tomorrow at 10 AM. (already booked)",
        "good": "I am visiting the dentist tomorrow at 10 AM. / I am going to visit...",
        "explanation": "If an appointment is already booked and planned in your calendar, use Present Continuous ('I am visiting') or 'going to', not 'will'!"
      },
      {
        "title": "2. Saying 'will can' (Double Modals)",
        "bad": "Next year I will can speak English fluently.",
        "good": "Next year I will be able to speak English fluently.",
        "explanation": "You cannot put two modal verbs together ('will can'). Instead, use 'will be able to'."
      },
      {
        "title": "3. Using 'will' after 'when' or 'if' in time clauses",
        "bad": "When I will arrive, I will call you.",
        "good": "When I arrive, I will call you.",
        "explanation": "In time clauses starting with 'when', 'as soon as', or 'if', English uses Present Simple, not 'will'!"
      },
      {
        "title": "4. Adding -s after 'will'",
        "bad": "He will goes to school tomorrow.",
        "good": "He will go to school tomorrow.",
        "explanation": "After 'will', always use the plain base verb without -s, -ed, or -ing ('will go', 'will see')."
      },
      {
        "title": "5. Confusing 'won't' and 'want'",
        "bad": "I want go to the meeting. (meaning will not)",
        "good": "I won't go to the meeting.",
        "explanation": "'Won't' means will not. 'Want' means desire. They sound different and have different meanings."
      },
      {
        "title": "6. Using 'will' for predictions with physical proof",
        "bad": "Look at those black storm clouds! It will rain.",
        "good": "Look at those black storm clouds! It is going to rain.",
        "explanation": "When you see direct visual evidence right in front of your eyes, use 'going to' instead of 'will'."
      }
    ],
    "resumeSummary": {
      "title": "Future Simple Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Future Simple on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + will ('ll) + base verb",
          "exampleI": "I will help you.",
          "exampleHe": "He'll be here soon.",
          "memoryAnchor": "will + bare infinitive!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + won't + base verb",
          "exampleI": "I won't forget.",
          "exampleHe": "She won't tell anyone.",
          "memoryAnchor": "won't = will not"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Will + Subject + base verb?",
          "exampleI": "Will you come?",
          "exampleHe": "Will he join us?",
          "memoryAnchor": "Start with Will!"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + will + Subject + base?",
          "exampleI": "What will you do?",
          "exampleHe": "When will they arrive?",
          "memoryAnchor": "Where / When + will + base."
        }
      ],
      "spellingPills": [
        {
          "ending": "I will",
          "change": "I'll",
          "example": "I'll be there"
        },
        {
          "ending": "She will",
          "change": "She'll",
          "example": "She'll call you"
        },
        {
          "ending": "will not",
          "change": "won't",
          "example": "I won't give up"
        },
        {
          "ending": "Negative adverb",
          "change": "probably won't",
          "example": "He probably won't come"
        }
      ],
      "adverbGoldenFormula": "Subject + WILL + [Adverb] + Base Verb"
    },
    "exercises": {
      "quiz": [
        {
          "question": "Someone knocks on the door. What do you say?",
          "options": [
            "I am opening it.",
            "I'll open it!",
            "I open it.",
            "I will to open it."
          ],
          "correct": 1,
          "explanation": "Spontaneous instant decision right now uses 'I'll' (Future Simple)."
        },
        {
          "question": "What is the correct negative contraction of 'will not'?",
          "options": [
            "willn't",
            "wont't",
            "won't",
            "woul'nt"
          ],
          "correct": 2,
          "explanation": "'Will not' contracts to 'won't'."
        },
        {
          "question": "Complete the promise: 'Don't worry, I ________ tell anyone your secret.'",
          "options": [
            "won't",
            "not will",
            "don't will",
            "am not"
          ],
          "correct": 0,
          "explanation": "Promises use 'won't' for negative: 'I won't tell anyone'."
        },
        {
          "question": "Which sentence has a grammar mistake?",
          "options": [
            "I think it will rain tomorrow.",
            "When I will arrive, I will call you.",
            "She will probably pass the exam.",
            "We will help you clean up."
          ],
          "correct": 1,
          "explanation": "Never use 'will' after 'when' in a time clause. Say 'When I arrive, I will call you.'"
        },
        {
          "question": "What form of the verb follows 'will'?",
          "options": [
            "Verb with -ing",
            "Verb with -s",
            "Base infinitive without to",
            "Past participle V3"
          ],
          "correct": 2,
          "explanation": "'Will' is a modal verb and is always followed by the bare base infinitive."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "The phone is ringing. I ________ (answer) it right now!",
          "correctAnswer": "will answer",
          "hint": "Instant decision uses will + base.",
          "explanation": "Spontaneous decision: 'I will answer' or 'I'll answer'."
        },
        {
          "id": 2,
          "sentence": "I promise I ________ (not forget) our anniversary.",
          "correctAnswer": "won't forget",
          "hint": "Negative promise.",
          "explanation": "Negative promise: 'won't forget'."
        },
        {
          "id": 3,
          "sentence": "I think scientists ________ (find) a cure for this disease soon.",
          "correctAnswer": "will find",
          "hint": "Prediction based on opinion.",
          "explanation": "Prediction with 'I think': 'will find'."
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "I",
            "will",
            "always",
            "support",
            "you."
          ],
          "correctOrder": [
            "I",
            "will",
            "always",
            "support",
            "you."
          ],
          "targetSentence": "I will always support you.",
          "meaning": "A warm personal promise."
        },
        {
          "id": 2,
          "tokens": [
            "Will",
            "you",
            "help",
            "me",
            "please?"
          ],
          "correctOrder": [
            "Will",
            "you",
            "help",
            "me",
            "please?"
          ],
          "targetSentence": "Will you help me please?",
          "meaning": "Polite request."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "When you will come home, we will have dinner.",
          "options": [
            "When you will come home, we will have dinner.",
            "When you come home, we will have dinner.",
            "When you came home, we will have dinner."
          ],
          "correctIndex": 1,
          "explanation": "Do not put 'will' after 'when'. Use Present Simple in the time clause: 'When you come home...'"
        },
        {
          "id": 2,
          "flawedSentence": "He will probably won't join us.",
          "options": [
            "He will probably won't join us.",
            "He probably won't join us.",
            "He won't probably join us."
          ],
          "correctIndex": 1,
          "explanation": "Do not double 'will' and 'won't'. Say 'He probably won't join us'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "definitely",
          "targetSentence": "I will definitely help you tomorrow.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "I",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "will",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "help you tomorrow.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Put the adverb directly between 'will' and the main verb (help)."
        },
        {
          "id": 2,
          "adverb": "probably",
          "targetSentence": "We probably won't go to the beach.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "We",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "won't go",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "to the beach.",
              "isSlot": false
            }
          ],
          "correctSlot": 1,
          "explanation": "'Probably' goes BEFORE 'won't' in negative sentences."
        }
      ],
      "masteryExam": [
        {
          "question": "What is the primary communicative purpose of 'will' when someone offers unexpected help?",
          "options": [
            "Pre-arranged schedule",
            "Spontaneous voluntary decision",
            "Past habit",
            "Scientific law"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Instant decisions and voluntary offers on the spot take 'will'."
        },
        {
          "question": "Choose the sentence that correctly uses a time clause with 'when':",
          "options": [
            "I will call you when I will land.",
            "I will call you when I land.",
            "I call you when I will land.",
            "I calling you when I land."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Time clauses introduced by 'when' take the Present Simple: 'when I land'."
        },
        {
          "question": "How do you express future ability with 'can'?",
          "options": [
            "I will can speak Spanish.",
            "I will be able to speak Spanish.",
            "I will could speak Spanish.",
            "I can will speak Spanish."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Use 'will be able to' for future capability."
        },
        {
          "question": "Which sentence expresses a promise?",
          "options": [
            "It will rain later.",
            "I'll never leave you.",
            "The train will leave at noon.",
            "Will you have tea?"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'I'll never leave you' is a direct personal commitment/promise."
        },
        {
          "question": "Where does the adverb 'probably' sit in a negative future sentence?",
          "options": [
            "After won't",
            "Before won't",
            "At the very end of the sentence",
            "Directly before the object"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "In negative sentences with won't, 'probably' precedes 'won't' ('She probably won't come')."
        },
        {
          "question": "Select the correct question for asking someone to pass the butter:",
          "options": [
            "Are you passing the butter?",
            "Will you pass the butter, please?",
            "Did you pass the butter?",
            "Have you passed the butter?"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'Will you...?' is standard for polite requests."
        },
        {
          "question": "Why is 'Look at those dark clouds! It will rain' less natural than 'It is going to rain'?",
          "options": [
            "'Will' is grammatically forbidden in weather.",
            "'Going to' is preferred when there is immediate present visual evidence.",
            "'Will' cannot be used with rain.",
            "There is no difference."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Present sensory proof triggers 'be going to'."
        },
        {
          "question": "Identify the sentence without an error:",
          "options": [
            "She will studies harder next semester.",
            "She will study harder next semester.",
            "She will to study harder next semester.",
            "She will studying harder next semester."
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'Will' is followed by the bare base infinitive 'study'."
        },
        {
          "question": "Complete: 'Don't play with matches or you ________ yourself.'",
          "options": [
            "burn",
            "will burn",
            "are burning",
            "burned"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Warnings of consequences use Future Simple 'will burn'."
        },
        {
          "question": "What is the contracted form of 'I will'?",
          "options": [
            "I'w",
            "I'll",
            "Ill",
            "I'wl"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'I will' contracts to 'I'll'."
        }
      ]
    }
  },
  "pastContinuous": {
    "meta": {
      "id": "pastContinuous",
      "chapterNumber": 4,
      "title": "Past Continuous",
      "fullTitle": "4. Past Continuous Tense",
      "level": "B1 CEFR",
      "aspect": "Continuous",
      "time": "Past",
      "color": "#ec4899",
      "badge": "CHAPTER 4 \u2022 PAST IN PROGRESS",
      "formula": "Subject + WAS / WERE + Verb-ING",
      "summary": "Use this for actions that were in progress at a specific past moment or interrupted by another event."
    },
    "overview": {
      "definition": "The Past Continuous describes actions that were in the middle of happening at a specific moment in the past.",
      "coreConcept": "Imagine taking a photograph at 8:00 PM yesterday: what was the person actively doing inside that frame?",
      "timelineInsight": "A wavy, extended line in the past, showing an ongoing action that had already started and was still in progress.",
      "signalWords": [
        {
          "word": "While / As",
          "example": "While I was studying, my phone rang."
        },
        {
          "word": "When (interruption)",
          "example": "I was walking home when it started to rain."
        },
        {
          "word": "At 8:00 PM yesterday",
          "example": "At 8:00 PM, we were watching a movie."
        },
        {
          "word": "All day / All evening",
          "example": "She was working on her project all day."
        },
        {
          "word": "This time last week",
          "example": "This time last week, I was swimming in the sea."
        },
        {
          "word": "During that time",
          "example": "They were living in Chicago during that time."
        }
      ],
      "pillars": [
        {
          "icon": "Camera",
          "label": "Action in Progress",
          "desc": "Actively happening at an exact moment yesterday.",
          "color": "#ec4899",
          "bg": "rgba(236, 72, 153, 0.08)",
          "border": "rgba(236, 72, 153, 0.25)"
        },
        {
          "icon": "Zap",
          "label": "Interrupted Action",
          "desc": "A long ongoing action cut short by a sudden past event.",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        },
        {
          "icon": "Split",
          "label": "Parallel Actions",
          "desc": "Two people doing two things at the same time in the past.",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        },
        {
          "icon": "BookOpen",
          "label": "Setting the Scene",
          "desc": "Describing the background atmosphere in a story.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "action_in_progress",
        "title": "1. In Progress at an Exact Past Time",
        "tag": "Exact Moment",
        "icon": "Clock",
        "summary": "Showing that an action had already started and was not finished at a specific time in the past.",
        "explanation": "If someone asks 'What were you doing at 8:00 PM yesterday?', answer with Past Continuous because you were right in the middle of it.",
        "examples": [
          {
            "sentence": "At 8:00 PM yesterday, I was watching a documentary.",
            "translation": "Midst of watching at that specific hour.",
            "focus": "was watching"
          },
          {
            "sentence": "What were you doing at midnight last night?",
            "translation": "Inquiring about activity at a past moment.",
            "focus": "were you doing"
          },
          {
            "sentence": "This time last Sunday, we were driving to the beach.",
            "translation": "Ongoing travel at an exact past milestone.",
            "focus": "were driving"
          }
        ],
        "teacherNote": "Think of it like hitting 'PAUSE' on a video of your life in the past."
      },
      {
        "id": "interrupted_action",
        "title": "2. Long Action Interrupted by a Short Event",
        "tag": "Interruption",
        "icon": "Zap",
        "summary": "A longer background action was happening when a quick, sudden event interrupted it.",
        "explanation": "Use Past Continuous for the longer background action ('was cooking') and Past Simple for the sudden interruption ('rang').",
        "examples": [
          {
            "sentence": "I was cooking dinner when the smoke alarm suddenly rang.",
            "translation": "Ongoing cooking interrupted by alarm.",
            "focus": "was cooking ... rang"
          },
          {
            "sentence": "He was crossing the street when he dropped his wallet.",
            "translation": "Crossing was interrupted by dropping.",
            "focus": "was crossing ... dropped"
          },
          {
            "sentence": "They were sleeping peacefully when the thunderstorm began.",
            "translation": "Sleep interrupted by storm.",
            "focus": "were sleeping ... began"
          }
        ],
        "teacherNote": "Golden rule: The long background action takes was/were + -ing; the quick interruption takes Past Simple!"
      },
      {
        "id": "parallel_actions",
        "title": "3. Two Actions Happening at the Same Time (Parallel)",
        "tag": "Parallel",
        "icon": "Split",
        "summary": "Two or more continuous actions happening simultaneously in the past.",
        "explanation": "Use 'while' with two Past Continuous verbs to show that two people were doing their own activities at the exact same time.",
        "examples": [
          {
            "sentence": "While my mom was reading a book, my dad was baking bread.",
            "translation": "Two simultaneous peaceful activities.",
            "focus": "was reading ... was baking"
          },
          {
            "sentence": "The kids were playing outside while it was snowing.",
            "translation": "Two ongoing activities together.",
            "focus": "were playing ... was snowing"
          },
          {
            "sentence": "I was studying in my room while my brother was listening to music.",
            "translation": "Simultaneous parallel evening tasks.",
            "focus": "was studying ... was listening"
          }
        ],
        "teacherNote": "Notice how 'while' smoothly connects two simultaneous continuous actions."
      },
      {
        "id": "story_scene_setting",
        "title": "4. Setting the Scene in a Story",
        "tag": "Story Atmosphere",
        "icon": "BookOpen",
        "summary": "Creating the mood and visual background at the beginning of a story.",
        "explanation": "Writers use Past Continuous to paint the background picture before the main events happen in Past Simple.",
        "examples": [
          {
            "sentence": "The sun was shining and the birds were singing when I stepped outside.",
            "translation": "Vivid outdoor background scene.",
            "focus": "was shining ... were singing"
          },
          {
            "sentence": "Music was playing and guests were chatting as we walked into the party.",
            "translation": "Party atmosphere on arrival.",
            "focus": "was playing ... were chatting"
          },
          {
            "sentence": "Rain was pouring down and the wind was howling through the trees.",
            "translation": "Dramatic stormy book opening.",
            "focus": "was pouring ... was howling"
          }
        ],
        "teacherNote": "The scene is in Past Continuous (-ing); the main action is in Past Simple ('I opened the door')."
      },
      {
        "id": "annoying_habits",
        "title": "5. Repeated Annoying Past Habits (with 'Always')",
        "tag": "Annoying Habits",
        "icon": "AlertCircle",
        "summary": "Expressing mild irritation or affection about something someone did repeatedly in the past.",
        "explanation": "When you put 'always' or 'constantly' inside Past Continuous, it shows an annoying habit that happened over and over.",
        "examples": [
          {
            "sentence": "My roommate was always leaving dirty dishes in the sink!",
            "translation": "Expressing past frustration.",
            "focus": "was always leaving"
          },
          {
            "sentence": "He was constantly forgetting his password when we worked together.",
            "translation": "Repeated past tech issue.",
            "focus": "was constantly forgetting"
          },
          {
            "sentence": "They were always arguing about silly little things.",
            "translation": "Past interpersonal friction.",
            "focus": "were always arguing"
          }
        ],
        "teacherNote": "This adds emotion! Compare: 'He left his keys' (neutral fact) vs 'He was always losing his keys!' (frustrated)."
      },
      {
        "id": "polite_inquiries",
        "title": "6. Polite or Tentative Requests",
        "tag": "Polite Tone",
        "icon": "HeartHandshake",
        "summary": "Asking a favor politely without sounding demanding or aggressive.",
        "explanation": "English speakers use Past Continuous with 'wondering' or 'thinking' to sound very gentle and respectful.",
        "examples": [
          {
            "sentence": "I was wondering if you could lend me a hand for five minutes?",
            "translation": "Super polite request for help.",
            "focus": "was wondering"
          },
          {
            "sentence": "We were hoping to speak with the doctor today.",
            "translation": "Gentle medical inquiry.",
            "focus": "were hoping"
          },
          {
            "sentence": "I was thinking of inviting Sarah to dinner tonight.",
            "translation": "Tentative suggestion.",
            "focus": "was thinking"
          }
        ],
        "teacherNote": "Even though the request is for right now, the past form makes it softer and more polite!"
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + WAS / WERE + Verb-ING",
        "explanation": "Use 'was' for singular (I, he, she, it) and 'were' for plural (you, we, they), then add -ing to the action verb.",
        "table": [
          {
            "subject": "I / He / She / It",
            "auxiliary": "was",
            "verb": "working / reading",
            "complement": "at 8:00 PM"
          },
          {
            "subject": "You / We / They",
            "auxiliary": "were",
            "verb": "working / reading",
            "complement": "at 8:00 PM"
          }
        ],
        "examples": [
          {
            "en": "She was writing an email when the power went out.",
            "context": "Singular subject with was + verb-ing"
          },
          {
            "en": "They were watching football all evening.",
            "context": "Plural subject with were + verb-ing"
          }
        ]
      },
      "negative": {
        "formula": "Subject + WASN'T / WEREN'T + Verb-ING",
        "explanation": "Add 'not' to was/were: 'wasn't' or 'weren't', followed by the verb with -ing.",
        "table": [
          {
            "subject": "I / He / She / It",
            "auxiliary": "wasn't (was not)",
            "verb": "sleeping",
            "complement": "when you called"
          },
          {
            "subject": "You / We / They",
            "auxiliary": "weren't (were not)",
            "verb": "sleeping",
            "complement": "when you called"
          }
        ],
        "examples": [
          {
            "en": "I wasn't paying attention.",
            "context": "Negative singular statement"
          },
          {
            "en": "We weren't making any noise.",
            "context": "Negative plural statement"
          }
        ]
      },
      "interrogative": {
        "formula": "Was / Were + Subject + Verb-ING...?",
        "explanation": "To ask a question, start with 'Was' or 'Were', followed by the subject and the verb with -ing.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Was / Were + Subject + Verb-ING...?",
            "examples": [
              {
                "q": "Were you sleeping when I called?",
                "a": "Yes, I was. / No, I wasn't."
              },
              {
                "q": "Was it raining when you left home?",
                "a": "Yes, it was."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + was/were + Subject + Verb-ING...?",
            "examples": [
              {
                "q": "What were you doing at 10 PM?",
                "a": "I was reading in bed."
              },
              {
                "q": "Where was she going in such a rush?",
                "a": "She was hurrying to the train."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Were you listening to me?",
            "context": "Yes/No inquiry"
          },
          {
            "en": "Why were they laughing so loud?",
            "context": "Wh- question with why"
          }
        ]
      },
      "verbToBe": {
        "formula": "Subject + was / were (Simple Past only)",
        "explanation": "Note: The verb 'to be' is almost never used in Past Continuous (*was being*) unless describing temporary bizarre behavior ('He was being silly'). Normally, just say 'I was at home'.",
        "table": [
          {
            "subject": "All Subjects",
            "form": "was / were",
            "negative": "wasn't / weren't",
            "example": "I was sick yesterday (NOT: was being sick)."
          }
        ],
        "examples": [
          {
            "en": "Why was he being so rude? (acting rude right then)",
            "context": "Temporary behavior exception"
          },
          {
            "en": "She was at the library yesterday.",
            "context": "Normal state uses simple was"
          }
        ]
      },
      "verbHave": {
        "formula": "was/were having (only for actions, not possession)",
        "explanation": "You can say 'was having dinner' (eating) or 'was having fun', but NEVER 'was having a car' (possession). For possession, use 'had'.",
        "table": [
          {
            "subject": "Action have",
            "form": "was/were having",
            "example": "We were having breakfast when the phone rang."
          }
        ],
        "examples": [
          {
            "en": "I was having a shower when you knocked.",
            "context": "Action meaning taking a shower"
          },
          {
            "en": "I had a bicycle when I was young.",
            "context": "Possession must use had"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Adding -ing to Verbs",
      "subtitle": "Clear rules for creating the -ing form correctly.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Normal Verbs",
          "condition": "Most verbs",
          "ruleText": "Just add -ing to the verb.",
          "examples": [
            "read \u2192 reading",
            "cook \u2192 cooking",
            "sleep \u2192 sleeping"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Ends in Silent -e",
          "condition": "Verb ends in silent -e",
          "ruleText": "Drop the 'e' before adding -ing.",
          "examples": [
            "write \u2192 writing",
            "drive \u2192 driving",
            "make \u2192 making"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Short Vowel + Single Consonant (CVC)",
          "condition": "1 vowel + 1 consonant at the end",
          "ruleText": "Double the consonant before adding -ing.",
          "examples": [
            "swim \u2192 swimming",
            "run \u2192 running",
            "sit \u2192 sitting"
          ]
        },
        {
          "ruleNumber": 4,
          "title": "Ends in -ie",
          "condition": "Verb ends in -ie",
          "ruleText": "Change -ie to -y before adding -ing.",
          "examples": [
            "lie \u2192 lying",
            "die \u2192 dying",
            "tie \u2192 tying"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "-ing sound",
          "sound": "/\u026a\u014b/",
          "tip": "The 'g' in -ing is soft in standard English, pronounced in the back of the throat."
        },
        {
          "ending": "was vs were",
          "sound": "/w\u0259z/ vs /w\u025c\u02d0r/",
          "tip": "Notice that 'were' sounds like 'bird' or 'fur', not 'where'!"
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Constantly",
        "percentage": 100,
        "color": "#ef4444",
        "example": "He was constantly interrupting me."
      },
      {
        "adverb": "Always",
        "percentage": 95,
        "color": "#f59e0b",
        "example": "She was always complaining about the weather."
      },
      {
        "adverb": "Often",
        "percentage": 70,
        "color": "#3b82f6",
        "example": "They were often studying late at night."
      },
      {
        "adverb": "Sometimes",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "We were sometimes working on weekends during the project."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#06b6d4",
        "example": "I was rarely sleeping well back then."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#10b981",
        "example": "They were never paying attention."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN was/were and verb-ing",
        "formula": "Subject + WAS / WERE + [ADVERB] + Verb-ING",
        "explanation": "The frequency adverb sits right between the auxiliary (was/were) and the -ing verb.",
        "examples": [
          {
            "bad": "She always was complaining.",
            "good": "She was always complaining."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: 'Still' sits right after was/were",
        "formula": "Subject + WAS / WERE + STILL + Verb-ING",
        "explanation": "To show an action had not finished yet, place 'still' after was or were.",
        "examples": [
          {
            "bad": "I still was working at 10 PM.",
            "good": "I was still working at 10 PM."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: Time expressions usually go at the end",
        "formula": "Subject + was/were + verb-ing + [TIME EXPRESSION]",
        "explanation": "Exact times like 'at 8 PM' or 'all evening' usually sit at the end of the clause.",
        "examples": [
          {
            "bad": "I at 8 PM was cooking.",
            "good": "I was cooking at 8 PM."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Using continuous with state verbs",
        "bad": "I was knowing the answer yesterday.",
        "good": "I knew the answer yesterday.",
        "explanation": "State verbs like know, understand, believe, love, and want are NEVER used in continuous tenses. Use Past Simple ('I knew')."
      },
      {
        "title": "2. Using was with plural subjects",
        "bad": "They was waiting for the bus.",
        "good": "They were waiting for the bus.",
        "explanation": "'They', 'we', and 'you' must always take 'were', not 'was'."
      },
      {
        "title": "3. Confusing 'when' and 'while'",
        "bad": "I was cooking dinner while the phone rang.",
        "good": "I was cooking dinner when the phone rang.",
        "explanation": "Use 'while' for the long ongoing action ('while I was cooking'), and 'when' for the sudden short event ('when the phone rang')."
      },
      {
        "title": "4. Forgetting the verb 'to be'",
        "bad": "I walking in the park yesterday.",
        "good": "I was walking in the park yesterday.",
        "explanation": "You cannot make Past Continuous without 'was' or 'were'. You cannot say 'I walking'."
      },
      {
        "title": "5. Using -ing for a completed series of story actions",
        "bad": "I was waking up, was brushing my teeth, and was leaving.",
        "good": "I woke up, brushed my teeth, and left.",
        "explanation": "When listing a chain of completed events in a story, use Past Simple, not Past Continuous!"
      },
      {
        "title": "6. Forgetting to drop the silent -e",
        "bad": "She was writeing a letter.",
        "good": "She was writing a letter.",
        "explanation": "When a verb ends in silent -e, drop the -e before adding -ing: write \u2192 writing."
      }
    ],
    "resumeSummary": {
      "title": "Past Continuous Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Past Continuous on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + was / were + verb-ing",
          "exampleI": "I was sleeping.",
          "exampleHe": "They were cooking.",
          "memoryAnchor": "was/were + verb-ING!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + wasn't / weren't + -ing",
          "exampleI": "I wasn't looking.",
          "exampleHe": "We weren't shouting.",
          "memoryAnchor": "wasn't / weren't + ING"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Was / Were + Subject + verb-ing?",
          "exampleI": "Were you listening?",
          "exampleHe": "Was she working?",
          "memoryAnchor": "Was / Were at the start!"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + was/were + Subject + -ing?",
          "exampleI": "What were you doing?",
          "exampleHe": "Where was he going?",
          "memoryAnchor": "What / Where + was/were + ING."
        }
      ],
      "spellingPills": [
        {
          "ending": "Most verbs",
          "change": "+ing",
          "example": "read \u2192 reading"
        },
        {
          "ending": "Silent -e",
          "change": "Drop e + ing",
          "example": "write \u2192 writing"
        },
        {
          "ending": "Short CVC",
          "change": "Double letter",
          "example": "swim \u2192 swimming"
        },
        {
          "ending": "Ends in -ie",
          "change": "ie \u2192 y + ing",
          "example": "lie \u2192 lying"
        }
      ],
      "adverbGoldenFormula": "Subject + WAS / WERE + [Adverb] + Verb-ING"
    },
    "exercises": {
      "quiz": [
        {
          "question": "What were you doing at 9:00 PM yesterday?",
          "options": [
            "I watched TV.",
            "I was watching TV.",
            "I am watching TV.",
            "I have watched TV."
          ],
          "correct": 1,
          "explanation": "Action in progress at a specific past moment uses Past Continuous: 'was watching'."
        },
        {
          "question": "Complete the sentence: 'She ________ a book when her phone ________.'",
          "options": [
            "was reading / rang",
            "read / was ringing",
            "was reading / was ringing",
            "read / rang"
          ],
          "correct": 0,
          "explanation": "The long background action takes 'was reading'; the sudden interruption takes 'rang'."
        },
        {
          "question": "Choose the correct question:",
          "options": [
            "What you were doing yesterday?",
            "What were you doing yesterday?",
            "What did you doing yesterday?",
            "Were you do yesterday?"
          ],
          "correct": 1,
          "explanation": "Wh- question uses: Wh- + were + you + verb-ing: 'What were you doing?'"
        },
        {
          "question": "Which verb CANNOT normally be used in the continuous form?",
          "options": [
            "eat",
            "listen",
            "know",
            "drive"
          ],
          "correct": 2,
          "explanation": "'Know' is a state verb and is not used in continuous aspect. Say 'I knew', not 'I was knowing'."
        },
        {
          "question": "What is the past continuous of 'they / not / sleep'?",
          "options": [
            "they weren't sleeping",
            "they didn't sleeping",
            "they wasn't sleeping",
            "they not were sleeping"
          ],
          "correct": 0,
          "explanation": "Plural subject 'they' takes 'weren't sleeping'."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "While my sister was doing homework, I ________ (cook) dinner.",
          "correctAnswer": "was cooking",
          "hint": "Parallel continuous action with I.",
          "explanation": "Parallel action takes Past Continuous: 'was cooking'."
        },
        {
          "id": 2,
          "sentence": "He was walking to the station when he ________ (drop) his wallet.",
          "correctAnswer": "dropped",
          "hint": "Sudden past interruption.",
          "explanation": "The sudden interruption takes Past Simple: 'dropped'."
        },
        {
          "id": 3,
          "sentence": "At midnight, the students ________ (still / study) for their exam.",
          "correctAnswer": "were still studying",
          "hint": "Plural were + still + study-ing.",
          "explanation": "Plural students takes 'were still studying'."
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "What",
            "were",
            "you",
            "doing",
            "at",
            "eight?"
          ],
          "correctOrder": [
            "What",
            "were",
            "you",
            "doing",
            "at",
            "eight?"
          ],
          "targetSentence": "What were you doing at eight?",
          "meaning": "Inquiring about past progress."
        },
        {
          "id": 2,
          "tokens": [
            "It",
            "was",
            "raining",
            "all",
            "afternoon."
          ],
          "correctOrder": [
            "It",
            "was",
            "raining",
            "all",
            "afternoon."
          ],
          "targetSentence": "It was raining all afternoon.",
          "meaning": "Extended past duration."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "I was knowing him very well back then.",
          "options": [
            "I was knowing him very well back then.",
            "I knew him very well back then.",
            "I had known him very well back then."
          ],
          "correctIndex": 1,
          "explanation": "'Know' is a state verb and cannot take -ing. Use Past Simple 'I knew him'."
        },
        {
          "id": 2,
          "flawedSentence": "They was waiting outside in the cold.",
          "options": [
            "They was waiting outside in the cold.",
            "They were waiting outside in the cold.",
            "They waited outside in the cold."
          ],
          "correctIndex": 1,
          "explanation": "Plural subject 'They' takes 'were', not 'was'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "always",
          "targetSentence": "He was always losing his keys.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "He",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "was",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "losing his keys.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'always' right between 'was' and the -ing verb (losing)."
        },
        {
          "id": 2,
          "adverb": "still",
          "targetSentence": "We were still sleeping at nine.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "We",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "were",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "sleeping at nine.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'still' immediately following the auxiliary 'were'."
        }
      ],
      "masteryExam": [
        {
          "question": "Which sentence describes an action in progress interrupted by a short event?",
          "options": [
            "I cooked dinner and ate it.",
            "I was cooking dinner when the doorbell rang.",
            "I have cooked dinner already.",
            "I will cook dinner when you arrive."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Past Continuous ('was cooking') interrupted by Past Simple ('rang')."
        },
        {
          "question": "Why is 'I was understanding the lecture' incorrect?",
          "options": [
            "'Understand' is a stative verb that resists continuous aspect.",
            "It lacks a time expression.",
            "'Lecture' is uncountable.",
            "The subject must be plural."
          ],
          "correct": 0,
          "level": "B1",
          "explanation": "Cognitive verbs like understand do not take continuous forms."
        },
        {
          "question": "Choose the correct sentence with parallel actions in the past:",
          "options": [
            "While he read, she was cooking.",
            "While he was reading, she was cooking.",
            "He was reading while she cooked.",
            "While he reading, she cooking."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Two simultaneous continuous actions both use Past Continuous."
        },
        {
          "question": "Complete: 'What ________ at 7:00 AM yesterday when the earthquake struck?'",
          "options": [
            "did you do",
            "were you doing",
            "have you done",
            "are you doing"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Asks about activity in progress at a specific past time."
        },
        {
          "question": "How is Past Continuous used in narrative storytelling?",
          "options": [
            "To list completed chronological steps",
            "To describe background scene atmosphere",
            "To express future predictions",
            "To state timeless universal laws"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "It paints the background setting (sun was shining, music was playing)."
        },
        {
          "question": "What emotion does 'She was always borrowing my clothes!' typically convey?",
          "options": [
            "Neutral observation",
            "Irritation or annoyance at a repeated habit",
            "Scientific detachment",
            "Solemn promise"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Past Continuous with 'always' emphasizes emotional annoyance."
        },
        {
          "question": "Which is the correct negative sentence?",
          "options": [
            "They weren't paying attention.",
            "They wasn't paying attention.",
            "They didn't paying attention.",
            "They not were paying attention."
          ],
          "correct": 0,
          "level": "A2",
          "explanation": "Plural subject takes 'weren't paying'."
        },
        {
          "question": "What is the spelling of 'lie' in the -ing form?",
          "options": [
            "lieing",
            "lying",
            "lyeing",
            "liing"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Verbs ending in -ie change to -y + ing: lie \u2192 lying."
        },
        {
          "question": "Which of these expresses a tentative polite request?",
          "options": [
            "I wondered if you can help.",
            "I was wondering if you could help me.",
            "I am wondering if you will help.",
            "I wonder did you help."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'I was wondering if you could...' is standard polite English."
        },
        {
          "question": "When can 'have' be used in the Past Continuous?",
          "options": [
            "Never",
            "Only for possession",
            "Only for dynamic actions (e.g. having dinner, having a shower)",
            "Only with plural subjects"
          ],
          "correct": 2,
          "level": "B1",
          "explanation": "'Have' can only take continuous aspect when it denotes an action, not ownership."
        }
      ]
    }
  },
  "presentContinuous": {
    "meta": {
      "id": "presentContinuous",
      "chapterNumber": 5,
      "title": "Present Continuous",
      "fullTitle": "5. Present Continuous Tense",
      "level": "A2 CEFR",
      "aspect": "Continuous",
      "time": "Present",
      "color": "#6366f1",
      "badge": "CHAPTER 5 \u2022 IN PROGRESS NOW",
      "formula": "Subject + AM / IS / ARE + Verb-ING",
      "summary": "Use this for actions happening right now, temporary situations, changing trends, and fixed plans."
    },
    "overview": {
      "definition": "The Present Continuous is used for actions happening right now at this exact moment, or temporary things happening around this period of time.",
      "coreConcept": "Unlike the Present Simple (which is permanent routine), Present Continuous is temporary, active, and unfolding right NOW.",
      "timelineInsight": "A blinking active circle or wavy line centered directly on the NOW moment.",
      "signalWords": [
        {
          "word": "Right now / At the moment",
          "example": "I am typing an email right now."
        },
        {
          "word": "Currently / At present",
          "example": "She is currently looking for a job."
        },
        {
          "word": "These days / Nowadays",
          "example": "People are buying more electric cars these days."
        },
        {
          "word": "This week / month",
          "example": "I am staying with my brother this week."
        },
        {
          "word": "Look! / Listen!",
          "example": "Look! The baby is walking!"
        },
        {
          "word": "Tomorrow (with fixed plan)",
          "example": "We are flying to Rome tomorrow."
        }
      ],
      "pillars": [
        {
          "icon": "Play",
          "label": "Happening Right Now",
          "desc": "An action taking place at the exact moment of speaking.",
          "color": "#6366f1",
          "bg": "rgba(99, 102, 241, 0.08)",
          "border": "rgba(99, 102, 241, 0.25)"
        },
        {
          "icon": "Clock",
          "label": "Temporary Situations",
          "desc": "Things happening around now that won't last forever.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        },
        {
          "icon": "TrendingUp",
          "label": "Changing Trends",
          "desc": "Slow changes and evolving situations ('Prices are rising').",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        },
        {
          "icon": "CalendarCheck",
          "label": "Fixed Future Plans",
          "desc": "Definite appointments already booked in your calendar.",
          "color": "#ec4899",
          "bg": "rgba(236, 72, 153, 0.08)",
          "border": "rgba(236, 72, 153, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "action_right_now",
        "title": "1. Actions Happening Right Now",
        "tag": "Right Now",
        "icon": "Play",
        "summary": "Actions in progress at the exact second you are speaking.",
        "explanation": "Look around you: whatever is happening at this very moment takes Present Continuous with am/is/are + -ing.",
        "examples": [
          {
            "sentence": "I am studying English on my laptop right now.",
            "translation": "Active learning taking place this second.",
            "focus": "am studying"
          },
          {
            "sentence": "Listen! The birds are singing outside.",
            "translation": "Auditory evidence happening now.",
            "focus": "are singing"
          },
          {
            "sentence": "Why are you wearing a winter coat indoors?",
            "translation": "Immediate observation of someone's clothes.",
            "focus": "are you wearing"
          }
        ],
        "teacherNote": "If you can see or hear it happening right now, use Present Continuous!"
      },
      {
        "id": "temporary_situations",
        "title": "2. Temporary Situations (These Days)",
        "tag": "Temporary",
        "icon": "Clock",
        "summary": "Actions happening around now that are temporary and not your permanent lifestyle.",
        "explanation": "Compare: 'I live in London' (my permanent home) vs 'I am staying at a hotel this week' (temporary situation).",
        "examples": [
          {
            "sentence": "I am living with my cousin until I find my own apartment.",
            "translation": "Temporary housing situation.",
            "focus": "am living"
          },
          {
            "sentence": "She is working on an urgent project this month.",
            "translation": "Temporary work assignment.",
            "focus": "is working"
          },
          {
            "sentence": "Are you reading any interesting books these days?",
            "translation": "Inquiring about current leisure reading.",
            "focus": "Are you reading"
          }
        ],
        "teacherNote": "Notice the time clues: 'this week', 'these days', 'until'."
      },
      {
        "id": "changing_trends",
        "title": "3. Changing Situations & Evolving Trends",
        "tag": "Changing World",
        "icon": "TrendingUp",
        "summary": "Describing things that are gradually growing, developing, or changing over time.",
        "explanation": "Use Present Continuous with verbs like get, become, increase, and rise to show growth and trends.",
        "examples": [
          {
            "sentence": "The climate is getting warmer every decade.",
            "translation": "Gradual worldwide environmental change.",
            "focus": "is getting"
          },
          {
            "sentence": "Technology is developing at an astonishing speed.",
            "translation": "Continuous evolution of technology.",
            "focus": "is developing"
          },
          {
            "sentence": "Prices of groceries are rising rapidly this year.",
            "translation": "Economic trend in progress.",
            "focus": "are rising"
          }
        ],
        "teacherNote": "Verbs like 'getting', 'becoming', and 'growing' love this tense."
      },
      {
        "id": "fixed_future_plans",
        "title": "4. Definite Fixed Future Plans",
        "tag": "Booked Plans",
        "icon": "CalendarCheck",
        "summary": "Future arrangements that are already agreed upon, booked, and written in your diary.",
        "explanation": "Native speakers almost always use Present Continuous for personal plans when the time and place are already fixed.",
        "examples": [
          {
            "sentence": "I am meeting the doctor tomorrow at 10:30 AM.",
            "translation": "Fixed booked medical appointment.",
            "focus": "am meeting"
          },
          {
            "sentence": "We are flying to Rome this Friday evening.",
            "translation": "Airline tickets are bought and confirmed.",
            "focus": "are flying"
          },
          {
            "sentence": "What are you doing tonight? Do you want to grab dinner?",
            "translation": "Asking about someone's evening schedule.",
            "focus": "are you doing"
          }
        ],
        "teacherNote": "This is much more common than 'will' for personal plans: 'I am seeing John tomorrow' means it's already arranged!"
      },
      {
        "id": "annoying_habits",
        "title": "5. Annoying Habits with 'Always'",
        "tag": "Annoyance",
        "icon": "AlertCircle",
        "summary": "Expressing frustration about something someone does too often.",
        "explanation": "When you say 'He is always doing that!', you are showing that it annoys you and happens more often than normal.",
        "examples": [
          {
            "sentence": "You are always interrupting me when I'm speaking!",
            "translation": "Direct expression of irritation.",
            "focus": "are always interrupting"
          },
          {
            "sentence": "He is constantly forgetting his house keys.",
            "translation": "Frustrating repetitive forgetfulness.",
            "focus": "is constantly forgetting"
          },
          {
            "sentence": "Why are you always complaining about your food?",
            "translation": "Questioning habitual dissatisfaction.",
            "focus": "are you always complaining"
          }
        ],
        "teacherNote": "Notice the emotion: 'He always complains' is a cold fact. 'He is always complaining!' shows you are fed up!"
      },
      {
        "id": "picture_descriptions",
        "title": "6. Describing Photos, Videos & Plays",
        "tag": "Visual Scene",
        "icon": "Image",
        "summary": "Describing what is happening inside a photograph, painting, or video clip.",
        "explanation": "When you look at a photo, imagine the scene is alive right now in front of you.",
        "examples": [
          {
            "sentence": "In this picture, my sister is smiling and holding a puppy.",
            "translation": "Describing people in a family photo.",
            "focus": "is smiling ... holding"
          },
          {
            "sentence": "The man in the red shirt is running across the finish line.",
            "translation": "Sports snapshot description.",
            "focus": "is running"
          },
          {
            "sentence": "At the start of the play, Hamlet is standing alone on stage.",
            "translation": "Describing a theatrical scene.",
            "focus": "is standing"
          }
        ],
        "teacherNote": "Always use Present Continuous when presenting slides or explaining photos to others."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + AM / IS / ARE + Verb-ING",
        "explanation": "Choose the right form of 'to be' (I am, he/she/it is, we/you/they are) and add -ing to the action verb.",
        "table": [
          {
            "subject": "I",
            "auxiliary": "am ('m)",
            "verb": "working",
            "complement": "right now"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "is ('s)",
            "verb": "working",
            "complement": "right now"
          },
          {
            "subject": "You / We / They",
            "auxiliary": "are ('re)",
            "verb": "working",
            "complement": "right now"
          }
        ],
        "examples": [
          {
            "en": "I am preparing a presentation.",
            "context": "Action taking place right now"
          },
          {
            "en": "She's learning Spanish this semester.",
            "context": "Temporary study project"
          }
        ]
      },
      "negative": {
        "formula": "Subject + AM NOT / ISN'T / AREN'T + Verb-ING",
        "explanation": "Add 'not' after the be verb: 'am not', 'isn't', or 'aren't', followed by verb-ing.",
        "table": [
          {
            "subject": "I",
            "auxiliary": "am not ('m not)",
            "verb": "listening",
            "complement": "to the radio"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "isn't (is not)",
            "verb": "working",
            "complement": "today"
          },
          {
            "subject": "You / We / They",
            "auxiliary": "aren't (are not)",
            "verb": "paying",
            "complement": "attention"
          }
        ],
        "examples": [
          {
            "en": "I'm not doing anything important right now.",
            "context": "Negative current state"
          },
          {
            "en": "They aren't coming to the party tonight.",
            "context": "Negative future plan"
          }
        ]
      },
      "interrogative": {
        "formula": "Am / Is / Are + Subject + Verb-ING...?",
        "explanation": "Swap the subject and the verb 'to be' to ask a question.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Am / Is / Are + Subject + Verb-ING...?",
            "examples": [
              {
                "q": "Are you enjoying the movie?",
                "a": "Yes, I am! / It's great."
              },
              {
                "q": "Is it raining outside?",
                "a": "No, it isn't."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + am/is/are + Subject + Verb-ING...?",
            "examples": [
              {
                "q": "What are you cooking?",
                "a": "I'm making pasta."
              },
              {
                "q": "Where are they going?",
                "a": "They are going to the library."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Are you waiting for someone?",
            "context": "Current moment inquiry"
          },
          {
            "en": "Why is she crying?",
            "context": "Wh- question about present observation"
          }
        ]
      },
      "verbToBe": {
        "formula": "Subject + am/is/are being + adjective (Behavior only)",
        "explanation": "Only use 'being' when someone is acting in a temporary, unusual way: 'Why are you being so silly?' Normally, just say 'He is sick' (NOT 'is being sick').",
        "table": [
          {
            "subject": "Temporary Behavior",
            "form": "is / are being",
            "example": "Don't be mad, he is just being silly."
          }
        ],
        "examples": [
          {
            "en": "You are being very helpful today, thank you!",
            "context": "Temporary active behavior"
          },
          {
            "en": "She is a wonderful doctor.",
            "context": "Permanent fact uses simple is"
          }
        ]
      },
      "verbHave": {
        "formula": "am/is/are having (dynamic activities only)",
        "explanation": "You can say 'I am having lunch' (eating) or 'having fun', but NEVER 'I am having a car' (possession). For possession, use 'I have a car'.",
        "table": [
          {
            "subject": "Dynamic have",
            "form": "am/is/are having",
            "example": "We are having breakfast right now."
          }
        ],
        "examples": [
          {
            "en": "They are having a great conversation.",
            "context": "Active communication"
          },
          {
            "en": "I have two sisters.",
            "context": "Family relationship uses simple have"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Rules for -ing Verbs",
      "subtitle": "How to spell the -ing form without mistakes.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Normal Verbs",
          "condition": "Most verbs",
          "ruleText": "Add -ing directly to the verb.",
          "examples": [
            "eat \u2192 eating",
            "speak \u2192 speaking",
            "watch \u2192 watching"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Ends in Silent -e",
          "condition": "Ends in -e",
          "ruleText": "Drop the -e before adding -ing.",
          "examples": [
            "make \u2192 making",
            "take \u2192 taking",
            "come \u2192 coming"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Short Vowel + Consonant",
          "condition": "1 short vowel + 1 final consonant",
          "ruleText": "Double the consonant before adding -ing.",
          "examples": [
            "run \u2192 running",
            "sit \u2192 sitting",
            "get \u2192 getting"
          ]
        },
        {
          "ruleNumber": 4,
          "title": "Ends in -ie",
          "condition": "Ends in -ie",
          "ruleText": "Change -ie to -y before adding -ing.",
          "examples": [
            "die \u2192 dying",
            "lie \u2192 lying",
            "tie \u2192 tying"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "Contractions",
          "sound": "I'm / He's / They're",
          "tip": "Always practice smooth contractions: 'They're' sounds like 'there' and 'their'."
        },
        {
          "ending": "-ing ending",
          "sound": "/\u026a\u014b/",
          "tip": "Keep the 'i' short and soft in your mouth."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Constantly",
        "percentage": 100,
        "color": "#ef4444",
        "example": "He is constantly checking his phone."
      },
      {
        "adverb": "Always",
        "percentage": 90,
        "color": "#f59e0b",
        "example": "You are always helping everyone around you."
      },
      {
        "adverb": "Currently",
        "percentage": 75,
        "color": "#3b82f6",
        "example": "She is currently developing a new mobile app."
      },
      {
        "adverb": "Right now",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "We are studying English right now."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#06b6d4",
        "example": "They are rarely taking vacations these days."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#10b981",
        "example": "I am never using that broken computer again."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN am/is/are and verb-ing",
        "formula": "Subject + AM / IS / ARE + [ADVERB] + Verb-ING",
        "explanation": "Adverbs like always, currently, and still sit between the 'be' verb and the -ing verb.",
        "examples": [
          {
            "bad": "She currently is working in Berlin.",
            "good": "She is currently working in Berlin."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: 'Right now' and 'At the moment' go at the end",
        "formula": "Subject + be + verb-ing + [RIGHT NOW]",
        "explanation": "Time expressions like 'right now' sit naturally at the end of the sentence.",
        "examples": [
          {
            "bad": "I right now am studying.",
            "good": "I am studying right now."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: In questions, put the adverb after the subject",
        "formula": "Am / Is / Are + Subject + [ADVERB] + Verb-ING...?",
        "explanation": "In questions, the subject comes first, then the adverb, then verb-ing.",
        "examples": [
          {
            "bad": "Are still you working?",
            "good": "Are you still working?"
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Using continuous with Stative Verbs",
        "bad": "I am wanting a cup of coffee right now.",
        "good": "I want a cup of coffee right now.",
        "explanation": "Verbs of feeling, desire, and mental states (want, need, like, know, understand) NEVER take -ing! Say 'I want', even if it's right now."
      },
      {
        "title": "2. Forgetting the 'am / is / are' auxiliary",
        "bad": "He working on his car.",
        "good": "He is working on his car.",
        "explanation": "You can never say just 'He working'. The auxiliary verb 'is' is mandatory!"
      },
      {
        "title": "3. Confusing permanent routines with temporary actions",
        "bad": "I am drinking coffee every morning.",
        "good": "I drink coffee every morning.",
        "explanation": "'Every morning' is a permanent routine, which requires Present Simple ('I drink'). Present Continuous is for things happening right now."
      },
      {
        "title": "4. Spelling mistakes with doubling consonants",
        "bad": "The dog is runing across the field.",
        "good": "The dog is running across the field.",
        "explanation": "Short words with 1 vowel + 1 consonant double the final letter: run \u2192 running, swim \u2192 swimming."
      },
      {
        "title": "5. Using 'see' for vision vs appointments",
        "bad": "I am seeing a bird in the tree. (physical eyesight)",
        "good": "I see a bird in the tree. (Use 'am seeing' only for meeting: 'I am seeing the doctor tomorrow').",
        "explanation": "Eyesight is a state: 'I see a bird'. But having a meeting is an action: 'I am seeing my lawyer tomorrow'."
      },
      {
        "title": "6. Using 'will' instead of Present Continuous for booked plans",
        "bad": "I will get married next Saturday. (invitations already sent!)",
        "good": "I am getting married next Saturday.",
        "explanation": "When an event is already 100% planned and arranged with other people, use Present Continuous."
      }
    ],
    "resumeSummary": {
      "title": "Present Continuous Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Present Continuous on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + am / is / are + verb-ing",
          "exampleI": "I am writing.",
          "exampleHe": "She is singing.",
          "memoryAnchor": "am/is/are + verb-ING!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + am not / isn't / aren't + -ing",
          "exampleI": "I'm not shouting.",
          "exampleHe": "He isn't sleeping.",
          "memoryAnchor": "be + not + ING"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Am / Is / Are + Subject + verb-ing?",
          "exampleI": "Are you coming?",
          "exampleHe": "Is it working?",
          "memoryAnchor": "Am/Is/Are at the front!"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + am/is/are + Subject + -ing?",
          "exampleI": "What are you doing?",
          "exampleHe": "Where is she going?",
          "memoryAnchor": "Wh- + be + Subject + ING."
        }
      ],
      "spellingPills": [
        {
          "ending": "Most verbs",
          "change": "+ing",
          "example": "cook \u2192 cooking"
        },
        {
          "ending": "Silent -e",
          "change": "Drop e + ing",
          "example": "come \u2192 coming"
        },
        {
          "ending": "Short CVC",
          "change": "Double letter",
          "example": "sit \u2192 sitting"
        },
        {
          "ending": "Ends in -ie",
          "change": "ie \u2192 y + ing",
          "example": "die \u2192 dying"
        }
      ],
      "adverbGoldenFormula": "Subject + AM / IS / ARE + [Adverb] + Verb-ING"
    },
    "exercises": {
      "quiz": [
        {
          "question": "Look! The baby ________ her first steps!",
          "options": [
            "takes",
            "is taking",
            "take",
            "has taken"
          ],
          "correct": 1,
          "explanation": "'Look!' signals an action happening right at this moment: 'is taking'."
        },
        {
          "question": "Why is 'I am needing a new phone' incorrect?",
          "options": [
            "'Need' is a stative verb that doesn't take continuous form.",
            "It needs 'do not'.",
            "'Phone' is plural.",
            "The tense is past."
          ],
          "correct": 0,
          "explanation": "'Need' describes a state of necessity, so say 'I need a new phone'."
        },
        {
          "question": "Which sentence talks about a fixed future arrangement?",
          "options": [
            "I will perhaps go to Paris.",
            "I am flying to Paris tomorrow at 8:00 AM.",
            "I fly to Paris every year.",
            "I was flying to Paris."
          ],
          "correct": 1,
          "explanation": "Present Continuous with a future time ('tomorrow at 8:00 AM') expresses a fixed booked plan."
        },
        {
          "question": "What is the correct negative form for 'She / work / today'?",
          "options": [
            "She not working today.",
            "She isn't working today.",
            "She doesn't working today.",
            "She hasn't working today."
          ],
          "correct": 1,
          "explanation": "Negative Present Continuous uses isn't + verb-ing: 'She isn't working today'."
        },
        {
          "question": "How do you spell the -ing form of 'run'?",
          "options": [
            "runing",
            "running",
            "runeing",
            "runnying"
          ],
          "correct": 1,
          "explanation": "Short vowel + consonant doubles the final consonant: run \u2192 running."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "Listen! The singer ________ (perform) our favorite song on stage.",
          "correctAnswer": "is performing",
          "hint": "Singer is singular: is + verb-ing.",
          "explanation": "Happening right now: 'is performing'."
        },
        {
          "id": 2,
          "sentence": "I ________ (stay) with my aunt this week while my flat is painted.",
          "correctAnswer": "am staying",
          "hint": "Temporary situation with I.",
          "explanation": "Temporary situation takes 'am staying'."
        },
        {
          "id": 3,
          "sentence": "Why ________ (you / wear) sunglasses inside the dark room?",
          "correctAnswer": "are you wearing",
          "hint": "Question form: are + you + wear-ing.",
          "explanation": "Question about present observation: 'are you wearing'."
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "She",
            "is",
            "currently",
            "learning",
            "French."
          ],
          "correctOrder": [
            "She",
            "is",
            "currently",
            "learning",
            "French."
          ],
          "targetSentence": "She is currently learning French.",
          "meaning": "Ongoing current pursuit."
        },
        {
          "id": 2,
          "tokens": [
            "Are",
            "you",
            "meeting",
            "him",
            "tonight?"
          ],
          "correctOrder": [
            "Are",
            "you",
            "meeting",
            "him",
            "tonight?"
          ],
          "targetSentence": "Are you meeting him tonight?",
          "meaning": "Fixed future inquiry."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "I am understanding the concept very well now.",
          "options": [
            "I am understanding the concept very well now.",
            "I understand the concept very well now.",
            "I understands the concept very well now."
          ],
          "correctIndex": 1,
          "explanation": "'Understand' is a mental state verb and cannot take -ing. Use 'I understand'."
        },
        {
          "id": 2,
          "flawedSentence": "They having lunch in the garden right now.",
          "options": [
            "They having lunch in the garden right now.",
            "They are having lunch in the garden right now.",
            "They have lunch in the garden right now."
          ],
          "correctIndex": 1,
          "explanation": "The auxiliary verb 'are' is missing: 'They are having lunch'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "currently",
          "targetSentence": "We are currently testing the new software.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "We",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "are",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "testing the new software.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'currently' directly between the auxiliary 'are' and the main verb 'testing'."
        },
        {
          "id": 2,
          "adverb": "always",
          "targetSentence": "You are always leaving your dirty shoes here.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "You",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "are",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "leaving your dirty shoes here.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'always' right between 'are' and 'leaving'."
        }
      ],
      "masteryExam": [
        {
          "question": "Which of the following describes an action happening at the exact moment of utterance?",
          "options": [
            "I drink tea every morning.",
            "I am drinking tea right now.",
            "I will drink tea later.",
            "I drank tea yesterday."
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'I am drinking tea right now' describes current active motion."
        },
        {
          "question": "Identify the stative verb that CANNOT be used in the continuous aspect:",
          "options": [
            "swim",
            "belong",
            "paint",
            "drive"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'Belong' expresses possession/state and cannot take -ing (*is belonging)."
        },
        {
          "question": "Why is 'We are meeting the CEO at 3:00 PM tomorrow' correct in English?",
          "options": [
            "It is a hypothetical condition.",
            "Present Continuous expresses pre-arranged, fixed future appointments.",
            "Present Continuous can only talk about the past.",
            "The verb meet cannot take will."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Pre-booked appointments with definite time/place use Present Continuous."
        },
        {
          "question": "What is the nuance of 'He is always biting his fingernails!'?",
          "options": [
            "A pleasant hobby",
            "Mild irritation or complaint at an annoying habit",
            "A scientific law of biology",
            "A future goal"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Present Continuous with 'always' conveys exasperation at a repetitive habit."
        },
        {
          "question": "Complete: 'Prices of electronics ________ down slowly this year.'",
          "options": [
            "come",
            "are coming",
            "are came",
            "comes"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Gradual trends and changing situations take Present Continuous: 'are coming'."
        },
        {
          "question": "Choose the correctly spelled -ing form of 'compete':",
          "options": [
            "competeing",
            "competing",
            "competting",
            "competinng"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Drop the silent -e: compete \u2192 competing."
        },
        {
          "question": "Which sentence has a grammatical error?",
          "options": [
            "Look! It's snowing outside.",
            "I am knowing your phone number.",
            "She is currently living with her parents.",
            "We are having dinner together tonight."
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'Know' cannot take -ing. Say 'I know your phone number'."
        },
        {
          "question": "What is the proper question form?",
          "options": [
            "Why she is running so fast?",
            "Why is she running so fast?",
            "Why does she running so fast?",
            "Why she running so fast?"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Subject-auxiliary inversion: Wh- + is + she + running?"
        },
        {
          "question": "In photo descriptions, which tense is conventionally used?",
          "options": [
            "Past Simple",
            "Present Continuous",
            "Future Perfect",
            "Past Perfect Continuous"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Photos are described as active scenes happening now using Present Continuous."
        },
        {
          "question": "Complete: 'I can't talk right now because I ________ dinner.'",
          "options": [
            "prepare",
            "am preparing",
            "was prepared",
            "will prepared"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Action currently underway: 'am preparing'."
        }
      ]
    }
  },
  "futureContinuous": {
    "meta": {
      "id": "futureContinuous",
      "chapterNumber": 6,
      "title": "Future Continuous",
      "fullTitle": "6. Future Continuous Tense",
      "level": "B2 CEFR",
      "aspect": "Continuous",
      "time": "Future",
      "color": "#a855f7",
      "badge": "CHAPTER 6 \u2022 FUTURE IN PROGRESS",
      "formula": "Subject + WILL BE + Verb-ING",
      "summary": "Use this for actions that will be right in the middle of happening at a specific time in the future."
    },
    "overview": {
      "definition": "The Future Continuous describes an action that will be actively in progress at a specific moment in the future.",
      "coreConcept": "If you look through a telescope or crystal ball at 3:00 PM tomorrow, what will you see the person doing? They will be in the middle of it!",
      "timelineInsight": "A wavy ongoing line placed forward in the future, spanning across a specific future time target.",
      "signalWords": [
        {
          "word": "This time tomorrow",
          "example": "This time tomorrow, I will be flying to Rome."
        },
        {
          "word": "At 8:00 PM tonight",
          "example": "Don't call at 8:00; I will be having dinner."
        },
        {
          "word": "In the middle of",
          "example": "I will be in the middle of studying when you arrive."
        },
        {
          "word": "Next week at this hour",
          "example": "Next week at this hour, we will be relaxing on the beach."
        },
        {
          "word": "All day tomorrow",
          "example": "She will be working on her thesis all day tomorrow."
        },
        {
          "word": "When you arrive",
          "example": "I will be waiting for you when your train arrives."
        }
      ],
      "pillars": [
        {
          "icon": "Hourglass",
          "label": "In Progress in Future",
          "desc": "Actively happening at an exact point in future time.",
          "color": "#a855f7",
          "bg": "rgba(168, 85, 247, 0.08)",
          "border": "rgba(168, 85, 247, 0.25)"
        },
        {
          "icon": "HeartHandshake",
          "label": "Polite Inquiries",
          "desc": "Asking about plans gently without sounding nosy.",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        },
        {
          "icon": "Calendar",
          "label": "Routine Course of Events",
          "desc": "Things happening naturally as part of regular life.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        },
        {
          "icon": "Split",
          "label": "Parallel Future Actions",
          "desc": "Two actions happening simultaneously in the future.",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "action_in_progress_future",
        "title": "1. In the Middle of Doing Something in the Future",
        "tag": "Future Progress",
        "icon": "Hourglass",
        "summary": "Showing that an action will already have started and will be unfinished at a specific future moment.",
        "explanation": "Compare: 'At 8:00 PM I will eat dinner' (I will start at 8) vs 'At 8:00 PM I will be eating dinner' (I will already be at the table mid-meal).",
        "examples": [
          {
            "sentence": "This time tomorrow, I will be flying over the Atlantic Ocean.",
            "translation": "In the middle of the flight tomorrow.",
            "focus": "will be flying"
          },
          {
            "sentence": "Don't call me at 9:00 PM tonight; I will be putting the kids to bed.",
            "translation": "Active evening routine in progress.",
            "focus": "will be putting"
          },
          {
            "sentence": "At noon, the team will be discussing the new project proposal.",
            "translation": "Midst of a business meeting.",
            "focus": "will be discussing"
          }
        ],
        "teacherNote": "Think of it as setting an alarm: when the alarm rings, what will you be doing?"
      },
      {
        "id": "polite_questions_plans",
        "title": "2. Asking Gently About Someone's Plans",
        "tag": "Polite Questions",
        "icon": "HeartHandshake",
        "summary": "Inquiring politely about someone's future schedule without pressuring them.",
        "explanation": "Using Future Continuous sounds very soft, polite, and respectful. It asks what will naturally happen anyway.",
        "examples": [
          {
            "sentence": "Will you be using the printer this afternoon, or may I use it?",
            "translation": "Gentle office inquiry.",
            "focus": "Will you be using"
          },
          {
            "sentence": "Will you be driving past the supermarket on your way home?",
            "translation": "Polite way before asking for a favor.",
            "focus": "Will you be driving"
          },
          {
            "sentence": "Will you be staying for dinner tonight?",
            "translation": "Gracious host inquiry.",
            "focus": "Will you be staying"
          }
        ],
        "teacherNote": "Compare: 'Are you going to use the printer?' (sounds direct/impatient) vs 'Will you be using the printer?' (very polite)."
      },
      {
        "id": "routine_events",
        "title": "3. Events Happening as a Matter of Routine",
        "tag": "Normal Routine",
        "icon": "Calendar",
        "summary": "Things that will happen automatically because they are part of normal everyday routine.",
        "explanation": "Use Future Continuous when you don't need to make special plans \u2014 it will happen naturally anyway.",
        "examples": [
          {
            "sentence": "I will be seeing John at the office tomorrow anyway, so I can give him your notes.",
            "translation": "Natural encounter at work.",
            "focus": "will be seeing"
          },
          {
            "sentence": "We will be passing through Chicago on our trip, so we can stop by.",
            "translation": "Part of regular travel route.",
            "focus": "will be passing"
          },
          {
            "sentence": "She will be working the morning shift next week as usual.",
            "translation": "Regular work schedule.",
            "focus": "will be working"
          }
        ],
        "teacherNote": "It feels completely effortless because it's just regular routine."
      },
      {
        "id": "interrupted_future",
        "title": "4. Future Action Interrupted by Another Event",
        "tag": "Future Interruption",
        "icon": "Zap",
        "summary": "An ongoing future action that gets crossed by a sudden moment when someone arrives.",
        "explanation": "Use Future Continuous for the long ongoing action, and Present Simple after 'when' for the arriving moment.",
        "examples": [
          {
            "sentence": "I will be waiting for you right outside when your train pulls into the station.",
            "translation": "Waiting is ongoing when train arrives.",
            "focus": "will be waiting ... pulls in"
          },
          {
            "sentence": "She will be sleeping when you get home, so please be quiet.",
            "translation": "Ongoing sleep interrupted by arrival.",
            "focus": "will be sleeping ... get home"
          },
          {
            "sentence": "We will be watching the game when you come over.",
            "translation": "Match in progress on arrival.",
            "focus": "will be watching ... come over"
          }
        ],
        "teacherNote": "Remember: never put 'will' after 'when'! Say: 'when you arrive', NOT 'when you will arrive'."
      },
      {
        "id": "parallel_future_actions",
        "title": "5. Parallel Actions in the Future",
        "tag": "Parallel Future",
        "icon": "Split",
        "summary": "Two actions happening simultaneously at the same time in the future.",
        "explanation": "Use Future Continuous with 'while' to describe two people working side by side in the future.",
        "examples": [
          {
            "sentence": "While you are preparing dinner, I will be cleaning the living room.",
            "translation": "Two helpful chores happening together.",
            "focus": "will be cleaning"
          },
          {
            "sentence": "They will be presenting their research while the judges are reviewing the scores.",
            "translation": "Simultaneous academic conference tasks.",
            "focus": "will be presenting"
          },
          {
            "sentence": "Tomorrow morning, millions of commuters will be traveling to work across the city.",
            "translation": "Wide urban scene in motion.",
            "focus": "will be traveling"
          }
        ],
        "teacherNote": "It paints a lively picture of future teamwork and activity."
      },
      {
        "id": "guessing_current_activity",
        "title": "6. Guessing What Someone Is Doing Right Now",
        "tag": "Deductions",
        "icon": "HelpCircle",
        "summary": "Making a confident guess about what someone is probably doing right this second.",
        "explanation": "English speakers sometimes use 'will be + -ing' to predict what someone is doing right now based on their routine.",
        "examples": [
          {
            "sentence": "Don't phone him now; he will be sleeping (it's 3:00 AM there).",
            "translation": "Confident deduction about someone far away.",
            "focus": "will be sleeping"
          },
          {
            "sentence": "She will be taking her exam right about now.",
            "translation": "Guessing based on the exam schedule.",
            "focus": "will be taking"
          },
          {
            "sentence": "They will be having lunch now, so they won't answer their emails.",
            "translation": "Predicting routine activity.",
            "focus": "will be having"
          }
        ],
        "teacherNote": "Here, 'will' doesn't mean the future; it means 'I am 95% sure that is what they are doing right now'."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + WILL BE + Verb-ING",
        "explanation": "Put 'will be' (or 'll be) before the verb with -ing. 'Will be' is identical for all subjects (I, you, he, she, we, they)!",
        "table": [
          {
            "subject": "All Subjects (I / You / He / She / We / They)",
            "auxiliary": "will be ('ll be)",
            "verb": "working / flying",
            "complement": "this time tomorrow"
          }
        ],
        "examples": [
          {
            "en": "I will be flying to Tokyo this time tomorrow.",
            "context": "Action in progress at a future moment"
          },
          {
            "en": "She'll be waiting at the entrance.",
            "context": "Contraction with she'll be"
          }
        ]
      },
      "negative": {
        "formula": "Subject + WON'T BE + Verb-ING",
        "explanation": "Add 'not' between will and be: 'won't be' (will not be), followed by verb-ing.",
        "table": [
          {
            "subject": "All Subjects",
            "auxiliary": "won't be",
            "verb": "working",
            "complement": "next weekend"
          }
        ],
        "examples": [
          {
            "en": "I won't be using the car tonight, you can take it.",
            "context": "Negative statement about future plans"
          },
          {
            "en": "They won't be attending the conference this year.",
            "context": "Notice of non-attendance"
          }
        ]
      },
      "interrogative": {
        "formula": "Will + Subject + BE + Verb-ING...?",
        "explanation": "Start with 'Will', then the person, then 'be', then the verb with -ing.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Will + Subject + be + Verb-ING...?",
            "examples": [
              {
                "q": "Will you be joining us for lunch?",
                "a": "Yes, I will be! / I'd love to."
              },
              {
                "q": "Will she be staying here tonight?",
                "a": "No, she won't be."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + will + Subject + be + Verb-ING...?",
            "examples": [
              {
                "q": "What will you be doing this time next year?",
                "a": "I will be studying at university."
              },
              {
                "q": "Where will they be staying in Paris?",
                "a": "They will be staying at a boutique hotel."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Will you be using your laptop later?",
            "context": "Polite inquiry before asking a favor"
          },
          {
            "en": "What will he be working on tomorrow?",
            "context": "Wh- question about project schedule"
          }
        ]
      },
      "verbToBe": {
        "formula": "Subject + will be + adjective (Simple Future)",
        "explanation": "Note: You almost never say *will be being*. Just say 'I will be happy' or 'She will be at home'.",
        "table": [
          {
            "subject": "All Subjects",
            "form": "will be",
            "negative": "won't be",
            "example": "I will be ready at six."
          }
        ],
        "examples": [
          {
            "en": "He will be in London tomorrow.",
            "context": "Location in the future"
          },
          {
            "en": "We won't be late.",
            "context": "Reassurance"
          }
        ]
      },
      "verbHave": {
        "formula": "will be having (dynamic activities)",
        "explanation": "You can say 'will be having dinner' or 'will be having a meeting', but NOT 'will be having a car' (possession).",
        "table": [
          {
            "subject": "Dynamic have",
            "form": "will be having",
            "example": "We will be having lunch between 12:00 and 1:00."
          }
        ],
        "examples": [
          {
            "en": "They will be having a discussion tomorrow morning.",
            "context": "Scheduled meeting"
          },
          {
            "en": "She will have plenty of time.",
            "context": "Possession uses simple will have"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Forming the -ing Participle",
      "subtitle": "Quick reminder of -ing spelling rules.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Add -ing",
          "condition": "Standard verbs",
          "ruleText": "Add -ing directly to the base.",
          "examples": [
            "fly \u2192 flying",
            "wait \u2192 waiting",
            "sleep \u2192 sleeping"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Drop Silent -e",
          "condition": "Ends in -e",
          "ruleText": "Drop the -e before adding -ing.",
          "examples": [
            "drive \u2192 driving",
            "use \u2192 using",
            "arrive \u2192 arriving"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Double Consonant",
          "condition": "Short CVC vowel + consonant",
          "ruleText": "Double the consonant before -ing.",
          "examples": [
            "sit \u2192 sitting",
            "swim \u2192 swimming",
            "run \u2192 running"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "'ll be",
          "sound": "/\u0259l bi\u02d0/",
          "tip": "Pronounce 'I'll be' smoothly as a single fluid unit: 'aisle-be'."
        },
        {
          "ending": "won't be",
          "sound": "/wo\u028ant bi\u02d0/",
          "tip": "Make sure the 't' in won't is crisp before the 'b'."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Definitely",
        "percentage": 100,
        "color": "#10b981",
        "example": "I will definitely be thinking of you tomorrow."
      },
      {
        "adverb": "Probably",
        "percentage": 80,
        "color": "#3b82f6",
        "example": "He will probably be sleeping by the time we arrive."
      },
      {
        "adverb": "Still",
        "percentage": 70,
        "color": "#06b6d4",
        "example": "They will still be working on the report at 5:00 PM."
      },
      {
        "adverb": "Maybe",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "Maybe she will be feeling better tomorrow."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "You will rarely be waiting more than five minutes."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#ef4444",
        "example": "We will never be taking that shortcut again."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN 'will' and 'be'",
        "formula": "Subject + WILL + [ADVERB] + BE + Verb-ING",
        "explanation": "In positive sentences, the adverb sits between 'will' and 'be'.",
        "examples": [
          {
            "bad": "I will be probably sleeping.",
            "good": "I will probably be sleeping."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: 'Still' sits between 'will' and 'be'",
        "formula": "Subject + WILL + STILL + BE + Verb-ING",
        "explanation": "To emphasize that an action continues, put 'still' right after 'will'.",
        "examples": [
          {
            "bad": "I will be still waiting.",
            "good": "I will still be waiting."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: In negatives, 'probably' goes before 'won't'",
        "formula": "Subject + PROBABLY + WON'T BE + Verb-ING",
        "explanation": "Just like in Future Simple, place 'probably' before 'won't be'.",
        "examples": [
          {
            "bad": "I won't be probably using it.",
            "good": "I probably won't be using it."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Forgetting 'be'",
        "bad": "This time tomorrow I will flying.",
        "good": "This time tomorrow I will be flying.",
        "explanation": "You cannot omit 'be'! The formula is strictly: will + BE + verb-ing."
      },
      {
        "title": "2. Using stative verbs in Future Continuous",
        "bad": "Next year I will be knowing three languages.",
        "good": "Next year I will know three languages.",
        "explanation": "'Know' is a state verb and cannot take continuous form. Use Future Simple ('will know')."
      },
      {
        "title": "3. Using 'will' after 'when' in future time clauses",
        "bad": "I will be waiting when you will arrive.",
        "good": "I will be waiting when you arrive.",
        "explanation": "In time clauses introduced by 'when', always use Present Simple ('when you arrive')."
      },
      {
        "title": "4. Confusing Future Simple with Future Continuous",
        "bad": "At 8:00 PM I will eat dinner. (meaning mid-meal)",
        "good": "At 8:00 PM I will be eating dinner.",
        "explanation": "If the action is already underway at 8:00 PM, use Future Continuous. 'Will eat' means you start at 8:00 PM."
      },
      {
        "title": "5. Wrong word order in questions",
        "bad": "Will be you working tomorrow?",
        "good": "Will you be working tomorrow?",
        "explanation": "The subject goes between 'will' and 'be': Will + Subject + be + -ing?"
      },
      {
        "title": "6. Using double modals (*will can be*)",
        "bad": "I will can be working remotely.",
        "good": "I will be able to work remotely.",
        "explanation": "Never combine two modal auxiliaries. Use 'will be able to work'."
      }
    ],
    "resumeSummary": {
      "title": "Future Continuous Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Future Continuous on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + will be + verb-ing",
          "exampleI": "I will be sleeping.",
          "exampleHe": "She will be driving.",
          "memoryAnchor": "will BE + verb-ING!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + won't be + verb-ing",
          "exampleI": "I won't be working.",
          "exampleHe": "They won't be coming.",
          "memoryAnchor": "won't BE + ING"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Will + Subject + be + verb-ing?",
          "exampleI": "Will you be using this?",
          "exampleHe": "Will he be joining us?",
          "memoryAnchor": "Will + Subject + be + ING?"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + will + Subject + be + -ing?",
          "exampleI": "What will you be doing?",
          "exampleHe": "Where will they be staying?",
          "memoryAnchor": "Wh- + will + Subj + be + ING."
        }
      ],
      "spellingPills": [
        {
          "ending": "Standard",
          "change": "+ing",
          "example": "fly \u2192 flying"
        },
        {
          "ending": "Silent -e",
          "change": "Drop e + ing",
          "example": "drive \u2192 driving"
        },
        {
          "ending": "Short CVC",
          "change": "Double letter",
          "example": "swim \u2192 swimming"
        },
        {
          "ending": "Contraction",
          "change": "will be \u2192 'll be",
          "example": "I'll be waiting"
        }
      ],
      "adverbGoldenFormula": "Subject + WILL + [Adverb] + BE + Verb-ING"
    },
    "exercises": {
      "quiz": [
        {
          "question": "Complete: 'This time tomorrow, we ________ over the Alps.'",
          "options": [
            "will fly",
            "will be flying",
            "fly",
            "are flown"
          ],
          "correct": 1,
          "explanation": "'This time tomorrow' specifies an action in progress in the future: 'will be flying'."
        },
        {
          "question": "What is the polite way to ask a colleague if they need the company van?",
          "options": [
            "Are you going to need the van?",
            "Will you be using the van today?",
            "Do you use the van?",
            "Did you use the van?"
          ],
          "correct": 1,
          "explanation": "'Will you be using...?' is the most polite, neutral way to ask about future plans."
        },
        {
          "question": "Which sentence has an error with a stative verb?",
          "options": [
            "She will be working late tonight.",
            "I will be understanding this chapter by tomorrow.",
            "They will be traveling through Spain.",
            "We will be waiting for your reply."
          ],
          "correct": 1,
          "explanation": "'Understand' is a stative verb and cannot take continuous form (*will be understanding)."
        },
        {
          "question": "Complete: 'Don't call her now; she ________ her baby to sleep.'",
          "options": [
            "will be putting",
            "will put",
            "puts",
            "put"
          ],
          "correct": 0,
          "explanation": "Predicting an activity in progress right now based on routine: 'will be putting'."
        },
        {
          "question": "What is the correct negative form?",
          "options": [
            "I will not working.",
            "I won't be working.",
            "I won't working.",
            "I am not will be working."
          ],
          "correct": 1,
          "explanation": "Negative form: Subject + won't be + verb-ing."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "At 8:00 PM tonight, I ________ (have) dinner with my parents.",
          "correctAnswer": "will be having",
          "hint": "Future Continuous with have.",
          "explanation": "Action in progress at 8:00 PM: 'will be having'."
        },
        {
          "id": 2,
          "sentence": "When you arrive at the airport, I ________ (wait) for you by the gate.",
          "correctAnswer": "will be waiting",
          "hint": "Ongoing waiting action.",
          "explanation": "Future Continuous: 'will be waiting'."
        },
        {
          "id": 3,
          "sentence": "Will you ________ (use) your car tonight, or can I borrow it?",
          "correctAnswer": "be using",
          "hint": "After 'Will you', add 'be using'.",
          "explanation": "Polite question formula: Will you be using...?"
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "This",
            "time",
            "tomorrow",
            "I",
            "will",
            "be",
            "relaxing."
          ],
          "correctOrder": [
            "This",
            "time",
            "tomorrow",
            "I",
            "will",
            "be",
            "relaxing."
          ],
          "targetSentence": "This time tomorrow I will be relaxing.",
          "meaning": "Future active state."
        },
        {
          "id": 2,
          "tokens": [
            "Will",
            "you",
            "be",
            "joining",
            "us",
            "later?"
          ],
          "correctOrder": [
            "Will",
            "you",
            "be",
            "joining",
            "us",
            "later?"
          ],
          "targetSentence": "Will you be joining us later?",
          "meaning": "Polite inquiry."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "I will be waiting for you when you will arrive.",
          "options": [
            "I will be waiting for you when you will arrive.",
            "I will be waiting for you when you arrive.",
            "I will wait for you when you will arrive."
          ],
          "correctIndex": 1,
          "explanation": "Never use 'will' after 'when' in a future time clause. Say 'when you arrive'."
        },
        {
          "id": 2,
          "flawedSentence": "Will be they staying with us next week?",
          "options": [
            "Will be they staying with us next week?",
            "Will they be staying with us next week?",
            "Are they be staying with us next week?"
          ],
          "correctIndex": 1,
          "explanation": "The subject sits between 'will' and 'be': 'Will they be staying...?'"
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "definitely",
          "targetSentence": "I will definitely be attending the gala.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "I",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "will",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "be attending the gala.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'definitely' directly between 'will' and 'be attending'."
        },
        {
          "id": 2,
          "adverb": "probably",
          "targetSentence": "He will probably be sleeping by then.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "He",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "will",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "be sleeping by then.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'probably' between 'will' and 'be sleeping'."
        }
      ],
      "masteryExam": [
        {
          "question": "What is the primary conceptual meaning of Future Continuous?",
          "options": [
            "A completed action before a future deadline",
            "An action actively in progress at a specific future reference point",
            "A spontaneous decision made at the moment of speech",
            "An action that occurred before another past event"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Future Continuous visualizes an action underway at a future point."
        },
        {
          "question": "Which question sounds most polite and detached when asking about someone's plans?",
          "options": [
            "Are you going to drive to town?",
            "Will you drive to town?",
            "Will you be driving into town?",
            "Do you drive into town?"
          ],
          "correct": 2,
          "level": "B2",
          "explanation": "Future Continuous inquires softly about routine plans without imposing."
        },
        {
          "question": "Complete the time clause: 'We will be sleeping when the flight ________.'",
          "options": [
            "will land",
            "lands",
            "is landing",
            "landed"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Time clauses introduced by 'when' take the Present Simple ('lands')."
        },
        {
          "question": "Why is 'I will be having a sports car next year' awkward?",
          "options": [
            "Cars cannot be bought next year.",
            "'Have' denoting possession resists continuous aspect.",
            "It lacks an adverb of frequency.",
            "'Next year' requires Past Simple."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'Have' meaning ownership is a state verb and cannot take -ing."
        },
        {
          "question": "How can Future Continuous be used to talk about the present moment?",
          "options": [
            "It cannot talk about the present.",
            "To express polite deductions about what someone is probably doing right now based on routine.",
            "Only in poetry.",
            "To express 100% scientific truths."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'Don't call him now; he will be sleeping' deduces present activity."
        },
        {
          "question": "Choose the correct negative sentence:",
          "options": [
            "She won't working tomorrow.",
            "She will not be working tomorrow.",
            "She isn't will be working tomorrow.",
            "She won't be work tomorrow."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Negative formula: Subject + will not be / won't be + verb-ing."
        },
        {
          "question": "Where does the adverb 'still' sit in Future Continuous?",
          "options": [
            "Before will",
            "Between will and be",
            "After the -ing verb",
            "At the very end of the sentence"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'Still' sits between 'will' and 'be' ('I will still be working')."
        },
        {
          "question": "Identify the sentence that describes parallel future activities:",
          "options": [
            "I will wash the car and then mow the lawn.",
            "While you are cooking, I will be setting the table.",
            "I had cleaned before you cooked.",
            "If you cook, I wash."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Simultaneous ongoing future activities use parallel continuous aspect."
        },
        {
          "question": "What is the contracted form of 'She will be'?",
          "options": [
            "She'll be",
            "Shelbe",
            "She'b",
            "She will'b"
          ],
          "correct": 0,
          "level": "A2",
          "explanation": "'She will be' contracts to 'She'll be'."
        },
        {
          "question": "Complete: 'Don't visit at noon; the engineers ________ the main servers.'",
          "options": [
            "will reboot",
            "will be rebooting",
            "rebooted",
            "have rebooted"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Reboot in progress at noon requires Future Continuous: 'will be rebooting'."
        }
      ]
    }
  },
  "pastPerfect": {
    "meta": {
      "id": "pastPerfect",
      "chapterNumber": 7,
      "title": "Past Perfect Simple",
      "fullTitle": "7. Past Perfect Simple Tense",
      "level": "B2 CEFR",
      "aspect": "Perfect",
      "time": "Past",
      "color": "#3b82f6",
      "badge": "CHAPTER 7 \u2022 PAST BEFORE PAST",
      "formula": "Subject + HAD + Past Participle (V3)",
      "summary": "Use this to show which of two past actions happened FIRST (the 'past before the past')."
    },
    "overview": {
      "definition": "The Past Perfect is used when you are talking about the past, and you want to refer to something that had happened even earlier.",
      "coreConcept": "Think of it as the 'past before the past'. If two things happened yesterday, the older action gets 'had + V3' so the listener knows which came first.",
      "timelineInsight": "Two points in the past: Past Event 1 (had done) happened BEFORE Past Event 2 (did).",
      "signalWords": [
        {
          "word": "Already",
          "example": "When I arrived, the film had already started."
        },
        {
          "word": "Before / After",
          "example": "She had eaten dinner before she went to bed."
        },
        {
          "word": "By the time",
          "example": "By the time we got to the station, the train had left."
        },
        {
          "word": "Just",
          "example": "The bus had just pulled away when I ran up."
        },
        {
          "word": "Never ... before",
          "example": "I had never seen the ocean before that trip."
        },
        {
          "word": "Because",
          "example": "He was tired because he had worked late."
        }
      ],
      "pillars": [
        {
          "icon": "History",
          "label": "The Older Past Event",
          "desc": "Shows which event happened first between two past moments.",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        },
        {
          "icon": "Lightbulb",
          "label": "Past Cause and Effect",
          "desc": "Explaining the past reason for something ('He was hungry because he hadn't eaten').",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        },
        {
          "icon": "Sparkles",
          "label": "First-Time Experiences",
          "desc": "Experiencing something for the first time in your life up to that past day.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        },
        {
          "icon": "HelpCircle",
          "label": "Regrets & Conditionals",
          "desc": "Imagining a different past with the 3rd Conditional ('If I had known...').",
          "color": "#ec4899",
          "bg": "rgba(236, 72, 153, 0.08)",
          "border": "rgba(236, 72, 153, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "action_before_past",
        "title": "1. An Action That Happened Before Another Past Event",
        "tag": "Earlier Event",
        "icon": "History",
        "summary": "Showing clearly which of two past actions was completed first.",
        "explanation": "Whenever two things happened in the past, use Past Perfect ('had left') for the first action, and Past Simple ('arrived') for the second action.",
        "examples": [
          {
            "sentence": "When I arrived at the station, the train had already left.",
            "translation": "The train departed first; I arrived second.",
            "focus": "had already left"
          },
          {
            "sentence": "She couldn't buy the ticket because she had lost her wallet.",
            "translation": "She lost the wallet first, so she couldn't buy the ticket.",
            "focus": "had lost"
          },
          {
            "sentence": "By the time we got home, the movie had finished.",
            "translation": "Movie finished before our arrival.",
            "focus": "had finished"
          }
        ],
        "teacherNote": "If you don't use 'had', people might think the train left when you arrived!"
      },
      {
        "id": "past_cause_reason",
        "title": "2. Giving the Reason for a Past Feeling or Situation",
        "tag": "Past Cause",
        "icon": "Lightbulb",
        "summary": "Explaining why someone felt a certain way or why a past situation happened.",
        "explanation": "Use Past Perfect after 'because' to explain the background reason for a past emotion or state.",
        "examples": [
          {
            "sentence": "He was nervous because he had never flown on a plane before.",
            "translation": "Never flying was the cause of his nervousness.",
            "focus": "had never flown"
          },
          {
            "sentence": "We were starving because we hadn't eaten all day.",
            "translation": "Not eating earlier caused our extreme hunger.",
            "focus": "hadn't eaten"
          },
          {
            "sentence": "She felt confident during the test because she had studied hard all week.",
            "translation": "Prior studying explained her confidence.",
            "focus": "had studied"
          }
        ],
        "teacherNote": "Notice the structure: Feeling was in Past Simple ('was nervous'), cause was in Past Perfect ('had never flown')."
      },
      {
        "id": "experiences_up_to_past",
        "title": "3. Life Experiences Up to a Specific Past Day",
        "tag": "Past Milestone",
        "icon": "Sparkles",
        "summary": "Talking about whether you had done something in your life before a certain past moment.",
        "explanation": "This is like Present Perfect, but shifted into the past! Instead of 'Have you ever...?', you ask 'Had you ever... before that day?'",
        "examples": [
          {
            "sentence": "I had never seen snow in my life until I visited Norway in 2020.",
            "translation": "First snow experience in 2020.",
            "focus": "had never seen"
          },
          {
            "sentence": "He had already worked at three different companies before he turned thirty.",
            "translation": "Career achievements up to age 30.",
            "focus": "had already worked"
          },
          {
            "sentence": "She had never tasted sushi before her trip to Tokyo.",
            "translation": "Food experience prior to Japan trip.",
            "focus": "had never tasted"
          }
        ],
        "teacherNote": "Words like 'never before', 'already', and 'until' are common signals here."
      },
      {
        "id": "unfulfilled_wishes",
        "title": "4. Past Hopes & Expectations That Didn't Happen",
        "tag": "Unfulfilled Plans",
        "icon": "HeartCrack",
        "summary": "Talking about plans or hopes you had in the past that did not come true.",
        "explanation": "Use verbs like 'had hoped', 'had wished', 'had planned' to show you wanted something, but reality turned out differently.",
        "examples": [
          {
            "sentence": "I had hoped to see you yesterday, but I got stuck at work.",
            "translation": "Past hope that couldn't happen.",
            "focus": "had hoped"
          },
          {
            "sentence": "We had planned to go camping, but it rained all weekend.",
            "translation": "Past plan ruined by bad weather.",
            "focus": "had planned"
          },
          {
            "sentence": "She had intended to study abroad, but financial difficulties changed her plans.",
            "translation": "Past intention not carried out.",
            "focus": "had intended"
          }
        ],
        "teacherNote": "Saying 'I had hoped' immediately tells the listener: '...but it didn't work out'."
      },
      {
        "id": "reported_speech_past",
        "title": "5. Reported Speech & Indirect Thoughts",
        "tag": "Reported Speech",
        "icon": "MessageSquare",
        "summary": "Reporting what someone said in the past about an earlier event.",
        "explanation": "When reporting what someone said in the past, Present Perfect or Past Simple moves back one step into Past Perfect.",
        "examples": [
          {
            "sentence": "She told me that she had lost her passport.",
            "translation": "Reporting what she lost earlier.",
            "focus": "had lost"
          },
          {
            "sentence": "He explained that he had already paid the bill.",
            "translation": "Reporting the completed payment.",
            "focus": "had already paid"
          },
          {
            "sentence": "I realized that I had left my keys inside the car.",
            "translation": "Realizing an earlier mistake.",
            "focus": "had left"
          }
        ],
        "teacherNote": "Direct speech: 'I lost my keys' \u2192 Reported speech: 'He realized he had lost his keys'."
      },
      {
        "id": "third_conditional_regrets",
        "title": "6. Imagining a Different Past (3rd Conditional)",
        "tag": "Past Regrets",
        "icon": "HelpCircle",
        "summary": "Talking about imaginary past situations and regrets with 'If... had + V3'.",
        "explanation": "When you look back on a past mistake and imagine how things could have been different, use 'had + V3' in the 'if' clause.",
        "examples": [
          {
            "sentence": "If I had studied harder, I would have passed the exam.",
            "translation": "Imagining a different past study habit.",
            "focus": "had studied"
          },
          {
            "sentence": "If we had caught that earlier train, we wouldn't have been late.",
            "translation": "Hypothetical past travel change.",
            "focus": "had caught"
          },
          {
            "sentence": "If you had told me about the problem, I could have helped you.",
            "translation": "Past regret about communication.",
            "focus": "had told"
          }
        ],
        "teacherNote": "This allows you to discuss past possibilities and learn from mistakes."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + HAD ('d) + Past Participle (V3)",
        "explanation": "Put 'had' before the 3rd form of the verb (V3). 'Had' is the same for all subjects (I, you, he, she, we, they)!",
        "table": [
          {
            "subject": "All Subjects (I / You / He / She / We / They)",
            "auxiliary": "had ('d)",
            "verb": "left / finished",
            "complement": "before noon"
          }
        ],
        "examples": [
          {
            "en": "I had already eaten when they arrived.",
            "context": "Action finished prior to arrival"
          },
          {
            "en": "She'd seen that film twice before.",
            "context": "Contraction: She had \u2192 She'd"
          }
        ]
      },
      "negative": {
        "formula": "Subject + HADN'T (had not) + Past Participle (V3)",
        "explanation": "Add 'not' to had: 'hadn't', followed by the past participle (V3).",
        "table": [
          {
            "subject": "All Subjects",
            "auxiliary": "hadn't (had not)",
            "verb": "seen / locked",
            "complement": "the front door"
          }
        ],
        "examples": [
          {
            "en": "I hadn't heard the news until you told me.",
            "context": "Negative statement about earlier awareness"
          },
          {
            "en": "They hadn't finished their work when the bell rang.",
            "context": "Uncompleted past event"
          }
        ]
      },
      "interrogative": {
        "formula": "Had + Subject + Past Participle (V3)...?",
        "explanation": "Start the question with 'Had', then the person, then the past participle (V3).",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Had + Subject + V3...?",
            "examples": [
              {
                "q": "Had you met him before that party?",
                "a": "Yes, I had. / No, I hadn't."
              },
              {
                "q": "Had they already left when you called?",
                "a": "Yes, they had."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + had + Subject + V3...?",
            "examples": [
              {
                "q": "Where had you worked before joining this company?",
                "a": "I had worked at a bank in Boston."
              },
              {
                "q": "Why had she left the meeting so early?",
                "a": "Because she had received an urgent phone call."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Had you ever traveled abroad before 2020?",
            "context": "Past life experience question"
          },
          {
            "en": "What had he told you before he resigned?",
            "context": "Wh- inquiry about earlier statement"
          }
        ]
      },
      "verbToBe": {
        "formula": "Subject + had been + adjective / noun",
        "explanation": "With the verb 'to be', the past participle is 'been'. Say 'had been'.",
        "table": [
          {
            "subject": "All Subjects",
            "form": "had been",
            "negative": "hadn't been",
            "example": "He had been sick for three days before going to hospital."
          }
        ],
        "examples": [
          {
            "en": "She had been a teacher before she became an author.",
            "context": "Past career prior to change"
          },
          {
            "en": "We had never been to Rome before that trip.",
            "context": "Experience prior to a past visit"
          }
        ]
      },
      "verbHave": {
        "formula": "Subject + had had (had + had)",
        "explanation": "Yes, 'had had' is completely correct English! The first 'had' is the helper, the second 'had' is the V3 of have.",
        "table": [
          {
            "subject": "All Subjects",
            "form": "had had",
            "negative": "hadn't had",
            "example": "I had had a long day, so I went straight to sleep."
          }
        ],
        "examples": [
          {
            "en": "She had had the car for ten years before it broke down.",
            "context": "Possession prior to breakdown"
          },
          {
            "en": "We hadn't had lunch yet when they invited us.",
            "context": "Meal prior to invitation"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Past Participle (V3) Rules",
      "subtitle": "How to make the 3rd form of the verb.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Regular Verbs: Add -ed",
          "condition": "Regular verbs",
          "ruleText": "Regular past participles look exactly like the past simple (-ed).",
          "examples": [
            "finish \u2192 finished",
            "watch \u2192 watched",
            "clean \u2192 cleaned"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Irregular Verbs: Special V3 Forms",
          "condition": "Irregular verbs",
          "ruleText": "Memorize the 3rd column: see \u2192 saw \u2192 seen, go \u2192 went \u2192 gone.",
          "examples": [
            "go \u2192 gone",
            "see \u2192 seen",
            "write \u2192 written",
            "eat \u2192 eaten"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Verbs That Don't Change",
          "condition": "Identical verbs",
          "ruleText": "A few irregular verbs never change form across V1, V2, and V3.",
          "examples": [
            "cut \u2192 cut \u2192 cut",
            "put \u2192 put \u2192 put",
            "cost \u2192 cost \u2192 cost"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "'d contraction",
          "sound": "/d/ sound",
          "tip": "Pronounce 'I'd' like 'eyed' and 'we'd' like 'weed'."
        },
        {
          "ending": "had had",
          "sound": "/h\u00e6d h\u00e6d/",
          "tip": "Stress the second 'had': 'I had HAD a long day'."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Already",
        "percentage": 100,
        "color": "#10b981",
        "example": "The train had already left when we arrived."
      },
      {
        "adverb": "Always",
        "percentage": 90,
        "color": "#06b6d4",
        "example": "She had always dreamed of visiting Paris."
      },
      {
        "adverb": "Often",
        "percentage": 70,
        "color": "#3b82f6",
        "example": "They had often talked about starting a business."
      },
      {
        "adverb": "Just",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "He had just sat down when the doorbell rang."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "We had rarely spoken before that meeting."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#ef4444",
        "example": "I had never seen such a beautiful sunset before."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN 'had' and the V3 participle",
        "formula": "Subject + HAD + [ADVERB] + V3 Participle",
        "explanation": "Adverbs like already, just, and never sit right between 'had' and the main verb.",
        "examples": [
          {
            "bad": "I had left already.",
            "good": "I had already left."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: 'Yet' sits at the very end of negative sentences",
        "formula": "Subject + hadn't + V3 + [YET]",
        "explanation": "To show something hadn't happened up to that past point, place 'yet' at the end.",
        "examples": [
          {
            "bad": "I hadn't yet eaten.",
            "good": "I hadn't eaten yet."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: In questions, put the adverb after the subject",
        "formula": "Had + Subject + [EVER / ALREADY] + V3...?",
        "explanation": "In questions, place 'ever' or 'already' directly after the subject.",
        "examples": [
          {
            "bad": "Had ever you seen it?",
            "good": "Had you ever seen it?"
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Using Past Perfect for every single past event",
        "bad": "I had woken up, had brushed my teeth, and had eaten breakfast.",
        "good": "I woke up, brushed my teeth, and ate breakfast.",
        "explanation": "When listing a series of events in chronological order, just use Past Simple! Only use Past Perfect when jumping backwards out of order."
      },
      {
        "title": "2. Thinking 'had had' is an error",
        "bad": "I had a headache before, so I went to bed early. (avoiding had had)",
        "good": "I had had a headache all day, so I went to bed early.",
        "explanation": "'Had had' is 100% grammatically correct when 'have' is the main verb in the Past Perfect!"
      },
      {
        "title": "3. Using Past Perfect when 'before' or 'after' already makes it clear",
        "bad": "After I had finished dinner, I watched TV.",
        "good": "After I finished dinner, I watched TV. (Both are fine, but Past Simple is often preferred!)",
        "explanation": "Because 'after' and 'before' clearly show the order of time, native speakers often use simple past: 'After I finished, I left'."
      },
      {
        "title": "4. Using 'have' instead of 'had' in past stories",
        "bad": "When I arrived, he has already left.",
        "good": "When I arrived, he had already left.",
        "explanation": "Never mix Present Perfect ('has left') with Past Simple ('arrived'). Everything in the past story stays in the past ('had left')."
      },
      {
        "title": "5. Using V2 instead of V3 after 'had'",
        "bad": "She had went home.",
        "good": "She had gone home.",
        "explanation": "After 'had', always use the 3rd form (V3 past participle): go \u2192 went \u2192 GONE. 'Had gone' is correct."
      },
      {
        "title": "6. Putting 'had' in the result clause of 3rd conditional",
        "bad": "If I had studied, I had passed.",
        "good": "If I had studied, I would have passed.",
        "explanation": "In 3rd conditionals, 'had' goes in the 'if' clause; the result clause takes 'would have + V3'."
      }
    ],
    "resumeSummary": {
      "title": "Past Perfect Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Past Perfect on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + had ('d) + V3",
          "exampleI": "I had seen it.",
          "exampleHe": "He had left.",
          "memoryAnchor": "had + Past Participle (V3)!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + hadn't + V3",
          "exampleI": "I hadn't heard.",
          "exampleHe": "They hadn't eaten.",
          "memoryAnchor": "hadn't + V3"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Had + Subject + V3?",
          "exampleI": "Had you finished?",
          "exampleHe": "Had she called?",
          "memoryAnchor": "Start with Had!"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + had + Subject + V3?",
          "exampleI": "Where had you been?",
          "exampleHe": "Why had he left?",
          "memoryAnchor": "Wh- + had + Subject + V3."
        }
      ],
      "spellingPills": [
        {
          "ending": "Regular",
          "change": "+ed",
          "example": "finish \u2192 finished"
        },
        {
          "ending": "Irregular V3",
          "change": "Memorize 3rd form",
          "example": "see \u2192 seen"
        },
        {
          "ending": "Double Had",
          "change": "had had",
          "example": "I had had dinner"
        },
        {
          "ending": "Contraction",
          "change": "I had \u2192 I'd",
          "example": "I'd never seen"
        }
      ],
      "adverbGoldenFormula": "Subject + HAD + [Adverb] + V3 Participle"
    },
    "exercises": {
      "quiz": [
        {
          "question": "When we reached the cinema, the film ________.",
          "options": [
            "already started",
            "had already started",
            "has already started",
            "was already started"
          ],
          "correct": 1,
          "explanation": "The film started before we arrived, so use Past Perfect: 'had already started'."
        },
        {
          "question": "He was exhausted yesterday because he ________ for 12 hours straight.",
          "options": [
            "worked",
            "had worked",
            "has worked",
            "works"
          ],
          "correct": 1,
          "explanation": "Working for 12 hours occurred prior to his exhaustion in the past: 'had worked'."
        },
        {
          "question": "What is the correct 3rd form (V3) of 'write'?",
          "options": [
            "wrote",
            "written",
            "writed",
            "writen"
          ],
          "correct": 1,
          "explanation": "write \u2192 wrote \u2192 written."
        },
        {
          "question": "Is the sentence 'She had had that car for years before selling it' correct?",
          "options": [
            "No, you can never repeat 'had'.",
            "Yes, the first is auxiliary had, the second is main verb V3.",
            "No, it must be 'had have'.",
            "No, it must be 'was having'."
          ],
          "correct": 1,
          "explanation": "'Had had' is completely correct: auxiliary had + V3 had."
        },
        {
          "question": "Choose the correct negative form:",
          "options": [
            "We hadn't received the letter when you called.",
            "We didn't had received the letter.",
            "We wasn't received the letter.",
            "We not had received the letter."
          ],
          "correct": 0,
          "explanation": "Negative Past Perfect is: Subject + hadn't + V3."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "By the time the ambulance arrived, the doctor ________ (already / save) the patient.",
          "correctAnswer": "had already saved",
          "hint": "Past Perfect with already.",
          "explanation": "Action completed before ambulance arrival: 'had already saved'."
        },
        {
          "id": 2,
          "sentence": "I didn't recognize my hometown because it ________ (change) so much over the years.",
          "correctAnswer": "had changed",
          "hint": "Past Perfect of change.",
          "explanation": "Changes happened prior to my return: 'had changed'."
        },
        {
          "id": 3,
          "sentence": "Had you ever ________ (see) snow before your trip to Canada?",
          "correctAnswer": "seen",
          "hint": "V3 of see.",
          "explanation": "Past participle of see is seen."
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "The",
            "train",
            "had",
            "already",
            "left",
            "the",
            "station."
          ],
          "correctOrder": [
            "The",
            "train",
            "had",
            "already",
            "left",
            "the",
            "station."
          ],
          "targetSentence": "The train had already left the station.",
          "meaning": "Prior completed departure."
        },
        {
          "id": 2,
          "tokens": [
            "I",
            "had",
            "never",
            "eaten",
            "sushi",
            "before."
          ],
          "correctOrder": [
            "I",
            "had",
            "never",
            "eaten",
            "sushi",
            "before."
          ],
          "targetSentence": "I had never eaten sushi before.",
          "meaning": "Life experience prior to past milestone."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "When we arrived at the airport, our flight has already departed.",
          "options": [
            "When we arrived at the airport, our flight has already departed.",
            "When we arrived at the airport, our flight had already departed.",
            "When we arrived at the airport, our flight departed already."
          ],
          "correctIndex": 1,
          "explanation": "Never use 'has' with past arrived; use 'had already departed'."
        },
        {
          "id": 2,
          "flawedSentence": "She had went to bed before her parents came home.",
          "options": [
            "She had went to bed before her parents came home.",
            "She had gone to bed before her parents came home.",
            "She has went to bed before her parents came home."
          ],
          "correctIndex": 1,
          "explanation": "After 'had', use the V3 participle 'gone', not 'went'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "already",
          "targetSentence": "He had already finished his dinner.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "He",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "had",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "finished his dinner.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'already' between 'had' and the V3 participle 'finished'."
        },
        {
          "id": 2,
          "adverb": "never",
          "targetSentence": "They had never visited the museum.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "They",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "had",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "visited the museum.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'never' between 'had' and 'visited'."
        }
      ],
      "masteryExam": [
        {
          "question": "What is the primary grammatical purpose of the Past Perfect Simple?",
          "options": [
            "To describe a future prediction",
            "To establish chronological precedence: showing which past event happened before another",
            "To describe an action taking place right now",
            "To express universal timeless truths"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "It anchors an earlier past event relative to a subsequent past reference point."
        },
        {
          "question": "Why is 'I woke up, had brushed my teeth, and had left' poor English?",
          "options": [
            "Chronological sequences in narratives simply use Past Simple.",
            "Brushing teeth cannot take -ed.",
            "The subject must be repeated.",
            "It violates subject-verb agreement."
          ],
          "correct": 0,
          "level": "B2",
          "explanation": "Events in natural chronological order use Past Simple."
        },
        {
          "question": "Choose the sentence that correctly explains a past cause:",
          "options": [
            "He was angry because he lost his wallet.",
            "He was angry because he had lost his wallet.",
            "He is angry because he had lost his wallet.",
            "He has been angry because he lost his wallet."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Past state ('was angry') caused by prior event ('had lost')."
        },
        {
          "question": "What does the expression 'had had' represent in 'We had had enough'?",
          "options": [
            "An accidental grammar typing mistake",
            "Auxiliary 'had' + past participle of have ('had')",
            "A colloquial slang phrase",
            "Subjunctive mood only"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Grammatically regular: auxiliary had + V3 had."
        },
        {
          "question": "In 3rd Conditionals, where does 'had + V3' belong?",
          "options": [
            "In the main result clause",
            "In the conditional 'if' clause",
            "In both clauses",
            "At the very end of the sentence"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'If + Subject + had + V3, Subject + would have + V3'."
        },
        {
          "question": "Complete: 'She realized that she ________ her passport on the kitchen table.'",
          "options": [
            "leaves",
            "has left",
            "had left",
            "was leaving"
          ],
          "correct": 2,
          "level": "B1",
          "explanation": "Leaving the passport occurred before the moment of realization: 'had left'."
        },
        {
          "question": "Which signal word commonly marks completed earlier past events?",
          "options": [
            "tomorrow",
            "by the time",
            "right now",
            "every Monday"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'By the time' typically anchors Past Perfect against a past clause."
        },
        {
          "question": "What is the negative contraction of 'had not'?",
          "options": [
            "hadn't",
            "havent",
            "had'nt",
            "did not have"
          ],
          "correct": 0,
          "level": "A2",
          "explanation": "'had not' contracts to 'hadn't'."
        },
        {
          "question": "Identify the irregular verb with identical V1, V2, and V3 forms:",
          "options": [
            "speak",
            "cut",
            "take",
            "write"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "cut \u2192 cut \u2192 cut."
        },
        {
          "question": "How does reported speech shift 'I have seen that movie' when reported in the past?",
          "options": [
            "He said he saw that movie.",
            "He said he had seen that movie.",
            "He said he has seen that movie.",
            "He said he will see that movie."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Present Perfect 'have seen' backshifts to Past Perfect 'had seen'."
        }
      ]
    }
  },
  "presentPerfect": {
    "meta": {
      "id": "presentPerfect",
      "chapterNumber": 8,
      "title": "Present Perfect Simple",
      "fullTitle": "8. Present Perfect Simple Tense",
      "level": "B1 CEFR",
      "aspect": "Perfect",
      "time": "Present",
      "color": "#f59e0b",
      "badge": "CHAPTER 8 \u2022 PAST-PRESENT BRIDGE",
      "formula": "Subject + HAVE / HAS + Past Participle (V3)",
      "summary": "Use this as the bridge between past and present: life experiences, recent actions with visible results, and unfinished time."
    },
    "overview": {
      "definition": "The Present Perfect connects the past to the present moment. Something happened in the past, but the result or importance is right NOW.",
      "coreConcept": "Think of it as a 'Bridge to Now'. You care about the result in your hands today, or your life experience up to this second, not the exact calendar date.",
      "timelineInsight": "An arrow traveling from somewhere in the past and touching the NOW moment.",
      "signalWords": [
        {
          "word": "Already / Just / Yet",
          "example": "I have just finished my lunch."
        },
        {
          "word": "Ever / Never",
          "example": "Have you ever seen a shooting star?"
        },
        {
          "word": "Since / For",
          "example": "I have lived here since 2018."
        },
        {
          "word": "Recently / Lately",
          "example": "She has read a lot of books recently."
        },
        {
          "word": "Today / This week (unfinished)",
          "example": "I have had three cups of coffee today."
        },
        {
          "word": "So far / Up to now",
          "example": "So far, we have raised $1,000."
        }
      ],
      "pillars": [
        {
          "icon": "Sparkles",
          "label": "Life Experience",
          "desc": "Things you have done in your life without saying when ('I have been to Rome').",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        },
        {
          "icon": "Zap",
          "label": "Recent Action + Visible Result",
          "desc": "An action that just happened, with clear proof right in front of your eyes.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        },
        {
          "icon": "Clock",
          "label": "Unfinished Duration",
          "desc": "Started in the past and still true right now with 'for' and 'since'.",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        },
        {
          "icon": "Calendar",
          "label": "Unfinished Time Periods",
          "desc": "Actions inside a time frame that is not finished yet ('today', 'this month').",
          "color": "#ec4899",
          "bg": "rgba(236, 72, 153, 0.08)",
          "border": "rgba(236, 72, 153, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "life_experiences",
        "title": "1. Life Experiences ('Have you ever...?')",
        "tag": "Life Experience",
        "icon": "Sparkles",
        "summary": "Talking about things you have or haven't experienced in your life, without saying when.",
        "explanation": "When you ask 'Have you ever been to Japan?', you don't care about the date \u2014 you only care if the experience exists in that person's memory.",
        "examples": [
          {
            "sentence": "I have visited Japan twice in my life.",
            "translation": "Personal life travel experience.",
            "focus": "have visited"
          },
          {
            "sentence": "Have you ever tried scuba diving?",
            "translation": "Asking about a lifetime experience.",
            "focus": "Have you ever tried"
          },
          {
            "sentence": "She has never eaten seafood.",
            "translation": "Something not experienced up to now.",
            "focus": "has never eaten"
          }
        ],
        "teacherNote": "If you give the exact year or date ('in 2019'), you MUST switch to Past Simple ('I visited Japan in 2019')!"
      },
      {
        "id": "present_result",
        "title": "2. Recent Actions with Visible Results Right Now",
        "tag": "Visible Result",
        "icon": "Zap",
        "summary": "Something happened a moment ago, and you can see or feel the direct result right now.",
        "explanation": "Compare: 'I lost my keys' (maybe I found them yesterday) vs 'I have lost my keys!' (they are missing right now; I can't open my door!).",
        "examples": [
          {
            "sentence": "Look! I have bought a new bicycle.",
            "translation": "The bike is sitting right in front of us.",
            "focus": "have bought"
          },
          {
            "sentence": "She has cut her finger (it is bleeding right now).",
            "translation": "Direct physical proof in the present.",
            "focus": "has cut"
          },
          {
            "sentence": "The chef has burned the toast; smell the smoke!",
            "translation": "Current sensory evidence of a recent event.",
            "focus": "has burned"
          }
        ],
        "teacherNote": "Focus is on the present consequence, not the history."
      },
      {
        "id": "unfinished_states",
        "title": "3. States That Started in the Past and Continue Today",
        "tag": "Past to Present",
        "icon": "Clock",
        "summary": "Talking about a situation or job that began in the past and is STILL true right now.",
        "explanation": "Use 'since' for the starting point in time ('since 2015') and 'for' for the duration ('for 8 years').",
        "examples": [
          {
            "sentence": "I have lived in this apartment for five years (and I still live here).",
            "translation": "Ongoing residency from past to now.",
            "focus": "have lived"
          },
          {
            "sentence": "She has worked at the hospital since 2018.",
            "translation": "Starting year of continuing employment.",
            "focus": "has worked"
          },
          {
            "sentence": "They have been married for twenty years.",
            "translation": "Ongoing relationship milestone.",
            "focus": "have been"
          }
        ],
        "teacherNote": "Never say 'I live here since 2015'! English requires Present Perfect: 'I have lived here since 2015'."
      },
      {
        "id": "unfinished_time_periods",
        "title": "4. Actions in an Unfinished Time Period",
        "tag": "Unfinished Period",
        "icon": "Calendar",
        "summary": "Talking about how many times something happened in a time period that is not finished yet.",
        "explanation": "Words like 'today', 'this morning', 'this week', and 'this year' are unfinished periods of time.",
        "examples": [
          {
            "sentence": "I have drank three cups of coffee today (the day is not over yet!).",
            "translation": "More coffee might still be drank today.",
            "focus": "have drank"
          },
          {
            "sentence": "We have had two tests this week.",
            "translation": "Week is still continuing.",
            "focus": "have had"
          },
          {
            "sentence": "Has it rained this month?",
            "translation": "Inquiring about rainfall during the current month.",
            "focus": "Has it rained"
          }
        ],
        "teacherNote": "If the day is finished (it is midnight), say 'I drank three cups of coffee today'."
      },
      {
        "id": "just_already_yet",
        "title": "5. Fresh News with 'Just', 'Already', and 'Yet'",
        "tag": "Fresh News",
        "icon": "Bell",
        "summary": "Talking about actions that happened very recently, earlier than expected, or haven't happened yet.",
        "explanation": "Use 'just' for a minute ago, 'already' for sooner than expected, and 'yet' in questions and negatives.",
        "examples": [
          {
            "sentence": "The mail carrier has just delivered your package.",
            "translation": "Happened two minutes ago.",
            "focus": "has just delivered"
          },
          {
            "sentence": "I have already finished my homework; can I go out now?",
            "translation": "Finished earlier than anticipated.",
            "focus": "have already finished"
          },
          {
            "sentence": "Have you washed the dishes yet? No, I haven't done them yet.",
            "translation": "Asking about an expected task.",
            "focus": "Have you ... yet"
          }
        ],
        "teacherNote": "'Yet' always goes at the very end of the sentence."
      },
      {
        "id": "repetition_habits",
        "title": "6. Repeated Actions Leading Up to the Present",
        "tag": "Repetition",
        "icon": "Repeat",
        "summary": "Expressing an action that has occurred multiple times up to today.",
        "explanation": "When you count how many times you have done something so far, use Present Perfect.",
        "examples": [
          {
            "sentence": "I have seen that movie five times so far.",
            "translation": "Repeated viewings in lifetime up to now.",
            "focus": "have seen"
          },
          {
            "sentence": "She has called you three times this afternoon.",
            "translation": "Repeated calls today.",
            "focus": "has called"
          },
          {
            "sentence": "We have traveled to Italy every summer for five years.",
            "translation": "Repeated annual tradition.",
            "focus": "have traveled"
          }
        ],
        "teacherNote": "Shows a pattern that may continue in the future."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + HAVE / HAS ('ve / 's) + Past Participle (V3)",
        "explanation": "Use 'have' for I, you, we, they; use 'has' for he, she, it. Then add the 3rd form (V3) of the verb.",
        "table": [
          {
            "subject": "I / You / We / They",
            "auxiliary": "have ('ve)",
            "verb": "worked / visited",
            "complement": "London"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "has ('s)",
            "verb": "worked / visited",
            "complement": "London"
          }
        ],
        "examples": [
          {
            "en": "I have finished my project.",
            "context": "Positive statement with have + V3"
          },
          {
            "en": "She's already arrived at the hotel.",
            "context": "Contraction: She has \u2192 She's"
          }
        ]
      },
      "negative": {
        "formula": "Subject + HAVEN'T / HASN'T + Past Participle (V3)",
        "explanation": "Put 'haven't' (have not) or 'hasn't' (has not) before the past participle.",
        "table": [
          {
            "subject": "I / You / We / They",
            "auxiliary": "haven't (have not)",
            "verb": "seen",
            "complement": "that movie yet"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "hasn't (has not)",
            "verb": "seen",
            "complement": "that movie yet"
          }
        ],
        "examples": [
          {
            "en": "I haven't received your email yet.",
            "context": "Unreceived message"
          },
          {
            "en": "He hasn't called me today.",
            "context": "Absence of call today"
          }
        ]
      },
      "interrogative": {
        "formula": "Have / Has + Subject + Past Participle (V3)...?",
        "explanation": "Start with 'Have' or 'Has', followed by the subject, then the V3 verb.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Have / Has + Subject + V3...?",
            "examples": [
              {
                "q": "Have you seen my glasses?",
                "a": "Yes, I have! / No, I haven't."
              },
              {
                "q": "Has she finished her work?",
                "a": "Yes, she has."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + have/has + Subject + V3...?",
            "examples": [
              {
                "q": "How long have you lived here?",
                "a": "I have lived here for 6 years."
              },
              {
                "q": "Where has he gone?",
                "a": "He has gone to the bank."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Have you ever traveled to Asia?",
            "context": "Life experience inquiry with ever"
          },
          {
            "en": "What have they decided?",
            "context": "Wh- inquiry about a recent decision"
          }
        ]
      },
      "verbToBe": {
        "formula": "Subject + have / has been",
        "explanation": "Notice the difference between 'been to' and 'gone to': 'She has been to Paris' means she visited and returned home! 'She has gone to Paris' means she is still in Paris right now.",
        "table": [
          {
            "subject": "Been to (visited & returned)",
            "example": "I have been to Rome twice in my life."
          },
          {
            "subject": "Gone to (still there)",
            "example": "Marco is not here; he has gone to Rome."
          }
        ],
        "examples": [
          {
            "en": "Have you ever been to Canada?",
            "context": "Asking about travel experience"
          },
          {
            "en": "Where is Mom? She has gone to the grocery store.",
            "context": "She is currently at the store"
          }
        ]
      },
      "verbHave": {
        "formula": "Subject + have / has had",
        "explanation": "Yes, 'have had' is totally normal! 'I have had a headache all day.'",
        "table": [
          {
            "subject": "All Subjects",
            "form": "have / has had",
            "example": "We have had this car for five years."
          }
        ],
        "examples": [
          {
            "en": "I have had three meetings today.",
            "context": "Meetings in unfinished time period"
          },
          {
            "en": "She has had a cold since Tuesday.",
            "context": "Illness continuing to now"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Forms of the Past Participle (V3)",
      "subtitle": "Everything you need to form V3 accurately.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Regular Verbs",
          "condition": "Most verbs",
          "ruleText": "Add -ed to the base form, identical to Past Simple.",
          "examples": [
            "visit \u2192 visited",
            "clean \u2192 cleaned",
            "play \u2192 played"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Drop -e",
          "condition": "Ends in -e",
          "ruleText": "Add -d only.",
          "examples": [
            "live \u2192 lived",
            "decide \u2192 decided"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Irregular Participles",
          "condition": "Irregular verbs",
          "ruleText": "Memorize the 3rd form: speak \u2192 spoken, break \u2192 broken, fly \u2192 flown.",
          "examples": [
            "see \u2192 seen",
            "do \u2192 done",
            "go \u2192 gone / been",
            "eat \u2192 eaten"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "Contractions",
          "sound": "I've / We've / She's",
          "tip": "Pronounce 'I've' as /a\u026av/, 'we've' as /wi\u02d0v/, and 'she's' as /\u0283i\u02d0z/."
        },
        {
          "ending": "been",
          "sound": "/b\u026an/ (US) or /bi\u02d0n/ (UK)",
          "tip": "American English usually pronounces 'been' like 'bin'."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Always",
        "percentage": 100,
        "color": "#10b981",
        "example": "I have always loved classical music."
      },
      {
        "adverb": "Already",
        "percentage": 90,
        "color": "#06b6d4",
        "example": "She has already finished her exam."
      },
      {
        "adverb": "Often",
        "percentage": 70,
        "color": "#3b82f6",
        "example": "We have often thought about moving to the coast."
      },
      {
        "adverb": "Recently",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "They have recently purchased a home."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "He has rarely complained about his job."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#ef4444",
        "example": "I have never seen such an incredible sight."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN have/has and V3",
        "formula": "Subject + HAVE / HAS + [ADVERB] + V3",
        "explanation": "Adverbs like already, just, never, and ever sit between have/has and the V3 verb.",
        "examples": [
          {
            "bad": "I have finished already my work.",
            "good": "I have already finished my work."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: 'Yet' goes at the very END",
        "formula": "Subject + haven't/hasn't + V3 + [YET]",
        "explanation": "'Yet' sits at the end of negative sentences and questions.",
        "examples": [
          {
            "bad": "I haven't yet seen it.",
            "good": "I haven't seen it yet."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: 'Since' vs 'For'",
        "formula": "SINCE + starting point | FOR + duration",
        "explanation": "Use 'since' for dates and times (since 2010, since 8 AM). Use 'for' for periods of time (for 5 years, for two hours).",
        "examples": [
          {
            "bad": "I have lived here since 5 years.",
            "good": "I have lived here for 5 years."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Using Present Perfect with a finished past time word",
        "bad": "I have seen him yesterday.",
        "good": "I saw him yesterday.",
        "explanation": "When you mention a closed past time (yesterday, last week, in 2015), you CANNOT use Present Perfect. You must use Past Simple ('saw')."
      },
      {
        "title": "2. Confusing 'been to' and 'gone to'",
        "bad": "She is in London now because she has been to London.",
        "good": "She has gone to London (she is still there now).",
        "explanation": "'Has been to' means went and returned home. 'Has gone to' means still there right now."
      },
      {
        "title": "3. Saying 'since 5 years' instead of 'for 5 years'",
        "bad": "I work here since five years.",
        "good": "I have worked here for five years.",
        "explanation": "Use 'for' with a number of years/hours ('for five years'). Use 'since' with a starting date ('since 2019'). And always use Present Perfect!"
      },
      {
        "title": "4. Asking 'When have you...?'",
        "bad": "When have you arrived?",
        "good": "When did you arrive?",
        "explanation": "Questions starting with 'When' or 'What time' always ask for a specific past time, so they take Past Simple with 'did'!"
      },
      {
        "title": "5. Forgetting that he/she/it takes 'has'",
        "bad": "He have finished his homework.",
        "good": "He has finished his homework.",
        "explanation": "Third person singular (he, she, it) must always take 'has', not 'have'."
      },
      {
        "title": "6. Using V2 instead of V3 after have/has",
        "bad": "I have went to the doctor.",
        "good": "I have been / gone to the doctor.",
        "explanation": "Always use the 3rd form (V3) after have/has: go \u2192 went \u2192 GONE. Never say 'have went'!"
      }
    ],
    "resumeSummary": {
      "title": "Present Perfect Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Present Perfect on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + have / has + V3",
          "exampleI": "I have seen it.",
          "exampleHe": "She has called.",
          "memoryAnchor": "have/has + Past Participle (V3)!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + haven't / hasn't + V3",
          "exampleI": "I haven't eaten.",
          "exampleHe": "He hasn't arrived.",
          "memoryAnchor": "haven't / hasn't + V3"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Have / Has + Subject + V3?",
          "exampleI": "Have you finished?",
          "exampleHe": "Has she left?",
          "memoryAnchor": "Have/Has at the start!"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + have/has + Subject + V3?",
          "exampleI": "Where have you been?",
          "exampleHe": "What has he done?",
          "memoryAnchor": "Wh- + have/has + Subj + V3."
        }
      ],
      "spellingPills": [
        {
          "ending": "Regular",
          "change": "+ed",
          "example": "visit \u2192 visited"
        },
        {
          "ending": "Irregular V3",
          "change": "Memorize 3rd form",
          "example": "see \u2192 seen"
        },
        {
          "ending": "Since",
          "change": "Starting date",
          "example": "since 2018"
        },
        {
          "ending": "For",
          "change": "Number of years/days",
          "example": "for 3 years"
        }
      ],
      "adverbGoldenFormula": "Subject + HAVE / HAS + [Adverb] + V3 Participle"
    },
    "exercises": {
      "quiz": [
        {
          "question": "Which sentence is correct for someone who visited Paris and came back home?",
          "options": [
            "She has gone to Paris.",
            "She has been to Paris.",
            "She has went to Paris.",
            "She was gone to Paris."
          ],
          "correct": 1,
          "explanation": "'Has been to' means visited and returned home."
        },
        {
          "question": "Complete the sentence: 'I have known him ________ ten years.'",
          "options": [
            "since",
            "for",
            "from",
            "ago"
          ],
          "correct": 1,
          "explanation": "Ten years is a duration of time, so use 'for'."
        },
        {
          "question": "Why is 'I have seen that movie yesterday' incorrect?",
          "options": [
            "'Yesterday' is a finished past time word and requires Past Simple 'saw'.",
            "'Seen' is spelled wrong.",
            "'Movie' is uncountable.",
            "There is no error."
          ],
          "correct": 0,
          "explanation": "Finished past time markers like 'yesterday' demand Past Simple: 'I saw that movie yesterday'."
        },
        {
          "question": "What is the correct question to ask about someone's life experience?",
          "options": [
            "Did you ever eat sushi?",
            "Have you ever eaten sushi?",
            "Were you ever eating sushi?",
            "Have you ever ate sushi?"
          ],
          "correct": 1,
          "explanation": "Life experience question uses: 'Have you ever eaten sushi?'"
        },
        {
          "question": "Complete: 'She ________ her homework yet.'",
          "options": [
            "hasn't finished",
            "didn't finished",
            "haven't finished",
            "hasn't finish"
          ],
          "correct": 0,
          "explanation": "Third person singular negative: hasn't + finished."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "I ________ (just / receive) a text message from my manager.",
          "correctAnswer": "have just received",
          "hint": "Present Perfect with just.",
          "explanation": "Action completed a moment ago: 'have just received'."
        },
        {
          "id": 2,
          "sentence": "He ________ (live) in Canada since 2015.",
          "correctAnswer": "has lived",
          "hint": "Third person singular has + lived.",
          "explanation": "Continuing state since 2015: 'has lived'."
        },
        {
          "id": 3,
          "sentence": "Have you ________ (eat) breakfast yet this morning?",
          "correctAnswer": "eaten",
          "hint": "V3 of eat.",
          "explanation": "The past participle of eat is eaten."
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "I",
            "have",
            "never",
            "seen",
            "such",
            "beauty."
          ],
          "correctOrder": [
            "I",
            "have",
            "never",
            "seen",
            "such",
            "beauty."
          ],
          "targetSentence": "I have never seen such beauty.",
          "meaning": "Lifetime experience observation."
        },
        {
          "id": 2,
          "tokens": [
            "Has",
            "the",
            "train",
            "arrived",
            "yet?"
          ],
          "correctOrder": [
            "Has",
            "the",
            "train",
            "arrived",
            "yet?"
          ],
          "targetSentence": "Has the train arrived yet?",
          "meaning": "Inquiring about recent arrival."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "I have bought this jacket last Saturday.",
          "options": [
            "I have bought this jacket last Saturday.",
            "I bought this jacket last Saturday.",
            "I had bought this jacket last Saturday."
          ],
          "correctIndex": 1,
          "explanation": "Specific past time 'last Saturday' requires Past Simple 'bought'."
        },
        {
          "id": 2,
          "flawedSentence": "She has lived here since four years.",
          "options": [
            "She has lived here since four years.",
            "She has lived here for four years.",
            "She lives here since four years."
          ],
          "correctIndex": 1,
          "explanation": "Durations of time take 'for': 'for four years'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "already",
          "targetSentence": "We have already seen that movie.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "We",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "have",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "seen that movie.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'already' between 'have' and the V3 participle 'seen'."
        },
        {
          "id": 2,
          "adverb": "yet",
          "targetSentence": "I haven't received the package yet.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "I",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "haven't received the package",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'yet' at the very end of the negative sentence."
        }
      ],
      "masteryExam": [
        {
          "question": "What is the primary distinction between Past Simple and Present Perfect?",
          "options": [
            "Past Simple uses V3, Present Perfect uses V2.",
            "Past Simple anchors in a finished, closed past time; Present Perfect maintains an active connection or result in the present.",
            "Past Simple cannot be used in storytelling.",
            "There is no functional distinction."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Past Simple denotes closed past; Present Perfect connects past action to present reality."
        },
        {
          "question": "Complete: 'Where is Michael?' \u2014 'He ________ to the bank; he'll be back in an hour.'",
          "options": [
            "has been",
            "has gone",
            "went to been",
            "was gone"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'Has gone' means he is currently away at the bank."
        },
        {
          "question": "Which question is grammatically incorrect in standard English?",
          "options": [
            "When did you buy that phone?",
            "When have you bought that phone?",
            "Where did you buy that phone?",
            "Why did you buy that phone?"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'When' requests an exact past time and cannot pair with Present Perfect."
        },
        {
          "question": "Choose the correct sentence with 'since':",
          "options": [
            "I have been a teacher since five years.",
            "I have been a teacher since 2019.",
            "I am a teacher since 2019.",
            "I was a teacher since 2019."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'Since' requires a specific starting point in time + Present Perfect."
        },
        {
          "question": "What is the past participle of the verb 'choose'?",
          "options": [
            "choosed",
            "chose",
            "chosen",
            "chusen"
          ],
          "correct": 2,
          "level": "A2",
          "explanation": "choose \u2192 chose \u2192 chosen."
        },
        {
          "question": "Which sentence expresses an action inside an unfinished time period?",
          "options": [
            "I drank two coffees yesterday.",
            "I have had two coffees this morning (it's 10:00 AM).",
            "I drank two coffees two hours ago.",
            "I had drunk two coffees last night."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "At 10:00 AM, the morning is still ongoing, making 'this morning' an open period."
        },
        {
          "question": "Identify the sentence with an error:",
          "options": [
            "They have lived here for a decade.",
            "She hasn't finished her dinner yet.",
            "He has went to the supermarket.",
            "Have you ever flown a helicopter?"
          ],
          "correct": 2,
          "level": "A2",
          "explanation": "'Has went' is incorrect; use the V3 participle 'has gone'."
        },
        {
          "question": "What nuance does 'I have already done it' convey?",
          "options": [
            "It will happen tomorrow.",
            "It was completed earlier than expected or required.",
            "It is currently happening right now.",
            "It was never completed."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'Already' highlights earlier-than-expected completion."
        },
        {
          "question": "Complete: 'How many countries ________ you ________ in your lifetime?'",
          "options": [
            "did / visit",
            "have / visited",
            "do / visit",
            "were / visiting"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Life experience question up to now takes 'have visited'."
        },
        {
          "question": "What is the contraction of 'We have'?",
          "options": [
            "We'v",
            "We've",
            "We'h",
            "Weve"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'We have' contracts to 'We've'."
        }
      ]
    }
  },
  "futurePerfect": {
    "meta": {
      "id": "futurePerfect",
      "chapterNumber": 9,
      "title": "Future Perfect Simple",
      "fullTitle": "9. Future Perfect Simple Tense",
      "level": "B2 CEFR",
      "aspect": "Perfect",
      "time": "Future",
      "color": "#f97316",
      "badge": "CHAPTER 9 \u2022 COMPLETED BY FUTURE",
      "formula": "Subject + WILL HAVE + Past Participle (V3)",
      "summary": "Use this to show that an action will be completed BEFORE a specific deadline in the future."
    },
    "overview": {
      "definition": "The Future Perfect is used to look back from a point in the future and say that an action will already be finished and done before that future time.",
      "coreConcept": "Think of setting a deadline: 'By 5:00 PM tomorrow, it will be done!' You are standing in the future looking back at a completed mission.",
      "timelineInsight": "Imagine a deadline in the future (e.g. 2030 or 5:00 PM). The action finishes BEFORE that deadline line is reached.",
      "signalWords": [
        {
          "word": "By 5:00 PM / By next year",
          "example": "By 5:00 PM, I will have finished this report."
        },
        {
          "word": "By the time (time clause)",
          "example": "By the time you wake up, I will have left."
        },
        {
          "word": "Before (in the future)",
          "example": "I will have saved $5,000 before Christmas."
        },
        {
          "word": "In two years' time",
          "example": "In two years' time, we will have bought a house."
        },
        {
          "word": "By then",
          "example": "Don't worry, by then they will have arrived."
        },
        {
          "word": "Already (by future time)",
          "example": "She will have already left when you call."
        }
      ],
      "pillars": [
        {
          "icon": "CheckCircle2",
          "label": "Completed by Deadline",
          "desc": "An action 100% finished before a specific future time.",
          "color": "#f97316",
          "bg": "rgba(249, 115, 22, 0.08)",
          "border": "rgba(249, 115, 22, 0.25)"
        },
        {
          "icon": "Award",
          "label": "Future Milestones",
          "desc": "Reaching an achievement before a specific age or date.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        },
        {
          "icon": "Clock",
          "label": "Duration to a Future Point",
          "desc": "Stating how long something will have lasted by next year.",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        },
        {
          "icon": "ShieldCheck",
          "label": "Guarantees & Commitments",
          "desc": "Promising a client or boss that work will be completed on time.",
          "color": "#8b5cf6",
          "bg": "rgba(139, 92, 246, 0.08)",
          "border": "rgba(139, 92, 246, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "action_completed_before_deadline",
        "title": "1. Actions Completed Before a Future Deadline",
        "tag": "Future Deadline",
        "icon": "CheckCircle2",
        "summary": "Showing that a task or project will be finished before an exact future hour or date.",
        "explanation": "Whenever you use 'by' followed by a future time (by tomorrow, by 5:00 PM, by next week), use 'will have + V3'.",
        "examples": [
          {
            "sentence": "By 5:00 PM, I will have finished writing this entire report.",
            "translation": "The report will be completed before the clock hits 5:00.",
            "focus": "will have finished"
          },
          {
            "sentence": "They will have built the new bridge by the end of next year.",
            "translation": "Construction will conclude before next year ends.",
            "focus": "will have built"
          },
          {
            "sentence": "Will you have completed your homework by dinner time?",
            "translation": "Asking about deadline completion.",
            "focus": "Will you have completed"
          }
        ],
        "teacherNote": "Pro tip: 'By 5 PM' means at 5 PM or anytime earlier \u2014 never later!"
      },
      {
        "id": "future_milestones",
        "title": "2. Reaching Milestones Before an Age or Date",
        "tag": "Milestones",
        "icon": "Award",
        "summary": "Talking about life goals and milestones you plan to achieve before reaching a certain age.",
        "explanation": "Express personal ambition: 'Before I turn thirty, I will have visited twenty countries.'",
        "examples": [
          {
            "sentence": "Before she turns thirty, she will have published her first novel.",
            "translation": "Personal milestone before 30th birthday.",
            "focus": "will have published"
          },
          {
            "sentence": "By next summer, I will have saved enough money to buy a car.",
            "translation": "Financial savings milestone.",
            "focus": "will have saved"
          },
          {
            "sentence": "He will have graduated from medical school before his 25th birthday.",
            "translation": "Academic career milestone.",
            "focus": "will have graduated"
          }
        ],
        "teacherNote": "This tense is the favorite tool of goal-setters and career planners."
      },
      {
        "id": "duration_up_to_future",
        "title": "3. Duration Continuing Up to a Future Point",
        "tag": "Duration to Future",
        "icon": "Clock",
        "summary": "Measuring how many years or months a state or marriage will have lasted by an upcoming anniversary.",
        "explanation": "Use Future Perfect with 'for' and an upcoming date: 'Next month, we will have been married for ten years.'",
        "examples": [
          {
            "sentence": "Next June, my parents will have been married for thirty years.",
            "translation": "Marriage anniversary milestone.",
            "focus": "will have been"
          },
          {
            "sentence": "By next Friday, I will have worked at this hospital for exactly five years.",
            "translation": "Work anniversary calculation.",
            "focus": "will have worked"
          },
          {
            "sentence": "In December, she will have owned this house for a full decade.",
            "translation": "Property ownership milestone.",
            "focus": "will have owned"
          }
        ],
        "teacherNote": "The focus is on celebrating the completed number of years at that future point."
      },
      {
        "id": "by_the_time_clause",
        "title": "4. Combining with 'By The Time' Clauses",
        "tag": "Time Clauses",
        "icon": "Calendar",
        "summary": "Stating what will already be done when another person arrives in the future.",
        "explanation": "The rule: The main clause takes 'will have + V3'; the 'by the time' clause takes Present Simple!",
        "examples": [
          {
            "sentence": "By the time you wake up tomorrow, I will have already left for the airport.",
            "translation": "Departure happens before the person wakes up.",
            "focus": "will have already left ... wake up"
          },
          {
            "sentence": "By the time the guests arrive, we will have prepared all the food.",
            "translation": "Cooking will be done before guests knock.",
            "focus": "will have prepared ... arrive"
          },
          {
            "sentence": "The sun will have risen by the time we begin our morning run.",
            "translation": "Sunrise finishes before running starts.",
            "focus": "will have risen ... begin"
          }
        ],
        "teacherNote": "Never put 'will' inside the 'by the time' clause! Say: 'By the time you wake up', NOT 'By the time you will wake up'."
      },
      {
        "id": "confident_deduction",
        "title": "5. Confident Deductions About What Has Probably Happened",
        "tag": "Deductions",
        "icon": "HelpCircle",
        "summary": "Making a confident guess that something has probably already happened by now.",
        "explanation": "Just like Future Continuous can guess current actions, Future Perfect can guess completed actions right now.",
        "examples": [
          {
            "sentence": "Don't phone them now; they will have arrived at the hotel by now.",
            "translation": "Confident deduction about their journey.",
            "focus": "will have arrived"
          },
          {
            "sentence": "You will have heard the news about the merger by now, surely?",
            "translation": "Assuming information has reached the listener.",
            "focus": "will have heard"
          },
          {
            "sentence": "He will have read your email by this afternoon.",
            "translation": "Predicting completed reading.",
            "focus": "will have read"
          }
        ],
        "teacherNote": "Here 'will have' expresses high certainty about a finished event."
      },
      {
        "id": "guarantees_commitments",
        "title": "6. Professional Guarantees & Client Promises",
        "tag": "Guarantees",
        "icon": "ShieldCheck",
        "summary": "Giving a firm guarantee to a manager, teacher, or client that work will be delivered.",
        "explanation": "Saying 'We will have repaired your vehicle by Friday afternoon' provides strong confidence and clarity.",
        "examples": [
          {
            "sentence": "Our technicians will have resolved the network issue before the morning shift starts.",
            "translation": "Professional IT commitment.",
            "focus": "will have resolved"
          },
          {
            "sentence": "I will have sent the finalized contracts before the end of the business day.",
            "translation": "Legal/business delivery promise.",
            "focus": "will have sent"
          },
          {
            "sentence": "The chef will have plated all dishes before the banquet begins.",
            "translation": "Hospitality operational guarantee.",
            "focus": "will have plated"
          }
        ],
        "teacherNote": "It gives a reassuring, polished impression in professional communication."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + WILL HAVE ('ll have) + Past Participle (V3)",
        "explanation": "Put 'will have' before the 3rd form (V3) of the verb. 'Will have' is the same for all subjects!",
        "table": [
          {
            "subject": "All Subjects (I / You / He / She / We / They)",
            "auxiliary": "will have ('ll have)",
            "verb": "finished / arrived",
            "complement": "by 6:00 PM"
          }
        ],
        "examples": [
          {
            "en": "I will have finished my degree by next summer.",
            "context": "Academic milestone"
          },
          {
            "en": "She'll have received the package by noon.",
            "context": "Contraction: She'll have"
          }
        ]
      },
      "negative": {
        "formula": "Subject + WON'T HAVE (will not have) + Past Participle (V3)",
        "explanation": "Add 'not' between will and have: 'won't have' (will not have), followed by V3.",
        "table": [
          {
            "subject": "All Subjects",
            "auxiliary": "won't have (will not have)",
            "verb": "completed",
            "complement": "the project by Friday"
          }
        ],
        "examples": [
          {
            "en": "We won't have saved enough money by next month.",
            "context": "Negative expectation"
          },
          {
            "en": "He won't have finished the exam before the bell.",
            "context": "Time constraint"
          }
        ]
      },
      "interrogative": {
        "formula": "Will + Subject + HAVE + Past Participle (V3)...?",
        "explanation": "Start with 'Will', then the person, then 'have', then the V3 verb.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Will + Subject + have + V3...?",
            "examples": [
              {
                "q": "Will you have finished the report by 5 PM?",
                "a": "Yes, I will have. / No, I won't have."
              },
              {
                "q": "Will they have arrived by then?",
                "a": "Yes, they will have."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + will + Subject + have + V3...?",
            "examples": [
              {
                "q": "How many books will you have read by the end of the year?",
                "a": "I will have read 25 books."
              },
              {
                "q": "Where will they have moved by next spring?",
                "a": "They will have moved to Chicago."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Will she have left before we get there?",
            "context": "Inquiry about relative departure"
          },
          {
            "en": "What will you have accomplished by age 30?",
            "context": "Wh- milestone inquiry"
          }
        ]
      },
      "verbToBe": {
        "formula": "Subject + will have been + adjective / noun",
        "explanation": "With the verb 'to be', use 'will have been'.",
        "table": [
          {
            "subject": "All Subjects",
            "form": "will have been",
            "example": "By next week, I will have been here for a month."
          }
        ],
        "examples": [
          {
            "en": "They will have been married for forty years next year.",
            "context": "Anniversary milestone"
          },
          {
            "en": "She will have been in the hospital for a week tomorrow.",
            "context": "Duration of stay"
          }
        ]
      },
      "verbHave": {
        "formula": "Subject + will have had",
        "explanation": "Say 'will have had' when have is the main verb: 'By tonight, I will have had three interviews.'",
        "table": [
          {
            "subject": "All Subjects",
            "form": "will have had",
            "example": "By the end of today, we will have had five meetings."
          }
        ],
        "examples": [
          {
            "en": "She will have had this car for a decade by December.",
            "context": "Car ownership duration"
          },
          {
            "en": "We will have had plenty of practice before the match.",
            "context": "Preparation milestone"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Forms of the Past Participle (V3)",
      "subtitle": "Forming the past participle for Future Perfect.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Regular Verbs",
          "condition": "Most verbs",
          "ruleText": "Add -ed (finished, cleaned, saved).",
          "examples": [
            "finish \u2192 finished",
            "save \u2192 saved",
            "complete \u2192 completed"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Irregular Verbs",
          "condition": "Irregular verbs",
          "ruleText": "Use the 3rd form (written, done, built, seen).",
          "examples": [
            "write \u2192 written",
            "build \u2192 built",
            "leave \u2192 left",
            "grow \u2192 grown"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "'ll have pronunciation",
          "sound": "/l\u0259v/ or /l h\u00e6v/",
          "tip": "In fast natural speech, 'I'll have' sounds like 'I-luhv': 'I'll have finished' \u2192 /a\u026al\u0259v \u02c8f\u026an\u026a\u0283t/."
        },
        {
          "ending": "won't have",
          "sound": "/wo\u028ant h\u00e6v/",
          "tip": "Say won't crisply before have."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Definitely",
        "percentage": 100,
        "color": "#10b981",
        "example": "I will definitely have finished by then."
      },
      {
        "adverb": "Already",
        "percentage": 90,
        "color": "#06b6d4",
        "example": "She will have already left when you call."
      },
      {
        "adverb": "Probably",
        "percentage": 80,
        "color": "#3b82f6",
        "example": "They will probably have arrived by 7 PM."
      },
      {
        "adverb": "Mostly",
        "percentage": 70,
        "color": "#8b5cf6",
        "example": "We will have mostly completed the tasks."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "You will rarely have seen such speed."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#ef4444",
        "example": "I will never have experienced anything like it."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN 'will' and 'have'",
        "formula": "Subject + WILL + [ADVERB] + HAVE + V3",
        "explanation": "Adverbs like definitely, probably, and already sit between 'will' and 'have'.",
        "examples": [
          {
            "bad": "I will have probably finished.",
            "good": "I will probably have finished."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: 'Already' can also sit between 'have' and V3",
        "formula": "Subject + will + have + ALREADY + V3",
        "explanation": "'Already' is flexible: you can say 'will already have finished' or 'will have already finished'.",
        "examples": [
          {
            "bad": "I will finished already have.",
            "good": "I will have already finished."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: In time clauses, use Present Simple",
        "formula": "BY THE TIME + Subject + Present Simple, Subject + will have + V3",
        "explanation": "Never use 'will' inside the 'by the time' clause.",
        "examples": [
          {
            "bad": "By the time you will arrive, I will have finished.",
            "good": "By the time you arrive, I will have finished."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Using 'will have' inside the 'by the time' clause",
        "bad": "By the time you will have arrived, the movie will have started.",
        "good": "By the time you arrive, the movie will have started.",
        "explanation": "The time clause after 'by the time' or 'when' takes the Present Simple ('arrive')."
      },
      {
        "title": "2. Forgetting 'have' in Future Perfect",
        "bad": "By 5:00 PM I will finished.",
        "good": "By 5:00 PM I will have finished.",
        "explanation": "The formula requires both 'will' and 'have': will have finished."
      },
      {
        "title": "3. Using 'has' with third person (*will has*)",
        "bad": "She will has graduated by next year.",
        "good": "She will have graduated by next year.",
        "explanation": "After 'will', always use the base form 'have'. Never say 'will has'!"
      },
      {
        "title": "4. Confusing Future Simple with Future Perfect",
        "bad": "By 5:00 PM I will finish the report.",
        "good": "By 5:00 PM I will have finished the report.",
        "explanation": "'By 5:00 PM' is a deadline line, which demands Future Perfect ('will have finished')."
      },
      {
        "title": "5. Using V2 instead of V3 after will have",
        "bad": "They will have went home.",
        "good": "They will have gone home.",
        "explanation": "Use the 3rd form (V3) participle: go \u2192 went \u2192 GONE. 'Will have gone'."
      },
      {
        "title": "6. Misinterpreting 'by'",
        "bad": "I will have finished at 5 PM. (meaning only at 5 PM)",
        "good": "I will have finished by 5 PM. (anytime up to 5 PM)",
        "explanation": "'By' indicates the latest deadline; the event can complete at 4:30 PM, 4:45 PM, or 5:00 PM."
      }
    ],
    "resumeSummary": {
      "title": "Future Perfect Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Future Perfect on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + will have + V3",
          "exampleI": "I will have finished.",
          "exampleHe": "She will have graduated.",
          "memoryAnchor": "will have + Past Participle (V3)!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + won't have + V3",
          "exampleI": "I won't have left.",
          "exampleHe": "They won't have arrived.",
          "memoryAnchor": "won't have + V3"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Will + Subject + have + V3?",
          "exampleI": "Will you have eaten?",
          "exampleHe": "Will he have left?",
          "memoryAnchor": "Will + Subj + have + V3?"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + will + Subject + have + V3?",
          "exampleI": "What will you have done?",
          "exampleHe": "Where will they have gone?",
          "memoryAnchor": "Wh- + will + Subj + have + V3."
        }
      ],
      "spellingPills": [
        {
          "ending": "Regular",
          "change": "+ed",
          "example": "finish \u2192 finished"
        },
        {
          "ending": "Irregular V3",
          "change": "Memorize 3rd form",
          "example": "see \u2192 seen"
        },
        {
          "ending": "Never 'has'",
          "change": "Always 'will have'",
          "example": "She will have left"
        },
        {
          "ending": "Negative",
          "change": "won't have",
          "example": "We won't have saved"
        }
      ],
      "adverbGoldenFormula": "Subject + WILL + [Adverb] + HAVE + V3 Participle"
    },
    "exercises": {
      "quiz": [
        {
          "question": "Complete the sentence: 'By next December, our team ________ the new app.'",
          "options": [
            "will launch",
            "will have launched",
            "has launched",
            "launched"
          ],
          "correct": 1,
          "explanation": "'By next December' sets a future deadline for completion: 'will have launched'."
        },
        {
          "question": "Can you say 'She will has finished by noon'?",
          "options": [
            "Yes, because she takes has.",
            "No, modal 'will' is always followed by base 'have'.",
            "Yes, in British English only.",
            "No, it must be 'had'."
          ],
          "correct": 1,
          "explanation": "After 'will', always use bare base 'have' (will have finished)."
        },
        {
          "question": "Complete the time clause: 'By the time you ________ home, I will have cooked dinner.'",
          "options": [
            "will get",
            "get",
            "got",
            "will have got"
          ],
          "correct": 1,
          "explanation": "Time clauses after 'by the time' use the Present Simple ('get')."
        },
        {
          "question": "What is the meaning of 'By 2030, scientists will have cured this disease'?",
          "options": [
            "They will start curing it in 2030.",
            "The cure will be completed prior to the year 2030.",
            "They are curing it right now.",
            "They will never cure it."
          ],
          "correct": 1,
          "explanation": "Future Perfect states that the event will be completed before that future milestone."
        },
        {
          "question": "What is the correct negative form of 'We will have finished'?",
          "options": [
            "We will not have finished.",
            "We won't have finished.",
            "Both A and B are correct.",
            "We haven't will finished."
          ],
          "correct": 2,
          "explanation": "Both 'will not have finished' and 'won't have finished' are correct."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "By 6:00 PM, she ________ (write) all twenty letters.",
          "correctAnswer": "will have written",
          "hint": "will have + V3 of write.",
          "explanation": "Future Perfect: 'will have written'."
        },
        {
          "id": 2,
          "sentence": "By the time we arrive at the party, they ________ (already / eat) dinner.",
          "correctAnswer": "will have already eaten",
          "hint": "will have already + V3 of eat.",
          "explanation": "Future Perfect with already: 'will have already eaten'."
        },
        {
          "id": 3,
          "sentence": "Will you ________ (finish) your degree by next summer?",
          "correctAnswer": "have finished",
          "hint": "After 'Will you', add 'have finished'.",
          "explanation": "Question formula: Will you have finished...?"
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "By",
            "tomorrow",
            "I",
            "will",
            "have",
            "left."
          ],
          "correctOrder": [
            "By",
            "tomorrow",
            "I",
            "will",
            "have",
            "left."
          ],
          "targetSentence": "By tomorrow I will have left.",
          "meaning": "Prior departure before tomorrow."
        },
        {
          "id": 2,
          "tokens": [
            "Will",
            "they",
            "have",
            "arrived",
            "by",
            "noon?"
          ],
          "correctOrder": [
            "Will",
            "they",
            "have",
            "arrived",
            "by",
            "noon?"
          ],
          "targetSentence": "Will they have arrived by noon?",
          "meaning": "Inquiry about deadline arrival."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "By the time the train will arrive, we will have bought our tickets.",
          "options": [
            "By the time the train will arrive, we will have bought our tickets.",
            "By the time the train arrives, we will have bought our tickets.",
            "By the time the train arrived, we will have bought our tickets."
          ],
          "correctIndex": 1,
          "explanation": "Never use 'will' after 'by the time'. Use Present Simple: 'By the time the train arrives'."
        },
        {
          "id": 2,
          "flawedSentence": "He will has completed his training by Friday.",
          "options": [
            "He will has completed his training by Friday.",
            "He will have completed his training by Friday.",
            "He will have complete his training by Friday."
          ],
          "correctIndex": 1,
          "explanation": "'Will' must be followed by base 'have', never 'has'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "definitely",
          "targetSentence": "I will definitely have finished by Friday.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "I",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "will",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "have finished by Friday.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'definitely' between 'will' and 'have finished'."
        },
        {
          "id": 2,
          "adverb": "probably",
          "targetSentence": "They will probably have arrived by now.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "They",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "will",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "have arrived by now.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'probably' between 'will' and 'have arrived'."
        }
      ],
      "masteryExam": [
        {
          "question": "What does Future Perfect Simple primarily communicate?",
          "options": [
            "An ongoing action in the present",
            "An action that will be completed prior to a definite future milestone deadline",
            "A past action with no present relevance",
            "A recurring weekly habit"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "It emphasizes completion before a future anchor point."
        },
        {
          "question": "Which time preposition is the classic trigger for Future Perfect?",
          "options": [
            "since",
            "by",
            "at the moment",
            "while"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'By' indicates a completion deadline ('by tomorrow', 'by 2030')."
        },
        {
          "question": "Identify the error: 'By next month, she will has lived here for three years.'",
          "options": [
            "'for three years' is wrong.",
            "'will has' is ungrammatical; modal auxiliaries require bare infinitive 'have'.",
            "'By next month' requires Past Simple.",
            "'lived' should be 'living'."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Modal 'will' must be followed by base form 'have'."
        },
        {
          "question": "Complete the time clause: 'We will have prepared everything before the guests ________.'",
          "options": [
            "will arrive",
            "arrive",
            "arrived",
            "have arrived"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Time clauses introduced by 'before' use the Present Simple ('arrive')."
        },
        {
          "question": "How can Future Perfect be used to discuss the present moment?",
          "options": [
            "It cannot discuss the present.",
            "To express high-confidence deductions about what has probably already happened ('They will have arrived by now').",
            "Only in legal contracts.",
            "To express conditional apologies."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'They will have arrived by now' expresses confident deduction about completion."
        },
        {
          "question": "What is the past participle of 'build'?",
          "options": [
            "builded",
            "built",
            "builden",
            "builted"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "build \u2192 built \u2192 built."
        },
        {
          "question": "Choose the correct negative sentence:",
          "options": [
            "I won't have finished by noon.",
            "I haven't will finish by noon.",
            "I won't finished by noon.",
            "I will have not finish by noon."
          ],
          "correct": 0,
          "level": "B1",
          "explanation": "Negative formula: Subject + won't have + V3."
        },
        {
          "question": "What does 'By 2035, he will have been a doctor for 20 years' emphasize?",
          "options": [
            "He will retire in 2035.",
            "The career duration accumulated up to that future milestone.",
            "He will start medical school in 2035.",
            "He will quit being a doctor."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "It measures cumulative duration up to the future reference year."
        },
        {
          "question": "Select the correct question form:",
          "options": [
            "Will you have done the chores before dinner?",
            "Have you will done the chores before dinner?",
            "Will have you done the chores before dinner?",
            "Do you will have done the chores before dinner?"
          ],
          "correct": 0,
          "level": "B1",
          "explanation": "Formula: Will + Subject + have + V3...?"
        },
        {
          "question": "Why is 'I will have bought a car next week' less precise than 'By next week, I will have bought a car'?",
          "options": [
            "'Next week' without 'by' refers to a point in time (Future Simple 'will buy'); 'by next week' provides the completion deadline.",
            "They mean identical things.",
            "'Next week' is grammatically forbidden with will.",
            "'Bought' cannot refer to cars."
          ],
          "correct": 0,
          "level": "B2",
          "explanation": "'By' provides the definitive boundary needed for perfect aspect."
        }
      ]
    }
  },
  "pastPerfectCont": {
    "meta": {
      "id": "pastPerfectCont",
      "chapterNumber": 10,
      "title": "Past Perfect Continuous",
      "fullTitle": "10. Past Perfect Continuous Tense",
      "level": "B2+ CEFR",
      "aspect": "Perfect Continuous",
      "time": "Past",
      "color": "#e11d48",
      "badge": "CHAPTER 10 \u2022 DURATION IN PAST",
      "formula": "Subject + HAD BEEN + Verb-ING",
      "summary": "Use this to emphasize HOW LONG an ongoing activity had been happening before another event in the past."
    },
    "overview": {
      "definition": "The Past Perfect Continuous focuses on the duration or ongoing effort of an action that had been happening for a period of time BEFORE another past event took place.",
      "coreConcept": "Think of running a long marathon in the past: you were running, running, running, and then you crossed the past finish line. It explains why you were out of breath yesterday!",
      "timelineInsight": "A long, continuous wavy arrow in the past that leads directly up to a specific past moment.",
      "signalWords": [
        {
          "word": "For two hours / For days",
          "example": "She had been waiting for two hours before the bus arrived."
        },
        {
          "word": "Since morning",
          "example": "He had been working since 6:00 AM."
        },
        {
          "word": "All day / All night",
          "example": "It had been raining all night, so the road was flooded."
        },
        {
          "word": "Before (past event)",
          "example": "We had been driving for miles before we saw a gas station."
        },
        {
          "word": "How long had you been...?",
          "example": "How long had you been studying before the exam began?"
        },
        {
          "word": "Because (past cause)",
          "example": "His eyes were red because he had been crying."
        }
      ],
      "pillars": [
        {
          "icon": "Hourglass",
          "label": "Duration Before Past Event",
          "desc": "Emphasizing how much time had passed before another past moment.",
          "color": "#e11d48",
          "bg": "rgba(225, 29, 72, 0.08)",
          "border": "rgba(225, 29, 72, 0.25)"
        },
        {
          "icon": "Droplets",
          "label": "Past Visible Evidence",
          "desc": "Explaining past physical fatigue or visible results ('The ground was wet').",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        },
        {
          "icon": "Activity",
          "label": "Interrupted Ongoing Past Habits",
          "desc": "An ongoing past routine that stopped when a new event happened.",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        },
        {
          "icon": "Split",
          "label": "Duration vs Result",
          "desc": "Contrasting with Past Perfect Simple: time spent vs finished product.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "duration_before_past_event",
        "title": "1. Duration of an Ongoing Action Before a Past Event",
        "tag": "Past Duration",
        "icon": "Hourglass",
        "summary": "Emphasizing how long an ongoing action had lasted before another past moment happened.",
        "explanation": "When you want to highlight the amount of time (for 2 hours, for 3 months) leading up to a past climax, use 'had been + -ing'.",
        "examples": [
          {
            "sentence": "She had been waiting for two hours before the train finally arrived.",
            "translation": "Waiting lasted 2 continuous hours before arrival.",
            "focus": "had been waiting"
          },
          {
            "sentence": "We had been hiking for six hours before we reached the mountain lodge.",
            "translation": "Six hours of continuous mountain climbing.",
            "focus": "had been hiking"
          },
          {
            "sentence": "How long had you been driving when the tire went flat?",
            "translation": "Inquiring about driving duration before blowout.",
            "focus": "had you been driving"
          }
        ],
        "teacherNote": "The duration word ('for two hours') is what brings this tense to life."
      },
      {
        "id": "past_cause_and_effect",
        "title": "2. Cause and Effect of Visible Evidence in the Past",
        "tag": "Past Evidence",
        "icon": "Droplets",
        "summary": "Explaining why someone was exhausted, dirty, or why the ground was wet yesterday.",
        "explanation": "Look at the past proof: 'The streets were soaking wet yesterday morning because it had been raining all night.'",
        "examples": [
          {
            "sentence": "The ground was wet because it had been raining heavily all morning.",
            "translation": "Past wet ground caused by ongoing rain.",
            "focus": "had been raining"
          },
          {
            "sentence": "His hands were covered in grease because he had been fixing the engine.",
            "translation": "Physical proof of ongoing mechanical work.",
            "focus": "had been fixing"
          },
          {
            "sentence": "She was completely exhausted because she had been studying without a break.",
            "translation": "Fatigue explained by continuous studying.",
            "focus": "had been studying"
          }
        ],
        "teacherNote": "Even if the action had just stopped, the physical proof was obvious."
      },
      {
        "id": "interrupted_past_habits",
        "title": "3. Long-Term Habits Interrupted by a Past Change",
        "tag": "Past Habit Ended",
        "icon": "Activity",
        "summary": "An ongoing habit or lifestyle that continued for years until a past life event changed it.",
        "explanation": "Use this to describe what someone had been doing for a long time before they stopped.",
        "examples": [
          {
            "sentence": "He had been smoking for twenty years before he decided to quit.",
            "translation": "Twenty years of ongoing habit ended by decision.",
            "focus": "had been smoking"
          },
          {
            "sentence": "They had been living in Chicago for a decade before moving to Florida.",
            "translation": "Ten years of residency before relocation.",
            "focus": "had been living"
          },
          {
            "sentence": "She had been practicing ballet since childhood before her knee injury.",
            "translation": "Long-term artistic dedication ended by injury.",
            "focus": "had been practicing"
          }
        ],
        "teacherNote": "It honors the dedication and long duration before the change occurred."
      },
      {
        "id": "repeated_past_struggles",
        "title": "4. Repeated Struggles & Efforts Leading to a Climax",
        "tag": "Past Struggle",
        "icon": "Repeat",
        "summary": "Expressing frustration, relief, or exhaustion after trying repeatedly in the past.",
        "explanation": "Describe continuous effort: 'We had been trying to solve that computer glitch for days before we discovered the fix.'",
        "examples": [
          {
            "sentence": "We had been trying to contact customer service all day before someone answered.",
            "translation": "Repeated phone attempts over many hours.",
            "focus": "had been trying"
          },
          {
            "sentence": "Scientists had been searching for the shipwreck for decades before finding it.",
            "translation": "Decades of patient underwater exploration.",
            "focus": "had been searching"
          },
          {
            "sentence": "He had been saving money for years to buy that violin.",
            "translation": "Continuous financial discipline.",
            "focus": "had been saving"
          }
        ],
        "teacherNote": "It adds intense emotional depth to storytelling."
      },
      {
        "id": "duration_vs_result",
        "title": "5. Duration (Continuous) vs Finished Result (Simple)",
        "tag": "Contrast",
        "icon": "Split",
        "summary": "Distinguishing between how much time you spent doing something versus what you finished.",
        "explanation": "Compare: 'I had been writing emails all morning' (focus on my time and effort) vs 'I had written five emails' (focus on the finished count).",
        "examples": [
          {
            "sentence": "I had been reading the book for two hours (focus on the time spent reading).",
            "translation": "Focus on the ongoing activity.",
            "focus": "had been reading"
          },
          {
            "sentence": "I had read 80 pages of the book (focus on the completed milestone).",
            "translation": "Focus on the finished product.",
            "focus": "had read"
          },
          {
            "sentence": "She had been baking all afternoon, so the kitchen was warm and smelled like cinnamon.",
            "translation": "Focus on the sensory activity.",
            "focus": "had been baking"
          }
        ],
        "teacherNote": "If you count numbers (5 emails, 80 pages), use Past Perfect Simple. If you count hours, use Continuous!"
      },
      {
        "id": "reported_speech_continuous",
        "title": "6. Reported Speech of Ongoing Past Activities",
        "tag": "Reported Speech",
        "icon": "MessageSquare",
        "summary": "Reporting what someone said when they were in the middle of a continuous past activity.",
        "explanation": "When someone says: 'I have been working hard', in reported speech it becomes: 'He said he had been working hard.'",
        "examples": [
          {
            "sentence": "She told me that she had been looking for her keys for an hour.",
            "translation": "Reported speech of 'I have been looking'.",
            "focus": "had been looking"
          },
          {
            "sentence": "The suspect admitted that he had been hiding in the warehouse.",
            "translation": "Police report statement.",
            "focus": "had been hiding"
          },
          {
            "sentence": "He explained that he had been driving in the wrong direction.",
            "translation": "Explaining an earlier travel mistake.",
            "focus": "had been driving"
          }
        ],
        "teacherNote": "Smoothly shifts present continuous or present perfect continuous into the past narrative."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + HAD BEEN + Verb-ING",
        "explanation": "Put 'had been' before the verb with -ing. 'Had been' is identical for all persons (I, you, he, she, we, they)!",
        "table": [
          {
            "subject": "All Subjects (I / You / He / She / We / They)",
            "auxiliary": "had been ('d been)",
            "verb": "working / waiting",
            "complement": "for hours"
          }
        ],
        "examples": [
          {
            "en": "I had been working there for three years before the promotion.",
            "context": "Duration prior to event"
          },
          {
            "en": "They'd been traveling all day.",
            "context": "Contraction: They had been \u2192 They'd been"
          }
        ]
      },
      "negative": {
        "formula": "Subject + HADN'T BEEN + Verb-ING",
        "explanation": "Add 'not' to had: 'hadn't been' (had not been), followed by verb-ing.",
        "table": [
          {
            "subject": "All Subjects",
            "auxiliary": "hadn't been (had not been)",
            "verb": "sleeping",
            "complement": "well that week"
          }
        ],
        "examples": [
          {
            "en": "I hadn't been feeling well before the trip.",
            "context": "Ongoing health state prior to journey"
          },
          {
            "en": "We hadn't been expecting any visitors.",
            "context": "Surprise encounter"
          }
        ]
      },
      "interrogative": {
        "formula": "Had + Subject + BEEN + Verb-ING...?",
        "explanation": "Start with 'Had', then the subject, then 'been', then verb-ing.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Had + Subject + been + Verb-ING...?",
            "examples": [
              {
                "q": "Had you been waiting long before the bus arrived?",
                "a": "Yes, I had been. / About 40 minutes."
              },
              {
                "q": "Had it been raining before the match began?",
                "a": "Yes, it had been."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + had + Subject + been + Verb-ING...?",
            "examples": [
              {
                "q": "How long had you been studying before the exam started?",
                "a": "I had been studying for three weeks."
              },
              {
                "q": "What had they been doing in the workshop?",
                "a": "They had been building a wooden table."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "How long had she been working there when she quit?",
            "context": "Duration inquiry"
          },
          {
            "en": "Where had he been living before moving here?",
            "context": "Wh- inquiry about past residence"
          }
        ]
      },
      "verbToBe": {
        "formula": "had been (Simple Past Perfect only)",
        "explanation": "Stative verbs like 'be' do NOT take continuous form (*had been being*). Always use Past Perfect Simple: 'I had been sick for three days' (NOT: had been being sick).",
        "table": [
          {
            "subject": "Stative Rule",
            "example": "We had been friends for years before that fight (NOT: had been being)."
          }
        ],
        "examples": [
          {
            "en": "He had been quiet all evening.",
            "context": "State uses Past Perfect Simple"
          },
          {
            "en": "They had been at the beach for an hour.",
            "context": "Location uses simple had been"
          }
        ]
      },
      "verbHave": {
        "formula": "had been having (dynamic actions only)",
        "explanation": "Use 'had been having' only for actions like 'having lunch' or 'having problems'. For possession, say 'had had a car'.",
        "table": [
          {
            "subject": "Action have",
            "form": "had been having",
            "example": "We had been having computer problems all morning."
          }
        ],
        "examples": [
          {
            "en": "She had been having strange dreams for a week.",
            "context": "Ongoing experience"
          },
          {
            "en": "I had had that bicycle since high school.",
            "context": "Possession uses had had"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Forming the -ing Participle",
      "subtitle": "Adding -ing to verbs for Past Perfect Continuous.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Normal Verbs",
          "condition": "Most verbs",
          "ruleText": "Add -ing (waiting, raining, sleeping).",
          "examples": [
            "wait \u2192 waiting",
            "rain \u2192 raining",
            "work \u2192 working"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Drop Silent -e",
          "condition": "Ends in -e",
          "ruleText": "Drop the -e before -ing (living, driving, smoking).",
          "examples": [
            "live \u2192 living",
            "drive \u2192 driving",
            "smoke \u2192 smoking"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Double Consonant",
          "condition": "Short CVC",
          "ruleText": "Double the consonant (running, sitting, swimming).",
          "examples": [
            "run \u2192 running",
            "sit \u2192 sitting",
            "swim \u2192 swimming"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "'d been",
          "sound": "/d b\u026an/",
          "tip": "Pronounce 'I'd been' smoothly: /a\u026ad b\u026an/."
        },
        {
          "ending": "hadn't been",
          "sound": "/\u02c8h\u00e6dnt b\u026an/",
          "tip": "Keep the 't' light and soft in conversation."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Constantly",
        "percentage": 100,
        "color": "#ef4444",
        "example": "He had been constantly complaining all morning."
      },
      {
        "adverb": "Continuously",
        "percentage": 90,
        "color": "#f59e0b",
        "example": "It had been continuously raining for 24 hours."
      },
      {
        "adverb": "Regularly",
        "percentage": 75,
        "color": "#3b82f6",
        "example": "She had been regularly visiting the gym before her injury."
      },
      {
        "adverb": "Quietly",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "They had been quietly preparing the surprise party."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#06b6d4",
        "example": "We had rarely been sleeping more than 4 hours a night."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#10b981",
        "example": "I had never been working so hard in all my life."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN 'had' and 'been'",
        "formula": "Subject + HAD + [ADVERB] + BEEN + Verb-ING",
        "explanation": "Adverbs like constantly, always, and secretly sit between 'had' and 'been'.",
        "examples": [
          {
            "bad": "I had been constantly working.",
            "good": "I had constantly been working. / I had been working constantly."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: 'For' and 'Since' go at the end of the clause",
        "formula": "Subject + had been + verb-ing + [FOR / SINCE + TIME]",
        "explanation": "Duration phrases sit naturally at the end of the continuous clause.",
        "examples": [
          {
            "bad": "I had for two hours been waiting.",
            "good": "I had been waiting for two hours."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: In questions, put the subject after 'Had'",
        "formula": "Had + Subject + BEEN + Verb-ING...?",
        "explanation": "The subject sits directly between 'Had' and 'been'.",
        "examples": [
          {
            "bad": "Had been you waiting?",
            "good": "Had you been waiting?"
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Using continuous with Stative Verbs",
        "bad": "I had been knowing him for ten years before he moved.",
        "good": "I had known him for ten years before he moved.",
        "explanation": "Stative verbs like know, love, belong, understand cannot take -ing. Use Past Perfect Simple ('had known')."
      },
      {
        "title": "2. Using continuous when counting completed items",
        "bad": "I had been writing three letters before breakfast.",
        "good": "I had written three letters before breakfast.",
        "explanation": "When you state the number of completed items (three letters, four cups), use Past Perfect Simple ('had written')."
      },
      {
        "title": "3. Forgetting 'been'",
        "bad": "She had waiting for two hours.",
        "good": "She had been waiting for two hours.",
        "explanation": "You cannot omit 'been'! The formula is strictly: had + BEEN + verb-ing."
      },
      {
        "title": "4. Mixing Present Perfect Continuous with Past Simple",
        "bad": "When I arrived, he has been waiting for an hour.",
        "good": "When I arrived, he had been waiting for an hour.",
        "explanation": "In a past narrative ('arrived'), everything stays in the past: 'had been waiting'."
      },
      {
        "title": "5. Confusing Past Continuous and Past Perfect Continuous",
        "bad": "I was waiting for two hours when the bus arrived.",
        "good": "I had been waiting for two hours when the bus arrived.",
        "explanation": "To emphasize duration up to a past event ('for two hours'), use Past Perfect Continuous, not Past Continuous."
      },
      {
        "title": "6. Using double modals or wrong auxiliary",
        "bad": "She was been working.",
        "good": "She had been working.",
        "explanation": "The auxiliary is strictly 'had', never 'was'."
      }
    ],
    "resumeSummary": {
      "title": "Past Perfect Continuous Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Past Perfect Continuous on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + had been + verb-ing",
          "exampleI": "I had been studying.",
          "exampleHe": "He had been running.",
          "memoryAnchor": "had BEEN + verb-ING!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + hadn't been + verb-ing",
          "exampleI": "I hadn't been sleeping.",
          "exampleHe": "They hadn't been listening.",
          "memoryAnchor": "hadn't BEEN + ING"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Had + Subject + been + verb-ing?",
          "exampleI": "Had you been crying?",
          "exampleHe": "Had she been driving?",
          "memoryAnchor": "Had + Subject + been + ING?"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + had + Subject + been + -ing?",
          "exampleI": "How long had you been waiting?",
          "exampleHe": "What had they been doing?",
          "memoryAnchor": "How long + had + Subj + been + ING."
        }
      ],
      "spellingPills": [
        {
          "ending": "Regular",
          "change": "+ing",
          "example": "wait \u2192 waiting"
        },
        {
          "ending": "Silent -e",
          "change": "Drop e + ing",
          "example": "live \u2192 living"
        },
        {
          "ending": "Short CVC",
          "change": "Double letter",
          "example": "run \u2192 running"
        },
        {
          "ending": "Contraction",
          "change": "I had been \u2192 I'd been",
          "example": "I'd been working"
        }
      ],
      "adverbGoldenFormula": "Subject + HAD + [Adverb] + BEEN + Verb-ING"
    },
    "exercises": {
      "quiz": [
        {
          "question": "Her eyes were puffy and red because she ________.",
          "options": [
            "cried",
            "had been crying",
            "has been crying",
            "was cried"
          ],
          "correct": 1,
          "explanation": "Visible past proof of an ongoing emotional action: 'had been crying'."
        },
        {
          "question": "How long ________ you ________ when the train finally pulled in?",
          "options": [
            "had / been waiting",
            "were / waiting",
            "have / been waiting",
            "did / wait"
          ],
          "correct": 0,
          "explanation": "Inquiring about duration up to a past event: 'had you been waiting'."
        },
        {
          "question": "Why is 'I had been knowing her for five years before we married' wrong?",
          "options": [
            "'Know' is a stative verb that resists continuous form.",
            "It lacks a subject.",
            "'Before' cannot be used with past perfect.",
            "Marriage must use Future Simple."
          ],
          "correct": 0,
          "explanation": "'Know' is stative and cannot take -ing. Use 'I had known her'."
        },
        {
          "question": "Complete: 'The roads were dangerous because it ________ all night.'",
          "options": [
            "snowed",
            "had been snowing",
            "is snowing",
            "has been snowed"
          ],
          "correct": 1,
          "explanation": "Past ongoing weather causing dangerous condition: 'had been snowing'."
        },
        {
          "question": "What is the correct negative form?",
          "options": [
            "She had not been paying attention.",
            "She hadn't been paying attention.",
            "Both A and B are correct.",
            "She wasn't been paying attention."
          ],
          "correct": 2,
          "explanation": "Both 'had not been paying' and 'hadn't been paying' are correct."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "He was drenched in sweat because he ________ (run) in the afternoon sun.",
          "correctAnswer": "had been running",
          "hint": "had been + run-ning (double n).",
          "explanation": "Past Perfect Continuous: 'had been running'."
        },
        {
          "id": 2,
          "sentence": "We ________ (study) for four hours before we decided to take a coffee break.",
          "correctAnswer": "had been studying",
          "hint": "had been + study-ing.",
          "explanation": "Duration of study before break: 'had been studying'."
        },
        {
          "id": 3,
          "sentence": "How long had they ________ (live) in that cottage before the roof leaked?",
          "correctAnswer": "been living",
          "hint": "been + liv-ing.",
          "explanation": "Formula: had they been living...?"
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "She",
            "had",
            "been",
            "working",
            "all",
            "day."
          ],
          "correctOrder": [
            "She",
            "had",
            "been",
            "working",
            "all",
            "day."
          ],
          "targetSentence": "She had been working all day.",
          "meaning": "Extended past labor."
        },
        {
          "id": 2,
          "tokens": [
            "How",
            "long",
            "had",
            "you",
            "been",
            "waiting?"
          ],
          "correctOrder": [
            "How",
            "long",
            "had",
            "you",
            "been",
            "waiting?"
          ],
          "targetSentence": "How long had you been waiting?",
          "meaning": "Duration inquiry."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "I had been writing three complete books before I turned 30.",
          "options": [
            "I had been writing three complete books before I turned 30.",
            "I had written three complete books before I turned 30.",
            "I have written three complete books before I turned 30."
          ],
          "correctIndex": 1,
          "explanation": "Counting finished objects ('three complete books') requires Past Perfect Simple 'had written'."
        },
        {
          "id": 2,
          "flawedSentence": "The ground was wet because it was been raining.",
          "options": [
            "The ground was wet because it was been raining.",
            "The ground was wet because it had been raining.",
            "The ground was wet because it has been raining."
          ],
          "correctIndex": 1,
          "explanation": "The auxiliary is strictly 'had': 'it had been raining'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "constantly",
          "targetSentence": "He had constantly been working on the engine.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "He",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "had",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "been working on the engine.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'constantly' between 'had' and 'been working'."
        },
        {
          "id": 2,
          "adverb": "quietly",
          "targetSentence": "They had quietly been planning the move.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "They",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "had",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "been planning the move.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'quietly' between 'had' and 'been planning'."
        }
      ],
      "masteryExam": [
        {
          "question": "What is the primary conceptual focus of Past Perfect Continuous?",
          "options": [
            "A finished past count of items",
            "The duration and ongoing activity of an action leading up to a past reference moment",
            "A timeless mathematical fact",
            "A future spontaneous promise"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "It emphasizes duration, process, and ongoing effort in the past."
        },
        {
          "question": "Why is 'I had been reading 200 pages before bedtime' less natural than 'I had read 200 pages'?",
          "options": [
            "Books cannot be read in continuous aspect.",
            "Specifying a completed quantified output demands the Simple aspect, not Continuous.",
            "200 is too large a number for English grammar.",
            "'Bedtime' requires Present Perfect."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Quantified completed products require simple aspect ('had read 200 pages')."
        },
        {
          "question": "Complete: 'When the teacher entered, the students ________ quietly for twenty minutes.'",
          "options": [
            "worked",
            "were working",
            "had been working",
            "have worked"
          ],
          "correct": 2,
          "level": "B2",
          "explanation": "Duration up to a past event takes Past Perfect Continuous: 'had been working'."
        },
        {
          "question": "How does Past Perfect Continuous explain physical states in the past?",
          "options": [
            "By showing that an ongoing activity produced visible evidence or fatigue ('His hands were dirty because he had been gardening').",
            "By predicting future health outcomes.",
            "By stating medical rules.",
            "It cannot explain physical states."
          ],
          "correct": 0,
          "level": "B2",
          "explanation": "It demonstrates the continuous activity that generated visible past evidence."
        },
        {
          "question": "Which verb CANNOT be used in the Past Perfect Continuous?",
          "options": [
            "study",
            "belong",
            "run",
            "paint"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'Belong' is a stative verb indicating ownership and resists continuous forms."
        },
        {
          "question": "What is the correct contracted form of 'They had been'?",
          "options": [
            "They'd been",
            "Theyd'been",
            "They'been",
            "They had'b"
          ],
          "correct": 0,
          "level": "A2",
          "explanation": "'They had been' contracts to 'They'd been'."
        },
        {
          "question": "Choose the correctly spelled -ing form of 'run':",
          "options": [
            "runing",
            "running",
            "runeing",
            "runnying"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Double the consonant for short CVC: run \u2192 running."
        },
        {
          "question": "Complete: 'How long ________ before the rescue team arrived?'",
          "options": [
            "had they been trapped",
            "had they been surviving",
            "did they survive",
            "were they survived"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Continuous ongoing survival effort: 'had they been surviving'."
        },
        {
          "question": "Identify the sentence that emphasizes the duration of a habit ended by a past event:",
          "options": [
            "I had lived in Spain.",
            "I had been living in Spain for five years before I moved to London.",
            "I live in Spain.",
            "I will live in Spain."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Highlights the five-year duration of residence prior to moving."
        },
        {
          "question": "What is the negative auxiliary in Past Perfect Continuous?",
          "options": [
            "wasn't been",
            "didn't been",
            "hadn't been",
            "haven't been"
          ],
          "correct": 2,
          "level": "A2",
          "explanation": "Negative formula uses 'hadn't been'."
        }
      ]
    }
  },
  "presentPerfectCont": {
    "meta": {
      "id": "presentPerfectCont",
      "chapterNumber": 11,
      "title": "Present Perfect Continuous",
      "fullTitle": "11. Present Perfect Continuous Tense",
      "level": "B1+ CEFR",
      "aspect": "Perfect Continuous",
      "time": "Present",
      "color": "#06b6d4",
      "badge": "CHAPTER 11 \u2022 DURATION TO NOW",
      "formula": "Subject + HAVE / HAS BEEN + Verb-ING",
      "summary": "Use this for actions that started in the past and are still happening now, or just stopped with visible proof."
    },
    "overview": {
      "definition": "The Present Perfect Continuous focuses on an ongoing action that started in the past and is still continuing right now, or an action that just stopped a moment ago with visible evidence.",
      "coreConcept": "Focus on the time and ongoing effort: 'How long have you been doing that?' It explains why your shoes are muddy or why you are out of breath right now!",
      "timelineInsight": "A wavy ongoing line stretching from the past, crossing into NOW, and possibly continuing into the future.",
      "signalWords": [
        {
          "word": "How long have you been...?",
          "example": "How long have you been learning English?"
        },
        {
          "word": "For (duration)",
          "example": "I have been waiting for forty minutes."
        },
        {
          "word": "Since (starting time)",
          "example": "She has been working here since 9:00 AM."
        },
        {
          "word": "Lately / Recently",
          "example": "I have been sleeping badly lately."
        },
        {
          "word": "All morning / All day",
          "example": "It has been raining all day."
        },
        {
          "word": "These days",
          "example": "He has been exercising a lot these days."
        }
      ],
      "pillars": [
        {
          "icon": "Clock",
          "label": "Duration Up to Right Now",
          "desc": "Emphasizing how long you have been actively doing something.",
          "color": "#06b6d4",
          "bg": "rgba(6, 182, 212, 0.08)",
          "border": "rgba(6, 182, 212, 0.25)"
        },
        {
          "icon": "Droplets",
          "label": "Visible Evidence Now",
          "desc": "Explaining why someone is sweaty, dirty, or tired right at this moment.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        },
        {
          "icon": "Flame",
          "label": "Temporary Recent Routines",
          "desc": "Habits or activities taking place over the last few weeks.",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        },
        {
          "icon": "AlertTriangle",
          "label": "Annoyance & Complaints",
          "desc": "Complaining about ongoing disturbances ('Who has been using my pen?').",
          "color": "#ef4444",
          "bg": "rgba(239, 68, 68, 0.08)",
          "border": "rgba(239, 68, 68, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "action_continuing_now",
        "title": "1. Actions That Started in the Past and Continue Now",
        "tag": "Ongoing Action",
        "icon": "Clock",
        "summary": "Showing that an activity started earlier and is still in progress at this moment.",
        "explanation": "When you tell someone how long you've been doing something, use 'have been + -ing' with 'for' or 'since'.",
        "examples": [
          {
            "sentence": "I have been studying English for two hours (and I'm still studying).",
            "translation": "Study session underway for 2 hours.",
            "focus": "have been studying"
          },
          {
            "sentence": "She has been working on this painting since this morning.",
            "translation": "Painting process continuing right now.",
            "focus": "has been working"
          },
          {
            "sentence": "It has been raining non-stop since yesterday evening.",
            "translation": "Continuous rain continuing into now.",
            "focus": "has been raining"
          }
        ],
        "teacherNote": "Never say 'I am studying for 2 hours'! In English, duration up to now requires 'have been studying'."
      },
      {
        "id": "recent_action_visible_evidence",
        "title": "2. Action Just Stopped with Obvious Proof Right Now",
        "tag": "Visible Proof",
        "icon": "Droplets",
        "summary": "An activity that ended a minute ago, but left obvious physical evidence you can see or feel right now.",
        "explanation": "Look at someone breathing heavily or sweating: 'You are out of breath! Have you been running?'",
        "examples": [
          {
            "sentence": "You are breathing heavily! Have you been running?",
            "translation": "Immediate physical evidence of recent exertion.",
            "focus": "Have you been running"
          },
          {
            "sentence": "Her hands are covered in flour because she has been baking bread.",
            "translation": "Visible flour evidence of recent baking.",
            "focus": "has been baking"
          },
          {
            "sentence": "The streets are soaking wet because it has been raining.",
            "translation": "Current puddle evidence of recent rain.",
            "focus": "has been raining"
          }
        ],
        "teacherNote": "The action may be finished, but the physical signs are 100% visible right now."
      },
      {
        "id": "how_long_inquiries",
        "title": "3. Asking 'How Long...?' Questions",
        "tag": "Inquiry",
        "icon": "HelpCircle",
        "summary": "Asking people how much time they have spent on an ongoing activity.",
        "explanation": "This is one of the most common conversational questions in everyday English.",
        "examples": [
          {
            "sentence": "How long have you been waiting for me?",
            "translation": "Friendly question on arrival.",
            "focus": "How long have you been waiting"
          },
          {
            "sentence": "How long has she been playing the piano?",
            "translation": "Inquiring about someone's years of practice.",
            "focus": "How long has she been playing"
          },
          {
            "sentence": "How long have they been living in this neighborhood?",
            "translation": "Inquiring about length of residency.",
            "focus": "How long have they been living"
          }
        ],
        "teacherNote": "Formula: How long + have/has + person + been + verb-ing?"
      },
      {
        "id": "temporary_recent_habits",
        "title": "4. Temporary Habits & Routines in Recent Weeks",
        "tag": "Recent Habit",
        "icon": "Flame",
        "summary": "Habits or routines that you have been doing lately, but that are temporary.",
        "explanation": "Use with 'lately' or 'recently' to describe your current lifestyle trends.",
        "examples": [
          {
            "sentence": "I have been going to the gym four times a week lately.",
            "translation": "Recent fitness routine.",
            "focus": "have been going"
          },
          {
            "sentence": "She has been reading a lot of historical fiction recently.",
            "translation": "Recent reading interest.",
            "focus": "has been reading"
          },
          {
            "sentence": "He has been working late every night this week.",
            "translation": "Temporary work schedule.",
            "focus": "has been working"
          }
        ],
        "teacherNote": "It shows a temporary lifestyle phase, not necessarily a permanent lifelong habit."
      },
      {
        "id": "annoyance_complaints",
        "title": "5. Expressing Frustration or Complaints",
        "tag": "Frustration",
        "icon": "AlertTriangle",
        "summary": "Asking who has been messing with your stuff, or complaining about repeated actions.",
        "explanation": "The continuous aspect emphasizes the repeated, ongoing nature of the annoying disturbance.",
        "examples": [
          {
            "sentence": "Who has been messing with my computer settings?!",
            "translation": "Frustrated discovery of tampered settings.",
            "focus": "has been messing"
          },
          {
            "sentence": "Someone has been drinking my orange juice from the fridge!",
            "translation": "Disgruntled discovery of missing juice.",
            "focus": "has been drinking"
          },
          {
            "sentence": "Why have you been making so much noise upstairs all morning?",
            "translation": "Neighborly noise complaint.",
            "focus": "have you been making"
          }
        ],
        "teacherNote": "It adds strong emotional emphasis to your complaint."
      },
      {
        "id": "process_vs_result",
        "title": "6. Process vs Finished Product",
        "tag": "Process Focus",
        "icon": "Split",
        "summary": "Focusing on the activity and effort, rather than whether it is 100% finished.",
        "explanation": "Compare: 'I have painted the kitchen' (finished! color is done) vs 'I have been painting the kitchen' (in progress, might not be done yet).",
        "examples": [
          {
            "sentence": "I have been writing my thesis all weekend (focus on the time spent writing).",
            "translation": "Ongoing academic work.",
            "focus": "have been writing"
          },
          {
            "sentence": "I have written three chapters (focus on the finished result).",
            "translation": "Completed output count.",
            "focus": "have written"
          },
          {
            "sentence": "She has been repairing her car (her hands are dirty; car may still need work).",
            "translation": "Focus on the mechanical labor.",
            "focus": "has been repairing"
          }
        ],
        "teacherNote": "If you want to emphasize your sweat and hard work, use the continuous form!"
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + HAVE / HAS BEEN ('ve been / 's been) + Verb-ING",
        "explanation": "Use 'have been' for I, you, we, they; use 'has been' for he, she, it. Then add verb-ing.",
        "table": [
          {
            "subject": "I / You / We / They",
            "auxiliary": "have been ('ve been)",
            "verb": "working",
            "complement": "since morning"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "has been ('s been)",
            "verb": "working",
            "complement": "since morning"
          }
        ],
        "examples": [
          {
            "en": "I have been learning Spanish for six months.",
            "context": "Ongoing study duration"
          },
          {
            "en": "He's been practicing the violin all afternoon.",
            "context": "Contraction: He has been \u2192 He's been"
          }
        ]
      },
      "negative": {
        "formula": "Subject + HAVEN'T / HASN'T BEEN + Verb-ING",
        "explanation": "Put 'haven't been' or 'hasn't been' before the verb with -ing.",
        "table": [
          {
            "subject": "I / You / We / They",
            "auxiliary": "haven't been",
            "verb": "sleeping",
            "complement": "well lately"
          },
          {
            "subject": "He / She / It",
            "auxiliary": "hasn't been",
            "verb": "feeling",
            "complement": "well this week"
          }
        ],
        "examples": [
          {
            "en": "I haven't been feeling well recently.",
            "context": "Health status over recent days"
          },
          {
            "en": "They haven't been paying attention.",
            "context": "Ongoing lack of focus"
          }
        ]
      },
      "interrogative": {
        "formula": "Have / Has + Subject + BEEN + Verb-ING...?",
        "explanation": "Start with 'Have' or 'Has', followed by the subject, then 'been', then verb-ing.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Have / Has + Subject + been + Verb-ING...?",
            "examples": [
              {
                "q": "Have you been waiting long?",
                "a": "No, just about five minutes!"
              },
              {
                "q": "Has it been raining?",
                "a": "Yes, the grass is completely wet."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + have/has + Subject + been + Verb-ING...?",
            "examples": [
              {
                "q": "How long have you been studying?",
                "a": "I've been studying for three hours."
              },
              {
                "q": "What have you been doing all day?",
                "a": "I've been cleaning the house."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Have you been exercising lately?",
            "context": "Recent lifestyle inquiry"
          },
          {
            "en": "Where have you been hiding?",
            "context": "Playful inquiry about someone's absence"
          }
        ]
      },
      "verbToBe": {
        "formula": "have / has been (Simple Present Perfect only)",
        "explanation": "Stative verbs like 'be' NEVER take continuous form (*have been being*). Always use Present Perfect Simple: 'I have been a teacher for 10 years' (NOT: have been being).",
        "table": [
          {
            "subject": "Stative Rule",
            "example": "She has been sick for three days (NOT: has been being)."
          }
        ],
        "examples": [
          {
            "en": "We have been friends since elementary school.",
            "context": "State of friendship uses have been"
          },
          {
            "en": "He has been at the library since noon.",
            "context": "Location uses simple has been"
          }
        ]
      },
      "verbHave": {
        "formula": "have/has been having (dynamic actions only)",
        "explanation": "You can say 'have been having fun' or 'having difficulties', but NEVER 'having a car' (possession). For possession, use 'have had'.",
        "table": [
          {
            "subject": "Dynamic have",
            "form": "have been having",
            "example": "We have been having internet issues all morning."
          }
        ],
        "examples": [
          {
            "en": "I have been having doubts about the plan.",
            "context": "Ongoing mental state"
          },
          {
            "en": "I have had this watch for ten years.",
            "context": "Possession must use have had"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Forming the -ing Participle",
      "subtitle": "Spelling rules for the continuous participle.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Normal Verbs",
          "condition": "Most verbs",
          "ruleText": "Add -ing (learn \u2192 learning, wait \u2192 waiting).",
          "examples": [
            "learn \u2192 learning",
            "wait \u2192 waiting",
            "clean \u2192 cleaning"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Drop Silent -e",
          "condition": "Ends in -e",
          "ruleText": "Drop -e before -ing (bake \u2192 baking, write \u2192 writing).",
          "examples": [
            "bake \u2192 baking",
            "write \u2192 writing",
            "drive \u2192 driving"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Double Consonant",
          "condition": "Short CVC",
          "ruleText": "Double the consonant (run \u2192 running, sit \u2192 sitting).",
          "examples": [
            "run \u2192 running",
            "sit \u2192 sitting",
            "swim \u2192 swimming"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "'ve been / 's been",
          "sound": "/v b\u026an/ or /z b\u026an/",
          "tip": "In fluent everyday English, 'I've been' sounds like 'I-vin': /a\u026av b\u026an/."
        },
        {
          "ending": "been",
          "sound": "/b\u026an/",
          "tip": "Most American speakers pronounce 'been' identical to 'bin'."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Constantly",
        "percentage": 100,
        "color": "#ef4444",
        "example": "He has been constantly checking his phone."
      },
      {
        "adverb": "Regularly",
        "percentage": 85,
        "color": "#10b981",
        "example": "I have been regularly practicing meditation."
      },
      {
        "adverb": "Frequently",
        "percentage": 70,
        "color": "#3b82f6",
        "example": "She has been frequently calling her parents."
      },
      {
        "adverb": "Lately",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "We have been feeling tired lately."
      },
      {
        "adverb": "Hardly",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "I have hardly been sleeping this week."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#64748b",
        "example": "They have never been working so efficiently."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN have/has and been",
        "formula": "Subject + HAVE / HAS + [ADVERB] + BEEN + Verb-ING",
        "explanation": "Adverbs like constantly and regularly sit right between have/has and been.",
        "examples": [
          {
            "bad": "I have been constantly working.",
            "good": "I have constantly been working. (Both acceptable, but between have and been is very natural!)"
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: 'Lately' and 'Recently' sit at the end",
        "formula": "Subject + have/has been + verb-ing + [LATELY]",
        "explanation": "'Lately' and 'recently' naturally sound best at the very end of the sentence.",
        "examples": [
          {
            "bad": "I lately have been working.",
            "good": "I have been working hard lately."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: Duration phrases (for/since) go at the end",
        "formula": "Subject + have been + verb-ing + [FOR / SINCE ...]",
        "explanation": "Phrases like 'for three hours' or 'since Monday' sit at the end of the clause.",
        "examples": [
          {
            "bad": "I have for three hours been studying.",
            "good": "I have been studying for three hours."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Using continuous with Stative Verbs",
        "bad": "I have been knowing him for ten years.",
        "good": "I have known him for ten years.",
        "explanation": "Mental and feeling verbs (know, believe, understand, love) cannot take -ing! Use Present Perfect Simple ('have known')."
      },
      {
        "title": "2. Saying 'I am living here for 5 years' (Present Continuous mistake)",
        "bad": "I am living here for five years.",
        "good": "I have been living here for five years.",
        "explanation": "When an action started in the past and continues to now with 'for' or 'since', English requires Present Perfect Continuous, NOT Present Continuous!"
      },
      {
        "title": "3. Using continuous when counting finished things",
        "bad": "I have been reading five chapters this morning.",
        "good": "I have read five chapters this morning.",
        "explanation": "When you state the number of completed items (5 chapters, 3 cups of coffee), use Present Perfect Simple ('have read')."
      },
      {
        "title": "4. Forgetting 'been'",
        "bad": "She has waiting here for an hour.",
        "good": "She has been waiting here for an hour.",
        "explanation": "The formula requires both 'has' and 'been': has been waiting."
      },
      {
        "title": "5. Confusing 'since' and 'for'",
        "bad": "I have been working here since two years.",
        "good": "I have been working here for two years. (Use 'since' for a date: since 2022).",
        "explanation": "'For' is for amounts of time (for 2 hours); 'since' is for starting dates (since 2022)."
      },
      {
        "title": "6. Using 'have' for he/she/it",
        "bad": "He have been sleeping all morning.",
        "good": "He has been sleeping all morning.",
        "explanation": "He, she, and it always take 'has been', never 'have been'."
      }
    ],
    "resumeSummary": {
      "title": "Present Perfect Continuous Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Present Perfect Continuous on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + have / has been + verb-ing",
          "exampleI": "I have been working.",
          "exampleHe": "She has been studying.",
          "memoryAnchor": "have/has BEEN + verb-ING!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + haven't / hasn't been + -ing",
          "exampleI": "I haven't been sleeping.",
          "exampleHe": "He hasn't been listening.",
          "memoryAnchor": "haven't / hasn't BEEN + ING"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Have / Has + Subject + been + verb-ing?",
          "exampleI": "Have you been waiting?",
          "exampleHe": "Has she been crying?",
          "memoryAnchor": "Have/Has + Subj + been + ING?"
        },
        {
          "form": "? Wh- Question",
          "formula": "Wh- Word + have/has + Subject + been + -ing?",
          "exampleI": "How long have you been studying?",
          "exampleHe": "What has he been doing?",
          "memoryAnchor": "How long + have/has + Subj + been + ING."
        }
      ],
      "spellingPills": [
        {
          "ending": "Regular",
          "change": "+ing",
          "example": "wait \u2192 waiting"
        },
        {
          "ending": "Silent -e",
          "change": "Drop e + ing",
          "example": "bake \u2192 baking"
        },
        {
          "ending": "Short CVC",
          "change": "Double letter",
          "example": "run \u2192 running"
        },
        {
          "ending": "Contraction",
          "change": "I have been \u2192 I've been",
          "example": "I've been working"
        }
      ],
      "adverbGoldenFormula": "Subject + HAVE / HAS + [Adverb] + BEEN + Verb-ING"
    },
    "exercises": {
      "quiz": [
        {
          "question": "You look completely exhausted! What ________ you ________?",
          "options": [
            "have / been doing",
            "did / do",
            "were / doing",
            "are / done"
          ],
          "correct": 0,
          "explanation": "Visible present evidence of recent ongoing exertion takes: 'have you been doing'."
        },
        {
          "question": "How long ________ you ________ English?",
          "options": [
            "are / learning",
            "have / been learning",
            "do / learn",
            "were / learning"
          ],
          "correct": 1,
          "explanation": "Duration up to the present moment requires: 'have you been learning'."
        },
        {
          "question": "Which sentence has an error with a stative verb?",
          "options": [
            "She has been studying for the exam.",
            "I have been knowing him for ten years.",
            "They have been painting the kitchen.",
            "We have been waiting for the bus."
          ],
          "correct": 1,
          "explanation": "'Know' is a state verb and cannot take continuous aspect (*have been knowing). Use 'have known'."
        },
        {
          "question": "Complete: 'It ________ non-stop since 6:00 AM.'",
          "options": [
            "has been raining",
            "is raining",
            "rained",
            "was raining"
          ],
          "correct": 0,
          "explanation": "Continuing action from past into present with 'since' takes: 'has been raining'."
        },
        {
          "question": "What is the meaning of 'I have been painting the bedroom'?",
          "options": [
            "The bedroom is 100% finished.",
            "The focus is on the ongoing process and effort; it might not be finished yet.",
            "I will paint it tomorrow.",
            "I never painted it."
          ],
          "correct": 1,
          "explanation": "Present Perfect Continuous highlights the ongoing activity rather than a completed outcome."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "Her eyes are tired because she ________ (read) on her phone for hours.",
          "correctAnswer": "has been reading",
          "hint": "has been + read-ing.",
          "explanation": "Present Perfect Continuous: 'has been reading'."
        },
        {
          "id": 2,
          "sentence": "I ________ (wait) for this bus for over forty minutes!",
          "correctAnswer": "have been waiting",
          "hint": "have been + wait-ing.",
          "explanation": "Duration up to right now: 'have been waiting'."
        },
        {
          "id": 3,
          "sentence": "How long has your brother ________ (work) as a software engineer?",
          "correctAnswer": "been working",
          "hint": "been + work-ing.",
          "explanation": "Formula: has he been working...?"
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "I",
            "have",
            "been",
            "studying",
            "all",
            "morning."
          ],
          "correctOrder": [
            "I",
            "have",
            "been",
            "studying",
            "all",
            "morning."
          ],
          "targetSentence": "I have been studying all morning.",
          "meaning": "Extended ongoing labor."
        },
        {
          "id": 2,
          "tokens": [
            "How",
            "long",
            "have",
            "you",
            "been",
            "waiting?"
          ],
          "correctOrder": [
            "How",
            "long",
            "have",
            "you",
            "been",
            "waiting?"
          ],
          "targetSentence": "How long have you been waiting?",
          "meaning": "Inquiry about duration."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "I am living in this city for six years now.",
          "options": [
            "I am living in this city for six years now.",
            "I have been living in this city for six years now.",
            "I live in this city since six years now."
          ],
          "correctIndex": 1,
          "explanation": "Duration up to now with 'for six years' requires Present Perfect Continuous 'have been living'."
        },
        {
          "id": 2,
          "flawedSentence": "He has been write three emails this morning.",
          "options": [
            "He has been write three emails this morning.",
            "He has written three emails this morning.",
            "He is writing three emails this morning."
          ],
          "correctIndex": 1,
          "explanation": "Counting finished objects ('three emails') requires Present Perfect Simple 'has written'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "constantly",
          "targetSentence": "He has constantly been checking his watch.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "He",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "has",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "been checking his watch.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'constantly' between 'has' and 'been checking'."
        },
        {
          "id": 2,
          "adverb": "lately",
          "targetSentence": "We have been exercising a lot lately.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "We",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "have been exercising a lot",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'lately' at the very end of the sentence."
        }
      ],
      "masteryExam": [
        {
          "question": "What is the primary conceptual distinction between Present Perfect Simple and Present Perfect Continuous?",
          "options": [
            "Simple emphasizes completed result/quantity; Continuous emphasizes duration, process, or visible evidence of recent activity.",
            "Simple is only for past; Continuous is only for future.",
            "Simple is colloquial; Continuous is only formal.",
            "There is no difference."
          ],
          "correct": 0,
          "level": "B1",
          "explanation": "Simple focuses on achievement/product; Continuous focuses on duration/activity."
        },
        {
          "question": "Complete: 'Your hands are filthy! What ________ you ________?'",
          "options": [
            "did / do",
            "have / been doing",
            "are / doing",
            "were / done"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Physical evidence of recent activity triggers Present Perfect Continuous: 'have you been doing'."
        },
        {
          "question": "Why is 'I have been understanding this lesson for an hour' incorrect?",
          "options": [
            "'Understand' is a stative cognitive verb and does not admit continuous aspect.",
            "It needs 'since' instead of 'for'.",
            "'Lesson' is plural.",
            "The tense should be Future Simple."
          ],
          "correct": 0,
          "level": "B1",
          "explanation": "Cognitive verbs like understand cannot take -ing."
        },
        {
          "question": "Choose the correct sentence to express an ongoing living situation:",
          "options": [
            "I live here for five years.",
            "I am living here since five years.",
            "I have been living here for five years.",
            "I was living here since five years."
          ],
          "correct": 2,
          "level": "B1",
          "explanation": "Started in the past and continuing into the present with 'for' takes Present Perfect Continuous."
        },
        {
          "question": "Identify the nuance of 'Who has been drinking my coffee?'",
          "options": [
            "A formal request for coffee",
            "Annoyance at discovering someone drank part of it",
            "A scientific observation of coffee",
            "A coffee advertisement"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Continuous aspect conveys irritation at ongoing or incomplete consumption."
        },
        {
          "question": "Complete: 'She is exhausted because she ________ for the marathon all week.'",
          "options": [
            "trained",
            "has been training",
            "trains",
            "was trained"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Recent continuous exertion explaining current exhaustion: 'has been training'."
        },
        {
          "question": "What is the contracted form of 'He has been'?",
          "options": [
            "He's been",
            "Heb'een",
            "He'been",
            "He has'b"
          ],
          "correct": 0,
          "level": "A2",
          "explanation": "'He has been' contracts to 'He's been'."
        },
        {
          "question": "How do you ask someone how long they have been waiting?",
          "options": [
            "How long are you waiting?",
            "How long have you been waiting?",
            "How long do you wait?",
            "How long did you wait?"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "Standard duration inquiry: 'How long have you been waiting?'"
        },
        {
          "question": "Which time word correctly pairs with a specific starting date (e.g. 2021)?",
          "options": [
            "for",
            "since",
            "during",
            "ago"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "'Since' specifies the exact starting point in time."
        },
        {
          "question": "Select the sentence focusing on a completed quantified output:",
          "options": [
            "I have been writing emails all morning.",
            "I have written five emails this morning.",
            "I was writing emails.",
            "I will be writing emails."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'I have written five emails' focuses on the completed count of five items."
        }
      ]
    }
  },
  "futurePerfectCont": {
    "meta": {
      "id": "futurePerfectCont",
      "chapterNumber": 12,
      "title": "Future Perfect Continuous",
      "fullTitle": "12. Future Perfect Continuous Tense",
      "level": "C1 CEFR",
      "aspect": "Perfect Continuous",
      "time": "Future",
      "color": "#6366f1",
      "badge": "CHAPTER 12 \u2022 CONTINUOUS HORIZONS",
      "formula": "Subject + WILL HAVE BEEN + Verb-ING",
      "summary": "Use this to emphasize HOW LONG an ongoing activity will have lasted up to a future milestone."
    },
    "overview": {
      "definition": "The Future Perfect Continuous is used to look ahead to a future date and celebrate or measure how long an ongoing activity will have been continuing up to that moment.",
      "coreConcept": "Imagine standing at your 10-year work anniversary next December: you can look back and proudly say, 'By next December, I will have been working here for ten years!'",
      "timelineInsight": "An ongoing continuous line that starts in the past or present and continues forward until it meets a specific milestone in the future.",
      "signalWords": [
        {
          "word": "By next year / By next month",
          "example": "By next year, I will have been teaching for 15 years."
        },
        {
          "word": "By the time (future event)",
          "example": "By the time we arrive, we will have been driving for 8 hours."
        },
        {
          "word": "For (duration)",
          "example": "She will have been studying medicine for six years."
        },
        {
          "word": "In December",
          "example": "In December, they will have been living together for 50 years."
        },
        {
          "word": "How long will you have been...?",
          "example": "How long will you have been working here when you retire?"
        },
        {
          "word": "By 2030",
          "example": "By 2030, our team will have been developing clean energy for a decade."
        }
      ],
      "pillars": [
        {
          "icon": "Hourglass",
          "label": "Duration to a Future Point",
          "desc": "Measuring accumulated continuous time up to a future milestone.",
          "color": "#6366f1",
          "bg": "rgba(99, 102, 241, 0.08)",
          "border": "rgba(99, 102, 241, 0.25)"
        },
        {
          "icon": "Award",
          "label": "Career & Life Anniversaries",
          "desc": "Celebrating major work, marriage, and personal endurance milestones.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        },
        {
          "icon": "Droplets",
          "label": "Explaining Future Fatigue",
          "desc": "Explaining why someone will be exhausted when they arrive in the future.",
          "color": "#f59e0b",
          "bg": "rgba(245, 158, 11, 0.08)",
          "border": "rgba(245, 158, 11, 0.25)"
        },
        {
          "icon": "Calendar",
          "label": "Endurance in Big Projects",
          "desc": "Highlighting persistent effort in scientific, tech, or academic projects.",
          "color": "#ec4899",
          "bg": "rgba(236, 72, 153, 0.08)",
          "border": "rgba(236, 72, 153, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "duration_to_future_milestone",
        "title": "1. Measuring Duration Up to a Future Milestone",
        "tag": "Future Milestone",
        "icon": "Hourglass",
        "summary": "Stating how many years, months, or hours an ongoing activity will have lasted by a future date.",
        "explanation": "Whenever you want to calculate continuous time up to an upcoming calendar date, use 'will have been + -ing'.",
        "examples": [
          {
            "sentence": "By next December, I will have been working at this company for exactly ten years.",
            "translation": "Celebrating 10 years of continuous employment.",
            "focus": "will have been working"
          },
          {
            "sentence": "Next month, they will have been living in this house for twenty years.",
            "translation": "Celebrating two decades of residency.",
            "focus": "will have been living"
          },
          {
            "sentence": "By midnight, the band will have been playing music for four straight hours.",
            "translation": "Measuring continuous musical performance.",
            "focus": "will have been playing"
          }
        ],
        "teacherNote": "The combination of 'by + date' and 'for + duration' is the signature of this tense."
      },
      {
        "id": "explaining_future_fatigue",
        "title": "2. Explaining Future Fatigue & Physical States",
        "tag": "Future Fatigue",
        "icon": "Droplets",
        "summary": "Explaining why someone will be tired, hungry, or dizzy when they reach a future destination.",
        "explanation": "Just like Past Perfect Continuous explains past tiredness, Future Perfect Continuous explains future tiredness!",
        "examples": [
          {
            "sentence": "When we reach the summit, we will have been hiking for seven hours, so we'll be exhausted.",
            "translation": "Explaining why hikers will be tired at the summit.",
            "focus": "will have been hiking"
          },
          {
            "sentence": "He will be very sleepy when you meet him; he will have been traveling for 24 hours.",
            "translation": "Journey duration explaining future jet-lag.",
            "focus": "will have been traveling"
          },
          {
            "sentence": "The chef will be tired tonight because she will have been cooking all day for the banquet.",
            "translation": "Banquet cooking duration explaining fatigue.",
            "focus": "will have been cooking"
          }
        ],
        "teacherNote": "It paints a realistic picture of the physical effort involved."
      },
      {
        "id": "combining_with_by_the_time",
        "title": "3. Combining with 'By The Time' Time Clauses",
        "tag": "Time Clauses",
        "icon": "Calendar",
        "summary": "Connecting an ongoing action with another future event that will happen.",
        "explanation": "The rule: Main clause takes 'will have been + -ing'; the 'by the time' clause takes Present Simple!",
        "examples": [
          {
            "sentence": "By the time the guests arrive, she will have been cooking all morning.",
            "translation": "Cooking will have lasted all morning when guests knock.",
            "focus": "will have been cooking ... arrive"
          },
          {
            "sentence": "By the time you wake up, I will have been driving across the state for three hours.",
            "translation": "Driving duration prior to morning wake-up.",
            "focus": "will have been driving ... wake up"
          },
          {
            "sentence": "They will have been waiting for two hours by the time the gates open.",
            "translation": "Wait time before gate opening.",
            "focus": "will have been waiting ... open"
          }
        ],
        "teacherNote": "Never put 'will' inside the 'by the time' clause!"
      },
      {
        "id": "academic_and_career_training",
        "title": "4. Academic, Sports & Medical Training Milestones",
        "tag": "Career Training",
        "icon": "Award",
        "summary": "Highlighting the incredible dedication and training required before graduating or competing.",
        "explanation": "Use this to describe the long years of practice leading up to an exam, graduation, or Olympic games.",
        "examples": [
          {
            "sentence": "By graduation day, she will have been studying medicine for six grueling years.",
            "translation": "Six years of medical studies before graduation.",
            "focus": "will have been studying"
          },
          {
            "sentence": "Before the Olympics begin, the athletes will have been training for four years.",
            "translation": "Olympic preparation cycle.",
            "focus": "will have been training"
          },
          {
            "sentence": "He will have been researching this virus for a decade before publishing his breakthrough.",
            "translation": "Ten years of scientific devotion.",
            "focus": "will have been researching"
          }
        ],
        "teacherNote": "It emphasizes persistence, resilience, and hard work."
      },
      {
        "id": "duration_vs_completed_result",
        "title": "5. Duration (Continuous) vs Completed Quantity (Simple)",
        "tag": "Contrast",
        "icon": "Split",
        "summary": "Contrasting the continuous time spent with the finished number of products in the future.",
        "explanation": "Compare: 'By 5 PM I will have been writing for 6 hours' (focus on duration) vs 'By 5 PM I will have written 20 pages' (focus on page count).",
        "examples": [
          {
            "sentence": "By evening, I will have been painting for eight hours (focus on the time spent).",
            "translation": "Focus on labor duration.",
            "focus": "will have been painting"
          },
          {
            "sentence": "By evening, I will have painted the entire living room (focus on the finished room).",
            "translation": "Focus on completed output.",
            "focus": "will have painted"
          },
          {
            "sentence": "By next month, our factory will have been producing electric cars for three years.",
            "translation": "Focus on duration of production.",
            "focus": "will have been producing"
          }
        ],
        "teacherNote": "Remember: for counts of items, use Future Perfect Simple; for hours or years, use Continuous!"
      },
      {
        "id": "long_term_dedication",
        "title": "6. Showing Lifelong Dedication & Relationships",
        "tag": "Relationships",
        "icon": "Heart",
        "summary": "Celebrating profound long-term relationships, partnerships, and community service.",
        "explanation": "Use this during anniversary toasts and retirement speeches to honor lifelong loyalty.",
        "examples": [
          {
            "sentence": "Next week, my grandparents will have been loving each other for fifty years.",
            "translation": "Golden anniversary celebration.",
            "focus": "will have been loving"
          },
          {
            "sentence": "When he retires next month, he will have been serving our community for forty years.",
            "translation": "Honoring 40 years of public service.",
            "focus": "will have been serving"
          },
          {
            "sentence": "By the end of this tour, the choir will have been performing together for twenty years.",
            "translation": "Celebrating musical harmony and longevity.",
            "focus": "will have been performing"
          }
        ],
        "teacherNote": "It adds a touching and dignified tone to speeches and ceremonies."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Subject + WILL HAVE BEEN ('ll have been) + Verb-ING",
        "explanation": "Put 'will have been' before the verb with -ing. 'Will have been' is identical for all subjects!",
        "table": [
          {
            "subject": "All Subjects (I / You / He / She / We / They)",
            "auxiliary": "will have been ('ll have been)",
            "verb": "working / living",
            "complement": "here for 10 years"
          }
        ],
        "examples": [
          {
            "en": "By next June, I will have been teaching for 20 years.",
            "context": "Career milestone"
          },
          {
            "en": "She'll have been driving for six hours by noon.",
            "context": "Contraction: She'll have been"
          }
        ]
      },
      "negative": {
        "formula": "Subject + WON'T HAVE BEEN + Verb-ING",
        "explanation": "Add 'not' between will and have: 'won't have been' (will not have been), followed by verb-ing.",
        "table": [
          {
            "subject": "All Subjects",
            "auxiliary": "won't have been",
            "verb": "waiting",
            "complement": "for very long"
          }
        ],
        "examples": [
          {
            "en": "Don't worry, we won't have been waiting more than ten minutes.",
            "context": "Reassuring a friend"
          },
          {
            "en": "She won't have been working there long enough to get full benefits.",
            "context": "Policy constraint"
          }
        ]
      },
      "interrogative": {
        "formula": "Will + Subject + HAVE BEEN + Verb-ING...?",
        "explanation": "Start with 'Will', then the person, then 'have been', then verb-ing.",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Will + Subject + have been + Verb-ING...?",
            "examples": [
              {
                "q": "Will you have been living here for five years by next May?",
                "a": "Yes, I will have been!"
              },
              {
                "q": "Will they have been traveling long when they land?",
                "a": "About twelve hours."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "How long will + Subject + have been + Verb-ING...?",
            "examples": [
              {
                "q": "How long will you have been working here next month?",
                "a": "I will have been working here for three years."
              },
              {
                "q": "How long will she have been studying by the time she graduates?",
                "a": "For six full years."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "How long will you have been driving by midnight?",
            "context": "Inquiry about travel duration"
          },
          {
            "en": "Will he have been practicing enough before the concert?",
            "context": "Inquiry about preparation time"
          }
        ]
      },
      "verbToBe": {
        "formula": "will have been (Simple Future Perfect only)",
        "explanation": "Stative verbs like 'be' NEVER take continuous form (*will have been being*). Always use Future Perfect Simple: 'By next year, I will have been a doctor for 10 years' (NOT: will have been being).",
        "table": [
          {
            "subject": "Stative Rule",
            "example": "By next week, we will have been in Spain for a month (NOT: will have been being)."
          }
        ],
        "examples": [
          {
            "en": "She will have been a manager for two years by June.",
            "context": "Career status uses Future Perfect Simple"
          },
          {
            "en": "They will have been married for 25 years next spring.",
            "context": "Marriage state milestone"
          }
        ]
      },
      "verbHave": {
        "formula": "will have been having (dynamic actions only)",
        "explanation": "You can say 'will have been having treatment' (medical action), but for possession say 'will have had a car'.",
        "table": [
          {
            "subject": "Dynamic have",
            "form": "will have been having",
            "example": "He will have been having physical therapy for three months."
          }
        ],
        "examples": [
          {
            "en": "We will have been having weekly meetings for six months.",
            "context": "Scheduled recurring meeting series"
          },
          {
            "en": "I will have had this laptop for five years by Christmas.",
            "context": "Possession uses will have had"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Forming the -ing Participle",
      "subtitle": "Spelling rules for the continuous participle.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Add -ing",
          "condition": "Standard verbs",
          "ruleText": "Add -ing (teach \u2192 teaching, study \u2192 studying).",
          "examples": [
            "teach \u2192 teaching",
            "study \u2192 studying",
            "play \u2192 playing"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Drop Silent -e",
          "condition": "Ends in -e",
          "ruleText": "Drop -e before -ing (live \u2192 living, drive \u2192 driving).",
          "examples": [
            "live \u2192 living",
            "drive \u2192 driving",
            "serve \u2192 serving"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Double Consonant",
          "condition": "Short CVC",
          "ruleText": "Double the consonant (run \u2192 running, sit \u2192 sitting).",
          "examples": [
            "run \u2192 running",
            "sit \u2192 sitting",
            "swim \u2192 swimming"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "'ll have been",
          "sound": "/l\u0259v b\u026an/",
          "tip": "In fluent English, 'I'll have been' flows quickly as /a\u026al\u0259v b\u026an/."
        },
        {
          "ending": "won't have been",
          "sound": "/wo\u028ant h\u00e6v b\u026an/",
          "tip": "Articulate 'won't' clearly before have been."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Continuously",
        "percentage": 100,
        "color": "#10b981",
        "example": "We will continuously have been improving our services."
      },
      {
        "adverb": "Steadily",
        "percentage": 90,
        "color": "#06b6d4",
        "example": "She will steadily have been progressing for five years."
      },
      {
        "adverb": "Regularly",
        "percentage": 75,
        "color": "#3b82f6",
        "example": "They will regularly have been meeting every month."
      },
      {
        "adverb": "Quietly",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "He will quietly have been preparing his masterpiece."
      },
      {
        "adverb": "Barely",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "We will barely have been waiting ten minutes."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#ef4444",
        "example": "They will never have been working so intensely before."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN 'will' and 'have'",
        "formula": "Subject + WILL + [ADVERB] + HAVE BEEN + Verb-ING",
        "explanation": "Adverbs like continuously, steadily, and probably sit between 'will' and 'have been'.",
        "examples": [
          {
            "bad": "I will have been probably working.",
            "good": "I will probably have been working."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: In time clauses, use Present Simple",
        "formula": "BY THE TIME + Subject + Present Simple, Subject + will have been + verb-ing",
        "explanation": "Never use 'will' inside the 'by the time' clause.",
        "examples": [
          {
            "bad": "By the time you will arrive, I will have been working.",
            "good": "By the time you arrive, I will have been working."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: Duration phrases (for/since) go at the end",
        "formula": "Subject + will have been + verb-ing + [FOR 10 YEARS]",
        "explanation": "The duration phrase sits naturally at the end of the clause.",
        "examples": [
          {
            "bad": "I will for ten years have been working.",
            "good": "I will have been working for ten years."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Using continuous with Stative Verbs",
        "bad": "By next year, I will have been knowing him for ten years.",
        "good": "By next year, I will have known him for ten years.",
        "explanation": "Stative verbs (know, believe, belong, love) cannot take continuous forms. Use Future Perfect Simple ('will have known')."
      },
      {
        "title": "2. Using 'will' in the 'by the time' clause",
        "bad": "By the time you will arrive, we will have been waiting for hours.",
        "good": "By the time you arrive, we will have been waiting for hours.",
        "explanation": "Time clauses introduced by 'by the time' take the Present Simple ('arrive')."
      },
      {
        "title": "3. Confusing with Future Perfect Simple for completed quantities",
        "bad": "By 5:00 PM, I will have been writing three letters.",
        "good": "By 5:00 PM, I will have written three letters.",
        "explanation": "When you specify the number of finished items (three letters), use Future Perfect Simple ('will have written')."
      },
      {
        "title": "4. Forgetting 'been'",
        "bad": "By next year, she will have working here for five years.",
        "good": "By next year, she will have been working here for five years.",
        "explanation": "The formula requires both 'have' and 'been': will have been working."
      },
      {
        "title": "5. Saying 'will has been'",
        "bad": "She will has been studying for six years.",
        "good": "She will have been studying for six years.",
        "explanation": "After modal 'will', always use base 'have'. Never say 'will has'!"
      },
      {
        "title": "6. Using Future Perfect Continuous for quick actions",
        "bad": "By tomorrow, I will have been dropping my phone.",
        "good": "By tomorrow, I will have dropped my phone. / Tomorrow I might drop...",
        "explanation": "Future Perfect Continuous is only for actions that can continue over a long period of time (working, living, studying)."
      }
    ],
    "resumeSummary": {
      "title": "Future Perfect Continuous Summary & Cheat-Sheet",
      "subtitle": "Everything you need to remember about Future Perfect Continuous on one simple card.",
      "formulaMatrix": [
        {
          "form": "+ Positive",
          "formula": "Subject + will have been + verb-ing",
          "exampleI": "I will have been working.",
          "exampleHe": "She will have been studying.",
          "memoryAnchor": "will have BEEN + verb-ING!"
        },
        {
          "form": "\u2013 Negative",
          "formula": "Subject + won't have been + verb-ing",
          "exampleI": "I won't have been waiting.",
          "exampleHe": "They won't have been sleeping.",
          "memoryAnchor": "won't have BEEN + ING"
        },
        {
          "form": "? Yes/No Question",
          "formula": "Will + Subject + have been + verb-ing?",
          "exampleI": "Will you have been working?",
          "exampleHe": "Will she have been driving?",
          "memoryAnchor": "Will + Subj + have been + ING?"
        },
        {
          "form": "? Wh- Question",
          "formula": "How long will + Subject + have been + -ing?",
          "exampleI": "How long will you have been living here?",
          "exampleHe": "How long will she have been studying?",
          "memoryAnchor": "How long will + Subj + have been + ING."
        }
      ],
      "spellingPills": [
        {
          "ending": "Regular",
          "change": "+ing",
          "example": "work \u2192 working"
        },
        {
          "ending": "Silent -e",
          "change": "Drop e + ing",
          "example": "live \u2192 living"
        },
        {
          "ending": "Short CVC",
          "change": "Double letter",
          "example": "run \u2192 running"
        },
        {
          "ending": "Always 'have'",
          "change": "Never 'has'",
          "example": "She will have been"
        }
      ],
      "adverbGoldenFormula": "Subject + WILL + [Adverb] + HAVE BEEN + Verb-ING"
    },
    "exercises": {
      "quiz": [
        {
          "question": "By next June, Dr. Watson ________ at this medical clinic for 25 years.",
          "options": [
            "will work",
            "will have been working",
            "has been working",
            "is working"
          ],
          "correct": 1,
          "explanation": "Measuring duration up to a future milestone: 'will have been working'."
        },
        {
          "question": "Complete the time clause: 'By the time the rescue plane arrives, the sailors ________ on the island for three weeks.'",
          "options": [
            "will have been surviving",
            "will survive",
            "survived",
            "have been survived"
          ],
          "correct": 0,
          "explanation": "Duration up to a future rescue event: 'will have been surviving'."
        },
        {
          "question": "Why is 'By 2030, I will have been having this house for ten years' incorrect for ownership?",
          "options": [
            "'Have' denoting possession is stative and cannot take -ing.",
            "2030 is too far away.",
            "'House' is plural.",
            "It must take will have been had."
          ],
          "correct": 0,
          "explanation": "'Have' meaning possession cannot take continuous aspect. Say 'will have had'."
        },
        {
          "question": "What is the correct form after 'by the time you...' in a future time clause?",
          "options": [
            "by the time you will wake up",
            "by the time you wake up",
            "by the time you will have woken up",
            "by the time you are waking up"
          ],
          "correct": 1,
          "explanation": "Time clauses after 'by the time' take the Present Simple: 'by the time you wake up'."
        },
        {
          "question": "What is the correct negative form of 'They will have been waiting'?",
          "options": [
            "They will not have been waiting.",
            "They won't have been waiting.",
            "Both A and B are correct.",
            "They haven't will been waiting."
          ],
          "correct": 2,
          "explanation": "Both 'will not have been waiting' and 'won't have been waiting' are correct."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "By next spring, I ________ (study) violin for ten years.",
          "correctAnswer": "will have been studying",
          "hint": "will have been + study-ing.",
          "explanation": "Future Perfect Continuous: 'will have been studying'."
        },
        {
          "id": 2,
          "sentence": "When we reach Rome, we ________ (drive) for eight straight hours.",
          "correctAnswer": "will have been driving",
          "hint": "will have been + driv-ing.",
          "explanation": "Travel duration explaining future fatigue: 'will have been driving'."
        },
        {
          "id": 3,
          "sentence": "How long will they ________ (live) in Chicago by the time they move?",
          "correctAnswer": "have been living",
          "hint": "have been + liv-ing.",
          "explanation": "Question formula: will they have been living...?"
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "By",
            "December",
            "I",
            "will",
            "have",
            "been",
            "working",
            "here",
            "ten",
            "years."
          ],
          "correctOrder": [
            "By",
            "December",
            "I",
            "will",
            "have",
            "been",
            "working",
            "here",
            "ten",
            "years."
          ],
          "targetSentence": "By December I will have been working here ten years.",
          "meaning": "Career decade milestone."
        },
        {
          "id": 2,
          "tokens": [
            "How",
            "long",
            "will",
            "you",
            "have",
            "been",
            "waiting?"
          ],
          "correctOrder": [
            "How",
            "long",
            "will",
            "you",
            "have",
            "been",
            "waiting?"
          ],
          "targetSentence": "How long will you have been waiting?",
          "meaning": "Future duration inquiry."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "By next year, she will has been living here for a decade.",
          "options": [
            "By next year, she will has been living here for a decade.",
            "By next year, she will have been living here for a decade.",
            "By next year, she will been living here for a decade."
          ],
          "correctIndex": 1,
          "explanation": "'Will' requires base 'have', never 'has'."
        },
        {
          "id": 2,
          "flawedSentence": "By 5:00 PM, I will have been finishing all three reports.",
          "options": [
            "By 5:00 PM, I will have been finishing all three reports.",
            "By 5:00 PM, I will have finished all three reports.",
            "By 5:00 PM, I will finish all three reports."
          ],
          "correctIndex": 1,
          "explanation": "Counting finished reports ('all three reports') requires Future Perfect Simple 'will have finished'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "probably",
          "targetSentence": "They will probably have been driving for five hours.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "They",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "will",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "have been driving for five hours.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'probably' between 'will' and 'have been driving'."
        },
        {
          "id": 2,
          "adverb": "steadily",
          "targetSentence": "We will steadily have been progressing.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "We",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "will",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "have been progressing.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'steadily' between 'will' and 'have been progressing'."
        }
      ],
      "masteryExam": [
        {
          "question": "What is the primary conceptual role of the Future Perfect Continuous?",
          "options": [
            "To express an immediate decision right now",
            "To emphasize the accumulated duration of an ongoing action up to a specific future reference point",
            "To describe an action that happened before another past event",
            "To state a timeless universal truth"
          ],
          "correct": 1,
          "level": "C1",
          "explanation": "It projects an ongoing process forward and measures its accumulated duration at a future milestone."
        },
        {
          "question": "Why is 'By next month, I will have been writing 5 novels' ungrammatical?",
          "options": [
            "Novel writing is forbidden in continuous aspect.",
            "Specifying a completed quantified output requires Future Perfect Simple ('will have written'), not Continuous.",
            "5 is too small a number.",
            "It needs 'since' instead of 'by'."
          ],
          "correct": 1,
          "level": "C1",
          "explanation": "Quantified completed products require simple aspect ('will have written 5 novels')."
        },
        {
          "question": "Complete: 'When she retires next spring, Professor Adams ________ for 40 years.'",
          "options": [
            "will teach",
            "will have been teaching",
            "teaches",
            "has taught"
          ],
          "correct": 1,
          "level": "C1",
          "explanation": "Career duration milestone up to retirement: 'will have been teaching'."
        },
        {
          "question": "How does Future Perfect Continuous explain future physical states?",
          "options": [
            "By showing that a continuous future activity will cause fatigue or exhaustion ('We will be exhausted because we will have been hiking for 8 hours').",
            "By predicting medical diagnoses.",
            "By promising good health.",
            "It cannot explain physical states."
          ],
          "correct": 0,
          "level": "C1",
          "explanation": "The duration of exertion explains the future physical state upon arrival."
        },
        {
          "question": "Choose the correctly constructed time clause:",
          "options": [
            "By the time the flight will land",
            "By the time the flight lands",
            "By the time the flight will have landed",
            "By the time the flight landed"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'By the time' clauses take the Present Simple ('lands')."
        },
        {
          "question": "What is the auxiliary sequence for Future Perfect Continuous?",
          "options": [
            "will + be + verb-ing",
            "will + have + been + verb-ing",
            "will + had + been + verb-ing",
            "would + have + been + verb-ing"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Sequence: will + have + been + verb-ing."
        },
        {
          "question": "Which verb CANNOT be used in Future Perfect Continuous?",
          "options": [
            "work",
            "possess",
            "drive",
            "study"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'Possess' is a stative ownership verb and resists continuous aspect."
        },
        {
          "question": "What is the negative contraction of 'will not have been'?",
          "options": [
            "won't have been",
            "willn't have been",
            "wont have been",
            "haven't will been"
          ],
          "correct": 0,
          "level": "B2",
          "explanation": "Contraction is 'won't have been'."
        },
        {
          "question": "Complete: 'By 2035, the space probe ________ through deep space for three decades.'",
          "options": [
            "will travel",
            "will have been traveling",
            "is traveling",
            "has been traveling"
          ],
          "correct": 1,
          "level": "C1",
          "explanation": "Long continuous cosmic voyage duration: 'will have been traveling'."
        },
        {
          "question": "What nuance does 'How long will you have been waiting by the time the gates open?' carry?",
          "options": [
            "A prediction of arrival",
            "An inquiry into the anticipated duration of the wait before the gates open",
            "A demand to open the gates immediately",
            "A historical question"
          ],
          "correct": 1,
          "level": "C1",
          "explanation": "Calculates the expected wait duration up to that future moment."
        }
      ]
    }
  },
  "conditionals": {
    "meta": {
      "id": "conditionals",
      "chapterNumber": 13,
      "title": "Conditionals System",
      "fullTitle": "13. Complete Conditionals System",
      "level": "B1 \u2013 C1 CEFR",
      "aspect": "Capstone",
      "time": "Multi-Time",
      "color": "#ef4444",
      "badge": "CAPSTONE \u2022 HYPOTHETICAL WORLDS",
      "formula": "If + condition clause, result clause (0, 1st, 2nd, 3rd, Mixed)",
      "summary": "Master all 5 conditional patterns: 100% scientific truths, real future possibilities, imaginary dreams, past regrets, and mixed time."
    },
    "overview": {
      "definition": "Conditionals are 'If... then...' sentences that explain what happens, what could happen, or what we imagine happening under certain conditions.",
      "coreConcept": "Think of it as 'Cause & Effect'. If condition A is met, result B happens. From 100% scientific laws to wild lottery dreams and learning from past mistakes!",
      "timelineInsight": "A branching decision tree with paths leading from facts (Zero), to real possibilities (1st), to daydreaming (2nd), to past regrets (3rd), and mixed time.",
      "signalWords": [
        {
          "word": "If",
          "example": "If it rains, we will stay at home."
        },
        {
          "word": "Unless (= If not)",
          "example": "Unless you hurry, we will miss the train."
        },
        {
          "word": "Provided that / As long as",
          "example": "You can borrow my car as long as you drive safely."
        },
        {
          "word": "If I were you",
          "example": "If I were you, I would take the job."
        },
        {
          "word": "In case",
          "example": "Take an umbrella in case it rains."
        },
        {
          "word": "Even if",
          "example": "I will go even if it snows."
        }
      ],
      "pillars": [
        {
          "icon": "Flame",
          "label": "Zero: Scientific Truths",
          "desc": "100% automatic facts: If you heat ice, it melts.",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        },
        {
          "icon": "Compass",
          "label": "1st: Real Future Possibilities",
          "desc": "Real plans & warnings: If it rains tomorrow, we will stay home.",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        },
        {
          "icon": "Sparkles",
          "label": "2nd: Imaginary Present Dreams",
          "desc": "Unreal fantasies: If I won a million dollars, I would travel the world.",
          "color": "#a855f7",
          "bg": "rgba(168, 85, 247, 0.08)",
          "border": "rgba(168, 85, 247, 0.25)"
        },
        {
          "icon": "History",
          "label": "3rd: Past Regrets",
          "desc": "Imagining a different past: If I had studied, I would have passed.",
          "color": "#ef4444",
          "bg": "rgba(239, 68, 68, 0.08)",
          "border": "rgba(239, 68, 68, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "zero_conditional",
        "title": "1. Zero Conditional \u2014 100% Scientific Facts & Truths",
        "tag": "Zero Conditional",
        "icon": "Flame",
        "summary": "Talking about scientific laws, physical rules, and things that are always 100% true.",
        "explanation": "Formula: If + Present Simple, Present Simple. Both verbs stay in simple present because it's a permanent law of nature.",
        "examples": [
          {
            "sentence": "If you heat water to 100 degrees Celsius, it boils.",
            "translation": "Universal physical law of boiling water.",
            "focus": "heat ... boils"
          },
          {
            "sentence": "If you don't water plants, they die.",
            "translation": "Biological fact of plant care.",
            "focus": "don't water ... die"
          },
          {
            "sentence": "If you mix red and yellow, you get orange.",
            "translation": "Color chemistry certainty.",
            "focus": "mix ... get"
          }
        ],
        "teacherNote": "You can replace 'if' with 'when' here without changing the meaning ('When you heat water, it boils')."
      },
      {
        "id": "first_conditional",
        "title": "2. First Conditional \u2014 Real & Possible Future Situations",
        "tag": "1st Conditional",
        "icon": "Compass",
        "summary": "Talking about real possibilities in the future and their likely results.",
        "explanation": "Formula: If + Present Simple, WILL + base verb. Real condition in the present, realistic result in the future.",
        "examples": [
          {
            "sentence": "If it rains tomorrow, we will cancel the picnic.",
            "translation": "Realistic weather contingency plan.",
            "focus": "rains ... will cancel"
          },
          {
            "sentence": "If you study hard tonight, you will pass the exam tomorrow.",
            "translation": "Direct connection between study effort and success.",
            "focus": "study ... will pass"
          },
          {
            "sentence": "Unless you leave right now, you will miss your flight.",
            "translation": "Urgent travel warning with unless.",
            "focus": "leave ... will miss"
          }
        ],
        "teacherNote": "Golden rule: Never put 'will' inside the 'if' clause! Say 'If it rains', NOT 'If it will rain'."
      },
      {
        "id": "second_conditional",
        "title": "3. Second Conditional \u2014 Imaginary Dreams & Daydreams",
        "tag": "2nd Conditional",
        "icon": "Sparkles",
        "summary": "Imagining an unreal or impossible situation right now in the present or future.",
        "explanation": "Formula: If + Past Simple, WOULD + base verb. You use the past tense not for past time, but to show it is a dream!",
        "examples": [
          {
            "sentence": "If I won a million dollars, I would buy an island.",
            "translation": "Wild financial fantasy.",
            "focus": "won ... would buy"
          },
          {
            "sentence": "If I had superpowers, I would fly across the world.",
            "translation": "Impossible superhero daydream.",
            "focus": "had ... would fly"
          },
          {
            "sentence": "If animals could talk, what would they say?",
            "translation": "Playful hypothetical question.",
            "focus": "could talk ... would they say"
          }
        ],
        "teacherNote": "We use past tense here to show distance from reality (it's not true right now)."
      },
      {
        "id": "third_conditional",
        "title": "4. Third Conditional \u2014 Past Regrets & Missed Chances",
        "tag": "3rd Conditional",
        "icon": "History",
        "summary": "Looking back at a past event and imagining what would have happened if things had been different.",
        "explanation": "Formula: If + HAD + V3, WOULD HAVE + V3. The past is finished and cannot be changed.",
        "examples": [
          {
            "sentence": "If I had studied harder, I would have passed the exam.",
            "translation": "Past regret about exam preparation.",
            "focus": "had studied ... would have passed"
          },
          {
            "sentence": "If we had caught that earlier train, we wouldn't have been late.",
            "translation": "Travel regret.",
            "focus": "had caught ... wouldn't have been"
          },
          {
            "sentence": "If you had told me earlier, I could have helped you.",
            "translation": "Regret about communication.",
            "focus": "had told ... could have helped"
          }
        ],
        "teacherNote": "This is the tense of 'if only' and learning from past mistakes."
      },
      {
        "id": "mixed_conditionals",
        "title": "5. Mixed Conditionals \u2014 Past Actions Affecting Present Reality",
        "tag": "Mixed Conditional",
        "icon": "GitMerge",
        "summary": "Connecting a past event to how your life looks right now today.",
        "explanation": "Formula: If + HAD + V3 (past condition), WOULD + base verb (present result).",
        "examples": [
          {
            "sentence": "If I had gone to medical school, I would be a doctor right now.",
            "translation": "Past education choice affecting current job today.",
            "focus": "had gone ... would be"
          },
          {
            "sentence": "If I hadn't missed my flight yesterday, I would be in Paris right now.",
            "translation": "Yesterday's mistake affecting current location.",
            "focus": "hadn't missed ... would be"
          },
          {
            "sentence": "If she had saved money in her 20s, she would own a house today.",
            "translation": "Past financial habit affecting present ownership.",
            "focus": "had saved ... would own"
          }
        ],
        "teacherNote": "It bridges past history directly into your present lifestyle today."
      },
      {
        "id": "giving_advice_were_you",
        "title": "6. Giving Advice with 'If I Were You'",
        "tag": "Giving Advice",
        "icon": "HeartHandshake",
        "summary": "Giving friendly, polite advice to a friend who is facing a difficult choice.",
        "explanation": "In formal English, always say 'If I were you' (NOT 'If I was you') followed by 'I would...'.",
        "examples": [
          {
            "sentence": "If I were you, I would accept that job offer immediately.",
            "translation": "Direct friendly career recommendation.",
            "focus": "If I were you ... would accept"
          },
          {
            "sentence": "If I were in your shoes, I would talk to the manager directly.",
            "translation": "Empathic workplace advice.",
            "focus": "If I were ... would talk"
          },
          {
            "sentence": "I wouldn't worry about it if I were you.",
            "translation": "Calming reassurance to a stressed friend.",
            "focus": "wouldn't worry ... were you"
          }
        ],
        "teacherNote": "'If I were you' is one of the most natural, respectful phrases in the English language."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "If + condition clause, result clause (or vice-versa without comma)",
        "explanation": "If the 'If' clause comes first, put a comma between the clauses. If the result clause comes first, NO comma is needed!",
        "table": [
          {
            "type": "Zero",
            "ifClause": "If you freeze water,",
            "resultClause": "it turns into ice."
          },
          {
            "type": "1st",
            "ifClause": "If you invite me,",
            "resultClause": "I will come to your party."
          },
          {
            "type": "2nd",
            "ifClause": "If I had more time,",
            "resultClause": "I would travel more."
          },
          {
            "type": "3rd",
            "ifClause": "If I had known,",
            "resultClause": "I would have helped you."
          }
        ],
        "examples": [
          {
            "en": "If it rains tomorrow, we will stay at home.",
            "context": "1st Conditional with comma"
          },
          {
            "en": "We will stay at home if it rains tomorrow.",
            "context": "No comma when 'if' is in the middle"
          }
        ]
      },
      "negative": {
        "formula": "Using 'Unless' (= If not) or negative auxiliaries",
        "explanation": "'Unless' means 'except if' or 'if not'. Example: 'Unless you hurry' = 'If you don't hurry'.",
        "table": [
          {
            "subject": "Unless clause",
            "formula": "Unless + positive verb",
            "example": "Unless you leave now, you'll be late."
          },
          {
            "subject": "If... not",
            "formula": "If you don't leave now",
            "example": "If you don't leave now, you'll be late."
          }
        ],
        "examples": [
          {
            "en": "Unless it rains, we will play soccer.",
            "context": "Unless meaning if it doesn't rain"
          },
          {
            "en": "If I didn't love you, I wouldn't tell you the truth.",
            "context": "2nd Conditional negative"
          }
        ]
      },
      "interrogative": {
        "formula": "Question word / Auxiliary + result clause + if clause...?",
        "explanation": "To ask a conditional question, put the question in the result clause.",
        "types": [
          {
            "type": "1st Conditional Question",
            "formula": "What will you do if it rains?",
            "examples": [
              {
                "q": "What will you do if you miss the train?",
                "a": "I'll take a taxi."
              },
              {
                "q": "Will you call me if you need help?",
                "a": "Yes, I will!"
              }
            ]
          },
          {
            "type": "2nd Conditional Question",
            "formula": "What would you do if you won the lottery?",
            "examples": [
              {
                "q": "Where would you live if you could live anywhere?",
                "a": "I would live in New Zealand."
              },
              {
                "q": "Would you buy that car if you had the money?",
                "a": "Yes, I would."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "What would you have done if you had been there?",
            "context": "3rd Conditional question"
          },
          {
            "en": "What happens if you press this red button?",
            "context": "Zero Conditional inquiry"
          }
        ]
      },
      "verbToBe": {
        "formula": "If I / he / she / it WERE (Subjunctive in 2nd Conditional)",
        "explanation": "In 2nd Conditionals, standard English uses 'were' for ALL subjects (If I were, if he were, if it were). Colloquially people sometimes say 'was', but 'were' is preferred on tests and in professional writing!",
        "table": [
          {
            "subject": "Subjunctive Were",
            "formula": "If I were / If she were",
            "example": "If she were here, she would know what to do."
          }
        ],
        "examples": [
          {
            "en": "If I were taller, I would play basketball.",
            "context": "Unreal physical state with were"
          },
          {
            "en": "If it were easy, everyone would do it.",
            "context": "Philosophy of challenge"
          }
        ]
      },
      "verbHave": {
        "formula": "If I had had (3rd Conditional)",
        "explanation": "In 3rd Conditionals, 'had had' is the correct past perfect of have: 'If I had had enough money, I would have bought it.'",
        "table": [
          {
            "subject": "3rd Conditional Have",
            "form": "If + had had",
            "example": "If we had had more time, we would have visited the museum."
          }
        ],
        "examples": [
          {
            "en": "If I had a car, I would drive to work. (2nd conditional)",
            "context": "Present daydream with had"
          },
          {
            "en": "If I had had a car yesterday, I would have driven. (3rd conditional)",
            "context": "Past regret with had had"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Punctuation & Comma Rules for Conditionals",
      "subtitle": "The golden comma rule for conditional sentences.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "If-Clause First = COMMA",
          "condition": "Sentence starts with If",
          "ruleText": "Put a comma between the 'if' clause and the result clause.",
          "examples": [
            "If it rains, we will stay home.",
            "If I were rich, I would travel.",
            "If you study, you will pass."
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Result Clause First = NO COMMA",
          "condition": "Sentence starts with result",
          "ruleText": "Do NOT use a comma when the result clause comes first.",
          "examples": [
            "We will stay home if it rains.",
            "I would travel if I were rich.",
            "You will pass if you study."
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Unless Spelling",
          "condition": "Unless clauses",
          "ruleText": "Do not put a negative word after unless ('Unless you go', NOT 'Unless you don't go').",
          "examples": [
            "Unless you hurry (NOT: Unless you don't hurry)",
            "Unless it rains (NOT: Unless it doesn't rain)"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "'d have pronunciation",
          "sound": "/d\u0259v/",
          "tip": "In fast natural speech, 'would have' contracts to 'would've' (/w\u028ad\u0259v/)."
        },
        {
          "ending": "If I were you",
          "sound": "/\u026af a\u026a w\u025c\u02d0r ju\u02d0/",
          "tip": "Blend smoothly: 'If-I-were-you'."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Always",
        "percentage": 100,
        "color": "#10b981",
        "example": "If you freeze water, it always turns to ice."
      },
      {
        "adverb": "Usually",
        "percentage": 85,
        "color": "#06b6d4",
        "example": "If it rains on Sunday, we usually stay indoors."
      },
      {
        "adverb": "Probably",
        "percentage": 75,
        "color": "#3b82f6",
        "example": "If you ask him nicely, he will probably agree."
      },
      {
        "adverb": "Maybe",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "If I have time tomorrow, maybe I will stop by."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "If you eat healthily, you will rarely get sick."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#ef4444",
        "example": "If you don't try, you will never know."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Adverbs sit inside the result clause",
        "formula": "If + condition, Subject + WILL / WOULD + [ADVERB] + Verb",
        "explanation": "Frequency adverbs usually sit in the main result clause, between the modal and the verb.",
        "examples": [
          {
            "bad": "If it rains, we stay always home.",
            "good": "If it rains, we always stay home. / we will always stay home."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: 'Definitely' and 'Probably' go after will/would",
        "formula": "Subject + will / would + [PROBABLY] + base verb",
        "explanation": "Place 'probably' or 'definitely' right after will or would in affirmative result clauses.",
        "examples": [
          {
            "bad": "If you invite him, he probably will come.",
            "good": "If you invite him, he will probably come."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: In negative results, 'probably' goes before won't/wouldn't",
        "formula": "Subject + [PROBABLY] + won't / wouldn't + verb",
        "explanation": "Special rule: put 'probably' before the negative contraction.",
        "examples": [
          {
            "bad": "If it rains, we won't probably go.",
            "good": "If it rains, we probably won't go."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Putting 'will' in the 'If' clause (1st Conditional)",
        "bad": "If it will rain tomorrow, we will stay at home.",
        "good": "If it rains tomorrow, we will stay at home.",
        "explanation": "Never put 'will' inside the 'if' clause! Use Present Simple: 'If it rains'."
      },
      {
        "title": "2. Putting 'would' in the 'If' clause (2nd Conditional)",
        "bad": "If I would have more money, I would buy a car.",
        "good": "If I had more money, I would buy a car.",
        "explanation": "Never put 'would' inside the 'if' clause! Use Past Simple: 'If I had'."
      },
      {
        "title": "3. Putting 'would have' in the 'If' clause (3rd Conditional)",
        "bad": "If I would have studied, I would have passed.",
        "good": "If I had studied, I would have passed.",
        "explanation": "The 'if' clause takes 'had + V3', never 'would have'!"
      },
      {
        "title": "4. Using a double negative with 'Unless'",
        "bad": "Unless you don't hurry, you will miss the train.",
        "good": "Unless you hurry, you will miss the train.",
        "explanation": "'Unless' already means 'if you don't'. Adding another negative makes an ungrammatical double negative."
      },
      {
        "title": "5. Forgetting the comma when 'If' is first",
        "bad": "If you call me I will answer.",
        "good": "If you call me, I will answer.",
        "explanation": "When the 'if' clause starts the sentence, always separate the two clauses with a comma."
      },
      {
        "title": "6. Using 'If I was you' in formal writing",
        "bad": "If I was you, I would take the job. (acceptable in slang only)",
        "good": "If I were you, I would take the job. (formal standard English)",
        "explanation": "The subjunctive 'were' is standard English for unreal advice: 'If I were you'."
      }
    ],
    "resumeSummary": {
      "title": "Conditionals Summary & Cheat-Sheet",
      "subtitle": "All five conditional patterns on one simple comparison card.",
      "formulaMatrix": [
        {
          "form": "Zero (100% Fact)",
          "formula": "If + Present Simple, Present Simple",
          "exampleI": "If you heat ice, it melts.",
          "exampleHe": "If it rains, grass gets wet.",
          "memoryAnchor": "Scientific certainty (Present + Present)"
        },
        {
          "form": "1st (Real Future)",
          "formula": "If + Present Simple, will + base",
          "exampleI": "If you invite me, I'll come.",
          "exampleHe": "If he studies, he will pass.",
          "memoryAnchor": "Real possibility (Present + will)"
        },
        {
          "form": "2nd (Dream / Fantasy)",
          "formula": "If + Past Simple, would + base",
          "exampleI": "If I won, I would travel.",
          "exampleHe": "If he knew, he would help.",
          "memoryAnchor": "Unreal daydream (Past + would)"
        },
        {
          "form": "3rd (Past Regret)",
          "formula": "If + had + V3, would have + V3",
          "exampleI": "If I had known, I'd have called.",
          "exampleHe": "If he had run, he would have caught it.",
          "memoryAnchor": "Past regret (had V3 + would have V3)"
        }
      ],
      "spellingPills": [
        {
          "ending": "If First",
          "change": "Use a comma (,)",
          "example": "If it rains, we stay"
        },
        {
          "ending": "Result First",
          "change": "No comma",
          "example": "We stay if it rains"
        },
        {
          "ending": "Unless",
          "change": "Positive verb only",
          "example": "Unless you hurry"
        },
        {
          "ending": "Advice",
          "change": "If I were you",
          "example": "If I were you, I'd go"
        }
      ],
      "adverbGoldenFormula": "If + [Condition], Subject + [Modal] + [Adverb] + Base Verb"
    },
    "exercises": {
      "quiz": [
        {
          "question": "Complete the 1st conditional: 'If it ________ tomorrow, we will go to the beach.'",
          "options": [
            "will be sunny",
            "is sunny",
            "was sunny",
            "would be sunny"
          ],
          "correct": 1,
          "explanation": "The 'if' clause in 1st Conditional takes Present Simple: 'is sunny'."
        },
        {
          "question": "Complete the 2nd conditional: 'If I ________ a million dollars, I ________ around the world.'",
          "options": [
            "win / will travel",
            "won / would travel",
            "had won / would have traveled",
            "wins / travels"
          ],
          "correct": 1,
          "explanation": "2nd Conditional (dream): If + Past Simple ('won'), would + base ('would travel')."
        },
        {
          "question": "What does 'Unless you hurry, we will miss the bus' mean?",
          "options": [
            "If you hurry, we will miss the bus.",
            "If you don't hurry, we will miss the bus.",
            "We already missed the bus.",
            "You shouldn't hurry."
          ],
          "correct": 1,
          "explanation": "'Unless' means 'if... not': 'If you don't hurry, we will miss the bus'."
        },
        {
          "question": "Complete the 3rd conditional: 'If you ________ me earlier, I ________ you.'",
          "options": [
            "told / would help",
            "had told / would have helped",
            "have told / will help",
            "had told / would help"
          ],
          "correct": 1,
          "explanation": "3rd Conditional (past regret): If + had V3 ('had told'), would have + V3 ('would have helped')."
        },
        {
          "question": "Which sentence has a comma error?",
          "options": [
            "If you call me, I will answer.",
            "I will answer if you call me.",
            "We will stay home, if it rains tomorrow.",
            "If I were you, I would take the offer."
          ],
          "correct": 2,
          "explanation": "Do not put a comma when the result clause comes first ('We will stay home if it rains tomorrow')."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "If you ________ (heat) water to 100 degrees Celsius, it boils.",
          "correctAnswer": "heat",
          "hint": "Zero conditional takes Present Simple.",
          "explanation": "Zero Conditional fact: 'heat'."
        },
        {
          "id": 2,
          "sentence": "If I ________ (be) you, I would apologize to her immediately.",
          "correctAnswer": "were",
          "hint": "Subjunctive were in 2nd conditional.",
          "explanation": "Advice formula: 'If I were you'."
        },
        {
          "id": 3,
          "sentence": "If we had left earlier, we ________ (not / miss) the flight.",
          "correctAnswer": "wouldn't have missed",
          "hint": "wouldn't have + V3.",
          "explanation": "3rd Conditional result: 'wouldn't have missed'."
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "If",
            "it",
            "rains,",
            "we",
            "will",
            "stay",
            "home."
          ],
          "correctOrder": [
            "If",
            "it",
            "rains,",
            "we",
            "will",
            "stay",
            "home."
          ],
          "targetSentence": "If it rains, we will stay home.",
          "meaning": "1st Conditional contingency."
        },
        {
          "id": 2,
          "tokens": [
            "If",
            "I",
            "were",
            "you,",
            "I",
            "would",
            "go."
          ],
          "correctOrder": [
            "If",
            "I",
            "were",
            "you,",
            "I",
            "would",
            "go."
          ],
          "targetSentence": "If I were you, I would go.",
          "meaning": "Friendly advice."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "If it will snow tomorrow, we will build a snowman.",
          "options": [
            "If it will snow tomorrow, we will build a snowman.",
            "If it snows tomorrow, we will build a snowman.",
            "If it snowed tomorrow, we will build a snowman."
          ],
          "correctIndex": 1,
          "explanation": "Never use 'will' in the 'if' clause. Say 'If it snows tomorrow'."
        },
        {
          "id": 2,
          "flawedSentence": "If I would have known about the party, I would have come.",
          "options": [
            "If I would have known about the party, I would have come.",
            "If I had known about the party, I would have come.",
            "If I knew about the party, I would have come."
          ],
          "correctIndex": 1,
          "explanation": "Never put 'would have' in the 'if' clause. Use 'If I had known'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "probably",
          "targetSentence": "If you ask him, he will probably help you.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "If you ask him, he",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "will",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "help you.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'probably' between 'will' and 'help'."
        },
        {
          "id": 2,
          "adverb": "always",
          "targetSentence": "If you press this button, the machine always starts.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "If you press this button, the machine",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "starts.",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            }
          ],
          "correctSlot": 1,
          "explanation": "Place 'always' right before the present action verb 'starts'."
        }
      ],
      "masteryExam": [
        {
          "question": "Which conditional pattern is used for scientific laws and permanent physical realities?",
          "options": [
            "Zero Conditional",
            "First Conditional",
            "Second Conditional",
            "Third Conditional"
          ],
          "correct": 0,
          "level": "B1",
          "explanation": "Zero Conditional (If + Present Simple, Present Simple) expresses 100% universal laws."
        },
        {
          "question": "Identify the ungrammatical sentence:",
          "options": [
            "If I had wings, I would fly.",
            "If it rains tomorrow, I will call you.",
            "If you will hurry, we will catch the bus.",
            "If I had known, I would have told you."
          ],
          "correct": 2,
          "level": "B1",
          "explanation": "'If you will hurry' is ungrammatical; the 'if' clause cannot take modal will."
        },
        {
          "question": "What is the communicative function of 'If I were you, I would consult a doctor'?",
          "options": [
            "Scientific hypothesis",
            "Polite, empathic advice",
            "Past regret",
            "Mathematical certainty"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'If I were you' is standard polite English for offering advice."
        },
        {
          "question": "In 2nd Conditionals, why do we use past tense verbs like 'had' or 'won'?",
          "options": [
            "Because the event happened yesterday",
            "To express psychological distance from present reality (counterfactual daydream)",
            "Because the speaker forgot the present tense",
            "It is only used in poetry"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Past tense denotes hypothetical unreality or improbability in the present."
        },
        {
          "question": "Choose the correct sentence expressing a mixed conditional (past action affecting present):",
          "options": [
            "If I studied, I pass.",
            "If I had taken that flight yesterday, I would be in London right now.",
            "If I will take that flight, I will be in London.",
            "If I took that flight, I was in London."
          ],
          "correct": 1,
          "level": "C1",
          "explanation": "Past hypothetical condition ('had taken') linked to present state ('would be')."
        },
        {
          "question": "Complete the sentence: 'You won't pass the exam ________ you study consistently.'",
          "options": [
            "if",
            "unless",
            "provided that",
            "as long as"
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'Unless' means 'except if' or 'if not': 'unless you study'."
        },
        {
          "question": "When does a conditional sentence require a comma?",
          "options": [
            "Always",
            "Never",
            "When the 'if' clause precedes the main result clause",
            "Only when using the third conditional"
          ],
          "correct": 2,
          "level": "A2",
          "explanation": "If-clause first demands a separating comma."
        },
        {
          "question": "What is the 3rd conditional formula?",
          "options": [
            "If + Present, will + base",
            "If + Past, would + base",
            "If + had + V3, would have + V3",
            "If + will, would have + V3"
          ],
          "correct": 2,
          "level": "B2",
          "explanation": "If + had + V3, would have + V3."
        },
        {
          "question": "What does 'I would have bought it if I had had the money' show?",
          "options": [
            "The speaker bought it yesterday.",
            "The speaker did not have the money, so the purchase did not happen (past regret).",
            "The speaker will buy it tomorrow.",
            "The speaker owns it now."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Past unfulfilled condition: no money, therefore no purchase."
        },
        {
          "question": "Why is 'were' used in 'If she were here' instead of 'was'?",
          "options": [
            "It is the English subjunctive mood expressing hypothetical unreality.",
            "'She' is secretly a plural noun.",
            "'Were' is used only on weekends.",
            "It is an ancient spelling error."
          ],
          "correct": 0,
          "level": "B2",
          "explanation": "The subjunctive mood uses 'were' for all persons in hypothetical conditions."
        }
      ]
    }
  },
  "passiveVoice": {
    "meta": {
      "id": "passiveVoice",
      "chapterNumber": 14,
      "title": "Passive Voice Architecture",
      "fullTitle": "14. Passive Voice Architecture",
      "level": "B1 \u2013 C2 CEFR",
      "aspect": "Capstone",
      "time": "Discourse",
      "color": "#64748b",
      "badge": "CAPSTONE \u2022 DISCOURSE MASTERY",
      "formula": "Object + Conjugated BE + Past Participle (V3)",
      "summary": "Use this when the RECEIVER of the action is the main focus, when the doer is unknown, or to be polite and objective."
    },
    "overview": {
      "definition": "In the Passive Voice, the person or thing RECEIVING the action becomes the subject of the sentence. We use it when who or what did the action is unknown, unimportant, or when we want to be polite.",
      "coreConcept": "Think of turning a spotlight: In Active Voice, the spotlight is on the actor ('The thief stole the bike'). In Passive Voice, the spotlight turns to the victim ('My bike was stolen!').",
      "timelineInsight": "Passive Voice works across ALL tenses! You simply conjugate the helper verb 'to be' into any tense and add the 3rd form (V3) participle.",
      "signalWords": [
        {
          "word": "By (the agent)",
          "example": "The Mona Lisa was painted by Leonardo da Vinci."
        },
        {
          "word": "Was / Were + V3",
          "example": "The bridge was built in 1930."
        },
        {
          "word": "Is / Are + V3",
          "example": "English is spoken all over the world."
        },
        {
          "word": "Has / Have been + V3",
          "example": "The flight has been canceled."
        },
        {
          "word": "Will be + V3",
          "example": "The results will be published tomorrow."
        },
        {
          "word": "Must be / Can be + V3",
          "example": "Seatbelts must be worn at all times."
        }
      ],
      "pillars": [
        {
          "icon": "HelpCircle",
          "label": "Unknown or Obvious Doer",
          "desc": "When you don't know who did it, or it is completely obvious ('The bank was robbed').",
          "color": "#64748b",
          "bg": "rgba(100, 116, 139, 0.08)",
          "border": "rgba(100, 116, 139, 0.25)"
        },
        {
          "icon": "Newspaper",
          "label": "News & Formal Reports",
          "desc": "Journalism, announcements, and government notices ('A treaty was signed').",
          "color": "#3b82f6",
          "bg": "rgba(59, 130, 246, 0.08)",
          "border": "rgba(59, 130, 246, 0.25)"
        },
        {
          "icon": "FlaskConical",
          "label": "Science & Processes",
          "desc": "Scientific objectivity: 'The liquid is heated and mixed with salt.'",
          "color": "#10b981",
          "bg": "rgba(16, 185, 129, 0.08)",
          "border": "rgba(16, 185, 129, 0.25)"
        },
        {
          "icon": "HeartHandshake",
          "label": "Polite Diplomacy",
          "desc": "Avoiding direct blame: 'A mistake was made' instead of 'You made a mistake!'.",
          "color": "#ec4899",
          "bg": "rgba(236, 72, 153, 0.08)",
          "border": "rgba(236, 72, 153, 0.25)"
        }
      ]
    },
    "useCases": [
      {
        "id": "unknown_or_unimportant_agent",
        "title": "1. When the Doer is Unknown or Obvious",
        "tag": "Unknown Doer",
        "icon": "HelpCircle",
        "summary": "Using passive because you don't know who did it, or it doesn't matter who did it.",
        "explanation": "If someone stole your bicycle, you don't know the thief's name. You just want to say what happened to your bike!",
        "examples": [
          {
            "sentence": "My bicycle was stolen from outside the library yesterday.",
            "translation": "The identity of the thief is completely unknown.",
            "focus": "was stolen"
          },
          {
            "sentence": "The thief was arrested late last night (obviously by the police!).",
            "translation": "Doer is so obvious it doesn't need to be stated.",
            "focus": "was arrested"
          },
          {
            "sentence": "Spanish is spoken in more than twenty countries.",
            "translation": "Millions speak it; the language is the topic.",
            "focus": "is spoken"
          }
        ],
        "teacherNote": "Focus on what happened, not who did it."
      },
      {
        "id": "news_and_formal_announcements",
        "title": "2. News Headlines & Official Announcements",
        "tag": "News & Reports",
        "icon": "Newspaper",
        "summary": "Newspapers, TV news, and official statements use passive to sound objective and serious.",
        "explanation": "Headlines spotlight the event: 'Three new hospitals will be built this year.'",
        "examples": [
          {
            "sentence": "A new international trade agreement was signed in Geneva yesterday.",
            "translation": "Major global diplomatic announcement.",
            "focus": "was signed"
          },
          {
            "sentence": "Flight 402 has been delayed due to severe thunderstorm conditions.",
            "translation": "Airport terminal announcement.",
            "focus": "has been delayed"
          },
          {
            "sentence": "All public schools will be closed tomorrow for the holiday.",
            "translation": "Civic municipal notice.",
            "focus": "will be closed"
          }
        ],
        "teacherNote": "It conveys authority and professional journalism."
      },
      {
        "id": "scientific_and_technical_processes",
        "title": "3. Scientific Experiments & Process Descriptions",
        "tag": "Science & Labs",
        "icon": "FlaskConical",
        "summary": "Describing how an experiment is run or how a product is manufactured.",
        "explanation": "Science cares about the physical process, not the scientist: 'The chemical is heated to 100 degrees.'",
        "examples": [
          {
            "sentence": "The solution is stirred gently and heated over a low flame.",
            "translation": "Laboratory procedure step.",
            "focus": "is stirred ... heated"
          },
          {
            "sentence": "Coffee beans are harvested by hand and dried under the sun.",
            "translation": "Agricultural production cycle.",
            "focus": "are harvested ... dried"
          },
          {
            "sentence": "Data is stored securely across encrypted cloud servers.",
            "translation": "Cybersecurity architecture description.",
            "focus": "is stored"
          }
        ],
        "teacherNote": "Keeps scientific papers clear, objective, and unbiased."
      },
      {
        "id": "diplomatic_politeness_avoiding_blame",
        "title": "4. Diplomatic Politeness & Avoiding Direct Blame",
        "tag": "Polite Tone",
        "icon": "HeartHandshake",
        "summary": "Softening a complaint so you don't sound aggressive or rude.",
        "explanation": "Compare: 'You made a mistake on my bill!' (very aggressive) vs 'A mistake was made on the bill' (polite and gentle).",
        "examples": [
          {
            "sentence": "A mistake was made on the invoice, could you please review it?",
            "translation": "Diplomatic billing inquiry.",
            "focus": "was made"
          },
          {
            "sentence": "The deadline has been missed, so we must reschedule.",
            "translation": "Softening professional accountability.",
            "focus": "has been missed"
          },
          {
            "sentence": "Your reservation could not be found in our computer system.",
            "translation": "Polite customer service explanation.",
            "focus": "could not be found"
          }
        ],
        "teacherNote": "Saves relationships in business and everyday life."
      },
      {
        "id": "public_rules_and_notices",
        "title": "5. Public Rules, Signs & Legal Warnings",
        "tag": "Public Signs",
        "icon": "ShieldAlert",
        "summary": "Signs, tickets, and instruction manuals outlining mandatory rules.",
        "explanation": "Use modal verbs + be + V3: 'must be worn', 'cannot be used', 'is prohibited'.",
        "examples": [
          {
            "sentence": "Safety helmets must be worn at all times in the construction zone.",
            "translation": "Mandatory safety regulation.",
            "focus": "must be worn"
          },
          {
            "sentence": "Smoking is strictly prohibited on all company premises.",
            "translation": "Public health restriction.",
            "focus": "is strictly prohibited"
          },
          {
            "sentence": "Credit cards are accepted here.",
            "translation": "Retail payment policy notice.",
            "focus": "are accepted"
          }
        ],
        "teacherNote": "Clear, concise, and applies equally to every person."
      },
      {
        "id": "historical_monuments_and_art",
        "title": "6. Historical Monuments, Books & Inventions",
        "tag": "Monuments & Art",
        "icon": "Landmark",
        "summary": "Focusing on the creation when discussing art, literature, and architectural wonders.",
        "explanation": "Use 'by' to name the famous creator at the end: 'Hamlet was written by William Shakespeare.'",
        "examples": [
          {
            "sentence": "The Eiffel Tower was built in 1889 for the World's Fair in Paris.",
            "translation": "Architectural landmark construction.",
            "focus": "was built"
          },
          {
            "sentence": "The Mona Lisa was painted by Leonardo da Vinci in the early 1500s.",
            "translation": "Masterpiece art attribution.",
            "focus": "was painted by"
          },
          {
            "sentence": "The telephone was invented by Alexander Graham Bell in 1876.",
            "translation": "Historic technological invention.",
            "focus": "was invented by"
          }
        ],
        "teacherNote": "The monument or masterpiece takes the front spotlight it deserves."
      }
    ],
    "grammarStructures": {
      "affirmative": {
        "formula": "Object + conjugated 'TO BE' + Past Participle (V3) (+ by Agent)",
        "explanation": "To make any sentence passive, move the object to the front, conjugate 'be' into the matching tense, and add the V3 verb.",
        "table": [
          {
            "tense": "Present Simple",
            "active": "They clean the room.",
            "passive": "The room is cleaned."
          },
          {
            "tense": "Past Simple",
            "active": "They cleaned the room.",
            "passive": "The room was cleaned."
          },
          {
            "tense": "Present Continuous",
            "active": "They are cleaning the room.",
            "passive": "The room is being cleaned."
          },
          {
            "tense": "Present Perfect",
            "active": "They have cleaned the room.",
            "passive": "The room has been cleaned."
          },
          {
            "tense": "Future Simple",
            "active": "They will clean the room.",
            "passive": "The room will be cleaned."
          },
          {
            "tense": "Modals (must/can)",
            "active": "They must clean the room.",
            "passive": "The room must be cleaned."
          }
        ],
        "examples": [
          {
            "en": "The letter was delivered this morning.",
            "context": "Past simple passive"
          },
          {
            "en": "Our website is being redesigned right now.",
            "context": "Present continuous passive"
          }
        ]
      },
      "negative": {
        "formula": "Object + BE + NOT + Past Participle (V3)",
        "explanation": "Add 'not' to the verb 'to be': 'is not', 'was not', 'has not been', 'will not be'.",
        "table": [
          {
            "subject": "Present",
            "form": "isn't / aren't + V3",
            "example": "The package isn't delivered on Sundays."
          },
          {
            "subject": "Past",
            "form": "wasn't / weren't + V3",
            "example": "The meeting wasn't canceled yesterday."
          },
          {
            "subject": "Future",
            "form": "won't be + V3",
            "example": "The results won't be announced until Monday."
          }
        ],
        "examples": [
          {
            "en": "I wasn't informed about the schedule change.",
            "context": "Negative past passive"
          },
          {
            "en": "This product has not been tested on animals.",
            "context": "Cruelty-free label notice"
          }
        ]
      },
      "interrogative": {
        "formula": "Auxiliary BE + Subject + Past Participle (V3)...?",
        "explanation": "Start the question with the helper verb (Is, Was, Were, Has, Will).",
        "types": [
          {
            "type": "Yes/No Question",
            "formula": "Was / Were + Subject + V3...?",
            "examples": [
              {
                "q": "Was your car repaired yesterday?",
                "a": "Yes, it was! / Not yet."
              },
              {
                "q": "Has the package been delivered?",
                "a": "Yes, it arrived an hour ago."
              }
            ]
          },
          {
            "type": "Wh- Question",
            "formula": "Wh- Word + be + Subject + V3...?",
            "examples": [
              {
                "q": "When was the Eiffel Tower built?",
                "a": "It was built in 1889."
              },
              {
                "q": "Where are these cars manufactured?",
                "a": "They are manufactured in Germany."
              }
            ]
          }
        ],
        "examples": [
          {
            "en": "Will the championship be broadcast live?",
            "context": "Future passive inquiry"
          },
          {
            "en": "How was the pyramid constructed?",
            "context": "Historical inquiry"
          }
        ]
      },
      "verbToBe": {
        "formula": "Passive Transformation of 'by'",
        "explanation": "Only include 'by + agent' if the person who did it is surprising or important to know (e.g. 'painted by Picasso'). If it is someone obvious like 'police' or 'cleaner', omit it!",
        "table": [
          {
            "subject": "Important agent (Include by)",
            "example": "Romeo and Juliet was written by William Shakespeare."
          },
          {
            "subject": "Obvious agent (Omit by)",
            "example": "The thief was arrested (no need to say 'by police')."
          }
        ],
        "examples": [
          {
            "en": "The theory was proposed by Albert Einstein.",
            "context": "Attribution to famous scientist"
          },
          {
            "en": "My wallet was stolen on the bus.",
            "context": "Unknown agent omitted"
          }
        ]
      },
      "verbHave": {
        "formula": "Causative Have / Get (Have something done)",
        "explanation": "When you pay a professional to do a service for you, say 'I had my car repaired' (NOT 'I repaired my car'!).",
        "table": [
          {
            "subject": "Causative Structure",
            "formula": "Subject + have/get + object + V3",
            "example": "I had my hair cut yesterday."
          }
        ],
        "examples": [
          {
            "en": "We are having our kitchen remodeled next week.",
            "context": "Professional contractor remodeling"
          },
          {
            "en": "She had her eyes tested by the optician.",
            "context": "Medical exam"
          }
        ]
      }
    },
    "spellingRules": {
      "title": "Forming the Passive Participle (V3)",
      "subtitle": "Review of the 3rd form (V3) across all passive tenses.",
      "rules": [
        {
          "ruleNumber": 1,
          "title": "Regular Verbs",
          "condition": "Most verbs",
          "ruleText": "Add -ed (was painted, is washed, will be closed).",
          "examples": [
            "paint \u2192 painted",
            "wash \u2192 washed",
            "close \u2192 closed"
          ]
        },
        {
          "ruleNumber": 2,
          "title": "Irregular Participles",
          "condition": "Irregular verbs",
          "ruleText": "Use the 3rd column: write \u2192 written, steal \u2192 stolen, build \u2192 built.",
          "examples": [
            "write \u2192 written",
            "steal \u2192 stolen",
            "build \u2192 built",
            "break \u2192 broken"
          ]
        },
        {
          "ruleNumber": 3,
          "title": "Continuous Passives: Add 'being'",
          "condition": "Continuous aspect",
          "ruleText": "Add 'being' between be and V3 (is being cleaned, was being painted).",
          "examples": [
            "is cleaning \u2192 is being cleaned",
            "was fixing \u2192 was being fixed"
          ]
        }
      ],
      "phoneticTips": [
        {
          "ending": "was / were reduced",
          "sound": "/w\u0259z/ and /w\u025c\u02d0r/",
          "tip": "In passive sentences, 'was' and 'were' are usually unstressed: 'The CAR was STOlen'."
        },
        {
          "ending": "has been",
          "sound": "/h\u00e6z b\u026an/",
          "tip": "Say 'has been' smoothly before the main stressed verb: 'has been CANceled'."
        }
      ]
    },
    "adverbsOfFrequency": [
      {
        "adverb": "Always",
        "percentage": 100,
        "color": "#10b981",
        "example": "Passports must always be shown at border control."
      },
      {
        "adverb": "Usually",
        "percentage": 85,
        "color": "#06b6d4",
        "example": "The morning mail is usually delivered at 10 AM."
      },
      {
        "adverb": "Frequently",
        "percentage": 70,
        "color": "#3b82f6",
        "example": "This road is frequently closed during winter snowstorms."
      },
      {
        "adverb": "Sometimes",
        "percentage": 50,
        "color": "#8b5cf6",
        "example": "Flights are sometimes delayed by fog."
      },
      {
        "adverb": "Rarely",
        "percentage": 20,
        "color": "#f59e0b",
        "example": "Rare books are rarely taken outside the library."
      },
      {
        "adverb": "Never",
        "percentage": 0,
        "color": "#ef4444",
        "example": "Confidential files are never shared with the public."
      }
    ],
    "adverbPlacementRules": [
      {
        "ruleNumber": 1,
        "title": "Rule 1: Put it BETWEEN the auxiliary 'be' and V3",
        "formula": "Subject + BE + [ADVERB] + V3 Participle",
        "explanation": "Adverbs like always, usually, and frequently sit right between 'be' and the V3 participle.",
        "examples": [
          {
            "bad": "The mail is delivered always at ten.",
            "good": "The mail is always delivered at ten."
          }
        ]
      },
      {
        "ruleNumber": 2,
        "title": "Rule 2: With modals, put it BETWEEN 'be' and V3",
        "formula": "Subject + MUST / CAN + BE + [ADVERB] + V3",
        "explanation": "You can also place it between the modal and be: 'must always be shown'.",
        "examples": [
          {
            "bad": "Seatbelts must be shown always.",
            "good": "Seatbelts must always be worn."
          }
        ]
      },
      {
        "ruleNumber": 3,
        "title": "Rule 3: 'By + Agent' goes at the very END",
        "formula": "Subject + be + V3 + [BY THE AGENT]",
        "explanation": "The person who did the action sits at the end of the clause with 'by'.",
        "examples": [
          {
            "bad": "The song by Adele was sung.",
            "good": "The song was sung by Adele."
          }
        ]
      }
    ],
    "commonTraps": [
      {
        "title": "1. Trying to make Intransitive Verbs passive",
        "bad": "An accident was happened yesterday.",
        "good": "An accident happened yesterday.",
        "explanation": "Verbs that cannot take an object (like happen, arrive, die, fall, exist) can NEVER be passive! You can never say 'was happened'."
      },
      {
        "title": "2. Forgetting the verb 'to be'",
        "bad": "The window broken yesterday.",
        "good": "The window was broken yesterday.",
        "explanation": "Passive voice always requires a conjugated form of 'to be': was broken, is cleaned, has been painted."
      },
      {
        "title": "3. Using V2 instead of V3",
        "bad": "The letter was wrote by Mary.",
        "good": "The letter was written by Mary.",
        "explanation": "Always use the 3rd form (past participle V3): write \u2192 wrote \u2192 WRITTEN."
      },
      {
        "title": "4. Overusing 'by someone' when unnecessary",
        "bad": "The thief was caught by someone.",
        "good": "The thief was caught.",
        "explanation": "Don't say 'by someone' or 'by people'. If you don't know who did it, just end the sentence at the verb!"
      },
      {
        "title": "5. Confusing 'I cut my hair' with 'I had my hair cut'",
        "bad": "I cut my hair yesterday at the salon. (meaning the barber cut it)",
        "good": "I had my hair cut yesterday at the salon.",
        "explanation": "If a professional did it, use the causative: 'I had my hair cut'."
      },
      {
        "title": "6. Forgetting 'being' in continuous passives",
        "bad": "The car is repairing right now.",
        "good": "The car is being repaired right now.",
        "explanation": "In continuous passives, 'being' is required: is being repaired, was being painted."
      }
    ],
    "resumeSummary": {
      "title": "Passive Voice Summary & Cheat-Sheet",
      "subtitle": "How to convert active sentences into passive voice across all tenses.",
      "formulaMatrix": [
        {
          "form": "Present Simple Passive",
          "formula": "am / is / are + V3",
          "exampleI": "The room is cleaned daily.",
          "exampleHe": "Letters are delivered at 10 AM.",
          "memoryAnchor": "am/is/are + V3"
        },
        {
          "form": "Past Simple Passive",
          "formula": "was / were + V3",
          "exampleI": "The car was repaired.",
          "exampleHe": "The books were returned.",
          "memoryAnchor": "was/were + V3"
        },
        {
          "form": "Present Continuous Passive",
          "formula": "is / are BEING + V3",
          "exampleI": "The road is being paved.",
          "exampleHe": "The houses are being built.",
          "memoryAnchor": "be + BEING + V3"
        },
        {
          "form": "Present Perfect Passive",
          "formula": "has / have BEEN + V3",
          "exampleI": "The flight has been canceled.",
          "exampleHe": "Bills have been paid.",
          "memoryAnchor": "have/has + BEEN + V3"
        }
      ],
      "spellingPills": [
        {
          "ending": "Regular",
          "change": "+ed",
          "example": "clean \u2192 cleaned"
        },
        {
          "ending": "Irregular V3",
          "change": "Memorize 3rd form",
          "example": "steal \u2192 stolen"
        },
        {
          "ending": "Continuous",
          "change": "+ being",
          "example": "is being repaired"
        },
        {
          "ending": "Causative",
          "change": "have something done",
          "example": "had my hair cut"
        }
      ],
      "adverbGoldenFormula": "Subject + [Conjugated BE] + [Adverb] + V3 Participle"
    },
    "exercises": {
      "quiz": [
        {
          "question": "Convert to passive: 'Leonardo da Vinci painted the Mona Lisa.'",
          "options": [
            "The Mona Lisa painted Leonardo da Vinci.",
            "The Mona Lisa was painted by Leonardo da Vinci.",
            "The Mona Lisa has been painted by Leonardo da Vinci.",
            "The Mona Lisa is painting by Leonardo da Vinci."
          ],
          "correct": 1,
          "explanation": "Past Simple passive formula: was + painted by + agent."
        },
        {
          "question": "Why is 'An accident was happened on the highway' incorrect?",
          "options": [
            "'Happen' is an intransitive verb and cannot be used in passive voice.",
            "'Accident' must be plural.",
            "It lacks a time word.",
            "Highway is spelled incorrectly."
          ],
          "correct": 0,
          "explanation": "Intransitive verbs cannot take an object and cannot form passive voice (*was happened)."
        },
        {
          "question": "Which sentence is a Present Continuous Passive?",
          "options": [
            "The bridge is built.",
            "The bridge was built.",
            "The bridge is being built right now.",
            "The bridge has been built."
          ],
          "correct": 2,
          "explanation": "Present Continuous passive uses is/are BEING + V3: 'is being built'."
        },
        {
          "question": "When should you mention the agent with 'by' in a passive sentence?",
          "options": [
            "Always in every sentence",
            "Never",
            "Only when the agent provides important, surprising, or specific information",
            "Only in questions"
          ],
          "correct": 2,
          "explanation": "Only include 'by' when the agent is informative (e.g. 'by Shakespeare')."
        },
        {
          "question": "Choose the correct causative sentence for having your eyes tested by a doctor:",
          "options": [
            "I tested my eyes yesterday.",
            "I had my eyes tested yesterday.",
            "I was tested my eyes yesterday.",
            "My eyes were having tested."
          ],
          "correct": 1,
          "explanation": "Causative formula: Subject + had + object + V3: 'I had my eyes tested'."
        }
      ],
      "fillBlanks": [
        {
          "id": 1,
          "sentence": "The novel '1984' ________ (write) by George Orwell.",
          "correctAnswer": "was written",
          "hint": "Past simple passive: was + written.",
          "explanation": "Passive voice: 'was written'."
        },
        {
          "id": 2,
          "sentence": "Safety helmets must ________ (wear) by all workers on site.",
          "correctAnswer": "be worn",
          "hint": "Modal passive: be + worn.",
          "explanation": "Modal passive: 'be worn'."
        },
        {
          "id": 3,
          "sentence": "The damaged bridge is currently ________ (repair) by engineers.",
          "correctAnswer": "being repaired",
          "hint": "Continuous passive: being + repaired.",
          "explanation": "Present continuous passive: 'being repaired'."
        }
      ],
      "sentenceScrambler": [
        {
          "id": 1,
          "tokens": [
            "The",
            "window",
            "was",
            "broken",
            "yesterday."
          ],
          "correctOrder": [
            "The",
            "window",
            "was",
            "broken",
            "yesterday."
          ],
          "targetSentence": "The window was broken yesterday.",
          "meaning": "Past simple passive event."
        },
        {
          "id": 2,
          "tokens": [
            "English",
            "is",
            "spoken",
            "all",
            "over",
            "the",
            "world."
          ],
          "correctOrder": [
            "English",
            "is",
            "spoken",
            "all",
            "over",
            "the",
            "world."
          ],
          "targetSentence": "English is spoken all over the world.",
          "meaning": "Universal linguistic fact."
        }
      ],
      "errorDetective": [
        {
          "id": 1,
          "flawedSentence": "A great mistake was occurred during the experiment.",
          "options": [
            "A great mistake was occurred during the experiment.",
            "A great mistake occurred during the experiment.",
            "A great mistake has been occurred during the experiment."
          ],
          "correctIndex": 1,
          "explanation": "'Occur' is an intransitive verb and cannot take passive voice. Say 'occurred'."
        },
        {
          "id": 2,
          "flawedSentence": "The new hospital is building in our neighborhood right now.",
          "options": [
            "The new hospital is building in our neighborhood right now.",
            "The new hospital is being built in our neighborhood right now.",
            "The new hospital was built in our neighborhood right now."
          ],
          "correctIndex": 1,
          "explanation": "The hospital is receiving the building action, so use continuous passive 'is being built'."
        }
      ],
      "adverbMastery": [
        {
          "id": 1,
          "adverb": "regularly",
          "targetSentence": "These servers are regularly maintained.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "These servers",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "are",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "maintained.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'regularly' between 'are' and the V3 participle 'maintained'."
        },
        {
          "id": 2,
          "adverb": "always",
          "targetSentence": "Helmets must always be worn.",
          "slots": [
            {
              "id": 0,
              "isSlot": true
            },
            {
              "text": "Helmets",
              "isSlot": false
            },
            {
              "id": 1,
              "isSlot": true
            },
            {
              "text": "must",
              "isSlot": false
            },
            {
              "id": 2,
              "isSlot": true
            },
            {
              "text": "be worn.",
              "isSlot": false
            }
          ],
          "correctSlot": 2,
          "explanation": "Place 'always' between 'must' and 'be worn'."
        }
      ],
      "masteryExam": [
        {
          "question": "What is the primary discourse motivation for using Passive Voice in English?",
          "options": [
            "To make sentences longer and more complicated",
            "To place the communicative focus on the recipient of the action or the action itself rather than the agent",
            "Because active voice is grammatically informal",
            "To express spontaneous future decisions"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Passive voice shifts thematic focus onto the patient/recipient of the action."
        },
        {
          "question": "Which verb CANNOT be transformed into passive voice?",
          "options": [
            "destroy",
            "disappear",
            "repair",
            "publish"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "'Disappear' is intransitive (it takes no direct object) and cannot form a passive construction."
        },
        {
          "question": "Convert to Present Perfect Passive: 'Someone has stolen my laptop.'",
          "options": [
            "My laptop was stolen.",
            "My laptop has been stolen.",
            "My laptop is stolen.",
            "My laptop has stolen."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "Present Perfect Passive: has been + V3 ('has been stolen')."
        },
        {
          "question": "What nuance does 'A mistake was made on your invoice' convey compared to 'You made a mistake'?",
          "options": [
            "It is rude and hostile.",
            "It is polite, objective, and diplomatically avoids personal blame.",
            "It implies fraud.",
            "It means no mistake exists."
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Passive voice softens interpersonal confrontation by omitting the culpable agent."
        },
        {
          "question": "Identify the causative structure representing professional service:",
          "options": [
            "I repaired my dental filling.",
            "I had my dental filling repaired by the dentist.",
            "My dental filling repaired itself.",
            "The dentist was repaired."
          ],
          "correct": 1,
          "level": "B1",
          "explanation": "'Subject + had + object + V3' signifies paying a professional for a service."
        },
        {
          "question": "Complete the continuous passive: 'The museum exhibits ________ right now.'",
          "options": [
            "are restoring",
            "are being restored",
            "were restored",
            "have restored"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "Present continuous passive: are being restored."
        },
        {
          "question": "Where does the agent typically sit in a passive clause?",
          "options": [
            "At the very beginning of the clause",
            "At the end of the clause, introduced by the preposition 'by'",
            "Directly before the auxiliary verb",
            "Inside parentheses only"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "The agent phrase sits at the clause boundary preceded by 'by'."
        },
        {
          "question": "Why is 'The Mona Lisa was painted by Leonardo da Vinci' preferred over omitting 'by'?",
          "options": [
            "Because Leonardo da Vinci is an internationally renowned artist whose identity is central to the topic.",
            "Because passive voice requires an agent in every sentence.",
            "Because painted is an intransitive verb.",
            "It is not preferred."
          ],
          "correct": 0,
          "level": "B1",
          "explanation": "When the agent is a significant creator, retaining 'by + agent' provides essential informative value."
        },
        {
          "question": "What is the past participle of the irregular verb 'catch' in passive voice?",
          "options": [
            "catched",
            "caught",
            "cought",
            "caten"
          ],
          "correct": 1,
          "level": "A2",
          "explanation": "catch \u2192 caught \u2192 caught: 'The thief was caught'."
        },
        {
          "question": "In scientific reporting, why is passive voice widely standard?",
          "options": [
            "To highlight the personality of the researcher",
            "To present the experimental process as objective, reproducible, and universal",
            "Because scientific instruments cannot speak active voice",
            "To hide errors from peer reviewers"
          ],
          "correct": 1,
          "level": "B2",
          "explanation": "It depersonalizes the text, highlighting repeatable scientific methodology."
        }
      ]
    }
  }
};

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
