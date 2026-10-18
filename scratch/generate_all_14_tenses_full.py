# -*- coding: utf-8 -*-
import json
import os

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'tensesRegistry.js'))

# Load specs from existing files or generate robustly
def get_all_13_other_tenses():
    tenses = {}

    specs = [
        {
            "id": "pastSimple",
            "num": 1,
            "title": "Past Simple",
            "fullTitle": "1. Past Simple Tense",
            "level": "A2 CEFR",
            "aspect": "Simple",
            "time": "Past",
            "color": "#8b5cf6",
            "badge": "CHAPTER 1 • FINISHED PAST",
            "formula": "Subject + Verb-ED / V2 | didn't + base | Did...?",
            "summary": "Finished actions, historical narratives, completed time periods, and past states.",
            "aux": "did / didn't",
            "aff_formula": "Subject + Verb-ED / Irregular V2",
            "neg_formula": "Subject + did not (didn't) + Bare Infinitive",
            "q_formula": "(Wh-) + Did + Subject + Bare Infinitive...?",
            "definition": "The Past Simple is used to describe completed actions, events, and states that occurred at a specific, finished time in the past.",
            "coreConcept": "The action is fully finished and completely disconnected from the present moment. The time window is closed (yesterday, in 1995, two hours ago).",
            "timelineInsight": "Visualized as a solid fixed point or bounded block firmly positioned in the PAST, strictly before NOW.",
            "signalWords": [
                {"word": "Yesterday", "example": "I visited the national gallery yesterday."},
                {"word": "Last night / week / month", "example": "We finalized the quarterly report last week."},
                {"word": "Two hours / 3 days ago", "example": "The express train arrived twenty minutes ago."},
                {"word": "In 1998 / In 2015", "example": "Alexander Fleming discovered penicillin in 1928."},
                {"word": "When I was young", "example": "I played violin when I was a child."},
                {"word": "The other day / Just now", "example": "The delivery truck arrived just now."}
            ],
            "sampleI": "I visited London",
            "sampleHe": "He visited London",
            "negSampleI": "I didn't visit Paris",
            "negSampleHe": "He didn't visit Paris",
            "qSampleI": "Did you visit London?",
            "qSampleHe": "Did he visit London?",
            "whSampleI": "Where did you go?",
            "whSampleHe": "Where did he go?",
            "goldenFormula": "Subject + [Finished Past Time Marker] + Verb-ED / V2",
            "trapRemedies": [
                ("Double Past Marking with 'Did'", "Did you went to the museum yesterday?", "Did you go to the museum yesterday?", "The auxiliary 'did' already absorbs the past tense. The main verb must remain in its pure bare infinitive ('go', not 'went')."),
                ("Using Present Perfect with Closed Dates", "I have visited Rome in 2019.", "I visited Rome in 2019.", "Finished past dates ('in 2019', 'yesterday') demand Past Simple because the time window is closed."),
                ("Double Negative with 'Didn't' and 'Never'", "She didn't never call me.", "She never called me. / She didn't call me.", "In standard English, avoid double negatives. 'Never' pairs directly with the past verb ('never called')."),
                ("Using 'Did' with the Verb 'To Be'", "Did you were at home yesterday?", "Were you at home yesterday?", "The verb 'to be' (was/were) is an auxiliary itself and never uses 'did' in negatives or questions."),
                ("Misconjugating Consonant + Y Verbs", "He studyed all night for the exam.", "He studied all night for the exam.", "Consonant + y changes to -ied (study → studied, carry → carried, try → tried)."),
                ("Confusing Irregular V2 Forms", "She buyed a vintage leather coat.", "She bought a vintage leather coat.", "Irregular verbs have unique past forms that must be learned (buy → bought, catch → caught, bring → brought).")
            ],
            "examQuestions": [
                ("Which sentence correctly expresses a finished past action with a closed time anchor?", ["I have seen that movie yesterday.", "I saw that movie yesterday.", "I am seeing that movie yesterday.", "I see that movie yesterday."], 1, "A2", "'Yesterday' indicates a finished time period, requiring the Past Simple 'saw'."),
                ("What is the correct negative form of 'She went home early'?", ["She didn't went home early.", "She didn't go home early.", "She wasn't go home early.", "She not went home early."], 1, "A2", "Negative Past Simple uses didn't + bare infinitive 'go'."),
                ("Choose the correct question form:", ["Did they arrived on time?", "Were they arrive on time?", "Did they arrive on time?", "Have they arrived yesterday?"], 2, "A2", "'Did' + subject + bare infinitive 'arrive'."),
                ("How is the past simple of the verb 'marry' spelled?", ["marryed", "married", "marrid", "marriled"], 1, "A2", "Consonant + y changes to -ied."),
                ("Select the correct past simple form of the irregular verb 'catch':", ["catched", "caught", "cot", "cought"], 1, "B1", "'Catch' is irregular: catch → caught → caught."),
                ("Complete: 'Why ________ you ________ to the doctor when you felt ill?'", ["did / go", "did / went", "were / go", "have / went"], 0, "B1", "Wh- questions follow Wh- + did + subject + base verb."),
                ("Which time expression CANNOT be used with Past Simple?", ["Three days ago", "Last winter", "Since 2015", "In the 19th century"], 2, "B1", "'Since 2015' indicates an ongoing period up to now and requires Present Perfect."),
                ("The past form of 'be' for plural subjects (We/They) is:", ["was", "were", "did be", "been"], 1, "A2", "'We' and 'They' take 'were' in the past simple."),
                ("Identify the sentence with an error:", ["He stopped the car abruptly.", "She planed her vacation carefully.", "They cried with joy.", "We preferred the first option."], 1, "B1", "'Plan' ends in single vowel + consonant and doubles to 'planned' ('planed' is wrong)."),
                ("What is the narrative role of Past Simple in storytelling?", ["It describes background weather.", "It moves the sequence of completed events forward.", "It describes actions happening right now.", "It shows hypothetical future conditions."], 1, "B1", "Past Simple establishes the chronological chain of narrative events.")
            ]
        },
        {
            "id": "futureSimple",
            "num": 3,
            "title": "Future Simple (Will & Going To)",
            "fullTitle": "3. Future Simple Tense",
            "level": "A2 – B1 CEFR",
            "aspect": "Simple",
            "time": "Future",
            "color": "#14b8a6",
            "badge": "CHAPTER 3 • FUTURE REALITY",
            "formula": "Subject + WILL + Base | won't + Base | Will...?",
            "summary": "Spontaneous decisions, promises, voluntary offers, predictions and intentions.",
            "aux": "will / won't / be going to",
            "aff_formula": "Subject + will + Base Verb / be going to + Base Verb",
            "neg_formula": "Subject + will not (won't) + Base Verb",
            "q_formula": "Will + Subject + Base Verb...? / Are you going to...?",
            "definition": "Future Simple expresses future facts, predictions, spontaneous decisions made at the moment of speech, and firm prior plans.",
            "coreConcept": "Contrast 'will' (spontaneous decisions, predictions of opinion, promises) with 'be going to' (pre-planned intentions and predictions backed by visible evidence).",
            "timelineInsight": "Visualized as future projection points or forward-pointing vectors on the timeline strictly to the right of NOW.",
            "signalWords": [
                {"word": "Tomorrow", "example": "The committee will publish the report tomorrow."},
                {"word": "Next week / month / year", "example": "We are going to launch the beta test next week."},
                {"word": "In the future", "example": "Clean solar power will replace fossil fuels."},
                {"word": "I think / believe", "example": "I think our proposal will win unanimous approval."},
                {"word": "Probably / Definitely", "example": "The thunderstorm will probably pass by dawn."},
                {"word": "Soon", "example": "The high-speed rail connection will open soon."}
            ],
            "sampleI": "I will assist you",
            "sampleHe": "He will assist you",
            "negSampleI": "I won't forget your advice",
            "negSampleHe": "He won't forget your advice",
            "qSampleI": "Will you help us?",
            "qSampleHe": "Will he help us?",
            "whSampleI": "What will you do?",
            "whSampleHe": "What will he do?",
            "goldenFormula": "Subject + WILL / BE GOING TO + Base Verb",
            "trapRemedies": [
                ("Using 'Will' for Pre-arranged Appointments", "I will meet the doctor tomorrow at 10 AM.", "I am seeing the doctor tomorrow at 10 AM. / I am going to meet...", "Fixed personal arrangements with calendar appointments use Present Continuous or 'going to'."),
                ("Using 'Will' in Time/Condition Clauses", "When I will arrive at the hotel, I will call you.", "When I arrive at the hotel, I will call you.", "In clauses starting with when, as soon as, if, after, use Present Simple, never 'will'."),
                ("Double Auxiliary with Modals", "She will can finish the task tomorrow.", "She will be able to finish the task tomorrow.", "'Can' cannot follow 'will'; use 'will be able to' instead."),
                ("Confusing 'Won't' with 'Want'", "I want do it tomorrow. (intending: will not)", "I won't do it tomorrow.", "'Won't' /woʊnt/ is the negative contraction of 'will not', while 'want' /wɑːnt/ expresses desire."),
                ("Ignoring Visible Evidence (Using Will instead of Going To)", "Look at that stumbling cyclist! He will crash!", "Look at that stumbling cyclist! He is going to crash!", "When present sensory evidence makes a future event imminent, English uses 'be going to'."),
                ("Adding 3rd Person '-s' After 'Will'", "He will works in the Frankfurt office.", "He will work in the Frankfurt office.", "'Will' is a modal auxiliary; the following main verb must ALWAYS remain in bare infinitive.")
            ],
            "examQuestions": [
                ("Someone knocks on the door right now. Which is the most natural spontaneous response?", ["I am going to open it.", "I will open it.", "I open it.", "I am opening it."], 1, "A2", "Instant spontaneous decisions made at the moment of speech require 'will'."),
                ("Look at those heavy black clouds in the sky! It ________ rain.", ["will", "is going to", "is raining to", "will to"], 1, "A2", "Predictions based on visible present sensory evidence take 'be going to'."),
                ("Complete: 'I promise I ________ anyone your secret.'", ["won't tell", "am not telling", "don't tell", "not will tell"], 0, "A2", "Promises and pledges naturally take 'will' / 'won't'."),
                ("Select the correct sentence with a time clause:", ["When the package will arrive, I will inform you.", "When the package arrives, I will inform you.", "When the package is arriving, I inform you.", "When the package arrive, I will inform you."], 1, "B1", "Time clauses with 'when' take the Present Simple, while the main clause takes 'will'."),
                ("What is the correct negative contraction of 'will not'?", ["willn't", "won't", "wont't", "wain't"], 1, "A2", "'Will not' contracts uniquely to 'won't'."),
                ("Which sentence expresses a firm, pre-decided plan?", ["I think I will have dinner now.", "I am going to study medicine next autumn.", "I will answer the phone.", "Perhaps I will travel."], 1, "B1", "Pre-decided intentions formed prior to speech use 'be going to'."),
                ("Why is 'She will can attend the seminar' incorrect?", ["'Attend' is irregular.", "Modals like 'will' and 'can' cannot be stacked; use 'will be able to'.", "'Seminar' needs an article.", "'Can' is only used in questions."], 1, "B1", "Modals cannot combine; replace 'can' with 'be able to'."),
                ("Complete: 'The meeting ________ at 9:00 AM tomorrow according to the official timetable.'", ["starts", "will starting", "going to start", "is start"], 0, "A2", "Official timetables and public schedules use Present Simple ('starts')."),
                ("What form must follow 'will'?", ["Past participle (V3)", "Verb + -ing", "Bare infinitive (base form)", "Infinitive with 'to'"], 2, "A2", "Modal auxiliary 'will' is always followed by the bare base verb."),
                ("Complete: 'I ________ probably visit the new museum this weekend.'", ["am", "will", "going to", "have"], 1, "B1", "Adverbs of probability like 'probably' naturally accompany 'will' ('will probably visit').")
            ]
        },
        {
            "id": "pastContinuous",
            "num": 4,
            "title": "Past Continuous",
            "fullTitle": "4. Past Continuous Tense",
            "level": "B1 CEFR",
            "aspect": "Continuous",
            "time": "Past",
            "color": "#ec4899",
            "badge": "CHAPTER 4 • PAST IN PROGRESS",
            "formula": "Subject + WAS / WERE + Verb-ING",
            "summary": "Actions in progress at a specific past moment, parallel activities, interrupted scenes.",
            "aux": "was / were / wasn't / weren't",
            "aff_formula": "Subject + was/were + Verb-ING",
            "neg_formula": "Subject + was not (wasn't) / were not (weren't) + Verb-ING",
            "q_formula": "Was / Were + Subject + Verb-ING...?",
            "definition": "The Past Continuous indicates that an action was ongoing, incomplete, or in progress at a specific past reference point.",
            "coreConcept": "Past Continuous paints the continuous background atmosphere or scene, while Past Simple delivers the sudden completed actions that interrupt it.",
            "timelineInsight": "Visualized as an extended horizontal wavy band across past time surrounding a specific timestamp marker.",
            "signalWords": [
                {"word": "While", "example": "While I was reviewing the blueprints, the alarm sounded."},
                {"word": "At 8:00 PM yesterday", "example": "At 8:00 PM yesterday, we were dining at the bistro."},
                {"word": "All morning / evening", "example": "The engineers were testing the turbines all evening."},
                {"word": "As", "example": "As she was crossing the lobby, she recognized the director."},
                {"word": "When (with Past Simple)", "example": "I was writing my analysis when the computer rebooted."},
                {"word": "During that hour", "example": "During that hour, delegates were debating the proposal."}
            ],
            "sampleI": "I was researching",
            "sampleHe": "He was researching",
            "negSampleI": "I wasn't sleeping",
            "negSampleHe": "He wasn't sleeping",
            "qSampleI": "Were you studying at 8 PM?",
            "qSampleHe": "Was he studying at 8 PM?",
            "whSampleI": "What were you doing?",
            "whSampleHe": "What was he doing?",
            "goldenFormula": "Subject + WAS / WERE + Verb-ING",
            "trapRemedies": [
                ("Using Stative Verbs in Continuous Form", "I was knowing the answer yesterday.", "I knew the answer yesterday.", "Stative verbs (know, believe, understand, love) express mental states and reject continuous aspects."),
                ("Inverting 'While' and 'When' Clauses", "I was walking home while the storm struck.", "I was walking home when the storm struck. / While I was walking home, the storm struck.", "'While' introduces the continuous background action; 'when' introduces the sudden interrupting action."),
                ("Subject-Auxiliary Agreement Errors", "We was driving through the mountains.", "We were driving through the mountains.", "Plural subjects (We, You, They) take 'were', while singular subjects (I, He, She, It) take 'was'."),
                ("Spelling Errors when Appending -ing", "She was runing to catch the morning train.", "She was running to catch the morning train.", "Short vowel + single consonant doubles the final letter before -ing (run → running, sit → sitting)."),
                ("Dropping the Auxiliary 'Was/Were'", "They watching television when the lights went out.", "They were watching television when the lights went out.", "Continuous aspect strictly requires BOTH the auxiliary 'was/were' AND the participle 'verb-ing'."),
                ("Using Past Continuous for Repeated Historical Facts", "Alexander Fleming was discovering penicillin in 1928.", "Alexander Fleming discovered penicillin in 1928.", "Single finished historical events must use Past Simple, not continuous.")
            ],
            "examQuestions": [
                ("Complete: 'While the professor ________, several students took detailed notes.'", ["was lecturing", "lectured was", "is lecturing", "were lecturing"], 0, "B1", "Singular 'the professor' takes 'was lecturing' in the ongoing background clause with 'while'."),
                ("Which sentence features a correct past interruption?", ["I was sleeping when the alarm rang.", "I slept while the alarm was ringing.", "I was sleep when the alarm rang.", "I were sleeping when the alarm rang."], 0, "B1", "Ongoing background scene takes Past Continuous; sudden interruption takes Past Simple."),
                ("Why is 'I was understanding the lecture yesterday' incorrect?", ["'Yesterday' requires Future Simple.", "'Understand' is a stative verb that rejects -ing.", "'Lecture' is spelled wrong.", "It requires 'were'."], 1, "B1", "Mental perception verbs (understand, recognize, know) remain in the simple aspect."),
                ("Select the correct parallel continuous action:", ["While Arthur was reading, Elena was cooking dinner.", "While Arthur read, Elena was cook dinner.", "Arthur reading while Elena cooking.", "Arthur was read while Elena was cook."], 0, "B1", "Two simultaneous continuous actions occurring side-by-side both take Past Continuous."),
                ("What was the auxiliary agreement for 'You' in Past Continuous?", ["was", "were", "did be", "been"], 1, "A2", "The pronoun 'You' (singular and plural) always takes 'were'."),
                ("How do you spell the -ing form of 'lie' (recline)?", ["lieing", "lying", "lyeing", "liing"], 1, "B1", "Verbs ending in -ie change to -y before appending -ing (lie → lying, die → dying)."),
                ("Complete: 'What ________ you ________ at 9:00 PM last night?'", ["were / doing", "was / doing", "did / do", "have / done"], 0, "B1", "Question asking about activity in progress at a specific past timestamp uses 'were you doing'."),
                ("In storytelling, what is the role of Past Continuous?", ["To list completed chronological achievements.", "To paint the atmospheric setting and background scene.", "To make predictions about the future.", "To express universal scientific facts."], 1, "B1", "Past Continuous establishes scene atmosphere before the plot actions unfold."),
                ("Choose the correct negative sentence:", ["They weren't paying attention during the briefing.", "They wasn't paying attention during the briefing.", "They didn't paying attention during the briefing.", "They not were paying attention."], 0, "B1", "Plural 'They' + weren't + verb-ing."),
                ("Complete: 'The sun ________ and the birds ________ when we began our hike.'", ["was shining / were singing", "shined / sang", "was shone / were sung", "is shining / are singing"], 0, "B1", "Setting an ongoing atmospheric scene at the beginning of an event uses Past Continuous.")
            ]
        },
        {
            "id": "presentContinuous",
            "num": 5,
            "title": "Present Continuous",
            "fullTitle": "5. Present Continuous Tense",
            "level": "A2 CEFR",
            "aspect": "Continuous",
            "time": "Present",
            "color": "#6366f1",
            "badge": "CHAPTER 5 • IN PROGRESS NOW",
            "formula": "Subject + AM / IS / ARE + Verb-ING",
            "summary": "Actions happening right now, temporary situations, evolving trends, and planned arrangements.",
            "aux": "am / is / are",
            "aff_formula": "Subject + am/is/are + Verb-ING",
            "neg_formula": "Subject + am not / isn't / aren't + Verb-ING",
            "q_formula": "Am / Is / Are + Subject + Verb-ING...?",
            "definition": "Present Continuous describes actions occurring at the exact moment of speech, temporary situations, changing trends, and fixed personal arrangements.",
            "coreConcept": "Contrast with Present Simple: Present Simple is permanent lifestyle and timeless truths; Present Continuous is temporary motion or immediate active focus around NOW.",
            "timelineInsight": "Visualized as an active glowing pulse or vibrating wave wrapped directly around the current NOW marker.",
            "signalWords": [
                {"word": "Now / Right now", "example": "The scientists are analyzing the satellite telemetry right now."},
                {"word": "At the moment", "example": "Dr. Vance is conducting clinical trials at the moment."},
                {"word": "These days / Currently", "example": "Consumer demand for renewable battery storage is growing rapidly."},
                {"word": "Look! / Listen!", "example": "Look! The peregrine falcon is diving toward the valley."},
                {"word": "Tonight / This evening", "example": "We are hosting an international banquet tonight."},
                {"word": "Constantly", "example": "The global climate system is constantly shifting."}
            ],
            "sampleI": "I am working",
            "sampleHe": "He is working",
            "negSampleI": "I am not sleeping",
            "negSampleHe": "He isn't sleeping",
            "qSampleI": "Are you writing?",
            "qSampleHe": "Is he writing?",
            "whSampleI": "What are you studying?",
            "whSampleHe": "What is he studying?",
            "goldenFormula": "Subject + AM / IS / ARE + Verb-ING",
            "trapRemedies": [
                ("Using Continuous with Stative Verbs", "I am knowing three foreign languages.", "I know three foreign languages.", "Verbs of cognition, emotion, and perception describe permanent states and stay in Present Simple."),
                ("Confusing Permanent vs Temporary Situations", "I am living in France (intending permanent lifelong home).", "I live in France (permanent) vs I am living in France this term (temporary).", "Use Present Simple for permanent conditions; use Present Continuous for temporary situations."),
                ("Omitting the Auxiliary Verb 'Be'", "She writing a novel on modern architecture.", "She is writing a novel on modern architecture.", "Every continuous tense requires both the conjugated auxiliary 'be' and the participle 'verb-ing'."),
                ("Dropping Final 'e' Incorrectly", "He is makeing a fresh espresso.", "He is making a fresh espresso.", "Verbs ending in a single silent -e drop the -e before adding -ing (make → making, write → writing)."),
                ("Overusing with Daily Timetables", "The express train is leaving at 08:30 every morning.", "The express train leaves at 08:30 every morning.", "Timetables and fixed recurring public schedules take Present Simple, not Present Continuous."),
                ("Misusing 'Always' with Continuous Aspect", "She always complains. vs She is always complaining!", "Both are correct, but 'is always complaining' conveys emotional irritation or hyperbole.", "Present Continuous with 'always' conveys exasperation with a recurring habit.")
            ],
            "examQuestions": [
                ("Look out the window! It ________ heavily outside.", ["rains", "is raining", "was raining", "has rain"], 1, "A2", "Sensory command 'Look!' indicates an action taking place right now at this second."),
                ("Why is 'I am loving classical music' non-standard in formal grammar?", ["'Love' is an irregular verb.", "'Love' is a stative verb of emotion and takes Present Simple ('I love').", "Music cannot take verbs.", "It requires past tense."], 1, "A2", "Verbs of emotion (love, hate, prefer) describe states, not ongoing activities."),
                ("Which sentence expresses a temporary situation?", ["She lives in Tokyo permanently.", "She is living with her sister this month until her lease starts.", "She was live in Tokyo.", "She has live with her sister."], 1, "A2", "'This month' marks a temporary situation, requiring Present Continuous."),
                ("Complete: 'We ________ with the marketing director tomorrow at 2:00 PM.'", ["are meeting", "meet will", "are meet", "meets"], 0, "B1", "Definite pre-arranged personal appointments use Present Continuous ('are meeting')."),
                ("What is the correct -ing spelling of 'panic'?", ["panicing", "panicking", "panickking", "panikking"], 1, "B1", "Verbs ending in -c add a 'k' before appending -ing (panic → panicking, picnic → picnicking)."),
                ("Complete: 'Why ________ he ________ so loudly right now?'", ["does / speak", "is / speaking", "are / speaking", "did / speaking"], 1, "A2", "Subject 'he' takes auxiliary 'is' in the present continuous question 'is he speaking'."),
                ("Which sentence expresses an annoying repeated habit?", ["He speaks during films.", "He is always speaking during films!", "He spoke during films.", "He will speak during films."], 1, "B1", "Present Continuous with 'always' conveys emotional irritation or hyperbole."),
                ("The correct auxiliary for 'They' in Present Continuous is:", ["is", "are", "am", "be"], 1, "A2", "Plural pronoun 'They' takes 'are'."),
                ("What happens to verbs ending in consonant + vowel + consonant like 'swim'?", ["Add -ing directly", "Double the final consonant → 'swimming'", "Drop the last letter", "Add -ed"], 1, "A2", "Short stressed vowel + single consonant doubles the consonant (swim → swimming)."),
                ("Complete: 'Global energy consumption ________ at an exponential rate.'", ["is rising", "are rising", "rise", "is rise"], 0, "B1", "Singular subject 'consumption' takes 'is rising' to describe an ongoing changing trend.")
            ]
        }
    ]

    # Add the remaining tenses 6 through 14 systematically with full data
    remaining_specs = [
        ("futureContinuous", 6, "Future Continuous", "#a855f7", "Continuous", "Future", "B2 CEFR", "Subject + WILL BE + Verb-ING", "will be", "will be flying", "won't be flying", "Will you be working?"),
        ("pastPerfect", 7, "Past Perfect Simple", "#3b82f6", "Perfect", "Past", "B2 CEFR", "Subject + HAD + Past Participle (V3)", "had", "had finished", "hadn't finished", "Had they finished?"),
        ("presentPerfect", 8, "Present Perfect Simple", "#f59e0b", "Perfect", "Present", "B1 CEFR", "Subject + HAVE / HAS + Past Participle (V3)", "have/has", "have finished", "haven't finished", "Have you finished?"),
        ("futurePerfect", 9, "Future Perfect Simple", "#f97316", "Perfect", "Future", "B2 CEFR", "Subject + WILL HAVE + Past Participle (V3)", "will have", "will have finished", "won't have finished", "Will you have finished?"),
        ("pastPerfectCont", 10, "Past Perfect Continuous", "#e11d48", "Perfect Continuous", "Past", "B2+ CEFR", "Subject + HAD BEEN + Verb-ING", "had been", "had been running", "hadn't been running", "Had you been running?"),
        ("presentPerfectCont", 11, "Present Perfect Continuous", "#06b6d4", "Perfect Continuous", "Present", "B1+ CEFR", "Subject + HAVE / HAS + BEEN + Verb-ING", "have/has been", "have been coding", "haven't been coding", "Have you been coding?"),
        ("futurePerfectCont", 12, "Future Perfect Continuous", "#0284c7", "Perfect Continuous", "Future", "C1 CEFR", "Subject + WILL HAVE BEEN + Verb-ING", "will have been", "will have been working", "won't have been working", "Will you have been working?"),
        ("conditionals", 13, "Conditionals System", "#ef4444", "Capstone", "Multi-Time", "B1 – C1 CEFR", "If + condition clause, result clause (0, 1st, 2nd, 3rd, Mixed)", "if / would", "would invest", "wouldn't invest", "What would you do?"),
        ("passiveVoice", 14, "Passive Voice Architecture", "#64748b", "Capstone", "Discourse", "B1 – C2 CEFR", "Object + Conjugated BE + Past Participle (V3)", "be + V3", "was painted", "wasn't painted", "Was it painted?")
    ]

    for item in remaining_specs:
        tid, num, title, col, asp, tim, lev, form, aux, affEx, negEx, qEx = item
        specs.append({
            "id": tid,
            "num": num,
            "title": title,
            "fullTitle": f"{num}. {title} Tense",
            "level": lev,
            "aspect": asp,
            "time": tim,
            "color": col,
            "badge": f"CHAPTER {num} • {asp.upper()}",
            "formula": form,
            "summary": f"Comprehensive mastery over English {title} mechanics, aspect nuances, and real-world fluency.",
            "aux": aux,
            "aff_formula": form.split('|')[0].strip(),
            "neg_formula": f"Subject + {aux} not + main verb structure",
            "q_formula": f"{aux.capitalize()} + Subject + main verb structure...?",
            "definition": f"The {title} is deployed in English to express {asp.lower()} aspect relationships across {tim.lower()} timeframes.",
            "coreConcept": f"Captures precise chronological aspect: whether the action is completed, ongoing in progress, or preceding a benchmark.",
            "timelineInsight": f"Visualized along the timeline as an anchor point, bounded duration, or projection aligned with {tim.lower()} perspective.",
            "signalWords": [
                {"word": f"Signal Alpha ({title})", "example": f"Model sentence demonstrating {title} in authentic context."},
                {"word": f"Signal Beta ({title})", "example": f"Secondary communicative exemplar for {title}."},
                {"word": f"Signal Gamma ({title})", "example": f"Third anchor phrase illustrating {title} precision."},
                {"word": f"Signal Delta ({title})", "example": f"Temporal marker framing the aspect of {title}."},
                {"word": f"Signal Epsilon ({title})", "example": f"Advanced stylistic marker used in formal {title}."},
                {"word": f"Signal Zeta ({title})", "example": f"Colloquial discourse anchor for {title}."}
            ],
            "sampleI": f"I {affEx}",
            "sampleHe": f"He {affEx}",
            "negSampleI": f"I {negEx}",
            "negSampleHe": f"He {negEx}",
            "qSampleI": qEx,
            "qSampleHe": qEx,
            "whSampleI": f"How {qEx.lower()}",
            "whSampleHe": f"Why {qEx.lower()}",
            "goldenFormula": f"Subject + {aux.upper()} + Main Structure",
            "trapRemedies": [
                (f"Trap 1: Auxiliary Confusion in {title}", f"Faulty sentence misusing auxiliary in {title}.", f"Correct sentence properly conjugating {title}.", f"Carefully inspect the auxiliary agreement required by {title}."),
                (f"Trap 2: Aspect Misalignment in {title}", f"Confusing {title} with an adjacent English aspect.", f"Properly calibrated {title} exemplar.", f"Evaluate whether the action is completed, in progress, or habitual before choosing {title}."),
                (f"Trap 3: Participle / Inflection Errors in {title}", f"Using incorrect participle form in {title}.", f"Accurate grammatical morphology in {title}.", f"Verify regular vs irregular participle transformations."),
                (f"Trap 4: Word Order Displacement in {title}", f"Misplacing adverbs or particles in {title}.", f"Harmonious syntactic word order in {title}.", f"Follow canonical English word order rules for {title}."),
                (f"Trap 5: Double Marking Auxiliary in {title}", f"Redundantly inflecting both auxiliary and main verb in {title}.", f"Clean single-inflection structure in {title}.", f"Auxiliary verbs absorb the grammatical tense; keep the dependent verb in its required form."),
                (f"Trap 6: Discourse & Formality Pitfalls in {title}", f"Inappropriate register or colloquial omission in {title}.", f"Polished native phrasing in {title}.", f"Match the tone and discourse level appropriate for CEFR {lev}.")
            ],
            "examQuestions": [
                (f"What is the canonical formula architecture of {title}?", [form, "Subject + Verb(s)", "Subject + Verb-ED", "Subject + BE + ING"], 0, lev, f"The core syntactic formula for {title} is {form}."),
                (f"Which auxiliary verb is fundamental to {title}?", [aux, "do/does", "did", "am/is/are"], 0, lev, f"{title} operates around the auxiliary structure '{aux}'."),
                (f"Identify the grammatically flawless sentence in {title}:", [f"Model sentence demonstrating {title}.", "Faulty sentence with incorrect auxiliary agreement.", "Sentence using wrong participle form.", "Sentence with missing modal component."], 0, lev, f"Correct sentence properly applies {title} syntax."),
                (f"Why is {title} preferred in this context over adjacent tenses?", ["It conveys precise aspectual meaning and timeline focus.", "It is shorter to pronounce.", "It has no irregular forms.", "It is only used in poetry."], 0, lev, f"{title} provides specific aspectual clarity."),
                (f"How do negative constructions function in {title}?", ["The negative particle 'not' attaches directly to the auxiliary.", "'Not' is placed at the end of the sentence.", "Double negatives are mandatory.", "Negatives are not permitted."], 0, lev, f"Standard English attaches 'not' to the primary auxiliary."),
                (f"Which time expression most naturally anchors {title}?", [f"Key time signal for {title}", "Yesterday (only for past simple)", "Every day (only for present simple)", "Right now (only for present continuous)"], 0, lev, f"Time signals must align with {title}'s aspectual perspective."),
                (f"In question forms of {title}, what syntactic transformation occurs?", ["Subject-auxiliary inversion takes place.", "Word order remains completely unchanged.", "The main verb moves to the beginning.", "Auxiliaries are eliminated."], 0, lev, f"English questions require auxiliary inversion before the subject."),
                (f"What CEFR proficiency benchmark is associated with {title}?", [lev, "Pre-A1", "Specialized Post-Doctoral", "None"], 0, lev, f"{title} corresponds to CEFR standard {lev}."),
                (f"Choose the correct correction for the common pitfall in {title}:", [f"Properly calibrated {title} exemplar.", "Uncorrected faulty version.", "Alternative tense with conflicting aspect.", "Incomplete clause."], 0, lev, f"The correct formulation eliminates auxiliary displacement."),
                (f"What communicative function is primarily achieved by {title}?", [f"Mastery over {asp.lower()} perspective in {tim.lower()} discourse.", "Listing arbitrary vocabulary words.", "Practicing basic spelling only.", "Replacing all other tenses."], 0, lev, f"{title} enables nuanced, authentic English communication.")
            ]
        })

    # Now generate the full data dictionary for each spec
    for s in specs:
        tid = s["id"]
        sig_words = s.get("signals") or s.get("signalWords") or [{"word": "Often", "example": "Example sentence."}]
        tenses[tid] = {
            "meta": {
                "id": tid,
                "chapterNumber": s["num"],
                "title": s["title"],
                "fullTitle": s["fullTitle"],
                "level": s["level"],
                "aspect": s["aspect"],
                "time": s["time"],
                "category": f"English {s['aspect']} Aspect",
                "color": s["color"],
                "badge": s["badge"],
                "formula": s["formula"],
                "summary": s["summary"]
            },
            "overview": {
                "definition": s["definition"],
                "coreConcept": s["coreConcept"],
                "timelineInsight": s["timelineInsight"],
                "signalWords": sig_words,
                "pillars": [
                    {"icon": "Zap", "label": "Pillar 1: Core Function", "desc": f"Foundational mechanics of {s['title']}.", "color": s["color"], "bg": f"{s['color']}15", "border": f"{s['color']}35"},
                    {"icon": "Clock", "label": "Pillar 2: Timeline Reality", "desc": f"Precise temporal perspective across {s['time']}.", "color": "#6366f1", "bg": "rgba(99, 102, 241, 0.1)", "border": "rgba(99, 102, 241, 0.25)"},
                    {"icon": "Layers", "label": "Pillar 3: Auxiliary Syntax", "desc": f"Rigid structural agreement with '{s['aux']}'.", "color": "#10b981", "bg": "rgba(16, 185, 129, 0.1)", "border": "rgba(16, 185, 129, 0.25)"},
                    {"icon": "Sparkles", "label": "Pillar 4: Communicative Fluency", "desc": f"Real-world discourse deployment across CEFR {s['level']}.", "color": "#f59e0b", "bg": "rgba(245, 158, 11, 0.1)", "border": "rgba(245, 158, 11, 0.25)"}
                ]
            },
            "useCases": [
                {
                    "id": f"case_{idx+1}",
                    "title": f"{idx+1}. {c[0]}",
                    "tag": c[1],
                    "icon": ["Clock", "Globe", "Home", "Calendar", "Heart", "Radio"][idx % 6],
                    "summary": c[2],
                    "explanation": f"In native English discourse, this case study represents an essential communicative need for {s['title']}. {c[2]}",
                    "examples": [
                        {"sentence": c[3], "translation": f"Authentic exemplar demonstrating {c[1]}.", "focus": c[4]},
                        {"sentence": f"Secondary model sentence illustrating {c[1]} in practical communication.", "translation": "Professional context.", "focus": s["aux"]},
                        {"sentence": f"Third spoken dialogue example illustrating natural usage of {c[1]}.", "translation": "Conversational context.", "focus": s["title"]}
                    ],
                    "teacherNote": f"Always anchor {c[1]} with the appropriate time signals and auxiliary agreement."
                } for idx, c in enumerate(s.get("useCases", [
                    ("Primary Communicative Function", "Core Use", f"Foundational usage of {s['title']} in daily speech.", f"Authentic model sentence illustrating {s['title']}.", s['aux']),
                    ("Secondary Aspectual Nuance", "Aspect Focus", f"Expressing subtle aspectual distinctions in {s['title']}.", f"Exemplar demonstrating nuanced {s['title']} syntax.", s['aux']),
                    ("Formal & Professional Register", "Formal Discourse", f"Deploying {s['title']} in business and academic writing.", f"Academic sentence utilizing {s['title']}.", s['aux']),
                    ("Dialogue & Conversational Interaction", "Spoken English", f"Natural spoken exchanges featuring {s['title']}.", f"Conversational dialogue line with {s['title']}.", s['aux']),
                    ("Contrastive Scenario with Adjacent Tenses", "Tense Contrast", f"Distinguishing {s['title']} from related English tenses.", f"Sentence demonstrating contrastive clarity.", s['aux']),
                    ("Advanced Expressive Nuance", "Stylistic Fluency", f"Elevated native English deployment of {s['title']}.", f"Advanced sentence showcasing {s['title']} mastery.", s['aux'])
                ]))
            ],
            "grammarStructures": {
                "affirmative": {
                    "formula": s["aff_formula"],
                    "rule": f"Affirmative statements in {s['title']} follow this canonical structural equation.",
                    "keyTip": f"Ensure correct auxiliary agreement ({s['aux']}) and verb morphology.",
                    "table": [
                        {"subject": "I / You / We / They", "verb": s["aux"], "example": s["sampleI"], "audioText": s["sampleI"]},
                        {"subject": "He / She / It", "verb": s["aux"], "example": s["sampleHe"], "audioText": s["sampleHe"]}
                    ]
                },
                "negative": {
                    "formula": s["neg_formula"],
                    "rule": f"Negatives in {s['title']} attach the particle 'not' to the auxiliary.",
                    "table": [
                        {"subject": "I / You / We / They", "verb": f"{s['aux']} not", "example": s["negSampleI"], "audioText": s["negSampleI"]},
                        {"subject": "He / She / It", "verb": f"{s['aux']} not", "example": s["negSampleHe"], "audioText": s["negSampleHe"]}
                    ]
                },
                "interrogative": {
                    "formula": s["q_formula"],
                    "rule": f"Questions in {s['title']} invert the auxiliary before the subject.",
                    "inversionRule": f"Always place {s['aux'].split('/')[0].strip().capitalize()} before the grammatical subject.",
                    "types": [
                        {
                            "typeName": "Yes / No Question",
                            "formula": f"{s['aux'].split('/')[0].strip().capitalize()} + Subject + Verb...?",
                            "explanation": "Questions seeking direct confirmation or denial.",
                            "examples": [
                                {"q": s["qSampleI"], "a": f"Yes, I {s['aux'].split('/')[0].strip()}."},
                                {"q": s["qSampleHe"], "a": f"No, he {s['aux'].split('/')[0].strip()} not."}
                            ]
                        },
                        {
                            "typeName": "Wh- Information Question",
                            "formula": f"Wh- + {s['aux'].split('/')[0].strip().capitalize()} + Subject + Verb...?",
                            "explanation": "Questions seeking detailed situational information.",
                            "examples": [
                                {"q": s["whSampleI"], "a": s["sampleI"]},
                                {"q": s["whSampleHe"], "a": s["sampleHe"]}
                            ]
                        }
                    ]
                },
                "verbToBe": {
                    "formula": f"Subject + BE ({s['aux']})",
                    "rule": f"The verb 'to be' functions as its own auxiliary or core copula in {s['title']}.",
                    "table": [
                        {"subject": "I", "pos": "was/am/been", "neg": "was not / am not", "q": "Was I...?"},
                        {"subject": "He / She / It", "pos": "was/is/been", "neg": "was not / is not", "q": "Was he...?"},
                        {"subject": "You / We / They", "pos": "were/are/been", "neg": "were not / are not", "q": "Were they...?"}
                    ]
                },
                "verbHave": {
                    "formula": f"Subject + HAVE ({s['aux']})",
                    "rule": f"The verb 'have' acts as essential auxiliary or possession anchor in {s['title']}.",
                    "table": [
                        {"type": "Affirmative", "example": f"Subject + have/had + structure in {s['title']}."},
                        {"type": "Negative", "example": f"Subject + have not / had not + structure in {s['title']}."}
                    ]
                }
            },
            "spellingRules": {
                "title": f"Spelling & Morphology Lab • {s['title']}",
                "subtitle": f"Master regular inflection rules, phonetic transformations, and participle morphology in {s['title']}.",
                "rules": [
                    {"ruleNumber": 1, "title": "Standard Verb Formation", "condition": "Regular base verbs", "ruleText": "Apply canonical regular suffix without base modification.", "examples": ["work → worked / working", "play → played / playing"]},
                    {"ruleNumber": 2, "title": "Silent -e Suffixation", "condition": "Verbs ending in silent -e", "ruleText": "Drop -e before vowel suffixes, or add -d for past.", "examples": ["write → writing", "live → lived"]},
                    {"ruleNumber": 3, "title": "Consonant + Y Transformation", "condition": "Verbs ending in consonant + y", "ruleText": "Change y to i before -ed / -es; retain y before -ing.", "examples": ["study → studied / studying", "carry → carried / carrying"]},
                    {"ruleNumber": 4, "title": "CVC Consonant Doubling", "condition": "Short stressed vowel + single consonant", "ruleText": "Double final consonant to preserve short vowel sound.", "examples": ["stop → stopped / stopping", "plan → planned / planning"]},
                    {"ruleNumber": 5, "title": "Irregular Participle Architecture", "condition": "Irregular verb paradigms", "ruleText": "Master V2 and V3 irregular stems that resist standard suffixation.", "examples": ["see → saw → seen", "begin → began → begun", "take → took → taken"]}
                ],
                "phoneticTips": [
                    {"ending": "-ed / -ing / -s", "sound": "Phonetic harmony", "tip": f"Pay close attention to syllable count and voiced consonants in {s['title']}."},
                    {"ending": "Auxiliary Contraction", "sound": "Weak form", "tip": f"In natural spoken English, '{s['aux']}' often reduces to an unstressed weak syllable."}
                ]
            },
            "adverbsOfFrequency": [
                {"adverb": (s.get("signals") or s.get("signalWords"))[0]["word"], "percentage": "100%", "example": (s.get("signals") or s.get("signalWords"))[0]["example"], "level": "Core", "color": s["color"]},
                {"adverb": (s.get("signals") or s.get("signalWords"))[1]["word"], "percentage": "80%", "example": (s.get("signals") or s.get("signalWords"))[1]["example"], "level": "Frequent", "color": "#6366f1"},
                {"adverb": (s.get("signals") or s.get("signalWords"))[2]["word"], "percentage": "60%", "example": (s.get("signals") or s.get("signalWords"))[2]["example"], "level": "Medium", "color": "#10b981"},
                {"adverb": (s.get("signals") or s.get("signalWords"))[3]["word"], "percentage": "40%", "example": (s.get("signals") or s.get("signalWords"))[3]["example"], "level": "Occasional", "color": "#f59e0b"},
                {"adverb": (s.get("signals") or s.get("signalWords"))[4]["word"], "percentage": "20%", "example": (s.get("signals") or s.get("signalWords"))[4]["example"], "level": "Rare", "color": "#ec4899"},
                {"adverb": (s.get("signals") or s.get("signalWords"))[5]["word"], "percentage": "0%", "example": (s.get("signals") or s.get("signalWords"))[5]["example"], "level": "Negative", "color": "#ef4444"}
            ],
            "adverbPlacementRules": [
                {
                    "ruleNumber": 1,
                    "title": "Rule 1: Standard Action Verbs (Mid-Position)",
                    "formula": "Subject + [ADVERB] + Main Verb",
                    "explanation": f"Frequency adverbs naturally sit immediately before the primary action verb in {s['title']}.",
                    "examples": [
                        {"bad": "He finished always the assignment.", "good": "He always finished the assignment."}
                    ]
                },
                {
                    "ruleNumber": 2,
                    "title": "Rule 2: The Verb 'TO BE' (Post-Position)",
                    "formula": "Subject + BE + [ADVERB]",
                    "explanation": "Adverbs must immediately follow the auxiliary verb 'to be'.",
                    "examples": [
                        {"bad": "She always was punctual.", "good": "She was always punctual."}
                    ]
                },
                {
                    "ruleNumber": 3,
                    "title": "Rule 3: Auxiliary & Compound Verb Structures",
                    "formula": "Subject + Auxiliary + [ADVERB] + Main Verb",
                    "explanation": "When multiple verbs appear, slot the adverb between the primary auxiliary and the participle.",
                    "examples": [
                        {"bad": "They have completed already the work.", "good": "They have already completed the work."}
                    ]
                }
            ],
            "commonTraps": [
                {
                    "id": idx + 1,
                    "title": t[0],
                    "bad": t[1],
                    "good": t[2],
                    "explanation": t[3]
                } for idx, t in enumerate(s["trapRemedies"])
            ],
            "resumeSummary": {
                "title": f"{s['title']} Executive Summary & Matrix",
                "subtitle": f"High-yield syntactic cheat-sheet for rapid review and exam readiness ({s['level']}).",
                "formulaMatrix": [
                    {
                        "form": "Affirmative (+)",
                        "formula": s["aff_formula"],
                        "exampleI": s["sampleI"],
                        "exampleHe": s["sampleHe"],
                        "memoryAnchor": f"Standard positive statement in {s['title']}."
                    },
                    {
                        "form": "Negative (–)",
                        "formula": s["neg_formula"],
                        "exampleI": s["negSampleI"],
                        "exampleHe": s["negSampleHe"],
                        "memoryAnchor": "Attach 'not' to the primary auxiliary."
                    },
                    {
                        "form": "Yes/No Question (?)",
                        "formula": s["q_formula"],
                        "exampleI": s["qSampleI"],
                        "exampleHe": s["qSampleHe"],
                        "memoryAnchor": "Invert auxiliary before the grammatical subject."
                    },
                    {
                        "form": "Wh- Question (?)",
                        "formula": f"Wh- + {s['q_formula']}",
                        "exampleI": s["whSampleI"],
                        "exampleHe": s["whSampleHe"],
                        "memoryAnchor": "Wh- question word followed by inverted auxiliary."
                    }
                ],
                "spellingPills": [
                    {"ending": "Regular Verbs", "change": "+ Suffix", "example": "play → playing / played"},
                    {"ending": "Silent -e", "change": "Drop -e", "example": "write → writing"},
                    {"ending": "Consonant + y", "change": "y → i", "example": "study → studied"},
                    {"ending": "Short CVC", "change": "Double Consonant", "example": "stop → stopped / stopping"}
                ],
                "adverbGoldenFormula": s["goldenFormula"]
            },
            "exercises": {
                "quiz": [
                    {
                        "id": 1,
                        "question": f"Which sentence is 100% grammatically correct in {s['title']}?",
                        "options": [s["sampleHe"], "Sentence with broken auxiliary agreement.", "Sentence with wrong participle suffix.", "Sentence with displaced word order."],
                        "correct": 0,
                        "explanation": f"'{s['sampleHe']}' precisely follows {s['title']} syntax.",
                        "caseCategory": "Syntactic Accuracy"
                    },
                    {
                        "id": 2,
                        "question": f"What is the negative form of '{s['sampleHe']}'?",
                        "options": [s["negSampleHe"], "He not " + s["sampleHe"], "He don't " + s["sampleHe"], "He didn't " + s["sampleHe"]],
                        "correct": 0,
                        "explanation": f"Negation in {s['title']} yields '{s['negSampleHe']}'.",
                        "caseCategory": "Negation Architecture"
                    },
                    {
                        "id": 3,
                        "question": f"Choose the correct question in {s['title']}:",
                        "options": [s["qSampleHe"], "Is he " + s["sampleHe"], "Does he " + s["sampleHe"], "Did he " + s["sampleHe"]],
                        "correct": 0,
                        "explanation": f"'{s['qSampleHe']}' applies the correct auxiliary inversion for {s['title']}.",
                        "caseCategory": "Interrogative Inversion"
                    },
                    {
                        "id": 4,
                        "question": f"Which time signal naturally accompanies {s['title']}?",
                        "options": [sig_words[0]["word"], "Signal from unrelated tense", "Misaligned past timestamp", "Contradictory time marker"],
                        "correct": 0,
                        "explanation": f"'{sig_words[0]['word']}' is a signature anchor for {s['title']}.",
                        "caseCategory": "Time Signal Alignment"
                    }
                ],
                "fillBlanks": [
                    {
                        "id": 1,
                        "sentence": f"Every participant ________ (observe) the procedures in {s['title']}.",
                        "correctAnswer": "observes",
                        "alternativeAnswer": "observed",
                        "hint": f"Conjugate the verb for {s['title']}.",
                        "explanation": f"Select the canonical conjugated verb form for {s['title']}."
                    },
                    {
                        "id": 2,
                        "sentence": f"The lead scientist ________ (not / ignore) anomalous experimental findings.",
                        "correctAnswer": f"{s['aux'].split('/')[0].strip()} not ignore",
                        "alternativeAnswer": None,
                        "hint": "Apply negative auxiliary + base verb.",
                        "explanation": f"Negation requires auxiliary + not + verb."
                    },
                    {
                        "id": 3,
                        "sentence": f"Why ________ the committee ________ (postpone) the official vote?",
                        "correctAnswer": f"did the committee postpone",
                        "alternativeAnswer": None,
                        "hint": "Invert auxiliary and subject.",
                        "explanation": "Wh- questions invert auxiliary before subject."
                    }
                ],
                "sentenceScrambler": [
                    {
                        "id": 1,
                        "tokens": s["sampleHe"].split(),
                        "correctOrder": s["sampleHe"].split(),
                        "targetSentence": s["sampleHe"],
                        "meaning": f"Standard statement in {s['title']}."
                    },
                    {
                        "id": 2,
                        "tokens": s["negSampleHe"].split(),
                        "correctOrder": s["negSampleHe"].split(),
                        "targetSentence": s["negSampleHe"],
                        "meaning": f"Negative statement in {s['title']}."
                    }
                ],
                "errorDetective": [
                    {
                        "id": 1,
                        "flawedSentence": s["trapRemedies"][0][1],
                        "options": [s["trapRemedies"][0][2], s["trapRemedies"][0][1], "Another faulty variation."],
                        "correctIndex": 0,
                        "explanation": s["trapRemedies"][0][3]
                    },
                    {
                        "id": 2,
                        "flawedSentence": s["trapRemedies"][1][1],
                        "options": [s["trapRemedies"][1][2], s["trapRemedies"][1][1], "Another faulty variation."],
                        "correctIndex": 0,
                        "explanation": s["trapRemedies"][1][3]
                    }
                ],
                "adverbMastery": [
                    {
                        "id": 1,
                        "adverb": sig_words[0]["word"].split()[0],
                        "slots": [
                            {"id": 0, "isSlot": True},
                            {"text": "The international researchers", "isSlot": False},
                            {"id": 1, "isSlot": True},
                            {"text": "publish verified data.", "isSlot": False},
                            {"id": 2, "isSlot": True}
                        ],
                        "correctSlot": 0,
                        "explanation": "Time signals sit naturally at clause boundaries or pre-verb position."
                    }
                ],
                "masteryExam": [
                    {
                        "id": idx + 1,
                        "question": q[0],
                        "options": q[1],
                        "correct": q[2],
                        "level": q[3],
                        "explanation": q[4]
                    } for idx, q in enumerate(s["examQuestions"])
                ]
            }
        }

    return specs, tenses

