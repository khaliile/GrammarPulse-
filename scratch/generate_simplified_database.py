# -*- coding: utf-8 -*-
"""
Generates the complete tensesRegistry.js with SUPER SIMPLE, FRIENDLY,
and CLEAR pedagogical explanations for all English tenses, while providing
all 6 detailed use cases, realistic examples, formulas, common pitfalls, and quizzes.
"""

import json
import os

target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'tensesRegistry.js'))

def build_all_tenses():
    tenses = {}

    # Helper function to generate clean tense objects
    def create_tense(
        id_str, chapter_num, title, full_title, level, aspect, time, color, badge, formula, summary,
        definition, core_concept, timeline_insight,
        signal_words, pillars, use_cases,
        aff_formula, neg_formula, q_formula,
        aff_ex, neg_ex, q_ex,
        to_be_aff, to_be_neg, to_be_q,
        spelling_rules, phonetic_tips,
        adverbs, adverb_rules, traps,
        matrix_rows, quiz, fill_blanks, scramblers, error_detectives, exam
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
                "definition": definition,
                "coreConcept": core_concept,
                "timelineInsight": timeline_insight,
                "signalWords": signal_words,
                "pillars": pillars
            },
            "useCases": use_cases,
            "grammarStructures": {
                "affirmative": {
                    "formula": aff_formula,
                    "explanation": f"How to make positive statements in {title}.",
                    "table": [
                        {"subject": "I / You / We / They", "auxiliary": "—", "verb": aff_ex[0], "complement": aff_ex[1]},
                        {"subject": "He / She / It", "auxiliary": "—", "verb": aff_ex[2], "complement": aff_ex[3]}
                    ],
                    "examples": [
                        {"en": f"I {aff_ex[0]} {aff_ex[1]}.", "context": "Positive statement with I"},
                        {"en": f"She {aff_ex[2]} {aff_ex[3]}.", "context": "Positive statement with She"}
                    ]
                },
                "negative": {
                    "formula": neg_formula,
                    "explanation": f"How to make negative statements in {title}.",
                    "table": [
                        {"subject": "I / You / We / They", "auxiliary": neg_ex[0], "verb": neg_ex[1], "complement": neg_ex[2]},
                        {"subject": "He / She / It", "auxiliary": neg_ex[3], "verb": neg_ex[4], "complement": neg_ex[5]}
                    ],
                    "examples": [
                        {"en": f"I {neg_ex[0]} {neg_ex[1]} {neg_ex[2]}.", "context": "Negative statement with I"},
                        {"en": f"He {neg_ex[3]} {neg_ex[4]} {neg_ex[5]}.", "context": "Negative statement with He"}
                    ]
                },
                "interrogative": {
                    "formula": q_formula,
                    "explanation": f"How to ask questions in {title}.",
                    "types": [
                        {
                            "type": "Yes/No Question",
                            "formula": q_formula,
                            "examples": [
                                {"q": q_ex[0], "a": "Yes, I did. / No, I didn't."},
                                {"q": q_ex[1], "a": "Yes, she was. / No, she wasn't."}
                            ]
                        },
                        {
                            "type": "Wh- Question",
                            "formula": f"Question Word + {q_formula}",
                            "examples": [
                                {"q": q_ex[2], "a": "At 8:00 AM yesterday."},
                                {"q": q_ex[3], "a": "Because we had an early meeting."}
                            ]
                        }
                    ],
                    "examples": [
                        {"en": q_ex[0], "context": "Yes/No question"},
                        {"en": q_ex[2], "context": "Wh- question"}
                    ]
                },
                "verbToBe": {
                    "formula": f"Subject + {to_be_aff[0]}",
                    "explanation": f"How the verb 'TO BE' works in {title}.",
                    "table": [
                        {"subject": "I", "form": to_be_aff[1], "negative": to_be_neg[0], "example": to_be_aff[2]},
                        {"subject": "He / She / It", "form": to_be_aff[3], "negative": to_be_neg[1], "example": to_be_aff[4]},
                        {"subject": "You / We / They", "form": to_be_aff[5], "negative": to_be_neg[2], "example": to_be_aff[6]}
                    ],
                    "examples": [
                        {"en": to_be_aff[2], "context": "Positive with 'be'"},
                        {"en": to_be_q[0], "context": "Question with 'be'"}
                    ]
                },
                "verbHave": {
                    "formula": "Subject + have / had",
                    "explanation": f"Using 'have' in {title}.",
                    "table": [
                        {"subject": "I / You / We / They", "form": "have / had", "negative": "didn't have", "example": "We had a wonderful dinner."},
                        {"subject": "He / She / It", "form": "has / had", "negative": "didn't have", "example": "She had a busy day yesterday."}
                    ],
                    "examples": [
                        {"en": "I had a great time yesterday.", "context": "Simple past experience with have"},
                        {"en": "Did you have breakfast?", "context": "Simple past question with have"}
                    ]
                }
            },
            "spellingRules": {
                "title": f"Spelling & Pronunciation Rules ({title})",
                "subtitle": f"Simple rules to help you spell and pronounce verbs in {title}.",
                "rules": spelling_rules,
                "phoneticTips": phonetic_tips
            },
            "adverbsOfFrequency": adverbs,
            "adverbPlacementRules": adverb_rules,
            "commonTraps": traps,
            "resumeSummary": {
                "title": f"Executive Summary & Cheat-Sheet ({title})",
                "subtitle": f"The key rules of {title} simplified on a single easy-to-read page.",
                "formulaMatrix": matrix_rows,
                "spellingPills": [
                    {"ending": "Rule 1", "change": "Regular Verbs", "example": "Follow the standard pattern (like +ed or +ing)."},
                    {"ending": "Rule 2", "change": "Irregular Verbs", "example": "Learn the special irregular forms (like go → went → gone)."},
                    {"ending": "Rule 3", "change": "Silent -e", "example": "Drop the -e before adding -ing (make → making)."},
                    {"ending": "Rule 4", "change": "Short Vowel + Consonant", "example": "Double the last letter (stop → stopped)."}
                ],
                "adverbGoldenFormula": "Put the adverb BEFORE normal action verbs, and AFTER the verb 'to be' (is / was / are)."
            },
            "exercises": {
                "quiz": quiz,
                "fillBlanks": fill_blanks,
                "sentenceScrambler": scramblers,
                "errorDetective": error_detectives,
                "adverbMastery": [
                    {
                        "id": 1,
                        "adverb": "always",
                        "targetSentence": f"We always practice {title}.",
                        "slots": [
                            {"id": 0, "isSlot": True},
                            {"text": "We", "isSlot": False},
                            {"id": 1, "isSlot": True},
                            {"text": "practice", "isSlot": False},
                            {"id": 2, "isSlot": True},
                            {"text": f"English {title}.", "isSlot": False}
                        ],
                        "correctSlot": 1,
                        "explanation": "Put the adverb directly BEFORE the action verb (practice)."
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
                        "explanation": "Put the adverb directly AFTER the verb 'to be' (are)."
                    }
                ],
                "masteryExam": exam
            }
        }

    return create_tense

print("Base builder structure established.")
