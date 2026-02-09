/* ======================================================
   NTA/CBT Style Test Engine (FINAL - ALL EXAMS)
   ✅ No Question Repeat
   ✅ Exam-wise toughness mix
   ✅ Exam-wise subject weight
   ✅ Random paper every time
   ✅ Answer save, review, clear, palette
   ✅ Timer countdown + auto submit (NO alert)
====================================================== */

/* =========================
   EXAM SETTINGS
========================= */
const examConfig = {
  "UP Police":    { timeMin: 120, marksPerQ: 2, negative: 0.5, totalQ: 50 },
  "SSC":          { timeMin: 60,  marksPerQ: 2, negative: 0.5, totalQ: 50 },
  "Railway":      { timeMin: 90,  marksPerQ: 1, negative: 0.33, totalQ: 50 },
  "UPSSSC":       { timeMin: 120, marksPerQ: 2, negative: 0.5, totalQ: 50 },
  "Delhi Police": { timeMin: 90,  marksPerQ: 1, negative: 0.25, totalQ: 50 },
  "Army GD":      { timeMin: 60,  marksPerQ: 2, negative: 0.5, totalQ: 50 }
};

/* =========================
   DIFFICULTY MIX (50 Q)
========================= */
const difficultyMix = {
  "UP Police":    { easy: 20, medium: 20, hard: 10 },
  "SSC":          { easy: 15, medium: 20, hard: 15 },
  "Railway":      { easy: 18, medium: 22, hard: 10 },
  "UPSSSC":       { easy: 20, medium: 20, hard: 10 },
  "Delhi Police": { easy: 18, medium: 20, hard: 12 },
  "Army GD":      { easy: 25, medium: 20, hard: 5 }
};

/* =========================
   EXAM SUBJECT WEIGHT
========================= */
const subjectWeight = {
  "UP Police":    { GK: 0.35, Math: 0.25, Reasoning: 0.25, English: 0.15 },
  "SSC":          { GK: 0.25, Math: 0.30, Reasoning: 0.30, English: 0.15 },
  "Railway":      { GK: 0.30, Math: 0.30, Reasoning: 0.25, English: 0.15 },
  "UPSSSC":       { GK: 0.40, Math: 0.25, Reasoning: 0.20, English: 0.15 },
  "Delhi Police": { GK: 0.35, Math: 0.25, Reasoning: 0.25, English: 0.15 },
  "Army GD":      { GK: 0.45, Math: 0.20, Reasoning: 0.20, English: 0.15 }
};

/* ======================================================
   QUESTION BANK (FINAL STRUCTURE)
   ✅ Yahin questions add karna hai
====================================================== */
const bank = {
  GK: { easy: [], medium: [], hard: [] },
  Math: { easy: [], medium: [], hard: [] },
  Reasoning: { easy: [], medium: [], hard: [] },
  English: { easy: [], medium: [], hard: [] },


  "UP Police": {
    GK: { easy: 7, medium: 8, hard: 3 },
    Math: { easy: 5, medium: 5, hard: 2 },
    Reasoning: { easy: 5, medium: 5, hard: 2 },
    English: { easy: 3, medium: 2, hard: 3 }
  },

  "SSC": {
    GK: { easy: 3, medium: 5, hard: 4 },
    Math: { easy: 4, medium: 6, hard: 5 },
    Reasoning: { easy: 4, medium: 6, hard: 5 },
    English: { easy: 4, medium: 3, hard: 1 }
  },

  "Railway": {
    GK: { easy: 6, medium: 7, hard: 2 },
    Math: { easy: 6, medium: 7, hard: 2 },
    Reasoning: { easy: 4, medium: 6, hard: 2 },
    English: { easy: 2, medium: 2, hard: 4 }
  },

  "UPSSSC": {
    GK: { easy: 8, medium: 8, hard: 4 },
    Math: { easy: 5, medium: 5, hard: 2 },
    Reasoning: { easy: 4, medium: 4, hard: 2 },
    English: { easy: 3, medium: 3, hard: 2 }
  },

  "Delhi Police": {
    GK: { easy: 6, medium: 8, hard: 4 },
    Math: { easy: 4, medium: 5, hard: 3 },
    Reasoning: { easy: 4, medium: 5, hard: 3 },
    English: { easy: 4, medium: 2, hard: 2 }
  },

  "Army GD": {
    GK: { easy: 12, medium: 8, hard: 2 },
    Math: { easy: 6, medium: 3, hard: 1 },
    Reasoning: { easy: 5, medium: 4, hard: 1 },
    English: { easy: 2, medium: 5, hard: 1 }
  }
};


/* ======================================================
   EXAMPLE (REMOVE LATER)
   ⚠️ Only for testing
====================================================== */
// GK
bank.GK.easy.push(
  { q:"भारत की राजधानी क्या है?", options:["Mumbai","Delhi","Lucknow","Patna"], ans:1 },
  { q:"भारत का राष्ट्रीय पशु कौन है?", options:["Lion","Tiger","Elephant","Horse"], ans:1 },
  { q:"भारत की राजधानी क्या है?", options:["Mumbai","Delhi","Lucknow","Patna"], ans:1 },
  { q:"भारत का राष्ट्रीय पशु कौन है?", options:["Lion","Tiger","Elephant","Horse"], ans:1 },
  { q:"ताजमहल कहाँ स्थित है?", options:["Delhi","Agra","Jaipur","Varanasi"], ans:1 },
  { q:"भारत का राष्ट्रीय पक्षी कौन है?", options:["Crow","Peacock","Eagle","Sparrow"], ans:1 },
  { q:"भारत का राष्ट्रीय फूल कौन सा है?", options:["Rose","Lotus","Lily","Sunflower"], ans:1 },
  { q:"भारत का राष्ट्रीय वृक्ष कौन सा है?", options:["Neem","Banyan","Mango","Pine"], ans:1 },
  { q:"भारत का राष्ट्रीय फल कौन सा है?", options:["Apple","Mango","Banana","Orange"], ans:1 },
  { q:"भारत का राष्ट्रीय गीत कौन सा है?", options:["जन गण मन","वंदे मातरम्","ऐ मेरे वतन","सारे जहाँ से अच्छा"], ans:1 },
  { q:"भारत का राष्ट्रीय प्रतीक कहाँ से लिया गया है?", options:["Sanchi","Sarnath","Ajanta","Hampi"], ans:1 },
  { q:"भारत का स्वतंत्रता दिवस कब मनाया जाता है?", options:["26 Jan","15 Aug","2 Oct","14 Nov"], ans:1 },

  { q:"भारत का गणतंत्र दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:1 },
  { q:"भारत का राष्ट्रीय गान किसने लिखा?", options:["Bankim Chandra","Rabindranath Tagore","Premchand","Nehru"], ans:1 },
  { q:"भारत में कुल कितने राज्य हैं?", options:["27","28","29","30"], ans:1 },
  { q:"भारत की मुद्रा क्या है?", options:["Dollar","Rupee","Yen","Euro"], ans:1 },
  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल) कौन सा है?", options:["UP","MP","Rajasthan","Bihar"], ans:2 },

  { q:"भारत की सबसे लंबी नदी कौन सी है?", options:["Yamuna","Ganga","Narmada","Godavari"], ans:1 },
  { q:"भारत का सबसे ऊँचा पर्वत कौन सा है?", options:["Aravali","Himalaya","Vindhya","Satpura"], ans:1 },
  { q:"भारत का सबसे बड़ा महासागर कौन सा है?", options:["Indian","Atlantic","Pacific","Arctic"], ans:2 },
  { q:"भारत का सबसे बड़ा पठार कौन सा है?", options:["Malwa","Deccan","Chota Nagpur","Bundelkhand"], ans:1 },
  { q:"भारत का सबसे बड़ा रेगिस्तान कौन सा है?", options:["Sahara","Thar","Gobi","Kalahari"], ans:1 },

  { q:"भारत का सबसे बड़ा शहर (जनसंख्या) कौन सा है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"गांधी जयंती कब मनाई जाती है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:2 },
  { q:"बाल दिवस कब मनाया जाता है?", options:["14 Nov","2 Oct","15 Aug","26 Jan"], ans:0 },
  { q:"विश्व पर्यावरण दिवस कब मनाया जाता है?", options:["5 June","1 May","15 Aug","2 Oct"], ans:0 },
  { q:"भारत में पहली जनगणना कब हुई?", options:["1872","1881","1891","1901"], ans:1 },

  { q:"भारत के प्रथम राष्ट्रपति कौन थे?", options:["Nehru","Rajendra Prasad","Gandhi","Patel"], ans:1 },
  { q:"भारत के प्रथम प्रधानमंत्री कौन थे?", options:["Nehru","Patel","Gandhi","Azad"], ans:0 },
  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },
  { q:"भारत का पहला उपग्रह कौन सा था?", options:["INSAT","Aryabhata","Rohini","Bhaskara"], ans:1 },
  { q:"भारतीय संविधान कब लागू हुआ?", options:["15 Aug 1947","26 Jan 1950","2 Oct 1949","1 Jan 1951"], ans:1 }
);



bank.GK.medium.push(
  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },
  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },
  { q:"भारतीय रिजर्व बैंक (RBI) की स्थापना कब हुई?", options:["1930","1935","1947","1950"], ans:1 },
  { q:"भारत में पंचवर्षीय योजना कब शुरू हुई?", options:["1947","1951","1955","1960"], ans:1 },
  { q:"भारत का पहला राष्ट्रपति कौन था?", options:["Nehru","Rajendra Prasad","Gandhi","Patel"], ans:1 },
  { q:"भारत का पहला प्रधानमंत्री कौन था?", options:["Nehru","Patel","Gandhi","Azad"], ans:0 },

  { q:"लोकसभा का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:1 },
  { q:"राज्यसभा के सदस्यों का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:2 },
  { q:"भारत की संसद के कुल कितने सदन हैं?", options:["1","2","3","4"], ans:1 },
  { q:"भारत में राष्ट्रपति का चुनाव कौन करता है?", options:["केवल लोकसभा","केवल राज्यसभा","संसद + राज्य विधानसभाएँ","केवल राज्य विधानसभाएँ"], ans:2 },
  { q:"राज्यसभा का सभापति कौन होता है?", options:["President","Vice President","PM","Speaker"], ans:1 },

  { q:"भारत में वित्त आयोग का उल्लेख किस अनुच्छेद में है?", options:["148","280","124","370"], ans:1 },
  { q:"भारत के नियंत्रक एवं महालेखा परीक्षक (CAG) का उल्लेख किस अनुच्छेद में है?", options:["148","280","52","356"], ans:0 },
  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल) कौन सा है?", options:["UP","MP","Rajasthan","Bihar"], ans:2 },
  { q:"भारत का सबसे छोटा राज्य (क्षेत्रफल) कौन सा है?", options:["Goa","Sikkim","Tripura","Manipur"], ans:0 },
  { q:"भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?", options:["UP","Bihar","MP","Rajasthan"], ans:0 },

  { q:"भारत का सबसे बड़ा पठार कौन सा है?", options:["Malwa","Deccan","Chota Nagpur","Bundelkhand"], ans:1 },
  { q:"किस नदी को 'दक्षिण गंगा' कहा जाता है?", options:["Krishna","Godavari","Cauvery","Mahanadi"], ans:1 },
  { q:"भाखड़ा नांगल बाँध किस नदी पर है?", options:["Sutlej","Ganga","Yamuna","Narmada"], ans:0 },
  { q:"तेहरी बाँध किस नदी पर स्थित है?", options:["Yamuna","Bhagirathi","Ganga","Saraswati"], ans:1 },
  { q:"हीराकुंड बाँध किस नदी पर है?", options:["Mahanadi","Godavari","Narmada","Tapti"], ans:0 },

  { q:"चिल्का झील किस राज्य में स्थित है?", options:["Odisha","WB","UP","MP"], ans:0 },
  { q:"भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?", options:["Wular","Dal","Chilika","Loktak"], ans:0 },
  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["Sundarbans","Mahanadi","Godavari","Krishna"], ans:0 },
  { q:"भारत का सबसे बड़ा कोयला क्षेत्र कौन सा है?", options:["Jharia","Raniganj","Bokaro","Singrauli"], ans:0 },
  { q:"भारत का सबसे बड़ा बंदरगाह कौन सा है?", options:["Kandla","Mumbai","Chennai","Kochi"], ans:1 },

  { q:"भारत में योजना आयोग की जगह किसने ली?", options:["NITI Aayog","Finance Commission","CVC","CBI"], ans:0 },
  { q:"निति आयोग की स्थापना कब हुई?", options:["2012","2013","2015","2016"], ans:2 },
  { q:"भारत में हरित क्रांति के जनक कौन हैं?", options:["MS Swaminathan","APJ Abdul Kalam","CV Raman","Homi Bhabha"], ans:0 },
  { q:"भारत का पहला उपग्रह कौन सा था?", options:["INSAT","Aryabhata","Rohini","Bhaskara"], ans:1 },
  { q:"भारत का पहला परमाणु परीक्षण कब हुआ?", options:["1964","1974","1984","1998"], ans:1 }
);



