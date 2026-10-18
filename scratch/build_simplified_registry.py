# -*- coding: utf-8 -*-
"""
Generates the complete tensesRegistry.js with SUPER SIMPLE, FRIENDLY,
and CLEAR pedagogical explanations for all English tenses, while providing
all 6 detailed use cases, realistic examples, formulas, common pitfalls, and quizzes.
"""

import json
import os

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'tensesRegistry.js'))

def build_data():
    tenses = {}

    # Helper to build consistent structure
    def make_tense(
        id_str, chapter_num, title, full_title, level, aspect, time, color, badge, formula, summary,
        def_simple, core_simple, timeline_simple,
        signal_words, pillars,
        use_cases_list,
        aff_formula, neg_formula, q_formula,
        aff_ex, neg_ex, q_ex,
        to_be_aff, to_be_neg, to_be_q,
        spelling_rules_list, phonetic_tips,
        adverbs_list,
        adverb_rules,
        traps_list,
        matrix_rows,
        quiz_list,
        fill_blanks_list,
        scramblers_list,
        error_detective_list,
        exam_list
    ):
        return {
            "meta": {
                "id": id_str,
                "chapterNumber": chapter_num,
                "title": title,
                "fullTitle": full_title,
                "level": level,
                "aspect": aspect,
                "time": time,
                "color": color,
                "badge": badge,
                "formula": formula,
                "summary": summary
            },
            "overview": {
                "definition": def_simple,
                "coreConcept": core_simple,
                "timelineInsight": timeline_simple,
                "signalWords": signal_words,
                "pillars": pillars
            },
            "useCases": use_cases_list,
            "grammarStructures": {
                "affirmative": {
                    "formula": aff_formula,
                    "explanation": f"How to make positive sentences in {title}.",
                    "table": [
                        {"subject": "I / You / We / They", "auxiliary": "—", "verb": aff_ex[0], "complement": aff_ex[1]},
                        {"subject": "He / She / It", "auxiliary": "—", "verb": aff_ex[2], "complement": aff_ex[3]}
                    ],
                    "examples": [
                        {"en": f"I {aff_ex[0]} {aff_ex[1]}.", "context": "First person positive"},
                        {"en": f"She {aff_ex[2]} {aff_ex[3]}.", "context": "Third person positive"}
                    ]
                },
                "negative": {
                    "formula": neg_formula,
                    "explanation": f"How to say NO or make negative sentences in {title}.",
                    "table": [
                        {"subject": "I / You / We / They", "auxiliary": neg_ex[0], "verb": neg_ex[1], "complement": neg_ex[2]},
                        {"subject": "He / She / It", "auxiliary": neg_ex[3], "verb": neg_ex[4], "complement": neg_ex[5]}
                    ],
                    "examples": [
                        {"en": f"I {neg_ex[0]} {neg_ex[1]} {neg_ex[2]}.", "context": "First person negative"},
                        {"en": f"She {neg_ex[3]} {neg_ex[4]} {neg_ex[5]}.", "context": "Third person negative"}
                    ]
                },
                "interrogative": {
                    "formula": q_formula,
                    "explanation": f"How to ask questions in {title}.",
                    "types": [
                        {
                            "type": "Yes/No Question",
                            "formula": q_formula.split("/")[0].strip() if "/" in q_formula else q_formula,
                            "examples": [
                                {"q": q_ex[0], "a": "Yes, definitely. / No, not yet."},
                                {"q": q_ex[1], "a": "Yes, she did. / No, she didn't."}
                            ]
                        },
                        {
                            "type": "Wh- Question",
                            "formula": "Question Word (What / Where / Why) + " + (q_formula.split("/")[0].strip() if "/" in q_formula else q_formula),
                            "examples": [
                                {"q": q_ex[2], "a": "At 8:00 AM."},
                                {"q": q_ex[3], "a": "Because we needed to."}
                            ]
                        }
                    ],
                    "examples": [
                        {"en": q_ex[0], "context": "Yes/No question"},
                        {"en": q_ex[2], "context": "Wh- information question"}
                    ]
                },
                "verbToBe": {
                    "formula": f"Subject + {to_be_aff[0]}",
                    "explanation": f"Using the verb 'TO BE' in {title}.",
                    "table": [
                        {"subject": "I", "form": to_be_aff[1], "negative": to_be_neg[0], "example": to_be_aff[2]},
                        {"subject": "He / She / It", "form": to_be_aff[3], "negative": to_be_neg[1], "example": to_be_aff[4]},
                        {"subject": "You / We / They", "form": to_be_aff[5], "negative": to_be_neg[2], "example": to_be_aff[6]}
                    ],
                    "examples": [
                        {"en": to_be_aff[2], "context": "Affirmative with 'to be'"},
                        {"en": to_be_q[0], "context": "Question with 'to be'"}
                    ]
                },
                "verbHave": {
                    "formula": f"Subject + have / has",
                    "explanation": f"Using 'have' in {title}.",
                    "table": [
                        {"subject": "I / You / We / They", "form": "have", "negative": "don't have / hadn't", "example": "I had a great time."},
                        {"subject": "He / She / It", "form": "has", "negative": "doesn't have / hadn't", "example": "She had a busy day."}
                    ],
                    "examples": [
                        {"en": "We had plenty of time.", "context": "Possession or experience in the past"},
                        {"en": "Did you have lunch?", "context": "Question with have"}
                    ]
                }
            },
            "spellingRules": {
                "title": f"Spelling & Pronunciation Rules ({title})",
                "subtitle": f"Simple rules to make sure your words are spelled and spoken correctly in {title}.",
                "rules": spelling_rules_list,
                "phoneticTips": phonetic_tips
            },
            "adverbsOfFrequency": adverbs_list,
            "adverbPlacementRules": adverb_rules,
            "commonTraps": traps_list,
            "resumeSummary": {
                "title": f"Summary & Quick Cheat-Sheet ({title})",
                "subtitle": f"Everything you need to remember about {title} on a single page.",
                "formulaMatrix": matrix_rows,
                "spellingPills": [
                    {"ending": "Rule 1", "change": "Regular Verbs", "example": "Just follow the main formula pattern."},
                    {"ending": "Rule 2", "change": "Irregular Verbs", "example": "Check the irregular list (like go → went → gone)."},
                    {"ending": "Rule 3", "change": "Silent -e", "example": "Drop the -e before adding -ing (make → making)."},
                    {"ending": "Rule 4", "change": "Short Vowel + Consonant", "example": "Double the letter (stop → stopped / stopping)."}
                ],
                "adverbGoldenFormula": f"Put adverbs BEFORE normal action verbs, but AFTER the verb 'to be' and helping verbs."
            },
            "exercises": {
                "quiz": quiz_list,
                "fillBlanks": fill_blanks_list,
                "sentenceScrambler": scramblers_list,
                "errorDetective": error_detective_list,
                "adverbMastery": [
                    {
                        "id": 1,
                        "adverb": "always",
                        "targetSentence": "We always double check our work.",
                        "slots": [
                            {"id": 0, "isSlot": True},
                            {"text": "We", "isSlot": False},
                            {"id": 1, "isSlot": True},
                            {"text": "double check", "isSlot": False},
                            {"id": 2, "isSlot": True},
                            {"text": "our work.", "isSlot": False}
                        ],
                        "correctSlot": 1,
                        "explanation": "Put the adverb directly BEFORE the main action verb."
                    },
                    {
                        "id": 2,
                        "adverb": "often",
                        "targetSentence": "They are often on time.",
                        "slots": [
                            {"id": 0, "isSlot": True},
                            {"text": "They", "isSlot": False},
                            {"id": 1, "isSlot": True},
                            {"text": "are", "isSlot": False},
                            {"id": 2, "isSlot": True},
                            {"text": "on time.", "isSlot": False}
                        ],
                        "correctSlot": 2,
                        "explanation": "Put the adverb directly AFTER the verb 'to be' (are / was / is)."
                    }
                ],
                "masteryExam": exam_list
            }
        }

    return make_tense

print("Builder helper defined.")
