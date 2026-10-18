# -*- coding: utf-8 -*-
"""
Part 2: Simplified, clear, beginner-friendly explanations for:
- pastPerfect
- presentPerfect
- futurePerfect
- pastPerfectCont
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

def get_part2_tenses():
    tenses = {}

    # =========================================================================
    # 7. PAST PERFECT SIMPLE (had + V3)
    # =========================================================================
    tenses["pastPerfect"] = {
        "meta": {
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
            "summary": "Use this to show which of two past actions happened FIRST (the 'past before the past')."
        },
        "overview": {
            "definition": "The Past Perfect is used when you are talking about the past, and you want to refer to something that had happened even earlier.",
            "coreConcept": "Think of it as the 'past before the past'. If two things happened yesterday, the older action gets 'had + V3' so the listener knows which came first.",
            "timelineInsight": "Two points in the past: Past Event 1 (had done) happened BEFORE Past Event 2 (did).",
            "signalWords": [
                {"word": "Already", "example": "When I arrived, the film had already started."},
                {"word": "Before / After", "example": "She had eaten dinner before she went to bed."},
                {"word": "By the time", "example": "By the time we got to the station, the train had left."},
                {"word": "Just", "example": "The bus had just pulled away when I ran up."},
                {"word": "Never ... before", "example": "I had never seen the ocean before that trip."},
                {"word": "Because", "example": "He was tired because he had worked late."}
            ],
            "pillars": [
                {"icon": "History", "label": "The Older Past Event", "desc": "Shows which event happened first between two past moments.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "Lightbulb", "label": "Past Cause and Effect", "desc": "Explaining the past reason for something ('He was hungry because he hadn't eaten').", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "Sparkles", "label": "First-Time Experiences", "desc": "Experiencing something for the first time in your life up to that past day.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
                {"icon": "HelpCircle", "label": "Regrets & Conditionals", "desc": "Imagining a different past with the 3rd Conditional ('If I had known...').", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "action_before_past", "1. An Action That Happened Before Another Past Event", "Earlier Event", "History",
                "Showing clearly which of two past actions was completed first.",
                "Whenever two things happened in the past, use Past Perfect ('had left') for the first action, and Past Simple ('arrived') for the second action.",
                ("When I arrived at the station, the train had already left.", "The train departed first; I arrived second.", "had already left"),
                ("She couldn't buy the ticket because she had lost her wallet.", "She lost the wallet first, so she couldn't buy the ticket.", "had lost"),
                ("By the time we got home, the movie had finished.", "Movie finished before our arrival.", "had finished"),
                "If you don't use 'had', people might think the train left when you arrived!"
            ),
            make_use_case(
                "past_cause_reason", "2. Giving the Reason for a Past Feeling or Situation", "Past Cause", "Lightbulb",
                "Explaining why someone felt a certain way or why a past situation happened.",
                "Use Past Perfect after 'because' to explain the background reason for a past emotion or state.",
                ("He was nervous because he had never flown on a plane before.", "Never flying was the cause of his nervousness.", "had never flown"),
                ("We were starving because we hadn't eaten all day.", "Not eating earlier caused our extreme hunger.", "hadn't eaten"),
                ("She felt confident during the test because she had studied hard all week.", "Prior studying explained her confidence.", "had studied"),
                "Notice the structure: Feeling was in Past Simple ('was nervous'), cause was in Past Perfect ('had never flown')."
            ),
            make_use_case(
                "experiences_up_to_past", "3. Life Experiences Up to a Specific Past Day", "Past Milestone", "Sparkles",
                "Talking about whether you had done something in your life before a certain past moment.",
                "This is like Present Perfect, but shifted into the past! Instead of 'Have you ever...?', you ask 'Had you ever... before that day?'",
                ("I had never seen snow in my life until I visited Norway in 2020.", "First snow experience in 2020.", "had never seen"),
                ("He had already worked at three different companies before he turned thirty.", "Career achievements up to age 30.", "had already worked"),
                ("She had never tasted sushi before her trip to Tokyo.", "Food experience prior to Japan trip.", "had never tasted"),
                "Words like 'never before', 'already', and 'until' are common signals here."
            ),
            make_use_case(
                "unfulfilled_wishes", "4. Past Hopes & Expectations That Didn't Happen", "Unfulfilled Plans", "HeartCrack",
                "Talking about plans or hopes you had in the past that did not come true.",
                "Use verbs like 'had hoped', 'had wished', 'had planned' to show you wanted something, but reality turned out differently.",
                ("I had hoped to see you yesterday, but I got stuck at work.", "Past hope that couldn't happen.", "had hoped"),
                ("We had planned to go camping, but it rained all weekend.", "Past plan ruined by bad weather.", "had planned"),
                ("She had intended to study abroad, but financial difficulties changed her plans.", "Past intention not carried out.", "had intended"),
                "Saying 'I had hoped' immediately tells the listener: '...but it didn't work out'."
            ),
            make_use_case(
                "reported_speech_past", "5. Reported Speech & Indirect Thoughts", "Reported Speech", "MessageSquare",
                "Reporting what someone said in the past about an earlier event.",
                "When reporting what someone said in the past, Present Perfect or Past Simple moves back one step into Past Perfect.",
                ("She told me that she had lost her passport.", "Reporting what she lost earlier.", "had lost"),
                ("He explained that he had already paid the bill.", "Reporting the completed payment.", "had already paid"),
                ("I realized that I had left my keys inside the car.", "Realizing an earlier mistake.", "had left"),
                "Direct speech: 'I lost my keys' → Reported speech: 'He realized he had lost his keys'."
            ),
            make_use_case(
                "third_conditional_regrets", "6. Imagining a Different Past (3rd Conditional)", "Past Regrets", "HelpCircle",
                "Talking about imaginary past situations and regrets with 'If... had + V3'.",
                "When you look back on a past mistake and imagine how things could have been different, use 'had + V3' in the 'if' clause.",
                ("If I had studied harder, I would have passed the exam.", "Imagining a different past study habit.", "had studied"),
                ("If we had caught that earlier train, we wouldn't have been late.", "Hypothetical past travel change.", "had caught"),
                ("If you had told me about the problem, I could have helped you.", "Past regret about communication.", "had told"),
                "This allows you to discuss past possibilities and learn from mistakes."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + HAD ('d) + Past Participle (V3)",
                "explanation": "Put 'had' before the 3rd form of the verb (V3). 'Had' is the same for all subjects (I, you, he, she, we, they)!",
                "table": [
                    {"subject": "All Subjects (I / You / He / She / We / They)", "auxiliary": "had ('d)", "verb": "left / finished", "complement": "before noon"}
                ],
                "examples": [
                    {"en": "I had already eaten when they arrived.", "context": "Action finished prior to arrival"},
                    {"en": "She'd seen that film twice before.", "context": "Contraction: She had → She'd"}
                ]
            },
            "negative": {
                "formula": "Subject + HADN'T (had not) + Past Participle (V3)",
                "explanation": "Add 'not' to had: 'hadn't', followed by the past participle (V3).",
                "table": [
                    {"subject": "All Subjects", "auxiliary": "hadn't (had not)", "verb": "seen / locked", "complement": "the front door"}
                ],
                "examples": [
                    {"en": "I hadn't heard the news until you told me.", "context": "Negative statement about earlier awareness"},
                    {"en": "They hadn't finished their work when the bell rang.", "context": "Uncompleted past event"}
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
                            {"q": "Had you met him before that party?", "a": "Yes, I had. / No, I hadn't."},
                            {"q": "Had they already left when you called?", "a": "Yes, they had."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + had + Subject + V3...?",
                        "examples": [
                            {"q": "Where had you worked before joining this company?", "a": "I had worked at a bank in Boston."},
                            {"q": "Why had she left the meeting so early?", "a": "Because she had received an urgent phone call."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Had you ever traveled abroad before 2020?", "context": "Past life experience question"},
                    {"en": "What had he told you before he resigned?", "context": "Wh- inquiry about earlier statement"}
                ]
            },
            "verbToBe": {
                "formula": "Subject + had been + adjective / noun",
                "explanation": "With the verb 'to be', the past participle is 'been'. Say 'had been'.",
                "table": [
                    {"subject": "All Subjects", "form": "had been", "negative": "hadn't been", "example": "He had been sick for three days before going to hospital."}
                ],
                "examples": [
                    {"en": "She had been a teacher before she became an author.", "context": "Past career prior to change"},
                    {"en": "We had never been to Rome before that trip.", "context": "Experience prior to a past visit"}
                ]
            },
            "verbHave": {
                "formula": "Subject + had had (had + had)",
                "explanation": "Yes, 'had had' is completely correct English! The first 'had' is the helper, the second 'had' is the V3 of have.",
                "table": [
                    {"subject": "All Subjects", "form": "had had", "negative": "hadn't had", "example": "I had had a long day, so I went straight to sleep."}
                ],
                "examples": [
                    {"en": "She had had the car for ten years before it broke down.", "context": "Possession prior to breakdown"},
                    {"en": "We hadn't had lunch yet when they invited us.", "context": "Meal prior to invitation"}
                ]
            }
        },
        "spellingRules": {
            "title": "Past Participle (V3) Rules",
            "subtitle": "How to make the 3rd form of the verb.",
            "rules": [
                {"ruleNumber": 1, "title": "Regular Verbs: Add -ed", "condition": "Regular verbs", "ruleText": "Regular past participles look exactly like the past simple (-ed).", "examples": ["finish → finished", "watch → watched", "clean → cleaned"]},
                {"ruleNumber": 2, "title": "Irregular Verbs: Special V3 Forms", "condition": "Irregular verbs", "ruleText": "Memorize the 3rd column: see → saw → seen, go → went → gone.", "examples": ["go → gone", "see → seen", "write → written", "eat → eaten"]},
                {"ruleNumber": 3, "title": "Verbs That Don't Change", "condition": "Identical verbs", "ruleText": "A few irregular verbs never change form across V1, V2, and V3.", "examples": ["cut → cut → cut", "put → put → put", "cost → cost → cost"]}
            ],
            "phoneticTips": [
                {"ending": "'d contraction", "sound": "/d/ sound", "tip": "Pronounce 'I'd' like 'eyed' and 'we'd' like 'weed'."},
                {"ending": "had had", "sound": "/hæd hæd/", "tip": "Stress the second 'had': 'I had HAD a long day'."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Already", "percentage": 100, "color": "#10b981", "example": "The train had already left when we arrived."},
            {"adverb": "Always", "percentage": 90, "color": "#06b6d4", "example": "She had always dreamed of visiting Paris."},
            {"adverb": "Often", "percentage": 70, "color": "#3b82f6", "example": "They had often talked about starting a business."},
            {"adverb": "Just", "percentage": 50, "color": "#8b5cf6", "example": "He had just sat down when the doorbell rang."},
            {"adverb": "Rarely", "percentage": 20, "color": "#f59e0b", "example": "We had rarely spoken before that meeting."},
            {"adverb": "Never", "percentage": 0, "color": "#ef4444", "example": "I had never seen such a beautiful sunset before."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN 'had' and the V3 participle",
                "formula": "Subject + HAD + [ADVERB] + V3 Participle",
                "explanation": "Adverbs like already, just, and never sit right between 'had' and the main verb.",
                "examples": [{"bad": "I had left already.", "good": "I had already left."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: 'Yet' sits at the very end of negative sentences",
                "formula": "Subject + hadn't + V3 + [YET]",
                "explanation": "To show something hadn't happened up to that past point, place 'yet' at the end.",
                "examples": [{"bad": "I hadn't yet eaten.", "good": "I hadn't eaten yet."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: In questions, put the adverb after the subject",
                "formula": "Had + Subject + [EVER / ALREADY] + V3...?",
                "explanation": "In questions, place 'ever' or 'already' directly after the subject.",
                "examples": [{"bad": "Had ever you seen it?", "good": "Had you ever seen it?"}]
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
                "explanation": "After 'had', always use the 3rd form (V3 past participle): go → went → GONE. 'Had gone' is correct."
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
                {"form": "+ Positive", "formula": "Subject + had ('d) + V3", "exampleI": "I had seen it.", "exampleHe": "He had left.", "memoryAnchor": "had + Past Participle (V3)!"},
                {"form": "– Negative", "formula": "Subject + hadn't + V3", "exampleI": "I hadn't heard.", "exampleHe": "They hadn't eaten.", "memoryAnchor": "hadn't + V3"},
                {"form": "? Yes/No Question", "formula": "Had + Subject + V3?", "exampleI": "Had you finished?", "exampleHe": "Had she called?", "memoryAnchor": "Start with Had!"},
                {"form": "? Wh- Question", "formula": "Wh- Word + had + Subject + V3?", "exampleI": "Where had you been?", "exampleHe": "Why had he left?", "memoryAnchor": "Wh- + had + Subject + V3."}
            ],
            "spellingPills": [
                {"ending": "Regular", "change": "+ed", "example": "finish → finished"},
                {"ending": "Irregular V3", "change": "Memorize 3rd form", "example": "see → seen"},
                {"ending": "Double Had", "change": "had had", "example": "I had had dinner"},
                {"ending": "Contraction", "change": "I had → I'd", "example": "I'd never seen"}
            ],
            "adverbGoldenFormula": "Subject + HAD + [Adverb] + V3 Participle"
        },
        "exercises": {
            "quiz": [
                {"question": "When we reached the cinema, the film ________.", "options": ["already started", "had already started", "has already started", "was already started"], "correct": 1, "explanation": "The film started before we arrived, so use Past Perfect: 'had already started'."},
                {"question": "He was exhausted yesterday because he ________ for 12 hours straight.", "options": ["worked", "had worked", "has worked", "works"], "correct": 1, "explanation": "Working for 12 hours occurred prior to his exhaustion in the past: 'had worked'."},
                {"question": "What is the correct 3rd form (V3) of 'write'?", "options": ["wrote", "written", "writed", "writen"], "correct": 1, "explanation": "write → wrote → written."},
                {"question": "Is the sentence 'She had had that car for years before selling it' correct?", "options": ["No, you can never repeat 'had'.", "Yes, the first is auxiliary had, the second is main verb V3.", "No, it must be 'had have'.", "No, it must be 'was having'."], "correct": 1, "explanation": "'Had had' is completely correct: auxiliary had + V3 had."},
                {"question": "Choose the correct negative form:", "options": ["We hadn't received the letter when you called.", "We didn't had received the letter.", "We wasn't received the letter.", "We not had received the letter."], "correct": 0, "explanation": "Negative Past Perfect is: Subject + hadn't + V3."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "By the time the ambulance arrived, the doctor ________ (already / save) the patient.", "correctAnswer": "had already saved", "hint": "Past Perfect with already.", "explanation": "Action completed before ambulance arrival: 'had already saved'."},
                {"id": 2, "sentence": "I didn't recognize my hometown because it ________ (change) so much over the years.", "correctAnswer": "had changed", "hint": "Past Perfect of change.", "explanation": "Changes happened prior to my return: 'had changed'."},
                {"id": 3, "sentence": "Had you ever ________ (see) snow before your trip to Canada?", "correctAnswer": "seen", "hint": "V3 of see.", "explanation": "Past participle of see is seen."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["The", "train", "had", "already", "left", "the", "station."], "correctOrder": ["The", "train", "had", "already", "left", "the", "station."], "targetSentence": "The train had already left the station.", "meaning": "Prior completed departure."},
                {"id": 2, "tokens": ["I", "had", "never", "eaten", "sushi", "before."], "correctOrder": ["I", "had", "never", "eaten", "sushi", "before."], "targetSentence": "I had never eaten sushi before.", "meaning": "Life experience prior to past milestone."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "When we arrived at the airport, our flight has already departed.", "options": ["When we arrived at the airport, our flight has already departed.", "When we arrived at the airport, our flight had already departed.", "When we arrived at the airport, our flight departed already."], "correctIndex": 1, "explanation": "Never use 'has' with past arrived; use 'had already departed'."},
                {"id": 2, "flawedSentence": "She had went to bed before her parents came home.", "options": ["She had went to bed before her parents came home.", "She had gone to bed before her parents came home.", "She has went to bed before her parents came home."], "correctIndex": 1, "explanation": "After 'had', use the V3 participle 'gone', not 'went'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "already", "targetSentence": "He had already finished his dinner.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "He", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "had", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "finished his dinner.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'already' between 'had' and the V3 participle 'finished'."
                },
                {
                    "id": 2, "adverb": "never", "targetSentence": "They had never visited the museum.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "They", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "had", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "visited the museum.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'never' between 'had' and 'visited'."
                }
            ],
            "masteryExam": [
                {"question": "What is the primary grammatical purpose of the Past Perfect Simple?", "options": ["To describe a future prediction", "To establish chronological precedence: showing which past event happened before another", "To describe an action taking place right now", "To express universal timeless truths"], "correct": 1, "level": "B2", "explanation": "It anchors an earlier past event relative to a subsequent past reference point."},
                {"question": "Why is 'I woke up, had brushed my teeth, and had left' poor English?", "options": ["Chronological sequences in narratives simply use Past Simple.", "Brushing teeth cannot take -ed.", "The subject must be repeated.", "It violates subject-verb agreement."], "correct": 0, "level": "B2", "explanation": "Events in natural chronological order use Past Simple."},
                {"question": "Choose the sentence that correctly explains a past cause:", "options": ["He was angry because he lost his wallet.", "He was angry because he had lost his wallet.", "He is angry because he had lost his wallet.", "He has been angry because he lost his wallet."], "correct": 1, "level": "B2", "explanation": "Past state ('was angry') caused by prior event ('had lost')."},
                {"question": "What does the expression 'had had' represent in 'We had had enough'?", "options": ["An accidental grammar typing mistake", "Auxiliary 'had' + past participle of have ('had')", "A colloquial slang phrase", "Subjunctive mood only"], "correct": 1, "level": "B2", "explanation": "Grammatically regular: auxiliary had + V3 had."},
                {"question": "In 3rd Conditionals, where does 'had + V3' belong?", "options": ["In the main result clause", "In the conditional 'if' clause", "In both clauses", "At the very end of the sentence"], "correct": 1, "level": "B2", "explanation": "'If + Subject + had + V3, Subject + would have + V3'."},
                {"question": "Complete: 'She realized that she ________ her passport on the kitchen table.'", "options": ["leaves", "has left", "had left", "was leaving"], "correct": 2, "level": "B1", "explanation": "Leaving the passport occurred before the moment of realization: 'had left'."},
                {"question": "Which signal word commonly marks completed earlier past events?", "options": ["tomorrow", "by the time", "right now", "every Monday"], "correct": 1, "level": "B2", "explanation": "'By the time' typically anchors Past Perfect against a past clause."},
                {"question": "What is the negative contraction of 'had not'?", "options": ["hadn't", "havent", "had'nt", "did not have"], "correct": 0, "level": "A2", "explanation": "'had not' contracts to 'hadn't'."},
                {"question": "Identify the irregular verb with identical V1, V2, and V3 forms:", "options": ["speak", "cut", "take", "write"], "correct": 1, "level": "A2", "explanation": "cut → cut → cut."},
                {"question": "How does reported speech shift 'I have seen that movie' when reported in the past?", "options": ["He said he saw that movie.", "He said he had seen that movie.", "He said he has seen that movie.", "He said he will see that movie."], "correct": 1, "level": "B2", "explanation": "Present Perfect 'have seen' backshifts to Past Perfect 'had seen'."}
            ]
        }
    }

    # =========================================================================
    # 8. PRESENT PERFECT SIMPLE (have/has + V3)
    # =========================================================================
    tenses["presentPerfect"] = {
        "meta": {
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
            "summary": "Use this as the bridge between past and present: life experiences, recent actions with visible results, and unfinished time."
        },
        "overview": {
            "definition": "The Present Perfect connects the past to the present moment. Something happened in the past, but the result or importance is right NOW.",
            "coreConcept": "Think of it as a 'Bridge to Now'. You care about the result in your hands today, or your life experience up to this second, not the exact calendar date.",
            "timelineInsight": "An arrow traveling from somewhere in the past and touching the NOW moment.",
            "signalWords": [
                {"word": "Already / Just / Yet", "example": "I have just finished my lunch."},
                {"word": "Ever / Never", "example": "Have you ever seen a shooting star?"},
                {"word": "Since / For", "example": "I have lived here since 2018."},
                {"word": "Recently / Lately", "example": "She has read a lot of books recently."},
                {"word": "Today / This week (unfinished)", "example": "I have had three cups of coffee today."},
                {"word": "So far / Up to now", "example": "So far, we have raised $1,000."}
            ],
            "pillars": [
                {"icon": "Sparkles", "label": "Life Experience", "desc": "Things you have done in your life without saying when ('I have been to Rome').", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "Zap", "label": "Recent Action + Visible Result", "desc": "An action that just happened, with clear proof right in front of your eyes.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
                {"icon": "Clock", "label": "Unfinished Duration", "desc": "Started in the past and still true right now with 'for' and 'since'.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "Calendar", "label": "Unfinished Time Periods", "desc": "Actions inside a time frame that is not finished yet ('today', 'this month').", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "life_experiences", "1. Life Experiences ('Have you ever...?')", "Life Experience", "Sparkles",
                "Talking about things you have or haven't experienced in your life, without saying when.",
                "When you ask 'Have you ever been to Japan?', you don't care about the date — you only care if the experience exists in that person's memory.",
                ("I have visited Japan twice in my life.", "Personal life travel experience.", "have visited"),
                ("Have you ever tried scuba diving?", "Asking about a lifetime experience.", "Have you ever tried"),
                ("She has never eaten seafood.", "Something not experienced up to now.", "has never eaten"),
                "If you give the exact year or date ('in 2019'), you MUST switch to Past Simple ('I visited Japan in 2019')!"
            ),
            make_use_case(
                "present_result", "2. Recent Actions with Visible Results Right Now", "Visible Result", "Zap",
                "Something happened a moment ago, and you can see or feel the direct result right now.",
                "Compare: 'I lost my keys' (maybe I found them yesterday) vs 'I have lost my keys!' (they are missing right now; I can't open my door!).",
                ("Look! I have bought a new bicycle.", "The bike is sitting right in front of us.", "have bought"),
                ("She has cut her finger (it is bleeding right now).", "Direct physical proof in the present.", "has cut"),
                ("The chef has burned the toast; smell the smoke!", "Current sensory evidence of a recent event.", "has burned"),
                "Focus is on the present consequence, not the history."
            ),
            make_use_case(
                "unfinished_states", "3. States That Started in the Past and Continue Today", "Past to Present", "Clock",
                "Talking about a situation or job that began in the past and is STILL true right now.",
                "Use 'since' for the starting point in time ('since 2015') and 'for' for the duration ('for 8 years').",
                ("I have lived in this apartment for five years (and I still live here).", "Ongoing residency from past to now.", "have lived"),
                ("She has worked at the hospital since 2018.", "Starting year of continuing employment.", "has worked"),
                ("They have been married for twenty years.", "Ongoing relationship milestone.", "have been"),
                "Never say 'I live here since 2015'! English requires Present Perfect: 'I have lived here since 2015'."
            ),
            make_use_case(
                "unfinished_time_periods", "4. Actions in an Unfinished Time Period", "Unfinished Period", "Calendar",
                "Talking about how many times something happened in a time period that is not finished yet.",
                "Words like 'today', 'this morning', 'this week', and 'this year' are unfinished periods of time.",
                ("I have drank three cups of coffee today (the day is not over yet!).", "More coffee might still be drank today.", "have drank"),
                ("We have had two tests this week.", "Week is still continuing.", "have had"),
                ("Has it rained this month?", "Inquiring about rainfall during the current month.", "Has it rained"),
                "If the day is finished (it is midnight), say 'I drank three cups of coffee today'."
            ),
            make_use_case(
                "just_already_yet", "5. Fresh News with 'Just', 'Already', and 'Yet'", "Fresh News", "Bell",
                "Talking about actions that happened very recently, earlier than expected, or haven't happened yet.",
                "Use 'just' for a minute ago, 'already' for sooner than expected, and 'yet' in questions and negatives.",
                ("The mail carrier has just delivered your package.", "Happened two minutes ago.", "has just delivered"),
                ("I have already finished my homework; can I go out now?", "Finished earlier than anticipated.", "have already finished"),
                ("Have you washed the dishes yet? No, I haven't done them yet.", "Asking about an expected task.", "Have you ... yet"),
                "'Yet' always goes at the very end of the sentence."
            ),
            make_use_case(
                "repetition_habits", "6. Repeated Actions Leading Up to the Present", "Repetition", "Repeat",
                "Expressing an action that has occurred multiple times up to today.",
                "When you count how many times you have done something so far, use Present Perfect.",
                ("I have seen that movie five times so far.", "Repeated viewings in lifetime up to now.", "have seen"),
                ("She has called you three times this afternoon.", "Repeated calls today.", "has called"),
                ("We have traveled to Italy every summer for five years.", "Repeated annual tradition.", "have traveled"),
                "Shows a pattern that may continue in the future."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + HAVE / HAS ('ve / 's) + Past Participle (V3)",
                "explanation": "Use 'have' for I, you, we, they; use 'has' for he, she, it. Then add the 3rd form (V3) of the verb.",
                "table": [
                    {"subject": "I / You / We / They", "auxiliary": "have ('ve)", "verb": "worked / visited", "complement": "London"},
                    {"subject": "He / She / It", "auxiliary": "has ('s)", "verb": "worked / visited", "complement": "London"}
                ],
                "examples": [
                    {"en": "I have finished my project.", "context": "Positive statement with have + V3"},
                    {"en": "She's already arrived at the hotel.", "context": "Contraction: She has → She's"}
                ]
            },
            "negative": {
                "formula": "Subject + HAVEN'T / HASN'T + Past Participle (V3)",
                "explanation": "Put 'haven't' (have not) or 'hasn't' (has not) before the past participle.",
                "table": [
                    {"subject": "I / You / We / They", "auxiliary": "haven't (have not)", "verb": "seen", "complement": "that movie yet"},
                    {"subject": "He / She / It", "auxiliary": "hasn't (has not)", "verb": "seen", "complement": "that movie yet"}
                ],
                "examples": [
                    {"en": "I haven't received your email yet.", "context": "Unreceived message"},
                    {"en": "He hasn't called me today.", "context": "Absence of call today"}
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
                            {"q": "Have you seen my glasses?", "a": "Yes, I have! / No, I haven't."},
                            {"q": "Has she finished her work?", "a": "Yes, she has."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + have/has + Subject + V3...?",
                        "examples": [
                            {"q": "How long have you lived here?", "a": "I have lived here for 6 years."},
                            {"q": "Where has he gone?", "a": "He has gone to the bank."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Have you ever traveled to Asia?", "context": "Life experience inquiry with ever"},
                    {"en": "What have they decided?", "context": "Wh- inquiry about a recent decision"}
                ]
            },
            "verbToBe": {
                "formula": "Subject + have / has been",
                "explanation": "Notice the difference between 'been to' and 'gone to': 'She has been to Paris' means she visited and returned home! 'She has gone to Paris' means she is still in Paris right now.",
                "table": [
                    {"subject": "Been to (visited & returned)", "example": "I have been to Rome twice in my life."},
                    {"subject": "Gone to (still there)", "example": "Marco is not here; he has gone to Rome."}
                ],
                "examples": [
                    {"en": "Have you ever been to Canada?", "context": "Asking about travel experience"},
                    {"en": "Where is Mom? She has gone to the grocery store.", "context": "She is currently at the store"}
                ]
            },
            "verbHave": {
                "formula": "Subject + have / has had",
                "explanation": "Yes, 'have had' is totally normal! 'I have had a headache all day.'",
                "table": [
                    {"subject": "All Subjects", "form": "have / has had", "example": "We have had this car for five years."}
                ],
                "examples": [
                    {"en": "I have had three meetings today.", "context": "Meetings in unfinished time period"},
                    {"en": "She has had a cold since Tuesday.", "context": "Illness continuing to now"}
                ]
            }
        },
        "spellingRules": {
            "title": "Forms of the Past Participle (V3)",
            "subtitle": "Everything you need to form V3 accurately.",
            "rules": [
                {"ruleNumber": 1, "title": "Regular Verbs", "condition": "Most verbs", "ruleText": "Add -ed to the base form, identical to Past Simple.", "examples": ["visit → visited", "clean → cleaned", "play → played"]},
                {"ruleNumber": 2, "title": "Drop -e", "condition": "Ends in -e", "ruleText": "Add -d only.", "examples": ["live → lived", "decide → decided"]},
                {"ruleNumber": 3, "title": "Irregular Participles", "condition": "Irregular verbs", "ruleText": "Memorize the 3rd form: speak → spoken, break → broken, fly → flown.", "examples": ["see → seen", "do → done", "go → gone / been", "eat → eaten"]}
            ],
            "phoneticTips": [
                {"ending": "Contractions", "sound": "I've / We've / She's", "tip": "Pronounce 'I've' as /aɪv/, 'we've' as /wiːv/, and 'she's' as /ʃiːz/."},
                {"ending": "been", "sound": "/bɪn/ (US) or /biːn/ (UK)", "tip": "American English usually pronounces 'been' like 'bin'."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Always", "percentage": 100, "color": "#10b981", "example": "I have always loved classical music."},
            {"adverb": "Already", "percentage": 90, "color": "#06b6d4", "example": "She has already finished her exam."},
            {"adverb": "Often", "percentage": 70, "color": "#3b82f6", "example": "We have often thought about moving to the coast."},
            {"adverb": "Recently", "percentage": 50, "color": "#8b5cf6", "example": "They have recently purchased a home."},
            {"adverb": "Rarely", "percentage": 20, "color": "#f59e0b", "example": "He has rarely complained about his job."},
            {"adverb": "Never", "percentage": 0, "color": "#ef4444", "example": "I have never seen such an incredible sight."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN have/has and V3",
                "formula": "Subject + HAVE / HAS + [ADVERB] + V3",
                "explanation": "Adverbs like already, just, never, and ever sit between have/has and the V3 verb.",
                "examples": [{"bad": "I have finished already my work.", "good": "I have already finished my work."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: 'Yet' goes at the very END",
                "formula": "Subject + haven't/hasn't + V3 + [YET]",
                "explanation": "'Yet' sits at the end of negative sentences and questions.",
                "examples": [{"bad": "I haven't yet seen it.", "good": "I haven't seen it yet."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: 'Since' vs 'For'",
                "formula": "SINCE + starting point | FOR + duration",
                "explanation": "Use 'since' for dates and times (since 2010, since 8 AM). Use 'for' for periods of time (for 5 years, for two hours).",
                "examples": [{"bad": "I have lived here since 5 years.", "good": "I have lived here for 5 years."}]
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
                "explanation": "Always use the 3rd form (V3) after have/has: go → went → GONE. Never say 'have went'!"
            }
        ],
        "resumeSummary": {
            "title": "Present Perfect Summary & Cheat-Sheet",
            "subtitle": "Everything you need to remember about Present Perfect on one simple card.",
            "formulaMatrix": [
                {"form": "+ Positive", "formula": "Subject + have / has + V3", "exampleI": "I have seen it.", "exampleHe": "She has called.", "memoryAnchor": "have/has + Past Participle (V3)!"},
                {"form": "– Negative", "formula": "Subject + haven't / hasn't + V3", "exampleI": "I haven't eaten.", "exampleHe": "He hasn't arrived.", "memoryAnchor": "haven't / hasn't + V3"},
                {"form": "? Yes/No Question", "formula": "Have / Has + Subject + V3?", "exampleI": "Have you finished?", "exampleHe": "Has she left?", "memoryAnchor": "Have/Has at the start!"},
                {"form": "? Wh- Question", "formula": "Wh- Word + have/has + Subject + V3?", "exampleI": "Where have you been?", "exampleHe": "What has he done?", "memoryAnchor": "Wh- + have/has + Subj + V3."}
            ],
            "spellingPills": [
                {"ending": "Regular", "change": "+ed", "example": "visit → visited"},
                {"ending": "Irregular V3", "change": "Memorize 3rd form", "example": "see → seen"},
                {"ending": "Since", "change": "Starting date", "example": "since 2018"},
                {"ending": "For", "change": "Number of years/days", "example": "for 3 years"}
            ],
            "adverbGoldenFormula": "Subject + HAVE / HAS + [Adverb] + V3 Participle"
        },
        "exercises": {
            "quiz": [
                {"question": "Which sentence is correct for someone who visited Paris and came back home?", "options": ["She has gone to Paris.", "She has been to Paris.", "She has went to Paris.", "She was gone to Paris."], "correct": 1, "explanation": "'Has been to' means visited and returned home."},
                {"question": "Complete the sentence: 'I have known him ________ ten years.'", "options": ["since", "for", "from", "ago"], "correct": 1, "explanation": "Ten years is a duration of time, so use 'for'."},
                {"question": "Why is 'I have seen that movie yesterday' incorrect?", "options": ["'Yesterday' is a finished past time word and requires Past Simple 'saw'.", "'Seen' is spelled wrong.", "'Movie' is uncountable.", "There is no error."], "correct": 0, "explanation": "Finished past time markers like 'yesterday' demand Past Simple: 'I saw that movie yesterday'."},
                {"question": "What is the correct question to ask about someone's life experience?", "options": ["Did you ever eat sushi?", "Have you ever eaten sushi?", "Were you ever eating sushi?", "Have you ever ate sushi?"], "correct": 1, "explanation": "Life experience question uses: 'Have you ever eaten sushi?'"},
                {"question": "Complete: 'She ________ her homework yet.'", "options": ["hasn't finished", "didn't finished", "haven't finished", "hasn't finish"], "correct": 0, "explanation": "Third person singular negative: hasn't + finished."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "I ________ (just / receive) a text message from my manager.", "correctAnswer": "have just received", "hint": "Present Perfect with just.", "explanation": "Action completed a moment ago: 'have just received'."},
                {"id": 2, "sentence": "He ________ (live) in Canada since 2015.", "correctAnswer": "has lived", "hint": "Third person singular has + lived.", "explanation": "Continuing state since 2015: 'has lived'."},
                {"id": 3, "sentence": "Have you ________ (eat) breakfast yet this morning?", "correctAnswer": "eaten", "hint": "V3 of eat.", "explanation": "The past participle of eat is eaten."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["I", "have", "never", "seen", "such", "beauty."], "correctOrder": ["I", "have", "never", "seen", "such", "beauty."], "targetSentence": "I have never seen such beauty.", "meaning": "Lifetime experience observation."},
                {"id": 2, "tokens": ["Has", "the", "train", "arrived", "yet?"], "correctOrder": ["Has", "the", "train", "arrived", "yet?"], "targetSentence": "Has the train arrived yet?", "meaning": "Inquiring about recent arrival."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "I have bought this jacket last Saturday.", "options": ["I have bought this jacket last Saturday.", "I bought this jacket last Saturday.", "I had bought this jacket last Saturday."], "correctIndex": 1, "explanation": "Specific past time 'last Saturday' requires Past Simple 'bought'."},
                {"id": 2, "flawedSentence": "She has lived here since four years.", "options": ["She has lived here since four years.", "She has lived here for four years.", "She lives here since four years."], "correctIndex": 1, "explanation": "Durations of time take 'for': 'for four years'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "already", "targetSentence": "We have already seen that movie.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "We", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "have", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "seen that movie.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'already' between 'have' and the V3 participle 'seen'."
                },
                {
                    "id": 2, "adverb": "yet", "targetSentence": "I haven't received the package yet.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "I", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "haven't received the package", "isSlot": False}, {"id": 2, "isSlot": True}],
                    "correctSlot": 2, "explanation": "Place 'yet' at the very end of the negative sentence."
                }
            ],
            "masteryExam": [
                {"question": "What is the primary distinction between Past Simple and Present Perfect?", "options": ["Past Simple uses V3, Present Perfect uses V2.", "Past Simple anchors in a finished, closed past time; Present Perfect maintains an active connection or result in the present.", "Past Simple cannot be used in storytelling.", "There is no functional distinction."], "correct": 1, "level": "B1", "explanation": "Past Simple denotes closed past; Present Perfect connects past action to present reality."},
                {"question": "Complete: 'Where is Michael?' — 'He ________ to the bank; he'll be back in an hour.'", "options": ["has been", "has gone", "went to been", "was gone"], "correct": 1, "level": "B1", "explanation": "'Has gone' means he is currently away at the bank."},
                {"question": "Which question is grammatically incorrect in standard English?", "options": ["When did you buy that phone?", "When have you bought that phone?", "Where did you buy that phone?", "Why did you buy that phone?"], "correct": 1, "level": "B1", "explanation": "'When' requests an exact past time and cannot pair with Present Perfect."},
                {"question": "Choose the correct sentence with 'since':", "options": ["I have been a teacher since five years.", "I have been a teacher since 2019.", "I am a teacher since 2019.", "I was a teacher since 2019."], "correct": 1, "level": "B1", "explanation": "'Since' requires a specific starting point in time + Present Perfect."},
                {"question": "What is the past participle of the verb 'choose'?", "options": ["choosed", "chose", "chosen", "chusen"], "correct": 2, "level": "A2", "explanation": "choose → chose → chosen."},
                {"question": "Which sentence expresses an action inside an unfinished time period?", "options": ["I drank two coffees yesterday.", "I have had two coffees this morning (it's 10:00 AM).", "I drank two coffees two hours ago.", "I had drunk two coffees last night."], "correct": 1, "level": "B1", "explanation": "At 10:00 AM, the morning is still ongoing, making 'this morning' an open period."},
                {"question": "Identify the sentence with an error:", "options": ["They have lived here for a decade.", "She hasn't finished her dinner yet.", "He has went to the supermarket.", "Have you ever flown a helicopter?"], "correct": 2, "level": "A2", "explanation": "'Has went' is incorrect; use the V3 participle 'has gone'."},
                {"question": "What nuance does 'I have already done it' convey?", "options": ["It will happen tomorrow.", "It was completed earlier than expected or required.", "It is currently happening right now.", "It was never completed."], "correct": 1, "level": "B1", "explanation": "'Already' highlights earlier-than-expected completion."},
                {"question": "Complete: 'How many countries ________ you ________ in your lifetime?'", "options": ["did / visit", "have / visited", "do / visit", "were / visiting"], "correct": 1, "level": "B1", "explanation": "Life experience question up to now takes 'have visited'."},
                {"question": "What is the contraction of 'We have'?", "options": ["We'v", "We've", "We'h", "Weve"], "correct": 1, "level": "A2", "explanation": "'We have' contracts to 'We've'."}
            ]
        }
    }

    # =========================================================================
    # 9. FUTURE PERFECT SIMPLE (will have + V3)
    # =========================================================================
    tenses["futurePerfect"] = {
        "meta": {
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
            "summary": "Use this to show that an action will be completed BEFORE a specific deadline in the future."
        },
        "overview": {
            "definition": "The Future Perfect is used to look back from a point in the future and say that an action will already be finished and done before that future time.",
            "coreConcept": "Think of setting a deadline: 'By 5:00 PM tomorrow, it will be done!' You are standing in the future looking back at a completed mission.",
            "timelineInsight": "Imagine a deadline in the future (e.g. 2030 or 5:00 PM). The action finishes BEFORE that deadline line is reached.",
            "signalWords": [
                {"word": "By 5:00 PM / By next year", "example": "By 5:00 PM, I will have finished this report."},
                {"word": "By the time (time clause)", "example": "By the time you wake up, I will have left."},
                {"word": "Before (in the future)", "example": "I will have saved $5,000 before Christmas."},
                {"word": "In two years' time", "example": "In two years' time, we will have bought a house."},
                {"word": "By then", "example": "Don't worry, by then they will have arrived."},
                {"word": "Already (by future time)", "example": "She will have already left when you call."}
            ],
            "pillars": [
                {"icon": "CheckCircle2", "label": "Completed by Deadline", "desc": "An action 100% finished before a specific future time.", "color": "#f97316", "bg": "rgba(249, 115, 22, 0.08)", "border": "rgba(249, 115, 22, 0.25)"},
                {"icon": "Award", "label": "Future Milestones", "desc": "Reaching an achievement before a specific age or date.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
                {"icon": "Clock", "label": "Duration to a Future Point", "desc": "Stating how long something will have lasted by next year.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "ShieldCheck", "label": "Guarantees & Commitments", "desc": "Promising a client or boss that work will be completed on time.", "color": "#8b5cf6", "bg": "rgba(139, 92, 246, 0.08)", "border": "rgba(139, 92, 246, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "action_completed_before_deadline", "1. Actions Completed Before a Future Deadline", "Future Deadline", "CheckCircle2",
                "Showing that a task or project will be finished before an exact future hour or date.",
                "Whenever you use 'by' followed by a future time (by tomorrow, by 5:00 PM, by next week), use 'will have + V3'.",
                ("By 5:00 PM, I will have finished writing this entire report.", "The report will be completed before the clock hits 5:00.", "will have finished"),
                ("They will have built the new bridge by the end of next year.", "Construction will conclude before next year ends.", "will have built"),
                ("Will you have completed your homework by dinner time?", "Asking about deadline completion.", "Will you have completed"),
                "Pro tip: 'By 5 PM' means at 5 PM or anytime earlier — never later!"
            ),
            make_use_case(
                "future_milestones", "2. Reaching Milestones Before an Age or Date", "Milestones", "Award",
                "Talking about life goals and milestones you plan to achieve before reaching a certain age.",
                "Express personal ambition: 'Before I turn thirty, I will have visited twenty countries.'",
                ("Before she turns thirty, she will have published her first novel.", "Personal milestone before 30th birthday.", "will have published"),
                ("By next summer, I will have saved enough money to buy a car.", "Financial savings milestone.", "will have saved"),
                ("He will have graduated from medical school before his 25th birthday.", "Academic career milestone.", "will have graduated"),
                "This tense is the favorite tool of goal-setters and career planners."
            ),
            make_use_case(
                "duration_up_to_future", "3. Duration Continuing Up to a Future Point", "Duration to Future", "Clock",
                "Measuring how many years or months a state or marriage will have lasted by an upcoming anniversary.",
                "Use Future Perfect with 'for' and an upcoming date: 'Next month, we will have been married for ten years.'",
                ("Next June, my parents will have been married for thirty years.", "Marriage anniversary milestone.", "will have been"),
                ("By next Friday, I will have worked at this hospital for exactly five years.", "Work anniversary calculation.", "will have worked"),
                ("In December, she will have owned this house for a full decade.", "Property ownership milestone.", "will have owned"),
                "The focus is on celebrating the completed number of years at that future point."
            ),
            make_use_case(
                "by_the_time_clause", "4. Combining with 'By The Time' Clauses", "Time Clauses", "Calendar",
                "Stating what will already be done when another person arrives in the future.",
                "The rule: The main clause takes 'will have + V3'; the 'by the time' clause takes Present Simple!",
                ("By the time you wake up tomorrow, I will have already left for the airport.", "Departure happens before the person wakes up.", "will have already left ... wake up"),
                ("By the time the guests arrive, we will have prepared all the food.", "Cooking will be done before guests knock.", "will have prepared ... arrive"),
                ("The sun will have risen by the time we begin our morning run.", "Sunrise finishes before running starts.", "will have risen ... begin"),
                "Never put 'will' inside the 'by the time' clause! Say: 'By the time you wake up', NOT 'By the time you will wake up'."
            ),
            make_use_case(
                "confident_deduction", "5. Confident Deductions About What Has Probably Happened", "Deductions", "HelpCircle",
                "Making a confident guess that something has probably already happened by now.",
                "Just like Future Continuous can guess current actions, Future Perfect can guess completed actions right now.",
                ("Don't phone them now; they will have arrived at the hotel by now.", "Confident deduction about their journey.", "will have arrived"),
                ("You will have heard the news about the merger by now, surely?", "Assuming information has reached the listener.", "will have heard"),
                ("He will have read your email by this afternoon.", "Predicting completed reading.", "will have read"),
                "Here 'will have' expresses high certainty about a finished event."
            ),
            make_use_case(
                "guarantees_commitments", "6. Professional Guarantees & Client Promises", "Guarantees", "ShieldCheck",
                "Giving a firm guarantee to a manager, teacher, or client that work will be delivered.",
                "Saying 'We will have repaired your vehicle by Friday afternoon' provides strong confidence and clarity.",
                ("Our technicians will have resolved the network issue before the morning shift starts.", "Professional IT commitment.", "will have resolved"),
                ("I will have sent the finalized contracts before the end of the business day.", "Legal/business delivery promise.", "will have sent"),
                ("The chef will have plated all dishes before the banquet begins.", "Hospitality operational guarantee.", "will have plated"),
                "It gives a reassuring, polished impression in professional communication."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + WILL HAVE ('ll have) + Past Participle (V3)",
                "explanation": "Put 'will have' before the 3rd form (V3) of the verb. 'Will have' is the same for all subjects!",
                "table": [
                    {"subject": "All Subjects (I / You / He / She / We / They)", "auxiliary": "will have ('ll have)", "verb": "finished / arrived", "complement": "by 6:00 PM"}
                ],
                "examples": [
                    {"en": "I will have finished my degree by next summer.", "context": "Academic milestone"},
                    {"en": "She'll have received the package by noon.", "context": "Contraction: She'll have"}
                ]
            },
            "negative": {
                "formula": "Subject + WON'T HAVE (will not have) + Past Participle (V3)",
                "explanation": "Add 'not' between will and have: 'won't have' (will not have), followed by V3.",
                "table": [
                    {"subject": "All Subjects", "auxiliary": "won't have (will not have)", "verb": "completed", "complement": "the project by Friday"}
                ],
                "examples": [
                    {"en": "We won't have saved enough money by next month.", "context": "Negative expectation"},
                    {"en": "He won't have finished the exam before the bell.", "context": "Time constraint"}
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
                            {"q": "Will you have finished the report by 5 PM?", "a": "Yes, I will have. / No, I won't have."},
                            {"q": "Will they have arrived by then?", "a": "Yes, they will have."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + will + Subject + have + V3...?",
                        "examples": [
                            {"q": "How many books will you have read by the end of the year?", "a": "I will have read 25 books."},
                            {"q": "Where will they have moved by next spring?", "a": "They will have moved to Chicago."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Will she have left before we get there?", "context": "Inquiry about relative departure"},
                    {"en": "What will you have accomplished by age 30?", "context": "Wh- milestone inquiry"}
                ]
            },
            "verbToBe": {
                "formula": "Subject + will have been + adjective / noun",
                "explanation": "With the verb 'to be', use 'will have been'.",
                "table": [
                    {"subject": "All Subjects", "form": "will have been", "example": "By next week, I will have been here for a month."}
                ],
                "examples": [
                    {"en": "They will have been married for forty years next year.", "context": "Anniversary milestone"},
                    {"en": "She will have been in the hospital for a week tomorrow.", "context": "Duration of stay"}
                ]
            },
            "verbHave": {
                "formula": "Subject + will have had",
                "explanation": "Say 'will have had' when have is the main verb: 'By tonight, I will have had three interviews.'",
                "table": [
                    {"subject": "All Subjects", "form": "will have had", "example": "By the end of today, we will have had five meetings."}
                ],
                "examples": [
                    {"en": "She will have had this car for a decade by December.", "context": "Car ownership duration"},
                    {"en": "We will have had plenty of practice before the match.", "context": "Preparation milestone"}
                ]
            }
        },
        "spellingRules": {
            "title": "Forms of the Past Participle (V3)",
            "subtitle": "Forming the past participle for Future Perfect.",
            "rules": [
                {"ruleNumber": 1, "title": "Regular Verbs", "condition": "Most verbs", "ruleText": "Add -ed (finished, cleaned, saved).", "examples": ["finish → finished", "save → saved", "complete → completed"]},
                {"ruleNumber": 2, "title": "Irregular Verbs", "condition": "Irregular verbs", "ruleText": "Use the 3rd form (written, done, built, seen).", "examples": ["write → written", "build → built", "leave → left", "grow → grown"]}
            ],
            "phoneticTips": [
                {"ending": "'ll have pronunciation", "sound": "/ləv/ or /l hæv/", "tip": "In fast natural speech, 'I'll have' sounds like 'I-luhv': 'I'll have finished' → /aɪləv ˈfɪnɪʃt/."},
                {"ending": "won't have", "sound": "/woʊnt hæv/", "tip": "Say won't crisply before have."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Definitely", "percentage": 100, "color": "#10b981", "example": "I will definitely have finished by then."},
            {"adverb": "Already", "percentage": 90, "color": "#06b6d4", "example": "She will have already left when you call."},
            {"adverb": "Probably", "percentage": 80, "color": "#3b82f6", "example": "They will probably have arrived by 7 PM."},
            {"adverb": "Mostly", "percentage": 70, "color": "#8b5cf6", "example": "We will have mostly completed the tasks."},
            {"adverb": "Rarely", "percentage": 20, "color": "#f59e0b", "example": "You will rarely have seen such speed."},
            {"adverb": "Never", "percentage": 0, "color": "#ef4444", "example": "I will never have experienced anything like it."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN 'will' and 'have'",
                "formula": "Subject + WILL + [ADVERB] + HAVE + V3",
                "explanation": "Adverbs like definitely, probably, and already sit between 'will' and 'have'.",
                "examples": [{"bad": "I will have probably finished.", "good": "I will probably have finished."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: 'Already' can also sit between 'have' and V3",
                "formula": "Subject + will + have + ALREADY + V3",
                "explanation": "'Already' is flexible: you can say 'will already have finished' or 'will have already finished'.",
                "examples": [{"bad": "I will finished already have.", "good": "I will have already finished."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: In time clauses, use Present Simple",
                "formula": "BY THE TIME + Subject + Present Simple, Subject + will have + V3",
                "explanation": "Never use 'will' inside the 'by the time' clause.",
                "examples": [{"bad": "By the time you will arrive, I will have finished.", "good": "By the time you arrive, I will have finished."}]
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
                "explanation": "Use the 3rd form (V3) participle: go → went → GONE. 'Will have gone'."
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
                {"form": "+ Positive", "formula": "Subject + will have + V3", "exampleI": "I will have finished.", "exampleHe": "She will have graduated.", "memoryAnchor": "will have + Past Participle (V3)!"},
                {"form": "– Negative", "formula": "Subject + won't have + V3", "exampleI": "I won't have left.", "exampleHe": "They won't have arrived.", "memoryAnchor": "won't have + V3"},
                {"form": "? Yes/No Question", "formula": "Will + Subject + have + V3?", "exampleI": "Will you have eaten?", "exampleHe": "Will he have left?", "memoryAnchor": "Will + Subj + have + V3?"},
                {"form": "? Wh- Question", "formula": "Wh- Word + will + Subject + have + V3?", "exampleI": "What will you have done?", "exampleHe": "Where will they have gone?", "memoryAnchor": "Wh- + will + Subj + have + V3."}
            ],
            "spellingPills": [
                {"ending": "Regular", "change": "+ed", "example": "finish → finished"},
                {"ending": "Irregular V3", "change": "Memorize 3rd form", "example": "see → seen"},
                {"ending": "Never 'has'", "change": "Always 'will have'", "example": "She will have left"},
                {"ending": "Negative", "change": "won't have", "example": "We won't have saved"}
            ],
            "adverbGoldenFormula": "Subject + WILL + [Adverb] + HAVE + V3 Participle"
        },
        "exercises": {
            "quiz": [
                {"question": "Complete the sentence: 'By next December, our team ________ the new app.'", "options": ["will launch", "will have launched", "has launched", "launched"], "correct": 1, "explanation": "'By next December' sets a future deadline for completion: 'will have launched'."},
                {"question": "Can you say 'She will has finished by noon'?", "options": ["Yes, because she takes has.", "No, modal 'will' is always followed by base 'have'.", "Yes, in British English only.", "No, it must be 'had'."], "correct": 1, "explanation": "After 'will', always use bare base 'have' (will have finished)."},
                {"question": "Complete the time clause: 'By the time you ________ home, I will have cooked dinner.'", "options": ["will get", "get", "got", "will have got"], "correct": 1, "explanation": "Time clauses after 'by the time' use the Present Simple ('get')."},
                {"question": "What is the meaning of 'By 2030, scientists will have cured this disease'?", "options": ["They will start curing it in 2030.", "The cure will be completed prior to the year 2030.", "They are curing it right now.", "They will never cure it."], "correct": 1, "explanation": "Future Perfect states that the event will be completed before that future milestone."},
                {"question": "What is the correct negative form of 'We will have finished'?", "options": ["We will not have finished.", "We won't have finished.", "Both A and B are correct.", "We haven't will finished."], "correct": 2, "explanation": "Both 'will not have finished' and 'won't have finished' are correct."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "By 6:00 PM, she ________ (write) all twenty letters.", "correctAnswer": "will have written", "hint": "will have + V3 of write.", "explanation": "Future Perfect: 'will have written'."},
                {"id": 2, "sentence": "By the time we arrive at the party, they ________ (already / eat) dinner.", "correctAnswer": "will have already eaten", "hint": "will have already + V3 of eat.", "explanation": "Future Perfect with already: 'will have already eaten'."},
                {"id": 3, "sentence": "Will you ________ (finish) your degree by next summer?", "correctAnswer": "have finished", "hint": "After 'Will you', add 'have finished'.", "explanation": "Question formula: Will you have finished...?"}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["By", "tomorrow", "I", "will", "have", "left."], "correctOrder": ["By", "tomorrow", "I", "will", "have", "left."], "targetSentence": "By tomorrow I will have left.", "meaning": "Prior departure before tomorrow."},
                {"id": 2, "tokens": ["Will", "they", "have", "arrived", "by", "noon?"], "correctOrder": ["Will", "they", "have", "arrived", "by", "noon?"], "targetSentence": "Will they have arrived by noon?", "meaning": "Inquiry about deadline arrival."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "By the time the train will arrive, we will have bought our tickets.", "options": ["By the time the train will arrive, we will have bought our tickets.", "By the time the train arrives, we will have bought our tickets.", "By the time the train arrived, we will have bought our tickets."], "correctIndex": 1, "explanation": "Never use 'will' after 'by the time'. Use Present Simple: 'By the time the train arrives'."},
                {"id": 2, "flawedSentence": "He will has completed his training by Friday.", "options": ["He will has completed his training by Friday.", "He will have completed his training by Friday.", "He will have complete his training by Friday."], "correctIndex": 1, "explanation": "'Will' must be followed by base 'have', never 'has'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "definitely", "targetSentence": "I will definitely have finished by Friday.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "I", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "will", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "have finished by Friday.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'definitely' between 'will' and 'have finished'."
                },
                {
                    "id": 2, "adverb": "probably", "targetSentence": "They will probably have arrived by now.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "They", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "will", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "have arrived by now.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'probably' between 'will' and 'have arrived'."
                }
            ],
            "masteryExam": [
                {"question": "What does Future Perfect Simple primarily communicate?", "options": ["An ongoing action in the present", "An action that will be completed prior to a definite future milestone deadline", "A past action with no present relevance", "A recurring weekly habit"], "correct": 1, "level": "B2", "explanation": "It emphasizes completion before a future anchor point."},
                {"question": "Which time preposition is the classic trigger for Future Perfect?", "options": ["since", "by", "at the moment", "while"], "correct": 1, "level": "B2", "explanation": "'By' indicates a completion deadline ('by tomorrow', 'by 2030')."},
                {"question": "Identify the error: 'By next month, she will has lived here for three years.'", "options": ["'for three years' is wrong.", "'will has' is ungrammatical; modal auxiliaries require bare infinitive 'have'.", "'By next month' requires Past Simple.", "'lived' should be 'living'."], "correct": 1, "level": "B2", "explanation": "Modal 'will' must be followed by base form 'have'."},
                {"question": "Complete the time clause: 'We will have prepared everything before the guests ________.'", "options": ["will arrive", "arrive", "arrived", "have arrived"], "correct": 1, "level": "B2", "explanation": "Time clauses introduced by 'before' use the Present Simple ('arrive')."},
                {"question": "How can Future Perfect be used to discuss the present moment?", "options": ["It cannot discuss the present.", "To express high-confidence deductions about what has probably already happened ('They will have arrived by now').", "Only in legal contracts.", "To express conditional apologies."], "correct": 1, "level": "B2", "explanation": "'They will have arrived by now' expresses confident deduction about completion."},
                {"question": "What is the past participle of 'build'?", "options": ["builded", "built", "builden", "builted"], "correct": 1, "level": "A2", "explanation": "build → built → built."},
                {"question": "Choose the correct negative sentence:", "options": ["I won't have finished by noon.", "I haven't will finish by noon.", "I won't finished by noon.", "I will have not finish by noon."], "correct": 0, "level": "B1", "explanation": "Negative formula: Subject + won't have + V3."},
                {"question": "What does 'By 2035, he will have been a doctor for 20 years' emphasize?", "options": ["He will retire in 2035.", "The career duration accumulated up to that future milestone.", "He will start medical school in 2035.", "He will quit being a doctor."], "correct": 1, "level": "B2", "explanation": "It measures cumulative duration up to the future reference year."},
                {"question": "Select the correct question form:", "options": ["Will you have done the chores before dinner?", "Have you will done the chores before dinner?", "Will have you done the chores before dinner?", "Do you will have done the chores before dinner?"], "correct": 0, "level": "B1", "explanation": "Formula: Will + Subject + have + V3...?"},
                {"question": "Why is 'I will have bought a car next week' less precise than 'By next week, I will have bought a car'?", "options": ["'Next week' without 'by' refers to a point in time (Future Simple 'will buy'); 'by next week' provides the completion deadline.", "They mean identical things.", "'Next week' is grammatically forbidden with will.", "'Bought' cannot refer to cars."], "correct": 0, "level": "B2", "explanation": "'By' provides the definitive boundary needed for perfect aspect."},
            ]
        }
    }

    # =========================================================================
    # 10. PAST PERFECT CONTINUOUS (had been + verb-ing)
    # =========================================================================
    tenses["pastPerfectCont"] = {
        "meta": {
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
            "summary": "Use this to emphasize HOW LONG an ongoing activity had been happening before another event in the past."
        },
        "overview": {
            "definition": "The Past Perfect Continuous focuses on the duration or ongoing effort of an action that had been happening for a period of time BEFORE another past event took place.",
            "coreConcept": "Think of running a long marathon in the past: you were running, running, running, and then you crossed the past finish line. It explains why you were out of breath yesterday!",
            "timelineInsight": "A long, continuous wavy arrow in the past that leads directly up to a specific past moment.",
            "signalWords": [
                {"word": "For two hours / For days", "example": "She had been waiting for two hours before the bus arrived."},
                {"word": "Since morning", "example": "He had been working since 6:00 AM."},
                {"word": "All day / All night", "example": "It had been raining all night, so the road was flooded."},
                {"word": "Before (past event)", "example": "We had been driving for miles before we saw a gas station."},
                {"word": "How long had you been...?", "example": "How long had you been studying before the exam began?"},
                {"word": "Because (past cause)", "example": "His eyes were red because he had been crying."}
            ],
            "pillars": [
                {"icon": "Hourglass", "label": "Duration Before Past Event", "desc": "Emphasizing how much time had passed before another past moment.", "color": "#e11d48", "bg": "rgba(225, 29, 72, 0.08)", "border": "rgba(225, 29, 72, 0.25)"},
                {"icon": "Droplets", "label": "Past Visible Evidence", "desc": "Explaining past physical fatigue or visible results ('The ground was wet').", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "Activity", "label": "Interrupted Ongoing Past Habits", "desc": "An ongoing past routine that stopped when a new event happened.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "Split", "label": "Duration vs Result", "desc": "Contrasting with Past Perfect Simple: time spent vs finished product.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "duration_before_past_event", "1. Duration of an Ongoing Action Before a Past Event", "Past Duration", "Hourglass",
                "Emphasizing how long an ongoing action had lasted before another past moment happened.",
                "When you want to highlight the amount of time (for 2 hours, for 3 months) leading up to a past climax, use 'had been + -ing'.",
                ("She had been waiting for two hours before the train finally arrived.", "Waiting lasted 2 continuous hours before arrival.", "had been waiting"),
                ("We had been hiking for six hours before we reached the mountain lodge.", "Six hours of continuous mountain climbing.", "had been hiking"),
                ("How long had you been driving when the tire went flat?", "Inquiring about driving duration before blowout.", "had you been driving"),
                "The duration word ('for two hours') is what brings this tense to life."
            ),
            make_use_case(
                "past_cause_and_effect", "2. Cause and Effect of Visible Evidence in the Past", "Past Evidence", "Droplets",
                "Explaining why someone was exhausted, dirty, or why the ground was wet yesterday.",
                "Look at the past proof: 'The streets were soaking wet yesterday morning because it had been raining all night.'",
                ("The ground was wet because it had been raining heavily all morning.", "Past wet ground caused by ongoing rain.", "had been raining"),
                ("His hands were covered in grease because he had been fixing the engine.", "Physical proof of ongoing mechanical work.", "had been fixing"),
                ("She was completely exhausted because she had been studying without a break.", "Fatigue explained by continuous studying.", "had been studying"),
                "Even if the action had just stopped, the physical proof was obvious."
            ),
            make_use_case(
                "interrupted_past_habits", "3. Long-Term Habits Interrupted by a Past Change", "Past Habit Ended", "Activity",
                "An ongoing habit or lifestyle that continued for years until a past life event changed it.",
                "Use this to describe what someone had been doing for a long time before they stopped.",
                ("He had been smoking for twenty years before he decided to quit.", "Twenty years of ongoing habit ended by decision.", "had been smoking"),
                ("They had been living in Chicago for a decade before moving to Florida.", "Ten years of residency before relocation.", "had been living"),
                ("She had been practicing ballet since childhood before her knee injury.", "Long-term artistic dedication ended by injury.", "had been practicing"),
                "It honors the dedication and long duration before the change occurred."
            ),
            make_use_case(
                "repeated_past_struggles", "4. Repeated Struggles & Efforts Leading to a Climax", "Past Struggle", "Repeat",
                "Expressing frustration, relief, or exhaustion after trying repeatedly in the past.",
                "Describe continuous effort: 'We had been trying to solve that computer glitch for days before we discovered the fix.'",
                ("We had been trying to contact customer service all day before someone answered.", "Repeated phone attempts over many hours.", "had been trying"),
                ("Scientists had been searching for the shipwreck for decades before finding it.", "Decades of patient underwater exploration.", "had been searching"),
                ("He had been saving money for years to buy that violin.", "Continuous financial discipline.", "had been saving"),
                "It adds intense emotional depth to storytelling."
            ),
            make_use_case(
                "duration_vs_result", "5. Duration (Continuous) vs Finished Result (Simple)", "Contrast", "Split",
                "Distinguishing between how much time you spent doing something versus what you finished.",
                "Compare: 'I had been writing emails all morning' (focus on my time and effort) vs 'I had written five emails' (focus on the finished count).",
                ("I had been reading the book for two hours (focus on the time spent reading).", "Focus on the ongoing activity.", "had been reading"),
                ("I had read 80 pages of the book (focus on the completed milestone).", "Focus on the finished product.", "had read"),
                ("She had been baking all afternoon, so the kitchen was warm and smelled like cinnamon.", "Focus on the sensory activity.", "had been baking"),
                "If you count numbers (5 emails, 80 pages), use Past Perfect Simple. If you count hours, use Continuous!"
            ),
            make_use_case(
                "reported_speech_continuous", "6. Reported Speech of Ongoing Past Activities", "Reported Speech", "MessageSquare",
                "Reporting what someone said when they were in the middle of a continuous past activity.",
                "When someone says: 'I have been working hard', in reported speech it becomes: 'He said he had been working hard.'",
                ("She told me that she had been looking for her keys for an hour.", "Reported speech of 'I have been looking'.", "had been looking"),
                ("The suspect admitted that he had been hiding in the warehouse.", "Police report statement.", "had been hiding"),
                ("He explained that he had been driving in the wrong direction.", "Explaining an earlier travel mistake.", "had been driving"),
                "Smoothly shifts present continuous or present perfect continuous into the past narrative."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + HAD BEEN + Verb-ING",
                "explanation": "Put 'had been' before the verb with -ing. 'Had been' is identical for all persons (I, you, he, she, we, they)!",
                "table": [
                    {"subject": "All Subjects (I / You / He / She / We / They)", "auxiliary": "had been ('d been)", "verb": "working / waiting", "complement": "for hours"}
                ],
                "examples": [
                    {"en": "I had been working there for three years before the promotion.", "context": "Duration prior to event"},
                    {"en": "They'd been traveling all day.", "context": "Contraction: They had been → They'd been"}
                ]
            },
            "negative": {
                "formula": "Subject + HADN'T BEEN + Verb-ING",
                "explanation": "Add 'not' to had: 'hadn't been' (had not been), followed by verb-ing.",
                "table": [
                    {"subject": "All Subjects", "auxiliary": "hadn't been (had not been)", "verb": "sleeping", "complement": "well that week"}
                ],
                "examples": [
                    {"en": "I hadn't been feeling well before the trip.", "context": "Ongoing health state prior to journey"},
                    {"en": "We hadn't been expecting any visitors.", "context": "Surprise encounter"}
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
                            {"q": "Had you been waiting long before the bus arrived?", "a": "Yes, I had been. / About 40 minutes."},
                            {"q": "Had it been raining before the match began?", "a": "Yes, it had been."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + had + Subject + been + Verb-ING...?",
                        "examples": [
                            {"q": "How long had you been studying before the exam started?", "a": "I had been studying for three weeks."},
                            {"q": "What had they been doing in the workshop?", "a": "They had been building a wooden table."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "How long had she been working there when she quit?", "context": "Duration inquiry"},
                    {"en": "Where had he been living before moving here?", "context": "Wh- inquiry about past residence"}
                ]
            },
            "verbToBe": {
                "formula": "had been (Simple Past Perfect only)",
                "explanation": "Stative verbs like 'be' do NOT take continuous form (*had been being*). Always use Past Perfect Simple: 'I had been sick for three days' (NOT: had been being sick).",
                "table": [
                    {"subject": "Stative Rule", "example": "We had been friends for years before that fight (NOT: had been being)."}
                ],
                "examples": [
                    {"en": "He had been quiet all evening.", "context": "State uses Past Perfect Simple"},
                    {"en": "They had been at the beach for an hour.", "context": "Location uses simple had been"}
                ]
            },
            "verbHave": {
                "formula": "had been having (dynamic actions only)",
                "explanation": "Use 'had been having' only for actions like 'having lunch' or 'having problems'. For possession, say 'had had a car'.",
                "table": [
                    {"subject": "Action have", "form": "had been having", "example": "We had been having computer problems all morning."}
                ],
                "examples": [
                    {"en": "She had been having strange dreams for a week.", "context": "Ongoing experience"},
                    {"en": "I had had that bicycle since high school.", "context": "Possession uses had had"}
                ]
            }
        },
        "spellingRules": {
            "title": "Forming the -ing Participle",
            "subtitle": "Adding -ing to verbs for Past Perfect Continuous.",
            "rules": [
                {"ruleNumber": 1, "title": "Normal Verbs", "condition": "Most verbs", "ruleText": "Add -ing (waiting, raining, sleeping).", "examples": ["wait → waiting", "rain → raining", "work → working"]},
                {"ruleNumber": 2, "title": "Drop Silent -e", "condition": "Ends in -e", "ruleText": "Drop the -e before -ing (living, driving, smoking).", "examples": ["live → living", "drive → driving", "smoke → smoking"]},
                {"ruleNumber": 3, "title": "Double Consonant", "condition": "Short CVC", "ruleText": "Double the consonant (running, sitting, swimming).", "examples": ["run → running", "sit → sitting", "swim → swimming"]}
            ],
            "phoneticTips": [
                {"ending": "'d been", "sound": "/d bɪn/", "tip": "Pronounce 'I'd been' smoothly: /aɪd bɪn/."},
                {"ending": "hadn't been", "sound": "/ˈhædnt bɪn/", "tip": "Keep the 't' light and soft in conversation."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Constantly", "percentage": 100, "color": "#ef4444", "example": "He had been constantly complaining all morning."},
            {"adverb": "Continuously", "percentage": 90, "color": "#f59e0b", "example": "It had been continuously raining for 24 hours."},
            {"adverb": "Regularly", "percentage": 75, "color": "#3b82f6", "example": "She had been regularly visiting the gym before her injury."},
            {"adverb": "Quietly", "percentage": 50, "color": "#8b5cf6", "example": "They had been quietly preparing the surprise party."},
            {"adverb": "Rarely", "percentage": 20, "color": "#06b6d4", "example": "We had rarely been sleeping more than 4 hours a night."},
            {"adverb": "Never", "percentage": 0, "color": "#10b981", "example": "I had never been working so hard in all my life."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN 'had' and 'been'",
                "formula": "Subject + HAD + [ADVERB] + BEEN + Verb-ING",
                "explanation": "Adverbs like constantly, always, and secretly sit between 'had' and 'been'.",
                "examples": [{"bad": "I had been constantly working.", "good": "I had constantly been working. / I had been working constantly."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: 'For' and 'Since' go at the end of the clause",
                "formula": "Subject + had been + verb-ing + [FOR / SINCE + TIME]",
                "explanation": "Duration phrases sit naturally at the end of the continuous clause.",
                "examples": [{"bad": "I had for two hours been waiting.", "good": "I had been waiting for two hours."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: In questions, put the subject after 'Had'",
                "formula": "Had + Subject + BEEN + Verb-ING...?",
                "explanation": "The subject sits directly between 'Had' and 'been'.",
                "examples": [{"bad": "Had been you waiting?", "good": "Had you been waiting?"}]
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
                {"form": "+ Positive", "formula": "Subject + had been + verb-ing", "exampleI": "I had been studying.", "exampleHe": "He had been running.", "memoryAnchor": "had BEEN + verb-ING!"},
                {"form": "– Negative", "formula": "Subject + hadn't been + verb-ing", "exampleI": "I hadn't been sleeping.", "exampleHe": "They hadn't been listening.", "memoryAnchor": "hadn't BEEN + ING"},
                {"form": "? Yes/No Question", "formula": "Had + Subject + been + verb-ing?", "exampleI": "Had you been crying?", "exampleHe": "Had she been driving?", "memoryAnchor": "Had + Subject + been + ING?"},
                {"form": "? Wh- Question", "formula": "Wh- Word + had + Subject + been + -ing?", "exampleI": "How long had you been waiting?", "exampleHe": "What had they been doing?", "memoryAnchor": "How long + had + Subj + been + ING."}
            ],
            "spellingPills": [
                {"ending": "Regular", "change": "+ing", "example": "wait → waiting"},
                {"ending": "Silent -e", "change": "Drop e + ing", "example": "live → living"},
                {"ending": "Short CVC", "change": "Double letter", "example": "run → running"},
                {"ending": "Contraction", "change": "I had been → I'd been", "example": "I'd been working"}
            ],
            "adverbGoldenFormula": "Subject + HAD + [Adverb] + BEEN + Verb-ING"
        },
        "exercises": {
            "quiz": [
                {"question": "Her eyes were puffy and red because she ________.", "options": ["cried", "had been crying", "has been crying", "was cried"], "correct": 1, "explanation": "Visible past proof of an ongoing emotional action: 'had been crying'."},
                {"question": "How long ________ you ________ when the train finally pulled in?", "options": ["had / been waiting", "were / waiting", "have / been waiting", "did / wait"], "correct": 0, "explanation": "Inquiring about duration up to a past event: 'had you been waiting'."},
                {"question": "Why is 'I had been knowing her for five years before we married' wrong?", "options": ["'Know' is a stative verb that resists continuous form.", "It lacks a subject.", "'Before' cannot be used with past perfect.", "Marriage must use Future Simple."], "correct": 0, "explanation": "'Know' is stative and cannot take -ing. Use 'I had known her'."},
                {"question": "Complete: 'The roads were dangerous because it ________ all night.'", "options": ["snowed", "had been snowing", "is snowing", "has been snowed"], "correct": 1, "explanation": "Past ongoing weather causing dangerous condition: 'had been snowing'."},
                {"question": "What is the correct negative form?", "options": ["She had not been paying attention.", "She hadn't been paying attention.", "Both A and B are correct.", "She wasn't been paying attention."], "correct": 2, "explanation": "Both 'had not been paying' and 'hadn't been paying' are correct."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "He was drenched in sweat because he ________ (run) in the afternoon sun.", "correctAnswer": "had been running", "hint": "had been + run-ning (double n).", "explanation": "Past Perfect Continuous: 'had been running'."},
                {"id": 2, "sentence": "We ________ (study) for four hours before we decided to take a coffee break.", "correctAnswer": "had been studying", "hint": "had been + study-ing.", "explanation": "Duration of study before break: 'had been studying'."},
                {"id": 3, "sentence": "How long had they ________ (live) in that cottage before the roof leaked?", "correctAnswer": "been living", "hint": "been + liv-ing.", "explanation": "Formula: had they been living...?"}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["She", "had", "been", "working", "all", "day."], "correctOrder": ["She", "had", "been", "working", "all", "day."], "targetSentence": "She had been working all day.", "meaning": "Extended past labor."},
                {"id": 2, "tokens": ["How", "long", "had", "you", "been", "waiting?"], "correctOrder": ["How", "long", "had", "you", "been", "waiting?"], "targetSentence": "How long had you been waiting?", "meaning": "Duration inquiry."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "I had been writing three complete books before I turned 30.", "options": ["I had been writing three complete books before I turned 30.", "I had written three complete books before I turned 30.", "I have written three complete books before I turned 30."], "correctIndex": 1, "explanation": "Counting finished objects ('three complete books') requires Past Perfect Simple 'had written'."},
                {"id": 2, "flawedSentence": "The ground was wet because it was been raining.", "options": ["The ground was wet because it was been raining.", "The ground was wet because it had been raining.", "The ground was wet because it has been raining."], "correctIndex": 1, "explanation": "The auxiliary is strictly 'had': 'it had been raining'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "constantly", "targetSentence": "He had constantly been working on the engine.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "He", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "had", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "been working on the engine.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'constantly' between 'had' and 'been working'."
                },
                {
                    "id": 2, "adverb": "quietly", "targetSentence": "They had quietly been planning the move.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "They", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "had", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "been planning the move.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'quietly' between 'had' and 'been planning'."
                }
            ],
            "masteryExam": [
                {"question": "What is the primary conceptual focus of Past Perfect Continuous?", "options": ["A finished past count of items", "The duration and ongoing activity of an action leading up to a past reference moment", "A timeless mathematical fact", "A future spontaneous promise"], "correct": 1, "level": "B2", "explanation": "It emphasizes duration, process, and ongoing effort in the past."},
                {"question": "Why is 'I had been reading 200 pages before bedtime' less natural than 'I had read 200 pages'?", "options": ["Books cannot be read in continuous aspect.", "Specifying a completed quantified output demands the Simple aspect, not Continuous.", "200 is too large a number for English grammar.", "'Bedtime' requires Present Perfect."], "correct": 1, "level": "B2", "explanation": "Quantified completed products require simple aspect ('had read 200 pages')."},
                {"question": "Complete: 'When the teacher entered, the students ________ quietly for twenty minutes.'", "options": ["worked", "were working", "had been working", "have worked"], "correct": 2, "level": "B2", "explanation": "Duration up to a past event takes Past Perfect Continuous: 'had been working'."},
                {"question": "How does Past Perfect Continuous explain physical states in the past?", "options": ["By showing that an ongoing activity produced visible evidence or fatigue ('His hands were dirty because he had been gardening').", "By predicting future health outcomes.", "By stating medical rules.", "It cannot explain physical states."], "correct": 0, "level": "B2", "explanation": "It demonstrates the continuous activity that generated visible past evidence."},
                {"question": "Which verb CANNOT be used in the Past Perfect Continuous?", "options": ["study", "belong", "run", "paint"], "correct": 1, "level": "B1", "explanation": "'Belong' is a stative verb indicating ownership and resists continuous forms."},
                {"question": "What is the correct contracted form of 'They had been'?", "options": ["They'd been", "Theyd'been", "They'been", "They had'b"], "correct": 0, "level": "A2", "explanation": "'They had been' contracts to 'They'd been'."},
                {"question": "Choose the correctly spelled -ing form of 'run':", "options": ["runing", "running", "runeing", "runnying"], "correct": 1, "level": "A2", "explanation": "Double the consonant for short CVC: run → running."},
                {"question": "Complete: 'How long ________ before the rescue team arrived?'", "options": ["had they been trapped", "had they been surviving", "did they survive", "were they survived"], "correct": 1, "level": "B2", "explanation": "Continuous ongoing survival effort: 'had they been surviving'."},
                {"question": "Identify the sentence that emphasizes the duration of a habit ended by a past event:", "options": ["I had lived in Spain.", "I had been living in Spain for five years before I moved to London.", "I live in Spain.", "I will live in Spain."], "correct": 1, "level": "B2", "explanation": "Highlights the five-year duration of residence prior to moving."},
                {"question": "What is the negative auxiliary in Past Perfect Continuous?", "options": ["wasn't been", "didn't been", "hadn't been", "haven't been"], "correct": 2, "level": "A2", "explanation": "Negative formula uses 'hadn't been'."}
            ]
        }
    }

    return tenses

if __name__ == '__main__':
    t = get_part2_tenses()
    print(f"Part 2 ready with {len(t)} tenses: {list(t.keys())}")
