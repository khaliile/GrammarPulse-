# -*- coding: utf-8 -*-
import json
import os

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'tensesRegistry.js'))

tenses_metadata = [
    {
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
        "summary": "Finished actions, historical narratives, completed time periods, and past states."
    },
    {
        "id": "presentSimple",
        "chapterNumber": 2,
        "title": "Present Simple",
        "fullTitle": "2. Present Simple Tense",
        "level": "A1 – B1 CEFR",
        "aspect": "Simple",
        "time": "Present",
        "color": "#10b981",
        "badge": "CHAPTER 2 • TIMELESS REALITY",
        "formula": "Subject + Verb(s) | doesn't + base | Does...?",
        "summary": "Timeless facts, daily habits, universal laws, permanent states, and timetables."
    },
    {
        "id": "futureSimple",
        "chapterNumber": 3,
        "title": "Future Simple",
        "fullTitle": "3. Future Simple Tense",
        "level": "A2 – B1 CEFR",
        "aspect": "Simple",
        "time": "Future",
        "color": "#14b8a6",
        "badge": "CHAPTER 3 • FUTURE REALITY",
        "formula": "Subject + WILL + Base | won't + base | Will...?",
        "summary": "Spontaneous decisions, promises, voluntary offers, predictions and intentions."
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
        "badge": "CHAPTER 4 • PAST IN PROGRESS",
        "formula": "Subject + WAS / WERE + Verb-ING",
        "summary": "Actions in progress at a specific past moment, parallel background activities, interrupted scenes."
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
        "badge": "CHAPTER 5 • IN PROGRESS NOW",
        "formula": "Subject + AM / IS / ARE + Verb-ING",
        "summary": "Actions happening right now, temporary situations, evolving trends, and planned arrangements."
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
        "badge": "CHAPTER 6 • FUTURE IN PROGRESS",
        "formula": "Subject + WILL BE + Verb-ING",
        "summary": "Actions that will be actively in progress at a specific future moment or polite inquiries."
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
        "badge": "CHAPTER 7 • THE PAST BEFORE THE PAST",
        "formula": "Subject + HAD + Past Participle (V3)",
        "summary": "Actions completed before another past event, establishing clear chronological precedence."
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
        "badge": "CHAPTER 8 • PAST WITH PRESENT RESULT",
        "formula": "Subject + HAVE / HAS + Past Participle (V3)",
        "summary": "Life experiences, recent news, unfinished time periods, and past actions with visible results today."
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
        "badge": "CHAPTER 9 • COMPLETED BEFORE FUTURE DEADLINE",
        "formula": "Subject + WILL HAVE + Past Participle (V3)",
        "summary": "Actions that will be completely finished before a specific deadline or milestone in the future."
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
        "badge": "CHAPTER 10 • DURATION LEADING TO PAST EVENT",
        "formula": "Subject + HAD BEEN + Verb-ING",
        "summary": "Continuous actions that were happening for a duration leading right up to another past event."
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
        "badge": "CHAPTER 11 • CONTINUOUS UP TO NOW",
        "formula": "Subject + HAVE / HAS + BEEN + Verb-ING",
        "summary": "Actions that started in the past and are still going on now, or just finished with visible evidence."
    },
    {
        "id": "futurePerfectCont",
        "chapterNumber": 12,
        "title": "Future Perfect Continuous",
        "fullTitle": "12. Future Perfect Continuous Tense",
        "level": "C1 CEFR",
        "aspect": "Perfect Continuous",
        "time": "Future",
        "color": "#0284c7",
        "badge": "CHAPTER 12 • FUTURE DURATION MILESTONE",
        "formula": "Subject + WILL HAVE BEEN + Verb-ING",
        "summary": "Projecting ongoing actions into the future to measure how long they will have lasted by a date."
    },
    {
        "id": "conditionals",
        "chapterNumber": 13,
        "title": "Conditionals System",
        "fullTitle": "13. Conditionals System (0, 1st, 2nd, 3rd, Mixed)",
        "level": "B1 – C1 CEFR",
        "aspect": "Capstone",
        "time": "Multi-Time",
        "color": "#ef4444",
        "badge": "CAPSTONE 1 • CAUSE, EFFECT & HYPOTHETICALS",
        "formula": "If + condition clause, result clause",
        "summary": "Mastering real possibilities, scientific facts, imaginary dreams, and past regrets with If."
    },
    {
        "id": "passiveVoice",
        "chapterNumber": 14,
        "title": "Passive Voice Architecture",
        "fullTitle": "14. Passive Voice Architecture",
        "level": "B1 – C2 CEFR",
        "aspect": "Capstone",
        "time": "Multi-Time",
        "color": "#64748b",
        "badge": "CAPSTONE 2 • FOCUS ON ACTION & OBJECT",
        "formula": "Object + BE (conjugated) + Past Participle (V3) (+ by Agent)",
        "summary": "Focusing on what was done or who received the action, rather than who did it."
    }
]

print("Metadata defined successfully.")
