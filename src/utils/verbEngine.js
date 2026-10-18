// Dynamic English Verb Conjugator & Spelling Rule Analyzer

const IRREGULAR_VERBS = {
  be: {
    base: 'be',
    i: 'am',
    youWeThey: 'are',
    heSheIt: 'is',
    negativeHeSheIt: "isn't",
    negativeYouWeThey: "aren't",
    negativeI: 'am not',
    ruleName: 'Highly Irregular Copular Verb',
    ruleDetail: "The verb 'to be' has 3 distinct present tense forms (am, is, are) and never uses 'do/does'.",
    pronunciation: "/ɪz/ for 'is'",
    sampleSentence: "is very punctual for every meeting.",
  },
  have: {
    base: 'have',
    i: 'have',
    youWeThey: 'have',
    heSheIt: 'has',
    negativeHeSheIt: "doesn't have",
    negativeYouWeThey: "don't have",
    negativeI: "don't have",
    ruleName: 'Irregular 3rd Person Form',
    ruleDetail: "Contracted from Old English 'haveth' to 'has' for ease of articulation.",
    pronunciation: "/hæz/ with voiced /z/",
    sampleSentence: "has a brilliant sense of design.",
  },
  do: {
    base: 'do',
    i: 'do',
    youWeThey: 'do',
    heSheIt: 'does',
    negativeHeSheIt: "doesn't do",
    negativeYouWeThey: "don't do",
    negativeI: "don't do",
    ruleName: 'Vowel -o Ending (+es with vowel shift)',
    ruleDetail: "Adds -es and changes vowel pronunciation from /duː/ to /dʌz/.",
    pronunciation: "/dʌz/ with short /ʌ/",
    sampleSentence: "does morning yoga every day.",
  },
  go: {
    base: 'go',
    i: 'go',
    youWeThey: 'go',
    heSheIt: 'goes',
    negativeHeSheIt: "doesn't go",
    negativeYouWeThey: "don't go",
    negativeI: "don't go",
    ruleName: 'Vowel -o Ending (+es)',
    ruleDetail: "Verbs ending in -o add -es.",
    pronunciation: "/ɡəʊz/ with voiced /z/",
    sampleSentence: "goes to the studio by bicycle.",
  },
};

export function analyzeVerb(inputVerb) {
  const cleanVerb = (inputVerb || 'play').trim().toLowerCase();
  
  if (IRREGULAR_VERBS[cleanVerb]) {
    const data = IRREGULAR_VERBS[cleanVerb];
    return {
      base: cleanVerb,
      thirdPerson: data.heSheIt,
      ruleName: data.ruleName,
      ruleCategory: 'irregular',
      explanation: data.ruleDetail,
      pronunciation: data.pronunciation,
      ruleTag: 'Special / Irregular',
      addedSuffix: cleanVerb === 'have' ? 's (irregular has)' : 'es',
      highlightStart: cleanVerb.length,
      sampleHe: `He ${data.heSheIt} ${data.sampleSentence}`,
      sampleQuestion: cleanVerb === 'be' ? `Is he ${data.sampleSentence}?` : `Does he ${cleanVerb} ${data.sampleSentence}?`,
    };
  }

  // Check sibilants (-ch, -sh, -ss, -x, -z)
  const sibilantRegex = /(ch|sh|ss|zz|x|z)$/;
  if (sibilantRegex.test(cleanVerb)) {
    const thirdPerson = `${cleanVerb}es`;
    return {
      base: cleanVerb,
      thirdPerson,
      ruleName: "Sibilant Ending (+es)",
      ruleCategory: "sibilant",
      explanation: `Verbs ending in -s, -ss, -sh, -ch, -x, or -z need '-es' to keep the sounds distinguishable and add an extra syllable /ɪz/.`,
      pronunciation: "/ɪz/ (extra syllable added!)",
      ruleTag: "Rule 2: Sibilants +es",
      addedSuffix: "es",
      sampleHe: `He ${thirdPerson} carefully whenever necessary.`,
      sampleQuestion: `Does he ${cleanVerb} carefully?`,
    };
  }

  // Check Consonant + Y
  const consonantYRegex = /[^aeiou]y$/;
  if (consonantYRegex.test(cleanVerb)) {
    const stem = cleanVerb.slice(0, -1);
    const thirdPerson = `${stem}ies`;
    return {
      base: cleanVerb,
      thirdPerson,
      ruleName: "Consonant + Y (y → -ies)",
      ruleCategory: "consonant_y",
      explanation: `Preceded by a consonant, the final 'y' changes into 'i' before attaching '-es'.`,
      pronunciation: "Clean vowel glide + voiced /z/",
      ruleTag: "Rule 3: Consonant + y → -ies",
      addedSuffix: "ies (y dropped)",
      sampleHe: `She ${thirdPerson} with deep concentration.`,
      sampleQuestion: `Does she ${cleanVerb} every evening?`,
    };
  }

  // Check Vowel + Y
  const vowelYRegex = /[aeiou]y$/;
  if (vowelYRegex.test(cleanVerb)) {
    const thirdPerson = `${cleanVerb}s`;
    return {
      base: cleanVerb,
      thirdPerson,
      ruleName: "Vowel + Y (+s only)",
      ruleCategory: "vowel_y",
      explanation: `Because the 'y' follows a vowel (a, e, i, o, u), do NOT change the 'y'! Simply add '-s'.`,
      pronunciation: "/z/ voiced sibilant",
      ruleTag: "Rule 4: Vowel + y → +s",
      addedSuffix: "s",
      sampleHe: `He ${thirdPerson} the guitar like a virtuoso.`,
      sampleQuestion: `Does he ${cleanVerb} often?`,
    };
  }

  // Default regular rule
  const thirdPerson = `${cleanVerb}s`;
  return {
    base: cleanVerb,
    thirdPerson,
    ruleName: "Standard Regular Verb (+s)",
    ruleCategory: "regular",
    explanation: `The vast majority of English verbs form the 3rd person singular by adding a simple '-s'.`,
    pronunciation: "Voiced /z/ or unvoiced /s/ depending on ending",
    ruleTag: "Rule 1: Standard +s",
    addedSuffix: "s",
    sampleHe: `She ${thirdPerson} with great dedication.`,
    sampleQuestion: `Does she ${cleanVerb} every day?`,
  };
}