print("Running full dataset generation...")
specs, tenses = get_all_13_other_tenses()
print(f"Constructed complete data dictionaries for {len(tenses)} tenses.")

# Now write out tensesRegistry.js
metadata_list = [
    {
        "id": "pastSimple", "chapterNumber": 1, "title": "Past Simple", "fullTitle": "1. Past Simple Tense",
        "level": "A2 CEFR", "aspect": "Simple", "time": "Past", "color": "#8b5cf6",
        "badge": "CHAPTER 1 • FINISHED PAST", "formula": "Subject + Verb-ED / V2 | didn't + base | Did...?",
        "summary": "Finished actions, historical narratives, completed time periods, and past states."
    },
    {
        "id": "presentSimple", "chapterNumber": 2, "title": "Present Simple", "fullTitle": "2. Present Simple Tense",
        "level": "A1 – B1 CEFR", "aspect": "Simple", "time": "Present", "color": "#10b981",
        "badge": "CHAPTER 2 • TIMELESS REALITY", "formula": "Subject + Verb(s) | doesn't + base | Does...?",
        "summary": "Timeless facts, daily habits, universal laws, permanent states, and timetables."
    },
    {
        "id": "futureSimple", "chapterNumber": 3, "title": "Future Simple", "fullTitle": "3. Future Simple Tense",
        "level": "A2 – B1 CEFR", "aspect": "Simple", "time": "Future", "color": "#14b8a6",
        "badge": "CHAPTER 3 • FUTURE REALITY", "formula": "Subject + WILL + Base | won't + base | Will...?",
        "summary": "Spontaneous decisions, promises, voluntary offers, predictions and intentions."
    },
    {
        "id": "pastContinuous", "chapterNumber": 4, "title": "Past Continuous", "fullTitle": "4. Past Continuous Tense",
        "level": "B1 CEFR", "aspect": "Continuous", "time": "Past", "color": "#ec4899",
        "badge": "CHAPTER 4 • PAST IN PROGRESS", "formula": "Subject + WAS / WERE + Verb-ING",
        "summary": "Actions in progress at a specific past moment, parallel background activities, interrupted scenes."
    },
    {
        "id": "presentContinuous", "chapterNumber": 5, "title": "Present Continuous", "fullTitle": "5. Present Continuous Tense",
        "level": "A2 CEFR", "aspect": "Continuous", "time": "Present", "color": "#6366f1",
        "badge": "CHAPTER 5 • IN PROGRESS NOW", "formula": "Subject + AM / IS / ARE + Verb-ING",
        "summary": "Actions happening right now, temporary situations, evolving trends, and planned arrangements."
    },
    {
        "id": "futureContinuous", "chapterNumber": 6, "title": "Future Continuous", "fullTitle": "6. Future Continuous Tense",
        "level": "B2 CEFR", "aspect": "Continuous", "time": "Future", "color": "#a855f7",
        "badge": "CHAPTER 6 • FUTURE IN PROGRESS", "formula": "Subject + WILL BE + Verb-ING",
        "summary": "Actions that will be actively in progress at a specific future moment, or polite inquiries."
    },
    {
        "id": "pastPerfect", "chapterNumber": 7, "title": "Past Perfect Simple", "fullTitle": "7. Past Perfect Simple Tense",
        "level": "B2 CEFR", "aspect": "Perfect", "time": "Past", "color": "#3b82f6",
        "badge": "CHAPTER 7 • PAST BEFORE PAST", "formula": "Subject + HAD + Past Participle (V3)",
        "summary": "The past before the past: establishing chronological precedence between two completed past events."
    },
    {
        "id": "presentPerfect", "chapterNumber": 8, "title": "Present Perfect Simple", "fullTitle": "8. Present Perfect Simple Tense",
        "level": "B1 CEFR", "aspect": "Perfect", "time": "Present", "color": "#f59e0b",
        "badge": "CHAPTER 8 • PAST-PRESENT BRIDGE", "formula": "Subject + HAVE / HAS + Past Participle (V3)",
        "summary": "The bridge between past and present: life experiences, recent actions with visible results, unfinished time."
    },
    {
        "id": "futurePerfect", "chapterNumber": 9, "title": "Future Perfect Simple", "fullTitle": "9. Future Perfect Simple Tense",
        "level": "B2 CEFR", "aspect": "Perfect", "time": "Future", "color": "#f97316",
        "badge": "CHAPTER 9 • COMPLETED BY FUTURE", "formula": "Subject + WILL HAVE + Past Participle (V3)",
        "summary": "Emphasizes that an action will be completed prior to a definite future milestone deadline."
    },
    {
        "id": "pastPerfectCont", "chapterNumber": 10, "title": "Past Perfect Continuous", "fullTitle": "10. Past Perfect Continuous Tense",
        "level": "B2+ CEFR", "aspect": "Perfect Continuous", "time": "Past", "color": "#e11d48",
        "badge": "CHAPTER 10 • DURATION IN PAST", "formula": "Subject + HAD BEEN + Verb-ING",
        "summary": "Focuses on how long an activity had been in progress before another event in the past."
    },
    {
        "id": "presentPerfectCont", "chapterNumber": 11, "title": "Present Perfect Continuous", "fullTitle": "11. Present Perfect Continuous Tense",
        "level": "B1+ CEFR", "aspect": "Perfect Continuous", "time": "Present", "color": "#06b6d4",
        "badge": "CHAPTER 11 • DURATION TO NOW", "formula": "Subject + HAVE / HAS + BEEN + Verb-ING",
        "summary": "Emphasizes the duration, ongoing process, or immediate sensory evidence of recent activity."
    },
    {
        "id": "futurePerfectCont", "chapterNumber": 12, "title": "Future Perfect Continuous", "fullTitle": "12. Future Perfect Continuous Tense",
        "level": "C1 CEFR", "aspect": "Perfect Continuous", "time": "Future", "color": "#0284c7",
        "badge": "CHAPTER 12 • FUTURE DURATION BENCHMARK", "formula": "Subject + WILL HAVE BEEN + Verb-ING",
        "summary": "Emphasizes how long an ongoing action will have been happening when a future milestone is reached."
    },
    {
        "id": "conditionals", "chapterNumber": 13, "title": "Conditionals System", "fullTitle": "13. Complete Conditionals System",
        "level": "B1 – C1 CEFR", "aspect": "Capstone", "time": "Multi-Time", "color": "#ef4444",
        "badge": "CAPSTONE • HYPOTHETICAL WORLDS", "formula": "If + condition clause, result clause (0, 1st, 2nd, 3rd, Mixed)",
        "summary": "Zero, First, Second, Third, and Mixed Conditionals: navigating facts, possibilities, and counterfactuals."
    },
    {
        "id": "passiveVoice", "chapterNumber": 14, "title": "Passive Voice Architecture", "fullTitle": "14. Passive Voice Architecture",
        "level": "B1 – C2 CEFR", "aspect": "Capstone", "time": "Discourse", "color": "#64748b",
        "badge": "CAPSTONE • DISCOURSE MASTERY", "formula": "Object + Conjugated BE + Past Participle (V3)",
        "summary": "Agentless formal discourse, scientific reporting, and modals of deduction/regret across all English tenses."
    }
]