bank.GK.hard.push(
  { q:"CAG का उल्लेख किस अनुच्छेद में है?", options:["148","124","280","370"], ans:0 },
  { q:"CAG का उल्लेख किस अनुच्छेद में है?", options:["148","124","280","370"], ans:0 },
  { q:"भारत में वित्त आयोग का उल्लेख किस अनुच्छेद में है?", options:["280","148","52","356"], ans:0 },
  { q:"भारत के महान्यायवादी (Attorney General) का उल्लेख किस अनुच्छेद में है?", options:["76","124","148","280"], ans:0 },
  { q:"भारत के राष्ट्रपति को क्षमा दान की शक्ति किस अनुच्छेद में है?", options:["72","74","76","80"], ans:0 },
  { q:"राज्यपाल को क्षमा दान की शक्ति किस अनुच्छेद में है?", options:["161","168","154","356"], ans:0 },

  { q:"मौलिक अधिकार संविधान के किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },
  { q:"नीति निदेशक तत्व संविधान के किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },
  { q:"मौलिक कर्तव्य संविधान के किस भाग में हैं?", options:["Part III","Part IVA","Part IV","Part V"], ans:1 },
  { q:"भारत का संविधान कब लागू हुआ?", options:["15 Aug 1947","26 Jan 1950","2 Oct 1949","1 Jan 1951"], ans:1 },
  { q:"भारतीय संविधान सभा के अध्यक्ष कौन थे?", options:["Nehru","Rajendra Prasad","Ambedkar","Patel"], ans:1 },

  { q:"संविधान का मसौदा समिति (Drafting Committee) के अध्यक्ष कौन थे?", options:["B.R. Ambedkar","Nehru","Rajendra Prasad","Patel"], ans:0 },
  { q:"भारत का संविधान किस देश के संविधान से सर्वाधिक प्रभावित है?", options:["USA","UK","Canada","France"], ans:1 },
  { q:"संविधान में आपातकाल (Emergency) का उल्लेख किस भाग में है?", options:["Part XVIII","Part XVII","Part XIX","Part XVI"], ans:0 },
  { q:"राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","370"], ans:0 },
  { q:"राष्ट्रपति शासन किस अनुच्छेद में लगाया जाता है?", options:["352","356","360","368"], ans:1 },

  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","370"], ans:2 },
  { q:"संविधान संशोधन की प्रक्रिया किस अनुच्छेद में है?", options:["368","370","356","352"], ans:0 },
  { q:"संसद के दोनों सदनों की संयुक्त बैठक का उल्लेख किस अनुच्छेद में है?", options:["108","109","110","111"], ans:0 },
  { q:"धन विधेयक (Money Bill) किस अनुच्छेद में परिभाषित है?", options:["109","110","111","112"], ans:1 },
  { q:"संघ लोक सेवा आयोग (UPSC) का उल्लेख किस भाग में है?", options:["Part XIV","Part XV","Part XVI","Part XVII"], ans:0 },

  { q:"भारत के उच्चतम न्यायालय (Supreme Court) का उल्लेख किस भाग में है?", options:["Part V","Part VI","Part IV","Part III"], ans:0 },
  { q:"भारत के उच्च न्यायालयों का उल्लेख किस भाग में है?", options:["Part V","Part VI","Part VII","Part VIII"], ans:1 },
  { q:"संविधान में चुनाव आयोग का उल्लेख किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"वयस्क मताधिकार (Adult Franchise) किस अनुच्छेद में है?", options:["324","325","326","327"], ans:2 },
  { q:"अनुसूचित जाति/जनजाति के लिए आरक्षण का उल्लेख किस अनुच्छेद में है?", options:["330","332","334","335"], ans:1 },

  { q:"लोकसभा अध्यक्ष (Speaker) का उल्लेख किस अनुच्छेद में है?", options:["93","94","95","96"], ans:0 },
  { q:"राज्यसभा के उपसभापति (Deputy Chairman) का उल्लेख किस अनुच्छेद में है?", options:["64","89","90","93"], ans:2 },
  { q:"भारत के उपराष्ट्रपति का उल्लेख किस अनुच्छेद में है?", options:["52","63","74","80"], ans:1 },
  { q:"भारत के प्रधानमंत्री का उल्लेख संविधान में कहाँ आता है?", options:["Article 74","Article 75","Article 76","Article 78"], ans:1 },
  { q:"मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?", options:["President","Rajya Sabha","Lok Sabha","Supreme Court"], ans:2 },

  { q:"राज्यों की सूची (State List) किस अनुसूची में है?", options:["7th","8th","9th","10th"], ans:0 },
  { q:"संघ सूची (Union List) किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:1 },
  { q:"समवर्ती सूची (Concurrent List) किस अनुसूची में है?", options:["5th","6th","7th","8th"], ans:2 },
  { q:"भाषाओं की सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:2 },
  { q:"भारत के राष्ट्रीय प्रतीक (Ashoka Lion Capital) को किस स्थान से लिया गया?", options:["Sanchi","Sarnath","Ajanta","Mathura"], ans:1 }
);



// Math
bank.Math.easy.push(
  { q:"15 + 25 = ?", options:["30","35","40","45"], ans:2 },
  { q:"15 + 25 = ?", options:["30","35","40","45"], ans:2 },
  { q:"18 + 27 = ?", options:["35","40","45","50"], ans:2 },
  { q:"56 - 19 = ?", options:["35","36","37","38"], ans:2 },
  { q:"72 ÷ 9 = ?", options:["6","7","8","9"], ans:2 },
  { q:"8 × 12 = ?", options:["84","92","96","108"], ans:2 },

  { q:"25% of 200 = ?", options:["25","40","50","60"], ans:2 },
  { q:"10% of 350 = ?", options:["25","30","35","40"], ans:2 },
  { q:"20% of 450 = ?", options:["80","85","90","95"], ans:2 },
  { q:"5% of 600 = ?", options:["20","25","30","35"], ans:2 },
  { q:"12.5% of 240 = ?", options:["20","25","30","35"], ans:2 },

  { q:"3/5 of 250 = ?", options:["120","130","140","150"], ans:3 },
  { q:"2/3 of 180 = ?", options:["100","110","120","130"], ans:2 },
  { q:"4/7 of 350 = ?", options:["150","180","200","250"], ans:2 },
  { q:"5/8 of 320 = ?", options:["180","200","220","240"], ans:1 },
  { q:"7/10 of 500 = ?", options:["300","320","350","400"], ans:2 },

  { q:"यदि 3x = 45 तो x = ?", options:["10","12","15","18"], ans:2 },
  { q:"यदि 5x = 80 तो x = ?", options:["14","15","16","18"], ans:2 },
  { q:"यदि x/4 = 9 तो x = ?", options:["30","32","34","36"], ans:3 },
  { q:"यदि 2x + 5 = 25 तो x = ?", options:["8","9","10","12"], ans:2 },
  { q:"यदि 3x - 7 = 20 तो x = ?", options:["7","8","9","10"], ans:2 },

  { q:"एक संख्या का 40% = 120 है, संख्या = ?", options:["200","250","300","350"], ans:2 },
  { q:"एक संख्या का 25% = 75 है, संख्या = ?", options:["200","250","300","350"], ans:1 },
  { q:"एक संख्या का 20% = 90 है, संख्या = ?", options:["350","400","450","500"], ans:2 },
  { q:"एक संख्या का 15% = 60 है, संख्या = ?", options:["350","400","450","500"], ans:1 },
  { q:"एक संख्या का 12% = 48 है, संख्या = ?", options:["350","380","400","420"], ans:2 },

  { q:"Ratio 3:5 में कुल 64 है, पहला भाग = ?", options:["18","20","24","28"], ans:2 },
  { q:"Ratio 2:7 में कुल 81 है, बड़ा भाग = ?", options:["49","56","63","72"], ans:2 },
  { q:"Ratio 4:9 में कुल 65 है, छोटा भाग = ?", options:["20","24","26","28"], ans:0 },
  { q:"Average of 12, 18, 24 = ?", options:["16","18","20","22"], ans:1 },
  { q:"Average of 25, 35, 45 = ?", options:["30","35","40","45"], ans:2 }
);



bank.Math.medium.push(
  { q:"SI: P=500, R=10%, T=2 => SI=?", options:["50","80","100","120"], ans:2 },
  { q:"SI: P=500, R=10%, T=2 => SI=?", options:["50","80","100","120"], ans:2 },
  { q:"SI: P=800, R=5%, T=3 => SI=?", options:["100","110","120","130"], ans:2 },
  { q:"SI: P=1200, R=8%, T=2 => SI=?", options:["160","180","192","200"], ans:2 },
  { q:"SI: P=1500, R=6%, T=4 => SI=?", options:["300","320","360","400"], ans:2 },
  { q:"SI: P=2000, R=7%, T=2 => SI=?", options:["240","260","280","300"], ans:2 },

  { q:"यदि CP=400 और Profit=15% तो SP=?", options:["440","450","460","480"], ans:2 },
  { q:"यदि CP=600 और Loss=10% तो SP=?", options:["520","530","540","550"], ans:3 },
  { q:"यदि SP=720 और Profit=20% तो CP=?", options:["560","580","600","620"], ans:2 },
  { q:"यदि SP=540 और Loss=10% तो CP=?", options:["580","590","600","610"], ans:2 },
  { q:"यदि CP=750 और Profit=12% तो SP=?", options:["820","830","840","860"], ans:2 },

  { q:"Speed=48 km/h, Time=2.5 h => Distance=?", options:["100","110","120","130"], ans:2 },
  { q:"Speed=60 km/h, Time=1.5 h => Distance=?", options:["80","85","90","95"], ans:2 },
  { q:"Distance=150 km, Speed=50 km/h => Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Distance=240 km, Time=4 h => Speed=?", options:["50","55","60","65"], ans:2 },
  { q:"Speed=72 km/h, Time=3 h => Distance=?", options:["180","200","216","240"], ans:2 },

  { q:"यदि 15% = 60 तो संख्या=?", options:["350","380","400","420"], ans:2 },
  { q:"यदि 12% = 72 तो संख्या=?", options:["500","550","600","650"], ans:2 },
  { q:"यदि 20% = 90 तो संख्या=?", options:["350","400","450","500"], ans:2 },
  { q:"यदि 25% = 125 तो संख्या=?", options:["400","450","500","550"], ans:2 },
  { q:"यदि 30% = 150 तो संख्या=?", options:["450","480","500","520"], ans:2 },

  { q:"Ratio 3:5 में कुल 96 है, पहला भाग=?", options:["32","34","36","40"], ans:2 },
  { q:"Ratio 2:3 में कुल 55 है, बड़ा भाग=?", options:["30","32","33","35"], ans:2 },
  { q:"Ratio 4:7 में कुल 99 है, छोटा भाग=?", options:["33","36","38","44"], ans:0 },
  { q:"Ratio 5:6 में कुल 132 है, बड़ा भाग=?", options:["66","72","78","84"], ans:2 },
  { q:"Ratio 7:9 में कुल 128 है, छोटा भाग=?", options:["49","56","63","64"], ans:1 },

  { q:"Average of 18, 22, 26, 30 = ?", options:["22","23","24","25"], ans:2 },
  { q:"Average of 15, 25, 35 = ?", options:["20","25","30","35"], ans:1 },
  { q:"Average of 12, 16, 20, 24, 28 = ?", options:["18","19","20","21"], ans:2 },
  { q:"Average of 40, 45, 50, 55 = ?", options:["45","47.5","50","52.5"], ans:1 },
  { q:"Average of 21, 27, 33 = ?", options:["25","26","27","28"], ans:2 }
);



bank.Math.hard.push(
  { q:"CI approx: P=1000, R=10%, T=2 => Amount?", options:["1100","1200","1210","1300"], ans:2 },
  { q:"CI: P=1000, R=10%, T=2 => Amount?", options:["1100","1200","1210","1300"], ans:2 },
  { q:"CI: P=2000, R=5%, T=2 => Amount?", options:["2100","2200","2050","2205"], ans:3 },
  { q:"CI: P=5000, R=10%, T=1 => Amount?", options:["5200","5400","5500","5600"], ans:2 },
  { q:"CI: P=8000, R=5%, T=3 => Amount?", options:["9000","9200","9261","9300"], ans:2 },
  { q:"CI: P=4000, R=8%, T=2 => Amount?", options:["4600","4665.6","4800","4900"], ans:1 },

  { q:"Train speed 72 km/h crosses 180m platform in 18 sec. Length?", options:["120m","140m","160m","180m"], ans:2 },
  { q:"Train speed 54 km/h crosses a pole in 10 sec. Length?", options:["120m","130m","140m","150m"], ans:0 },
  { q:"Train 60 km/h crosses 300m platform in 30 sec. Length?", options:["150m","180m","200m","250m"], ans:0 },
  { q:"Train 90 km/h crosses a pole in 12 sec. Length?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"Train 108 km/h crosses 330m platform in 20 sec. Length?", options:["200m","240m","270m","300m"], ans:2 },

  { q:"Pipe A fills tank in 12h, B fills in 18h. Together time?", options:["6h","7.2h","8h","9h"], ans:1 },
  { q:"Pipe A fills in 10h, outlet empties in 15h. Net time?", options:["25h","30h","20h","18h"], ans:2 },
  { q:"A fills in 8h, B empties in 12h. Net time?", options:["20h","24h","18h","16h"], ans:3 },
  { q:"A fills in 6h, B fills in 9h. Together time?", options:["3.6h","4h","4.5h","5h"], ans:0 },
  { q:"A fills in 15h, B fills in 20h. Together time?", options:["8h","8.57h","9h","10h"], ans:1 },

  { q:"If (x+y)=18 and (x-y)=6 then x=?", options:["10","11","12","13"], ans:1 },
  { q:"If 3x+5=32 then x=?", options:["7","8","9","10"], ans:1 },
  { q:"If 5x-15=60 then x=?", options:["12","13","14","15"], ans:0 },
  { q:"If 2x+3=27 then x=?", options:["10","11","12","13"], ans:1 },
  { q:"If x/3 + 4 = 10 then x=?", options:["12","15","18","21"], ans:2 },

  { q:"A sold item at 20% profit. If SP=720 then CP=?", options:["580","600","620","650"], ans:1 },
  { q:"A sold item at 25% loss. If SP=600 then CP=?", options:["700","750","800","850"], ans:1 },
  { q:"Marked price 1000, discount 20%. SP=?", options:["700","750","800","850"], ans:2 },
  { q:"Marked price 1500, discount 10%. SP=?", options:["1250","1300","1350","1400"], ans:2 },
  { q:"CP=900, profit=15%. SP=?", options:["1000","1035","1050","1100"], ans:1 },

  { q:"Two numbers ratio 7:11, sum=162. Bigger number?", options:["88","99","110","121"], ans:2 },
  { q:"Two numbers ratio 5:8, difference=39. Bigger number?", options:["60","65","72","80"], ans:3 },
  { q:"Two numbers ratio 3:4, sum=140. Smaller number?", options:["50","60","70","80"], ans:1 },
  { q:"Two numbers ratio 9:13, sum=176. Smaller number?", options:["72","78","81","88"], ans:0 },
  { q:"Two numbers ratio 4:9, difference=55. Smaller number?", options:["40","44","45","50"], ans:1 },

  { q:"A can do work in 12 days, B in 18 days. Together time?", options:["7.2","8","9","10"], ans:0 },
  { q:"A can do in 10 days, B in 15 days. Together time?", options:["5","6","7","8"], ans:1 },
  { q:"A does work in 16 days, B in 24 days. Together time?", options:["9.6","10","11","12"], ans:0 },
  { q:"A can do in 20 days, B in 30 days. Together time?", options:["10","12","15","18"], ans:1 },
  { q:"A can do in 9 days, B in 6 days. Together time?", options:["3.6","4","4.5","5"], ans:0 }
);



// Reasoning
bank.Reasoning.easy.push(
  { q:"Series: 2,4,6,8, ?", options:["9","10","11","12"], ans:1 },
  { q:"Series: 2,4,6,8, ?", options:["9","10","11","12"], ans:1 },
  { q:"Series: 5,10,15,20, ?", options:["22","24","25","30"], ans:2 },
  { q:"Series: 3,6,9,12, ?", options:["14","15","16","18"], ans:1 },
  { q:"Series: 1,4,7,10, ?", options:["12","13","14","15"], ans:1 },
  { q:"Series: 10,20,30,40, ?", options:["45","50","55","60"], ans:1 },

  { q:"Odd one out: Apple, Mango, Carrot, Banana", options:["Apple","Mango","Carrot","Banana"], ans:2 },
  { q:"Odd one out: 2, 4, 6, 9", options:["2","4","6","9"], ans:3 },
  { q:"Odd one out: Pen, Pencil, Eraser, Spoon", options:["Pen","Pencil","Eraser","Spoon"], ans:3 },
  { q:"Odd one out: Circle, Square, Triangle, Mango", options:["Circle","Square","Triangle","Mango"], ans:3 },
  { q:"Odd one out: 11, 13, 17, 21", options:["11","13","17","21"], ans:3 },

  { q:"If A=1, B=2 then D=?", options:["2","3","4","5"], ans:2 },
  { q:"If C=3, F=?", options:["5","6","7","8"], ans:1 },
  { q:"If Z=26 then Y=?", options:["23","24","25","26"], ans:2 },
  { q:"If M=13 then P=?", options:["14","15","16","17"], ans:2 },
  { q:"If H=8 then K=?", options:["9","10","11","12"], ans:2 },

  { q:"Opposite of East?", options:["North","South","West","None"], ans:2 },
  { q:"Opposite of North?", options:["East","West","South","None"], ans:2 },
  { q:"Opposite of Up?", options:["Down","Left","Right","None"], ans:0 },
  { q:"Day after Monday?", options:["Tuesday","Wednesday","Thursday","Friday"], ans:0 },
  { q:"Day before Sunday?", options:["Friday","Saturday","Monday","Tuesday"], ans:1 },

  { q:"Which is bigger: 0.5 or 0.05?", options:["0.05","0.5","Equal","None"], ans:1 },
  { q:"How many letters in word 'INDIA'?", options:["3","4","5","6"], ans:2 },
  { q:"How many sides in triangle?", options:["2","3","4","5"], ans:1 },
  { q:"How many months in a year?", options:["10","11","12","13"], ans:2 },
  { q:"How many days in a week?", options:["5","6","7","8"], ans:2 },

  { q:"Find next: 12, 24, 36, 48, ?", options:["54","56","60","72"], ans:2 },
  { q:"Find next: 1, 2, 4, 8, ?", options:["10","12","14","16"], ans:3 },
  { q:"Find next: 7, 14, 21, 28, ?", options:["32","35","36","40"], ans:1 },
  { q:"Find next: 9, 18, 27, 36, ?", options:["40","45","48","54"], ans:1 },
  { q:"Find next: 6, 12, 18, 24, ?", options:["28","30","32","36"], ans:1 }
);



bank.Reasoning.medium.push(
  { q:"Coding: CAT = DBU, DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Coding: CAT = DBU, DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Coding: BAT = CBV, RAT = ?", options:["SBU","SBU","SBU","SBU"], ans:0 },
  { q:"Coding: PEN = QFO, INK = ?", options:["JOL","JML","JNK","JNL"], ans:0 },
  { q:"Coding: MAN = NBO, SUN = ?", options:["TVO","TVP","UVP","TWP"], ans:1 },
  { q:"Coding: BOOK = CPPL, HOME = ?", options:["IPNF","IPNE","HPNE","HPNF"], ans:0 },

  { q:"Find missing: 3, 6, 12, 24, ?", options:["36","40","48","50"], ans:2 },
  { q:"Find missing: 5, 10, 20, 40, ?", options:["60","70","80","90"], ans:2 },
  { q:"Find missing: 2, 6, 18, 54, ?", options:["108","144","162","216"], ans:2 },
  { q:"Find missing: 7, 14, 28, 56, ?", options:["84","98","112","120"], ans:2 },
  { q:"Find missing: 1, 4, 9, 16, ?", options:["20","25","30","36"], ans:1 },

  { q:"Mirror image is related to?", options:["Reflection","Rotation","Translation","None"], ans:0 },
  { q:"Which is water transport?", options:["Bus","Train","Ship","Car"], ans:2 },
  { q:"Which is a metal?", options:["Wood","Plastic","Iron","Rubber"], ans:2 },
  { q:"Which is a fruit?", options:["Potato","Onion","Mango","Carrot"], ans:2 },
  { q:"Which is a bird?", options:["Dog","Cat","Crow","Cow"], ans:2 },

  { q:"If TODAY is coded as UPEBZ, then DAY is?", options:["EBZ","EBX","DBZ","FBA"], ans:0 },
  { q:"If 1=3, 2=5, 3=7 then 4=?", options:["8","9","10","11"], ans:1 },
  { q:"Which number comes next: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },
  { q:"Series: 4,9,16,25, ?", options:["30","35","36","49"], ans:2 },
  { q:"Series: 6,11,16,21, ?", options:["24","25","26","27"], ans:1 },

  { q:"A is taller than B, B taller than C. Who is tallest?", options:["A","B","C","None"], ans:0 },
  { q:"A is shorter than B, B shorter than C. Who is shortest?", options:["A","B","C","None"], ans:0 },
  { q:"Which comes next: AZ, BY, CX, ?", options:["DW","EV","FU","GV"], ans:0 },
  { q:"Which comes next: 1A, 2B, 3C, ?", options:["4D","5E","6F","7G"], ans:0 },
  { q:"Which comes next: AB, CD, EF, ?", options:["GH","GI","HG","HI"], ans:0 },

  { q:"If 12 is coded as 21, 34 as 43 then 56 as?", options:["65","66","55","76"], ans:0 },
  { q:"If 23 is coded as 32, 45 as 54 then 67 as?", options:["76","77","66","87"], ans:0 },
  { q:"If A=26, B=25 then C=?", options:["24","23","22","21"], ans:0 },
  { q:"If 5 is added to 9 then result is?", options:["12","13","14","15"], ans:2 },
  { q:"If 18 is divided by 3 then result is?", options:["5","6","7","8"], ans:1 },

  { q:"Find missing: 10, 20, 40, 80, ?", options:["120","140","160","180"], ans:2 },
  { q:"Find missing: 9, 18, 36, 72, ?", options:["90","108","144","150"], ans:2 },
  { q:"Find missing: 8, 16, 24, 32, ?", options:["36","40","48","56"], ans:1 },
  { q:"Find missing: 15, 30, 45, 60, ?", options:["65","70","75","80"], ans:2 },
  { q:"Find missing: 2, 5, 8, 11, ?", options:["12","13","14","15"], ans:2 }
);



bank.Reasoning.hard.push(
  { q:"Blood relation: A brother of B, B mother of C. A is ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },
  { q:"Blood relation: A brother of B, B mother of C. A is ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },
  { q:"P is sister of Q, Q is father of R. P is R's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"A is father of B, B is brother of C. A is C's ?", options:["Uncle","Father","Brother","Cousin"], ans:1 },
  { q:"X is mother of Y, Y is sister of Z. X is Z's ?", options:["Mother","Aunt","Sister","Grandmother"], ans:0 },
  { q:"M is brother of N, N is mother of P. M is P's ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },

  { q:"Direction: 5km E, 3km N, 5km W. Position?", options:["3km North","5km East","2km South","3km South"], ans:0 },
  { q:"A walks 10m N, 10m E, 10m S, 10m W. Distance from start?", options:["0","10","20","40"], ans:0 },
  { q:"A goes 6km North, 8km East. Distance from start?", options:["10km","12km","14km","16km"], ans:0 },
  { q:"A goes 4km East, 3km North. Distance from start?", options:["5km","6km","7km","8km"], ans:0 },
  { q:"A goes 7km West, 24km North. Distance from start?", options:["23km","24km","25km","26km"], ans:2 },

  { q:"Statement: All cats are animals. Some animals are dogs. Conclusion?", options:["Valid","Invalid","Both","None"], ans:3 },
  { q:"All pens are tools. Some tools are books. Conclusion?", options:["All pens are books","Some pens are books","No pen is book","None"], ans:3 },
  { q:"All apples are fruits. Some fruits are sweet. Conclusion?", options:["All apples sweet","Some apples sweet","No apples sweet","None"], ans:3 },
  { q:"All cars are vehicles. Some vehicles are bikes. Conclusion?", options:["All cars are bikes","Some cars are bikes","No car is bike","None"], ans:3 },
  { q:"All boys are students. Some students are players. Conclusion?", options:["All boys players","Some boys players","No boys players","None"], ans:3 },

  { q:"Find missing: 2, 5, 11, 23, ?", options:["45","46","47","48"], ans:2 },
  { q:"Find missing: 1, 3, 7, 15, ?", options:["25","31","33","35"], ans:1 },
  { q:"Find missing: 4, 9, 19, 39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 3, 8, 18, 38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 5, 12, 26, 54, ?", options:["98","108","110","112"], ans:1 },

  { q:"If SOUTH is written as TQVUI, then NORTH is?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"If INDIA is coded as JOEJB, then CHINA is?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If DELHI is coded as EFMJI, then PATNA is?", options:["QBUOB","QBUOB","QBUOB","QBUOB"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },
  { q:"If 579 is coded as 6810 then 468 is coded as?", options:["579","579","5710","5799"], ans:0 },

  { q:"Which comes next: A1, C3, E5, ?", options:["F6","G7","H8","I9"], ans:1 },
  { q:"Which comes next: Z1, X3, V5, ?", options:["U6","T7","S7","T9"], ans:1 },
  { q:"Which comes next: 2A, 4C, 6E, ?", options:["8G","8F","10G","10H"], ans:1 },
  { q:"Which comes next: 3D, 6G, 9J, ?", options:["12L","12M","12K","15M"], ans:2 },
  { q:"Which comes next: AB2, CD4, EF6, ?", options:["GH8","GI8","HG8","HI8"], ans:0 },

  { q:"A is 2nd to left of B, B is 3rd to right of C. A is ?", options:["Left of C","Right of C","Same position","Cannot say"], ans:0 },
  { q:"In a row, P is 5th from left and Q is 7th from left. Q is ?", options:["2 left of P","2 right of P","Same","Cannot say"], ans:1 },
  { q:"In a row, A is 3rd from left, B is 5th from right. Total 7. A is ?", options:["Same as B","Left of B","Right of B","Cannot say"], ans:0 },
  { q:"In a row, R is 4th from left, S is 3rd from right. Total 8. R is ?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },
  { q:"In a row, M is 6th from left, N is 4th from left. N is ?", options:["2 left of M","2 right of M","Same","Cannot say"], ans:0 }
);



// English
bank.English.easy.push(
  { q:"Synonym of FAST?", options:["Quick","Slow","Weak","Cold"], ans:0 },
  { q:"Synonym of FAST?", options:["Quick","Slow","Weak","Cold"], ans:0 },
  { q:"Synonym of HAPPY?", options:["Sad","Joyful","Angry","Weak"], ans:1 },
  { q:"Synonym of SMALL?", options:["Tiny","Huge","Big","Large"], ans:0 },
  { q:"Synonym of BEGIN?", options:["Start","Stop","End","Close"], ans:0 },
  { q:"Synonym of HELP?", options:["Assist","Hurt","Break","Stop"], ans:0 },

  { q:"Antonym of BIG?", options:["Large","Huge","Small","Heavy"], ans:2 },
  { q:"Antonym of HOT?", options:["Cold","Warm","Heat","Cool"], ans:0 },
  { q:"Antonym of UP?", options:["Down","Left","Right","Top"], ans:0 },
  { q:"Antonym of DAY?", options:["Night","Sun","Light","Time"], ans:0 },
  { q:"Antonym of CLEAN?", options:["Dirty","Fresh","Pure","Clear"], ans:0 },

  { q:"Fill: I ___ a book.", options:["read","reads","reading","readed"], ans:0 },
  { q:"Fill: He ___ tea.", options:["drink","drinks","drinking","drank"], ans:1 },
  { q:"Fill: We ___ friends.", options:["is","are","was","be"], ans:1 },
  { q:"Fill: She ___ to school.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: They ___ playing.", options:["is","are","was","be"], ans:1 },

  { q:"Plural of Child?", options:["Childs","Children","Childrens","Childes"], ans:1 },
  { q:"Plural of Man?", options:["Mans","Mens","Men","Manes"], ans:2 },
  { q:"Plural of Woman?", options:["Womans","Women","Womens","Womanes"], ans:1 },
  { q:"Plural of Foot?", options:["Foots","Feets","Feet","Fets"], ans:2 },
  { q:"Plural of Tooth?", options:["Tooths","Teeth","Toothes","Toothes"], ans:1 },

  { q:"Opposite of TRUE?", options:["False","Right","Sure","Pure"], ans:0 },
  { q:"Opposite of OLD?", options:["New","Young","Fresh","All"], ans:1 },
  { q:"Opposite of OPEN?", options:["Close","Shut","Both","None"], ans:2 },
  { q:"Opposite of LIGHT?", options:["Bright","Dark","White","Clear"], ans:1 },
  { q:"Opposite of RICH?", options:["Poor","Strong","Big","Happy"], ans:0 },

  { q:"One word: A place where books are kept", options:["Library","School","Office","Bank"], ans:0 },
  { q:"One word: A person who teaches", options:["Teacher","Doctor","Driver","Painter"], ans:0 },
  { q:"One word: A person who writes poems", options:["Poet","Singer","Dancer","Player"], ans:0 },
  { q:"One word: A person who drives a car", options:["Driver","Pilot","Cook","Guard"], ans:0 },
  { q:"One word: A person who works in a hospital", options:["Doctor","Teacher","Farmer","Singer"], ans:0 }
);



bank.English.medium.push(
  { q:"Fill: He ___ to school daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: He ___ to school daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Choose correct: I have ___ my work.", options:["done","do","did","doing"], ans:0 },
  { q:"Choose correct: She is ___ honest girl.", options:["a","an","the","no"], ans:1 },
  { q:"Fill: The sun ___ in the east.", options:["rise","rises","rising","rose"], ans:1 },
  { q:"Fill: They ___ watching TV.", options:["is","are","was","be"], ans:1 },

  { q:"Correct: I ___ a letter yesterday.", options:["write","writes","wrote","written"], ans:2 },
  { q:"Correct: She ___ not come.", options:["do","does","did","done"], ans:1 },
  { q:"Correct: We ___ late today.", options:["is","are","was","be"], ans:1 },
  { q:"Correct: He ___ been to Delhi.", options:["has","have","had","having"], ans:0 },
  { q:"Correct: They ___ finished the work.", options:["has","have","had","having"], ans:1 },

  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },
  { q:"Synonym of DANGER?", options:["Risk","Safe","Good","Peace"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },

  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },

  { q:"Correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  { q:"Choose correct: He is good ___ Maths.", options:["in","at","on","for"], ans:1 },
  { q:"Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"Choose correct: She is married ___ him.", options:["with","to","by","on"], ans:1 }
);



bank.English.hard.push(
  { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'abandon'?", options:["leave","eat","run","build"], ans:0 },
  { q:"Meaning of 'transparent'?", options:["clear","dirty","heavy","weak"], ans:0 },
  { q:"Meaning of 'persistent'?", options:["continuous","lazy","weak","slow"], ans:0 },
  { q:"Meaning of 'fragile'?", options:["strong","breakable","heavy","fast"], ans:1 },

  { q:"Correct passive: 'They made a plan.'", options:["A plan made","A plan was made","Plan is made","Plan made"], ans:1 },
  { q:"Correct passive: 'He writes a letter.'", options:["A letter is written by him","A letter was written","A letter written","Letter is wrote"], ans:0 },
  { q:"Correct passive: 'She cooks food.'", options:["Food cooked","Food is cooked","Food was cooked","Food is cook"], ans:1 },
  { q:"Correct passive: 'They help me.'", options:["I am helped by them","I helped by them","I was help by them","I is helped"], ans:0 },
  { q:"Correct passive: 'We play cricket.'", options:["Cricket played","Cricket is played","Cricket was play","Cricket is play"], ans:1 },

  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Optimist","Philanthropist","Pessimist"], ans:0 },
  { q:"One word: One who loves books", options:["Bibliophile","Philosopher","Librarian","Editor"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: One who can do many works", options:["Versatile","Lazy","Weak","Slow"], ans:0 },

  { q:"Choose correct: He insisted ___ going.", options:["in","on","at","for"], ans:1 },
  { q:"Choose correct: She is capable ___ doing it.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He is responsible ___ this.", options:["in","at","for","of"], ans:2 },
  { q:"Choose correct: She is angry ___ me.", options:["with","at","for","to"], ans:0 },
  { q:"Choose correct: He is afraid ___ failure.", options:["in","at","of","for"], ans:2 },

  { q:"Spot error: He do not like tea.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 },

  { q:"Choose correct: If I ___ rich, I would help you.", options:["am","was","were","be"], ans:2 },
  { q:"Choose correct: He said that he ___ busy.", options:["is","was","were","be"], ans:1 },
  { q:"Choose correct: I wish I ___ a car.", options:["have","had","has","having"], ans:1 },
  { q:"Choose correct: It is time we ___ home.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: She suggested that he ___ rest.", options:["take","takes","took","taken"], ans:0 }
);
// =========================
// UP POLICE - ADD QUESTIONS
// =========================

// GK (UP Police level)
bank.GK.easy.push(
  { q:"UP Police GK Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"भारत की राजधानी क्या है?", options:["Mumbai","Delhi","Lucknow","Patna"], ans:1 },
  { q:"भारत का राष्ट्रीय पशु कौन है?", options:["Lion","Tiger","Elephant","Horse"], ans:1 },
  { q:"भारत का राष्ट्रीय पक्षी कौन है?", options:["Crow","Peacock","Eagle","Sparrow"], ans:1 },
  { q:"ताजमहल कहाँ स्थित है?", options:["Delhi","Agra","Jaipur","Varanasi"], ans:1 },
  { q:"भारत का राष्ट्रीय फूल कौन सा है?", options:["Rose","Lotus","Lily","Sunflower"], ans:1 },
  { q:"भारत का राष्ट्रीय वृक्ष कौन सा है?", options:["Neem","Banyan","Pine","Coconut"], ans:1 },
  { q:"भारत का राष्ट्रीय खेल कौन सा है?", options:["Cricket","Hockey","Football","Kabaddi"], ans:1 },
  { q:"भारत का राष्ट्रीय फल कौन सा है?", options:["Apple","Mango","Banana","Orange"], ans:1 },
  { q:"भारत का राष्ट्रीय नदी कौन सी है?", options:["Yamuna","Ganga","Narmada","Godavari"], ans:1 },
  { q:"भारत का स्वतंत्रता दिवस कब मनाया जाता है?", options:["26 Jan","15 Aug","2 Oct","14 Nov"], ans:1 },

  { q:"भारत का गणतंत्र दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:1 },
  { q:"गांधी जयंती कब मनाई जाती है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:2 },
  { q:"बाल दिवस कब मनाया जाता है?", options:["14 Nov","5 June","2 Oct","15 Aug"], ans:0 },
  { q:"विश्व पर्यावरण दिवस कब मनाया जाता है?", options:["5 June","1 May","14 Nov","2 Oct"], ans:0 },
  { q:"भारत की मुद्रा क्या है?", options:["Dollar","Rupee","Yen","Euro"], ans:1 },
  { q:"भारत का राष्ट्रीय गान किसने लिखा?", options:["Bankim Chandra","Rabindranath Tagore","Premchand","Nehru"], ans:1 },
  { q:"भारत का राष्ट्रीय गीत कौन सा है?", options:["जन गण मन","वंदे मातरम्","ऐ मेरे वतन","सारे जहाँ से अच्छा"], ans:1 },
  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल) कौन सा है?", options:["UP","MP","Rajasthan","Bihar"], ans:2 },
  { q:"भारत का सबसे छोटा राज्य कौन सा है?", options:["Goa","Sikkim","Tripura","Manipur"], ans:0 },
  { q:"भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?", options:["UP","Bihar","MP","Rajasthan"], ans:0 },

  { q:"भारत की सबसे लंबी नदी कौन सी है?", options:["Yamuna","Ganga","Godavari","Narmada"], ans:1 },
  { q:"भारत का सबसे बड़ा महासागर कौन सा है?", options:["Indian","Atlantic","Pacific","Arctic"], ans:2 },
  { q:"भारत का सबसे बड़ा रेगिस्तान कौन सा है?", options:["Sahara","Thar","Gobi","Kalahari"], ans:1 },
  { q:"भारत का सबसे ऊँचा पर्वत क्षेत्र कौन सा है?", options:["Aravali","Himalaya","Vindhya","Satpura"], ans:1 },
  { q:"भारत का पहला उपग्रह कौन सा था?", options:["INSAT","Aryabhata","Rohini","Bhaskara"], ans:1 },
  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },
  { q:"भारत के प्रथम राष्ट्रपति कौन थे?", options:["Nehru","Rajendra Prasad","Gandhi","Patel"], ans:1 },
  { q:"भारत के प्रथम प्रधानमंत्री कौन थे?", options:["Nehru","Patel","Gandhi","Azad"], ans:0 },
  { q:"भारत का संविधान कब लागू हुआ?", options:["15 Aug 1947","26 Jan 1950","2 Oct 1949","1 Jan 1951"], ans:1 },
  { q:"भारत में पहली जनगणना कब हुई?", options:["1872","1881","1891","1901"], ans:1 }


);

bank.GK.medium.push(
  { q:"UP Police GK Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"RBI की स्थापना कब हुई?", options:["1930","1935","1947","1950"], ans:1 },
  { q:"भारत में पंचवर्षीय योजना कब शुरू हुई?", options:["1947","1951","1955","1960"], ans:1 },
  { q:"भारत की संसद के कुल कितने सदन हैं?", options:["1","2","3","4"], ans:1 },
  { q:"लोकसभा का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:1 },
  { q:"राज्यसभा के सदस्यों का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:2 },
  { q:"भारत में राष्ट्रपति का चुनाव कौन करता है?", options:["केवल लोकसभा","केवल राज्यसभा","संसद + राज्य विधानसभाएँ","केवल राज्य विधानसभाएँ"], ans:2 },
  { q:"राज्यसभा का सभापति कौन होता है?", options:["President","Vice President","PM","Speaker"], ans:1 },
  { q:"भारत का सबसे बड़ा पठार कौन सा है?", options:["Malwa","Deccan","Chota Nagpur","Bundelkhand"], ans:1 },
  { q:"किस नदी को 'दक्षिण गंगा' कहा जाता है?", options:["Krishna","Godavari","Cauvery","Mahanadi"], ans:1 },
  { q:"भाखड़ा नांगल बाँध किस नदी पर है?", options:["Sutlej","Ganga","Yamuna","Narmada"], ans:0 },

  { q:"तेहरी बाँध किस नदी पर स्थित है?", options:["Yamuna","Bhagirathi","Ganga","Saraswati"], ans:1 },
  { q:"हीराकुंड बाँध किस नदी पर है?", options:["Mahanadi","Godavari","Narmada","Tapti"], ans:0 },
  { q:"चिल्का झील किस राज्य में स्थित है?", options:["Odisha","WB","UP","MP"], ans:0 },
  { q:"भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?", options:["Wular","Dal","Chilika","Loktak"], ans:0 },
  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["Sundarbans","Mahanadi","Godavari","Krishna"], ans:0 },
  { q:"भारत का सबसे बड़ा कोयला क्षेत्र कौन सा है?", options:["Jharia","Raniganj","Bokaro","Singrauli"], ans:0 },
  { q:"भारत का सबसे बड़ा बंदरगाह कौन सा है?", options:["Kandla","Mumbai","Chennai","Kochi"], ans:1 },
  { q:"भारत का सबसे ऊँचा बांध कौन सा है?", options:["Bhakra","Tehri","Hirakud","Nagarjuna"], ans:1 },
  { q:"भारत में योजना आयोग की जगह किसने ली?", options:["NITI Aayog","Finance Commission","CVC","CBI"], ans:0 },
  { q:"NITI आयोग की स्थापना कब हुई?", options:["2012","2013","2015","2016"], ans:2 },

  { q:"भारत में हरित क्रांति के जनक कौन हैं?", options:["MS Swaminathan","APJ Abdul Kalam","CV Raman","Homi Bhabha"], ans:0 },
  { q:"भारतीय संविधान का मसौदा किसने तैयार किया?", options:["Rajendra Prasad","B.R. Ambedkar","Nehru","Patel"], ans:1 },
  { q:"भारत का पहला परमाणु परीक्षण कब हुआ?", options:["1964","1974","1984","1998"], ans:1 },
  { q:"भारत का पहला अंतरिक्ष यात्री कौन था?", options:["Rakesh Sharma","Kalpana Chawla","Sunita Williams","Vikram Sarabhai"], ans:0 },
  { q:"भारत में पहली महिला प्रधानमंत्री कौन थीं?", options:["Indira Gandhi","Sarojini Naidu","Pratibha Patil","Sushma Swaraj"], ans:0 },
  { q:"भारत के पहले उपराष्ट्रपति कौन थे?", options:["Radhakrishnan","Zakir Husain","Rajendra Prasad","VV Giri"], ans:0 },
  { q:"भारत के पहले मुख्य चुनाव आयुक्त कौन थे?", options:["Sukumar Sen","TN Seshan","Rajendra Prasad","Kamaraj"], ans:0 },
  { q:"भारत का सर्वोच्च न्यायालय कहाँ स्थित है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"भारत में राष्ट्रीय खेल दिवस कब मनाया जाता है?", options:["15 Aug","29 Aug","2 Oct","14 Nov"], ans:1 },
  { q:"भारत में विज्ञान दिवस कब मनाया जाता है?", options:["28 Feb","5 June","15 Aug","26 Jan"], ans:0 }
);

bank.GK.hard.push(
  { q:"UP Police GK Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"CAG का उल्लेख किस अनुच्छेद में है?", options:["148","124","280","370"], ans:0 },
  { q:"वित्त आयोग का उल्लेख किस अनुच्छेद में है?", options:["280","148","52","356"], ans:0 },
  { q:"भारत के महान्यायवादी (Attorney General) का उल्लेख किस अनुच्छेद में है?", options:["76","124","148","280"], ans:0 },
  { q:"राष्ट्रपति को क्षमा दान की शक्ति किस अनुच्छेद में है?", options:["72","74","76","80"], ans:0 },
  { q:"राज्यपाल को क्षमा दान की शक्ति किस अनुच्छेद में है?", options:["161","168","154","356"], ans:0 },
  { q:"मौलिक अधिकार संविधान के किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },
  { q:"नीति निदेशक तत्व संविधान के किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },
  { q:"मौलिक कर्तव्य संविधान के किस भाग में हैं?", options:["Part III","Part IVA","Part IV","Part V"], ans:1 },
  { q:"संविधान में आपातकाल का उल्लेख किस भाग में है?", options:["Part XVIII","Part XVII","Part XIX","Part XVI"], ans:0 },
  { q:"राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","370"], ans:0 },

  { q:"राष्ट्रपति शासन किस अनुच्छेद में लगाया जाता है?", options:["352","356","360","368"], ans:1 },
  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","370"], ans:2 },
  { q:"संविधान संशोधन की प्रक्रिया किस अनुच्छेद में है?", options:["368","370","356","352"], ans:0 },
  { q:"संसद के दोनों सदनों की संयुक्त बैठक का उल्लेख किस अनुच्छेद में है?", options:["108","109","110","111"], ans:0 },
  { q:"धन विधेयक (Money Bill) किस अनुच्छेद में परिभाषित है?", options:["109","110","111","112"], ans:1 },
  { q:"चुनाव आयोग का उल्लेख किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"वयस्क मताधिकार किस अनुच्छेद में है?", options:["324","325","326","327"], ans:2 },
  { q:"लोकसभा अध्यक्ष का उल्लेख किस अनुच्छेद में है?", options:["93","94","95","96"], ans:0 },
  { q:"राज्यसभा के उपसभापति का उल्लेख किस अनुच्छेद में है?", options:["64","89","90","93"], ans:2 },
  { q:"उपराष्ट्रपति का उल्लेख किस अनुच्छेद में है?", options:["52","63","74","80"], ans:1 },

  { q:"प्रधानमंत्री का उल्लेख किस अनुच्छेद में है?", options:["74","75","76","78"], ans:1 },
  { q:"मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?", options:["President","Rajya Sabha","Lok Sabha","Supreme Court"], ans:2 },
  { q:"राज्यों की सूची (State List) किस अनुसूची में है?", options:["7th","8th","9th","10th"], ans:0 },
  { q:"संघ सूची (Union List) किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:1 },
  { q:"समवर्ती सूची (Concurrent List) किस अनुसूची में है?", options:["5th","6th","7th","8th"], ans:2 },
  { q:"भाषाओं की सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:2 },
  { q:"संविधान सभा के अध्यक्ष कौन थे?", options:["Nehru","Rajendra Prasad","Ambedkar","Patel"], ans:1 },
  { q:"Drafting Committee के अध्यक्ष कौन थे?", options:["B.R. Ambedkar","Nehru","Rajendra Prasad","Patel"], ans:0 },
  { q:"भारत का संविधान किस देश से सर्वाधिक प्रभावित है?", options:["USA","UK","Canada","France"], ans:1 },
  { q:"लोकसभा और राज्यसभा की संयुक्त बैठक की अध्यक्षता कौन करता है?", options:["President","Speaker Lok Sabha","Vice President","PM"], ans:1 }
);

// Math
bank.Math.easy.push(
  { q:"UP Police Math Easy Q1 ...", options:["A","B","C","D"], ans:0 },
   { q:"18 + 27 = ?", options:["35","40","45","50"], ans:2 },
  { q:"56 - 19 = ?", options:["35","36","37","38"], ans:2 },
  { q:"72 ÷ 9 = ?", options:["6","7","8","9"], ans:2 },
  { q:"8 × 12 = ?", options:["84","92","96","108"], ans:2 },
  { q:"15 × 6 = ?", options:["80","85","90","95"], ans:2 },

  { q:"25% of 200 = ?", options:["25","40","50","60"], ans:2 },
  { q:"10% of 350 = ?", options:["25","30","35","40"], ans:2 },
  { q:"20% of 450 = ?", options:["80","85","90","95"], ans:2 },
  { q:"5% of 600 = ?", options:["20","25","30","35"], ans:2 },
  { q:"12.5% of 240 = ?", options:["20","25","30","35"], ans:2 },

  { q:"3/5 of 250 = ?", options:["120","130","140","150"], ans:3 },
  { q:"2/3 of 180 = ?", options:["100","110","120","130"], ans:2 },
  { q:"5/8 of 320 = ?", options:["180","200","220","240"], ans:1 },
  { q:"7/10 of 500 = ?", options:["300","320","350","400"], ans:2 },
  { q:"4/9 of 360 = ?", options:["120","140","160","180"], ans:2 },

  { q:"यदि 3x = 45 तो x = ?", options:["10","12","15","18"], ans:2 },
  { q:"यदि 5x = 80 तो x = ?", options:["14","15","16","18"], ans:2 },
  { q:"यदि x/4 = 9 तो x = ?", options:["30","32","34","36"], ans:3 },
  { q:"यदि 2x + 5 = 25 तो x = ?", options:["8","9","10","12"], ans:2 },
  { q:"यदि 4x - 7 = 33 तो x = ?", options:["8","9","10","11"], ans:3 },

  { q:"एक संख्या का 40% = 120 है, संख्या = ?", options:["200","250","300","350"], ans:2 },
  { q:"एक संख्या का 25% = 75 है, संख्या = ?", options:["200","250","300","350"], ans:1 },
  { q:"एक संख्या का 20% = 90 है, संख्या = ?", options:["350","400","450","500"], ans:2 },
  { q:"एक संख्या का 15% = 60 है, संख्या = ?", options:["350","400","450","500"], ans:1 },
  { q:"एक संख्या का 12% = 48 है, संख्या = ?", options:["350","380","400","420"], ans:2 },

  { q:"Ratio 3:5 में कुल 64 है, पहला भाग = ?", options:["18","20","24","28"], ans:2 },
  { q:"Ratio 2:7 में कुल 81 है, बड़ा भाग = ?", options:["49","56","63","72"], ans:2 },
  { q:"Ratio 4:9 में कुल 65 है, छोटा भाग = ?", options:["20","24","26","28"], ans:0 },
  { q:"Average of 12, 18, 24 = ?", options:["16","18","20","22"], ans:1 },
  { q:"Average of 25, 35, 45 = ?", options:["30","35","40","45"], ans:2 }
);

bank.Math.medium.push(
  { q:"UP Police Math Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"SI: P=500, R=10%, T=2 => SI=?", options:["50","80","100","120"], ans:2 },
  { q:"SI: P=800, R=5%, T=3 => SI=?", options:["100","110","120","130"], ans:2 },
  { q:"SI: P=1200, R=8%, T=2 => SI=?", options:["160","180","192","200"], ans:2 },
  { q:"SI: P=1500, R=6%, T=4 => SI=?", options:["300","320","360","400"], ans:2 },
  { q:"SI: P=2000, R=7%, T=2 => SI=?", options:["240","260","280","300"], ans:2 },

  { q:"यदि CP=400 और Profit=15% तो SP=?", options:["440","450","460","480"], ans:2 },
  { q:"यदि CP=600 और Loss=10% तो SP=?", options:["520","530","540","550"], ans:2 },
  { q:"यदि SP=720 और Profit=20% तो CP=?", options:["560","580","600","620"], ans:2 },
  { q:"यदि SP=540 और Loss=10% तो CP=?", options:["580","590","600","610"], ans:2 },
  { q:"यदि CP=750 और Profit=12% तो SP=?", options:["820","830","840","860"], ans:2 },

  { q:"Speed=48 km/h, Time=2.5 h => Distance=?", options:["100","110","120","130"], ans:2 },
  { q:"Speed=60 km/h, Time=1.5 h => Distance=?", options:["80","85","90","95"], ans:2 },
  { q:"Distance=150 km, Speed=50 km/h => Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Distance=240 km, Time=4 h => Speed=?", options:["50","55","60","65"], ans:2 },
  { q:"Speed=72 km/h, Time=3 h => Distance=?", options:["180","200","216","240"], ans:2 },

  { q:"यदि 15% = 60 तो संख्या=?", options:["350","380","400","420"], ans:2 },
  { q:"यदि 12% = 72 तो संख्या=?", options:["500","550","600","650"], ans:2 },
  { q:"यदि 20% = 90 तो संख्या=?", options:["350","400","450","500"], ans:2 },
  { q:"यदि 25% = 125 तो संख्या=?", options:["400","450","500","550"], ans:2 },
  { q:"यदि 30% = 150 तो संख्या=?", options:["450","480","500","520"], ans:2 },

  { q:"Ratio 3:5 में कुल 96 है, पहला भाग=?", options:["32","34","36","40"], ans:2 },
  { q:"Ratio 2:3 में कुल 55 है, बड़ा भाग=?", options:["30","32","33","35"], ans:2 },
  { q:"Ratio 4:7 में कुल 99 है, छोटा भाग=?", options:["33","36","38","44"], ans:0 },
  { q:"Ratio 5:6 में कुल 132 है, बड़ा भाग=?", options:["66","72","78","84"], ans:2 },
  { q:"Ratio 7:9 में कुल 128 है, छोटा भाग=?", options:["49","56","63","64"], ans:1 },

  { q:"Average of 18, 22, 26, 30 = ?", options:["22","23","24","25"], ans:2 },
  { q:"Average of 15, 25, 35 = ?", options:["20","25","30","35"], ans:1 },
  { q:"Average of 12, 16, 20, 24, 28 = ?", options:["18","19","20","21"], ans:2 },
  { q:"Average of 40, 45, 50, 55 = ?", options:["45","47.5","50","52.5"], ans:1 },
  { q:"Average of 21, 27, 33 = ?", options:["25","26","27","28"], ans:2 }
);

bank.Math.hard.push(
  { q:"UP Police Math Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"CI: P=1000, R=10%, T=2 => Amount?", options:["1100","1200","1210","1300"], ans:2 },
  { q:"CI: P=2000, R=5%, T=2 => Amount?", options:["2100","2200","2050","2205"], ans:3 },
  { q:"CI: P=8000, R=5%, T=3 => Amount?", options:["9000","9200","9261","9300"], ans:2 },
  { q:"CI: P=4000, R=8%, T=2 => Amount?", options:["4600","4665.6","4800","4900"], ans:1 },
  { q:"CI: P=5000, R=10%, T=1 => Amount?", options:["5200","5400","5500","5600"], ans:2 },

  { q:"Train speed 54 km/h crosses a pole in 10 sec. Length?", options:["120m","130m","140m","150m"], ans:0 },
  { q:"Train speed 72 km/h crosses 180m platform in 18 sec. Length?", options:["120m","140m","160m","180m"], ans:2 },
  { q:"Train 60 km/h crosses 300m platform in 30 sec. Length?", options:["150m","180m","200m","250m"], ans:0 },
  { q:"Train 90 km/h crosses a pole in 12 sec. Length?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"Train 108 km/h crosses 330m platform in 20 sec. Length?", options:["200m","240m","270m","300m"], ans:2 },

  { q:"Pipe A fills tank in 12h, B fills in 18h. Together time?", options:["6h","7.2h","8h","9h"], ans:1 },
  { q:"Pipe A fills in 10h, outlet empties in 15h. Net time?", options:["25h","30h","20h","18h"], ans:2 },
  { q:"A fills in 8h, B empties in 12h. Net time?", options:["20h","24h","18h","16h"], ans:3 },
  { q:"A fills in 6h, B fills in 9h. Together time?", options:["3.6h","4h","4.5h","5h"], ans:0 },
  { q:"A fills in 15h, B fills in 20h. Together time?", options:["8h","8.57h","9h","10h"], ans:1 },

  { q:"If (x+y)=18 and (x-y)=6 then x=?", options:["10","11","12","13"], ans:1 },
  { q:"If 3x+5=32 then x=?", options:["7","8","9","10"], ans:1 },
  { q:"If 5x-15=60 then x=?", options:["12","13","14","15"], ans:0 },
  { q:"If 2x+3=27 then x=?", options:["10","11","12","13"], ans:1 },
  { q:"If x/3 + 4 = 10 then x=?", options:["12","15","18","21"], ans:2 },

  { q:"A sold item at 20% profit. If SP=720 then CP=?", options:["580","600","620","650"], ans:1 },
  { q:"A sold item at 25% loss. If SP=600 then CP=?", options:["700","750","800","850"], ans:1 },
  { q:"Marked price 1000, discount 20%. SP=?", options:["700","750","800","850"], ans:2 },
  { q:"Marked price 1500, discount 10%. SP=?", options:["1250","1300","1350","1400"], ans:2 },
  { q:"CP=900, profit=15%. SP=?", options:["1000","1035","1050","1100"], ans:1 },

  { q:"Two numbers ratio 7:11, sum=162. Bigger number?", options:["88","99","110","121"], ans:2 },
  { q:"Two numbers ratio 5:8, difference=39. Bigger number?", options:["60","65","72","80"], ans:3 },
  { q:"Two numbers ratio 3:4, sum=140. Smaller number?", options:["50","60","70","80"], ans:1 },
  { q:"Two numbers ratio 9:13, sum=176. Smaller number?", options:["72","78","81","88"], ans:0 },
  { q:"Two numbers ratio 4:9, difference=55. Smaller number?", options:["40","44","45","50"], ans:1 },

  { q:"A can do work in 12 days, B in 18 days. Together time?", options:["7.2","8","9","10"], ans:0 },
  { q:"A can do in 10 days, B in 15 days. Together time?", options:["5","6","7","8"], ans:1 },
  { q:"A does work in 16 days, B in 24 days. Together time?", options:["9.6","10","11","12"], ans:0 },
  { q:"A can do in 20 days, B in 30 days. Together time?", options:["10","12","15","18"], ans:1 },
  { q:"A can do in 9 days, B in 6 days. Together time?", options:["3.6","4","4.5","5"], ans:0 }
);

// Reasoning
bank.Reasoning.easy.push(
  { q:"UP Police Reasoning Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"Series: 2,4,6,8, ?", options:["9","10","11","12"], ans:1 },
  { q:"Series: 5,10,15,20, ?", options:["22","24","25","30"], ans:2 },
  { q:"Series: 3,6,9,12, ?", options:["14","15","16","18"], ans:1 },
  { q:"Series: 1,4,7,10, ?", options:["12","13","14","15"], ans:1 },
  { q:"Series: 10,20,30,40, ?", options:["45","50","55","60"], ans:1 },

  { q:"Odd one out: Apple, Mango, Carrot, Banana", options:["Apple","Mango","Carrot","Banana"], ans:2 },
  { q:"Odd one out: 2, 4, 6, 9", options:["2","4","6","9"], ans:3 },
  { q:"Odd one out: Pen, Pencil, Eraser, Spoon", options:["Pen","Pencil","Eraser","Spoon"], ans:3 },
  { q:"Odd one out: Circle, Square, Triangle, Mango", options:["Circle","Square","Triangle","Mango"], ans:3 },
  { q:"Odd one out: 11, 13, 17, 21", options:["11","13","17","21"], ans:3 },

  { q:"If A=1, B=2 then D=?", options:["2","3","4","5"], ans:2 },
  { q:"If C=3 then F=?", options:["5","6","7","8"], ans:1 },
  { q:"If Z=26 then Y=?", options:["23","24","25","26"], ans:2 },
  { q:"If M=13 then P=?", options:["14","15","16","17"], ans:2 },
  { q:"If H=8 then K=?", options:["9","10","11","12"], ans:2 },

  { q:"Opposite of East?", options:["North","South","West","None"], ans:2 },
  { q:"Opposite of North?", options:["East","West","South","None"], ans:2 },
  { q:"Opposite of Up?", options:["Down","Left","Right","None"], ans:0 },
  { q:"Day after Monday?", options:["Tuesday","Wednesday","Thursday","Friday"], ans:0 },
  { q:"Day before Sunday?", options:["Friday","Saturday","Monday","Tuesday"], ans:1 },

  { q:"How many letters in word 'INDIA'?", options:["3","4","5","6"], ans:2 },
  { q:"How many sides in triangle?", options:["2","3","4","5"], ans:1 },
  { q:"How many months in a year?", options:["10","11","12","13"], ans:2 },
  { q:"How many days in a week?", options:["5","6","7","8"], ans:2 },
  { q:"How many hours in a day?", options:["12","18","24","36"], ans:2 },

  { q:"Find next: 12, 24, 36, 48, ?", options:["54","56","60","72"], ans:2 },
  { q:"Find next: 1, 2, 4, 8, ?", options:["10","12","14","16"], ans:3 },
  { q:"Find next: 7, 14, 21, 28, ?", options:["32","35","36","40"], ans:1 },
  { q:"Find next: 9, 18, 27, 36, ?", options:["40","45","48","54"], ans:1 },
  { q:"Find next: 6, 12, 18, 24, ?", options:["28","30","32","36"], ans:1 }
);

bank.Reasoning.medium.push(
  { q:"UP Police Reasoning Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"Coding: CAT = DBU, DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Coding: PEN = QFO, INK = ?", options:["JOL","JML","JNK","JNL"], ans:0 },
  { q:"Coding: MAN = NBO, SUN = ?", options:["TVO","TVP","UVP","TWP"], ans:1 },
  { q:"Coding: BOOK = CPPL, HOME = ?", options:["IPNF","IPNE","HPNE","HPNF"], ans:0 },
  { q:"Coding: BAT = CBV, RAT = ?", options:["SBU","SBU","SBU","SBU"], ans:0 },

  { q:"Find missing: 3, 6, 12, 24, ?", options:["36","40","48","50"], ans:2 },
  { q:"Find missing: 5, 10, 20, 40, ?", options:["60","70","80","90"], ans:2 },
  { q:"Find missing: 2, 6, 18, 54, ?", options:["108","144","162","216"], ans:2 },
  { q:"Find missing: 7, 14, 28, 56, ?", options:["84","98","112","120"], ans:2 },
  { q:"Find missing: 1, 4, 9, 16, ?", options:["20","25","30","36"], ans:1 },

  { q:"If TODAY is coded as UPEBZ, then DAY is?", options:["EBZ","EBX","DBZ","FBA"], ans:0 },
  { q:"If 1=3, 2=5, 3=7 then 4=?", options:["8","9","10","11"], ans:1 },
  { q:"Which number comes next: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },
  { q:"Series: 4,9,16,25, ?", options:["30","35","36","49"], ans:2 },
  { q:"Series: 6,11,16,21, ?", options:["24","25","26","27"], ans:1 },

  { q:"A is taller than B, B taller than C. Who is tallest?", options:["A","B","C","None"], ans:0 },
  { q:"A is shorter than B, B shorter than C. Who is shortest?", options:["A","B","C","None"], ans:0 },
  { q:"Which comes next: AZ, BY, CX, ?", options:["DW","EV","FU","GV"], ans:0 },
  { q:"Which comes next: 1A, 2B, 3C, ?", options:["4D","5E","6F","7G"], ans:0 },
  { q:"Which comes next: AB, CD, EF, ?", options:["GH","GI","HG","HI"], ans:0 },

  { q:"If 12 is coded as 21, 34 as 43 then 56 as?", options:["65","66","55","76"], ans:0 },
  { q:"If 23 is coded as 32, 45 as 54 then 67 as?", options:["76","77","66","87"], ans:0 },
  { q:"If A=26, B=25 then C=?", options:["24","23","22","21"], ans:0 },
  { q:"If 18 is divided by 3 then result is?", options:["5","6","7","8"], ans:1 },
  { q:"If 7 is multiplied by 6 then result is?", options:["36","40","42","48"], ans:2 },

  { q:"Mirror image is related to?", options:["Reflection","Rotation","Translation","None"], ans:0 },
  { q:"Which is water transport?", options:["Bus","Train","Ship","Car"], ans:2 },
  { q:"Which is a metal?", options:["Wood","Plastic","Iron","Rubber"], ans:2 },
  { q:"Which is a fruit?", options:["Potato","Onion","Mango","Carrot"], ans:2 },
  { q:"Which is a bird?", options:["Dog","Cat","Crow","Cow"], ans:2 },

  { q:"Find missing: 10, 20, 40, 80, ?", options:["120","140","160","180"], ans:2 },
  { q:"Find missing: 9, 18, 36, 72, ?", options:["90","108","144","150"], ans:2 },
  { q:"Find missing: 8, 16, 24, 32, ?", options:["36","40","48","56"], ans:1 },
  { q:"Find missing: 15, 30, 45, 60, ?", options:["65","70","75","80"], ans:2 },
  { q:"Find missing: 2, 5, 8, 11, ?", options:["12","13","14","15"], ans:2 }
);

bank.Reasoning.hard.push(
  { q:"UP Police Reasoning Hard Q1 ...", options:["A","B","C","D"], ans:2 },
   { q:"Blood relation: A brother of B, B mother of C. A is ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },
  { q:"P is sister of Q, Q is father of R. P is R's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"A is father of B, B is brother of C. A is C's ?", options:["Uncle","Father","Brother","Cousin"], ans:1 },
  { q:"X is mother of Y, Y is sister of Z. X is Z's ?", options:["Mother","Aunt","Sister","Grandmother"], ans:0 },
  { q:"M is brother of N, N is mother of P. M is P's ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },

  { q:"Direction: 5km E, 3km N, 5km W. Position?", options:["3km North","5km East","2km South","3km South"], ans:0 },
  { q:"A walks 10m N, 10m E, 10m S, 10m W. Distance from start?", options:["0","10","20","40"], ans:0 },
  { q:"A goes 6km North, 8km East. Distance from start?", options:["10km","12km","14km","16km"], ans:0 },
  { q:"A goes 4km East, 3km North. Distance from start?", options:["5km","6km","7km","8km"], ans:0 },
  { q:"A goes 7km West, 24km North. Distance from start?", options:["23km","24km","25km","26km"], ans:2 },

  { q:"Statement: All cats are animals. Some animals are dogs. Conclusion?", options:["Valid","Invalid","Both","None"], ans:3 },
  { q:"All pens are tools. Some tools are books. Conclusion?", options:["All pens are books","Some pens are books","No pen is book","None"], ans:3 },
  { q:"All apples are fruits. Some fruits are sweet. Conclusion?", options:["All apples sweet","Some apples sweet","No apples sweet","None"], ans:3 },
  { q:"All cars are vehicles. Some vehicles are bikes. Conclusion?", options:["All cars are bikes","Some cars are bikes","No car is bike","None"], ans:3 },
  { q:"All boys are students. Some students are players. Conclusion?", options:["All boys players","Some boys players","No boys players","None"], ans:3 },

  { q:"Find missing: 2, 5, 11, 23, ?", options:["45","46","47","48"], ans:2 },
  { q:"Find missing: 1, 3, 7, 15, ?", options:["25","31","33","35"], ans:1 },
  { q:"Find missing: 4, 9, 19, 39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 3, 8, 18, 38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 5, 12, 26, 54, ?", options:["98","108","110","112"], ans:1 },

  { q:"If SOUTH is written as TQVUI, then NORTH is?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"If INDIA is coded as JOEJB, then CHINA is?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },
  { q:"If 579 is coded as 6810 then 468 is coded as?", options:["579","579","5710","5799"], ans:0 },
  { q:"If 123 is coded as 234 then 456 is coded as?", options:["567","568","569","678"], ans:0 },

  { q:"Which comes next: A1, C3, E5, ?", options:["F6","G7","H8","I9"], ans:1 },
  { q:"Which comes next: Z1, X3, V5, ?", options:["U6","T7","S7","T9"], ans:1 },
  { q:"Which comes next: AB2, CD4, EF6, ?", options:["GH8","GI8","HG8","HI8"], ans:0 },
  { q:"Which comes next: 3D, 6G, 9J, ?", options:["12L","12M","12K","15M"], ans:2 },
  { q:"Which comes next: 2A, 4C, 6E, ?", options:["8G","8F","10G","10H"], ans:1 },

  { q:"A is 2nd to left of B, B is 3rd to right of C. A is ?", options:["Left of C","Right of C","Same position","Cannot say"], ans:0 },
  { q:"In a row, P is 5th from left and Q is 7th from left. Q is ?", options:["2 left of P","2 right of P","Same","Cannot say"], ans:1 },
  { q:"In a row, A is 3rd from left, B is 5th from right. Total 7. A is ?", options:["Same as B","Left of B","Right of B","Cannot say"], ans:0 },
  { q:"In a row, R is 4th from left, S is 3rd from right. Total 8. R is ?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },
  { q:"In a row, M is 6th from left, N is 4th from left. N is ?", options:["2 left of M","2 right of M","Same","Cannot say"], ans:0 }
);

// English
bank.English.easy.push(
  { q:"UP Police English Easy Q1 ...", options:["A","B","C","D"], ans:0 },
    { q:"Synonym of FAST?", options:["Quick","Slow","Weak","Cold"], ans:0 },
  { q:"Synonym of HAPPY?", options:["Sad","Joyful","Angry","Weak"], ans:1 },
  { q:"Synonym of SMALL?", options:["Tiny","Huge","Big","Large"], ans:0 },
  { q:"Synonym of BEGIN?", options:["Start","Stop","End","Close"], ans:0 },
  { q:"Synonym of HELP?", options:["Assist","Hurt","Break","Stop"], ans:0 },

  { q:"Antonym of BIG?", options:["Large","Huge","Small","Heavy"], ans:2 },
  { q:"Antonym of HOT?", options:["Cold","Warm","Heat","Cool"], ans:0 },
  { q:"Antonym of UP?", options:["Down","Left","Right","Top"], ans:0 },
  { q:"Antonym of DAY?", options:["Night","Sun","Light","Time"], ans:0 },
  { q:"Antonym of CLEAN?", options:["Dirty","Fresh","Pure","Clear"], ans:0 },

  { q:"Fill: I ___ a book.", options:["read","reads","reading","readed"], ans:0 },
  { q:"Fill: He ___ tea.", options:["drink","drinks","drinking","drank"], ans:1 },
  { q:"Fill: We ___ friends.", options:["is","are","was","be"], ans:1 },
  { q:"Fill: She ___ to school.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: They ___ playing.", options:["is","are","was","be"], ans:1 },

  { q:"Plural of Child?", options:["Childs","Children","Childrens","Childes"], ans:1 },
  { q:"Plural of Man?", options:["Mans","Mens","Men","Manes"], ans:2 },
  { q:"Plural of Woman?", options:["Womans","Women","Womens","Womanes"], ans:1 },
  { q:"Plural of Foot?", options:["Foots","Feets","Feet","Fets"], ans:2 },
  { q:"Plural of Tooth?", options:["Tooths","Teeth","Toothes","Toothes"], ans:1 },

  { q:"Opposite of TRUE?", options:["False","Right","Sure","Pure"], ans:0 },
  { q:"Opposite of OLD?", options:["New","Young","Fresh","All"], ans:1 },
  { q:"Opposite of OPEN?", options:["Close","Shut","Both","None"], ans:2 },
  { q:"Opposite of LIGHT?", options:["Bright","Dark","White","Clear"], ans:1 },
  { q:"Opposite of RICH?", options:["Poor","Strong","Big","Happy"], ans:0 },

  { q:"One word: A place where books are kept", options:["Library","School","Office","Bank"], ans:0 },
  { q:"One word: A person who teaches", options:["Teacher","Doctor","Driver","Painter"], ans:0 },
  { q:"One word: A person who writes poems", options:["Poet","Singer","Dancer","Player"], ans:0 },
  { q:"One word: A person who drives a car", options:["Driver","Pilot","Cook","Guard"], ans:0 },
  { q:"One word: A person who works in a hospital", options:["Doctor","Teacher","Farmer","Singer"], ans:0 }
);

bank.English.medium.push(
  { q:"UP Police English Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"Fill: He ___ to school daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Choose correct: I have ___ my work.", options:["done","do","did","doing"], ans:0 },
  { q:"Choose correct: She is ___ honest girl.", options:["a","an","the","no"], ans:1 },
  { q:"Fill: The sun ___ in the east.", options:["rise","rises","rising","rose"], ans:1 },
  { q:"Fill: They ___ watching TV.", options:["is","are","was","be"], ans:1 },

  { q:"Correct: I ___ a letter yesterday.", options:["write","writes","wrote","written"], ans:2 },
  { q:"Correct: She ___ not come.", options:["do","does","did","done"], ans:1 },
  { q:"Correct: We ___ late today.", options:["is","are","was","be"], ans:1 },
  { q:"Correct: He ___ been to Delhi.", options:["has","have","had","having"], ans:0 },
  { q:"Correct: They ___ finished the work.", options:["has","have","had","having"], ans:1 },

  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },
  { q:"Synonym of DANGER?", options:["Risk","Safe","Good","Peace"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },

  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },

  { q:"Correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  { q:"Choose correct: He is good ___ Maths.", options:["in","at","on","for"], ans:1 },
  { q:"Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"Choose correct: She is married ___ him.", options:["with","to","by","on"], ans:1 }
);

bank.English.hard.push(
  { q:"UP Police English Hard Q1 ...", options:["A","B","C","D"], ans:2 },
   { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'abandon'?", options:["leave","eat","run","build"], ans:0 },
  { q:"Meaning of 'transparent'?", options:["clear","dirty","heavy","weak"], ans:0 },
  { q:"Meaning of 'persistent'?", options:["continuous","lazy","weak","slow"], ans:0 },
  { q:"Meaning of 'fragile'?", options:["strong","breakable","heavy","fast"], ans:1 },

  { q:"Correct passive: 'They made a plan.'", options:["A plan made","A plan was made","Plan is made","Plan made"], ans:1 },
  { q:"Correct passive: 'He writes a letter.'", options:["A letter is written by him","A letter was written","A letter written","Letter is wrote"], ans:0 },
  { q:"Correct passive: 'She cooks food.'", options:["Food cooked","Food is cooked","Food was cooked","Food is cook"], ans:1 },
  { q:"Correct passive: 'They help me.'", options:["I am helped by them","I helped by them","I was help by them","I is helped"], ans:0 },
  { q:"Correct passive: 'We play cricket.'", options:["Cricket played","Cricket is played","Cricket was play","Cricket is play"], ans:1 },

  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Optimist","Philanthropist","Pessimist"], ans:0 },
  { q:"One word: One who loves books", options:["Bibliophile","Philosopher","Librarian","Editor"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: One who can do many works", options:["Versatile","Lazy","Weak","Slow"], ans:0 },

  { q:"Choose correct: He insisted ___ going.", options:["in","on","at","for"], ans:1 },
  { q:"Choose correct: She is capable ___ doing it.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He is responsible ___ this.", options:["in","at","for","of"], ans:2 },
  { q:"Choose correct: She is angry ___ me.", options:["with","at","for","to"], ans:0 },
  { q:"Choose correct: He is afraid ___ failure.", options:["in","at","of","for"], ans:2 },

  { q:"Spot error: He do not like tea.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 },

  { q:"Choose correct: If I ___ rich, I would help you.", options:["am","was","were","be"], ans:2 },
  { q:"Choose correct: He said that he ___ busy.", options:["is","was","were","be"], ans:1 },
  { q:"Choose correct: I wish I ___ a car.", options:["have","had","has","having"], ans:1 },
  { q:"Choose correct: It is time we ___ home.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: She suggested that he ___ rest.", options:["take","takes","took","taken"], ans:0 },

  { q:"Choose correct: No sooner ___ I reached than it started raining.", options:["had","have","has","was"], ans:0 },
  { q:"Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 },
  { q:"Choose correct: She is interested ___ music.", options:["on","in","at","by"], ans:1 }
);
// =========================
// SSC - ADD QUESTIONS
// =========================

// GK
bank.GK.easy.push(
  { q:"SSC GK Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"भारत का राष्ट्रीय खेल क्या है?", options:["Hockey","Cricket","Football","Kabaddi"], ans:0 },
  { q:"भारत का राष्ट्रीय पक्षी कौन है?", options:["Crow","Peacock","Eagle","Sparrow"], ans:1 },
  { q:"भारत की राजधानी क्या है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"ताजमहल कहाँ स्थित है?", options:["Agra","Delhi","Jaipur","Lucknow"], ans:0 },
  { q:"गांधी जी का जन्म कब हुआ था?", options:["2 Oct 1869","15 Aug 1947","26 Jan 1950","14 Nov 1889"], ans:0 },

  { q:"भारत का स्वतंत्रता दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:0 },
  { q:"भारत का गणतंत्र दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:1 },
  { q:"भारत की मुद्रा क्या है?", options:["Dollar","Rupee","Yen","Euro"], ans:1 },
  { q:"भारत का सबसे बड़ा राज्य क्षेत्रफल में कौन सा है?", options:["UP","MP","Rajasthan","Bihar"], ans:2 },
  { q:"भारत का सबसे छोटा राज्य क्षेत्रफल में कौन सा है?", options:["Goa","Sikkim","Tripura","Manipur"], ans:0 },

  { q:"भारत का सबसे ऊँचा पर्वत कौन सा है?", options:["Aravali","Himalaya","Vindhya","Satpura"], ans:1 },
  { q:"गंगा नदी का उद्गम कहाँ से होता है?", options:["Gangotri","Yamunotri","Amarnath","Haridwar"], ans:0 },
  { q:"यमुना नदी का उद्गम कहाँ से होता है?", options:["Yamunotri","Gangotri","Badrinath","Rishikesh"], ans:0 },
  { q:"भारत का सबसे बड़ा रेगिस्तान कौन सा है?", options:["Thar","Sahara","Gobi","Kalahari"], ans:0 },
  { q:"भारत का सबसे बड़ा पठार कौन सा है?", options:["Malwa","Deccan","Chota Nagpur","Bundelkhand"], ans:1 },

  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },
  { q:"विश्व पर्यावरण दिवस कब मनाया जाता है?", options:["5 June","1 May","15 Aug","2 Oct"], ans:0 },
  { q:"विश्व जनसंख्या दिवस कब मनाया जाता है?", options:["11 July","5 June","8 March","14 Nov"], ans:0 },
  { q:"विश्व महिला दिवस कब मनाया जाता है?", options:["8 March","11 July","5 June","2 Oct"], ans:0 },
  { q:"बाल दिवस कब मनाया जाता है?", options:["14 Nov","2 Oct","15 Aug","26 Jan"], ans:0 },

  { q:"भारत के प्रथम राष्ट्रपति कौन थे?", options:["Nehru","Rajendra Prasad","Gandhi","Patel"], ans:1 },
  { q:"भारत के प्रथम प्रधानमंत्री कौन थे?", options:["Nehru","Patel","Gandhi","Azad"], ans:0 },
  { q:"भारत का पहला उपग्रह कौन सा था?", options:["INSAT","Aryabhata","Rohini","Bhaskara"], ans:1 },
  { q:"भारत का पहला परमाणु परीक्षण कब हुआ?", options:["1964","1974","1984","1998"], ans:1 },
  { q:"भारत का राष्ट्रीय फूल कौन सा है?", options:["Rose","Lotus","Lily","Sunflower"], ans:1 },

  { q:"भारत का राष्ट्रीय वृक्ष कौन सा है?", options:["Neem","Banyan","Mango","Pine"], ans:1 },
  { q:"भारत का राष्ट्रीय पशु कौन है?", options:["Lion","Tiger","Elephant","Horse"], ans:1 },
  { q:"भारत का राष्ट्रीय फल कौन सा है?", options:["Apple","Mango","Banana","Orange"], ans:1 },
  { q:"सौरमंडल का सबसे बड़ा ग्रह कौन सा है?", options:["Earth","Mars","Jupiter","Venus"], ans:2 },
  { q:"सौरमंडल का सबसे नजदीकी ग्रह सूर्य के कौन सा है?", options:["Mercury","Venus","Earth","Mars"], ans:0 }
);
bank.GK.medium.push(
  { q:"SSC GK Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"RBI की स्थापना कब हुई?", options:["1930","1935","1947","1950"], ans:1 },
  { q:"भारत में पंचवर्षीय योजना कब शुरू हुई?", options:["1947","1951","1955","1960"], ans:1 },
  { q:"लोकसभा का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:1 },
  { q:"राज्यसभा के सदस्यों का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:2 },
  { q:"भारत की संसद के कुल कितने सदन हैं?", options:["1","2","3","4"], ans:1 },

  { q:"भारत में राष्ट्रपति का चुनाव कौन करता है?", options:["केवल लोकसभा","केवल राज्यसभा","संसद + राज्य विधानसभाएँ","केवल राज्य विधानसभाएँ"], ans:2 },
  { q:"राज्यसभा का सभापति कौन होता है?", options:["President","Vice President","PM","Speaker"], ans:1 },
  { q:"निति आयोग की स्थापना कब हुई?", options:["2012","2013","2015","2016"], ans:2 },
  { q:"हरित क्रांति के जनक कौन हैं?", options:["MS Swaminathan","CV Raman","Homi Bhabha","APJ Abdul Kalam"], ans:0 },
  { q:"ब्लूटूथ का नाम किस राजा से लिया गया?", options:["Harald Bluetooth","Ashoka","Napoleon","Caesar"], ans:0 },

  { q:"भारत में वित्त आयोग का उल्लेख किस अनुच्छेद में है?", options:["148","280","124","370"], ans:1 },
  { q:"CAG का उल्लेख किस अनुच्छेद में है?", options:["148","280","52","356"], ans:0 },
  { q:"चुनाव आयोग का उल्लेख किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"वयस्क मताधिकार किस अनुच्छेद में है?", options:["324","325","326","327"], ans:2 },
  { q:"संविधान संशोधन की प्रक्रिया किस अनुच्छेद में है?", options:["352","356","360","368"], ans:3 },

  { q:"किस नदी को 'दक्षिण गंगा' कहा जाता है?", options:["Krishna","Godavari","Cauvery","Mahanadi"], ans:1 },
  { q:"भाखड़ा नांगल बाँध किस नदी पर है?", options:["Sutlej","Ganga","Yamuna","Narmada"], ans:0 },
  { q:"तेहरी बाँध किस नदी पर स्थित है?", options:["Yamuna","Bhagirathi","Ganga","Saraswati"], ans:1 },
  { q:"हीराकुंड बाँध किस नदी पर है?", options:["Mahanadi","Godavari","Narmada","Tapti"], ans:0 },
  { q:"चिल्का झील किस राज्य में स्थित है?", options:["Odisha","WB","UP","MP"], ans:0 },

  { q:"भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?", options:["Wular","Dal","Chilika","Loktak"], ans:0 },
  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["Sundarbans","Mahanadi","Godavari","Krishna"], ans:0 },
  { q:"भारत का सबसे बड़ा कोयला क्षेत्र कौन सा है?", options:["Jharia","Raniganj","Bokaro","Singrauli"], ans:0 },
  { q:"भारत का सबसे बड़ा बंदरगाह कौन सा है?", options:["Kandla","Mumbai","Chennai","Kochi"], ans:1 },
  { q:"भारत का पहला परमाणु रिएक्टर कौन सा था?", options:["Apsara","Dhruva","Purnima","Kamini"], ans:0 },

  { q:"ISRO का मुख्यालय कहाँ है?", options:["Mumbai","Chennai","Bengaluru","Hyderabad"], ans:2 },
  { q:"DRDO का मुख्यालय कहाँ है?", options:["Delhi","Bengaluru","Pune","Lucknow"], ans:0 },
  { q:"भारत की पहली महिला प्रधानमंत्री कौन थीं?", options:["Indira Gandhi","Sonia Gandhi","Pratibha Patil","Sarojini Naidu"], ans:0 },
  { q:"भारत के पहले उपराष्ट्रपति कौन थे?", options:["S Radhakrishnan","Zakir Husain","Rajendra Prasad","VV Giri"], ans:0 },
  { q:"भारत के पहले मुख्य न्यायाधीश कौन थे?", options:["H J Kania","B R Ambedkar","M C Setalvad","N Gopalaswami"], ans:0 }
);

bank.GK.hard.push(
  { q:"SSC GK Hard Q1 ...", options:["A","B","C","D"], ans:2 },
   { q:"राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:0 },
  { q:"राष्ट्रपति शासन किस अनुच्छेद में लगाया जाता है?", options:["352","356","360","368"], ans:1 },
  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:2 },
  { q:"संयुक्त बैठक का उल्लेख किस अनुच्छेद में है?", options:["108","109","110","111"], ans:0 },
  { q:"धन विधेयक किस अनुच्छेद में परिभाषित है?", options:["109","110","111","112"], ans:1 },

  { q:"मौलिक अधिकार संविधान के किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },
  { q:"नीति निदेशक तत्व किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },
  { q:"मौलिक कर्तव्य किस भाग में हैं?", options:["Part III","Part IVA","Part IV","Part V"], ans:1 },
  { q:"UPSC का उल्लेख किस भाग में है?", options:["Part XIV","Part XV","Part XVI","Part XVII"], ans:0 },
  { q:"Supreme Court का उल्लेख किस भाग में है?", options:["Part V","Part VI","Part IV","Part III"], ans:0 },

  { q:"High Court का उल्लेख किस भाग में है?", options:["Part V","Part VI","Part VII","Part VIII"], ans:1 },
  { q:"Attorney General का उल्लेख किस अनुच्छेद में है?", options:["76","124","148","280"], ans:0 },
  { q:"President pardon power किस अनुच्छेद में है?", options:["72","74","75","80"], ans:0 },
  { q:"Governor pardon power किस अनुच्छेद में है?", options:["161","168","154","356"], ans:0 },
  { q:"वित्त आयोग (Finance Commission) किस अनुच्छेद में है?", options:["280","148","52","356"], ans:0 },

  { q:"भारत का संविधान सबसे अधिक किस देश से प्रभावित है?", options:["USA","UK","France","Japan"], ans:1 },
  { q:"भारतीय संविधान सभा के अध्यक्ष कौन थे?", options:["Nehru","Rajendra Prasad","Ambedkar","Patel"], ans:1 },
  { q:"Drafting Committee के अध्यक्ष कौन थे?", options:["Ambedkar","Nehru","Rajendra Prasad","Patel"], ans:0 },
  { q:"संविधान में Emergency का उल्लेख किस भाग में है?", options:["Part XVIII","Part XVII","Part XIX","Part XVI"], ans:0 },
  { q:"संघ सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:1 },

  { q:"राज्य सूची किस अनुसूची में है?", options:["7th","8th","9th","10th"], ans:0 },
  { q:"समवर्ती सूची किस अनुसूची में है?", options:["5th","6th","7th","8th"], ans:2 },
  { q:"भाषाओं की सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:2 },
  { q:"लोकसभा अध्यक्ष का उल्लेख किस अनुच्छेद में है?", options:["93","94","95","96"], ans:0 },
  { q:"उपराष्ट्रपति का उल्लेख किस अनुच्छेद में है?", options:["52","63","74","80"], ans:1 },

  { q:"राज्यसभा उपसभापति का उल्लेख किस अनुच्छेद में है?", options:["64","89","90","93"], ans:2 },
  { q:"प्रधानमंत्री का उल्लेख संविधान में कहाँ आता है?", options:["74","75","76","78"], ans:1 },
  { q:"मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?", options:["President","Rajya Sabha","Lok Sabha","Supreme Court"], ans:2 },
  { q:"SC/ST आरक्षण का उल्लेख किस अनुच्छेद में है?", options:["330","332","334","335"], ans:1 },
  { q:"लोकसभा/विधानसभा चुनाव किस आधार पर होते हैं?", options:["Adult Franchise","Indirect election","Nomination","None"], ans:0 },

  { q:"भारत में GST लागू कब हुआ?", options:["2015","2016","2017","2018"], ans:2 },
  { q:"FRBM Act किस वर्ष बना?", options:["2000","2003","2005","2008"], ans:1 },
  { q:"भारत का पहला मानवयुक्त मिशन (नाम)?", options:["Gaganyaan","Mangalyaan","Chandrayaan","Aditya"], ans:0 },
  { q:"भारत का पहला Mars mission कौन सा था?", options:["Mangalyaan","Gaganyaan","Aditya","INSAT"], ans:0 },
  { q:"भारत का पहला Solar mission कौन सा है?", options:["Aditya-L1","Chandrayaan-3","Mangalyaan","RISAT"], ans:0 }
);

// Math
bank.Math.easy.push(
  { q:"SSC Math Easy Q1 ...", options:["A","B","C","D"], ans:0 },
   { q:"25 + 35 = ?", options:["50","55","60","65"], ans:2 },
  { q:"90 - 47 = ?", options:["41","42","43","44"], ans:2 },
  { q:"81 ÷ 9 = ?", options:["7","8","9","10"], ans:2 },
  { q:"14 × 6 = ?", options:["72","78","84","90"], ans:2 },
  { q:"19 × 5 = ?", options:["85","90","95","100"], ans:2 },

  { q:"20% of 250 = ?", options:["40","45","50","55"], ans:2 },
  { q:"15% of 200 = ?", options:["20","25","30","35"], ans:2 },
  { q:"12% of 300 = ?", options:["30","33","36","40"], ans:2 },
  { q:"5% of 500 = ?", options:["20","25","30","35"], ans:1 },
  { q:"10% of 480 = ?", options:["40","45","48","50"], ans:2 },

  { q:"3/4 of 200 = ?", options:["120","140","150","160"], ans:2 },
  { q:"2/5 of 250 = ?", options:["80","90","100","110"], ans:2 },
  { q:"5/6 of 180 = ?", options:["130","140","150","160"], ans:2 },
  { q:"7/8 of 320 = ?", options:["260","270","280","290"], ans:2 },
  { q:"1/3 of 300 = ?", options:["90","100","110","120"], ans:1 },

  { q:"यदि 6x = 72 तो x = ?", options:["10","11","12","13"], ans:2 },
  { q:"यदि 7x = 84 तो x = ?", options:["10","11","12","14"], ans:2 },
  { q:"यदि x/5 = 6 तो x = ?", options:["25","30","35","40"], ans:1 },
  { q:"यदि 3x + 4 = 28 तो x = ?", options:["6","7","8","9"], ans:1 },
  { q:"यदि 2x - 5 = 15 तो x = ?", options:["8","9","10","11"], ans:3 },

  { q:"एक संख्या का 30% = 90 है, संख्या = ?", options:["250","280","300","320"], ans:2 },
  { q:"एक संख्या का 20% = 60 है, संख्या = ?", options:["250","280","300","320"], ans:2 },
  { q:"एक संख्या का 25% = 100 है, संख्या = ?", options:["350","380","400","420"], ans:2 },
  { q:"एक संख्या का 40% = 200 है, संख्या = ?", options:["400","450","500","550"], ans:2 },
  { q:"एक संख्या का 10% = 55 है, संख्या = ?", options:["450","500","550","600"], ans:2 },

  { q:"Ratio 2:3 में कुल 50 है, बड़ा भाग = ?", options:["28","30","32","35"], ans:1 },
  { q:"Ratio 3:7 में कुल 100 है, छोटा भाग = ?", options:["25","30","35","40"], ans:2 },
  { q:"Ratio 5:6 में कुल 121 है, छोटा भाग = ?", options:["50","55","60","65"], ans:1 },
  { q:"Average of 10,20,30,40 = ?", options:["20","22","25","30"], ans:2 },
  { q:"Average of 15, 30, 45 = ?", options:["25","30","35","40"], ans:1 }
);

bank.Math.medium.push(
  { q:"SSC Math Medium Q1 ...", options:["A","B","C","D"], ans:1 },
   { q:"SI: P=1200, R=10%, T=3 => SI=?", options:["320","340","360","380"], ans:2 },
  { q:"SI: P=1500, R=8%, T=2 => SI=?", options:["200","220","240","260"], ans:2 },
  { q:"SI: P=2500, R=6%, T=2 => SI=?", options:["250","280","300","320"], ans:2 },
  { q:"SI: P=1800, R=5%, T=4 => SI=?", options:["320","340","360","380"], ans:2 },
  { q:"SI: P=3000, R=7%, T=3 => SI=?", options:["560","600","630","650"], ans:2 },

  { q:"CP=800, Profit=25% => SP=?", options:["950","980","1000","1050"], ans:2 },
  { q:"CP=900, Loss=10% => SP=?", options:["780","800","810","820"], ans:2 },
  { q:"SP=1200, Profit=20% => CP=?", options:["900","950","1000","1050"], ans:2 },
  { q:"SP=720, Loss=20% => CP=?", options:["850","880","900","920"], ans:2 },
  { q:"CP=1500, Profit=10% => SP=?", options:["1600","1620","1650","1700"], ans:2 },

  { q:"Speed=54 km/h, Time=2h => Distance=?", options:["96","100","108","120"], ans:2 },
  { q:"Speed=45 km/h, Time=3h => Distance=?", options:["120","130","135","140"], ans:2 },
  { q:"Distance=180 km, Speed=60 km/h => Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Distance=240 km, Speed=80 km/h => Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Speed=72 km/h, Time=2.5h => Distance=?", options:["160","170","180","190"], ans:2 },

  { q:"यदि 18% = 72 तो संख्या=?", options:["350","380","400","420"], ans:2 },
  { q:"यदि 25% = 150 तो संख्या=?", options:["500","550","600","650"], ans:2 },
  { q:"यदि 30% = 210 तो संख्या=?", options:["650","680","700","720"], ans:2 },
  { q:"यदि 12% = 96 तो संख्या=?", options:["750","780","800","820"], ans:2 },
  { q:"यदि 15% = 105 तो संख्या=?", options:["650","680","700","720"], ans:2 },

  { q:"Ratio 4:5 में कुल 90 है, बड़ा भाग=?", options:["45","50","55","60"], ans:1 },
  { q:"Ratio 7:8 में कुल 150 है, छोटा भाग=?", options:["60","65","70","75"], ans:2 },
  { q:"Ratio 3:4 में कुल 98 है, छोटा भाग=?", options:["40","42","44","46"], ans:2 },
  { q:"Ratio 5:9 में कुल 140 है, बड़ा भाग=?", options:["80","85","90","95"], ans:2 },
  { q:"Ratio 2:9 में कुल 110 है, बड़ा भाग=?", options:["80","85","90","95"], ans:2 },

  { q:"Average of 14,18,22,26 = ?", options:["18","19","20","21"], ans:2 },
  { q:"Average of 12,24,36 = ?", options:["20","22","24","26"], ans:2 },
  { q:"Average of 35,45,55,65 = ?", options:["45","48","50","52"], ans:2 },
  { q:"Average of 16,20,24,28,32 = ?", options:["22","23","24","25"], ans:2 },
  { q:"Average of 11,22,33,44 = ?", options:["25","27","28","30"], ans:0 }
);

bank.Math.hard.push(
  { q:"SSC Math Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"CI: P=2000, R=10%, T=2 => Amount?", options:["2200","2400","2420","2600"], ans:2 },
  { q:"CI: P=5000, R=8%, T=2 => Amount?", options:["5600","5832","6000","6200"], ans:1 },
  { q:"CI: P=10000, R=5%, T=2 => Amount?", options:["10500","11000","11025","11250"], ans:2 },
  { q:"CI: P=8000, R=10%, T=1 => Amount?", options:["8500","8700","8800","9000"], ans:2 },
  { q:"CI: P=4000, R=12%, T=2 => Amount?", options:["4800","5000","5017.6","5200"], ans:2 },

  { q:"Train 72 km/h crosses 120m pole in 10 sec. Length?", options:["150m","180m","200m","220m"], ans:1 },
  { q:"Train 90 km/h crosses 200m platform in 20 sec. Length?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"Train 54 km/h crosses 150m platform in 15 sec. Length?", options:["60m","70m","80m","90m"], ans:2 },
  { q:"Train 108 km/h crosses 240m platform in 18 sec. Length?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"Train 60 km/h crosses 180m platform in 18 sec. Length?", options:["100m","110m","120m","130m"], ans:2 },

  { q:"Pipe A fills in 8h, B fills in 12h. Together time?", options:["4.8h","5h","6h","7h"], ans:0 },
  { q:"Pipe A fills in 6h, outlet empties in 9h. Net time?", options:["18h","20h","24h","30h"], ans:2 },
  { q:"A fills in 10h, B empties in 15h. Net time?", options:["25h","30h","35h","40h"], ans:1 },
  { q:"A fills in 12h, B fills in 18h. Together time?", options:["6h","7.2h","8h","9h"], ans:1 },
  { q:"A fills in 15h, B fills in 30h. Together time?", options:["8h","9h","10h","12h"], ans:0 },

  { q:"If x+y=30 and x-y=10 then x=?", options:["15","18","20","22"], ans:2 },
  { q:"If 4x+7=55 then x=?", options:["10","11","12","13"], ans:1 },
  { q:"If 6x-9=75 then x=?", options:["12","13","14","15"], ans:2 },
  { q:"If x/4 + 6 = 15 then x=?", options:["28","32","36","40"], ans:1 },
  { q:"If 3x-5=40 then x=?", options:["12","13","14","15"], ans:3 },

  { q:"SP=960, Profit=20% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"SP=720, Loss=10% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"Marked price=2000, discount=15% => SP=?", options:["1600","1650","1700","1750"], ans:2 },
  { q:"Marked price=1500, discount=20% => SP=?", options:["1100","1150","1200","1250"], ans:2 },
  { q:"CP=1200, Profit=25% => SP=?", options:["1400","1450","1500","1600"], ans:2 },

  { q:"Ratio 7:9, sum=256. Bigger number?", options:["120","128","135","144"], ans:1 },
  { q:"Ratio 5:8, sum=260. Smaller number?", options:["90","100","110","120"], ans:1 },
  { q:"Ratio 3:7, sum=200. Bigger number?", options:["120","130","140","150"], ans:2 },
  { q:"Ratio 4:11, sum=300. Smaller number?", options:["80","90","100","110"], ans:2 },
  { q:"Ratio 9:11, sum=220. Smaller number?", options:["90","99","100","110"], ans:1 },

  { q:"A can do work in 18 days, B in 12 days. Together time?", options:["7.2","8","9","10"], ans:0 },
  { q:"A does in 15 days, B in 10 days. Together time?", options:["5","6","7","8"], ans:0 },
  { q:"A does in 24 days, B in 16 days. Together time?", options:["9.6","10","11","12"], ans:0 },
  { q:"A does in 30 days, B in 20 days. Together time?", options:["10","12","15","18"], ans:0 },
  { q:"A does in 12 days, B in 8 days. Together time?", options:["4.8","5","6","7"], ans:0 }
);

// Reasoning
bank.Reasoning.easy.push(
  { q:"SSC Reasoning Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"Series: 4,8,12,16, ?", options:["18","20","22","24"], ans:1 },
  { q:"Series: 7,14,21,28, ?", options:["30","35","36","40"], ans:1 },
  { q:"Series: 1,3,5,7, ?", options:["8","9","10","11"], ans:1 },
  { q:"Series: 10,15,20,25, ?", options:["28","30","32","35"], ans:1 },
  { q:"Series: 2,5,8,11, ?", options:["12","13","14","15"], ans:1 },

  { q:"Odd one out: 2, 3, 5, 9", options:["2","3","5","9"], ans:3 },
  { q:"Odd one out: Pen, Book, Pencil, Eraser", options:["Pen","Book","Pencil","Eraser"], ans:1 },
  { q:"Odd one out: Circle, Square, Triangle, Cube", options:["Circle","Square","Triangle","Cube"], ans:3 },
  { q:"Odd one out: Mango, Apple, Banana, Potato", options:["Mango","Apple","Banana","Potato"], ans:3 },
  { q:"Odd one out: 11, 13, 17, 19", options:["11","13","17","19"], ans:0 },

  { q:"If A=1 then C=?", options:["2","3","4","5"], ans:1 },
  { q:"If D=4 then G=?", options:["6","7","8","9"], ans:1 },
  { q:"If M=13 then N=?", options:["12","13","14","15"], ans:2 },
  { q:"If P=16 then R=?", options:["17","18","19","20"], ans:1 },
  { q:"If X=24 then Z=?", options:["25","26","27","28"], ans:1 },

  { q:"Opposite of South?", options:["East","West","North","None"], ans:2 },
  { q:"Opposite of Left?", options:["Right","Up","Down","None"], ans:0 },
  { q:"Day after Sunday?", options:["Monday","Tuesday","Friday","Saturday"], ans:0 },
  { q:"Day before Friday?", options:["Wednesday","Thursday","Saturday","Monday"], ans:1 },
  { q:"Which is bigger: 0.9 or 0.09?", options:["0.09","0.9","Equal","None"], ans:1 },

  { q:"How many letters in 'DELHI'?", options:["4","5","6","7"], ans:1 },
  { q:"How many sides in square?", options:["2","3","4","5"], ans:2 },
  { q:"How many days in February (normal year)?", options:["28","29","30","31"], ans:0 },
  { q:"How many minutes in 1 hour?", options:["30","45","60","90"], ans:2 },
  { q:"How many zeros in 1000?", options:["1","2","3","4"], ans:2 },

  { q:"Find next: 3,6,9,12, ?", options:["13","14","15","16"], ans:2 },
  { q:"Find next: 2,4,8,16, ?", options:["20","24","30","32"], ans:3 },
  { q:"Find next: 5,10,20,40, ?", options:["60","70","80","90"], ans:2 },
  { q:"Find next: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },
  { q:"Find next: 8,16,24,32, ?", options:["36","40","48","56"], ans:1 }
);

bank.Reasoning.medium.push(
  { q:"SSC Reasoning Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"Coding: CAT = DBU, DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Coding: PEN = QFO, INK = ?", options:["JOL","JML","JNK","JNL"], ans:0 },
  { q:"Coding: MAN = NBO, FAN = ?", options:["GBO","GBO","GBO","GBO"], ans:0 },
  { q:"Coding: SUN = TVP, MOON = ?", options:["NPPO","NPPN","NPPM","NPPQ"], ans:0 },
  { q:"Coding: BAT = CBV, RAT = ?", options:["SBU","SBU","SBU","SBU"], ans:0 },

  { q:"Find missing: 2,6,18,54, ?", options:["108","144","162","216"], ans:2 },
  { q:"Find missing: 3,9,27,81, ?", options:["162","243","324","405"], ans:1 },
  { q:"Find missing: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },
  { q:"Find missing: 5,10,20,40, ?", options:["60","70","80","90"], ans:2 },
  { q:"Find missing: 10,20,40,80, ?", options:["120","140","160","180"], ans:2 },

  { q:"Series: 11,22,33,44, ?", options:["55","56","57","60"], ans:0 },
  { q:"Series: 9,18,27,36, ?", options:["40","45","48","54"], ans:1 },
  { q:"Series: 6,11,16,21, ?", options:["24","25","26","27"], ans:1 },
  { q:"Series: 4,9,16,25, ?", options:["30","35","36","49"], ans:2 },
  { q:"Series: 7,17,27,37, ?", options:["45","47","57","67"], ans:1 },

  { q:"If 12 is coded as 21 then 34 as?", options:["43","44","33","24"], ans:0 },
  { q:"If 56 is coded as 65 then 78 as?", options:["87","88","77","67"], ans:0 },
  { q:"If 23 is coded as 32 then 45 as?", options:["54","55","44","35"], ans:0 },
  { q:"If A=26, B=25 then D=?", options:["24","23","22","21"], ans:1 },
  { q:"If C=24 then E=?", options:["22","21","20","19"], ans:0 },

  { q:"A is taller than B, B taller than C. Who is tallest?", options:["A","B","C","None"], ans:0 },
  { q:"A is shorter than B, B shorter than C. Who is shortest?", options:["A","B","C","None"], ans:0 },
  { q:"Which comes next: AZ, BY, CX, ?", options:["DW","EV","FU","GV"], ans:0 },
  { q:"Which comes next: 1A, 2B, 3C, ?", options:["4D","5E","6F","7G"], ans:0 },
  { q:"Which comes next: AB, CD, EF, ?", options:["GH","GI","HG","HI"], ans:0 },

  { q:"Which is a metal?", options:["Plastic","Iron","Wood","Rubber"], ans:1 },
  { q:"Which is a bird?", options:["Cow","Crow","Dog","Cat"], ans:1 },
  { q:"Which is a fruit?", options:["Potato","Onion","Mango","Carrot"], ans:2 },
  { q:"Which is water transport?", options:["Bus","Train","Ship","Car"], ans:2 },
  { q:"Mirror image is related to?", options:["Reflection","Rotation","Translation","None"], ans:0 },

  { q:"Find missing: 4,8,16,32, ?", options:["48","56","64","72"], ans:2 },
  { q:"Find missing: 15,30,45,60, ?", options:["65","70","75","80"], ans:2 },
  { q:"Find missing: 12,24,36,48, ?", options:["54","56","60","72"], ans:2 },
  { q:"Find missing: 2,5,11,23, ?", options:["45","46","47","48"], ans:2 },
  { q:"Find missing: 1,3,7,15, ?", options:["25","31","33","35"], ans:1 }
);

bank.Reasoning.hard.push(
  { q:"SSC Reasoning Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"Blood relation: A brother of B, B mother of C. A is ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },
  { q:"P is sister of Q, Q is father of R. P is R's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"X is mother of Y, Y is brother of Z. X is Z's ?", options:["Mother","Aunt","Sister","Grandmother"], ans:0 },
  { q:"A is father of B, B is sister of C. A is C's ?", options:["Father","Uncle","Brother","Cousin"], ans:0 },
  { q:"M is brother of N, N is mother of P. M is P's ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },

  { q:"Direction: 4km East, 3km North. Distance from start?", options:["5km","6km","7km","8km"], ans:0 },
  { q:"Direction: 6km West, 8km North. Distance from start?", options:["10km","12km","14km","16km"], ans:0 },
  { q:"A walks 10m N, 5m E, 10m S. Distance from start?", options:["0","5","10","15"], ans:1 },
  { q:"A walks 7m E, 24m N. Distance from start?", options:["23m","24m","25m","26m"], ans:2 },
  { q:"A walks 5km E, 12km N. Distance from start?", options:["10km","12km","13km","17km"], ans:2 },

  { q:"Statement: All pens are tools. Some tools are books. Conclusion?", options:["All pens books","Some pens books","No pen book","None"], ans:3 },
  { q:"All cats are animals. Some animals are dogs. Conclusion?", options:["Some cats dogs","All dogs cats","No dogs cats","None"], ans:3 },
  { q:"All fruits are sweet. Mango is a fruit. Conclusion?", options:["Mango sweet","Mango sour","Mango not fruit","None"], ans:0 },
  { q:"All cars are vehicles. Some vehicles are bikes. Conclusion?", options:["All cars bikes","Some cars bikes","No car bike","None"], ans:3 },
  { q:"All boys are students. Some students are players. Conclusion?", options:["All boys players","Some boys players","No boys players","None"], ans:3 },

  { q:"Find missing: 3,8,18,38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 4,9,19,39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 5,12,26,54, ?", options:["98","108","110","112"], ans:1 },
  { q:"Find missing: 7,16,34,70, ?", options:["140","142","144","146"], ans:1 },
  { q:"Find missing: 2,5,11,23, ?", options:["45","46","47","48"], ans:2 },

  { q:"If SOUTH is coded as TQVUI, then NORTH is?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"If INDIA is coded as JOEJB, then CHINA is?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },
  { q:"If 579 is coded as 6810 then 468 is coded as?", options:["579","579","5710","5799"], ans:0 },
  { q:"If 123 is coded as 234 then 789 is coded as?", options:["8910","890","891","91011"], ans:2 },

  { q:"A is 2nd left of B, B is 3rd right of C. A is?", options:["Left of C","Right of C","Same","Cannot say"], ans:0 },
  { q:"In a row, P is 5th from left, Q is 9th from left. Q is?", options:["4 left","4 right","same","Cannot say"], ans:1 },
  { q:"In a row, total 10. A is 3rd left, B is 4th right. A is?", options:["Left of B","Right of B","Same","Cannot say"], ans:0 },
  { q:"In a row total 8. R is 4th left, S is 3rd right. R is?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },
  { q:"In a row, M is 6th left, N is 2nd left. N is?", options:["4 left of M","4 right of M","Same","Cannot say"], ans:0 },

  { q:"Which comes next: A1, C3, E5, ?", options:["F6","G7","H8","I9"], ans:1 },
  { q:"Which comes next: Z1, X3, V5, ?", options:["U6","T7","S7","T9"], ans:1 },
  { q:"Which comes next: 2A, 4C, 6E, ?", options:["8G","8F","10G","10H"], ans:1 },
  { q:"Which comes next: AB2, CD4, EF6, ?", options:["GH8","GI8","HG8","HI8"], ans:0 },
  { q:"Which comes next: 3D, 6G, 9J, ?", options:["12L","12M","12K","15M"], ans:2 }
);

// English
bank.English.easy.push(
  { q:"SSC English Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"Synonym of QUICK?", options:["Fast","Slow","Weak","Cold"], ans:0 },
  { q:"Synonym of HAPPY?", options:["Sad","Joyful","Angry","Weak"], ans:1 },
  { q:"Synonym of SMALL?", options:["Tiny","Huge","Big","Large"], ans:0 },
  { q:"Synonym of BEGIN?", options:["Start","Stop","End","Close"], ans:0 },
  { q:"Synonym of HELP?", options:["Assist","Hurt","Break","Stop"], ans:0 },

  { q:"Antonym of HOT?", options:["Cold","Warm","Heat","Cool"], ans:0 },
  { q:"Antonym of OLD?", options:["Young","New","Fresh","All"], ans:0 },
  { q:"Antonym of UP?", options:["Down","Left","Right","Top"], ans:0 },
  { q:"Antonym of RICH?", options:["Poor","Strong","Big","Happy"], ans:0 },
  { q:"Antonym of CLEAN?", options:["Dirty","Fresh","Pure","Clear"], ans:0 },

  { q:"Fill: She ___ tea.", options:["drink","drinks","drinking","drank"], ans:1 },
  { q:"Fill: They ___ playing.", options:["is","are","was","be"], ans:1 },
  { q:"Fill: I ___ a pen.", options:["have","has","had","having"], ans:0 },
  { q:"Fill: He ___ a book.", options:["read","reads","reading","readed"], ans:1 },
  { q:"Fill: We ___ friends.", options:["is","are","was","be"], ans:1 },

  { q:"Plural of Man?", options:["Mans","Mens","Men","Manes"], ans:2 },
  { q:"Plural of Woman?", options:["Womans","Women","Womens","Womanes"], ans:1 },
  { q:"Plural of Child?", options:["Childs","Children","Childrens","Childes"], ans:1 },
  { q:"Plural of Tooth?", options:["Tooths","Teeth","Toothes","Toothes"], ans:1 },
  { q:"Plural of Foot?", options:["Foots","Feets","Feet","Fets"], ans:2 },

  { q:"Opposite of TRUE?", options:["False","Right","Sure","Pure"], ans:0 },
  { q:"Opposite of OPEN?", options:["Close","Shut","Both","None"], ans:2 },
  { q:"Opposite of DAY?", options:["Night","Sun","Light","Time"], ans:0 },
  { q:"Opposite of LIGHT?", options:["Bright","Dark","White","Clear"], ans:1 },
  { q:"Opposite of BIG?", options:["Large","Huge","Small","Heavy"], ans:2 },

  { q:"One word: A place where books are kept", options:["Library","School","Office","Bank"], ans:0 },
  { q:"One word: A person who teaches", options:["Teacher","Doctor","Driver","Painter"], ans:0 },
  { q:"One word: A person who writes poems", options:["Poet","Singer","Dancer","Player"], ans:0 },
  { q:"One word: A person who drives a car", options:["Driver","Pilot","Cook","Guard"], ans:0 },
  { q:"One word: A person who works in a hospital", options:["Doctor","Teacher","Farmer","Singer"], ans:0 }
);

bank.English.medium.push(
  { q:"SSC English Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"Fill: He ___ to office daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: The sun ___ in the east.", options:["rise","rises","rising","rose"], ans:1 },
  { q:"Choose correct: I have ___ my work.", options:["done","do","did","doing"], ans:0 },
  { q:"Choose correct: She is ___ honest girl.", options:["a","an","the","no"], ans:1 },
  { q:"Fill: They ___ watching TV.", options:["is","are","was","be"], ans:1 },

  { q:"Correct: I ___ a letter yesterday.", options:["write","writes","wrote","written"], ans:2 },
  { q:"Correct: She ___ not come.", options:["do","does","did","done"], ans:1 },
  { q:"Correct: He ___ been to Delhi.", options:["has","have","had","having"], ans:0 },
  { q:"Correct: They ___ finished the work.", options:["has","have","had","having"], ans:1 },
  { q:"Correct: We ___ late today.", options:["is","are","was","be"], ans:1 },

  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },
  { q:"Synonym of DANGER?", options:["Risk","Safe","Good","Peace"], ans:0 },
  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },

  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },

  { q:"Correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  { q:"Choose correct: He is good ___ Maths.", options:["in","at","on","for"], ans:1 },
  { q:"Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"Choose correct: She is married ___ him.", options:["with","to","by","on"], ans:1 }
);

bank.English.hard.push(
  { q:"SSC English Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'abandon'?", options:["leave","eat","run","build"], ans:0 },
  { q:"Meaning of 'transparent'?", options:["clear","dirty","heavy","weak"], ans:0 },
  { q:"Meaning of 'persistent'?", options:["continuous","lazy","weak","slow"], ans:0 },
  { q:"Meaning of 'fragile'?", options:["strong","breakable","heavy","fast"], ans:1 },

  { q:"Correct passive: 'They made a plan.'", options:["A plan made","A plan was made","Plan is made","Plan made"], ans:1 },
  { q:"Correct passive: 'He writes a letter.'", options:["A letter is written by him","A letter was written","A letter written","Letter is wrote"], ans:0 },
  { q:"Correct passive: 'She cooks food.'", options:["Food cooked","Food is cooked","Food was cooked","Food is cook"], ans:1 },
  { q:"Correct passive: 'They help me.'", options:["I am helped by them","I helped by them","I was help by them","I is helped"], ans:0 },
  { q:"Correct passive: 'We play cricket.'", options:["Cricket played","Cricket is played","Cricket was play","Cricket is play"], ans:1 },

  { q:"One word: One who loves books", options:["Bibliophile","Philosopher","Librarian","Editor"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Optimist","Philanthropist","Pessimist"], ans:0 },
  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: One who can do many works", options:["Versatile","Lazy","Weak","Slow"], ans:0 },

  { q:"Choose correct: He insisted ___ going.", options:["in","on","at","for"], ans:1 },
  { q:"Choose correct: She is capable ___ doing it.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He is responsible ___ this.", options:["in","at","for","of"], ans:2 },
  { q:"Choose correct: She is angry ___ me.", options:["with","at","for","to"], ans:0 },
  { q:"Choose correct: He is afraid ___ failure.", options:["in","at","of","for"], ans:2 },

  { q:"Spot error: He do not like tea.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 },

  { q:"Choose correct: If I ___ rich, I would help you.", options:["am","was","were","be"], ans:2 },
  { q:"Choose correct: He said that he ___ busy.", options:["is","was","were","be"], ans:1 },
  { q:"Choose correct: I wish I ___ a car.", options:["have","had","has","having"], ans:1 },
  { q:"Choose correct: It is time we ___ home.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: She suggested that he ___ rest.", options:["take","takes","took","taken"], ans:0 },

  { q:"Choose correct: No sooner ___ I reached than it started raining.", options:["had","have","has","was"], ans:0 },
  { q:"Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 },
  { q:"Choose correct: She is interested ___ music.", options:["on","in","at","by"], ans:1 }
);
// =========================
// RAILWAY - ADD QUESTIONS
// =========================

// GK
bank.GK.easy.push(
  { q:"Railway GK Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"भारत की राजधानी क्या है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"भारत का राष्ट्रीय पशु कौन है?", options:["Lion","Tiger","Elephant","Horse"], ans:1 },
  { q:"भारत का राष्ट्रीय पक्षी कौन है?", options:["Crow","Peacock","Eagle","Sparrow"], ans:1 },
  { q:"भारत का राष्ट्रीय फूल कौन सा है?", options:["Rose","Lotus","Lily","Sunflower"], ans:1 },
  { q:"भारत का राष्ट्रीय फल कौन सा है?", options:["Apple","Mango","Banana","Orange"], ans:1 },

  { q:"गांधी जयंती कब होती है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:2 },
  { q:"स्वतंत्रता दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","14 Nov"], ans:0 },
  { q:"गणतंत्र दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:1 },
  { q:"बाल दिवस कब मनाया जाता है?", options:["2 Oct","14 Nov","15 Aug","26 Jan"], ans:1 },
  { q:"विश्व पर्यावरण दिवस कब मनाया जाता है?", options:["5 June","8 March","11 July","1 May"], ans:0 },

  { q:"ताजमहल कहाँ है?", options:["Delhi","Agra","Jaipur","Lucknow"], ans:1 },
  { q:"कुतुब मीनार कहाँ है?", options:["Delhi","Agra","Jaipur","Patna"], ans:0 },
  { q:"लाल किला कहाँ है?", options:["Delhi","Agra","Mumbai","Kolkata"], ans:0 },
  { q:"इंडिया गेट कहाँ है?", options:["Delhi","Lucknow","Bhopal","Chennai"], ans:0 },
  { q:"चारमीनार कहाँ है?", options:["Hyderabad","Delhi","Agra","Jaipur"], ans:0 },

  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल)?", options:["UP","MP","Rajasthan","Bihar"], ans:2 },
  { q:"भारत का सबसे छोटा राज्य कौन सा है?", options:["Goa","Sikkim","Tripura","Manipur"], ans:0 },
  { q:"भारत की सबसे लंबी नदी कौन सी है?", options:["Yamuna","Ganga","Narmada","Krishna"], ans:1 },
  { q:"भारत का सबसे बड़ा महासागर कौन सा है?", options:["Indian","Atlantic","Pacific","Arctic"], ans:2 },
  { q:"भारत का सबसे बड़ा पठार कौन सा है?", options:["Deccan","Malwa","Bundelkhand","Chota Nagpur"], ans:0 },

  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },
  { q:"WHO का मुख्यालय कहाँ है?", options:["Geneva","Paris","London","New York"], ans:0 },
  { q:"UN का मुख्यालय कहाँ है?", options:["Geneva","New York","Paris","Tokyo"], ans:1 },
  { q:"भारत का पहला प्रधानमंत्री कौन था?", options:["Nehru","Patel","Gandhi","Azad"], ans:0 },
  { q:"भारत के प्रथम राष्ट्रपति कौन थे?", options:["Rajendra Prasad","Nehru","Gandhi","Patel"], ans:0 },

  { q:"भारत का राष्ट्रीय गान किसने लिखा?", options:["Bankim","Tagore","Premchand","Nehru"], ans:1 },
  { q:"वंदे मातरम् किसने लिखा?", options:["Tagore","Bankim","Premchand","Nehru"], ans:1 },
  { q:"भारत की मुद्रा क्या है?", options:["Dollar","Rupee","Euro","Yen"], ans:1 },
  { q:"1 किलोमीटर में कितने मीटर होते हैं?", options:["100","500","1000","1500"], ans:2 },
  { q:"भारत में कुल कितने राज्य हैं?", options:["27","28","29","30"], ans:1 }
);
bank.GK.medium.push(
  { q:"Railway GK Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"RBI की स्थापना कब हुई?", options:["1930","1935","1947","1950"], ans:1 },
  { q:"भारत में पंचवर्षीय योजना कब शुरू हुई?", options:["1947","1951","1955","1960"], ans:1 },
  { q:"लोकसभा का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:1 },
  { q:"राज्यसभा के सदस्यों का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:2 },
  { q:"भारत की संसद में कितने सदन हैं?", options:["1","2","3","4"], ans:1 },

  { q:"भारत का पहला उपग्रह कौन सा था?", options:["INSAT","Aryabhata","Bhaskara","Rohini"], ans:1 },
  { q:"ISRO का मुख्यालय कहाँ है?", options:["Delhi","Mumbai","Bengaluru","Chennai"], ans:2 },
  { q:"DRDO का मुख्यालय कहाँ है?", options:["Delhi","Lucknow","Bhopal","Patna"], ans:0 },
  { q:"भारत की पहली महिला प्रधानमंत्री कौन थीं?", options:["Indira Gandhi","Sonia Gandhi","Pratibha Patil","Sarojini Naidu"], ans:0 },
  { q:"भारत के पहले मुख्य न्यायाधीश कौन थे?", options:["H J Kania","Ambedkar","Nehru","Patel"], ans:0 },

  { q:"भारत में वित्त आयोग का उल्लेख किस अनुच्छेद में है?", options:["148","280","52","370"], ans:1 },
  { q:"CAG का उल्लेख किस अनुच्छेद में है?", options:["148","280","124","52"], ans:0 },
  { q:"चुनाव आयोग का उल्लेख किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"संविधान संशोधन की प्रक्रिया किस अनुच्छेद में है?", options:["352","356","360","368"], ans:3 },
  { q:"वयस्क मताधिकार किस अनुच्छेद में है?", options:["324","325","326","327"], ans:2 },

  { q:"भाखड़ा नांगल बाँध किस नदी पर है?", options:["Sutlej","Ganga","Yamuna","Narmada"], ans:0 },
  { q:"तेहरी बाँध किस नदी पर है?", options:["Ganga","Bhagirathi","Yamuna","Narmada"], ans:1 },
  { q:"हीराकुंड बाँध किस नदी पर है?", options:["Mahanadi","Godavari","Tapti","Krishna"], ans:0 },
  { q:"चिल्का झील किस राज्य में है?", options:["Odisha","WB","UP","MP"], ans:0 },
  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["Sundarbans","Godavari","Krishna","Mahanadi"], ans:0 },

  { q:"भारत का सबसे बड़ा कोयला क्षेत्र?", options:["Jharia","Bokaro","Raniganj","Singrauli"], ans:0 },
  { q:"भारत का सबसे बड़ा बंदरगाह?", options:["Kandla","Mumbai","Chennai","Kochi"], ans:1 },
  { q:"भारत का सबसे ऊँचा बांध कौन सा है?", options:["Bhakra","Tehri","Hirakud","Nagarjuna"], ans:1 },
  { q:"भारत का सबसे बड़ा तट कौन सा है?", options:["Eastern","Western","Both same","None"], ans:1 },
  { q:"भारत का सबसे बड़ा समुद्र कौन सा है?", options:["Arabian Sea","Bay of Bengal","Red Sea","Black Sea"], ans:1 },

  { q:"रेलवे का राष्ट्रीयकरण कब हुआ था?", options:["1950","1951","1952","1955"], ans:2 },
  { q:"भारत में पहली रेल कब चली?", options:["1853","1860","1870","1901"], ans:0 },
  { q:"भारत में पहली रेल कहाँ चली?", options:["Delhi-Agra","Mumbai-Thane","Kolkata-Howrah","Chennai-Arcot"], ans:1 },
  { q:"भारतीय रेलवे का मुख्यालय कहाँ है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"IRCTC का full form क्या है?", options:["Indian Railway Catering and Tourism Corporation","Indian Rail Cargo and Travel Corp","Indian Rail Control and Train Corp","None"], ans:0 }
);
bank.GK.hard.push(
  { q:"Railway GK Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:0 },
  { q:"राष्ट्रपति शासन किस अनुच्छेद में है?", options:["352","356","360","368"], ans:1 },
  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:2 },
  { q:"धन विधेयक किस अनुच्छेद में है?", options:["109","110","111","112"], ans:1 },
  { q:"संयुक्त बैठक का उल्लेख किस अनुच्छेद में है?", options:["108","109","110","111"], ans:0 },

  { q:"मौलिक अधिकार किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },
  { q:"नीति निदेशक तत्व किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },
  { q:"मौलिक कर्तव्य किस भाग में हैं?", options:["Part III","Part IVA","Part IV","Part V"], ans:1 },
  { q:"संघ सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:1 },
  { q:"राज्य सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:1 },

  { q:"समवर्ती सूची किस अनुसूची में है?", options:["5th","6th","7th","8th"], ans:2 },
  { q:"भाषाओं की सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:2 },
  { q:"संविधान सभा के अध्यक्ष कौन थे?", options:["Nehru","Rajendra Prasad","Ambedkar","Patel"], ans:1 },
  { q:"Drafting Committee के अध्यक्ष कौन थे?", options:["Ambedkar","Nehru","Rajendra Prasad","Patel"], ans:0 },
  { q:"भारत के पहले मुख्य चुनाव आयुक्त कौन थे?", options:["Sukumar Sen","TN Seshan","Rajendra Prasad","Kamaraj"], ans:0 },

  { q:"Attorney General का उल्लेख किस अनुच्छेद में है?", options:["76","124","148","280"], ans:0 },
  { q:"President pardon power किस अनुच्छेद में है?", options:["72","74","75","80"], ans:0 },
  { q:"Governor pardon power किस अनुच्छेद में है?", options:["161","168","154","356"], ans:0 },
  { q:"Finance Commission किस अनुच्छेद में है?", options:["148","280","124","52"], ans:1 },
  { q:"UPSC का उल्लेख किस भाग में है?", options:["Part XIV","Part XV","Part XVI","Part XVII"], ans:0 },

  { q:"रेलवे में 'LHB coach' का मतलब?", options:["German design","Indian old design","Diesel engine","None"], ans:0 },
  { q:"भारत की पहली मेट्रो किस शहर में शुरू हुई?", options:["Delhi","Kolkata","Mumbai","Chennai"], ans:1 },
  { q:"रेलवे में 'WDM' का मतलब?", options:["Wide Diesel Mixed","Diesel loco series","Wagon series","None"], ans:1 },
  { q:"रेलवे में 'WAP' किससे संबंधित है?", options:["Electric Passenger loco","Diesel Passenger loco","Goods loco","Coach"], ans:0 },
  { q:"रेलवे में 'WAG' किससे संबंधित है?", options:["Passenger","Goods","Metro","Coach"], ans:1 },

  { q:"भारत का सबसे लंबा रेलवे प्लेटफॉर्म (पुराना GK)?", options:["Gorakhpur","Kharagpur","Howrah","Kanpur"], ans:0 },
  { q:"भारत का सबसे व्यस्त रेलवे स्टेशन कौन सा है?", options:["Howrah","NDLS","CST","Chennai"], ans:1 },
  { q:"भारत की पहली इलेक्ट्रिक ट्रेन कब चली?", options:["1925","1930","1947","1950"], ans:0 },
  { q:"भारतीय रेलवे में कुल कितने जोन हैं?", options:["16","17","18","19"], ans:2 },
  { q:"भारतीय रेलवे का motto क्या है?", options:["Safety First","Lifeline of Nation","Service to People","None"], ans:1 },

  { q:"रेलवे बोर्ड का गठन कब हुआ?", options:["1905","1907","1910","1912"], ans:1 },
  { q:"रेलवे बजट को सामान्य बजट में कब मिलाया गया?", options:["2015","2016","2017","2018"], ans:2 },
  { q:"भारत की पहली रेल (1853) किसने शुरू की?", options:["British","Indian Govt","Mughals","French"], ans:0 },
  { q:"भारत में सबसे पुराना रेलवे जोन कौन सा है?", options:["Central","Eastern","Northern","Southern"], ans:1 },
  { q:"रेलवे में 'Tatkal' scheme कब शुरू हुई?", options:["1995","1997","1999","2001"], ans:0 }
);

// Math
bank.Math.easy.push(
  { q:"Railway Math Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"18 + 27 = ?", options:["35","40","45","50"], ans:2 },
  { q:"96 - 48 = ?", options:["46","48","50","52"], ans:1 },
  { q:"72 ÷ 8 = ?", options:["7","8","9","10"], ans:2 },
  { q:"15 × 7 = ?", options:["95","100","105","110"], ans:2 },
  { q:"24 × 5 = ?", options:["100","110","120","130"], ans:2 },

  { q:"25% of 200 = ?", options:["25","40","50","60"], ans:2 },
  { q:"10% of 350 = ?", options:["25","30","35","40"], ans:2 },
  { q:"20% of 150 = ?", options:["20","25","30","35"], ans:2 },
  { q:"5% of 800 = ?", options:["30","35","40","45"], ans:2 },
  { q:"15% of 400 = ?", options:["50","55","60","65"], ans:2 },

  { q:"1/2 of 180 = ?", options:["80","90","100","110"], ans:1 },
  { q:"2/3 of 90 = ?", options:["50","55","60","65"], ans:2 },
  { q:"3/5 of 200 = ?", options:["100","110","120","130"], ans:2 },
  { q:"4/7 of 140 = ?", options:["70","75","80","85"], ans:2 },
  { q:"5/8 of 320 = ?", options:["180","200","220","240"], ans:3 },

  { q:"यदि 8x = 64 तो x = ?", options:["6","7","8","9"], ans:2 },
  { q:"यदि 9x = 81 तो x = ?", options:["7","8","9","10"], ans:2 },
  { q:"यदि x/6 = 7 तो x = ?", options:["36","40","42","48"], ans:2 },
  { q:"यदि 3x + 6 = 30 तो x = ?", options:["6","7","8","9"], ans:2 },
  { q:"यदि 5x - 10 = 40 तो x = ?", options:["8","9","10","11"], ans:2 },

  { q:"एक संख्या का 30% = 120 है, संख्या = ?", options:["300","350","400","450"], ans:2 },
  { q:"एक संख्या का 20% = 80 है, संख्या = ?", options:["300","350","400","450"], ans:2 },
  { q:"एक संख्या का 25% = 125 है, संख्या = ?", options:["400","450","500","550"], ans:2 },
  { q:"एक संख्या का 40% = 240 है, संख्या = ?", options:["500","550","600","650"], ans:2 },
  { q:"एक संख्या का 10% = 75 है, संख्या = ?", options:["650","700","750","800"], ans:2 },

  { q:"Ratio 2:5 में कुल 70 है, छोटा भाग=?", options:["15","18","20","25"], ans:2 },
  { q:"Ratio 3:4 में कुल 84 है, बड़ा भाग=?", options:["45","48","50","52"], ans:1 },
  { q:"Ratio 5:6 में कुल 132 है, छोटा भाग=?", options:["55","60","65","70"], ans:1 },
  { q:"Average of 12, 18, 24 = ?", options:["16","18","20","22"], ans:1 },
  { q:"Average of 10, 20, 40 = ?", options:["20","23","25","30"], ans:0 }
);
bank.Math.medium.push(
  { q:"Railway Math Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"SI: P=2000, R=8%, T=3 => SI=?", options:["420","460","480","500"], ans:2 },
  { q:"SI: P=1500, R=10%, T=2 => SI=?", options:["250","280","300","320"], ans:2 },
  { q:"SI: P=2500, R=6%, T=4 => SI=?", options:["500","550","600","650"], ans:2 },
  { q:"SI: P=3000, R=5%, T=3 => SI=?", options:["400","420","450","480"], ans:2 },
  { q:"SI: P=1800, R=12%, T=2 => SI=?", options:["400","420","432","450"], ans:2 },

  { q:"CP=800, Profit=15% => SP=?", options:["900","910","920","930"], ans:2 },
  { q:"CP=1200, Loss=10% => SP=?", options:["1000","1050","1080","1100"], ans:2 },
  { q:"SP=1100, Profit=10% => CP=?", options:["900","950","1000","1050"], ans:2 },
  { q:"SP=720, Loss=20% => CP=?", options:["850","880","900","920"], ans:2 },
  { q:"CP=1500, Profit=12% => SP=?", options:["1650","1680","1690","1700"], ans:1 },

  { q:"Speed=60 km/h, Time=2.5h => Distance=?", options:["120","130","150","160"], ans:2 },
  { q:"Speed=45 km/h, Time=4h => Distance=?", options:["160","170","180","190"], ans:2 },
  { q:"Distance=210 km, Speed=70 km/h => Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Distance=300 km, Speed=75 km/h => Time=?", options:["3h","4h","5h","6h"], ans:1 },
  { q:"Speed=72 km/h, Time=3h => Distance=?", options:["180","200","216","240"], ans:2 },

  { q:"यदि 18% = 90 तो संख्या=?", options:["400","450","500","550"], ans:2 },
  { q:"यदि 25% = 200 तो संख्या=?", options:["700","750","800","850"], ans:2 },
  { q:"यदि 30% = 270 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 12% = 108 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 15% = 135 तो संख्या=?", options:["800","850","900","950"], ans:2 },

  { q:"Ratio 4:7 में कुल 121 है, छोटा भाग=?", options:["40","44","48","52"], ans:1 },
  { q:"Ratio 5:9 में कुल 140 है, बड़ा भाग=?", options:["80","85","90","95"], ans:2 },
  { q:"Ratio 7:8 में कुल 150 है, छोटा भाग=?", options:["60","65","70","75"], ans:2 },
  { q:"Ratio 3:5 में कुल 96 है, बड़ा भाग=?", options:["55","58","60","62"], ans:2 },
  { q:"Ratio 2:3 में कुल 125 है, छोटा भाग=?", options:["45","50","55","60"], ans:1 },

  { q:"Average of 18,22,26,30 = ?", options:["22","23","24","25"], ans:2 },
  { q:"Average of 15,25,35,45 = ?", options:["28","30","32","35"], ans:1 },
  { q:"Average of 11,22,33,44 = ?", options:["25","27","28","30"], ans:0 },
  { q:"Average of 20,30,40,50,60 = ?", options:["35","38","40","42"], ans:2 },
  { q:"Average of 14,28,42 = ?", options:["26","28","30","32"], ans:1 }
);
bank.Math.hard.push(
  { q:"Railway Math Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"CI: P=2000, R=10%, T=2 => Amount?", options:["2200","2400","2420","2600"], ans:2 },
  { q:"CI: P=5000, R=8%, T=2 => Amount?", options:["5600","5832","6000","6200"], ans:1 },
  { q:"CI: P=10000, R=5%, T=2 => Amount?", options:["10500","11000","11025","11250"], ans:2 },
  { q:"CI: P=8000, R=12%, T=2 => Amount?", options:["9600","9800","10035.2","10200"], ans:2 },
  { q:"CI: P=4000, R=15%, T=2 => Amount?", options:["5200","5290","5290","5400"], ans:2 },

  { q:"Train 72 km/h crosses 180m pole in 12 sec. Length?", options:["40m","50m","60m","70m"], ans:2 },
  { q:"Train 90 km/h crosses 250m platform in 20 sec. Length?", options:["200m","220m","250m","300m"], ans:2 },
  { q:"Train 54 km/h crosses 150m pole in 10 sec. Length?", options:["120m","130m","140m","150m"], ans:0 },
  { q:"Train 108 km/h crosses 300m platform in 20 sec. Length?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"Train 60 km/h crosses 200m pole in 15 sec. Length?", options:["40m","45m","50m","55m"], ans:2 },

  { q:"Pipe A fills in 10h, B fills in 15h. Together time?", options:["5h","6h","7h","8h"], ans:1 },
  { q:"A fills in 8h, outlet empties in 12h. Net time?", options:["20h","22h","24h","30h"], ans:2 },
  { q:"A fills in 12h, B empties in 18h. Net time?", options:["30h","32h","36h","40h"], ans:2 },
  { q:"A fills in 15h, B fills in 30h. Together time?", options:["8h","9h","10h","12h"], ans:0 },
  { q:"A fills in 18h, B fills in 24h. Together time?", options:["9h","10h","11h","12h"], ans:1 },

  { q:"If x+y=40 and x-y=12 then x=?", options:["24","25","26","28"], ans:2 },
  { q:"If 5x+9=89 then x=?", options:["14","15","16","17"], ans:2 },
  { q:"If 7x-11=94 then x=?", options:["13","14","15","16"], ans:1 },
  { q:"If x/3 + 8 = 20 then x=?", options:["30","33","36","39"], ans:2 },
  { q:"If 4x-7=69 then x=?", options:["18","19","20","21"], ans:1 },

  { q:"SP=960, Profit=20% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"SP=720, Loss=10% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"Marked price=2500, discount=20% => SP=?", options:["1800","1900","2000","2100"], ans:2 },
  { q:"Marked price=1800, discount=15% => SP=?", options:["1400","1500","1530","1600"], ans:2 },
  { q:"CP=1600, Profit=25% => SP=?", options:["1800","1900","2000","2100"], ans:2 },

  { q:"Ratio 7:9, sum=256. Bigger number?", options:["120","128","135","144"], ans:1 },
  { q:"Ratio 5:8, sum=260. Smaller number?", options:["90","100","110","120"], ans:1 },
  { q:"Ratio 3:7, sum=200. Bigger number?", options:["120","130","140","150"], ans:2 },
  { q:"Ratio 4:11, sum=300. Smaller number?", options:["80","90","100","110"], ans:2 },
  { q:"Ratio 9:11, sum=220. Smaller number?", options:["90","99","100","110"], ans:1 },

  { q:"A can do work in 18 days, B in 12 days. Together time?", options:["7.2","8","9","10"], ans:0 },
  { q:"A does in 15 days, B in 10 days. Together time?", options:["5","6","7","8"], ans:0 },
  { q:"A does in 24 days, B in 16 days. Together time?", options:["9.6","10","11","12"], ans:0 },
  { q:"A does in 30 days, B in 20 days. Together time?", options:["10","12","15","18"], ans:0 },
  { q:"A does in 12 days, B in 8 days. Together time?", options:["4.8","5","6","7"], ans:0 }
);

// Reasoning
bank.Reasoning.easy.push(
  { q:"Railway Reasoning Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"Series: 3,6,9,12, ?", options:["13","14","15","16"], ans:2 },
  { q:"Series: 5,10,15,20, ?", options:["22","24","25","30"], ans:2 },
  { q:"Series: 2,4,6,8, ?", options:["9","10","11","12"], ans:1 },
  { q:"Series: 1,2,3,4, ?", options:["5","6","7","8"], ans:0 },
  { q:"Series: 10,20,30,40, ?", options:["45","50","55","60"], ans:1 },

  { q:"Odd one out: 2,4,6,9", options:["2","4","6","9"], ans:3 },
  { q:"Odd one out: Mango, Apple, Banana, Carrot", options:["Mango","Apple","Banana","Carrot"], ans:3 },
  { q:"Odd one out: Circle, Square, Triangle, Chair", options:["Circle","Square","Triangle","Chair"], ans:3 },
  { q:"Odd one out: Pen, Pencil, Eraser, Apple", options:["Pen","Pencil","Eraser","Apple"], ans:3 },
  { q:"Odd one out: 11,13,17,21", options:["11","13","17","21"], ans:3 },

  { q:"If A=1, B=2 then D=?", options:["3","4","5","6"], ans:1 },
  { q:"If M=13 then P=?", options:["14","15","16","17"], ans:2 },
  { q:"If X=24 then Z=?", options:["25","26","27","28"], ans:1 },
  { q:"If C=3 then F=?", options:["4","5","6","7"], ans:1 },
  { q:"If G=7 then I=?", options:["8","9","10","11"], ans:1 },

  { q:"Opposite of North?", options:["East","West","South","None"], ans:2 },
  { q:"Opposite of Left?", options:["Right","Up","Down","None"], ans:0 },
  { q:"Day after Monday?", options:["Tuesday","Wednesday","Thursday","Friday"], ans:0 },
  { q:"Day before Sunday?", options:["Friday","Saturday","Monday","Tuesday"], ans:1 },
  { q:"How many months in a year?", options:["10","11","12","13"], ans:2 },

  { q:"How many letters in 'TRAIN'?", options:["4","5","6","7"], ans:1 },
  { q:"How many sides in triangle?", options:["2","3","4","5"], ans:1 },
  { q:"How many minutes in 2 hours?", options:["60","90","120","150"], ans:2 },
  { q:"How many days in a week?", options:["5","6","7","8"], ans:2 },
  { q:"How many zeros in 100?", options:["1","2","3","4"], ans:1 },

  { q:"Next: 2,4,8,16, ?", options:["20","24","30","32"], ans:3 },
  { q:"Next: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },
  { q:"Next: 6,12,18,24, ?", options:["28","30","32","36"], ans:1 },
  { q:"Next: 9,18,27,36, ?", options:["40","45","48","54"], ans:1 },
  { q:"Next: 7,14,21,28, ?", options:["30","32","35","40"], ans:2 }
);
bank.Reasoning.medium.push(
  { q:"Railway Reasoning Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"Coding: CAT = DBU, DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Coding: BAT = CBV, RAT = ?", options:["SBU","SBU","SBU","SBU"], ans:0 },
  { q:"Coding: PEN = QFO, INK = ?", options:["JOL","JML","JNK","JNL"], ans:0 },
  { q:"Coding: SUN = TVP, MOON = ?", options:["NPPO","NPPN","NPPM","NPPQ"], ans:0 },
  { q:"Coding: MAN = NBO, FAN = ?", options:["GBO","GBO","GBO","GBO"], ans:0 },

  { q:"Find missing: 2,6,18,54, ?", options:["108","144","162","216"], ans:2 },
  { q:"Find missing: 3,9,27,81, ?", options:["162","243","324","405"], ans:1 },
  { q:"Find missing: 4,8,16,32, ?", options:["48","56","64","72"], ans:2 },
  { q:"Find missing: 5,10,20,40, ?", options:["60","70","80","90"], ans:2 },
  { q:"Find missing: 10,20,40,80, ?", options:["120","140","160","180"], ans:2 },

  { q:"A is taller than B, B taller than C. Tallest?", options:["A","B","C","None"], ans:0 },
  { q:"A is shorter than B, B shorter than C. Shortest?", options:["A","B","C","None"], ans:0 },
  { q:"Which comes next: AZ, BY, CX, ?", options:["DW","EV","FU","GV"], ans:0 },
  { q:"Which comes next: 1A, 2B, 3C, ?", options:["4D","5E","6F","7G"], ans:0 },
  { q:"Which comes next: AB, CD, EF, ?", options:["GH","GI","HG","HI"], ans:0 },

  { q:"If 12 is coded as 21 then 34 as?", options:["43","44","33","24"], ans:0 },
  { q:"If 56 is coded as 65 then 78 as?", options:["87","88","77","67"], ans:0 },
  { q:"If 23 is coded as 32 then 45 as?", options:["54","55","44","35"], ans:0 },
  { q:"If A=26, B=25 then D=?", options:["24","23","22","21"], ans:1 },
  { q:"If C=24 then E=?", options:["22","21","20","19"], ans:0 },

  { q:"Mirror image is related to?", options:["Reflection","Rotation","Translation","None"], ans:0 },
  { q:"Find missing: 1,3,7,15, ?", options:["25","31","33","35"], ans:1 },
  { q:"Find missing: 3,8,18,38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 4,9,19,39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 7,16,34,70, ?", options:["140","142","144","146"], ans:1 },

  { q:"Which is a fruit?", options:["Potato","Onion","Mango","Carrot"], ans:2 },
  { q:"Which is a bird?", options:["Cow","Crow","Dog","Cat"], ans:1 },
  { q:"Which is water transport?", options:["Bus","Train","Ship","Car"], ans:2 },
  { q:"Which is a metal?", options:["Plastic","Iron","Wood","Rubber"], ans:1 },
  { q:"Which is a planet?", options:["Sun","Moon","Earth","Star"], ans:2 },

  { q:"Series: 11,22,33,44, ?", options:["55","56","57","60"], ans:0 },
  { q:"Series: 6,11,16,21, ?", options:["24","25","26","27"], ans:1 },
  { q:"Series: 9,18,27,36, ?", options:["40","45","48","54"], ans:1 },
  { q:"Series: 7,17,27,37, ?", options:["45","47","57","67"], ans:1 },
  { q:"Series: 4,9,16,25, ?", options:["30","35","36","49"], ans:2 }
);
bank.Reasoning.hard.push(
  { q:"Railway Reasoning Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"Blood relation: A brother of B, B mother of C. A is ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },
  { q:"P is sister of Q, Q is father of R. P is R's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"X is mother of Y, Y is brother of Z. X is Z's ?", options:["Mother","Aunt","Sister","Grandmother"], ans:0 },
  { q:"A is father of B, B is sister of C. A is C's ?", options:["Father","Uncle","Brother","Cousin"], ans:0 },
  { q:"M is brother of N, N is mother of P. M is P's ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },

  { q:"Direction: 4km East, 3km North. Distance from start?", options:["5km","6km","7km","8km"], ans:0 },
  { q:"Direction: 6km West, 8km North. Distance from start?", options:["10km","12km","14km","16km"], ans:0 },
  { q:"A walks 10m N, 5m E, 10m S. Distance from start?", options:["0","5","10","15"], ans:1 },
  { q:"A walks 7m E, 24m N. Distance from start?", options:["23m","24m","25m","26m"], ans:2 },
  { q:"A walks 5km E, 12km N. Distance from start?", options:["10km","12km","13km","17km"], ans:2 },

  { q:"All cats are animals. Some animals are dogs. Conclusion?", options:["Some cats dogs","All dogs cats","No dogs cats","None"], ans:3 },
  { q:"All fruits are sweet. Mango is a fruit. Conclusion?", options:["Mango sweet","Mango sour","Mango not fruit","None"], ans:0 },
  { q:"All cars are vehicles. Some vehicles are bikes. Conclusion?", options:["All cars bikes","Some cars bikes","No car bike","None"], ans:3 },
  { q:"All boys are students. Some students are players. Conclusion?", options:["All boys players","Some boys players","No boys players","None"], ans:3 },
  { q:"All pens are tools. Some tools are books. Conclusion?", options:["All pens books","Some pens books","No pen book","None"], ans:3 },

  { q:"If SOUTH is coded as TQVUI, then NORTH is?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"If INDIA is coded as JOEJB, then CHINA is?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },
  { q:"If 123 is coded as 234 then 789 is coded as?", options:["8910","890","891","91011"], ans:2 },
  { q:"If 579 is coded as 6810 then 468 is coded as?", options:["579","579","5710","5799"], ans:0 },

  { q:"A is 2nd left of B, B is 3rd right of C. A is?", options:["Left of C","Right of C","Same","Cannot say"], ans:0 },
  { q:"In a row, P is 5th from left, Q is 9th from left. Q is?", options:["4 left","4 right","same","Cannot say"], ans:1 },
  { q:"In a row total 8. R is 4th left, S is 3rd right. R is?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },
  { q:"In a row total 10. A is 3rd left, B is 4th right. A is?", options:["Left of B","Right of B","Same","Cannot say"], ans:0 },
  { q:"In a row, M is 6th left, N is 2nd left. N is?", options:["4 left of M","4 right of M","Same","Cannot say"], ans:0 },

  { q:"Find missing: 3,8,18,38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 4,9,19,39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 5,12,26,54, ?", options:["98","108","110","112"], ans:1 },
  { q:"Find missing: 7,16,34,70, ?", options:["140","142","144","146"], ans:1 },
  { q:"Find missing: 2,5,11,23, ?", options:["45","46","47","48"], ans:2 },

  { q:"Which comes next: A1, C3, E5, ?", options:["F6","G7","H8","I9"], ans:1 },
  { q:"Which comes next: Z1, X3, V5, ?", options:["U6","T7","S7","T9"], ans:1 },
  { q:"Which comes next: 2A, 4C, 6E, ?", options:["8G","8F","10G","10H"], ans:1 },
  { q:"Which comes next: AB2, CD4, EF6, ?", options:["GH8","GI8","HG8","HI8"], ans:0 },
  { q:"Which comes next: 3D, 6G, 9J, ?", options:["12L","12M","12K","15M"], ans:2 }
);

// English
bank.English.easy.push(
  { q:"Railway English Easy Q1 ...", options:["A","B","C","D"], ans:0 },
   { q:"Synonym of FAST?", options:["Quick","Slow","Weak","Cold"], ans:0 },
  { q:"Synonym of HAPPY?", options:["Sad","Joyful","Angry","Weak"], ans:1 },
  { q:"Synonym of SMALL?", options:["Tiny","Huge","Big","Large"], ans:0 },
  { q:"Synonym of BEGIN?", options:["Start","Stop","End","Close"], ans:0 },
  { q:"Synonym of HELP?", options:["Assist","Hurt","Break","Stop"], ans:0 },

  { q:"Antonym of HOT?", options:["Cold","Warm","Heat","Cool"], ans:0 },
  { q:"Antonym of OLD?", options:["Young","New","Fresh","All"], ans:0 },
  { q:"Antonym of UP?", options:["Down","Left","Right","Top"], ans:0 },
  { q:"Antonym of RICH?", options:["Poor","Strong","Big","Happy"], ans:0 },
  { q:"Antonym of CLEAN?", options:["Dirty","Fresh","Pure","Clear"], ans:0 },

  { q:"Fill: She ___ tea.", options:["drink","drinks","drinking","drank"], ans:1 },
  { q:"Fill: They ___ playing.", options:["is","are","was","be"], ans:1 },
  { q:"Fill: I ___ a pen.", options:["have","has","had","having"], ans:0 },
  { q:"Fill: He ___ a book.", options:["read","reads","reading","readed"], ans:1 },
  { q:"Fill: We ___ friends.", options:["is","are","was","be"], ans:1 },

  { q:"Plural of Man?", options:["Mans","Mens","Men","Manes"], ans:2 },
  { q:"Plural of Woman?", options:["Womans","Women","Womens","Womanes"], ans:1 },
  { q:"Plural of Child?", options:["Childs","Children","Childrens","Childes"], ans:1 },
  { q:"Plural of Tooth?", options:["Tooths","Teeth","Toothes","Toothes"], ans:1 },
  { q:"Plural of Foot?", options:["Foots","Feets","Feet","Fets"], ans:2 },

  { q:"Opposite of TRUE?", options:["False","Right","Sure","Pure"], ans:0 },
  { q:"Opposite of DAY?", options:["Night","Sun","Light","Time"], ans:0 },
  { q:"Opposite of LIGHT?", options:["Bright","Dark","White","Clear"], ans:1 },
  { q:"Opposite of BIG?", options:["Large","Huge","Small","Heavy"], ans:2 },
  { q:"Opposite of OPEN?", options:["Close","Shut","Both","None"], ans:2 },

  { q:"One word: A place where books are kept", options:["Library","School","Office","Bank"], ans:0 },
  { q:"One word: A person who teaches", options:["Teacher","Doctor","Driver","Painter"], ans:0 },
  { q:"One word: A person who writes poems", options:["Poet","Singer","Dancer","Player"], ans:0 },
  { q:"One word: A person who drives a train", options:["Driver","Pilot","Guard","Clerk"], ans:0 },
  { q:"One word: A person who works in a hospital", options:["Doctor","Teacher","Farmer","Singer"], ans:0 }
);
bank.English.medium.push(
  { q:"Railway English Medium Q1 ...", options:["A","B","C","D"], ans:1 },
   { q:"Fill: He ___ to school daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: The sun ___ in the east.", options:["rise","rises","rising","rose"], ans:1 },
  { q:"Choose correct: I have ___ my work.", options:["done","do","did","doing"], ans:0 },
  { q:"Choose correct: She is ___ honest girl.", options:["a","an","the","no"], ans:1 },
  { q:"Fill: They ___ watching TV.", options:["is","are","was","be"], ans:1 },

  { q:"Correct: I ___ a letter yesterday.", options:["write","writes","wrote","written"], ans:2 },
  { q:"Correct: She ___ not come.", options:["do","does","did","done"], ans:1 },
  { q:"Correct: He ___ been to Delhi.", options:["has","have","had","having"], ans:0 },
  { q:"Correct: They ___ finished the work.", options:["has","have","had","having"], ans:1 },
  { q:"Correct: We ___ late today.", options:["is","are","was","be"], ans:1 },

  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },
  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },
  { q:"Synonym of DANGER?", options:["Risk","Safe","Good","Peace"], ans:0 },

  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },

  { q:"Correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  { q:"Choose correct: He is good ___ Maths.", options:["in","at","on","for"], ans:1 },
  { q:"Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"Choose correct: She is married ___ him.", options:["with","to","by","on"], ans:1 }
);
bank.English.hard.push(
  { q:"Railway English Hard Q1 ...", options:["A","B","C","D"], ans:2 },
   { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'abandon'?", options:["leave","eat","run","build"], ans:0 },
  { q:"Meaning of 'transparent'?", options:["clear","dirty","heavy","weak"], ans:0 },
  { q:"Meaning of 'fragile'?", options:["strong","breakable","heavy","fast"], ans:1 },
  { q:"Meaning of 'persistent'?", options:["continuous","lazy","weak","slow"], ans:0 },

  { q:"Correct passive: 'They made a plan.'", options:["A plan made","A plan was made","Plan is made","Plan made"], ans:1 },
  { q:"Correct passive: 'He writes a letter.'", options:["A letter is written by him","A letter was written","A letter written","Letter is wrote"], ans:0 },
  { q:"Correct passive: 'She cooks food.'", options:["Food cooked","Food is cooked","Food was cooked","Food is cook"], ans:1 },
  { q:"Correct passive: 'They help me.'", options:["I am helped by them","I helped by them","I was help by them","I is helped"], ans:0 },
  { q:"Correct passive: 'We play cricket.'", options:["Cricket played","Cricket is played","Cricket was play","Cricket is play"], ans:1 },

  { q:"One word: One who loves books", options:["Bibliophile","Philosopher","Librarian","Editor"], ans:0 },
  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Optimist","Philanthropist","Pessimist"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: One who can do many works", options:["Versatile","Lazy","Weak","Slow"], ans:0 },

  { q:"Choose correct: If I ___ rich, I would help you.", options:["am","was","were","be"], ans:2 },
  { q:"Choose correct: He said that he ___ busy.", options:["is","was","were","be"], ans:1 },
  { q:"Choose correct: I wish I ___ a car.", options:["have","had","has","having"], ans:1 },
  { q:"Choose correct: It is time we ___ home.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: She suggested that he ___ rest.", options:["take","takes","took","taken"], ans:0 },

  { q:"Spot error: He do not like tea.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 },

  { q:"Choose correct: No sooner ___ I reached than it started raining.", options:["had","have","has","was"], ans:0 },
  { q:"Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 },
  { q:"Choose correct: She is interested ___ music.", options:["on","in","at","by"], ans:1 }
);
// =========================
// UPSSSC - ADD QUESTIONS
// =========================

// GK
bank.GK.easy.push(
  { q:"UPSSSC GK Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"उत्तर प्रदेश की राजधानी क्या है?", options:["Kanpur","Lucknow","Varanasi","Agra"], ans:1 },
  { q:"भारत की राजधानी क्या है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"भारत का राष्ट्रीय पशु कौन है?", options:["Lion","Tiger","Elephant","Horse"], ans:1 },
  { q:"भारत का राष्ट्रीय पक्षी कौन है?", options:["Crow","Peacock","Eagle","Sparrow"], ans:1 },
  { q:"भारत का राष्ट्रीय फूल कौन सा है?", options:["Rose","Lotus","Lily","Sunflower"], ans:1 },

  { q:"गांधी जयंती कब मनाई जाती है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:2 },
  { q:"स्वतंत्रता दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","14 Nov"], ans:0 },
  { q:"गणतंत्र दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:1 },
  { q:"बाल दिवस कब मनाया जाता है?", options:["14 Nov","2 Oct","15 Aug","26 Jan"], ans:0 },
  { q:"शिक्षक दिवस कब मनाया जाता है?", options:["5 Sep","15 Aug","26 Jan","2 Oct"], ans:0 },

  { q:"ताजमहल कहाँ है?", options:["Delhi","Agra","Lucknow","Jaipur"], ans:1 },
  { q:"लाल किला कहाँ है?", options:["Delhi","Agra","Mumbai","Kolkata"], ans:0 },
  { q:"कुतुब मीनार कहाँ है?", options:["Delhi","Agra","Jaipur","Lucknow"], ans:0 },
  { q:"चारमीनार कहाँ है?", options:["Hyderabad","Delhi","Agra","Jaipur"], ans:0 },
  { q:"गोल गुम्बद कहाँ है?", options:["Bijapur","Agra","Delhi","Lucknow"], ans:0 },

  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल)?", options:["UP","MP","Rajasthan","Bihar"], ans:2 },
  { q:"भारत का सबसे छोटा राज्य कौन सा है?", options:["Goa","Sikkim","Tripura","Manipur"], ans:0 },
  { q:"भारत की सबसे लंबी नदी कौन सी है?", options:["Yamuna","Ganga","Narmada","Tapti"], ans:1 },
  { q:"भारत का सबसे बड़ा महासागर कौन सा है?", options:["Indian","Atlantic","Pacific","Arctic"], ans:2 },
  { q:"भारत का सबसे ऊँचा पर्वत कौन सा है?", options:["K2","Kanchenjunga","Everest","Nanda Devi"], ans:1 },

  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },
  { q:"WHO का मुख्यालय कहाँ है?", options:["Geneva","Paris","London","New York"], ans:0 },
  { q:"UN का मुख्यालय कहाँ है?", options:["New York","Paris","Geneva","Tokyo"], ans:0 },
  { q:"भारत के प्रथम प्रधानमंत्री कौन थे?", options:["Nehru","Patel","Gandhi","Azad"], ans:0 },
  { q:"भारत के प्रथम राष्ट्रपति कौन थे?", options:["Rajendra Prasad","Nehru","Gandhi","Patel"], ans:0 },

  { q:"जन गण मन किसने लिखा?", options:["Bankim","Tagore","Premchand","Nehru"], ans:1 },
  { q:"वंदे मातरम् किसने लिखा?", options:["Tagore","Bankim","Nehru","Gandhi"], ans:1 },
  { q:"भारत की मुद्रा क्या है?", options:["Dollar","Rupee","Euro","Yen"], ans:1 },
  { q:"1 किलोमीटर में कितने मीटर होते हैं?", options:["100","500","1000","1500"], ans:2 },
  { q:"भारत में कुल कितने राज्य हैं?", options:["27","28","29","30"], ans:1 }
);
bank.GK.medium.push(
  { q:"UPSSSC GK Medium Q1 ...", options:["A","B","C","D"], ans:1 },
   { q:"उत्तर प्रदेश का गठन कब हुआ?", options:["1947","1950","1956","1937"], ans:1 },
  { q:"उत्तर प्रदेश का राजकीय पशु क्या है?", options:["Barasingha","Swamp Deer","Tiger","Elephant"], ans:1 },
  { q:"उत्तर प्रदेश का राजकीय पक्षी?", options:["Sarus Crane","Peacock","Eagle","Crow"], ans:0 },
  { q:"उत्तर प्रदेश का राजकीय वृक्ष?", options:["Neem","Ashok","Banyan","Mango"], ans:1 },
  { q:"उत्तर प्रदेश का राजकीय फूल?", options:["Lotus","Palash","Rose","Lily"], ans:1 },

  { q:"लोकसभा का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:1 },
  { q:"राज्यसभा के सदस्यों का कार्यकाल कितने वर्ष?", options:["4","5","6","7"], ans:2 },
  { q:"भारत की संसद में कितने सदन हैं?", options:["1","2","3","4"], ans:1 },
  { q:"RBI की स्थापना कब हुई?", options:["1930","1935","1947","1950"], ans:1 },
  { q:"भारत में पंचवर्षीय योजना कब शुरू हुई?", options:["1947","1951","1955","1960"], ans:1 },

  { q:"भारत का पहला उपग्रह कौन सा था?", options:["INSAT","Aryabhata","Bhaskara","Rohini"], ans:1 },
  { q:"ISRO का मुख्यालय कहाँ है?", options:["Delhi","Mumbai","Bengaluru","Chennai"], ans:2 },
  { q:"भारत की पहली महिला प्रधानमंत्री कौन थीं?", options:["Indira Gandhi","Sonia Gandhi","Pratibha Patil","Sarojini Naidu"], ans:0 },
  { q:"भारत के पहले मुख्य न्यायाधीश कौन थे?", options:["H J Kania","Ambedkar","Nehru","Patel"], ans:0 },
  { q:"भारत के पहले मुख्य चुनाव आयुक्त कौन थे?", options:["Sukumar Sen","TN Seshan","Rajendra Prasad","Kamaraj"], ans:0 },

  { q:"CAG का उल्लेख किस अनुच्छेद में है?", options:["148","124","280","370"], ans:0 },
  { q:"Finance Commission का उल्लेख किस अनुच्छेद में है?", options:["148","280","52","14"], ans:1 },
  { q:"Election Commission का उल्लेख किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"संविधान संशोधन किस अनुच्छेद में है?", options:["352","356","360","368"], ans:3 },
  { q:"धन विधेयक किस अनुच्छेद में है?", options:["109","110","111","112"], ans:1 },

  { q:"भाखड़ा नांगल बाँध किस नदी पर है?", options:["Sutlej","Ganga","Yamuna","Narmada"], ans:0 },
  { q:"तेहरी बाँध किस नदी पर है?", options:["Ganga","Bhagirathi","Yamuna","Narmada"], ans:1 },
  { q:"हीराकुंड बाँध किस नदी पर है?", options:["Mahanadi","Godavari","Tapti","Krishna"], ans:0 },
  { q:"चिल्का झील किस राज्य में है?", options:["Odisha","WB","UP","MP"], ans:0 },
  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["Sundarbans","Godavari","Krishna","Mahanadi"], ans:0 },

  { q:"योजना आयोग की जगह किसने ली?", options:["NITI Aayog","Finance Comm","CBI","CVC"], ans:0 },
  { q:"भारत का पहला परमाणु परीक्षण कब हुआ?", options:["1968","1974","1984","1998"], ans:1 },
  { q:"UP का सबसे बड़ा जिला (क्षेत्रफल)?", options:["Lakhimpur Kheri","Prayagraj","Kanpur","Lucknow"], ans:0 },
  { q:"UP का सबसे बड़ा शहर (जनसंख्या)?", options:["Lucknow","Kanpur","Varanasi","Agra"], ans:1 },
  { q:"UP की प्रमुख नदी कौन सी है?", options:["Ganga","Kaveri","Narmada","Godavari"], ans:0 }
);
bank.GK.hard.push(
  { q:"UPSSSC GK Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"मौलिक अधिकार किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },
  { q:"नीति निदेशक तत्व किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },
  { q:"मौलिक कर्तव्य किस भाग में हैं?", options:["Part III","Part IVA","Part IV","Part V"], ans:1 },
  { q:"समवर्ती सूची किस अनुसूची में है?", options:["5th","6th","7th","8th"], ans:2 },
  { q:"भाषाओं की सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:2 },

  { q:"राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:0 },
  { q:"राष्ट्रपति शासन किस अनुच्छेद में है?", options:["352","356","360","368"], ans:1 },
  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:2 },
  { q:"President pardon power किस अनुच्छेद में है?", options:["72","74","75","80"], ans:0 },
  { q:"Governor pardon power किस अनुच्छेद में है?", options:["161","168","154","356"], ans:0 },

  { q:"Attorney General का उल्लेख किस अनुच्छेद में है?", options:["76","124","148","280"], ans:0 },
  { q:"UPSC का उल्लेख किस भाग में है?", options:["Part XIV","Part XV","Part XVI","Part XVII"], ans:0 },
  { q:"संयुक्त बैठक का उल्लेख किस अनुच्छेद में है?", options:["108","109","110","111"], ans:0 },
  { q:"भारत के उपराष्ट्रपति का उल्लेख किस अनुच्छेद में है?", options:["63","64","65","66"], ans:3 },
  { q:"राज्यसभा का सभापति कौन होता है?", options:["President","Vice President","PM","Speaker"], ans:1 },

  { q:"संविधान सभा के अध्यक्ष कौन थे?", options:["Nehru","Rajendra Prasad","Ambedkar","Patel"], ans:1 },
  { q:"Drafting Committee के अध्यक्ष कौन थे?", options:["Ambedkar","Nehru","Rajendra Prasad","Patel"], ans:0 },
  { q:"संविधान सभा में उद्देश्य प्रस्ताव किसने रखा?", options:["Nehru","Patel","Ambedkar","Rajendra Prasad"], ans:0 },
  { q:"मूल संविधान में कितनी अनुसूचियाँ थीं?", options:["8","10","12","14"], ans:0 },
  { q:"मूल संविधान में कितने अनुच्छेद थे?", options:["395","400","450","365"], ans:0 },

  { q:"UP में पंचायती राज किस संशोधन से?", options:["71st","73rd","74th","75th"], ans:1 },
  { q:"नगरपालिका व्यवस्था किस संशोधन से?", options:["72nd","73rd","74th","75th"], ans:2 },
  { q:"राज्यपाल की नियुक्ति कौन करता है?", options:["PM","President","CM","Speaker"], ans:1 },
  { q:"मुख्यमंत्री की नियुक्ति कौन करता है?", options:["President","Governor","PM","CJ"], ans:1 },
  { q:"भारत के महाधिवक्ता की नियुक्ति कौन करता है?", options:["PM","President","CJ","Parliament"], ans:1 },

  { q:"UP का उच्च न्यायालय कहाँ है?", options:["Lucknow","Prayagraj","Varanasi","Agra"], ans:1 },
  { q:"UP High Court की Lucknow bench कहाँ है?", options:["Kanpur","Lucknow","Ayodhya","Gorakhpur"], ans:1 },
  { q:"UP की विधानसभा का कार्यकाल कितने वर्ष?", options:["4","5","6","7"], ans:1 },
  { q:"UP की विधान परिषद को क्या कहते हैं?", options:["Upper House","Lower House","Both","None"], ans:0 },
  { q:"UP में विधान परिषद किस राज्य में होती है?", options:["All states","Few states","None","Only UT"], ans:1 },

  { q:"गंगा नदी का उद्गम कहाँ है?", options:["Gangotri","Yamunotri","Amarnath","Kedarnath"], ans:0 },
  { q:"यमुना नदी का उद्गम कहाँ है?", options:["Gangotri","Yamunotri","Haridwar","Prayagraj"], ans:1 },
  { q:"गोदावरी नदी का उद्गम कहाँ है?", options:["Trimbakeshwar","Amarkantak","Mahabaleshwar","Nashik"], ans:0 },
  { q:"नर्मदा नदी का उद्गम कहाँ है?", options:["Trimbak","Amarkantak","Gangotri","Haridwar"], ans:1 },
  { q:"सिंधु नदी का उद्गम कहाँ है?", options:["Tibet","Nepal","Bhutan","India only"], ans:0 }
);

// Math
bank.Math.easy.push(
  { q:"UPSSSC Math Easy Q1 ...", options:["A","B","C","D"], ans:0 },
   { q:"36 + 24 = ?", options:["50","55","60","65"], ans:2 },
  { q:"90 - 35 = ?", options:["50","55","60","65"], ans:1 },
  { q:"12 × 9 = ?", options:["96","108","120","132"], ans:1 },
  { q:"144 ÷ 12 = ?", options:["10","11","12","13"], ans:2 },
  { q:"25 × 6 = ?", options:["120","130","150","160"], ans:2 },

  { q:"20% of 250 = ?", options:["40","45","50","55"], ans:2 },
  { q:"10% of 480 = ?", options:["40","45","48","50"], ans:2 },
  { q:"15% of 200 = ?", options:["20","25","30","35"], ans:2 },
  { q:"5% of 900 = ?", options:["40","45","50","55"], ans:1 },
  { q:"25% of 360 = ?", options:["70","80","90","100"], ans:2 },

  { q:"1/2 of 260 = ?", options:["120","130","140","150"], ans:1 },
  { q:"2/5 of 200 = ?", options:["60","70","80","90"], ans:2 },
  { q:"3/4 of 120 = ?", options:["80","90","100","110"], ans:1 },
  { q:"4/7 of 140 = ?", options:["70","75","80","85"], ans:2 },
  { q:"5/8 of 400 = ?", options:["200","220","240","250"], ans:3 },

  { q:"यदि 7x = 56 तो x = ?", options:["6","7","8","9"], ans:2 },
  { q:"यदि 9x = 99 तो x = ?", options:["9","10","11","12"], ans:1 },
  { q:"यदि x/5 = 9 तो x = ?", options:["40","45","50","55"], ans:1 },
  { q:"यदि 3x + 9 = 36 तो x = ?", options:["7","8","9","10"], ans:2 },
  { q:"यदि 4x - 8 = 40 तो x = ?", options:["10","11","12","13"], ans:2 },

  { q:"एक संख्या का 20% = 60 है, संख्या = ?", options:["250","280","300","320"], ans:2 },
  { q:"एक संख्या का 25% = 75 है, संख्या = ?", options:["250","280","300","320"], ans:2 },
  { q:"एक संख्या का 10% = 45 है, संख्या = ?", options:["400","420","450","480"], ans:2 },
  { q:"एक संख्या का 30% = 150 है, संख्या = ?", options:["400","450","500","550"], ans:2 },
  { q:"एक संख्या का 40% = 200 है, संख्या = ?", options:["450","480","500","520"], ans:2 },

  { q:"Average of 10, 20, 30 = ?", options:["15","20","25","30"], ans:1 },
  { q:"Average of 12, 18, 24 = ?", options:["16","18","20","22"], ans:1 },
  { q:"Average of 5, 15, 25 = ?", options:["10","12","15","18"], ans:2 },
  { q:"Average of 8, 16, 24 = ?", options:["14","16","18","20"], ans:1 },
  { q:"Average of 7, 14, 21 = ?", options:["12","13","14","15"], ans:2 }
);
bank.Math.medium.push(
  { q:"UPSSSC Math Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"SI: P=2500, R=8%, T=3 => SI=?", options:["500","550","600","650"], ans:2 },
  { q:"SI: P=1800, R=10%, T=2 => SI=?", options:["320","340","360","380"], ans:2 },
  { q:"SI: P=3000, R=6%, T=4 => SI=?", options:["600","650","720","750"], ans:2 },
  { q:"SI: P=4000, R=5%, T=3 => SI=?", options:["500","550","600","650"], ans:2 },
  { q:"SI: P=1500, R=12%, T=2 => SI=?", options:["320","340","360","380"], ans:2 },

  { q:"CP=800, Profit=20% => SP=?", options:["920","940","960","980"], ans:2 },
  { q:"CP=1200, Loss=15% => SP=?", options:["980","1000","1020","1050"], ans:2 },
  { q:"SP=1320, Profit=10% => CP=?", options:["1100","1150","1200","1250"], ans:2 },
  { q:"SP=720, Loss=20% => CP=?", options:["850","880","900","920"], ans:2 },
  { q:"CP=1500, Profit=12% => SP=?", options:["1650","1680","1700","1720"], ans:1 },

  { q:"Speed=60 km/h, Time=3h => Distance=?", options:["150","160","180","200"], ans:2 },
  { q:"Speed=45 km/h, Time=4h => Distance=?", options:["160","170","180","190"], ans:2 },
  { q:"Distance=210 km, Speed=70 km/h => Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Distance=300 km, Speed=75 km/h => Time=?", options:["3h","4h","5h","6h"], ans:1 },
  { q:"Speed=72 km/h, Time=2.5h => Distance=?", options:["160","170","180","190"], ans:2 },

  { q:"यदि 18% = 90 तो संख्या=?", options:["400","450","500","550"], ans:2 },
  { q:"यदि 25% = 200 तो संख्या=?", options:["700","750","800","850"], ans:2 },
  { q:"यदि 30% = 270 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 12% = 108 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 15% = 135 तो संख्या=?", options:["800","850","900","950"], ans:2 },

  { q:"Ratio 4:7 में कुल 121 है, छोटा भाग=?", options:["40","44","48","52"], ans:1 },
  { q:"Ratio 5:9 में कुल 140 है, बड़ा भाग=?", options:["80","85","90","95"], ans:2 },
  { q:"Ratio 7:8 में कुल 150 है, छोटा भाग=?", options:["60","65","70","75"], ans:2 },
  { q:"Ratio 3:5 में कुल 96 है, बड़ा भाग=?", options:["55","58","60","62"], ans:2 },
  { q:"Ratio 2:3 में कुल 125 है, छोटा भाग=?", options:["45","50","55","60"], ans:1 },

  { q:"Average of 18,22,26,30 = ?", options:["22","23","24","25"], ans:2 },
  { q:"Average of 15,25,35,45 = ?", options:["28","30","32","35"], ans:1 },
  { q:"Average of 11,22,33,44 = ?", options:["25","27","28","30"], ans:0 },
  { q:"Average of 20,30,40,50,60 = ?", options:["35","38","40","42"], ans:2 },
  { q:"Average of 14,28,42 = ?", options:["26","28","30","32"], ans:1 }
);
bank.Math.hard.push(
  { q:"UPSSSC Math Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"CI: P=2000, R=10%, T=2 => Amount?", options:["2200","2400","2420","2600"], ans:2 },
  { q:"CI: P=5000, R=8%, T=2 => Amount?", options:["5600","5832","6000","6200"], ans:1 },
  { q:"CI: P=10000, R=5%, T=2 => Amount?", options:["10500","11000","11025","11250"], ans:2 },
  { q:"CI: P=8000, R=12%, T=2 => Amount?", options:["9600","9800","10035.2","10200"], ans:2 },
  { q:"CI: P=4000, R=15%, T=2 => Amount?", options:["5200","5290","5290","5400"], ans:2 },

  { q:"Pipe A fills in 10h, B fills in 15h. Together time?", options:["5h","6h","7h","8h"], ans:1 },
  { q:"A fills in 8h, outlet empties in 12h. Net time?", options:["20h","22h","24h","30h"], ans:2 },
  { q:"A fills in 12h, B empties in 18h. Net time?", options:["30h","32h","36h","40h"], ans:2 },
  { q:"A fills in 15h, B fills in 30h. Together time?", options:["8h","9h","10h","12h"], ans:0 },
  { q:"A fills in 18h, B fills in 24h. Together time?", options:["9h","10h","11h","12h"], ans:1 },

  { q:"If x+y=40 and x-y=12 then x=?", options:["24","25","26","28"], ans:2 },
  { q:"If 5x+9=89 then x=?", options:["14","15","16","17"], ans:2 },
  { q:"If 7x-11=94 then x=?", options:["13","14","15","16"], ans:1 },
  { q:"If x/3 + 8 = 20 then x=?", options:["30","33","36","39"], ans:2 },
  { q:"If 4x-7=69 then x=?", options:["18","19","20","21"], ans:1 },

  { q:"Train 72 km/h crosses 180m pole in 12 sec. Length?", options:["40m","50m","60m","70m"], ans:2 },
  { q:"Train 90 km/h crosses 250m platform in 20 sec. Length?", options:["200m","220m","250m","300m"], ans:2 },
  { q:"Train 54 km/h crosses 150m pole in 10 sec. Length?", options:["120m","130m","140m","150m"], ans:0 },
  { q:"Train 108 km/h crosses 300m platform in 20 sec. Length?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"Train 60 km/h crosses 200m pole in 15 sec. Length?", options:["40m","45m","50m","55m"], ans:2 },

  { q:"A can do work in 18 days, B in 12 days. Together time?", options:["7.2","8","9","10"], ans:0 },
  { q:"A does in 15 days, B in 10 days. Together time?", options:["5","6","7","8"], ans:0 },
  { q:"A does in 24 days, B in 16 days. Together time?", options:["9.6","10","11","12"], ans:0 },
  { q:"A does in 30 days, B in 20 days. Together time?", options:["10","12","15","18"], ans:0 },
  { q:"A does in 12 days, B in 8 days. Together time?", options:["4.8","5","6","7"], ans:0 },

  { q:"Ratio 7:9, sum=256. Bigger number?", options:["120","128","135","144"], ans:1 },
  { q:"Ratio 5:8, sum=260. Smaller number?", options:["90","100","110","120"], ans:1 },
  { q:"Ratio 3:7, sum=200. Bigger number?", options:["120","130","140","150"], ans:2 },
  { q:"Ratio 4:11, sum=300. Smaller number?", options:["80","90","100","110"], ans:2 },
  { q:"Ratio 9:11, sum=220. Smaller number?", options:["90","99","100","110"], ans:1 },

  { q:"SP=960, Profit=20% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"SP=720, Loss=10% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"Marked price=2500, discount=20% => SP=?", options:["1800","1900","2000","2100"], ans:2 },
  { q:"Marked price=1800, discount=15% => SP=?", options:["1400","1500","1530","1600"], ans:2 },
  { q:"CP=1600, Profit=25% => SP=?", options:["1800","1900","2000","2100"], ans:2 }
);

// Reasoning
bank.Reasoning.easy.push(
  { q:"UPSSSC Reasoning Easy Q1 ...", options:["A","B","C","D"], ans:0 },
   { q:"Series: 2,4,6,8, ?", options:["9","10","11","12"], ans:1 },
  { q:"Series: 5,10,15,20, ?", options:["22","24","25","30"], ans:2 },
  { q:"Series: 3,6,9,12, ?", options:["13","14","15","16"], ans:2 },
  { q:"Series: 1,2,3,4, ?", options:["5","6","7","8"], ans:0 },
  { q:"Series: 10,20,30,40, ?", options:["45","50","55","60"], ans:1 },

  { q:"Odd one out: Apple, Mango, Carrot, Banana", options:["Apple","Mango","Carrot","Banana"], ans:2 },
  { q:"Odd one out: 2,4,6,9", options:["2","4","6","9"], ans:3 },
  { q:"Odd one out: Pen, Pencil, Eraser, Apple", options:["Pen","Pencil","Eraser","Apple"], ans:3 },
  { q:"Odd one out: Circle, Square, Triangle, Chair", options:["Circle","Square","Triangle","Chair"], ans:3 },
  { q:"Odd one out: 11,13,17,21", options:["11","13","17","21"], ans:3 },

  { q:"If A=1, B=2, then C=?", options:["1","2","3","4"], ans:2 },
  { q:"If D=4, then F=?", options:["5","6","7","8"], ans:1 },
  { q:"If M=13, then P=?", options:["14","15","16","17"], ans:2 },
  { q:"If X=24, then Z=?", options:["25","26","27","28"], ans:1 },
  { q:"If G=7, then I=?", options:["8","9","10","11"], ans:1 },

  { q:"Opposite of North?", options:["East","West","South","None"], ans:2 },
  { q:"Day after Monday?", options:["Tuesday","Wednesday","Thursday","Friday"], ans:0 },
  { q:"Day before Sunday?", options:["Friday","Saturday","Monday","Tuesday"], ans:1 },
  { q:"How many months in a year?", options:["10","11","12","13"], ans:2 },
  { q:"How many days in a week?", options:["5","6","7","8"], ans:2 },

  { q:"Next: 2,4,8,16, ?", options:["20","24","30","32"], ans:3 },
  { q:"Next: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },
  { q:"Next: 6,12,18,24, ?", options:["28","30","32","36"], ans:1 },
  { q:"Next: 7,14,21,28, ?", options:["30","32","35","40"], ans:2 },
  { q:"Next: 9,18,27,36, ?", options:["40","45","48","54"], ans:1 },

  { q:"How many letters in 'UPSSSC'?", options:["4","5","6","7"], ans:2 },
  { q:"How many sides in square?", options:["2","3","4","5"], ans:2 },
  { q:"How many minutes in 3 hours?", options:["120","150","180","200"], ans:2 },
  { q:"How many zeros in 1000?", options:["1","2","3","4"], ans:2 },
  { q:"Which is a bird?", options:["Cow","Crow","Dog","Cat"], ans:1 }
);
bank.Reasoning.medium.push(
  { q:"UPSSSC Reasoning Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"Coding: CAT = DBU, DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Find missing: 3, 6, 12, 24, ?", options:["36","40","48","50"], ans:2 },
  { q:"Series: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },
  { q:"If 1=3, 2=5, 3=7 then 4=?", options:["8","9","10","11"], ans:1 },
  { q:"Mirror image is related to?", options:["Reflection","Rotation","Translation","None"], ans:0 },

  { q:"Find missing: 2,6,18,54, ?", options:["108","144","162","216"], ans:2 },
  { q:"Find missing: 5,10,20,40, ?", options:["60","70","80","90"], ans:2 },
  { q:"Find missing: 4,8,16,32, ?", options:["48","56","64","72"], ans:2 },
  { q:"Find missing: 10,20,40,80, ?", options:["120","140","160","180"], ans:2 },
  { q:"Find missing: 7,14,28,56, ?", options:["70","84","112","120"], ans:2 },

  { q:"A is taller than B, B taller than C. Tallest?", options:["A","B","C","None"], ans:0 },
  { q:"A is shorter than B, B shorter than C. Shortest?", options:["A","B","C","None"], ans:0 },
  { q:"Which comes next: AZ, BY, CX, ?", options:["DW","EV","FU","GV"], ans:0 },
  { q:"Which comes next: 1A, 2B, 3C, ?", options:["4D","5E","6F","7G"], ans:0 },
  { q:"Which comes next: AB, CD, EF, ?", options:["GH","GI","HG","HI"], ans:0 },

  { q:"If 12 is coded as 21 then 34 as?", options:["43","44","33","24"], ans:0 },
  { q:"If 56 is coded as 65 then 78 as?", options:["87","88","77","67"], ans:0 },
  { q:"If 23 is coded as 32 then 45 as?", options:["54","55","44","35"], ans:0 },
  { q:"If A=26, B=25 then D=?", options:["24","23","22","21"], ans:1 },
  { q:"If C=24 then E=?", options:["22","21","20","19"], ans:0 },

  { q:"Find missing: 1,3,7,15, ?", options:["25","31","33","35"], ans:1 },
  { q:"Find missing: 3,8,18,38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 4,9,19,39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 2,5,11,23, ?", options:["45","46","47","48"], ans:2 },
  { q:"Find missing: 6,13,27,55, ?", options:["105","109","111","115"], ans:2 },

  { q:"Which is a fruit?", options:["Potato","Onion","Mango","Carrot"], ans:2 },
  { q:"Which is water transport?", options:["Bus","Train","Ship","Car"], ans:2 },
  { q:"Which is a metal?", options:["Plastic","Iron","Wood","Rubber"], ans:1 },
  { q:"Which is a planet?", options:["Sun","Moon","Earth","Star"], ans:2 },
  { q:"Which is a festival?", options:["Diwali","Monday","January","Red"], ans:0 }
);
bank.Reasoning.hard.push(
  { q:"UPSSSC Reasoning Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"Blood relation: A brother of B, B mother of C. A is ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },
  { q:"P is sister of Q, Q is father of R. P is R's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"X is mother of Y, Y is brother of Z. X is Z's ?", options:["Mother","Aunt","Sister","Grandmother"], ans:0 },
  { q:"A is father of B, B is sister of C. A is C's ?", options:["Father","Uncle","Brother","Cousin"], ans:0 },
  { q:"M is brother of N, N is mother of P. M is P's ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },

  { q:"Direction: 4km East, 3km North. Distance from start?", options:["5km","6km","7km","8km"], ans:0 },
  { q:"Direction: 6km West, 8km North. Distance from start?", options:["10km","12km","14km","16km"], ans:0 },
  { q:"A walks 10m N, 5m E, 10m S. Distance from start?", options:["0","5","10","15"], ans:1 },
  { q:"A walks 7m E, 24m N. Distance from start?", options:["23m","24m","25m","26m"], ans:2 },
  { q:"A walks 5km E, 12km N. Distance from start?", options:["10km","12km","13km","17km"], ans:2 },

  { q:"All cats are animals. Some animals are dogs. Conclusion?", options:["Some cats dogs","All dogs cats","No dogs cats","None"], ans:3 },
  { q:"All fruits are sweet. Mango is a fruit. Conclusion?", options:["Mango sweet","Mango sour","Mango not fruit","None"], ans:0 },
  { q:"All cars are vehicles. Some vehicles are bikes. Conclusion?", options:["All cars bikes","Some cars bikes","No car bike","None"], ans:3 },
  { q:"All boys are students. Some students are players. Conclusion?", options:["All boys players","Some boys players","No boys players","None"], ans:3 },
  { q:"All pens are tools. Some tools are books. Conclusion?", options:["All pens books","Some pens books","No pen book","None"], ans:3 },

  { q:"If SOUTH is coded as TQVUI, then NORTH is?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"If INDIA is coded as JOEJB, then CHINA is?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },
  { q:"If 123 is coded as 234 then 789 is coded as?", options:["8910","890","891","91011"], ans:2 },
  { q:"If 579 is coded as 6810 then 468 is coded as?", options:["579","579","5710","5799"], ans:0 },

  { q:"A is 2nd left of B, B is 3rd right of C. A is?", options:["Left of C","Right of C","Same","Cannot say"], ans:0 },
  { q:"In a row, P is 5th from left, Q is 9th from left. Q is?", options:["4 left","4 right","same","Cannot say"], ans:1 },
  { q:"In a row total 8. R is 4th left, S is 3rd right. R is?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },
  { q:"In a row total 10. A is 3rd left, B is 4th right. A is?", options:["Left of B","Right of B","Same","Cannot say"], ans:0 },
  { q:"In a row, M is 6th left, N is 2nd left. N is?", options:["4 left of M","4 right of M","Same","Cannot say"], ans:0 },

  { q:"Find missing: 3,8,18,38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 4,9,19,39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 5,12,26,54, ?", options:["98","108","110","112"], ans:1 },
  { q:"Find missing: 7,16,34,70, ?", options:["140","142","144","146"], ans:1 },
  { q:"Find missing: 2,5,11,23, ?", options:["45","46","47","48"], ans:2 }
);

// English
bank.English.easy.push(
  { q:"UPSSSC English Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"Synonym of FAST?", options:["Quick","Slow","Weak","Cold"], ans:0 },
  { q:"Synonym of HAPPY?", options:["Sad","Joyful","Angry","Weak"], ans:1 },
  { q:"Synonym of SMALL?", options:["Tiny","Huge","Big","Large"], ans:0 },
  { q:"Synonym of BEGIN?", options:["Start","Stop","End","Close"], ans:0 },
  { q:"Synonym of HELP?", options:["Assist","Hurt","Break","Stop"], ans:0 },

  { q:"Antonym of HOT?", options:["Cold","Warm","Heat","Cool"], ans:0 },
  { q:"Antonym of OLD?", options:["Young","New","Fresh","All"], ans:0 },
  { q:"Antonym of UP?", options:["Down","Left","Right","Top"], ans:0 },
  { q:"Antonym of RICH?", options:["Poor","Strong","Big","Happy"], ans:0 },
  { q:"Antonym of CLEAN?", options:["Dirty","Fresh","Pure","Clear"], ans:0 },

  { q:"Fill: She ___ tea.", options:["drink","drinks","drinking","drank"], ans:1 },
  { q:"Fill: They ___ playing.", options:["is","are","was","be"], ans:1 },
  { q:"Fill: I ___ a pen.", options:["have","has","had","having"], ans:0 },
  { q:"Fill: He ___ a book.", options:["read","reads","reading","readed"], ans:1 },
  { q:"Fill: We ___ friends.", options:["is","are","was","be"], ans:1 },

  { q:"Plural of Man?", options:["Mans","Mens","Men","Manes"], ans:2 },
  { q:"Plural of Woman?", options:["Womans","Women","Womens","Womanes"], ans:1 },
  { q:"Plural of Child?", options:["Childs","Children","Childrens","Childes"], ans:1 },
  { q:"Plural of Tooth?", options:["Tooths","Teeth","Toothes","Toothes"], ans:1 },
  { q:"Plural of Foot?", options:["Foots","Feets","Feet","Fets"], ans:2 },

  { q:"Opposite of TRUE?", options:["False","Right","Sure","Pure"], ans:0 },
  { q:"Opposite of DAY?", options:["Night","Sun","Light","Time"], ans:0 },
  { q:"Opposite of LIGHT?", options:["Bright","Dark","White","Clear"], ans:1 },
  { q:"Opposite of BIG?", options:["Large","Huge","Small","Heavy"], ans:2 },
  { q:"Opposite of OPEN?", options:["Close","Shut","Both","None"], ans:2 },

  { q:"One word: A place where books are kept", options:["Library","School","Office","Bank"], ans:0 },
  { q:"One word: A person who teaches", options:["Teacher","Doctor","Driver","Painter"], ans:0 },
  { q:"One word: A person who writes poems", options:["Poet","Singer","Dancer","Player"], ans:0 },
  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: A person who drives a train", options:["Driver","Pilot","Guard","Clerk"], ans:0 }
);
bank.English.medium.push(
  { q:"UPSSSC English Medium Q1 ...", options:["A","B","C","D"], ans:1 },
   { q:"Fill: He ___ to school daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: The sun ___ in the east.", options:["rise","rises","rising","rose"], ans:1 },
  { q:"Choose correct: I have ___ my work.", options:["done","do","did","doing"], ans:0 },
  { q:"Choose correct: She is ___ honest girl.", options:["a","an","the","no"], ans:1 },
  { q:"Fill: They ___ watching TV.", options:["is","are","was","be"], ans:1 },

  { q:"Correct: I ___ a letter yesterday.", options:["write","writes","wrote","written"], ans:2 },
  { q:"Correct: She ___ not come.", options:["do","does","did","done"], ans:1 },
  { q:"Correct: He ___ been to Delhi.", options:["has","have","had","having"], ans:0 },
  { q:"Correct: They ___ finished the work.", options:["has","have","had","having"], ans:1 },
  { q:"Correct: We ___ late today.", options:["is","are","was","be"], ans:1 },

  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },
  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },
  { q:"Synonym of DANGER?", options:["Risk","Safe","Good","Peace"], ans:0 },

  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },

  { q:"Correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  { q:"Choose correct: He is good ___ Maths.", options:["in","at","on","for"], ans:1 },
  { q:"Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"Choose correct: She is married ___ him.", options:["with","to","by","on"], ans:1 }
);
bank.English.hard.push(
  { q:"UPSSSC English Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'abandon'?", options:["leave","eat","run","build"], ans:0 },
  { q:"Meaning of 'transparent'?", options:["clear","dirty","heavy","weak"], ans:0 },
  { q:"Meaning of 'fragile'?", options:["strong","breakable","heavy","fast"], ans:1 },
  { q:"Meaning of 'persistent'?", options:["continuous","lazy","weak","slow"], ans:0 },

  { q:"Correct passive: 'They made a plan.'", options:["A plan made","A plan was made","Plan is made","Plan made"], ans:1 },
  { q:"Correct passive: 'He writes a letter.'", options:["A letter is written by him","A letter was written","A letter written","Letter is wrote"], ans:0 },
  { q:"Correct passive: 'She cooks food.'", options:["Food cooked","Food is cooked","Food was cooked","Food is cook"], ans:1 },
  { q:"Correct passive: 'They help me.'", options:["I am helped by them","I helped by them","I was help by them","I is helped"], ans:0 },
  { q:"Correct passive: 'We play cricket.'", options:["Cricket played","Cricket is played","Cricket was play","Cricket is play"], ans:1 },

  { q:"One word: One who loves books", options:["Bibliophile","Philosopher","Librarian","Editor"], ans:0 },
  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Optimist","Philanthropist","Pessimist"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: One who can do many works", options:["Versatile","Lazy","Weak","Slow"], ans:0 },

  { q:"Choose correct: If I ___ rich, I would help you.", options:["am","was","were","be"], ans:2 },
  { q:"Choose correct: He said that he ___ busy.", options:["is","was","were","be"], ans:1 },
  { q:"Choose correct: I wish I ___ a car.", options:["have","had","has","having"], ans:1 },
  { q:"Choose correct: It is time we ___ home.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: She suggested that he ___ rest.", options:["take","takes","took","taken"], ans:0 },

  { q:"Spot error: He do not like tea.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 },

  { q:"Choose correct: No sooner ___ I reached than it started raining.", options:["had","have","has","was"], ans:0 },
  { q:"Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 },
  { q:"Choose correct: She is interested ___ music.", options:["on","in","at","by"], ans:1 }
);
// =========================
// DELHI POLICE - ADD QUESTIONS
// =========================

// GK
bank.GK.easy.push(
  { q:"Delhi Police GK Easy Q1 ...", options:["A","B","C","D"], ans:0 },
   { q:"दिल्ली भारत की क्या है?", options:["राजधानी","राज्य","जिला","गाँव"], ans:0 },
  { q:"भारत की राजधानी क्या है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"भारत का राष्ट्रीय पशु कौन है?", options:["Lion","Tiger","Elephant","Horse"], ans:1 },
  { q:"भारत का राष्ट्रीय पक्षी कौन है?", options:["Crow","Peacock","Eagle","Sparrow"], ans:1 },
  { q:"भारत का राष्ट्रीय फूल कौन सा है?", options:["Rose","Lotus","Lily","Sunflower"], ans:1 },

  { q:"गणतंत्र दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","14 Nov"], ans:1 },
  { q:"स्वतंत्रता दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","14 Nov"], ans:0 },
  { q:"गांधी जयंती कब होती है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:2 },
  { q:"बाल दिवस कब मनाया जाता है?", options:["14 Nov","5 Sep","2 Oct","26 Jan"], ans:0 },
  { q:"शिक्षक दिवस कब मनाया जाता है?", options:["5 Sep","14 Nov","15 Aug","26 Jan"], ans:0 },

  { q:"लाल किला कहाँ है?", options:["Delhi","Agra","Jaipur","Lucknow"], ans:0 },
  { q:"कुतुब मीनार कहाँ है?", options:["Delhi","Agra","Mumbai","Kolkata"], ans:0 },
  { q:"इंडिया गेट कहाँ है?", options:["Delhi","Agra","Jaipur","Chennai"], ans:0 },
  { q:"ताजमहल कहाँ है?", options:["Delhi","Agra","Lucknow","Jaipur"], ans:1 },
  { q:"जंतर मंतर कहाँ है?", options:["Delhi","Agra","Jaipur","Varanasi"], ans:0 },

  { q:"भारत में कितने राज्य हैं?", options:["27","28","29","30"], ans:1 },
  { q:"भारत की मुद्रा क्या है?", options:["Dollar","Rupee","Euro","Yen"], ans:1 },
  { q:"भारत का राष्ट्रीय खेल (परंपरागत)?", options:["Hockey","Cricket","Kabaddi","Football"], ans:0 },
  { q:"भारत का राष्ट्रीय गीत कौन सा है?", options:["जन गण मन","वंदे मातरम्","सारे जहाँ से अच्छा","ऐ मेरे वतन"], ans:1 },
  { q:"जन गण मन किसने लिखा?", options:["Bankim","Tagore","Premchand","Nehru"], ans:1 },

  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },
  { q:"WHO का मुख्यालय कहाँ है?", options:["Geneva","Paris","London","Tokyo"], ans:0 },
  { q:"UN का मुख्यालय कहाँ है?", options:["New York","Paris","Geneva","London"], ans:0 },
  { q:"भारत के प्रथम प्रधानमंत्री कौन थे?", options:["Nehru","Patel","Gandhi","Azad"], ans:0 },
  { q:"भारत के प्रथम राष्ट्रपति कौन थे?", options:["Rajendra Prasad","Nehru","Gandhi","Patel"], ans:0 },

  { q:"1 किलोमीटर में कितने मीटर होते हैं?", options:["100","500","1000","1500"], ans:2 },
  { q:"1 घंटे में कितने मिनट होते हैं?", options:["30","45","60","90"], ans:2 },
  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल)?", options:["UP","MP","Rajasthan","Bihar"], ans:2 },
  { q:"भारत की सबसे लंबी नदी कौन सी है?", options:["Yamuna","Ganga","Narmada","Tapti"], ans:1 },
  { q:"भारत का सबसे बड़ा महासागर?", options:["Indian","Atlantic","Pacific","Arctic"], ans:2 }
);
bank.GK.medium.push(
  { q:"Delhi Police GK Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"दिल्ली का पुराना नाम क्या था?", options:["Indraprastha","Ayodhya","Kashi","Mathura"], ans:0 },
  { q:"दिल्ली का राज्यपाल किसे कहते हैं?", options:["Governor","Lieutenant Governor","CM","Speaker"], ans:1 },
  { q:"भारत का पहला उपग्रह कौन सा था?", options:["INSAT","Aryabhata","Rohini","Bhaskara"], ans:1 },
  { q:"ISRO का मुख्यालय कहाँ है?", options:["Delhi","Mumbai","Bengaluru","Chennai"], ans:2 },
  { q:"RBI की स्थापना कब हुई?", options:["1930","1935","1947","1950"], ans:1 },

  { q:"भारत में पंचवर्षीय योजना कब शुरू हुई?", options:["1947","1951","1955","1960"], ans:1 },
  { q:"लोकसभा का कार्यकाल कितने वर्ष?", options:["4","5","6","7"], ans:1 },
  { q:"राज्यसभा का कार्यकाल कितने वर्ष?", options:["4","5","6","7"], ans:2 },
  { q:"भारत की संसद में कितने सदन हैं?", options:["1","2","3","4"], ans:1 },
  { q:"राज्यसभा का सभापति कौन होता है?", options:["President","Vice President","PM","Speaker"], ans:1 },

  { q:"भारत के CAG का उल्लेख किस अनुच्छेद में है?", options:["148","280","124","370"], ans:0 },
  { q:"Finance Commission का उल्लेख किस अनुच्छेद में है?", options:["148","280","52","14"], ans:1 },
  { q:"Election Commission का उल्लेख किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"धन विधेयक किस अनुच्छेद में है?", options:["109","110","111","112"], ans:1 },
  { q:"संविधान संशोधन किस अनुच्छेद में है?", options:["352","356","360","368"], ans:3 },

  { q:"भारत का पहला परमाणु परीक्षण कब हुआ?", options:["1964","1974","1984","1998"], ans:1 },
  { q:"हरित क्रांति के जनक कौन हैं?", options:["MS Swaminathan","APJ Kalam","CV Raman","Homi Bhabha"], ans:0 },
  { q:"निति आयोग की स्थापना कब हुई?", options:["2012","2013","2015","2016"], ans:2 },
  { q:"योजना आयोग की जगह किसने ली?", options:["NITI Aayog","Finance Commission","CBI","CVC"], ans:0 },
  { q:"भारत का सबसे छोटा राज्य कौन सा है?", options:["Goa","Sikkim","Tripura","Manipur"], ans:0 },

  { q:"भाखड़ा नांगल बाँध किस नदी पर है?", options:["Sutlej","Ganga","Yamuna","Narmada"], ans:0 },
  { q:"तेहरी बाँध किस नदी पर है?", options:["Ganga","Bhagirathi","Yamuna","Narmada"], ans:1 },
  { q:"हीराकुंड बाँध किस नदी पर है?", options:["Mahanadi","Godavari","Tapti","Krishna"], ans:0 },
  { q:"किस नदी को 'दक्षिण गंगा' कहा जाता है?", options:["Krishna","Godavari","Cauvery","Mahanadi"], ans:1 },
  { q:"चिल्का झील किस राज्य में है?", options:["Odisha","WB","UP","MP"], ans:0 },

  { q:"भारत के पहले मुख्य चुनाव आयुक्त कौन थे?", options:["Sukumar Sen","TN Seshan","Rajendra Prasad","Kamaraj"], ans:0 },
  { q:"भारत की पहली महिला प्रधानमंत्री कौन थीं?", options:["Indira Gandhi","Sonia Gandhi","Pratibha Patil","Sarojini Naidu"], ans:0 },
  { q:"भारत के पहले मुख्य न्यायाधीश कौन थे?", options:["H J Kania","Nehru","Ambedkar","Patel"], ans:0 },
  { q:"संविधान सभा के अध्यक्ष कौन थे?", options:["Nehru","Rajendra Prasad","Ambedkar","Patel"], ans:1 },
  { q:"Drafting Committee के अध्यक्ष कौन थे?", options:["Ambedkar","Nehru","Rajendra Prasad","Patel"], ans:0 }
);
bank.GK.hard.push(
  { q:"Delhi Police GK Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"मौलिक अधिकार किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },
  { q:"नीति निदेशक तत्व किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },
  { q:"मौलिक कर्तव्य किस भाग में हैं?", options:["Part III","Part IVA","Part IV","Part V"], ans:1 },
  { q:"राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:0 },
  { q:"राष्ट्रपति शासन किस अनुच्छेद में है?", options:["352","356","360","368"], ans:1 },

  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:2 },
  { q:"President pardon power किस अनुच्छेद में है?", options:["72","74","75","80"], ans:0 },
  { q:"Governor pardon power किस अनुच्छेद में है?", options:["161","168","154","356"], ans:0 },
  { q:"Attorney General का उल्लेख किस अनुच्छेद में है?", options:["76","124","148","280"], ans:0 },
  { q:"संयुक्त बैठक का उल्लेख किस अनुच्छेद में है?", options:["108","109","110","111"], ans:0 },

  { q:"वयस्क मताधिकार किस अनुच्छेद में है?", options:["324","325","326","327"], ans:2 },
  { q:"लोकसभा अध्यक्ष का उल्लेख किस अनुच्छेद में है?", options:["93","94","95","96"], ans:0 },
  { q:"राज्यसभा उपसभापति का उल्लेख किस अनुच्छेद में है?", options:["64","89","90","93"], ans:2 },
  { q:"प्रधानमंत्री का उल्लेख किस अनुच्छेद में आता है?", options:["74","75","76","78"], ans:1 },
  { q:"मंत्रिपरिषद किसके प्रति उत्तरदायी होती है?", options:["President","Rajya Sabha","Lok Sabha","Supreme Court"], ans:2 },

  { q:"समवर्ती सूची किस अनुसूची में है?", options:["5th","6th","7th","8th"], ans:2 },
  { q:"संघ सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:1 },
  { q:"राज्य सूची किस अनुसूची में है?", options:["7th","8th","9th","10th"], ans:0 },
  { q:"भाषाओं की सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:2 },
  { q:"भारत का राष्ट्रीय प्रतीक कहाँ से लिया गया?", options:["Sanchi","Sarnath","Ajanta","Hampi"], ans:1 },

  { q:"UPSC का उल्लेख किस भाग में है?", options:["Part XIV","Part XV","Part XVI","Part XVII"], ans:0 },
  { q:"Supreme Court का उल्लेख किस भाग में है?", options:["Part V","Part VI","Part IV","Part III"], ans:0 },
  { q:"High Court का उल्लेख किस भाग में है?", options:["Part V","Part VI","Part VII","Part VIII"], ans:1 },
  { q:"Election Commission किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"Money Bill किस अनुच्छेद में है?", options:["109","110","111","112"], ans:1 },

  { q:"भारत का संविधान किस देश से सबसे ज्यादा प्रभावित है?", options:["USA","UK","Canada","France"], ans:1 },
  { q:"संविधान सभा में उद्देश्य प्रस्ताव किसने रखा?", options:["Nehru","Patel","Ambedkar","Rajendra Prasad"], ans:0 },
  { q:"मूल संविधान में कितने अनुच्छेद थे?", options:["395","400","450","365"], ans:0 },
  { q:"मूल संविधान में कितनी अनुसूचियाँ थीं?", options:["8","10","12","14"], ans:0 },
  { q:"संविधान कब लागू हुआ?", options:["15 Aug 1947","26 Jan 1950","2 Oct 1949","1 Jan 1951"], ans:1 }
);

// Math
bank.Math.easy.push(
  { q:"Delhi Police Math Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"48 + 27 = ?", options:["65","70","75","80"], ans:2 },
  { q:"96 - 38 = ?", options:["56","58","60","62"], ans:1 },
  { q:"15 × 8 = ?", options:["100","110","120","130"], ans:2 },
  { q:"144 ÷ 9 = ?", options:["14","15","16","18"], ans:3 },
  { q:"25 × 12 = ?", options:["250","280","300","320"], ans:2 },

  { q:"10% of 500 = ?", options:["40","45","50","55"], ans:2 },
  { q:"20% of 350 = ?", options:["60","65","70","75"], ans:2 },
  { q:"25% of 240 = ?", options:["40","50","60","70"], ans:2 },
  { q:"5% of 800 = ?", options:["30","35","40","45"], ans:2 },
  { q:"12.5% of 320 = ?", options:["30","35","40","45"], ans:2 },

  { q:"1/2 of 180 = ?", options:["70","80","90","100"], ans:2 },
  { q:"2/3 of 150 = ?", options:["90","95","100","110"], ans:2 },
  { q:"3/5 of 200 = ?", options:["100","110","120","130"], ans:2 },
  { q:"4/7 of 140 = ?", options:["60","70","80","90"], ans:1 },
  { q:"5/8 of 240 = ?", options:["120","130","150","160"], ans:0 },

  { q:"यदि 6x = 72 तो x = ?", options:["10","11","12","13"], ans:2 },
  { q:"यदि 9x = 81 तो x = ?", options:["7","8","9","10"], ans:2 },
  { q:"यदि x/6 = 8 तो x = ?", options:["36","42","48","54"], ans:2 },
  { q:"यदि 2x + 7 = 31 तो x = ?", options:["10","11","12","13"], ans:2 },
  { q:"यदि 5x - 10 = 40 तो x = ?", options:["8","9","10","11"], ans:2 },

  { q:"एक संख्या का 25% = 100 है, संख्या = ?", options:["300","350","400","450"], ans:2 },
  { q:"एक संख्या का 20% = 80 है, संख्या = ?", options:["300","350","400","450"], ans:2 },
  { q:"एक संख्या का 10% = 70 है, संख्या = ?", options:["600","650","700","750"], ans:2 },
  { q:"एक संख्या का 30% = 180 है, संख्या = ?", options:["500","550","600","650"], ans:2 },
  { q:"एक संख्या का 40% = 240 है, संख्या = ?", options:["500","550","600","650"], ans:2 },

  { q:"Average of 10, 20, 40 = ?", options:["20","23.3","25","30"], ans:1 },
  { q:"Average of 12, 18, 30 = ?", options:["18","19","20","22"], ans:2 },
  { q:"Average of 15, 25, 35 = ?", options:["20","25","30","35"], ans:1 },
  { q:"Average of 8, 16, 24, 32 = ?", options:["18","20","22","24"], ans:1 },
  { q:"Average of 7, 14, 21, 28 = ?", options:["14","16","17.5","18"], ans:2 }
);
bank.Math.medium.push(
  { q:"Delhi Police Math Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"SI: P=2000, R=10%, T=2 => SI=?", options:["350","380","400","420"], ans:2 },
  { q:"SI: P=3000, R=8%, T=3 => SI=?", options:["600","650","720","750"], ans:2 },
  { q:"SI: P=1500, R=12%, T=2 => SI=?", options:["320","340","360","380"], ans:2 },
  { q:"SI: P=5000, R=6%, T=4 => SI=?", options:["1100","1200","1300","1400"], ans:1 },
  { q:"SI: P=2400, R=5%, T=3 => SI=?", options:["300","320","360","400"], ans:2 },

  { q:"CP=800, Profit=25% => SP=?", options:["950","980","1000","1050"], ans:2 },
  { q:"CP=1200, Loss=20% => SP=?", options:["920","940","960","980"], ans:2 },
  { q:"SP=1320, Profit=10% => CP=?", options:["1100","1150","1200","1250"], ans:2 },
  { q:"SP=720, Loss=10% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"CP=1500, Profit=12% => SP=?", options:["1650","1680","1700","1720"], ans:1 },

  { q:"Speed=60 km/h, Time=2.5h => Distance=?", options:["140","150","160","170"], ans:1 },
  { q:"Speed=45 km/h, Time=4h => Distance=?", options:["160","170","180","190"], ans:2 },
  { q:"Distance=210 km, Speed=70 km/h => Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Distance=300 km, Speed=75 km/h => Time=?", options:["3h","4h","5h","6h"], ans:1 },
  { q:"Speed=72 km/h, Time=3h => Distance=?", options:["200","210","216","240"], ans:2 },

  { q:"यदि 18% = 90 तो संख्या=?", options:["400","450","500","550"], ans:1 },
  { q:"यदि 25% = 200 तो संख्या=?", options:["700","750","800","850"], ans:2 },
  { q:"यदि 30% = 270 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 12% = 108 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 15% = 135 तो संख्या=?", options:["800","850","900","950"], ans:2 },

  { q:"Ratio 4:7 में कुल 121 है, छोटा भाग=?", options:["40","44","48","52"], ans:1 },
  { q:"Ratio 5:9 में कुल 140 है, बड़ा भाग=?", options:["80","85","90","95"], ans:2 },
  { q:"Ratio 7:8 में कुल 150 है, छोटा भाग=?", options:["60","65","70","75"], ans:2 },
  { q:"Ratio 3:5 में कुल 96 है, बड़ा भाग=?", options:["55","58","60","62"], ans:2 },
  { q:"Ratio 2:3 में कुल 125 है, छोटा भाग=?", options:["45","50","55","60"], ans:1 },

  { q:"Average of 18,22,26,30 = ?", options:["22","23","24","25"], ans:2 },
  { q:"Average of 15,25,35,45 = ?", options:["28","30","32","35"], ans:1 },
  { q:"Average of 11,22,33,44 = ?", options:["25","27","28","30"], ans:0 },
  { q:"Average of 20,30,40,50,60 = ?", options:["35","38","40","42"], ans:2 },
  { q:"Average of 14,28,42 = ?", options:["26","28","30","32"], ans:1 }
);
bank.Math.hard.push(
  { q:"Delhi Police Math Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"CI: P=2000, R=10%, T=2 => Amount?", options:["2200","2400","2420","2600"], ans:2 },
  { q:"CI: P=5000, R=8%, T=2 => Amount?", options:["5600","5832","6000","6200"], ans:1 },
  { q:"CI: P=10000, R=5%, T=2 => Amount?", options:["10500","11000","11025","11250"], ans:2 },
  { q:"CI: P=8000, R=12%, T=2 => Amount?", options:["9600","9800","10035.2","10200"], ans:2 },
  { q:"CI: P=4000, R=15%, T=2 => Amount?", options:["5200","5290","5290","5400"], ans:2 },

  { q:"Train 72 km/h crosses 180m pole in 12 sec. Length?", options:["40m","50m","60m","70m"], ans:2 },
  { q:"Train 90 km/h crosses 250m platform in 20 sec. Length?", options:["200m","220m","250m","300m"], ans:2 },
  { q:"Train 54 km/h crosses 150m pole in 10 sec. Length?", options:["120m","130m","140m","150m"], ans:0 },
  { q:"Train 108 km/h crosses 300m platform in 20 sec. Length?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"Train 60 km/h crosses 200m pole in 15 sec. Length?", options:["40m","45m","50m","55m"], ans:2 },

  { q:"Pipe A fills in 10h, B fills in 15h. Together time?", options:["5h","6h","7h","8h"], ans:1 },
  { q:"A fills in 8h, outlet empties in 12h. Net time?", options:["20h","22h","24h","30h"], ans:2 },
  { q:"A fills in 12h, B empties in 18h. Net time?", options:["30h","32h","36h","40h"], ans:2 },
  { q:"A fills in 15h, B fills in 30h. Together time?", options:["8h","9h","10h","12h"], ans:0 },
  { q:"A fills in 18h, B fills in 24h. Together time?", options:["9h","10h","11h","12h"], ans:1 },

  { q:"If x+y=40 and x-y=12 then x=?", options:["24","25","26","28"], ans:2 },
  { q:"If 5x+9=89 then x=?", options:["14","15","16","17"], ans:2 },
  { q:"If 7x-11=94 then x=?", options:["13","14","15","16"], ans:1 },
  { q:"If x/3 + 8 = 20 then x=?", options:["30","33","36","39"], ans:2 },
  { q:"If 4x-7=69 then x=?", options:["18","19","20","21"], ans:1 },

  { q:"A can do work in 18 days, B in 12 days. Together time?", options:["7.2","8","9","10"], ans:0 },
  { q:"A does in 15 days, B in 10 days. Together time?", options:["5","6","7","8"], ans:0 },
  { q:"A does in 24 days, B in 16 days. Together time?", options:["9.6","10","11","12"], ans:0 },
  { q:"A does in 30 days, B in 20 days. Together time?", options:["10","12","15","18"], ans:0 },
  { q:"A does in 12 days, B in 8 days. Together time?", options:["4.8","5","6","7"], ans:0 },

  { q:"SP=960, Profit=20% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"SP=720, Loss=10% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"Marked price=2500, discount=20% => SP=?", options:["1800","1900","2000","2100"], ans:2 },
  { q:"Marked price=1800, discount=15% => SP=?", options:["1400","1500","1530","1600"], ans:2 },
  { q:"CP=1600, Profit=25% => SP=?", options:["1800","1900","2000","2100"], ans:2 }
);

// Reasoning
bank.Reasoning.easy.push(
  { q:"Delhi Police Reasoning Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"Series: 2,4,6,8, ?", options:["9","10","11","12"], ans:1 },
  { q:"Series: 5,10,15,20, ?", options:["22","24","25","30"], ans:2 },
  { q:"Series: 3,6,9,12, ?", options:["13","14","15","16"], ans:2 },
  { q:"Series: 10,20,30,40, ?", options:["45","50","55","60"], ans:1 },
  { q:"Series: 1,2,4,8, ?", options:["10","12","14","16"], ans:3 },

  { q:"Odd one out: Apple, Mango, Carrot, Banana", options:["Apple","Mango","Carrot","Banana"], ans:2 },
  { q:"Odd one out: 2,4,6,9", options:["2","4","6","9"], ans:3 },
  { q:"Odd one out: Pen, Pencil, Eraser, Apple", options:["Pen","Pencil","Eraser","Apple"], ans:3 },
  { q:"Odd one out: Circle, Square, Triangle, Chair", options:["Circle","Square","Triangle","Chair"], ans:3 },
  { q:"Odd one out: 11,13,17,21", options:["11","13","17","21"], ans:3 },

  { q:"If A=1, B=2 then C=?", options:["1","2","3","4"], ans:2 },
  { q:"If D=4 then F=?", options:["5","6","7","8"], ans:1 },
  { q:"If M=13 then P=?", options:["14","15","16","17"], ans:2 },
  { q:"If X=24 then Z=?", options:["25","26","27","28"], ans:1 },
  { q:"If G=7 then I=?", options:["8","9","10","11"], ans:1 },

  { q:"Opposite of East?", options:["North","South","West","None"], ans:2 },
  { q:"Opposite of North?", options:["East","West","South","None"], ans:2 },
  { q:"Day after Monday?", options:["Tuesday","Wednesday","Thursday","Friday"], ans:0 },
  { q:"Day before Sunday?", options:["Friday","Saturday","Monday","Tuesday"], ans:1 },
  { q:"How many days in a week?", options:["5","6","7","8"], ans:2 },

  { q:"Next: 6,12,18,24, ?", options:["28","30","32","36"], ans:1 },
  { q:"Next: 7,14,21,28, ?", options:["30","32","35","40"], ans:2 },
  { q:"Next: 9,18,27,36, ?", options:["40","45","48","54"], ans:1 },
  { q:"Next: 12,24,36,48, ?", options:["54","56","60","72"], ans:2 },
  { q:"Next: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },

  { q:"How many sides in triangle?", options:["2","3","4","5"], ans:1 },
  { q:"How many letters in INDIA?", options:["3","4","5","6"], ans:2 },
  { q:"Which is bigger: 0.5 or 0.05?", options:["0.05","0.5","Equal","None"], ans:1 },
  { q:"How many months in a year?", options:["10","11","12","13"], ans:2 },
  { q:"How many zeros in 1000?", options:["1","2","3","4"], ans:2 }
);
bank.Reasoning.medium.push(
  { q:"Delhi Police Reasoning Medium Q1 ...", options:["A","B","C","D"], ans:1 },
   { q:"Coding: CAT = DBU, DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Find missing: 3,6,12,24, ?", options:["36","40","48","50"], ans:2 },
  { q:"Find missing: 5,10,20,40, ?", options:["60","70","80","90"], ans:2 },
  { q:"Find missing: 2,6,18,54, ?", options:["108","144","162","216"], ans:2 },
  { q:"Series: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },

  { q:"Which comes next: AZ, BY, CX, ?", options:["DW","EV","FU","GV"], ans:0 },
  { q:"Which comes next: 1A, 2B, 3C, ?", options:["4D","5E","6F","7G"], ans:0 },
  { q:"Which comes next: AB, CD, EF, ?", options:["GH","GI","HG","HI"], ans:0 },
  { q:"A is taller than B, B taller than C. Tallest?", options:["A","B","C","None"], ans:0 },
  { q:"A is shorter than B, B shorter than C. Shortest?", options:["A","B","C","None"], ans:0 },

  { q:"If 12 is coded as 21 then 34 as?", options:["43","44","33","24"], ans:0 },
  { q:"If 56 is coded as 65 then 78 as?", options:["87","88","77","67"], ans:0 },
  { q:"If A=26, B=25 then C=?", options:["24","23","22","21"], ans:0 },
  { q:"If 1=3, 2=5, 3=7 then 4=?", options:["8","9","10","11"], ans:1 },
  { q:"Mirror image is related to?", options:["Reflection","Rotation","Translation","None"], ans:0 },

  { q:"Find missing: 9,18,36,72, ?", options:["90","108","144","150"], ans:2 },
  { q:"Find missing: 10,20,40,80, ?", options:["120","140","160","180"], ans:2 },
  { q:"Find missing: 15,30,45,60, ?", options:["65","70","75","80"], ans:2 },
  { q:"Series: 4,9,16,25, ?", options:["30","35","36","49"], ans:2 },
  { q:"Series: 6,11,16,21, ?", options:["24","25","26","27"], ans:1 },

  { q:"Which is a metal?", options:["Wood","Plastic","Iron","Rubber"], ans:2 },
  { q:"Which is a fruit?", options:["Potato","Onion","Mango","Carrot"], ans:2 },
  { q:"Which is a bird?", options:["Dog","Cat","Crow","Cow"], ans:2 },
  { q:"Which is water transport?", options:["Bus","Train","Ship","Car"], ans:2 },
  { q:"Which is a planet?", options:["Sun","Moon","Earth","Star"], ans:2 },

  { q:"Find missing: 8,16,24,32, ?", options:["36","40","48","56"], ans:1 },
  { q:"Find missing: 2,5,8,11, ?", options:["12","13","14","15"], ans:2 },
  { q:"Find missing: 1,3,5,7, ?", options:["8","9","10","11"], ans:1 },
  { q:"Find missing: 11,22,33,44, ?", options:["55","66","77","88"], ans:0 },
  { q:"Find missing: 7,14,28,56, ?", options:["84","98","112","120"], ans:2 }
);
bank.Reasoning.hard.push(
  { q:"Delhi Police Reasoning Hard Q1 ...", options:["A","B","C","D"], ans:2 },
   { q:"Blood relation: A brother of B, B mother of C. A is ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },
  { q:"P is sister of Q, Q is father of R. P is R's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"A is father of B, B is brother of C. A is C's ?", options:["Uncle","Father","Brother","Cousin"], ans:1 },
  { q:"X is mother of Y, Y is sister of Z. X is Z's ?", options:["Mother","Aunt","Sister","Grandmother"], ans:0 },
  { q:"M is brother of N, N is mother of P. M is P's ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },

  { q:"Direction: 5km E, 3km N, 5km W. Position?", options:["3km North","5km East","2km South","3km South"], ans:0 },
  { q:"A walks 10m N, 10m E, 10m S, 10m W. Distance from start?", options:["0","10","20","40"], ans:0 },
  { q:"A goes 6km North, 8km East. Distance from start?", options:["10km","12km","14km","16km"], ans:0 },
  { q:"A goes 4km East, 3km North. Distance from start?", options:["5km","6km","7km","8km"], ans:0 },
  { q:"A goes 7km West, 24km North. Distance from start?", options:["23km","24km","25km","26km"], ans:2 },

  { q:"Statement: All cats are animals. Some animals are dogs. Conclusion?", options:["Valid","Invalid","Both","None"], ans:3 },
  { q:"All pens are tools. Some tools are books. Conclusion?", options:["All pens are books","Some pens are books","No pen is book","None"], ans:3 },
  { q:"All apples are fruits. Some fruits are sweet. Conclusion?", options:["All apples sweet","Some apples sweet","No apples sweet","None"], ans:3 },
  { q:"All cars are vehicles. Some vehicles are bikes. Conclusion?", options:["All cars are bikes","Some cars are bikes","No car is bike","None"], ans:3 },
  { q:"All boys are students. Some students are players. Conclusion?", options:["All boys players","Some boys players","No boys players","None"], ans:3 },

  { q:"Find missing: 2, 5, 11, 23, ?", options:["45","46","47","48"], ans:2 },
  { q:"Find missing: 1, 3, 7, 15, ?", options:["25","31","33","35"], ans:1 },
  { q:"Find missing: 4, 9, 19, 39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 3, 8, 18, 38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 5, 12, 26, 54, ?", options:["98","108","110","112"], ans:1 },

  { q:"If SOUTH is written as TQVUI, then NORTH is?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"If INDIA is coded as JOEJB, then CHINA is?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },
  { q:"If 579 is coded as 6810 then 468 is coded as?", options:["579","579","5710","5799"], ans:0 },
  { q:"If 123 is coded as 234 then 789 is coded as?", options:["891","890","8910","91011"], ans:0 },

  { q:"A is 2nd to left of B, B is 3rd to right of C. A is ?", options:["Left of C","Right of C","Same position","Cannot say"], ans:0 },
  { q:"In a row, P is 5th from left and Q is 7th from left. Q is ?", options:["2 left of P","2 right of P","Same","Cannot say"], ans:1 },
  { q:"In a row, A is 3rd from left, B is 5th from right. Total 7. A is ?", options:["Same as B","Left of B","Right of B","Cannot say"], ans:0 },
  { q:"In a row, R is 4th from left, S is 3rd from right. Total 8. R is ?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },
  { q:"In a row, M is 6th from left, N is 4th from left. N is ?", options:["2 left of M","2 right of M","Same","Cannot say"], ans:0 }
);

// English
bank.English.easy.push(
  { q:"Delhi Police English Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"Synonym of FAST?", options:["Quick","Slow","Weak","Cold"], ans:0 },
  { q:"Synonym of HAPPY?", options:["Sad","Joyful","Angry","Weak"], ans:1 },
  { q:"Synonym of SMALL?", options:["Tiny","Huge","Big","Large"], ans:0 },
  { q:"Synonym of BEGIN?", options:["Start","Stop","End","Close"], ans:0 },
  { q:"Synonym of HELP?", options:["Assist","Hurt","Break","Stop"], ans:0 },

  { q:"Antonym of BIG?", options:["Large","Huge","Small","Heavy"], ans:2 },
  { q:"Antonym of HOT?", options:["Cold","Warm","Heat","Cool"], ans:0 },
  { q:"Antonym of UP?", options:["Down","Left","Right","Top"], ans:0 },
  { q:"Antonym of DAY?", options:["Night","Sun","Light","Time"], ans:0 },
  { q:"Antonym of CLEAN?", options:["Dirty","Fresh","Pure","Clear"], ans:0 },

  { q:"Fill: I ___ a book.", options:["read","reads","reading","readed"], ans:0 },
  { q:"Fill: He ___ tea.", options:["drink","drinks","drinking","drank"], ans:1 },
  { q:"Fill: We ___ friends.", options:["is","are","was","be"], ans:1 },
  { q:"Fill: She ___ to school.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: They ___ playing.", options:["is","are","was","be"], ans:1 },

  { q:"Plural of Child?", options:["Childs","Children","Childrens","Childes"], ans:1 },
  { q:"Plural of Man?", options:["Mans","Mens","Men","Manes"], ans:2 },
  { q:"Plural of Woman?", options:["Womans","Women","Womens","Womanes"], ans:1 },
  { q:"Plural of Foot?", options:["Foots","Feets","Feet","Fets"], ans:2 },
  { q:"Plural of Tooth?", options:["Tooths","Teeth","Toothes","Toothes"], ans:1 },

  { q:"Opposite of TRUE?", options:["False","Right","Sure","Pure"], ans:0 },
  { q:"Opposite of OLD?", options:["New","Young","Fresh","All"], ans:1 },
  { q:"Opposite of OPEN?", options:["Close","Shut","Both","None"], ans:2 },
  { q:"Opposite of LIGHT?", options:["Bright","Dark","White","Clear"], ans:1 },
  { q:"Opposite of RICH?", options:["Poor","Strong","Big","Happy"], ans:0 },

  { q:"One word: A place where books are kept", options:["Library","School","Office","Bank"], ans:0 },
  { q:"One word: A person who teaches", options:["Teacher","Doctor","Driver","Painter"], ans:0 },
  { q:"One word: A person who writes poems", options:["Poet","Singer","Dancer","Player"], ans:0 },
  { q:"One word: A person who drives a car", options:["Driver","Pilot","Cook","Guard"], ans:0 },
  { q:"One word: A person who works in a hospital", options:["Doctor","Teacher","Farmer","Singer"], ans:0 }
);
bank.English.medium.push(
  { q:"Delhi Police English Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"Fill: He ___ to school daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Choose correct: I have ___ my work.", options:["done","do","did","doing"], ans:0 },
  { q:"Fill: The sun ___ in the east.", options:["rise","rises","rising","rose"], ans:1 },
  { q:"Choose correct: She is ___ honest girl.", options:["a","an","the","no"], ans:1 },
  { q:"Fill: They ___ watching TV.", options:["is","are","was","be"], ans:1 },

  { q:"Correct: I ___ a letter yesterday.", options:["write","writes","wrote","written"], ans:2 },
  { q:"Correct: She ___ not come.", options:["do","does","did","done"], ans:1 },
  { q:"Correct: He ___ been to Delhi.", options:["has","have","had","having"], ans:0 },
  { q:"Correct: They ___ finished the work.", options:["has","have","had","having"], ans:1 },
  { q:"Correct: We ___ late today.", options:["is","are","was","be"], ans:1 },

  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },
  { q:"Synonym of DANGER?", options:["Risk","Safe","Good","Peace"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },

  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },

  { q:"Correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  { q:"Choose correct: He is good ___ Maths.", options:["in","at","on","for"], ans:1 },
  { q:"Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"Choose correct: She is married ___ him.", options:["with","to","by","on"], ans:1 }
);
bank.English.hard.push(
  { q:"Delhi Police English Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'abandon'?", options:["leave","eat","run","build"], ans:0 },
  { q:"Meaning of 'transparent'?", options:["clear","dirty","heavy","weak"], ans:0 },
  { q:"Meaning of 'persistent'?", options:["continuous","lazy","weak","slow"], ans:0 },
  { q:"Meaning of 'fragile'?", options:["strong","breakable","heavy","fast"], ans:1 },

  { q:"Correct passive: 'They made a plan.'", options:["A plan made","A plan was made","Plan is made","Plan made"], ans:1 },
  { q:"Correct passive: 'He writes a letter.'", options:["A letter is written by him","A letter was written","A letter written","Letter is wrote"], ans:0 },
  { q:"Correct passive: 'She cooks food.'", options:["Food cooked","Food is cooked","Food was cooked","Food is cook"], ans:1 },
  { q:"Correct passive: 'They help me.'", options:["I am helped by them","I helped by them","I was help by them","I is helped"], ans:0 },
  { q:"Correct passive: 'We play cricket.'", options:["Cricket played","Cricket is played","Cricket was play","Cricket is play"], ans:1 },

  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Optimist","Philanthropist","Pessimist"], ans:0 },
  { q:"One word: One who loves books", options:["Bibliophile","Philosopher","Librarian","Editor"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: One who can do many works", options:["Versatile","Lazy","Weak","Slow"], ans:0 },

  { q:"Choose correct: If I ___ rich, I would help you.", options:["am","was","were","be"], ans:2 },
  { q:"Choose correct: He said that he ___ busy.", options:["is","was","were","be"], ans:1 },
  { q:"Choose correct: I wish I ___ a car.", options:["have","had","has","having"], ans:1 },
  { q:"Choose correct: It is time we ___ home.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: She suggested that he ___ rest.", options:["take","takes","took","taken"], ans:0 },

  { q:"Spot error: He do not like tea.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 },

  { q:"Choose correct: It is high time we ___ this work.", options:["do","did","done","doing"], ans:1 },
  { q:"Choose correct: No sooner ___ he arrived than it rained.", options:["had","have","has","was"], ans:0 },
  { q:"Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 }
);
// =========================
// ARMY GD - ADD QUESTIONS
// =========================

// GK
bank.GK.easy.push(
  { q:"Army GD GK Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"भारत का राष्ट्रीय पशु कौन है?", options:["Lion","Tiger","Elephant","Horse"], ans:1 },
  { q:"भारत की राजधानी क्या है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"भारत का राष्ट्रीय पक्षी कौन है?", options:["Crow","Peacock","Eagle","Sparrow"], ans:1 },
  { q:"भारत का राष्ट्रीय फूल कौन सा है?", options:["Rose","Lotus","Lily","Sunflower"], ans:1 },
  { q:"भारत का राष्ट्रीय फल कौन सा है?", options:["Apple","Mango","Banana","Orange"], ans:1 },

  { q:"स्वतंत्रता दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","14 Nov"], ans:0 },
  { q:"गणतंत्र दिवस कब मनाया जाता है?", options:["15 Aug","26 Jan","2 Oct","14 Nov"], ans:1 },
  { q:"गांधी जयंती कब होती है?", options:["15 Aug","26 Jan","2 Oct","1 May"], ans:2 },
  { q:"विश्व पर्यावरण दिवस कब मनाया जाता है?", options:["5 June","1 May","2 Oct","15 Aug"], ans:0 },
  { q:"शिक्षक दिवस कब मनाया जाता है?", options:["5 Sep","14 Nov","15 Aug","26 Jan"], ans:0 },

  { q:"ताजमहल कहाँ है?", options:["Delhi","Agra","Jaipur","Lucknow"], ans:1 },
  { q:"लाल किला कहाँ है?", options:["Delhi","Agra","Mumbai","Kolkata"], ans:0 },
  { q:"कुतुब मीनार कहाँ है?", options:["Delhi","Agra","Jaipur","Chennai"], ans:0 },
  { q:"इंडिया गेट कहाँ है?", options:["Delhi","Mumbai","Agra","Bhopal"], ans:0 },
  { q:"चारमीनार कहाँ है?", options:["Hyderabad","Delhi","Agra","Jaipur"], ans:0 },

  { q:"भारत में कुल कितने राज्य हैं?", options:["27","28","29","30"], ans:1 },
  { q:"भारत की मुद्रा क्या है?", options:["Dollar","Rupee","Euro","Yen"], ans:1 },
  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल) कौन सा है?", options:["UP","MP","Rajasthan","Bihar"], ans:2 },
  { q:"भारत का सबसे छोटा राज्य कौन सा है?", options:["Goa","Sikkim","Tripura","Manipur"], ans:0 },
  { q:"भारत का सबसे बड़ा महासागर कौन सा है?", options:["Indian","Atlantic","Pacific","Arctic"], ans:2 },

  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },
  { q:"UN का मुख्यालय कहाँ है?", options:["New York","Paris","Geneva","London"], ans:0 },
  { q:"WHO का मुख्यालय कहाँ है?", options:["Geneva","Paris","London","Tokyo"], ans:0 },
  { q:"भारत के प्रथम प्रधानमंत्री कौन थे?", options:["Nehru","Patel","Gandhi","Azad"], ans:0 },
  { q:"भारत के प्रथम राष्ट्रपति कौन थे?", options:["Rajendra Prasad","Nehru","Gandhi","Patel"], ans:0 },

  { q:"भारत का राष्ट्रीय खेल (परंपरागत)?", options:["Hockey","Cricket","Kabaddi","Football"], ans:0 },
  { q:"भारत का राष्ट्रीय गान किसने लिखा?", options:["Bankim","Tagore","Premchand","Nehru"], ans:1 },
  { q:"भारत का संविधान कब लागू हुआ?", options:["15 Aug 1947","26 Jan 1950","2 Oct 1949","1 Jan 1951"], ans:1 },
  { q:"भारत का पहला उपग्रह कौन सा था?", options:["INSAT","Aryabhata","Rohini","Bhaskara"], ans:1 },
  { q:"ISRO का मुख्यालय कहाँ है?", options:["Delhi","Mumbai","Bengaluru","Chennai"], ans:2 }
);
bank.GK.medium.push(
  { q:"Army GD GK Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"RBI की स्थापना कब हुई?", options:["1930","1935","1947","1950"], ans:1 },
  { q:"भारत में पंचवर्षीय योजना कब शुरू हुई?", options:["1947","1951","1955","1960"], ans:1 },
  { q:"निति आयोग की स्थापना कब हुई?", options:["2012","2013","2015","2016"], ans:2 },
  { q:"योजना आयोग की जगह किसने ली?", options:["NITI Aayog","Finance Commission","CBI","CVC"], ans:0 },
  { q:"हरित क्रांति के जनक कौन हैं?", options:["MS Swaminathan","APJ Kalam","CV Raman","Homi Bhabha"], ans:0 },

  { q:"लोकसभा का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:1 },
  { q:"राज्यसभा के सदस्यों का कार्यकाल कितने वर्ष होता है?", options:["4","5","6","7"], ans:2 },
  { q:"भारत की संसद में कितने सदन हैं?", options:["1","2","3","4"], ans:1 },
  { q:"राज्यसभा का सभापति कौन होता है?", options:["President","Vice President","PM","Speaker"], ans:1 },
  { q:"भारत में राष्ट्रपति का चुनाव कौन करता है?", options:["केवल लोकसभा","केवल राज्यसभा","संसद+विधानसभा","केवल विधानसभा"], ans:2 },

  { q:"CAG का उल्लेख किस अनुच्छेद में है?", options:["148","280","124","370"], ans:0 },
  { q:"Finance Commission का उल्लेख किस अनुच्छेद में है?", options:["148","280","52","14"], ans:1 },
  { q:"Election Commission किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"धन विधेयक किस अनुच्छेद में है?", options:["109","110","111","112"], ans:1 },
  { q:"संविधान संशोधन किस अनुच्छेद में है?", options:["352","356","360","368"], ans:3 },

  { q:"भाखड़ा नांगल बाँध किस नदी पर है?", options:["Sutlej","Ganga","Yamuna","Narmada"], ans:0 },
  { q:"तेहरी बाँध किस नदी पर है?", options:["Ganga","Bhagirathi","Yamuna","Narmada"], ans:1 },
  { q:"हीराकुंड बाँध किस नदी पर है?", options:["Mahanadi","Godavari","Tapti","Krishna"], ans:0 },
  { q:"किस नदी को 'दक्षिण गंगा' कहा जाता है?", options:["Krishna","Godavari","Cauvery","Mahanadi"], ans:1 },
  { q:"चिल्का झील किस राज्य में है?", options:["Odisha","WB","UP","MP"], ans:0 },

  { q:"भारत का पहला परमाणु परीक्षण कब हुआ?", options:["1964","1974","1984","1998"], ans:1 },
  { q:"भारत के पहले मुख्य चुनाव आयुक्त कौन थे?", options:["Sukumar Sen","TN Seshan","Rajendra Prasad","Kamaraj"], ans:0 },
  { q:"भारत की पहली महिला प्रधानमंत्री कौन थीं?", options:["Indira Gandhi","Sonia Gandhi","Pratibha Patil","Sarojini Naidu"], ans:0 },
  { q:"Drafting Committee के अध्यक्ष कौन थे?", options:["Ambedkar","Nehru","Rajendra Prasad","Patel"], ans:0 },
  { q:"संविधान सभा के अध्यक्ष कौन थे?", options:["Nehru","Rajendra Prasad","Ambedkar","Patel"], ans:1 },

  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["Sundarbans","Mahanadi","Godavari","Krishna"], ans:0 },
  { q:"भारत की सबसे बड़ी मीठे पानी की झील?", options:["Wular","Dal","Chilika","Loktak"], ans:0 },
  { q:"भारत का सबसे बड़ा कोयला क्षेत्र?", options:["Jharia","Raniganj","Bokaro","Singrauli"], ans:0 },
  { q:"भारत का सबसे बड़ा बंदरगाह?", options:["Kandla","Mumbai","Chennai","Kochi"], ans:1 },
  { q:"भारत का सबसे अधिक जनसंख्या वाला राज्य?", options:["UP","Bihar","MP","Rajasthan"], ans:0 }
);
bank.GK.hard.push(
  { q:"Army GD GK Hard Q1 ...", options:["A","B","C","D"], ans:2 },
    { q:"मौलिक अधिकार किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },
  { q:"नीति निदेशक तत्व किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },
  { q:"मौलिक कर्तव्य किस भाग में हैं?", options:["Part III","Part IVA","Part IV","Part V"], ans:1 },
  { q:"राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:0 },
  { q:"राष्ट्रपति शासन किस अनुच्छेद में है?", options:["352","356","360","368"], ans:1 },

  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:2 },
  { q:"President pardon power किस अनुच्छेद में है?", options:["72","74","75","80"], ans:0 },
  { q:"Governor pardon power किस अनुच्छेद में है?", options:["161","168","154","356"], ans:0 },
  { q:"Attorney General का उल्लेख किस अनुच्छेद में है?", options:["76","124","148","280"], ans:0 },
  { q:"संयुक्त बैठक का उल्लेख किस अनुच्छेद में है?", options:["108","109","110","111"], ans:0 },

  { q:"वयस्क मताधिकार किस अनुच्छेद में है?", options:["324","325","326","327"], ans:2 },
  { q:"लोकसभा अध्यक्ष का उल्लेख किस अनुच्छेद में है?", options:["93","94","95","96"], ans:0 },
  { q:"राज्यसभा उपसभापति का उल्लेख किस अनुच्छेद में है?", options:["64","89","90","93"], ans:2 },
  { q:"प्रधानमंत्री का उल्लेख किस अनुच्छेद में आता है?", options:["74","75","76","78"], ans:1 },
  { q:"मंत्रिपरिषद किसके प्रति उत्तरदायी होती है?", options:["President","Rajya Sabha","Lok Sabha","Supreme Court"], ans:2 },

  { q:"समवर्ती सूची किस अनुसूची में है?", options:["5th","6th","7th","8th"], ans:2 },
  { q:"संघ सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:1 },
  { q:"राज्य सूची किस अनुसूची में है?", options:["7th","8th","9th","10th"], ans:0 },
  { q:"भाषाओं की सूची किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:2 },
  { q:"भारत का राष्ट्रीय प्रतीक कहाँ से लिया गया?", options:["Sanchi","Sarnath","Ajanta","Hampi"], ans:1 },

  { q:"UPSC का उल्लेख किस भाग में है?", options:["Part XIV","Part XV","Part XVI","Part XVII"], ans:0 },
  { q:"Supreme Court का उल्लेख किस भाग में है?", options:["Part V","Part VI","Part IV","Part III"], ans:0 },
  { q:"High Court का उल्लेख किस भाग में है?", options:["Part V","Part VI","Part VII","Part VIII"], ans:1 },
  { q:"Election Commission किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"Money Bill किस अनुच्छेद में है?", options:["109","110","111","112"], ans:1 },

  { q:"भारत का संविधान किस देश से सबसे ज्यादा प्रभावित है?", options:["USA","UK","Canada","France"], ans:1 },
  { q:"संविधान सभा में उद्देश्य प्रस्ताव किसने रखा?", options:["Nehru","Patel","Ambedkar","Rajendra Prasad"], ans:0 },
  { q:"मूल संविधान में कितने अनुच्छेद थे?", options:["395","400","450","365"], ans:0 },
  { q:"मूल संविधान में कितनी अनुसूचियाँ थीं?", options:["8","10","12","14"], ans:0 },
  { q:"संविधान कब लागू हुआ?", options:["15 Aug 1947","26 Jan 1950","2 Oct 1949","1 Jan 1951"], ans:1 }
);

// Math
bank.Math.easy.push(
  { q:"Army GD Math Easy Q1 ...", options:["A","B","C","D"], ans:0 },
   { q:"35 + 45 = ?", options:["70","75","80","85"], ans:2 },
  { q:"96 - 29 = ?", options:["65","66","67","68"], ans:2 },
  { q:"18 × 7 = ?", options:["116","126","136","146"], ans:1 },
  { q:"144 ÷ 12 = ?", options:["10","11","12","13"], ans:2 },
  { q:"25 × 16 = ?", options:["350","375","400","450"], ans:2 },

  { q:"10% of 600 = ?", options:["50","55","60","65"], ans:2 },
  { q:"20% of 450 = ?", options:["70","80","90","100"], ans:2 },
  { q:"25% of 320 = ?", options:["60","70","80","90"], ans:2 },
  { q:"5% of 900 = ?", options:["35","40","45","50"], ans:2 },
  { q:"12.5% of 240 = ?", options:["20","25","30","35"], ans:2 },

  { q:"1/2 of 200 = ?", options:["80","90","100","110"], ans:2 },
  { q:"2/3 of 180 = ?", options:["100","110","120","130"], ans:2 },
  { q:"3/5 of 250 = ?", options:["120","130","140","150"], ans:3 },
  { q:"4/7 of 350 = ?", options:["150","180","200","250"], ans:2 },
  { q:"5/8 of 320 = ?", options:["180","200","220","240"], ans:1 },

  { q:"यदि 8x = 96 तो x = ?", options:["10","11","12","13"], ans:2 },
  { q:"यदि 7x = 84 तो x = ?", options:["10","11","12","14"], ans:2 },
  { q:"यदि x/5 = 9 तो x = ?", options:["40","45","50","55"], ans:1 },
  { q:"यदि 3x + 6 = 36 तो x = ?", options:["8","9","10","11"], ans:1 },
  { q:"यदि 2x + 9 = 29 तो x = ?", options:["8","9","10","11"], ans:1 },

  { q:"एक संख्या का 20% = 120 है, संख्या = ?", options:["500","550","600","650"], ans:2 },
  { q:"एक संख्या का 25% = 75 है, संख्या = ?", options:["200","250","300","350"], ans:1 },
  { q:"एक संख्या का 10% = 90 है, संख्या = ?", options:["800","850","900","950"], ans:2 },
  { q:"एक संख्या का 30% = 180 है, संख्या = ?", options:["500","550","600","650"], ans:2 },
  { q:"एक संख्या का 40% = 200 है, संख्या = ?", options:["400","450","500","550"], ans:2 },

  { q:"Average of 10,20,30 = ?", options:["15","20","25","30"], ans:1 },
  { q:"Average of 12,18,24 = ?", options:["16","18","20","22"], ans:1 },
  { q:"Average of 15,25,35 = ?", options:["20","25","30","35"], ans:1 },
  { q:"Average of 8,16,24,32 = ?", options:["18","20","22","24"], ans:1 },
  { q:"Average of 7,14,21,28 = ?", options:["14","16","17.5","18"], ans:2 }
);
bank.Math.medium.push(
  { q:"Army GD Math Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"SI: P=1000, R=10%, T=2 => SI=?", options:["150","180","200","220"], ans:2 },
  { q:"SI: P=1500, R=8%, T=3 => SI=?", options:["320","340","360","380"], ans:2 },
  { q:"SI: P=2000, R=6%, T=4 => SI=?", options:["420","450","480","500"], ans:2 },
  { q:"SI: P=2400, R=5%, T=3 => SI=?", options:["300","320","360","400"], ans:2 },
  { q:"SI: P=5000, R=7%, T=2 => SI=?", options:["650","680","700","720"], ans:2 },

  { q:"CP=800, Profit=20% => SP=?", options:["900","940","960","1000"], ans:2 },
  { q:"CP=1200, Loss=10% => SP=?", options:["1000","1050","1080","1100"], ans:2 },
  { q:"SP=720, Profit=20% => CP=?", options:["560","580","600","620"], ans:2 },
  { q:"SP=540, Loss=10% => CP=?", options:["580","590","600","610"], ans:2 },
  { q:"CP=1500, Profit=12% => SP=?", options:["1650","1680","1700","1720"], ans:1 },

  { q:"Speed=60 km/h, Time=2h => Distance=?", options:["100","110","120","130"], ans:2 },
  { q:"Speed=45 km/h, Time=4h => Distance=?", options:["160","170","180","190"], ans:2 },
  { q:"Distance=210 km, Speed=70 km/h => Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Distance=300 km, Speed=75 km/h => Time=?", options:["3h","4h","5h","6h"], ans:1 },
  { q:"Speed=72 km/h, Time=3h => Distance=?", options:["200","210","216","240"], ans:2 },

  { q:"यदि 18% = 90 तो संख्या=?", options:["400","450","500","550"], ans:1 },
  { q:"यदि 25% = 200 तो संख्या=?", options:["700","750","800","850"], ans:2 },
  { q:"यदि 30% = 270 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 12% = 108 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 15% = 135 तो संख्या=?", options:["800","850","900","950"], ans:2 },

  { q:"Ratio 4:7 में कुल 121 है, छोटा भाग=?", options:["40","44","48","52"], ans:1 },
  { q:"Ratio 5:9 में कुल 140 है, बड़ा भाग=?", options:["80","85","90","95"], ans:2 },
  { q:"Ratio 7:8 में कुल 150 है, छोटा भाग=?", options:["60","65","70","75"], ans:2 },
  { q:"Ratio 3:5 में कुल 96 है, बड़ा भाग=?", options:["55","58","60","62"], ans:2 },
  { q:"Ratio 2:3 में कुल 125 है, छोटा भाग=?", options:["45","50","55","60"], ans:1 },

  { q:"Average of 18,22,26,30 = ?", options:["22","23","24","25"], ans:2 },
  { q:"Average of 15,25,35,45 = ?", options:["28","30","32","35"], ans:1 },
  { q:"Average of 11,22,33,44 = ?", options:["25","27","28","30"], ans:0 },
  { q:"Average of 20,30,40,50,60 = ?", options:["35","38","40","42"], ans:2 },
  { q:"Average of 14,28,42 = ?", options:["26","28","30","32"], ans:1 }
);
bank.Math.hard.push(
  { q:"Army GD Math Hard Q1 ...", options:["A","B","C","D"], ans:2 },
  { q:"CI: P=2000, R=10%, T=2 => Amount?", options:["2200","2400","2420","2600"], ans:2 },
  { q:"CI: P=5000, R=8%, T=2 => Amount?", options:["5600","5832","6000","6200"], ans:1 },
  { q:"CI: P=10000, R=5%, T=2 => Amount?", options:["10500","11000","11025","11250"], ans:2 },
  { q:"CI: P=8000, R=12%, T=2 => Amount?", options:["9600","9800","10035.2","10200"], ans:2 },
  { q:"CI: P=4000, R=15%, T=2 => Amount?", options:["5200","5290","5290","5400"], ans:2 },

  { q:"Train 72 km/h crosses 180m pole in 12 sec. Length?", options:["40m","50m","60m","70m"], ans:2 },
  { q:"Train 90 km/h crosses 250m platform in 20 sec. Length?", options:["200m","220m","250m","300m"], ans:2 },
  { q:"Train 54 km/h crosses 150m pole in 10 sec. Length?", options:["120m","130m","140m","150m"], ans:0 },
  { q:"Train 108 km/h crosses 300m platform in 20 sec. Length?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"Train 60 km/h crosses 200m pole in 15 sec. Length?", options:["40m","45m","50m","55m"], ans:2 },

  { q:"Pipe A fills in 10h, B fills in 15h. Together time?", options:["5h","6h","7h","8h"], ans:1 },
  { q:"A fills in 8h, outlet empties in 12h. Net time?", options:["20h","22h","24h","30h"], ans:2 },
  { q:"A fills in 12h, B empties in 18h. Net time?", options:["30h","32h","36h","40h"], ans:2 },
  { q:"A fills in 15h, B fills in 30h. Together time?", options:["8h","9h","10h","12h"], ans:0 },
  { q:"A fills in 18h, B fills in 24h. Together time?", options:["9h","10h","11h","12h"], ans:1 },

  { q:"If x+y=40 and x-y=12 then x=?", options:["24","25","26","28"], ans:2 },
  { q:"If 5x+9=89 then x=?", options:["14","15","16","17"], ans:2 },
  { q:"If 7x-11=94 then x=?", options:["13","14","15","16"], ans:1 },
  { q:"If x/3 + 8 = 20 then x=?", options:["30","33","36","39"], ans:2 },
  { q:"If 4x-7=69 then x=?", options:["18","19","20","21"], ans:1 },

  { q:"A can do work in 18 days, B in 12 days. Together time?", options:["7.2","8","9","10"], ans:0 },
  { q:"A does in 15 days, B in 10 days. Together time?", options:["5","6","7","8"], ans:0 },
  { q:"A does in 24 days, B in 16 days. Together time?", options:["9.6","10","11","12"], ans:0 },
  { q:"A does in 30 days, B in 20 days. Together time?", options:["10","12","15","18"], ans:0 },
  { q:"A does in 12 days, B in 8 days. Together time?", options:["4.8","5","6","7"], ans:0 },

  { q:"SP=960, Profit=20% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"SP=720, Loss=10% => CP=?", options:["760","780","800","820"], ans:2 },
  { q:"Marked price=2500, discount=20% => SP=?", options:["1800","1900","2000","2100"], ans:2 },
  { q:"Marked price=1800, discount=15% => SP=?", options:["1400","1500","1530","1600"], ans:2 },
  { q:"CP=1600, Profit=25% => SP=?", options:["1800","1900","2000","2100"], ans:2 }
);

// Reasoning
bank.Reasoning.easy.push(
  { q:"Army GD Reasoning Easy Q1 ...", options:["A","B","C","D"], ans:0 },
   { q:"Series: 2,4,6,8, ?", options:["9","10","11","12"], ans:1 },
  { q:"Series: 5,10,15,20, ?", options:["22","24","25","30"], ans:2 },
  { q:"Series: 3,6,9,12, ?", options:["13","14","15","16"], ans:2 },
  { q:"Series: 10,20,30,40, ?", options:["45","50","55","60"], ans:1 },
  { q:"Series: 1,2,4,8, ?", options:["10","12","14","16"], ans:3 },

  { q:"Odd one out: Apple, Mango, Carrot, Banana", options:["Apple","Mango","Carrot","Banana"], ans:2 },
  { q:"Odd one out: 2,4,6,9", options:["2","4","6","9"], ans:3 },
  { q:"Odd one out: Pen, Pencil, Eraser, Apple", options:["Pen","Pencil","Eraser","Apple"], ans:3 },
  { q:"Odd one out: Circle, Square, Triangle, Chair", options:["Circle","Square","Triangle","Chair"], ans:3 },
  { q:"Odd one out: 11,13,17,21", options:["11","13","17","21"], ans:3 },

  { q:"If A=1, B=2 then C=?", options:["1","2","3","4"], ans:2 },
  { q:"If D=4 then F=?", options:["5","6","7","8"], ans:1 },
  { q:"If M=13 then P=?", options:["14","15","16","17"], ans:2 },
  { q:"If X=24 then Z=?", options:["25","26","27","28"], ans:1 },
  { q:"If G=7 then I=?", options:["8","9","10","11"], ans:1 },

  { q:"Opposite of East?", options:["North","South","West","None"], ans:2 },
  { q:"Opposite of North?", options:["East","West","South","None"], ans:2 },
  { q:"Day after Monday?", options:["Tuesday","Wednesday","Thursday","Friday"], ans:0 },
  { q:"Day before Sunday?", options:["Friday","Saturday","Monday","Tuesday"], ans:1 },
  { q:"How many days in a week?", options:["5","6","7","8"], ans:2 },

  { q:"Next: 6,12,18,24, ?", options:["28","30","32","36"], ans:1 },
  { q:"Next: 7,14,21,28, ?", options:["30","32","35","40"], ans:2 },
  { q:"Next: 9,18,27,36, ?", options:["40","45","48","54"], ans:1 },
  { q:"Next: 12,24,36,48, ?", options:["54","56","60","72"], ans:2 },
  { q:"Next: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },

  { q:"How many sides in triangle?", options:["2","3","4","5"], ans:1 },
  { q:"How many letters in INDIA?", options:["3","4","5","6"], ans:2 },
  { q:"Which is bigger: 0.5 or 0.05?", options:["0.05","0.5","Equal","None"], ans:1 },
  { q:"How many months in a year?", options:["10","11","12","13"], ans:2 },
  { q:"How many zeros in 1000?", options:["1","2","3","4"], ans:2 }
);
bank.Reasoning.medium.push(
  { q:"Army GD Reasoning Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"Coding: CAT = DBU, DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Find missing: 3,6,12,24, ?", options:["36","40","48","50"], ans:2 },
  { q:"Find missing: 5,10,20,40, ?", options:["60","70","80","90"], ans:2 },
  { q:"Find missing: 2,6,18,54, ?", options:["108","144","162","216"], ans:2 },
  { q:"Series: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },

  { q:"Which comes next: AZ, BY, CX, ?", options:["DW","EV","FU","GV"], ans:0 },
  { q:"Which comes next: 1A, 2B, 3C, ?", options:["4D","5E","6F","7G"], ans:0 },
  { q:"Which comes next: AB, CD, EF, ?", options:["GH","GI","HG","HI"], ans:0 },
  { q:"A is taller than B, B taller than C. Tallest?", options:["A","B","C","None"], ans:0 },
  { q:"A is shorter than B, B shorter than C. Shortest?", options:["A","B","C","None"], ans:0 },

  { q:"If 12 is coded as 21 then 34 as?", options:["43","44","33","24"], ans:0 },
  { q:"If 56 is coded as 65 then 78 as?", options:["87","88","77","67"], ans:0 },
  { q:"If A=26, B=25 then C=?", options:["24","23","22","21"], ans:0 },
  { q:"If 1=3, 2=5, 3=7 then 4=?", options:["8","9","10","11"], ans:1 },
  { q:"Mirror image is related to?", options:["Reflection","Rotation","Translation","None"], ans:0 },

  { q:"Find missing: 9,18,36,72, ?", options:["90","108","144","150"], ans:2 },
  { q:"Find missing: 10,20,40,80, ?", options:["120","140","160","180"], ans:2 },
  { q:"Find missing: 15,30,45,60, ?", options:["65","70","75","80"], ans:2 },
  { q:"Series: 4,9,16,25, ?", options:["30","35","36","49"], ans:2 },
  { q:"Series: 6,11,16,21, ?", options:["24","25","26","27"], ans:1 },

  { q:"Which is a metal?", options:["Wood","Plastic","Iron","Rubber"], ans:2 },
  { q:"Which is a fruit?", options:["Potato","Onion","Mango","Carrot"], ans:2 },
  { q:"Which is a bird?", options:["Dog","Cat","Crow","Cow"], ans:2 },
  { q:"Which is water transport?", options:["Bus","Train","Ship","Car"], ans:2 },
  { q:"Which is a planet?", options:["Sun","Moon","Earth","Star"], ans:2 },

  { q:"Find missing: 8,16,24,32, ?", options:["36","40","48","56"], ans:1 },
  { q:"Find missing: 2,5,8,11, ?", options:["12","13","14","15"], ans:2 },
  { q:"Find missing: 1,3,5,7, ?", options:["8","9","10","11"], ans:1 },
  { q:"Find missing: 11,22,33,44, ?", options:["55","66","77","88"], ans:0 },
  { q:"Find missing: 7,14,28,56, ?", options:["84","98","112","120"], ans:2 }
);
bank.Reasoning.hard.push(
  { q:"Army GD Reasoning Hard Q1 ...", options:["A","B","C","D"], ans:2 },
   { q:"Blood relation: A brother of B, B mother of C. A is ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },
  { q:"P is sister of Q, Q is father of R. P is R's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"A is father of B, B is brother of C. A is C's ?", options:["Uncle","Father","Brother","Cousin"], ans:1 },
  { q:"X is mother of Y, Y is sister of Z. X is Z's ?", options:["Mother","Aunt","Sister","Grandmother"], ans:0 },
  { q:"M is brother of N, N is mother of P. M is P's ?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },

  { q:"Direction: 5km E, 3km N, 5km W. Position?", options:["3km North","5km East","2km South","3km South"], ans:0 },
  { q:"A walks 10m N, 10m E, 10m S, 10m W. Distance from start?", options:["0","10","20","40"], ans:0 },
  { q:"A goes 6km North, 8km East. Distance from start?", options:["10km","12km","14km","16km"], ans:0 },
  { q:"A goes 4km East, 3km North. Distance from start?", options:["5km","6km","7km","8km"], ans:0 },
  { q:"A goes 7km West, 24km North. Distance from start?", options:["23km","24km","25km","26km"], ans:2 },

  { q:"Statement: All cats are animals. Some animals are dogs. Conclusion?", options:["Valid","Invalid","Both","None"], ans:3 },
  { q:"All pens are tools. Some tools are books. Conclusion?", options:["All pens are books","Some pens are books","No pen is book","None"], ans:3 },
  { q:"All apples are fruits. Some fruits are sweet. Conclusion?", options:["All apples sweet","Some apples sweet","No apples sweet","None"], ans:3 },
  { q:"All cars are vehicles. Some vehicles are bikes. Conclusion?", options:["All cars are bikes","Some cars are bikes","No car is bike","None"], ans:3 },
  { q:"All boys are students. Some students are players. Conclusion?", options:["All boys players","Some boys players","No boys players","None"], ans:3 },

  { q:"Find missing: 2, 5, 11, 23, ?", options:["45","46","47","48"], ans:2 },
  { q:"Find missing: 1, 3, 7, 15, ?", options:["25","31","33","35"], ans:1 },
  { q:"Find missing: 4, 9, 19, 39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 3, 8, 18, 38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 5, 12, 26, 54, ?", options:["98","108","110","112"], ans:1 },

  { q:"If SOUTH is written as TQVUI, then NORTH is?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"If INDIA is coded as JOEJB, then CHINA is?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },
  { q:"If 579 is coded as 6810 then 468 is coded as?", options:["579","579","5710","5799"], ans:0 },
  { q:"If 123 is coded as 234 then 789 is coded as?", options:["891","890","8910","91011"], ans:0 },

  { q:"A is 2nd to left of B, B is 3rd to right of C. A is ?", options:["Left of C","Right of C","Same position","Cannot say"], ans:0 },
  { q:"In a row, P is 5th from left and Q is 7th from left. Q is ?", options:["2 left of P","2 right of P","Same","Cannot say"], ans:1 },
  { q:"In a row, A is 3rd from left, B is 5th from right. Total 7. A is ?", options:["Same as B","Left of B","Right of B","Cannot say"], ans:0 },
  { q:"In a row, R is 4th from left, S is 3rd from right. Total 8. R is ?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },
  { q:"In a row, M is 6th from left, N is 4th from left. N is ?", options:["2 left of M","2 right of M","Same","Cannot say"], ans:0 }
);

// English
bank.English.easy.push(
  { q:"Army GD English Easy Q1 ...", options:["A","B","C","D"], ans:0 },
  { q:"Synonym of FAST?", options:["Quick","Slow","Weak","Cold"], ans:0 },
  { q:"Synonym of HAPPY?", options:["Sad","Joyful","Angry","Weak"], ans:1 },
  { q:"Synonym of SMALL?", options:["Tiny","Huge","Big","Large"], ans:0 },
  { q:"Synonym of BEGIN?", options:["Start","Stop","End","Close"], ans:0 },
  { q:"Synonym of HELP?", options:["Assist","Hurt","Break","Stop"], ans:0 },

  { q:"Antonym of BIG?", options:["Large","Huge","Small","Heavy"], ans:2 },
  { q:"Antonym of HOT?", options:["Cold","Warm","Heat","Cool"], ans:0 },
  { q:"Antonym of UP?", options:["Down","Left","Right","Top"], ans:0 },
  { q:"Antonym of DAY?", options:["Night","Sun","Light","Time"], ans:0 },
  { q:"Antonym of CLEAN?", options:["Dirty","Fresh","Pure","Clear"], ans:0 },

  { q:"Fill: I ___ a book.", options:["read","reads","reading","readed"], ans:0 },
  { q:"Fill: He ___ tea.", options:["drink","drinks","drinking","drank"], ans:1 },
  { q:"Fill: We ___ friends.", options:["is","are","was","be"], ans:1 },
  { q:"Fill: She ___ to school.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: They ___ playing.", options:["is","are","was","be"], ans:1 },

  { q:"Plural of Child?", options:["Childs","Children","Childrens","Childes"], ans:1 },
  { q:"Plural of Man?", options:["Mans","Mens","Men","Manes"], ans:2 },
  { q:"Plural of Woman?", options:["Womans","Women","Womens","Womanes"], ans:1 },
  { q:"Plural of Foot?", options:["Foots","Feets","Feet","Fets"], ans:2 },
  { q:"Plural of Tooth?", options:["Tooths","Teeth","Toothes","Toothes"], ans:1 },

  { q:"Opposite of TRUE?", options:["False","Right","Sure","Pure"], ans:0 },
  { q:"Opposite of OLD?", options:["New","Young","Fresh","All"], ans:1 },
  { q:"Opposite of OPEN?", options:["Close","Shut","Both","None"], ans:2 },
  { q:"Opposite of LIGHT?", options:["Bright","Dark","White","Clear"], ans:1 },
  { q:"Opposite of RICH?", options:["Poor","Strong","Big","Happy"], ans:0 },

  { q:"One word: A place where books are kept", options:["Library","School","Office","Bank"], ans:0 },
  { q:"One word: A person who teaches", options:["Teacher","Doctor","Driver","Painter"], ans:0 },
  { q:"One word: A person who writes poems", options:["Poet","Singer","Dancer","Player"], ans:0 },
  { q:"One word: A person who drives a car", options:["Driver","Pilot","Cook","Guard"], ans:0 },
  { q:"One word: A person who works in a hospital", options:["Doctor","Teacher","Farmer","Singer"], ans:0 }
);
bank.English.medium.push(
  { q:"Army GD English Medium Q1 ...", options:["A","B","C","D"], ans:1 },
  { q:"Fill: He ___ to school daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Choose correct: I have ___ my work.", options:["done","do","did","doing"], ans:0 },
  { q:"Fill: The sun ___ in the east.", options:["rise","rises","rising","rose"], ans:1 },
  { q:"Choose correct: She is ___ honest girl.", options:["a","an","the","no"], ans:1 },
  { q:"Fill: They ___ watching TV.", options:["is","are","was","be"], ans:1 },

  { q:"Correct: I ___ a letter yesterday.", options:["write","writes","wrote","written"], ans:2 },
  { q:"Correct: She ___ not come.", options:["do","does","did","done"], ans:1 },
  { q:"Correct: He ___ been to Delhi.", options:["has","have","had","having"], ans:0 },
  { q:"Correct: They ___ finished the work.", options:["has","have","had","having"], ans:1 },
  { q:"Correct: We ___ late today.", options:["is","are","was","be"], ans:1 },

  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },
  { q:"Synonym of DANGER?", options:["Risk","Safe","Good","Peace"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },

  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },

  { q:"Correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  { q:"Choose correct: He is good ___ Maths.", options:["in","at","on","for"], ans:1 },
  { q:"Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"Choose correct: She is married ___ him.", options:["with","to","by","on"], ans:1 }
);
bank.English.hard.push(
  { q:"Army GD English Hard Q1 ...", options:["A","B","C","D"], ans:2 },
   { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'abandon'?", options:["leave","eat","run","build"], ans:0 },
  { q:"Meaning of 'transparent'?", options:["clear","dirty","heavy","weak"], ans:0 },
  { q:"Meaning of 'persistent'?", options:["continuous","lazy","weak","slow"], ans:0 },
  { q:"Meaning of 'fragile'?", options:["strong","breakable","heavy","fast"], ans:1 },

  { q:"Correct passive: 'They made a plan.'", options:["A plan made","A plan was made","Plan is made","Plan made"], ans:1 },
  { q:"Correct passive: 'He writes a letter.'", options:["A letter is written by him","A letter was written","A letter written","Letter is wrote"], ans:0 },
  { q:"Correct passive: 'She cooks food.'", options:["Food cooked","Food is cooked","Food was cooked","Food is cook"], ans:1 },
  { q:"Correct passive: 'They help me.'", options:["I am helped by them","I helped by them","I was help by them","I is helped"], ans:0 },
  { q:"Correct passive: 'We play cricket.'", options:["Cricket played","Cricket is played","Cricket was play","Cricket is play"], ans:1 },

  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Optimist","Philanthropist","Pessimist"], ans:0 },
  { q:"One word: One who loves books", options:["Bibliophile","Philosopher","Librarian","Editor"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: One who can do many works", options:["Versatile","Lazy","Weak","Slow"], ans:0 },

  { q:"Choose correct: If I ___ rich, I would help you.", options:["am","was","were","be"], ans:2 },
  { q:"Choose correct: He said that he ___ busy.", options:["is","was","were","be"], ans:1 },
  { q:"Choose correct: I wish I ___ a car.", options:["have","had","has","having"], ans:1 },
  { q:"Choose correct: It is time we ___ home.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: She suggested that he ___ rest.", options:["take","takes","took","taken"], ans:0 },

  { q:"Spot error: He do not like tea.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 },

  { q:"Choose correct: It is high time we ___ this work.", options:["do","did","done","doing"], ans:1 },
  { q:"Choose correct: No sooner ___ he arrived than it rained.", options:["had","have","has","was"], ans:0 },
  { q:"Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 }
);





// buildPaper() ...




/* =========================
   UTILITIES
========================= */
function shuffle(arr){
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickTopicByWeight(weights){
  const topics = Object.keys(weights);
  const r = Math.random();
  let sum = 0;
  for (const t of topics){
    sum += weights[t];
    if (r <= sum) return t;
  }
  return topics[topics.length - 1];
}

function pickUnique(pool, usedSet){
  const candidates = pool.filter(q => !usedSet.has(q.q));
  if (candidates.length === 0) return null;
  const q = candidates[Math.floor(Math.random() * candidates.length)];
  usedSet.add(q.q);
  return q;
}

/* =========================
   BUILD PAPER (NO REPEAT)
========================= */
function buildPaper(exam, totalQ){
  const mix = difficultyMix[exam] || { easy: 20, medium: 20, hard: 10 };
  const weights = subjectWeight[exam] || subjectWeight["UP Police"];

  const used = new Set();
  const out = [];

  function add(level, count){
    let guard = 0;

    while(count > 0 && guard < 5000){
      guard++;

      const topic = pickTopicByWeight(weights);
      const pool = bank?.[topic]?.[level] || [];

      if (!pool.length) continue;

      const q = pickUnique(pool, used);
      if (!q) continue;

      out.push({
        q: q.q,
        options: q.options,
        ans: q.ans,
        topic,
        difficulty: level
      });

      count--;
    }
  }

  add("easy", mix.easy);
  add("medium", mix.medium);
  add("hard", mix.hard);

  // fallback fill (still unique)
  let safety = 0;
  while(out.length < totalQ && safety < 7000){
    safety++;
    const level = out.length % 3 === 0 ? "easy" : (out.length % 3 === 1 ? "medium" : "hard");
    const topic = pickTopicByWeight(weights);
    const pool = bank?.[topic]?.[level] || [];

    if (!pool.length) continue;

    const q = pickUnique(pool, used);
    if (!q) continue;

    out.push({
      q: q.q,
      options: q.options,
      ans: q.ans,
      topic,
      difficulty: level
    });
  }

  return shuffle(out).slice(0, totalQ);
}

/* =========================
   GET EXAM
========================= */
const params = new URLSearchParams(window.location.search);
const exam = params.get("exam") || "UP Police";

const config = examConfig[exam] || examConfig["UP Police"];
const questions = buildPaper(exam, config.totalQ);

/* =========================
   UI ELEMENTS
========================= */
const examTitle = document.getElementById("examTitle");
const examMeta = document.getElementById("examMeta");
const timerEl = document.getElementById("timer");

const paletteEl = document.getElementById("palette");

const qNoEl = document.getElementById("qNo");
const qTopicEl = document.getElementById("qTopic");
const qTextEl = document.getElementById("qText");
const optionsBox = document.getElementById("optionsBox");

const prevBtn = document.getElementById("prevBtn");
const saveNextBtn = document.getElementById("saveNextBtn");
const markBtn = document.getElementById("markBtn");
const clearBtn = document.getElementById("clearBtn");

const submitBtn = document.getElementById("submitBtn");
const submitBtnTop = document.getElementById("submitBtnTop");

const stTotal = document.getElementById("stTotal");
const stAnswered = document.getElementById("stAnswered");
const stReview = document.getElementById("stReview");
const stNotVisited = document.getElementById("stNotVisited");

/* =========================
   TEST STATE
========================= */
let currentIndex = 0;

const state = questions.map(() => ({
  selected: null,
  visited: false,
  review: false
}));

/* =========================
   HEADER
========================= */
examTitle.innerText = `${exam} – CBT Test`;
examMeta.innerText =
  `Total Q: ${questions.length} • Marks/Q: ${config.marksPerQ} • Negative: ${config.negative} • Time: ${config.timeMin} min`;

/* =========================
   PALETTE
========================= */
function renderPalette(){
  paletteEl.innerHTML = "";

  state.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.className = "qBtn";
    btn.innerText = i + 1;

    if (s.selected !== null) btn.classList.add("answered");
    if (s.review) btn.classList.add("review");
    if (!s.visited) btn.classList.add("notVisited");
    if (i === currentIndex) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentIndex = i;
      renderQuestion();
    });

    paletteEl.appendChild(btn);
  });
}

/* =========================
   QUESTION RENDER
========================= */
function renderQuestion(){
  const q = questions[currentIndex];
  const s = state[currentIndex];

  s.visited = true;

  qNoEl.innerText = `Q${currentIndex + 1}`;
  qTopicEl.innerText = `Topic: ${q.topic} • Level: ${q.difficulty.toUpperCase()}`;
  qTextEl.innerText = q.q;

  optionsBox.innerHTML = q.options.map((op, idx) => {
    const checked = s.selected === idx ? "checked" : "";
    return `
      <label class="opt">
        <input type="radio" name="option" value="${idx}" ${checked}/>
        <span>${op}</span>
      </label>
    `;
  }).join("");

  optionsBox.querySelectorAll("input[name='option']").forEach(inp => {
    inp.addEventListener("change", () => {
      state[currentIndex].selected = parseInt(inp.value);
      updateStats();
      renderPalette();
    });
  });

  updateStats();
  renderPalette();
}

/* =========================
   STATS
========================= */
function updateStats(){
  const total = questions.length;
  const answered = state.filter(s => s.selected !== null).length;
  const review = state.filter(s => s.review).length;
  const notVisited = state.filter(s => !s.visited).length;

  stTotal.innerText = total;
  stAnswered.innerText = answered;
  stReview.innerText = review;
  stNotVisited.innerText = notVisited;
}

/* =========================
   BUTTON ACTIONS
========================= */
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) currentIndex--;
  renderQuestion();
});

saveNextBtn.addEventListener("click", () => {
  if (currentIndex < questions.length - 1) currentIndex++;
  renderQuestion();
});

markBtn.addEventListener("click", () => {
  state[currentIndex].review = !state[currentIndex].review;
  updateStats();
  renderPalette();
});

clearBtn.addEventListener("click", () => {
  state[currentIndex].selected = null;
  updateStats();
  renderPalette();
  renderQuestion();
});

/* =========================
   TIMER (NO ALERT)
========================= */
let totalSeconds = config.timeMin * 60;

function renderTime(){
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  timerEl.innerText = `${h}:${m}:${s}`;
}

renderTime();

const timer = setInterval(() => {
  totalSeconds--;
  renderTime();

  if (totalSeconds <= 0) {
    clearInterval(timer);
    submitTest(true);
  }
}, 1000);

/* =========================
   SUBMIT ENGINE
========================= */
function submitTest(isAuto = false){
  clearInterval(timer);

  let correct = 0;
  let wrong = 0;
  let attempted = 0;

  const topicStats = {};

  questions.forEach((q, i) => {
    const selected = state[i].selected;

    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { attempted: 0, correct: 0, wrong: 0 };
    }

    if (selected !== null) {
      attempted++;
      topicStats[q.topic].attempted++;

      if (selected === q.ans) {
        correct++;
        topicStats[q.topic].correct++;
      } else {
        wrong++;
        topicStats[q.topic].wrong++;
      }
    }
  });

  const totalQ = questions.length;
  const unattempted = totalQ - attempted;

  const marksGained = correct * config.marksPerQ;
  const marksLost = wrong * config.negative;
  const score = Math.max(0, marksGained - marksLost);

  const maxMarks = totalQ * config.marksPerQ;
  const accuracy = attempted === 0 ? 0 : Math.round((correct / attempted) * 100);

  const timeTakenSec = (config.timeMin * 60) - totalSeconds;

  const result = {
    exam,
    config,
    totalQuestions: totalQ,
    attempted,
    unattempted,
    correct,
    wrong,
    marksGained,
    marksLost,
    score,
    maxMarks,
    accuracy,
    timeTakenSec,
    topicStats,
    autoSubmitted: isAuto,
    submittedAt: Date.now()
  };

  localStorage.setItem("lastTestResult", JSON.stringify(result));
  window.location.href = "predicy-result.html";
}

function confirmSubmit(){
  const ok = confirm("Submit करने के बाद answers change नहीं होंगे. Submit करें?");
  if (ok) submitTest(false);
}

submitBtn.addEventListener("click", confirmSubmit);
submitBtnTop.addEventListener("click", confirmSubmit);

/* =========================
   INIT
========================= */
renderPalette();
renderQuestion();
updateStats();