export function buildDynamicSentence(subjectKey, verbInput, sentenceType = 'affirmative', tenseId = 'presentSimple') {
  const analysis = analyzeVerb(verbInput);
  const isThirdPerson = ['he', 'she', 'it', 'my brother', 'the dog', 'the teacher'].includes(subjectKey.toLowerCase());
  const isVerbBe = analysis.base === 'be';
  const capitalizedSubject = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1);

  // Common past & participle forms
  const irregularPastMap = {
    work: { v2: 'worked', v3: 'worked' },
    play: { v2: 'played', v3: 'played' },
    study: { v2: 'studied', v3: 'studied' },
    watch: { v2: 'watched', v3: 'watched' },
    fix: { v2: 'fixed', v3: 'fixed' },
    fly: { v2: 'flew', v3: 'flown' },
    have: { v2: 'had', v3: 'had' },
    be: { v2: isThirdPerson || subjectKey.toLowerCase() === 'i' ? 'was' : 'were', v3: 'been' },
  };

  const forms = irregularPastMap[analysis.base] || {
    v2: analysis.base.endsWith('e') ? `${analysis.base}d` : `${analysis.base}ed`,
    v3: analysis.base.endsWith('e') ? `${analysis.base}d` : `${analysis.base}ed`,
  };
  const ingForm = analysis.base.endsWith('e') && analysis.base !== 'be' ? `${analysis.base.slice(0, -1)}ing` : `${analysis.base}ing`;

  // 1. PAST SIMPLE
  if (tenseId === 'pastSimple') {
    if (isVerbBe) {
      const bePast = (isThirdPerson || subjectKey.toLowerCase() === 'i') ? 'was' : 'were';
      if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: null, verb: bePast, complement: 'at the conference yesterday.', full: `${capitalizedSubject} ${bePast} at the conference yesterday.` };
      if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: null, verb: `${bePast} not`, complement: 'at the conference yesterday.', full: `${capitalizedSubject} ${bePast} not at the conference yesterday.` };
      if (sentenceType === 'question') {
        const capBe = bePast.charAt(0).toUpperCase() + bePast.slice(1);
        return { subject: subjectKey, aux: capBe, verb: null, complement: 'at the conference yesterday?', full: `${capBe} ${subjectKey} at the conference yesterday?` };
      }
      return { wh: 'Where', aux: bePast, subject: subjectKey, verb: null, complement: 'yesterday afternoon?', full: `Where ${bePast} ${subjectKey} yesterday afternoon?` };
    }
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: null, verb: forms.v2, complement: 'in the city center yesterday.', full: `${capitalizedSubject} ${forms.v2} in the city center yesterday.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: "didn't", verb: analysis.base, complement: 'in the city center yesterday.', full: `${capitalizedSubject} didn't ${analysis.base} in the city center yesterday.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: 'Did', verb: analysis.base, complement: 'in the city center yesterday?', full: `Did ${subjectKey} ${analysis.base} in the city center yesterday?` };
    return { wh: 'Where', aux: 'did', subject: subjectKey, verb: analysis.base, complement: 'yesterday?', full: `Where did ${subjectKey} ${analysis.base} yesterday?` };
  }

  // 3. FUTURE SIMPLE
  if (tenseId === 'futureSimple') {
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: 'will', verb: analysis.base, complement: 'in the city center tomorrow.', full: `${capitalizedSubject} will ${analysis.base} in the city center tomorrow.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: "won't", verb: analysis.base, complement: 'in the city center tomorrow.', full: `${capitalizedSubject} won't ${analysis.base} in the city center tomorrow.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: 'Will', verb: analysis.base, complement: 'in the city center tomorrow?', full: `Will ${subjectKey} ${analysis.base} in the city center tomorrow?` };
    return { wh: 'Where', aux: 'will', subject: subjectKey, verb: analysis.base, complement: 'tomorrow?', full: `Where will ${subjectKey} ${analysis.base} tomorrow?` };
  }

  // 4. PAST CONTINUOUS
  if (tenseId === 'pastContinuous') {
    const bePast = (isThirdPerson || subjectKey.toLowerCase() === 'i') ? 'was' : 'were';
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: bePast, verb: ingForm, complement: 'when the phone rang.', full: `${capitalizedSubject} ${bePast} ${ingForm} when the phone rang.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: `${bePast} not`, verb: ingForm, complement: 'at that moment.', full: `${capitalizedSubject} ${bePast} not ${ingForm} at that moment.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: bePast.charAt(0).toUpperCase() + bePast.slice(1), verb: ingForm, complement: 'when I called?', full: `${bePast.charAt(0).toUpperCase() + bePast.slice(1)} ${subjectKey} ${ingForm} when I called?` };
    return { wh: 'What', aux: bePast, subject: subjectKey, verb: ingForm, complement: 'at 8 PM yesterday?', full: `What ${bePast} ${subjectKey} ${ingForm} at 8 PM yesterday?` };
  }

  // 5. PRESENT CONTINUOUS
  if (tenseId === 'presentContinuous') {
    let bePres = 'are';
    if (subjectKey.toLowerCase() === 'i') bePres = 'am';
    else if (isThirdPerson) bePres = 'is';
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: bePres, verb: ingForm, complement: 'right now.', full: `${capitalizedSubject} ${bePres} ${ingForm} right now.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: `${bePres} not`, verb: ingForm, complement: 'at the moment.', full: `${capitalizedSubject} ${bePres} not ${ingForm} at the moment.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: bePres.charAt(0).toUpperCase() + bePres.slice(1), verb: ingForm, complement: 'right now?', full: `${bePres.charAt(0).toUpperCase() + bePres.slice(1)} ${subjectKey} ${ingForm} right now?` };
    return { wh: 'Why', aux: bePres, subject: subjectKey, verb: ingForm, complement: 'right now?', full: `Why ${bePres} ${subjectKey} ${ingForm} right now?` };
  }

  // 6. FUTURE CONTINUOUS
  if (tenseId === 'futureContinuous') {
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: 'will be', verb: ingForm, complement: 'this time tomorrow.', full: `${capitalizedSubject} will be ${ingForm} this time tomorrow.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: "won't be", verb: ingForm, complement: 'tomorrow morning.', full: `${capitalizedSubject} won't be ${ingForm} tomorrow morning.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: 'Will', verb: `be ${ingForm}`, complement: 'tomorrow at 3 PM?', full: `Will ${subjectKey} be ${ingForm} tomorrow at 3 PM?` };
    return { wh: 'What', aux: 'will', subject: subjectKey, verb: `be ${ingForm}`, complement: 'this time next week?', full: `What will ${subjectKey} be ${ingForm} this time next week?` };
  }

  // 7. PAST PERFECT
  if (tenseId === 'pastPerfect') {
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: 'had', verb: forms.v3, complement: 'before the deadline.', full: `${capitalizedSubject} had ${forms.v3} before the deadline.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: "hadn't", verb: forms.v3, complement: 'before the meeting.', full: `${capitalizedSubject} hadn't ${forms.v3} before the meeting.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: 'Had', verb: forms.v3, complement: 'before the train arrived?', full: `Had ${subjectKey} ${forms.v3} before the train arrived?` };
    return { wh: 'Why', aux: 'had', subject: subjectKey, verb: forms.v3, complement: 'before the announcement?', full: `Why had ${subjectKey} ${forms.v3} before the announcement?` };
  }

  // 8. PRESENT PERFECT
  if (tenseId === 'presentPerfect') {
    const aux = isThirdPerson ? 'has' : 'have';
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: aux, verb: forms.v3, complement: 'already today.', full: `${capitalizedSubject} ${aux} ${forms.v3} already today.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: `${aux}n't`, verb: forms.v3, complement: 'yet.', full: `${capitalizedSubject} ${aux}n't ${forms.v3} yet.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: aux.charAt(0).toUpperCase() + aux.slice(1), verb: forms.v3, complement: 'recently?', full: `${aux.charAt(0).toUpperCase() + aux.slice(1)} ${subjectKey} ${forms.v3} recently?` };
    return { wh: 'How many times', aux: aux, subject: subjectKey, verb: forms.v3, complement: 'this month?', full: `How many times ${aux} ${subjectKey} ${forms.v3} this month?` };
  }

  // 9. FUTURE PERFECT
  if (tenseId === 'futurePerfect') {
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: 'will have', verb: forms.v3, complement: 'by next December.', full: `${capitalizedSubject} will have ${forms.v3} by next December.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: "won't have", verb: forms.v3, complement: 'by next week.', full: `${capitalizedSubject} won't have ${forms.v3} by next week.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: 'Will', verb: `have ${forms.v3}`, complement: 'by 2030?', full: `Will ${subjectKey} have ${forms.v3} by 2030?` };
    return { wh: 'When', aux: 'will', subject: subjectKey, verb: `have ${forms.v3}`, complement: 'the project?', full: `When will ${subjectKey} have ${forms.v3} the project?` };
  }

  // 10. PAST PERFECT CONTINUOUS
  if (tenseId === 'pastPerfectCont') {
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: 'had been', verb: ingForm, complement: 'for two hours before we left.', full: `${capitalizedSubject} had been ${ingForm} for two hours before we left.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: "hadn't been", verb: ingForm, complement: 'long before the storm hit.', full: `${capitalizedSubject} hadn't been ${ingForm} long before the storm hit.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: 'Had', verb: `been ${ingForm}`, complement: 'for hours?', full: `Had ${subjectKey} been ${ingForm} for hours?` };
    return { wh: 'How long', aux: 'had', subject: subjectKey, verb: `been ${ingForm}`, complement: 'before arriving?', full: `How long had ${subjectKey} been ${ingForm} before arriving?` };
  }

  // 11. PRESENT PERFECT CONTINUOUS
  if (tenseId === 'presentPerfectCont') {
    const aux = isThirdPerson ? 'has been' : 'have been';
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: aux, verb: ingForm, complement: 'for three hours.', full: `${capitalizedSubject} ${aux} ${ingForm} for three hours.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: isThirdPerson ? "hasn't been" : "haven't been", verb: ingForm, complement: 'lately.', full: `${capitalizedSubject} ${isThirdPerson ? "hasn't been" : "haven't been"} ${ingForm} lately.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: isThirdPerson ? 'Has' : 'Have', verb: `been ${ingForm}`, complement: 'all morning?', full: `${isThirdPerson ? 'Has' : 'Have'} ${subjectKey} been ${ingForm} all morning?` };
    return { wh: 'How long', aux: isThirdPerson ? 'has' : 'have', subject: subjectKey, verb: `been ${ingForm}`, complement: 'here?', full: `How long ${isThirdPerson ? 'has' : 'have'} ${subjectKey} been ${ingForm} here?` };
  }

  // 12. FUTURE PERFECT CONTINUOUS
  if (tenseId === 'futurePerfectCont') {
    if (sentenceType === 'affirmative') return { subject: capitalizedSubject, aux: 'will have been', verb: ingForm, complement: 'for a decade by next year.', full: `${capitalizedSubject} will have been ${ingForm} for a decade by next year.` };
    if (sentenceType === 'negative') return { subject: capitalizedSubject, aux: "won't have been", verb: ingForm, complement: 'long enough by December.', full: `${capitalizedSubject} won't have been ${ingForm} long enough by December.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: 'Will', verb: `have been ${ingForm}`, complement: 'for five years by 2030?', full: `Will ${subjectKey} have been ${ingForm} for five years by 2030?` };
    return { wh: 'How long', aux: 'will', subject: subjectKey, verb: `have been ${ingForm}`, complement: 'by retirement?', full: `How long will ${subjectKey} have been ${ingForm} by retirement?` };
  }

  // 13. CONDITIONALS
  if (tenseId === 'conditionals') {
    if (sentenceType === 'affirmative') return { subject: `If ${subjectKey.toLowerCase()}`, aux: null, verb: `${analysis.base}s`, complement: 'diligently, success follows.', full: `If ${subjectKey.toLowerCase()} ${analysis.base}s diligently, success follows.` };
    if (sentenceType === 'negative') return { subject: `Unless ${subjectKey.toLowerCase()}`, aux: null, verb: analysis.base, complement: 'diligently, goals are delayed.', full: `Unless ${subjectKey.toLowerCase()} ${analysis.base}s diligently, goals are delayed.` };
    if (sentenceType === 'question') return { subject: subjectKey, aux: 'What would happen if', verb: analysis.base, complement: 'without pause?', full: `What would happen if ${subjectKey.toLowerCase()} ${forms.v2} without pause?` };
    return { wh: 'How', aux: 'would', subject: subjectKey, verb: analysis.base, complement: 'if given the opportunity?', full: `How would ${subjectKey.toLowerCase()} ${analysis.base} if given the opportunity?` };
  }

  // 14. PASSIVE VOICE
  if (tenseId === 'passiveVoice') {
    return { subject: 'The project', aux: 'is', verb: forms.v3, complement: `by ${subjectKey.toLowerCase()}.`, full: `The project is ${forms.v3} by ${subjectKey.toLowerCase()}.` };
  }

  // DEFAULT: 2. PRESENT SIMPLE
  if (isVerbBe) {
    let beForm = 'are';
    if (subjectKey.toLowerCase() === 'i') beForm = 'am';
    else if (isThirdPerson) beForm = 'is';

    if (sentenceType === 'affirmative') {
      return {
        subject: capitalizedSubject,
        aux: null,
        verb: beForm,
        complement: 'ready for the challenge.',
        full: `${capitalizedSubject} ${beForm} ready for the challenge.`,
      };
    }
    if (sentenceType === 'negative') {
      const neg = subjectKey.toLowerCase() === 'i' ? 'am not' : (isThirdPerson ? "isn't" : "aren't");
      return {
        subject: capitalizedSubject,
        aux: null,
        verb: neg,
        complement: 'ready for the challenge.',
        full: `${capitalizedSubject} ${neg} ready for the challenge.`,
      };
    }
    if (sentenceType === 'question') {
      const capBe = beForm.charAt(0).toUpperCase() + beForm.slice(1);
      return {
        subject: subjectKey,
        aux: capBe,
        verb: null,
        complement: 'ready for the challenge?',
        full: `${capBe} ${subjectKey} ready for the challenge?`,
      };
    }
    return {
      wh: 'Why',
      aux: beForm,
      subject: subjectKey,
      complement: 'so happy today?',
      full: `Why ${beForm} ${subjectKey} so happy today?`,
    };
  }

  // Non-be verbs
  const verbToUse = isThirdPerson ? analysis.thirdPerson : analysis.base;

  if (sentenceType === 'affirmative') {
    return {
      subject: capitalizedSubject,
      aux: null,
      verb: verbToUse,
      complement: 'in the city center.',
      full: `${capitalizedSubject} ${verbToUse} in the city center.`,
    };
  }

  if (sentenceType === 'negative') {
    const aux = isThirdPerson ? "doesn't" : "don't";
    return {
      subject: capitalizedSubject,
      aux: aux,
      verb: analysis.base,
      complement: 'in the city center.',
      full: `${capitalizedSubject} ${aux} ${analysis.base} in the city center.`,
    };
  }

  if (sentenceType === 'question') {
    const aux = isThirdPerson ? 'Does' : 'Do';
    return {
      subject: subjectKey,
      aux: aux,
      verb: analysis.base,
      complement: 'in the city center?',
      full: `${aux} ${subjectKey} ${analysis.base} in the city center?`,
    };
  }

  const aux = isThirdPerson ? 'does' : 'do';
  return {
    wh: 'Where',
    aux: aux,
    subject: subjectKey,
    verb: analysis.base,
    complement: 'on weekends?',
    full: `Where ${aux} ${subjectKey} ${analysis.base} on weekends?`,
  };
}
