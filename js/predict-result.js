/* ======================================================
   NTA RESULT + REALISTIC PERCENTILE + GOVT RANK (FINAL)
   ✅ 50 Questions => 200 Marks
   ✅ +4 Correct, -1 Wrong (Locked)
   ✅ Score accurate
   ✅ Percentile = Previous year NTA trend style
   ✅ Rank = Govt Vacancy style (MAX 1,00,000)
   ✅ Compatible with your HTML IDs:
      - mLost
      - mScore
====================================================== */

function safeSet(id, value){
  const el = document.getElementById(id);
  if (el) el.innerText = value;
}

function clamp(n, min, max){
  return Math.max(min, Math.min(max, n));
}

function toMinSec(sec){
  sec = Math.max(0, Number(sec || 0));
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m} min ${s} sec`;
}

function formatDate(ts){
  return new Date(ts).toLocaleString();
}

function getPerformanceLevel(percentile){
  if (percentile >= 99.5) return "EXCELLENT";
  if (percentile >= 95) return "VERY GOOD";
  if (percentile >= 80) return "GOOD";
  if (percentile >= 60) return "AVERAGE";
  return "NEEDS IMPROVEMENT";
}

/* =========================================
   REALISTIC NTA PERCENTILE CURVE (200 Marks)
========================================= */
function getNtaPercentileFromScore(score, maxMarks){

  if (!maxMarks || maxMarks <= 0) return 0;

  // Negative / very low score
  if (score <= 0) return 5 + (Math.max(score, -50) + 50) * 0.1;

  const s = clamp(score, 0, maxMarks);
  const ratio = s / maxMarks;

  // Base curve
  let p = 100 * Math.pow(ratio, 2.35);

  // Extra boost near top
  if (score >= 120) p += 2.0;
  if (score >= 140) p += 2.5;
  if (score >= 160) p += 3.5;
  if (score >= 180) p += 4.0;

  p = clamp(p, 1, 99.95);

  // Hard tuning
  if (score >= 190) p = Math.max(p, 99.75);
  if (score >= 180) p = Math.max(p, 99.30);
  if (score >= 170) p = Math.max(p, 98.70);
  if (score >= 160) p = Math.max(p, 97.80);
  if (score >= 150) p = Math.max(p, 96.50);
  if (score >= 140) p = Math.max(p, 94.50);
  if (score >= 130) p = Math.max(p, 92.00);
  if (score >= 120) p = Math.max(p, 88.50);
  if (score >= 110) p = Math.max(p, 84.00);
  if (score >= 100) p = Math.max(p, 78.00);
  if (score >= 90)  p = Math.max(p, 70.00);
  if (score >= 80)  p = Math.max(p, 60.00);
  if (score >= 70)  p = Math.max(p, 50.00);
  if (score >= 60)  p = Math.max(p, 40.00);
  if (score >= 50)  p = Math.max(p, 30.00);
  if (score >= 40)  p = Math.max(p, 22.00);
  if (score >= 30)  p = Math.max(p, 15.00);
  if (score >= 20)  p = Math.max(p, 10.00);
  if (score >= 10)  p = Math.max(p, 6.00);

  return clamp(p, 0, 99.95);
}

/* ======================================================
   GOVT VACANCY POPULATION (MAX 1 LAKH RANK)
====================================================== */
function getAssumedPopulation(exam){
  const e = String(exam || "").toLowerCase();

  // Govt Jobs (realistic)
  if (e.includes("ssc")) return 80000;
  if (e.includes("cgl")) return 90000;
  if (e.includes("chsl")) return 70000;
  if (e.includes("mts")) return 60000;
  if (e.includes("gd")) return 100000;
  if (e.includes("railway") || e.includes("rrb")) return 100000;
  if (e.includes("up police") || e.includes("police")) return 50000;
  if (e.includes("group d")) return 80000;

  // Default max 1 lakh
  return 100000;
}

/* ======================================================
   LOAD DATA
====================================================== */
const student = JSON.parse(localStorage.getItem("studentDetails") || "{}");
const result  = JSON.parse(localStorage.getItem("lastTestResult") || "{}");

if (!result || !result.exam) {
  window.location.href = "predicter.html";
}

/* ======================================================
   NORMALIZE RESULT
====================================================== */
const examName = String(result.exam || "Govt Exam");

const correct = Number(result.correct || 0);
const wrong   = Number(result.wrong || 0);

const attempted = (result.attempted != null)
  ? Number(result.attempted)
  : (correct + wrong);

const totalQuestions = Number(result.totalQuestions || attempted || 0);

const unattempted = (result.unattempted != null)
  ? Number(result.unattempted)
  : Math.max(0, totalQuestions - attempted);

const timeTakenSec = Number(result.timeTakenSec || 0);

/* ======================================================
   MARKING LOCKED (NTA)
====================================================== */
const posMark = 4;
const negMark = 1;

/* Accuracy */
let accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;
accuracy = clamp(accuracy, 0, 100);

/* Marks */
let marksGained = correct * posMark;
let negativeMarks = wrong * negMark;
let finalScore = marksGained - negativeMarks;

marksGained = Math.round(marksGained * 100) / 100;
negativeMarks = Math.round(negativeMarks * 100) / 100;
finalScore = Math.round(finalScore * 100) / 100;

/* Max marks */
let maxMarks = totalQuestions * posMark;

/* ======================================================
   SAVE RESULT IN DB (localStorage)
====================================================== */
const examKey = `nta_scores_${examName.replace(/\s+/g, "_")}`;
let scoreDB = JSON.parse(localStorage.getItem(examKey) || "[]");

scoreDB.push({
  score: finalScore,
  maxMarks,
  correct,
  wrong,
  attempted,
  totalQuestions,
  unattempted,
  accuracy,
  marksGained,
  negativeMarks,
  timeTakenSec,
  submittedAt: Date.now()
});

if (scoreDB.length > 8000) scoreDB = scoreDB.slice(scoreDB.length - 8000);
localStorage.setItem(examKey, JSON.stringify(scoreDB));

/* ======================================================
   PERCENTILE + RANK (GOVT STYLE)
====================================================== */
let percentile = getNtaPercentileFromScore(finalScore, maxMarks);
percentile = clamp(percentile, 0, 99.95);

let totalStudents = getAssumedPopulation(examName);

/*
  Rank from percentile:
  percentile=90 => better than 90% => rank ~ 10% of total
*/
let rank = Math.round(((100 - percentile) / 100) * totalStudents);
rank = clamp(rank, 1, totalStudents);

/* ======================================================
   PERFORMANCE
====================================================== */
const level = getPerformanceLevel(percentile);

/* ======================================================
   FILL UI (YOUR HTML IDs)
====================================================== */
safeSet("examTitle", `${examName} – RESULT`);
safeSet("generatedLine", `Generated on: ${formatDate(Date.now())}`);

safeSet("cName", student.name || "Student");
safeSet("cCat", student.cat || "--");
safeSet("cExam", examName);
safeSet("cMode", student.mode || "CBT Mock");

safeSet("tTotal", totalQuestions || "--");
safeSet("tAttempted", attempted);
safeSet("tUnattempted", unattempted);
safeSet("tTime", toMinSec(timeTakenSec));
safeSet("tAccuracy", accuracy.toFixed(2) + "%");

safeSet("mCorrect", correct);
safeSet("mWrong", wrong);

safeSet("mGained", marksGained.toFixed(2));
safeSet("mLost", negativeMarks.toFixed(2));

safeSet("mScore", `${finalScore.toFixed(2)} / ${maxMarks}`);

safeSet("pPercentile", percentile.toFixed(2) + "%");
safeSet("pRank", `${rank} / ${totalStudents}`);
safeSet("pTotal", totalStudents);
safeSet("pLevel", level);
