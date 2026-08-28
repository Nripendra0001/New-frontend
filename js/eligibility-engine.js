/* =====================================================================
   SARKARINEXT ELIGIBILITY INTELLIGENCE ENGINE
   Version 2.0 — Data-driven, notification-aware, AI-augmented.

   Architecture:
   - EXAM DATABASE: Structured records with real eligibility data
   - ELIGIBILITY ENGINE: Deterministic rule evaluator
   - RESULT RENDERER: Premium card UI
   - AI BRIDGE: Non-blocking explanation layer via existing /api/ask-ai
   - PROFILE MEMORY: localStorage for user comfort

   SAFETY: AI never determines eligibility. Engine decides. AI explains.
   AI failure never blocks results.
   Official notification remains final authority.
===================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /*  CONSTANTS                                                          */
  /* ------------------------------------------------------------------ */
  const STORAGE_KEY = 'sn_ei_profile';
  const AI_API =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
      ? 'http://localhost:3000'
      : 'https://api.nripendra.online';

  /* ------------------------------------------------------------------ */
  /*  QUALIFICATION HIERARCHY                                            */
  /*  Higher number = higher qualification level                        */
  /* ------------------------------------------------------------------ */
  const QUAL_LEVEL = { '8': 1, '10': 2, '12': 3, 'diploma': 3.5, 'iti': 3.5, 'grad': 4, 'pg': 5 };

  /* ------------------------------------------------------------------ */
  /*  EXAM DATABASE                                                      */
  /*  Each record is notification-architecture ready.                   */
  /*  Only include data that is verifiable from official sources.       */
  /* ------------------------------------------------------------------ */
  const EXAM_DB = [
    {
      id: 'ssc-cgl',
      name: 'SSC CGL',
      fullName: 'Staff Selection Commission — Combined Graduate Level',
      recruitingBody: 'SSC',
      category: 'central',
      subCategory: 'ssc',
      qualificationRules: {
        minLevel: 'grad',
        note: 'Any Bachelor\'s Degree from a recognized university. Post-specific streams may apply.'
      },
      ageRules: { min: 18, max: 32, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10, exServiceman: 3 }, note: 'Age as on cutoff date in notification.' },
      stateRules: { type: 'central', note: 'Central government exam. State does not restrict eligibility. Posting preferences matter.' },
      selectionProcess: ['Tier I (CBT)', 'Tier II (CBT)', 'Document Verification'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://ssc.nic.in',
      lastUpdated: '2025'
    },
    {
      id: 'ssc-chsl',
      name: 'SSC CHSL',
      fullName: 'Staff Selection Commission — Combined Higher Secondary Level',
      recruitingBody: 'SSC',
      category: 'central',
      subCategory: 'ssc',
      qualificationRules: {
        minLevel: '12',
        maxLevel: '12',
        note: '12th pass from a recognized Board. Graduates may also apply for certain posts.'
      },
      ageRules: { min: 18, max: 27, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as on notification cutoff.' },
      stateRules: { type: 'central', note: 'Central exam. State does not restrict eligibility.' },
      selectionProcess: ['Tier I (CBT)', 'Tier II (CBT)', 'Skill Test / Typing Test', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://ssc.nic.in',
      lastUpdated: '2025'
    },
    {
      id: 'ssc-mts',
      name: 'SSC MTS',
      fullName: 'Staff Selection Commission — Multi-Tasking Staff',
      recruitingBody: 'SSC',
      category: 'central',
      subCategory: 'ssc',
      qualificationRules: { minLevel: '10', note: '10th pass (Matriculation) from a recognized Board.' },
      ageRules: { min: 18, max: 25, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as on notification cutoff.' },
      stateRules: { type: 'central', note: 'Central exam. State is not a barrier.' },
      selectionProcess: ['CBT', 'Physical Test (for Havaldar post)', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://ssc.nic.in',
      lastUpdated: '2025'
    },
    {
      id: 'ssc-gd',
      name: 'SSC GD Constable',
      fullName: 'SSC — General Duty Constable (CAPF)',
      recruitingBody: 'SSC',
      category: 'central',
      subCategory: 'police',
      qualificationRules: { minLevel: '10', note: '10th pass from a recognized Board.' },
      ageRules: { min: 18, max: 23, relaxations: { obc: 3, sc: 5, st: 5, exServiceman: 3 }, note: 'Age relaxation as per notification.' },
      stateRules: { type: 'central', note: 'Central paramilitary. No state domicile restriction.' },
      physicalRules: { male: 'Height: 170 cm (Gen/OBC), 162.5 cm (SC/ST/Hill). Chest: 80–85 cm. Run: 5km/24 mins.', female: 'Height: 157 cm (Gen/OBC), 150 cm (SC/ST/Hill). Run: 1.6km/8.5 mins.' },
      selectionProcess: ['CBT', 'PET', 'PST', 'Medical', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://ssc.nic.in',
      lastUpdated: '2025'
    },
    {
      id: 'ssc-cpo',
      name: 'SSC CPO',
      fullName: 'SSC — Central Police Organisations (SI)',
      recruitingBody: 'SSC',
      category: 'central',
      subCategory: 'police',
      qualificationRules: { minLevel: 'grad', note: 'Any Bachelor\'s Degree from a recognized university.' },
      ageRules: { min: 20, max: 25, relaxations: { obc: 3, sc: 5, st: 5 }, note: 'Age as on notification cutoff.' },
      stateRules: { type: 'central', note: 'Central police organizations. State is not a barrier to eligibility.' },
      physicalRules: { male: 'Height: 170 cm. Chest: 80 cm. Race: 5km in 24 mins.', female: 'Height: 157 cm. Race: 1.6km in 8.5 mins.' },
      selectionProcess: ['Paper I (CBT)', 'PET/PST', 'Paper II', 'Medical', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://ssc.nic.in',
      lastUpdated: '2025'
    },
    {
      id: 'ssc-je',
      name: 'SSC JE',
      fullName: 'SSC — Junior Engineer (Civil/Electrical/Mechanical)',
      recruitingBody: 'SSC',
      category: 'central',
      subCategory: 'technical',
      qualificationRules: {
        minLevel: 'diploma',
        streams: ['civil', 'electrical', 'mechanical'],
        note: 'Diploma in relevant engineering discipline OR Bachelor\'s Degree in Engineering.'
      },
      ageRules: { min: 18, max: 32, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as per notification.' },
      stateRules: { type: 'central', note: 'Central exam. No state restriction.' },
      selectionProcess: ['Paper I (CBT)', 'Paper II (Descriptive)', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://ssc.nic.in',
      lastUpdated: '2025'
    },
    {
      id: 'rly-ntpc-12',
      name: 'Railway NTPC (12th Level)',
      fullName: 'RRB — Non-Technical Popular Category (12th Level Posts)',
      recruitingBody: 'RRB / RRC',
      category: 'central',
      subCategory: 'railway',
      qualificationRules: {
        minLevel: '12',
        note: '12th pass for posts like Junior Clerk, Accounts Clerk-cum-Typist, Junior Time Keeper.'
      },
      ageRules: { min: 18, max: 33, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as on notification cutoff. Relaxations per government norms.' },
      stateRules: { type: 'central', note: 'Railway recruitment — All India. State does not restrict eligibility.' },
      selectionProcess: ['CBT Stage I', 'CBT Stage II', 'Typing / Skill Test', 'DV', 'Medical'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://rrbapply.gov.in',
      lastUpdated: '2025'
    },
    {
      id: 'rly-ntpc-grad',
      name: 'Railway NTPC (Graduate Level)',
      fullName: 'RRB — Non-Technical Popular Category (Graduate Level Posts)',
      recruitingBody: 'RRB / RRC',
      category: 'central',
      subCategory: 'railway',
      qualificationRules: {
        minLevel: 'grad',
        note: 'Graduate for posts like Station Master, Goods Guard, Senior Commercial Clerk, Senior Clerk-cum-Typist.'
      },
      ageRules: { min: 18, max: 36, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age varies by post. Check notification.' },
      stateRules: { type: 'central', note: 'Railway recruitment — All India. State does not restrict eligibility.' },
      selectionProcess: ['CBT Stage I', 'CBT Stage II', 'Typing / Skill Test', 'DV', 'Medical'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://rrbapply.gov.in',
      lastUpdated: '2025'
    },
    {
      id: 'rly-group-d',
      name: 'Railway Group D',
      fullName: 'RRC — Level 1 Posts (Group D)',
      recruitingBody: 'RRC',
      category: 'central',
      subCategory: 'railway',
      qualificationRules: {
        minLevel: '10',
        note: '10th pass OR ITI from a recognized institution. Or NCVT/SCVT trade certificate.'
      },
      ageRules: { min: 18, max: 36, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as per notification.' },
      stateRules: { type: 'central', note: 'All India. No state restriction.' },
      selectionProcess: ['CBT', 'PET', 'Medical', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://rrcapply.gov.in',
      lastUpdated: '2025'
    },
    {
      id: 'rly-alp',
      name: 'Railway ALP',
      fullName: 'RRB — Assistant Loco Pilot',
      recruitingBody: 'RRB',
      category: 'central',
      subCategory: 'railway',
      qualificationRules: {
        minLevel: '10',
        techRequired: true,
        note: '10th pass + ITI/Diploma in relevant trade (Electrician, Fitter, Diesel Mechanic, etc.).'
      },
      ageRules: { min: 18, max: 33, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as per notification.' },
      stateRules: { type: 'central', note: 'All India exam.' },
      selectionProcess: ['CBT Stage I', 'CBT Stage II (Part A + B)', 'Computer-Based Aptitude Test', 'DV', 'Medical'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://rrbapply.gov.in',
      lastUpdated: '2025'
    },
    {
      id: 'rly-je',
      name: 'Railway JE',
      fullName: 'RRB — Junior Engineer',
      recruitingBody: 'RRB',
      category: 'central',
      subCategory: 'railway',
      qualificationRules: {
        minLevel: 'diploma',
        techRequired: true,
        streams: ['civil', 'electrical', 'mechanical', 'electronics', 'it'],
        note: 'Diploma/Degree in relevant engineering discipline (Civil, Electrical, Mechanical, Electronics, IT, etc.).'
      },
      ageRules: { min: 18, max: 36, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as per notification.' },
      stateRules: { type: 'central', note: 'All India exam.' },
      selectionProcess: ['CBT Stage I', 'CBT Stage II', 'DV', 'Medical'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://rrbapply.gov.in',
      lastUpdated: '2025'
    },
    {
      id: 'ibps-po',
      name: 'IBPS PO',
      fullName: 'Institute of Banking Personnel Selection — Probationary Officer',
      recruitingBody: 'IBPS',
      category: 'central',
      subCategory: 'banking',
      qualificationRules: {
        minLevel: 'grad',
        note: 'Any Bachelor\'s Degree from a UGC-recognized university. Computer literacy preferred.'
      },
      ageRules: { min: 20, max: 30, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as on notification cutoff.' },
      stateRules: { type: 'central', note: 'Banking — All India.' },
      selectionProcess: ['Prelims (Online)', 'Mains (Online)', 'Interview', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://ibps.in',
      lastUpdated: '2025'
    },
    {
      id: 'ibps-clerk',
      name: 'IBPS Clerk',
      fullName: 'Institute of Banking Personnel Selection — Clerical Cadre',
      recruitingBody: 'IBPS',
      category: 'central',
      subCategory: 'banking',
      qualificationRules: {
        minLevel: 'grad',
        note: 'Any Bachelor\'s Degree from a recognized university. Local language knowledge may be required for some banks.'
      },
      ageRules: { min: 20, max: 28, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as per notification.' },
      stateRules: { type: 'central', note: 'Banking — All India.' },
      selectionProcess: ['Prelims (Online)', 'Mains (Online)', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://ibps.in',
      lastUpdated: '2025'
    },
    {
      id: 'sbi-po',
      name: 'SBI PO',
      fullName: 'State Bank of India — Probationary Officer',
      recruitingBody: 'SBI',
      category: 'central',
      subCategory: 'banking',
      qualificationRules: {
        minLevel: 'grad',
        note: 'Graduation in any discipline from a recognized university.'
      },
      ageRules: { min: 21, max: 30, relaxations: { obc: 3, sc: 5, st: 5, pwbd: 10 }, note: 'Age as per notification.' },
      stateRules: { type: 'central', note: 'All India exam.' },
      selectionProcess: ['Prelims', 'Mains', 'Group Exercise + Interview', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://sbi.co.in/careers',
      lastUpdated: '2025'
    },
    {
      id: 'uppsc-pcs',
      name: 'UPPSC PCS',
      fullName: 'Uttar Pradesh Public Service Commission — Provincial Civil Service',
      recruitingBody: 'UPPSC',
      category: 'state',
      subCategory: 'uppsc',
      qualificationRules: {
        minLevel: 'grad',
        note: 'Any Bachelor\'s Degree from a recognized university. Certain posts may require specific disciplines.'
      },
      ageRules: { min: 21, max: 40, relaxations: { obc: 5, sc: 5, st: 5, female: 5, pwbd: 15 }, note: 'UP domicile age relaxations are additional. Age as per notification.' },
      stateRules: { type: 'state', states: ['up'], domicileRequired: true, note: 'UP domicile required for reserved category benefits. General category candidates from other states may apply — verify notification.' },
      selectionProcess: ['Prelims (GS + CSAT)', 'Mains (9 papers)', 'Interview', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://uppsc.up.nic.in',
      lastUpdated: '2025'
    },
    {
      id: 'up-police-constable',
      name: 'UP Police Constable',
      fullName: 'UP Police — Constable Civil Police',
      recruitingBody: 'UPPRPB',
      category: 'state',
      subCategory: 'police',
      qualificationRules: {
        minLevel: '12',
        note: '12th pass from a UP Board or recognized Board.'
      },
      ageRules: { min: 18, max: 25, relaxations: { obc: 3, sc: 5, st: 5, female: 5, pwbd: 15, exServiceman: 5 }, note: 'UP domicile relaxations may apply. Age as per notification.' },
      stateRules: { type: 'state', states: ['up'], domicileRequired: true, note: 'UP domicile is generally required. Verify in official notification.' },
      physicalRules: { male: 'Height: 168 cm (Gen/OBC/SC), 160 cm (ST). Chest: 79–84 cm. Run: 4.8km.', female: 'Height: 152 cm (Gen/OBC/SC), 147 cm (ST). Run: 2.4km.' },
      selectionProcess: ['Written Test', 'PET', 'PST', 'Medical', 'DV'],
      applicationStatus: 'open',
      officialWebsite: 'https://uppbpb.gov.in',
      lastUpdated: '2026'
    },
    {
      id: 'up-police-si',
      name: 'UP Police SI',
      fullName: 'UP Police — Sub Inspector Civil Police',
      recruitingBody: 'UPPRPB',
      category: 'state',
      subCategory: 'police',
      qualificationRules: {
        minLevel: 'grad',
        note: 'Any Bachelor\'s Degree from a recognized university.'
      },
      ageRules: { min: 21, max: 28, relaxations: { obc: 3, sc: 5, st: 5, female: 5, pwbd: 15 }, note: 'Age as per notification. Domicile relaxations apply.' },
      stateRules: { type: 'state', states: ['up'], domicileRequired: true, note: 'UP domicile generally required. Verify in official notification.' },
      physicalRules: { male: 'Height: 168 cm. Chest: 79–84 cm. Run: 4.8km in 28 mins.', female: 'Height: 152 cm. Run: 2.4km in 16 mins.' },
      selectionProcess: ['Written Exam', 'PST', 'PET', 'Medical', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://uppbpb.gov.in',
      lastUpdated: '2026'
    },
    {
      id: 'upsssc-pet',
      name: 'UPSSSC PET',
      fullName: 'UP Subordinate Service Selection Commission — Preliminary Eligibility Test',
      recruitingBody: 'UPSSSC',
      category: 'state',
      subCategory: 'upsssc',
      qualificationRules: {
        minLevel: '10',
        note: '10th pass. Gateway exam for various UPSSSC Group C posts including Lekhpal, VDO, Gram Panchayat Adhikari.'
      },
      ageRules: { min: 18, max: 40, relaxations: { obc: 3, sc: 5, st: 5, female: 5, pwbd: 15 }, note: 'Age as per notification.' },
      stateRules: { type: 'state', states: ['up'], domicileRequired: true, note: 'UP domicile required.' },
      selectionProcess: ['PET (Qualifying Exam)', 'Post-specific Mains', 'DV'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://upsssc.gov.in',
      lastUpdated: '2025'
    },
    {
      id: 'ctet',
      name: 'CTET',
      fullName: 'Central Teacher Eligibility Test',
      recruitingBody: 'CBSE / NTA',
      category: 'central',
      subCategory: 'teaching',
      qualificationRules: {
        minLevel: 'grad',
        teachingRequired: true,
        note: 'Paper I (Class I-V): 12th + 2yr Diploma (Elementary Ed). Paper II (Class VI-VIII): Grad + B.Ed OR Grad + 4yr B.El.Ed.'
      },
      ageRules: { min: 0, max: 999, relaxations: {}, note: 'No upper age limit specified for CTET. Minimum 17-18 years typically.' },
      stateRules: { type: 'central', note: 'Central eligibility certificate. Valid for Central government schools.' },
      selectionProcess: ['Written Examination', 'Certificate Issued on qualifying score'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://ctet.nic.in',
      lastUpdated: '2025'
    },
    {
      id: 'nda',
      name: 'NDA',
      fullName: 'National Defence Academy & Naval Academy Examination',
      recruitingBody: 'UPSC',
      category: 'central',
      subCategory: 'defence',
      qualificationRules: {
        minLevel: '12',
        maxLevel: '12',
        note: '12th pass (PCM for Army/Navy/IAF). Must be an unmarried male/female as per latest notification rules.'
      },
      ageRules: { min: 16.5, max: 19.5, relaxations: {}, note: 'Age 16.5 to 19.5 years as on joining. Unmarried. Very strict age band.' },
      stateRules: { type: 'central', note: 'All India exam. No state restriction.' },
      physicalRules: { male: 'Height: 157 cm. Weight proportionate. Medical standards per Army/Navy/IAF norms.', female: 'Female candidates now eligible as per Supreme Court order — verify latest notification.' },
      selectionProcess: ['Written Exam (Maths + GAT)', 'SSB Interview', 'Medical', 'Merit List'],
      applicationStatus: 'upcoming',
      officialWebsite: 'https://upsc.gov.in',
      lastUpdated: '2025'
    }
  ];

  /* ------------------------------------------------------------------ */
  /*  ELIGIBILITY ENGINE — Deterministic Rule Evaluator                 */
  /* ------------------------------------------------------------------ */
  function evaluateEligibility(profile, exam) {
    const result = {
      exam,
      status: 'needs_verification',
      score: 0,
      matchedCriteria: [],
      missingCriteria: [],
      warnings: [],
      applicationStatus: exam.applicationStatus || 'unknown'
    };

    let pts = 0; // score accumulator (0–100)

    // --- 1. QUALIFICATION CHECK ---
    const userQualLevel = QUAL_LEVEL[profile.edu] || 0;
    const examMinQualLevel = QUAL_LEVEL[exam.qualificationRules.minLevel] || 0;
    const examMaxQualLevel = exam.qualificationRules.maxLevel
      ? QUAL_LEVEL[exam.qualificationRules.maxLevel]
      : 999;

    if (userQualLevel >= examMinQualLevel && userQualLevel <= examMaxQualLevel) {
      result.matchedCriteria.push('Qualification matches');
      pts += 40;
    } else if (userQualLevel > examMaxQualLevel) {
      // Over-qualified: still often eligible in practice
      result.matchedCriteria.push('Qualification meets requirement (over-qualified — verify notification)');
      result.warnings.push('You appear over-qualified for this exam\'s standard posts. Some posts may still be available. Check notification.');
      pts += 30;
    } else {
      result.missingCriteria.push(`Requires: ${exam.qualificationRules.minLevel.toUpperCase() === 'GRAD' ? 'Graduation' : exam.qualificationRules.minLevel + ' pass'} — Your qualification: ${profile.edu || 'Not specified'}`);
      pts -= 50;
    }

    // --- 2. TECHNICAL QUALIFICATION CHECK ---
    if (exam.qualificationRules.techRequired) {
      if (profile.edu === 'diploma' || profile.edu === 'iti' || (profile.degreeStream && ['civil', 'electrical', 'mechanical', 'electronics', 'it', 'computer'].includes(profile.degreeStream))) {
        result.matchedCriteria.push('Technical qualification detected');
        pts += 10;
      } else if (userQualLevel >= 4) {
        // Graduate with engineering stream might qualify
        result.warnings.push('This exam requires a technical qualification (ITI/Diploma/Engineering). Verify your stream meets the requirement.');
        pts += 5;
      } else {
        result.missingCriteria.push('Technical qualification required (ITI/Diploma in relevant trade)');
        pts -= 20;
      }
    }

    // --- 3. AGE CHECK ---
    const age = parseInt(profile.age);
    const ageMin = exam.ageRules.min;
    const ageMax = exam.ageRules.max;

    // Apply category relaxation
    let effectiveMax = ageMax;
    let relaxNote = '';
    if (profile.category && exam.ageRules.relaxations[profile.category]) {
      effectiveMax += exam.ageRules.relaxations[profile.category];
      relaxNote = ` (includes ${exam.ageRules.relaxations[profile.category]}yr ${profile.category.toUpperCase()} relaxation)`;
    }

    if (isNaN(age)) {
      result.warnings.push('Age not provided — age compatibility not verified.');
    } else if (age >= ageMin && age <= effectiveMax) {
      result.matchedCriteria.push(`Age is within range (${ageMin}–${effectiveMax}${relaxNote})`);
      pts += 35;
    } else if (age < ageMin) {
      result.missingCriteria.push(`Minimum age ${ageMin} required — you are ${age}. You may become eligible in the future.`);
      pts -= 30;
    } else {
      result.missingCriteria.push(`Maximum age ${effectiveMax}${relaxNote} — you are ${age}. Age limit exceeded.`);
      pts -= 40;
    }

    // --- 4. STATE / DOMICILE CHECK ---
    if (exam.stateRules.type === 'central') {
      result.matchedCriteria.push('Central exam — state does not restrict eligibility');
      pts += 10;
    } else if (exam.stateRules.type === 'state') {
      const examStates = exam.stateRules.states || [];
      if (!profile.state || profile.state === 'all') {
        result.warnings.push(`This is a state-level exam (${examStates.join('/')}). Verify domicile/state requirements in the official notification.`);
        pts += 5;
      } else if (examStates.includes(profile.state)) {
        result.matchedCriteria.push('State/domicile matches');
        pts += 15;
      } else {
        result.warnings.push(`This exam is primarily for ${examStates.join('/').toUpperCase()} candidates. Domicile requirements may apply — check the official notification.`);
        pts += 2;
      }
    }

    // --- 5. TEACHING QUALIFICATION CHECK ---
    if (exam.qualificationRules.teachingRequired) {
      if (profile.teachingQual) {
        result.matchedCriteria.push('Teaching qualification provided');
        pts += 5;
      } else {
        result.warnings.push('This exam requires specific teaching qualification (B.Ed, D.El.Ed, or equivalent). Verify you meet the post-specific qualification.');
      }
    }

    // --- 6. DETERMINE STATUS FROM SCORE ---
    // Cap score
    pts = Math.max(0, Math.min(100, pts));
    result.score = pts;

    if (result.missingCriteria.length === 0 && pts >= 70) {
      result.status = 'eligible';
    } else if (result.missingCriteria.length === 0 && pts >= 45) {
      result.status = 'near_match';
    } else if (result.missingCriteria.length > 0 && result.matchedCriteria.length > 0 && pts >= 30) {
      result.status = 'near_match';
    } else if (result.missingCriteria.length > 0 && result.matchedCriteria.length === 0) {
      result.status = 'not_eligible';
    } else {
      result.status = 'needs_verification';
    }

    // Add universal disclaimer
    result.warnings.push('Always verify with the latest official notification. Eligibility conditions may change.');

    return result;
  }

  /* ------------------------------------------------------------------ */
  /*  RUN ENGINE — Called by Find My Exams button                       */
  /* ------------------------------------------------------------------ */
  window.runEligibilityEngine = function () {
    const profile = collectProfile();
    if (!profile) return; // Validation failed

    saveProfile(profile);
    showLoading();

    // Small delay to show loading animation
    setTimeout(() => {
      const results = EXAM_DB.map(exam => evaluateEligibility(profile, exam));
      hideLoading();
      renderResults(profile, results);
    }, 900);
  };

  /* ------------------------------------------------------------------ */
  /*  PROFILE COLLECTION                                                  */
  /* ------------------------------------------------------------------ */
  function collectProfile() {
    const edu = document.getElementById('edu')?.value;
    const ageRaw = document.getElementById('age')?.value;
    const state = document.getElementById('state')?.value;

    // Clear previous validation
    clearValidation();

    let valid = true;
    if (!edu) { showValidation('edu', 'Select your highest qualification'); valid = false; }
    if (!ageRaw) { showValidation('age', 'Enter your age'); valid = false; }
    else {
      const age = parseInt(ageRaw);
      if (isNaN(age) || age < 14 || age > 100) { showValidation('age', 'Enter a valid age (14–100)'); valid = false; }
    }
    if (!state) { showValidation('state', 'Select your state / domicile'); valid = false; }

    if (!valid) return null;

    const profile = {
      edu,
      age: parseInt(ageRaw),
      state,
      gender: document.getElementById('ei-gender')?.value || '',
      category: document.getElementById('ei-category')?.value || 'general',
      degreeStream: document.getElementById('ei-degree-stream')?.value || '',
      techQual: document.getElementById('ei-tech-qual')?.value || '',
      teachingQual: document.getElementById('ei-teaching-qual')?.value || ''
    };

    return profile;
  }

  function showValidation(fieldId, msg) {
    const el = document.getElementById(fieldId);
    if (!el) return;
    el.classList.add('ei-input-error');
    const existing = el.parentNode.querySelector('.ei-val-msg');
    if (!existing) {
      const v = document.createElement('div');
      v.className = 'ei-val-msg';
      v.textContent = msg;
      el.insertAdjacentElement('afterend', v);
    }
  }

  function clearValidation() {
    document.querySelectorAll('.ei-input-error').forEach(el => el.classList.remove('ei-input-error'));
    document.querySelectorAll('.ei-val-msg').forEach(el => el.remove());
  }

  /* ------------------------------------------------------------------ */
  /*  PROFILE MEMORY                                                      */
  /* ------------------------------------------------------------------ */
  function saveProfile(profile) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        edu: profile.edu,
        age: profile.age,
        state: profile.state,
        gender: profile.gender,
        category: profile.category
      }));
    } catch (e) {}
  }

  function loadSavedProfile() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { return null; }
  }

  function applyProfileToForm(profile) {
    if (!profile) return;
    const set = (id, val) => { const el = document.getElementById(id); if (el && val) el.value = val; };
    set('edu', profile.edu);
    set('age', profile.age);
    set('state', profile.state);
    set('ei-gender', profile.gender);
    set('ei-category', profile.category);
  }

  /* ------------------------------------------------------------------ */
  /*  LOADING STATE                                                       */
  /* ------------------------------------------------------------------ */
  function showLoading() {
    document.getElementById('ei-results')?.classList.add('hide');
    const loading = document.getElementById('ei-loading');
    if (!loading) return;
    loading.classList.remove('hide');
    const msgs = ['Analyzing your profile…', 'Checking qualification rules…', 'Evaluating age compatibility…', 'Matching state eligibility…', 'Ranking best matches…'];
    let i = 0;
    const span = loading.querySelector('.ei-loading-msg');
    if (span) {
      loading._interval = setInterval(() => {
        if (span) span.textContent = msgs[i % msgs.length];
        i++;
      }, 200);
    }
  }

  function hideLoading() {
    const loading = document.getElementById('ei-loading');
    if (!loading) return;
    if (loading._interval) clearInterval(loading._interval);
    loading.classList.add('hide');
  }

  /* ------------------------------------------------------------------ */
  /*  STATUS HELPERS                                                      */
  /* ------------------------------------------------------------------ */
  const STATUS_META = {
    eligible:           { dot: '🟢', label: 'Strong Match',      cls: 'ei-status-eligible',  groupId: 'ei-group-strong'  },
    near_match:         { dot: '🟡', label: 'Near Match',         cls: 'ei-status-near',      groupId: 'ei-group-near'    },
    needs_verification: { dot: '🔵', label: 'Needs Verification', cls: 'ei-status-verify',    groupId: 'ei-group-verify'  },
    not_eligible:       { dot: '🔴', label: 'Not Eligible',       cls: 'ei-status-not',       groupId: 'ei-group-not'     }
  };

  function appStatusBadge(status) {
    const map = { open: '🟢 Open', upcoming: '⏳ Upcoming', closed: '🔴 Closed', unknown: 'Status Unknown' };
    return map[status] || 'Status Unknown';
  }

  function qualLabel(key) {
    const map = { '8': '8th Pass', '10': '10th Pass', '12': '12th Pass', 'diploma': 'Diploma/ITI', 'iti': 'ITI', 'grad': 'Graduate', 'pg': 'Post Graduate' };
    return map[key] || key;
  }

  /* ------------------------------------------------------------------ */
  /*  RESULT RENDERER                                                     */
  /* ------------------------------------------------------------------ */
  let allResults = [];
  let activeFilter = 'all';
  let searchQuery = '';

  function renderResults(profile, results) {
    allResults = results;

    const counts = { eligible: 0, near_match: 0, needs_verification: 0, not_eligible: 0 };
    results.forEach(r => { if (counts[r.status] !== undefined) counts[r.status]++; });

    const container = document.getElementById('ei-results');
    if (!container) return;
    container.classList.remove('hide');

    // Scroll to results
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });

    container.innerHTML = `
      <!-- Snapshot -->
      <div class="ei-snapshot">
        <div class="ei-snap-profile">
          <span>👤 ${profile.age} yrs</span>
          <span>🎓 ${qualLabel(profile.edu)}</span>
          <span>📍 ${profile.state === 'all' ? 'All India' : profile.state.toUpperCase()}</span>
        </div>
        <div class="ei-snap-counts">
          <div class="ei-snap-count ei-snap-eligible"><span>${counts.eligible}</span><small>Strong Matches</small></div>
          <div class="ei-snap-count ei-snap-near"><span>${counts.near_match}</span><small>Near Matches</small></div>
          <div class="ei-snap-count ei-snap-verify"><span>${counts.needs_verification}</span><small>Need Verification</small></div>
          <div class="ei-snap-count ei-snap-not"><span>${counts.not_eligible}</span><small>Not Eligible</small></div>
        </div>
        <p class="ei-disclaimer">Results based on eligibility rules. <strong>Always verify with the official notification.</strong></p>
      </div>

      <!-- Filters -->
      <div class="ei-filters" id="ei-filter-bar" role="group" aria-label="Filter results">
        <button class="ei-filter active" data-filter="all">All</button>
        <button class="ei-filter" data-filter="eligible">Strong Matches</button>
        <button class="ei-filter" data-filter="near_match">Near Matches</button>
        <button class="ei-filter" data-filter="needs_verification">Need Verification</button>
        <button class="ei-filter" data-filter="not_eligible">Not Eligible</button>
        <button class="ei-filter" data-filter="ssc">SSC</button>
        <button class="ei-filter" data-filter="railway">Railway</button>
        <button class="ei-filter" data-filter="banking">Banking</button>
        <button class="ei-filter" data-filter="police">Police</button>
        <button class="ei-filter" data-filter="teaching">Teaching</button>
        <button class="ei-filter" data-filter="defence">Defence</button>
      </div>

      <!-- Search -->
      <div class="ei-search-row">
        <input id="ei-search-input" class="ei-search" placeholder="🔍 Search exams…" aria-label="Search within results" />
        <select id="ei-sort" class="ei-sort" aria-label="Sort results">
          <option value="score">Best Match</option>
          <option value="appStatus">Application Status</option>
        </select>
      </div>

      <!-- Update Profile Button -->
      <div class="ei-update-row">
        <button class="ei-update-btn" onclick="document.getElementById('ei-results').classList.add('hide'); document.getElementById('ei-find-btn').scrollIntoView({behavior:'smooth'})">🔄 Update My Details</button>
      </div>

      <!-- Results Groups -->
      <div id="ei-cards-container"></div>
    `;

    // Bind filter buttons
    document.querySelectorAll('#ei-filter-bar .ei-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#ei-filter-bar .ei-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        renderCards();
      });
    });

    // Bind search
    document.getElementById('ei-search-input')?.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCards();
    });

    // Bind sort
    document.getElementById('ei-sort')?.addEventListener('change', () => renderCards());

    renderCards();
  }

  function renderCards() {
    const container = document.getElementById('ei-cards-container');
    if (!container) return;

    const sortBy = document.getElementById('ei-sort')?.value || 'score';

    let filtered = allResults.filter(r => {
      // Status filter
      if (activeFilter !== 'all') {
        if (['eligible', 'near_match', 'needs_verification', 'not_eligible'].includes(activeFilter)) {
          if (r.status !== activeFilter) return false;
        } else {
          // Category filter
          if (r.exam.subCategory !== activeFilter) return false;
        }
      }
      // Search filter
      if (searchQuery) {
        const hay = (r.exam.name + ' ' + r.exam.fullName + ' ' + r.exam.recruitingBody + ' ' + r.exam.subCategory).toLowerCase();
        if (!hay.includes(searchQuery)) return false;
      }
      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'score') {
        const order = { eligible: 4, near_match: 3, needs_verification: 2, not_eligible: 1 };
        const od = (order[b.status] || 0) - (order[a.status] || 0);
        return od !== 0 ? od : b.score - a.score;
      }
      if (sortBy === 'appStatus') {
        const ao = { open: 0, upcoming: 1, unknown: 2, closed: 3 };
        return (ao[a.applicationStatus] || 2) - (ao[b.applicationStatus] || 2);
      }
      return 0;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="ei-empty">No exams match the current filter. Try a different category.</div>`;
      return;
    }

    // Group by status
    const groups = [
      { status: 'eligible',           label: '🏆 Best Matches' },
      { status: 'near_match',         label: '⚡ Near Matches' },
      { status: 'needs_verification', label: '🔎 Needs Verification' },
      { status: 'not_eligible',       label: '📌 Not Currently Eligible' }
    ];

    let html = '';
    groups.forEach(group => {
      const groupItems = filtered.filter(r => r.status === group.status);
      if (groupItems.length === 0) return;

      html += `<div class="ei-group-header">${group.label} <span class="ei-group-count">${groupItems.length}</span></div>`;
      html += `<div class="ei-cards-grid">`;
      groupItems.forEach(r => { html += renderCard(r); });
      html += `</div>`;
    });

    container.innerHTML = html;
  }

  function renderCard(r) {
    const meta = STATUS_META[r.status] || STATUS_META.needs_verification;
    const matchedHTML = r.matchedCriteria.map(c => `<div class="ei-criteria ei-crit-match">✓ ${c}</div>`).join('');
    const missingHTML = r.missingCriteria.map(c => `<div class="ei-criteria ei-crit-miss">✕ ${c}</div>`).join('');
    const warningHTML = r.warnings.length > 1
      ? `<div class="ei-crit-check">⚠ Check before applying: ${r.warnings.slice(0, -1).join(' • ')}</div>`
      : '';

    return `
      <div class="ei-card" data-exam-id="${r.exam.id}" aria-label="Exam: ${r.exam.name}, Status: ${meta.label}">
        <div class="ei-card-header">
          <div class="ei-card-left">
            <span class="ei-status-badge ${meta.cls}" role="status" aria-label="${meta.label}">${meta.dot} ${meta.label}</span>
            <h3 class="ei-card-name">${r.exam.name}</h3>
            <p class="ei-card-body">${r.exam.fullName}</p>
            <p class="ei-card-body2">${r.exam.recruitingBody}</p>
          </div>
          <div class="ei-card-right">
            <div class="ei-score-ring" title="Profile match score — not selection probability">
              <svg viewBox="0 0 36 36" aria-hidden="true">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1e293b" stroke-width="3"/>
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="${r.score >= 70 ? '#22c55e' : r.score >= 45 ? '#eab308' : '#ef4444'}" stroke-width="3" stroke-dasharray="${r.score} ${100 - r.score}" stroke-dashoffset="25" stroke-linecap="round"/>
              </svg>
              <span>${r.score}%</span>
            </div>
            <p class="ei-score-label">Profile match</p>
          </div>
        </div>

        <div class="ei-card-criteria">
          ${matchedHTML}
          ${missingHTML}
          ${warningHTML}
        </div>

        <div class="ei-app-status">
          Application: <strong>${appStatusBadge(r.applicationStatus)}</strong>
        </div>

        <div class="ei-card-actions">
          <button class="ei-btn-detail" onclick="openEiDrawer('${r.exam.id}')" aria-label="View details for ${r.exam.name}">View Details</button>
          <button class="ei-btn-ai" onclick="askAiAboutExam('${r.exam.id}')" aria-label="Ask AI about ${r.exam.name}">🤖 Ask AI</button>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------ */
  /*  EXAM DETAIL DRAWER                                                  */
  /* ------------------------------------------------------------------ */
  window.openEiDrawer = function (examId) {
    const result = allResults.find(r => r.exam.id === examId);
    if (!result) return;
    const exam = result.exam;
    const meta = STATUS_META[result.status] || STATUS_META.needs_verification;

    const drawer = document.getElementById('ei-drawer');
    if (!drawer) return;

    const stepsHTML = (exam.selectionProcess || []).map((s, i) => `
      <div class="ei-drawer-step"><span class="ei-drawer-step-num">0${i + 1}</span><span class="ei-drawer-step-name">${s}</span></div>
      ${i < exam.selectionProcess.length - 1 ? '<div class="ei-drawer-step-arrow"></div>' : ''}
    `).join('');

    const physHTML = exam.physicalRules ? `
      <div class="ei-drawer-section">
        <div class="ei-drawer-section-title">Physical Requirements</div>
        <div class="ei-drawer-physical">
          <div class="ei-phys-box"><strong>Male:</strong> ${exam.physicalRules.male}</div>
          <div class="ei-phys-box"><strong>Female:</strong> ${exam.physicalRules.female || 'N/A'}</div>
        </div>
      </div>
    ` : '';

    const matchedHTML = result.matchedCriteria.map(c => `<div class="ei-criteria ei-crit-match">✓ ${c}</div>`).join('');
    const missingHTML = result.missingCriteria.map(c => `<div class="ei-criteria ei-crit-miss">✕ ${c}</div>`).join('');

    drawer.innerHTML = `
      <div class="ei-drawer-inner">
        <div class="ei-drawer-header">
          <button class="ei-drawer-back-btn" onclick="document.getElementById('ei-drawer').classList.add('hide')">← Back to Results</button>
          <span class="ei-status-badge ${meta.cls}">${meta.dot} ${meta.label}</span>
          <h3 class="ei-drawer-title">${exam.name}</h3>
          <p class="ei-drawer-desc">${exam.fullName}</p>
          <p class="ei-drawer-desc" style="color:#94a3b8">${exam.recruitingBody}</p>
        </div>

        <div class="ei-drawer-section">
          <div class="ei-drawer-section-title">Quick Facts</div>
          <div class="ei-drawer-facts-grid">
            <div class="ei-drawer-fact"><span class="ei-drawer-label">Min. Qualification</span><span class="ei-drawer-val">${qualLabel(exam.qualificationRules.minLevel)}</span></div>
            <div class="ei-drawer-fact"><span class="ei-drawer-label">Age Range</span><span class="ei-drawer-val">${exam.ageRules.min}–${exam.ageRules.max} Years</span></div>
            <div class="ei-drawer-fact"><span class="ei-drawer-label">Category</span><span class="ei-drawer-val">${exam.category.charAt(0).toUpperCase() + exam.category.slice(1)}</span></div>
            <div class="ei-drawer-fact"><span class="ei-drawer-label">Application</span><span class="ei-drawer-val">${appStatusBadge(exam.applicationStatus)}</span></div>
          </div>
        </div>

        <div class="ei-drawer-section">
          <div class="ei-drawer-section-title">Qualification Note</div>
          <p class="ei-drawer-text">${exam.qualificationRules.note}</p>
        </div>

        <div class="ei-drawer-section">
          <div class="ei-drawer-section-title">Selection Process</div>
          <div class="ei-drawer-steps">${stepsHTML}</div>
        </div>

        ${physHTML}

        <div class="ei-drawer-section">
          <div class="ei-drawer-section-title">Age Relaxation</div>
          <p class="ei-drawer-text">${Object.entries(exam.ageRules.relaxations).map(([k, v]) => `${k.toUpperCase()}: +${v} years`).join(' | ') || 'See official notification.'} — ${exam.ageRules.note}</p>
        </div>

        <div class="ei-drawer-section">
          <div class="ei-drawer-section-title">State / Domicile</div>
          <p class="ei-drawer-text">${exam.stateRules.note}</p>
        </div>

        <div class="ei-drawer-section">
          <div class="ei-drawer-section-title">Your Match Analysis</div>
          ${matchedHTML}${missingHTML}
        </div>

        <div class="ei-drawer-summary-card">
          <h4>AT A GLANCE</h4>
          <div class="ei-drawer-sc-row"><span>Profile Match Score:</span> <strong>${result.score}%</strong></div>
          <div class="ei-drawer-sc-row"><span>Match Status:</span> <strong>${meta.label}</strong></div>
          <div class="ei-drawer-sc-row"><span>Application Status:</span> <strong>${appStatusBadge(exam.applicationStatus)}</strong></div>
          <div class="ei-drawer-sc-row"><span>Last Data Updated:</span> <strong>${exam.lastUpdated}</strong></div>
        </div>

        <div class="ei-drawer-source">
          <p>Official Source: <a href="${exam.officialWebsite}" target="_blank" rel="noopener">${exam.officialWebsite}</a></p>
          <p class="ei-disclaimer">This is a profile compatibility estimate. Always verify from the official notification.</p>
        </div>

        <div class="ei-drawer-footer">
          <button class="ei-drawer-back-btn" onclick="document.getElementById('ei-drawer').classList.add('hide')">← Back to Results</button>
          <button class="ei-btn-ai" onclick="askAiAboutExam('${exam.id}')" style="margin-left:12px">🤖 Ask AI About This Exam</button>
        </div>
      </div>
    `;

    drawer.classList.remove('hide');
    drawer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ------------------------------------------------------------------ */
  /*  AI BRIDGE — Non-blocking. Uses existing /api/ask-ai endpoint.     */
  /* ------------------------------------------------------------------ */
  window.askAiAboutExam = function (examId) {
    const result = allResults.find(r => r.exam.id === examId);
    const profile = loadSavedProfile() || {};
    if (!result) return;

    const prompt = `
You are SarkariNext AI, a helpful, accurate government exam advisor.

IMPORTANT RULES:
- Do NOT invent eligibility criteria. Use ONLY the data provided.
- Do NOT override the eligibility engine's assessment.
- Explain in simple Hinglish (mix of Hindi and English).
- If data is insufficient, say you need the latest notification.
- Keep the response concise and helpful.
- Add a reminder to verify with the official notification.

User Profile:
- Qualification: ${profile.edu || 'Not specified'}
- Age: ${profile.age || 'Not specified'}
- State: ${profile.state || 'Not specified'}
- Category: ${profile.category || 'General'}

Exam: ${result.exam.name} (${result.exam.fullName})
Recruiting Body: ${result.exam.recruitingBody}
Engine Result: ${STATUS_META[result.status]?.label || result.status} (Match Score: ${result.score}%)
Matched Criteria: ${result.matchedCriteria.join(', ') || 'None'}
Missing Criteria: ${result.missingCriteria.join(', ') || 'None'}
Warnings: ${result.warnings.slice(0, -1).join(', ') || 'None'}
Application Status: ${result.applicationStatus}

Please explain in 3–4 sentences:
1. Why this exam shows this eligibility status for the user.
2. What the user should focus on or verify.
3. A reminder about official notification.
    `.trim();

    // Try to use the existing SarkariNext AI panel
    const aiPanel = document.getElementById('sn-ai-panel');
    const aiInput = document.getElementById('sn-ai-input') || document.querySelector('#sn-ai-panel input[type="text"]');

    if (aiPanel && aiInput) {
      // Open the AI panel if closed
      if (aiPanel.style.display === 'none' || aiPanel.style.display === '') {
        const fab = document.getElementById('sn-ai-fab') || document.querySelector('[id*="fab"]');
        if (fab) fab.click();
      }
      // Pre-fill the message
      aiInput.value = `${result.exam.name} ke liye meri eligibility explain karo. (Profile: ${profile.edu}, Age: ${profile.age}, State: ${profile.state}, Score: ${result.score}%)`;
      aiInput.dispatchEvent(new Event('input'));
      aiPanel.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: open AI chat if function exists
      if (typeof openPage === 'function') {
        // Do nothing — we don't navigate
      }
      // Show a brief inline AI note
      showAiNote(examId, prompt);
    }
  };

  function showAiNote(examId, prompt) {
    const card = document.querySelector(`[data-exam-id="${examId}"] .ei-card-actions`);
    if (!card) return;

    const existing = document.querySelector(`[data-exam-id="${examId}"] .ei-ai-response`);
    if (existing) { existing.remove(); return; }

    const note = document.createElement('div');
    note.className = 'ei-ai-response';
    note.innerHTML = '<div class="ei-ai-loading">🤖 SarkariNext AI is thinking…</div>';
    card.parentNode.insertBefore(note, card.nextSibling);

    fetch(AI_API + '/api/ask-ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt })
    })
      .then(r => r.json())
      .then(data => {
        if (data.reply) {
          note.innerHTML = `<div class="ei-ai-response-text">🤖 <strong>SarkariNext AI:</strong> ${data.reply}</div>`;
        } else {
          note.remove();
        }
      })
      .catch(() => {
        note.innerHTML = `<div class="ei-ai-response-text" style="color:#94a3b8;font-size:12px;">AI unavailable. Eligibility results above are still accurate.</div>`;
      });
  }

  /* ------------------------------------------------------------------ */
  /*  ADVANCED PANEL TOGGLE                                              */
  /* ------------------------------------------------------------------ */
  window.toggleEiAdvanced = function () {
    const panel = document.getElementById('ei-advanced');
    const btn = document.getElementById('ei-adv-toggle');
    if (!panel || !btn) return;
    const open = panel.classList.toggle('ei-adv-open');
    btn.textContent = open ? '− Hide Advanced Details' : '+ Advanced Eligibility Details';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  /* ------------------------------------------------------------------ */
  /*  CONDITIONAL FORM LOGIC                                             */
  /* ------------------------------------------------------------------ */
  function setupConditionalForm() {
    const edu = document.getElementById('edu');
    if (!edu) return;

    edu.addEventListener('change', () => {
      const val = edu.value;
      const streamRow = document.getElementById('ei-stream-row');
      const techRow = document.getElementById('ei-tech-row');
      const teachRow = document.getElementById('ei-teach-row');

      if (streamRow) streamRow.style.display = (val === 'grad' || val === 'pg') ? '' : 'none';
      if (techRow) techRow.style.display = (val === 'diploma' || val === 'iti' || val === '10' || val === '12') ? '' : 'none';
      if (teachRow) teachRow.style.display = (val === 'grad' || val === 'pg') ? '' : 'none';
    });
  }

  /* ------------------------------------------------------------------ */
  /*  INIT ON DOM READY                                                  */
  /* ------------------------------------------------------------------ */
  function init() {
    setupConditionalForm();

    // Restore saved profile if available
    const saved = loadSavedProfile();
    if (saved) {
      applyProfileToForm(saved);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
