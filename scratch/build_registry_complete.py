import json
import os

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'tensesRegistry.js'))

def build_all_tenses():
    tenses = {}
    
    # 1. Past Simple
    tenses["pastSimple"] = {
        "meta": {
            "id": "pastSimple",
            "chapterNumber": 1,
            "title": "Past Simple Tense",
            "fullTitle": "1. Past Simple Tense",
            "level": "A2 CEFR",
            "aspect": "Simple",
            "time": "Past",
            "category": "Fundamental Simple Aspect",
            "color": "#8b5cf6",
            "badge": "CHAPTER 1 • FINISHED PAST",
            "formula": "Subject + Verb-ED / Irregular V2 | didn't + Base Verb | Did...?",
            "summary": "Actions completed in a definite past time period, historical sequences, and past states."
        },
        "overview": {
            "definition": "The Past Simple is used to describe completed actions, events, and states that occurred at a specific, finished time in the past.",
            "coreConcept": "The action is fully finished and completely disconnected from the present moment. The time window is closed (yesterday, in 1995, two hours ago).",
            "timelineInsight": "Visualized as a solid fixed point or bounded block firmly positioned in the PAST, strictly before NOW.",
            "signalWords": [
                {"word": "Yesterday / Yesterday morning", "example": "I visited the gallery yesterday."},
                {"word": "Last night / week / month / year", "example": "We launched the product last month."},
                {"word": "Two hours / 3 days ago", "example": "The train arrived twenty minutes ago."},
                {"word": "In 1998 / In the 20th century", "example": "Fleming discovered penicillin in 1928."},
                {"word": "When I was young", "example": "I played violin when I was a child."},
                {"word": "The other day / Just now", "example": "I saw an old school friend the other day."}
            ],
            "pillars": [
                {"icon": "Clock3", "label": "Finished Time", "desc": "Strictly bounded past time periods (yesterday, in 2010).", "color": "#8b5cf6", "bg": "rgba(139, 92, 246, 0.08)", "border": "rgba(139, 92, 246, 0.25)"},
                {"icon": "Zap", "label": "Single Completed Action", "desc": "A sudden, finished event — 'The lightning struck the tree.'", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
                {"icon": "BookOpen", "label": "Historical Narrative", "desc": "Chronological sequential storytelling in literature and history.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
                {"icon": "Globe", "label": "Past Habits & States", "desc": "Old routines or conditions no longer true — 'He lived in Tokyo for 5 years.'", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"}
            ]
        },
        "useCases": [
            {
                "id": "finished",
                "title": "1. Completed Actions at Definite Past Times",
                "tag": "Definite Past",
                "icon": "Clock",
                "summary": "Actions that happened and concluded at a known point in the past.",
                "explanation": "Whenever you state or imply WHEN an action happened (yesterday, last week, in 2015), English requires the Past Simple.",
                "examples": [
                    {"sentence": "Alexander Fleming discovered penicillin in 1928.", "translation": "Historical discovery at a fixed date.", "focus": "discovered"},
                    {"sentence": "We completed the software migration yesterday afternoon.", "translation": "Finished business task.", "focus": "completed"},
                    {"sentence": "Did you receive my email this morning?", "translation": "Inquiry about past communication.", "focus": "Did ... receive"}
                ],
                "teacherNote": "The moment you include a finished time anchor ('yesterday', 'in 2020'), you MUST use Past Simple, never Present Perfect!"
            },
            {
                "id": "narrative",
                "title": "2. Sequential Storytelling & Narratives",
                "tag": "Story Flow",
                "icon": "Radio",
                "summary": "A series of consecutive events unfolding one after another.",
                "explanation": "In storytelling, historical accounts, and novels, each action moves the clock forward in Past Simple.",
                "examples": [
                    {"sentence": "She opened the letter, smiled warmly, and ran to phone her parents.", "translation": "Chain of consecutive events.", "focus": "opened, smiled, ran"},
                    {"sentence": "The detective entered the room and inspected the desk.", "translation": "Sequential action.", "focus": "entered, inspected"},
                    {"sentence": "He paid the bill, took his coat, and walked into the rain.", "translation": "Chronological narrative sequence.", "focus": "paid, took, walked"}
                ],
                "teacherNote": "Each verb happens after the previous one. This is the cornerstone of English storytelling."
            },
            {
                "id": "pastHabits",
                "title": "3. Past Habits, Routines & Long-Term States",
                "tag": "Past Life Rhythm",
                "icon": "Home",
                "summary": "Things you regularly did in the past but no longer do today.",
                "explanation": "Use Past Simple (often with frequency words or 'used to') to convey past routines or living arrangements that have completely ended.",
                "examples": [
                    {"sentence": "My grandfather walked five miles to school every single morning.", "translation": "Past childhood routine.", "focus": "walked"},
                    {"sentence": "We lived in a charming villa by the sea for seven years.", "translation": "Finished living situation.", "focus": "lived"},
                    {"sentence": "She played competitive tennis when she was in university.", "translation": "Past sports habit.", "focus": "played"}
                ],
                "teacherNote": "Because the speaker is no longer in that state, the Past Simple signals that this chapter of life is closed."
            },
            {
                "id": "interrupted",
                "title": "4. Interrupting Action in a Background Scene",
                "tag": "Sudden Event",
                "icon": "Heart",
                "summary": "The sudden event that breaks an ongoing past background.",
                "explanation": "While Past Continuous sets the ongoing scene ('was reading'), the sudden event that occurs is always in the Past Simple ('the phone rang').",
                "examples": [
                    {"sentence": "I was cooking dinner when the fire alarm suddenly went off.", "translation": "Sudden interruption.", "focus": "went off"},
                    {"sentence": "While they were discussing the proposal, the power failed.", "translation": "Abrupt event.", "focus": "failed"},
                    {"sentence": "He slipped on the ice while he was walking to the metro.", "translation": "Sudden incident.", "focus": "slipped"}
                ],
                "teacherNote": "Past Simple delivers the dramatic punch that punctuates the continuous background."
            },
            {
                "id": "historical",
                "title": "5. Historical Facts & Biographies",
                "tag": "History & Biographies",
                "icon": "Globe",
                "summary": "Actions and lives of historical figures who are no longer alive.",
                "explanation": "Whenever discussing historical periods, civilizations, or people who have passed away, the Past Simple is mandatory.",
                "examples": [
                    {"sentence": "William Shakespeare wrote 39 plays and 154 sonnets.", "translation": "Literary output of a historical writer.", "focus": "wrote"},
                    {"sentence": "The ancient Romans built extraordinary aqueducts across Europe.", "translation": "Historical civilization achievement.", "focus": "built"},
                    {"sentence": "Leonardo da Vinci painted the Mona Lisa in the early 16th century.", "translation": "Historical artwork creation.", "focus": "painted"}
                ],
                "teacherNote": "We say 'Shakespeare wrote' (not 'has written') because his lifespan is completely in the past."
            },
            {
                "id": "durationFinished",
                "title": "6. Finished Durations (for + period now ended)",
                "tag": "Closed Duration",
                "icon": "Calendar",
                "summary": "Durations that began and concluded entirely in the past.",
                "explanation": "Be careful: 'for 3 years' with Past Simple means the activity is finished. With Present Perfect, it means it continues now.",
                "examples": [
                    {"sentence": "I lived in Berlin for five years (now I live in Tokyo).", "translation": "Completed residence duration.", "focus": "lived"},
                    {"sentence": "She worked at that law firm for a decade before retiring.", "translation": "Finished career period.", "focus": "worked"},
                    {"sentence": "The storm raged for six hours before dissipating.", "translation": "Completed weather duration.", "focus": "raged"}
                ],
                "teacherNote": "'I lived in Paris for 2 years' = I do not live there now! The duration is closed."
            }
        ],
        "grammarStructures": {
            "affirmative": {
                "rule": "Regular verbs add -ed (work → worked). Irregular verbs use their unique V2 form (go → went, buy → bought). Subject pronoun does not change the verb form!",
                "formula": "Subject + Verb-ED / Irregular V2 + Complement",
                "examples": [
                    "She discovered a fascinating manuscript in the library.",
                    "They went to Florence for their summer holiday.",
                    "I watched the documentary yesterday evening.",
                    "We bought a new hybrid vehicle last Tuesday."
                ],
                "structureBreakdown": [
                    {"group": "All Subjects (I / You / He / She / It / We / They)", "form": "Base + -ed OR Irregular V2", "rule": "Universal — no 3rd person singular '-s' in the past!"}
                ]
            },
            "negative": {
                "rule": "Negatives require the auxiliary DID + NOT (didn't). The auxiliary DID absorbs the past tense, so the main verb must strictly revert to its bare base infinitive!",
                "formula": "Subject + DID NOT (didn't) + Base Verb + Complement",
                "examples": [
                    "She didn't call the supplier yesterday.",
                    "They didn't go to the conference in Lisbon.",
                    "I didn't recognize him at first.",
                    "He didn't finish the quarterly report on time."
                ],
                "auxRule": "NEVER double mark the past! Say 'didn't go' ✅, NOT 'didn't went' ❌!"
            },
            "interrogative": {
                "rule": "Questions start with DID (or Wh- + DID). DID inverts with the subject, and the main verb remains in bare infinitive.",
                "formula": "(Wh-) + DID + Subject + Base Verb + Complement ?",
                "examples": [
                    "Did you find your passport yesterday?",
                    "Where did they spend their winter vacation?",
                    "Why did the manager reschedule the meeting?",
                    "What did she say during the presentation?"
                ],
                "inversionRule": "DID + Subject + Bare Verb. Always: 'Did you see?' (never 'Did you saw?')."
            },
            "verbToBe": {
                "title": "Special Copular Verb: TO BE (Was / Were)",
                "formula": "I / He / She / It + WAS  |  You / We / They + WERE",
                "examples": [
                    "She was very tired after the transatlantic flight.",
                    "They were not (weren't) happy with the initial proposal.",
                    "Were you at the meeting yesterday afternoon?",
                    "Notice: Was/Were NEVER uses 'did'!"
                ]
            },
            "verbHave": {
                "title": "The Verb 'TO HAVE' in Past Simple",
                "formula": "Had (affirmative)  |  didn't have (negative)  |  Did you have...? (question)",
                "examples": [
                    "We had a productive discussion with the founders.",
                    "He didn't have enough time to complete the assignment.",
                    "Did you have any problems finding the venue?"
                ]
            }
        },
        "spellingRules": {
            "title": "Regular Verb -ED Rules & Pronunciation Code",
            "subtitle": "How to append -ed and pronounce /t/, /d/, or /ɪd/",
            "rules": [
                {"id": 1, "tag": "Standard", "title": "General Rule: Add -ed", "rule": "work → worked | play → played | clean → cleaned", "examples": ["work → worked", "listen → listened", "open → opened"], "phonetic": "/t/ or /d/", "explanation": "Most regular verbs simply append '-ed'."},
                {"id": 2, "tag": "Ending in -e", "title": "Ends in -e: Add -d only", "rule": "live → lived | smile → smiled | decide → decided", "examples": ["live → lived", "like → liked", "dance → danced"], "phonetic": "/d/ or /t/", "explanation": "Do not double the 'e' — just attach '-d'."},
                {"id": 3, "tag": "Consonant + Y", "title": "Consonant + Y: Change y to -ied", "rule": "study → studied | cry → cried | carry → carried", "examples": ["study → studied", "try → tried", "worry → worried"], "phonetic": "/d/", "explanation": "Y changes to 'i' before -ed (but vowel + y: play → played!)."},
                {"id": 4, "tag": "Double Consonant", "title": "1 Vowel + 1 Consonant: Double final letter", "rule": "stop → stopped | plan → planned | prefer → preferred", "examples": ["stop → stopped", "fit → fitted", "rob → robbed"], "phonetic": "/t/ or /d/", "explanation": "Short stressed vowel followed by single consonant doubles the final consonant."},
                {"id": 5, "tag": "Irregular V2", "title": "Irregular Verbs (Must Be Memorized)", "rule": "go → went | buy → bought | see → saw | make → made | write → wrote", "examples": ["go → went", "take → took", "see → saw", "come → came"], "phonetic": "Unique V2 form", "explanation": "Irregular verbs have unique past forms inherited from historic Germanic ablauts."}
            ],
            "phoneticTips": [
                "Pronounce /ɪd/ (extra syllable) ONLY after verbs ending in /t/ or /d/ (wanted, decided, visited).",
                "Pronounce unvoiced /t/ after unvoiced sounds (watched, washed, laughed, stopped).",
                "Pronounce voiced /d/ after vowels and voiced consonants (played, lived, cleaned, loved)."
            ]
        },
        "adverbsOfFrequency": [
            {"adverb": "Yesterday", "percentage": 100, "color": "#8b5cf6", "example": "I met Dr. Aris yesterday.", "translation": "Definite finished day before today."},
            {"adverb": "Last week / year", "percentage": 95, "color": "#3b82f6", "example": "We visited Munich last year.", "translation": "Finished calendar period."},
            {"adverb": "Two days ago", "percentage": 90, "color": "#06b6d4", "example": "The package arrived two days ago.", "translation": "Measured time before now."},
            {"adverb": "In 2018", "percentage": 85, "color": "#10b981", "example": "They bought this property in 2018.", "translation": "Specific historical calendar year."},
            {"adverb": "When I was young", "percentage": 80, "color": "#f59e0b", "example": "When I was young, I swam every day.", "translation": "Past developmental life period."},
            {"adverb": "Just now / Earlier", "percentage": 70, "color": "#ec4899", "example": "She stepped out just now.", "translation": "Recent finished moment."}
        ],
        "adverbPlacementRules": [
            {"title": "Definite Time Anchors at the End (or Beginning)", "subtitle": "Sentence Edges", "formula": "Subject + Verb + [Object] + [TIME ANCHOR]", "explanation": "Finished past anchors (yesterday, last month, two years ago) naturally sit at the very end of the sentence or at the beginning for narrative emphasis.", "examples": ["I spoke to the director yesterday.", "Yesterday, I spoke to the director."]},
            {"title": "Past Frequency Adverbs Before the Main Verb", "subtitle": "Mid-Position", "formula": "Subject + [ALWAYS/OFTEN] + Past Verb", "explanation": "When expressing past habits, frequency adverbs like always, often, rarely precede the V2 verb.", "examples": ["We always ate dinner together as a family.", "He rarely complained about long hours."]},
            {"title": "Negative Past Auxiliaries Surround the Adverb", "subtitle": "Auxiliary Bracket", "formula": "Subject + didn't + [USUALLY] + Base Verb", "explanation": "In negative sentences, the adverb sits between 'didn't' and the base verb.", "examples": ["She didn't usually arrive before 9 AM."]}
        ],
        "commonTraps": [
            {
                "title": "Double Marking the Past in Negatives",
                "bad": "She didn't went to the hospital yesterday.",
                "good": "She didn't go to the hospital yesterday.",
                "explanation": "The auxiliary 'didn't' already carries the past tense. The main verb must revert to its pure base infinitive form.",
                "why": "English auxiliaries absorb tense. Having both 'didn't' and 'went' is a double past error."
            },
            {
                "title": "Double Marking the Past in Questions",
                "bad": "Did you saw the solar eclipse last week?",
                "good": "Did you see the solar eclipse last week?",
                "explanation": "The question auxiliary 'Did' carries the past tense. Use bare infinitive 'see'.",
                "why": "Did + subject + bare infinitive is the immutable syntactic law."
            },
            {
                "title": "Using Present Perfect with Finished Time Markers",
                "bad": "I have visited Rome in 2019.",
                "good": "I visited Rome in 2019.",
                "explanation": "Definite past dates (in 2019, yesterday, two days ago) demand Past Simple. Present Perfect can never pair with closed past dates.",
                "why": "Present Perfect bridges to NOW. A finished year cuts the bridge completely."
            },
            {
                "title": "Using 'did' with the Verb 'to be'",
                "bad": "Did you were at home yesterday evening?",
                "good": "Were you at home yesterday evening?",
                "explanation": "The verb 'to be' (was/were) forms its own questions through direct inversion without the auxiliary 'did'.",
                "why": "Copular 'be' is an independent auxiliary and never accepts 'do/did'."
            },
            {
                "title": "Confusing Regular -ED with Irregular Verbs",
                "bad": "He buyed a new laptop and speaked to the manager.",
                "good": "He bought a new laptop and spoke to the manager.",
                "explanation": "Common irregular verbs do not accept '-ed'. Their V2 forms must be committed to memory.",
                "why": "'Buy' → 'bought' and 'speak' → 'spoke' are irregular Germanic strong verbs."
            },
            {
                "title": "Mispronouncing the -ED Suffix as an Extra Syllable",
                "bad": "Pronouncing 'played' as play-id or 'worked' as work-id.",
                "good": "Pronounce 'played' as /pleɪd/ (1 syllable) and 'worked' as /wɜːkt/ (1 syllable).",
                "explanation": "Only add the extra /ɪd/ syllable when the base verb ends in /t/ or /d/ (wanted, decided).",
                "why": "English phonology avoids awkward consonant clusters by vocalizing only between identical dental stops."
            }
        ],
        "resumeSummary": {
            "title": "Past Simple Executive Architecture",
            "subtitle": "The Master Blueprint for Finished Past Reality",
            "formulaMatrix": {
                "affirmative": "Subject + Verb-ED / Irregular V2 (e.g., 'She arrived in Lisbon.')",
                "negative": "Subject + DID NOT (didn't) + Bare Verb (e.g., 'She didn't arrive.')",
                "question": "DID + Subject + Bare Verb? (e.g., 'Did she arrive on time?')"
            },
            "spellingPills": [
                "Regular: +ed (walk → walked)",
                "-e ending: +d (live → lived)",
                "Consonant + y: -ied (study → studied)",
                "1 Vowel + 1 Consonant: Double final (stop → stopped)",
                "Irregulars: Memorize V2 (went, bought, saw, took, had, made)"
            ],
            "adverbGoldenFormula": "Anchor words (yesterday, in 2015, ago) go at sentence ends. 'Didn't' & 'Did' always restore the base verb!",
            "markdownContent": "# Past Simple Quick Reference\\n\\n## Core Formulas\\n- Affirmative: Subject + V2 (She worked / went)\\n- Negative: Subject + didn't + base (She didn't work / go)\\n- Question: Did + Subject + base? (Did she work / go?)\\n\\n## The Golden Rules\\n1. Did/Didn't absorbs the past — main verb stays base.\\n2. Definite past time (yesterday, 2018, ago) requires Past Simple.\\n3. Was/Were never takes 'did'."
        },
        "exercises": {
            "quiz": [
                {"id": 1, "question": "Which sentence correctly demonstrates Past Simple negative form?", "options": ["She didn't went to the office.", "She didn't go to the office.", "She not went to the office.", "She didn't goes to the office."], "correct": 1, "explanation": "'didn't' absorbs past tense, so 'go' remains bare infinitive.", "hint": "Look for bare verb after didn't."},
                {"id": 2, "question": "Select the correct question asking about yesterday's event:", "options": ["Did you saw the solar eclipse?", "Did you see the solar eclipse?", "Were you saw the solar eclipse?", "Have you saw the solar eclipse yesterday?"], "correct": 1, "explanation": "Did + subject + bare infinitive 'see'.", "hint": "Did + base verb."},
                {"id": 3, "question": "What is the past simple (V2) of the irregular verb 'bring'?", "options": ["bringed", "brought", "brang", "bought"], "correct": 1, "explanation": "'Bring' becomes 'brought' in the past simple.", "hint": "Rhymes with 'thought'."},
                {"id": 4, "question": "Why is 'I have visited Madrid in 2018' incorrect?", "options": ["Madrid needs a definite article.", "'In 2018' is a finished past date demanding Past Simple.", "'Visited' is an irregular verb.", "You cannot visit cities."], "correct": 1, "explanation": "Finished past dates always require Past Simple ('I visited Madrid in 2018').", "hint": "Check the finished year."},
                {"id": 5, "question": "Which spelling is correct for the past simple of 'study'?", "options": ["studyed", "studied", "studid", "studyied"], "correct": 1, "explanation": "Consonant + y changes to -ied (study → studied).", "hint": "Consonant before y rule."},
                {"id": 6, "question": "Complete: 'When we arrived at the venue, the doors ________ locked.'", "options": ["did were", "were", "was", "did be"], "correct": 1, "explanation": "'The doors' is plural, taking 'were' without 'did'.", "hint": "Plural past of 'be'."},
                {"id": 7, "question": "Complete: 'Alexander Fleming ________ penicillin in 1928.'", "options": ["discovering", "discovered", "has discovered", "was discovered"], "correct": 1, "explanation": "Completed historical fact in 1928 takes Past Simple 'discovered'.", "hint": "Regular -ed past."},
                {"id": 8, "question": "Choose the correct past simple of 'stop':", "options": ["stoped", "stopped", "stoppied", "stopt"], "correct": 1, "explanation": "Short vowel + single consonant doubles the 'p' → stopped.", "hint": "Double consonant rule."}
            ],
            "fillBlanks": [
                {"id": 1, "prompt": "Yesterday afternoon, Marco ________ (buy) a vintage leather briefcase.", "verb": "buy", "answer": "bought", "hint": "Irregular past of buy.", "context": "Past shopping event."},
                {"id": 2, "prompt": "They ________ (not / attend) the global conference last Tuesday.", "verb": "attend", "answer": "didn't attend", "hint": "didn't + base verb.", "context": "Negative past."},
                {"id": 3, "prompt": "________ you ________ (call) the customer service hotline this morning?", "verb": "call", "answer": "Did you call", "hint": "Did + subject + base verb.", "context": "Past question."},
                {"id": 4, "prompt": "The flight ________ (arrive) in Amsterdam twenty minutes ago.", "verb": "arrive", "answer": "arrived", "hint": "Add -d to base ending in -e.", "context": "Ago time anchor."},
                {"id": 5, "prompt": "When I was in university, I ________ (live) in a shared student apartment.", "verb": "live", "answer": "lived", "hint": "Past state.", "context": "Finished life phase."},
                {"id": 6, "prompt": "Shakespeare ________ (write) Romeo and Juliet in the late 16th century.", "verb": "write", "answer": "wrote", "hint": "Irregular past of write.", "context": "Historical fact."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["discovered", "Fleming", "in", "penicillin", "1928"], "solution": "Fleming discovered penicillin in 1928", "translation": "Historical discovery."},
                {"id": 2, "tokens": ["didn't", "the", "receive", "we", "contract", "yesterday"], "solution": "We didn't receive the contract yesterday", "translation": "Negative past transaction."},
                {"id": 3, "tokens": ["did", "where", "spend", "holiday", "their", "they", "?"], "solution": "Where did they spend their holiday ?", "translation": "Wh- past question."},
                {"id": 4, "tokens": ["arrived", "train", "twenty", "the", "minutes", "ago"], "solution": "The train arrived twenty minutes ago", "translation": "Past arrival with ago."}
            ],
            "errorDetective": [
                {"id": 1, "sentence": "Did she went to the library yesterday afternoon?", "errorPart": "went", "correction": "go", "explanation": "After 'Did', the verb must be bare infinitive 'go'."},
                {"id": 2, "sentence": "I have seen that historic film two days ago.", "errorPart": "have seen", "correction": "saw", "explanation": "'two days ago' is a closed past period requiring Past Simple 'saw'."},
                {"id": 3, "sentence": "He didn't ate breakfast before leaving for work.", "errorPart": "ate", "correction": "eat", "explanation": "'didn't' requires bare base verb 'eat'."},
                {"id": 4, "sentence": "Did you were satisfied with the hotel service?", "errorPart": "Did you were", "correction": "Were you", "explanation": "The verb 'to be' never uses 'did'."}
            ],
            "adverbMastery": [
                {"id": 1, "baseSentence": "I finished the complete financial audit.", "adverb": "yesterday", "options": ["Yesterday I finished the complete financial audit.", "I yesterday finished the complete financial audit.", "I finished yesterday the complete financial audit."], "correct": 0, "explanation": "Finished time anchors sit naturally at the sentence edge."},
                {"id": 2, "baseSentence": "She walked to the university campus.", "adverb": "always", "options": ["She always walked to the university campus.", "She walked always to the university campus.", "Always she walked to the university campus."], "correct": 0, "explanation": "Past frequency adverbs go before the main V2 verb."}
            ],
            "masteryExam": [
                {"id": 1, "question": "Which of the following sentences is 100% grammatically correct in Past Simple?", "options": ["We didn't saw the presentation.", "Where did you buy that camera?", "She was arrived late yesterday.", "Did they went to France?"], "correct": 1, "explanation": "'Where did you buy' follows (Wh-) + Did + Subject + Base Verb.", "topic": "Past Questions"},
                {"id": 2, "question": "Identify the irregular verb among these four options:", "options": ["enjoy", "stay", "speak", "clean"], "correct": 2, "explanation": "'Speak' is irregular (speak → spoke → spoken).", "topic": "Irregular Verbs"},
                {"id": 3, "question": "What is the primary difference between Past Simple and Present Perfect?", "options": ["Past Simple requires a finished, closed past time; Present Perfect connects past to now.", "Past Simple is only for questions.", "Present Perfect cannot be used with people.", "There is no difference."], "correct": 0, "explanation": "Past Simple deals with finished time periods; Present Perfect bridges past to present.", "topic": "Tense Contrast"},
                {"id": 4, "question": "How is the past simple of 'cry' spelled?", "options": ["cryed", "cried", "cryied", "crid"], "correct": 1, "explanation": "Consonant + y changes to -ied.", "topic": "Spelling Rules"},
                {"id": 5, "question": "Complete: 'Why ________ you ________ to the doctor when you felt sick?'", "options": ["did / go", "did / went", "were / go", "have / went"], "correct": 0, "explanation": "Wh- + did + subject + base verb 'go'.", "topic": "Wh- Questions"},
                {"id": 6, "question": "The pronunciation of '-ed' in 'visited' is:", "options": ["/t/", "/d/", "/ɪd/ (extra syllable)", "silent"], "correct": 2, "explanation": "Verbs ending in /t/ or /d/ add the extra syllable /ɪd/.", "topic": "Phonetics"},
                {"id": 7, "question": "Which time anchor CANNOT be used with Past Simple?", "options": ["Yesterday", "In 1999", "Three days ago", "Since 2010"], "correct": 3, "explanation": "'Since 2010' indicates a duration up to the present and requires Present Perfect.", "topic": "Signal Words"},
                {"id": 8, "question": "Choose the correct negative: 'They ________ ready for the exam.'", "options": ["didn't be", "weren't", "wasn't", "didn't were"], "correct": 1, "explanation": "The verb 'to be' uses 'weren't' without 'did'.", "topic": "Verb To Be"},
                {"id": 9, "question": "What is the past simple of 'catch'?", "options": ["catched", "caught", "cot", "cought"], "correct": 1, "explanation": "'Catch' becomes 'caught'.", "topic": "Irregular Verbs"},
                {"id": 10, "question": "In storytelling, what is the role of Past Simple?", "options": ["It provides the sequential chronological chain of events.", "It only describes future possibilities.", "It describes things happening right now.", "It is only used in poetry."], "correct": 0, "explanation": "Past Simple moves the narrative timeline forward step by step.", "topic": "Narrative Function"},
                {"id": 11, "question": "Complete: 'While she was writing the report, the computer ________.'", "options": ["crashed", "was crashed", "has crashed", "crashing"], "correct": 0, "explanation": "Sudden interruption to an ongoing scene takes Past Simple 'crashed'.", "topic": "Interrupted Actions"},
                {"id": 12, "question": "Which sentence correctly expresses a finished past habit?", "options": ["I used to play chess every weekend.", "I am playing chess every weekend.", "I will play chess every weekend.", "I play chess yesterday."], "correct": 0, "explanation": "'Used to play' or Past Simple 'played' expresses finished past habits.", "topic": "Past Habits"}
            ]
        }
    }

    return tenses

print("Function build_all_tenses defined.")
