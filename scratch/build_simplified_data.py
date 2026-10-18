# -*- coding: utf-8 -*-
"""
Constructs the full simplified dataset for all 13 tenses.
Each explanation is written in simple, clear, friendly English with 0 confusing jargon.
All 6 use cases, realistic everyday examples, formulas, common traps, and quizzes are included.
"""

def get_simplified_dataset():
    data = {}

    def make_use_case(cid, title, tag, icon, summary, explanation, ex1, ex2, ex3, teacher_note):
        return {
            "id": cid,
            "title": title,
            "tag": tag,
            "icon": icon,
            "summary": summary,
            "explanation": explanation,
            "examples": [
                {"sentence": ex1[0], "translation": ex1[1], "focus": ex1[2]},
                {"sentence": ex2[0], "translation": ex2[1], "focus": ex2[2]},
                {"sentence": ex3[0], "translation": ex3[1], "focus": ex3[2]}
            ],
            "teacherNote": teacher_note
        }

    # -------------------------------------------------------------
    # 1. PAST SIMPLE
    # -------------------------------------------------------------
    data["pastSimple"] = {
        "meta": {
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
            "summary": "Use this for actions that finished completely in the past at a specific time."
        },
        "overview": {
            "definition": "Use the Past Simple for actions, events, and states that started and finished completely in the past.",
            "coreConcept": "The time is finished and over (like yesterday, last night, or in 2010). There is no connection to right now.",
            "timelineInsight": "Imagine a solid point or block in the past, completely behind NOW.",
            "signalWords": [
                {"word": "Yesterday", "example": "I saw a great movie yesterday."},
                {"word": "Last night / week / year", "example": "We visited our grandparents last week."},
                {"word": "Two hours ago / 3 days ago", "example": "The train left ten minutes ago."},
                {"word": "In 2015 / In 1999", "example": "They moved to Canada in 2018."},
                {"word": "When I was young", "example": "I played guitar when I was a teenager."},
                {"word": "Just now / The other day", "example": "My package arrived just now."}
            ],
            "pillars": [
                {"icon": "Clock3", "label": "Finished Time", "desc": "The time period is 100% over (yesterday, in 2015).", "color": "#8b5cf6", "bg": "rgba(139, 92, 246, 0.08)", "border": "rgba(139, 92, 246, 0.25)"},
                {"icon": "Zap", "label": "Completed Event", "desc": "A single action that finished — 'She dropped her phone.'", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "BookOpen", "label": "Storytelling in Order", "desc": "Telling a story step by step ('I woke up, ate breakfast, and left').", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "Globe", "label": "Past Habits & States", "desc": "Things that were true before but are not true now.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "finished_time", "1. Actions Finished at a Specific Past Time", "Finished Time", "Clock",
                "Actions that happened and concluded at a specific, known point in the past.",
                "Whenever you say WHEN something happened in the past (yesterday, last week, in 2012), you always use the Past Simple.",
                ("I called my mother yesterday afternoon.", "Family phone call at a specific time.", "called"),
                ("We bought our first car three years ago.", "Completed purchase in the past.", "bought"),
                ("Did you get my message this morning?", "Asking about something earlier today.", "Did ... get"),
                "Pro tip: If you see words like 'yesterday', 'ago', or 'last week', always use Past Simple!"
            ),
            make_use_case(
                "story_sequence", "2. A Series of Events in a Story", "Story Steps", "BookOpen",
                "Listing multiple actions that happened one after another in order.",
                "When you tell a story about your day or a past event, use Past Simple for each action to move the story forward.",
                ("He opened the door, turned on the light, and sat down.", "Sequence of 3 quick actions.", "opened / turned / sat"),
                ("I woke up at 7:00 AM, brushed my teeth, and made coffee.", "Morning routine in the past.", "woke up / brushed / made"),
                ("She checked her watch and hurried to the meeting.", "Two connected actions in a story.", "checked / hurried"),
                "Notice: Each verb stays in its simple past form without needing -ing."
            ),
            make_use_case(
                "past_habits", "3. Past Habits You Don't Do Anymore", "Old Habits", "Zap",
                "Things you used to do regularly in the past, but not anymore.",
                "Use Past Simple with frequency words (always, every day) to describe old habits from your childhood or previous years.",
                ("When I was a kid, I played soccer every Saturday.", "Childhood sports routine.", "played"),
                ("My grandfather always walked to work in the summer.", "Regular past lifestyle habit.", "walked"),
                ("We ate dinner together every single evening.", "Past family routine.", "ate"),
                "You can also use 'used to' (like 'I used to play soccer'), but Past Simple works just as naturally!"
            ),
            make_use_case(
                "history_facts", "4. Historical Facts & Inventions", "History", "Globe",
                "Talking about historical events, discoveries, and famous dates.",
                "History is completely finished, so all historical moments, books, and scientific discoveries use Past Simple.",
                ("Alexander Fleming discovered penicillin in 1928.", "Famous medical discovery.", "discovered"),
                ("Neil Armstrong walked on the moon in 1969.", "Historic space exploration event.", "walked"),
                ("The ancient Romans built incredible roads and bridges.", "Civilization achievements in history.", "built"),
                "Remember: Even if a discovery affects us today, the date ('in 1928') forces the verb into Past Simple."
            ),
            make_use_case(
                "past_states", "5. Past Feelings & Long-Term Situations", "Past States", "Heart",
                "Situations or feelings that lasted for a period of time in the past.",
                "Use Past Simple for states, feelings, or jobs that continued for a while but are now completely over.",
                ("She lived in Madrid for three years before moving here.", "Past living situation (now over).", "lived"),
                ("I felt nervous during the job interview yesterday.", "A past emotional state.", "felt"),
                ("They owned a small bakery by the river.", "Past business ownership.", "owned"),
                "Even if an action lasted 10 years, if it's over now, use Past Simple with 'for' ('I lived in Italy for 5 years')."
            ),
            make_use_case(
                "when_questions", "6. Asking 'When' and 'What Time'", "Time Inquiries", "Calendar",
                "Asking questions about the exact moment something happened.",
                "Whenever you start a question with 'When' or 'What time' about the past, English always commands Past Simple with 'Did'.",
                ("When did you arrive at the hotel?", "Asking about arrival time.", "When did ... arrive"),
                ("What time did the train leave?", "Asking about departure time.", "What time did ... leave"),
                ("Where did you buy that jacket?", "Inquiring about past purchase location.", "Where did ... buy"),
                "Never say 'When have you arrived?' — always say 'When did you arrive?'!"
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + Verb-ED (Regular) or V2 (Irregular)",
                "explanation": "To make a positive sentence, add -ed to regular verbs, or use the 2nd form (V2) for irregular verbs.",
                "table": [
                    {"subject": "I / You / We / They", "auxiliary": "—", "verb": "worked / went", "complement": "yesterday"},
                    {"subject": "He / She / It", "auxiliary": "—", "verb": "worked / went", "complement": "yesterday"}
                ],
                "examples": [
                    {"en": "I played tennis yesterday.", "context": "Regular verb with -ed"},
                    {"en": "She went to the market.", "context": "Irregular verb (go → went)"}
                ]
            },
            "negative": {
                "formula": "Subject + didn't + Base Verb (infinitive)",
                "explanation": "To make a negative sentence, put 'didn't' before the verb. Keep the verb in its simple base form!",
                "table": [
                    {"subject": "I / You / We / They", "auxiliary": "didn't", "verb": "work / go", "complement": "yesterday"},
                    {"subject": "He / She / It", "auxiliary": "didn't", "verb": "work / go", "complement": "yesterday"}
                ],
                "examples": [
                    {"en": "I didn't watch TV last night.", "context": "Negative with didn't + base verb"},
                    {"en": "He didn't come to the party.", "context": "Notice: 'didn't come', NOT 'didn't came'"}
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
                            {"q": "Did you enjoy the concert?", "a": "Yes, I did! / No, I didn't."},
                            {"q": "Did she finish her homework?", "a": "Yes, she did."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word (Where / What / Why) + did + Subject + Base Verb...?",
                        "examples": [
                            {"q": "Where did you go on vacation?", "a": "We went to Greece."},
                            {"q": "Why did he leave so early?", "a": "Because he was tired."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Did you see my keys?", "context": "Yes/No question with Did"},
                    {"en": "What did you buy at the mall?", "context": "Wh- question with Did"}
                ]
            },
            "verbToBe": {
                "formula": "Subject + was / were",
                "explanation": "The verb 'to be' is special in the past: use 'was' for singular, and 'were' for plural. It never uses 'did'!",
                "table": [
                    {"subject": "I / He / She / It", "form": "was", "negative": "wasn't (was not)", "example": "I was happy yesterday."},
                    {"subject": "You / We / They", "form": "were", "negative": "weren't (were not)", "example": "They were at home."}
                ],
                "examples": [
                    {"en": "She was tired last night.", "context": "Singular subject with was"},
                    {"en": "Were you at the meeting yesterday?", "context": "Question with Were (no did!)"}
                ]
            },
            "verbHave": {
                "formula": "Subject + had (positive) | didn't have (negative)",
                "explanation": "In the past simple, 'have' becomes 'had'. In negatives, say 'didn't have'.",
                "table": [
                    {"subject": "All Subjects (I, You, He, She, We, They)", "form": "had", "negative": "didn't have", "example": "We had a great time."}
                ],
                "examples": [
                    {"en": "I had a headache yesterday.", "context": "Positive with had"},
                    {"en": "Did you have lunch?", "context": "Question with Did + have"}
                ]
            }
        },
        "spellingRules": {
            "title": "Spelling Rules for Regular Past Verbs (-ed)",
            "subtitle": "Easy rules for adding -ed to English verbs.",
            "rules": [
                {"ruleNumber": 1, "title": "Normal Verbs", "condition": "Most verbs", "ruleText": "Just add -ed to the end of the verb.", "examples": ["play → played", "watch → watched", "clean → cleaned"]},
                {"ruleNumber": 2, "title": "Verbs Ending in -e", "condition": "Ends in -e", "ruleText": "Just add -d (no need for a double e!).", "examples": ["live → lived", "like → liked", "smile → smiled"]},
                {"ruleNumber": 3, "title": "Consonant + Y", "condition": "Consonant before 'y'", "ruleText": "Change the 'y' to 'i' and add -ed.", "examples": ["study → studied", "try → tried", "carry → carried"]},
                {"ruleNumber": 4, "title": "Vowel + Y", "condition": "Vowel (a, e, o) before 'y'", "ruleText": "Do NOT change the 'y'! Just add -ed.", "examples": ["play → played", "enjoy → enjoyed", "stay → stayed"]},
                {"ruleNumber": 5, "title": "Short Vowel + Single Consonant", "condition": "1 short vowel + 1 consonant", "ruleText": "Double the last consonant before adding -ed.", "examples": ["stop → stopped", "plan → planned", "fit → fitted"]}
            ],
            "phoneticTips": [
                {"ending": "-ed sounds", "sound": "/t/, /d/, or /ɪd/", "tip": "Only say an extra syllable (/ɪd/) when the verb ends in a 't' or 'd' sound, like 'wanted' or 'needed'."},
                {"ending": "Silent -e", "sound": "Smooth vowel", "tip": "In words like 'lived' or 'closed', the 'e' is completely silent."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Always", "percentage": 100, "color": "#10b981", "example": "When I was young, I always walked to school."},
            {"adverb": "Usually", "percentage": 80, "color": "#06b6d4", "example": "We usually ate dinner at 7:00 PM."},
            {"adverb": "Often", "percentage": 70, "color": "#3b82f6", "example": "He often visited his grandmother on Sundays."},
            {"adverb": "Sometimes", "percentage": 50, "color": "#8b5cf6", "example": "They sometimes stayed up late on weekends."},
            {"adverb": "Rarely", "percentage": 20, "color": "#f59e0b", "example": "She rarely complained about anything."},
            {"adverb": "Never", "percentage": 0, "color": "#ef4444", "example": "I never drank coffee until I went to college."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BEFORE the main action verb",
                "formula": "Subject + [ADVERB] + Main Verb",
                "explanation": "Frequency adverbs sit directly in front of normal action verbs.",
                "examples": [{"bad": "He finished always his dinner.", "good": "He always finished his dinner."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: Put it AFTER the verb 'to be' (was / were)",
                "formula": "Subject + WAS / WERE + [ADVERB]",
                "explanation": "When using was or were, place the adverb right after it.",
                "examples": [{"bad": "She always was cheerful.", "good": "She was always cheerful."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: Put it AFTER 'didn't'",
                "formula": "Subject + didn't + [ADVERB] + Verb",
                "explanation": "In negative sentences, the adverb sits between didn't and the verb.",
                "examples": [{"bad": "I always didn't like broccoli.", "good": "I didn't always like broccoli."}]
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
                "explanation": "Irregular verbs don't use -ed. They have special forms you memorize: buy → bought, go → went, see → saw."
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
                {"form": "+ Positive", "formula": "Subject + Verb-ED / V2", "exampleI": "I worked yesterday.", "exampleHe": "He went home early.", "memoryAnchor": "Use -ed or V2 irregular form."},
                {"form": "– Negative", "formula": "Subject + didn't + base verb", "exampleI": "I didn't work.", "exampleHe": "He didn't go.", "memoryAnchor": "didn't + bare infinitive!"},
                {"form": "? Yes/No Question", "formula": "Did + Subject + base verb?", "exampleI": "Did you work?", "exampleHe": "Did he go?", "memoryAnchor": "Start with Did!"},
                {"form": "? Wh- Question", "formula": "Wh- Word + did + Subject + base?", "exampleI": "Where did you work?", "exampleHe": "Why did he go?", "memoryAnchor": "Where / Why + did + base."}
            ],
            "spellingPills": [
                {"ending": "Most verbs", "change": "+ed", "example": "play → played"},
                {"ending": "Ends in -e", "change": "+d", "example": "live → lived"},
                {"ending": "Consonant + y", "change": "y → ied", "example": "study → studied"},
                {"ending": "Short CVC", "change": "Double letter", "example": "stop → stopped"}
            ],
            "adverbGoldenFormula": "Subject + [Finished Past Time Word] + Verb-ED / V2"
        },
        "exercises": {
            "quiz": [
                {
                    "question": "Which sentence correctly talks about yesterday?",
                    "options": ["I have visited London yesterday.", "I visited London yesterday.", "I am visiting London yesterday.", "I visit London yesterday."],
                    "correct": 1,
                    "explanation": "'Yesterday' is finished past time, so use the Past Simple 'visited'."
                },
                {
                    "question": "What is the correct negative form of 'She went to school'?",
                    "options": ["She didn't went to school.", "She didn't go to school.", "She wasn't go to school.", "She not went to school."],
                    "correct": 1,
                    "explanation": "After 'didn't', the verb goes back to its base form 'go'."
                },
                {
                    "question": "Choose the correct question:",
                    "options": ["Did you arrived on time?", "Did you arrive on time?", "Were you arrive on time?", "Have you arrived yesterday?"],
                    "correct": 1,
                    "explanation": "Use 'Did' + subject + base verb 'arrive'."
                },
                {
                    "question": "What is the past simple of the verb 'buy'?",
                    "options": ["buyed", "bought", "buys", "boughten"],
                    "correct": 1,
                    "explanation": "'Buy' is an irregular verb: buy → bought."
                },
                {
                    "question": "Complete the sentence: 'Where ________ you last night?'",
                    "options": ["did", "were", "was", "are"],
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
                    "tokens": ["He", "called", "me", "yesterday"],
                    "correctOrder": ["He", "called", "me", "yesterday"],
                    "targetSentence": "He called me yesterday.",
                    "meaning": "Completed action at a finished time."
                },
                {
                    "id": 2,
                    "tokens": ["Did", "you", "enjoy", "the", "party?"],
                    "correctOrder": ["Did", "you", "enjoy", "the", "party?"],
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
                        {"id": 0, "isSlot": True},
                        {"text": "My grandfather", "isSlot": False},
                        {"id": 1, "isSlot": True},
                        {"text": "walked", "isSlot": False},
                        {"id": 2, "isSlot": True},
                        {"text": "to work.", "isSlot": False}
                    ],
                    "correctSlot": 1,
                    "explanation": "Put the adverb directly BEFORE the action verb (walked)."
                },
                {
                    "id": 2,
                    "adverb": "often",
                    "targetSentence": "We were often late for class.",
                    "slots": [
                        {"id": 0, "isSlot": True},
                        {"text": "We", "isSlot": False},
                        {"id": 1, "isSlot": True},
                        {"text": "were", "isSlot": False},
                        {"id": 2, "isSlot": True},
                        {"text": "late for class.", "isSlot": False}
                    ],
                    "correctSlot": 2,
                    "explanation": "Put the adverb directly AFTER were."
                }
            ],
            "masteryExam": [
                {"question": "Which sentence correctly expresses a finished past action with a closed time anchor?", "options": ["I have seen that movie yesterday.", "I saw that movie yesterday.", "I am seeing that movie yesterday.", "I see that movie yesterday."], "correct": 1, "level": "A2", "explanation": "'Yesterday' requires the Past Simple 'saw'."},
                {"question": "What is the correct negative form of 'She went home early'?", "options": ["She didn't went home early.", "She didn't go home early.", "She wasn't go home early.", "She not went home early."], "correct": 1, "level": "A2", "explanation": "Negative Past Simple uses didn't + base infinitive 'go'."},
                {"question": "Choose the correct question form:", "options": ["Did they arrived on time?", "Were they arrive on time?", "Did they arrive on time?", "Have they arrived yesterday?"], "correct": 2, "level": "A2", "explanation": "'Did' + subject + base verb 'arrive'."},
                {"question": "How is the past simple of the verb 'marry' spelled?", "options": ["marryed", "married", "marrid", "marriled"], "correct": 1, "level": "A2", "explanation": "Consonant + y changes to -ied."},
                {"question": "Select the correct past simple form of the irregular verb 'catch':", "options": ["catched", "caught", "cot", "cought"], "correct": 1, "level": "B1", "explanation": "'Catch' is irregular: catch → caught."},
                {"question": "Complete: 'Why ________ you ________ to the doctor when you felt ill?'", "options": ["did / go", "did / went", "were / go", "have / went"], "correct": 0, "level": "B1", "explanation": "Wh- questions use: Wh- + did + subject + base verb."},
                {"question": "Which time expression CANNOT be used with Past Simple?", "options": ["Three days ago", "Last winter", "Since 2015", "In the 19th century"], "correct": 2, "level": "B1", "explanation": "'Since 2015' connects to now and requires Present Perfect."},
                {"question": "The past form of 'be' for plural subjects (We/They) is:", "options": ["was", "were", "did be", "been"], "correct": 1, "level": "A2", "explanation": "'We' and 'They' take 'were'."},
                {"question": "Identify the sentence with an error:", "options": ["He stopped the car abruptly.", "She planed her vacation carefully.", "They cried with joy.", "We preferred the first option."], "correct": 1, "level": "B1", "explanation": "'Plan' doubles the consonant: 'planned', not 'planed'."},
                {"question": "When you list multiple actions in a story in order, which tense do you use?", "options": ["Present Continuous", "Past Simple", "Future Simple", "Past Perfect Continuous"], "correct": 1, "level": "A2", "explanation": "Past Simple moves a story forward step by step."}
            ]
        }
    }

    return data

print("Past simple simplified dataset ready.")
