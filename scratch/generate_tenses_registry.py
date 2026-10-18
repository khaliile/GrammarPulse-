import json
import os

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'tensesRegistry.js'))

TENSES_METADATA = [
  {"id": "pastSimple", "chapterNumber": 1, "title": "Past Simple", "fullTitle": "1. Past Simple Tense", "level": "A2 CEFR", "aspect": "Simple", "time": "Past", "color": "#8b5cf6", "badge": "CHAPTER 1 • FINISHED PAST", "formula": "Subject + Verb-ED / Irregular V2 | didn't + base | Did...?", "summary": "Finished actions, historical narratives, completed time periods, and past states."},
  {"id": "presentSimple", "chapterNumber": 2, "title": "Present Simple", "fullTitle": "2. Present Simple Tense", "level": "A1 – B1 CEFR", "aspect": "Simple", "time": "Present", "color": "#10b981", "badge": "CHAPTER 2 • TIMELESS REALITY", "formula": "Subject + Verb(s) | doesn't + base | Does...?", "summary": "Timeless facts, daily habits, universal laws, permanent states, and timetables."},
  {"id": "futureSimple", "chapterNumber": 3, "title": "Future Simple", "fullTitle": "3. Future Simple (Will & Going To)", "level": "A2 – B1 CEFR", "aspect": "Simple", "time": "Future", "color": "#14b8a6", "badge": "CHAPTER 3 • FUTURE REALITY", "formula": "Subject + WILL + Base | won't + base | Will...?", "summary": "Spontaneous decisions, promises, voluntary offers, predictions and intentions."},
  {"id": "pastContinuous", "chapterNumber": 4, "title": "Past Continuous", "fullTitle": "4. Past Continuous Tense", "level": "B1 CEFR", "aspect": "Continuous", "time": "Past", "color": "#ec4899", "badge": "CHAPTER 4 • PAST IN PROGRESS", "formula": "Subject + WAS / WERE + Verb-ING", "summary": "Actions in progress at a specific past moment, parallel background activities, interrupted scenes."},
  {"id": "presentContinuous", "chapterNumber": 5, "title": "Present Continuous", "fullTitle": "5. Present Continuous Tense", "level": "A2 CEFR", "aspect": "Continuous", "time": "Present", "color": "#6366f1", "badge": "CHAPTER 5 • IN PROGRESS NOW", "formula": "Subject + AM / IS / ARE + Verb-ING", "summary": "Actions happening right now, temporary situations, evolving trends, planned personal arrangements."},
  {"id": "futureContinuous", "chapterNumber": 6, "title": "Future Continuous", "fullTitle": "6. Future Continuous Tense", "level": "B2 CEFR", "aspect": "Continuous", "time": "Future", "color": "#a855f7", "badge": "CHAPTER 6 • FUTURE IN PROGRESS", "formula": "Subject + WILL BE + Verb-ING", "summary": "Actions that will be actively in progress at a specific future benchmark moment."},
  {"id": "pastPerfect", "chapterNumber": 7, "title": "Past Perfect Simple", "fullTitle": "7. Past Perfect Simple", "level": "B2 CEFR", "aspect": "Perfect", "time": "Past", "color": "#3b82f6", "badge": "CHAPTER 7 • PAST BEFORE PAST", "formula": "Subject + HAD + Past Participle (V3)", "summary": "Chronological precedence: establishing which of two past actions occurred first."},
  {"id": "presentPerfect", "chapterNumber": 8, "title": "Present Perfect Simple", "fullTitle": "8. Present Perfect Simple", "level": "B1 CEFR", "aspect": "Perfect", "time": "Present", "color": "#f59e0b", "badge": "CHAPTER 8 • PAST-PRESENT BRIDGE", "formula": "Subject + HAVE / HAS + Past Participle (V3)", "summary": "The bridge between past and present: life experiences, recent actions with visible results."},
  {"id": "futurePerfect", "chapterNumber": 9, "title": "Future Perfect Simple", "fullTitle": "9. Future Perfect Simple", "level": "B2 CEFR", "aspect": "Perfect", "time": "Future", "color": "#f97316", "badge": "CHAPTER 9 • COMPLETED BY FUTURE", "formula": "Subject + WILL HAVE + Past Participle (V3)", "summary": "Actions that will be completed and finished before a specific future deadline."},
  {"id": "pastPerfectCont", "chapterNumber": 10, "title": "Past Perfect Continuous", "fullTitle": "10. Past Perfect Continuous", "level": "B2+ CEFR", "aspect": "Perfect Continuous", "time": "Past", "color": "#e11d48", "badge": "CHAPTER 10 • PAST DURATION & CAUSE", "formula": "Subject + HAD BEEN + Verb-ING", "summary": "Continuous duration leading up to a specific past moment, visible past evidence."},
  {"id": "presentPerfectCont", "chapterNumber": 11, "title": "Present Perfect Continuous", "fullTitle": "11. Present Perfect Continuous", "level": "B1+ CEFR", "aspect": "Perfect Continuous", "time": "Present", "color": "#06b6d4", "badge": "CHAPTER 11 • DURATION UP TO NOW", "formula": "Subject + HAVE / HAS BEEN + Verb-ING", "summary": "Continuous duration continuing up to the present moment, recent visible evidence."},
  {"id": "futurePerfectCont", "chapterNumber": 12, "title": "Future Perfect Continuous", "fullTitle": "12. Future Perfect Continuous", "level": "C1 CEFR", "aspect": "Perfect Continuous", "time": "Future", "color": "#0284c7", "badge": "CHAPTER 12 • FUTURE DURATION BENCHMARK", "formula": "Subject + WILL HAVE BEEN + Verb-ING", "summary": "Continuous ongoing duration measured up to a benchmark moment in the future."},
  {"id": "conditionals", "chapterNumber": 13, "title": "Conditionals System", "fullTitle": "13. Complete Conditionals System", "level": "B1 – C1 CEFR", "aspect": "Capstone", "time": "Multi-Time", "color": "#ef4444", "badge": "CAPSTONE • HYPOTHETICAL WORLDS", "formula": "If + condition clause, result clause (0, 1st, 2nd, 3rd, Mixed)", "summary": "Cause & effect, hypothetical conditions, counterfactual scenarios, and conditional logic."},
  {"id": "passiveVoice", "chapterNumber": 14, "title": "Passive Voice Architecture", "fullTitle": "14. Passive Voice Architecture", "level": "B1 – C2 CEFR", "aspect": "Capstone", "time": "Multi-Time", "color": "#64748b", "badge": "CAPSTONE • AGENT TRANSFORMATION", "formula": "Object + BE (tense-conjugated) + Past Participle (V3) (+ by Agent)", "summary": "Shifting informational focus from the actor to the action, object, and recipient."}
]

# We will import the pastSimple from our previous build or construct all
from build_registry_complete import build_all_tenses
all_tenses = build_all_tenses()

# Helper builder for the other tenses
def make_tense(meta_item, definition, core_concept, timeline, signals, pillars, use_cases, aff_formula, neg_formula, q_formula, aff_ex, neg_ex, q_ex, spelling_data, freq_data, traps_data, exam_qs):
    return {
        "meta": {
            "id": meta_item["id"],
            "chapterNumber": meta_item["chapterNumber"],
            "title": meta_item["title"] + " Tense",
            "fullTitle": meta_item["fullTitle"],
            "level": meta_item["level"],
            "aspect": meta_item["aspect"],
            "time": meta_item["time"],
            "category": meta_item["badge"],
            "color": meta_item["color"],
            "badge": meta_item["badge"],
            "formula": meta_item["formula"],
            "summary": meta_item["summary"]
        },
        "overview": {
            "definition": definition,
            "coreConcept": core_concept,
            "timelineInsight": timeline,
            "signalWords": signals,
            "pillars": pillars
        },
        "useCases": use_cases,
        "grammarStructures": {
            "affirmative": {
                "rule": f"Affirmative: {aff_formula}",
                "formula": aff_formula,
                "examples": aff_ex,
                "structureBreakdown": [{"group": "Standard Formation", "form": aff_formula, "rule": "Follow standard auxiliary and verbal conjugation rules."}]
            },
            "negative": {
                "rule": f"Negative: {neg_formula}",
                "formula": neg_formula,
                "examples": neg_ex,
                "auxRule": "Negate via auxiliary particle contraction (not / n't)."
            },
            "interrogative": {
                "rule": f"Interrogative: {q_formula}",
                "formula": q_formula,
                "examples": q_ex,
                "inversionRule": "Invert auxiliary verb before subject."
            },
            "verbToBe": {
                "title": "Copular Verb TO BE",
                "formula": f"Conjugation with 'be' in {meta_item['title']}",
                "examples": [f"Demonstrating copula in {meta_item['title']}."]
            },
            "verbHave": {
                "title": "Verb TO HAVE",
                "formula": f"Conjugation with 'have' in {meta_item['title']}",
                "examples": [f"Demonstrating 'have' in {meta_item['title']}."]
            }
        },
        "spellingRules": spelling_data,
        "adverbsOfFrequency": freq_data,
        "adverbPlacementRules": [
            {"title": "Sentence End Anchors", "subtitle": "Final Position", "formula": "Subject + Verb + [Object] + [TIME ANCHOR]", "explanation": "Time markers typically occur at sentence boundaries.", "examples": [signals[0]["example"] if signals else "Sentence example."]},
            {"title": "Mid-Position Adverbs", "subtitle": "Before Main Verb", "formula": "Subject + [ADVERB] + Verb", "explanation": "Frequency adverbs precede the main action verb.", "examples": ["Positioned naturally before the main verb."]},
            {"title": "Auxiliary Bracket Position", "subtitle": "Between Aux and Verb", "formula": "Subject + Aux + [ADVERB] + Verb", "explanation": "In compound verb forms, adverbs sit between auxiliary and main verb.", "examples": ["Placed immediately after the first auxiliary."]}
        ],
        "commonTraps": traps_data,
        "resumeSummary": {
            "title": f"{meta_item['title']} Executive Summary",
            "subtitle": f"Master Blueprint for {meta_item['aspect']} Aspect ({meta_item['time']})",
            "formulaMatrix": {
                "affirmative": aff_formula,
                "negative": neg_formula,
                "question": q_formula
            },
            "spellingPills": [f"Follow canonical {meta_item['title']} morphology.", "Observe auxiliary contraction rules.", "Respect stative verb constraints."],
            "adverbGoldenFormula": f"Core time signals: {', '.join([s['word'] for s in signals[:4]])}.",
            "markdownContent": f"# {meta_item['title']} Cheat Sheet\\n\\n## Canonical Architecture\\n- Affirmative: {aff_formula}\\n- Negative: {neg_formula}\\n- Question: {q_formula}\\n\\n## Core Reality\\n{definition}"
        },
        "exercises": {
            "quiz": [
                {"id": 1, "question": f"Which sentence is grammatically correct in {meta_item['title']}?", "options": [aff_ex[0] if aff_ex else "Option A", "Incorrect verb form error.", "Incorrect auxiliary choice.", "Double marked error."], "correct": 0, "explanation": f"Properly follows canonical formula: {aff_formula}", "hint": "Check standard formula."},
                {"id": 2, "question": f"How is a negative formed in {meta_item['title']}?", "options": ["By placing 'not' after the main verb.", f"Using canonical negative pattern: {neg_formula}.", "By omitting the auxiliary.", "By changing subject to third person."], "correct": 1, "explanation": f"Follows: {neg_formula}", "hint": "Look for auxiliary negation."},
                {"id": 3, "question": f"Which signal word is most characteristic of {meta_item['title']}?", "options": [signals[0]["word"] if signals else "Signal A", "yesterday (finished past only)", "right now (immediate continuous only)", "never (frequency only)"], "correct": 0, "explanation": f"'{signals[0]['word'] if signals else 'Signal'}' is the signature marker.", "hint": "Signature time anchor."},
                {"id": 4, "question": f"In questions for {meta_item['title']}, where does the auxiliary verb go?", "options": ["Before the subject (inversion).", "At the very end of the sentence.", "After the main verb.", "Nowhere, auxiliaries are deleted."], "correct": 0, "explanation": "English questions invert the first auxiliary before the subject.", "hint": "Inversion rule."}
            ],
            "fillBlanks": [
                {"id": 1, "prompt": f"Practice prompt for {meta_item['title']}: Subject ________ (study) with focus.", "verb": "study", "answer": "study", "hint": "Apply target tense conjugation.", "context": f"{meta_item['title']} practice."}
            ],
            "sentenceScrambler": [
                {"id": 1, "tokens": ["she", "the", "completed", "project", "successfully"], "solution": "She completed the project successfully", "translation": "Sentence syntax practice."}
            ],
            "errorDetective": [
                {"id": 1, "sentence": "He did not understood the complex explanation.", "errorPart": "understood", "correction": "understand", "explanation": "Auxiliary absorbs tense; main verb stays in base form."}
            ],
            "adverbMastery": [
                {"id": 1, "baseSentence": "She finished the report.", "adverb": signals[0]["word"] if signals else "soon", "options": [f"She finished the report {signals[0]['word'] if signals else 'soon'}.", "She soon finished the report yesterday.", "Finished soon she."], "correct": 0, "explanation": "Time anchor placed at natural sentence boundary."}
            ],
            "masteryExam": exam_qs
        }
    }

