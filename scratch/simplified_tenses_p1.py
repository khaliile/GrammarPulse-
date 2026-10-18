# -*- coding: utf-8 -*-
"""
Part 1: Simplified, clear, beginner-friendly explanations for:
- pastSimple
- futureSimple
- pastContinuous
- presentContinuous
- futureContinuous
"""

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

def get_part1_tenses():
    tenses = {}

    # =========================================================================
    # 1. PAST SIMPLE
    # =========================================================================
    tenses["pastSimple"] = {
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
            "summary": "Use this for actions and situations that finished completely in the past."
        },
        "overview": {
            "definition": "The Past Simple is used for actions, events, and feelings that happened and finished completely in the past.",
            "coreConcept": "The time is over and done (yesterday, last week, in 2015). There is no connection to right now.",
            "timelineInsight": "Imagine a solid point or block in the past, completely behind the present moment.",
            "signalWords": [
                {"word": "Yesterday", "example": "I saw a great movie yesterday."},
                {"word": "Last night / week / year", "example": "We visited our grandparents last week."},
                {"word": "Two hours ago / 3 days ago", "example": "The train left ten minutes ago."},
                {"word": "In 2015 / In 1999", "example": "They moved to Canada in 2018."},
                {"word": "When I was young", "example": "I played guitar when I was a teenager."},
                {"word": "Just now / That day", "example": "My package arrived just now."}
            ],
            "pillars": [
                {"icon": "Clock3", "label": "Finished Time", "desc": "The time period is 100% over (yesterday, in 2015).", "color": "#8b5cf6", "bg": "rgba(139, 92, 246, 0.08)", "border": "rgba(139, 92, 246, 0.25)"},
                {"icon": "Zap", "label": "Completed Event", "desc": "A single action that finished — 'She dropped her phone.'", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "BookOpen", "label": "Storytelling Steps", "desc": "Telling a story in order ('I woke up, ate breakfast, and left').", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "Globe", "label": "Past Habits & States", "desc": "Things that were true in the past but not anymore.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "finished_time", "1. Actions Finished at a Specific Past Time", "Finished Time", "Clock",
                "Actions that happened and concluded at a specific, known point in the past.",
                "Whenever you say WHEN something happened in the past (yesterday, last week, in 2012), use the Past Simple.",
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
                "You can also say 'used to play', but Past Simple works just as naturally!"
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
                "Whenever you start a question with 'When' or 'What time' about the past, English always uses Past Simple with 'Did'.",
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
                {"question": "Which sentence correctly talks about yesterday?", "options": ["I have visited London yesterday.", "I visited London yesterday.", "I am visiting London yesterday.", "I visit London yesterday."], "correct": 1, "explanation": "'Yesterday' is finished past time, so use the Past Simple 'visited'."},
                {"question": "What is the correct negative form of 'She went to school'?", "options": ["She didn't went to school.", "She didn't go to school.", "She wasn't go to school.", "She not went to school."], "correct": 1, "explanation": "After 'didn't', the verb goes back to its base form 'go'."},
                {"question": "Choose the correct question:", "options": ["Did you arrived on time?", "Did you arrive on time?", "Were you arrive on time?", "Have you arrived yesterday?"], "correct": 1, "explanation": "Use 'Did' + subject + base verb 'arrive'."},
                {"question": "What is the past simple of the verb 'buy'?", "options": ["buyed", "bought", "buys", "boughten"], "correct": 1, "explanation": "'Buy' is an irregular verb: buy → bought."},
                {"question": "Complete the sentence: 'Where ________ you last night?'", "options": ["did", "were", "was", "are"], "correct": 1, "explanation": "With 'you', use the past form 'were' (Where were you?)."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "Alexander Fleming ________ (discover) penicillin in 1928.", "correctAnswer": "discovered", "hint": "Just add -ed to discover.", "explanation": "Regular verb in the past takes -ed: discovered."},
                {"id": 2, "sentence": "I ________ (see) my old teacher at the grocery store yesterday.", "correctAnswer": "saw", "hint": "Irregular past of see.", "explanation": "The past form of see is saw."},
                {"id": 3, "sentence": "We didn't ________ (have) enough time to visit the museum.", "correctAnswer": "have", "hint": "After didn't, use the base verb.", "explanation": "After 'didn't', keep the base verb have."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["He", "called", "me", "yesterday"], "correctOrder": ["He", "called", "me", "yesterday"], "targetSentence": "He called me yesterday.", "meaning": "Completed action at a finished time."},
                {"id": 2, "tokens": ["Did", "you", "enjoy", "the", "party?"], "correctOrder": ["Did", "you", "enjoy", "the", "party?"], "targetSentence": "Did you enjoy the party?", "meaning": "Past simple question."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "Did she went to the library yesterday?", "options": ["Did she went to the library yesterday?", "Did she go to the library yesterday?", "Does she went to the library yesterday?"], "correctIndex": 1, "explanation": "'Did' already takes the past tense, so 'went' must be the base verb 'go'."},
                {"id": 2, "flawedSentence": "I didn't saw him at the conference.", "options": ["I didn't saw him at the conference.", "I didn't see him at the conference.", "I not saw him at the conference."], "correctIndex": 1, "explanation": "After 'didn't', use the base verb 'see'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "always", "targetSentence": "My grandfather always walked to work.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "My grandfather", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "walked", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "to work.", "isSlot": False}],
                    "correctSlot": 1, "explanation": "Put the adverb directly BEFORE the action verb (walked)."
                },
                {
                    "id": 2, "adverb": "often", "targetSentence": "We were often late for class.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "We", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "were", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "late for class.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Put the adverb directly AFTER were."
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

    # =========================================================================
    # 3. FUTURE SIMPLE (will)
    # =========================================================================
    tenses["futureSimple"] = {
        "meta": {
            "id": "futureSimple",
            "chapterNumber": 3,
            "title": "Future Simple",
            "fullTitle": "3. Future Simple Tense",
            "level": "A2 – B1 CEFR",
            "aspect": "Simple",
            "time": "Future",
            "color": "#14b8a6",
            "badge": "CHAPTER 3 • FUTURE REALITY",
            "formula": "Subject + WILL + Base Verb | won't + base | Will...?",
            "summary": "Use this for instant decisions, predictions, promises, offers, and future facts."
        },
        "overview": {
            "definition": "The Future Simple with 'will' is used when we decide something right now, make predictions based on opinion, or promise to do something.",
            "coreConcept": "You did not make a plan before; you are choosing right now at this exact moment, or guessing what will happen tomorrow.",
            "timelineInsight": "Looking forward from NOW into the future, picturing an event that has not happened yet.",
            "signalWords": [
                {"word": "Tomorrow", "example": "I will call you tomorrow morning."},
                {"word": "Next week / month / year", "example": "They will travel to Spain next month."},
                {"word": "In the future / Soon", "example": "Electric planes will fly soon."},
                {"word": "I think / I believe", "example": "I think it will be sunny tomorrow."},
                {"word": "Probably / Maybe", "example": "She will probably pass the test."},
                {"word": "I promise", "example": "I will never forget your help."}
            ],
            "pillars": [
                {"icon": "Zap", "label": "Instant Decisions", "desc": "Deciding something right now at the moment of speaking.", "color": "#14b8a6", "bg": "rgba(20, 184, 166, 0.08)", "border": "rgba(20, 184, 166, 0.25)"},
                {"icon": "Sparkles", "label": "Predictions", "desc": "Guessing what will happen based on what you think.", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "Heart", "label": "Promises & Offers", "desc": "Promising to do something or volunteering to help.", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"},
                {"icon": "Calendar", "label": "Future Facts", "desc": "Events in the future that are certain and cannot be changed.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "spontaneous_decisions", "1. Instant Decisions Made Right Now", "Instant Choice", "Zap",
                "Making a quick decision at the very moment you are speaking, without prior planning.",
                "Whenever something happens unexpectedly and you decide to take action on the spot, use 'will' (usually contracted as 'I'll').",
                ("The phone is ringing. I'll answer it!", "Spontaneous reaction to a sound.", "I'll answer"),
                ("It is cold in here. I will close the window.", "Immediate decision based on room temperature.", "will close"),
                ("We are out of milk. I'll run to the store.", "Deciding right now to go buy milk.", "I'll run"),
                "Never use 'going to' here! If you decide right now, always say 'I will / I'll'."
            ),
            make_use_case(
                "predictions_opinion", "2. Predictions Based on Thoughts & Beliefs", "Predictions", "Sparkles",
                "Saying what you think or guess will happen in the future.",
                "When you predict the future based on your opinion or feelings (with 'I think', 'I believe', 'probably'), use 'will'.",
                ("I think our team will win the championship.", "Personal opinion prediction.", "will win"),
                ("Humans will land on Mars within the next twenty years.", "Scientific forecast based on belief.", "will land"),
                ("Don't worry, you will do great on the test tomorrow.", "Encouraging prediction for a friend.", "will do"),
                "If you have physical proof right now (like dark clouds), use 'going to'. If it's just in your head, use 'will'!"
            ),
            make_use_case(
                "promises_commitments", "3. Promises & Personal Commitments", "Promises", "Heart",
                "Making a solemn promise to someone that you will or won't do something.",
                "English speakers always use 'will' or 'won't' to make promises. It shows strong personal loyalty.",
                ("I promise I will keep your secret safe.", "Direct promise with the word promise.", "will keep"),
                ("I will always be there for you when you need help.", "Long-term friendship commitment.", "will always be"),
                ("I won't let you down, I swear.", "Negative promise with won't.", "won't let"),
                "The negative of 'will' is 'won't' (will not)."
            ),
            make_use_case(
                "offers_requests", "4. Volunteering to Help (Offers & Requests)", "Offers", "HandHeart",
                "Offering your help to someone or politely asking them to do something.",
                "When someone is carrying something heavy or struggling, say 'I'll help you!' to offer assistance.",
                ("That suitcase looks heavy. I'll carry it for you.", "Friendly offer of physical assistance.", "I'll carry"),
                ("Will you please pass the salt?", "Polite request at the dinner table.", "Will you ... pass"),
                ("I'll drive you to the airport tomorrow morning.", "Volunteering to provide a ride.", "I'll drive"),
                "You can also use 'Shall I...?' in British English when offering help ('Shall I open the door?')."
            ),
            make_use_case(
                "warnings_threats", "5. Warnings & Consequences", "Warnings", "AlertTriangle",
                "Telling someone what bad thing will happen if they don't be careful.",
                "Use 'will' to state the direct consequence of an action: 'Do this, or that will happen!'",
                ("Be careful with that glass or you will drop it!", "Immediate safety warning.", "will drop"),
                ("Eat your vegetables or you won't get any dessert.", "Parental rule with consequence.", "won't get"),
                ("Hurry up, or we will miss the last train!", "Warning about running late.", "will miss"),
                "This connects closely with the First Conditional ('If you hurry, you will catch the train')."
            ),
            make_use_case(
                "future_facts", "6. Inevitable Future Facts", "Future Facts", "Calendar",
                "Events that will happen automatically because of the calendar or nature.",
                "When a future fact is 100% certain and outside anyone's control, use 'will'.",
                ("The sun will rise at 6:15 AM tomorrow.", "Astronomical natural certainty.", "will rise"),
                ("My grandmother will turn 85 next Tuesday.", "Birthday milestone determined by calendar.", "will turn"),
                ("Next year will be a leap year.", "Calendar fact.", "will be"),
                "Because nobody can stop your birthday from coming, 'will' is the perfect natural choice."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + WILL + Base Verb",
                "explanation": "To make a positive sentence, just put 'will' (or 'll) before any base verb. 'Will' is the same for all persons (I, you, he, she, they)!",
                "table": [
                    {"subject": "I / You / We / They", "auxiliary": "will ('ll)", "verb": "help / go", "complement": "tomorrow"},
                    {"subject": "He / She / It", "auxiliary": "will ('ll)", "verb": "help / go", "complement": "tomorrow"}
                ],
                "examples": [
                    {"en": "I will call you later tonight.", "context": "Positive future statement with will"},
                    {"en": "She'll come to the party.", "context": "Contraction: She will → She'll"}
                ]
            },
            "negative": {
                "formula": "Subject + WON'T (will not) + Base Verb",
                "explanation": "To make a negative sentence, put 'won't' before the base verb.",
                "table": [
                    {"subject": "I / You / We / They", "auxiliary": "won't", "verb": "forget / leave", "complement": "your birthday"},
                    {"subject": "He / She / It", "auxiliary": "won't", "verb": "forget / leave", "complement": "your birthday"}
                ],
                "examples": [
                    {"en": "I won't tell anyone your secret.", "context": "Negative promise with won't"},
                    {"en": "It won't take very long.", "context": "Prediction about time"}
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
                            {"q": "Will you help me with this box?", "a": "Yes, I will! / Of course."},
                            {"q": "Will it rain tomorrow?", "a": "No, it won't."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + will + Subject + Base Verb...?",
                        "examples": [
                            {"q": "What will you do after university?", "a": "I will travel for a year."},
                            {"q": "When will the meeting start?", "a": "It will start at 2:00 PM."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Will you come to dinner tomorrow?", "context": "Invitation with Will"},
                    {"en": "Where will they stay in London?", "context": "Wh- question with Will"}
                ]
            },
            "verbToBe": {
                "formula": "Subject + will be + adjective / noun",
                "explanation": "With the verb 'to be', simply say 'will be' for everyone.",
                "table": [
                    {"subject": "All Subjects", "form": "will be", "negative": "won't be", "example": "She will be very happy."}
                ],
                "examples": [
                    {"en": "I will be 25 years old next week.", "context": "Age milestone"},
                    {"en": "We won't be late, don't worry.", "context": "Reassurance with won't be"}
                ]
            },
            "verbHave": {
                "formula": "Subject + will have + object",
                "explanation": "To talk about possessing something in the future, say 'will have'.",
                "table": [
                    {"subject": "All Subjects", "form": "will have", "negative": "won't have", "example": "You will have plenty of time."}
                ],
                "examples": [
                    {"en": "We will have a test next Friday.", "context": "Scheduled future event"},
                    {"en": "He won't have any problems.", "context": "Confidence in a friend"}
                ]
            }
        },
        "spellingRules": {
            "title": "Short Forms & Contractions with 'Will'",
            "subtitle": "How native speakers write and pronounce 'will' quickly.",
            "rules": [
                {"ruleNumber": 1, "title": "I will → I'll", "condition": "Subject + will", "ruleText": "Combine the pronoun with 'll.", "examples": ["I will → I'll", "you will → you'll", "we will → we'll"]},
                {"ruleNumber": 2, "title": "He will → He'll", "condition": "Third person pronouns", "ruleText": "Add 'll to he, she, and they.", "examples": ["he will → he'll", "she will → she'll", "they will → they'll"]},
                {"ruleNumber": 3, "title": "It will → It'll", "condition": "Neutral pronoun", "ruleText": "Say 'It'll' smoothly in conversation.", "examples": ["it will rain → it'll rain", "it will be fun → it'll be fun"]},
                {"ruleNumber": 4, "title": "Negative: will not → won't", "condition": "Negative contraction", "ruleText": "Notice the spelling change: 'will not' becomes 'won't', NOT 'willn't'!", "examples": ["will not → won't", "I won't forget", "They won't come"]}
            ],
            "phoneticTips": [
                {"ending": "'ll pronunciation", "sound": "/l/ sound", "tip": "Pronounce 'I'll' like 'aisle' and 'he'll' like 'heel'."},
                {"ending": "won't pronunciation", "sound": "/woʊnt/", "tip": "Rhymes with 'don't'. Don't confuse it with 'want' (/wɑːnt/)!"}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Definitely", "percentage": 100, "color": "#10b981", "example": "I will definitely call you tomorrow."},
            {"adverb": "Certainly", "percentage": 90, "color": "#06b6d4", "example": "She will certainly succeed."},
            {"adverb": "Probably", "percentage": 75, "color": "#3b82f6", "example": "They will probably arrive around 6:00 PM."},
            {"adverb": "Maybe / Perhaps", "percentage": 50, "color": "#8b5cf6", "example": "Maybe we will go to the beach this weekend."},
            {"adverb": "Rarely", "percentage": 20, "color": "#f59e0b", "example": "You will rarely find a better deal than this."},
            {"adverb": "Never", "percentage": 0, "color": "#ef4444", "example": "I will never forget your kindness."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN 'will' and the base verb",
                "formula": "Subject + WILL + [ADVERB] + Base Verb",
                "explanation": "In positive sentences, the adverb sits snugly in the middle between 'will' and the verb.",
                "examples": [{"bad": "I will call definitely you.", "good": "I will definitely call you."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: In negatives, 'probably' goes BEFORE 'won't'",
                "formula": "Subject + PROBABLY + won't + Base Verb",
                "explanation": "Special rule: 'probably' and 'definitely' go BEFORE 'won't' in negative sentences.",
                "examples": [{"bad": "I won't probably come.", "good": "I probably won't come."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: 'Maybe' and 'Perhaps' go at the very start",
                "formula": "MAYBE + Subject + will + Base Verb",
                "explanation": "'Maybe' and 'perhaps' are placed at the beginning of the entire sentence.",
                "examples": [{"bad": "I will maybe call you.", "good": "Maybe I will call you."}]
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
                {"form": "+ Positive", "formula": "Subject + will ('ll) + base verb", "exampleI": "I will help you.", "exampleHe": "He'll be here soon.", "memoryAnchor": "will + bare infinitive!"},
                {"form": "– Negative", "formula": "Subject + won't + base verb", "exampleI": "I won't forget.", "exampleHe": "She won't tell anyone.", "memoryAnchor": "won't = will not"},
                {"form": "? Yes/No Question", "formula": "Will + Subject + base verb?", "exampleI": "Will you come?", "exampleHe": "Will he join us?", "memoryAnchor": "Start with Will!"},
                {"form": "? Wh- Question", "formula": "Wh- Word + will + Subject + base?", "exampleI": "What will you do?", "exampleHe": "When will they arrive?", "memoryAnchor": "Where / When + will + base."}
            ],
            "spellingPills": [
                {"ending": "I will", "change": "I'll", "example": "I'll be there"},
                {"ending": "She will", "change": "She'll", "example": "She'll call you"},
                {"ending": "will not", "change": "won't", "example": "I won't give up"},
                {"ending": "Negative adverb", "change": "probably won't", "example": "He probably won't come"}
            ],
            "adverbGoldenFormula": "Subject + WILL + [Adverb] + Base Verb"
        },
        "exercises": {
            "quiz": [
                {"question": "Someone knocks on the door. What do you say?", "options": ["I am opening it.", "I'll open it!", "I open it.", "I will to open it."], "correct": 1, "explanation": "Spontaneous instant decision right now uses 'I'll' (Future Simple)."},
                {"question": "What is the correct negative contraction of 'will not'?", "options": ["willn't", "wont't", "won't", "woul'nt"], "correct": 2, "explanation": "'Will not' contracts to 'won't'."},
                {"question": "Complete the promise: 'Don't worry, I ________ tell anyone your secret.'", "options": ["won't", "not will", "don't will", "am not"], "correct": 0, "explanation": "Promises use 'won't' for negative: 'I won't tell anyone'."},
                {"question": "Which sentence has a grammar mistake?", "options": ["I think it will rain tomorrow.", "When I will arrive, I will call you.", "She will probably pass the exam.", "We will help you clean up."], "correct": 1, "explanation": "Never use 'will' after 'when' in a time clause. Say 'When I arrive, I will call you.'"},
                {"question": "What form of the verb follows 'will'?", "options": ["Verb with -ing", "Verb with -s", "Base infinitive without to", "Past participle V3"], "correct": 2, "explanation": "'Will' is a modal verb and is always followed by the bare base infinitive."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "The phone is ringing. I ________ (answer) it right now!", "correctAnswer": "will answer", "hint": "Instant decision uses will + base.", "explanation": "Spontaneous decision: 'I will answer' or 'I'll answer'."},
                {"id": 2, "sentence": "I promise I ________ (not forget) our anniversary.", "correctAnswer": "won't forget", "hint": "Negative promise.", "explanation": "Negative promise: 'won't forget'."},
                {"id": 3, "sentence": "I think scientists ________ (find) a cure for this disease soon.", "correctAnswer": "will find", "hint": "Prediction based on opinion.", "explanation": "Prediction with 'I think': 'will find'."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["I", "will", "always", "support", "you."], "correctOrder": ["I", "will", "always", "support", "you."], "targetSentence": "I will always support you.", "meaning": "A warm personal promise."},
                {"id": 2, "tokens": ["Will", "you", "help", "me", "please?"], "correctOrder": ["Will", "you", "help", "me", "please?"], "targetSentence": "Will you help me please?", "meaning": "Polite request."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "When you will come home, we will have dinner.", "options": ["When you will come home, we will have dinner.", "When you come home, we will have dinner.", "When you came home, we will have dinner."], "correctIndex": 1, "explanation": "Do not put 'will' after 'when'. Use Present Simple in the time clause: 'When you come home...'"},
                {"id": 2, "flawedSentence": "He will probably won't join us.", "options": ["He will probably won't join us.", "He probably won't join us.", "He won't probably join us."], "correctIndex": 1, "explanation": "Do not double 'will' and 'won't'. Say 'He probably won't join us'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "definitely", "targetSentence": "I will definitely help you tomorrow.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "I", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "will", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "help you tomorrow.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Put the adverb directly between 'will' and the main verb (help)."
                },
                {
                    "id": 2, "adverb": "probably", "targetSentence": "We probably won't go to the beach.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "We", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "won't go", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "to the beach.", "isSlot": False}],
                    "correctSlot": 1, "explanation": "'Probably' goes BEFORE 'won't' in negative sentences."
                }
            ],
            "masteryExam": [
                {"question": "What is the primary communicative purpose of 'will' when someone offers unexpected help?", "options": ["Pre-arranged schedule", "Spontaneous voluntary decision", "Past habit", "Scientific law"], "correct": 1, "level": "A2", "explanation": "Instant decisions and voluntary offers on the spot take 'will'."},
                {"question": "Choose the sentence that correctly uses a time clause with 'when':", "options": ["I will call you when I will land.", "I will call you when I land.", "I call you when I will land.", "I calling you when I land."], "correct": 1, "level": "B1", "explanation": "Time clauses introduced by 'when' take the Present Simple: 'when I land'."},
                {"question": "How do you express future ability with 'can'?", "options": ["I will can speak Spanish.", "I will be able to speak Spanish.", "I will could speak Spanish.", "I can will speak Spanish."], "correct": 1, "level": "B1", "explanation": "Use 'will be able to' for future capability."},
                {"question": "Which sentence expresses a promise?", "options": ["It will rain later.", "I'll never leave you.", "The train will leave at noon.", "Will you have tea?"], "correct": 1, "level": "A2", "explanation": "'I'll never leave you' is a direct personal commitment/promise."},
                {"question": "Where does the adverb 'probably' sit in a negative future sentence?", "options": ["After won't", "Before won't", "At the very end of the sentence", "Directly before the object"], "correct": 1, "level": "B1", "explanation": "In negative sentences with won't, 'probably' precedes 'won't' ('She probably won't come')."},
                {"question": "Select the correct question for asking someone to pass the butter:", "options": ["Are you passing the butter?", "Will you pass the butter, please?", "Did you pass the butter?", "Have you passed the butter?"], "correct": 1, "level": "A2", "explanation": "'Will you...?' is standard for polite requests."},
                {"question": "Why is 'Look at those dark clouds! It will rain' less natural than 'It is going to rain'?", "options": ["'Will' is grammatically forbidden in weather.", "'Going to' is preferred when there is immediate present visual evidence.", "'Will' cannot be used with rain.", "There is no difference."], "correct": 1, "level": "B1", "explanation": "Present sensory proof triggers 'be going to'."},
                {"question": "Identify the sentence without an error:", "options": ["She will studies harder next semester.", "She will study harder next semester.", "She will to study harder next semester.", "She will studying harder next semester."], "correct": 1, "level": "A2", "explanation": "'Will' is followed by the bare base infinitive 'study'."},
                {"question": "Complete: 'Don't play with matches or you ________ yourself.'", "options": ["burn", "will burn", "are burning", "burned"], "correct": 1, "level": "A2", "explanation": "Warnings of consequences use Future Simple 'will burn'."},
                {"question": "What is the contracted form of 'I will'?", "options": ["I'w", "I'll", "Ill", "I'wl"], "correct": 1, "level": "A2", "explanation": "'I will' contracts to 'I'll'."}
            ]
        }
    }

    # =========================================================================
    # 4. PAST CONTINUOUS (was/were + verb-ing)
    # =========================================================================
    tenses["pastContinuous"] = {
        "meta": {
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
            "summary": "Use this for actions that were in progress at a specific past moment or interrupted by another event."
        },
        "overview": {
            "definition": "The Past Continuous describes actions that were in the middle of happening at a specific moment in the past.",
            "coreConcept": "Imagine taking a photograph at 8:00 PM yesterday: what was the person actively doing inside that frame?",
            "timelineInsight": "A wavy, extended line in the past, showing an ongoing action that had already started and was still in progress.",
            "signalWords": [
                {"word": "While / As", "example": "While I was studying, my phone rang."},
                {"word": "When (interruption)", "example": "I was walking home when it started to rain."},
                {"word": "At 8:00 PM yesterday", "example": "At 8:00 PM, we were watching a movie."},
                {"word": "All day / All evening", "example": "She was working on her project all day."},
                {"word": "This time last week", "example": "This time last week, I was swimming in the sea."},
                {"word": "During that time", "example": "They were living in Chicago during that time."}
            ],
            "pillars": [
                {"icon": "Camera", "label": "Action in Progress", "desc": "Actively happening at an exact moment yesterday.", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"},
                {"icon": "Zap", "label": "Interrupted Action", "desc": "A long ongoing action cut short by a sudden past event.", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "Split", "label": "Parallel Actions", "desc": "Two people doing two things at the same time in the past.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "BookOpen", "label": "Setting the Scene", "desc": "Describing the background atmosphere in a story.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "action_in_progress", "1. In Progress at an Exact Past Time", "Exact Moment", "Clock",
                "Showing that an action had already started and was not finished at a specific time in the past.",
                "If someone asks 'What were you doing at 8:00 PM yesterday?', answer with Past Continuous because you were right in the middle of it.",
                ("At 8:00 PM yesterday, I was watching a documentary.", "Midst of watching at that specific hour.", "was watching"),
                ("What were you doing at midnight last night?", "Inquiring about activity at a past moment.", "were you doing"),
                ("This time last Sunday, we were driving to the beach.", "Ongoing travel at an exact past milestone.", "were driving"),
                "Think of it like hitting 'PAUSE' on a video of your life in the past."
            ),
            make_use_case(
                "interrupted_action", "2. Long Action Interrupted by a Short Event", "Interruption", "Zap",
                "A longer background action was happening when a quick, sudden event interrupted it.",
                "Use Past Continuous for the longer background action ('was cooking') and Past Simple for the sudden interruption ('rang').",
                ("I was cooking dinner when the smoke alarm suddenly rang.", "Ongoing cooking interrupted by alarm.", "was cooking ... rang"),
                ("He was crossing the street when he dropped his wallet.", "Crossing was interrupted by dropping.", "was crossing ... dropped"),
                ("They were sleeping peacefully when the thunderstorm began.", "Sleep interrupted by storm.", "were sleeping ... began"),
                "Golden rule: The long background action takes was/were + -ing; the quick interruption takes Past Simple!"
            ),
            make_use_case(
                "parallel_actions", "3. Two Actions Happening at the Same Time (Parallel)", "Parallel", "Split",
                "Two or more continuous actions happening simultaneously in the past.",
                "Use 'while' with two Past Continuous verbs to show that two people were doing their own activities at the exact same time.",
                ("While my mom was reading a book, my dad was baking bread.", "Two simultaneous peaceful activities.", "was reading ... was baking"),
                ("The kids were playing outside while it was snowing.", "Two ongoing activities together.", "were playing ... was snowing"),
                ("I was studying in my room while my brother was listening to music.", "Simultaneous parallel evening tasks.", "was studying ... was listening"),
                "Notice how 'while' smoothly connects two simultaneous continuous actions."
            ),
            make_use_case(
                "story_scene_setting", "4. Setting the Scene in a Story", "Story Atmosphere", "BookOpen",
                "Creating the mood and visual background at the beginning of a story.",
                "Writers use Past Continuous to paint the background picture before the main events happen in Past Simple.",
                ("The sun was shining and the birds were singing when I stepped outside.", "Vivid outdoor background scene.", "was shining ... were singing"),
                ("Music was playing and guests were chatting as we walked into the party.", "Party atmosphere on arrival.", "was playing ... were chatting"),
                ("Rain was pouring down and the wind was howling through the trees.", "Dramatic stormy book opening.", "was pouring ... was howling"),
                "The scene is in Past Continuous (-ing); the main action is in Past Simple ('I opened the door')."
            ),
            make_use_case(
                "annoying_habits", "5. Repeated Annoying Past Habits (with 'Always')", "Annoying Habits", "AlertCircle",
                "Expressing mild irritation or affection about something someone did repeatedly in the past.",
                "When you put 'always' or 'constantly' inside Past Continuous, it shows an annoying habit that happened over and over.",
                ("My roommate was always leaving dirty dishes in the sink!", "Expressing past frustration.", "was always leaving"),
                ("He was constantly forgetting his password when we worked together.", "Repeated past tech issue.", "was constantly forgetting"),
                ("They were always arguing about silly little things.", "Past interpersonal friction.", "were always arguing"),
                "This adds emotion! Compare: 'He left his keys' (neutral fact) vs 'He was always losing his keys!' (frustrated)."
            ),
            make_use_case(
                "polite_inquiries", "6. Polite or Tentative Requests", "Polite Tone", "HeartHandshake",
                "Asking a favor politely without sounding demanding or aggressive.",
                "English speakers use Past Continuous with 'wondering' or 'thinking' to sound very gentle and respectful.",
                ("I was wondering if you could lend me a hand for five minutes?", "Super polite request for help.", "was wondering"),
                ("We were hoping to speak with the doctor today.", "Gentle medical inquiry.", "were hoping"),
                ("I was thinking of inviting Sarah to dinner tonight.", "Tentative suggestion.", "was thinking"),
                "Even though the request is for right now, the past form makes it softer and more polite!"
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + WAS / WERE + Verb-ING",
                "explanation": "Use 'was' for singular (I, he, she, it) and 'were' for plural (you, we, they), then add -ing to the action verb.",
                "table": [
                    {"subject": "I / He / She / It", "auxiliary": "was", "verb": "working / reading", "complement": "at 8:00 PM"},
                    {"subject": "You / We / They", "auxiliary": "were", "verb": "working / reading", "complement": "at 8:00 PM"}
                ],
                "examples": [
                    {"en": "She was writing an email when the power went out.", "context": "Singular subject with was + verb-ing"},
                    {"en": "They were watching football all evening.", "context": "Plural subject with were + verb-ing"}
                ]
            },
            "negative": {
                "formula": "Subject + WASN'T / WEREN'T + Verb-ING",
                "explanation": "Add 'not' to was/were: 'wasn't' or 'weren't', followed by the verb with -ing.",
                "table": [
                    {"subject": "I / He / She / It", "auxiliary": "wasn't (was not)", "verb": "sleeping", "complement": "when you called"},
                    {"subject": "You / We / They", "auxiliary": "weren't (were not)", "verb": "sleeping", "complement": "when you called"}
                ],
                "examples": [
                    {"en": "I wasn't paying attention.", "context": "Negative singular statement"},
                    {"en": "We weren't making any noise.", "context": "Negative plural statement"}
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
                            {"q": "Were you sleeping when I called?", "a": "Yes, I was. / No, I wasn't."},
                            {"q": "Was it raining when you left home?", "a": "Yes, it was."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + was/were + Subject + Verb-ING...?",
                        "examples": [
                            {"q": "What were you doing at 10 PM?", "a": "I was reading in bed."},
                            {"q": "Where was she going in such a rush?", "a": "She was hurrying to the train."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Were you listening to me?", "context": "Yes/No inquiry"},
                    {"en": "Why were they laughing so loud?", "context": "Wh- question with why"}
                ]
            },
            "verbToBe": {
                "formula": "Subject + was / were (Simple Past only)",
                "explanation": "Note: The verb 'to be' is almost never used in Past Continuous (*was being*) unless describing temporary bizarre behavior ('He was being silly'). Normally, just say 'I was at home'.",
                "table": [
                    {"subject": "All Subjects", "form": "was / were", "negative": "wasn't / weren't", "example": "I was sick yesterday (NOT: was being sick)."}
                ],
                "examples": [
                    {"en": "Why was he being so rude? (acting rude right then)", "context": "Temporary behavior exception"},
                    {"en": "She was at the library yesterday.", "context": "Normal state uses simple was"}
                ]
            },
            "verbHave": {
                "formula": "was/were having (only for actions, not possession)",
                "explanation": "You can say 'was having dinner' (eating) or 'was having fun', but NEVER 'was having a car' (possession). For possession, use 'had'.",
                "table": [
                    {"subject": "Action have", "form": "was/were having", "example": "We were having breakfast when the phone rang."}
                ],
                "examples": [
                    {"en": "I was having a shower when you knocked.", "context": "Action meaning taking a shower"},
                    {"en": "I had a bicycle when I was young.", "context": "Possession must use had"}
                ]
            }
        },
        "spellingRules": {
            "title": "Adding -ing to Verbs",
            "subtitle": "Clear rules for creating the -ing form correctly.",
            "rules": [
                {"ruleNumber": 1, "title": "Normal Verbs", "condition": "Most verbs", "ruleText": "Just add -ing to the verb.", "examples": ["read → reading", "cook → cooking", "sleep → sleeping"]},
                {"ruleNumber": 2, "title": "Ends in Silent -e", "condition": "Verb ends in silent -e", "ruleText": "Drop the 'e' before adding -ing.", "examples": ["write → writing", "drive → driving", "make → making"]},
                {"ruleNumber": 3, "title": "Short Vowel + Single Consonant (CVC)", "condition": "1 vowel + 1 consonant at the end", "ruleText": "Double the consonant before adding -ing.", "examples": ["swim → swimming", "run → running", "sit → sitting"]},
                {"ruleNumber": 4, "title": "Ends in -ie", "condition": "Verb ends in -ie", "ruleText": "Change -ie to -y before adding -ing.", "examples": ["lie → lying", "die → dying", "tie → tying"]}
            ],
            "phoneticTips": [
                {"ending": "-ing sound", "sound": "/ɪŋ/", "tip": "The 'g' in -ing is soft in standard English, pronounced in the back of the throat."},
                {"ending": "was vs were", "sound": "/wəz/ vs /wɜːr/", "tip": "Notice that 'were' sounds like 'bird' or 'fur', not 'where'!"}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Constantly", "percentage": 100, "color": "#ef4444", "example": "He was constantly interrupting me."},
            {"adverb": "Always", "percentage": 95, "color": "#f59e0b", "example": "She was always complaining about the weather."},
            {"adverb": "Often", "percentage": 70, "color": "#3b82f6", "example": "They were often studying late at night."},
            {"adverb": "Sometimes", "percentage": 50, "color": "#8b5cf6", "example": "We were sometimes working on weekends during the project."},
            {"adverb": "Rarely", "percentage": 20, "color": "#06b6d4", "example": "I was rarely sleeping well back then."},
            {"adverb": "Never", "percentage": 0, "color": "#10b981", "example": "They were never paying attention."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN was/were and verb-ing",
                "formula": "Subject + WAS / WERE + [ADVERB] + Verb-ING",
                "explanation": "The frequency adverb sits right between the auxiliary (was/were) and the -ing verb.",
                "examples": [{"bad": "She always was complaining.", "good": "She was always complaining."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: 'Still' sits right after was/were",
                "formula": "Subject + WAS / WERE + STILL + Verb-ING",
                "explanation": "To show an action had not finished yet, place 'still' after was or were.",
                "examples": [{"bad": "I still was working at 10 PM.", "good": "I was still working at 10 PM."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: Time expressions usually go at the end",
                "formula": "Subject + was/were + verb-ing + [TIME EXPRESSION]",
                "explanation": "Exact times like 'at 8 PM' or 'all evening' usually sit at the end of the clause.",
                "examples": [{"bad": "I at 8 PM was cooking.", "good": "I was cooking at 8 PM."}]
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
                "explanation": "When a verb ends in silent -e, drop the -e before adding -ing: write → writing."
            }
        ],
        "resumeSummary": {
            "title": "Past Continuous Summary & Cheat-Sheet",
            "subtitle": "Everything you need to remember about Past Continuous on one simple card.",
            "formulaMatrix": [
                {"form": "+ Positive", "formula": "Subject + was / were + verb-ing", "exampleI": "I was sleeping.", "exampleHe": "They were cooking.", "memoryAnchor": "was/were + verb-ING!"},
                {"form": "– Negative", "formula": "Subject + wasn't / weren't + -ing", "exampleI": "I wasn't looking.", "exampleHe": "We weren't shouting.", "memoryAnchor": "wasn't / weren't + ING"},
                {"form": "? Yes/No Question", "formula": "Was / Were + Subject + verb-ing?", "exampleI": "Were you listening?", "exampleHe": "Was she working?", "memoryAnchor": "Was / Were at the start!"},
                {"form": "? Wh- Question", "formula": "Wh- Word + was/were + Subject + -ing?", "exampleI": "What were you doing?", "exampleHe": "Where was he going?", "memoryAnchor": "What / Where + was/were + ING."}
            ],
            "spellingPills": [
                {"ending": "Most verbs", "change": "+ing", "example": "read → reading"},
                {"ending": "Silent -e", "change": "Drop e + ing", "example": "write → writing"},
                {"ending": "Short CVC", "change": "Double letter", "example": "swim → swimming"},
                {"ending": "Ends in -ie", "change": "ie → y + ing", "example": "lie → lying"}
            ],
            "adverbGoldenFormula": "Subject + WAS / WERE + [Adverb] + Verb-ING"
        },
        "exercises": {
            "quiz": [
                {"question": "What were you doing at 9:00 PM yesterday?", "options": ["I watched TV.", "I was watching TV.", "I am watching TV.", "I have watched TV."], "correct": 1, "explanation": "Action in progress at a specific past moment uses Past Continuous: 'was watching'."},
                {"question": "Complete the sentence: 'She ________ a book when her phone ________.'", "options": ["was reading / rang", "read / was ringing", "was reading / was ringing", "read / rang"], "correct": 0, "explanation": "The long background action takes 'was reading'; the sudden interruption takes 'rang'."},
                {"question": "Choose the correct question:", "options": ["What you were doing yesterday?", "What were you doing yesterday?", "What did you doing yesterday?", "Were you do yesterday?"], "correct": 1, "explanation": "Wh- question uses: Wh- + were + you + verb-ing: 'What were you doing?'"},
                {"question": "Which verb CANNOT normally be used in the continuous form?", "options": ["eat", "listen", "know", "drive"], "correct": 2, "explanation": "'Know' is a state verb and is not used in continuous aspect. Say 'I knew', not 'I was knowing'."},
                {"question": "What is the past continuous of 'they / not / sleep'?", "options": ["they weren't sleeping", "they didn't sleeping", "they wasn't sleeping", "they not were sleeping"], "correct": 0, "explanation": "Plural subject 'they' takes 'weren't sleeping'."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "While my sister was doing homework, I ________ (cook) dinner.", "correctAnswer": "was cooking", "hint": "Parallel continuous action with I.", "explanation": "Parallel action takes Past Continuous: 'was cooking'."},
                {"id": 2, "sentence": "He was walking to the station when he ________ (drop) his wallet.", "correctAnswer": "dropped", "hint": "Sudden past interruption.", "explanation": "The sudden interruption takes Past Simple: 'dropped'."},
                {"id": 3, "sentence": "At midnight, the students ________ (still / study) for their exam.", "correctAnswer": "were still studying", "hint": "Plural were + still + study-ing.", "explanation": "Plural students takes 'were still studying'."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["What", "were", "you", "doing", "at", "eight?"], "correctOrder": ["What", "were", "you", "doing", "at", "eight?"], "targetSentence": "What were you doing at eight?", "meaning": "Inquiring about past progress."},
                {"id": 2, "tokens": ["It", "was", "raining", "all", "afternoon."], "correctOrder": ["It", "was", "raining", "all", "afternoon."], "targetSentence": "It was raining all afternoon.", "meaning": "Extended past duration."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "I was knowing him very well back then.", "options": ["I was knowing him very well back then.", "I knew him very well back then.", "I had known him very well back then."], "correctIndex": 1, "explanation": "'Know' is a state verb and cannot take -ing. Use Past Simple 'I knew him'."},
                {"id": 2, "flawedSentence": "They was waiting outside in the cold.", "options": ["They was waiting outside in the cold.", "They were waiting outside in the cold.", "They waited outside in the cold."], "correctIndex": 1, "explanation": "Plural subject 'They' takes 'were', not 'was'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "always", "targetSentence": "He was always losing his keys.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "He", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "was", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "losing his keys.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'always' right between 'was' and the -ing verb (losing)."
                },
                {
                    "id": 2, "adverb": "still", "targetSentence": "We were still sleeping at nine.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "We", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "were", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "sleeping at nine.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'still' immediately following the auxiliary 'were'."
                }
            ],
            "masteryExam": [
                {"question": "Which sentence describes an action in progress interrupted by a short event?", "options": ["I cooked dinner and ate it.", "I was cooking dinner when the doorbell rang.", "I have cooked dinner already.", "I will cook dinner when you arrive."], "correct": 1, "level": "B1", "explanation": "Past Continuous ('was cooking') interrupted by Past Simple ('rang')."},
                {"question": "Why is 'I was understanding the lecture' incorrect?", "options": ["'Understand' is a stative verb that resists continuous aspect.", "It lacks a time expression.", "'Lecture' is uncountable.", "The subject must be plural."], "correct": 0, "level": "B1", "explanation": "Cognitive verbs like understand do not take continuous forms."},
                {"question": "Choose the correct sentence with parallel actions in the past:", "options": ["While he read, she was cooking.", "While he was reading, she was cooking.", "He was reading while she cooked.", "While he reading, she cooking."], "correct": 1, "level": "B1", "explanation": "Two simultaneous continuous actions both use Past Continuous."},
                {"question": "Complete: 'What ________ at 7:00 AM yesterday when the earthquake struck?'", "options": ["did you do", "were you doing", "have you done", "are you doing"], "correct": 1, "level": "B1", "explanation": "Asks about activity in progress at a specific past time."},
                {"question": "How is Past Continuous used in narrative storytelling?", "options": ["To list completed chronological steps", "To describe background scene atmosphere", "To express future predictions", "To state timeless universal laws"], "correct": 1, "level": "B1", "explanation": "It paints the background setting (sun was shining, music was playing)."},
                {"question": "What emotion does 'She was always borrowing my clothes!' typically convey?", "options": ["Neutral observation", "Irritation or annoyance at a repeated habit", "Scientific detachment", "Solemn promise"], "correct": 1, "level": "B1", "explanation": "Past Continuous with 'always' emphasizes emotional annoyance."},
                {"question": "Which is the correct negative sentence?", "options": ["They weren't paying attention.", "They wasn't paying attention.", "They didn't paying attention.", "They not were paying attention."], "correct": 0, "level": "A2", "explanation": "Plural subject takes 'weren't paying'."},
                {"question": "What is the spelling of 'lie' in the -ing form?", "options": ["lieing", "lying", "lyeing", "liing"], "correct": 1, "level": "A2", "explanation": "Verbs ending in -ie change to -y + ing: lie → lying."},
                {"question": "Which of these expresses a tentative polite request?", "options": ["I wondered if you can help.", "I was wondering if you could help me.", "I am wondering if you will help.", "I wonder did you help."], "correct": 1, "level": "B2", "explanation": "'I was wondering if you could...' is standard polite English."},
                {"question": "When can 'have' be used in the Past Continuous?", "options": ["Never", "Only for possession", "Only for dynamic actions (e.g. having dinner, having a shower)", "Only with plural subjects"], "correct": 2, "level": "B1", "explanation": "'Have' can only take continuous aspect when it denotes an action, not ownership."}
            ]
        }
    }

    # =========================================================================
    # 5. PRESENT CONTINUOUS (am/is/are + verb-ing)
    # =========================================================================
    tenses["presentContinuous"] = {
        "meta": {
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
            "summary": "Use this for actions happening right now, temporary situations, changing trends, and fixed plans."
        },
        "overview": {
            "definition": "The Present Continuous is used for actions happening right now at this exact moment, or temporary things happening around this period of time.",
            "coreConcept": "Unlike the Present Simple (which is permanent routine), Present Continuous is temporary, active, and unfolding right NOW.",
            "timelineInsight": "A blinking active circle or wavy line centered directly on the NOW moment.",
            "signalWords": [
                {"word": "Right now / At the moment", "example": "I am typing an email right now."},
                {"word": "Currently / At present", "example": "She is currently looking for a job."},
                {"word": "These days / Nowadays", "example": "People are buying more electric cars these days."},
                {"word": "This week / month", "example": "I am staying with my brother this week."},
                {"word": "Look! / Listen!", "example": "Look! The baby is walking!"},
                {"word": "Tomorrow (with fixed plan)", "example": "We are flying to Rome tomorrow."}
            ],
            "pillars": [
                {"icon": "Play", "label": "Happening Right Now", "desc": "An action taking place at the exact moment of speaking.", "color": "#6366f1", "bg": "rgba(99, 102, 241, 0.08)", "border": "rgba(99, 102, 241, 0.25)"},
                {"icon": "Clock", "label": "Temporary Situations", "desc": "Things happening around now that won't last forever.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
                {"icon": "TrendingUp", "label": "Changing Trends", "desc": "Slow changes and evolving situations ('Prices are rising').", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "CalendarCheck", "label": "Fixed Future Plans", "desc": "Definite appointments already booked in your calendar.", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "action_right_now", "1. Actions Happening Right Now", "Right Now", "Play",
                "Actions in progress at the exact second you are speaking.",
                "Look around you: whatever is happening at this very moment takes Present Continuous with am/is/are + -ing.",
                ("I am studying English on my laptop right now.", "Active learning taking place this second.", "am studying"),
                ("Listen! The birds are singing outside.", "Auditory evidence happening now.", "are singing"),
                ("Why are you wearing a winter coat indoors?", "Immediate observation of someone's clothes.", "are you wearing"),
                "If you can see or hear it happening right now, use Present Continuous!"
            ),
            make_use_case(
                "temporary_situations", "2. Temporary Situations (These Days)", "Temporary", "Clock",
                "Actions happening around now that are temporary and not your permanent lifestyle.",
                "Compare: 'I live in London' (my permanent home) vs 'I am staying at a hotel this week' (temporary situation).",
                ("I am living with my cousin until I find my own apartment.", "Temporary housing situation.", "am living"),
                ("She is working on an urgent project this month.", "Temporary work assignment.", "is working"),
                ("Are you reading any interesting books these days?", "Inquiring about current leisure reading.", "Are you reading"),
                "Notice the time clues: 'this week', 'these days', 'until'."
            ),
            make_use_case(
                "changing_trends", "3. Changing Situations & Evolving Trends", "Changing World", "TrendingUp",
                "Describing things that are gradually growing, developing, or changing over time.",
                "Use Present Continuous with verbs like get, become, increase, and rise to show growth and trends.",
                ("The climate is getting warmer every decade.", "Gradual worldwide environmental change.", "is getting"),
                ("Technology is developing at an astonishing speed.", "Continuous evolution of technology.", "is developing"),
                ("Prices of groceries are rising rapidly this year.", "Economic trend in progress.", "are rising"),
                "Verbs like 'getting', 'becoming', and 'growing' love this tense."
            ),
            make_use_case(
                "fixed_future_plans", "4. Definite Fixed Future Plans", "Booked Plans", "CalendarCheck",
                "Future arrangements that are already agreed upon, booked, and written in your diary.",
                "Native speakers almost always use Present Continuous for personal plans when the time and place are already fixed.",
                ("I am meeting the doctor tomorrow at 10:30 AM.", "Fixed booked medical appointment.", "am meeting"),
                ("We are flying to Rome this Friday evening.", "Airline tickets are bought and confirmed.", "are flying"),
                ("What are you doing tonight? Do you want to grab dinner?", "Asking about someone's evening schedule.", "are you doing"),
                "This is much more common than 'will' for personal plans: 'I am seeing John tomorrow' means it's already arranged!"
            ),
            make_use_case(
                "annoying_habits", "5. Annoying Habits with 'Always'", "Annoyance", "AlertCircle",
                "Expressing frustration about something someone does too often.",
                "When you say 'He is always doing that!', you are showing that it annoys you and happens more often than normal.",
                ("You are always interrupting me when I'm speaking!", "Direct expression of irritation.", "are always interrupting"),
                ("He is constantly forgetting his house keys.", "Frustrating repetitive forgetfulness.", "is constantly forgetting"),
                ("Why are you always complaining about your food?", "Questioning habitual dissatisfaction.", "are you always complaining"),
                "Notice the emotion: 'He always complains' is a cold fact. 'He is always complaining!' shows you are fed up!"
            ),
            make_use_case(
                "picture_descriptions", "6. Describing Photos, Videos & Plays", "Visual Scene", "Image",
                "Describing what is happening inside a photograph, painting, or video clip.",
                "When you look at a photo, imagine the scene is alive right now in front of you.",
                ("In this picture, my sister is smiling and holding a puppy.", "Describing people in a family photo.", "is smiling ... holding"),
                ("The man in the red shirt is running across the finish line.", "Sports snapshot description.", "is running"),
                ("At the start of the play, Hamlet is standing alone on stage.", "Describing a theatrical scene.", "is standing"),
                "Always use Present Continuous when presenting slides or explaining photos to others."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + AM / IS / ARE + Verb-ING",
                "explanation": "Choose the right form of 'to be' (I am, he/she/it is, we/you/they are) and add -ing to the action verb.",
                "table": [
                    {"subject": "I", "auxiliary": "am ('m)", "verb": "working", "complement": "right now"},
                    {"subject": "He / She / It", "auxiliary": "is ('s)", "verb": "working", "complement": "right now"},
                    {"subject": "You / We / They", "auxiliary": "are ('re)", "verb": "working", "complement": "right now"}
                ],
                "examples": [
                    {"en": "I am preparing a presentation.", "context": "Action taking place right now"},
                    {"en": "She's learning Spanish this semester.", "context": "Temporary study project"}
                ]
            },
            "negative": {
                "formula": "Subject + AM NOT / ISN'T / AREN'T + Verb-ING",
                "explanation": "Add 'not' after the be verb: 'am not', 'isn't', or 'aren't', followed by verb-ing.",
                "table": [
                    {"subject": "I", "auxiliary": "am not ('m not)", "verb": "listening", "complement": "to the radio"},
                    {"subject": "He / She / It", "auxiliary": "isn't (is not)", "verb": "working", "complement": "today"},
                    {"subject": "You / We / They", "auxiliary": "aren't (are not)", "verb": "paying", "complement": "attention"}
                ],
                "examples": [
                    {"en": "I'm not doing anything important right now.", "context": "Negative current state"},
                    {"en": "They aren't coming to the party tonight.", "context": "Negative future plan"}
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
                            {"q": "Are you enjoying the movie?", "a": "Yes, I am! / It's great."},
                            {"q": "Is it raining outside?", "a": "No, it isn't."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + am/is/are + Subject + Verb-ING...?",
                        "examples": [
                            {"q": "What are you cooking?", "a": "I'm making pasta."},
                            {"q": "Where are they going?", "a": "They are going to the library."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Are you waiting for someone?", "context": "Current moment inquiry"},
                    {"en": "Why is she crying?", "context": "Wh- question about present observation"}
                ]
            },
            "verbToBe": {
                "formula": "Subject + am/is/are being + adjective (Behavior only)",
                "explanation": "Only use 'being' when someone is acting in a temporary, unusual way: 'Why are you being so silly?' Normally, just say 'He is sick' (NOT 'is being sick').",
                "table": [
                    {"subject": "Temporary Behavior", "form": "is / are being", "example": "Don't be mad, he is just being silly."}
                ],
                "examples": [
                    {"en": "You are being very helpful today, thank you!", "context": "Temporary active behavior"},
                    {"en": "She is a wonderful doctor.", "context": "Permanent fact uses simple is"}
                ]
            },
            "verbHave": {
                "formula": "am/is/are having (dynamic activities only)",
                "explanation": "You can say 'I am having lunch' (eating) or 'having fun', but NEVER 'I am having a car' (possession). For possession, use 'I have a car'.",
                "table": [
                    {"subject": "Dynamic have", "form": "am/is/are having", "example": "We are having breakfast right now."}
                ],
                "examples": [
                    {"en": "They are having a great conversation.", "context": "Active communication"},
                    {"en": "I have two sisters.", "context": "Family relationship uses simple have"}
                ]
            }
        },
        "spellingRules": {
            "title": "Rules for -ing Verbs",
            "subtitle": "How to spell the -ing form without mistakes.",
            "rules": [
                {"ruleNumber": 1, "title": "Normal Verbs", "condition": "Most verbs", "ruleText": "Add -ing directly to the verb.", "examples": ["eat → eating", "speak → speaking", "watch → watching"]},
                {"ruleNumber": 2, "title": "Ends in Silent -e", "condition": "Ends in -e", "ruleText": "Drop the -e before adding -ing.", "examples": ["make → making", "take → taking", "come → coming"]},
                {"ruleNumber": 3, "title": "Short Vowel + Consonant", "condition": "1 short vowel + 1 final consonant", "ruleText": "Double the consonant before adding -ing.", "examples": ["run → running", "sit → sitting", "get → getting"]},
                {"ruleNumber": 4, "title": "Ends in -ie", "condition": "Ends in -ie", "ruleText": "Change -ie to -y before adding -ing.", "examples": ["die → dying", "lie → lying", "tie → tying"]}
            ],
            "phoneticTips": [
                {"ending": "Contractions", "sound": "I'm / He's / They're", "tip": "Always practice smooth contractions: 'They're' sounds like 'there' and 'their'."},
                {"ending": "-ing ending", "sound": "/ɪŋ/", "tip": "Keep the 'i' short and soft in your mouth."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Constantly", "percentage": 100, "color": "#ef4444", "example": "He is constantly checking his phone."},
            {"adverb": "Always", "percentage": 90, "color": "#f59e0b", "example": "You are always helping everyone around you."},
            {"adverb": "Currently", "percentage": 75, "color": "#3b82f6", "example": "She is currently developing a new mobile app."},
            {"adverb": "Right now", "percentage": 50, "color": "#8b5cf6", "example": "We are studying English right now."},
            {"adverb": "Rarely", "percentage": 20, "color": "#06b6d4", "example": "They are rarely taking vacations these days."},
            {"adverb": "Never", "percentage": 0, "color": "#10b981", "example": "I am never using that broken computer again."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN am/is/are and verb-ing",
                "formula": "Subject + AM / IS / ARE + [ADVERB] + Verb-ING",
                "explanation": "Adverbs like always, currently, and still sit between the 'be' verb and the -ing verb.",
                "examples": [{"bad": "She currently is working in Berlin.", "good": "She is currently working in Berlin."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: 'Right now' and 'At the moment' go at the end",
                "formula": "Subject + be + verb-ing + [RIGHT NOW]",
                "explanation": "Time expressions like 'right now' sit naturally at the end of the sentence.",
                "examples": [{"bad": "I right now am studying.", "good": "I am studying right now."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: In questions, put the adverb after the subject",
                "formula": "Am / Is / Are + Subject + [ADVERB] + Verb-ING...?",
                "explanation": "In questions, the subject comes first, then the adverb, then verb-ing.",
                "examples": [{"bad": "Are still you working?", "good": "Are you still working?"}]
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
                "explanation": "Short words with 1 vowel + 1 consonant double the final letter: run → running, swim → swimming."
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
                {"form": "+ Positive", "formula": "Subject + am / is / are + verb-ing", "exampleI": "I am writing.", "exampleHe": "She is singing.", "memoryAnchor": "am/is/are + verb-ING!"},
                {"form": "– Negative", "formula": "Subject + am not / isn't / aren't + -ing", "exampleI": "I'm not shouting.", "exampleHe": "He isn't sleeping.", "memoryAnchor": "be + not + ING"},
                {"form": "? Yes/No Question", "formula": "Am / Is / Are + Subject + verb-ing?", "exampleI": "Are you coming?", "exampleHe": "Is it working?", "memoryAnchor": "Am/Is/Are at the front!"},
                {"form": "? Wh- Question", "formula": "Wh- Word + am/is/are + Subject + -ing?", "exampleI": "What are you doing?", "exampleHe": "Where is she going?", "memoryAnchor": "Wh- + be + Subject + ING."}
            ],
            "spellingPills": [
                {"ending": "Most verbs", "change": "+ing", "example": "cook → cooking"},
                {"ending": "Silent -e", "change": "Drop e + ing", "example": "come → coming"},
                {"ending": "Short CVC", "change": "Double letter", "example": "sit → sitting"},
                {"ending": "Ends in -ie", "change": "ie → y + ing", "example": "die → dying"}
            ],
            "adverbGoldenFormula": "Subject + AM / IS / ARE + [Adverb] + Verb-ING"
        },
        "exercises": {
            "quiz": [
                {"question": "Look! The baby ________ her first steps!", "options": ["takes", "is taking", "take", "has taken"], "correct": 1, "explanation": "'Look!' signals an action happening right at this moment: 'is taking'."},
                {"question": "Why is 'I am needing a new phone' incorrect?", "options": ["'Need' is a stative verb that doesn't take continuous form.", "It needs 'do not'.", "'Phone' is plural.", "The tense is past."], "correct": 0, "explanation": "'Need' describes a state of necessity, so say 'I need a new phone'."},
                {"question": "Which sentence talks about a fixed future arrangement?", "options": ["I will perhaps go to Paris.", "I am flying to Paris tomorrow at 8:00 AM.", "I fly to Paris every year.", "I was flying to Paris."], "correct": 1, "explanation": "Present Continuous with a future time ('tomorrow at 8:00 AM') expresses a fixed booked plan."},
                {"question": "What is the correct negative form for 'She / work / today'?", "options": ["She not working today.", "She isn't working today.", "She doesn't working today.", "She hasn't working today."], "correct": 1, "explanation": "Negative Present Continuous uses isn't + verb-ing: 'She isn't working today'."},
                {"question": "How do you spell the -ing form of 'run'?", "options": ["runing", "running", "runeing", "runnying"], "correct": 1, "explanation": "Short vowel + consonant doubles the final consonant: run → running."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "Listen! The singer ________ (perform) our favorite song on stage.", "correctAnswer": "is performing", "hint": "Singer is singular: is + verb-ing.", "explanation": "Happening right now: 'is performing'."},
                {"id": 2, "sentence": "I ________ (stay) with my aunt this week while my flat is painted.", "correctAnswer": "am staying", "hint": "Temporary situation with I.", "explanation": "Temporary situation takes 'am staying'."},
                {"id": 3, "sentence": "Why ________ (you / wear) sunglasses inside the dark room?", "correctAnswer": "are you wearing", "hint": "Question form: are + you + wear-ing.", "explanation": "Question about present observation: 'are you wearing'."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["She", "is", "currently", "learning", "French."], "correctOrder": ["She", "is", "currently", "learning", "French."], "targetSentence": "She is currently learning French.", "meaning": "Ongoing current pursuit."},
                {"id": 2, "tokens": ["Are", "you", "meeting", "him", "tonight?"], "correctOrder": ["Are", "you", "meeting", "him", "tonight?"], "targetSentence": "Are you meeting him tonight?", "meaning": "Fixed future inquiry."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "I am understanding the concept very well now.", "options": ["I am understanding the concept very well now.", "I understand the concept very well now.", "I understands the concept very well now."], "correctIndex": 1, "explanation": "'Understand' is a mental state verb and cannot take -ing. Use 'I understand'."},
                {"id": 2, "flawedSentence": "They having lunch in the garden right now.", "options": ["They having lunch in the garden right now.", "They are having lunch in the garden right now.", "They have lunch in the garden right now."], "correctIndex": 1, "explanation": "The auxiliary verb 'are' is missing: 'They are having lunch'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "currently", "targetSentence": "We are currently testing the new software.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "We", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "are", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "testing the new software.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'currently' directly between the auxiliary 'are' and the main verb 'testing'."
                },
                {
                    "id": 2, "adverb": "always", "targetSentence": "You are always leaving your dirty shoes here.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "You", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "are", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "leaving your dirty shoes here.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'always' right between 'are' and 'leaving'."
                }
            ],
            "masteryExam": [
                {"question": "Which of the following describes an action happening at the exact moment of utterance?", "options": ["I drink tea every morning.", "I am drinking tea right now.", "I will drink tea later.", "I drank tea yesterday."], "correct": 1, "level": "A2", "explanation": "'I am drinking tea right now' describes current active motion."},
                {"question": "Identify the stative verb that CANNOT be used in the continuous aspect:", "options": ["swim", "belong", "paint", "drive"], "correct": 1, "level": "B1", "explanation": "'Belong' expresses possession/state and cannot take -ing (*is belonging)."},
                {"question": "Why is 'We are meeting the CEO at 3:00 PM tomorrow' correct in English?", "options": ["It is a hypothetical condition.", "Present Continuous expresses pre-arranged, fixed future appointments.", "Present Continuous can only talk about the past.", "The verb meet cannot take will."], "correct": 1, "level": "B1", "explanation": "Pre-booked appointments with definite time/place use Present Continuous."},
                {"question": "What is the nuance of 'He is always biting his fingernails!'?", "options": ["A pleasant hobby", "Mild irritation or complaint at an annoying habit", "A scientific law of biology", "A future goal"], "correct": 1, "level": "B1", "explanation": "Present Continuous with 'always' conveys exasperation at a repetitive habit."},
                {"question": "Complete: 'Prices of electronics ________ down slowly this year.'", "options": ["come", "are coming", "are came", "comes"], "correct": 1, "level": "B1", "explanation": "Gradual trends and changing situations take Present Continuous: 'are coming'."},
                {"question": "Choose the correctly spelled -ing form of 'compete':", "options": ["competeing", "competing", "competting", "competinng"], "correct": 1, "level": "A2", "explanation": "Drop the silent -e: compete → competing."},
                {"question": "Which sentence has a grammatical error?", "options": ["Look! It's snowing outside.", "I am knowing your phone number.", "She is currently living with her parents.", "We are having dinner together tonight."], "correct": 1, "level": "A2", "explanation": "'Know' cannot take -ing. Say 'I know your phone number'."},
                {"question": "What is the proper question form?", "options": ["Why she is running so fast?", "Why is she running so fast?", "Why does she running so fast?", "Why she running so fast?"], "correct": 1, "level": "A2", "explanation": "Subject-auxiliary inversion: Wh- + is + she + running?"},
                {"question": "In photo descriptions, which tense is conventionally used?", "options": ["Past Simple", "Present Continuous", "Future Perfect", "Past Perfect Continuous"], "correct": 1, "level": "A2", "explanation": "Photos are described as active scenes happening now using Present Continuous."},
                {"question": "Complete: 'I can't talk right now because I ________ dinner.'", "options": ["prepare", "am preparing", "was prepared", "will prepared"], "correct": 1, "level": "A2", "explanation": "Action currently underway: 'am preparing'."}
            ]
        }
    }

    # =========================================================================
    # 6. FUTURE CONTINUOUS (will be + verb-ing)
    # =========================================================================
    tenses["futureContinuous"] = {
        "meta": {
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
            "summary": "Use this for actions that will be right in the middle of happening at a specific time in the future."
        },
        "overview": {
            "definition": "The Future Continuous describes an action that will be actively in progress at a specific moment in the future.",
            "coreConcept": "If you look through a telescope or crystal ball at 3:00 PM tomorrow, what will you see the person doing? They will be in the middle of it!",
            "timelineInsight": "A wavy ongoing line placed forward in the future, spanning across a specific future time target.",
            "signalWords": [
                {"word": "This time tomorrow", "example": "This time tomorrow, I will be flying to Rome."},
                {"word": "At 8:00 PM tonight", "example": "Don't call at 8:00; I will be having dinner."},
                {"word": "In the middle of", "example": "I will be in the middle of studying when you arrive."},
                {"word": "Next week at this hour", "example": "Next week at this hour, we will be relaxing on the beach."},
                {"word": "All day tomorrow", "example": "She will be working on her thesis all day tomorrow."},
                {"word": "When you arrive", "example": "I will be waiting for you when your train arrives."}
            ],
            "pillars": [
                {"icon": "Hourglass", "label": "In Progress in Future", "desc": "Actively happening at an exact point in future time.", "color": "#a855f7", "bg": "rgba(168, 85, 247, 0.08)", "border": "rgba(168, 85, 247, 0.25)"},
                {"icon": "HeartHandshake", "label": "Polite Inquiries", "desc": "Asking about plans gently without sounding nosy.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "Calendar", "label": "Routine Course of Events", "desc": "Things happening naturally as part of regular life.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
                {"icon": "Split", "label": "Parallel Future Actions", "desc": "Two actions happening simultaneously in the future.", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "action_in_progress_future", "1. In the Middle of Doing Something in the Future", "Future Progress", "Hourglass",
                "Showing that an action will already have started and will be unfinished at a specific future moment.",
                "Compare: 'At 8:00 PM I will eat dinner' (I will start at 8) vs 'At 8:00 PM I will be eating dinner' (I will already be at the table mid-meal).",
                ("This time tomorrow, I will be flying over the Atlantic Ocean.", "In the middle of the flight tomorrow.", "will be flying"),
                ("Don't call me at 9:00 PM tonight; I will be putting the kids to bed.", "Active evening routine in progress.", "will be putting"),
                ("At noon, the team will be discussing the new project proposal.", "Midst of a business meeting.", "will be discussing"),
                "Think of it as setting an alarm: when the alarm rings, what will you be doing?"
            ),
            make_use_case(
                "polite_questions_plans", "2. Asking Gently About Someone's Plans", "Polite Questions", "HeartHandshake",
                "Inquiring politely about someone's future schedule without pressuring them.",
                "Using Future Continuous sounds very soft, polite, and respectful. It asks what will naturally happen anyway.",
                ("Will you be using the printer this afternoon, or may I use it?", "Gentle office inquiry.", "Will you be using"),
                ("Will you be driving past the supermarket on your way home?", "Polite way before asking for a favor.", "Will you be driving"),
                ("Will you be staying for dinner tonight?", "Gracious host inquiry.", "Will you be staying"),
                "Compare: 'Are you going to use the printer?' (sounds direct/impatient) vs 'Will you be using the printer?' (very polite)."
            ),
            make_use_case(
                "routine_events", "3. Events Happening as a Matter of Routine", "Normal Routine", "Calendar",
                "Things that will happen automatically because they are part of normal everyday routine.",
                "Use Future Continuous when you don't need to make special plans — it will happen naturally anyway.",
                ("I will be seeing John at the office tomorrow anyway, so I can give him your notes.", "Natural encounter at work.", "will be seeing"),
                ("We will be passing through Chicago on our trip, so we can stop by.", "Part of regular travel route.", "will be passing"),
                ("She will be working the morning shift next week as usual.", "Regular work schedule.", "will be working"),
                "It feels completely effortless because it's just regular routine."
            ),
            make_use_case(
                "interrupted_future", "4. Future Action Interrupted by Another Event", "Future Interruption", "Zap",
                "An ongoing future action that gets crossed by a sudden moment when someone arrives.",
                "Use Future Continuous for the long ongoing action, and Present Simple after 'when' for the arriving moment.",
                ("I will be waiting for you right outside when your train pulls into the station.", "Waiting is ongoing when train arrives.", "will be waiting ... pulls in"),
                ("She will be sleeping when you get home, so please be quiet.", "Ongoing sleep interrupted by arrival.", "will be sleeping ... get home"),
                ("We will be watching the game when you come over.", "Match in progress on arrival.", "will be watching ... come over"),
                "Remember: never put 'will' after 'when'! Say: 'when you arrive', NOT 'when you will arrive'."
            ),
            make_use_case(
                "parallel_future_actions", "5. Parallel Actions in the Future", "Parallel Future", "Split",
                "Two actions happening simultaneously at the same time in the future.",
                "Use Future Continuous with 'while' to describe two people working side by side in the future.",
                ("While you are preparing dinner, I will be cleaning the living room.", "Two helpful chores happening together.", "will be cleaning"),
                ("They will be presenting their research while the judges are reviewing the scores.", "Simultaneous academic conference tasks.", "will be presenting"),
                ("Tomorrow morning, millions of commuters will be traveling to work across the city.", "Wide urban scene in motion.", "will be traveling"),
                "It paints a lively picture of future teamwork and activity."
            ),
            make_use_case(
                "guessing_current_activity", "6. Guessing What Someone Is Doing Right Now", "Deductions", "HelpCircle",
                "Making a confident guess about what someone is probably doing right this second.",
                "English speakers sometimes use 'will be + -ing' to predict what someone is doing right now based on their routine.",
                ("Don't phone him now; he will be sleeping (it's 3:00 AM there).", "Confident deduction about someone far away.", "will be sleeping"),
                ("She will be taking her exam right about now.", "Guessing based on the exam schedule.", "will be taking"),
                ("They will be having lunch now, so they won't answer their emails.", "Predicting routine activity.", "will be having"),
                "Here, 'will' doesn't mean the future; it means 'I am 95% sure that is what they are doing right now'."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + WILL BE + Verb-ING",
                "explanation": "Put 'will be' (or 'll be) before the verb with -ing. 'Will be' is identical for all subjects (I, you, he, she, we, they)!",
                "table": [
                    {"subject": "All Subjects (I / You / He / She / We / They)", "auxiliary": "will be ('ll be)", "verb": "working / flying", "complement": "this time tomorrow"}
                ],
                "examples": [
                    {"en": "I will be flying to Tokyo this time tomorrow.", "context": "Action in progress at a future moment"},
                    {"en": "She'll be waiting at the entrance.", "context": "Contraction with she'll be"}
                ]
            },
            "negative": {
                "formula": "Subject + WON'T BE + Verb-ING",
                "explanation": "Add 'not' between will and be: 'won't be' (will not be), followed by verb-ing.",
                "table": [
                    {"subject": "All Subjects", "auxiliary": "won't be", "verb": "working", "complement": "next weekend"}
                ],
                "examples": [
                    {"en": "I won't be using the car tonight, you can take it.", "context": "Negative statement about future plans"},
                    {"en": "They won't be attending the conference this year.", "context": "Notice of non-attendance"}
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
                            {"q": "Will you be joining us for lunch?", "a": "Yes, I will be! / I'd love to."},
                            {"q": "Will she be staying here tonight?", "a": "No, she won't be."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + will + Subject + be + Verb-ING...?",
                        "examples": [
                            {"q": "What will you be doing this time next year?", "a": "I will be studying at university."},
                            {"q": "Where will they be staying in Paris?", "a": "They will be staying at a boutique hotel."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Will you be using your laptop later?", "context": "Polite inquiry before asking a favor"},
                    {"en": "What will he be working on tomorrow?", "context": "Wh- question about project schedule"}
                ]
            },
            "verbToBe": {
                "formula": "Subject + will be + adjective (Simple Future)",
                "explanation": "Note: You almost never say *will be being*. Just say 'I will be happy' or 'She will be at home'.",
                "table": [
                    {"subject": "All Subjects", "form": "will be", "negative": "won't be", "example": "I will be ready at six."}
                ],
                "examples": [
                    {"en": "He will be in London tomorrow.", "context": "Location in the future"},
                    {"en": "We won't be late.", "context": "Reassurance"}
                ]
            },
            "verbHave": {
                "formula": "will be having (dynamic activities)",
                "explanation": "You can say 'will be having dinner' or 'will be having a meeting', but NOT 'will be having a car' (possession).",
                "table": [
                    {"subject": "Dynamic have", "form": "will be having", "example": "We will be having lunch between 12:00 and 1:00."}
                ],
                "examples": [
                    {"en": "They will be having a discussion tomorrow morning.", "context": "Scheduled meeting"},
                    {"en": "She will have plenty of time.", "context": "Possession uses simple will have"}
                ]
            }
        },
        "spellingRules": {
            "title": "Forming the -ing Participle",
            "subtitle": "Quick reminder of -ing spelling rules.",
            "rules": [
                {"ruleNumber": 1, "title": "Add -ing", "condition": "Standard verbs", "ruleText": "Add -ing directly to the base.", "examples": ["fly → flying", "wait → waiting", "sleep → sleeping"]},
                {"ruleNumber": 2, "title": "Drop Silent -e", "condition": "Ends in -e", "ruleText": "Drop the -e before adding -ing.", "examples": ["drive → driving", "use → using", "arrive → arriving"]},
                {"ruleNumber": 3, "title": "Double Consonant", "condition": "Short CVC vowel + consonant", "ruleText": "Double the consonant before -ing.", "examples": ["sit → sitting", "swim → swimming", "run → running"]}
            ],
            "phoneticTips": [
                {"ending": "'ll be", "sound": "/əl biː/", "tip": "Pronounce 'I'll be' smoothly as a single fluid unit: 'aisle-be'."},
                {"ending": "won't be", "sound": "/woʊnt biː/", "tip": "Make sure the 't' in won't is crisp before the 'b'."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Definitely", "percentage": 100, "color": "#10b981", "example": "I will definitely be thinking of you tomorrow."},
            {"adverb": "Probably", "percentage": 80, "color": "#3b82f6", "example": "He will probably be sleeping by the time we arrive."},
            {"adverb": "Still", "percentage": 70, "color": "#06b6d4", "example": "They will still be working on the report at 5:00 PM."},
            {"adverb": "Maybe", "percentage": 50, "color": "#8b5cf6", "example": "Maybe she will be feeling better tomorrow."},
            {"adverb": "Rarely", "percentage": 20, "color": "#f59e0b", "example": "You will rarely be waiting more than five minutes."},
            {"adverb": "Never", "percentage": 0, "color": "#ef4444", "example": "We will never be taking that shortcut again."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN 'will' and 'be'",
                "formula": "Subject + WILL + [ADVERB] + BE + Verb-ING",
                "explanation": "In positive sentences, the adverb sits between 'will' and 'be'.",
                "examples": [{"bad": "I will be probably sleeping.", "good": "I will probably be sleeping."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: 'Still' sits between 'will' and 'be'",
                "formula": "Subject + WILL + STILL + BE + Verb-ING",
                "explanation": "To emphasize that an action continues, put 'still' right after 'will'.",
                "examples": [{"bad": "I will be still waiting.", "good": "I will still be waiting."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: In negatives, 'probably' goes before 'won't'",
                "formula": "Subject + PROBABLY + WON'T BE + Verb-ING",
                "explanation": "Just like in Future Simple, place 'probably' before 'won't be'.",
                "examples": [{"bad": "I won't be probably using it.", "good": "I probably won't be using it."}]
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
                {"form": "+ Positive", "formula": "Subject + will be + verb-ing", "exampleI": "I will be sleeping.", "exampleHe": "She will be driving.", "memoryAnchor": "will BE + verb-ING!"},
                {"form": "– Negative", "formula": "Subject + won't be + verb-ing", "exampleI": "I won't be working.", "exampleHe": "They won't be coming.", "memoryAnchor": "won't BE + ING"},
                {"form": "? Yes/No Question", "formula": "Will + Subject + be + verb-ing?", "exampleI": "Will you be using this?", "exampleHe": "Will he be joining us?", "memoryAnchor": "Will + Subject + be + ING?"},
                {"form": "? Wh- Question", "formula": "Wh- Word + will + Subject + be + -ing?", "exampleI": "What will you be doing?", "exampleHe": "Where will they be staying?", "memoryAnchor": "Wh- + will + Subj + be + ING."}
            ],
            "spellingPills": [
                {"ending": "Standard", "change": "+ing", "example": "fly → flying"},
                {"ending": "Silent -e", "change": "Drop e + ing", "example": "drive → driving"},
                {"ending": "Short CVC", "change": "Double letter", "example": "swim → swimming"},
                {"ending": "Contraction", "change": "will be → 'll be", "example": "I'll be waiting"}
            ],
            "adverbGoldenFormula": "Subject + WILL + [Adverb] + BE + Verb-ING"
        },
        "exercises": {
            "quiz": [
                {"question": "Complete: 'This time tomorrow, we ________ over the Alps.'", "options": ["will fly", "will be flying", "fly", "are flown"], "correct": 1, "explanation": "'This time tomorrow' specifies an action in progress in the future: 'will be flying'."},
                {"question": "What is the polite way to ask a colleague if they need the company van?", "options": ["Are you going to need the van?", "Will you be using the van today?", "Do you use the van?", "Did you use the van?"], "correct": 1, "explanation": "'Will you be using...?' is the most polite, neutral way to ask about future plans."},
                {"question": "Which sentence has an error with a stative verb?", "options": ["She will be working late tonight.", "I will be understanding this chapter by tomorrow.", "They will be traveling through Spain.", "We will be waiting for your reply."], "correct": 1, "explanation": "'Understand' is a stative verb and cannot take continuous form (*will be understanding)."},
                {"question": "Complete: 'Don't call her now; she ________ her baby to sleep.'", "options": ["will be putting", "will put", "puts", "put"], "correct": 0, "explanation": "Predicting an activity in progress right now based on routine: 'will be putting'."},
                {"question": "What is the correct negative form?", "options": ["I will not working.", "I won't be working.", "I won't working.", "I am not will be working."], "correct": 1, "explanation": "Negative form: Subject + won't be + verb-ing."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "At 8:00 PM tonight, I ________ (have) dinner with my parents.", "correctAnswer": "will be having", "hint": "Future Continuous with have.", "explanation": "Action in progress at 8:00 PM: 'will be having'."},
                {"id": 2, "sentence": "When you arrive at the airport, I ________ (wait) for you by the gate.", "correctAnswer": "will be waiting", "hint": "Ongoing waiting action.", "explanation": "Future Continuous: 'will be waiting'."},
                {"id": 3, "sentence": "Will you ________ (use) your car tonight, or can I borrow it?", "correctAnswer": "be using", "hint": "After 'Will you', add 'be using'.", "explanation": "Polite question formula: Will you be using...?"}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["This", "time", "tomorrow", "I", "will", "be", "relaxing."], "correctOrder": ["This", "time", "tomorrow", "I", "will", "be", "relaxing."], "targetSentence": "This time tomorrow I will be relaxing.", "meaning": "Future active state."},
                {"id": 2, "tokens": ["Will", "you", "be", "joining", "us", "later?"], "correctOrder": ["Will", "you", "be", "joining", "us", "later?"], "targetSentence": "Will you be joining us later?", "meaning": "Polite inquiry."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "I will be waiting for you when you will arrive.", "options": ["I will be waiting for you when you will arrive.", "I will be waiting for you when you arrive.", "I will wait for you when you will arrive."], "correctIndex": 1, "explanation": "Never use 'will' after 'when' in a future time clause. Say 'when you arrive'."},
                {"id": 2, "flawedSentence": "Will be they staying with us next week?", "options": ["Will be they staying with us next week?", "Will they be staying with us next week?", "Are they be staying with us next week?"], "correctIndex": 1, "explanation": "The subject sits between 'will' and 'be': 'Will they be staying...?'"}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "definitely", "targetSentence": "I will definitely be attending the gala.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "I", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "will", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "be attending the gala.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'definitely' directly between 'will' and 'be attending'."
                },
                {
                    "id": 2, "adverb": "probably", "targetSentence": "He will probably be sleeping by then.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "He", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "will", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "be sleeping by then.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'probably' between 'will' and 'be sleeping'."
                }
            ],
            "masteryExam": [
                {"question": "What is the primary conceptual meaning of Future Continuous?", "options": ["A completed action before a future deadline", "An action actively in progress at a specific future reference point", "A spontaneous decision made at the moment of speech", "An action that occurred before another past event"], "correct": 1, "level": "B2", "explanation": "Future Continuous visualizes an action underway at a future point."},
                {"question": "Which question sounds most polite and detached when asking about someone's plans?", "options": ["Are you going to drive to town?", "Will you drive to town?", "Will you be driving into town?", "Do you drive into town?"], "correct": 2, "level": "B2", "explanation": "Future Continuous inquires softly about routine plans without imposing."},
                {"question": "Complete the time clause: 'We will be sleeping when the flight ________.'", "options": ["will land", "lands", "is landing", "landed"], "correct": 1, "level": "B1", "explanation": "Time clauses introduced by 'when' take the Present Simple ('lands')."},
                {"question": "Why is 'I will be having a sports car next year' awkward?", "options": ["Cars cannot be bought next year.", "'Have' denoting possession resists continuous aspect.", "It lacks an adverb of frequency.", "'Next year' requires Past Simple."], "correct": 1, "level": "B2", "explanation": "'Have' meaning ownership is a state verb and cannot take -ing."},
                {"question": "How can Future Continuous be used to talk about the present moment?", "options": ["It cannot talk about the present.", "To express polite deductions about what someone is probably doing right now based on routine.", "Only in poetry.", "To express 100% scientific truths."], "correct": 1, "level": "B2", "explanation": "'Don't call him now; he will be sleeping' deduces present activity."},
                {"question": "Choose the correct negative sentence:", "options": ["She won't working tomorrow.", "She will not be working tomorrow.", "She isn't will be working tomorrow.", "She won't be work tomorrow."], "correct": 1, "level": "B1", "explanation": "Negative formula: Subject + will not be / won't be + verb-ing."},
                {"question": "Where does the adverb 'still' sit in Future Continuous?", "options": ["Before will", "Between will and be", "After the -ing verb", "At the very end of the sentence"], "correct": 1, "level": "B2", "explanation": "'Still' sits between 'will' and 'be' ('I will still be working')."},
                {"question": "Identify the sentence that describes parallel future activities:", "options": ["I will wash the car and then mow the lawn.", "While you are cooking, I will be setting the table.", "I had cleaned before you cooked.", "If you cook, I wash."], "correct": 1, "level": "B2", "explanation": "Simultaneous ongoing future activities use parallel continuous aspect."},
                {"question": "What is the contracted form of 'She will be'?", "options": ["She'll be", "Shelbe", "She'b", "She will'b"], "correct": 0, "level": "A2", "explanation": "'She will be' contracts to 'She'll be'."},
                {"question": "Complete: 'Don't visit at noon; the engineers ________ the main servers.'", "options": ["will reboot", "will be rebooting", "rebooted", "have rebooted"], "correct": 1, "level": "B2", "explanation": "Reboot in progress at noon requires Future Continuous: 'will be rebooting'."}
            ]
        }
    }

    return tenses

if __name__ == '__main__':
    t = get_part1_tenses()
    print(f"Part 1 ready with {len(t)} tenses: {list(t.keys())}")
