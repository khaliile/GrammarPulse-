# -*- coding: utf-8 -*-
"""
Part 3: Simplified, clear, beginner-friendly explanations for:
- presentPerfectCont
- futurePerfectCont
- conditionals
- passiveVoice
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

def get_part3_tenses():
    tenses = {}

    # =========================================================================
    # 11. PRESENT PERFECT CONTINUOUS (have/has been + verb-ing)
    # =========================================================================
    tenses["presentPerfectCont"] = {
        "meta": {
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
            "summary": "Use this for actions that started in the past and are still happening now, or just stopped with visible proof."
        },
        "overview": {
            "definition": "The Present Perfect Continuous focuses on an ongoing action that started in the past and is still continuing right now, or an action that just stopped a moment ago with visible evidence.",
            "coreConcept": "Focus on the time and ongoing effort: 'How long have you been doing that?' It explains why your shoes are muddy or why you are out of breath right now!",
            "timelineInsight": "A wavy ongoing line stretching from the past, crossing into NOW, and possibly continuing into the future.",
            "signalWords": [
                {"word": "How long have you been...?", "example": "How long have you been learning English?"},
                {"word": "For (duration)", "example": "I have been waiting for forty minutes."},
                {"word": "Since (starting time)", "example": "She has been working here since 9:00 AM."},
                {"word": "Lately / Recently", "example": "I have been sleeping badly lately."},
                {"word": "All morning / All day", "example": "It has been raining all day."},
                {"word": "These days", "example": "He has been exercising a lot these days."}
            ],
            "pillars": [
                {"icon": "Clock", "label": "Duration Up to Right Now", "desc": "Emphasizing how long you have been actively doing something.", "color": "#06b6d4", "bg": "rgba(6, 182, 212, 0.08)", "border": "rgba(6, 182, 212, 0.25)"},
                {"icon": "Droplets", "label": "Visible Evidence Now", "desc": "Explaining why someone is sweaty, dirty, or tired right at this moment.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
                {"icon": "Flame", "label": "Temporary Recent Routines", "desc": "Habits or activities taking place over the last few weeks.", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "AlertTriangle", "label": "Annoyance & Complaints", "desc": "Complaining about ongoing disturbances ('Who has been using my pen?').", "color": "#ef4444", "bg": "rgba(239, 68, 68, 0.08)", "border": "rgba(239, 68, 68, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "action_continuing_now", "1. Actions That Started in the Past and Continue Now", "Ongoing Action", "Clock",
                "Showing that an activity started earlier and is still in progress at this moment.",
                "When you tell someone how long you've been doing something, use 'have been + -ing' with 'for' or 'since'.",
                ("I have been studying English for two hours (and I'm still studying).", "Study session underway for 2 hours.", "have been studying"),
                ("She has been working on this painting since this morning.", "Painting process continuing right now.", "has been working"),
                ("It has been raining non-stop since yesterday evening.", "Continuous rain continuing into now.", "has been raining"),
                "Never say 'I am studying for 2 hours'! In English, duration up to now requires 'have been studying'."
            ),
            make_use_case(
                "recent_action_visible_evidence", "2. Action Just Stopped with Obvious Proof Right Now", "Visible Proof", "Droplets",
                "An activity that ended a minute ago, but left obvious physical evidence you can see or feel right now.",
                "Look at someone breathing heavily or sweating: 'You are out of breath! Have you been running?'",
                ("You are breathing heavily! Have you been running?", "Immediate physical evidence of recent exertion.", "Have you been running"),
                ("Her hands are covered in flour because she has been baking bread.", "Visible flour evidence of recent baking.", "has been baking"),
                ("The streets are soaking wet because it has been raining.", "Current puddle evidence of recent rain.", "has been raining"),
                "The action may be finished, but the physical signs are 100% visible right now."
            ),
            make_use_case(
                "how_long_inquiries", "3. Asking 'How Long...?' Questions", "Inquiry", "HelpCircle",
                "Asking people how much time they have spent on an ongoing activity.",
                "This is one of the most common conversational questions in everyday English.",
                ("How long have you been waiting for me?", "Friendly question on arrival.", "How long have you been waiting"),
                ("How long has she been playing the piano?", "Inquiring about someone's years of practice.", "How long has she been playing"),
                ("How long have they been living in this neighborhood?", "Inquiring about length of residency.", "How long have they been living"),
                "Formula: How long + have/has + person + been + verb-ing?"
            ),
            make_use_case(
                "temporary_recent_habits", "4. Temporary Habits & Routines in Recent Weeks", "Recent Habit", "Flame",
                "Habits or routines that you have been doing lately, but that are temporary.",
                "Use with 'lately' or 'recently' to describe your current lifestyle trends.",
                ("I have been going to the gym four times a week lately.", "Recent fitness routine.", "have been going"),
                ("She has been reading a lot of historical fiction recently.", "Recent reading interest.", "has been reading"),
                ("He has been working late every night this week.", "Temporary work schedule.", "has been working"),
                "It shows a temporary lifestyle phase, not necessarily a permanent lifelong habit."
            ),
            make_use_case(
                "annoyance_complaints", "5. Expressing Frustration or Complaints", "Frustration", "AlertTriangle",
                "Asking who has been messing with your stuff, or complaining about repeated actions.",
                "The continuous aspect emphasizes the repeated, ongoing nature of the annoying disturbance.",
                ("Who has been messing with my computer settings?!", "Frustrated discovery of tampered settings.", "has been messing"),
                ("Someone has been drinking my orange juice from the fridge!", "Disgruntled discovery of missing juice.", "has been drinking"),
                ("Why have you been making so much noise upstairs all morning?", "Neighborly noise complaint.", "have you been making"),
                "It adds strong emotional emphasis to your complaint."
            ),
            make_use_case(
                "process_vs_result", "6. Process vs Finished Product", "Process Focus", "Split",
                "Focusing on the activity and effort, rather than whether it is 100% finished.",
                "Compare: 'I have painted the kitchen' (finished! color is done) vs 'I have been painting the kitchen' (in progress, might not be done yet).",
                ("I have been writing my thesis all weekend (focus on the time spent writing).", "Ongoing academic work.", "have been writing"),
                ("I have written three chapters (focus on the finished result).", "Completed output count.", "have written"),
                ("She has been repairing her car (her hands are dirty; car may still need work).", "Focus on the mechanical labor.", "has been repairing"),
                "If you want to emphasize your sweat and hard work, use the continuous form!"
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + HAVE / HAS BEEN ('ve been / 's been) + Verb-ING",
                "explanation": "Use 'have been' for I, you, we, they; use 'has been' for he, she, it. Then add verb-ing.",
                "table": [
                    {"subject": "I / You / We / They", "auxiliary": "have been ('ve been)", "verb": "working", "complement": "since morning"},
                    {"subject": "He / She / It", "auxiliary": "has been ('s been)", "verb": "working", "complement": "since morning"}
                ],
                "examples": [
                    {"en": "I have been learning Spanish for six months.", "context": "Ongoing study duration"},
                    {"en": "He's been practicing the violin all afternoon.", "context": "Contraction: He has been → He's been"}
                ]
            },
            "negative": {
                "formula": "Subject + HAVEN'T / HASN'T BEEN + Verb-ING",
                "explanation": "Put 'haven't been' or 'hasn't been' before the verb with -ing.",
                "table": [
                    {"subject": "I / You / We / They", "auxiliary": "haven't been", "verb": "sleeping", "complement": "well lately"},
                    {"subject": "He / She / It", "auxiliary": "hasn't been", "verb": "feeling", "complement": "well this week"}
                ],
                "examples": [
                    {"en": "I haven't been feeling well recently.", "context": "Health status over recent days"},
                    {"en": "They haven't been paying attention.", "context": "Ongoing lack of focus"}
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
                            {"q": "Have you been waiting long?", "a": "No, just about five minutes!"},
                            {"q": "Has it been raining?", "a": "Yes, the grass is completely wet."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + have/has + Subject + been + Verb-ING...?",
                        "examples": [
                            {"q": "How long have you been studying?", "a": "I've been studying for three hours."},
                            {"q": "What have you been doing all day?", "a": "I've been cleaning the house."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Have you been exercising lately?", "context": "Recent lifestyle inquiry"},
                    {"en": "Where have you been hiding?", "context": "Playful inquiry about someone's absence"}
                ]
            },
            "verbToBe": {
                "formula": "have / has been (Simple Present Perfect only)",
                "explanation": "Stative verbs like 'be' NEVER take continuous form (*have been being*). Always use Present Perfect Simple: 'I have been a teacher for 10 years' (NOT: have been being).",
                "table": [
                    {"subject": "Stative Rule", "example": "She has been sick for three days (NOT: has been being)."}
                ],
                "examples": [
                    {"en": "We have been friends since elementary school.", "context": "State of friendship uses have been"},
                    {"en": "He has been at the library since noon.", "context": "Location uses simple has been"}
                ]
            },
            "verbHave": {
                "formula": "have/has been having (dynamic actions only)",
                "explanation": "You can say 'have been having fun' or 'having difficulties', but NEVER 'having a car' (possession). For possession, use 'have had'.",
                "table": [
                    {"subject": "Dynamic have", "form": "have been having", "example": "We have been having internet issues all morning."}
                ],
                "examples": [
                    {"en": "I have been having doubts about the plan.", "context": "Ongoing mental state"},
                    {"en": "I have had this watch for ten years.", "context": "Possession must use have had"}
                ]
            }
        },
        "spellingRules": {
            "title": "Forming the -ing Participle",
            "subtitle": "Spelling rules for the continuous participle.",
            "rules": [
                {"ruleNumber": 1, "title": "Normal Verbs", "condition": "Most verbs", "ruleText": "Add -ing (learn → learning, wait → waiting).", "examples": ["learn → learning", "wait → waiting", "clean → cleaning"]},
                {"ruleNumber": 2, "title": "Drop Silent -e", "condition": "Ends in -e", "ruleText": "Drop -e before -ing (bake → baking, write → writing).", "examples": ["bake → baking", "write → writing", "drive → driving"]},
                {"ruleNumber": 3, "title": "Double Consonant", "condition": "Short CVC", "ruleText": "Double the consonant (run → running, sit → sitting).", "examples": ["run → running", "sit → sitting", "swim → swimming"]}
            ],
            "phoneticTips": [
                {"ending": "'ve been / 's been", "sound": "/v bɪn/ or /z bɪn/", "tip": "In fluent everyday English, 'I've been' sounds like 'I-vin': /aɪv bɪn/."},
                {"ending": "been", "sound": "/bɪn/", "tip": "Most American speakers pronounce 'been' identical to 'bin'."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Constantly", "percentage": 100, "color": "#ef4444", "example": "He has been constantly checking his phone."},
            {"adverb": "Regularly", "percentage": 85, "color": "#10b981", "example": "I have been regularly practicing meditation."},
            {"adverb": "Frequently", "percentage": 70, "color": "#3b82f6", "example": "She has been frequently calling her parents."},
            {"adverb": "Lately", "percentage": 50, "color": "#8b5cf6", "example": "We have been feeling tired lately."},
            {"adverb": "Hardly", "percentage": 20, "color": "#f59e0b", "example": "I have hardly been sleeping this week."},
            {"adverb": "Never", "percentage": 0, "color": "#64748b", "example": "They have never been working so efficiently."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN have/has and been",
                "formula": "Subject + HAVE / HAS + [ADVERB] + BEEN + Verb-ING",
                "explanation": "Adverbs like constantly and regularly sit right between have/has and been.",
                "examples": [{"bad": "I have been constantly working.", "good": "I have constantly been working. (Both acceptable, but between have and been is very natural!)"}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: 'Lately' and 'Recently' sit at the end",
                "formula": "Subject + have/has been + verb-ing + [LATELY]",
                "explanation": "'Lately' and 'recently' naturally sound best at the very end of the sentence.",
                "examples": [{"bad": "I lately have been working.", "good": "I have been working hard lately."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: Duration phrases (for/since) go at the end",
                "formula": "Subject + have been + verb-ing + [FOR / SINCE ...]",
                "explanation": "Phrases like 'for three hours' or 'since Monday' sit at the end of the clause.",
                "examples": [{"bad": "I have for three hours been studying.", "good": "I have been studying for three hours."}]
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
                {"form": "+ Positive", "formula": "Subject + have / has been + verb-ing", "exampleI": "I have been working.", "exampleHe": "She has been studying.", "memoryAnchor": "have/has BEEN + verb-ING!"},
                {"form": "– Negative", "formula": "Subject + haven't / hasn't been + -ing", "exampleI": "I haven't been sleeping.", "exampleHe": "He hasn't been listening.", "memoryAnchor": "haven't / hasn't BEEN + ING"},
                {"form": "? Yes/No Question", "formula": "Have / Has + Subject + been + verb-ing?", "exampleI": "Have you been waiting?", "exampleHe": "Has she been crying?", "memoryAnchor": "Have/Has + Subj + been + ING?"},
                {"form": "? Wh- Question", "formula": "Wh- Word + have/has + Subject + been + -ing?", "exampleI": "How long have you been studying?", "exampleHe": "What has he been doing?", "memoryAnchor": "How long + have/has + Subj + been + ING."}
            ],
            "spellingPills": [
                {"ending": "Regular", "change": "+ing", "example": "wait → waiting"},
                {"ending": "Silent -e", "change": "Drop e + ing", "example": "bake → baking"},
                {"ending": "Short CVC", "change": "Double letter", "example": "run → running"},
                {"ending": "Contraction", "change": "I have been → I've been", "example": "I've been working"}
            ],
            "adverbGoldenFormula": "Subject + HAVE / HAS + [Adverb] + BEEN + Verb-ING"
        },
        "exercises": {
            "quiz": [
                {"question": "You look completely exhausted! What ________ you ________?", "options": ["have / been doing", "did / do", "were / doing", "are / done"], "correct": 0, "explanation": "Visible present evidence of recent ongoing exertion takes: 'have you been doing'."},
                {"question": "How long ________ you ________ English?", "options": ["are / learning", "have / been learning", "do / learn", "were / learning"], "correct": 1, "explanation": "Duration up to the present moment requires: 'have you been learning'."},
                {"question": "Which sentence has an error with a stative verb?", "options": ["She has been studying for the exam.", "I have been knowing him for ten years.", "They have been painting the kitchen.", "We have been waiting for the bus."], "correct": 1, "explanation": "'Know' is a state verb and cannot take continuous aspect (*have been knowing). Use 'have known'."},
                {"question": "Complete: 'It ________ non-stop since 6:00 AM.'", "options": ["has been raining", "is raining", "rained", "was raining"], "correct": 0, "explanation": "Continuing action from past into present with 'since' takes: 'has been raining'."},
                {"question": "What is the meaning of 'I have been painting the bedroom'?", "options": ["The bedroom is 100% finished.", "The focus is on the ongoing process and effort; it might not be finished yet.", "I will paint it tomorrow.", "I never painted it."], "correct": 1, "explanation": "Present Perfect Continuous highlights the ongoing activity rather than a completed outcome."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "Her eyes are tired because she ________ (read) on her phone for hours.", "correctAnswer": "has been reading", "hint": "has been + read-ing.", "explanation": "Present Perfect Continuous: 'has been reading'."},
                {"id": 2, "sentence": "I ________ (wait) for this bus for over forty minutes!", "correctAnswer": "have been waiting", "hint": "have been + wait-ing.", "explanation": "Duration up to right now: 'have been waiting'."},
                {"id": 3, "sentence": "How long has your brother ________ (work) as a software engineer?", "correctAnswer": "been working", "hint": "been + work-ing.", "explanation": "Formula: has he been working...?"}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["I", "have", "been", "studying", "all", "morning."], "correctOrder": ["I", "have", "been", "studying", "all", "morning."], "targetSentence": "I have been studying all morning.", "meaning": "Extended ongoing labor."},
                {"id": 2, "tokens": ["How", "long", "have", "you", "been", "waiting?"], "correctOrder": ["How", "long", "have", "you", "been", "waiting?"], "targetSentence": "How long have you been waiting?", "meaning": "Inquiry about duration."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "I am living in this city for six years now.", "options": ["I am living in this city for six years now.", "I have been living in this city for six years now.", "I live in this city since six years now."], "correctIndex": 1, "explanation": "Duration up to now with 'for six years' requires Present Perfect Continuous 'have been living'."},
                {"id": 2, "flawedSentence": "He has been write three emails this morning.", "options": ["He has been write three emails this morning.", "He has written three emails this morning.", "He is writing three emails this morning."], "correctIndex": 1, "explanation": "Counting finished objects ('three emails') requires Present Perfect Simple 'has written'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "constantly", "targetSentence": "He has constantly been checking his watch.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "He", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "has", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "been checking his watch.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'constantly' between 'has' and 'been checking'."
                },
                {
                    "id": 2, "adverb": "lately", "targetSentence": "We have been exercising a lot lately.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "We", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "have been exercising a lot", "isSlot": False}, {"id": 2, "isSlot": True}],
                    "correctSlot": 2, "explanation": "Place 'lately' at the very end of the sentence."
                }
            ],
            "masteryExam": [
                {"question": "What is the primary conceptual distinction between Present Perfect Simple and Present Perfect Continuous?", "options": ["Simple emphasizes completed result/quantity; Continuous emphasizes duration, process, or visible evidence of recent activity.", "Simple is only for past; Continuous is only for future.", "Simple is colloquial; Continuous is only formal.", "There is no difference."], "correct": 0, "level": "B1", "explanation": "Simple focuses on achievement/product; Continuous focuses on duration/activity."},
                {"question": "Complete: 'Your hands are filthy! What ________ you ________?'", "options": ["did / do", "have / been doing", "are / doing", "were / done"], "correct": 1, "level": "B1", "explanation": "Physical evidence of recent activity triggers Present Perfect Continuous: 'have you been doing'."},
                {"question": "Why is 'I have been understanding this lesson for an hour' incorrect?", "options": ["'Understand' is a stative cognitive verb and does not admit continuous aspect.", "It needs 'since' instead of 'for'.", "'Lesson' is plural.", "The tense should be Future Simple."], "correct": 0, "level": "B1", "explanation": "Cognitive verbs like understand cannot take -ing."},
                {"question": "Choose the correct sentence to express an ongoing living situation:", "options": ["I live here for five years.", "I am living here since five years.", "I have been living here for five years.", "I was living here since five years."], "correct": 2, "level": "B1", "explanation": "Started in the past and continuing into the present with 'for' takes Present Perfect Continuous."},
                {"question": "Identify the nuance of 'Who has been drinking my coffee?'", "options": ["A formal request for coffee", "Annoyance at discovering someone drank part of it", "A scientific observation of coffee", "A coffee advertisement"], "correct": 1, "level": "B1", "explanation": "Continuous aspect conveys irritation at ongoing or incomplete consumption."},
                {"question": "Complete: 'She is exhausted because she ________ for the marathon all week.'", "options": ["trained", "has been training", "trains", "was trained"], "correct": 1, "level": "B1", "explanation": "Recent continuous exertion explaining current exhaustion: 'has been training'."},
                {"question": "What is the contracted form of 'He has been'?", "options": ["He's been", "Heb'een", "He'been", "He has'b"], "correct": 0, "level": "A2", "explanation": "'He has been' contracts to 'He's been'."},
                {"question": "How do you ask someone how long they have been waiting?", "options": ["How long are you waiting?", "How long have you been waiting?", "How long do you wait?", "How long did you wait?"], "correct": 1, "level": "A2", "explanation": "Standard duration inquiry: 'How long have you been waiting?'"},
                {"question": "Which time word correctly pairs with a specific starting date (e.g. 2021)?", "options": ["for", "since", "during", "ago"], "correct": 1, "level": "A2", "explanation": "'Since' specifies the exact starting point in time."},
                {"question": "Select the sentence focusing on a completed quantified output:", "options": ["I have been writing emails all morning.", "I have written five emails this morning.", "I was writing emails.", "I will be writing emails."], "correct": 1, "level": "B1", "explanation": "'I have written five emails' focuses on the completed count of five items."}
            ]
        }
    }

    # =========================================================================
    # 12. FUTURE PERFECT CONTINUOUS (will have been + verb-ing)
    # =========================================================================
    tenses["futurePerfectCont"] = {
        "meta": {
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
            "summary": "Use this to emphasize HOW LONG an ongoing activity will have lasted up to a future milestone."
        },
        "overview": {
            "definition": "The Future Perfect Continuous is used to look ahead to a future date and celebrate or measure how long an ongoing activity will have been continuing up to that moment.",
            "coreConcept": "Imagine standing at your 10-year work anniversary next December: you can look back and proudly say, 'By next December, I will have been working here for ten years!'",
            "timelineInsight": "An ongoing continuous line that starts in the past or present and continues forward until it meets a specific milestone in the future.",
            "signalWords": [
                {"word": "By next year / By next month", "example": "By next year, I will have been teaching for 15 years."},
                {"word": "By the time (future event)", "example": "By the time we arrive, we will have been driving for 8 hours."},
                {"word": "For (duration)", "example": "She will have been studying medicine for six years."},
                {"word": "In December", "example": "In December, they will have been living together for 50 years."},
                {"word": "How long will you have been...?", "example": "How long will you have been working here when you retire?"},
                {"word": "By 2030", "example": "By 2030, our team will have been developing clean energy for a decade."}
            ],
            "pillars": [
                {"icon": "Hourglass", "label": "Duration to a Future Point", "desc": "Measuring accumulated continuous time up to a future milestone.", "color": "#6366f1", "bg": "rgba(99, 102, 241, 0.08)", "border": "rgba(99, 102, 241, 0.25)"},
                {"icon": "Award", "label": "Career & Life Anniversaries", "desc": "Celebrating major work, marriage, and personal endurance milestones.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
                {"icon": "Droplets", "label": "Explaining Future Fatigue", "desc": "Explaining why someone will be exhausted when they arrive in the future.", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "Calendar", "label": "Endurance in Big Projects", "desc": "Highlighting persistent effort in scientific, tech, or academic projects.", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "duration_to_future_milestone", "1. Measuring Duration Up to a Future Milestone", "Future Milestone", "Hourglass",
                "Stating how many years, months, or hours an ongoing activity will have lasted by a future date.",
                "Whenever you want to calculate continuous time up to an upcoming calendar date, use 'will have been + -ing'.",
                ("By next December, I will have been working at this company for exactly ten years.", "Celebrating 10 years of continuous employment.", "will have been working"),
                ("Next month, they will have been living in this house for twenty years.", "Celebrating two decades of residency.", "will have been living"),
                ("By midnight, the band will have been playing music for four straight hours.", "Measuring continuous musical performance.", "will have been playing"),
                "The combination of 'by + date' and 'for + duration' is the signature of this tense."
            ),
            make_use_case(
                "explaining_future_fatigue", "2. Explaining Future Fatigue & Physical States", "Future Fatigue", "Droplets",
                "Explaining why someone will be tired, hungry, or dizzy when they reach a future destination.",
                "Just like Past Perfect Continuous explains past tiredness, Future Perfect Continuous explains future tiredness!",
                ("When we reach the summit, we will have been hiking for seven hours, so we'll be exhausted.", "Explaining why hikers will be tired at the summit.", "will have been hiking"),
                ("He will be very sleepy when you meet him; he will have been traveling for 24 hours.", "Journey duration explaining future jet-lag.", "will have been traveling"),
                ("The chef will be tired tonight because she will have been cooking all day for the banquet.", "Banquet cooking duration explaining fatigue.", "will have been cooking"),
                "It paints a realistic picture of the physical effort involved."
            ),
            make_use_case(
                "combining_with_by_the_time", "3. Combining with 'By The Time' Time Clauses", "Time Clauses", "Calendar",
                "Connecting an ongoing action with another future event that will happen.",
                "The rule: Main clause takes 'will have been + -ing'; the 'by the time' clause takes Present Simple!",
                ("By the time the guests arrive, she will have been cooking all morning.", "Cooking will have lasted all morning when guests knock.", "will have been cooking ... arrive"),
                ("By the time you wake up, I will have been driving across the state for three hours.", "Driving duration prior to morning wake-up.", "will have been driving ... wake up"),
                ("They will have been waiting for two hours by the time the gates open.", "Wait time before gate opening.", "will have been waiting ... open"),
                "Never put 'will' inside the 'by the time' clause!"
            ),
            make_use_case(
                "academic_and_career_training", "4. Academic, Sports & Medical Training Milestones", "Career Training", "Award",
                "Highlighting the incredible dedication and training required before graduating or competing.",
                "Use this to describe the long years of practice leading up to an exam, graduation, or Olympic games.",
                ("By graduation day, she will have been studying medicine for six grueling years.", "Six years of medical studies before graduation.", "will have been studying"),
                ("Before the Olympics begin, the athletes will have been training for four years.", "Olympic preparation cycle.", "will have been training"),
                ("He will have been researching this virus for a decade before publishing his breakthrough.", "Ten years of scientific devotion.", "will have been researching"),
                "It emphasizes persistence, resilience, and hard work."
            ),
            make_use_case(
                "duration_vs_completed_result", "5. Duration (Continuous) vs Completed Quantity (Simple)", "Contrast", "Split",
                "Contrasting the continuous time spent with the finished number of products in the future.",
                "Compare: 'By 5 PM I will have been writing for 6 hours' (focus on duration) vs 'By 5 PM I will have written 20 pages' (focus on page count).",
                ("By evening, I will have been painting for eight hours (focus on the time spent).", "Focus on labor duration.", "will have been painting"),
                ("By evening, I will have painted the entire living room (focus on the finished room).", "Focus on completed output.", "will have painted"),
                ("By next month, our factory will have been producing electric cars for three years.", "Focus on duration of production.", "will have been producing"),
                "Remember: for counts of items, use Future Perfect Simple; for hours or years, use Continuous!"
            ),
            make_use_case(
                "long_term_dedication", "6. Showing Lifelong Dedication & Relationships", "Relationships", "Heart",
                "Celebrating profound long-term relationships, partnerships, and community service.",
                "Use this during anniversary toasts and retirement speeches to honor lifelong loyalty.",
                ("Next week, my grandparents will have been loving each other for fifty years.", "Golden anniversary celebration.", "will have been loving"),
                ("When he retires next month, he will have been serving our community for forty years.", "Honoring 40 years of public service.", "will have been serving"),
                ("By the end of this tour, the choir will have been performing together for twenty years.", "Celebrating musical harmony and longevity.", "will have been performing"),
                "It adds a touching and dignified tone to speeches and ceremonies."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Subject + WILL HAVE BEEN ('ll have been) + Verb-ING",
                "explanation": "Put 'will have been' before the verb with -ing. 'Will have been' is identical for all subjects!",
                "table": [
                    {"subject": "All Subjects (I / You / He / She / We / They)", "auxiliary": "will have been ('ll have been)", "verb": "working / living", "complement": "here for 10 years"}
                ],
                "examples": [
                    {"en": "By next June, I will have been teaching for 20 years.", "context": "Career milestone"},
                    {"en": "She'll have been driving for six hours by noon.", "context": "Contraction: She'll have been"}
                ]
            },
            "negative": {
                "formula": "Subject + WON'T HAVE BEEN + Verb-ING",
                "explanation": "Add 'not' between will and have: 'won't have been' (will not have been), followed by verb-ing.",
                "table": [
                    {"subject": "All Subjects", "auxiliary": "won't have been", "verb": "waiting", "complement": "for very long"}
                ],
                "examples": [
                    {"en": "Don't worry, we won't have been waiting more than ten minutes.", "context": "Reassuring a friend"},
                    {"en": "She won't have been working there long enough to get full benefits.", "context": "Policy constraint"}
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
                            {"q": "Will you have been living here for five years by next May?", "a": "Yes, I will have been!"},
                            {"q": "Will they have been traveling long when they land?", "a": "About twelve hours."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "How long will + Subject + have been + Verb-ING...?",
                        "examples": [
                            {"q": "How long will you have been working here next month?", "a": "I will have been working here for three years."},
                            {"q": "How long will she have been studying by the time she graduates?", "a": "For six full years."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "How long will you have been driving by midnight?", "context": "Inquiry about travel duration"},
                    {"en": "Will he have been practicing enough before the concert?", "context": "Inquiry about preparation time"}
                ]
            },
            "verbToBe": {
                "formula": "will have been (Simple Future Perfect only)",
                "explanation": "Stative verbs like 'be' NEVER take continuous form (*will have been being*). Always use Future Perfect Simple: 'By next year, I will have been a doctor for 10 years' (NOT: will have been being).",
                "table": [
                    {"subject": "Stative Rule", "example": "By next week, we will have been in Spain for a month (NOT: will have been being)."}
                ],
                "examples": [
                    {"en": "She will have been a manager for two years by June.", "context": "Career status uses Future Perfect Simple"},
                    {"en": "They will have been married for 25 years next spring.", "context": "Marriage state milestone"}
                ]
            },
            "verbHave": {
                "formula": "will have been having (dynamic actions only)",
                "explanation": "You can say 'will have been having treatment' (medical action), but for possession say 'will have had a car'.",
                "table": [
                    {"subject": "Dynamic have", "form": "will have been having", "example": "He will have been having physical therapy for three months."}
                ],
                "examples": [
                    {"en": "We will have been having weekly meetings for six months.", "context": "Scheduled recurring meeting series"},
                    {"en": "I will have had this laptop for five years by Christmas.", "context": "Possession uses will have had"}
                ]
            }
        },
        "spellingRules": {
            "title": "Forming the -ing Participle",
            "subtitle": "Spelling rules for the continuous participle.",
            "rules": [
                {"ruleNumber": 1, "title": "Add -ing", "condition": "Standard verbs", "ruleText": "Add -ing (teach → teaching, study → studying).", "examples": ["teach → teaching", "study → studying", "play → playing"]},
                {"ruleNumber": 2, "title": "Drop Silent -e", "condition": "Ends in -e", "ruleText": "Drop -e before -ing (live → living, drive → driving).", "examples": ["live → living", "drive → driving", "serve → serving"]},
                {"ruleNumber": 3, "title": "Double Consonant", "condition": "Short CVC", "ruleText": "Double the consonant (run → running, sit → sitting).", "examples": ["run → running", "sit → sitting", "swim → swimming"]}
            ],
            "phoneticTips": [
                {"ending": "'ll have been", "sound": "/ləv bɪn/", "tip": "In fluent English, 'I'll have been' flows quickly as /aɪləv bɪn/."},
                {"ending": "won't have been", "sound": "/woʊnt hæv bɪn/", "tip": "Articulate 'won't' clearly before have been."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Continuously", "percentage": 100, "color": "#10b981", "example": "We will continuously have been improving our services."},
            {"adverb": "Steadily", "percentage": 90, "color": "#06b6d4", "example": "She will steadily have been progressing for five years."},
            {"adverb": "Regularly", "percentage": 75, "color": "#3b82f6", "example": "They will regularly have been meeting every month."},
            {"adverb": "Quietly", "percentage": 50, "color": "#8b5cf6", "example": "He will quietly have been preparing his masterpiece."},
            {"adverb": "Barely", "percentage": 20, "color": "#f59e0b", "example": "We will barely have been waiting ten minutes."},
            {"adverb": "Never", "percentage": 0, "color": "#ef4444", "example": "They will never have been working so intensely before."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN 'will' and 'have'",
                "formula": "Subject + WILL + [ADVERB] + HAVE BEEN + Verb-ING",
                "explanation": "Adverbs like continuously, steadily, and probably sit between 'will' and 'have been'.",
                "examples": [{"bad": "I will have been probably working.", "good": "I will probably have been working."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: In time clauses, use Present Simple",
                "formula": "BY THE TIME + Subject + Present Simple, Subject + will have been + verb-ing",
                "explanation": "Never use 'will' inside the 'by the time' clause.",
                "examples": [{"bad": "By the time you will arrive, I will have been working.", "good": "By the time you arrive, I will have been working."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: Duration phrases (for/since) go at the end",
                "formula": "Subject + will have been + verb-ing + [FOR 10 YEARS]",
                "explanation": "The duration phrase sits naturally at the end of the clause.",
                "examples": [{"bad": "I will for ten years have been working.", "good": "I will have been working for ten years."}]
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
                {"form": "+ Positive", "formula": "Subject + will have been + verb-ing", "exampleI": "I will have been working.", "exampleHe": "She will have been studying.", "memoryAnchor": "will have BEEN + verb-ING!"},
                {"form": "– Negative", "formula": "Subject + won't have been + verb-ing", "exampleI": "I won't have been waiting.", "exampleHe": "They won't have been sleeping.", "memoryAnchor": "won't have BEEN + ING"},
                {"form": "? Yes/No Question", "formula": "Will + Subject + have been + verb-ing?", "exampleI": "Will you have been working?", "exampleHe": "Will she have been driving?", "memoryAnchor": "Will + Subj + have been + ING?"},
                {"form": "? Wh- Question", "formula": "How long will + Subject + have been + -ing?", "exampleI": "How long will you have been living here?", "exampleHe": "How long will she have been studying?", "memoryAnchor": "How long will + Subj + have been + ING."}
            ],
            "spellingPills": [
                {"ending": "Regular", "change": "+ing", "example": "work → working"},
                {"ending": "Silent -e", "change": "Drop e + ing", "example": "live → living"},
                {"ending": "Short CVC", "change": "Double letter", "example": "run → running"},
                {"ending": "Always 'have'", "change": "Never 'has'", "example": "She will have been"}
            ],
            "adverbGoldenFormula": "Subject + WILL + [Adverb] + HAVE BEEN + Verb-ING"
        },
        "exercises": {
            "quiz": [
                {"question": "By next June, Dr. Watson ________ at this medical clinic for 25 years.", "options": ["will work", "will have been working", "has been working", "is working"], "correct": 1, "explanation": "Measuring duration up to a future milestone: 'will have been working'."},
                {"question": "Complete the time clause: 'By the time the rescue plane arrives, the sailors ________ on the island for three weeks.'", "options": ["will have been surviving", "will survive", "survived", "have been survived"], "correct": 0, "explanation": "Duration up to a future rescue event: 'will have been surviving'."},
                {"question": "Why is 'By 2030, I will have been having this house for ten years' incorrect for ownership?", "options": ["'Have' denoting possession is stative and cannot take -ing.", "2030 is too far away.", "'House' is plural.", "It must take will have been had."], "correct": 0, "explanation": "'Have' meaning possession cannot take continuous aspect. Say 'will have had'."},
                {"question": "What is the correct form after 'by the time you...' in a future time clause?", "options": ["by the time you will wake up", "by the time you wake up", "by the time you will have woken up", "by the time you are waking up"], "correct": 1, "explanation": "Time clauses after 'by the time' take the Present Simple: 'by the time you wake up'."},
                {"question": "What is the correct negative form of 'They will have been waiting'?", "options": ["They will not have been waiting.", "They won't have been waiting.", "Both A and B are correct.", "They haven't will been waiting."], "correct": 2, "explanation": "Both 'will not have been waiting' and 'won't have been waiting' are correct."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "By next spring, I ________ (study) violin for ten years.", "correctAnswer": "will have been studying", "hint": "will have been + study-ing.", "explanation": "Future Perfect Continuous: 'will have been studying'."},
                {"id": 2, "sentence": "When we reach Rome, we ________ (drive) for eight straight hours.", "correctAnswer": "will have been driving", "hint": "will have been + driv-ing.", "explanation": "Travel duration explaining future fatigue: 'will have been driving'."},
                {"id": 3, "sentence": "How long will they ________ (live) in Chicago by the time they move?", "correctAnswer": "have been living", "hint": "have been + liv-ing.", "explanation": "Question formula: will they have been living...?"}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["By", "December", "I", "will", "have", "been", "working", "here", "ten", "years."], "correctOrder": ["By", "December", "I", "will", "have", "been", "working", "here", "ten", "years."], "targetSentence": "By December I will have been working here ten years.", "meaning": "Career decade milestone."},
                {"id": 2, "tokens": ["How", "long", "will", "you", "have", "been", "waiting?"], "correctOrder": ["How", "long", "will", "you", "have", "been", "waiting?"], "targetSentence": "How long will you have been waiting?", "meaning": "Future duration inquiry."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "By next year, she will has been living here for a decade.", "options": ["By next year, she will has been living here for a decade.", "By next year, she will have been living here for a decade.", "By next year, she will been living here for a decade."], "correctIndex": 1, "explanation": "'Will' requires base 'have', never 'has'."},
                {"id": 2, "flawedSentence": "By 5:00 PM, I will have been finishing all three reports.", "options": ["By 5:00 PM, I will have been finishing all three reports.", "By 5:00 PM, I will have finished all three reports.", "By 5:00 PM, I will finish all three reports."], "correctIndex": 1, "explanation": "Counting finished reports ('all three reports') requires Future Perfect Simple 'will have finished'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "probably", "targetSentence": "They will probably have been driving for five hours.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "They", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "will", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "have been driving for five hours.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'probably' between 'will' and 'have been driving'."
                },
                {
                    "id": 2, "adverb": "steadily", "targetSentence": "We will steadily have been progressing.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "We", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "will", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "have been progressing.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'steadily' between 'will' and 'have been progressing'."
                }
            ],
            "masteryExam": [
                {"question": "What is the primary conceptual role of the Future Perfect Continuous?", "options": ["To express an immediate decision right now", "To emphasize the accumulated duration of an ongoing action up to a specific future reference point", "To describe an action that happened before another past event", "To state a timeless universal truth"], "correct": 1, "level": "C1", "explanation": "It projects an ongoing process forward and measures its accumulated duration at a future milestone."},
                {"question": "Why is 'By next month, I will have been writing 5 novels' ungrammatical?", "options": ["Novel writing is forbidden in continuous aspect.", "Specifying a completed quantified output requires Future Perfect Simple ('will have written'), not Continuous.", "5 is too small a number.", "It needs 'since' instead of 'by'."], "correct": 1, "level": "C1", "explanation": "Quantified completed products require simple aspect ('will have written 5 novels')."},
                {"question": "Complete: 'When she retires next spring, Professor Adams ________ for 40 years.'", "options": ["will teach", "will have been teaching", "teaches", "has taught"], "correct": 1, "level": "C1", "explanation": "Career duration milestone up to retirement: 'will have been teaching'."},
                {"question": "How does Future Perfect Continuous explain future physical states?", "options": ["By showing that a continuous future activity will cause fatigue or exhaustion ('We will be exhausted because we will have been hiking for 8 hours').", "By predicting medical diagnoses.", "By promising good health.", "It cannot explain physical states."], "correct": 0, "level": "C1", "explanation": "The duration of exertion explains the future physical state upon arrival."},
                {"question": "Choose the correctly constructed time clause:", "options": ["By the time the flight will land", "By the time the flight lands", "By the time the flight will have landed", "By the time the flight landed"], "correct": 1, "level": "B2", "explanation": "'By the time' clauses take the Present Simple ('lands')."},
                {"question": "What is the auxiliary sequence for Future Perfect Continuous?", "options": ["will + be + verb-ing", "will + have + been + verb-ing", "will + had + been + verb-ing", "would + have + been + verb-ing"], "correct": 1, "level": "B2", "explanation": "Sequence: will + have + been + verb-ing."},
                {"question": "Which verb CANNOT be used in Future Perfect Continuous?", "options": ["work", "possess", "drive", "study"], "correct": 1, "level": "B2", "explanation": "'Possess' is a stative ownership verb and resists continuous aspect."},
                {"question": "What is the negative contraction of 'will not have been'?", "options": ["won't have been", "willn't have been", "wont have been", "haven't will been"], "correct": 0, "level": "B2", "explanation": "Contraction is 'won't have been'."},
                {"question": "Complete: 'By 2035, the space probe ________ through deep space for three decades.'", "options": ["will travel", "will have been traveling", "is traveling", "has been traveling"], "correct": 1, "level": "C1", "explanation": "Long continuous cosmic voyage duration: 'will have been traveling'."},
                {"question": "What nuance does 'How long will you have been waiting by the time the gates open?' carry?", "options": ["A prediction of arrival", "An inquiry into the anticipated duration of the wait before the gates open", "A demand to open the gates immediately", "A historical question"], "correct": 1, "level": "C1", "explanation": "Calculates the expected wait duration up to that future moment."}
            ]
        }
    }

    # =========================================================================
    # 13. CONDITIONALS SYSTEM (Zero, 1st, 2nd, 3rd, Mixed)
    # =========================================================================
    tenses["conditionals"] = {
        "meta": {
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
            "summary": "Master all 5 conditional patterns: 100% scientific truths, real future possibilities, imaginary dreams, past regrets, and mixed time."
        },
        "overview": {
            "definition": "Conditionals are 'If... then...' sentences that explain what happens, what could happen, or what we imagine happening under certain conditions.",
            "coreConcept": "Think of it as 'Cause & Effect'. If condition A is met, result B happens. From 100% scientific laws to wild lottery dreams and learning from past mistakes!",
            "timelineInsight": "A branching decision tree with paths leading from facts (Zero), to real possibilities (1st), to daydreaming (2nd), to past regrets (3rd), and mixed time.",
            "signalWords": [
                {"word": "If", "example": "If it rains, we will stay at home."},
                {"word": "Unless (= If not)", "example": "Unless you hurry, we will miss the train."},
                {"word": "Provided that / As long as", "example": "You can borrow my car as long as you drive safely."},
                {"word": "If I were you", "example": "If I were you, I would take the job."},
                {"word": "In case", "example": "Take an umbrella in case it rains."},
                {"word": "Even if", "example": "I will go even if it snows."}
            ],
            "pillars": [
                {"icon": "Flame", "label": "Zero: Scientific Truths", "desc": "100% automatic facts: If you heat ice, it melts.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
                {"icon": "Compass", "label": "1st: Real Future Possibilities", "desc": "Real plans & warnings: If it rains tomorrow, we will stay home.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "Sparkles", "label": "2nd: Imaginary Present Dreams", "desc": "Unreal fantasies: If I won a million dollars, I would travel the world.", "color": "#a855f7", "bg": "rgba(168, 85, 247, 0.08)", "border": "rgba(168, 85, 247, 0.25)"},
                {"icon": "History", "label": "3rd: Past Regrets", "desc": "Imagining a different past: If I had studied, I would have passed.", "color": "#ef4444", "bg": "rgba(239, 68, 68, 0.08)", "border": "rgba(239, 68, 68, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "zero_conditional", "1. Zero Conditional — 100% Scientific Facts & Truths", "Zero Conditional", "Flame",
                "Talking about scientific laws, physical rules, and things that are always 100% true.",
                "Formula: If + Present Simple, Present Simple. Both verbs stay in simple present because it's a permanent law of nature.",
                ("If you heat water to 100 degrees Celsius, it boils.", "Universal physical law of boiling water.", "heat ... boils"),
                ("If you don't water plants, they die.", "Biological fact of plant care.", "don't water ... die"),
                ("If you mix red and yellow, you get orange.", "Color chemistry certainty.", "mix ... get"),
                "You can replace 'if' with 'when' here without changing the meaning ('When you heat water, it boils')."
            ),
            make_use_case(
                "first_conditional", "2. First Conditional — Real & Possible Future Situations", "1st Conditional", "Compass",
                "Talking about real possibilities in the future and their likely results.",
                "Formula: If + Present Simple, WILL + base verb. Real condition in the present, realistic result in the future.",
                ("If it rains tomorrow, we will cancel the picnic.", "Realistic weather contingency plan.", "rains ... will cancel"),
                ("If you study hard tonight, you will pass the exam tomorrow.", "Direct connection between study effort and success.", "study ... will pass"),
                ("Unless you leave right now, you will miss your flight.", "Urgent travel warning with unless.", "leave ... will miss"),
                "Golden rule: Never put 'will' inside the 'if' clause! Say 'If it rains', NOT 'If it will rain'."
            ),
            make_use_case(
                "second_conditional", "3. Second Conditional — Imaginary Dreams & Daydreams", "2nd Conditional", "Sparkles",
                "Imagining an unreal or impossible situation right now in the present or future.",
                "Formula: If + Past Simple, WOULD + base verb. You use the past tense not for past time, but to show it is a dream!",
                ("If I won a million dollars, I would buy an island.", "Wild financial fantasy.", "won ... would buy"),
                ("If I had superpowers, I would fly across the world.", "Impossible superhero daydream.", "had ... would fly"),
                ("If animals could talk, what would they say?", "Playful hypothetical question.", "could talk ... would they say"),
                "We use past tense here to show distance from reality (it's not true right now)."
            ),
            make_use_case(
                "third_conditional", "4. Third Conditional — Past Regrets & Missed Chances", "3rd Conditional", "History",
                "Looking back at a past event and imagining what would have happened if things had been different.",
                "Formula: If + HAD + V3, WOULD HAVE + V3. The past is finished and cannot be changed.",
                ("If I had studied harder, I would have passed the exam.", "Past regret about exam preparation.", "had studied ... would have passed"),
                ("If we had caught that earlier train, we wouldn't have been late.", "Travel regret.", "had caught ... wouldn't have been"),
                ("If you had told me earlier, I could have helped you.", "Regret about communication.", "had told ... could have helped"),
                "This is the tense of 'if only' and learning from past mistakes."
            ),
            make_use_case(
                "mixed_conditionals", "5. Mixed Conditionals — Past Actions Affecting Present Reality", "Mixed Conditional", "GitMerge",
                "Connecting a past event to how your life looks right now today.",
                "Formula: If + HAD + V3 (past condition), WOULD + base verb (present result).",
                ("If I had gone to medical school, I would be a doctor right now.", "Past education choice affecting current job today.", "had gone ... would be"),
                ("If I hadn't missed my flight yesterday, I would be in Paris right now.", "Yesterday's mistake affecting current location.", "hadn't missed ... would be"),
                ("If she had saved money in her 20s, she would own a house today.", "Past financial habit affecting present ownership.", "had saved ... would own"),
                "It bridges past history directly into your present lifestyle today."
            ),
            make_use_case(
                "giving_advice_were_you", "6. Giving Advice with 'If I Were You'", "Giving Advice", "HeartHandshake",
                "Giving friendly, polite advice to a friend who is facing a difficult choice.",
                "In formal English, always say 'If I were you' (NOT 'If I was you') followed by 'I would...'.",
                ("If I were you, I would accept that job offer immediately.", "Direct friendly career recommendation.", "If I were you ... would accept"),
                ("If I were in your shoes, I would talk to the manager directly.", "Empathic workplace advice.", "If I were ... would talk"),
                ("I wouldn't worry about it if I were you.", "Calming reassurance to a stressed friend.", "wouldn't worry ... were you"),
                "'If I were you' is one of the most natural, respectful phrases in the English language."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "If + condition clause, result clause (or vice-versa without comma)",
                "explanation": "If the 'If' clause comes first, put a comma between the clauses. If the result clause comes first, NO comma is needed!",
                "table": [
                    {"type": "Zero", "ifClause": "If you freeze water,", "resultClause": "it turns into ice."},
                    {"type": "1st", "ifClause": "If you invite me,", "resultClause": "I will come to your party."},
                    {"type": "2nd", "ifClause": "If I had more time,", "resultClause": "I would travel more."},
                    {"type": "3rd", "ifClause": "If I had known,", "resultClause": "I would have helped you."}
                ],
                "examples": [
                    {"en": "If it rains tomorrow, we will stay at home.", "context": "1st Conditional with comma"},
                    {"en": "We will stay at home if it rains tomorrow.", "context": "No comma when 'if' is in the middle"}
                ]
            },
            "negative": {
                "formula": "Using 'Unless' (= If not) or negative auxiliaries",
                "explanation": "'Unless' means 'except if' or 'if not'. Example: 'Unless you hurry' = 'If you don't hurry'.",
                "table": [
                    {"subject": "Unless clause", "formula": "Unless + positive verb", "example": "Unless you leave now, you'll be late."},
                    {"subject": "If... not", "formula": "If you don't leave now", "example": "If you don't leave now, you'll be late."}
                ],
                "examples": [
                    {"en": "Unless it rains, we will play soccer.", "context": "Unless meaning if it doesn't rain"},
                    {"en": "If I didn't love you, I wouldn't tell you the truth.", "context": "2nd Conditional negative"}
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
                            {"q": "What will you do if you miss the train?", "a": "I'll take a taxi."},
                            {"q": "Will you call me if you need help?", "a": "Yes, I will!"}
                        ]
                    },
                    {
                        "type": "2nd Conditional Question",
                        "formula": "What would you do if you won the lottery?",
                        "examples": [
                            {"q": "Where would you live if you could live anywhere?", "a": "I would live in New Zealand."},
                            {"q": "Would you buy that car if you had the money?", "a": "Yes, I would."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "What would you have done if you had been there?", "context": "3rd Conditional question"},
                    {"en": "What happens if you press this red button?", "context": "Zero Conditional inquiry"}
                ]
            },
            "verbToBe": {
                "formula": "If I / he / she / it WERE (Subjunctive in 2nd Conditional)",
                "explanation": "In 2nd Conditionals, standard English uses 'were' for ALL subjects (If I were, if he were, if it were). Colloquially people sometimes say 'was', but 'were' is preferred on tests and in professional writing!",
                "table": [
                    {"subject": "Subjunctive Were", "formula": "If I were / If she were", "example": "If she were here, she would know what to do."}
                ],
                "examples": [
                    {"en": "If I were taller, I would play basketball.", "context": "Unreal physical state with were"},
                    {"en": "If it were easy, everyone would do it.", "context": "Philosophy of challenge"}
                ]
            },
            "verbHave": {
                "formula": "If I had had (3rd Conditional)",
                "explanation": "In 3rd Conditionals, 'had had' is the correct past perfect of have: 'If I had had enough money, I would have bought it.'",
                "table": [
                    {"subject": "3rd Conditional Have", "form": "If + had had", "example": "If we had had more time, we would have visited the museum."}
                ],
                "examples": [
                    {"en": "If I had a car, I would drive to work. (2nd conditional)", "context": "Present daydream with had"},
                    {"en": "If I had had a car yesterday, I would have driven. (3rd conditional)", "context": "Past regret with had had"}
                ]
            }
        },
        "spellingRules": {
            "title": "Punctuation & Comma Rules for Conditionals",
            "subtitle": "The golden comma rule for conditional sentences.",
            "rules": [
                {"ruleNumber": 1, "title": "If-Clause First = COMMA", "condition": "Sentence starts with If", "ruleText": "Put a comma between the 'if' clause and the result clause.", "examples": ["If it rains, we will stay home.", "If I were rich, I would travel.", "If you study, you will pass."]},
                {"ruleNumber": 2, "title": "Result Clause First = NO COMMA", "condition": "Sentence starts with result", "ruleText": "Do NOT use a comma when the result clause comes first.", "examples": ["We will stay home if it rains.", "I would travel if I were rich.", "You will pass if you study."]},
                {"ruleNumber": 3, "title": "Unless Spelling", "condition": "Unless clauses", "ruleText": "Do not put a negative word after unless ('Unless you go', NOT 'Unless you don't go').", "examples": ["Unless you hurry (NOT: Unless you don't hurry)", "Unless it rains (NOT: Unless it doesn't rain)"]}
            ],
            "phoneticTips": [
                {"ending": "'d have pronunciation", "sound": "/dəv/", "tip": "In fast natural speech, 'would have' contracts to 'would've' (/wʊdəv/)."},
                {"ending": "If I were you", "sound": "/ɪf aɪ wɜːr juː/", "tip": "Blend smoothly: 'If-I-were-you'."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Always", "percentage": 100, "color": "#10b981", "example": "If you freeze water, it always turns to ice."},
            {"adverb": "Usually", "percentage": 85, "color": "#06b6d4", "example": "If it rains on Sunday, we usually stay indoors."},
            {"adverb": "Probably", "percentage": 75, "color": "#3b82f6", "example": "If you ask him nicely, he will probably agree."},
            {"adverb": "Maybe", "percentage": 50, "color": "#8b5cf6", "example": "If I have time tomorrow, maybe I will stop by."},
            {"adverb": "Rarely", "percentage": 20, "color": "#f59e0b", "example": "If you eat healthily, you will rarely get sick."},
            {"adverb": "Never", "percentage": 0, "color": "#ef4444", "example": "If you don't try, you will never know."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Adverbs sit inside the result clause",
                "formula": "If + condition, Subject + WILL / WOULD + [ADVERB] + Verb",
                "explanation": "Frequency adverbs usually sit in the main result clause, between the modal and the verb.",
                "examples": [{"bad": "If it rains, we stay always home.", "good": "If it rains, we always stay home. / we will always stay home."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: 'Definitely' and 'Probably' go after will/would",
                "formula": "Subject + will / would + [PROBABLY] + base verb",
                "explanation": "Place 'probably' or 'definitely' right after will or would in affirmative result clauses.",
                "examples": [{"bad": "If you invite him, he probably will come.", "good": "If you invite him, he will probably come."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: In negative results, 'probably' goes before won't/wouldn't",
                "formula": "Subject + [PROBABLY] + won't / wouldn't + verb",
                "explanation": "Special rule: put 'probably' before the negative contraction.",
                "examples": [{"bad": "If it rains, we won't probably go.", "good": "If it rains, we probably won't go."}]
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
                {"form": "Zero (100% Fact)", "formula": "If + Present Simple, Present Simple", "exampleI": "If you heat ice, it melts.", "exampleHe": "If it rains, grass gets wet.", "memoryAnchor": "Scientific certainty (Present + Present)"},
                {"form": "1st (Real Future)", "formula": "If + Present Simple, will + base", "exampleI": "If you invite me, I'll come.", "exampleHe": "If he studies, he will pass.", "memoryAnchor": "Real possibility (Present + will)"},
                {"form": "2nd (Dream / Fantasy)", "formula": "If + Past Simple, would + base", "exampleI": "If I won, I would travel.", "exampleHe": "If he knew, he would help.", "memoryAnchor": "Unreal daydream (Past + would)"},
                {"form": "3rd (Past Regret)", "formula": "If + had + V3, would have + V3", "exampleI": "If I had known, I'd have called.", "exampleHe": "If he had run, he would have caught it.", "memoryAnchor": "Past regret (had V3 + would have V3)"}
            ],
            "spellingPills": [
                {"ending": "If First", "change": "Use a comma (,)", "example": "If it rains, we stay"},
                {"ending": "Result First", "change": "No comma", "example": "We stay if it rains"},
                {"ending": "Unless", "change": "Positive verb only", "example": "Unless you hurry"},
                {"ending": "Advice", "change": "If I were you", "example": "If I were you, I'd go"}
            ],
            "adverbGoldenFormula": "If + [Condition], Subject + [Modal] + [Adverb] + Base Verb"
        },
        "exercises": {
            "quiz": [
                {"question": "Complete the 1st conditional: 'If it ________ tomorrow, we will go to the beach.'", "options": ["will be sunny", "is sunny", "was sunny", "would be sunny"], "correct": 1, "explanation": "The 'if' clause in 1st Conditional takes Present Simple: 'is sunny'."},
                {"question": "Complete the 2nd conditional: 'If I ________ a million dollars, I ________ around the world.'", "options": ["win / will travel", "won / would travel", "had won / would have traveled", "wins / travels"], "correct": 1, "explanation": "2nd Conditional (dream): If + Past Simple ('won'), would + base ('would travel')."},
                {"question": "What does 'Unless you hurry, we will miss the bus' mean?", "options": ["If you hurry, we will miss the bus.", "If you don't hurry, we will miss the bus.", "We already missed the bus.", "You shouldn't hurry."], "correct": 1, "explanation": "'Unless' means 'if... not': 'If you don't hurry, we will miss the bus'."},
                {"question": "Complete the 3rd conditional: 'If you ________ me earlier, I ________ you.'", "options": ["told / would help", "had told / would have helped", "have told / will help", "had told / would help"], "correct": 1, "explanation": "3rd Conditional (past regret): If + had V3 ('had told'), would have + V3 ('would have helped')."},
                {"question": "Which sentence has a comma error?", "options": ["If you call me, I will answer.", "I will answer if you call me.", "We will stay home, if it rains tomorrow.", "If I were you, I would take the offer."], "correct": 2, "explanation": "Do not put a comma when the result clause comes first ('We will stay home if it rains tomorrow')."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "If you ________ (heat) water to 100 degrees Celsius, it boils.", "correctAnswer": "heat", "hint": "Zero conditional takes Present Simple.", "explanation": "Zero Conditional fact: 'heat'."},
                {"id": 2, "sentence": "If I ________ (be) you, I would apologize to her immediately.", "correctAnswer": "were", "hint": "Subjunctive were in 2nd conditional.", "explanation": "Advice formula: 'If I were you'."},
                {"id": 3, "sentence": "If we had left earlier, we ________ (not / miss) the flight.", "correctAnswer": "wouldn't have missed", "hint": "wouldn't have + V3.", "explanation": "3rd Conditional result: 'wouldn't have missed'."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["If", "it", "rains,", "we", "will", "stay", "home."], "correctOrder": ["If", "it", "rains,", "we", "will", "stay", "home."], "targetSentence": "If it rains, we will stay home.", "meaning": "1st Conditional contingency."},
                {"id": 2, "tokens": ["If", "I", "were", "you,", "I", "would", "go."], "correctOrder": ["If", "I", "were", "you,", "I", "would", "go."], "targetSentence": "If I were you, I would go.", "meaning": "Friendly advice."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "If it will snow tomorrow, we will build a snowman.", "options": ["If it will snow tomorrow, we will build a snowman.", "If it snows tomorrow, we will build a snowman.", "If it snowed tomorrow, we will build a snowman."], "correctIndex": 1, "explanation": "Never use 'will' in the 'if' clause. Say 'If it snows tomorrow'."},
                {"id": 2, "flawedSentence": "If I would have known about the party, I would have come.", "options": ["If I would have known about the party, I would have come.", "If I had known about the party, I would have come.", "If I knew about the party, I would have come."], "correctIndex": 1, "explanation": "Never put 'would have' in the 'if' clause. Use 'If I had known'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "probably", "targetSentence": "If you ask him, he will probably help you.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "If you ask him, he", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "will", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "help you.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'probably' between 'will' and 'help'."
                },
                {
                    "id": 2, "adverb": "always", "targetSentence": "If you press this button, the machine always starts.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "If you press this button, the machine", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "starts.", "isSlot": False}, {"id": 2, "isSlot": True}],
                    "correctSlot": 1, "explanation": "Place 'always' right before the present action verb 'starts'."
                }
            ],
            "masteryExam": [
                {"question": "Which conditional pattern is used for scientific laws and permanent physical realities?", "options": ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional"], "correct": 0, "level": "B1", "explanation": "Zero Conditional (If + Present Simple, Present Simple) expresses 100% universal laws."},
                {"question": "Identify the ungrammatical sentence:", "options": ["If I had wings, I would fly.", "If it rains tomorrow, I will call you.", "If you will hurry, we will catch the bus.", "If I had known, I would have told you."], "correct": 2, "level": "B1", "explanation": "'If you will hurry' is ungrammatical; the 'if' clause cannot take modal will."},
                {"question": "What is the communicative function of 'If I were you, I would consult a doctor'?", "options": ["Scientific hypothesis", "Polite, empathic advice", "Past regret", "Mathematical certainty"], "correct": 1, "level": "B1", "explanation": "'If I were you' is standard polite English for offering advice."},
                {"question": "In 2nd Conditionals, why do we use past tense verbs like 'had' or 'won'?", "options": ["Because the event happened yesterday", "To express psychological distance from present reality (counterfactual daydream)", "Because the speaker forgot the present tense", "It is only used in poetry"], "correct": 1, "level": "B2", "explanation": "Past tense denotes hypothetical unreality or improbability in the present."},
                {"question": "Choose the correct sentence expressing a mixed conditional (past action affecting present):", "options": ["If I studied, I pass.", "If I had taken that flight yesterday, I would be in London right now.", "If I will take that flight, I will be in London.", "If I took that flight, I was in London."], "correct": 1, "level": "C1", "explanation": "Past hypothetical condition ('had taken') linked to present state ('would be')."},
                {"question": "Complete the sentence: 'You won't pass the exam ________ you study consistently.'", "options": ["if", "unless", "provided that", "as long as"], "correct": 1, "level": "B1", "explanation": "'Unless' means 'except if' or 'if not': 'unless you study'."},
                {"question": "When does a conditional sentence require a comma?", "options": ["Always", "Never", "When the 'if' clause precedes the main result clause", "Only when using the third conditional"], "correct": 2, "level": "A2", "explanation": "If-clause first demands a separating comma."},
                {"question": "What is the 3rd conditional formula?", "options": ["If + Present, will + base", "If + Past, would + base", "If + had + V3, would have + V3", "If + will, would have + V3"], "correct": 2, "level": "B2", "explanation": "If + had + V3, would have + V3."},
                {"question": "What does 'I would have bought it if I had had the money' show?", "options": ["The speaker bought it yesterday.", "The speaker did not have the money, so the purchase did not happen (past regret).", "The speaker will buy it tomorrow.", "The speaker owns it now."], "correct": 1, "level": "B2", "explanation": "Past unfulfilled condition: no money, therefore no purchase."},
                {"question": "Why is 'were' used in 'If she were here' instead of 'was'?", "options": ["It is the English subjunctive mood expressing hypothetical unreality.", "'She' is secretly a plural noun.", "'Were' is used only on weekends.", "It is an ancient spelling error."], "correct": 0, "level": "B2", "explanation": "The subjunctive mood uses 'were' for all persons in hypothetical conditions."}
            ]
        }
    }

    # =========================================================================
    # 14. PASSIVE VOICE (be + past participle V3)
    # =========================================================================
    tenses["passiveVoice"] = {
        "meta": {
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
            "summary": "Use this when the RECEIVER of the action is the main focus, when the doer is unknown, or to be polite and objective."
        },
        "overview": {
            "definition": "In the Passive Voice, the person or thing RECEIVING the action becomes the subject of the sentence. We use it when who or what did the action is unknown, unimportant, or when we want to be polite.",
            "coreConcept": "Think of turning a spotlight: In Active Voice, the spotlight is on the actor ('The thief stole the bike'). In Passive Voice, the spotlight turns to the victim ('My bike was stolen!').",
            "timelineInsight": "Passive Voice works across ALL tenses! You simply conjugate the helper verb 'to be' into any tense and add the 3rd form (V3) participle.",
            "signalWords": [
                {"word": "By (the agent)", "example": "The Mona Lisa was painted by Leonardo da Vinci."},
                {"word": "Was / Were + V3", "example": "The bridge was built in 1930."},
                {"word": "Is / Are + V3", "example": "English is spoken all over the world."},
                {"word": "Has / Have been + V3", "example": "The flight has been canceled."},
                {"word": "Will be + V3", "example": "The results will be published tomorrow."},
                {"word": "Must be / Can be + V3", "example": "Seatbelts must be worn at all times."}
            ],
            "pillars": [
                {"icon": "HelpCircle", "label": "Unknown or Obvious Doer", "desc": "When you don't know who did it, or it is completely obvious ('The bank was robbed').", "color": "#64748b", "bg": "rgba(100, 116, 139, 0.08)", "border": "rgba(100, 116, 139, 0.25)"},
                {"icon": "Newspaper", "label": "News & Formal Reports", "desc": "Journalism, announcements, and government notices ('A treaty was signed').", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "FlaskConical", "label": "Science & Processes", "desc": "Scientific objectivity: 'The liquid is heated and mixed with salt.'", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
                {"icon": "HeartHandshake", "label": "Polite Diplomacy", "desc": "Avoiding direct blame: 'A mistake was made' instead of 'You made a mistake!'.", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
            ]
        },
        "useCases": [
            make_use_case(
                "unknown_or_unimportant_agent", "1. When the Doer is Unknown or Obvious", "Unknown Doer", "HelpCircle",
                "Using passive because you don't know who did it, or it doesn't matter who did it.",
                "If someone stole your bicycle, you don't know the thief's name. You just want to say what happened to your bike!",
                ("My bicycle was stolen from outside the library yesterday.", "The identity of the thief is completely unknown.", "was stolen"),
                ("The thief was arrested late last night (obviously by the police!).", "Doer is so obvious it doesn't need to be stated.", "was arrested"),
                ("Spanish is spoken in more than twenty countries.", "Millions speak it; the language is the topic.", "is spoken"),
                "Focus on what happened, not who did it."
            ),
            make_use_case(
                "news_and_formal_announcements", "2. News Headlines & Official Announcements", "News & Reports", "Newspaper",
                "Newspapers, TV news, and official statements use passive to sound objective and serious.",
                "Headlines spotlight the event: 'Three new hospitals will be built this year.'",
                ("A new international trade agreement was signed in Geneva yesterday.", "Major global diplomatic announcement.", "was signed"),
                ("Flight 402 has been delayed due to severe thunderstorm conditions.", "Airport terminal announcement.", "has been delayed"),
                ("All public schools will be closed tomorrow for the holiday.", "Civic municipal notice.", "will be closed"),
                "It conveys authority and professional journalism."
            ),
            make_use_case(
                "scientific_and_technical_processes", "3. Scientific Experiments & Process Descriptions", "Science & Labs", "FlaskConical",
                "Describing how an experiment is run or how a product is manufactured.",
                "Science cares about the physical process, not the scientist: 'The chemical is heated to 100 degrees.'",
                ("The solution is stirred gently and heated over a low flame.", "Laboratory procedure step.", "is stirred ... heated"),
                ("Coffee beans are harvested by hand and dried under the sun.", "Agricultural production cycle.", "are harvested ... dried"),
                ("Data is stored securely across encrypted cloud servers.", "Cybersecurity architecture description.", "is stored"),
                "Keeps scientific papers clear, objective, and unbiased."
            ),
            make_use_case(
                "diplomatic_politeness_avoiding_blame", "4. Diplomatic Politeness & Avoiding Direct Blame", "Polite Tone", "HeartHandshake",
                "Softening a complaint so you don't sound aggressive or rude.",
                "Compare: 'You made a mistake on my bill!' (very aggressive) vs 'A mistake was made on the bill' (polite and gentle).",
                ("A mistake was made on the invoice, could you please review it?", "Diplomatic billing inquiry.", "was made"),
                ("The deadline has been missed, so we must reschedule.", "Softening professional accountability.", "has been missed"),
                ("Your reservation could not be found in our computer system.", "Polite customer service explanation.", "could not be found"),
                "Saves relationships in business and everyday life."
            ),
            make_use_case(
                "public_rules_and_notices", "5. Public Rules, Signs & Legal Warnings", "Public Signs", "ShieldAlert",
                "Signs, tickets, and instruction manuals outlining mandatory rules.",
                "Use modal verbs + be + V3: 'must be worn', 'cannot be used', 'is prohibited'.",
                ("Safety helmets must be worn at all times in the construction zone.", "Mandatory safety regulation.", "must be worn"),
                ("Smoking is strictly prohibited on all company premises.", "Public health restriction.", "is strictly prohibited"),
                ("Credit cards are accepted here.", "Retail payment policy notice.", "are accepted"),
                "Clear, concise, and applies equally to every person."
            ),
            make_use_case(
                "historical_monuments_and_art", "6. Historical Monuments, Books & Inventions", "Monuments & Art", "Landmark",
                "Focusing on the creation when discussing art, literature, and architectural wonders.",
                "Use 'by' to name the famous creator at the end: 'Hamlet was written by William Shakespeare.'",
                ("The Eiffel Tower was built in 1889 for the World's Fair in Paris.", "Architectural landmark construction.", "was built"),
                ("The Mona Lisa was painted by Leonardo da Vinci in the early 1500s.", "Masterpiece art attribution.", "was painted by"),
                ("The telephone was invented by Alexander Graham Bell in 1876.", "Historic technological invention.", "was invented by"),
                "The monument or masterpiece takes the front spotlight it deserves."
            )
        ],
        "grammarStructures": {
            "affirmative": {
                "formula": "Object + conjugated 'TO BE' + Past Participle (V3) (+ by Agent)",
                "explanation": "To make any sentence passive, move the object to the front, conjugate 'be' into the matching tense, and add the V3 verb.",
                "table": [
                    {"tense": "Present Simple", "active": "They clean the room.", "passive": "The room is cleaned."},
                    {"tense": "Past Simple", "active": "They cleaned the room.", "passive": "The room was cleaned."},
                    {"tense": "Present Continuous", "active": "They are cleaning the room.", "passive": "The room is being cleaned."},
                    {"tense": "Present Perfect", "active": "They have cleaned the room.", "passive": "The room has been cleaned."},
                    {"tense": "Future Simple", "active": "They will clean the room.", "passive": "The room will be cleaned."},
                    {"tense": "Modals (must/can)", "active": "They must clean the room.", "passive": "The room must be cleaned."}
                ],
                "examples": [
                    {"en": "The letter was delivered this morning.", "context": "Past simple passive"},
                    {"en": "Our website is being redesigned right now.", "context": "Present continuous passive"}
                ]
            },
            "negative": {
                "formula": "Object + BE + NOT + Past Participle (V3)",
                "explanation": "Add 'not' to the verb 'to be': 'is not', 'was not', 'has not been', 'will not be'.",
                "table": [
                    {"subject": "Present", "form": "isn't / aren't + V3", "example": "The package isn't delivered on Sundays."},
                    {"subject": "Past", "form": "wasn't / weren't + V3", "example": "The meeting wasn't canceled yesterday."},
                    {"subject": "Future", "form": "won't be + V3", "example": "The results won't be announced until Monday."}
                ],
                "examples": [
                    {"en": "I wasn't informed about the schedule change.", "context": "Negative past passive"},
                    {"en": "This product has not been tested on animals.", "context": "Cruelty-free label notice"}
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
                            {"q": "Was your car repaired yesterday?", "a": "Yes, it was! / Not yet."},
                            {"q": "Has the package been delivered?", "a": "Yes, it arrived an hour ago."}
                        ]
                    },
                    {
                        "type": "Wh- Question",
                        "formula": "Wh- Word + be + Subject + V3...?",
                        "examples": [
                            {"q": "When was the Eiffel Tower built?", "a": "It was built in 1889."},
                            {"q": "Where are these cars manufactured?", "a": "They are manufactured in Germany."}
                        ]
                    }
                ],
                "examples": [
                    {"en": "Will the championship be broadcast live?", "context": "Future passive inquiry"},
                    {"en": "How was the pyramid constructed?", "context": "Historical inquiry"}
                ]
            },
            "verbToBe": {
                "formula": "Passive Transformation of 'by'",
                "explanation": "Only include 'by + agent' if the person who did it is surprising or important to know (e.g. 'painted by Picasso'). If it is someone obvious like 'police' or 'cleaner', omit it!",
                "table": [
                    {"subject": "Important agent (Include by)", "example": "Romeo and Juliet was written by William Shakespeare."},
                    {"subject": "Obvious agent (Omit by)", "example": "The thief was arrested (no need to say 'by police')."}
                ],
                "examples": [
                    {"en": "The theory was proposed by Albert Einstein.", "context": "Attribution to famous scientist"},
                    {"en": "My wallet was stolen on the bus.", "context": "Unknown agent omitted"}
                ]
            },
            "verbHave": {
                "formula": "Causative Have / Get (Have something done)",
                "explanation": "When you pay a professional to do a service for you, say 'I had my car repaired' (NOT 'I repaired my car'!).",
                "table": [
                    {"subject": "Causative Structure", "formula": "Subject + have/get + object + V3", "example": "I had my hair cut yesterday."}
                ],
                "examples": [
                    {"en": "We are having our kitchen remodeled next week.", "context": "Professional contractor remodeling"},
                    {"en": "She had her eyes tested by the optician.", "context": "Medical exam"}
                ]
            }
        },
        "spellingRules": {
            "title": "Forming the Passive Participle (V3)",
            "subtitle": "Review of the 3rd form (V3) across all passive tenses.",
            "rules": [
                {"ruleNumber": 1, "title": "Regular Verbs", "condition": "Most verbs", "ruleText": "Add -ed (was painted, is washed, will be closed).", "examples": ["paint → painted", "wash → washed", "close → closed"]},
                {"ruleNumber": 2, "title": "Irregular Participles", "condition": "Irregular verbs", "ruleText": "Use the 3rd column: write → written, steal → stolen, build → built.", "examples": ["write → written", "steal → stolen", "build → built", "break → broken"]},
                {"ruleNumber": 3, "title": "Continuous Passives: Add 'being'", "condition": "Continuous aspect", "ruleText": "Add 'being' between be and V3 (is being cleaned, was being painted).", "examples": ["is cleaning → is being cleaned", "was fixing → was being fixed"]}
            ],
            "phoneticTips": [
                {"ending": "was / were reduced", "sound": "/wəz/ and /wɜːr/", "tip": "In passive sentences, 'was' and 'were' are usually unstressed: 'The CAR was STOlen'."},
                {"ending": "has been", "sound": "/hæz bɪn/", "tip": "Say 'has been' smoothly before the main stressed verb: 'has been CANceled'."}
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Always", "percentage": 100, "color": "#10b981", "example": "Passports must always be shown at border control."},
            {"adverb": "Usually", "percentage": 85, "color": "#06b6d4", "example": "The morning mail is usually delivered at 10 AM."},
            {"adverb": "Frequently", "percentage": 70, "color": "#3b82f6", "example": "This road is frequently closed during winter snowstorms."},
            {"adverb": "Sometimes", "percentage": 50, "color": "#8b5cf6", "example": "Flights are sometimes delayed by fog."},
            {"adverb": "Rarely", "percentage": 20, "color": "#f59e0b", "example": "Rare books are rarely taken outside the library."},
            {"adverb": "Never", "percentage": 0, "color": "#ef4444", "example": "Confidential files are never shared with the public."}
        ],
        "adverbPlacementRules": [
            {
                "ruleNumber": 1,
                "title": "Rule 1: Put it BETWEEN the auxiliary 'be' and V3",
                "formula": "Subject + BE + [ADVERB] + V3 Participle",
                "explanation": "Adverbs like always, usually, and frequently sit right between 'be' and the V3 participle.",
                "examples": [{"bad": "The mail is delivered always at ten.", "good": "The mail is always delivered at ten."}]
            },
            {
                "ruleNumber": 2,
                "title": "Rule 2: With modals, put it BETWEEN 'be' and V3",
                "formula": "Subject + MUST / CAN + BE + [ADVERB] + V3",
                "explanation": "You can also place it between the modal and be: 'must always be shown'.",
                "examples": [{"bad": "Seatbelts must be shown always.", "good": "Seatbelts must always be worn."}]
            },
            {
                "ruleNumber": 3,
                "title": "Rule 3: 'By + Agent' goes at the very END",
                "formula": "Subject + be + V3 + [BY THE AGENT]",
                "explanation": "The person who did the action sits at the end of the clause with 'by'.",
                "examples": [{"bad": "The song by Adele was sung.", "good": "The song was sung by Adele."}]
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
                "explanation": "Always use the 3rd form (past participle V3): write → wrote → WRITTEN."
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
                {"form": "Present Simple Passive", "formula": "am / is / are + V3", "exampleI": "The room is cleaned daily.", "exampleHe": "Letters are delivered at 10 AM.", "memoryAnchor": "am/is/are + V3"},
                {"form": "Past Simple Passive", "formula": "was / were + V3", "exampleI": "The car was repaired.", "exampleHe": "The books were returned.", "memoryAnchor": "was/were + V3"},
                {"form": "Present Continuous Passive", "formula": "is / are BEING + V3", "exampleI": "The road is being paved.", "exampleHe": "The houses are being built.", "memoryAnchor": "be + BEING + V3"},
                {"form": "Present Perfect Passive", "formula": "has / have BEEN + V3", "exampleI": "The flight has been canceled.", "exampleHe": "Bills have been paid.", "memoryAnchor": "have/has + BEEN + V3"}
            ],
            "spellingPills": [
                {"ending": "Regular", "change": "+ed", "example": "clean → cleaned"},
                {"ending": "Irregular V3", "change": "Memorize 3rd form", "example": "steal → stolen"},
                {"ending": "Continuous", "change": "+ being", "example": "is being repaired"},
                {"ending": "Causative", "change": "have something done", "example": "had my hair cut"}
            ],
            "adverbGoldenFormula": "Subject + [Conjugated BE] + [Adverb] + V3 Participle"
        },
        "exercises": {
            "quiz": [
                {"question": "Convert to passive: 'Leonardo da Vinci painted the Mona Lisa.'", "options": ["The Mona Lisa painted Leonardo da Vinci.", "The Mona Lisa was painted by Leonardo da Vinci.", "The Mona Lisa has been painted by Leonardo da Vinci.", "The Mona Lisa is painting by Leonardo da Vinci."], "correct": 1, "explanation": "Past Simple passive formula: was + painted by + agent."},
                {"question": "Why is 'An accident was happened on the highway' incorrect?", "options": ["'Happen' is an intransitive verb and cannot be used in passive voice.", "'Accident' must be plural.", "It lacks a time word.", "Highway is spelled incorrectly."], "correct": 0, "explanation": "Intransitive verbs cannot take an object and cannot form passive voice (*was happened)."},
                {"question": "Which sentence is a Present Continuous Passive?", "options": ["The bridge is built.", "The bridge was built.", "The bridge is being built right now.", "The bridge has been built."], "correct": 2, "explanation": "Present Continuous passive uses is/are BEING + V3: 'is being built'."},
                {"question": "When should you mention the agent with 'by' in a passive sentence?", "options": ["Always in every sentence", "Never", "Only when the agent provides important, surprising, or specific information", "Only in questions"], "correct": 2, "explanation": "Only include 'by' when the agent is informative (e.g. 'by Shakespeare')."},
                {"question": "Choose the correct causative sentence for having your eyes tested by a doctor:", "options": ["I tested my eyes yesterday.", "I had my eyes tested yesterday.", "I was tested my eyes yesterday.", "My eyes were having tested."], "correct": 1, "explanation": "Causative formula: Subject + had + object + V3: 'I had my eyes tested'."}
            ],
            "fillBlanks": [
                {"id": 1, "sentence": "The novel '1984' ________ (write) by George Orwell.", "correctAnswer": "was written", "hint": "Past simple passive: was + written.", "explanation": "Passive voice: 'was written'."},
                {"id": 2, "sentence": "Safety helmets must ________ (wear) by all workers on site.", "correctAnswer": "be worn", "hint": "Modal passive: be + worn.", "explanation": "Modal passive: 'be worn'."},
                {"id": 3, "sentence": "The damaged bridge is currently ________ (repair) by engineers.", "correctAnswer": "being repaired", "hint": "Continuous passive: being + repaired.", "explanation": "Present continuous passive: 'being repaired'."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["The", "window", "was", "broken", "yesterday."], "correctOrder": ["The", "window", "was", "broken", "yesterday."], "targetSentence": "The window was broken yesterday.", "meaning": "Past simple passive event."},
                {"id": 2, "tokens": ["English", "is", "spoken", "all", "over", "the", "world."], "correctOrder": ["English", "is", "spoken", "all", "over", "the", "world."], "targetSentence": "English is spoken all over the world.", "meaning": "Universal linguistic fact."}
            ],
            "errorDetective": [
                {"id": 1, "flawedSentence": "A great mistake was occurred during the experiment.", "options": ["A great mistake was occurred during the experiment.", "A great mistake occurred during the experiment.", "A great mistake has been occurred during the experiment."], "correctIndex": 1, "explanation": "'Occur' is an intransitive verb and cannot take passive voice. Say 'occurred'."},
                {"id": 2, "flawedSentence": "The new hospital is building in our neighborhood right now.", "options": ["The new hospital is building in our neighborhood right now.", "The new hospital is being built in our neighborhood right now.", "The new hospital was built in our neighborhood right now."], "correctIndex": 1, "explanation": "The hospital is receiving the building action, so use continuous passive 'is being built'."}
            ],
            "adverbMastery": [
                {
                    "id": 1, "adverb": "regularly", "targetSentence": "These servers are regularly maintained.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "These servers", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "are", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "maintained.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'regularly' between 'are' and the V3 participle 'maintained'."
                },
                {
                    "id": 2, "adverb": "always", "targetSentence": "Helmets must always be worn.",
                    "slots": [{"id": 0, "isSlot": True}, {"text": "Helmets", "isSlot": False}, {"id": 1, "isSlot": True}, {"text": "must", "isSlot": False}, {"id": 2, "isSlot": True}, {"text": "be worn.", "isSlot": False}],
                    "correctSlot": 2, "explanation": "Place 'always' between 'must' and 'be worn'."
                }
            ],
            "masteryExam": [
                {"question": "What is the primary discourse motivation for using Passive Voice in English?", "options": ["To make sentences longer and more complicated", "To place the communicative focus on the recipient of the action or the action itself rather than the agent", "Because active voice is grammatically informal", "To express spontaneous future decisions"], "correct": 1, "level": "B2", "explanation": "Passive voice shifts thematic focus onto the patient/recipient of the action."},
                {"question": "Which verb CANNOT be transformed into passive voice?", "options": ["destroy", "disappear", "repair", "publish"], "correct": 1, "level": "B2", "explanation": "'Disappear' is intransitive (it takes no direct object) and cannot form a passive construction."},
                {"question": "Convert to Present Perfect Passive: 'Someone has stolen my laptop.'", "options": ["My laptop was stolen.", "My laptop has been stolen.", "My laptop is stolen.", "My laptop has stolen."], "correct": 1, "level": "B1", "explanation": "Present Perfect Passive: has been + V3 ('has been stolen')."},
                {"question": "What nuance does 'A mistake was made on your invoice' convey compared to 'You made a mistake'?", "options": ["It is rude and hostile.", "It is polite, objective, and diplomatically avoids personal blame.", "It implies fraud.", "It means no mistake exists."], "correct": 1, "level": "B2", "explanation": "Passive voice softens interpersonal confrontation by omitting the culpable agent."},
                {"question": "Identify the causative structure representing professional service:", "options": ["I repaired my dental filling.", "I had my dental filling repaired by the dentist.", "My dental filling repaired itself.", "The dentist was repaired."], "correct": 1, "level": "B1", "explanation": "'Subject + had + object + V3' signifies paying a professional for a service."},
                {"question": "Complete the continuous passive: 'The museum exhibits ________ right now.'", "options": ["are restoring", "are being restored", "were restored", "have restored"], "correct": 1, "level": "B2", "explanation": "Present continuous passive: are being restored."},
                {"question": "Where does the agent typically sit in a passive clause?", "options": ["At the very beginning of the clause", "At the end of the clause, introduced by the preposition 'by'", "Directly before the auxiliary verb", "Inside parentheses only"], "correct": 1, "level": "A2", "explanation": "The agent phrase sits at the clause boundary preceded by 'by'."},
                {"question": "Why is 'The Mona Lisa was painted by Leonardo da Vinci' preferred over omitting 'by'?", "options": ["Because Leonardo da Vinci is an internationally renowned artist whose identity is central to the topic.", "Because passive voice requires an agent in every sentence.", "Because painted is an intransitive verb.", "It is not preferred."], "correct": 0, "level": "B1", "explanation": "When the agent is a significant creator, retaining 'by + agent' provides essential informative value."},
                {"question": "What is the past participle of the irregular verb 'catch' in passive voice?", "options": ["catched", "caught", "cought", "caten"], "correct": 1, "level": "A2", "explanation": "catch → caught → caught: 'The thief was caught'."},
                {"question": "In scientific reporting, why is passive voice widely standard?", "options": ["To highlight the personality of the researcher", "To present the experimental process as objective, reproducible, and universal", "Because scientific instruments cannot speak active voice", "To hide errors from peer reviewers"], "correct": 1, "level": "B2", "explanation": "It depersonalizes the text, highlighting repeatable scientific methodology."}
            ]
        }
    }

    return tenses

if __name__ == '__main__':
    t = get_part3_tenses()
    print(f"Part 3 ready with {len(t)} tenses: {list(t.keys())}")