# 3. Future Simple
all_tenses["futureSimple"] = make_tense(
    TENSES_METADATA[2],
    "The Future Simple expresses spontaneous decisions made at the moment of speaking, promises, offers, predictions without immediate evidence, and firm future intentions.",
    "Will = spontaneous decision, promise, prediction based on belief. Be going to = prior plan, prediction with sensory evidence.",
    "Visualized as projecting forward from the present moment into the unwritten future timeline.",
    [
        {"word": "Tomorrow / Tomorrow morning", "example": "I will call you tomorrow morning."},
        {"word": "Next week / month / year", "example": "We are going to launch the platform next month."},
        {"word": "In the future / Soon", "example": "Electric planes will soon transform regional travel."},
        {"word": "I think / I believe / Probably", "example": "I think it will rain later today."},
        {"word": "I promise / I swear", "example": "I promise I will never reveal your secret."},
        {"word": "In 2035 / Someday", "example": "Humans will establish a permanent base on Mars."}
    ],
    [
        {"icon": "Zap", "label": "Instant Decisions", "desc": "Decisions made at the moment of speaking — 'The doorbell is ringing. I will get it!'", "color": "#14b8a6", "bg": "rgba(20, 184, 166, 0.08)", "border": "rgba(20, 184, 166, 0.25)"},
        {"icon": "Heart", "label": "Promises & Offers", "desc": "Voluntary commitments — 'I will help you with your presentation.'", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"},
        {"icon": "Globe", "label": "Predictions", "desc": "Forecasting based on personal intuition — 'Artificial intelligence will revolutionize diagnostics.'", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
        {"icon": "Calendar", "label": "Prior Plans (Going To)", "desc": "Pre-decided intentions — 'We are going to visit Kyoto next spring.'", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"}
    ],
    [
        {"id": "spontaneous", "title": "1. Spontaneous Instant Decisions", "tag": "Immediate Reflex", "icon": "Zap", "summary": "Decisions triggered at the exact moment of speech.", "explanation": "When something happens and you decide your reaction on the spot, use 'will', never 'going to'.", "examples": [{"sentence": "The phone is ringing. I'll answer it immediately.", "translation": "Instant decision at sound of ring.", "focus": "I'll answer"}, {"sentence": "It is cold in here. I will close the window.", "translation": "Immediate voluntary reaction.", "focus": "will close"}], "teacherNote": "Never say 'I am going to close it' for an instant reflex!"},
        {"id": "promises", "title": "2. Promises, Vows & Oaths", "tag": "Commitment", "icon": "Heart", "summary": "Guarantees made between people.", "explanation": "Whenever you make a promise or guarantee your word, English always uses 'will'.", "examples": [{"sentence": "I promise I will never disclose this confidential data.", "translation": "Firm personal vow.", "focus": "will never disclose"}, {"sentence": "Don't worry; I won't let you down.", "translation": "Reassurance promise.", "focus": "won't let"}], "teacherNote": "'I promise I will' is a rigid collocated formula."},
        {"id": "predictions", "title": "3. Predictions Based on Opinion & Belief", "tag": "Forecasting", "icon": "Globe", "summary": "What you think will happen in the future.", "explanation": "Paired with 'I think', 'probably', 'perhaps', 'doubtless'.", "examples": [{"sentence": "I think renewable energy will power 80% of grids by 2040.", "translation": "Technological prediction.", "focus": "will power"}, {"sentence": "Our team will probably win the tournament.", "translation": "Estimated likelihood.", "focus": "will probably win"}], "teacherNote": "Contrast with 'be going to' when physical evidence is right in front of your eyes (e.g., dark clouds)."},
        {"id": "offers", "title": "4. Voluntary Offers & Willingness", "tag": "Helping Hand", "icon": "Home", "summary": "Volunteering to help someone with a task.", "explanation": "Used when graciously stepping in to assist.", "examples": [{"sentence": "Those suitcases look heavy; I will carry them for you.", "translation": "Helpful offer.", "focus": "will carry"}, {"sentence": "Shall I open the gate for you?", "translation": "Polite formal offer with shall.", "focus": "Shall I open"}], "teacherNote": "Use 'Shall I / Shall we' for polite suggestions in British English."},
        {"id": "refusal", "title": "5. Refusals & Stubborn Inanimate Objects", "tag": "Resistance", "icon": "Radio", "summary": "When a person or machine refuses to cooperate.", "explanation": "'Won't' can express stubborn unwillingness.", "examples": [{"sentence": "The engine won't start no matter how many times I turn the key.", "translation": "Mechanical stubborn refusal.", "focus": "won't start"}, {"sentence": "He won't listen to any sound advice.", "translation": "Personal obstinacy.", "focus": "won't listen"}], "teacherNote": "'It won't open' is everyday native English for a stuck lid or door."},
        {"id": "intentions", "title": "6. Prior Plans & Intentions (Be Going To)", "tag": "Pre-decided Plan", "icon": "Calendar", "summary": "Decisions formulated BEFORE speaking.", "explanation": "When you have already bought tickets or formulated a plan, use 'be going to'.", "examples": [{"sentence": "We are going to move to Vancouver next autumn.", "translation": "Pre-meditated family relocation.", "focus": "are going to move"}, {"sentence": "She is going to study neurology at Oxford.", "translation": "Firm academic intention.", "focus": "is going to study"}], "teacherNote": "Will = decided NOW. Going to = decided BEFORE."}
    ],
    "Subject + WILL + Base Verb  |  AM/IS/ARE + GOING TO + Base Verb",
    "Subject + WON'T (will not) + Base Verb",
    "WILL + Subject + Base Verb?  |  (Wh-) + WILL + Subject + Base Verb?",
    ["She will lead the new robotics initiative.", "We will arrive in Tokyo before dusk.", "I will send you the confirmation email shortly."],
    ["I won't forget your kindness.", "They won't compromise on quality standards.", "The server won't reboot automatically."],
    ["Will you attend the symposium tomorrow?", "When will the results be announced?", "Will artificial intelligence cure cancer?"],
    {
        "title": "Will Contractions & 'Be Going To' Phonetics",
        "subtitle": "Natural spoken English contractions: I'll, you'll, he'll, won't",
        "rules": [
            {"id": 1, "tag": "Contractions", "title": "Contraction with Subject Pronouns", "rule": "I will → I'll | you will → you'll | they will → they'll", "examples": ["I'll call you", "She'll arrive soon"], "phonetic": "/aɪl/, /juːl/, /ʃiːl/", "explanation": "Native speakers contract 'will' into double -ll in speech and informal writing."},
            {"id": 2, "tag": "Negative", "title": "Negative Contraction: Won't", "rule": "will not → won't (never willn't)", "examples": ["I won't go", "He won't agree"], "phonetic": "/woʊnt/ with closed /oʊ/ vowel", "explanation": "Historic contraction of Old English 'woll not' into 'won't'."},
            {"id": 3, "tag": "Going To", "title": "Spoken 'Gonna' Reduction", "rule": "going to + verb → gonna (informal speech only)", "examples": ["I'm gonna leave", "It's gonna rain"], "phonetic": "/ˈɡənə/", "explanation": "Extremely frequent in informal spoken English, never in formal written exams."}
        ],
        "phoneticTips": ["Pronounce 'won't' (/woʊnt/) with a long vowel, distinct from 'want' (/wɑːnt/ or /wɒnt/).", "'I'll' rhymes with 'mile' or 'tile'."]
    },
    [
        {"adverb": "Tomorrow", "percentage": 100, "color": "#14b8a6", "example": "I will send the draft tomorrow.", "translation": "The day following today."},
        {"adverb": "Next week", "percentage": 90, "color": "#3b82f6", "example": "We will review the metrics next week.", "translation": "Coming calendar week."},
        {"adverb": "Soon", "percentage": 85, "color": "#f59e0b", "example": "The train will arrive soon.", "translation": "In a short period from now."},
        {"adverb": "Probably", "percentage": 75, "color": "#8b5cf6", "example": "She will probably accept the promotion.", "translation": "High likelihood."},
        {"adverb": "In the future", "percentage": 70, "color": "#ec4899", "example": "Cars will be fully autonomous in the future.", "translation": "Unspecified coming era."},
        {"adverb": "Someday", "percentage": 50, "color": "#10b981", "example": "Someday we will travel to the stars.", "translation": "At some indefinite future point."}
    ],
    [
        {"title": "Confusing 'Will' with 'Be Going To'", "bad": "Look at those dark clouds! It will rain.", "good": "Look at those dark clouds! It is going to rain.", "explanation": "When there is immediate physical sensory evidence right now (dark clouds), use 'be going to', not 'will'.", "why": "Immediate present evidence signals an impending event ('be going to')."},
        {"title": "Using 'Will' after Time Conjunctions (when, as soon as, if)", "bad": "When I will arrive at the airport, I will call you.", "good": "When I arrive at the airport, I will call you.", "explanation": "In future time clauses introduced by when, as soon as, before, after, or if, English uses Present Simple, NOT will!", "why": "The time conjunction already sets the future frame; double 'will' is prohibited in English syntax."},
        {"title": "Double Marking 'Will' with Modals", "bad": "He will can help us tomorrow.", "good": "He will be able to help us tomorrow.", "explanation": "You cannot stack modal verbs. Use 'be able to' instead of 'can' after 'will'.", "why": "'Will' and 'can' are both modal auxiliaries and cannot govern one another."},
        {"title": "Saying 'I am going to open it' for Sudden Doorbell", "bad": "The doorbell is ringing. I am going to answer it.", "good": "The doorbell is ringing. I will answer it.", "explanation": "Spontaneous decisions made right at the moment of speech always require 'will'.", "why": "'Going to' implies you planned to answer the door before the bell even rang!"},
        {"title": "Spelling Negative 'Will' as 'willn't'", "bad": "I willn't forget your help.", "good": "I won't forget your help.", "explanation": "The negative contraction of 'will not' is universally 'won't'.", "why": "Derived historically from Old English 'woll not'."},
        {"title": "Using 'Will' for Definite Timetable Departures", "bad": "The flight will depart at 08:00 AM tomorrow.", "good": "The flight departs at 08:00 AM tomorrow.", "explanation": "Official public transport and institutional timetables use Present Simple.", "why": "Fixed institutional schedules are treated as immutable facts in the Present Simple."}
    ],
    [
        {"id": 1, "question": "Someone drops their heavy grocery bag in front of you. Which is the natural response?", "options": ["I will help you pick them up.", "I am going to help you pick them up.", "I help you pick them up.", "I will to help you."], "correct": 0, "explanation": "Spontaneous voluntary decisions made on the spot require 'will'.", "topic": "Instant Decisions"},
        {"id": 2, "question": "Look at the thermometer: it is -10°C and dropping rapidly. Which sentence is correct?", "options": ["The lake is going to freeze tonight.", "The lake will to freeze tonight.", "The lake freezes tomorrow will.", "The lake shall freezing."], "correct": 0, "explanation": "Predictions based on observable physical evidence take 'be going to'.", "topic": "Evidence Predictions"},
        {"id": 3, "question": "Complete the time clause: 'As soon as the manager ________, we will begin the conference.'", "options": ["will arrive", "arrives", "is arriving will", "arrived will"], "correct": 1, "explanation": "Future time clauses with 'as soon as' take Present Simple ('arrives'), not 'will'.", "topic": "Time Clauses"},
        {"id": 4, "question": "What is the correct negative contraction of 'will not'?", "options": ["willn't", "won't", "wont't", "wilnot"], "correct": 1, "explanation": "'won't' is the universally correct contraction.", "topic": "Contractions"},
        {"id": 5, "question": "Which sentence expresses a firm promise?", "options": ["I promise I will never share your password.", "I promise I am going to share never your password.", "I promise I share not your password.", "I will promised."], "correct": 0, "explanation": "Promises are canonically formed with 'will'.", "topic": "Promises"}
    ]
)

# 4. Past Continuous
all_tenses["pastContinuous"] = make_tense(
    TENSES_METADATA[3],
    "The Past Continuous describes actions that were actively in progress at a specific moment in the past, parallel simultaneous activities, or background scenes interrupted by a sudden Past Simple event.",
    "Visualized as an ongoing duration or wavy timeline in the past that was already happening when another point event occurred.",
    "A continuous background ribbon in the past, intersected by point actions.",
    [
        {"word": "While / As", "example": "While I was driving home, it began to snow."},
        {"word": "At 8:00 PM yesterday", "example": "At 8:00 PM yesterday, we were dining at the bistro."},
        {"word": "All evening / All night", "example": "They were studying all evening for the exam."},
        {"word": "When (interrupted by Past Simple)", "example": "I was reading when the phone rang."}
    ],
    [
        {"icon": "Clock", "label": "Specific Moment in Progress", "desc": "Action midway through at a designated past time — 'At midnight, I was still reading.'", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"},
        {"icon": "Radio", "label": "Parallel Simultaneous Actions", "desc": "Two continuous actions happening at the same time — 'While she was cooking, he was setting the table.'", "color": "#8b5cf6", "bg": "rgba(139, 92, 246, 0.08)", "border": "rgba(139, 92, 246, 0.25)"},
        {"icon": "Zap", "label": "Setting the Background Scene", "desc": "Painting the backdrop of a story — 'The birds were singing, and the sun was shining.'", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
        {"icon": "Heart", "label": "Interrupted Situations", "desc": "Ongoing action broken by sudden Past Simple — 'We were watching a movie when the lights went out.'", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"}
    ],
    [
        {"id": "interrupted", "title": "1. Ongoing Action Interrupted by Past Simple", "tag": "Interruption", "icon": "Zap", "summary": "Continuous background action broken by a sudden event.", "explanation": "Past Continuous = ongoing backdrop ('was taking a shower'). Past Simple = sudden event ('the doorbell rang').", "examples": [{"sentence": "I was taking a shower when the doorbell rang.", "translation": "Ongoing action interrupted.", "focus": "was taking"}, {"sentence": "While they were debating, the moderator intervened.", "translation": "Interrupted discussion.", "focus": "were debating"}], "teacherNote": "'While' + Past Continuous; 'When' + Past Simple."},
        {"id": "moment", "title": "2. Action in Progress at an Exact Past Hour", "tag": "Past Snapshot", "icon": "Clock", "summary": "In the middle of an action at a specific time benchmark.", "explanation": "At that exact hour, the action had already started and had not yet finished.", "examples": [{"sentence": "At 10:30 PM last night, I was reading a mystery novel.", "translation": "Active reading at 10:30 PM.", "focus": "was reading"}, {"sentence": "What were you doing at 3:00 PM yesterday?", "translation": "Inquiry about activity at specific hour.", "focus": "were you doing"}], "teacherNote": "Past Simple ('I read at 10:30') means you started then. Past Continuous means you were already in the middle of it."},
        {"id": "parallel", "title": "3. Two Parallel Simultaneous Actions", "tag": "Dual Actions", "icon": "Radio", "summary": "Two people doing continuous actions at the same time.", "explanation": "Connected with 'while', both verbs take Past Continuous.", "examples": [{"sentence": "While Marco was cooking risotto, Sofia was setting the dining table.", "translation": "Simultaneous parallel dinner prep.", "focus": "was cooking / was setting"}, {"sentence": "The students were listening while the professor was explaining the equation.", "translation": "Simultaneous lecture activity.", "focus": "were listening / was explaining"}], "teacherNote": "Both verbs retain continuous aspect because neither interrupted the other."},
        {"id": "backdrop", "title": "4. Story Atmosphere & Background Description", "tag": "Literary Scene", "icon": "BookOpen", "summary": "Painting the scenery before the plot begins.", "explanation": "Novels open with Past Continuous to paint the sensory scene.", "examples": [{"sentence": "The rain was pouring down, and the wind was howling through the ancient pines.", "translation": "Sensory atmospheric backdrop.", "focus": "was pouring / was howling"}, {"sentence": "The crowd was cheering loudly as the players stepped onto the pitch.", "translation": "Stadium atmosphere.", "focus": "was cheering"}], "teacherNote": "Once the scene is painted, the plot actions move forward in Past Simple."},
        {"id": "polite", "title": "5. Polite Requests & Tentative Inquiries", "tag": "Polite Distance", "icon": "Heart", "summary": "Softening an inquiry to sound more courteous.", "explanation": "Using continuous past creates polite psychological distance.", "examples": [{"sentence": "I was wondering if you had a few minutes to review my resume.", "translation": "Courteous polite inquiry.", "focus": "was wondering"}, {"sentence": "We were hoping you could join us for dinner tonight.", "translation": "Gentle invitation.", "focus": "were hoping"}], "teacherNote": "Much softer than 'I wonder if...' or 'Do you have time?'."},
        {"id": "repeatedAnnoying", "title": "6. Annoying Past Habits (with 'always')", "tag": "Past Frustration", "icon": "AlertTriangle", "summary": "Repeated actions that irritated the speaker.", "explanation": "Paired with 'always' or 'constantly' to express past irritation.", "examples": [{"sentence": "My former roommate was always leaving dirty dishes in the sink.", "translation": "Past annoying habit.", "focus": "was always leaving"}, {"sentence": "He was constantly interrupting people during team meetings.", "translation": "Chronic frustrating behavior.", "focus": "was constantly interrupting"}], "teacherNote": "Contrast with neutral Past Simple: 'He always left at 5' is a neutral fact."}
    ],
    "Subject + WAS / WERE + Verb-ING",
    "Subject + WAS NOT / WERE NOT (wasn't/weren't) + Verb-ING",
    "WAS / WERE + Subject + Verb-ING?",
    ["I was writing an article when the power cut off.", "They were traveling across Scandinavia all July.", "She was designing the architectural blueprint."],
    ["He wasn't paying attention during the lecture.", "We weren't expecting any visitors at that late hour.", "The system wasn't recording telemetry data."],
    ["Were you sleeping when I called your mobile?", "What was she doing in the laboratory at midnight?", "Were they working on the proposal all evening?"],
    {
        "title": "-ING Suffix Addition & Was/Were Distribution",
        "subtitle": "Conjugating the auxiliary TO BE in past tense + gerund participle",
        "rules": [
            {"id": 1, "tag": "Subject Agreement", "title": "Was vs Were Distribution", "rule": "I / He / She / It → WAS  |  You / We / They → WERE", "examples": ["She was singing", "They were walking"], "phonetic": "/wɒz/ or /wəz/, /wɜːr/", "explanation": "'Was' for singular (including I); 'were' for plural and you."},
            {"id": 2, "tag": "Drop E", "title": "Ending in -e: Drop E before -ing", "rule": "write → writing | dance → dancing | make → making", "examples": ["make → making", "drive → driving"], "phonetic": "Standard vowel stem", "explanation": "Silent final -e drops before appending -ing."},
            {"id": 3, "tag": "Double Consonant", "title": "Double final consonant before -ing", "rule": "swim → swimming | run → running | sit → sitting", "examples": ["sit → sitting", "stop → stopping"], "phonetic": "Short vowel preserved", "explanation": "One vowel followed by one consonant doubles the consonant."}
        ],
        "phoneticTips": ["In connected speech, 'was' is usually unstressed /wəz/, and 'were' is /wər/."]
    },
    [
        {"adverb": "While", "percentage": 100, "color": "#ec4899", "example": "While I was studying, my sister called.", "translation": "During the ongoing time."},
        {"adverb": "At 8:00 PM yesterday", "percentage": 95, "color": "#3b82f6", "example": "At 8 PM yesterday, we were eating dinner.", "translation": "Exact past hour in progress."},
        {"adverb": "All night / day", "percentage": 90, "color": "#f59e0b", "example": "It was raining all night.", "translation": "Continuous uninterrupted duration."},
        {"adverb": "When", "percentage": 85, "color": "#8b5cf6", "example": "When the lights went out, I was reading.", "translation": "Time of sudden interruption."},
        {"adverb": "Constantly / Always", "percentage": 75, "color": "#10b981", "example": "He was always complaining.", "translation": "Irritating repeated frequency."}
    ],
    [
        {"title": "Using Past Continuous with Stative Verbs", "bad": "I was knowing the answer when she asked.", "good": "I knew the answer when she asked.", "explanation": "Verbs of perception, cognition, and emotion (know, love, believe, understand) NEVER take continuous aspect.", "why": "Mental states do not have physical continuous motion in progress."},
        {"title": "Swapping 'When' and 'While' Clauses", "bad": "I was walking home while the storm broke.", "good": "I was walking home when the storm broke. / While I was walking home, the storm broke.", "explanation": "'While' introduces the continuous background ('was walking'); 'when' introduces the sudden point event ('broke').", "why": "Linguistic convention: while + ongoing duration; when + sudden moment."},
        {"title": "Using 'was' with You or Plurals", "bad": "You was working late yesterday.", "good": "You were working late yesterday.", "explanation": "'You' always takes 'were', whether referring to one person or multiple people.", "why": "'You' historically governed plural verb agreement in English syntax."},
        {"title": "Omitting the Auxiliary Verb 'was/were'", "bad": "I reading a novel yesterday evening.", "good": "I was reading a novel yesterday evening.", "explanation": "You cannot form Past Continuous without the auxiliary verb 'was' or 'were'.", "why": "A participle alone (-ing) is an adjective, not a complete finite verb phrase."}
    ],
    [
        {"id": 1, "question": "Complete: 'While the children ________ outside, it suddenly began to pour.'", "options": ["were playing", "was playing", "played were", "are playing"], "correct": 0, "explanation": "'The children' is plural, requiring 'were playing' with 'while'.", "topic": "While Clauses"},
        {"id": 2, "question": "Which sentence describes two simultaneous continuous past actions?", "options": ["While Marco was cooking, Anna was reading.", "Marco cooked dinner then Anna read.", "Marco was cooking when Anna arrived.", "Marco has cooked dinner."], "correct": 0, "explanation": "Two continuous actions taking place simultaneously both use Past Continuous with 'while'.", "topic": "Simultaneous Actions"}
    ]
)

# 5. Present Continuous
all_tenses["presentContinuous"] = make_tense(
    TENSES_METADATA[4],
    "The Present Continuous expresses actions occurring right now at the moment of speech, temporary situations, evolving trends, and firm personal arrangements in the near future.",
    "Visualized as an ongoing active pulse or motion taking place around the NOW moment marker.",
    "A vibrant live activity actively in progress around the NOW axis.",
    [
        {"word": "Now / Right now", "example": "I am working on the presentation right now."},
        {"word": "At the moment / Currently", "example": "She is currently managing the design sprint."},
        {"word": "These days / This week", "example": "We are staying at a boutique hotel this week."},
        {"word": "Look! / Listen!", "example": "Listen! The nightingale is singing outside."}
    ],
    [
        {"icon": "Zap", "label": "Happening Right Now", "desc": "Live action occurring at this very second — 'It is raining outside.'", "color": "#6366f1", "bg": "rgba(99, 102, 241, 0.08)", "border": "rgba(99, 102, 241, 0.25)"},
        {"icon": "Clock", "label": "Temporary Situations", "desc": "Temporary arrangements contrasting with permanent lifestyle — 'I am living with friends this month.'", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
        {"icon": "Globe", "label": "Changing Trends", "desc": "Gradual evolution over time — 'Global temperatures are rising steadily.'", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
        {"icon": "Calendar", "label": "Fixed Personal Arrangements", "desc": "Pre-scheduled personal appointments — 'I am meeting Dr. Aris at 3 PM tomorrow.'", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
    ],
    [
        {"id": "now", "title": "1. Live Actions Happening Right Now", "tag": "Immediate Reality", "icon": "Zap", "summary": "Activities occurring at the exact second of speaking.", "explanation": "When sensory perception or immediate reality is unfolding before your eyes, use Present Continuous.", "examples": [{"sentence": "Look! The baby is taking her very first steps.", "translation": "Live observation.", "focus": "is taking"}, {"sentence": "Why are you whispering?", "translation": "Inquiry about immediate behavior.", "focus": "are you whispering"}], "teacherNote": "Commands like 'Look!' or 'Listen!' always trigger Present Continuous."},
        {"id": "temporary", "title": "2. Temporary Situations vs Permanent States", "tag": "Temporary State", "icon": "Clock", "summary": "Limited-duration situations that will soon change.", "explanation": "Contrast with Present Simple: 'I live in London' (permanent home) vs 'I am living in London for 3 months' (temporary).", "examples": [{"sentence": "He usually drives to work, but this week he is taking the subway.", "translation": "Temporary transportation variation.", "focus": "is taking"}, {"sentence": "I am staying with my cousins until my new apartment is ready.", "translation": "Temporary housing arrangement.", "focus": "am staying"}], "teacherNote": "Key distinction: Present Simple = permanent identity; Present Continuous = temporary chapter."},
        {"id": "trends", "title": "3. Changing & Evolving Situations", "tag": "Evolution", "icon": "Globe", "summary": "Trends, technological shifts, and gradual changes.", "explanation": "Paired with verbs like get, become, change, increase, rise, fall, grow.", "examples": [{"sentence": "The world's climate is changing at an unprecedented pace.", "translation": "Gradual environmental trend.", "focus": "is changing"}, {"sentence": "Your English pronunciation is getting significantly better.", "translation": "Progressive learning improvement.", "focus": "is getting"}], "teacherNote": "Use 'is becoming / is getting' for visible gradual progression."},
        {"id": "arrangements", "title": "4. Pre-Arranged Personal Future Plans", "tag": "Diary Appointment", "icon": "Calendar", "summary": "Fixed appointments already written in your calendar.", "explanation": "When two or more people have agreed on a time and place, English favors Present Continuous over will.", "examples": [{"sentence": "I am dining with the CEO at 7:00 PM this evening.", "translation": "Confirmed dinner reservation.", "focus": "am dining"}, {"sentence": "We are flying to Tokyo next Tuesday morning.", "translation": "Tickets already purchased.", "focus": "are flying"}], "teacherNote": "Stronger and more personal than 'will fly'. The ticket is already in hand."},
        {"id": "irritation", "title": "5. Expressing Annoyance with 'always'", "tag": "Irritation", "icon": "AlertTriangle", "summary": "Criticizing repetitive irritating habits.", "explanation": "Saying 'He always forgets' is neutral. Saying 'He is always forgetting' expresses exasperation.", "examples": [{"sentence": "You are always leaving your laptop charger at the office!", "translation": "Exasperated complaint.", "focus": "are always leaving"}, {"sentence": "She is constantly losing her apartment keys.", "translation": "Annoying repeated habit.", "focus": "is constantly losing"}], "teacherNote": "Voice inflection often carries irritation here."},
        {"id": "picture", "title": "6. Describing Photographs & Artworks", "tag": "Visual Art", "icon": "Heart", "summary": "Bringing visual still images to life.", "explanation": "When describing a photo, painting, or video thumbnail, English speaks as if the characters are frozen in live action.", "examples": [{"sentence": "In this 19th-century photograph, the workers are building the Brooklyn Bridge.", "translation": "Visual photo description.", "focus": "are building"}, {"sentence": "The girl in the painting is smiling mysteriously at the viewer.", "translation": "Artwork analysis.", "focus": "is smiling"}], "teacherNote": "Always say 'In this photo, she is smiling', never 'she smiles'."}
    ],
    "Subject + AM / IS / ARE + Verb-ING",
    "Subject + AM / IS / ARE + NOT + Verb-ING",
    "AM / IS / ARE + Subject + Verb-ING?",
    ["She is designing an innovative mobile interface.", "They are conducting biomedical research in Basel.", "I am preparing the quarterly board presentation."],
    ["He isn't collaborating with that supplier anymore.", "We aren't organizing any in-person events this quarter.", "I am not participating in the marathon this year."],
    ["Are you analyzing the customer feedback data?", "Why is the engine making that unusual sound?", "Where are they relocating their European headquarters?"],
    {
        "title": "Present Participle (-ING) Orthography",
        "subtitle": "Rules for attaching -ing to English base verbs",
        "rules": [
            {"id": 1, "tag": "Drop -e", "title": "Drop silent -e before -ing", "rule": "come → coming | live → living | write → writing", "examples": ["write → writing", "make → making"], "phonetic": "Standard syllable", "explanation": "Do not keep the silent -e (except 'be' → 'being' and 'see' → 'seeing')."},
            {"id": 2, "tag": "Double Consonant", "title": "Double final consonant after short vowel", "rule": "run → running | sit → sitting | begin → beginning", "examples": ["run → running", "swim → swimming"], "phonetic": "Short vowel preserved", "explanation": "One stressed vowel + one consonant doubles final letter."},
            {"id": 3, "tag": "-ie to -y", "title": "Change -ie to -y before -ing", "rule": "lie → lying | die → dying | tie → tying", "examples": ["die → dying", "lie → lying"], "phonetic": "/aɪ-ɪŋ/", "explanation": "-ie changes to -y to prevent three consecutive vowels."}
        ],
        "phoneticTips": ["Pronounce '-ing' as nasal /ɪŋ/, not as a hard /g/."]
    },
    [
        {"adverb": "Now / Right now", "percentage": 100, "color": "#6366f1", "example": "She is coding right now.", "translation": "The current instant."},
        {"adverb": "At the moment", "percentage": 95, "color": "#10b981", "example": "He is in a meeting at the moment.", "translation": "Active ongoing situation."},
        {"adverb": "Currently", "percentage": 90, "color": "#3b82f6", "example": "We are currently hiring engineers.", "translation": "Present business phase."},
        {"adverb": "These days", "percentage": 80, "color": "#f59e0b", "example": "More people are working remotely these days.", "translation": "General modern era."},
        {"adverb": "Look! / Listen!", "percentage": 70, "color": "#ec4899", "example": "Look! The parade is starting.", "translation": "Immediate visual trigger."}
    ],
    [
        {"title": "Using Continuous Aspect with Stative Verbs", "bad": "I am understanding the grammar lesson now.", "good": "I understand the grammar lesson now.", "explanation": "Verbs of thought, sensation, and emotion describe permanent mental conditions and stay in Simple aspect.", "why": "Stative verbs (understand, believe, know, like) reject -ing in English."},
        {"title": "Using Present Continuous for Universal Scientific Truths", "bad": "Water is boiling at 100 degrees Celsius.", "good": "Water boils at 100 degrees Celsius.", "explanation": "Universal scientific facts hold true across all time and require Present Simple.", "why": "Present Continuous implies it is only boiling at 100°C today as a temporary phase!"},
        {"title": "Omitting the Auxiliary Verb 'am/is/are'", "bad": "She working on the design right now.", "good": "She is working on the design right now.", "explanation": "The auxiliary verb 'be' (am/is/are) is grammatically mandatory.", "why": "Without 'is', the sentence lacks a finite verb."},
        {"title": "Confusing 'I live' with 'I am living'", "bad": "I am living in France (when it is your permanent lifelong home).", "good": "I live in France.", "explanation": "Permanent residency requires Present Simple. Present Continuous implies you are there temporarily.", "why": "Present Continuous conveys an expiration date or temporary state."}
    ],
    [
        {"id": 1, "question": "Why is 'I am knowing three foreign languages' grammatically incorrect?", "options": ["'Know' is a stative verb that cannot take continuous aspect.", "'Know' is an irregular past verb.", "Three languages requires plural verb.", "Languages must use future tense."], "correct": 0, "explanation": "Stative verbs describing knowledge and cognition stay in the Simple aspect ('I know').", "topic": "Stative Verbs"},
        {"id": 2, "question": "Look! The chef ________ a fresh batch of sourdough bread.", "options": ["is baking", "bakes", "are baking", "baking is"], "correct": 0, "explanation": "'Look!' signals an immediate action unfolding right now → is baking.", "topic": "Immediate Actions"}
    ]
)

# For all remaining tenses, generate rich curriculum entries
def build_generic_perfect_and_capstones():
    # 6. Future Continuous
    all_tenses["futureContinuous"] = make_tense(
        TENSES_METADATA[5],
        "The Future Continuous expresses actions that will be actively in progress at a specific benchmark moment in the future, routine events, or polite inquiries regarding plans.",
        "Visualized as looking forward to an ongoing activity already underway at a specified future moment.",
        "A future ribbon of ongoing action stretching across a future benchmark hour.",
        [
            {"word": "This time tomorrow", "example": "This time tomorrow, I will be flying over the Alps."},
            {"word": "At 8:00 PM next Friday", "example": "At 8 PM next Friday, we will be celebrating."},
            {"word": "In ten years' time", "example": "In ten years' time, most people will be driving electric cars."},
            {"word": "When you arrive", "example": "When you arrive at the airport, I will be waiting at Gate 4."}
        ],
        [
            {"icon": "Clock", "label": "Action in Progress in Future", "desc": "Midway through an action at a future hour — 'At 3 PM, I will be taking my exam.'", "color": "#a855f7", "bg": "rgba(168, 85, 247, 0.08)", "border": "rgba(168, 85, 247, 0.25)"},
            {"icon": "Radio", "label": "Routine Ongoing Future", "desc": "Events occurring as a matter of routine course — 'I will be seeing John at the office anyway.'", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
            {"icon": "Heart", "label": "Polite Inquiries", "desc": "Inquiring politely about plans without pressuring — 'Will you be using the printer this morning?'", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"},
            {"icon": "Globe", "label": "Parallel Future Activities", "desc": "Two actions happening simultaneously in the future.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"}
        ],
        [
            {"id": "futureMoment", "title": "1. Ongoing Activity at Specific Future Hour", "tag": "Future Snapshot", "icon": "Clock", "summary": "Already in progress when that hour strikes.", "explanation": "Don't phone at 3 PM because I will be taking a test.", "examples": [{"sentence": "Don't phone me at 3 PM because I will be taking my medical board exam.", "translation": "Action in progress at 3 PM.", "focus": "will be taking"}], "teacherNote": "Future Simple (will take) = starts at 3; Future Continuous = in the middle of it at 3."},
            {"id": "routine", "title": "2. Events Happening in the Normal Course of Events", "tag": "Routine Course", "icon": "Radio", "summary": "Happening naturally without special effort.", "explanation": "Used when something happens as part of regular routine.", "examples": [{"sentence": "I will be passing by the post office anyway, so I can mail your package.", "translation": "Natural routine route.", "focus": "will be passing"}], "teacherNote": "Neutral and polite without implying an obligation."},
            {"id": "politeInquiry", "title": "3. Ultra-Polite Inquiries About Others' Plans", "tag": "Polite Inquiry", "icon": "Heart", "summary": "Asking about plans politely without demanding a favor.", "explanation": "Will you be staying late tonight?", "examples": [{"sentence": "Will you be using the conference room after 2:00 PM?", "translation": "Courteous office inquiry.", "focus": "Will you be using"}], "teacherNote": "Much more polite than 'Are you going to use it?' which can sound intrusive."}
        ],
        "Subject + WILL BE + Verb-ING",
        "Subject + WON'T BE + Verb-ING",
        "WILL + Subject + BE + Verb-ING?",
        ["This time next week, we will be relaxing in Santorini.", "She will be presenting her research at 10 AM tomorrow.", "They will be collaborating with the European team throughout July."],
        ["We won't be operating on Sunday.", "He won't be attending the symposium due to illness."],
        ["Will you be joining us for lunch?", "What will they be discussing at the summit?"],
        {"title": "Future Continuous Auxiliaries", "subtitle": "Modal will + auxiliary be + present participle", "rules": [{"id": 1, "tag": "Formula", "title": "Universal Auxiliaries", "rule": "will + be + -ing (all subjects)", "examples": ["I will be working", "They will be working"], "phonetic": "/wɪl biː/", "explanation": "Auxiliary sequence never changes."}], "phoneticTips": ["Contract 'will' to 'I'll be working' /aɪl biː/."]},
        [{"adverb": "This time tomorrow", "percentage": 100, "color": "#a855f7", "example": "This time tomorrow, I will be flying home.", "translation": "Same hour next day."}],
        [{"title": "Confusing Future Simple with Future Continuous", "bad": "At 8 PM, I will cook dinner (meaning in progress).", "good": "At 8 PM, I will be cooking dinner.", "explanation": "Future Continuous specifies you are in the middle of it at that hour.", "why": "Simple means you start at 8; Continuous means ongoing at 8."}],
        [{"id": 1, "question": "Complete: 'Don't visit at 2 PM because I ________ an important interview.'", "options": ["will be conducting", "will conduct been", "am conduct", "conduct will"], "correct": 0, "explanation": "Action actively underway at a specified future benchmark hour demands Future Continuous.", "topic": "Future Snapshot"}]
    )

    # 7. Past Perfect Simple
    all_tenses["pastPerfect"] = make_tense(
        TENSES_METADATA[6],
        "The Past Perfect Simple establishes chronological precedence between two completed past events: it is the 'past before the past'.",
        "Visualized as moving backward from an already past event to look at an even earlier completed occurrence.",
        "Event 1 (Earlier) = Past Perfect; Event 2 (Later) = Past Simple.",
        [
            {"word": "By the time", "example": "By the time the police arrived, the burglar had fled."},
            {"word": "Before / After", "example": "She had finished the report before the manager requested it."},
            {"word": "Already / Just", "example": "The train had already left when we reached the platform."},
            {"word": "Until that moment", "example": "Until that moment, I had never experienced such beauty."}
        ],
        [
            {"icon": "Clock", "label": "Chronological Precedence", "desc": "The earlier of two past events — 'When we arrived, the movie had started.'", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
            {"icon": "Zap", "label": "Past Cause & Effect", "desc": "Explaining the background reason for a past condition.", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
            {"icon": "BookOpen", "label": "Third Conditional Anchor", "desc": "Forms the condition clause in counterfactual past regrets.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
            {"icon": "Heart", "label": "Reported Speech Backshift", "desc": "Past Simple and Present Perfect backshift into Past Perfect.", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
        ],
        [
            {"id": "precedence", "title": "1. Chronological Precedence in Past Narratives", "tag": "Timeline Anchor", "icon": "Clock", "summary": "Preventing timeline ambiguity between two past events.", "explanation": "The train had already departed when we arrived at the station.", "examples": [{"sentence": "When we reached the cinema, the film had already started.", "translation": "The movie started before our arrival.", "focus": "had already started"}], "teacherNote": "Earlier event = had + V3; Later event = Past Simple (reached)."},
            {"id": "pastCause", "title": "2. Past Cause for a Past Emotional State", "tag": "Past Explanation", "icon": "Zap", "summary": "Explaining why someone was in a certain state in the past.", "explanation": "He was nervous because he had never flown before.", "examples": [{"sentence": "She was confident in the interview because she had prepared meticulously.", "translation": "Prior preparation caused past confidence.", "focus": "had prepared"}], "teacherNote": "Explains the antecedent cause."}
        ],
        "Subject + HAD + Past Participle (V3)",
        "Subject + HAD NOT (hadn't) + Past Participle (V3)",
        "HAD + Subject + Past Participle (V3)?",
        ["By the time the detective arrived, the suspect had already fled.", "She had lived in Lisbon before moving to Madrid.", "They had completed the audit prior to the deadline."],
        ["We hadn't received the contract before the signing ceremony.", "He hadn't seen snow until he visited the Alps."],
        ["Had they finished the blueprints before construction started?", "Why had the pilot decided to divert the aircraft?"],
        {"title": "Past Participle (V3) Morphology", "subtitle": "Regular -ed and irregular V3 participles with HAD", "rules": [{"id": 1, "tag": "Auxiliary", "title": "Universal 'HAD'", "rule": "HAD is identical for all persons (I had, you had, she had)", "examples": ["I had seen", "They had seen"], "phonetic": "/hæd/ or contracted /d/", "explanation": "No subject-verb variation in Past Perfect."}], "phoneticTips": ["Contracted: 'I'd seen', 'She'd left'."]},
        [{"adverb": "By the time", "percentage": 100, "color": "#3b82f6", "example": "By the time we arrived, the museum had closed.", "translation": "Prior to that past moment."}],
        [{"title": "Overusing Past Perfect When Order is Obvious with 'before'/'after'", "bad": "After I had eaten dinner, I had slept.", "good": "After I ate dinner, I went to sleep.", "explanation": "When chronological order is already unmistakable, simple past is sufficient.", "why": "Avoid unnecessary grammatical clutter."}],
        [{"id": 1, "question": "Complete: 'When the rescue team arrived at the summit, the climbers ________ shelter.'", "options": ["had already found", "already found has", "was already find", "have already found"], "correct": 0, "explanation": "Earlier past event requires Past Perfect 'had already found'.", "topic": "Chronological Precedence"}]
    )

    # 8. Present Perfect Simple
    all_tenses["presentPerfect"] = make_tense(
        TENSES_METADATA[7],
        "The Present Perfect Simple is the bridge between past and present: it expresses life experiences, recent actions with visible present consequences, and unfinished time spans.",
        "Visualized as an arc or bridge starting in the past and touching the NOW moment.",
        "Never use with finished past dates (yesterday, in 2018). Focuses on result right NOW.",
        [
            {"word": "Already / Yet / Just", "example": "I have already finished the report; she hasn't arrived yet."},
            {"word": "Ever / Never", "example": "Have you ever traveled to Scandinavia?"},
            {"word": "Since (2020) / For (5 years)", "example": "We have lived in this stone house since 2018."},
            {"word": "Recently / Lately / So far", "example": "Scientists have recently discovered a new enzyme."}
        ],
        [
            {"icon": "Heart", "label": "Life Experience", "desc": "What you have done in your lifetime up to now — 'I have visited Tokyo.'", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
            {"icon": "Zap", "label": "Recent Action with Present Result", "desc": "Past action whose effect is visible right now — 'I have lost my key (I cannot enter now).'", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
            {"icon": "Clock", "label": "Unfinished Time Periods", "desc": "Time period that is still open today — 'I have drunk two coffees this morning.'", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
            {"icon": "Globe", "label": "Duration Up to Now (Stative)", "desc": "State starting in past continuing to now — 'I have known him for a decade.'", "color": "#8b5cf6", "bg": "rgba(139, 92, 246, 0.08)", "border": "rgba(139, 92, 246, 0.25)"}
        ],
        [
            {"id": "experience", "title": "1. Life Experiences (Ever / Never)", "tag": "Life Journey", "icon": "Globe", "summary": "Events experienced at any point in your lifetime.", "explanation": "Have you ever seen the Northern Lights?", "examples": [{"sentence": "I have visited Tokyo three times in my life.", "translation": "Cumulative life experience.", "focus": "have visited"}], "teacherNote": "The time period is your entire life, which is still continuing!"},
            {"id": "visibleResult", "title": "2. Recent Action with Visible Present Result", "tag": "Present Evidence", "icon": "Zap", "summary": "The focus is on the current reality, not when it happened.", "explanation": "I have lost my glasses (result: I cannot read this document right now).", "examples": [{"sentence": "The chef has just prepared a fresh batch of pasta.", "translation": "Fresh and ready to eat now.", "focus": "has just prepared"}], "teacherNote": "Connects past action directly to present result."}
        ],
        "Subject + HAVE / HAS + Past Participle (V3)",
        "Subject + HAVEN'T / HASN'T + Past Participle (V3)",
        "HAVE / HAS + Subject + Past Participle (V3)?",
        ["I have lived in London for five years.", "She has published two bestselling novels.", "They have already secured the investment capital."],
        ["We haven't received the confirmation email yet.", "He hasn't completed his doctoral thesis."],
        ["Have you ever visited the British Museum?", "Has the delivery arrived yet?", "How many countries have they explored so far?"],
        {"title": "Have/Has Agreement & Irregular V3 Participles", "subtitle": "Have for I/you/we/they; Has for he/she/it + V3", "rules": [{"id": 1, "tag": "Agreement", "title": "Auxiliary Selection", "rule": "He / She / It → HAS | Others → HAVE", "examples": ["She has done", "I have done"], "phonetic": "/hæz/, /hæv/", "explanation": "Subject determines have vs has."}], "phoneticTips": ["Contracted: I've, you've, he's (he has), they've."]},
        [{"adverb": "Already", "percentage": 100, "color": "#f59e0b", "example": "I have already finished.", "translation": "Completed earlier than expected."}],
        [{"title": "Using Present Perfect with Definite Finished Past Dates", "bad": "I have visited Paris in 2018.", "good": "I visited Paris in 2018. / I have visited Paris.", "explanation": "Definite past dates cut the connection to NOW and demand Past Simple.", "why": "In 2018 is a closed time window."}],
        [{"id": 1, "question": "Which sentence correctly demonstrates Present Perfect for life experience?", "options": ["I have already seen that documentary.", "I have seen that documentary yesterday.", "I have saw that documentary.", "I saw has that documentary."], "correct": 0, "explanation": "Present Perfect with 'already' and V3 participle 'seen'.", "topic": "Life Experience"}]
    )

    # 9. Future Perfect Simple
    all_tenses["futurePerfect"] = make_tense(
        TENSES_METADATA[8],
        "The Future Perfect Simple emphasizes that an action will be completed and finished before a specific benchmark deadline in the future.",
        "Visualized as projecting to a future milestone deadline and looking backward to see the task already completed.",
        "Looking back from a future milestone deadline.",
        [
            {"word": "By (tomorrow / next year)", "example": "By 2030, scientists will have synthesized renewable fuel."},
            {"word": "By the time...", "example": "By the time you graduate, our firm will have expanded globally."},
            {"word": "In two months' time", "example": "In two months' time, we will have completed construction."},
            {"word": "Before (future benchmark)", "example": "They will have landed before nightfall."}
        ],
        [
            {"icon": "Clock", "label": "Completed Before Deadline", "desc": "Finished prior to a future milestone — 'By 5 PM, I will have sent it.'", "color": "#f97316", "bg": "rgba(249, 115, 22, 0.08)", "border": "rgba(249, 115, 22, 0.25)"},
            {"icon": "Globe", "label": "Milestone Projection", "desc": "Looking back from a future year to celebrate milestones.", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
            {"icon": "Zap", "label": "Future Certainty of Completion", "desc": "Guaranteeing a result prior to another event.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
            {"icon": "Calendar", "label": "Cumulative Future Count", "desc": "Measuring accumulated count by a future point.", "color": "#8b5cf6", "bg": "rgba(139, 92, 246, 0.08)", "border": "rgba(139, 92, 246, 0.25)"}
        ],
        [
            {"id": "futureDeadline", "title": "1. Completion Prior to a Future Deadline", "tag": "Future Deadline", "icon": "Clock", "summary": "Action will be done before a specific time.", "explanation": "By next December, we will have completed the project.", "examples": [{"sentence": "By next December, the architects will have completed the sustainable tower.", "translation": "Finished before December.", "focus": "will have completed"}], "teacherNote": "Focus is on completion before the deadline."}
        ],
        "Subject + WILL HAVE + Past Participle (V3)",
        "Subject + WON'T HAVE + Past Participle (V3)",
        "WILL + Subject + HAVE + Past Participle (V3)?",
        ["By 2030, scientists will have synthesized scalable clean fuel.", "By next Friday, she will have completed her bar exam.", "They will have moved into their new house before winter."],
        ["We won't have finished the renovation before the holidays.", "He won't have accumulated enough flight hours by next month."],
        ["Will you have graduated by next June?", "What will humanity have achieved by the end of this century?"],
        {"title": "Future Perfect Structure", "subtitle": "will + have + V3 participle for all persons", "rules": [{"id": 1, "tag": "Rule", "title": "Universal 'will have'", "rule": "Always 'will have' (never 'will has' even for he/she/it!)", "examples": ["She will have finished", "I will have finished"], "phonetic": "/wɪl hæv/", "explanation": "Modal 'will' demands bare infinitive 'have'."}], "phoneticTips": ["Never say 'she will has' — modals always require base 'have'."]},
        [{"adverb": "By next year", "percentage": 100, "color": "#f97316", "example": "By next year, we will have expanded globally.", "translation": "Before next year arrives."}],
        [{"title": "Using 'will has' with 3rd Person Singular", "bad": "She will has graduated by June.", "good": "She will have graduated by June.", "explanation": "The modal 'will' is always followed by base 'have'.", "why": "Modal verbs must be followed by bare infinitives."}],
        [{"id": 1, "question": "Complete: 'By the end of this week, the engineering team ________ the entire audit.'", "options": ["will have completed", "will be completing", "will complete have", "has will complete"], "correct": 0, "explanation": "'By the end of...' signals a future deadline demanding Future Perfect.", "topic": "Future Deadlines"}]
    )

    # 10. Past Perfect Continuous
    all_tenses["pastPerfectCont"] = make_tense(
        TENSES_METADATA[9],
        "The Past Perfect Continuous focuses on how long an activity had been in progress before another event occurred in the past, or past physical evidence of continuous effort.",
        "Visualized as an ongoing ribbon of effort in the past leading right up to a past benchmark event.",
        "Continuous duration in progress before a past point in time.",
        [
            {"word": "For (3 hours) before...", "example": "He had been driving for four hours before he stopped for fuel."},
            {"word": "Since morning when...", "example": "It had been snowing since dawn when the power failed."},
            {"word": "How long had you been...?", "example": "How long had you been waiting when the train arrived?"},
            {"word": "All day until", "example": "She had been coding all day until her screen malfunctioned."}
        ],
        [
            {"icon": "Clock", "label": "Duration Before Past Event", "desc": "Measuring duration prior to a past moment — 'We had been waiting an hour when the bus came.'", "color": "#e11d48", "bg": "rgba(225, 29, 72, 0.08)", "border": "rgba(225, 29, 72, 0.25)"},
            {"icon": "Zap", "label": "Visible Past Cause", "desc": "Physical evidence of recent continuous activity — 'The ground was wet because it had been raining.'", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
            {"icon": "Heart", "label": "Effort & Fatigue", "desc": "Explaining past exhaustion — 'She was exhausted because she had been running.'", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
            {"icon": "Radio", "label": "Interrupted Duration", "desc": "A continuous activity broken by a past event.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"}
        ],
        [
            {"id": "pastDuration", "title": "1. Duration Leading Up to a Past Point", "tag": "Past Duration", "icon": "Clock", "summary": "Focuses on the duration of an activity before another past event.", "explanation": "He had been running for two hours before feeling dehydrated.", "examples": [{"sentence": "He had been running for two hours before he felt dehydrated.", "translation": "Two-hour duration prior to dehydration.", "focus": "had been running"}], "teacherNote": "Focus is on duration and process rather than final completion."}
        ],
        "Subject + HAD BEEN + Verb-ING",
        "Subject + HADN'T BEEN + Verb-ING",
        "HAD + Subject + BEEN + Verb-ING?",
        ["The ground was wet because it had been raining heavily all morning.", "She had been studying for three hours before she took a break.", "They had been negotiating for days before signing."],
        ["We hadn't been waiting long when the shuttle arrived.", "He hadn't been practicing enough before the tournament."],
        ["How long had you been living in Rome before moving to Milan?", "Had she been crying before entering the conference room?"],
        {"title": "Past Perfect Continuous Formula", "subtitle": "had + been + -ing for all grammatical subjects", "rules": [{"id": 1, "tag": "Auxiliary", "title": "Universal Construction", "rule": "had been + verb-ing", "examples": ["I had been waiting", "She had been waiting"], "phonetic": "/hæd bɪn/ or /hæd biːn/", "explanation": "Double auxiliary: had (past) + been (participle)."}], "phoneticTips": ["Often contracted to 'I'd been working'."]},
        [{"adverb": "For two hours before", "percentage": 100, "color": "#e11d48", "example": "She had been reading for two hours before falling asleep.", "translation": "Duration before past event."}],
        [{"title": "Using with Stative Verbs", "bad": "I had been knowing him for years before we worked together.", "good": "I had known him for years before we worked together.", "explanation": "Stative verbs do not take continuous aspect; use Past Perfect Simple.", "why": "Stative verbs cannot take -ing."}],
        [{"id": 1, "question": "Why was the athlete exhausted when she reached the finish line?", "options": ["Because she had been sprinting up the mountain trail.", "Because she has sprinting.", "Because she had sprinted been.", "Because she was sprint."], "correct": 0, "explanation": "Ongoing duration of effort causing a past physical state demands Past Perfect Continuous.", "topic": "Past Cause"}]
    )

    # 11. Present Perfect Continuous
    all_tenses["presentPerfectCont"] = make_tense(
        TENSES_METADATA[10],
        "The Present Perfect Continuous emphasizes the ongoing duration of an action starting in the past and continuing up into the present moment, or recent continuous activity with immediate visible sensory evidence.",
        "Visualized as an ongoing ribbon starting in the past and actively continuing right into the NOW moment.",
        "Focus on duration and ongoing process up to the present.",
        [
            {"word": "How long have you been...?", "example": "How long have you been studying English?"},
            {"word": "For (5 hours / 3 days)", "example": "She has been coding this application for five hours."},
            {"word": "Since (morning / 2021)", "example": "It has been raining continuously since dawn."},
            {"word": "All day / Lately / Recently", "example": "I have been feeling energized lately."}
        ],
        [
            {"icon": "Clock", "label": "Duration Up to Now", "desc": "Action started in past and actively continuing now — 'I have been learning French for 3 years.'", "color": "#06b6d4", "bg": "rgba(6, 182, 212, 0.08)", "border": "rgba(6, 182, 212, 0.25)"},
            {"icon": "Zap", "label": "Immediate Physical Evidence", "desc": "Sensory evidence right now of recent continuous effort — 'My hands are dirty; I have been gardening.'", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
            {"icon": "Heart", "label": "Temporary Ongoing Habits", "desc": "New routines happening lately — 'I have been meditating every morning lately.'", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
            {"icon": "Radio", "label": "Ongoing Process vs Result", "desc": "Focus on the activity rather than whether it is completed.", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
        ],
        [
            {"id": "durationNow", "title": "1. Duration from Past Continuing to Now", "tag": "Ongoing Duration", "icon": "Clock", "summary": "An activity started in the past and is still happening right now.", "explanation": "She has been coding this app for five hours.", "examples": [{"sentence": "She has been coding this application for five consecutive hours.", "translation": "Still actively coding right now.", "focus": "has been coding"}], "teacherNote": "Answer to 'How long have you been...?'"},
            {"id": "immediateProof", "title": "2. Immediate Sensory Evidence", "tag": "Sensory Proof", "icon": "Zap", "summary": "Visible consequences right now of recent effort.", "explanation": "The athlete is breathing heavily because she has been sprinting.", "examples": [{"sentence": "The athlete is breathing heavily because she has been sprinting up the mountain.", "translation": "Physical breathlessness is visible proof.", "focus": "has been sprinting"}], "teacherNote": "Action just stopped, but evidence is unmistakable."}
        ],
        "Subject + HAVE / HAS BEEN + Verb-ING",
        "Subject + HAVEN'T / HASN'T BEEN + Verb-ING",
        "HAVE / HAS + Subject + BEEN + Verb-ING?",
        ["I have been studying English for four years.", "She has been writing her novel all morning.", "They have been negotiating the partnership since January."],
        ["We haven't been sleeping well lately.", "He hasn't been practicing his violin this week."],
        ["How long have you been learning to play the piano?", "Has it been raining all afternoon?", "What have they been discussing behind closed doors?"],
        {"title": "Present Perfect Continuous Morphology", "subtitle": "have/has + been + present participle (-ing)", "rules": [{"id": 1, "tag": "Formula", "title": "Agreement", "rule": "I/you/we/they have been | he/she/it has been", "examples": ["She has been working", "I have been working"], "phonetic": "/hæv bɪn/ or /hæz bɪn/", "explanation": "Auxiliary have/has agrees with subject."}], "phoneticTips": ["Contracted: 'I've been working', 'She's been working'."]},
        [{"adverb": "Since morning", "percentage": 100, "color": "#06b6d4", "example": "It has been raining since morning.", "translation": "From that past point to now."}],
        [{"title": "Using with Stative Verbs", "bad": "I have been knowing Sarah for ten years.", "good": "I have known Sarah for ten years.", "explanation": "Stative verbs do not accept continuous aspect; use Present Perfect Simple.", "why": "'Know' is stative and cannot take -ing."}],
        [{"id": 1, "question": "Which question correctly asks about continuous duration starting in the past?", "options": ["How long have you been studying English?", "How long do you study English?", "How long are you study English?", "How long did you studying English?"], "correct": 0, "explanation": "Continuous duration from a past starting point up into the present takes Present Perfect Continuous.", "topic": "Duration Inquiries"}]
    )

    # 12. Future Perfect Continuous
    all_tenses["futurePerfectCont"] = make_tense(
        TENSES_METADATA[11],
        "The Future Perfect Continuous emphasizes how long an ongoing action will have been happening when a future milestone deadline is reached.",
        "Visualized as projecting to a future benchmark point and measuring the accumulated continuous duration leading to that moment.",
        "Measures milestone duration when reaching a future date.",
        [
            {"word": "By next (year)... for (10 years)", "example": "By next year, I will have been living in London for a decade."},
            {"word": "By the time you graduate... for...", "example": "By the time you graduate, she will have been teaching for 30 years."},
            {"word": "When I turn 40, I will have been...", "example": "When I turn 40, I will have been directing this lab for 15 years."}
        ],
        [
            {"icon": "Clock", "label": "Milestone Duration", "desc": "Measuring accumulated duration at a future date — 'By 2030, I will have been teaching 25 years.'", "color": "#0284c7", "bg": "rgba(2, 132, 199, 0.08)", "border": "rgba(2, 132, 199, 0.25)"},
            {"icon": "Globe", "label": "Triple Synthesis", "desc": "Future projection + Perfect completion + Continuous duration.", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
            {"icon": "Zap", "label": "Future Cause of Physical State", "desc": "Explaining why someone will be exhausted in the future.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
            {"icon": "Calendar", "label": "Anniversary Calculations", "desc": "Calculating tenure and career milestones.", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
        ],
        [
            {"id": "anniversary", "title": "1. Career & Life Anniversary Milestones", "tag": "Career Milestone", "icon": "Clock", "summary": "Calculating duration accumulated at a future milestone.", "explanation": "By October, she will have been directing the lab for twenty years.", "examples": [{"sentence": "By October, she will have been directing the laboratory for twenty years.", "translation": "Twenty-year career anniversary in October.", "focus": "will have been directing"}], "teacherNote": "Combines a future time anchor (By October) with duration (for twenty years)."}
        ],
        "Subject + WILL HAVE BEEN + Verb-ING",
        "Subject + WON'T HAVE BEEN + Verb-ING",
        "WILL + Subject + HAVE BEEN + Verb-ING?",
        ["By 2030, our professor will have been teaching at this university for 25 years.", "By next month, I will have been writing this book for two years."],
        ["They won't have been collaborating long enough to publish by December."],
        ["How long will you have been working here when you retire?"],
        {"title": "Future Perfect Continuous Structure", "subtitle": "will + have + been + -ing for all subjects", "rules": [{"id": 1, "tag": "Formula", "title": "Three Auxiliaries", "rule": "will + have + been + verb-ing", "examples": ["I will have been working", "She will have been working"], "phonetic": "/wɪl hæv bɪn/", "explanation": "The most compound tense formula in English."}], "phoneticTips": ["Pronounce smoothly with unstressed 'have been' /həvbɪn/."]},
        [{"adverb": "By next year for a decade", "percentage": 100, "color": "#0284c7", "example": "By next year, I will have been living here for a decade.", "translation": "Milestone duration."}],
        [{"title": "Using 'will has been'", "bad": "She will has been working for 5 years.", "good": "She will have been working for 5 years.", "explanation": "'Will' always takes base 'have'.", "why": "Modals govern bare infinitives."}],
        [{"id": 1, "question": "Complete: 'By 2030, our professor ________ at this university for 25 years.'", "options": ["will have been teaching", "will be taught have", "will have teaching", "has been teaching will"], "correct": 0, "explanation": "Future milestone + duration measurement = Future Perfect Continuous.", "topic": "Milestone Duration"}]
    )

    # 13. Conditionals System
    all_tenses["conditionals"] = make_tense(
        TENSES_METADATA[12],
        "The Complete Conditionals System navigates facts, real future possibilities, hypothetical present scenarios, counterfactual past regrets, and mixed temporal causation.",
        "Zero: Facts | 1st: Real future | 2nd: Unreal present/future | 3rd: Unreal past regret | Mixed: Past cause, present result.",
        "Branching parallel universes of cause and effect.",
        [
            {"word": "If + Present, Present (Zero)", "example": "If you heat ice, it melts."},
            {"word": "If + Present, will + Base (1st)", "example": "If it rains tomorrow, we will stay indoors."},
            {"word": "If + Past, would + Base (2nd)", "example": "If I had a million dollars, I would travel the world."},
            {"word": "If + Had V3, would have V3 (3rd)", "example": "If I had studied harder, I would have passed the exam."}
        ],
        [
            {"icon": "Zap", "label": "Zero Conditional (Facts)", "desc": "Universal scientific facts — 'If water reaches 100°C, it boils.'", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
            {"icon": "Clock", "label": "First Conditional (Real Future)", "desc": "Real future possibilities — 'If you study, you will succeed.'", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
            {"icon": "Heart", "label": "Second Conditional (Hypothetical)", "desc": "Unreal present daydreaming — 'If I were you, I would accept the job.'", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.08)", "border": "rgba(245, 158, 11, 0.25)"},
            {"icon": "Globe", "label": "Third Conditional (Past Regrets)", "desc": "Counterfactual past regrets — 'If we had left earlier, we would not have missed the flight.'", "color": "#ef4444", "bg": "rgba(239, 68, 68, 0.08)", "border": "rgba(239, 68, 68, 0.25)"}
        ],
        [
            {"id": "zero", "title": "Zero Conditional: Immutable Truths", "tag": "Scientific Law", "icon": "Zap", "summary": "If A happens, B always happens.", "explanation": "If you heat water to 100°C, it boils.", "examples": [{"sentence": "If you heat water to 100 degrees Celsius, it boils.", "translation": "Universal scientific law.", "focus": "heat ... boils"}], "teacherNote": "Both clauses in Present Simple."},
            {"id": "first", "title": "First Conditional: Realistic Future", "tag": "Future Possibility", "icon": "Clock", "summary": "Real conditions with realistic consequences.", "explanation": "If it rains tomorrow, we will stay indoors.", "examples": [{"sentence": "If our team wins tomorrow, we will advance to the finals.", "translation": "Realistic sports scenario.", "focus": "wins ... will advance"}], "teacherNote": "Never put 'will' inside the if-clause!"},
            {"id": "second", "title": "Second Conditional: Hypothetical Present", "tag": "Unreal Daydream", "icon": "Heart", "summary": "Imaginary scenarios contrary to present reality.", "explanation": "If I had more time, I would learn Arabic.", "examples": [{"sentence": "If I were you, I would take that opportunity without hesitation.", "translation": "Subjunctive advice ('If I were').", "focus": "were ... would take"}], "teacherNote": "Use 'If I were' (subjunctive) rather than 'If I was'."},
            {"id": "third", "title": "Third Conditional: Counterfactual Past Regret", "tag": "Past Regret", "icon": "Globe", "summary": "Looking back at a past event that cannot be changed.", "explanation": "If we had left ten minutes earlier, we would have caught the train.", "examples": [{"sentence": "If we had left earlier, we would have caught the train.", "translation": "Past unchangeable reality.", "focus": "had left ... would have caught"}], "teacherNote": "We didn't leave earlier, and we missed the train."}
        ],
        "If + condition clause, result clause (0, 1st, 2nd, 3rd, Mixed)",
        "Unless (If not) + affirmative verb",
        "What would you do if you had the opportunity?",
        ["If you freeze water, it turns to ice.", "If she calls, I will let you know.", "If I won the lottery, I would buy a villa in Tuscany.", "If they had listened to warnings, they would have avoided the disaster."],
        ["Unless you study diligently, you won't pass.", "If he hadn't helped us, we wouldn't have finished."],
        ["What would happen if the sun disappeared?", "Would you have accepted the offer if they had offered higher equity?"],
        {"title": "Conditional Form Matrix", "subtitle": "0: Pres/Pres | 1st: Pres/Will | 2nd: Past/Would | 3rd: Had V3/Would have V3", "rules": [{"id": 1, "tag": "Golden Rule", "title": "No 'Will' in the If-Clause", "rule": "Never put 'will' or 'would' directly inside the 'if' condition clause!", "examples": ["If it rains (NOT if it will rain)", "If I knew (NOT if I would know)"], "phonetic": "Standard cadence", "explanation": "Conditionals reserve modal will/would for the result clause only."}], "phoneticTips": ["Subjunctive 'were': 'If I were you' sounds refined and grammatically impeccable."]},
        [{"adverb": "Unless", "percentage": 100, "color": "#ef4444", "example": "Unless you hurry, we will be late.", "translation": "If you do not hurry."}],
        [{"title": "Putting 'Will' Inside the If-Clause", "bad": "If it will rain tomorrow, we will stay home.", "good": "If it rains tomorrow, we will stay home.", "explanation": "The if-clause takes Present Simple, never will.", "why": "The conjunction 'if' establishes hypothetical status."}],
        [{"id": 1, "question": "Select the correct Second Conditional sentence expressing hypothetical advice:", "options": ["If I were you, I would accept the job offer.", "If I will be you, I accept.", "If I am you, I will accept.", "If I had been you, I accept."], "correct": 0, "explanation": "'If I were you, I would...' is the canonical Second Conditional subjunctive advice formula.", "topic": "Subjunctive Advice"}]
    )

    # 14. Passive Voice Architecture
    all_tenses["passiveVoice"] = make_tense(
        TENSES_METADATA[13],
        "Passive Voice Architecture transforms sentences by shifting informational focus from the actor/agent to the action, recipient, or object itself.",
        "Active: Subject (Agent) does Action to Object. Passive: Object becomes Subject, acted upon by BE + V3.",
        "Subject (Recipient) ← BE (conjugated) + Past Participle (V3) (← by Agent).",
        [
            {"word": "By (agent)", "example": "The Mona Lisa was painted by Leonardo da Vinci."},
            {"word": "Is / are produced (Present)", "example": "High-end microchips are manufactured in Taiwan."},
            {"word": "Was / were constructed (Past)", "example": "The colosseum was completed in 80 AD."},
            {"word": "Has been / have been tested (Perfect)", "example": "The vaccine has been thoroughly tested."}
        ],
        [
            {"icon": "Globe", "label": "Unknown or Obvious Agent", "desc": "When the actor is unknown, secret, or obvious — 'My bicycle was stolen.'", "color": "#64748b", "bg": "rgba(100, 116, 139, 0.08)", "border": "rgba(100, 116, 139, 0.25)"},
            {"icon": "Zap", "label": "Scientific & Formal Writing", "desc": "Objective academic research tone — 'The solution was heated to 80°C.'", "color": "#3b82f6", "bg": "rgba(59, 130, 246, 0.08)", "border": "rgba(59, 130, 246, 0.25)"},
            {"icon": "Radio", "label": "Shifting Focus to the Object", "desc": "When the result is far more important than who did it.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.08)", "border": "rgba(16, 185, 129, 0.25)"},
            {"icon": "Heart", "label": "Diplomatic Politeness", "desc": "Avoiding direct blame — 'Mistakes were made' vs 'You made mistakes.'", "color": "#ec4899", "bg": "rgba(236, 72, 153, 0.08)", "border": "rgba(236, 72, 153, 0.25)"}
        ],
        [
            {"id": "unknownAgent", "title": "1. Unknown, Unimportant, or Obvious Actor", "tag": "Object Focus", "icon": "Globe", "summary": "When we don't know who did the action.", "explanation": "My wallet was stolen on the train.", "examples": [{"sentence": "My wallet was stolen on the commuter train.", "translation": "The thief is unknown.", "focus": "was stolen"}], "teacherNote": "Saying 'Someone stole my wallet' is unnecessary when the loss is the key point."},
            {"id": "scientific", "title": "2. Academic, Journalistic & Scientific Reports", "tag": "Formal Objectivity", "icon": "Zap", "summary": "Maintaining impartial objective scientific distance.", "explanation": "The chemical compound was heated to 100°C.", "examples": [{"sentence": "The water sample was tested for impurities.", "translation": "Impartial scientific procedure.", "focus": "was tested"}], "teacherNote": "Standard voice of academic research papers worldwide."}
        ],
        "Object + BE (tense-conjugated) + Past Participle (V3) (+ by Agent)",
        "Object + BE (conjugated) + NOT + Past Participle (V3)",
        "BE (conjugated) + Object + Past Participle (V3)?",
        ["Penicillin was discovered in 1928 by Alexander Fleming.", "Millions of emails are sent every second.", "The new highway will be completed next year.", "The application has been verified."],
        ["The suspect wasn't seen by any witnesses.", "The documents haven't been signed yet."],
        ["Was the package delivered on time?", "Are credit cards accepted here?", "Has the hypothesis been proven?"],
        {"title": "Passive Conjugation of 'BE'", "subtitle": "Present: is/are | Past: was/were | Perfect: has/have been | Future: will be", "rules": [{"id": 1, "tag": "Formula", "title": "The Golden Passive Rule", "rule": "Tense is carried entirely by the auxiliary 'BE'; the main verb is ALWAYS the V3 past participle!", "examples": ["is repaired", "was repaired", "has been repaired", "will be repaired"], "phonetic": "Standard participle", "explanation": "Main verb never changes form in the passive voice."}], "phoneticTips": ["Only mention 'by + agent' if the actor provides valuable new information."]},
        [{"adverb": "By the government", "percentage": 100, "color": "#64748b", "example": "The regulation was enacted by the government.", "translation": "Agent attribution."}],
        [{"title": "Making Intransitive Verbs Passive", "bad": "The accident was happened yesterday.", "good": "The accident happened yesterday.", "explanation": "Intransitive verbs (happen, arrive, die, fall) have no direct object and can NEVER be passive!", "why": "Without a direct object, there is nothing to promote to the subject position."}],
        [{"id": 1, "question": "Convert into passive: 'Alexander Fleming discovered penicillin in 1928.'", "options": ["Penicillin was discovered in 1928 by Alexander Fleming.", "Penicillin discovered Alexander Fleming in 1928.", "Penicillin was discover in 1928.", "Penicillin has discovered by Fleming."], "correct": 0, "explanation": "Object (Penicillin) + Past of BE (was) + V3 (discovered) + by Agent.", "topic": "Passive Conversion"}]
    )

build_generic_perfect_and_capstones()

# Output the complete file
header = '''import { PRESENT_SIMPLE_DATA } from './presentSimpleData';

export const TENSES_METADATA = ''' + json.dumps(TENSES_METADATA, indent=2) + ''';

export const OTHER_TENSES_DATA = ''' + json.dumps(all_tenses, indent=2) + ''';

export const ALL_TENSES_DATA = {
  ...OTHER_TENSES_DATA,
  presentSimple: PRESENT_SIMPLE_DATA,
};

export function getTenseData(id) {
  if (id === 'presentSimple') return PRESENT_SIMPLE_DATA;
  return OTHER_TENSES_DATA[id] || PRESENT_SIMPLE_DATA;
}

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
'''

with open(target_path, 'w', encoding='utf-8') as f:
    f.write(header)

print(f"Successfully generated {target_path} with {len(all_tenses) + 1} tenses!")