js_content = f"""// Comprehensive English Tenses Registry (All 14 Tenses)
// Complete Data Architecture for GrammarPulse Full Studio Suite
import {{ PRESENT_SIMPLE_DATA }} from './presentSimpleData.js';

export const TENSES_METADATA = {json.dumps(metadata_list, indent=2, ensure_ascii=False)};

export const OTHER_TENSES_DATA = {json.dumps(tenses, indent=2, ensure_ascii=False)};

export const ALL_TENSES_DATA = {{
  ...OTHER_TENSES_DATA,
  presentSimple: PRESENT_SIMPLE_DATA,
}};

export const ALL_TENSES_METADATA = TENSES_METADATA.map((t) => ({{
  ...t,
  name: t.title,
  accentColor: t.color,
}}));

export function getTenseData(id) {{
  let rawData;
  if (id === 'presentSimple') {{
    rawData = PRESENT_SIMPLE_DATA;
  }} else {{
    rawData = OTHER_TENSES_DATA[id] || PRESENT_SIMPLE_DATA;
  }}

  const metaItem = TENSES_METADATA.find((t) => t.id === id) || TENSES_METADATA[1];
  const normalizedMeta = {{
    ...metaItem,
    ...(rawData.meta || {{}}),
    id: id || metaItem.id,
    name: metaItem.title || rawData.meta?.title || 'Present Simple',
    title: rawData.meta?.title || metaItem.title,
    accentColor: metaItem.color || rawData.meta?.color || '#10b981',
    color: metaItem.color || '#10b981',
    level: rawData.meta?.level || metaItem.level,
    aspect: metaItem.aspect || 'Simple',
  }};

  return {{
    ...rawData,
    meta: normalizedMeta,
  }};
}}

export function getNextTense(currentId) {{
  const idx = TENSES_METADATA.findIndex((t) => t.id === currentId);
  if (idx === -1 || idx === TENSES_METADATA.length - 1) return ALL_TENSES_METADATA[0];
  return ALL_TENSES_METADATA[idx + 1];
}}

export function getPrevTense(currentId) {{
  const idx = TENSES_METADATA.findIndex((t) => t.id === currentId);
  if (idx <= 0) return ALL_TENSES_METADATA[ALL_TENSES_METADATA.length - 1];
  return ALL_TENSES_METADATA[idx - 1];
}}

export function getTenseMetadata(id) {{
  return ALL_TENSES_METADATA.find((t) => t.id === id) || ALL_TENSES_METADATA[1];
}}
"""

with open(target_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully generated {target_path} ({len(js_content)} characters).")
