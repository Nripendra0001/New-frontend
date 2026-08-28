function safeSet(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerText = value;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function formatDateTime(ts) {
  return new Date(ts).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatDateOnly(ts) {
  return new Date(ts).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function toMinSec(sec) {
  sec = Math.max(0, Number(sec || 0));
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m} min ${s} sec`;
}

function getPerformanceLevel(percentile) {
  if (percentile >= 99.5) return "Excellent";
  if (percentile >= 95) return "Very Good";
  if (percentile >= 80) return "Good";
  if (percentile >= 60) return "Average";
  return "Needs Improvement";
}

function getQualificationStatus(percentile, accuracy) {
  if (percentile >= 75 || accuracy >= 72) return "Qualified";
  return "Not Qualified";
}

function getNtaPercentileFromScore(score, maxMarks) {
  if (!maxMarks || maxMarks <= 0) return 0;

  if (score <= 0) return 5 + (Math.max(score, -50) + 50) * 0.1;

  const s = clamp(score, 0, maxMarks);
  const ratio = s / maxMarks;
  let p = 100 * Math.pow(ratio, 2.35);

  if (score >= 120) p += 2.0;
  if (score >= 140) p += 2.5;
  if (score >= 160) p += 3.5;
  if (score >= 180) p += 4.0;

  p = clamp(p, 1, 99.95);

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
  if (score >= 90) p = Math.max(p, 70.00);
  if (score >= 80) p = Math.max(p, 60.00);
  if (score >= 70) p = Math.max(p, 50.00);
  if (score >= 60) p = Math.max(p, 40.00);
  if (score >= 50) p = Math.max(p, 30.00);
  if (score >= 40) p = Math.max(p, 22.00);
  if (score >= 30) p = Math.max(p, 15.00);
  if (score >= 20) p = Math.max(p, 10.00);
  if (score >= 10) p = Math.max(p, 6.00);

  return clamp(p, 0, 99.95);
}

function getAssumedPopulation(exam) {
  const e = String(exam || "").toLowerCase();

  if (e.includes("ssc")) return 80000;
  if (e.includes("cgl")) return 90000;
  if (e.includes("chsl")) return 70000;
  if (e.includes("mts")) return 60000;
  if (e.includes("gd")) return 100000;
  if (e.includes("railway") || e.includes("rrb")) return 100000;
  if (e.includes("up police") || e.includes("police")) return 50000;
  if (e.includes("group d")) return 80000;

  return 100000;
}

function pickValue() {
  for (let i = 0; i < arguments.length; i += 1) {
    const value = arguments[i];
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      return value;
    }
  }
  return "--";
}

function digitsFromText(text, fallback, size) {
  const raw = String(text || "").replace(/\D/g, "");
  const seed = (raw || String(fallback)).padEnd(size, "0");
  return seed.slice(0, size);
}

function getAuthorityName(examName) {
  const exam = String(examName || "").toUpperCase();
  if (exam.includes("SSC")) return "Staff Selection Commission";
  if (exam.includes("RRB") || exam.includes("RAILWAY")) return "Railway Recruitment Board";
  if (exam.includes("IBPS")) return "Institute of Banking Personnel Selection";
  if (exam.includes("NTA")) return "National Testing Agency";
  if (exam.includes("UP POLICE")) return "Uttar Pradesh Police Recruitment and Promotion Board";
  return "Recruitment Examination Cell";
}

const student = JSON.parse(localStorage.getItem("studentDetails") || "{}");
const result = JSON.parse(localStorage.getItem("lastTestResult") || "{}");

if (!result || !result.exam) {
  window.location.href = "predicter.html";
}

const examName = String(result.exam || "Government Examination");
const correct = Number(result.correct || 0);
const wrong = Number(result.wrong || 0);
const attempted = result.attempted != null ? Number(result.attempted) : (correct + wrong);
const totalQuestions = Number(result.totalQuestions || attempted || 0);
const unattempted = result.unattempted != null ? Number(result.unattempted) : Math.max(0, totalQuestions - attempted);
const timeTakenSec = Number(result.timeTakenSec || 0);

const posMark = 4;
const negMark = 1;

let accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;
accuracy = clamp(accuracy, 0, 100);

let marksGained = correct * posMark;
let negativeMarks = wrong * negMark;
let finalScore = marksGained - negativeMarks;

marksGained = Math.round(marksGained * 100) / 100;
negativeMarks = Math.round(negativeMarks * 100) / 100;
finalScore = Math.round(finalScore * 100) / 100;

const maxMarks = totalQuestions * posMark;

const examKey = `nta_scores_${examName.replace(/\s+/g, "_")}`;
let scoreDB = JSON.parse(localStorage.getItem(examKey) || "[]");

const submittedAt = Date.now();

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
  submittedAt
});

if (scoreDB.length > 8000) scoreDB = scoreDB.slice(scoreDB.length - 8000);
localStorage.setItem(examKey, JSON.stringify(scoreDB));

let percentile = getNtaPercentileFromScore(finalScore, maxMarks);
percentile = clamp(percentile, 0, 99.95);

const totalStudents = getAssumedPopulation(examName);
let rank = Math.round(((100 - percentile) / 100) * totalStudents);
rank = clamp(rank, 1, totalStudents);

const performanceLevel = getPerformanceLevel(percentile);
const qualificationStatus = getQualificationStatus(percentile, accuracy);

const rollNumber = pickValue(
  student.rollNumber,
  student.roll,
  result.rollNumber,
  `${new Date().getFullYear()}${digitsFromText(examName, submittedAt, 8)}`
);

const applicationNumber = pickValue(
  student.applicationNumber,
  student.applicationNo,
  student.registrationNumber,
  `${digitsFromText(student.name || examName, submittedAt, 12)}`
);

const candidateName = pickValue(student.name, student.fullName, "Candidate");
const category = pickValue(student.cat, student.category, "General");
const gender = pickValue(student.gender, "Not Provided");
const dob = pickValue(student.dob, student.birthDate, "Not Available");
const guardianName = pickValue(student.fatherName, student.guardianName, student.parentName, "Not Provided");
const mode = pickValue(student.mode, result.mode, "Computer Based Test");
const authorityName = getAuthorityName(examName);

document.title = `Statement of Marks - ${examName}`;

// Authority Branding
const authorityHeading = getAuthorityName(examName).toUpperCase();
safeSet("examAuthorityHeading", authorityHeading);
safeSet("examTitle", `${examName} - SCORE CARD`);

// Ref No and Date
const refYear = new Date().getFullYear();
const refId = digitsFromText(examName + candidateName, submittedAt, 8);
safeSet("refNo", `Ref No: SN/EXAM/${refYear}/${refId}`);
safeSet("genTime", `Date of Issue: ${formatDateOnly(submittedAt)}`);

// Hyper-Realistic Security Data
const sNo = digitsFromText(candidateName + rollNumber, submittedAt, 8);
const securityHash = digitsFromText(examName + candidateName + finalScore, submittedAt, 16).toUpperCase();
safeSet("serialNo", `S.No: ${sNo}`);
safeSet("footerSerial", `S.No: ${sNo}`);
safeSet("securityHash", securityHash);

// Basic Info
safeSet("cName", candidateName);
safeSet("cRoll", rollNumber);
safeSet("cAppNo", applicationNumber);
safeSet("cCat", category);
safeSet("cGender", gender);
safeSet("cDob", dob);
safeSet("cParent", guardianName);
safeSet("cExam", examName);
safeSet("cMode", mode);
safeSet("cResultDate", formatDateOnly(submittedAt));
safeSet("examAuthority", authorityName);

// Status Styling
const statusEl = document.getElementById("cStatus");
if (statusEl) {
  statusEl.innerText = qualificationStatus.toUpperCase();
  statusEl.className = ""; // Reset
  statusEl.classList.add(qualificationStatus.toLowerCase().replace(/\s+/g, "-"));
}

// Marks Summary
safeSet("tTotal", totalQuestions || "--");
safeSet("tAttempted", attempted);
safeSet("tUnattempted", unattempted);
safeSet("tTime", toMinSec(timeTakenSec));
safeSet("tAccuracy", `${accuracy.toFixed(2)}%`);
safeSet("pLevel", performanceLevel); 

// Marks Detailed
safeSet("mCorrect", correct);
safeSet("mWrong", wrong);
safeSet("mMax", maxMarks);
safeSet("mGained", marksGained.toFixed(2));
safeSet("mScore", `${finalScore.toFixed(2)} / ${maxMarks}`);

// Percentile & Rank
safeSet("pPercentile", `${percentile.toFixed(2)}%`);
safeSet("pRank", `${rank.toLocaleString()} / ${totalStudents.toLocaleString()}`);
safeSet("pTotal", totalStudents.toLocaleString());
// Magic Celebration: Confetti
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  const colors = ['#10b981', '#f59e0b', '#3b82f6', '#ef4444', '#ffffff'];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 150,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.d);
      p.tilt = Math.sin(p.tiltAngle) * 15;

      ctx.beginPath();
      ctx.lineWidth = p.r / 2;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      ctx.stroke();

      if (p.y > canvas.height) {
        particles[i] = { ...p, y: -20, x: Math.random() * canvas.width };
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
  setTimeout(() => { canvas.style.opacity = '0'; canvas.style.transition = 'opacity 2s'; }, 4000);
}

// Time-aware Greeting
const hour = new Date().getHours();
const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

// Update AI Coach with Greeting
const coachInsight = document.getElementById('aiCoachInsight');
if (coachInsight) {
  const originalText = coachInsight.innerText;
  coachInsight.innerText = `${greeting}, Candidate! ${originalText}`;
}

// Trigger celebration if qualified
if (qualificationStatus === "Qualified") {
  setTimeout(triggerConfetti, 1000);
}
