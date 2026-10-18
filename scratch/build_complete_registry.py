# -*- coding: utf-8 -*-
import json
import os

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'tensesRegistry.js'))

TENSES_SPECS = [
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
        "formula": "Subject + Verb-ED / V2 | didn't + Base | Did...?",
        "summary": "Finished actions, historical narratives, completed time periods, and past states.",
        "aux": "did / didn't",
        "aff_rule": "Add -ed to regular verbs or use irregular V2 form.",
        "neg_rule": "Subject + didn't + bare infinitive base verb.",
        "q_rule": "Did + Subject + bare infinitive base verb...?",
        "signals": [
            ("Yesterday", "I visited the national library yesterday."),
            ("Last night / week", "We finalized the quarterly report last week."),
            ("Two hours ago", "The express train arrived twenty minutes ago."),
            ("In 2018", "Alexander Fleming discovered penicillin in 1928."),
            ("When I was young", "I lived in Kyoto when I was a child."),
            ("Just now", "The delivery truck arrived just now.")
        ],
        "useCases": [
            ("Finished Actions at Definite Past Times", "Definite Past", "Actions concluded at a stated or known point in past time.", "Alexander Fleming discovered penicillin in 1928.", "discovered"),
            ("Historical Narratives & Chronological Chains", "Narrative", "Sequential events moving forward step by step in a story.", "He unlocked the heavy vault, extracted the parchment, and fled.", "unlocked, extracted, fled"),
            ("Past Habits & Former Lifestyles", "Past Habit", "Routines or repeated activities that are no longer true today.", "During university, she studied five hours every evening.", "studied"),
            ("Past Enduring States & Conditions", "Past State", "Conditions that lasted over a bounded duration in the past.", "My grandfather lived in Edinburgh for forty-five years.", "lived"),
            ("Interrupted Continuous Background Scenes", "Interruption", "A sudden action breaking an ongoing background scene.", "I was reading quietly when the power cut abruptly struck.", "struck"),
            ("Specific Past Time Questions (When/What time)", "Time Inquiry", "Direct inquiry pinpointing when a finished event transpired.", "What time did the international delegates arrive yesterday?", "did ... arrive")
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
        "aff_rule": "Subject + will + base infinitive, or am/is/are + going to + base.",
        "neg_rule": "Subject + will not (won't) + base infinitive.",
        "q_rule": "Will + Subject + base verb...? / Are you going to...?",
        "signals": [
            ("Tomorrow", "The laboratory will publish the findings tomorrow."),
            ("Next week / year", "We are going to launch the beta release next week."),
            ("In the future", "Renewable solar grids will power urban cities."),
            ("I think / believe", "I think our project will win first prize."),
            ("Probably", "The storm will probably pass by midnight."),
            ("Soon", "The express passenger shuttle will arrive soon.")
        ],
        "useCases": [
            ("Instant Spontaneous Decisions", "Spontaneous", "Decisions made at the exact instant of speaking.", "The telephone is ringing; I will answer it immediately.", "will answer"),
            ("Promises, Pledges & Oaths", "Promise", "Solemn commitments made to others.", "I promise I will never reveal your trade secrets.", "will never reveal"),
            ("Predictions Backed by Opinion (Will)", "Prediction", "Beliefs, gut feelings, or subjective expectations.", "Scientists believe quantum computing will revolutionize cryptography.", "will revolutionize"),
            ("Predictions with Present Evidence (Going to)", "Evidence", "Predictions based on visible, sensory cues right now.", "Look at those dark storm clouds; it is going to rain heavily.", "is going to rain"),
            ("Pre-planned Intentions (Going to)", "Intention", "Actions decided prior to the moment of speaking.", "Next month, our research team is going to conduct trials in Berlin.", "is going to conduct"),
            ("Voluntary Offers & Refusals", "Voluntary", "Eager offers of assistance or firm refusals.", "I will carry that heavy equipment box upstairs for you.", "will carry")
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
        "aff_rule": "Subject + was (I/He/She/It) or were (You/We/They) + verb-ing.",
        "neg_rule": "Subject + was not (wasn't) / were not (weren't) + verb-ing.",
        "q_rule": "Was / Were + Subject + verb-ing...?",
        "signals": [
            ("While", "While I was studying in the library, rain began falling."),
            ("At 8:00 PM yesterday", "At 8:00 PM yesterday, we were preparing dinner."),
            ("All evening", "The engineers were testing the engine all evening."),
            ("As", "As she was crossing the courtyard, she saw the professor."),
            ("When (with Past Simple)", "I was working on my thesis when the phone rang."),
            ("During that time", "During that entire hour, they were arguing.")
        ],
        "useCases": [
            ("Actions in Progress at a Specific Past Moment", "Benchmark Moment", "An action active in the middle of happening at a precise time.", "At exactly 10:15 AM yesterday, the professor was lecturing on quantum mechanics.", "was lecturing"),
            ("Interrupted Ongoing Past Actions", "Interrupted Scene", "A continuous background scene cut short by a sudden Past Simple event.", "She was writing the final code module when the electricity failed.", "was writing"),
            ("Parallel Simultaneous Past Actions", "Parallel Action", "Two activities happening at the exact same continuous duration.", "While Arthur was reviewing the contracts, Elena was auditing the balance sheet.", "was reviewing, was auditing"),
            ("Setting Atmospheric Background in Stories", "Atmosphere", "Painting the scene, weather, and mood at the beginning of a story.", "The wind was howling through the pines and icy rain was battering the cabin.", "was howling, was battering"),
            ("Polite Indirect Requests or Inquiries", "Polite Request", "Softening an inquiry to show utmost courtesy.", "I was wondering if you might have ten minutes to discuss my thesis draft.", "was wondering"),
            ("Annoying Repeated Past Habits (with 'Always')", "Past Annoyance", "Past habits that caused mild irritation or emotional emphasis.", "Our former roommate was always leaving dirty coffee mugs on the dining table.", "was always leaving")
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
        "aff_rule": "Subject + am/is/are + verb-ing.",
        "neg_rule": "Subject + am not / isn't / aren't + verb-ing.",
        "q_rule": "Am / Is / Are + Subject + verb-ing...?",
        "signals": [
            ("Now / Right now", "The researchers are analyzing the chemical sample right now."),
            ("At the moment", "She is currently presenting the project at the moment."),
            ("These days / Currently", "Electric vehicles are gaining massive popularity these days."),
            ("Look! / Listen!", "Look! The falcon is nesting on the tower ledge."),
            ("Tonight / This week", "I am dining with the visiting international delegates tonight."),
            ("Constantly", "Technology is constantly transforming our workspace.")
        ],
        "useCases": [
            ("Actions Happening Right Now", "Immediate Now", "Activities taking place at the very second of speaking.", "Listen! The orchestra is performing Beethoven's Ninth Symphony.", "is performing"),
            ("Temporary Situations (Not Permanent)", "Temporary State", "Activities limited to a specific ongoing window of time.", "Marcus is staying with relatives in Berlin while his apartment is renovated.", "is staying"),
            ("Gradually Evolving Trends & Changing States", "Evolving Trend", "Processes of growth, economic shifts, or climatic changes.", "Global temperatures are rising, and renewable adoption is accelerating rapidly.", "are rising, is accelerating"),
            ("Definite Personal Future Arrangements", "Fixed Plan", "Events already scheduled with other people or dates.", "We are meeting the venture capital partners at 2:30 PM tomorrow.", "are meeting"),
            ("Irritating Recurring Habits (with 'Always')", "Present Annoyance", "Expressing mild exasperation with a recurring habit.", "He is always interrupting colleagues during boardroom presentations.", "is always interrupting"),
            ("Current Ongoing Projects in Progress", "Ongoing Project", "Tasks underway even if not active at the exact second.", "She is writing an exhaustive textbook on comparative historical syntax.", "is writing")
        ]
    },
    {
        "id": "futureContinuous",
        "num": 6,
        "title": "Future Continuous",
        "fullTitle": "6. Future Continuous Tense",
        "level": "B2 CEFR",
        "aspect": "Continuous",
        "time": "Future",
        "color": "#a855f7",
        "badge": "CHAPTER 6 • FUTURE IN PROGRESS",
        "formula": "Subject + WILL BE + Verb-ING",
        "summary": "Actions that will be actively in progress at a specific time in the future, or polite inquiries.",
        "aux": "will be / won't be",
        "aff_rule": "Subject + will be + verb-ing.",
        "neg_rule": "Subject + will not be (won't be) + verb-ing.",
        "q_rule": "Will + Subject + be + verb-ing...?",
        "signals": [
            ("This time tomorrow", "This time tomorrow, I will be flying over the Swiss Alps."),
            ("At 3:00 PM next Friday", "At 3:00 PM next Friday, our team will be testing the prototype."),
            ("In ten years' time", "In ten years' time, millions will be driving autonomous vehicles."),
            ("When you arrive", "Don't worry; I will be waiting at the airport gate when you arrive."),
            ("All day tomorrow", "The technicians will be upgrading the server infrastructure all day tomorrow."),
            ("During the conference", "She will be representing our university during the symposium.")
        ],
        "useCases": [
            ("Action in Progress at a Future Point", "Future Moment", "In the exact middle of an ongoing activity at that future hour.", "At 8:00 PM this evening, the scientists will be monitoring the satellite launch.", "will be monitoring"),
            ("Routine Events Expected in Normal Course", "Routine Future", "Things happening naturally as part of regular schedules.", "I will be seeing the department director tomorrow, so I can hand deliver your memo.", "will be seeing"),
            ("Polite Inquiries Regarding Someone's Plans", "Polite Inquiry", "Asking without pressuring or demanding a personal favor.", "Will you be passing by the postal office on your way home this afternoon?", "Will you be passing"),
            ("Simultaneous Parallel Future Actions", "Parallel Future", "Two actions continuing at the same time in future hours.", "While you are taking the licensing exam, I will be driving the moving van.", "will be driving"),
            ("Contrasting Future States with Present", "Contrast State", "Visualizing how our lives will look in future years.", "In twenty years, society will be relying almost entirely on nuclear fusion.", "will be relying"),
            ("Anticipated Future Background Atmosphere", "Future Scene", "Describing the atmosphere awaiting someone upon arrival.", "When you touch down in Rio, the carnivals will be celebrating in the avenues.", "will be celebrating")
        ]
    },
    {
        "id": "pastPerfect",
        "num": 7,
        "title": "Past Perfect Simple",
        "fullTitle": "7. Past Perfect Simple Tense",
        "level": "B2 CEFR",
        "aspect": "Perfect",
        "time": "Past",
        "color": "#3b82f6",
        "badge": "CHAPTER 7 • PAST BEFORE PAST",
        "formula": "Subject + HAD + Past Participle (V3)",
        "summary": "The past before the past: establishing chronological precedence between two completed past events.",
        "aux": "had / hadn't",
        "aff_rule": "Subject + had + V3 past participle.",
        "neg_rule": "Subject + had not (hadn't) + V3 past participle.",
        "q_rule": "Had + Subject + V3 past participle...?",
        "signals": [
            ("By the time", "By the time the ambulance arrived, the volunteers had applied first aid."),
            ("Before", "She had completed her dissertation before she accepted the tenure position."),
            ("After", "After they had signed the bilateral treaty, the ambassadors shook hands."),
            ("Already", "When we reached the auditorium, the lecture had already commenced."),
            ("Until that day", "Until that day, he had never piloted a twin-engine aircraft."),
            ("Hardly ... when", "Hardly had they stepped outside when torrential hail began falling.")
        ],
        "useCases": [
            ("Establishing Chronological Precedence", "Earlier Event", "Clarifying which of two past events concluded first.", "The train had already departed before we reached the central platform.", "had already departed"),
            ("Causes Behind Past States & Emotions", "Past Cause", "Explaining the background reason for a past emotion or state.", "Marianne was confident because she had rehearsed her keynote presentation ten times.", "had rehearsed"),
            ("Unfulfilled Past Intentions & Hopes", "Unfulfilled Hope", "Plans or desires that were not realized.", "We had hoped to purchase the vintage estate, but another buyer outbid us.", "had hoped"),
            ("Third Conditional Counterfactual Conditions", "Hypothetical Past", "Imagining alternative outcomes to past history.", "If the engineer had inspected the valve, the pressure leak would never have occurred.", "had inspected"),
            ("Reported Speech Shift from Past/Present", "Reported Speech", "Reporting earlier statements backshifted one tense.", "David told reporters that he had observed anomalous radar readings.", "had observed"),
            ("Time Precedence Benchmarks (By 1990 / By then)", "Deadline Precedence", "Events completed prior to a fixed past year or date.", "By 1995, the international team had successfully sequenced the target gene.", "had successfully sequenced")
        ]
    },
    {
        "id": "presentPerfect",
        "num": 8,
        "title": "Present Perfect Simple",
        "fullTitle": "8. Present Perfect Simple Tense",
        "level": "B1 CEFR",
        "aspect": "Perfect",
        "time": "Present",
        "color": "#f59e0b",
        "badge": "CHAPTER 8 • PAST-PRESENT BRIDGE",
        "formula": "Subject + HAVE / HAS + Past Participle (V3)",
        "summary": "The bridge between past and present: life experiences, recent actions with visible results, unfinished time.",
        "aux": "have / has / haven't / hasn't",
        "aff_rule": "Subject + have/has + V3 past participle.",
        "neg_rule": "Subject + have not (haven't) / has not (hasn't) + V3.",
        "q_rule": "Have / Has + Subject + V3...?",
        "signals": [
            ("Already", "The technical committee has already approved the new blueprint."),
            ("Yet", "Have you submitted the official scholarship application yet?"),
            ("Just", "The diplomatic delegation has just landed at the capital airstrip."),
            ("Ever / Never", "Have you ever traveled across the Scandinavian fjords?"),
            ("Since 2015", "She has directed the astrophysical research laboratory since 2015."),
            ("For five years", "They have collaborated on artificial neural network models for five years.")
        ],
        "useCases": [
            ("Life Experience (Indefinite Past)", "Life Experience", "Things you have done at least once in your life without stating when.", "I have visited the summit of Mount Fuji, but I have never seen the Northern Lights.", "have visited, have never seen"),
            ("Recent Actions with Visible Present Results", "Present Result", "Past actions whose physical consequences impact this very second.", "I have misplaced my laboratory keycard, so I cannot unlock this security door right now.", "have misplaced"),
            ("Unfinished Time Periods (Today, This Week)", "Unfinished Time", "Actions occurring within a time bracket that is still ongoing.", "Our software development team has pushed four release updates this morning.", "has pushed"),
            ("States Continuing from Past to Present (Since/For)", "Duration to Now", "Conditions that originated in the past and remain 100% active today.", "Dr. Jenkins has taught theoretical mathematics at Oxford for twenty-two years.", "has taught"),
            ("Fresh News Announcements (Just / Recently)", "Fresh News", "Broadcasting breaking developments before diving into details.", "NASA has just announced the discovery of organic water molecules on an exoplanet.", "has just announced"),
            ("Measuring Cumulative Repetitions to Date", "Repetition Metric", "Counting how many times a recurring event has taken place so far.", "She has rewritten her opening chapter five times in her pursuit of literary elegance.", "has rewritten")
        ]
    },
    {
        "id": "futurePerfect",
        "num": 9,
        "title": "Future Perfect Simple",
        "fullTitle": "9. Future Perfect Simple Tense",
        "level": "B2 CEFR",
        "aspect": "Perfect",
        "time": "Future",
        "color": "#f97316",
        "badge": "CHAPTER 9 • COMPLETED BY FUTURE",
        "formula": "Subject + WILL HAVE + Past Participle (V3)",
        "summary": "Emphasizes that an action will be completed and finished prior to a definite future milestone.",
        "aux": "will have / won't have",
        "aff_rule": "Subject + will have + V3 past participle.",
        "neg_rule": "Subject + won't have + V3 past participle.",
        "q_rule": "Will + Subject + have + V3...?",
        "signals": [
            ("By next month / year", "By next year, the architects will have completed the solar sky-tower."),
            ("By the time...", "By the time you return from overseas, we will have signed the deed."),
            ("Before (future point)", "The legal team will have resolved the dispute before the quarter ends."),
            ("In five years' time", "In five years' time, researchers will have synthesized clean fusion fuel."),
            ("By then", "Do not phone at noon; by then, the board will have adjourned."),
            ("By December", "Our aerospace division will have manufactured twelve satellite arrays by December.")
        ],
        "useCases": [
            ("Task Finished Prior to Future Benchmark", "Future Milestone", "Looking backward from a future deadline to see the task accomplished.", "By next Friday afternoon, our engineers will have deployed the security update.", "will have deployed"),
            ("Expressing Duration Measured into Future", "Future Duration", "Calculating how long a state will have existed by a milestone date.", "By next October, the senior professor will have taught at Harvard for thirty years.", "will have taught"),
            ("Predicting or Assuming Present Completion", "Deductive Assumption", "Projecting that something has likely finished right now.", "Do not knock on the auditorium; the keynote speaker will have commenced her speech by now.", "will have commenced"),
            ("Setting Milestone Conditions in Agreements", "Contract Milestone", "Specifying contractual benchmarks that must be fulfilled.", "The developer will have delivered Phase 1 before subsequent funds are disbursed.", "will have delivered"),
            ("Personal Life Goals & Career Deadlines", "Life Goals", "Articulating goals pinned against age or year benchmarks.", "By the time I celebrate my thirty-fifth birthday, I will have established my own firm.", "will have established"),
            ("Scientific & Technological Forecasting", "Tech Forecasting", "Estimating technological maturity against international targets.", "By 2035, green power companies will have eliminated fossil coal dependency across Europe.", "will have eliminated")
        ]
    },
    {
        "id": "pastPerfectCont",
        "num": 10,
        "title": "Past Perfect Continuous",
        "fullTitle": "10. Past Perfect Continuous Tense",
        "level": "B2+ CEFR",
        "aspect": "Perfect Continuous",
        "time": "Past",
        "color": "#e11d48",
        "badge": "CHAPTER 10 • DURATION IN PAST",
        "formula": "Subject + HAD BEEN + Verb-ING",
        "summary": "Focuses on how long an activity had been in progress before another past event, or visible past evidence.",
        "aux": "had been / hadn't been",
        "aff_rule": "Subject + had been + verb-ing.",
        "neg_rule": "Subject + had not been (hadn't been) + verb-ing.",
        "q_rule": "Had + Subject + been + verb-ing...?",
        "signals": [
            ("For two hours before...", "He had been running for two hours before he felt dehydrated."),
            ("Since dawn when...", "The rescue divers had been searching since dawn when they located the boat."),
            ("How long had you been...?", "How long had you been working on the algorithm when the patent was granted?"),
            ("All day until", "The forge had been burning all day until the blacksmith dampened the embers."),
            ("When the bell rang", "The students had been debating heatedly for forty minutes when the bell rang."),
            ("Before the accident", "The truck driver had been driving without rest for sixteen hours before the accident.")
        ],
        "useCases": [
            ("Ongoing Past Duration Before Another Event", "Past Duration", "Emphasizing the length of effort prior to a second past event.", "They had been trekking through the Himalayan blizzard for seven hours before reaching the shelter.", "had been trekking"),
            ("Visible Cause of a Past Condition", "Past Physical Cause", "Explaining past physical states (exhaustion, wetness, stains).", "The runway was slick with standing water because it had been raining torrentially all morning.", "had been raining"),
            ("Continuous Activity Interrupted in Past", "Interrupted Progress", "An ongoing process cut short by a sudden incident.", "The programmers had been testing the release candidate when the central server overheated.", "had been testing"),
            ("Repeated Frustrating Actions Before Past Cessation", "Repeated Past Action", "Actions repeated relentlessly leading up to a past climax.", "The whistleblower had been warning authorities for months before the collapse occurred.", "had been warning"),
            ("Reported Speech of Present Perfect Continuous", "Reported Speech", "Backshifting present continuous or present perfect continuous statements.", "The lead technician reported that the cooling pumps had been vibrating abnormally.", "had been vibrating"),
            ("Emotional Justification for Past Decisions", "Decision Motive", "Explaining why someone gave up or took action in the past.", "She resigned her partnership because she had been working eighty-hour weeks without recognition.", "had been working")
        ]
    },
    {
        "id": "presentPerfectCont",
        "num": 11,
        "title": "Present Perfect Continuous",
        "fullTitle": "11. Present Perfect Continuous Tense",
        "level": "B1+ CEFR",
        "aspect": "Perfect Continuous",
        "time": "Present",
        "color": "#06b6d4",
        "badge": "CHAPTER 11 • DURATION TO NOW",
        "formula": "Subject + HAVE / HAS + BEEN + Verb-ING",
        "summary": "Emphasizes the duration, ongoing process, or immediate sensory evidence of recent continuous activity.",
        "aux": "have been / has been / haven't been",
        "aff_rule": "Subject + have/has been + verb-ing.",
        "neg_rule": "Subject + have/has not been + verb-ing.",
        "q_rule": "Have / Has + Subject + been + verb-ing...?",
        "signals": [
            ("How long have you been...?", "How long have you been studying quantum physics?"),
            ("For six months", "She has been developing this compiler for six months."),
            ("Since 7:00 AM", "The crew has been clearing landslide debris since 7:00 AM."),
            ("All day / morning", "It has been raining steadily all morning."),
            ("Lately / Recently", "I haven't been sleeping soundly lately due to deadline stress."),
            ("These past two weeks", "Our designers have been testing usability feedback these past two weeks.")
        ],
        "useCases": [
            ("Continuous Duration from Past Extending into Now", "Unfinished Process", "Emphasizing continuous ongoing effort that is still alive right now.", "Dr. Al-Mansoor has been researching malaria vaccines for more than fifteen years.", "has been researching"),
            ("Immediate Physical Sensory Evidence (Just Finished)", "Sensory Evidence", "Action just stopped seconds ago, leaving clear visible traces.", "Your clothes are covered in grease! Have you been repairing the lawnmower engine?", "Have you been repairing"),
            ("Temporary Ongoing Habits in Recent Weeks", "Temporary Habit", "Recurring activities that represent a recent shift in lifestyle.", "I have been cycling to work every morning this month to improve cardiovascular health.", "have been cycling"),
            ("Inquiring About Cumulative Duration (How Long)", "Duration Query", "The standard English query pattern for ongoing durations.", "How long have the trade delegations been negotiating behind closed doors?", "have ... been negotiating"),
            ("Contrasting Ongoing Process with Completed Result", "Process Focus", "Focusing on the activity rather than the final tally.", "I have been writing my historical novel today (contrast with: I have written two chapters).", "have been writing"),
            ("Expressing Exasperation with Ongoing Neglect", "Emotional Exasperation", "Highlighting repeated ongoing issues leading into the present.", "The landlord has been promising to repair our heating unit for three consecutive weeks.", "has been promising")
        ]
    },
    {
        "id": "futurePerfectCont",
        "num": 12,
        "title": "Future Perfect Continuous",
        "fullTitle": "12. Future Perfect Continuous Tense",
        "level": "C1 CEFR",
        "aspect": "Perfect Continuous",
        "time": "Future",
        "color": "#0284c7",
        "badge": "CHAPTER 12 • FUTURE DURATION BENCHMARK",
        "formula": "Subject + WILL HAVE BEEN + Verb-ING",
        "summary": "Emphasizes how long an ongoing action will have been happening when a future milestone is reached.",
        "aux": "will have been / won't have been",
        "aff_rule": "Subject + will have been + verb-ing.",
        "neg_rule": "Subject + won't have been + verb-ing.",
        "q_rule": "Will + Subject + have been + verb-ing...?",
        "signals": [
            ("By next year... for 10 years", "By next year, I will have been living in London for a decade."),
            ("By the time you graduate... for...", "By the time she graduates, she will have been studying medicine for seven years."),
            ("When I turn 50", "When the director turns fifty, he will have been guiding this institution for twenty years."),
            ("By midnight... for 12 hours", "By midnight, the endurance athlete will have been cycling for twelve uninterrupted hours."),
            ("By next June", "By next June, our research consortium will have been collaborating for five full years."),
            ("In another two months", "In another two months, they will have been constructing the bypass for two full seasons.")
        ],
        "useCases": [
            ("Measuring Ongoing Duration to a Future Milestone", "Future Benchmark", "Calculating ongoing cumulative tenure against a future date.", "By next September, Professor Vance will have been teaching linguistics for forty years.", "will have been teaching"),
            ("Cause of a Projected Future Condition", "Future Cause", "Anticipating future physical states or fatigue.", "When the drivers arrive in Dakar, they will be exhausted because they will have been driving across sand dunes for five days.", "will have been driving"),
            ("Evaluating Project Tenure & Milestones", "Project Tenure", "Marking project persistence milestones in formal reporting.", "By next quarter, the observatory will have been gathering deep space radio data for three continuous years.", "will have been gathering"),
            ("Inquiring About Cumulative Future Experience", "Tenure Inquiry", "Asking how long someone will have accumulated time by a future mark.", "Will you have been working at the embassy long enough by June to qualify for diplomatic immunity?", "Will you have been working"),
            ("Contractual Tenure Milestones for Benefits", "Legal Milestone", "Determining eligibility for vesting, pensions, or sabbatical.", "When this fiscal year concludes, the staff will have been contributing to the fund for twenty years.", "will have been contributing"),
            ("Anticipating Marathon Endurance & Stamina", "Endurance Measure", "Emphasizing extreme ongoing persistence across difficult tasks.", "By hour thirty, the medical emergency crew will have been treating triage patients without sleep.", "will have been treating")
        ]
    },
    {
        "id": "conditionals",
        "num": 13,
        "title": "Conditionals System",
        "fullTitle": "13. Complete Conditionals System",
        "level": "B1 – C1 CEFR",
        "aspect": "Capstone",
        "time": "Multi-Time",
        "color": "#ef4444",
        "badge": "CAPSTONE • HYPOTHETICAL WORLDS",
        "formula": "If + Condition Clause, Result Clause (0, 1st, 2nd, 3rd, Mixed)",
        "summary": "Zero, First, Second, Third, and Mixed Conditionals: navigating facts, possibilities, and counterfactuals.",
        "aux": "if / unless / would / will / had",
        "aff_rule": "Zero: If+Pres, Pres | 1st: If+Pres, will+V | 2nd: If+Past, would+V | 3rd: If+Had V3, would have V3",
        "neg_rule": "Unless (If not) + affirmative verb | Result: won't / wouldn't / wouldn't have",
        "q_rule": "What would you do if...? / What will happen if...?",
        "signals": [
            ("If / When", "If you heat ice to 0 degrees Celsius, it melts into water."),
            ("Unless", "Unless we reduce carbon emissions drastically, climate impacts will worsen."),
            ("Provided that / As long as", "You may borrow the audio equipment provided that you return it undamaged."),
            ("Imagine if / Suppose", "Imagine if you discovered a cure for Alzheimer's disease tomorrow."),
            ("In case", "Take this waterproof jacket in case sudden thunderstorms develop."),
            ("If I were you", "If I were in your position, I would accept the international scholarship.")
        ],
        "useCases": [
            ("Zero Conditional: Universal Scientific Truths", "Scientific Law", "100% causal certainty in physics, chemistry, and rules.", "If water reaches 100 degrees Celsius under standard atmospheric pressure, it boils.", "reaches, boils"),
            ("First Conditional: Real Future Possibilities", "Real Future", "A very realistic condition and its probable future result.", "If our team secures the federal research grant, we will hire four postdoctoral researchers.", "secures, will hire"),
            ("Second Conditional: Hypothetical Present / Future", "Unreal Present", "Imaginary, unlikely, or counterfactual scenarios right now.", "If I owned an aerospace startup, I would fund deep space orbital telescopes.", "owned, would fund"),
            ("Third Conditional: Impossible Past Regrets", "Past Counterfactual", "Looking back at history and imagining a different outcome.", "If the captain had steered south, the ship would have avoided the ice shelf entirely.", "had steered, would have avoided"),
            ("Mixed Conditional (Past Cause → Present Result)", "Mixed Timeline", "Past decision whose consequence is alive right now.", "If I had mastered Spanish during my university years, I would be leading our Madrid office today.", "had mastered, would be leading"),
            ("Polite Advice & Diplomatic Negotiation", "Diplomatic Advice", "Using conditional framing to offer gentle guidance.", "If you were to reconsider our compromise, both delegations would sign the accord.", "were to reconsider, would sign")
        ]
    },
    {
        "id": "passiveVoice",
        "num": 14,
        "title": "Passive Voice Architecture",
        "fullTitle": "14. Passive Voice Architecture",
        "level": "B1 – C2 CEFR",
        "aspect": "Capstone",
        "time": "Discourse",
        "color": "#64748b",
        "badge": "CAPSTONE • DISCOURSE MASTERY",
        "formula": "Object + Conjugated BE + Past Participle (V3) (+ by Agent)",
        "summary": "Agentless formal discourse, scientific reporting, and modals of deduction/regret across all English tenses.",
        "aux": "be (is/are/was/were/been/being) + V3",
        "aff_rule": "Object + appropriate conjugated form of BE + V3 past participle.",
        "neg_rule": "Object + BE + NOT + V3 past participle.",
        "q_rule": "BE + Object + V3 past participle...?",
        "signals": [
            ("By (agent)", "The Mona Lisa was painted by Leonardo da Vinci in the 16th century."),
            ("It is widely believed that", "It is widely believed that ancient civilizations navigated by stellar constellations."),
            ("Must have been", "The medieval parchment must have been preserved in an airtight ceramic jar."),
            ("Are being developed", "Next-generation quantum computers are currently being engineered in Tokyo."),
            ("Have been inspected", "All commercial jet turbines have been thoroughly inspected by aviation safety regulators."),
            ("Will be announced", "The Nobel Laureates in Physics will be officially announced on Thursday morning.")
        ],
        "useCases": [
            ("Focus on Action, Outcome or Receiver", "Recipient Focus", "When the receiver of the action is far more important than who did it.", "The ancient sandstone amphitheater was constructed over two thousand years ago.", "was constructed"),
            ("Scientific, Academic & Technical Reporting", "Scientific Objectivity", "Maintaining impersonal, objective distance in laboratory reports.", "The chemical solution was heated to 85°C and filtered through porous quartz membranes.", "was heated, filtered"),
            ("Unknown, Obvious or Unimportant Agents", "Agentless", "When the agent is unknown, redundant, or deliberately omitted.", "My wallet was stolen on the crowded subway train during rush hour.", "was stolen"),
            ("Diplomatic Evasion of Direct Blame", "Diplomatic Tact", "Avoiding pointing fingers or assigning personal fault.", "Mistakes were made during the initial budget forecasting, leading to deficits.", "were made"),
            ("Formal Rules, Laws & Public Notices", "Public Regulation", "Official proclamations and legal instructions.", "Safety helmets must be worn at all times by personnel within the construction zone.", "must be worn"),
            ("Passives Across Continuous & Perfect Aspects", "Complex Passive", "Handling passive voice in complex English aspects.", "The bridge is being repaired right now, and two tunnels have been closed for renovations.", "is being repaired, have been closed")
        ]
    }
]

print(f"Loaded specifications for {len(TENSES_SPECS)} tenses. Constructing complete database...")
