
  // Exam Analytics Dashboard
   

/* ─── PARTICLE BACKGROUND ─── */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedY = -(Math.random() * 0.4 + 0.1);
      this.speedX = (Math.random() - 0.5) * 0.2;
      this.opacity = Math.random() * 0.6 + 0.1;
      this.color = Math.random() > 0.5 ? '0,200,255' : '255,153,0';
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y < -10) this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = `rgba(${this.color},1)`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ─── EXAM DATA ─── */
const EXAMS = {
  "UP Police Constable": {
    years: [
      { year: 2024, papers: 1, vacancy: 60244, applicants: 4800000, level: "MEDIUM", changes: "High competition, revised syllabus", pattern: "150 Q • 300 Marks • Neg: Yes", cutoff: { GENERAL: 72, OBC: 69, SC: 63, ST: 58 } },
      { year: 2022, papers: 1, vacancy: 26310, applicants: 3200000, level: "EASY",   changes: "Easy paper → cutoff spike",          pattern: "150 Q • 300 Marks • Neg: Yes", cutoff: { GENERAL: 78, OBC: 74, SC: 67, ST: 61 } },
      { year: 2020, papers: 1, vacancy: 5000,  applicants: 2800000, level: "TOUGH",  changes: "Low vacancy + tough paper",           pattern: "150 Q • 300 Marks • Neg: Yes", cutoff: { GENERAL: 64, OBC: 61, SC: 55, ST: 50 } },
      { year: 2018, papers: 1, vacancy: 41520, applicants: 2500000, level: "MEDIUM", changes: "Vacancy high year",                   pattern: "150 Q • 300 Marks • Neg: Yes", cutoff: { GENERAL: 70, OBC: 67, SC: 60, ST: 54 } },
      { year: 2016, papers: 1, vacancy: 35300, applicants: 2300000, level: "MEDIUM", changes: "Stable year",                         pattern: "150 Q • 300 Marks • Neg: Yes", cutoff: { GENERAL: 69, OBC: 66, SC: 59, ST: 52 } },
      { year: 2014, papers: 1, vacancy: 4150,  applicants: 1900000, level: "TOUGH",  changes: "Low vacancy year",                    pattern: "150 Q • 300 Marks • Neg: Yes", cutoff: { GENERAL: 62, OBC: 59, SC: 52, ST: 46 } },
      { year: 2012, papers: 1, vacancy: 24000, applicants: 1800000, level: "EASY",   changes: "Easy paper year",                     pattern: "150 Q • 300 Marks • Neg: Yes", cutoff: { GENERAL: 76, OBC: 72, SC: 64, ST: 58 } },
    ]
  },
  "SSC GD": {
    years: [
      { year: 2025, papers: 1, vacancy: 47000, applicants: 7600000, level: "MEDIUM", changes: "High competition + normal paper",     pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 73, OBC: 70, SC: 63, ST: 58 } },
      { year: 2024, papers: 1, vacancy: 26146, applicants: 6500000, level: "MEDIUM", changes: "Normal year",                         pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 74, OBC: 71, SC: 64, ST: 59 } },
      { year: 2023, papers: 1, vacancy: 50187, applicants: 7200000, level: "EASY",   changes: "Paper easy year",                     pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 79, OBC: 76, SC: 68, ST: 62 } },
      { year: 2022, papers: 1, vacancy: 24369, applicants: 6100000, level: "TOUGH",  changes: "Tough paper year",                    pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 66, OBC: 63, SC: 56, ST: 51 } },
      { year: 2021, papers: 1, vacancy: 25271, applicants: 5900000, level: "MEDIUM", changes: "Stable year",                         pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 71, OBC: 68, SC: 60, ST: 55 } },
      { year: 2020, papers: 1, vacancy: 22424, applicants: 5600000, level: "MEDIUM", changes: "Stable competition year",             pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 70, OBC: 67, SC: 59, ST: 54 } },
      { year: 2019, papers: 1, vacancy: 54593, applicants: 6300000, level: "EASY",   changes: "Vacancy high + paper moderate",       pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 77, OBC: 74, SC: 66, ST: 60 } },
      { year: 2018, papers: 1, vacancy: 58373, applicants: 6000000, level: "MEDIUM", changes: "Vacancy high year",                   pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 75, OBC: 72, SC: 64, ST: 58 } },
      { year: 2017, papers: 1, vacancy: 25000, applicants: 5200000, level: "TOUGH",  changes: "Tough paper + moderate vacancy",      pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 67, OBC: 64, SC: 56, ST: 51 } },
      { year: 2016, papers: 1, vacancy: 34000, applicants: 4800000, level: "MEDIUM", changes: "Normal year",                         pattern: "80 Q • 160 Marks • Neg: 0.5", cutoff: { GENERAL: 71, OBC: 68, SC: 60, ST: 55 } },
    ]
  },
  "SSC CGL": {
    years: [
      { year: 2025, papers: 1, vacancy: 7500,  applicants: 3800000, level: "MEDIUM", changes: "Stable year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 152, OBC: 148, SC: 132, ST: 125 } },
      { year: 2024, papers: 1, vacancy: 8200,  applicants: 3600000, level: "MEDIUM", changes: "Normal year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 150, OBC: 146, SC: 130, ST: 123 } },
      { year: 2023, papers: 1, vacancy: 8500,  applicants: 3400000, level: "EASY",   changes: "Paper easy → cutoff up", pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 156, OBC: 151, SC: 135, ST: 128 } },
      { year: 2022, papers: 1, vacancy: 37000, applicants: 3200000, level: "MEDIUM", changes: "Vacancy high year",      pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 145, OBC: 141, SC: 126, ST: 118 } },
      { year: 2021, papers: 1, vacancy: 7600,  applicants: 3100000, level: "TOUGH",  changes: "Paper tough year",       pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 140, OBC: 136, SC: 120, ST: 112 } },
      { year: 2020, papers: 1, vacancy: 7000,  applicants: 3000000, level: "MEDIUM", changes: "Normal year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 146, OBC: 142, SC: 125, ST: 117 } },
      { year: 2019, papers: 1, vacancy: 8500,  applicants: 2900000, level: "MEDIUM", changes: "Stable year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 148, OBC: 144, SC: 127, ST: 119 } },
      { year: 2018, papers: 1, vacancy: 11000, applicants: 2800000, level: "EASY",   changes: "Paper easy year",        pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 154, OBC: 150, SC: 133, ST: 126 } },
      { year: 2017, papers: 1, vacancy: 7500,  applicants: 2700000, level: "MEDIUM", changes: "Normal year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 147, OBC: 143, SC: 126, ST: 118 } },
      { year: 2016, papers: 1, vacancy: 9000,  applicants: 2600000, level: "TOUGH",  changes: "Paper tough year",       pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 141, OBC: 137, SC: 121, ST: 113 } },
    ]
  },
  "SSC CHSL": {
    years: [
      { year: 2025, papers: 1, vacancy: 4500, applicants: 3200000, level: "MEDIUM", changes: "Normal year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 156, OBC: 151, SC: 135, ST: 128 } },
      { year: 2024, papers: 1, vacancy: 3700, applicants: 3000000, level: "TOUGH",  changes: "Low vacancy + tough",    pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 150, OBC: 146, SC: 130, ST: 123 } },
      { year: 2023, papers: 1, vacancy: 1600, applicants: 2900000, level: "EASY",   changes: "Paper easy → cutoff up", pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 162, OBC: 157, SC: 140, ST: 133 } },
      { year: 2022, papers: 1, vacancy: 4500, applicants: 2700000, level: "MEDIUM", changes: "Vacancy high year",      pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 152, OBC: 148, SC: 132, ST: 125 } },
      { year: 2021, papers: 1, vacancy: 4800, applicants: 2600000, level: "MEDIUM", changes: "Stable year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 154, OBC: 150, SC: 134, ST: 127 } },
      { year: 2020, papers: 1, vacancy: 5100, applicants: 2500000, level: "MEDIUM", changes: "Normal year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 153, OBC: 149, SC: 133, ST: 126 } },
      { year: 2019, papers: 1, vacancy: 5600, applicants: 2400000, level: "EASY",   changes: "Paper easy year",        pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 160, OBC: 155, SC: 138, ST: 131 } },
      { year: 2018, papers: 1, vacancy: 5900, applicants: 2300000, level: "MEDIUM", changes: "Stable year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 155, OBC: 151, SC: 135, ST: 128 } },
      { year: 2017, papers: 1, vacancy: 3500, applicants: 2200000, level: "TOUGH",  changes: "Paper tough year",       pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 148, OBC: 144, SC: 128, ST: 121 } },
      { year: 2016, papers: 1, vacancy: 5100, applicants: 2100000, level: "MEDIUM", changes: "Normal year",            pattern: "100 Q • 200 Marks • Neg: 0.5", cutoff: { GENERAL: 152, OBC: 148, SC: 132, ST: 125 } },
    ]
  },
  "Railway NTPC": {
    years: [
      { year: 2021, papers: 1, vacancy: 35281, applicants: 12000000, level: "MEDIUM", changes: "Massive applicants + CBT cycle",   pattern: "100 Q • 100 Marks • No Neg",  cutoff: { GENERAL: 78, OBC: 74, SC: 66, ST: 61 } },
      { year: 2019, papers: 1, vacancy: 35277, applicants: 12500000, level: "MEDIUM", changes: "Highest applicants phase",         pattern: "100 Q • 100 Marks • No Neg",  cutoff: { GENERAL: 76, OBC: 72, SC: 64, ST: 59 } },
    ]
  },
  "RRB Group D": {
    years: [
      { year: 2022, papers: 1, vacancy: 103769, applicants: 11500000, level: "MEDIUM", changes: "Massive vacancy + huge applicants", pattern: "100 Q • 100 Marks • No Neg", cutoff: { GENERAL: 72, OBC: 69, SC: 61, ST: 56 } },
      { year: 2018, papers: 1, vacancy: 62907,  applicants: 10500000, level: "EASY",   changes: "Paper easy + huge competition",    pattern: "100 Q • 100 Marks • No Neg", cutoff: { GENERAL: 78, OBC: 75, SC: 67, ST: 62 } },
    ]
  },
  "UP Police SI": {
    years: [
      { year: 2024, papers: 1, vacancy: 921,  applicants: 1600000, level: "TOUGH",  changes: "Low vacancy + tough paper",  pattern: "160 Q • 400 Marks • Neg: Yes", cutoff: { GENERAL: 78, OBC: 74, SC: 66, ST: 60 } },
      { year: 2022, papers: 1, vacancy: 9534, applicants: 1800000, level: "MEDIUM", changes: "Vacancy high year",          pattern: "160 Q • 400 Marks • Neg: Yes", cutoff: { GENERAL: 72, OBC: 69, SC: 61, ST: 56 } },
    ]
  },
  "IBPS PO": {
    years: [
      { year: 2025, papers: 1, vacancy: 6000, applicants: 950000, level: "MEDIUM", changes: "Stable year",            pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 52, OBC: 48, SC: 42, ST: 38 } },
      { year: 2024, papers: 1, vacancy: 5500, applicants: 920000, level: "MEDIUM", changes: "Normal year",            pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 51, OBC: 47, SC: 41, ST: 37 } },
      { year: 2023, papers: 1, vacancy: 5200, applicants: 900000, level: "TOUGH",  changes: "Paper tough year",       pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 47, OBC: 43, SC: 37, ST: 33 } },
      { year: 2022, papers: 1, vacancy: 6500, applicants: 880000, level: "EASY",   changes: "Paper easy → cutoff up", pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 54, OBC: 50, SC: 44, ST: 40 } },
      { year: 2021, papers: 1, vacancy: 5900, applicants: 860000, level: "MEDIUM", changes: "Stable year",            pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 50, OBC: 46, SC: 40, ST: 36 } },
      { year: 2020, papers: 1, vacancy: 4100, applicants: 820000, level: "MEDIUM", changes: "Vacancy low year",       pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 49, OBC: 45, SC: 39, ST: 35 } },
      { year: 2019, papers: 1, vacancy: 4300, applicants: 800000, level: "MEDIUM", changes: "Normal year",            pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 50, OBC: 46, SC: 40, ST: 36 } },
      { year: 2018, papers: 1, vacancy: 4250, applicants: 780000, level: "TOUGH",  changes: "Paper tough year",       pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 46, OBC: 42, SC: 36, ST: 32 } },
      { year: 2017, papers: 1, vacancy: 3560, applicants: 760000, level: "MEDIUM", changes: "Vacancy low year",       pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 48, OBC: 44, SC: 38, ST: 34 } },
      { year: 2016, papers: 1, vacancy: 6000, applicants: 740000, level: "EASY",   changes: "Paper easy year",        pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 53, OBC: 49, SC: 43, ST: 39 } },
    ]
  },
  "SBI PO": {
    years: [
      { year: 2025, papers: 1, vacancy: 2500, applicants: 1200000, level: "TOUGH",  changes: "SBI tough paper",         pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 58, OBC: 54, SC: 48, ST: 44 } },
      { year: 2024, papers: 1, vacancy: 2000, applicants: 1150000, level: "MEDIUM", changes: "Stable year",             pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 60, OBC: 56, SC: 50, ST: 46 } },
      { year: 2023, papers: 1, vacancy: 2300, applicants: 1100000, level: "MEDIUM", changes: "Normal year",             pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 61, OBC: 57, SC: 51, ST: 47 } },
      { year: 2022, papers: 1, vacancy: 1673, applicants: 1080000, level: "TOUGH",  changes: "Low vacancy + tough",     pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 57, OBC: 53, SC: 47, ST: 43 } },
      { year: 2021, papers: 1, vacancy: 2056, applicants: 1050000, level: "MEDIUM", changes: "Stable year",             pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 59, OBC: 55, SC: 49, ST: 45 } },
      { year: 2020, papers: 1, vacancy: 2000, applicants: 1020000, level: "MEDIUM", changes: "Normal year",             pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 60, OBC: 56, SC: 50, ST: 46 } },
      { year: 2019, papers: 1, vacancy: 2000, applicants: 1000000, level: "EASY",   changes: "Paper easy year",         pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 64, OBC: 60, SC: 54, ST: 50 } },
      { year: 2018, papers: 1, vacancy: 2200, applicants: 980000,  level: "TOUGH",  changes: "Paper tough year",        pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 56, OBC: 52, SC: 46, ST: 42 } },
      { year: 2017, papers: 1, vacancy: 2400, applicants: 960000,  level: "MEDIUM", changes: "Stable year",             pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 60, OBC: 56, SC: 50, ST: 46 } },
      { year: 2016, papers: 1, vacancy: 2428, applicants: 940000,  level: "MEDIUM", changes: "Normal year",             pattern: "100 Q • 100 Marks • Neg: 0.25", cutoff: { GENERAL: 61, OBC: 57, SC: 51, ST: 47 } },
    ]
  },
  "CTET": {
    years: [
      { year: 2025, papers: 2, vacancy: 0, applicants: 2600000, level: "MEDIUM", changes: "Qualifying exam (no vacancy)", pattern: "150 Q • 150 Marks • No Neg", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
      { year: 2024, papers: 2, vacancy: 0, applicants: 2500000, level: "MEDIUM", changes: "Qualifying exam year",         pattern: "150 Q • 150 Marks • No Neg", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
      { year: 2023, papers: 2, vacancy: 0, applicants: 2400000, level: "EASY",   changes: "Paper easy year",             pattern: "150 Q • 150 Marks • No Neg", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
      { year: 2022, papers: 2, vacancy: 0, applicants: 2300000, level: "MEDIUM", changes: "Normal year",                 pattern: "150 Q • 150 Marks • No Neg", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
      { year: 2021, papers: 2, vacancy: 0, applicants: 2200000, level: "TOUGH",  changes: "Paper tough year",            pattern: "150 Q • 150 Marks • No Neg", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
      { year: 2020, papers: 2, vacancy: 0, applicants: 2100000, level: "MEDIUM", changes: "Normal year",                 pattern: "150 Q • 150 Marks • No Neg", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
      { year: 2019, papers: 2, vacancy: 0, applicants: 2000000, level: "MEDIUM", changes: "Normal year",                 pattern: "150 Q • 150 Marks • No Neg", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
      { year: 2018, papers: 2, vacancy: 0, applicants: 1900000, level: "EASY",   changes: "Paper easy year",             pattern: "150 Q • 150 Marks • No Neg", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    ]
  }
};

/* ─── DOM REFS ─── */
const examSelect  = document.getElementById("examSelect");
const catSelect   = document.getElementById("catSelect");
const loadBtn     = document.getElementById("loadBtn");
const kpiGrid     = document.getElementById("kpiGrid");
const dashGrid    = document.getElementById("dashGrid");
const kpiPapers   = document.getElementById("kpiPapers");
const kpiVacancy  = document.getElementById("kpiVacancy");
const kpiHigh     = document.getElementById("kpiHigh");
const kpiLow      = document.getElementById("kpiLow");
const kpiStability= document.getElementById("kpiStability");
const kpiSafe     = document.getElementById("kpiSafe");
const summaryTable= document.getElementById("summaryTable");
const trendTable  = document.getElementById("trendTable");
const changeTable = document.getElementById("changeTable");
const insightList = document.getElementById("insightList");

let cutoffChartRef = null;
let vaChartRef     = null;
let ratioChartRef  = null;
let safeChartRef   = null;

/* ─── INIT DROPDOWN ─── */
Object.keys(EXAMS).forEach(name => {
  const opt = document.createElement("option");
  opt.value = name;
  opt.textContent = name;
  examSelect.appendChild(opt);
});

/* ─── HELPERS ─── */
function fmt(n) {
  if (!n || n === 0) return "—";
  if (n >= 10000000) return (n / 10000000).toFixed(1) + " Cr";
  if (n >= 100000)   return (n / 100000).toFixed(1) + " L";
  return n.toLocaleString("en-IN");
}

function safeScore(cut) {
  return cut > 0 ? Math.min(cut + 8, 200) : 0;
}

function compRatio(app, vac) {
  if (!app || !vac) return 0;
  return Math.round(app / vac);
}

function getStability(arr) {
  if (arr.length < 3) return "Medium";
  const diffs = arr.slice(1).map((v, i) => Math.abs(v - arr[i]));
  const avg = diffs.reduce((a, b) => a + b, 0) / diffs.length;
  if (avg <= 3) return "🟢 High (Stable)";
  if (avg <= 7) return "🟡 Medium";
  return "🔴 Low (Volatile)";
}

function getValidYears(years, cat) {
  return years
    .filter(y => (y.cutoff?.[cat] || 0) > 0 || (y.vacancy || 0) > 0 || (y.applicants || 0) > 0)
    .sort((a, b) => a.year - b.year);
}

function levelBadge(level) {
  if (!level || level === "—") return `<span class="level-badge level-dash">—</span>`;
  const cls = level === "EASY" ? "level-easy" : level === "TOUGH" ? "level-tough" : "level-medium";
  const icon = level === "EASY" ? "" : level === "TOUGH" ? "🔴" : "🟡";
  return `<span class="level-badge ${cls}">${icon} ${level}</span>`;
}

/* ─── COUNTER ANIMATION ─── */
function animateCounter(el, target, suffix = "") {
  if (isNaN(target) || target === 0) { el.textContent = "—"; return; }
  const dur = 900, steps = 40;
  const inc = target / steps;
  let cur = 0, i = 0;
  const iv = setInterval(() => {
    cur += inc; i++;
    el.textContent = Math.round(cur).toLocaleString("en-IN") + suffix;
    if (i >= steps) { clearInterval(iv); el.textContent = target.toLocaleString("en-IN") + suffix; }
  }, dur / steps);
}

/* ─── CHART DEFAULTS ─── */
Chart.defaults.color = "rgba(200,210,230,0.6)";
Chart.defaults.borderColor = "rgba(0,200,255,0.08)";
Chart.defaults.font.family = "'JetBrains Mono', monospace";
Chart.defaults.font.size = 11;

function destroyCharts() {
  [cutoffChartRef, vaChartRef, ratioChartRef, safeChartRef].forEach(c => { if (c) c.destroy(); });
}

function renderCharts(validYears, cat) {
  destroyCharts();
  if (!validYears.length) return;

  const labels = validYears.map(x => x.year);
  const cutoffs = validYears.map(x => (x.cutoff?.[cat] || 0) > 0 ? x.cutoff[cat] : null);
  const vacData = validYears.map(x => x.vacancy || 0);
  const appData = validYears.map(x => x.applicants || 0);
  const ratios  = validYears.map(x => compRatio(x.applicants, x.vacancy) || null);
  const safes   = cutoffs.map(c => c ? safeScore(c) : null);

  /* CHART 1: Cutoff Trend */
  cutoffChartRef = new Chart(document.getElementById("cutoffChart"), {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: `Cutoff (${cat})`,
          data: cutoffs,
          tension: 0.4,
          spanGaps: false,
          borderColor: "#ff9900",
          backgroundColor: "rgba(255,153,0,0.08)",
          pointBackgroundColor: "#ff9900",
          pointBorderColor: "#020408",
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 8,
          fill: true,
          borderWidth: 2.5,
        },
        {
          label: `Safe Score (${cat})`,
          data: safes,
          tension: 0.4,
          spanGaps: false,
          borderColor: "#00e5a0",
          backgroundColor: "rgba(0,229,160,0.04)",
          pointBackgroundColor: "#00e5a0",
          pointBorderColor: "#020408",
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 7,
          fill: false,
          borderWidth: 1.5,
          borderDash: [5,4],
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      animation: { duration: 1000, easing: "easeInOutQuart" },
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { labels: { color: "#aac", boxWidth: 12, padding: 14 } },
        tooltip: {
          backgroundColor: "rgba(2,10,20,0.95)",
          borderColor: "rgba(0,200,255,0.25)",
          borderWidth: 1,
          titleFont: { family: "'JetBrains Mono', monospace", size: 11 },
          bodyFont:  { family: "'JetBrains Mono', monospace", size: 11 },
          callbacks: {
            label: ctx => ctx.raw === null ? "N/A" : ` ${ctx.dataset.label}: ${ctx.raw}`
          }
        }
      },
      scales: {
        x: { ticks: { color: "#667", maxRotation: 45 }, grid: { color: "rgba(0,200,255,0.05)" } },
        y: { ticks: { color: "#667" }, grid: { color: "rgba(0,200,255,0.05)" }, beginAtZero: false }
      }
    }
  });

  /* CHART 2: Vacancy vs Applicants */
  vaChartRef = new Chart(document.getElementById("vaChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label: "Vacancy",    data: vacData, backgroundColor: "rgba(75,142,255,0.7)",  borderColor: "#4b8eff", borderWidth: 1, borderRadius: 4 },
        { label: "Applicants", data: appData, backgroundColor: "rgba(255,153,0,0.25)",  borderColor: "#ff9900", borderWidth: 1, borderRadius: 4 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      animation: { duration: 900, easing: "easeInOutQuart" },
      plugins: {
        legend: { labels: { color: "#aac", boxWidth: 10, padding: 12 } },
        tooltip: {
          backgroundColor: "rgba(2,10,20,0.95)",
          borderColor: "rgba(0,200,255,0.25)",
          borderWidth: 1,
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${fmt(ctx.raw)}`
          }
        }
      },
      scales: {
        x: { ticks: { color: "#667", maxRotation: 45 }, grid: { display: false } },
        y: { ticks: { color: "#667", callback: v => fmt(v) }, grid: { color: "rgba(0,200,255,0.05)" }, beginAtZero: true }
      }
    }
  });

  /* CHART 3: Competition Ratio */
  ratioChartRef = new Chart(document.getElementById("ratioChart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Applicants per seat",
        data: ratios,
        tension: 0.4,
        spanGaps: false,
        borderColor: "#ff4560",
        backgroundColor: "rgba(255,69,96,0.08)",
        pointBackgroundColor: "#ff4560",
        pointBorderColor: "#020408",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: true,
        borderWidth: 2.5,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      animation: { duration: 950, easing: "easeInOutQuart" },
      plugins: {
        legend: { labels: { color: "#aac", boxWidth: 10 } },
        tooltip: {
          backgroundColor: "rgba(2,10,20,0.95)",
          borderColor: "rgba(255,69,96,0.25)",
          borderWidth: 1,
          callbacks: {
            label: ctx => ctx.raw === null ? "N/A" : ` Ratio: ${ctx.raw}:1`
          }
        }
      },
      scales: {
        x: { ticks: { color: "#667", maxRotation: 45 }, grid: { color: "rgba(0,200,255,0.05)" } },
        y: { ticks: { color: "#667" }, grid: { color: "rgba(0,200,255,0.05)" }, beginAtZero: true }
      }
    }
  });

  /* CHART 4: Safe Score Trend */
  safeChartRef = new Chart(document.getElementById("safeChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: `Safe Score (${cat})`,
        data: safes,
        backgroundColor: safes.map(v => v > 0 ? "rgba(0,229,160,0.55)" : "rgba(100,100,100,0.2)"),
        borderColor: "#00e5a0",
        borderWidth: 1,
        borderRadius: 5,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      animation: { duration: 1000, easing: "easeInOutQuart" },
      plugins: {
        legend: { labels: { color: "#aac", boxWidth: 10 } },
        tooltip: {
          backgroundColor: "rgba(2,10,20,0.95)",
          borderColor: "rgba(0,229,160,0.25)",
          borderWidth: 1,
          callbacks: {
            label: ctx => ctx.raw === null ? "N/A" : ` Safe: ${ctx.raw}`
          }
        }
      },
      scales: {
        x: { ticks: { color: "#667", maxRotation: 45 }, grid: { display: false } },
        y: { ticks: { color: "#667" }, grid: { color: "rgba(0,200,255,0.05)" }, beginAtZero: false }
      }
    }
  });
}

/* ─── MAIN RENDER ─── */
function renderDashboard() {
  const examName = examSelect.value;
  const cat      = catSelect.value;
  if (!examName) { alert("Please select an exam first."); return; }

  const btn = loadBtn;
  btn.disabled = true;
  btn.querySelector(".btn-text").textContent = "⏳ Loading…";
  setTimeout(() => {
    btn.disabled = false;
    btn.querySelector(".btn-text").textContent = "⚡ Load Dashboard";
  }, 1200);

  const years      = EXAMS[examName].years;
  const validYears = getValidYears(years, cat);

  kpiGrid.style.display = "grid";
  dashGrid.style.display = "grid";

  /* KPI calc */
  const totalPapers  = validYears.reduce((a, b) => a + (b.papers || 0), 0);
  const totalVacancy = validYears.reduce((a, b) => a + (b.vacancy || 0), 0);
  const cutoffs      = validYears.map(y => y.cutoff?.[cat] || 0).filter(x => x > 0);
  const highest      = cutoffs.length ? Math.max(...cutoffs) : 0;
  const lowest       = cutoffs.length ? Math.min(...cutoffs) : 0;
  const safeAvg      = cutoffs.length ? Math.round(cutoffs.reduce((a, b) => a + safeScore(b), 0) / cutoffs.length) : 0;
  const stability    = getStability(cutoffs);

  /* Animate KPIs */
  animateCounter(kpiPapers, totalPapers);
  animateCounter(kpiVacancy, totalVacancy);
  animateCounter(kpiHigh, highest);
  animateCounter(kpiLow, lowest);
  kpiStability.textContent = stability || "—";
  animateCounter(kpiSafe, safeAvg);

  /* Reset tables */
  summaryTable.innerHTML = "";
  trendTable.innerHTML   = "";
  changeTable.innerHTML  = "";
  insightList.innerHTML  = "";

  /* Build tables */
  validYears.forEach((row, idx) => {
    const cut   = row.cutoff?.[cat] || 0;
    const ratio = compRatio(row.applicants, row.vacancy);
    const ratioClass = ratio > 200 ? "ratio-high" : ratio > 100 ? "ratio-med" : "ratio-low";
    const delay = idx * 0.05;

    /* Summary Table */
    const tr1 = document.createElement("tr");
    tr1.style.animationDelay = delay + "s";
    tr1.innerHTML = `
      <td class="year-cell">${row.year}</td>
      <td>${fmt(row.vacancy)}</td>
      <td>${fmt(row.applicants)}</td>
      <td class="cut-val">${cut > 0 ? cut : "—"}</td>
      <td class="ratio-val ${ratioClass}">${ratio > 0 ? ratio + ":1" : "—"}</td>
    `;
    summaryTable.appendChild(tr1);

    /* Trend Table */
    const tr2 = document.createElement("tr");
    tr2.innerHTML = `
      <td class="year-cell">${row.year}</td>
      <td>${levelBadge(row.level)}</td>
      <td style="font-size:12px;color:rgba(200,210,230,0.7);">${row.pattern || "—"}</td>
    `;
    trendTable.appendChild(tr2);

    /* Changes Table */
    const tr3 = document.createElement("tr");
    tr3.innerHTML = `
      <td class="year-cell">${row.year}</td>
      <td>${levelBadge(row.level)}</td>
      <td style="font-size:12px;color:rgba(200,210,230,0.7);">${row.changes || "—"}</td>
    `;
    changeTable.appendChild(tr3);
  });

  /* Smart Insights */
  if (cutoffs.length === 0) {
    insightList.innerHTML = `<div class="empty-state"><div class="empty-icon">📭</div>No cutoff data available for selected category.</div>`;
  } else {
    const avgCutoff = Math.round(cutoffs.reduce((a, b) => a + b, 0) / cutoffs.length);
    const sorted    = [...validYears].filter(y => (y.cutoff?.[cat] || 0) > 0).sort((a, b) => a.cutoff[cat] - b.cutoff[cat]);
    const toughest  = sorted[0];
    const easiest   = sorted[sorted.length - 1];

    const ratios = validYears.map(y => compRatio(y.applicants, y.vacancy)).filter(x => x > 0);
    const avgRatio = ratios.length ? Math.round(ratios.reduce((a, b) => a + b, 0) / ratios.length) : 0;

    const trend = cutoffs.length >= 2
      ? (cutoffs[cutoffs.length - 1] > cutoffs[0] ? "📈 Rising" : "📉 Falling")
      : "—";

    const insights = [
      { icon: "📊", text: `Average cutoff (${cat}): <b class="hi">${avgCutoff}</b>` },
      { icon: "🔼", text: `Highest cutoff: <b class="hi">${highest}</b> — in year <b>${easiest?.year || "—"}</b>` },
      { icon: "🔽", text: `Lowest cutoff: <b class="hi">${lowest}</b> — in year <b>${toughest?.year || "—"}</b>` },
      { icon: "⚔️", text: avgRatio ? `Average competition: <b class="hi">${avgRatio}:1</b> (applicants per seat)` : "Competition ratio: <b>N/A</b>" },
      { icon: "🛡️", text: `Safe target = Cutoff + 8 marks → aim for <b class="hi">${safeAvg}</b>+` },
      { icon: "📉", text: `Cutoff trend: <b class="hi">${trend}</b> over available years` },
      { icon: "📏", text: `Stability: <b class="hi">${stability}</b>` },
      { icon: "💡", text: cutoffs.length >= 3 ? `Based on ${cutoffs.length} years of data. <b>Consistent preparation beats fluctuations.</b>` : `Limited data (${cutoffs.length} year${cutoffs.length > 1 ? 's' : ''}). <b>Track official notifications for updates.</b>` },
    ];

    insights.forEach((ins, i) => {
      const div = document.createElement("div");
      div.className = "insight-item";
      div.style.animationDelay = (i * 0.07) + "s";
      div.innerHTML = `<div class="insight-icon">${ins.icon}</div><div class="insight-text">${ins.text}</div>`;
      insightList.appendChild(div);
    });
  }

  /* Render charts */
  setTimeout(() => renderCharts(validYears, cat), 100);

  /* Smooth scroll */
  setTimeout(() => {
    kpiGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 200);
}

/* ─── EVENT ─── */
loadBtn.addEventListener("click", renderDashboard);

/* Allow Enter key */
[examSelect, catSelect].forEach(el => {
  el.addEventListener("keydown", e => { if (e.key === "Enter") renderDashboard(); });
});
