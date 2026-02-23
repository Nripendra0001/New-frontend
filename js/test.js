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







// =========================
// UP POLICE - ADD QUESTIONS
// =========================

/// =========================
// GK (UP Police level) - REPLACED (Medium → Hard)
// =========================

// ---------- EASY (Exam Level Easy) ----------
bank.GK.easy.push(

  { q:"भारत के संविधान का ‘प्रस्तावना’ किससे शुरू होती है?", options:["हम भारत के नागरिक", "हम भारत के लोग", "हम भारत के निवासी", "हम भारत के जनता"], ans:1 },
  { q:"भारतीय संविधान कब लागू हुआ?", options:["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1949"], ans:1 },
  { q:"भारतीय संविधान सभा के अध्यक्ष कौन थे?", options:["जवाहरलाल नेहरू", "डॉ. राजेंद्र प्रसाद", "बी.आर. अंबेडकर", "सरदार पटेल"], ans:1 },
  { q:"भारतीय संविधान का मसौदा (Draft) किसने तैयार किया?", options:["राजेंद्र प्रसाद", "बी.आर. अंबेडकर", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"], ans:1 },
  { q:"भारत का राष्ट्रीय चिन्ह किस स्थान से लिया गया है?", options:["सारनाथ", "मथुरा", "अमरावती", "उज्जैन"], ans:0 },
  { q:"भारत का राष्ट्रीय पक्षी क्या है?", options:["तोता", "मोर", "गरुड़", "कौआ"], ans:1 },
  { q:"भारत का राष्ट्रीय पशु क्या है?", options:["शेर", "बाघ", "हाथी", "घोड़ा"], ans:1 },
  { q:"भारत का राष्ट्रीय फूल क्या है?", options:["गुलाब", "कमल", "लिली", "गेंदा"], ans:1 },
  { q:"UNO की स्थापना कब हुई?", options:["1942", "1945", "1950", "1919"], ans:1 },
  { q:"WHO का मुख्यालय कहाँ है?", options:["न्यूयॉर्क", "जिनेवा", "पेरिस", "रोम"], ans:1 },
  { q:"RBI की स्थापना कब हुई?", options:["1930", "1935", "1947", "1950"], ans:1 },

  { q:"भारत में पहली जनगणना (Regular) कब हुई?", options:["1872", "1881", "1891", "1901"], ans:1 },
  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल) कौन सा है?", options:["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "महाराष्ट्र"], ans:2 },
  { q:"भारत का सबसे छोटा राज्य (क्षेत्रफल) कौन सा है?", options:["गोवा", "सिक्किम", "त्रिपुरा", "मणिपुर"], ans:0 },
  { q:"भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?", options:["महाराष्ट्र", "उत्तर प्रदेश", "बिहार", "पश्चिम बंगाल"], ans:1 },
  { q:"‘बिहार का शोक’ किस नदी को कहा जाता है?", options:["गंडक", "कोसी", "सोन", "घाघरा"], ans:1 },
  { q:"‘दक्षिण गंगा’ किस नदी को कहा जाता है?", options:["कावेरी", "गोदावरी", "महानदी", "कृष्णा"], ans:1 },
  { q:"भाखड़ा नांगल बाँध किस नदी पर है?", options:["सतलुज", "गंगा", "यमुना", "नर्मदा"], ans:0 },
  { q:"टिहरी बाँध किस नदी पर है?", options:["भागीरथी", "अलकनंदा", "यमुना", "गंगा"], ans:0 },
  { q:"हीराकुंड बाँध किस नदी पर है?", options:["महानदी", "गोदावरी", "नर्मदा", "ताप्ती"], ans:0 },
  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["महानदी", "सुंदरबन", "गोदावरी", "कृष्णा"], ans:1 },

  { q:"प्लासी का युद्ध कब हुआ?", options:["1757", "1764", "1857", "1707"], ans:0 },
  { q:"बक्सर का युद्ध कब हुआ?", options:["1757", "1764", "1772", "1784"], ans:1 },
  { q:"1857 की क्रांति मेरठ से किस तारीख को शुरू हुई?", options:["10 मई", "15 अगस्त", "26 जनवरी", "5 जून"], ans:0 },
  { q:"जलियांवाला बाग हत्याकांड कब हुआ?", options:["1905", "1919", "1922", "1930"], ans:1 },
  { q:"दांडी मार्च कब हुआ?", options:["1920", "1930", "1942", "1919"], ans:1 },
  { q:"भारत छोड़ो आंदोलन कब हुआ?", options:["1942", "1930", "1920", "1919"], ans:0 },
  { q:"‘स्वराज मेरा जन्मसिद्ध अधिकार है’ किसने कहा?", options:["गांधी", "तिलक", "नेहरू", "पटेल"], ans:1 },
  { q:"भारत का पहला उपग्रह कौन सा था?", options:["रोहिणी", "आर्यभट्ट", "इनसैट", "भास्कर"], ans:1 },
  { q:"ISRO का मुख्यालय कहाँ है?", options:["मुंबई", "बेंगलुरु", "चेन्नई", "हैदराबाद"], ans:1 }

);


// ---------- MEDIUM (UP Police Exam Medium) ----------
bank.GK.medium.push(

  { q:"भारतीय संविधान में ‘धर्मनिरपेक्ष’ शब्द किस संशोधन द्वारा जोड़ा गया?", options:["24वां", "42वां", "44वां", "52वां"], ans:1 },
  { q:"भारतीय संविधान में ‘समाजवादी’ शब्द किस संशोधन द्वारा जोड़ा गया?", options:["42वां", "44वां", "52वां", "61वां"], ans:0 },
  { q:"राज्यसभा का सभापति कौन होता है?", options:["राष्ट्रपति", "उपराष्ट्रपति", "लोकसभा अध्यक्ष", "प्रधानमंत्री"], ans:1 },
  { q:"लोकसभा का कार्यकाल कितने वर्ष होता है?", options:["4", "5", "6", "7"], ans:1 },
  { q:"राज्यसभा के सदस्यों का कार्यकाल कितने वर्ष होता है?", options:["4", "5", "6", "7"], ans:2 },
  { q:"भारत में राष्ट्रपति का चुनाव कौन करता है?", options:["केवल लोकसभा", "केवल राज्यसभा", "संसद + राज्य विधानसभाएँ", "केवल राज्य विधानसभाएँ"], ans:2 },
  { q:"मौलिक अधिकार संविधान के किस भाग में हैं?", options:["Part II", "Part III", "Part IV", "Part V"], ans:1 },
  { q:"नीति निदेशक तत्व (DPSP) संविधान के किस भाग में हैं?", options:["Part III", "Part IV", "Part V", "Part VI"], ans:1 },
  { q:"मौलिक कर्तव्य (Fundamental Duties) किस भाग में हैं?", options:["Part III", "Part IVA", "Part IV", "Part V"], ans:1 },
  { q:"संविधान संशोधन की प्रक्रिया किस अनुच्छेद में है?", options:["356", "368", "370", "324"], ans:1 },
  { q:"भारत में पंचायती राज को संवैधानिक दर्जा किस संशोधन से मिला?", options:["61वां", "73वां", "74वां", "86वां"], ans:1 },

  { q:"नगरपालिकाओं से संबंधित संशोधन कौन सा है?", options:["73वां", "74वां", "42वां", "44वां"], ans:1 },
  { q:"चुनाव आयोग का उल्लेख किस अनुच्छेद में है?", options:["320", "324", "326", "330"], ans:1 },
  { q:"वयस्क मताधिकार किस अनुच्छेद में है?", options:["324", "325", "326", "327"], ans:2 },
  { q:"संसद के दोनों सदनों की संयुक्त बैठक का उल्लेख किस अनुच्छेद में है?", options:["108", "109", "110", "111"], ans:0 },
  { q:"धन विधेयक (Money Bill) किस अनुच्छेद में परिभाषित है?", options:["109", "110", "111", "112"], ans:1 },
  { q:"CAG का उल्लेख किस अनुच्छेद में है?", options:["148", "124", "280", "370"], ans:0 },
  { q:"वित्त आयोग (Finance Commission) का उल्लेख किस अनुच्छेद में है?", options:["280", "148", "52", "356"], ans:0 },
  { q:"भारत के महान्यायवादी (Attorney General) का उल्लेख किस अनुच्छेद में है?", options:["76", "124", "148", "280"], ans:0 },
  { q:"राष्ट्रपति को क्षमा दान की शक्ति किस अनुच्छेद में है?", options:["72", "74", "76", "80"], ans:0 },
  { q:"राज्यपाल को क्षमा दान की शक्ति किस अनुच्छेद में है?", options:["161", "168", "154", "356"], ans:0 },

  { q:"‘सुंदरबन’ किस प्रकार का वन क्षेत्र है?", options:["शंकुधारी", "मैंग्रोव", "पर्णपाती", "घासभूमि"], ans:1 },
  { q:"चिल्का झील किस राज्य में स्थित है?", options:["ओडिशा", "प. बंगाल", "उत्तर प्रदेश", "मध्य प्रदेश"], ans:0 },
  { q:"लोकटक झील किस राज्य में है?", options:["मणिपुर", "असम", "मेघालय", "त्रिपुरा"], ans:0 },
  { q:"भारत में सर्वाधिक वर्षा किस स्थान पर होती है?", options:["चेरापूंजी", "मौसिनराम", "शिमला", "जैसलमेर"], ans:1 },
  { q:"काजीरंगा राष्ट्रीय उद्यान किसके लिए प्रसिद्ध है?", options:["एशियाई शेर", "एक सींग वाला गैंडा", "हिम तेंदुआ", "काला हिरण"], ans:1 },
  { q:"गिर राष्ट्रीय उद्यान किस राज्य में है?", options:["गुजरात", "राजस्थान", "असम", "मध्य प्रदेश"], ans:0 },
  { q:"भारत में ‘ऑपरेशन फ्लड’ किससे संबंधित है?", options:["दूध उत्पादन", "सिंचाई", "बाढ़ नियंत्रण", "सड़क"], ans:0 },
  { q:"‘हरित क्रांति’ का मुख्य प्रभाव किस फसल पर पड़ा?", options:["गेहूं", "चावल", "मक्का", "ज्वार"], ans:0 },
  { q:"भारत का पहला परमाणु परीक्षण किस वर्ष हुआ?", options:["1964", "1974", "1984", "1998"], ans:1 },
  { q:"भारत का पहला अंतरिक्ष यात्री कौन था?", options:["राकेश शर्मा", "विक्रम साराभाई", "होमी भाभा", "सी.वी. रमन"], ans:0 }

);


// ---------- HARD (UP Police Exam Hard) ----------
bank.GK.hard.push(

  { q:"राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352", "356", "360", "368"], ans:0 },
  { q:"राष्ट्रपति शासन किस अनुच्छेद में लगाया जाता है?", options:["352", "356", "360", "370"], ans:1 },
  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352", "356", "360", "370"], ans:2 },
  { q:"संविधान में आपातकाल का उल्लेख किस भाग में है?", options:["Part XVIII", "Part XVII", "Part XIX", "Part XVI"], ans:0 },
  { q:"लोकसभा अध्यक्ष का उल्लेख किस अनुच्छेद में है?", options:["93", "94", "95", "96"], ans:0 },
  { q:"राज्यसभा के उपसभापति का उल्लेख किस अनुच्छेद में है?", options:["64", "89", "90", "93"], ans:2 },
  { q:"उपराष्ट्रपति का उल्लेख किस अनुच्छेद में है?", options:["52", "63", "74", "80"], ans:1 },
  { q:"प्रधानमंत्री का उल्लेख किस अनुच्छेद में है?", options:["74", "75", "76", "78"], ans:1 },
  { q:"मंत्रिपरिषद सामूहिक रूप से किसके प्रति उत्तरदायी होती है?", options:["राष्ट्रपति", "राज्यसभा", "लोकसभा", "सुप्रीम कोर्ट"], ans:2 },
  { q:"भारत में ‘एकल नागरिकता’ की व्यवस्था किस देश से प्रेरित है?", options:["अमेरिका", "ब्रिटेन", "कनाडा", "ऑस्ट्रेलिया"], ans:1 },
  { q:"न्यायिक पुनरावलोकन (Judicial Review) की अवधारणा किस देश से ली गई है?", options:["ब्रिटेन", "अमेरिका", "फ्रांस", "रूस"], ans:1 },

  { q:"राज्यों की सूची (State List) किस अनुसूची में है?", options:["6वीं", "7वीं", "8वीं", "9वीं"], ans:1 },
  { q:"संघ सूची (Union List) किस अनुसूची में है?", options:["6वीं", "7वीं", "8वीं", "9वीं"], ans:1 },
  { q:"समवर्ती सूची (Concurrent List) किस अनुसूची में है?", options:["5वीं", "6वीं", "7वीं", "8वीं"], ans:2 },
  { q:"भाषाओं की सूची किस अनुसूची में है?", options:["6वीं", "7वीं", "8वीं", "9वीं"], ans:2 },
  { q:"संविधान सभा का गठन किस योजना के अंतर्गत हुआ था?", options:["क्रिप्स मिशन", "कैबिनेट मिशन", "वावेल योजना", "माउंटबेटन योजना"], ans:1 },
  { q:"संविधान सभा की पहली बैठक कब हुई?", options:["9 दिसंबर 1946", "26 नवंबर 1949", "15 अगस्त 1947", "26 जनवरी 1950"], ans:0 },
  { q:"‘उद्देश्य प्रस्ताव’ (Objective Resolution) किसने प्रस्तुत किया?", options:["अंबेडकर", "नेहरू", "पटेल", "राजेंद्र प्रसाद"], ans:1 },
  { q:"भारतीय संविधान के ‘मूल ढांचे’ (Basic Structure) का सिद्धांत किस केस से जुड़ा है?", options:["गोलकनाथ", "केशवानंद भारती", "मिनर्वा मिल्स", "शाह बानो"], ans:1 },
  { q:"मौलिक अधिकारों का निलंबन किस अनुच्छेद में है?", options:["352", "358", "360", "368"], ans:1 },

  { q:"भारत के नियंत्रक एवं महालेखा परीक्षक (CAG) का कार्यकाल कितने वर्ष का होता है?", options:["4", "5", "6", "7"], ans:2 },
  { q:"लोकसभा में धन विधेयक किसकी सिफारिश पर पेश किया जाता है?", options:["प्रधानमंत्री", "राष्ट्रपति", "लोकसभा अध्यक्ष", "राज्यसभा"], ans:1 },
  { q:"भारत में वित्त विधेयक (Finance Bill) कहाँ प्रस्तुत किया जाता है?", options:["राज्यसभा", "लोकसभा", "राष्ट्रपति भवन", "सुप्रीम कोर्ट"], ans:1 },
  { q:"संविधान के किस अनुच्छेद में सुप्रीम कोर्ट जाने का अधिकार है?", options:["14", "19", "21", "32"], ans:3 },
  { q:"संविधान के किस अनुच्छेद में ‘समानता के अधिकार’ का प्रावधान है?", options:["14", "15", "16", "17"], ans:0 },
  { q:"लोकसभा में अविश्वास प्रस्ताव किसके खिलाफ लाया जाता है?", options:["राष्ट्रपति", "प्रधानमंत्री/मंत्रिपरिषद", "राज्यसभा अध्यक्ष", "मुख्यमंत्री"], ans:1 },
  { q:"भारत में GST कब लागू हुआ?", options:["2015", "2016", "2017", "2018"], ans:2 },
  { q:"Repo Rate किससे संबंधित है?", options:["GST", "RBI द्वारा बैंकों को ऋण", "आयकर", "SEBI"], ans:1 },
  { q:"CRR का पूरा नाम क्या है?", options:["Cash Reserve Ratio", "Credit Rate Ratio", "Central Revenue Rule", "Cash Revenue Rate"], ans:0 },
  { q:"Sensex किससे संबंधित है?", options:["NSE", "BSE", "RBI", "SEBI"], ans:1 },

  { q:"भारत में सबसे लंबा तटीय राज्य कौन सा है?", options:["गुजरात", "महाराष्ट्र", "तमिलनाडु", "ओडिशा"], ans:0 },
  { q:"भारत में ज्वार (Tide) का सबसे अधिक प्रभाव किस खाड़ी में होता है?", options:["कच्छ", "मन्नार", "बंगाल", "खंभात"], ans:3 },
  { q:"कौन सा दर्रा (Pass) लद्दाख को कश्मीर से जोड़ता है?", options:["नाथू ला", "जोज़िला", "रोहतांग", "बनिहाल"], ans:1 },
  { q:"कौन सा दर्रा सिक्किम को तिब्बत से जोड़ता है?", options:["नाथू ला", "जोज़िला", "बनिहाल", "लिपुलेख"], ans:0 },
  { q:"किस राज्य में ‘मानस राष्ट्रीय उद्यान’ स्थित है?", options:["असम", "मध्य प्रदेश", "उत्तर प्रदेश", "कर्नाटक"], ans:0 },
  { q:"भारत का सबसे बड़ा बंदरगाह (major) कौन सा है?", options:["कांडला", "मुंबई", "कोच्चि", "चेन्नई"], ans:1 },
  { q:"भारत में योजना आयोग की जगह किसने ली?", options:["SEBI", "NITI Aayog", "RBI", "CVC"], ans:1 },
  { q:"NITI आयोग की स्थापना कब हुई?", options:["2012", "2013", "2015", "2016"], ans:2 },
  { q:"भारत में राष्ट्रीय आय का अनुमान कौन जारी करता है?", options:["RBI", "NSO", "SEBI", "CBI"], ans:1 },
  { q:"मुद्रास्फीति (Inflation) को मापने के लिए कौन सा सूचक प्रयोग होता है?", options:["GDP", "CPI", "GNP", "FDI"], ans:1 }

);


// Math
// =========================
// MATH (UP Police level) - REPLACED (Easy → Hard)
// =========================

// ---------- EASY (Exam Level) ----------
bank.Math.easy.push(

  { q:"यदि किसी संख्या का 35% = 210 है, तो संख्या क्या होगी?", options:["500","550","600","650"], ans:0 },
  { q:"यदि 18% = 90 हो, तो संख्या क्या होगी?", options:["400","450","500","550"], ans:1 },
  { q:"यदि 12.5% of 480 = ?", options:["50","55","60","65"], ans:2 },
  { q:"25% of 640 = ?", options:["120","140","160","180"], ans:2 },
  { q:"20% of 750 = ?", options:["120","130","140","150"], ans:3 },

  { q:"अनुपात 3:7 में कुल 200 है, छोटा भाग कितना होगा?", options:["50","60","70","75"], ans:0 },
  { q:"अनुपात 5:8 में कुल 156 है, बड़ा भाग कितना होगा?", options:["80","88","96","104"], ans:2 },
  { q:"दो संख्याओं का अनुपात 4:9 है और योग 143 है, बड़ी संख्या?", options:["81","90","99","108"], ans:2 },
  { q:"यदि A:B = 7:9 और A = 63, तो B = ?", options:["72","81","90","99"], ans:1 },
  { q:"यदि 5:12 = x:84, तो x = ?", options:["30","32","35","40"], ans:2 },

  { q:"साधारण ब्याज: P=1200, R=10%, T=2 वर्ष ⇒ SI=?", options:["200","220","240","260"], ans:2 },
  { q:"P=1500, R=8%, T=3 ⇒ SI=?", options:["320","340","360","380"], ans:2 },
  { q:"P=2000, R=7%, T=2 ⇒ Amount=?", options:["2200","2280","2400","2500"], ans:1 },
  { q:"P=800, R=12.5%, T=2 ⇒ SI=?", options:["160","180","200","220"], ans:2 },
  { q:"P=2500, R=6%, T=4 ⇒ SI=?", options:["500","550","600","650"], ans:2 },

  { q:"CP=800 और लाभ 25% ⇒ SP=?", options:["950","1000","1050","1100"], ans:1 },
  { q:"CP=1200 और हानि 10% ⇒ SP=?", options:["1050","1080","1100","1120"], ans:1 },
  { q:"SP=720 और लाभ 20% ⇒ CP=?", options:["580","600","620","640"], ans:1 },
  { q:"SP=540 और हानि 10% ⇒ CP=?", options:["580","600","610","620"], ans:1 },
  { q:"MP=1500 और छूट 20% ⇒ SP=?", options:["1100","1150","1200","1250"], ans:2 },

  { q:"72 km/h को m/s में बदलें।", options:["15","18","20","25"], ans:2 },
  { q:"एक व्यक्ति 6 km/h से चलता है, 2.5 घंटे में दूरी?", options:["12","13","14","15"], ans:3 },
  { q:"दूरी 180 km, समय 3 घंटे ⇒ गति?", options:["50","55","60","65"], ans:2 },
  { q:"गति 45 km/h, समय 4 घंटे ⇒ दूरी?", options:["160","170","180","190"], ans:2 },
  { q:"एक ट्रेन 54 km/h से 20 सेकंड में दूरी तय करती है?", options:["250m","300m","350m","400m"], ans:1 },

  { q:"√2025 का मान?", options:["35","40","45","50"], ans:2 },
  { q:"LCM(12, 18) = ?", options:["24","30","36","48"], ans:2 },
  { q:"HCF(48, 60) = ?", options:["6","8","10","12"], ans:3 },
  { q:"(15% of 240) = ?", options:["30","32","34","36"], ans:3 },
  { q:"यदि x/5 = 14, तो x = ?", options:["60","65","70","75"], ans:2 },
  { q:"यदि 3x + 9 = 45, तो x = ?", options:["10","11","12","13"], ans:0 }

);


// ---------- MEDIUM (UP Police PYQ Type) ----------
bank.Math.medium.push(

  { q:"यदि किसी संख्या को 20% बढ़ाने पर 720 प्राप्त होता है, तो मूल संख्या क्या थी?", options:["560","580","600","620"], ans:2 },
  { q:"यदि किसी संख्या को 25% घटाने पर 450 प्राप्त होता है, तो मूल संख्या?", options:["560","580","600","620"], ans:2 },
  { q:"एक वस्तु 15% छूट के बाद ₹1020 में बिकती है। अंकित मूल्य?", options:["1100","1200","1300","1400"], ans:1 },
  { q:"CP=960 और लाभ=12.5% ⇒ SP=?", options:["1050","1080","1100","1120"], ans:1 },
  { q:"SP=880 और हानि=20% ⇒ CP=?", options:["1000","1050","1100","1200"], ans:0 },

  { q:"एक मिश्रण में दूध:पानी = 7:3 है। 20 लीटर मिश्रण में पानी कितना?", options:["5","6","7","8"], ans:1 },
  { q:"दूध:पानी = 5:2, कुल 28 लीटर। दूध कितना?", options:["18","20","22","24"], ans:1 },
  { q:"दो संख्याओं का अनुपात 7:11 और योग 162 है। बड़ी संख्या?", options:["88","99","110","121"], ans:2 },
  { q:"अनुपात 5:8 और अंतर 39 है। बड़ी संख्या?", options:["65","72","80","104"], ans:2 },
  { q:"यदि A:B = 4:5 और B:C = 10:9, तो A:C = ?", options:["8:9","4:9","5:9","10:9"], ans:0 },

  { q:"A अकेले कार्य 15 दिन में करता है, B 20 दिन में। साथ में समय?", options:["8.0","8.57","9.0","10"], ans:1 },
  { q:"8 मजदूर 12 दिन में कार्य करते हैं। 16 मजदूर कितने दिन?", options:["4","5","6","8"], ans:2 },
  { q:"A 12 दिन, B 18 दिन। साथ में समय?", options:["6","7.2","8","9"], ans:1 },
  { q:"एक काम का 2/5 भाग 6 दिन में होता है। पूरा काम कितने दिन?", options:["12","14","15","18"], ans:2 },
  { q:"A 10 दिन में, B 15 दिन में। साथ में समय?", options:["5","6","7","8"], ans:1 },

  { q:"ट्रेन 72 km/h से चलकर 180m प्लेटफॉर्म को 18 सेकंड में पार करती है। ट्रेन की लंबाई?", options:["120","140","160","180"], ans:2 },
  { q:"ट्रेन 54 km/h से 12 सेकंड में खंभा पार करती है। लंबाई?", options:["160","170","180","200"], ans:1 },
  { q:"ट्रेन 90 km/h से 10 सेकंड में खंभा पार करती है। लंबाई?", options:["200","225","250","275"], ans:2 },
  { q:"ट्रेन 60 km/h से 300m प्लेटफॉर्म को 36 सेकंड में पार करती है। ट्रेन की लंबाई?", options:["250","300","320","350"], ans:0 },
  { q:"ट्रेन 108 km/h से 330m प्लेटफॉर्म को 20 सेकंड में पार करती है। ट्रेन की लंबाई?", options:["240","270","300","330"], ans:1 },

  { q:"CI: P=2000, R=10%, T=2 ⇒ Amount=?", options:["2400","2420","2450","2500"], ans:1 },
  { q:"CI: P=5000, R=8%, T=1 ⇒ Amount=?", options:["5200","5300","5400","5500"], ans:2 },
  { q:"CI: P=4000, R=5%, T=2 ⇒ Amount=?", options:["4300","4400","4410","4500"], ans:2 },
  { q:"यदि किसी धन पर 2 वर्ष का CI = ₹210 है, दर 10% हो, तो मूलधन?", options:["900","950","1000","1050"], ans:2 },
  { q:"CI: P=8000, R=5%, T=3 ⇒ Amount=?", options:["9000","9200","9261","9300"], ans:2 },

  { q:"एक आयत की लंबाई 18m और चौड़ाई 12m है। परिमाप?", options:["50","55","60","65"], ans:2 },
  { q:"वृत्त की त्रिज्या 7cm है, क्षेत्रफल? (π=22/7)", options:["132","144","154","160"], ans:2 },
  { q:"घन की भुजा 6cm है, आयतन?", options:["196","200","216","240"], ans:2 },
  { q:"x+y=18 और x−y=6 ⇒ x=?", options:["10","11","12","13"], ans:2 },
  { q:"यदि 3x−5=40, तो x=?", options:["12","13","14","15"], ans:3 },
  { q:"(0.25 + 0.5) × 100 = ?", options:["65","70","75","80"], ans:2 }

);


// ---------- HARD (High Level + Repeated Patterns) ----------
bank.Math.hard.push(

  { q:"यदि किसी संख्या को 15% घटाकर फिर 15% बढ़ाया जाए, तो कुल परिवर्तन?", options:["0%", "2.25% घटेगा", "2.25% बढ़ेगा", "15% घटेगा"], ans:1 },
  { q:"एक वस्तु 20% लाभ पर बेची जाती है। यदि SP=960, तो CP=?", options:["760","780","800","820"], ans:2 },
  { q:"एक दुकानदार 10% छूट देता है और फिर भी 20% लाभ कमाता है। यदि MP=1500, तो CP=?", options:["1000","1125","1250","1350"], ans:1 },
  { q:"एक वस्तु 25% हानि पर बेची गई। यदि CP=1200, तो SP=?", options:["850","880","900","950"], ans:2 },
  { q:"दो क्रमिक छूट 10% और 20% हैं। कुल छूट?", options:["28%","30%","32%","25%"], ans:0 },

  { q:"A:B = 3:4 और B:C = 6:5, तो A:C = ?", options:["9:10","18:20","6:5","5:6"], ans:0 },
  { q:"अनुपात 5:7 है और अंतर 48 है। छोटी संख्या?", options:["100","110","120","140"], ans:2 },
  { q:"अनुपात 7:9 है और योग 256 है। बड़ी संख्या?", options:["126","128","144","160"], ans:2 },
  { q:"दो संख्याएँ 9:13 के अनुपात में हैं और योग 176 है। छोटी संख्या?", options:["72","78","81","88"], ans:0 },
  { q:"यदि 12:18 = x:75, तो x=?", options:["40","45","50","55"], ans:1 },

  { q:"A 12 दिन में कार्य करता है। A+B मिलकर 8 दिन में करते हैं। B अकेले कितने दिन?", options:["18","20","22","24"], ans:3 },
  { q:"A 15 दिन, B 30 दिन। A अकेले 6 दिन काम करे, फिर B करे तो कुल समय?", options:["12","14","16","18"], ans:1 },
  { q:"A 10 दिन में, B 12 दिन में। दोनों साथ में 4 दिन काम करें, शेष कार्य B अकेले कितने दिन में करेगा?", options:["3","4","5","6"], ans:2 },
  { q:"A 8 दिन में, B 16 दिन में। A 2 दिन अकेला काम करे, फिर B साथ आए तो कुल समय?", options:["6","7","8","9"], ans:1 },
  { q:"एक कार्य को 6 पुरुष 8 दिन में करते हैं। 4 पुरुष 6 दिन काम करें, शेष कार्य कितने दिन में होगा?", options:["4","5","6","7"], ans:1 },

  { q:"एक ट्रेन 90 km/h की गति से 12 सेकंड में खंभा पार करती है। ट्रेन की लंबाई?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"एक ट्रेन 72 km/h से चलकर 200m प्लेटफॉर्म को 20 सेकंड में पार करती है। ट्रेन की लंबाई?", options:["160","180","200","220"], ans:1 },
  { q:"दो ट्रेनें 54 km/h और 72 km/h विपरीत दिशा में चल रही हैं। यदि लंबाई 150m और 200m, तो पार करने का समय?", options:["10s","12s","15s","18s"], ans:2 },
  { q:"दो ट्रेनें 60 km/h और 40 km/h समान दिशा में चल रही हैं। लंबाई 180m और 120m, तो ओवरटेक समय?", options:["18s","21.6s","24s","30s"], ans:1 },
  { q:"एक ट्रेन 108 km/h से 15 सेकंड में खंभा पार करती है। लंबाई?", options:["350m","400m","450m","500m"], ans:1 },

  { q:"Pipe A टंकी 12h में भरता है, Pipe B 18h में भरता है। साथ में समय?", options:["6h","7.2h","8h","9h"], ans:1 },
  { q:"Pipe A 10h में भरता है, outlet 15h में खाली करता है। नेट समय?", options:["20h","25h","30h","35h"], ans:2 },
  { q:"Pipe A 8h में भरता है, outlet 12h में खाली करता है। नेट समय?", options:["18h","20h","22h","24h"], ans:3 },
  { q:"Pipe A 6h में, Pipe B 9h में। साथ में समय?", options:["3.6h","4h","4.5h","5h"], ans:0 },
  { q:"Pipe A 15h में, Pipe B 20h में। साथ में समय?", options:["8h","8.57h","9h","10h"], ans:1 },

  { q:"एक नाव धारा के साथ 18 km/h और धारा के विरुद्ध 12 km/h जाती है। धारा की गति?", options:["2","3","4","5"], ans:2 },
  { q:"एक नाव 24 km/h (डाउनस्ट्रीम) और 16 km/h (अपस्ट्रीम) जाती है। स्थिर जल में गति?", options:["18","19","20","21"], ans:2 },
  { q:"दो संख्याओं का योग 45 है और गुणनफल 494 है। बड़ी संख्या?", options:["19","26","29","31"], ans:1 },
  { q:"यदि x+y=18 और x−y=6, तो y=?", options:["4","5","6","7"], ans:1 },
  { q:"यदि (x/3)+4=10, तो x=?", options:["12","15","18","21"], ans:2 },

  { q:"√1764 का मान?", options:["40","41","42","44"], ans:2 },
  { q:"LCM(24, 36) = ?", options:["72","96","108","144"], ans:0 },
  { q:"HCF(84, 126) = ?", options:["14","21","28","42"], ans:1 },
  { q:"1 से 100 तक सभी प्राकृतिक संख्याओं का योग?", options:["4950","5000","5050","5100"], ans:2 },
  { q:"पहली 20 सम संख्याओं का योग?", options:["380","400","420","440"], ans:1 },
  { q:"पहली 15 विषम संख्याओं का योग?", options:["200","215","225","235"], ans:2 }

);

/// =========================
// REASONING (UP Police level) - REPLACED (Easy → Hard)
// =========================

// ---------- EASY (Exam Level) ----------
bank.Reasoning.easy.push(

  { q:"श्रृंखला: 7, 14, 28, 56, ?", options:["84","98","112","120"], ans:2 },
  { q:"श्रृंखला: 3, 8, 13, 18, ?", options:["21","22","23","24"], ans:2 },
  { q:"श्रृंखला: 2, 5, 10, 17, ?", options:["24","25","26","27"], ans:0 },
  { q:"श्रृंखला: 1, 4, 9, 16, ?", options:["20","25","30","36"], ans:1 },
  { q:"श्रृंखला: 6, 11, 16, 21, ?", options:["24","25","26","27"], ans:1 },

  { q:"Odd one out: 121, 144, 169, 196", options:["121","144","169","196"], ans:1 },
  { q:"Odd one out: 3, 5, 11, 14", options:["3","5","11","14"], ans:3 },
  { q:"Odd one out: Circle, Square, Triangle, Cube", options:["Circle","Square","Triangle","Cube"], ans:3 },
  { q:"Odd one out: Delhi, Lucknow, Jaipur, Kolkata", options:["Delhi","Lucknow","Jaipur","Kolkata"], ans:1 },
  { q:"Odd one out: 2, 4, 8, 18", options:["2","4","8","18"], ans:3 },

  { q:"यदि A=1, B=2, C=3, तो J=?", options:["8","9","10","11"], ans:1 },
  { q:"यदि Z=26, तो T=?", options:["18","19","20","21"], ans:2 },
  { q:"यदि M=13, तो Q=?", options:["15","16","17","18"], ans:1 },
  { q:"यदि D=4, तो K=?", options:["9","10","11","12"], ans:2 },
  { q:"यदि P=16, तो W=?", options:["21","22","23","24"], ans:1 },

  { q:"उत्तर का विपरीत दिशा क्या है?", options:["पूर्व","पश्चिम","दक्षिण","उत्तर"], ans:2 },
  { q:"पूर्व का विपरीत दिशा क्या है?", options:["उत्तर","दक्षिण","पश्चिम","पूर्व"], ans:2 },
  { q:"यदि आज बुधवार है, तो 3 दिन बाद कौन सा दिन होगा?", options:["शुक्रवार","शनिवार","रविवार","सोमवार"], ans:1 },
  { q:"यदि कल सोमवार था, तो आज कौन सा दिन है?", options:["रविवार","सोमवार","मंगलवार","बुधवार"], ans:2 },
  { q:"यदि आज रविवार है, तो परसों कौन सा दिन होगा?", options:["सोमवार","मंगलवार","बुधवार","गुरुवार"], ans:1 },

  { q:"यदि 12 को 21 लिखा जाए और 45 को 54, तो 78 को क्या लिखेंगे?", options:["87","88","77","98"], ans:0 },
  { q:"यदि 39 को 93 लिखा जाए, तो 64 को क्या लिखेंगे?", options:["46","64","86","84"], ans:0 },
  { q:"यदि ‘CAT’ को ‘DBU’ लिखा जाए, तो ‘DOG’ को क्या लिखेंगे?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"यदि ‘PEN’ को ‘QFO’ लिखा जाए, तो ‘INK’ को क्या लिखेंगे?", options:["JOL","JML","JNL","JNK"], ans:0 },
  { q:"यदि ‘MAN’ को ‘NBO’ लिखा जाए, तो ‘SUN’ को क्या लिखेंगे?", options:["TVO","TVP","UVP","TWP"], ans:1 },

  { q:"संबंध: 9 : 81 :: 7 : ?", options:["49","56","64","72"], ans:0 },
  { q:"संबंध: 8 : 512 :: 6 : ?", options:["216","256","144","128"], ans:0 },
  { q:"संबंध: 12 : 144 :: 15 : ?", options:["200","215","225","240"], ans:2 },
  { q:"संबंध: 5 : 125 :: 4 : ?", options:["16","64","80","100"], ans:1 },
  { q:"संबंध: 11 : 121 :: 13 : ?", options:["156","160","169","176"], ans:2 },

  { q:"यदि 1 से 50 तक कितने सम संख्या हैं?", options:["24","25","26","27"], ans:1 }

);


// ---------- MEDIUM (UP Police PYQ Type) ----------
bank.Reasoning.medium.push(

  { q:"श्रृंखला: 2, 6, 18, 54, ?", options:["108","144","162","216"], ans:2 },
  { q:"श्रृंखला: 5, 12, 26, 54, ?", options:["98","108","110","112"], ans:1 },
  { q:"श्रृंखला: 1, 3, 7, 15, ?", options:["25","31","33","35"], ans:1 },
  { q:"श्रृंखला: 4, 9, 19, 39, ?", options:["69","79","89","99"], ans:1 },
  { q:"श्रृंखला: 3, 8, 18, 38, ?", options:["68","78","80","88"], ans:1 },

  { q:"अक्षर श्रृंखला: A, C, F, J, O, ?", options:["U","V","W","X"], ans:0 },
  { q:"अक्षर श्रृंखला: Z, X, U, Q, L, ?", options:["H","G","F","E"], ans:1 },
  { q:"अक्षर श्रृंखला: B, E, I, N, T, ?", options:["A","B","C","D"], ans:2 },
  { q:"अक्षर श्रृंखला: D, H, M, S, Z, ?", options:["F","G","H","I"], ans:0 },
  { q:"अक्षर श्रृंखला: C, F, J, O, U, ?", options:["B","C","D","E"], ans:2 },

  { q:"यदि ‘SOUTH’ को ‘TQVUI’ लिखा जाए, तो ‘NORTH’ को क्या लिखेंगे?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"यदि ‘INDIA’ को ‘JOEJB’ लिखा जाए, तो ‘CHINA’ को क्या लिखेंगे?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"यदि 246 को 468 लिखा जाए, तो 135 को क्या लिखेंगे?", options:["246","357","258","369"], ans:0 },
  { q:"यदि 123 को 234 लिखा जाए, तो 456 को क्या लिखेंगे?", options:["567","568","569","678"], ans:0 },
  { q:"यदि 579 को 6810 लिखा जाए, तो 468 को क्या लिखेंगे?", options:["579","5790","5710","5799"], ans:1 },

  { q:"रैंकिंग: एक पंक्ति में A बाएं से 12वां और दाएं से 15वां है। कुल व्यक्ति?", options:["25","26","27","28"], ans:1 },
  { q:"एक पंक्ति में P दाएं से 9वां और बाएं से 17वां है। कुल व्यक्ति?", options:["24","25","26","27"], ans:2 },
  { q:"एक पंक्ति में R बाएं से 7वां और दाएं से 10वां है। कुल व्यक्ति?", options:["15","16","17","18"], ans:1 },
  { q:"एक पंक्ति में M बाएं से 5वां और दाएं से 6वां है। कुल व्यक्ति?", options:["10","11","12","13"], ans:1 },
  { q:"एक पंक्ति में S दाएं से 8वां और बाएं से 11वां है। कुल व्यक्ति?", options:["17","18","19","20"], ans:1 },

  { q:"घड़ी: 3:20 पर घंटे और मिनट की सुई के बीच कोण?", options:["10°","20°","30°","40°"], ans:0 },
  { q:"घड़ी: 5:30 पर दोनों सुइयों के बीच कोण?", options:["15°","30°","45°","60°"], ans:2 },
  { q:"घड़ी: 2:40 पर दोनों सुइयों के बीच कोण?", options:["110°","120°","130°","140°"], ans:0 },
  { q:"घड़ी: 6:15 पर दोनों सुइयों के बीच कोण?", options:["90°","97.5°","105°","112.5°"], ans:1 },
  { q:"घड़ी: 9:00 पर कोण?", options:["90°","120°","180°","270°"], ans:0 },

  { q:"दिशा: व्यक्ति 10m उत्तर गया, फिर 10m पूर्व, फिर 10m दक्षिण। प्रारंभ से दूरी?", options:["0","10","20","30"], ans:1 },
  { q:"व्यक्ति 5km पूर्व, 12km उत्तर। प्रारंभ से दूरी?", options:["10","11","13","14"], ans:2 },
  { q:"व्यक्ति 8km पश्चिम, 6km दक्षिण। दूरी?", options:["10","12","14","16"], ans:0 },
  { q:"व्यक्ति 7km पश्चिम, 24km उत्तर। दूरी?", options:["23","24","25","26"], ans:2 },
  { q:"व्यक्ति 9km उत्तर, 12km पूर्व। दूरी?", options:["15","18","21","24"], ans:0 },

  { q:"सिलॉजिज़्म: सभी पेन टूल हैं। कुछ टूल किताबें हैं। निष्कर्ष: कुछ पेन किताबें हैं।", options:["सही","गलत","निश्चित नहीं","दोनों"], ans:2 }

);


// ---------- HARD (High Level + UP Police Repeated) ----------
bank.Reasoning.hard.push(

  { q:"Blood Relation: A, B का भाई है। B, C की माँ है। A, C का क्या होगा?", options:["मामा", "पिता", "भाई", "दादा"], ans:0 },
  { q:"P, Q की बहन है। Q, R का पिता है। P, R की क्या होगी?", options:["बुआ", "मौसी", "बहन", "दादी"], ans:0 },
  { q:"A, B का पिता है। B, C का भाई है। A, C का क्या होगा?", options:["चाचा", "पिता", "भाई", "कजिन"], ans:1 },
  { q:"X, Y की माँ है। Y, Z की बहन है। X, Z का क्या होगा?", options:["माँ", "मौसी", "बहन", "दादी"], ans:0 },
  { q:"M, N का भाई है। N, P की माँ है। M, P का क्या होगा?", options:["मामा", "पिता", "भाई", "दादा"], ans:0 },

  { q:"Direction: 12m उत्तर, 5m पूर्व, 12m दक्षिण। प्रारंभ से दूरी?", options:["0","5","12","17"], ans:1 },
  { q:"एक व्यक्ति 10m उत्तर, फिर 45° दाएं मुड़कर 10m चलता है। प्रारंभ से दूरी?", options:["10","14.14","20","7.07"], ans:1 },
  { q:"एक व्यक्ति 6km उत्तर, 8km पूर्व। दूरी?", options:["10","12","14","16"], ans:0 },
  { q:"एक व्यक्ति 9km पश्चिम, 12km उत्तर। दूरी?", options:["12","15","18","21"], ans:1 },
  { q:"एक व्यक्ति 15km दक्षिण, 8km पूर्व। दूरी?", options:["13","15","17","20"], ans:0 },

  { q:"Syllogism: सभी ट्रेन वाहन हैं। कुछ वाहन तेज हैं। निष्कर्ष: कुछ ट्रेन तेज हैं।", options:["सही","गलत","निश्चित नहीं","दोनों"], ans:2 },
  { q:"सभी A, B हैं। कुछ B, C हैं। निष्कर्ष: कुछ A, C हैं।", options:["सही","गलत","निश्चित नहीं","दोनों"], ans:2 },
  { q:"कुछ पेन किताबें हैं। सभी किताबें कॉपी हैं। निष्कर्ष: कुछ पेन कॉपी हैं।", options:["सही","गलत","निश्चित नहीं","दोनों"], ans:0 },
  { q:"सभी डॉक्टर पढ़े-लिखे हैं। कुछ पढ़े-लिखे शिक्षक हैं। निष्कर्ष: कुछ डॉक्टर शिक्षक हैं।", options:["सही","गलत","निश्चित नहीं","दोनों"], ans:2 },
  { q:"सभी फूल रंगीन हैं। कुछ रंगीन वस्तुएँ सुगंधित हैं। निष्कर्ष: कुछ फूल सुगंधित हैं।", options:["सही","गलत","निश्चित नहीं","दोनों"], ans:2 },

  { q:"Series: 2, 5, 11, 23, 47, ?", options:["93","95","97","99"], ans:1 },
  { q:"Series: 1, 2, 6, 24, 120, ?", options:["240","360","600","720"], ans:2 },
  { q:"Series: 10, 7, 11, 8, 12, 9, ?", options:["10","12","13","14"], ans:1 },
  { q:"Series: 3, 6, 13, 28, 59, ?", options:["110","118","120","122"], ans:1 },
  { q:"Series: 4, 12, 36, 108, ?", options:["216","324","432","540"], ans:2 },

  { q:"Clock: 7:20 पर दोनों सुइयों के बीच कोण?", options:["80°","90°","100°","110°"], ans:2 },
  { q:"Clock: 4:10 पर कोण?", options:["65°","70°","75°","80°"], ans:0 },
  { q:"Clock: 1:45 पर कोण?", options:["120°","127.5°","135°","140°"], ans:1 },
  { q:"Clock: 10:15 पर कोण?", options:["127.5°","135°","142.5°","150°"], ans:2 },
  { q:"Clock: 2:30 पर कोण?", options:["60°","75°","90°","105°"], ans:1 },

  { q:"Calendar: यदि 1 Jan 2022 शनिवार था, तो 1 Jan 2023 कौन सा दिन होगा?", options:["रविवार","सोमवार","मंगलवार","शनिवार"], ans:0 },
  { q:"यदि 15 Aug 2021 रविवार था, तो 15 Aug 2022 कौन सा दिन होगा?", options:["सोमवार","मंगलवार","बुधवार","गुरुवार"], ans:0 },
  { q:"यदि 1 March 2020 रविवार था (Leap), तो 1 March 2021 कौन सा दिन होगा?", options:["सोमवार","मंगलवार","बुधवार","गुरुवार"], ans:1 },
  { q:"यदि 26 Jan 2019 शनिवार था, तो 26 Jan 2020 कौन सा दिन होगा?", options:["रविवार","सोमवार","मंगलवार","बुधवार"], ans:0 },
  { q:"यदि 2 Oct 2023 सोमवार था, तो 2 Oct 2024 कौन सा दिन होगा?", options:["मंगलवार","बुधवार","गुरुवार","शुक्रवार"], ans:1 },

  { q:"Order: एक पंक्ति में A बाएं से 3rd और B दाएं से 5th है। कुल 7 हैं। A और B का स्थान?", options:["Same","A left of B","A right of B","Cannot say"], ans:0 },
  { q:"एक पंक्ति में R बाएं से 4th और S दाएं से 3rd है। कुल 8। R, S के?", options:["Left","Right","Same","Cannot say"], ans:0 },
  { q:"एक पंक्ति में P बाएं से 5th और Q बाएं से 7th। Q, P के?", options:["2 left","2 right","Same","Cannot say"], ans:1 },
  { q:"एक पंक्ति में M बाएं से 6th और N बाएं से 4th। N, M के?", options:["2 left","2 right","Same","Cannot say"], ans:0 },
  { q:"एक पंक्ति में X दाएं से 9th और बाएं से 17th। कुल व्यक्ति?", options:["24","25","26","27"], ans:2 },

  { q:"Venn: कुछ छात्र खिलाड़ी हैं। सभी खिलाड़ी मेहनती हैं। निष्कर्ष: कुछ छात्र मेहनती हैं।", options:["सही","गलत","निश्चित नहीं","दोनों"], ans:0 }

);
// =========================
// HINDI (UP Police level)
// =========================

bank.Hindi = { easy: [], medium: [], hard: [] };

bank.Hindi.easy.push(
  { q:"‘विनय’ शब्द का विलोम क्या है?", options:["अहंकार","नम्रता","शिष्टता","धैर्य"], ans:0 },
  { q:"‘अमृत’ शब्द का विलोम क्या है?", options:["विष","जल","दूध","रस"], ans:0 },
  { q:"‘सफल’ शब्द का विलोम क्या है?", options:["असफल","कठिन","सरल","कमजोर"], ans:0 },
  { q:"‘अधिक’ शब्द का विलोम क्या है?", options:["कम","बहुत","ऊँचा","लंबा"], ans:0 },
  { q:"‘प्रारंभ’ शब्द का पर्यायवाची क्या है?", options:["शुरुआत","समाप्ति","विराम","अंत"], ans:0 },

  { q:"‘नदी’ शब्द का पर्यायवाची क्या है?", options:["सरिता","पर्वत","वन","पथ"], ans:0 },
  { q:"‘अंधकार’ का पर्यायवाची क्या है?", options:["तम","प्रकाश","दिन","छाया"], ans:0 },
  { q:"‘मित्र’ शब्द का पर्यायवाची क्या है?", options:["सखा","शत्रु","राहगीर","दास"], ans:0 },
  { q:"‘शत्रु’ शब्द का पर्यायवाची क्या है?", options:["रिपु","सखा","भाई","सहयोगी"], ans:0 },
  { q:"‘प्रसन्न’ शब्द का पर्यायवाची क्या है?", options:["हर्षित","दुखी","क्रोधित","निराश"], ans:0 },

  { q:"‘कठोर’ शब्द का विलोम क्या है?", options:["कोमल","मजबूत","ठोस","भारी"], ans:0 },
  { q:"‘उन्नति’ शब्द का विलोम क्या है?", options:["अवनति","विकास","सफलता","प्रगति"], ans:0 },
  { q:"‘धैर्य’ शब्द का विलोम क्या है?", options:["अधैर्य","साहस","शक्ति","विश्वास"], ans:0 },
  { q:"‘दया’ शब्द का विलोम क्या है?", options:["निर्दयता","करुणा","प्रेम","सहानुभूति"], ans:0 },
  { q:"‘जीवन’ शब्द का विलोम क्या है?", options:["मृत्यु","जगत","संसार","काल"], ans:0 },

  { q:"‘अनुशासन’ शब्द का अर्थ क्या है?", options:["नियम पालन","अव्यवस्था","भय","क्रोध"], ans:0 },
  { q:"‘उत्साह’ शब्द का अर्थ क्या है?", options:["जोश","दुख","आलस्य","भय"], ans:0 },
  { q:"‘परिश्रम’ शब्द का अर्थ क्या है?", options:["मेहनत","आराम","नींद","खेल"], ans:0 },
  { q:"‘अभिनंदन’ शब्द का अर्थ क्या है?", options:["बधाई","अपमान","आदेश","दंड"], ans:0 },
  { q:"‘निराश’ शब्द का अर्थ क्या है?", options:["हताश","खुश","संतुष्ट","साहसी"], ans:0 },

  { q:"‘सूरज’ का पर्यायवाची क्या है?", options:["रवि","चंद्र","तारा","आकाश"], ans:0 },
  { q:"‘चंद्रमा’ का पर्यायवाची क्या है?", options:["शशि","रवि","वायु","पृथ्वी"], ans:0 },
  { q:"‘पृथ्वी’ का पर्यायवाची क्या है?", options:["धरा","नभ","जल","अग्नि"], ans:0 },
  { q:"‘जल’ का पर्यायवाची क्या है?", options:["नीर","वायु","धूप","मिट्टी"], ans:0 },
  { q:"‘वायु’ का पर्यायवाची क्या है?", options:["पवन","अग्नि","धरा","नीर"], ans:0 }
);

bank.Hindi.medium.push(
  { q:"‘जो दूसरों का भला करता है’ उसके लिए सही शब्द?", options:["परोपकारी","स्वार्थी","कंजूस","निर्दयी"], ans:0 },
  { q:"‘जो पढ़ा-लिखा न हो’ उसके लिए शब्द?", options:["निरक्षर","साक्षर","विद्वान","पंडित"], ans:0 },
  { q:"‘जो सब जगह हो’ उसके लिए शब्द?", options:["सर्वव्यापी","एकांगी","अल्पज्ञ","निर्बल"], ans:0 },
  { q:"‘जो मरता नहीं’ उसके लिए शब्द?", options:["अमर","नश्वर","अस्थिर","कमजोर"], ans:0 },
  { q:"‘जो डरता नहीं’ उसके लिए शब्द?", options:["निर्भय","कायर","डरपोक","असहाय"], ans:0 },

  { q:"‘राम ने रावण को मारा’ में कर्ता कौन है?", options:["राम","रावण","मारा","को"], ans:0 },
  { q:"‘सीता ने फल खाया’ में कर्म क्या है?", options:["फल","सीता","खाया","ने"], ans:0 },
  { q:"‘वह स्कूल जाता है’ में क्रिया कौन सी है?", options:["जाता","वह","स्कूल","है"], ans:0 },
  { q:"‘मैं किताब पढ़ रहा हूँ’ में काल कौन सा है?", options:["वर्तमान","भूत","भविष्य","कोई नहीं"], ans:0 },
  { q:"‘वह गया था’ में काल?", options:["भूत","वर्तमान","भविष्य","आज्ञा"], ans:0 },

  { q:"‘नयन’ का सही पर्यायवाची?", options:["आँख","कान","नाक","हाथ"], ans:0 },
  { q:"‘अग्नि’ का पर्यायवाची?", options:["अनल","नीर","पवन","धरा"], ans:0 },
  { q:"‘वचन’ का पर्यायवाची?", options:["कथन","दंड","आदेश","धन"], ans:0 },
  { q:"‘धन’ का पर्यायवाची?", options:["संपत्ति","दुख","भय","लाभ"], ans:0 },
  { q:"‘कवि’ का पर्यायवाची?", options:["शायर","लेखक","काव्यकार","दोनों (A+C)"], ans:3 },

  { q:"‘अति’ उपसर्ग का अर्थ?", options:["बहुत","कम","आधा","शून्य"], ans:0 },
  { q:"‘सु’ उपसर्ग का अर्थ?", options:["अच्छा","बुरा","कम","अधिक"], ans:0 },
  { q:"‘नि’ उपसर्ग का अर्थ?", options:["बिना","साथ","ऊपर","नीचे"], ans:0 },
  { q:"‘प्र’ उपसर्ग का अर्थ?", options:["आगे","पीछे","कम","अधिक"], ans:0 },
  { q:"‘दुर्’ उपसर्ग का अर्थ?", options:["बुरा","अच्छा","कम","ज्यादा"], ans:0 },

  { q:"‘दिन-रात’ किस प्रकार का समास है?", options:["द्वंद्व","तत्पुरुष","बहुव्रीहि","अव्ययीभाव"], ans:0 },
  { q:"‘राजपुत्र’ किस समास का उदाहरण है?", options:["तत्पुरुष","द्वंद्व","बहुव्रीहि","कर्मधारय"], ans:0 },
  { q:"‘नीलकंठ’ किस समास का उदाहरण है?", options:["बहुव्रीहि","द्वंद्व","तत्पुरुष","अव्ययीभाव"], ans:0 },
  { q:"‘महापुरुष’ किस समास का उदाहरण है?", options:["कर्मधारय","द्वंद्व","बहुव्रीहि","तत्पुरुष"], ans:0 },
  { q:"‘यथाशक्ति’ किस समास का उदाहरण है?", options:["अव्ययीभाव","द्वंद्व","तत्पुरुष","कर्मधारय"], ans:0 }
);

bank.Hindi.hard.push(
  { q:"‘निर’ उपसर्ग से बना सही शब्द कौन सा है?", options:["निर्भय","निरभय","निर-भय","निरभई"], ans:0 },
  { q:"‘अधि’ उपसर्ग से बना शब्द?", options:["अधिकार","अविकार","उपकार","प्रकार"], ans:0 },
  { q:"‘परि’ उपसर्ग से बना शब्द?", options:["परिक्रमा","अधिक्रमा","निक्रमा","उपक्रमा"], ans:0 },
  { q:"‘प्रति’ उपसर्ग से बना शब्द?", options:["प्रतिवाद","प्रविवाद","परिवाद","प्रविवाद"], ans:0 },
  { q:"‘वि’ उपसर्ग से बना शब्द?", options:["विकास","अविकास","प्रकाश","परकाश"], ans:0 },

  { q:"‘जो देखा जा सके’ के लिए शब्द?", options:["दृश्य","श्रव्य","स्पर्श","गंध"], ans:0 },
  { q:"‘जो सुना जा सके’ के लिए शब्द?", options:["श्रव्य","दृश्य","स्पर्श","गंध"], ans:0 },
  { q:"‘जो खाने योग्य हो’ के लिए शब्द?", options:["भोज्य","पेय","श्रव्य","दृश्य"], ans:0 },
  { q:"‘जो पीने योग्य हो’ के लिए शब्द?", options:["पेय","भोज्य","श्रव्य","दृश्य"], ans:0 },
  { q:"‘जो पढ़ने योग्य हो’ के लिए शब्द?", options:["पठनीय","दर्शनीय","श्रव्य","स्पर्शनीय"], ans:0 },

  { q:"‘वह मेरे घर आया’ में सर्वनाम कौन सा है?", options:["वह","मेरे","घर","आया"], ans:0 },
  { q:"‘सुंदर लड़की’ में विशेषण कौन सा है?", options:["सुंदर","लड़की","में","दोनों"], ans:0 },
  { q:"‘अत्यंत तेज हवा’ में क्रिया विशेषण?", options:["अत्यंत","तेज","हवा","कोई नहीं"], ans:0 },
  { q:"‘राम ने खाना खाया’ में कर्म?", options:["खाना","राम","खाया","ने"], ans:0 },
  { q:"‘वह बहुत धीरे बोलता है’ में क्रिया?", options:["बोलता","वह","धीरे","बहुत"], ans:0 },

  { q:"‘सुख-दुख’ किस समास का उदाहरण है?", options:["द्वंद्व","तत्पुरुष","बहुव्रीहि","कर्मधारय"], ans:0 },
  { q:"‘राजमहल’ किस समास का उदाहरण है?", options:["कर्मधारय","बहुव्रीहि","द्वंद्व","अव्ययीभाव"], ans:0 },
  { q:"‘नीलकमल’ किस समास का उदाहरण है?", options:["कर्मधारय","द्वंद्व","तत्पुरुष","बहुव्रीहि"], ans:0 },
  { q:"‘दशानन’ किस समास का उदाहरण है?", options:["बहुव्रीहि","तत्पुरुष","द्वंद्व","कर्मधारय"], ans:0 },
  { q:"‘चतुर्भुज’ किस समास का उदाहरण है?", options:["बहुव्रीहि","द्वंद्व","तत्पुरुष","अव्ययीभाव"], ans:0 },

  { q:"‘जल’ का तत्सम रूप कौन सा है?", options:["जल","पानी","नीर","सलिल"], ans:0 },
  { q:"‘पानी’ का तत्सम रूप?", options:["जल","पानी","नीर","वारि"], ans:0 },
  { q:"‘आग’ का तत्सम रूप?", options:["अग्नि","आग","अनल","ज्वाला"], ans:0 },
  { q:"‘सूरज’ का तत्सम रूप?", options:["सूर्य","रवि","भानु","सूरज"], ans:0 },
  { q:"‘हाथ’ का तत्सम रूप?", options:["हस्त","हाथ","कर","पाणि"], ans:0 }
);
// =========================
// SCIENCE (UP Police level) - 75 Q (Easy/Medium/Hard)
// =========================

bank.Science = { easy: [], medium: [], hard: [] };

// ---------- EASY (25) ----------
bank.Science.easy.push(

  { q:"मानव शरीर में रक्त का रंग लाल क्यों होता है?", options:["ऑक्सीजन","हीमोग्लोबिन","प्लाज्मा","जल"], ans:1 },
  { q:"सूर्य से पृथ्वी तक प्रकाश आने में समय लगभग कितना है?", options:["4 मिनट","8 मिनट 20 सेकंड","12 मिनट","16 मिनट"], ans:1 },
  { q:"पानी का रासायनिक सूत्र क्या है?", options:["H2O","CO2","O2","H2SO4"], ans:0 },
  { q:"विटामिन C की कमी से कौन सा रोग होता है?", options:["स्कर्वी","रिकेट्स","बेरी-बेरी","रातौंधी"], ans:0 },
  { q:"मानव शरीर की सबसे बड़ी हड्डी कौन सी है?", options:["फीमर","टिबिया","खोपड़ी","रीढ़"], ans:0 },

  { q:"पृथ्वी का प्राकृतिक उपग्रह कौन है?", options:["सूर्य","चंद्रमा","मंगल","शुक्र"], ans:1 },
  { q:"दूध में मुख्य पोषक तत्व कौन सा है?", options:["प्रोटीन","कार्बोहाइड्रेट","वसा","सभी"], ans:3 },
  { q:"हृदय में कितने कक्ष होते हैं?", options:["2","3","4","5"], ans:2 },
  { q:"मानव शरीर में सबसे बड़ी ग्रंथि कौन सी है?", options:["थायरॉइड","यकृत","अग्न्याशय","पिट्यूटरी"], ans:1 },
  { q:"ऑक्सीजन की खोज किसने की थी?", options:["प्रिस्टले","न्यूटन","डार्विन","आइंस्टीन"], ans:0 },

  { q:"CO2 गैस का उपयोग मुख्यतः किसमें होता है?", options:["फायर एक्सटिंग्विशर","रेफ्रिजरेटर","पंखा","बल्ब"], ans:0 },
  { q:"ध्वनि किस माध्यम में नहीं चलती?", options:["वायु","जल","ठोस","निर्वात"], ans:3 },
  { q:"मानव शरीर में RBC का निर्माण कहाँ होता है?", options:["यकृत","अस्थि मज्जा","फेफड़े","हृदय"], ans:1 },
  { q:"सोडियम का रासायनिक संकेत क्या है?", options:["So","Na","S","No"], ans:1 },
  { q:"कौन सा विटामिन आँखों के लिए जरूरी है?", options:["A","B","C","D"], ans:0 },

  { q:"दाब की SI इकाई क्या है?", options:["जूल","पास्कल","वाट","न्यूटन"], ans:1 },
  { q:"विद्युत धारा की SI इकाई क्या है?", options:["वोल्ट","एम्पियर","ओम","कूलॉम"], ans:1 },
  { q:"ऊर्जा की SI इकाई क्या है?", options:["वाट","जूल","न्यूटन","पास्कल"], ans:1 },
  { q:"बल की SI इकाई क्या है?", options:["जूल","न्यूटन","वाट","पास्कल"], ans:1 },
  { q:"ताप का SI मात्रक क्या है?", options:["सेल्सियस","केल्विन","फारेनहाइट","जूल"], ans:1 },

  { q:"पौधों में भोजन बनने की प्रक्रिया क्या कहलाती है?", options:["श्वसन","प्रकाश संश्लेषण","वाष्पोत्सर्जन","अवशोषण"], ans:1 },
  { q:"मानव शरीर में पाचन कहाँ शुरू होता है?", options:["आमाशय","मुँह","छोटी आँत","बड़ी आँत"], ans:1 },
  { q:"पेट में कौन सा अम्ल पाया जाता है?", options:["HCl","H2SO4","HNO3","CH3COOH"], ans:0 },
  { q:"सबसे हल्की गैस कौन सी है?", options:["ऑक्सीजन","हाइड्रोजन","नाइट्रोजन","हीलियम"], ans:1 },
  { q:"धातु किस प्रकार की चालक होती है?", options:["ऊष्मा का","विद्युत का","दोनों","कोई नहीं"], ans:2 }

);


// ---------- MEDIUM (25) ----------
bank.Science.medium.push(

  { q:"मानव शरीर में इंसुलिन किस अंग से स्रावित होता है?", options:["यकृत","अग्न्याशय","गुर्दा","हृदय"], ans:1 },
  { q:"विटामिन D की कमी से कौन सा रोग होता है?", options:["स्कर्वी","रिकेट्स","बेरी-बेरी","एनीमिया"], ans:1 },
  { q:"रक्त का pH मान लगभग कितना होता है?", options:["5.2","6.8","7.4","8.6"], ans:2 },
  { q:"मानव शरीर में सामान्य तापमान कितना होता है?", options:["35°C","36°C","37°C","38°C"], ans:2 },
  { q:"न्यूरॉन किससे संबंधित है?", options:["हड्डी","रक्त","तंत्रिका कोशिका","मांसपेशी"], ans:2 },

  { q:"कौन सा तत्व सबसे अधिक विद्युत चालक है?", options:["लोहा","तांबा","चांदी","एल्यूमिनियम"], ans:2 },
  { q:"पृथ्वी का गुरुत्वीय त्वरण लगभग कितना है?", options:["8.9","9.8","10.8","12.5"], ans:1 },
  { q:"ध्वनि की गति वायु में (20°C) लगभग कितनी होती है?", options:["220 m/s","330 m/s","450 m/s","550 m/s"], ans:1 },
  { q:"दर्पण में प्रतिबिंब बनने का नियम किससे संबंधित है?", options:["परावर्तन","अपवर्तन","विवर्तन","ध्रुवण"], ans:0 },
  { q:"प्रकाश का वेग निर्वात में कितना है?", options:["3×10^6 m/s","3×10^8 m/s","3×10^5 km/s","दोनों (B और C)"], ans:3 },

  { q:"कौन सा अम्ल सिरके में होता है?", options:["HCl","Citric acid","Acetic acid","Lactic acid"], ans:2 },
  { q:"नींबू में कौन सा अम्ल होता है?", options:["Acetic","Citric","Oxalic","Sulphuric"], ans:1 },
  { q:"बेकिंग सोडा का रासायनिक नाम क्या है?", options:["Na2CO3","NaHCO3","K2CO3","CaCO3"], ans:1 },
  { q:"वाशिंग सोडा का सूत्र क्या है?", options:["Na2CO3","NaHCO3","Na2CO3·10H2O","CaCO3"], ans:2 },
  { q:"चूना पत्थर का सूत्र क्या है?", options:["CaCO3","NaCl","KCl","MgSO4"], ans:0 },

  { q:"ओजोन परत मुख्यतः किस गैस से बनी होती है?", options:["CO2","O2","O3","N2"], ans:2 },
  { q:"वायुमंडल में सबसे अधिक कौन सी गैस है?", options:["ऑक्सीजन","नाइट्रोजन","कार्बन डाइऑक्साइड","हीलियम"], ans:1 },
  { q:"सूर्य की ऊर्जा का स्रोत क्या है?", options:["दहन","नाभिकीय संलयन","अपघटन","वाष्पीकरण"], ans:1 },
  { q:"रेडियोधर्मिता की खोज किसने की?", options:["रदरफोर्ड","बेकेरल","बोर","थॉमसन"], ans:1 },
  { q:"परमाणु का नाभिक किससे बना होता है?", options:["इलेक्ट्रॉन","प्रोटॉन-न्यूट्रॉन","न्यूट्रॉन-इलेक्ट्रॉन","प्रोटॉन-इलेक्ट्रॉन"], ans:1 },

  { q:"ऊष्मा का संचरण निर्वात में किस विधि से होता है?", options:["चालन","संवहन","विकिरण","कोई नहीं"], ans:2 },
  { q:"थर्मामीटर में कौन सा द्रव उपयोग होता है?", options:["पानी","अल्कोहल","पारा","दोनों (B और C)"], ans:3 },
  { q:"ध्वनि तरंगें कैसी होती हैं?", options:["अनुदैर्ध्य","अनुप्रस्थ","दोनों","कोई नहीं"], ans:0 },
  { q:"विद्युत प्रतिरोध की SI इकाई?", options:["ओम","वोल्ट","एम्पियर","वाट"], ans:0 },
  { q:"ओम का नियम किससे संबंधित है?", options:["V=IR","P=VI","F=ma","E=mc2"], ans:0 }

);


// ---------- HARD (25) ----------
bank.Science.hard.push(

  { q:"मानव रक्त में ऑक्सीजन का परिवहन किसके द्वारा होता है?", options:["WBC","Platelets","Hemoglobin","Plasma"], ans:2 },
  { q:"मानव शरीर में RBC का जीवनकाल लगभग कितना होता है?", options:["60 दिन","90 दिन","120 दिन","180 दिन"], ans:2 },
  { q:"कौन सा हार्मोन ‘Fight or Flight’ प्रतिक्रिया से जुड़ा है?", options:["इंसुलिन","एड्रेनालिन","थायरॉक्सिन","एस्ट्रोजन"], ans:1 },
  { q:"कौन सा विटामिन रक्त के थक्के जमने में सहायक है?", options:["A","B","K","D"], ans:2 },
  { q:"कौन सा अंग शरीर का ‘डिटॉक्सिफायर’ कहलाता है?", options:["हृदय","फेफड़ा","यकृत","गुर्दा"], ans:2 },

  { q:"ध्वनि की तीव्रता किस पर निर्भर करती है?", options:["आवृत्ति","आयाम","तरंगदैर्ध्य","वेग"], ans:1 },
  { q:"अल्ट्रासोनिक तरंगों की आवृत्ति होती है:", options:["20 Hz से कम","20 Hz - 20 kHz","20 kHz से अधिक","100 Hz"], ans:2 },
  { q:"SONAR किस सिद्धांत पर कार्य करता है?", options:["अपवर्तन","परावर्तन","विवर्तन","ध्रुवण"], ans:1 },
  { q:"इको सुनने के लिए न्यूनतम दूरी (20°C) लगभग कितनी चाहिए?", options:["8.5 m","10 m","17 m","34 m"], ans:2 },
  { q:"किस माध्यम में ध्वनि की गति सर्वाधिक होती है?", options:["वायु","जल","ठोस","निर्वात"], ans:2 },

  { q:"कौन सा धातु कमरे के तापमान पर द्रव होता है?", options:["सोडियम","पारा","लोहा","तांबा"], ans:1 },
  { q:"कौन सा अधातु विद्युत का अच्छा चालक है?", options:["सल्फर","कार्बन (ग्रेफाइट)","फॉस्फोरस","ऑक्सीजन"], ans:1 },
  { q:"कौन सा तत्व सबसे अधिक अभिक्रियाशील है?", options:["सोना","सोडियम","प्लैटिनम","चांदी"], ans:1 },
  { q:"NaCl में बंधन किस प्रकार का होता है?", options:["सहसंयोजक","आयनिक","धात्विक","हाइड्रोजन"], ans:1 },
  { q:"अम्ल + क्षार = ?", options:["नमक + जल","केवल जल","केवल नमक","अम्ल"], ans:0 },

  { q:"किस धातु का उपयोग थर्मामीटर में किया जाता है?", options:["तांबा","लोहा","पारा","एल्यूमिनियम"], ans:2 },
  { q:"विद्युत शक्ति का सूत्र क्या है?", options:["P=VI","P=IR","P=V/R","P=I/R"], ans:0 },
  { q:"विद्युत ऊर्जा का मात्रक क्या है?", options:["वोल्ट","कूलॉम","जूल","एम्पियर"], ans:2 },
  { q:"ट्रांसफॉर्मर किस सिद्धांत पर काम करता है?", options:["स्थिर विद्युत","विद्युत चुम्बकीय प्रेरण","गुरुत्व","घर्षण"], ans:1 },
  { q:"चुंबकीय क्षेत्र रेखाएँ कहाँ से निकलती हैं?", options:["S से S","N से S","S से N","दोनों"], ans:1 },

  { q:"पृथ्वी का सबसे बड़ा परत कौन सा है?", options:["क्रस्ट","मैंटल","कोर","लिथोस्फियर"], ans:1 },
  { q:"भूकंप मापने का यंत्र?", options:["बैरोमीटर","सीस्मोग्राफ","हाइड्रोमीटर","थर्मामीटर"], ans:1 },
  { q:"वायुमंडल की सबसे निचली परत?", options:["समताप मंडल","क्षोभमंडल","आयनमंडल","बहिर्मंडल"], ans:1 },
  { q:"ग्रीन हाउस गैसों में प्रमुख गैस?", options:["O2","N2","CO2","H2"], ans:2 },
  { q:"कौन सा विटामिन पानी में घुलनशील है?", options:["A","D","E","C"], ans:3 }

);
// =========================
// COMPUTER (UP Police level) - 75 Q (Easy/Medium/Hard)
// =========================

bank.Computer = { easy: [], medium: [], hard: [] };

// ---------- EASY (25) ----------
bank.Computer.easy.push(

  { q:"CPU का पूरा नाम क्या है?", options:["Central Processing Unit","Control Program Unit","Central Program Utility","Computer Processing Unit"], ans:0 },
  { q:"RAM किस प्रकार की मेमोरी है?", options:["स्थायी","अस्थायी","ROM","हार्ड"], ans:1 },
  { q:"ROM किस प्रकार की मेमोरी है?", options:["स्थायी","अस्थायी","कैश","रजिस्टर"], ans:0 },
  { q:"WWW का पूरा नाम क्या है?", options:["World Wide Web","Web World Wide","Wide World Web","World Web Wide"], ans:0 },
  { q:"Keyboard किस प्रकार का डिवाइस है?", options:["Input","Output","Storage","Processing"], ans:0 },

  { q:"Mouse किस प्रकार का डिवाइस है?", options:["Input","Output","Storage","Processing"], ans:0 },
  { q:"Printer किस प्रकार का डिवाइस है?", options:["Input","Output","Storage","Processing"], ans:1 },
  { q:"Monitor किस प्रकार का डिवाइस है?", options:["Input","Output","Storage","Processing"], ans:1 },
  { q:"Hard Disk किस प्रकार का डिवाइस है?", options:["Input","Output","Storage","Processing"], ans:2 },
  { q:"MS Word किसका उदाहरण है?", options:["OS","Application Software","Hardware","Compiler"], ans:1 },

  { q:"Windows क्या है?", options:["Hardware","Operating System","Browser","Language"], ans:1 },
  { q:"Google Chrome क्या है?", options:["OS","Browser","Antivirus","Compiler"], ans:1 },
  { q:"Email भेजने के लिए क्या जरूरी है?", options:["Internet","Printer","Scanner","CPU"], ans:0 },
  { q:"1 KB = ?", options:["100 bytes","1024 bytes","1024 bits","1000 bits"], ans:1 },
  { q:"1 MB = ?", options:["1024 KB","1000 KB","1024 bytes","1000 bytes"], ans:0 },

  { q:"USB का पूरा नाम?", options:["Universal Serial Bus","United System Bus","Universal System Board","Unit Serial Board"], ans:0 },
  { q:"LAN का पूरा नाम?", options:["Local Area Network","Large Area Network","Long Area Network","Light Area Network"], ans:0 },
  { q:"WAN का पूरा नाम?", options:["Wide Area Network","World Area Network","Web Area Network","Wire Area Network"], ans:0 },
  { q:"IP का पूरा नाम?", options:["Internet Protocol","Internal Program","Internet Program","Input Protocol"], ans:0 },
  { q:"URL का पूरा नाम?", options:["Uniform Resource Locator","Universal Resource Link","Uniform Record Locator","Unique Resource Locator"], ans:0 },

  { q:"MS Excel किसके लिए उपयोग होता है?", options:["Typing","Spreadsheet","Painting","Video"], ans:1 },
  { q:"PowerPoint किसके लिए उपयोग होता है?", options:["Presentation","Typing","Coding","Email"], ans:0 },
  { q:"कंप्यूटर में डेटा किस रूप में स्टोर होता है?", options:["Binary","Decimal","Hex","Octal"], ans:0 },
  { q:"कंप्यूटर का दिमाग किसे कहा जाता है?", options:["RAM","CPU","ROM","HDD"], ans:1 },
  { q:"Antivirus का काम क्या है?", options:["Virus बनाना","Virus हटाना","Internet बंद करना","Speed घटाना"], ans:1 }

);


// ---------- MEDIUM (25) ----------
bank.Computer.medium.push(

  { q:"ALU का पूरा नाम क्या है?", options:["Arithmetic Logic Unit","Advanced Logic Unit","Array Logic Unit","Application Logic Unit"], ans:0 },
  { q:"Cache Memory किसके लिए होती है?", options:["Slow storage","Fast access","Printing","Networking"], ans:1 },
  { q:"कंप्यूटर की सबसे छोटी इकाई क्या है?", options:["Byte","Bit","KB","MB"], ans:1 },
  { q:"1 Byte = ?", options:["4 bits","8 bits","16 bits","32 bits"], ans:1 },
  { q:"कंप्यूटर में OS का मुख्य काम क्या है?", options:["Games","Hardware-Software coordination","Only typing","Printing"], ans:1 },

  { q:"MS Word में Ctrl + B का कार्य?", options:["Bold","Back","Break","Bottom"], ans:0 },
  { q:"MS Word में Ctrl + U का कार्य?", options:["Undo","Underline","Upload","Unselect"], ans:1 },
  { q:"MS Word में Ctrl + Z का कार्य?", options:["Zoom","Undo","Redo","Cut"], ans:1 },
  { q:"MS Word में Ctrl + C का कार्य?", options:["Copy","Cut","Close","Center"], ans:0 },
  { q:"MS Word में Ctrl + V का कार्य?", options:["View","Paste","Print","Paste Special"], ans:1 },

  { q:"MS Excel में rows और columns के intersection को क्या कहते हैं?", options:["Cell","Table","Sheet","File"], ans:0 },
  { q:"Excel में formula '=' से क्यों शुरू होता है?", options:["Formatting","Calculation","Security","Design"], ans:1 },
  { q:"Excel में SUM() का काम?", options:["Add","Subtract","Multiply","Divide"], ans:0 },
  { q:"Excel में AVERAGE() का काम?", options:["Average","Max","Min","Count"], ans:0 },
  { q:"Excel में COUNT() का काम?", options:["Text count","Number count","Row count","Column count"], ans:1 },

  { q:"ई-मेल का मुख्य भाग कौन सा है?", options:["Subject","To","From","All"], ans:3 },
  { q:"Gmail किस प्रकार की सेवा है?", options:["Search engine","Email service","OS","Browser"], ans:1 },
  { q:"Cloud storage का उदाहरण?", options:["Google Drive","MS Paint","Notepad","Calculator"], ans:0 },
  { q:"PDF का पूरा नाम?", options:["Portable Document Format","Personal Data File","Printed Document Form","Public Document File"], ans:0 },
  { q:"Bluetooth का उपयोग किसके लिए होता है?", options:["Wired","Wireless short range","Printing","Storage"], ans:1 },

  { q:"Firewall का काम क्या है?", options:["Virus बनाना","Network सुरक्षा","Printing","RAM बढ़ाना"], ans:1 },
  { q:"Phishing क्या है?", options:["Fishing","Online fraud","Virus","Browser"], ans:1 },
  { q:"कंप्यूटर वायरस क्या करता है?", options:["Data delete/corrupt","Printer repair","Internet boost","RAM increase"], ans:0 },
  { q:"LAN में कौन सा device जरूरी होता है?", options:["Router","Switch","Printer","Scanner"], ans:1 },
  { q:"Router का काम क्या है?", options:["Typing","Network connect","Printing","Storage"], ans:1 }

);


// ---------- HARD (25) ----------
bank.Computer.hard.push(

  { q:"Binary (1010) का decimal मान क्या है?", options:["8","9","10","12"], ans:2 },
  { q:"Binary (1101) का decimal मान?", options:["11","12","13","14"], ans:2 },
  { q:"Decimal 15 का binary रूप?", options:["1110","1111","1011","1100"], ans:1 },
  { q:"Decimal 9 का binary रूप?", options:["1000","1001","1010","1100"], ans:1 },
  { q:"Hexadecimal में A का मान?", options:["9","10","11","12"], ans:1 },

  { q:"कंप्यूटर में BIOS का उपयोग किस लिए होता है?", options:["Booting","Typing","Internet","Storage"], ans:0 },
  { q:"Booting क्या है?", options:["Computer start process","Shutdown","Formatting","Install"], ans:0 },
  { q:"Compiler का काम क्या है?", options:["Hardware","Translate code","Delete virus","Store data"], ans:1 },
  { q:"HTTP का उपयोग किस लिए होता है?", options:["Web browsing","Printing","Storage","Gaming"], ans:0 },
  { q:"HTTPS में extra क्या होता है?", options:["Speed","Security","Storage","Audio"], ans:1 },

  { q:"IP address का version 4 कितने bits का होता है?", options:["16","32","64","128"], ans:1 },
  { q:"IPv6 कितने bits का होता है?", options:["64","96","128","256"], ans:2 },
  { q:"DNS का मुख्य काम क्या है?", options:["Domain to IP","IP to Domain","Virus remove","Email send"], ans:0 },
  { q:"MAC address किससे संबंधित है?", options:["Software","Hardware network card","Internet speed","OS"], ans:1 },
  { q:"Network topology का उदाहरण कौन सा है?", options:["Star","Circle","Square","Hex"], ans:0 },

  { q:"डेटा encryption का मतलब?", options:["Data hide","Data compress","Data delete","Data print"], ans:0 },
  { q:"Trojan horse क्या है?", options:["Real horse","Malware","Browser","OS"], ans:1 },
  { q:"Ransomware क्या करता है?", options:["Data lock + money demand","Print","Speed up","Backup"], ans:0 },
  { q:"Two-factor authentication का मतलब?", options:["2 passwords","Extra security step","Fast login","No login"], ans:1 },
  { q:"Strong password में क्या जरूरी है?", options:["Only numbers","Only letters","Mix of letters+numbers+symbols","Only name"], ans:2 },

  { q:"MS Excel में VLOOKUP किसके लिए उपयोग होता है?", options:["Search","Lookup in table","Print","Format"], ans:1 },
  { q:"Excel में #VALUE! error क्यों आता है?", options:["Wrong data type","Good formula","Printer issue","Internet"], ans:0 },
  { q:"MS Word में Mail Merge का उपयोग?", options:["Typing","Bulk letters","Design","Virus remove"], ans:1 },
  { q:"Ctrl+Shift+Esc का काम?", options:["Open Task Manager","Shutdown","Restart","Copy"], ans:0 },
  { q:"Operating System का उदाहरण कौन सा है?", options:["Windows","Chrome","MS Word","CPU"], ans:0 }

);
// =========================
// CURRENT AFFAIRS (UP Police level) - 75 Q (Easy/Medium/Hard)
// =========================

bank.Current = { easy: [], medium: [], hard: [] };

// ---------- EASY (25) ----------
bank.Current.easy.push(

  { q:"भारत के वर्तमान राष्ट्रपति कौन हैं?", options:["रामनाथ कोविंद","द्रौपदी मुर्मू","प्रतिभा पाटिल","ए.पी.जे. कलाम"], ans:1 },
  { q:"भारत के वर्तमान प्रधानमंत्री कौन हैं?", options:["नरेंद्र मोदी","राहुल गांधी","अमित शाह","योगी आदित्यनाथ"], ans:0 },
  { q:"भारत की राजधानी क्या है?", options:["मुंबई","दिल्ली","लखनऊ","पटना"], ans:1 },
  { q:"उत्तर प्रदेश की राजधानी क्या है?", options:["कानपुर","लखनऊ","वाराणसी","आगरा"], ans:1 },
  { q:"भारत के मुख्य न्यायाधीश (CJI) किस संस्था के प्रमुख होते हैं?", options:["लोकसभा","सुप्रीम कोर्ट","राज्यसभा","हाई कोर्ट"], ans:1 },

  { q:"G20 2023 की मेजबानी किस देश ने की?", options:["भारत","चीन","जापान","USA"], ans:0 },
  { q:"ISRO का मुख्यालय कहाँ है?", options:["दिल्ली","बेंगलुरु","मुंबई","चेन्नई"], ans:1 },
  { q:"RBI का मुख्यालय कहाँ है?", options:["दिल्ली","मुंबई","कोलकाता","चेन्नई"], ans:1 },
  { q:"भारत की सबसे बड़ी नदी (लंबाई) कौन सी मानी जाती है?", options:["यमुना","गंगा","गोदावरी","नर्मदा"], ans:1 },
  { q:"भारत का राष्ट्रीय खेल (परंपरागत GK) क्या माना जाता है?", options:["क्रिकेट","हॉकी","कबड्डी","फुटबॉल"], ans:1 },

  { q:"संयुक्त राष्ट्र (UNO) का मुख्यालय कहाँ है?", options:["लंदन","पेरिस","न्यूयॉर्क","जिनेवा"], ans:2 },
  { q:"विश्व स्वास्थ्य संगठन (WHO) का मुख्यालय कहाँ है?", options:["रोम","जिनेवा","पेरिस","लंदन"], ans:1 },
  { q:"विश्व बैंक का मुख्यालय कहाँ है?", options:["वॉशिंगटन DC","न्यूयॉर्क","लंदन","पेरिस"], ans:0 },
  { q:"अंतरराष्ट्रीय मुद्रा कोष (IMF) का मुख्यालय कहाँ है?", options:["वॉशिंगटन DC","लंदन","टोक्यो","बर्लिन"], ans:0 },
  { q:"भारत का राष्ट्रीय चिन्ह किस स्थान से लिया गया है?", options:["सारनाथ","मथुरा","अजंता","कोणार्क"], ans:0 },

  { q:"UP के मुख्यमंत्री कौन हैं?", options:["अखिलेश यादव","योगी आदित्यनाथ","मायावती","प्रियंका गांधी"], ans:1 },
  { q:"भारत के गृह मंत्री कौन हैं?", options:["अमित शाह","राजनाथ सिंह","नितिन गडकरी","एस. जयशंकर"], ans:0 },
  { q:"भारत के रक्षा मंत्री कौन हैं?", options:["अमित शाह","राजनाथ सिंह","नितिन गडकरी","मोदी"], ans:1 },
  { q:"भारत के वित्त मंत्री कौन हैं?", options:["निर्मला सीतारमण","स्मृति ईरानी","ममता बनर्जी","मायावती"], ans:0 },
  { q:"भारत के विदेश मंत्री कौन हैं?", options:["एस. जयशंकर","अमित शाह","राजनाथ सिंह","मोदी"], ans:0 },

  { q:"राष्ट्रीय खेल दिवस कब मनाया जाता है?", options:["15 अगस्त","29 अगस्त","2 अक्टूबर","14 नवंबर"], ans:1 },
  { q:"राष्ट्रीय विज्ञान दिवस कब मनाया जाता है?", options:["28 फरवरी","5 जून","1 मई","26 जनवरी"], ans:0 },
  { q:"विश्व पर्यावरण दिवस कब मनाया जाता है?", options:["5 जून","1 मई","14 नवंबर","2 अक्टूबर"], ans:0 },
  { q:"अंतरराष्ट्रीय योग दिवस कब मनाया जाता है?", options:["21 जून","5 जून","29 अगस्त","2 अक्टूबर"], ans:0 },
  { q:"संविधान दिवस कब मनाया जाता है?", options:["26 जनवरी","15 अगस्त","26 नवंबर","2 अक्टूबर"], ans:2 }

);


// ---------- MEDIUM (25) ----------
bank.Current.medium.push(

  { q:"‘मिशन चंद्रयान-3’ किस वर्ष सफल हुआ?", options:["2021","2022","2023","2024"], ans:2 },
  { q:"चंद्रयान-3 का लैंडर क्या कहलाता है?", options:["विक्रम","प्रज्ञान","गगन","ध्रुव"], ans:0 },
  { q:"चंद्रयान-3 का रोवर क्या कहलाता है?", options:["विक्रम","प्रज्ञान","अग्नि","ध्रुव"], ans:1 },
  { q:"‘आदित्य-L1’ मिशन किससे संबंधित है?", options:["चंद्रमा","सूर्य","मंगल","शुक्र"], ans:1 },
  { q:"भारत का पहला सौर मिशन ‘आदित्य-L1’ किस संस्था द्वारा लॉन्च हुआ?", options:["DRDO","ISRO","BARC","HAL"], ans:1 },

  { q:"भारत के ‘मिसाइल मैन’ किसे कहा जाता है?", options:["विक्रम साराभाई","डॉ. ए.पी.जे. अब्दुल कलाम","होमी भाभा","सी.वी. रमन"], ans:1 },
  { q:"‘प्रधानमंत्री जन-धन योजना’ किस वर्ष शुरू हुई?", options:["2012","2014","2016","2018"], ans:1 },
  { q:"‘स्वच्छ भारत मिशन’ की शुरुआत कब हुई?", options:["2012","2014","2015","2016"], ans:1 },
  { q:"‘आयुष्मान भारत योजना’ कब शुरू हुई?", options:["2016","2017","2018","2019"], ans:2 },
  { q:"‘मेक इन इंडिया’ अभियान कब शुरू हुआ?", options:["2012","2014","2016","2018"], ans:1 },

  { q:"UP में ‘एक जिला-एक उत्पाद (ODOP)’ योजना किससे संबंधित है?", options:["शिक्षा","रोजगार","स्थानीय उत्पाद","स्वास्थ्य"], ans:2 },
  { q:"‘PM Kisan’ योजना के तहत कितनी राशि (वार्षिक) दी जाती है?", options:["₹4000","₹5000","₹6000","₹7000"], ans:2 },
  { q:"‘UPI’ का पूरा नाम क्या है?", options:["Unified Payment Interface","Universal Payment India","Unique Payment Interface","United Payment India"], ans:0 },
  { q:"NPCI का पूरा नाम क्या है?", options:["National Payment Corporation of India","National Public Credit India","New Payment Council India","None"], ans:0 },
  { q:"भारत में GST कब लागू हुआ?", options:["2015","2016","2017","2018"], ans:2 },

  { q:"भारत की पहली महिला राष्ट्रपति कौन थीं?", options:["प्रतिभा पाटिल","द्रौपदी मुर्मू","इंदिरा गांधी","सरोजिनी नायडू"], ans:0 },
  { q:"भारत के पहले उपराष्ट्रपति कौन थे?", options:["डॉ. राधाकृष्णन","जाकिर हुसैन","वी.वी. गिरी","राजेन्द्र प्रसाद"], ans:0 },
  { q:"भारत के पहले मुख्य चुनाव आयुक्त कौन थे?", options:["सुकुमार सेन","टी.एन. शेषन","राजेन्द्र प्रसाद","के.एम. मुंशी"], ans:0 },
  { q:"NITI आयोग की स्थापना कब हुई?", options:["2012","2013","2015","2016"], ans:2 },
  { q:"योजना आयोग की जगह किसने ली?", options:["NITI आयोग","वित्त आयोग","RBI","CBI"], ans:0 },

  { q:"‘भारत छोड़ो आंदोलन’ किस वर्ष हुआ?", options:["1940","1942","1945","1947"], ans:1 },
  { q:"‘दांडी मार्च’ किस वर्ष हुआ?", options:["1928","1930","1932","1935"], ans:1 },
  { q:"‘जलियांवाला बाग’ घटना किस वर्ष हुई?", options:["1917","1919","1921","1923"], ans:1 },
  { q:"भारत को स्वतंत्रता कब मिली?", options:["1945","1947","1950","1952"], ans:1 },
  { q:"भारतीय संविधान सभा का गठन किस वर्ष हुआ?", options:["1942","1946","1947","1949"], ans:1 }

);


// ---------- HARD (25) ----------
bank.Current.hard.push(

  { q:"भारत के ‘चंद्रयान-2’ मिशन का ऑर्बिटर किस वर्ष लॉन्च हुआ?", options:["2017","2018","2019","2020"], ans:2 },
  { q:"भारत के ‘गगनयान’ मिशन का उद्देश्य क्या है?", options:["मंगल पर जाना","मानव को अंतरिक्ष में भेजना","चंद्रमा पर बसाना","सूर्य पर जाना"], ans:1 },
  { q:"‘ऑपरेशन गंगा’ किससे संबंधित था?", options:["कोविड वैक्सीन","यूक्रेन से भारतीयों की वापसी","बाढ़ राहत","अंतरिक्ष मिशन"], ans:1 },
  { q:"‘ऑपरेशन देवी शक्ति’ किससे संबंधित था?", options:["अफगानिस्तान से भारतीयों की वापसी","चीन सीमा","चंद्र मिशन","बाढ़ राहत"], ans:0 },
  { q:"भारत की पहली स्वदेशी कोविड वैक्सीन कौन सी थी?", options:["कोविशील्ड","कोवैक्सिन","स्पुतनिक","मॉडर्ना"], ans:1 },

  { q:"भारत में ‘राष्ट्रीय शिक्षा नीति (NEP)’ कब लागू/घोषित हुई?", options:["2018","2019","2020","2021"], ans:2 },
  { q:"‘अग्निपथ योजना’ किससे संबंधित है?", options:["रेलवे","सेना भर्ती","शिक्षा","खेती"], ans:1 },
  { q:"‘प्रधानमंत्री गति शक्ति योजना’ किससे संबंधित है?", options:["कृषि","इन्फ्रास्ट्रक्चर","स्वास्थ्य","शिक्षा"], ans:1 },
  { q:"भारत का पहला ‘चीता पुनर्वास परियोजना’ किस राज्य में शुरू हुआ?", options:["UP","MP","राजस्थान","गुजरात"], ans:1 },
  { q:"‘PM Vishwakarma’ योजना किससे संबंधित है?", options:["कारीगर/शिल्पकार","किसान","छात्र","सेना"], ans:0 },

  { q:"भारत में डिजिटल भुगतान बढ़ाने में UPI किस संस्था ने विकसित किया?", options:["RBI","NPCI","SEBI","IRDA"], ans:1 },
  { q:"SEBI की स्थापना किस वर्ष हुई?", options:["1988","1992","1995","2000"], ans:1 },
  { q:"भारत में पहला परमाणु परीक्षण ‘स्माइलिंग बुद्धा’ कब हुआ?", options:["1962","1974","1984","1998"], ans:1 },
  { q:"‘पोखरण-II’ परमाणु परीक्षण कब हुआ?", options:["1974","1988","1998","2001"], ans:2 },
  { q:"भारत की पहली मेट्रो सेवा किस शहर में शुरू हुई?", options:["दिल्ली","कोलकाता","चेन्नई","मुंबई"], ans:1 },

  { q:"UP का राजकीय पशु कौन सा है?", options:["बारहसिंगा","गंगा डॉल्फिन","बाघ","हाथी"], ans:1 },
  { q:"UP का राजकीय पक्षी कौन सा है?", options:["मोर","सारस","कबूतर","तोता"], ans:1 },
  { q:"UP का राजकीय वृक्ष कौन सा है?", options:["अशोक","बरगद","नीम","पीपल"], ans:0 },
  { q:"UP का राजकीय फूल कौन सा है?", options:["गुलाब","कमल","पलाश","गेंदा"], ans:2 },
  { q:"UP का राजकीय खेल कौन सा है?", options:["क्रिकेट","हॉकी","कबड्डी","फुटबॉल"], ans:1 },

  { q:"भारत का पहला उपग्रह ‘आर्यभट्ट’ किस वर्ष लॉन्च हुआ?", options:["1972","1975","1978","1980"], ans:1 },
  { q:"ISRO के संस्थापक/जनक किसे कहा जाता है?", options:["डॉ. विक्रम साराभाई","सतीश धवन","कलाम","होमी भाभा"], ans:0 },
  { q:"DRDO का मुख्यालय कहाँ है?", options:["दिल्ली","मुंबई","बेंगलुरु","हैदराबाद"], ans:0 },
  { q:"BARC कहाँ स्थित है?", options:["मुंबई","चेन्नई","दिल्ली","लखनऊ"], ans:0 },
  { q:"भारत में पहली जनगणना कब हुई (पूर्ण रूप से)?", options:["1872","1881","1891","1901"], ans:1 }

);





















// =========================
// SSC - ADD QUESTIONS
// =========================

// GK
// =========================
// SSC GK (MEDIUM) - Replace (30)
// =========================
bank.GK.medium = [];
bank.GK.medium.push(

  { q:"भारतीय संविधान के अनुसार भारत एक ______ है।", options:["संघीय राज्य","एकात्मक राज्य","संघीय राज्य जिसमें एकात्मक विशेषताएँ","पूर्ण एकात्मक राज्य"], ans:2 },
  { q:"संविधान सभा की पहली बैठक कब हुई थी?", options:["9 दिसम्बर 1946","15 अगस्त 1947","26 नवम्बर 1949","26 जनवरी 1950"], ans:0 },
  { q:"संविधान सभा के अस्थायी अध्यक्ष कौन थे?", options:["डॉ. राजेन्द्र प्रसाद","सच्चिदानंद सिन्हा","डॉ. बी.आर. अम्बेडकर","जवाहरलाल नेहरू"], ans:1 },
  { q:"भारतीय संविधान में ‘समवर्ती सूची’ किस अनुसूची से संबंधित है?", options:["5वीं","6वीं","7वीं","8वीं"], ans:2 },
  { q:"मौलिक कर्तव्यों को संविधान में किस संशोधन द्वारा जोड़ा गया?", options:["24वां","42वां","44वां","52वां"], ans:1 },

  { q:"भारत में ‘राज्यसभा’ को किस नाम से भी जाना जाता है?", options:["निचला सदन","उच्च सदन","लोक सदन","जन सदन"], ans:1 },
  { q:"भारतीय संसद का कौन सा सदन भंग नहीं होता?", options:["लोकसभा","राज्यसभा","दोनों","कोई नहीं"], ans:1 },
  { q:"संविधान में ‘राज्य के नीति-निर्देशक तत्व’ किस भाग में हैं?", options:["भाग-III","भाग-IV","भाग-V","भाग-VI"], ans:1 },
  { q:"भारत में चुनाव आयोग का उल्लेख किस अनुच्छेद में है?", options:["320","324","326","330"], ans:1 },
  { q:"भारत में वयस्क मताधिकार का उल्लेख किस अनुच्छेद में है?", options:["324","325","326","327"], ans:2 },

  { q:"‘लोकसभा अध्यक्ष’ का उल्लेख किस अनुच्छेद में है?", options:["92","93","94","95"], ans:1 },
  { q:"‘राज्यसभा का सभापति’ कौन होता है?", options:["राष्ट्रपति","उपराष्ट्रपति","प्रधानमंत्री","लोकसभा अध्यक्ष"], ans:1 },
  { q:"भारत के वित्त आयोग का उल्लेख किस अनुच्छेद में है?", options:["148","280","324","352"], ans:1 },
  { q:"CAG का उल्लेख किस अनुच्छेद में है?", options:["124","148","280","356"], ans:1 },
  { q:"अटॉर्नी जनरल का उल्लेख किस अनुच्छेद में है?", options:["72","74","76","80"], ans:2 },

  { q:"भारत में राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:0 },
  { q:"राष्ट्रपति शासन किस अनुच्छेद में लगाया जाता है?", options:["352","356","360","368"], ans:1 },
  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:2 },
  { q:"मनी बिल किस अनुच्छेद में परिभाषित है?", options:["108","109","110","111"], ans:2 },
  { q:"संसद की संयुक्त बैठक का उल्लेख किस अनुच्छेद में है?", options:["108","109","110","111"], ans:0 },

  { q:"‘ग्रीन हाउस प्रभाव’ मुख्यतः किस गैस से जुड़ा है?", options:["O2","CO2","N2","H2"], ans:1 },
  { q:"वायुमंडल में सर्वाधिक मात्रा किस गैस की है?", options:["ऑक्सीजन","नाइट्रोजन","कार्बन डाइऑक्साइड","आर्गन"], ans:1 },
  { q:"कौन सा विटामिन रक्त के थक्के जमने में सहायक है?", options:["A","B","C","K"], ans:3 },
  { q:"मानव शरीर में इंसुलिन का स्राव कहाँ होता है?", options:["यकृत","अग्न्याशय","हृदय","गुर्दा"], ans:1 },
  { q:"DNA की संरचना का मॉडल किसने दिया?", options:["डार्विन","वॉटसन-क्रिक","न्यूटन","मेंडल"], ans:1 },

  { q:"पृथ्वी की सबसे बाहरी परत क्या कहलाती है?", options:["मैंटल","क्रस्ट","कोर","लिथोस्फियर"], ans:1 },
  { q:"रेडियोधर्मिता की खोज किसने की?", options:["बेकरेल","रदरफोर्ड","बोर","थॉमसन"], ans:0 },
  { q:"ध्वनि निर्वात में क्यों नहीं चलती?", options:["ऊर्जा नहीं","माध्यम नहीं","दाब नहीं","वायु नहीं"], ans:1 },
  { q:"ओम का नियम किससे संबंधित है?", options:["V=IR","P=VI","F=ma","E=mc2"], ans:0 },
  { q:"पानी का अधिकतम घनत्व किस तापमान पर होता है?", options:["0°C","4°C","10°C","100°C"], ans:1 }

);


// =========================
// SSC GK (HARD) - Replace (30)
// =========================
bank.GK.hard = [];
bank.GK.hard.push(

  { q:"संविधान के अनुसार भारत का ‘राज्य’ किस अनुच्छेद में परिभाषित है?", options:["अनुच्छेद 12","अनुच्छेद 13","अनुच्छेद 14","अनुच्छेद 15"], ans:0 },
  { q:"मौलिक अधिकारों का निलंबन किस अनुच्छेद में है?", options:["358 और 359","352 और 356","360 और 368","370 और 371"], ans:0 },
  { q:"भारतीय संविधान में ‘समानता का अधिकार’ किस अनुच्छेद 14-18 में है। यह किस भाग में आता है?", options:["भाग-II","भाग-III","भाग-IV","भाग-V"], ans:1 },
  { q:"भारतीय संविधान में ‘संविधान संशोधन’ किस अनुच्छेद में है?", options:["352","356","360","368"], ans:3 },
  { q:"संविधान के किस भाग में ‘पंचायत’ का उल्लेख है?", options:["भाग-IX","भाग-X","भाग-XI","भाग-VIII"], ans:0 },

  { q:"73वां संविधान संशोधन किससे संबंधित है?", options:["नगरपालिका","पंचायती राज","मौलिक कर्तव्य","न्यायपालिका"], ans:1 },
  { q:"74वां संविधान संशोधन किससे संबंधित है?", options:["नगरपालिका","पंचायती राज","राज्यसभा","चुनाव आयोग"], ans:0 },
  { q:"संविधान में ‘मौलिक कर्तव्य’ किस भाग में हैं?", options:["भाग-III","भाग-IV","भाग-IVA","भाग-V"], ans:2 },
  { q:"‘राज्य के नीति निदेशक तत्व’ किस देश से लिए गए हैं?", options:["USA","Ireland","UK","Canada"], ans:1 },
  { q:"‘मौलिक अधिकार’ किस देश से लिए गए हैं?", options:["USA","UK","Ireland","France"], ans:0 },

  { q:"भारतीय संविधान की प्रस्तावना में ‘समाजवादी’ शब्द किस संशोधन से जोड़ा गया?", options:["24वां","42वां","44वां","52वां"], ans:1 },
  { q:"लोकसभा में अनुसूचित जाति के लिए आरक्षण किस अनुच्छेद में है?", options:["330","332","334","335"], ans:0 },
  { q:"राज्य विधानसभाओं में SC आरक्षण किस अनुच्छेद में है?", options:["330","332","334","335"], ans:1 },
  { q:"भारत के नियंत्रक एवं महालेखा परीक्षक की नियुक्ति कौन करता है?", options:["प्रधानमंत्री","राष्ट्रपति","मुख्य न्यायाधीश","लोकसभा"], ans:1 },
  { q:"भारत में वित्त आयोग का गठन कितने वर्षों के लिए होता है?", options:["3","4","5","6"], ans:2 },

  { q:"‘स्वतंत्र भारत का पहला गवर्नर जनरल’ कौन था?", options:["सी. राजगोपालाचारी","लॉर्ड माउंटबेटन","नेहरू","पटेल"], ans:1 },
  { q:"भारत के पहले भारतीय गवर्नर जनरल कौन थे?", options:["सी. राजगोपालाचारी","लॉर्ड माउंटबेटन","राजेन्द्र प्रसाद","अम्बेडकर"], ans:0 },
  { q:"‘सिंधु घाटी सभ्यता’ का प्रमुख बंदरगाह स्थल कौन सा था?", options:["लोथल","कालीबंगा","हड़प्पा","मोहनजोदड़ो"], ans:0 },
  { q:"‘अशोक’ के शिलालेख मुख्यतः किस लिपि में हैं?", options:["देवनागरी","ब्राह्मी","खरोष्ठी","तमिल"], ans:1 },
  { q:"‘अलबरूनी’ किस शासक के समय भारत आया?", options:["अकबर","महमूद गजनवी","हर्ष","चंद्रगुप्त"], ans:1 },

  { q:"भारत में पहली जनगणना (पूर्ण रूप से) कब हुई?", options:["1872","1881","1891","1901"], ans:1 },
  { q:"‘रेडियो’ की खोज किसने की?", options:["मार्कोनी","एडिसन","न्यूटन","बेल"], ans:0 },
  { q:"‘टेलीफोन’ का आविष्कार किसने किया?", options:["ग्राहम बेल","मार्कोनी","एडिसन","फैराडे"], ans:0 },
  { q:"‘पेनिसिलिन’ की खोज किसने की?", options:["फ्लेमिंग","डार्विन","मेंडल","बोर"], ans:0 },
  { q:"‘नाइट्रोजन चक्र’ मुख्यतः किससे संबंधित है?", options:["वायु","मृदा बैक्टीरिया","जल","पौधे"], ans:1 },

  { q:"विटामिन B1 की कमी से कौन सा रोग होता है?", options:["स्कर्वी","बेरी-बेरी","रिकेट्स","रातौंधी"], ans:1 },
  { q:"विटामिन A की कमी से?", options:["एनीमिया","रातौंधी","रिकेट्स","बेरी-बेरी"], ans:1 },
  { q:"मानव शरीर में ‘यूरिया’ का निर्माण कहाँ होता है?", options:["गुर्दा","यकृत","फेफड़ा","हृदय"], ans:1 },
  { q:"‘पेसमेकर’ मानव शरीर के किस भाग में होता है?", options:["मस्तिष्क","हृदय","फेफड़ा","किडनी"], ans:1 },
  { q:"RBC का निर्माण मुख्यतः कहाँ होता है?", options:["अस्थि मज्जा","यकृत","प्लीहा","हृदय"], ans:0 }

);


// Math
// =========================
// SSC MATH (MEDIUM) - Replace (30)
// =========================
bank.Math.medium = [];
bank.Math.medium.push(

  { q:"एक वस्तु 20% लाभ पर बेची गई। यदि विक्रय मूल्य ₹960 है तो क्रय मूल्य?", options:["₹720","₹800","₹820","₹840"], ans:1 },
  { q:"एक वस्तु 25% हानि पर बेची गई। यदि विक्रय मूल्य ₹750 है तो क्रय मूल्य?", options:["₹900","₹950","₹1000","₹1100"], ans:2 },
  { q:"₹1200 पर 10% वार्षिक दर से 2 वर्ष का साधारण ब्याज?", options:["₹200","₹220","₹240","₹260"], ans:2 },
  { q:"₹2500 पर 8% वार्षिक दर से 3 वर्ष का साधारण ब्याज?", options:["₹500","₹550","₹600","₹650"], ans:2 },
  { q:"Marked Price ₹2000 पर 15% discount देने पर SP?", options:["₹1600","₹1650","₹1700","₹1750"], ans:2 },

  { q:"एक ट्रेन 72 km/h की गति से 15 सेकंड में खंभा पार करती है। ट्रेन की लंबाई?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"एक ट्रेन 90 km/h की गति से 20 सेकंड में खंभा पार करती है। लंबाई?", options:["450m","500m","550m","600m"], ans:1 },
  { q:"एक ट्रेन 54 km/h की गति से 18 सेकंड में खंभा पार करती है। लंबाई?", options:["240m","250m","270m","280m"], ans:2 },
  { q:"दो ट्रेनें 54 km/h और 72 km/h विपरीत दिशा में चलें। सापेक्ष गति?", options:["108","116","126","136"], ans:2 },
  { q:"दो ट्रेनें 60 km/h और 40 km/h समान दिशा में चलें। सापेक्ष गति?", options:["20","30","40","50"], ans:0 },

  { q:"A अकेले काम 12 दिन में करता है, B 18 दिन में। साथ में?", options:["7.2","8","9","10"], ans:0 },
  { q:"A 10 दिन में, B 15 दिन में। साथ में?", options:["5","6","7","8"], ans:1 },
  { q:"A 16 दिन में, B 24 दिन में। साथ में?", options:["9.6","10","11","12"], ans:0 },
  { q:"A 20 दिन में, B 30 दिन में। साथ में?", options:["10","12","15","18"], ans:0 },
  { q:"A 18 दिन में, B 12 दिन में। साथ में?", options:["7.2","8","9","10"], ans:0 },

  { q:"यदि x+y=30 और x-y=10, तो x=?", options:["10","15","20","25"], ans:2 },
  { q:"यदि 4x+7=55, तो x=?", options:["10","11","12","13"], ans:1 },
  { q:"यदि 6x-9=75, तो x=?", options:["12","13","14","15"], ans:2 },
  { q:"यदि x/4 + 6 = 15, तो x=?", options:["28","32","36","40"], ans:1 },
  { q:"यदि 3x-5=40, तो x=?", options:["12","13","14","15"], ans:3 },

  { q:"दो संख्याओं का अनुपात 7:9 है, योग 256 है। बड़ी संख्या?", options:["112","128","144","160"], ans:1 },
  { q:"अनुपात 5:8 है, योग 260 है। छोटी संख्या?", options:["90","100","110","120"], ans:1 },
  { q:"अनुपात 3:7 है, योग 200 है। बड़ी संख्या?", options:["120","130","140","150"], ans:2 },
  { q:"अनुपात 4:11 है, योग 300 है। छोटी संख्या?", options:["80","90","100","110"], ans:2 },
  { q:"अनुपात 9:11 है, योग 220 है। छोटी संख्या?", options:["90","99","100","110"], ans:1 },

  { q:"औसत: 18, 22, 26, 30 का औसत?", options:["22","23","24","25"], ans:2 },
  { q:"औसत: 12, 16, 20, 24, 28 का औसत?", options:["18","19","20","21"], ans:2 },
  { q:"औसत: 35, 45, 55, 65 का औसत?", options:["45","48","50","52"], ans:2 },
  { q:"औसत: 11, 22, 33, 44 का औसत?", options:["25","27","28","30"], ans:0 },
  { q:"औसत: 14, 18, 22, 26 का औसत?", options:["18","19","20","21"], ans:2 }

);


// =========================
// SSC MATH (HARD) - Replace (30)
// =========================
bank.Math.hard = [];
bank.Math.hard.push(

  { q:"₹5000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि राशि (annual)?", options:["₹6000","₹6050","₹6050.5","₹6100"], ans:1 },
  { q:"₹8000 पर 5% वार्षिक दर से 3 वर्ष का चक्रवृद्धि Amount?", options:["₹9200","₹9261","₹9300","₹9400"], ans:1 },
  { q:"₹10000 पर 5% वार्षिक दर से 2 वर्ष का Amount?", options:["₹11000","₹11025","₹11250","₹11500"], ans:1 },
  { q:"₹4000 पर 8% वार्षिक दर से 2 वर्ष का Amount?", options:["₹4600","₹4665.6","₹4700","₹4800"], ans:1 },
  { q:"₹2000 पर 10% वार्षिक दर से 2 वर्ष का Amount?", options:["₹2400","₹2420","₹2500","₹2600"], ans:1 },

  { q:"एक ट्रेन 72 km/h से 10 sec में खंभा पार करती है। लंबाई?", options:["150m","180m","200m","220m"], ans:1 },
  { q:"90 km/h से ट्रेन 12 sec में खंभा पार करे। लंबाई?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"108 km/h से ट्रेन 20 sec में खंभा पार करे। लंबाई?", options:["500m","550m","600m","650m"], ans:2 },
  { q:"60 km/h से ट्रेन 18 sec में खंभा पार करे। लंबाई?", options:["250m","280m","300m","320m"], ans:0 },
  { q:"54 km/h से ट्रेन 15 sec में खंभा पार करे। लंबाई?", options:["200m","210m","225m","240m"], ans:2 },

  { q:"एक नाव धारा के साथ 24 km 3 घंटे में जाती है। स्थिर जल में गति?", options:["6","7","8","9"], ans:2 },
  { q:"एक नाव धारा के विरुद्ध 18 km 3 घंटे में जाती है। गति?", options:["4","5","6","7"], ans:1 },
  { q:"यदि धारा 2 km/h और नाव की गति 8 km/h, तो upstream speed?", options:["5","6","7","8"], ans:1 },
  { q:"धारा 3 km/h और नाव 12 km/h, downstream speed?", options:["12","13","14","15"], ans:3 },
  { q:"धारा 4 km/h, नाव 10 km/h, upstream speed?", options:["4","5","6","7"], ans:2 },

  { q:"यदि sinθ=3/5 तो cosθ=?", options:["4/5","3/5","5/4","2/5"], ans:0 },
  { q:"यदि cosθ=12/13 तो sinθ=?", options:["5/13","12/13","13/5","1/13"], ans:0 },
  { q:"यदि tanθ=4/3 तो secθ=?", options:["5/3","4/3","3/5","5/4"], ans:0 },
  { q:"यदि sinθ=5/13 तो cotθ=?", options:["12/5","5/12","13/12","12/13"], ans:0 },
  { q:"यदि tanθ=3/4 तो cscθ=?", options:["5/3","5/4","4/5","3/5"], ans:0 },

  { q:"एक वृत्त की त्रिज्या 14 cm है। क्षेत्रफल?", options:["616","660","720","770"], ans:0 },
  { q:"एक वृत्त की परिधि 88 cm है। त्रिज्या?", options:["12","13","14","15"], ans:2 },
  { q:"एक वर्ग का क्षेत्रफल 256 है। भुजा?", options:["14","15","16","18"], ans:2 },
  { q:"एक आयत की लंबाई 20, चौड़ाई 14। परिमाप?", options:["64","68","70","72"], ans:1 },
  { q:"एक समचतुर्भुज के विकर्ण 10 और 24। क्षेत्रफल?", options:["100","110","120","130"], ans:2 },

  { q:"A और B की उम्र का अनुपात 4:5 है। 10 वर्ष बाद अनुपात 5:6 होगा। A की वर्तमान उम्र?", options:["20","24","28","32"], ans:1 },
  { q:"दो संख्याओं का HCF 12 और LCM 240 है। यदि एक संख्या 48 हो तो दूसरी?", options:["50","60","72","80"], ans:1 },
  { q:"दो संख्याओं का LCM 180 है और HCF 6। यदि एक संख्या 30 है तो दूसरी?", options:["36","40","45","60"], ans:0 },
  { q:"x% of y = y% of x. यह बराबर होता है?", options:["x=y","x>y","x<y","कभी नहीं"], ans:0 },
  { q:"यदि 20% किसी संख्या का 80 है तो संख्या?", options:["320","360","400","420"], ans:2 }

);


// Reasoning
// =========================
// SSC REASONING (MEDIUM) - Replace (30)
// =========================
bank.Reasoning.medium = [];
bank.Reasoning.medium.push(

  { q:"Series: 3, 8, 15, 24, 35, ?", options:["46","48","49","50"], ans:2 },
  { q:"Series: 2, 6, 12, 20, 30, ?", options:["40","41","42","44"], ans:2 },
  { q:"Series: 1, 4, 9, 16, 25, ?", options:["30","36","40","49"], ans:1 },
  { q:"Series: 5, 11, 19, 29, 41, ?", options:["50","52","55","57"], ans:1 },
  { q:"Series: 7, 14, 28, 56, ?", options:["84","98","112","120"], ans:2 },

  { q:"Odd one out: 3, 5, 11, 14", options:["3","5","11","14"], ans:3 },
  { q:"Odd one out: 12, 18, 24, 30, 36, 40", options:["12","18","24","30","36","40"], ans:5 },
  { q:"Odd one out: 2, 3, 5, 7, 11, 15", options:["2","3","5","7","11","15"], ans:5 },
  { q:"Odd one out: 121, 144, 169, 196", options:["121","144","169","196"], ans:3 },
  { q:"Odd one out: 8, 27, 64, 100", options:["8","27","64","100"], ans:3 },

  { q:"Coding: If CAT = DBU then DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Coding: If PEN = QFO then INK = ?", options:["JOL","JML","JNK","JNL"], ans:0 },
  { q:"Coding: If MAN = NBO then SUN = ?", options:["TVO","TVP","UVP","TWP"], ans:1 },
  { q:"If 15 is coded as 51, 29 as 92 then 37 as?", options:["73","74","83","93"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },

  { q:"Blood relation: A is father of B, B is sister of C. A is C's?", options:["Father","Uncle","Brother","Cousin"], ans:0 },
  { q:"P is sister of Q, Q is mother of R. P is R's?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"X is brother of Y, Y is mother of Z. X is Z's?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },
  { q:"A is mother of B, B is brother of C. A is C's?", options:["Mother","Aunt","Sister","Grandmother"], ans:0 },
  { q:"M is brother of N, N is father of P. M is P's?", options:["Uncle","Father","Brother","Grandfather"], ans:0 },

  { q:"Direction: 4 km East, 3 km North. Distance?", options:["5","6","7","8"], ans:0 },
  { q:"Direction: 6 km West, 8 km North. Distance?", options:["10","12","14","16"], ans:0 },
  { q:"A walks 10m N, 5m E, 10m S. Distance?", options:["0","5","10","15"], ans:1 },
  { q:"A walks 12m E, 5m N. Distance?", options:["13","14","15","16"], ans:0 },
  { q:"A walks 7m E, 24m N. Distance?", options:["23","24","25","26"], ans:2 },

  { q:"Alphabet series: A, C, F, J, O, ?", options:["U","V","W","X"], ans:2 },
  { q:"Alphabet series: Z, X, U, Q, L, ?", options:["H","I","J","K"], ans:0 },
  { q:"Which comes next: 1A, 4D, 9I, 16P, ?", options:["20T","25Y","25Z","36Z"], ans:1 },
  { q:"Which comes next: AB, EFG, IJKLM, ?", options:["NOP","NOPQR","NOPQRS","NOPQRST"], ans:3 },
  { q:"Which comes next: 2B, 6F, 12L, 20T, ?", options:["30D","30B","30Z","30F"], ans:2 },

  { q:"Syllogism: All A are B. Some B are C. Conclusion?", options:["Some A are C","All C are A","No C is A","None follows"], ans:3 },
  { q:"Syllogism: All pens are tools. Some tools are books. Conclusion?", options:["Some pens books","All pens books","No pen book","None follows"], ans:3 },
  { q:"Syllogism: All fruits are sweet. Mango is a fruit. Conclusion?", options:["Mango is sweet","Mango not sweet","No conclusion","None"], ans:0 },
  { q:"Syllogism: All cats are animals. Some animals are dogs. Conclusion?", options:["Some cats dogs","All dogs cats","None","Some dogs cats"], ans:2 },
  { q:"Syllogism: Some students are players. All players are fit. Conclusion?", options:["Some students fit","All students fit","No student fit","None"], ans:0 }

);


// =========================
// SSC REASONING (HARD) - Replace (30)
// =========================
bank.Reasoning.hard = [];
bank.Reasoning.hard.push(

  { q:"Series: 1, 2, 6, 24, 120, ?", options:["240","360","720","840"], ans:2 },
  { q:"Series: 2, 3, 5, 9, 17, ?", options:["25","33","34","35"], ans:2 },
  { q:"Series: 4, 9, 19, 39, 79, ?", options:["139","149","159","169"], ans:1 },
  { q:"Series: 3, 8, 18, 38, 78, ?", options:["138","148","158","168"], ans:1 },
  { q:"Series: 7, 16, 34, 70, ?", options:["140","142","144","146"], ans:1 },

  { q:"Missing: 5, 12, 26, 54, ?", options:["98","108","110","112"], ans:1 },
  { q:"Missing: 2, 5, 11, 23, ?", options:["45","46","47","48"], ans:2 },
  { q:"Missing: 6, 13, 27, 55, ?", options:["101","111","113","115"], ans:1 },
  { q:"Missing: 9, 21, 45, 93, ?", options:["165","177","189","201"], ans:1 },
  { q:"Missing: 10, 22, 46, 94, ?", options:["178","186","190","198"], ans:0 },

  { q:"Coding: If SOUTH = TQVUI then NORTH = ?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"Coding: If INDIA = JOEJB then CHINA = ?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If 579 is coded as 6810 then 468 coded as?", options:["579","5799","5710","5790"], ans:0 },
  { q:"If 123 coded as 234 then 789 coded as?", options:["8910","890","891","91011"], ans:2 },
  { q:"If 357 coded as 468 then 246 coded as?", options:["135","246","357","468"], ans:0 },

  { q:"Ranking: In a row of 15, A is 7th from left. Position from right?", options:["7","8","9","10"], ans:1 },
  { q:"In a row of 20, P is 5th from left and Q is 12th from left. Q is?", options:["7 right of P","7 left of P","6 right","6 left"], ans:0 },
  { q:"In a row of 10, A is 3rd from left and B is 4th from right. Relation?", options:["A left of B","A right of B","Same","Cannot say"], ans:2 },
  { q:"In a row of 8, R is 4th from left and S is 3rd from right. Relation?", options:["R left of S","R right of S","Same","Cannot say"], ans:0 },
  { q:"In a row of 12, M is 6th from left and N is 2nd from left. N is?", options:["4 left of M","4 right of M","Same","Cannot say"], ans:0 },

  { q:"Clock: 3:15 पर minute hand और hour hand के बीच कोण?", options:["0°","7.5°","15°","22.5°"], ans:1 },
  { q:"Clock: 6:30 पर कोण?", options:["0°","15°","30°","45°"], ans:1 },
  { q:"Clock: 9:20 पर कोण?", options:["110°","120°","130°","140°"], ans:0 },
  { q:"Clock: 2:40 पर कोण?", options:["90°","100°","110°","120°"], ans:1 },
  { q:"Clock: 5:10 पर कोण?", options:["90°","95°","100°","105°"], ans:3 },

  { q:"Syllogism: Some A are B. All B are C. Conclusion?", options:["Some A are C","All A are C","No A is C","None"], ans:0 },
  { q:"Syllogism: All A are B. No B is C. Conclusion?", options:["No A is C","Some A are C","All C are A","None"], ans:0 },
  { q:"Syllogism: Some students are smart. All smart are successful. Conclusion?", options:["Some students successful","All students successful","None","No student successful"], ans:0 },
  { q:"Syllogism: All pens are blue. Some blue are costly. Conclusion?", options:["Some pens costly","All pens costly","None","No pens costly"], ans:2 },
  { q:"Syllogism: Some books are pens. All pens are tools. Conclusion?", options:["Some books tools","All books tools","None","No books tools"], ans:0 },

  { q:"Non-verbal: Mirror image of 'AMB' in mirror?", options:["BMA","MBA","AMB","ABM"], ans:0 },
  { q:"Paper folding: A paper folded twice then hole made. How many holes?", options:["2","4","6","8"], ans:3 },
  { q:"Dice: Opposite of 1 is 6. Opposite of 2 is?", options:["3","4","5","6"], ans:2 },
  { q:"Venn: Doctors, Teachers, Humans. Best diagram?", options:["All inside Humans","Separate","None","Random"], ans:0 },
  { q:"Series: A1, C3, F6, J10, ?", options:["O15","N14","P16","Q17"], ans:1 }

);


// English
// =========================
// SSC ENGLISH (MEDIUM) - Replace (30)
// =========================
bank.English.medium = [];
bank.English.medium.push(

  { q:"Choose correct: He is good ___ Mathematics.", options:["in","at","on","for"], ans:1 },
  { q:"Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"Choose correct: She is married ___ him.", options:["with","to","by","on"], ans:1 },

  { q:"Correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },
  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },
  { q:"Synonym of QUICK?", options:["Fast","Slow","Weak","Cold"], ans:0 },

  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },

  { q:"Correct passive: 'They made a plan.'", options:["A plan made","A plan was made","Plan is made","Plan made"], ans:1 },
  { q:"Correct passive: 'He writes a letter.'", options:["A letter is written by him","A letter was written","A letter written","Letter is wrote"], ans:0 },
  { q:"Correct passive: 'She cooks food.'", options:["Food cooked","Food is cooked","Food was cooked","Food is cook"], ans:1 },
  { q:"Correct passive: 'They help me.'", options:["I am helped by them","I helped by them","I was help by them","I is helped"], ans:0 },
  { q:"Correct passive: 'We play cricket.'", options:["Cricket played","Cricket is played","Cricket was play","Cricket is play"], ans:1 },

  { q:"One word: One who loves books", options:["Bibliophile","Philosopher","Librarian","Editor"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Optimist","Philanthropist","Pessimist"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: One who can do many works", options:["Versatile","Lazy","Weak","Slow"], ans:0 },

  { q:"Spot error: He do not like tea.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 }

);


// =========================
// SSC ENGLISH (HARD) - Replace (30)
// =========================
bank.English.hard = [];
bank.English.hard.push(

  { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'abandon'?", options:["leave","eat","run","build"], ans:0 },
  { q:"Meaning of 'transparent'?", options:["clear","dirty","heavy","weak"], ans:0 },
  { q:"Meaning of 'persistent'?", options:["continuous","lazy","weak","slow"], ans:0 },
  { q:"Meaning of 'fragile'?", options:["strong","breakable","heavy","fast"], ans:1 },

  { q:"Choose correct: If I ___ rich, I would help you.", options:["am","was","were","be"], ans:2 },
  { q:"Choose correct: He said that he ___ busy.", options:["is","was","were","be"], ans:1 },
  { q:"Choose correct: I wish I ___ a car.", options:["have","had","has","having"], ans:1 },
  { q:"Choose correct: It is time we ___ home.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: She suggested that he ___ rest.", options:["take","takes","took","taken"], ans:0 },

  { q:"Choose correct: No sooner ___ I reached than it started raining.", options:["had","have","has","was"], ans:0 },
  { q:"Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 },
  { q:"Choose correct: She is interested ___ music.", options:["on","in","at","by"], ans:1 },

  { q:"Idioms: 'Break the ice' means?", options:["Start conversation","Stop work","Make noise","Run away"], ans:0 },
  { q:"Idioms: 'Once in a blue moon' means?", options:["Often","Rarely","Daily","Never"], ans:1 },
  { q:"Idioms: 'A blessing in disguise' means?", options:["Hidden good thing","Bad luck","Anger","Loss"], ans:0 },
  { q:"Idioms: 'Hit the nail on the head' means?", options:["Exact point","Wrong answer","Anger","Fight"], ans:0 },
  { q:"Idioms: 'Bite the bullet' means?", options:["Face difficulty","Eat food","Cry","Sleep"], ans:0 },

  { q:"One word: Study of birds", options:["Ornithology","Zoology","Botany","Geology"], ans:0 },
  { q:"One word: Study of plants", options:["Botany","Zoology","Physics","Chemistry"], ans:0 },
  { q:"One word: A government by the people", options:["Democracy","Monarchy","Oligarchy","Dictatorship"], ans:0 },
  { q:"One word: A person who walks in sleep", options:["Somnambulist","Insomniac","Philanthropist","Optimist"], ans:0 },
  { q:"One word: A person who is unable to pay debts", options:["Insolvent","Immigrant","Patient","Pedestrian"], ans:0 },

  { q:"Spot error: Neither of the boys are guilty.", options:["Neither","of the boys","are","guilty"], ans:2 },
  { q:"Spot error: Each of the students have a book.", options:["Each","of the students","have","a book"], ans:2 },
  { q:"Spot error: He is one of the boy who play cricket.", options:["He","is one","of the boy","who play"], ans:2 },
  { q:"Spot error: The teacher as well as the students are present.", options:["The teacher","as well as","the students","are present"], ans:3 },
  { q:"Spot error: One of my friend live in Delhi.", options:["One","of my friend","live","in Delhi"], ans:1 },

  { q:"Sentence improvement: He did not knew the answer.", options:["know","knew","known","knowing"], ans:0 },
  { q:"Sentence improvement: She is more smarter than me.", options:["smarter","smart","more smart","smartest"], ans:0 },
  { q:"Sentence improvement: I prefer tea than coffee.", options:["to","than","from","by"], ans:0 },
  { q:"Sentence improvement: He is senior than me.", options:["to","than","from","by"], ans:0 },
  { q:"Sentence improvement: No sooner I reached than it started raining.", options:["had I reached","have I reached","I had reached","I have reached"], ans:0 }

);

// =========================
/// =========================
// RAILWAY GK (MEDIUM + HARD) — 100 Q
// =========================

// GK MEDIUM (50)
bank.GK.medium.push(
  { q:"Railway GK Medium Q1: भारत का पहला गवर्नर जनरल (भारत) कौन था?", options:["Warren Hastings","Lord Dalhousie","Lord Curzon","William Bentinck"], ans:0 },
  { q:"Railway GK Medium Q2: संविधान सभा की पहली बैठक कब हुई?", options:["9 Dec 1946","15 Aug 1947","26 Jan 1950","22 July 1947"], ans:0 },
  { q:"Railway GK Medium Q3: भारतीय संविधान लागू कब हुआ?", options:["15 Aug 1947","26 Jan 1950","2 Oct 1949","26 Nov 1949"], ans:1 },
  { q:"Railway GK Medium Q4: योजना आयोग की स्थापना कब हुई थी?", options:["1950","1951","1947","1965"], ans:0 },
  { q:"Railway GK Medium Q5: पंचायती राज व्यवस्था को संवैधानिक दर्जा किस संशोधन से मिला?", options:["42nd","73rd","74th","44th"], ans:1 },

  { q:"Railway GK Medium Q6: भारत का सबसे बड़ा राज्य (जनसंख्या) कौन सा है?", options:["Maharashtra","Uttar Pradesh","Bihar","West Bengal"], ans:1 },
  { q:"Railway GK Medium Q7: भारत का सबसे लंबा बांध कौन सा है?", options:["Hirakud","Bhakra Nangal","Tehri","Nagarjuna Sagar"], ans:0 },
  { q:"Railway GK Medium Q8: भारत का सबसे ऊँचा जलप्रपात (भारत में) कौन सा माना जाता है?", options:["Jog Falls","Kunchikal Falls","Dudhsagar Falls","Athirappilly Falls"], ans:1 },
  { q:"Railway GK Medium Q9: काजीरंगा राष्ट्रीय उद्यान किस राज्य में है?", options:["Assam","West Bengal","Odisha","Madhya Pradesh"], ans:0 },
  { q:"Railway GK Medium Q10: साइलेंट वैली राष्ट्रीय उद्यान किस राज्य में है?", options:["Kerala","Tamil Nadu","Karnataka","Goa"], ans:0 },

  { q:"Railway GK Medium Q11: 'ब्लू रिवोल्यूशन' किससे संबंधित है?", options:["दूध उत्पादन","मछली उत्पादन","अनाज उत्पादन","तेल उत्पादन"], ans:1 },
  { q:"Railway GK Medium Q12: 'ऑपरेशन फ्लड' किससे संबंधित है?", options:["हरित क्रांति","दूध उत्पादन","उर्वरक","जल संरक्षण"], ans:1 },
  { q:"Railway GK Medium Q13: भारत का पहला परमाणु परीक्षण (Smiling Buddha) कहाँ हुआ?", options:["Pokhran","Tarapur","Kalpakkam","Kudankulam"], ans:0 },
  { q:"Railway GK Medium Q14: भारत का पहला अंतरिक्ष यात्री कौन था?", options:["Rakesh Sharma","Kalpana Chawla","Vikram Sarabhai","APJ Abdul Kalam"], ans:0 },
  { q:"Railway GK Medium Q15: 'मिसाइल मैन' किसे कहा जाता है?", options:["Homi Bhabha","Vikram Sarabhai","APJ Abdul Kalam","C V Raman"], ans:2 },

  { q:"Railway GK Medium Q16: भारत का पहला बायोस्फीयर रिजर्व कौन सा था?", options:["Nilgiri","Sundarbans","Nanda Devi","Gulf of Mannar"], ans:0 },
  { q:"Railway GK Medium Q17: UNESCO का मुख्यालय कहाँ है?", options:["Paris","Geneva","New York","London"], ans:0 },
  { q:"Railway GK Medium Q18: विश्व स्वास्थ्य संगठन (WHO) की स्थापना कब हुई?", options:["1945","1948","1950","1962"], ans:1 },
  { q:"Railway GK Medium Q19: SAARC की स्थापना कब हुई?", options:["1985","1991","1975","1969"], ans:0 },
  { q:"Railway GK Medium Q20: BRICS में भारत के अलावा कौन सा देश नहीं है?", options:["Brazil","Russia","Japan","South Africa"], ans:2 },

  { q:"Railway GK Medium Q21: भारत में 'शून्य बजट प्राकृतिक खेती' किस राज्य से लोकप्रिय हुई?", options:["Andhra Pradesh","Punjab","Gujarat","Bihar"], ans:0 },
  { q:"Railway GK Medium Q22: 'अमर जवान ज्योति' कहाँ स्थित है?", options:["India Gate","Red Fort","Rashtrapati Bhavan","Parliament"], ans:0 },
  { q:"Railway GK Medium Q23: 'जय जवान जय किसान' नारा किसने दिया?", options:["Lal Bahadur Shastri","Nehru","Indira Gandhi","Patel"], ans:0 },
  { q:"Railway GK Medium Q24: 'भारत छोड़ो आंदोलन' कब शुरू हुआ?", options:["1940","1942","1944","1939"], ans:1 },
  { q:"Railway GK Medium Q25: स्वदेशी आंदोलन किस वर्ष शुरू हुआ?", options:["1905","1919","1920","1930"], ans:0 },

  { q:"Railway GK Medium Q26: 1857 की क्रांति का प्रमुख केंद्र (अवध) कौन सा था?", options:["Meerut","Lucknow","Delhi","Kanpur"], ans:1 },
  { q:"Railway GK Medium Q27: 'अलीगढ़ आंदोलन' के जनक कौन थे?", options:["Sir Syed Ahmad Khan","Gandhi","Nehru","Tilak"], ans:0 },
  { q:"Railway GK Medium Q28: 'असहयोग आंदोलन' कब शुरू हुआ?", options:["1917","1920","1930","1942"], ans:1 },
  { q:"Railway GK Medium Q29: 'साइमन कमीशन' भारत कब आया?", options:["1927","1928","1929","1930"], ans:1 },
  { q:"Railway GK Medium Q30: 'दांडी मार्च' कब हुआ?", options:["1929","1930","1931","1932"], ans:1 },

  { q:"Railway GK Medium Q31: भारतीय संविधान में 'धर्मनिरपेक्ष' शब्द कब जोड़ा गया?", options:["42nd Amendment","44th Amendment","52nd Amendment","73rd Amendment"], ans:0 },
  { q:"Railway GK Medium Q32: भारत का सर्वोच्च न्यायालय कहाँ है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"Railway GK Medium Q33: भारतीय संसद का संयुक्त सत्र कौन बुलाता है?", options:["PM","President","Speaker","Vice President"], ans:1 },
  { q:"Railway GK Medium Q34: 'लोकसभा अध्यक्ष' का चुनाव कौन करता है?", options:["President","Lok Sabha members","Rajya Sabha","PM"], ans:1 },
  { q:"Railway GK Medium Q35: भारत का पहला लोकसभा अध्यक्ष कौन था?", options:["G V Mavalankar","Rajendra Prasad","Nehru","S Radhakrishnan"], ans:0 },

  { q:"Railway GK Medium Q36: भारत का पहला मुख्य चुनाव आयुक्त कौन था?", options:["Sukumar Sen","T N Seshan","N Gopalaswami","S Y Quraishi"], ans:0 },
  { q:"Railway GK Medium Q37: भारतीय संविधान का सबसे लंबा भाग कौन सा है?", options:["Part III","Part IV","Part V","Part XVIII"], ans:2 },
  { q:"Railway GK Medium Q38: भारतीय संविधान की प्रस्तावना किससे शुरू होती है?", options:["We, the People of India","India is a Sovereign","Government of India","None"], ans:0 },
  { q:"Railway GK Medium Q39: 'राज्य के नीति निर्देशक तत्व' किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },
  { q:"Railway GK Medium Q40: 'मौलिक अधिकार' किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },

  { q:"Railway GK Medium Q41: भारत में सबसे बड़ा उत्पादक राज्य (गेहूं) कौन है?", options:["Punjab","Uttar Pradesh","Haryana","Madhya Pradesh"], ans:1 },
  { q:"Railway GK Medium Q42: भारत में सबसे बड़ा उत्पादक राज्य (चावल) कौन है?", options:["West Bengal","Punjab","UP","Bihar"], ans:0 },
  { q:"Railway GK Medium Q43: 'कृष्णा नदी' कहाँ से निकलती है?", options:["Mahabaleshwar","Amarkantak","Gangotri","Trimbakeshwar"], ans:0 },
  { q:"Railway GK Medium Q44: 'नर्मदा नदी' का उद्गम कहाँ है?", options:["Amarkantak","Gangotri","Yamunotri","Sundarbans"], ans:0 },
  { q:"Railway GK Medium Q45: भारत का सबसे बड़ा खारे पानी का झील कौन सा है?", options:["Chilika","Wular","Dal","Loktak"], ans:0 },

  { q:"Railway GK Medium Q46: भारत का सबसे बड़ा मीठे पानी का झील कौन सा है?", options:["Wular","Chilika","Pulicat","Sambhar"], ans:0 },
  { q:"Railway GK Medium Q47: भारत में 'सांभर झील' किस राज्य में है?", options:["Rajasthan","Gujarat","MP","UP"], ans:0 },
  { q:"Railway GK Medium Q48: 'कुंभ मेला' कितने वर्षों में होता है?", options:["6","12","3","10"], ans:1 },
  { q:"Railway GK Medium Q49: 'हर घर तिरंगा' अभियान किससे संबंधित है?", options:["स्वास्थ्य","राष्ट्रध्वज","शिक्षा","खेल"], ans:1 },
  { q:"Railway GK Medium Q50: 'विटामिन D' की कमी से कौन सा रोग होता है?", options:["Scurvy","Rickets","Beriberi","Night blindness"], ans:1 }
);


// GK HARD (50)
bank.GK.hard.push(
  { q:"Railway GK Hard Q1: संविधान की आठवीं अनुसूची में कितनी भाषाएँ हैं (वर्तमान)?", options:["18","20","22","24"], ans:2 },
  { q:"Railway GK Hard Q2: 'भारत के नियंत्रक एवं महालेखा परीक्षक (CAG)' की नियुक्ति कौन करता है?", options:["PM","President","Chief Justice","Parliament"], ans:1 },
  { q:"Railway GK Hard Q3: भारतीय संविधान में 'संघीय व्यवस्था' का विचार मुख्यतः किस देश से लिया गया?", options:["UK","USA","Canada","France"], ans:2 },
  { q:"Railway GK Hard Q4: भारतीय संविधान में 'मौलिक कर्तव्य' किस देश से लिया गया?", options:["USA","Russia (USSR)","UK","Japan"], ans:1 },
  { q:"Railway GK Hard Q5: संविधान में 'वित्तीय आपातकाल' किस अनुच्छेद में है?", options:["352","356","360","368"], ans:2 },

  { q:"Railway GK Hard Q6: 'भारत के महान्यायवादी (Attorney General)' का उल्लेख किस अनुच्छेद में है?", options:["76","124","148","280"], ans:0 },
  { q:"Railway GK Hard Q7: राज्यसभा के सदस्यों का चुनाव किस प्रणाली से होता है?", options:["First Past the Post","Single Transferable Vote","Direct election","Nomination only"], ans:1 },
  { q:"Railway GK Hard Q8: राष्ट्रपति पर महाभियोग किस अनुच्छेद में है?", options:["61","72","74","76"], ans:0 },
  { q:"Railway GK Hard Q9: 'मनी बिल' को राज्यसभा कितने दिन रोक सकती है?", options:["7","14","30","60"], ans:1 },
  { q:"Railway GK Hard Q10: भारत में 'संविधान संशोधन' किस अनुच्छेद के तहत होता है?", options:["352","356","368","370"], ans:2 },

  { q:"Railway GK Hard Q11: 'स्वतंत्रता संग्राम' में 'फूट डालो और राज करो' नीति किसने अपनाई?", options:["Portuguese","British","French","Dutch"], ans:1 },
  { q:"Railway GK Hard Q12: 'इल्बर्ट बिल विवाद' किस वायसराय के समय हुआ?", options:["Ripon","Curzon","Dalhousie","Canning"], ans:0 },
  { q:"Railway GK Hard Q13: 'स्थायी बंदोबस्त' किसने लागू किया?", options:["Cornwallis","Warren Hastings","Curzon","Bentinck"], ans:0 },
  { q:"Railway GK Hard Q14: 'द्वैध शासन' किस अधिनियम से लागू हुआ?", options:["1909","1919","1935","1947"], ans:1 },
  { q:"Railway GK Hard Q15: 'क्रिप्स मिशन' भारत कब आया?", options:["1940","1942","1945","1939"], ans:1 },

  { q:"Railway GK Hard Q16: 'भारत का पहला समाचार पत्र' कौन सा था?", options:["Bengal Gazette","Kesari","Amrita Bazar Patrika","The Hindu"], ans:0 },
  { q:"Railway GK Hard Q17: 'स्वराज मेरा जन्मसिद्ध अधिकार है' किसका नारा था?", options:["Gandhi","Tilak","Nehru","Bose"], ans:1 },
  { q:"Railway GK Hard Q18: 'अखिल भारतीय किसान सभा' की स्थापना कब हुई?", options:["1936","1929","1942","1919"], ans:0 },
  { q:"Railway GK Hard Q19: 'भारतीय राष्ट्रीय कांग्रेस' की स्थापना किसने की?", options:["A O Hume","Gandhi","Tilak","Nehru"], ans:0 },
  { q:"Railway GK Hard Q20: 'होम रूल लीग' भारत में किसने शुरू की?", options:["Tilak & Annie Besant","Gandhi","Bose","Patel"], ans:0 },

  { q:"Railway GK Hard Q21: 'भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO)' की स्थापना कब हुई?", options:["1962","1969","1972","1980"], ans:1 },
  { q:"Railway GK Hard Q22: भारत का पहला साउंडिंग रॉकेट लॉन्च स्टेशन कहाँ था?", options:["Sriharikota","Thumba","Bengaluru","Hyderabad"], ans:1 },
  { q:"Railway GK Hard Q23: भारत का पहला परमाणु रिएक्टर 'अप्सरा' कब चालू हुआ?", options:["1956","1960","1964","1974"], ans:0 },
  { q:"Railway GK Hard Q24: भारत में पहला कंप्यूटर किस संस्थान में आया?", options:["IIT Delhi","ISI Kolkata","TIFR","IISc"], ans:1 },
  { q:"Railway GK Hard Q25: 'ब्लैक होल' सिद्धांत किससे संबंधित है?", options:["Chemistry","Astronomy","Botany","Geology"], ans:1 },

  { q:"Railway GK Hard Q26: 'माइक्रस' (MERS) किस प्रकार का रोग है?", options:["Bacterial","Viral","Fungal","Genetic"], ans:1 },
  { q:"Railway GK Hard Q27: DNA की संरचना का मॉडल किसने दिया?", options:["Newton","Watson & Crick","Einstein","Darwin"], ans:1 },
  { q:"Railway GK Hard Q28: मानव शरीर में सबसे बड़ी ग्रंथि कौन सी है?", options:["Pancreas","Liver","Thyroid","Kidney"], ans:1 },
  { q:"Railway GK Hard Q29: इंसुलिन हार्मोन किस ग्रंथि से निकलता है?", options:["Thyroid","Pancreas","Pituitary","Adrenal"], ans:1 },
  { q:"Railway GK Hard Q30: रक्त का pH लगभग कितना होता है?", options:["6.8","7.0","7.4","8.0"], ans:2 },

  { q:"Railway GK Hard Q31: भारत का सबसे बड़ा प्राकृतिक बंदरगाह कौन सा है?", options:["Chennai","Mumbai","Visakhapatnam","Kochi"], ans:1 },
  { q:"Railway GK Hard Q32: भारत का सबसे बड़ा कोयला क्षेत्र कौन सा है?", options:["Jharia","Raniganj","Bokaro","Singrauli"], ans:0 },
  { q:"Railway GK Hard Q33: 'दक्कन का पठार' मुख्यतः किस चट्टान से बना है?", options:["Sedimentary","Igneous","Metamorphic","All"], ans:1 },
  { q:"Railway GK Hard Q34: 'पश्चिमी घाट' की सर्वोच्च चोटी कौन सी है?", options:["Anamudi","Doddabetta","Mahendragiri","Agasthyamalai"], ans:0 },
  { q:"Railway GK Hard Q35: 'पूर्वी घाट' की सर्वोच्च चोटी कौन सी है?", options:["Mahendragiri","Anamudi","Doddabetta","K2"], ans:0 },

  { q:"Railway GK Hard Q36: 'कृष्णा-गोदावरी बेसिन' किस राज्य में अधिक है?", options:["Punjab","Andhra Pradesh","UP","Rajasthan"], ans:1 },
  { q:"Railway GK Hard Q37: 'सुंदरबन डेल्टा' किन नदियों से बना है?", options:["Ganga-Brahmaputra","Narmada-Tapti","Godavari-Krishna","Mahanadi-Brahmani"], ans:0 },
  { q:"Railway GK Hard Q38: 'थार मरुस्थल' मुख्यतः किस राज्य में है?", options:["Rajasthan","Gujarat","Haryana","MP"], ans:0 },
  { q:"Railway GK Hard Q39: भारत की सबसे लंबी नदी जो पूरी तरह भारत में बहती है?", options:["Ganga","Godavari","Brahmaputra","Yamuna"], ans:1 },
  { q:"Railway GK Hard Q40: 'कावेरी नदी' का उद्गम कहाँ है?", options:["Talakaveri","Amarkantak","Gangotri","Mahabaleshwar"], ans:0 },

  { q:"Railway GK Hard Q41: भारतीय रेलवे का पहला जोन कौन सा था?", options:["Northern","Southern","Eastern","Central"], ans:2 },
  { q:"Railway GK Hard Q42: भारतीय रेलवे में सबसे बड़ा जोन (रूट km के हिसाब से) कौन सा है?", options:["Northern Railway","Western Railway","Central Railway","Eastern Railway"], ans:0 },
  { q:"Railway GK Hard Q43: 'Konkan Railway' किस वर्ष शुरू हुई?", options:["1990","1992","1998","2000"], ans:2 },
  { q:"Railway GK Hard Q44: भारत में पहली इलेक्ट्रिक ट्रेन कहाँ चली थी?", options:["Mumbai CST-Kurla","Mumbai VT-Thane","Delhi-Agra","Kolkata-Howrah"], ans:0 },
  { q:"Railway GK Hard Q45: IRCTC की स्थापना कब हुई?", options:["1997","1999","2000","2002"], ans:2 },

  { q:"Railway GK Hard Q46: रेलवे में 'WAP-7' किस प्रकार का लोको है?", options:["Diesel goods","Electric passenger","Electric goods","Diesel passenger"], ans:1 },
  { q:"Railway GK Hard Q47: रेलवे में 'WAG-9' किस प्रकार का लोको है?", options:["Diesel passenger","Electric goods","Metro coach","Diesel goods"], ans:1 },
  { q:"Railway GK Hard Q48: 'LHB coaches' मूल रूप से किस देश के डिजाइन पर आधारित हैं?", options:["Germany","Japan","USA","France"], ans:0 },
  { q:"Railway GK Hard Q49: 'वंदे भारत ट्रेन' किस प्रकार की ट्रेन है?", options:["Diesel","Semi-high speed electric","Steam","Metro"], ans:1 },
  { q:"Railway GK Hard Q50: रेलवे का motto 'Lifeline of the Nation' किससे जुड़ा है?", options:["Indian Railways","IRCTC","RPF","Metro Rail"], ans:0 }
);
// =========================
// RAILWAY MATH (MEDIUM + HARD) — 100 Q
// =========================

// MATH MEDIUM (50)
bank.Math.medium.push(
  { q:"Railway Math Medium Q1: SI on ₹2400 at 7.5% for 2 years = ?", options:["₹340","₹360","₹375","₹390"], ans:2 },
  { q:"Railway Math Medium Q2: SI on ₹5000 at 6% for 3 years = ?", options:["₹800","₹850","₹900","₹950"], ans:2 },
  { q:"Railway Math Medium Q3: SI on ₹3200 at 5% for 4 years = ?", options:["₹600","₹640","₹700","₹720"], ans:1 },
  { q:"Railway Math Medium Q4: SI on ₹1800 at 8% for 2.5 years = ?", options:["₹320","₹340","₹360","₹380"], ans:2 },
  { q:"Railway Math Medium Q5: SI on ₹7500 at 4% for 2 years = ?", options:["₹500","₹550","₹600","₹650"], ans:2 },

  { q:"Railway Math Medium Q6: CP=₹1200, Profit=15% then SP=?", options:["₹1350","₹1370","₹1380","₹1400"], ans:2 },
  { q:"Railway Math Medium Q7: CP=₹2000, Loss=12% then SP=?", options:["₹1700","₹1760","₹1780","₹1800"], ans:1 },
  { q:"Railway Math Medium Q8: SP=₹1840, Profit=15% then CP=?", options:["₹1500","₹1600","₹1650","₹1700"], ans:1 },
  { q:"Railway Math Medium Q9: SP=₹1530, Loss=10% then CP=?", options:["₹1600","₹1650","₹1700","₹1750"], ans:2 },
  { q:"Railway Math Medium Q10: Marked Price=₹2500, Discount=12% then SP=?", options:["₹2150","₹2200","₹2250","₹2300"], ans:1 },

  { q:"Railway Math Medium Q11: A can do work in 20 days, B in 30 days. Together time=?", options:["10 days","12 days","15 days","18 days"], ans:1 },
  { q:"Railway Math Medium Q12: A in 18 days, B in 24 days. Together time=?", options:["9.6","10","10.3","12"], ans:0 },
  { q:"Railway Math Medium Q13: A in 12 days, B in 16 days. Together time=?", options:["6.5","6.8","7.0","7.5"], ans:1 },
  { q:"Railway Math Medium Q14: A in 15 days, B in 25 days. Together time=?", options:["8.5","9.0","9.375","10"], ans:2 },
  { q:"Railway Math Medium Q15: A in 10 days, B in 40 days. Together time=?", options:["7.5","8","9","10"], ans:0 },

  { q:"Railway Math Medium Q16: If x% of 480 = 144 then x=?", options:["25","30","35","40"], ans:1 },
  { q:"Railway Math Medium Q17: If 18% of a number = 72 then number=?", options:["360","380","400","420"], ans:2 },
  { q:"Railway Math Medium Q18: If 12.5% of a number = 50 then number=?", options:["350","380","400","420"], ans:2 },
  { q:"Railway Math Medium Q19: If 35% of a number = 245 then number=?", options:["600","650","700","750"], ans:2 },
  { q:"Railway Math Medium Q20: If 7% of a number = 63 then number=?", options:["800","850","900","950"], ans:2 },

  { q:"Railway Math Medium Q21: Ratio 5:7, sum=144. Bigger number=?", options:["80","84","90","96"], ans:1 },
  { q:"Railway Math Medium Q22: Ratio 3:8, sum=165. Smaller number=?", options:["40","45","50","55"], ans:1 },
  { q:"Railway Math Medium Q23: Ratio 7:9, sum=320. Smaller number=?", options:["120","130","140","150"], ans:2 },
  { q:"Railway Math Medium Q24: Ratio 4:11, sum=225. Bigger number=?", options:["150","165","175","180"], ans:1 },
  { q:"Railway Math Medium Q25: Ratio 9:13, sum=352. Bigger number=?", options:["200","208","216","224"], ans:1 },

  { q:"Railway Math Medium Q26: Average of 18, 24, 30, 36, 42 = ?", options:["28","30","32","34"], ans:1 },
  { q:"Railway Math Medium Q27: Average of 11, 17, 23, 29 = ?", options:["18","19","20","21"], ans:2 },
  { q:"Railway Math Medium Q28: Average of 25, 35, 45 = ?", options:["33","35","37","40"], ans:1 },
  { q:"Railway Math Medium Q29: Average of 14 numbers is 26. Sum=?", options:["340","350","360","364"], ans:3 },
  { q:"Railway Math Medium Q30: Sum of 12 numbers is 420. Average=?", options:["32","34","35","36"], ans:2 },

  { q:"Railway Math Medium Q31: Speed=54 km/h, time=1.5 h. Distance=?", options:["72","78","81","84"], ans:2 },
  { q:"Railway Math Medium Q32: Distance=210 km, speed=70 km/h. Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Railway Math Medium Q33: Speed=45 km/h, distance=135 km. Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Railway Math Medium Q34: Speed=60 km/h, distance=150 km. Time=?", options:["2h","2.5h","3h","3.5h"], ans:1 },
  { q:"Railway Math Medium Q35: Speed=72 km/h, time=2h 30m. Distance=?", options:["160","170","180","190"], ans:2 },

  { q:"Railway Math Medium Q36: 2 pipes fill tank in 12h and 18h. Together time=?", options:["6.5h","7.2h","8h","9h"], ans:1 },
  { q:"Railway Math Medium Q37: A fills in 8h, B empties in 24h. Net time=?", options:["9.6h","10h","12h","14h"], ans:0 },
  { q:"Railway Math Medium Q38: A fills in 15h, B fills in 20h. Together time=?", options:["8.5h","8.57h","9h","10h"], ans:1 },
  { q:"Railway Math Medium Q39: A fills in 10h, outlet empties in 30h. Net time=?", options:["12h","15h","18h","20h"], ans:1 },
  { q:"Railway Math Medium Q40: A fills in 6h, B fills in 8h. Together time=?", options:["3.2h","3.43h","4h","4.8h"], ans:1 },

  { q:"Railway Math Medium Q41: If 3x+7=46 then x=?", options:["11","12","13","14"], ans:1 },
  { q:"Railway Math Medium Q42: If 5x-9=66 then x=?", options:["13","14","15","16"], ans:2 },
  { q:"Railway Math Medium Q43: If 7x+4=95 then x=?", options:["12","13","14","15"], ans:1 },
  { q:"Railway Math Medium Q44: If x/6=9 then x=?", options:["48","50","52","54"], ans:3 },
  { q:"Railway Math Medium Q45: If 4x-11=85 then x=?", options:["22","23","24","25"], ans:2 },

  { q:"Railway Math Medium Q46: 30% of a number is 180. Number=?", options:["500","550","600","650"], ans:2 },
  { q:"Railway Math Medium Q47: 16% of a number is 96. Number=?", options:["500","550","600","650"], ans:2 },
  { q:"Railway Math Medium Q48: 45% of a number is 270. Number=?", options:["500","550","600","650"], ans:2 },
  { q:"Railway Math Medium Q49: 12% of a number is 144. Number=?", options:["1000","1100","1200","1300"], ans:2 },
  { q:"Railway Math Medium Q50: 8% of a number is 64. Number=?", options:["700","750","800","850"], ans:2 }
);


// MATH HARD (50)
bank.Math.hard.push(
  { q:"Railway Math Hard Q1: CI on ₹4000 at 10% for 2 years. Amount=?", options:["₹4400","₹4800","₹4840","₹5000"], ans:2 },
  { q:"Railway Math Hard Q2: CI on ₹8000 at 12% for 2 years. Amount=?", options:["₹9600","₹10035.2","₹10240","₹10500"], ans:1 },
  { q:"Railway Math Hard Q3: CI on ₹5000 at 8% for 3 years. Amount=?", options:["₹6240","₹6298.56","₹6300","₹6400"], ans:1 },
  { q:"Railway Math Hard Q4: CI on ₹10000 at 5% for 2 years. Amount=?", options:["₹10500","₹11000","₹11025","₹11250"], ans:2 },
  { q:"Railway Math Hard Q5: CI on ₹2000 at 15% for 2 years. Amount=?", options:["₹2600","₹2645","₹2645","₹2700"], ans:1 },

  { q:"Railway Math Hard Q6: Train 72 km/h crosses 180m pole in 9 sec. Length=?", options:["0m","100m","150m","180m"], ans:2 },
  { q:"Railway Math Hard Q7: Train 90 km/h crosses 240m platform in 18 sec. Length=?", options:["150m","180m","210m","240m"], ans:2 },
  { q:"Railway Math Hard Q8: Train 54 km/h crosses 150m pole in 12 sec. Length=?", options:["20m","30m","40m","50m"], ans:2 },
  { q:"Railway Math Hard Q9: Train 108 km/h crosses 330m platform in 22 sec. Length=?", options:["250m","300m","330m","360m"], ans:1 },
  { q:"Railway Math Hard Q10: Train 60 km/h crosses 200m platform in 15 sec. Length=?", options:["30m","40m","50m","60m"], ans:2 },

  { q:"Railway Math Hard Q11: A fills in 12h, B empties in 18h. Net time=?", options:["24h","30h","36h","40h"], ans:2 },
  { q:"Railway Math Hard Q12: A fills in 10h, B fills in 15h, outlet empties in 30h. Net time=?", options:["6h","7.5h","8h","9h"], ans:1 },
  { q:"Railway Math Hard Q13: A fills in 8h, B fills in 12h. Both together fill in=?", options:["4.8h","5h","6h","7h"], ans:0 },
  { q:"Railway Math Hard Q14: A fills in 6h, B fills in 9h. Together time=?", options:["3h","3.6h","4h","4.5h"], ans:1 },
  { q:"Railway Math Hard Q15: A fills in 15h, B empties in 20h. Net time=?", options:["50h","60h","75h","100h"], ans:2 },

  { q:"Railway Math Hard Q16: A does work in 18 days, B in 12 days. Together time=?", options:["7.2","8","9","10"], ans:0 },
  { q:"Railway Math Hard Q17: A in 20 days, B in 25 days. Together time=?", options:["10","11.11","12.5","15"], ans:1 },
  { q:"Railway Math Hard Q18: A in 24 days, B in 16 days. Together time=?", options:["9.6","10","11","12"], ans:0 },
  { q:"Railway Math Hard Q19: A in 30 days, B in 20 days. Together time=?", options:["10","12","15","18"], ans:0 },
  { q:"Railway Math Hard Q20: A in 12 days, B in 8 days. Together time=?", options:["4.8","5","6","7"], ans:0 },

  { q:"Railway Math Hard Q21: If x+y=50 and x-y=14 then x=?", options:["30","31","32","33"], ans:2 },
  { q:"Railway Math Hard Q22: If 7x-13=120 then x=?", options:["17","18","19","20"], ans:2 },
  { q:"Railway Math Hard Q23: If 9x+11=200 then x=?", options:["19","20","21","22"], ans:1 },
  { q:"Railway Math Hard Q24: If x/4 + 9 = 25 then x=?", options:["56","60","64","68"], ans:2 },
  { q:"Railway Math Hard Q25: If 5x-17=133 then x=?", options:["28","29","30","31"], ans:1 },

  { q:"Railway Math Hard Q26: A mixture has milk:water = 7:3. In 20L, milk=?", options:["12L","14L","15L","16L"], ans:1 },
  { q:"Railway Math Hard Q27: A mixture has alcohol:water = 3:5. In 40L, alcohol=?", options:["12L","15L","18L","20L"], ans:2 },
  { q:"Railway Math Hard Q28: A mixture 60L with ratio 5:7. First part=?", options:["20","24","25","30"], ans:3 },
  { q:"Railway Math Hard Q29: Sugar:water=2:9. Total 55L. Sugar=?", options:["8","10","11","12"], ans:2 },
  { q:"Railway Math Hard Q30: Tea:sugar=9:1. Total 50 kg. Sugar=?", options:["4","5","6","7"], ans:1 },

  { q:"Railway Math Hard Q31: Marked price ₹2400, discount 15% then SP=?", options:["₹1980","₹2040","₹2100","₹2160"], ans:1 },
  { q:"Railway Math Hard Q32: MP ₹1800, discount 20% then SP=?", options:["₹1300","₹1350","₹1440","₹1500"], ans:2 },
  { q:"Railway Math Hard Q33: MP ₹3500, discount 12% then SP=?", options:["₹3000","₹3080","₹3100","₹3150"], ans:1 },
  { q:"Railway Math Hard Q34: MP ₹1600, discount 25% then SP=?", options:["₹1100","₹1150","₹1200","₹1250"], ans:2 },
  { q:"Railway Math Hard Q35: MP ₹5000, discount 18% then SP=?", options:["₹3900","₹4000","₹4100","₹4200"], ans:1 },

  { q:"Railway Math Hard Q36: A sells at 20% profit. If SP=₹1440, CP=?", options:["₹1100","₹1150","₹1200","₹1250"], ans:2 },
  { q:"Railway Math Hard Q37: A sells at 25% loss. If SP=₹1500, CP=?", options:["₹1800","₹1900","₹2000","₹2100"], ans:2 },
  { q:"Railway Math Hard Q38: CP=₹1800, SP=₹2160. Profit%=?", options:["15%","18%","20%","25%"], ans:2 },
  { q:"Railway Math Hard Q39: CP=₹2400, SP=₹2040. Loss%=?", options:["10%","12%","15%","18%"], ans:3 },
  { q:"Railway Math Hard Q40: CP=₹1250, Profit=28% then SP=?", options:["₹1500","₹1550","₹1600","₹1650"], ans:2 },

  { q:"Railway Math Hard Q41: A can row 12 km downstream in 1h, upstream in 2h. Speed of stream?", options:["3 km/h","4 km/h","5 km/h","6 km/h"], ans:1 },
  { q:"Railway Math Hard Q42: A train covers 300m in 15 sec. Speed=?", options:["60 km/h","72 km/h","80 km/h","90 km/h"], ans:1 },
  { q:"Railway Math Hard Q43: A train covers 450m in 18 sec. Speed=?", options:["80 km/h","85 km/h","90 km/h","100 km/h"], ans:2 },
  { q:"Railway Math Hard Q44: A man walks 15 km in 3 hours. Speed=?", options:["4","5","6","7"], ans:1 },
  { q:"Railway Math Hard Q45: Speed increases by 25%. Time becomes?", options:["Decreases by 20%","Decreases by 25%","Increases by 20%","Increases by 25%"], ans:0 },

  { q:"Railway Math Hard Q46: A shopkeeper mixes 30L milk with 10L water. Gain% if sold at CP?", options:["20%","25%","33.33%","40%"], ans:2 },
  { q:"Railway Math Hard Q47: If 40% of a number = 280 then number=?", options:["600","650","700","750"], ans:2 },
  { q:"Railway Math Hard Q48: If 7/9 of a number = 140 then number=?", options:["160","170","180","190"], ans:2 },
  { q:"Railway Math Hard Q49: If 3/5 of a number = 96 then number=?", options:["150","155","160","165"], ans:2 },
  { q:"Railway Math Hard Q50: If 0.25 of a number = 75 then number=?", options:["250","275","300","325"], ans:2 }
);
// =========================
// RAILWAY REASONING + ENGLISH (MEDIUM + HARD) — 100 Q
// =========================


// =========================
// REASONING MEDIUM (35)
// =========================
bank.Reasoning.medium.push(
  { q:"Railway Reasoning Medium Q1: Find next: 13, 17, 21, 25, ?", options:["27","29","31","33"], ans:1 },
  { q:"Railway Reasoning Medium Q2: Find next: 4, 9, 19, 39, ?", options:["59","69","79","89"], ans:1 },
  { q:"Railway Reasoning Medium Q3: Find next: 2, 7, 17, 32, ?", options:["47","52","57","62"], ans:1 },
  { q:"Railway Reasoning Medium Q4: Find next: 1, 2, 6, 24, ?", options:["48","72","96","120"], ans:2 },
  { q:"Railway Reasoning Medium Q5: Find next: 3, 5, 9, 17, ?", options:["25","31","33","35"], ans:1 },

  { q:"Railway Reasoning Medium Q6: Odd one out: 12, 18, 24, 27", options:["12","18","24","27"], ans:3 },
  { q:"Railway Reasoning Medium Q7: Odd one out: 121, 144, 169, 196", options:["121","144","169","196"], ans:0 },
  { q:"Railway Reasoning Medium Q8: Odd one out: Apple, Mango, Banana, Tomato", options:["Apple","Mango","Banana","Tomato"], ans:3 },
  { q:"Railway Reasoning Medium Q9: Odd one out: 5, 10, 20, 45", options:["5","10","20","45"], ans:3 },
  { q:"Railway Reasoning Medium Q10: Odd one out: Circle, Sphere, Cube, Triangle", options:["Circle","Sphere","Cube","Triangle"], ans:3 },

  { q:"Railway Reasoning Medium Q11: Coding: LION = MJPO then BEAR = ?", options:["CFBS","CFBS","CFBS","CFBS"], ans:0 },
  { q:"Railway Reasoning Medium Q12: Coding: CAT = DBU then HEN = ?", options:["IFO","IFP","JFO","JFP"], ans:0 },
  { q:"Railway Reasoning Medium Q13: Coding: PEN = QFO then BOOK = ?", options:["CPPL","CPPM","DQPL","DQPM"], ans:0 },
  { q:"Railway Reasoning Medium Q14: Coding: MAN = NBO then GIRL = ?", options:["HJSN","HJSM","HKSM","HKSN"], ans:0 },
  { q:"Railway Reasoning Medium Q15: Coding: BAT = CBV then RAT = ?", options:["SBU","SBU","SBU","SBU"], ans:0 },

  { q:"Railway Reasoning Medium Q16: If A=1, B=2... then value of KING?", options:["41","43","45","47"], ans:1 },
  { q:"Railway Reasoning Medium Q17: If Z=1, Y=2... then value of BAD?", options:["49","50","51","52"], ans:2 },
  { q:"Railway Reasoning Medium Q18: If 1=3, 2=5, 3=7 then 10=?", options:["19","21","23","25"], ans:1 },
  { q:"Railway Reasoning Medium Q19: If 5=25, 6=36, 7=49 then 9=?", options:["72","81","90","99"], ans:1 },
  { q:"Railway Reasoning Medium Q20: If 2=8, 3=27, 4=64 then 5=?", options:["100","115","125","150"], ans:2 },

  { q:"Railway Reasoning Medium Q21: Statement: All chairs are furniture. Some furniture are tables. Conclusion?", options:["All chairs tables","Some chairs tables","No chair table","None"], ans:3 },
  { q:"Railway Reasoning Medium Q22: All books are papers. Some papers are files. Conclusion?", options:["All books files","Some books files","No book file","None"], ans:3 },
  { q:"Railway Reasoning Medium Q23: All dogs are animals. Some animals are cats. Conclusion?", options:["Some dogs cats","All cats dogs","No dogs cats","None"], ans:3 },
  { q:"Railway Reasoning Medium Q24: All roses are flowers. Some flowers are red. Conclusion?", options:["All roses red","Some roses red","No rose red","None"], ans:3 },
  { q:"Railway Reasoning Medium Q25: All mobiles are devices. Some devices are laptops. Conclusion?", options:["All mobiles laptops","Some mobiles laptops","No mobile laptop","None"], ans:3 },

  { q:"Railway Reasoning Medium Q26: Direction: 8m East, 6m North. Distance from start?", options:["10m","12m","14m","16m"], ans:0 },
  { q:"Railway Reasoning Medium Q27: Direction: 12m North, 5m East. Distance?", options:["10m","11m","13m","17m"], ans:1 },
  { q:"Railway Reasoning Medium Q28: A goes 7km West then 24km North. Distance?", options:["23","24","25","26"], ans:2 },
  { q:"Railway Reasoning Medium Q29: A goes 9m South, 12m East. Distance?", options:["10","12","15","18"], ans:2 },
  { q:"Railway Reasoning Medium Q30: A goes 5km East, 12km North, 5km West. Distance?", options:["10","11","12","13"], ans:3 },

  { q:"Railway Reasoning Medium Q31: In a row of 9, A is 3rd from left. Position from right?", options:["5th","6th","7th","8th"], ans:1 },
  { q:"Railway Reasoning Medium Q32: In a row of 12, B is 8th from left. Position from right?", options:["4th","5th","6th","7th"], ans:1 },
  { q:"Railway Reasoning Medium Q33: In a row of 10, P is 2nd from right. Position from left?", options:["7th","8th","9th","10th"], ans:2 },
  { q:"Railway Reasoning Medium Q34: In a row of 15, Q is 11th from left. Position from right?", options:["3rd","4th","5th","6th"], ans:3 },
  { q:"Railway Reasoning Medium Q35: In a row of 7, R is middle. Position?", options:["3rd","4th","5th","6th"], ans:1 }
);


// =========================
// REASONING HARD (15)
// =========================
bank.Reasoning.hard.push(
  { q:"Railway Reasoning Hard Q1: Blood relation: A is father of B. B is sister of C. C is son of D. D is ?", options:["Wife of A","Husband of A","Brother of A","Cannot say"], ans:0 },
  { q:"Railway Reasoning Hard Q2: P is brother of Q. Q is daughter of R. R is wife of S. P is S's ?", options:["Son","Brother","Father","Uncle"], ans:0 },
  { q:"Railway Reasoning Hard Q3: A is sister of B. B is son of C. C is wife of D. A is D's ?", options:["Daughter","Sister","Mother","Aunt"], ans:0 },
  { q:"Railway Reasoning Hard Q4: X is mother of Y. Y is father of Z. Z is son of W. W is ?", options:["Wife of Y","Husband of Y","Mother of Y","Sister of Y"], ans:0 },
  { q:"Railway Reasoning Hard Q5: M is father of N. N is brother of P. P is daughter of Q. Q is ?", options:["Wife of M","Sister of M","Mother of N","Cannot say"], ans:0 },

  { q:"Railway Reasoning Hard Q6: Number series: 6, 11, 21, 41, ?", options:["71","81","83","85"], ans:1 },
  { q:"Railway Reasoning Hard Q7: Number series: 4, 7, 13, 25, ?", options:["41","45","49","51"], ans:2 },
  { q:"Railway Reasoning Hard Q8: Number series: 2, 5, 12, 27, ?", options:["54","56","58","60"], ans:2 },
  { q:"Railway Reasoning Hard Q9: Number series: 1, 4, 10, 22, ?", options:["40","42","46","48"], ans:1 },
  { q:"Railway Reasoning Hard Q10: Number series: 3, 8, 18, 38, ?", options:["68","74","78","80"], ans:2 },

  { q:"Railway Reasoning Hard Q11: Sitting: A,B,C,D,E in a row. A left of B. C right of D. E at one end. If D in middle, who is at other end?", options:["A","B","C","Cannot say"], ans:3 },
  { q:"Railway Reasoning Hard Q12: If 'MANGO' is coded as 'NZOHQ', then 'APPLE' is?", options:["BQQMF","BQQMF","BQQMF","BQQMF"], ans:0 },
  { q:"Railway Reasoning Hard Q13: If 15 Aug 1947 was Friday then 15 Aug 1948 was?", options:["Saturday","Sunday","Monday","Tuesday"], ans:1 },
  { q:"Railway Reasoning Hard Q14: If 1st Jan 2010 was Friday then 1st Jan 2011 was?", options:["Saturday","Sunday","Monday","Tuesday"], ans:0 },
  { q:"Railway Reasoning Hard Q15: Clock: At 3:15 angle between hands?", options:["0°","7.5°","30°","37.5°"], ans:1 }
);


// =========================
// ENGLISH MEDIUM (25)
// =========================
bank.English.medium.push(
  { q:"Railway English Medium Q1: Synonym of 'ABUNDANT'?", options:["Plenty","Rare","Small","Empty"], ans:0 },
  { q:"Railway English Medium Q2: Synonym of 'HINDER'?", options:["Help","Obstruct","Guide","Join"], ans:1 },
  { q:"Railway English Medium Q3: Synonym of 'VITAL'?", options:["Useless","Important","Weak","Cheap"], ans:1 },
  { q:"Railway English Medium Q4: Synonym of 'BRIEF'?", options:["Short","Long","Wide","Tall"], ans:0 },
  { q:"Railway English Medium Q5: Synonym of 'GLANCE'?", options:["Look quickly","Sleep","Run","Eat"], ans:0 },

  { q:"Railway English Medium Q6: Antonym of 'ANCIENT'?", options:["Old","Modern","Past","Historic"], ans:1 },
  { q:"Railway English Medium Q7: Antonym of 'VICTORY'?", options:["Win","Success","Defeat","Profit"], ans:2 },
  { q:"Railway English Medium Q8: Antonym of 'ARRIVE'?", options:["Come","Reach","Depart","Enter"], ans:2 },
  { q:"Railway English Medium Q9: Antonym of 'EXPAND'?", options:["Grow","Increase","Contract","Rise"], ans:2 },
  { q:"Railway English Medium Q10: Antonym of 'PERMIT'?", options:["Allow","Accept","Forbid","Agree"], ans:2 },

  { q:"Railway English Medium Q11: Fill: Neither of the answers ___ correct.", options:["are","is","were","be"], ans:1 },
  { q:"Railway English Medium Q12: Fill: Each of the players ___ rewarded.", options:["are","is","were","be"], ans:1 },
  { q:"Railway English Medium Q13: Fill: One of the boys ___ absent today.", options:["are","is","were","be"], ans:1 },
  { q:"Railway English Medium Q14: Fill: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },
  { q:"Railway English Medium Q15: Fill: The team ___ winning the match.", options:["are","is","were","be"], ans:1 },

  { q:"Railway English Medium Q16: Choose correct: He is good ___ English.", options:["in","at","on","for"], ans:1 },
  { q:"Railway English Medium Q17: Choose correct: She is afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Railway English Medium Q18: Choose correct: I am fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Railway English Medium Q19: Choose correct: He depends ___ his friend.", options:["on","in","at","for"], ans:0 },
  { q:"Railway English Medium Q20: Choose correct: He is married ___ her.", options:["with","to","by","on"], ans:1 },

  { q:"Railway English Medium Q21: One word: One who looks on bright side", options:["Optimist","Pessimist","Miser","Orator"], ans:0 },
  { q:"Railway English Medium Q22: One word: One who speaks less", options:["Talkative","Reticent","Orator","Speaker"], ans:1 },
  { q:"Railway English Medium Q23: One word: A place where birds are kept", options:["Zoo","Aquarium","Aviary","Library"], ans:2 },
  { q:"Railway English Medium Q24: One word: One who collects coins", options:["Numismatist","Philatelist","Geologist","Botanist"], ans:0 },
  { q:"Railway English Medium Q25: One word: A person who writes a dictionary", options:["Lexicographer","Cartographer","Editor","Poet"], ans:0 }
);


// =========================
// ENGLISH HARD (25)
// =========================
bank.English.hard.push(
  { q:"Railway English Hard Q1: Meaning of 'AMBIGUOUS'?", options:["Clear","Doubtful","Certain","Simple"], ans:1 },
  { q:"Railway English Hard Q2: Meaning of 'METICULOUS'?", options:["Careless","Very careful","Lazy","Fast"], ans:1 },
  { q:"Railway English Hard Q3: Meaning of 'CANDID'?", options:["Honest","Angry","Weak","Slow"], ans:0 },
  { q:"Railway English Hard Q4: Meaning of 'OBSOLETE'?", options:["Modern","Outdated","New","Fresh"], ans:1 },
  { q:"Railway English Hard Q5: Meaning of 'CONCISE'?", options:["Lengthy","Short","Confusing","Weak"], ans:1 },

  { q:"Railway English Hard Q6: Spot error: He don't know the answer.", options:["He","don't","know","answer"], ans:1 },
  { q:"Railway English Hard Q7: Spot error: She has went to market.", options:["She","has","went","market"], ans:2 },
  { q:"Railway English Hard Q8: Spot error: Each of the boys have a pen.", options:["Each","of","have","pen"], ans:2 },
  { q:"Railway English Hard Q9: Spot error: They was playing football.", options:["They","was","playing","football"], ans:1 },
  { q:"Railway English Hard Q10: Spot error: I has completed my work.", options:["I","has","completed","work"], ans:1 },

  { q:"Railway English Hard Q11: Choose correct passive: 'People speak English.'", options:["English is spoken","English was spoken","English spoken","English is speak"], ans:0 },
  { q:"Railway English Hard Q12: Choose correct passive: 'They are making a house.'", options:["A house is made","A house is being made","A house was made","A house being made"], ans:1 },
  { q:"Railway English Hard Q13: Choose correct passive: 'He will finish the work.'", options:["Work will finish","Work will be finished","Work finished","Work is finished"], ans:1 },
  { q:"Railway English Hard Q14: Choose correct passive: 'She wrote a letter.'", options:["A letter was written","A letter is written","A letter written","A letter was write"], ans:0 },
  { q:"Railway English Hard Q15: Choose correct passive: 'They have completed the task.'", options:["Task has completed","Task has been completed","Task is completed","Task completed"], ans:1 },

  { q:"Railway English Hard Q16: Idiom: 'At the eleventh hour' means?", options:["Very early","At last moment","Always late","Never"], ans:1 },
  { q:"Railway English Hard Q17: Idiom: 'To hit the nail on the head' means?", options:["To miss point","To say exactly right","To break nail","To lie"], ans:1 },
  { q:"Railway English Hard Q18: Idiom: 'A blessing in disguise' means?", options:["Bad luck","Hidden benefit","Curse","Loss"], ans:1 },
  { q:"Railway English Hard Q19: Idiom: 'To turn a deaf ear' means?", options:["To listen carefully","To ignore","To help","To agree"], ans:1 },
  { q:"Railway English Hard Q20: Idiom: 'To burn the midnight oil' means?", options:["Sleep early","Work late night","Waste oil","Cook food"], ans:1 },

  { q:"Railway English Hard Q21: Choose correct: No sooner ___ I reached than it started raining.", options:["had","have","has","was"], ans:0 },
  { q:"Railway English Hard Q22: Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Railway English Hard Q23: Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },
  { q:"Railway English Hard Q24: Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 },
  { q:"Railway English Hard Q25: Choose correct: She is interested ___ music.", options:["on","in","at","by"], ans:1 }
);

// =========================
//// =========================
// UPSSSC GK/GS (MEDIUM + HARD) — NEW
// =========================

// GK MEDIUM (30)
bank.GK.medium.push(
  { q:"UPSSSC GK Medium Q2: 'भारत छोड़ो आंदोलन' किस वर्ष शुरू हुआ?", options:["1930","1942","1947","1920"], ans:1 },
  { q:"UPSSSC GK Medium Q3: 'स्वराज' शब्द का सर्वाधिक प्रयोग किसने किया?", options:["तिलक","गांधी","नेहरू","पटेल"], ans:0 },
  { q:"UPSSSC GK Medium Q4: 'हड़प्पा सभ्यता' का मुख्य व्यवसाय क्या था?", options:["व्यापार","कृषि","खनन","मछली पालन"], ans:1 },
  { q:"UPSSSC GK Medium Q5: 'अशोक' ने किस युद्ध के बाद बौद्ध धर्म अपनाया?", options:["कलिंग","तक्षशिला","मगध","पंजाब"], ans:0 },
  { q:"UPSSSC GK Medium Q6: 'गुप्त काल' को किस क्षेत्र में स्वर्ण युग कहा जाता है?", options:["कला-साहित्य","कृषि","युद्ध","व्यापार"], ans:0 },

  { q:"UPSSSC GK Medium Q7: संविधान सभा की पहली बैठक कब हुई?", options:["9 Dec 1946","15 Aug 1947","26 Jan 1950","2 Oct 1947"], ans:0 },
  { q:"UPSSSC GK Medium Q8: भारतीय संविधान में 'धर्मनिरपेक्ष' शब्द कब जोड़ा गया?", options:["1951","1976","1985","1991"], ans:1 },
  { q:"UPSSSC GK Medium Q9: लोकसभा का अध्यक्ष किसके द्वारा चुना जाता है?", options:["राष्ट्रपति","संसद","लोकसभा सदस्य","राज्यसभा"], ans:2 },
  { q:"UPSSSC GK Medium Q10: राष्ट्रपति के चुनाव में कौन भाग लेता है?", options:["सभी नागरिक","MLA+MP","केवल MP","केवल MLA"], ans:1 },
  { q:"UPSSSC GK Medium Q11: राज्यसभा के सदस्य का न्यूनतम आयु क्या है?", options:["21","25","30","35"], ans:2 },

  { q:"UPSSSC GK Medium Q12: 'भू-आकृति' में 'पठार' का उदाहरण कौन सा है?", options:["दक्कन पठार","गंगा मैदान","थार मरुस्थल","कच्छ"], ans:0 },
  { q:"UPSSSC GK Medium Q13: भारत में सबसे अधिक चाय उत्पादन किस राज्य में होता है?", options:["असम","केरल","UP","बिहार"], ans:0 },
  { q:"UPSSSC GK Medium Q14: 'रबी फसल' का सही उदाहरण?", options:["धान","गेहूं","जूट","गन्ना"], ans:1 },
  { q:"UPSSSC GK Medium Q15: 'काला मिट्टी' किस फसल के लिए सर्वोत्तम?", options:["कपास","चावल","गेहूं","जूट"], ans:0 },
  { q:"UPSSSC GK Medium Q16: भारत में मानसून किस दिशा से आता है?", options:["उत्तर-पूर्व","दक्षिण-पश्चिम","उत्तर-पश्चिम","दक्षिण-पूर्व"], ans:1 },

  { q:"UPSSSC GK Medium Q17: 'भाषा' के आधार पर राज्यों का पुनर्गठन कब हुआ?", options:["1947","1956","1962","1971"], ans:1 },
  { q:"UPSSSC GK Medium Q18: 'UP' का राज्य पशु क्या है?", options:["बारहसिंगा","सारस","बाघ","हाथी"], ans:0 },
  { q:"UPSSSC GK Medium Q19: 'UP' का राज्य पक्षी क्या है?", options:["मोर","सारस","कौआ","तोता"], ans:1 },
  { q:"UPSSSC GK Medium Q20: 'UP' का सबसे बड़ा जिला (क्षेत्रफल) कौन सा है?", options:["लखीमपुर खीरी","प्रयागराज","गोरखपुर","लखनऊ"], ans:0 },

  { q:"UPSSSC GK Medium Q21: विटामिन D की कमी से कौन सा रोग होता है?", options:["स्कर्वी","रिकेट्स","बेरी-बेरी","एनीमिया"], ans:1 },
  { q:"UPSSSC GK Medium Q22: रक्त का लाल रंग किसके कारण होता है?", options:["हीमोग्लोबिन","प्लाज्मा","RBC membrane","WBC"], ans:0 },
  { q:"UPSSSC GK Medium Q23: सबसे हल्की धातु कौन सी है?", options:["लिथियम","सोडियम","एल्युमिनियम","जस्ता"], ans:0 },
  { q:"UPSSSC GK Medium Q24: विद्युत धारा की SI इकाई क्या है?", options:["वोल्ट","ओम","एम्पीयर","वाट"], ans:2 },
  { q:"UPSSSC GK Medium Q25: ओजोन परत मुख्यतः किस गैस से बनी होती है?", options:["O2","O3","CO2","N2"], ans:1 },

  { q:"UPSSSC GK Medium Q26: GDP का full form क्या है?", options:["Gross Domestic Product","Global Domestic Price","Gross Development Plan","None"], ans:0 },
  { q:"UPSSSC GK Medium Q27: 'मुद्रास्फीति' का अर्थ क्या है?", options:["कीमतें घटें","कीमतें बढ़ें","उत्पादन घटे","निर्यात घटे"], ans:1 },
  { q:"UPSSSC GK Medium Q28: भारत में योजना आयोग की जगह किसने ली?", options:["NITI Aayog","Finance Commission","RBI","CVC"], ans:0 },
  { q:"UPSSSC GK Medium Q29: भारत का केंद्रीय बजट किसके द्वारा प्रस्तुत किया जाता है?", options:["PM","Finance Minister","President","CAG"], ans:1 },
  { q:"UPSSSC GK Medium Q30: भारत में नोट जारी करने का अधिकार किसके पास है?", options:["SBI","RBI","SEBI","NABARD"], ans:1 }
);


// GK HARD (30)
bank.GK.hard.push(
  { q:"UPSSSC GK Hard Q2: संविधान में 'मूल अधिकार' किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },
  { q:"UPSSSC GK Hard Q3: 'न्यायिक पुनरावलोकन' किस देश से लिया गया?", options:["UK","USA","France","Russia"], ans:1 },
  { q:"UPSSSC GK Hard Q4: संविधान का 'संरक्षक' किसे कहा जाता है?", options:["राष्ट्रपति","संसद","सुप्रीम कोर्ट","प्रधानमंत्री"], ans:2 },
  { q:"UPSSSC GK Hard Q5: भारत में पहला आम चुनाव कब हुआ?", options:["1947","1951-52","1955","1962"], ans:1 },
  { q:"UPSSSC GK Hard Q6: 'मौलिक कर्तव्य' संविधान में किस संशोधन से जुड़े?", options:["24th","42nd","44th","52nd"], ans:1 },

  { q:"UPSSSC GK Hard Q7: 'वित्त आयोग' का गठन कितने वर्ष में होता है?", options:["3","4","5","6"], ans:2 },
  { q:"UPSSSC GK Hard Q8: अनुच्छेद 21 किससे संबंधित है?", options:["समानता","स्वतंत्रता","जीवन व व्यक्तिगत स्वतंत्रता","धर्म"], ans:2 },
  { q:"UPSSSC GK Hard Q9: अनुच्छेद 32 किससे संबंधित है?", options:["संवैधानिक उपचार","धर्म","संपत्ति","आपातकाल"], ans:0 },
  { q:"UPSSSC GK Hard Q10: राज्य नीति निदेशक तत्व किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },
  { q:"UPSSSC GK Hard Q11: भारत में 'समवर्ती सूची' किस अनुसूची में है?", options:["6th","7th","8th","9th"], ans:1 },

  { q:"UPSSSC GK Hard Q12: 'UP लोक सेवा आयोग' का गठन किस अनुच्छेद में?", options:["315","320","324","280"], ans:0 },
  { q:"UPSSSC GK Hard Q13: भारत में 'राज्यपाल' की नियुक्ति कौन करता है?", options:["PM","President","CM","Speaker"], ans:1 },
  { q:"UPSSSC GK Hard Q14: 'लोकसभा' में धन विधेयक कौन पेश करता है?", options:["कोई MP","Finance Minister","President","Speaker"], ans:1 },
  { q:"UPSSSC GK Hard Q15: भारत में 'राष्ट्रीय आपातकाल' किस अनुच्छेद में?", options:["352","356","360","368"], ans:0 },
  { q:"UPSSSC GK Hard Q16: 'राष्ट्रपति शासन' किस अनुच्छेद में?", options:["352","356","360","368"], ans:1 },

  { q:"UPSSSC GK Hard Q17: 'सूर्य' में ऊर्जा का स्रोत क्या है?", options:["दहन","नाभिकीय संलयन","नाभिकीय विखंडन","रासायनिक क्रिया"], ans:1 },
  { q:"UPSSSC GK Hard Q18: pH का मान 7 से कम होने पर घोल कैसा होगा?", options:["क्षारीय","अम्लीय","तटस्थ","None"], ans:1 },
  { q:"UPSSSC GK Hard Q19: सबसे अधिक विद्युत चालक कौन है?", options:["तांबा","चांदी","लोहा","एल्यूमिनियम"], ans:1 },
  { q:"UPSSSC GK Hard Q20: मानव शरीर में इंसुलिन किस ग्रंथि से बनता है?", options:["थायराइड","अग्न्याशय","यकृत","प्लीहा"], ans:1 },
  { q:"UPSSSC GK Hard Q21: DNA का full form क्या है?", options:["Deoxyribo Nucleic Acid","Dynamic Nucleic Acid","Deoxy Nitro Acid","None"], ans:0 },

  { q:"UPSSSC GK Hard Q22: 'मौर्य काल' में 'अर्थशास्त्र' किसने लिखा?", options:["कालिदास","चाणक्य","अशोक","पाणिनि"], ans:1 },
  { q:"UPSSSC GK Hard Q23: 'अलबरूनी' किसके समय भारत आया?", options:["अकबर","महमूद गजनवी","हर्ष","शिवाजी"], ans:1 },
  { q:"UPSSSC GK Hard Q24: 'इलाहाबाद स्तंभ लेख' किससे संबंधित है?", options:["समुद्रगुप्त","अशोक","हर्ष","अकबर"], ans:0 },
  { q:"UPSSSC GK Hard Q25: 'दीन-ए-इलाही' किसने चलाया?", options:["अकबर","बाबर","औरंगजेब","हुमायूं"], ans:0 },

  { q:"UPSSSC GK Hard Q26: भारत का सबसे बड़ा उत्पादक राज्य (गन्ना) कौन सा है?", options:["UP","Bihar","Punjab","MP"], ans:0 },
  { q:"UPSSSC GK Hard Q27: 'चंबल घाटी' किस राज्य में अधिक है?", options:["UP","MP","Kerala","WB"], ans:1 },
  { q:"UPSSSC GK Hard Q28: 'दुधवा राष्ट्रीय उद्यान' कहाँ है?", options:["लखीमपुर खीरी","गोरखपुर","आगरा","झांसी"], ans:0 },
  { q:"UPSSSC GK Hard Q29: 'सोनभद्र' जिला किस खनिज के लिए प्रसिद्ध है?", options:["कोयला","लोहा","चूना पत्थर","सोना"], ans:0 },
  { q:"UPSSSC GK Hard Q30: 'बरेली' किस नदी के किनारे स्थित है?", options:["रामगंगा","गोमती","यमुना","सोन"], ans:0 }
);
// =========================
// UPSSSC REASONING (MEDIUM + HARD) — NEW
// =========================

// Reasoning MEDIUM (20)
bank.Reasoning.medium.push(
  { q:"UPSSSC Reasoning Medium Q2: Find next: 5, 11, 23, 47, ?", options:["79","91","95","97"], ans:2 },
  { q:"UPSSSC Reasoning Medium Q3: Find next: 2, 3, 5, 8, 13, ?", options:["18","19","20","21"], ans:1 },
  { q:"UPSSSC Reasoning Medium Q4: Find next: 4, 10, 22, 46, ?", options:["86","92","94","96"], ans:3 },
  { q:"UPSSSC Reasoning Medium Q5: Find next: 7, 14, 28, 56, ?", options:["84","98","112","120"], ans:2 },

  { q:"UPSSSC Reasoning Medium Q6: Coding: DELHI = EFMKJ then PATNA = ?", options:["QBUOB","QBUOB","QBUOB","QBUOB"], ans:0 },
  { q:"UPSSSC Reasoning Medium Q7: Coding: INDIA = JOEJB then NEPAL = ?", options:["OFQBM","OFQBM","OFQBM","OFQBM"], ans:0 },

  { q:"UPSSSC Reasoning Medium Q8: Direction: 10m East, 24m North. Distance?", options:["26m","30m","34m","36m"], ans:0 },
  { q:"UPSSSC Reasoning Medium Q9: Direction: 12m South, 5m West. Distance?", options:["10m","11m","13m","17m"], ans:2 },

  { q:"UPSSSC Reasoning Medium Q10: Blood relation: A is mother of B, B is father of C. A is C's ?", options:["Grandmother","Mother","Aunt","Sister"], ans:0 },
  { q:"UPSSSC Reasoning Medium Q11: Blood relation: P is brother of Q, Q is mother of R. P is R's ?", options:["Uncle","Father","Brother","Cousin"], ans:0 },

  { q:"UPSSSC Reasoning Medium Q12: In a row of 11, A is 4th from left. Position from right?", options:["6th","7th","8th","9th"], ans:1 },
  { q:"UPSSSC Reasoning Medium Q13: In a row of 14, B is 9th from left. Position from right?", options:["4th","5th","6th","7th"], ans:1 },

  { q:"UPSSSC Reasoning Medium Q14: If 15 Aug 1947 was Friday then 15 Aug 1948 was?", options:["Saturday","Sunday","Monday","Tuesday"], ans:1 },
  { q:"UPSSSC Reasoning Medium Q15: Clock: At 4:20 angle between hands?", options:["0°","10°","20°","40°"], ans:1 },

  { q:"UPSSSC Reasoning Medium Q16: Odd one out: 8, 27, 64, 125", options:["8","27","64","125"], ans:3 },
  { q:"UPSSSC Reasoning Medium Q17: Odd one out: 11, 17, 19, 21", options:["11","17","19","21"], ans:3 },

  { q:"UPSSSC Reasoning Medium Q18: Statement: All dogs are animals. All animals are living. Conclusion?", options:["All dogs living","Some dogs living","No dogs living","None"], ans:0 },
  { q:"UPSSSC Reasoning Medium Q19: Statement: Some pens are pencils. All pencils are tools. Conclusion?", options:["Some pens tools","All pens tools","No pen tool","None"], ans:0 },
  { q:"UPSSSC Reasoning Medium Q20: Statement: All cars are vehicles. Some vehicles are bikes. Conclusion?", options:["All cars bikes","Some cars bikes","No car bike","None"], ans:3 }
);

// Reasoning HARD (10)
bank.Reasoning.hard.push(
  { q:"UPSSSC Reasoning Hard Q2: Find missing: 1, 2, 6, 24, 120, ?", options:["240","360","720","840"], ans:2 },
  { q:"UPSSSC Reasoning Hard Q3: Find missing: 3, 7, 15, 31, ?", options:["47","55","63","65"], ans:3 },
  { q:"UPSSSC Reasoning Hard Q4: Find missing: 2, 5, 11, 23, 47, ?", options:["92","94","95","96"], ans:2 },

  { q:"UPSSSC Reasoning Hard Q5: Blood relation: A is father of B. B is mother of C. C is brother of D. A is D's ?", options:["Grandfather","Father","Uncle","Cannot say"], ans:0 },
  { q:"UPSSSC Reasoning Hard Q6: Blood relation: P is sister of Q. Q is brother of R. R is mother of S. P is S's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },

  { q:"UPSSSC Reasoning Hard Q7: Direction: A walks 15m North, then 8m East, then 6m South. Distance?", options:["15m","17m","19m","21m"], ans:1 },
  { q:"UPSSSC Reasoning Hard Q8: Clock: At 7:35 angle between hands?", options:["12.5°","17.5°","22.5°","27.5°"], ans:2 },

  { q:"UPSSSC Reasoning Hard Q9: If 'MANGO' is coded as 'NZOHQ', then 'APPLE' is?", options:["BQQMF","BQQMF","BQQMF","BQQMF"], ans:0 },
  { q:"UPSSSC Reasoning Hard Q10: If 246 is coded as 468 then 357 is coded as?", options:["579","468","681","5790"], ans:0 }
);
// =========================
// UPSSSC ENGLISH (MEDIUM + HARD) — NEW
// =========================

// English MEDIUM (15)
bank.English.medium.push(
  { q:"UPSSSC English Medium Q2: Synonym of 'VITAL'?", options:["Weak","Important","Lazy","Cheap"], ans:1 },
  { q:"UPSSSC English Medium Q3: Synonym of 'HINDER'?", options:["Help","Obstruct","Guide","Allow"], ans:1 },
  { q:"UPSSSC English Medium Q4: Antonym of 'EXPAND'?", options:["Grow","Increase","Contract","Rise"], ans:2 },
  { q:"UPSSSC English Medium Q5: Antonym of 'ARRIVE'?", options:["Reach","Come","Depart","Enter"], ans:2 },

  { q:"UPSSSC English Medium Q6: Fill: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"UPSSSC English Medium Q7: Fill: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"UPSSSC English Medium Q8: Fill: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  { q:"UPSSSC English Medium Q9: Choose correct: He is good ___ English.", options:["in","at","on","for"], ans:1 },
  { q:"UPSSSC English Medium Q10: Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"UPSSSC English Medium Q11: Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },

  { q:"UPSSSC English Medium Q12: One word: One who collects coins", options:["Numismatist","Philatelist","Geologist","Botanist"], ans:0 },
  { q:"UPSSSC English Medium Q13: One word: One who speaks less", options:["Reticent","Orator","Talkative","Speaker"], ans:0 },
  { q:"UPSSSC English Medium Q14: One word: A person who writes dictionary", options:["Lexicographer","Cartographer","Editor","Poet"], ans:0 },
  { q:"UPSSSC English Medium Q15: One word: One who looks on bright side", options:["Optimist","Pessimist","Miser","Orator"], ans:0 },
  { q:"UPSSSC English Medium Q16: One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 }
);

// English HARD (15)
bank.English.hard.push(
  { q:"UPSSSC English Hard Q2: Meaning of 'AMBIGUOUS'?", options:["Clear","Doubtful","Certain","Simple"], ans:1 },
  { q:"UPSSSC English Hard Q3: Meaning of 'OBSOLETE'?", options:["Modern","Outdated","New","Fresh"], ans:1 },
  { q:"UPSSSC English Hard Q4: Meaning of 'CONCISE'?", options:["Lengthy","Short","Confusing","Weak"], ans:1 },
  { q:"UPSSSC English Hard Q5: Meaning of 'METICULOUS'?", options:["Careless","Very careful","Lazy","Fast"], ans:1 },

  { q:"UPSSSC English Hard Q6: Spot error: Each of the boys have a pen.", options:["Each","of","have","pen"], ans:2 },
  { q:"UPSSSC English Hard Q7: Spot error: She has went to market.", options:["She","has","went","market"], ans:2 },
  { q:"UPSSSC English Hard Q8: Spot error: They was playing football.", options:["They","was","playing","football"], ans:1 },

  { q:"UPSSSC English Hard Q9: Passive: 'They are repairing the road.'", options:["Road repaired","Road is being repaired","Road was repaired","Road is repaired"], ans:1 },
  { q:"UPSSSC English Hard Q10: Passive: 'Someone stole my bike.'", options:["My bike is stolen","My bike was stolen","My bike stolen","Bike is stole"], ans:1 },

  { q:"UPSSSC English Hard Q11: Idiom: 'At the eleventh hour' means?", options:["Very early","At last moment","Always late","Never"], ans:1 },
  { q:"UPSSSC English Hard Q12: Idiom: 'To hit the nail on the head' means?", options:["To miss point","To say exactly right","To break nail","To lie"], ans:1 },
  { q:"UPSSSC English Hard Q13: Idiom: 'To burn the midnight oil' means?", options:["Sleep early","Work late night","Waste oil","Cook food"], ans:1 },

  { q:"UPSSSC English Hard Q14: Choose correct: No sooner ___ I reached than it started raining.", options:["had","have","has","was"], ans:0 },
  { q:"UPSSSC English Hard Q15: Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"UPSSSC English Hard Q16: Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 }
);
// =========================
// UPSSSC - PART 2 (Hindi + Computer + Science)
// =========================


// =========================
// HINDI
// =========================

// Hindi - Easy
bank.Hindi.easy.push(
  { q:"UPSSSC Hindi Easy Q1 ...", options:["A","B","C","D"], ans:0 },

  { q:"'अग्नि' का पर्यायवाची क्या है?", options:["जल","पवन","अनल","गगन"], ans:2 },
  { q:"'दया' का विलोम क्या है?", options:["करुणा","निर्दयता","ममता","सहानुभूति"], ans:1 },
  { q:"'उपकार' का विलोम क्या है?", options:["अहंकार","अपकार","सहयोग","दान"], ans:1 },
  { q:"'आकाश' का पर्यायवाची क्या है?", options:["नभ","धरती","जल","अग्नि"], ans:0 },
  { q:"'दिन' का विलोम क्या है?", options:["रात","सूरज","प्रकाश","समय"], ans:0 },

  { q:"'जल्दी' का पर्यायवाची क्या है?", options:["शीघ्र","मंद","धीरे","शांत"], ans:0 },
  { q:"'अमृत' का विलोम क्या है?", options:["रस","विष","जल","मधु"], ans:1 },
  { q:"'सुख' का विलोम क्या है?", options:["आनंद","दुःख","हर्ष","प्रसन्नता"], ans:1 },
  { q:"'सत्य' का विलोम क्या है?", options:["झूठ","वचन","धर्म","न्याय"], ans:0 },
  { q:"'उच्च' का विलोम क्या है?", options:["नीच","बड़ा","लंबा","श्रेष्ठ"], ans:0 },

  { q:"मुहावरा 'आँखों का तारा' का अर्थ?", options:["प्रिय व्यक्ति","दुश्मन","अजनबी","मूर्ख"], ans:0 },
  { q:"मुहावरा 'दाँत खट्टे करना' का अर्थ?", options:["हार जाना","पराजित करना","भाग जाना","डर जाना"], ans:1 },
  { q:"मुहावरा 'हाथ-पाँव फूलना' का अर्थ?", options:["घमंड करना","डर जाना","हँसना","भागना"], ans:1 },
  { q:"मुहावरा 'नाक कटना' का अर्थ?", options:["सम्मान बढ़ना","अपमान होना","जीतना","गुस्सा होना"], ans:1 },
  { q:"मुहावरा 'पसीना छूटना' का अर्थ?", options:["आराम","कठिनाई","मज़ा","खुशी"], ans:1 }
);


// Hindi - Medium
bank.Hindi.medium.push(
  { q:"UPSSSC Hindi Medium Q1 ...", options:["A","B","C","D"], ans:1 },

  { q:"'अतिथि देवो भव' में समास कौन सा है?", options:["द्वंद्व","तत्पुरुष","कर्मधारय","बहुव्रीहि"], ans:1 },
  { q:"'नीलकंठ' में समास कौन सा है?", options:["बहुव्रीहि","द्विगु","द्वंद्व","अव्ययीभाव"], ans:0 },
  { q:"'राजपुत्र' में समास कौन सा है?", options:["तत्पुरुष","द्वंद्व","बहुव्रीहि","द्विगु"], ans:0 },
  { q:"'चतुर्भुज' में समास कौन सा है?", options:["द्वंद्व","द्विगु","बहुव्रीहि","कर्मधारय"], ans:1 },
  { q:"'यथाशक्ति' में समास कौन सा है?", options:["अव्ययीभाव","द्विगु","बहुव्रीहि","तत्पुरुष"], ans:0 },

  { q:"'परिश्रम' में उपसर्ग क्या है?", options:["परि","श्रम","पर","परी"], ans:0 },
  { q:"'असत्य' में उपसर्ग क्या है?", options:["अ","सत्य","अस","त्य"], ans:0 },
  { q:"'निर्दोष' में उपसर्ग क्या है?", options:["नि","दोष","निर्द","श"], ans:0 },
  { q:"'प्रकाश' में उपसर्ग क्या है?", options:["प्र","काश","प","रा"], ans:0 },
  { q:"'अधिकार' में उपसर्ग क्या है?", options:["अधि","कार","अ","धि"], ans:0 },

  { q:"'जो पढ़ता है' के लिए एक शब्द?", options:["पाठक","लेखक","वक्ता","दर्शक"], ans:0 },
  { q:"'जो दूसरों का भला करे' के लिए एक शब्द?", options:["परोपकारी","स्वार्थी","क्रूर","कंजूस"], ans:0 },
  { q:"'जो कभी न मरे' के लिए एक शब्द?", options:["अमर","अटल","अचल","असत्य"], ans:0 },
  { q:"'जो सब जगह हो' के लिए एक शब्द?", options:["सर्वव्यापी","सर्वज्ञ","सर्वशक्तिमान","सर्वप्रिय"], ans:0 },
  { q:"'जो बहुत बोलता हो' के लिए एक शब्द?", options:["वाचाल","मौन","शांत","गंभीर"], ans:0 },

  { q:"वाक्य शुद्ध कीजिए: 'वह मेरे से बड़ा है।'", options:["वह मुझसे बड़ा है।","वह मुझ बड़ा है।","वह मेरे बड़ा है।","वह मुझ बड़ा है।"], ans:0 },
  { q:"वाक्य शुद्ध कीजिए: 'मैंने उसे देखा था।'", options:["मैं उसे देख चुका था।","मैंने उसको देखा था।","दोनों सही","दोनों गलत"], ans:2 },
  { q:"वाक्य शुद्ध कीजिए: 'आप क्या कर रहे हो?'", options:["आप क्या कर रहे हैं?","आप क्या कर रहे था?","आप क्या कर रहे थे?","आप क्या कर रहे?"], ans:0 },
  { q:"वाक्य शुद्ध कीजिए: 'उसने मुझे बुलाया।'", options:["उसने मुझे बुलाया।","उसने मुझको बुलाया।","दोनों सही","दोनों गलत"], ans:2 },
  { q:"वाक्य शुद्ध कीजिए: 'मुझे भूख लगी है।'", options:["मुझे भूख लगी है।","मुझे भूख लग रहा है।","मुझे भूख लग गई।","मुझे भूख लगते हैं।"], ans:0 }
);


// Hindi - Hard
bank.Hindi.hard.push(
  { q:"UPSSSC Hindi Hard Q1 ...", options:["A","B","C","D"], ans:2 },

  { q:"'निराशा' शब्द में प्रत्यय क्या है?", options:["नि","आशा","ता","निर"], ans:2 },
  { q:"'मानवता' शब्द में प्रत्यय क्या है?", options:["मानव","ता","व","अ"], ans:1 },
  { q:"'सुंदरता' शब्द में प्रत्यय क्या है?", options:["सुंदर","ता","र","अ"], ans:1 },
  { q:"'बालपन' शब्द में प्रत्यय क्या है?", options:["बाल","पन","ल","अ"], ans:1 },
  { q:"'दुर्बलता' शब्द में उपसर्ग क्या है?", options:["दुर्","बल","ता","दु"], ans:0 },

  { q:"'सत्यमेव जयते' में समास कौन सा है?", options:["तत्पुरुष","कर्मधारय","बहुव्रीहि","द्वंद्व"], ans:0 },
  { q:"'महापुरुष' में समास कौन सा है?", options:["कर्मधारय","द्विगु","द्वंद्व","अव्ययीभाव"], ans:0 },
  { q:"'नीलगाय' में समास कौन सा है?", options:["तत्पुरुष","कर्मधारय","बहुव्रीहि","द्वंद्व"], ans:1 },
  { q:"'त्रिलोकीनाथ' में समास कौन सा है?", options:["द्विगु","तत्पुरुष","बहुव्रीहि","द्वंद्व"], ans:0 },
  { q:"'पंचवटी' में समास कौन सा है?", options:["द्विगु","द्वंद्व","तत्पुरुष","बहुव्रीहि"], ans:0 },

  { q:"लोकोक्ति 'घर का भेदी लंका ढाए' का अर्थ?", options:["अंदर का व्यक्ति नुकसान करता है","दुश्मन दोस्त बनता है","किस्मत खराब होती है","मेहनत से सफलता"], ans:0 },
  { q:"लोकोक्ति 'जैसा देश वैसा भेष' का अर्थ?", options:["देश के अनुसार व्यवहार","हर जगह वही कपड़े","हर जगह एक जैसा","कोई फर्क नहीं"], ans:0 },
  { q:"लोकोक्ति 'नाच न जाने आँगन टेढ़ा' का अर्थ?", options:["अपनी कमी दूसरों पर डालना","कठिन काम","झूठ बोलना","गुस्सा करना"], ans:0 },
  { q:"लोकोक्ति 'एक पंथ दो काज' का अर्थ?", options:["एक काम से दो लाभ","दो काम एक साथ","एक काम में नुकसान","किसी की मदद"], ans:0 },
  { q:"लोकोक्ति 'दूध का जला छाछ भी फूँक-फूँक कर पीता है' का अर्थ?", options:["अनुभव के बाद सावधानी","बहुत बहादुरी","जल्दीबाजी","लालच"], ans:0 }
);



// =========================
// COMPUTER
// =========================

// Computer - Easy
bank.Computer.easy.push(
  { q:"UPSSSC Computer Easy Q1 ...", options:["A","B","C","D"], ans:0 },

  { q:"CPU का full form क्या है?", options:["Central Processing Unit","Control Processing Unit","Central Program Unit","Computer Power Unit"], ans:0 },
  { q:"RAM का full form क्या है?", options:["Read Access Memory","Random Access Memory","Run Access Memory","Ready Access Memory"], ans:1 },
  { q:"ROM का full form क्या है?", options:["Read Only Memory","Run Only Memory","Ready Only Memory","Random Only Memory"], ans:0 },
  { q:"Keyboard किस प्रकार का device है?", options:["Input","Output","Storage","Processing"], ans:0 },
  { q:"Monitor किस प्रकार का device है?", options:["Input","Output","Storage","Processing"], ans:1 },

  { q:"MS Word किस प्रकार का software है?", options:["Spreadsheet","Presentation","Word Processor","Database"], ans:2 },
  { q:"MS Excel किस प्रकार का software है?", options:["Spreadsheet","Word Processor","Browser","OS"], ans:0 },
  { q:"MS PowerPoint किस प्रकार का software है?", options:["Presentation","Database","OS","Antivirus"], ans:0 },
  { q:"Internet का उपयोग किसके लिए होता है?", options:["Data sharing","Cooking","Washing","Driving"], ans:0 },
  { q:"WWW का full form क्या है?", options:["World Wide Web","World Web Wide","Wide World Web","None"], ans:0 },

  { q:"Email भेजने के लिए क्या जरूरी है?", options:["Internet","Printer","Scanner","Speaker"], ans:0 },
  { q:"Google Chrome क्या है?", options:["Browser","OS","Hardware","Game"], ans:0 },
  { q:"Windows क्या है?", options:["Operating System","Browser","Antivirus","Hardware"], ans:0 },
  { q:"Hard Disk का काम?", options:["Processing","Storage","Output","Input"], ans:1 },
  { q:"Printer किस प्रकार का device है?", options:["Input","Output","Storage","Processing"], ans:1 }
);


// Computer - Medium
bank.Computer.medium.push(
  { q:"UPSSSC Computer Medium Q1 ...", options:["A","B","C","D"], ans:1 },

  { q:"1 KB = कितने bytes?", options:["1000","1024","512","2048"], ans:1 },
  { q:"1 MB = कितने KB?", options:["1000","1024","2048","512"], ans:1 },
  { q:"LAN का full form क्या है?", options:["Local Area Network","Large Area Network","Long Area Network","None"], ans:0 },
  { q:"WAN का full form क्या है?", options:["Wide Area Network","World Area Network","Web Area Network","None"], ans:0 },
  { q:"URL का full form क्या है?", options:["Uniform Resource Locator","Universal Resource Link","Unique Resource Locator","None"], ans:0 },

  { q:"MS Excel में formula किस चिन्ह से शुरू होता है?", options:["#","=","$","@"], ans:1 },
  { q:"Ctrl + C का उपयोग?", options:["Cut","Copy","Paste","Undo"], ans:1 },
  { q:"Ctrl + V का उपयोग?", options:["Copy","Cut","Paste","Redo"], ans:2 },
  { q:"Ctrl + Z का उपयोग?", options:["Undo","Redo","Save","Open"], ans:0 },
  { q:"Ctrl + S का उपयोग?", options:["Save","Select","Search","Shift"], ans:0 },

  { q:"Google का मुख्य काम क्या है?", options:["Search engine","OS","Hardware","Programming"], ans:0 },
  { q:"Computer Virus क्या है?", options:["Program","Hardware","Mouse","Printer"], ans:0 },
  { q:"Antivirus का काम?", options:["Virus बनाना","Virus हटाना","Game चलाना","Internet बंद करना"], ans:1 },
  { q:"Bluetooth का उपयोग?", options:["Wireless data transfer","Printing","Cooking","Washing"], ans:0 },
  { q:"HTML का उपयोग?", options:["Web page बनाने में","Video editing","Game खेलने में","OS बनाने में"], ans:0 }
);


// Computer - Hard
bank.Computer.hard.push(
  { q:"UPSSSC Computer Hard Q1 ...", options:["A","B","C","D"], ans:2 },

  { q:"OSI model में कुल कितनी layers होती हैं?", options:["5","6","7","8"], ans:2 },
  { q:"OSI model की सबसे ऊपर वाली layer?", options:["Network","Transport","Application","Session"], ans:2 },
  { q:"IP का full form क्या है?", options:["Internet Protocol","Internal Program","Internet Program","None"], ans:0 },
  { q:"HTTP का full form?", options:["HyperText Transfer Protocol","High Transfer Text Protocol","Hyper Transfer Text Program","None"], ans:0 },
  { q:"HTTPS में 'S' का मतलब?", options:["Secure","Server","Speed","System"], ans:0 },

  { q:"MS Excel में VLOOKUP किस काम आता है?", options:["Search & fetch data","Formatting","Chart बनाना","Print"], ans:0 },
  { q:"MS Word में Mail Merge का उपयोग?", options:["Bulk letters","Video editing","Spreadsheet","Coding"], ans:0 },
  { q:"Database में Primary Key क्या होती है?", options:["Unique field","Duplicate field","Random field","None"], ans:0 },
  { q:"SQL का उपयोग किसके लिए होता है?", options:["Database query","Painting","Typing","Browsing"], ans:0 },
  { q:"Compiler का काम?", options:["Code को machine language में बदलना","Internet चलाना","Data store","Virus हटाना"], ans:0 },

  { q:"Internet पर data किस रूप में travel करता है?", options:["Packets","Pages","Books","Files"], ans:0 },
  { q:"DNS का काम क्या है?", options:["Domain name को IP में बदलना","Virus हटाना","Email भेजना","File store"], ans:0 },
  { q:"Phishing क्या है?", options:["Fake website से data चोरी","Fast browsing","Gaming","Printing"], ans:0 },
  { q:"Firewall का काम?", options:["Network security","Screen brightness","Typing speed","Printing"], ans:0 },
  { q:"Cloud storage का उदाहरण?", options:["Google Drive","MS Paint","Calculator","Notepad"], ans:0 }
);



// =========================
// SCIENCE (General Science)
// =========================

// Science - Easy
bank.Science.easy.push(
  { q:"UPSSSC Science Easy Q1 ...", options:["A","B","C","D"], ans:0 },

  { q:"पानी का रासायनिक सूत्र क्या है?", options:["H2O","CO2","O2","H2"], ans:0 },
  { q:"मानव शरीर में रक्त का रंग?", options:["नीला","लाल","हरा","पीला"], ans:1 },
  { q:"सूर्य किस प्रकार का पिंड है?", options:["ग्रह","तारा","उपग्रह","धूमकेतु"], ans:1 },
  { q:"पृथ्वी का उपग्रह कौन है?", options:["Mars","Moon","Sun","Jupiter"], ans:1 },
  { q:"ऑक्सीजन का प्रतीक क्या है?", options:["O","H","N","C"], ans:0 },

  { q:"कार्बन डाइऑक्साइड का सूत्र?", options:["CO2","CO","C2O","O2"], ans:0 },
  { q:"मानव शरीर में हड्डियाँ कितनी होती हैं?", options:["206","210","201","199"], ans:0 },
  { q:"विटामिन C किसमें पाया जाता है?", options:["नींबू","घी","चावल","दूध"], ans:0 },
  { q:"विद्युत का SI unit?", options:["Volt","Newton","Watt","Joule"], ans:0 },
  { q:"बल का SI unit?", options:["Newton","Joule","Watt","Volt"], ans:0 },

  { q:"ध्वनि किस माध्यम में नहीं चलती?", options:["Vacuum","Air","Water","Metal"], ans:0 },
  { q:"पौधे भोजन कैसे बनाते हैं?", options:["Photosynthesis","Respiration","Digestion","Evaporation"], ans:0 },
  { q:"मानव शरीर में सबसे बड़ा अंग?", options:["Skin","Heart","Brain","Liver"], ans:0 },
  { q:"रक्त शुद्ध करने वाला अंग?", options:["Kidney","Lung","Stomach","Brain"], ans:0 },
  { q:"शरीर में रक्त पंप कौन करता है?", options:["Heart","Liver","Kidney","Lung"], ans:0 }
);


// Science - Medium
bank.Science.medium.push(
  { q:"UPSSSC Science Medium Q1 ...", options:["A","B","C","D"], ans:1 },

  { q:"मानव शरीर में RBC का मुख्य कार्य?", options:["रक्त जमाना","ऑक्सीजन ले जाना","पाचन","विष हटाना"], ans:1 },
  { q:"मानव शरीर में WBC का कार्य?", options:["रोग प्रतिरोध","ऑक्सीजन ले जाना","भोजन पचाना","हड्डी बनाना"], ans:0 },
  { q:"Vitamin D की कमी से?", options:["Scurvy","Rickets","Night blindness","Beriberi"], ans:1 },
  { q:"Vitamin A की कमी से?", options:["Rickets","Night blindness","Scurvy","Beriberi"], ans:1 },
  { q:"Vitamin B1 की कमी से?", options:["Beriberi","Scurvy","Rickets","Goitre"], ans:0 },

  { q:"सौरमंडल का सबसे बड़ा ग्रह?", options:["Mars","Jupiter","Earth","Venus"], ans:1 },
  { q:"मानव शरीर में सबसे बड़ी ग्रंथि?", options:["Thyroid","Liver","Pancreas","Adrenal"], ans:1 },
  { q:"मानव शरीर में पाचन रस कहाँ बनता है?", options:["Kidney","Stomach","Liver","Heart"], ans:2 },
  { q:"पौधों में जल का परिवहन कौन करता है?", options:["Phloem","Xylem","Stomata","Root hair"], ans:1 },
  { q:"भोजन का परिवहन कौन करता है?", options:["Xylem","Phloem","Stem","Leaf"], ans:1 },

  { q:"वायु में सबसे अधिक गैस?", options:["Oxygen","Nitrogen","CO2","Hydrogen"], ans:1 },
  { q:"मानव शरीर में श्वसन अंग?", options:["Heart","Lungs","Liver","Kidney"], ans:1 },
  { q:"ध्वनि की गति सबसे अधिक किसमें होती है?", options:["Air","Water","Steel","Vacuum"], ans:2 },
  { q:"विद्युत धारा का SI unit?", options:["Ampere","Volt","Ohm","Watt"], ans:0 },
  { q:"प्रतिरोध का SI unit?", options:["Ohm","Volt","Ampere","Newton"], ans:0 }
);


// Science - Hard
bank.Science.hard.push(
  { q:"UPSSSC Science Hard Q1 ...", options:["A","B","C","D"], ans:2 },

  { q:"मानव शरीर में Insulin किस ग्रंथि से निकलता है?", options:["Thyroid","Pancreas","Liver","Kidney"], ans:1 },
  { q:"मानव शरीर में Thyroxine hormone किससे निकलता है?", options:["Thyroid","Pancreas","Adrenal","Pituitary"], ans:0 },
  { q:"मानव शरीर में सबसे छोटी हड्डी?", options:["Stapes","Femur","Tibia","Ulna"], ans:0 },
  { q:"मानव शरीर में सबसे लंबी हड्डी?", options:["Femur","Ulna","Radius","Skull"], ans:0 },
  { q:"मानव शरीर में रक्त का pH लगभग?", options:["5.2","6.8","7.4","8.5"], ans:2 },

  { q:"Electric power का formula?", options:["P=VI","P=IR","P=V/R","P=I/R"], ans:0 },
  { q:"Ohm's law क्या है?", options:["V=IR","P=VI","I=VR","R=VI"], ans:0 },
  { q:"Work का SI unit?", options:["Newton","Joule","Watt","Pascal"], ans:1 },
  { q:"Pressure का SI unit?", options:["Joule","Pascal","Watt","Ohm"], ans:1 },
  { q:"Heat का SI unit?", options:["Joule","Newton","Volt","Ampere"], ans:0 },

  { q:"सबसे अधिक चालक कौन?", options:["Copper","Rubber","Plastic","Wood"], ans:0 },
  { q:"सबसे अच्छा विद्युत निरोधक?", options:["Copper","Iron","Rubber","Aluminium"], ans:2 },
  { q:"गुरुत्वाकर्षण का मान (Earth) लगभग?", options:["9.8 m/s²","8.9 m/s²","10.8 m/s²","12 m/s²"], ans:0 },
  { q:"Newton का तीसरा नियम?", options:["Action-Reaction equal","Force=mass×acc","Energy conserved","None"], ans:0 },
  { q:"Speed of light लगभग?", options:["3×10^8 m/s","3×10^6 m/s","3×10^5 m/s","3×10^7 m/s"], ans:0 }
);

// =========================
// DELHI POLICE - ADD QUESTIONS
// =========================

// GK
// =========================
// DELHI POLICE - PART 1
// GK + Reasoning (Medium-Hard Mix)
// =========================


// =========================
// GK
// =========================

// GK - Easy (30)
bank.GK.easy.push(
  { q:"Delhi Police GK Easy Q1 ...", options:["A","B","C","D"], ans:0 },

  { q:"दिल्ली भारत की क्या है?", options:["राजधानी","राज्य","जिला","गाँव"], ans:0 },
  { q:"भारत की राजधानी क्या है?", options:["Mumbai","Delhi","Kolkata","Chennai"], ans:1 },
  { q:"भारत का राष्ट्रीय चिन्ह क्या है?", options:["कमल","अशोक स्तंभ","तिरंगा","चरखा"], ans:1 },
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

  { q:"भारत में कितने राज्य हैं?", options:["27","28","29","30"], ans:1 },
  { q:"भारत की मुद्रा क्या है?", options:["Dollar","Rupee","Euro","Yen"], ans:1 },
  { q:"जन गण मन किसने लिखा?", options:["Bankim","Tagore","Premchand","Nehru"], ans:1 },
  { q:"वंदे मातरम् किसने लिखा?", options:["Tagore","Bankim","Nehru","Gandhi"], ans:1 },
  { q:"UNO की स्थापना कब हुई?", options:["1940","1945","1950","1960"], ans:1 },

  { q:"WHO का मुख्यालय कहाँ है?", options:["Geneva","Paris","London","Tokyo"], ans:0 },
  { q:"UN का मुख्यालय कहाँ है?", options:["New York","Paris","Geneva","London"], ans:0 },
  { q:"भारत के प्रथम प्रधानमंत्री कौन थे?", options:["Nehru","Patel","Gandhi","Azad"], ans:0 },
  { q:"भारत के प्रथम राष्ट्रपति कौन थे?", options:["Rajendra Prasad","Nehru","Gandhi","Patel"], ans:0 },
  { q:"1 किलोमीटर में कितने मीटर होते हैं?", options:["100","500","1000","1500"], ans:2 },

  { q:"1 घंटे में कितने मिनट होते हैं?", options:["30","45","60","90"], ans:2 },
  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल)?", options:["UP","MP","Rajasthan","Bihar"], ans:2 },
  { q:"भारत की सबसे लंबी नदी कौन सी है?", options:["Yamuna","Ganga","Narmada","Tapti"], ans:1 },
  { q:"भारत का सबसे छोटा राज्य कौन सा है?", options:["Goa","Sikkim","Tripura","Manipur"], ans:0 },
  { q:"भारत का सबसे बड़ा महासागर?", options:["Indian","Atlantic","Pacific","Arctic"], ans:2 }
);


// GK - Medium (35)
bank.GK.medium.push(
  { q:"Delhi Police GK Medium Q1 ...", options:["A","B","C","D"], ans:1 },

  { q:"दिल्ली का पुराना नाम क्या था?", options:["Indraprastha","Ayodhya","Kashi","Mathura"], ans:0 },
  { q:"दिल्ली का प्रशासनिक प्रमुख कौन होता है?", options:["Governor","Lieutenant Governor","Speaker","Chief Justice"], ans:1 },
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
  { q:"नीति आयोग की स्थापना कब हुई?", options:["2012","2013","2015","2016"], ans:2 },
  { q:"योजना आयोग की जगह किसने ली?", options:["NITI Aayog","Finance Commission","CBI","CVC"], ans:0 },
  { q:"भाखड़ा नांगल बाँध किस नदी पर है?", options:["Sutlej","Ganga","Yamuna","Narmada"], ans:0 },

  { q:"तेहरी बाँध किस नदी पर है?", options:["Ganga","Bhagirathi","Yamuna","Narmada"], ans:1 },
  { q:"हीराकुंड बाँध किस नदी पर है?", options:["Mahanadi","Godavari","Tapti","Krishna"], ans:0 },
  { q:"किस नदी को 'दक्षिण गंगा' कहा जाता है?", options:["Krishna","Godavari","Cauvery","Mahanadi"], ans:1 },
  { q:"चिल्का झील किस राज्य में है?", options:["Odisha","WB","UP","MP"], ans:0 },
  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["Sundarbans","Godavari","Krishna","Mahanadi"], ans:0 },

  { q:"भारत के पहले मुख्य चुनाव आयुक्त कौन थे?", options:["Sukumar Sen","TN Seshan","Rajendra Prasad","Kamaraj"], ans:0 },
  { q:"भारत की पहली महिला प्रधानमंत्री कौन थीं?", options:["Indira Gandhi","Sonia Gandhi","Pratibha Patil","Sarojini Naidu"], ans:0 },
  { q:"भारत के पहले मुख्य न्यायाधीश कौन थे?", options:["H J Kania","Nehru","Ambedkar","Patel"], ans:0 },
  { q:"संविधान सभा के अध्यक्ष कौन थे?", options:["Nehru","Rajendra Prasad","Ambedkar","Patel"], ans:1 },
  { q:"Drafting Committee के अध्यक्ष कौन थे?", options:["Ambedkar","Nehru","Rajendra Prasad","Patel"], ans:0 },

  { q:"किस वेद को 'ज्ञान का वेद' कहा जाता है?", options:["ऋग्वेद","यजुर्वेद","सामवेद","अथर्ववेद"], ans:0 },
  { q:"बौद्ध धर्म के संस्थापक कौन थे?", options:["महावीर","गौतम बुद्ध","अशोक","कनिष्क"], ans:1 },
  { q:"मुगल साम्राज्य की स्थापना किसने की?", options:["अकबर","बाबर","हुमायूँ","शाहजहाँ"], ans:1 },
  { q:"भारत में पहली रेल कहाँ चली थी?", options:["Delhi-Agra","Mumbai-Thane","Kolkata-Howrah","Chennai-Madurai"], ans:1 },
  { q:"भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?", options:["1885","1905","1919","1947"], ans:0 },

  { q:"संविधान सभा का गठन कब हुआ?", options:["1942","1946","1947","1950"], ans:1 },
  { q:"भारत का पहला गवर्नर जनरल कौन था?", options:["Warren Hastings","Lord Mountbatten","Dalhousie","Curzon"], ans:1 },
  { q:"भारतीय रिजर्व बैंक का पहला गवर्नर?", options:["CD Deshmukh","Osborne Smith","RBI Board","Bimal Jalan"], ans:1 },
  { q:"संयुक्त राष्ट्र सुरक्षा परिषद में स्थायी सदस्य कितने?", options:["4","5","6","7"], ans:1 },
  { q:"भारत के राष्ट्रपति का चुनाव कौन करता है?", options:["केवल लोकसभा","केवल राज्यसभा","संसद + विधानसभाएँ","केवल जनता"], ans:2 }
);


// GK - Hard (35)
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

  { q:"भारत का संविधान किस देश से सबसे ज्यादा प्रभावित है?", options:["USA","UK","Canada","France"], ans:1 },
  { q:"संविधान सभा में उद्देश्य प्रस्ताव किसने रखा?", options:["Nehru","Patel","Ambedkar","Rajendra Prasad"], ans:0 },
  { q:"मूल संविधान में कितने अनुच्छेद थे?", options:["395","400","450","365"], ans:0 },
  { q:"मूल संविधान में कितनी अनुसूचियाँ थीं?", options:["8","10","12","14"], ans:0 },
  { q:"संविधान कब लागू हुआ?", options:["15 Aug 1947","26 Jan 1950","2 Oct 1949","1 Jan 1951"], ans:1 },

  { q:"मौलिक अधिकारों को निलंबित करने का प्रावधान?", options:["Article 19","Article 20","Article 21","Article 359"], ans:3 },
  { q:"संविधान की प्रस्तावना में 'समाजवादी' शब्द कब जोड़ा गया?", options:["1950","1976","1991","2002"], ans:1 },
  { q:"भारत में वित्त आयोग कितने वर्ष में बनता है?", options:["3","4","5","6"], ans:2 },
  { q:"लोकसभा में धन विधेयक कौन पेश करता है?", options:["PM","Finance Minister","Speaker","CJI"], ans:1 },
  { q:"भारत के नियंत्रक एवं महालेखा परीक्षक की नियुक्ति कौन करता है?", options:["PM","President","CJI","Parliament"], ans:1 },

  { q:"भारत के उपराष्ट्रपति का चुनाव कौन करता है?", options:["केवल लोकसभा","केवल राज्यसभा","संसद के दोनों सदन","जनता"], ans:2 },
  { q:"राज्यसभा का सदस्य बनने की न्यूनतम आयु?", options:["21","25","30","35"], ans:2 },
  { q:"लोकसभा का सदस्य बनने की न्यूनतम आयु?", options:["21","25","30","35"], ans:1 },
  { q:"भारत में पहला आम चुनाव कब हुआ?", options:["1951-52","1955","1962","1947"], ans:0 },
  { q:"संविधान में 'न्यायपालिका' किस भाग में आती है?", options:["Part III","Part IV","Part V","Part VI"], ans:2 }
);



// =========================
// REASONING
// =========================

// Reasoning - Easy (25)
bank.Reasoning.easy.push(
  { q:"Delhi Police Reasoning Easy Q1 ...", options:["A","B","C","D"], ans:0 },

  { q:"Series: 3, 6, 9, 12, ?", options:["13","14","15","16"], ans:2 },
  { q:"Series: 2, 4, 8, 16, ?", options:["18","24","30","32"], ans:3 },
  { q:"Series: 5, 10, 20, 40, ?", options:["60","70","80","90"], ans:2 },
  { q:"Odd one out: Pen, Pencil, Eraser, Mango", options:["Pen","Pencil","Eraser","Mango"], ans:3 },
  { q:"Odd one out: 11, 13, 17, 21", options:["11","13","17","21"], ans:3 },

  { q:"If A=1 then D=?", options:["2","3","4","5"], ans:2 },
  { q:"If Z=26 then X=?", options:["22","23","24","25"], ans:2 },
  { q:"Opposite of North?", options:["East","West","South","None"], ans:2 },
  { q:"Day after Thursday?", options:["Friday","Saturday","Sunday","Monday"], ans:0 },
  { q:"How many sides in rectangle?", options:["2","3","4","5"], ans:2 },

  { q:"Next: 7,14,21,28, ?", options:["30","32","35","40"], ans:2 },
  { q:"Next: 1,4,9,16, ?", options:["20","25","30","36"], ans:1 },
  { q:"Next: 9,18,27,36, ?", options:["40","45","48","54"], ans:1 },
  { q:"Next: 6,12,18,24, ?", options:["28","30","32","36"], ans:1 },
  { q:"Next: 10,20,30,40, ?", options:["45","50","55","60"], ans:1 },

  { q:"Which is a bird?", options:["Cow","Crow","Dog","Cat"], ans:1 },
  { q:"Which is a fruit?", options:["Potato","Onion","Mango","Carrot"], ans:2 },
  { q:"Which is a metal?", options:["Plastic","Iron","Wood","Rubber"], ans:1 },
  { q:"How many minutes in 2 hours?", options:["100","110","120","130"], ans:2 },
  { q:"How many letters in DELHI?", options:["4","5","6","7"], ans:1 },

  { q:"10 is 5% of ?", options:["100","150","200","250"], ans:2 },
  { q:"If today is Monday, after 2 days?", options:["Tuesday","Wednesday","Thursday","Friday"], ans:1 },
  { q:"Which number is smallest?", options:["0.5","0.05","0.005","0.55"], ans:2 },
  { q:"Complete: 2, 6, 12, 20, ?", options:["28","30","32","36"], ans:0 },
  { q:"Complete: 1, 2, 6, 24, ?", options:["48","60","120","144"], ans:2 }
);


// Reasoning - Medium (30)
bank.Reasoning.medium.push(
  { q:"Delhi Police Reasoning Medium Q1 ...", options:["A","B","C","D"], ans:1 },

  { q:"Coding: CAT = DBU, DOG = ?", options:["EPH","EPI","FPH","DPH"], ans:0 },
  { q:"Find missing: 3,6,12,24, ?", options:["36","40","48","50"], ans:2 },
  { q:"Find missing: 2,6,18,54, ?", options:["108","144","162","216"], ans:2 },
  { q:"Find missing: 1,3,7,15, ?", options:["25","31","33","35"], ans:1 },
  { q:"Find missing: 4,9,19,39, ?", options:["69","79","89","99"], ans:1 },

  { q:"Series: 6,11,16,21, ?", options:["24","25","26","27"], ans:1 },
  { q:"Series: 8,16,24,32, ?", options:["36","40","48","56"], ans:1 },
  { q:"Series: 10, 15, 21, 28, ?", options:["34","35","36","37"], ans:2 },
  { q:"Series: 7, 10, 14, 19, ?", options:["23","24","25","26"], ans:1 },
  { q:"Series: 2, 5, 9, 14, ?", options:["18","19","20","21"], ans:0 },

  { q:"If 12 is coded as 21 then 34 as?", options:["43","44","33","24"], ans:0 },
  { q:"If 56 is coded as 65 then 78 as?", options:["87","88","77","67"], ans:0 },
  { q:"If 23 is coded as 32 then 45 as?", options:["54","55","44","35"], ans:0 },
  { q:"If A=26, B=25 then D=?", options:["24","23","22","21"], ans:1 },
  { q:"If C=24 then E=?", options:["22","21","20","19"], ans:0 },

  { q:"Which comes next: AZ, BY, CX, ?", options:["DW","EV","FU","GV"], ans:0 },
  { q:"Which comes next: 1A, 2B, 3C, ?", options:["4D","5E","6F","7G"], ans:0 },
  { q:"Which comes next: AB, CD, EF, ?", options:["GH","GI","HG","HI"], ans:0 },
  { q:"Which comes next: A1, B2, C3, ?", options:["D4","E5","F6","G7"], ans:0 },
  { q:"Which comes next: 2A, 4B, 6C, ?", options:["8D","10E","12F","14G"], ans:0 },

  { q:"A is taller than B, B taller than C. Tallest?", options:["A","B","C","None"], ans:0 },
  { q:"A is shorter than B, B shorter than C. Shortest?", options:["A","B","C","None"], ans:0 },
  { q:"In a row, P is 5th from left and Q is 9th from left. Q is?", options:["4 left","4 right","same","Cannot say"], ans:1 },
  { q:"In a row total 10. A is 3rd left, B is 4th right. A is?", options:["Left of B","Right of B","Same","Cannot say"], ans:0 },
  { q:"In a row total 8. R is 4th left, S is 3rd right. R is?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },

  { q:"Mirror image is related to?", options:["Reflection","Rotation","Translation","None"], ans:0 },
  { q:"Clock shows 3:00. Angle between hands?", options:["60°","75°","90°","120°"], ans:2 },
  { q:"Find odd: Square, Circle, Triangle, Apple", options:["Square","Circle","Triangle","Apple"], ans:3 },
  { q:"Find odd: 13, 17, 19, 21", options:["13","17","19","21"], ans:3 },
  { q:"Find odd: Bus, Train, Ship, Cow", options:["Bus","Train","Ship","Cow"], ans:3 }
);


// Reasoning - Hard (30)
bank.Reasoning.hard.push(
  { q:"Delhi Police Reasoning Hard Q1 ...", options:["A","B","C","D"], ans:2 },

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

  { q:"All fruits are sweet. Mango is a fruit. Conclusion?", options:["Mango sweet","Mango sour","Mango not fruit","None"], ans:0 },
  { q:"All cars are vehicles. Some vehicles are bikes. Conclusion?", options:["All cars bikes","Some cars bikes","No car bike","None"], ans:3 },
  { q:"All boys are students. Some students are players. Conclusion?", options:["All boys players","Some boys players","No boys players","None"], ans:3 },
  { q:"All pens are tools. Some tools are books. Conclusion?", options:["All pens books","Some pens books","No pen book","None"], ans:3 },
  { q:"All cats are animals. Some animals are dogs. Conclusion?", options:["Some cats dogs","All dogs cats","No dogs cats","None"], ans:3 },

  { q:"If SOUTH is coded as TQVUI, then NORTH is?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"If INDIA is coded as JOEJB, then CHINA is?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },
  { q:"If 123 is coded as 234 then 789 is coded as?", options:["891","890","8910","91011"], ans:0 },
  { q:"If 579 is coded as 6810 then 468 is coded as?", options:["579","579","5710","5799"], ans:0 },

  { q:"A is 2nd left of B, B is 3rd right of C. A is?", options:["Left of C","Right of C","Same","Cannot say"], ans:0 },
  { q:"In a row total 7. A is 3rd from left, B is 5th from right. A is?", options:["Same as B","Left of B","Right of B","Cannot say"], ans:0 },
  { q:"In a row total 8. R is 4th left, S is 3rd right. R is?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },
  { q:"In a row, M is 6th left, N is 2nd left. N is?", options:["4 left of M","4 right of M","Same","Cannot say"], ans:0 },
  { q:"In a row, P is 5th left, Q is 9th left. Q is?", options:["4 left","4 right","same","Cannot say"], ans:1 },

  { q:"Find missing: 3,8,18,38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 4,9,19,39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 5,12,26,54, ?", options:["98","108","110","112"], ans:1 },
  { q:"Find missing: 7,16,34,70, ?", options:["140","142","144","146"], ans:1 },
  { q:"Find missing: 6,13,27,55, ?", options:["105","109","111","115"], ans:2 },

  { q:"Clock: At 2:20 angle between hands?", options:["40°","50°","60°","70°"], ans:1 },
  { q:"Clock: At 3:15 angle between hands?", options:["0°","7.5°","15°","22.5°"], ans:1 },
  { q:"Clock: At 6:00 angle between hands?", options:["90°","120°","150°","180°"], ans:3 },
  { q:"Clock: At 9:00 angle between hands?", options:["90°","120°","180°","270°"], ans:2 },
  { q:"Clock: At 12:30 angle between hands?", options:["150°","165°","180°","195°"], ans:1 }
);
// =========================
// DELHI POLICE - PART 2
// Math + English (Medium-Hard Mix)
// Same Format (bank.Math / bank.English)
// =========================


// =========================
// MATH
// =========================

// Math - Easy (30)
bank.Math.easy.push(
  { q:"Delhi Police Math Easy Q1 ...", options:["A","B","C","D"], ans:0 },

  { q:"56 + 39 = ?", options:["85","90","95","100"], ans:2 },
  { q:"125 - 48 = ?", options:["67","77","87","97"], ans:1 },
  { q:"18 × 7 = ?", options:["112","116","126","136"], ans:2 },
  { q:"144 ÷ 12 = ?", options:["10","11","12","13"], ans:2 },
  { q:"35 × 9 = ?", options:["305","315","325","335"], ans:1 },

  { q:"20% of 450 = ?", options:["70","80","90","100"], ans:2 },
  { q:"15% of 200 = ?", options:["20","25","30","35"], ans:2 },
  { q:"12.5% of 240 = ?", options:["20","25","30","35"], ans:2 },
  { q:"5% of 900 = ?", options:["35","40","45","50"], ans:2 },
  { q:"10% of 640 = ?", options:["54","60","64","70"], ans:2 },

  { q:"1/2 of 360 = ?", options:["160","170","180","190"], ans:2 },
  { q:"3/4 of 200 = ?", options:["130","140","150","160"], ans:2 },
  { q:"2/5 of 350 = ?", options:["120","130","140","150"], ans:2 },
  { q:"5/8 of 320 = ?", options:["180","190","200","210"], ans:2 },
  { q:"4/7 of 210 = ?", options:["110","120","130","140"], ans:1 },

  { q:"यदि 8x = 96 तो x = ?", options:["10","11","12","13"], ans:2 },
  { q:"यदि 7x = 84 तो x = ?", options:["10","11","12","13"], ans:2 },
  { q:"यदि x/4 = 9 तो x = ?", options:["32","34","36","38"], ans:2 },
  { q:"यदि 3x + 12 = 60 तो x = ?", options:["14","15","16","18"], ans:1 },
  { q:"यदि 5x - 15 = 60 तो x = ?", options:["12","13","14","15"], ans:3 },

  { q:"एक संख्या का 25% = 125 है, संख्या = ?", options:["450","480","500","520"], ans:2 },
  { q:"एक संख्या का 20% = 140 है, संख्या = ?", options:["650","680","700","720"], ans:2 },
  { q:"एक संख्या का 10% = 90 है, संख्या = ?", options:["800","850","900","950"], ans:2 },
  { q:"एक संख्या का 40% = 320 है, संख्या = ?", options:["720","760","800","840"], ans:2 },
  { q:"एक संख्या का 30% = 210 है, संख्या = ?", options:["650","680","700","720"], ans:2 },

  { q:"Average of 12, 18, 30 = ?", options:["18","19","20","22"], ans:2 },
  { q:"Average of 15, 25, 35 = ?", options:["20","25","30","35"], ans:1 },
  { q:"Average of 8, 16, 24, 32 = ?", options:["18","20","22","24"], ans:1 },
  { q:"Average of 7, 14, 21, 28 = ?", options:["14","16","17.5","18"], ans:2 },
  { q:"Average of 10, 20, 40, 50 = ?", options:["25","28","30","32"], ans:1 }
);


// Math - Medium (35)
bank.Math.medium.push(
  { q:"Delhi Police Math Medium Q1 ...", options:["A","B","C","D"], ans:1 },

  // Simple Interest
  { q:"SI: P=2400, R=10%, T=3 => SI=?", options:["600","650","720","800"], ans:2 },
  { q:"SI: P=1800, R=12%, T=2 => SI=?", options:["360","400","432","480"], ans:2 },
  { q:"SI: P=5000, R=8%, T=2 => SI=?", options:["700","750","800","850"], ans:2 },
  { q:"SI: P=3200, R=5%, T=4 => SI=?", options:["560","600","640","680"], ans:2 },
  { q:"SI: P=1500, R=15%, T=2 => SI=?", options:["420","450","480","500"], ans:1 },

  // Profit Loss
  { q:"CP=1200, Profit=25% => SP=?", options:["1400","1450","1500","1550"], ans:2 },
  { q:"CP=800, Loss=10% => SP=?", options:["700","720","740","760"], ans:1 },
  { q:"SP=1320, Profit=10% => CP=?", options:["1100","1150","1200","1250"], ans:2 },
  { q:"SP=720, Loss=20% => CP=?", options:["850","880","900","920"], ans:2 },
  { q:"CP=1600, Profit=12.5% => SP=?", options:["1750","1780","1800","1820"], ans:2 },

  // Time Speed Distance
  { q:"Speed=60 km/h, Time=2.5h => Distance=?", options:["120","140","150","160"], ans:2 },
  { q:"Speed=45 km/h, Time=4h => Distance=?", options:["160","170","180","190"], ans:2 },
  { q:"Distance=240 km, Speed=80 km/h => Time=?", options:["2h","2.5h","3h","3.5h"], ans:2 },
  { q:"Distance=360 km, Speed=90 km/h => Time=?", options:["3h","4h","5h","6h"], ans:0 },
  { q:"Speed=72 km/h, Time=3h => Distance=?", options:["200","210","216","240"], ans:2 },

  // Percentage Reverse
  { q:"यदि 18% = 126 तो संख्या=?", options:["650","680","700","720"], ans:2 },
  { q:"यदि 25% = 225 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 12% = 108 तो संख्या=?", options:["800","850","900","950"], ans:2 },
  { q:"यदि 15% = 150 तो संख्या=?", options:["900","950","1000","1050"], ans:2 },
  { q:"यदि 30% = 270 तो संख्या=?", options:["800","850","900","950"], ans:2 },

  // Ratio
  { q:"Ratio 3:5 में कुल 160 है, बड़ा भाग=?", options:["90","95","100","110"], ans:2 },
  { q:"Ratio 4:7 में कुल 242 है, छोटा भाग=?", options:["80","88","96","100"], ans:1 },
  { q:"Ratio 5:9 में कुल 280 है, बड़ा भाग=?", options:["150","160","170","180"], ans:1 },
  { q:"Ratio 7:8 में कुल 300 है, छोटा भाग=?", options:["120","130","140","150"], ans:2 },
  { q:"Ratio 2:3 में कुल 250 है, छोटा भाग=?", options:["90","100","110","120"], ans:1 },

  // Average
  { q:"Average of 18,22,26,30 = ?", options:["22","23","24","25"], ans:2 },
  { q:"Average of 15,25,35,45 = ?", options:["28","30","32","35"], ans:1 },
  { q:"Average of 11,22,33,44 = ?", options:["25","27","28","30"], ans:0 },
  { q:"Average of 20,30,40,50,60 = ?", options:["35","38","40","42"], ans:2 },
  { q:"Average of 14,28,42 = ?", options:["26","28","30","32"], ans:1 },

  // Mixture / Alligation (exam type)
  { q:"Milk:Water = 3:2. Total 25L. Water = ?", options:["8L","10L","12L","15L"], ans:1 },
  { q:"A mixture has ratio 5:3 (Tea:Sugar). Total 32. Sugar = ?", options:["10","12","14","16"], ans:1 },
  { q:"In a class boys:girls = 7:5, total 48. Girls=?", options:["18","20","22","24"], ans:1 },
  { q:"A sum is divided in ratio 2:3:5, total=500. Largest part=?", options:["200","250","300","350"], ans:0 },
  { q:"A bag has 60% red balls. Total 50 balls. Red=?", options:["25","30","35","40"], ans:3 }
);


// Math - Hard (35)
bank.Math.hard.push(
  { q:"Delhi Police Math Hard Q1 ...", options:["A","B","C","D"], ans:2 },

  // Compound Interest
  { q:"CI: P=2000, R=10%, T=2 => Amount?", options:["2200","2400","2420","2600"], ans:2 },
  { q:"CI: P=5000, R=8%, T=2 => Amount?", options:["5600","5832","6000","6200"], ans:1 },
  { q:"CI: P=10000, R=5%, T=2 => Amount?", options:["10500","11000","11025","11250"], ans:2 },
  { q:"CI: P=8000, R=12%, T=2 => Amount?", options:["9600","9800","10035.2","10200"], ans:2 },
  { q:"CI: P=4000, R=15%, T=2 => Amount?", options:["5200","5290","5290","5400"], ans:2 },

  // Pipes & Cistern
  { q:"Pipe A fills in 12h, B fills in 18h. Together time?", options:["6h","7.2h","8h","9h"], ans:1 },
  { q:"A fills in 10h, outlet empties in 15h. Net time?", options:["20h","25h","30h","35h"], ans:1 },
  { q:"A fills in 8h, B empties in 12h. Net time?", options:["18h","20h","24h","30h"], ans:2 },
  { q:"A fills in 15h, B fills in 30h. Together time?", options:["8h","9h","10h","12h"], ans:0 },
  { q:"A fills in 18h, B fills in 24h. Together time?", options:["9h","10h","11h","12h"], ans:1 },

  // Trains
  { q:"Train 72 km/h crosses 180m pole in 12 sec. Length?", options:["40m","50m","60m","70m"], ans:2 },
  { q:"Train 90 km/h crosses 250m platform in 20 sec. Length?", options:["200m","220m","250m","300m"], ans:2 },
  { q:"Train 54 km/h crosses 150m pole in 10 sec. Length?", options:["120m","130m","140m","150m"], ans:0 },
  { q:"Train 108 km/h crosses 300m platform in 20 sec. Length?", options:["250m","280m","300m","320m"], ans:2 },
  { q:"Train 60 km/h crosses 200m pole in 15 sec. Length?", options:["40m","45m","50m","55m"], ans:2 },

  // Time & Work
  { q:"A can do work in 18 days, B in 12 days. Together time?", options:["7.2","8","9","10"], ans:0 },
  { q:"A does in 15 days, B in 10 days. Together time?", options:["5","6","7","8"], ans:0 },
  { q:"A does in 24 days, B in 16 days. Together time?", options:["9.6","10","11","12"], ans:0 },
  { q:"A does in 30 days, B in 20 days. Together time?", options:["10","12","15","18"], ans:0 },
  { q:"A does in 12 days, B in 8 days. Together time?", options:["4.8","5","6","7"], ans:0 },

  // Linear Equations
  { q:"If x+y=50 and x-y=10 then x=?", options:["25","28","30","35"], ans:2 },
  { q:"If 7x-11=94 then x=?", options:["13","14","15","16"], ans:1 },
  { q:"If 5x+9=109 then x=?", options:["18","19","20","21"], ans:1 },
  { q:"If x/3 + 8 = 20 then x=?", options:["30","33","36","39"], ans:2 },
  { q:"If 4x-7=85 then x=?", options:["20","21","23","24"], ans:1 },

  // Mensuration (Delhi Police asked type)
  { q:"Area of rectangle (l=12, b=8) = ?", options:["80","90","96","100"], ans:2 },
  { q:"Perimeter of square (side=9) = ?", options:["30","32","34","36"], ans:3 },
  { q:"Area of circle (r=7) (π=22/7) = ?", options:["132","144","154","176"], ans:3 },
  { q:"Volume of cube (side=5) = ?", options:["100","110","120","125"], ans:3 },
  { q:"Area of triangle (b=12, h=10) = ?", options:["50","60","70","80"], ans:1 }
);



// =========================
// ENGLISH
// =========================

// English - Easy (25)
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

  { q:"Fill: He ___ tea.", options:["drink","drinks","drinking","drank"], ans:1 },
  { q:"Fill: They ___ playing.", options:["is","are","was","be"], ans:1 },
  { q:"Fill: I ___ a pen.", options:["have","has","had","having"], ans:0 },
  { q:"Fill: She ___ to school.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: We ___ friends.", options:["is","are","was","be"], ans:1 },

  { q:"Plural of Child?", options:["Childs","Children","Childrens","Childes"], ans:1 },
  { q:"Plural of Man?", options:["Mans","Mens","Men","Manes"], ans:2 },
  { q:"Plural of Woman?", options:["Womans","Women","Womens","Womanes"], ans:1 },
  { q:"Plural of Foot?", options:["Foots","Feets","Feet","Fets"], ans:2 },
  { q:"Plural of Tooth?", options:["Tooths","Teeth","Toothes","Toothes"], ans:1 },

  { q:"Opposite of TRUE?", options:["False","Right","Sure","Pure"], ans:0 },
  { q:"Opposite of OLD?", options:["New","Young","Fresh","All"], ans:1 },
  { q:"Opposite of OPEN?", options:["Close","Shut","Both","None"], ans:2 },
  { q:"Opposite of LIGHT?", options:["Bright","Dark","White","Clear"], ans:1 },
  { q:"Opposite of RICH?", options:["Poor","Strong","Big","Happy"], ans:0 }
);


// English - Medium (30)
bank.English.medium.push(
  { q:"Delhi Police English Medium Q1 ...", options:["A","B","C","D"], ans:1 },

  // Fill in the blanks (Tense)
  { q:"Fill: He ___ to school daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: The sun ___ in the east.", options:["rise","rises","rising","rose"], ans:1 },
  { q:"Choose correct: I have ___ my work.", options:["done","do","did","doing"], ans:0 },
  { q:"Choose correct: She is ___ honest girl.", options:["a","an","the","no"], ans:1 },
  { q:"Fill: They ___ watching TV.", options:["is","are","was","be"], ans:1 },

  // Sentence correction
  { q:"Correct: I ___ a letter yesterday.", options:["write","writes","wrote","written"], ans:2 },
  { q:"Correct: She ___ not come.", options:["do","does","did","done"], ans:1 },
  { q:"Correct: He ___ been to Delhi.", options:["has","have","had","having"], ans:0 },
  { q:"Correct: They ___ finished the work.", options:["has","have","had","having"], ans:1 },
  { q:"Correct: We ___ late today.", options:["is","are","was","be"], ans:1 },

  // Synonyms
  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },
  { q:"Synonym of DANGER?", options:["Risk","Safe","Good","Peace"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },

  // Antonyms
  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },

  // Subject-Verb Agreement (asked type)
  { q:"Correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 },
  { q:"Correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },

  // Prepositions
  { q:"Choose correct: He is good ___ Maths.", options:["in","at","on","for"], ans:1 },
  { q:"Choose correct: She is fond ___ music.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: I am afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"Choose correct: He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"Choose correct: She is married ___ him.", options:["with","to","by","on"], ans:1 }
);


// English - Hard (30)
bank.English.hard.push(
  { q:"Delhi Police English Hard Q1 ...", options:["A","B","C","D"], ans:2 },

  // Vocabulary
  { q:"Meaning of 'inevitable'?", options:["avoidable","certain","weak","slow"], ans:1 },
  { q:"Meaning of 'abandon'?", options:["leave","eat","run","build"], ans:0 },
  { q:"Meaning of 'transparent'?", options:["clear","dirty","heavy","weak"], ans:0 },
  { q:"Meaning of 'persistent'?", options:["continuous","lazy","weak","slow"], ans:0 },
  { q:"Meaning of 'fragile'?", options:["strong","breakable","heavy","fast"], ans:1 },

  // Passive voice
  { q:"Correct passive: 'They made a plan.'", options:["A plan made","A plan was made","Plan is made","Plan made"], ans:1 },
  { q:"Correct passive: 'He writes a letter.'", options:["A letter is written by him","A letter was written","A letter written","Letter is wrote"], ans:0 },
  { q:"Correct passive: 'She cooks food.'", options:["Food cooked","Food is cooked","Food was cooked","Food is cook"], ans:1 },
  { q:"Correct passive: 'They help me.'", options:["I am helped by them","I helped by them","I was help by them","I is helped"], ans:0 },
  { q:"Correct passive: 'We play cricket.'", options:["Cricket played","Cricket is played","Cricket was play","Cricket is play"], ans:1 },

  // One word substitution
  { q:"One word: One who loves books", options:["Bibliophile","Philosopher","Librarian","Editor"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Optimist","Philanthropist","Pessimist"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: A person who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },
  { q:"One word: One who can do many works", options:["Versatile","Lazy","Weak","Slow"], ans:0 },

  // Grammar (high frequency)
  { q:"Choose correct: If I ___ rich, I would help you.", options:["am","was","were","be"], ans:2 },
  { q:"Choose correct: He said that he ___ busy.", options:["is","was","were","be"], ans:1 },
  { q:"Choose correct: I wish I ___ a car.", options:["have","had","has","having"], ans:1 },
  { q:"Choose correct: It is time we ___ home.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: She suggested that he ___ rest.", options:["take","takes","took","taken"], ans:0 },

  // Error spotting
  { q:"Spot error: He do not like tea.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 },

  // Advanced patterns (asked in constable exams)
  { q:"Choose correct: No sooner ___ I reached than it started raining.", options:["had","have","has","was"], ans:0 },
  { q:"Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 },
  { q:"Choose correct: She is interested ___ music.", options:["on","in","at","by"], ans:1 }
);
// =========================
// DELHI POLICE - PART 3
// GK + Reasoning (Medium-Hard + Exam Level)
// Same Format
// =========================


// =========================
// GK
// =========================

// GK - Easy (25)
bank.GK.easy.push(
  { q:"Delhi Police GK Easy Q2 ...", options:["A","B","C","D"], ans:0 },

  { q:"भारत का राष्ट्रीय वृक्ष कौन सा है?", options:["पीपल","बरगद","नीम","आम"], ans:1 },
  { q:"भारत का राष्ट्रीय फल कौन सा है?", options:["केला","आम","सेब","अंगूर"], ans:1 },
  { q:"भारत का राष्ट्रीय जलीय जीव कौन है?", options:["डॉल्फिन","कछुआ","व्हेल","मगरमच्छ"], ans:0 },
  { q:"भारत का राष्ट्रीय ध्वज कितने रंगों का है?", options:["2","3","4","5"], ans:1 },
  { q:"भारत का राष्ट्रीय आदर्श वाक्य क्या है?", options:["जय हिंद","सत्यमेव जयते","वंदे मातरम्","इंकलाब जिंदाबाद"], ans:1 },

  { q:"भारत के राष्ट्रपति का कार्यकाल कितने वर्ष का होता है?", options:["4","5","6","7"], ans:1 },
  { q:"भारत के उपराष्ट्रपति का कार्यकाल कितने वर्ष?", options:["4","5","6","7"], ans:1 },
  { q:"लोकसभा का अधिकतम सदस्य संख्या कितनी है?", options:["545","552","560","500"], ans:1 },
  { q:"राज्यसभा का अधिकतम सदस्य संख्या कितनी है?", options:["200","220","245","250"], ans:2 },
  { q:"भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?", options:["PM","President","CM","Speaker"], ans:1 },

  { q:"भारतीय संविधान कब अपनाया गया?", options:["26 Jan 1950","26 Nov 1949","15 Aug 1947","2 Oct 1949"], ans:1 },
  { q:"भारतीय संविधान किस दिन लागू हुआ?", options:["26 Jan 1950","15 Aug 1947","26 Nov 1949","1 Jan 1951"], ans:0 },
  { q:"भारत का संविधान किस देश के संविधान से सबसे अधिक प्रभावित है?", options:["USA","UK","France","Russia"], ans:1 },
  { q:"भारत का संविधान दुनिया का सबसे बड़ा लिखित संविधान है?", options:["हाँ","नहीं","कभी-कभी","पता नहीं"], ans:0 },
  { q:"संविधान की प्रस्तावना में कितने शब्द जोड़े गए (1976)?", options:["1","2","3","4"], ans:1 },

  { q:"भारत में योजना आयोग की स्थापना कब हुई?", options:["1947","1950","1951","1955"], ans:1 },
  { q:"NITI Aayog की स्थापना कब हुई?", options:["2012","2013","2015","2016"], ans:2 },
  { q:"RBI का मुख्यालय कहाँ है?", options:["Delhi","Mumbai","Kolkata","Chennai"], ans:1 },
  { q:"भारत का पहला उपग्रह कौन सा था?", options:["INSAT","Aryabhata","Rohini","Bhaskara"], ans:1 },
  { q:"ISRO की स्थापना कब हुई?", options:["1962","1969","1972","1980"], ans:1 },

  { q:"विश्व पर्यावरण दिवस कब मनाया जाता है?", options:["5 June","21 June","2 Oct","15 Aug"], ans:0 },
  { q:"विश्व जल दिवस कब मनाया जाता है?", options:["22 March","5 June","1 May","26 Jan"], ans:0 },
  { q:"विश्व स्वास्थ्य दिवस कब मनाया जाता है?", options:["7 April","5 June","22 March","2 Oct"], ans:0 },
  { q:"राष्ट्रीय विज्ञान दिवस कब मनाया जाता है?", options:["28 Feb","15 Aug","26 Jan","5 Sep"], ans:0 },
  { q:"भारत में शिक्षक दिवस कब मनाया जाता है?", options:["5 Sep","14 Nov","2 Oct","1 May"], ans:0 }
);


// GK - Medium (30)
bank.GK.medium.push(
  { q:"Delhi Police GK Medium Q2 ...", options:["A","B","C","D"], ans:1 },

  // Polity
  { q:"संविधान सभा में उद्देश्य प्रस्ताव किसने रखा?", options:["Nehru","Patel","Ambedkar","Rajendra Prasad"], ans:0 },
  { q:"भारतीय संविधान का जनक किसे कहा जाता है?", options:["Nehru","Ambedkar","Patel","Gandhi"], ans:1 },
  { q:"मौलिक अधिकार कितने हैं (वर्तमान)?", options:["5","6","7","8"], ans:1 },
  { q:"मूल अधिकार किस भाग में हैं?", options:["Part II","Part III","Part IV","Part V"], ans:1 },
  { q:"DPSP किस भाग में हैं?", options:["Part III","Part IV","Part V","Part VI"], ans:1 },

  // Economy
  { q:"भारत में GST कब लागू हुआ?", options:["2016","2017","2018","2019"], ans:1 },
  { q:"भारत में आर्थिक सर्वेक्षण कौन प्रस्तुत करता है?", options:["PM","FM","RBI Governor","CAG"], ans:1 },
  { q:"भारत का बजट कौन प्रस्तुत करता है?", options:["PM","FM","Speaker","CJI"], ans:1 },
  { q:"भारत का केंद्रीय बैंक कौन है?", options:["SBI","RBI","PNB","NABARD"], ans:1 },
  { q:"SEBI का मुख्यालय कहाँ है?", options:["Delhi","Mumbai","Kolkata","Chennai"], ans:1 },

  // Science
  { q:"मानव शरीर का सबसे बड़ा अंग कौन सा है?", options:["Heart","Skin","Liver","Brain"], ans:1 },
  { q:"मानव शरीर में रक्त का pH लगभग कितना होता है?", options:["5.5","6.8","7.4","8.2"], ans:2 },
  { q:"विटामिन C की कमी से कौन सा रोग होता है?", options:["Rickets","Scurvy","Night blindness","Goitre"], ans:1 },
  { q:"विटामिन D की कमी से कौन सा रोग होता है?", options:["Rickets","Scurvy","Beriberi","Anemia"], ans:0 },
  { q:"रक्त में हीमोग्लोबिन किस धातु से बनता है?", options:["Copper","Iron","Zinc","Calcium"], ans:1 },

  // Geography
  { q:"भारत का सबसे बड़ा पठार कौन सा है?", options:["Chota Nagpur","Deccan","Malwa","Bundelkhand"], ans:1 },
  { q:"भारत की सबसे लंबी नदी (भारत में) कौन सी है?", options:["Yamuna","Ganga","Godavari","Narmada"], ans:1 },
  { q:"गंगा नदी का उद्गम कहाँ से होता है?", options:["Gangotri","Yamunotri","Kedarnath","Badrinath"], ans:0 },
  { q:"थार मरुस्थल किस राज्य में है?", options:["Gujarat","Rajasthan","MP","UP"], ans:1 },
  { q:"सतपुड़ा पर्वत किस दिशा में फैला है?", options:["East-West","North-South","Circular","None"], ans:0 },

  // History
  { q:"प्लासी का युद्ध कब हुआ था?", options:["1757","1764","1857","1707"], ans:0 },
  { q:"बक्सर का युद्ध कब हुआ था?", options:["1757","1764","1857","1784"], ans:1 },
  { q:"1857 की क्रांति का मुख्य कारण क्या था?", options:["सामाजिक","धार्मिक","राजनीतिक-आर्थिक","सभी"], ans:3 },
  { q:"स्वदेशी आंदोलन किस वर्ष शुरू हुआ?", options:["1905","1915","1920","1930"], ans:0 },
  { q:"भारत छोड़ो आंदोलन कब शुरू हुआ?", options:["1940","1942","1945","1935"], ans:1 },

  // Current + Static
  { q:"UN का मुख्यालय कहाँ है?", options:["Geneva","Paris","New York","London"], ans:2 },
  { q:"WHO का मुख्यालय कहाँ है?", options:["New York","Geneva","Paris","Rome"], ans:1 },
  { q:"विश्व व्यापार संगठन (WTO) का मुख्यालय कहाँ है?", options:["Geneva","Paris","London","Tokyo"], ans:0 },
  { q:"NATO का मुख्यालय कहाँ है?", options:["Paris","Brussels","Rome","Berlin"], ans:1 },
  { q:"SAARC का मुख्यालय कहाँ है?", options:["Kathmandu","Delhi","Dhaka","Colombo"], ans:0 }
);


// GK - Hard (30)
bank.GK.hard.push(
  { q:"Delhi Police GK Hard Q2 ...", options:["A","B","C","D"], ans:2 },

  // Polity Deep
  { q:"संविधान की प्रस्तावना में 'Socialist' और 'Secular' शब्द कब जोड़े गए?", options:["1950","1967","1976","1985"], ans:2 },
  { q:"42वां संविधान संशोधन किस वर्ष हुआ?", options:["1971","1976","1980","1985"], ans:1 },
  { q:"44वां संविधान संशोधन किस वर्ष हुआ?", options:["1976","1978","1982","1985"], ans:1 },
  { q:"मौलिक अधिकारों का निलंबन किस अनुच्छेद में है?", options:["352","358","360","368"], ans:1 },
  { q:"अनुच्छेद 32 किससे संबंधित है?", options:["संशोधन","संवैधानिक उपचार","आपातकाल","राष्ट्रपति"], ans:1 },

  { q:"भारत में न्यायिक पुनरावलोकन की अवधारणा किस देश से ली गई?", options:["UK","USA","France","Japan"], ans:1 },
  { q:"संविधान में संघीय व्यवस्था किस देश से प्रभावित है?", options:["Canada","USA","UK","France"], ans:0 },
  { q:"राज्यसभा एक स्थायी सदन है, इसका कारण?", options:["भंग नहीं होती","कार्यकाल 5 साल","चुनाव नहीं","सीधे चुनाव"], ans:0 },
  { q:"भारत में राष्ट्रपति का चुनाव किस प्रकार होता है?", options:["Direct","Indirect","Nomination","Lottery"], ans:1 },
  { q:"भारत में लोकसभा अध्यक्ष कौन चुनता है?", options:["President","PM","Members of Lok Sabha","CJI"], ans:2 },

  // Science Hard
  { q:"मानव शरीर में इंसुलिन किस ग्रंथि से निकलता है?", options:["Thyroid","Pancreas","Liver","Kidney"], ans:1 },
  { q:"DNA की संरचना किसने बताई?", options:["Newton","Watson-Crick","Edison","Raman"], ans:1 },
  { q:"मनुष्य के शरीर में RBC का जीवनकाल लगभग?", options:["30 days","60 days","90 days","120 days"], ans:3 },
  { q:"ओजोन परत मुख्यतः किस गैस से बनती है?", options:["O2","O3","CO2","N2"], ans:1 },
  { q:"पृथ्वी का सबसे बाहरी वायुमंडलीय स्तर?", options:["Troposphere","Stratosphere","Mesosphere","Exosphere"], ans:3 },

  // Economy Hard
  { q:"भारत में नोटबंदी किस वर्ष हुई थी?", options:["2014","2015","2016","2017"], ans:2 },
  { q:"भारत में मुद्रा जारी करने का अधिकार किसके पास है?", options:["SBI","RBI","Finance Ministry","SEBI"], ans:1 },
  { q:"भारत का पहला पंचवर्षीय योजना किस क्षेत्र पर आधारित थी?", options:["Industry","Agriculture","Defence","Service"], ans:1 },
  { q:"भारत में GDP की गणना कौन करता है?", options:["RBI","CSO/NSO","SEBI","NITI"], ans:1 },
  { q:"भारत में योजना आयोग का गठन किसने किया?", options:["Parliament","President","PM","Cabinet Resolution"], ans:3 },

  // Geography Hard
  { q:"कर्क रेखा भारत के कितने राज्यों से गुजरती है?", options:["6","7","8","9"], ans:2 },
  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["Mahanadi","Sunderban","Godavari","Narmada"], ans:1 },
  { q:"भारत का सबसे ऊँचा बांध (common exam) ?", options:["Bhakra","Tehri","Hirakud","Sardar Sarovar"], ans:1 },
  { q:"अरावली पर्वत किस राज्य में अधिक है?", options:["UP","Rajasthan","Bihar","WB"], ans:1 },
  { q:"काली मिट्टी मुख्यतः किस फसल के लिए उपयुक्त है?", options:["Rice","Cotton","Tea","Jute"], ans:1 },

  // History Hard
  { q:"इलाहाबाद स्तंभ लेख किससे संबंधित है?", options:["Ashoka","Samudragupta","Harsha","Akbar"], ans:1 },
  { q:"अशोक का कलिंग युद्ध कब हुआ था (approx)?", options:["261 BC","327 BC","57 BC","78 AD"], ans:0 },
  { q:"अकबर के नवरत्नों में कौन शामिल नहीं था?", options:["Birbal","Tansen","Todar Mal","Chanakya"], ans:3 },
  { q:"भारत में स्थायी बंदोबस्त किसने लागू किया?", options:["Cornwallis","Dalhousie","Curzon","Wellesley"], ans:0 },
  { q:"भारत में 'Doctrine of Lapse' किसने लागू किया?", options:["Curzon","Dalhousie","Cornwallis","Hastings"], ans:1 },

  // Awards + Books
  { q:"भारत रत्न किस वर्ष शुरू हुआ?", options:["1950","1954","1962","1971"], ans:1 },
  { q:"नोबेल पुरस्कार किस देश से संबंधित है?", options:["Sweden","USA","UK","France"], ans:0 },
  { q:"'Discovery of India' किसने लिखी?", options:["Gandhi","Nehru","Tagore","Ambedkar"], ans:1 },
  { q:"'Gitanjali' किसने लिखी?", options:["Tagore","Premchand","Nehru","Kalidas"], ans:0 },
  { q:"'Anandmath' किसने लिखी?", options:["Bankim","Tagore","Premchand","Nehru"], ans:0 }
);




// =========================
// REASONING
// =========================

// Reasoning - Easy (25)
bank.Reasoning.easy.push(
  { q:"Delhi Police Reasoning Easy Q2 ...", options:["A","B","C","D"], ans:0 },

  { q:"Series: 11, 22, 33, 44, ?", options:["50","55","60","66"], ans:1 },
  { q:"Series: 4, 8, 12, 16, ?", options:["18","20","22","24"], ans:1 },
  { q:"Series: 9, 18, 27, 36, ?", options:["40","45","48","54"], ans:1 },
  { q:"Series: 6, 13, 20, 27, ?", options:["32","33","34","35"], ans:1 },
  { q:"Series: 1, 3, 5, 7, ?", options:["8","9","10","11"], ans:1 },

  { q:"Odd one out: 12, 24, 36, 48", options:["12","24","36","48"], ans:3 },
  { q:"Odd one out: Dog, Cat, Cow, Lion", options:["Dog","Cat","Cow","Lion"], ans:2 },
  { q:"Odd one out: Pen, Pencil, Paper, Eraser", options:["Pen","Pencil","Paper","Eraser"], ans:2 },
  { q:"Odd one out: 5, 10, 15, 25", options:["5","10","15","25"], ans:3 },
  { q:"Odd one out: Square, Triangle, Circle, Table", options:["Square","Triangle","Circle","Table"], ans:3 },

  { q:"If A=1 then E=?", options:["3","4","5","6"], ans:2 },
  { q:"If G=7 then J=?", options:["8","9","10","11"], ans:1 },
  { q:"If M=13 then Q=?", options:["15","16","17","18"], ans:2 },
  { q:"If R=18 then T=?", options:["19","20","21","22"], ans:1 },
  { q:"If X=24 then Z=?", options:["25","26","27","28"], ans:1 },

  { q:"Opposite of West?", options:["East","North","South","None"], ans:0 },
  { q:"Opposite of Down?", options:["Up","Left","Right","None"], ans:0 },
  { q:"Day after Friday?", options:["Saturday","Sunday","Monday","Tuesday"], ans:0 },
  { q:"Day before Tuesday?", options:["Sunday","Monday","Wednesday","Thursday"], ans:1 },
  { q:"How many vowels in 'EDUCATION'?", options:["4","5","6","7"], ans:2 },

  { q:"Next: 2, 6, 10, 14, ?", options:["16","18","20","22"], ans:1 },
  { q:"Next: 3, 9, 27, ?", options:["54","72","81","90"], ans:2 },
  { q:"Next: 5, 25, 125, ?", options:["250","375","625","725"], ans:2 },
  { q:"Next: 10, 8, 6, 4, ?", options:["1","2","3","4"], ans:1 },
  { q:"Next: 1, 4, 7, 10, ?", options:["11","12","13","14"], ans:1 }
);


// Reasoning - Medium (30)
bank.Reasoning.medium.push(
  { q:"Delhi Police Reasoning Medium Q2 ...", options:["A","B","C","D"], ans:1 },

  // Coding-Decoding
  { q:"Coding: BAT = CBV, RAT = ?", options:["SBU","SBU","SBU","SBU"], ans:0 },
  { q:"Coding: PEN = QFO, INK = ?", options:["JOL","JML","JNK","JNL"], ans:0 },
  { q:"Coding: MAN = NBO, SUN = ?", options:["TVO","TVP","UVP","TWP"], ans:1 },
  { q:"Coding: LION = MJPO, BEAR = ?", options:["CFBS","CFBS","CFBS","CFBS"], ans:0 },
  { q:"Coding: BOOK = CPPL, HOME = ?", options:["IPNF","IPNE","HPNE","HPNF"], ans:0 },

  // Series
  { q:"Find missing: 2, 5, 10, 17, ?", options:["24","25","26","27"], ans:2 },
  { q:"Find missing: 1, 4, 10, 22, ?", options:["40","42","46","48"], ans:1 },
  { q:"Find missing: 3, 7, 15, 31, ?", options:["60","62","63","64"], ans:3 },
  { q:"Find missing: 4, 9, 19, 39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 6, 12, 20, 30, ?", options:["40","41","42","44"], ans:0 },

  // Alphabet series
  { q:"Which comes next: AZ, BY, CX, ?", options:["DW","EV","FU","GV"], ans:0 },
  { q:"Which comes next: A1, C3, E5, ?", options:["F6","G7","H8","I9"], ans:1 },
  { q:"Which comes next: Z1, X3, V5, ?", options:["U6","T7","S7","T9"], ans:1 },
  { q:"Which comes next: AB, DE, GH, ?", options:["JK","IJ","KL","MN"], ans:0 },
  { q:"Which comes next: 2A, 4C, 6E, ?", options:["8F","8G","10G","10H"], ans:1 },

  // Syllogism (basic)
  { q:"All cats are animals. All animals are living. Conclusion: All cats are living?", options:["Yes","No","Maybe","None"], ans:0 },
  { q:"All pens are tools. Some tools are books. Conclusion: Some pens are books?", options:["Yes","No","Maybe","None"], ans:2 },
  { q:"All boys are students. Some students are players. Conclusion: Some boys are players?", options:["Yes","No","Maybe","None"], ans:2 },
  { q:"All apples are fruits. All fruits are healthy. Conclusion: All apples are healthy?", options:["Yes","No","Maybe","None"], ans:0 },
  { q:"Some dogs are animals. All animals are living. Conclusion: Some dogs are living?", options:["Yes","No","Maybe","None"], ans:0 },

  // Direction
  { q:"A goes 3km North, 4km East. Distance from start?", options:["5km","6km","7km","8km"], ans:0 },
  { q:"A goes 12m East, 5m North. Distance?", options:["13m","15m","17m","12m"], ans:0 },
  { q:"A goes 8km West, 6km South. Distance?", options:["10km","12km","14km","16km"], ans:0 },
  { q:"A goes 5km East, 12km North. Distance?", options:["13km","15km","17km","20km"], ans:0 },
  { q:"A goes 9km North, 40km East. Distance?", options:["41km","45km","49km","50km"], ans:2 },

  // Ranking
  { q:"In a row, A is 7th from left, B is 12th from left. B is ?", options:["5 left of A","5 right of A","Same","Cannot say"], ans:1 },
  { q:"In a row, P is 4th from right, Q is 10th from right. Q is ?", options:["6 left of P","6 right of P","Same","Cannot say"], ans:0 },
  { q:"In a row, M is 3rd from left, N is 5th from right. Total 7. M is ?", options:["Same as N","Left of N","Right of N","Cannot say"], ans:0 },
  { q:"In a row, R is 2nd from left, S is 6th from left. S is ?", options:["4 left of R","4 right of R","Same","Cannot say"], ans:1 },
  { q:"In a row, X is 8th from left, Y is 3rd from left. X is ?", options:["5 left of Y","5 right of Y","Same","Cannot say"], ans:1 }
);


// Reasoning - Hard (30)
bank.Reasoning.hard.push(
  { q:"Delhi Police Reasoning Hard Q2 ...", options:["A","B","C","D"], ans:2 },

  // Blood Relation
  { q:"A is father of B, B is mother of C. A is C's ?", options:["Father","Grandfather","Uncle","Brother"], ans:1 },
  { q:"P is brother of Q, Q is sister of R. P is R's ?", options:["Brother","Uncle","Father","Cousin"], ans:0 },
  { q:"X is mother of Y, Y is father of Z. X is Z's ?", options:["Grandmother","Aunt","Mother","Sister"], ans:0 },
  { q:"M is sister of N, N is father of P. M is P's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"A is brother of B, B is brother of C. A is C's ?", options:["Brother","Uncle","Father","Cousin"], ans:0 },

  // Direction (Hard)
  { q:"A walks 7m North, 24m East. Distance from start?", options:["25m","26m","27m","28m"], ans:0 },
  { q:"A goes 15km South, 8km West. Distance?", options:["15km","17km","19km","23km"], ans:1 },
  { q:"A goes 9km East, 12km North, 9km West. Position?", options:["12km North","9km East","12km South","0"], ans:0 },
  { q:"A goes 6km North, 8km East, 6km South. Position?", options:["8km East","6km North","6km South","0"], ans:0 },
  { q:"A goes 10km West, 24km North, 10km East. Position?", options:["24km North","20km North","10km West","0"], ans:0 },

  // Number Series (Hard)
  { q:"Find missing: 1, 2, 6, 24, ?", options:["60","96","120","144"], ans:2 },
  { q:"Find missing: 3, 6, 15, 36, ?", options:["63","78","84","90"], ans:2 },
  { q:"Find missing: 2, 7, 16, 29, ?", options:["46","49","52","56"], ans:0 },
  { q:"Find missing: 5, 11, 23, 47, ?", options:["89","95","97","99"], ans:1 },
  { q:"Find missing: 4, 10, 22, 46, ?", options:["86","90","94","98"], ans:0 },

  // Coding-Decoding (Hard)
  { q:"If INDIA is coded as JOEJB then NEPAL is coded as?", options:["OFSBM","OFRBM","OFQBM","OFSBN"], ans:0 },
  { q:"If SOUTH is written as TQVUI, then EAST is?", options:["FBTU","FBST","FBTU","FBTV"], ans:0 },
  { q:"If 246 is coded as 468 then 579 is coded as?", options:["6810","6811","7910","6812"], ans:0 },
  { q:"If 123 is coded as 234 then 789 is coded as?", options:["891","890","8910","91011"], ans:0 },
  { q:"If 357 is coded as 468 then 468 is coded as?", options:["579","578","568","589"], ans:0 },

  // Syllogism (Hard)
  { q:"All A are B. No B is C. Conclusion: No A is C?", options:["Yes","No","Maybe","None"], ans:0 },
  { q:"Some A are B. All B are C. Conclusion: Some A are C?", options:["Yes","No","Maybe","None"], ans:0 },
  { q:"All A are B. Some B are C. Conclusion: Some A are C?", options:["Yes","No","Maybe","None"], ans:2 },
  { q:"No A is B. Some B are C. Conclusion: Some A are C?", options:["Yes","No","Maybe","None"], ans:3 },
  { q:"Some A are B. No B is C. Conclusion: Some A are not C?", options:["Yes","No","Maybe","None"], ans:0 },

  // Ranking (Hard)
  { q:"In a row of 25, A is 9th from left. A from right?", options:["16","17","18","19"], ans:1 },
  { q:"In a row of 30, B is 12th from right. B from left?", options:["18","19","20","21"], ans:2 },
  { q:"In a row of 20, P is 6th from left. P from right?", options:["13","14","15","16"], ans:1 },
  { q:"In a row of 40, Q is 15th from left. Q from right?", options:["24","25","26","27"], ans:1 },
  { q:"In a row of 18, R is 7th from right. R from left?", options:["10","11","12","13"], ans:0 }
);
// =========================
// DELHI POLICE - PART 4
// (Exam Level + Mixed + More Variety)
// GK + Math + Reasoning + English
// =========================


// =========================
// GK
// =========================

// GK - Easy (25)
bank.GK.easy.push(
  { q:"Delhi Police GK Easy Q3 ...", options:["A","B","C","D"], ans:0 },

  { q:"भारत का राष्ट्रीय ध्वज किसने बनाया था?", options:["Tagore","Pingali Venkayya","Nehru","Gandhi"], ans:1 },
  { q:"भारत का राष्ट्रीय गान कितने समय में गाया जाता है?", options:["30 sec","52 sec","60 sec","90 sec"], ans:1 },
  { q:"भारत का राष्ट्रीय गीत कौन सा है?", options:["जन गण मन","वंदे मातरम्","ऐ मेरे वतन","सारे जहाँ से अच्छा"], ans:1 },
  { q:"भारत का राष्ट्रीय खेल (परंपरागत) क्या है?", options:["Cricket","Hockey","Kabaddi","Football"], ans:1 },
  { q:"भारत का राष्ट्रीय चिन्ह किस स्थान से लिया गया?", options:["Sanchi","Sarnath","Ajanta","Hampi"], ans:1 },

  { q:"भारत के प्रथम उपराष्ट्रपति कौन थे?", options:["Radhakrishnan","Zakir Husain","Rajendra Prasad","VV Giri"], ans:0 },
  { q:"भारत के प्रथम गृहमंत्री कौन थे?", options:["Nehru","Patel","Azad","Ambedkar"], ans:1 },
  { q:"भारत के प्रथम वित्त मंत्री कौन थे?", options:["Ambedkar","Liaquat Ali","Shanmukham Chetty","Patel"], ans:2 },
  { q:"भारत के प्रथम लोकसभा अध्यक्ष कौन थे?", options:["GV Mavalankar","Nehru","Patel","Rajendra Prasad"], ans:0 },
  { q:"भारत के प्रथम मुख्य चुनाव आयुक्त कौन थे?", options:["TN Seshan","Sukumar Sen","Rajendra Prasad","Kamaraj"], ans:1 },

  { q:"भारत का सबसे बड़ा राज्य (क्षेत्रफल) कौन सा है?", options:["MP","UP","Rajasthan","Bihar"], ans:2 },
  { q:"भारत का सबसे छोटा राज्य कौन सा है?", options:["Goa","Sikkim","Tripura","Manipur"], ans:0 },
  { q:"भारत की सबसे लंबी नदी कौन सी है?", options:["Yamuna","Ganga","Godavari","Narmada"], ans:1 },
  { q:"भारत की सबसे बड़ी झील (fresh water) कौन सी है?", options:["Wular","Dal","Chilka","Loktak"], ans:0 },
  { q:"भारत का सबसे बड़ा डेल्टा कौन सा है?", options:["Sunderban","Godavari","Mahanadi","Krishna"], ans:0 },

  { q:"मानव शरीर का सबसे बड़ा अंग कौन सा है?", options:["Heart","Skin","Liver","Brain"], ans:1 },
  { q:"मानव शरीर में सबसे छोटी हड्डी कौन सी है?", options:["Stapes","Femur","Tibia","Ulna"], ans:0 },
  { q:"रक्त का लाल रंग किसके कारण होता है?", options:["Platelet","Hemoglobin","Plasma","WBC"], ans:1 },
  { q:"विटामिन A की कमी से कौन सा रोग होता है?", options:["Rickets","Night blindness","Scurvy","Goitre"], ans:1 },
  { q:"विटामिन C की कमी से कौन सा रोग होता है?", options:["Beriberi","Scurvy","Rickets","Anemia"], ans:1 },

  { q:"कंप्यूटर का मस्तिष्क किसे कहते हैं?", options:["RAM","CPU","ROM","Monitor"], ans:1 },
  { q:"WWW का पूरा नाम क्या है?", options:["World Wide Web","World Web Wide","Wide World Web","None"], ans:0 },
  { q:"MS Word किस प्रकार का सॉफ्टवेयर है?", options:["Spreadsheet","Word Processor","Browser","OS"], ans:1 },
  { q:"1 KB में कितने bytes होते हैं?", options:["1000","1024","1200","2048"], ans:1 },
  { q:"Internet का जनक किसे कहा जाता है?", options:["Vint Cerf","Newton","Edison","Tesla"], ans:0 }
);


// GK - Medium (30)
bank.GK.medium.push(
  { q:"Delhi Police GK Medium Q3 ...", options:["A","B","C","D"], ans:1 },

  // Polity
  { q:"राज्यसभा के सदस्यों का चुनाव कौन करता है?", options:["Direct public","MLAs","MPs","President"], ans:1 },
  { q:"लोकसभा का चुनाव कितने वर्ष में होता है?", options:["4","5","6","7"], ans:1 },
  { q:"भारत में उप-राष्ट्रपति का चुनाव कौन करता है?", options:["Electoral college of Parliament","Public","MLAs only","President"], ans:0 },
  { q:"भारत में CAG किस अनुच्छेद में है?", options:["124","148","280","368"], ans:1 },
  { q:"Finance Commission किस अनुच्छेद में है?", options:["148","280","352","370"], ans:1 },

  // History
  { q:"सिंधु घाटी सभ्यता का प्रमुख नगर कौन था?", options:["Pataliputra","Harappa","Delhi","Kashi"], ans:1 },
  { q:"गुप्त वंश का संस्थापक कौन था?", options:["Chandragupta I","Samudragupta","Sri Gupta","Skandagupta"], ans:2 },
  { q:"समुद्रगुप्त को किस नाम से जाना जाता है?", options:["Napoleon of India","Sher Shah","Akbar","Ashoka"], ans:0 },
  { q:"हर्षवर्धन किस वंश से संबंधित था?", options:["Gupta","Pushyabhuti","Maurya","Chola"], ans:1 },
  { q:"अशोक किस वंश का शासक था?", options:["Maurya","Gupta","Mughal","Chola"], ans:0 },

  // Geography
  { q:"कर्क रेखा भारत के कितने राज्यों से गुजरती है?", options:["6","7","8","9"], ans:2 },
  { q:"भारत का सबसे ऊँचा पर्वत (भारत में) कौन सा है?", options:["Everest","Kanchenjunga","K2","Nanda Devi"], ans:1 },
  { q:"सतलुज नदी किस राज्य से बहती है?", options:["UP","Punjab","Bihar","WB"], ans:1 },
  { q:"गोदावरी नदी का उद्गम कहाँ है?", options:["Trimbakeshwar","Amarkantak","Mahabaleshwar","Gangotri"], ans:0 },
  { q:"नर्मदा नदी का उद्गम कहाँ है?", options:["Trimbakeshwar","Amarkantak","Yamunotri","Gangotri"], ans:1 },

  // Science
  { q:"प्रकाश संश्लेषण किस गैस को उपयोग करता है?", options:["Oxygen","Nitrogen","CO2","Hydrogen"], ans:2 },
  { q:"मानव शरीर में पाचन की शुरुआत कहाँ होती है?", options:["Stomach","Mouth","Small intestine","Liver"], ans:1 },
  { q:"मानव शरीर में सबसे अधिक पानी किस अंग में होता है?", options:["Brain","Lungs","Blood","Kidney"], ans:0 },
  { q:"कौन सा विटामिन रक्त के थक्के में मदद करता है?", options:["A","B","C","K"], ans:3 },
  { q:"कौन सा ग्रह लाल ग्रह कहलाता है?", options:["Venus","Mars","Jupiter","Saturn"], ans:1 },

  // Economy
  { q:"भारत में GST कब लागू हुआ?", options:["2016","2017","2018","2019"], ans:1 },
  { q:"भारत का बजट कौन प्रस्तुत करता है?", options:["PM","FM","RBI","CAG"], ans:1 },
  { q:"RBI का गवर्नर किसके द्वारा नियुक्त होता है?", options:["President","PM","Finance Ministry","Parliament"], ans:2 },
  { q:"भारत का केंद्रीय बैंक कौन है?", options:["SBI","RBI","NABARD","SEBI"], ans:1 },
  { q:"NABARD का मुख्यालय कहाँ है?", options:["Delhi","Mumbai","Hyderabad","Chennai"], ans:1 },

  // Awards + Books
  { q:"ज्ञानपीठ पुरस्कार किस क्षेत्र से संबंधित है?", options:["Sports","Literature","Science","Politics"], ans:1 },
  { q:"भारत रत्न किस वर्ष शुरू हुआ?", options:["1950","1954","1962","1971"], ans:1 },
  { q:"नोबेल पुरस्कार किसने शुरू किया?", options:["Alfred Nobel","Newton","Einstein","Edison"], ans:0 },
  { q:"'Discovery of India' किसने लिखी?", options:["Gandhi","Nehru","Tagore","Ambedkar"], ans:1 },
  { q:"'Gitanjali' किसने लिखी?", options:["Tagore","Premchand","Kalidas","Nehru"], ans:0 },

  // Delhi Specific
  { q:"दिल्ली मेट्रो का पहला कॉरिडोर कब शुरू हुआ?", options:["1998","2002","2005","2010"], ans:1 },
  { q:"दिल्ली का ऐतिहासिक किला 'पुराना किला' किसने बनवाया?", options:["Akbar","Sher Shah Suri","Babur","Aurangzeb"], ans:1 },
  { q:"जामा मस्जिद किसने बनवाई?", options:["Akbar","Shah Jahan","Babur","Humayun"], ans:1 },
  { q:"कुतुब मीनार का निर्माण किसने शुरू कराया?", options:["Qutb-ud-din Aibak","Akbar","Shah Jahan","Babur"], ans:0 },
  { q:"इंडिया गेट किस युद्ध की स्मृति में बनाया गया?", options:["WW1","WW2","Kargil","1857"], ans:0 }
);


// GK - Hard (30)
bank.GK.hard.push(
  { q:"Delhi Police GK Hard Q3 ...", options:["A","B","C","D"], ans:2 },

  // Constitution
  { q:"अनुच्छेद 14 किससे संबंधित है?", options:["Freedom","Equality","Religion","Education"], ans:1 },
  { q:"अनुच्छेद 19 किससे संबंधित है?", options:["Freedom","Equality","DPSP","Emergency"], ans:0 },
  { q:"अनुच्छेद 21 किससे संबंधित है?", options:["Right to property","Right to life","Education","Religion"], ans:1 },
  { q:"अनुच्छेद 32 को क्या कहा जाता है?", options:["Heart of Constitution","Basic Structure","Directive","None"], ans:0 },
  { q:"मौलिक कर्तव्य किस संशोधन से जोड़े गए?", options:["42nd","44th","52nd","61st"], ans:0 },

  // Deep Polity
  { q:"संविधान में 'Basic Structure' सिद्धांत किस केस से आया?", options:["Kesavananda","Golaknath","Minerva Mills","Shah Bano"], ans:0 },
  { q:"भारत में राष्ट्रपति शासन किस अनुच्छेद में है?", options:["352","356","360","368"], ans:1 },
  { q:"राष्ट्रीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:0 },
  { q:"वित्तीय आपातकाल किस अनुच्छेद में है?", options:["352","356","360","368"], ans:2 },
  { q:"अनुच्छेद 370 किससे संबंधित था?", options:["Punjab","J&K","Goa","Delhi"], ans:1 },

  // Science Hard
  { q:"मानव शरीर में यूरिया कहाँ बनता है?", options:["Kidney","Liver","Lungs","Heart"], ans:1 },
  { q:"मानव शरीर में पित्त (bile) कहाँ बनता है?", options:["Pancreas","Liver","Kidney","Stomach"], ans:1 },
  { q:"सौरमंडल का सबसे बड़ा ग्रह कौन सा है?", options:["Earth","Mars","Jupiter","Saturn"], ans:2 },
  { q:"ध्वनि की गति सबसे अधिक किसमें होती है?", options:["Air","Water","Steel","Vacuum"], ans:2 },
  { q:"वायुमंडल में सबसे अधिक गैस कौन सी है?", options:["Oxygen","Nitrogen","CO2","Hydrogen"], ans:1 },

  // Economy Hard
  { q:"भारत में मुद्रा जारी करने का अधिकार किसके पास है?", options:["SBI","RBI","FM","SEBI"], ans:1 },
  { q:"भारत में नोटबंदी किस वर्ष हुई?", options:["2014","2015","2016","2017"], ans:2 },
  { q:"भारत का पहला पंचवर्षीय योजना किस पर आधारित थी?", options:["Industry","Agriculture","Defence","Services"], ans:1 },
  { q:"GDP का पूर्ण रूप क्या है?", options:["Gross Domestic Product","Great Domestic Price","Global Demand Price","None"], ans:0 },
  { q:"भारत में राष्ट्रीय आय का अनुमान कौन लगाता है?", options:["RBI","NSO","SEBI","NITI"], ans:1 },

  // Geography Hard
  { q:"भारत का सबसे लंबा बांध कौन सा है?", options:["Bhakra","Hirakud","Tehri","Sardar Sarovar"], ans:1 },
  { q:"भारत का सबसे ऊँचा बांध कौन सा है?", options:["Tehri","Bhakra","Hirakud","Nagarjuna"], ans:0 },
  { q:"हिमालय को कितने भागों में बाँटा जाता है?", options:["2","3","4","5"], ans:1 },
  { q:"सुंदरबन डेल्टा किस नदी से बना है?", options:["Ganga-Brahmaputra","Godavari","Narmada","Krishna"], ans:0 },
  { q:"लद्दाख किस पर्वत श्रेणी में आता है?", options:["Aravali","Himalaya","Vindhya","Satpura"], ans:1 },

  // History Hard
  { q:"पानीपत का पहला युद्ध कब हुआ?", options:["1526","1556","1761","1857"], ans:0 },
  { q:"पानीपत का दूसरा युद्ध कब हुआ?", options:["1526","1556","1761","1857"], ans:1 },
  { q:"पानीपत का तीसरा युद्ध कब हुआ?", options:["1526","1556","1761","1857"], ans:2 },
  { q:"अकबर के समय राजस्व मंत्री कौन था?", options:["Birbal","Todar Mal","Tansen","Abul Fazl"], ans:1 },
  { q:"शेरशाह सूरी ने कौन सा मार्ग बनवाया?", options:["Grand Trunk Road","Silk Route","Khyber Road","None"], ans:0 },

  // Mixed
  { q:"भारत का सबसे बड़ा द्वीप कौन सा है?", options:["Majuli","Great Nicobar","Sri Lanka","Lakshadweep"], ans:1 },
  { q:"भारत में पहली रेल कब चली?", options:["1853","1901","1947","1870"], ans:0 },
  { q:"भारत के प्रथम गवर्नर जनरल कौन थे?", options:["Warren Hastings","Cornwallis","Dalhousie","Curzon"], ans:0 },
  { q:"भारत में पहला समाचार पत्र किसने निकाला?", options:["Raja Ram Mohan Roy","James Hicky","Gandhi","Tilak"], ans:1 },
  { q:"'Vande Mataram' किस पुस्तक से लिया गया?", options:["Anandmath","Gitanjali","Discovery of India","Godan"], ans:0 }
);




// =========================
// MATH
// =========================

// Math - Easy (25)
bank.Math.easy.push(
  { q:"Delhi Police Math Easy Q2 ...", options:["A","B","C","D"], ans:0 },

  { q:"72 + 18 = ?", options:["80","85","90","95"], ans:2 },
  { q:"150 - 75 = ?", options:["65","70","75","80"], ans:2 },
  { q:"16 × 7 = ?", options:["98","105","112","120"], ans:2 },
  { q:"196 ÷ 14 = ?", options:["12","13","14","15"], ans:2 },
  { q:"35 × 9 = ?", options:["305","315","325","335"], ans:1 },

  { q:"25% of 400 = ?", options:["80","90","100","120"], ans:2 },
  { q:"10% of 650 = ?", options:["60","65","70","75"], ans:1 },
  { q:"15% of 300 = ?", options:["35","40","45","50"], ans:2 },
  { q:"20% of 450 = ?", options:["80","85","90","95"], ans:2 },
  { q:"5% of 1200 = ?", options:["50","55","60","65"], ans:2 },

  { q:"1/4 of 320 = ?", options:["60","70","80","90"], ans:2 },
  { q:"2/5 of 250 = ?", options:["90","95","100","110"], ans:2 },
  { q:"3/8 of 400 = ?", options:["120","140","150","160"], ans:2 },
  { q:"5/6 of 180 = ?", options:["120","130","140","150"], ans:3 },
  { q:"7/10 of 500 = ?", options:["300","320","350","380"], ans:2 },

  { q:"यदि 8x = 96 तो x = ?", options:["10","11","12","13"], ans:2 },
  { q:"यदि 7x = 84 तो x = ?", options:["10","11","12","13"], ans:2 },
  { q:"यदि x/9 = 7 तो x = ?", options:["54","56","63","72"], ans:2 },
  { q:"यदि 3x + 12 = 60 तो x = ?", options:["14","15","16","18"], ans:1 },
  { q:"यदि 5x - 15 = 60 तो x = ?", options:["12","13","14","15"], ans:2 },

  { q:"एक संख्या का 20% = 120 है, संख्या = ?", options:["500","550","600","650"], ans:2 },
  { q:"एक संख्या का 30% = 180 है, संख्या = ?", options:["500","550","600","650"], ans:2 },
  { q:"Average of 10, 30, 50 = ?", options:["25","30","35","40"], ans:1 },
  { q:"Average of 12, 24, 36 = ?", options:["20","22","24","26"], ans:2 },
  { q:"Average of 15, 20, 25, 30 = ?", options:["20","22","23","24"], ans:0 }
);


// Math - Medium (30)
bank.Math.medium.push(
  { q:"Delhi Police Math Medium Q2 ...", options:["A","B","C","D"], ans:1 },

  // SI
  { q:"SI: P=3200, R=10%, T=2 => SI=?", options:["600","640","650","700"], ans:1 },
  { q:"SI: P=4500, R=8%, T=3 => SI=?", options:["980","1000","1080","1200"], ans:2 },
  { q:"SI: P=5000, R=12%, T=2 => SI=?", options:["1000","1100","1200","1300"], ans:2 },
  { q:"SI: P=2400, R=5%, T=4 => SI=?", options:["420","450","480","500"], ans:2 },
  { q:"SI: P=6000, R=6%, T=3 => SI=?", options:["900","980","1080","1200"], ans:2 },

  // Profit Loss
  { q:"CP=1200, Profit=25% => SP=?", options:["1450","1500","1550","1600"], ans:1 },
  { q:"CP=2000, Loss=10% => SP=?", options:["1750","1800","1850","1900"], ans:1 },
  { q:"SP=1650, Profit=10% => CP=?", options:["1400","1450","1500","1550"], ans:2 },
  { q:"SP=900, Loss=25% => CP=?", options:["1100","1150","1200","1250"], ans:2 },
  { q:"CP=2500, Profit=12% => SP=?", options:["2750","2800","2850","2900"], ans:1 },

  // Time Speed Distance
  { q:"Speed=54 km/h, Time=3h => Distance=?", options:["150","156","162","170"], ans:2 },
  { q:"Speed=60 km/h, Distance=240 km => Time=?", options:["3h","4h","5h","6h"], ans:1 },
  { q:"Distance=180 km, Time=3h => Speed=?", options:["50","55","60","65"], ans:2 },
  { q:"Speed=72 km/h, Time=2.5h => Distance=?", options:["160","170","180","190"], ans:2 },
  { q:"Speed=45 km/h, Time=6h => Distance=?", options:["240","250","260","270"], ans:3 },

  // Percentage
  { q:"यदि 20% = 160 तो संख्या=?", options:["700","750","800","850"], ans:2 },
  { q:"यदि 15% = 120 तो संख्या=?", options:["700","750","800","850"], ans:2 },
  { q:"यदि 12% = 96 तो संख्या=?", options:["700","750","800","850"], ans:2 },
  { q:"यदि 25% = 250 तो संख्या=?", options:["900","950","1000","1050"], ans:2 },
  { q:"यदि 18% = 180 तो संख्या=?", options:["900","950","1000","1050"], ans:2 },

  // Ratio
  { q:"Ratio 3:5, sum=160. Bigger number?", options:["90","95","100","110"], ans:2 },
  { q:"Ratio 4:7, sum=220. Smaller number?", options:["70","80","90","100"], ans:1 },
  { q:"Ratio 5:6, sum=242. Smaller number?", options:["100","110","120","130"], ans:2 },
  { q:"Ratio 7:9, sum=256. Bigger number?", options:["128","135","140","144"], ans:0 },
  { q:"Ratio 2:3, sum=250. Bigger number?", options:["140","150","160","170"], ans:1 },

  // Average
  { q:"Average of 16, 24, 32, 40 = ?", options:["25","26","28","30"], ans:2 },
  { q:"Average of 18, 21, 24, 27, 30 = ?", options:["22","23","24","25"], ans:2 },
  { q:"Average of 12, 18, 24, 30 = ?", options:["18","20","21","22"], ans:0 },
  { q:"Average of 25, 35, 45 = ?", options:["30","35","40","45"], ans:2 },
  { q:"Average of 14, 28, 56 = ?", options:["30","32","33","34"], ans:2 }
);


// Math - Hard (30)
bank.Math.hard.push(
  { q:"Delhi Police Math Hard Q2 ...", options:["A","B","C","D"], ans:2 },

  // CI
  { q:"CI: P=5000, R=10%, T=2 => Amount?", options:["6000","6050","6100","6200"], ans:1 },
  { q:"CI: P=8000, R=12%, T=2 => Amount?", options:["10000","10035.2","10200","10500"], ans:1 },
  { q:"CI: P=10000, R=8%, T=2 => Amount?", options:["11500","11664","11800","12000"], ans:1 },
  { q:"CI: P=12000, R=5%, T=2 => Amount?", options:["13000","13200","13230","13300"], ans:2 },
  { q:"CI: P=6000, R=15%, T=2 => Amount?", options:["7800","7935","8000","8100"], ans:1 },

  // Train
  { q:"Train 72 km/h crosses 120m pole in 6 sec. Length?", options:["80m","90m","100m","120m"], ans:2 },
  { q:"Train 90 km/h crosses 300m platform in 18 sec. Length?", options:["120m","130m","150m","160m"], ans:2 },
  { q:"Train 54 km/h crosses 180m pole in 12 sec. Length?", options:["60m","70m","80m","90m"], ans:2 },
  { q:"Train 108 km/h crosses 240m platform in 16 sec. Length?", options:["200m","220m","240m","260m"], ans:0 },
  { q:"Train 60 km/h crosses 150m pole in 9 sec. Length?", options:["90m","100m","110m","120m"], ans:2 },

  // Pipe & Cistern
  { q:"A fills in 12h, B fills in 18h. Together time?", options:["6h","7.2h","8h","9h"], ans:1 },
  { q:"A fills in 10h, B empties in 20h. Net time?", options:["15h","18h","20h","25h"], ans:1 },
  { q:"A fills in 8h, B fills in 24h. Together time?", options:["5h","6h","7h","8h"], ans:1 },
  { q:"A fills in 15h, B empties in 30h. Net time?", options:["20h","25h","30h","35h"], ans:1 },
  { q:"A fills in 18h, B fills in 36h. Together time?", options:["10h","11h","12h","13h"], ans:2 },

  // Work
  { q:"A can do work in 20 days, B in 30 days. Together time?", options:["10","12","15","18"], ans:1 },
  { q:"A does in 18 days, B in 24 days. Together time?", options:["9","10","11","12"], ans:0 },
  { q:"A does in 12 days, B in 16 days. Together time?", options:["6.4","6.8","7.2","8"], ans:0 },
  { q:"A does in 15 days, B in 20 days. Together time?", options:["8.5","9","10","12"], ans:1 },
  { q:"A does in 24 days, B in 36 days. Together time?", options:["12","14.4","16","18"], ans:1 },

  // Algebra
  { q:"If x+y=50 and x-y=10 then x=?", options:["25","30","35","40"], ans:1 },
  { q:"If 6x+11=107 then x=?", options:["14","15","16","17"], ans:1 },
  { q:"If 9x-13=122 then x=?", options:["13","14","15","16"], ans:1 },
  { q:"If x/4 + 9 = 21 then x=?", options:["36","40","44","48"], ans:3 },
  { q:"If 5x-17=88 then x=?", options:["19","20","21","22"], ans:1 },

  // Mensuration
  { q:"Rectangle: l=12, b=8. Area=?", options:["80","90","96","100"], ans:2 },
  { q:"Square side=15. Perimeter=?", options:["50","55","60","65"], ans:2 },
  { q:"Circle radius=7. Diameter=?", options:["12","13","14","15"], ans:2 },
  { q:"Cube side=5. Volume=?", options:["100","110","120","125"], ans:3 },
  { q:"Triangle base=10, height=6. Area=?", options:["20","25","30","35"], ans:2 }
);




// =========================
// REASONING
// =========================

// Reasoning - Easy (25)
bank.Reasoning.easy.push(
  { q:"Delhi Police Reasoning Easy Q3 ...", options:["A","B","C","D"], ans:0 },

  { q:"Series: 14, 28, 42, 56, ?", options:["60","65","70","72"], ans:2 },
  { q:"Series: 3, 5, 7, 9, ?", options:["10","11","12","13"], ans:1 },
  { q:"Series: 20, 18, 16, 14, ?", options:["10","11","12","13"], ans:1 },
  { q:"Series: 1, 5, 9, 13, ?", options:["15","16","17","18"], ans:1 },
  { q:"Series: 2, 3, 5, 8, ?", options:["10","11","12","13"], ans:1 },

  { q:"Odd one out: 9, 16, 25, 36", options:["9","16","25","36"], ans:0 },
  { q:"Odd one out: 2, 3, 5, 9", options:["2","3","5","9"], ans:3 },
  { q:"Odd one out: Car, Bus, Train, Apple", options:["Car","Bus","Train","Apple"], ans:3 },
  { q:"Odd one out: Chair, Table, Bed, Mango", options:["Chair","Table","Bed","Mango"], ans:3 },
  { q:"Odd one out: 11, 17, 19, 27", options:["11","17","19","27"], ans:3 },

  { q:"If A=1 then H=?", options:["6","7","8","9"], ans:2 },
  { q:"If B=2 then K=?", options:["9","10","11","12"], ans:2 },
  { q:"If C=3 then N=?", options:["12","13","14","15"], ans:2 },
  { q:"If D=4 then P=?", options:["14","15","16","17"], ans:2 },
  { q:"If E=5 then R=?", options:["16","17","18","19"], ans:2 },

  { q:"Day after Sunday?", options:["Monday","Tuesday","Friday","Saturday"], ans:0 },
  { q:"Day before Friday?", options:["Wednesday","Thursday","Saturday","Sunday"], ans:1 },
  { q:"Opposite of South?", options:["East","West","North","None"], ans:2 },
  { q:"Opposite of Left?", options:["Right","Up","Down","None"], ans:0 },
  { q:"How many letters in 'DELHI'?", options:["4","5","6","7"], ans:1 },

  { q:"Next: 4, 12, 20, 28, ?", options:["34","36","38","40"], ans:1 },
  { q:"Next: 1, 2, 6, 24, ?", options:["60","96","120","144"], ans:2 },
  { q:"Next: 10, 30, 90, ?", options:["180","240","270","300"], ans:2 },
  { q:"Next: 81, 27, 9, 3, ?", options:["1","2","3","4"], ans:0 },
  { q:"Next: 2, 4, 16, 256, ?", options:["512","1024","65536","4096"], ans:2 }
);


// Reasoning - Medium (30)
bank.Reasoning.medium.push(
  { q:"Delhi Police Reasoning Medium Q3 ...", options:["A","B","C","D"], ans:1 },

  // Coding
  { q:"Coding: KING = LJOH, QUEEN = ?", options:["RVFFO","RVFFP","RVFFN","RVFEO"], ans:0 },
  { q:"Coding: LAMP = MBNQ, BOOK = ?", options:["CPPL","CQQM","BQPL","DPPL"], ans:0 },
  { q:"Coding: COLD = DPME, WARM = ?", options:["XBSN","XBSM","XBRN","XBRO"], ans:0 },
  { q:"Coding: DELHI = EFMIJ, INDIA = ?", options:["JOEJB","IOEJB","JOEJA","JNEJB"], ans:0 },
  { q:"Coding: ROAD = SPBE, PATH = ?", options:["QBUG","QBUS","QBUI","QBTI"], ans:0 },

  // Series
  { q:"Find missing: 2, 4, 9, 19, ?", options:["38","39","40","41"], ans:1 },
  { q:"Find missing: 1, 3, 8, 18, ?", options:["32","33","34","35"], ans:2 },
  { q:"Find missing: 5, 12, 26, 54, ?", options:["98","108","110","112"], ans:1 },
  { q:"Find missing: 7, 16, 34, 70, ?", options:["140","142","144","146"], ans:1 },
  { q:"Find missing: 3, 10, 21, 36, ?", options:["55","56","57","58"], ans:0 },

  // Analogy
  { q:"Doctor : Hospital :: Teacher : ?", options:["School","Market","Bank","Road"], ans:0 },
  { q:"Bird : Fly :: Fish : ?", options:["Run","Swim","Jump","Sleep"], ans:1 },
  { q:"Knife : Cut :: Pen : ?", options:["Write","Read","Eat","Play"], ans:0 },
  { q:"Eye : See :: Ear : ?", options:["Smell","Hear","Taste","Walk"], ans:1 },
  { q:"Fire : Hot :: Ice : ?", options:["Cold","Wet","Dry","Hard"], ans:0 },

  // Syllogism
  { q:"All A are B. All B are C. Conclusion: All A are C?", options:["Yes","No","Maybe","None"], ans:0 },
  { q:"No A is B. All B are C. Conclusion: No A is C?", options:["Yes","No","Maybe","None"], ans:2 },
  { q:"Some A are B. No B is C. Conclusion: Some A are not C?", options:["Yes","No","Maybe","None"], ans:0 },
  { q:"Some A are B. All B are C. Conclusion: Some A are C?", options:["Yes","No","Maybe","None"], ans:0 },
  { q:"All A are B. Some C are B. Conclusion: Some C are A?", options:["Yes","No","Maybe","None"], ans:2 },

  // Direction + Ranking
  { q:"A goes 5m North, 12m East. Distance?", options:["13m","14m","15m","16m"], ans:0 },
  { q:"A goes 8m West, 15m North. Distance?", options:["16m","17m","18m","19m"], ans:1 },
  { q:"In a row of 20, A is 5th from left. A from right?", options:["14","15","16","17"], ans:1 },
  { q:"In a row of 30, B is 9th from right. B from left?", options:["20","21","22","23"], ans:1 },
  { q:"In a row of 25, P is 12th from left. P from right?", options:["12","13","14","15"], ans:1 },

  // Misc
  { q:"Mirror image is related to?", options:["Reflection","Rotation","Translation","None"], ans:0 },
  { q:"Water transport is?", options:["Bus","Train","Ship","Car"], ans:2 },
  { q:"Metal is?", options:["Wood","Plastic","Iron","Rubber"], ans:2 },
  { q:"Bird is?", options:["Dog","Cat","Crow","Cow"], ans:2 },
  { q:"Fruit is?", options:["Potato","Onion","Mango","Carrot"], ans:2 }
);


// Reasoning - Hard (30)
bank.Reasoning.hard.push(
  { q:"Delhi Police Reasoning Hard Q3 ...", options:["A","B","C","D"], ans:2 },

  // Blood relation (Hard)
  { q:"A is brother of B. B is sister of C. C is father of D. A is D's ?", options:["Uncle","Father","Brother","Cousin"], ans:0 },
  { q:"P is mother of Q. Q is brother of R. R is father of S. P is S's ?", options:["Grandmother","Aunt","Mother","Sister"], ans:0 },
  { q:"X is father of Y. Y is sister of Z. Z is mother of A. X is A's ?", options:["Grandfather","Father","Uncle","Brother"], ans:0 },
  { q:"M is sister of N. N is brother of P. P is father of Q. M is Q's ?", options:["Aunt","Mother","Sister","Grandmother"], ans:0 },
  { q:"A is father of B. B is mother of C. C is brother of D. A is D's ?", options:["Grandfather","Uncle","Father","Brother"], ans:0 },

  // Direction (Hard)
  { q:"A goes 10m North, 6m East, 10m South. Position?", options:["6m East","10m North","6m West","0"], ans:0 },
  { q:"A goes 12km West, 5km South, 12km East. Position?", options:["5km South","12km West","5km North","0"], ans:0 },
  { q:"A goes 8km North, 15km East, 8km South. Position?", options:["15km East","8km North","15km West","0"], ans:0 },
  { q:"A goes 7km East, 24km North, 7km West. Position?", options:["24km North","7km East","24km South","0"], ans:0 },
  { q:"A goes 9km East, 40km North, 9km West. Position?", options:["40km North","9km East","40km South","0"], ans:0 },

  // Series (Hard)
  { q:"Find missing: 2, 5, 11, 23, ?", options:["45","46","47","48"], ans:2 },
  { q:"Find missing: 1, 3, 7, 15, ?", options:["25","31","33","35"], ans:1 },
  { q:"Find missing: 4, 9, 19, 39, ?", options:["69","79","89","99"], ans:1 },
  { q:"Find missing: 3, 8, 18, 38, ?", options:["68","78","80","88"], ans:1 },
  { q:"Find missing: 6, 13, 27, 55, ?", options:["105","109","111","115"], ans:2 },

  // Coding-Decoding (Hard)
  { q:"If SOUTH is coded as TQVUI, then NORTH is?", options:["OPSUJ","OPSUH","OPTVI","OPTVH"], ans:1 },
  { q:"If INDIA is coded as JOEJB, then CHINA is?", options:["DIJOB","DIJMB","DJJOB","DJJMB"], ans:0 },
  { q:"If 246 is coded as 468 then 135 is coded as?", options:["246","357","258","369"], ans:0 },
  { q:"If 579 is coded as 6810 then 468 is coded as?", options:["579","578","5710","5799"], ans:0 },
  { q:"If 123 is coded as 234 then 456 is coded as?", options:["567","568","569","678"], ans:0 },

  // Seating/Row (Hard)
  { q:"In a row of 12, A is 4th from left and B is 3rd from right. A is ?", options:["Left of B","Right of B","Same","Cannot say"], ans:0 },
  { q:"In a row of 10, P is 2nd from left and Q is 7th from left. Q is ?", options:["5 left of P","5 right of P","Same","Cannot say"], ans:1 },
  { q:"In a row of 15, M is 9th from left and N is 5th from right. M is ?", options:["Left of N","Right of N","Same","Cannot say"], ans:2 },
  { q:"In a row of 8, R is 4th from left and S is 5th from left. R is ?", options:["Left of S","Right of S","Same","Cannot say"], ans:0 },
  { q:"In a row of 20, X is 11th from left and Y is 8th from left. X is ?", options:["3 left of Y","3 right of Y","Same","Cannot say"], ans:1 },

  // Syllogism (Hard)
  { q:"All A are B. No B is C. Conclusion: No A is C?", options:["Yes","No","Maybe","None"], ans:0 },
  { q:"Some A are B. All B are C. Conclusion: Some A are C?", options:["Yes","No","Maybe","None"], ans:0 },
  { q:"All A are B. Some B are C. Conclusion: Some A are C?", options:["Yes","No","Maybe","None"], ans:2 },
  { q:"No A is B. Some B are C. Conclusion: Some A are C?", options:["Yes","No","Maybe","None"], ans:3 },
  { q:"Some A are B. No B is C. Conclusion: Some A are not C?", options:["Yes","No","Maybe","None"], ans:0 }
);




// =========================
// ENGLISH
// =========================

// English - Easy (25)
bank.English.easy.push(
  { q:"Delhi Police English Easy Q2 ...", options:["A","B","C","D"], ans:0 },

  { q:"Synonym of BIG?", options:["Large","Small","Tiny","Weak"], ans:0 },
  { q:"Synonym of CLEAN?", options:["Dirty","Pure","Bad","Weak"], ans:1 },
  { q:"Synonym of QUICK?", options:["Fast","Slow","Late","Cold"], ans:0 },
  { q:"Synonym of START?", options:["Begin","End","Stop","Close"], ans:0 },
  { q:"Synonym of FRIEND?", options:["Enemy","Buddy","Anger","Fear"], ans:1 },

  { q:"Antonym of EARLY?", options:["Late","Fast","Quick","Soon"], ans:0 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of TRUE?", options:["False","Right","Pure","Sure"], ans:0 },
  { q:"Antonym of HAPPY?", options:["Joyful","Sad","Glad","Smile"], ans:1 },
  { q:"Antonym of OPEN?", options:["Close","Shut","Both","None"], ans:2 },

  { q:"Fill: She ___ to school daily.", options:["go","goes","going","gone"], ans:1 },
  { q:"Fill: They ___ playing cricket.", options:["is","are","was","be"], ans:1 },
  { q:"Fill: I ___ a pen.", options:["have","has","had","having"], ans:0 },
  { q:"Fill: He ___ tea.", options:["drink","drinks","drinking","drank"], ans:1 },
  { q:"Fill: We ___ happy.", options:["is","are","was","be"], ans:1 },

  { q:"Plural of Mouse?", options:["Mouses","Mice","Mouse","Mices"], ans:1 },
  { q:"Plural of Ox?", options:["Oxes","Oxen","Oxs","Oxies"], ans:1 },
  { q:"Plural of Leaf?", options:["Leafs","Leaves","Leafes","Leavs"], ans:1 },
  { q:"Plural of Knife?", options:["Knifes","Knives","Knifees","Knif"], ans:1 },
  { q:"Plural of Child?", options:["Childs","Children","Childrens","Childes"], ans:1 },

  { q:"One word: A place where sick people are treated", options:["School","Hospital","Bank","Library"], ans:1 },
  { q:"One word: A person who writes stories", options:["Poet","Writer","Singer","Driver"], ans:1 },
  { q:"One word: A person who flies an aeroplane", options:["Pilot","Driver","Guard","Clerk"], ans:0 },
  { q:"One word: A person who makes shoes", options:["Cobbler","Tailor","Carpenter","Painter"], ans:0 },
  { q:"One word: A person who sells medicines", options:["Doctor","Pharmacist","Teacher","Nurse"], ans:1 },

  { q:"Opposite of DAY?", options:["Night","Sun","Light","Time"], ans:0 },
  { q:"Opposite of OLD?", options:["New","Young","Fresh","All"], ans:1 },
  { q:"Opposite of RICH?", options:["Poor","Strong","Big","Happy"], ans:0 },
  { q:"Opposite of DARK?", options:["Light","Black","Night","Shade"], ans:0 },
  { q:"Opposite of ABOVE?", options:["Over","Down","Below","Up"], ans:2 }
);


// English - Medium (30)
bank.English.medium.push(
  { q:"Delhi Police English Medium Q2 ...", options:["A","B","C","D"], ans:1 },

  // Grammar
  { q:"Correct: He ___ his homework daily.", options:["do","does","did","done"], ans:1 },
  { q:"Correct: They ___ to market yesterday.", options:["go","goes","went","gone"], ans:2 },
  { q:"Correct: She has ___ a letter.", options:["write","wrote","written","writing"], ans:2 },
  { q:"Correct: I am ___ honest man.", options:["a","an","the","no"], ans:1 },
  { q:"Correct: The boys ___ playing.", options:["is","are","was","be"], ans:1 },

  // Preposition
  { q:"He is good ___ English.", options:["in","at","on","for"], ans:1 },
  { q:"She is afraid ___ dogs.", options:["in","at","of","for"], ans:2 },
  { q:"He depends ___ his father.", options:["on","in","at","for"], ans:0 },
  { q:"She is married ___ him.", options:["with","to","by","on"], ans:1 },
  { q:"I prefer tea ___ coffee.", options:["than","to","from","by"], ans:1 },

  // Synonym
  { q:"Synonym of BRAVE?", options:["Courageous","Coward","Weak","Lazy"], ans:0 },
  { q:"Synonym of ANGRY?", options:["Mad","Glad","Happy","Soft"], ans:0 },
  { q:"Synonym of END?", options:["Finish","Start","Begin","Open"], ans:0 },
  { q:"Synonym of BEAUTIFUL?", options:["Pretty","Ugly","Bad","Poor"], ans:0 },
  { q:"Synonym of DANGER?", options:["Risk","Safe","Good","Peace"], ans:0 },

  // Antonym
  { q:"Antonym of SUCCESS?", options:["Win","Fail","Gain","Profit"], ans:1 },
  { q:"Antonym of ARRIVE?", options:["Come","Reach","Depart","Go"], ans:2 },
  { q:"Antonym of ALWAYS?", options:["Never","Often","Daily","Soon"], ans:0 },
  { q:"Antonym of STRONG?", options:["Power","Weak","Hard","Tough"], ans:1 },
  { q:"Antonym of LAZY?", options:["Active","Slow","Weak","Late"], ans:0 },

  // Spot error
  { q:"Spot error: He do not like milk.", options:["He","do","not","like"], ans:1 },
  { q:"Spot error: She have finished work.", options:["She","have","finished","work"], ans:1 },
  { q:"Spot error: They is playing cricket.", options:["They","is","playing","cricket"], ans:1 },
  { q:"Spot error: I has a pen.", options:["I","has","a","pen"], ans:1 },
  { q:"Spot error: We was happy.", options:["We","was","happy","."], ans:1 },

  // Sentence improvement
  { q:"Choose correct: Each of the students ___ present.", options:["are","is","were","be"], ans:1 },
  { q:"Choose correct: Neither of the boys ___ guilty.", options:["are","is","were","be"], ans:1 },
  { q:"Choose correct: One of the boys ___ absent.", options:["are","is","were","be"], ans:1 },
  { q:"Choose correct: A number of students ___ absent.", options:["are","is","was","be"], ans:0 },
  { q:"Choose correct: The teacher along with students ___ coming.", options:["are","is","were","be"], ans:1 }
);


// English - Hard (30)
bank.English.hard.push(
  { q:"Delhi Police English Hard Q2 ...", options:["A","B","C","D"], ans:2 },

  // Vocab (exam)
  { q:"Meaning of 'obsolete'?", options:["new","outdated","fresh","strong"], ans:1 },
  { q:"Meaning of 'mitigate'?", options:["increase","reduce","ignore","stop"], ans:1 },
  { q:"Meaning of 'abrupt'?", options:["sudden","slow","weak","soft"], ans:0 },
  { q:"Meaning of 'lucid'?", options:["clear","dirty","dark","heavy"], ans:0 },
  { q:"Meaning of 'hostile'?", options:["friendly","angry","peaceful","weak"], ans:1 },

  // One word
  { q:"One word: One who loves mankind", options:["Philanthropist","Misanthrope","Optimist","Pessimist"], ans:0 },
  { q:"One word: One who hates mankind", options:["Misanthrope","Philanthropist","Optimist","Pessimist"], ans:0 },
  { q:"One word: A handwriting expert", options:["Graphologist","Geologist","Biologist","Zoologist"], ans:0 },
  { q:"One word: One who cannot read and write", options:["Illiterate","Literate","Editor","Author"], ans:0 },
  { q:"One word: One who speaks many languages", options:["Linguist","Scientist","Poet","Teacher"], ans:0 },

  // Active/Passive
  { q:"Correct passive: 'He will finish the work.'", options:["Work will finished","Work will be finished","Work is finished","Work was finished"], ans:1 },
  { q:"Correct passive: 'She wrote a letter.'", options:["A letter was written by her","A letter is written by her","A letter written by her","Letter was write"], ans:0 },
  { q:"Correct passive: 'They are making a plan.'", options:["A plan is being made","A plan was made","Plan is made","Plan made"], ans:0 },
  { q:"Correct passive: 'We have completed the task.'", options:["Task has completed","Task has been completed","Task is completed","Task was completed"], ans:1 },
  { q:"Correct passive: 'Someone stole my bike.'", options:["My bike was stolen","My bike is stolen","My bike stolen","Bike was stole"], ans:0 },

  // Narration
  { q:"He said, 'I am busy.'", options:["He said he is busy","He said he was busy","He says he was busy","He said busy"], ans:1 },
  { q:"She said, 'I will go.'", options:["She said she would go","She said she will go","She says she would go","She said go"], ans:0 },
  { q:"They said, 'We have won.'", options:["They said they had won","They said they have won","They say they had won","They said win"], ans:0 },
  { q:"Ravi said, 'I can do it.'", options:["Ravi said he could do it","Ravi said he can do it","Ravi says he could do it","Ravi said do it"], ans:0 },
  { q:"He said, 'I wrote a letter.'", options:["He said he had written a letter","He said he wrote a letter","He said he writes a letter","He said letter"], ans:0 },

  // Idioms/Phrases
  { q:"Idiom: 'Once in a blue moon' means?", options:["often","rarely","daily","never"], ans:1 },
  { q:"Idiom: 'Break the ice' means?", options:["start conversation","break glass","stop talking","angry"], ans:0 },
  { q:"Idiom: 'A piece of cake' means?", options:["easy","hard","sweet","danger"], ans:0 },
  { q:"Idiom: 'Hit the nail on the head' means?", options:["exactly correct","wrong","fight","confuse"], ans:0 },
  { q:"Idiom: 'Burn the midnight oil' means?", options:["sleep","study late","cook","run"], ans:1 },

  // Cloze-type (mini)
  { q:"Choose correct: He is accused ___ theft.", options:["for","of","to","by"], ans:1 },
  { q:"Choose correct: No sooner ___ I reached than it rained.", options:["had","have","has","was"], ans:0 },
  { q:"Choose correct: He is senior ___ me.", options:["than","to","from","by"], ans:1 },
  { q:"Choose correct: It is high time we ___ now.", options:["go","went","gone","going"], ans:1 },
  { q:"Choose correct: If I ___ you, I would help him.", options:["am","was","were","be"], ans:2 }
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
