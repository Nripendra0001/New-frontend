/* ==========================================
   SARKARINEXT – Exam Analytics Dashboard
   FINAL (PowerBI Style, Frontend Only)
========================================== */

const EXAMS = {
  "UP Police Constable": {
    years: [
      { year: 2025, papers: 1, vacancy: 0, applicants: 5200000, level: "MEDIUM", changes: "Re-exam/Update year (data pending)", pattern: "150 Q • 300 Marks • Negative: Yes", source: "Estimated", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
{ year: 2024, papers: 1, vacancy: 60244, applicants: 4800000, level: "MEDIUM", changes: "High competition year", pattern: "150 Q • 300 Marks • Negative: Yes", source: "Estimated", cutoff: { GENERAL: 72, OBC: 69, SC: 63, ST: 58 } },
{ year: 2023, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", pattern: "—", source: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
{ year: 2022, papers: 1, vacancy: 26310, applicants: 3200000, level: "EASY", changes: "Paper easy → cutoff spike", pattern: "150 Q • 300 Marks • Negative: Yes", source: "Estimated", cutoff: { GENERAL: 78, OBC: 74, SC: 67, ST: 61 } },
{ year: 2021, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", pattern: "—", source: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
{ year: 2020, papers: 1, vacancy: 5000, applicants: 2800000, level: "TOUGH", changes: "Vacancy low + paper tough", pattern: "150 Q • 300 Marks • Negative: Yes", source: "Estimated", cutoff: { GENERAL: 64, OBC: 61, SC: 55, ST: 50 } },
{ year: 2019, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", pattern: "—", source: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
{ year: 2018, papers: 1, vacancy: 41520, applicants: 2500000, level: "MEDIUM", changes: "Vacancy high year", pattern: "150 Q • 300 Marks • Negative: Yes", source: "Estimated", cutoff: { GENERAL: 70, OBC: 67, SC: 60, ST: 54 } },
{ year: 2017, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", pattern: "—", source: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
{ year: 2016, papers: 1, vacancy: 35300, applicants: 2300000, level: "MEDIUM", changes: "Stable year", pattern: "150 Q • 300 Marks • Negative: Yes", source: "Estimated", cutoff: { GENERAL: 69, OBC: 66, SC: 59, ST: 52 } },
{ year: 2015, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", pattern: "—", source: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
{ year: 2014, papers: 1, vacancy: 4150, applicants: 1900000, level: "TOUGH", changes: "Low vacancy year", pattern: "150 Q • 300 Marks • Negative: Yes", source: "Estimated", cutoff: { GENERAL: 62, OBC: 59, SC: 52, ST: 46 } },
{ year: 2013, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", pattern: "—", source: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
{ year: 2012, papers: 1, vacancy: 24000, applicants: 1800000, level: "EASY", changes: "Easy paper year", pattern: "150 Q • 300 Marks • Negative: Yes", source: "Estimated", cutoff: { GENERAL: 76, OBC: 72, SC: 64, ST: 58 } },
{ year: 2011, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", pattern: "—", source: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    ]
  },

  "SSC GD": {
    years: [
     { year: 2025, papers: 1, vacancy: 47000, applicants: 7600000, level: "MEDIUM", changes: "High competition + normal paper", cutoff: { GENERAL: 73, OBC: 70, SC: 63, ST: 58 } },
{ year: 2024, papers: 1, vacancy: 26146, applicants: 6500000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 74, OBC: 71, SC: 64, ST: 59 } },
{ year: 2023, papers: 1, vacancy: 50187, applicants: 7200000, level: "EASY", changes: "Paper easy year", cutoff: { GENERAL: 79, OBC: 76, SC: 68, ST: 62 } },
{ year: 2022, papers: 1, vacancy: 24369, applicants: 6100000, level: "TOUGH", changes: "Tough paper year", cutoff: { GENERAL: 66, OBC: 63, SC: 56, ST: 51 } },
{ year: 2021, papers: 1, vacancy: 25271, applicants: 5900000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 71, OBC: 68, SC: 60, ST: 55 } },
{ year: 2020, papers: 1, vacancy: 22424, applicants: 5600000, level: "MEDIUM", changes: "Stable competition year", cutoff: { GENERAL: 70, OBC: 67, SC: 59, ST: 54 } },
{ year: 2019, papers: 1, vacancy: 54593, applicants: 6300000, level: "EASY", changes: "Vacancy high + paper moderate", cutoff: { GENERAL: 77, OBC: 74, SC: 66, ST: 60 } },
{ year: 2018, papers: 1, vacancy: 58373, applicants: 6000000, level: "MEDIUM", changes: "Vacancy high year", cutoff: { GENERAL: 75, OBC: 72, SC: 64, ST: 58 } },
{ year: 2017, papers: 1, vacancy: 25000, applicants: 5200000, level: "TOUGH", changes: "Paper tough + vacancy moderate", cutoff: { GENERAL: 67, OBC: 64, SC: 56, ST: 51 } },
{ year: 2016, papers: 1, vacancy: 34000, applicants: 4800000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 71, OBC: 68, SC: 60, ST: 55 } },

    ]
  
},

"Railway NTPC": {
  years: [
    { year: 2025, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ / Data pending", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2024, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2023, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2022, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No new NTPC cycle", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2021, papers: 1, vacancy: 35281, applicants: 12000000, level: "MEDIUM", changes: "Massive applicants + CBT cycle", cutoff: { GENERAL: 78, OBC: 74, SC: 66, ST: 61 } },
    { year: 2020, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2019, papers: 1, vacancy: 35277, applicants: 12500000, level: "MEDIUM", changes: "Highest applicants phase", cutoff: { GENERAL: 76, OBC: 72, SC: 64, ST: 59 } },
    { year: 2018, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No NTPC cycle", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2017, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No NTPC cycle", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2016, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No NTPC cycle", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
  ]
},

"SSC CGL": {
  years: [
    { year: 2025, papers: 1, vacancy: 7500, applicants: 3800000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 152, OBC: 148, SC: 132, ST: 125 } },
    { year: 2024, papers: 1, vacancy: 8200, applicants: 3600000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 150, OBC: 146, SC: 130, ST: 123 } },
    { year: 2023, papers: 1, vacancy: 8500, applicants: 3400000, level: "EASY", changes: "Paper easy → cutoff up", cutoff: { GENERAL: 156, OBC: 151, SC: 135, ST: 128 } },
    { year: 2022, papers: 1, vacancy: 37000, applicants: 3200000, level: "MEDIUM", changes: "Vacancy high year", cutoff: { GENERAL: 145, OBC: 141, SC: 126, ST: 118 } },
    { year: 2021, papers: 1, vacancy: 7600, applicants: 3100000, level: "TOUGH", changes: "Paper tough year", cutoff: { GENERAL: 140, OBC: 136, SC: 120, ST: 112 } },
    { year: 2020, papers: 1, vacancy: 7000, applicants: 3000000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 146, OBC: 142, SC: 125, ST: 117 } },
    { year: 2019, papers: 1, vacancy: 8500, applicants: 2900000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 148, OBC: 144, SC: 127, ST: 119 } },
    { year: 2018, papers: 1, vacancy: 11000, applicants: 2800000, level: "EASY", changes: "Paper easy year", cutoff: { GENERAL: 154, OBC: 150, SC: 133, ST: 126 } },
    { year: 2017, papers: 1, vacancy: 7500, applicants: 2700000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 147, OBC: 143, SC: 126, ST: 118 } },
    { year: 2016, papers: 1, vacancy: 9000, applicants: 2600000, level: "TOUGH", changes: "Paper tough year", cutoff: { GENERAL: 141, OBC: 137, SC: 121, ST: 113 } },
  ]

},

"UP Police SI": {
  years: [
    { year: 2025, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ / cycle pending", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2024, papers: 1, vacancy: 921, applicants: 1600000, level: "TOUGH", changes: "Vacancy low + paper tough", cutoff: { GENERAL: 78, OBC: 74, SC: 66, ST: 60 } },
    { year: 2023, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2022, papers: 1, vacancy: 9534, applicants: 1800000, level: "MEDIUM", changes: "Vacancy high year", cutoff: { GENERAL: 72, OBC: 69, SC: 61, ST: 56 } },
    { year: 2021, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "Exam नहीं हुआ", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2020, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2019, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2018, papers: 1, vacancy: 0, applicants: 0, level: "—", changes: "Old cycle / data not available", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2017, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2016, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
  ]
},

"SSC CHSL": {
  years: [
    { year: 2025, papers: 1, vacancy: 4500, applicants: 3200000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 156, OBC: 151, SC: 135, ST: 128 } },
    { year: 2024, papers: 1, vacancy: 3700, applicants: 3000000, level: "TOUGH", changes: "Vacancy low + paper tough", cutoff: { GENERAL: 150, OBC: 146, SC: 130, ST: 123 } },
    { year: 2023, papers: 1, vacancy: 1600, applicants: 2900000, level: "EASY", changes: "Paper easy → cutoff up", cutoff: { GENERAL: 162, OBC: 157, SC: 140, ST: 133 } },
    { year: 2022, papers: 1, vacancy: 4500, applicants: 2700000, level: "MEDIUM", changes: "Vacancy high year", cutoff: { GENERAL: 152, OBC: 148, SC: 132, ST: 125 } },
    { year: 2021, papers: 1, vacancy: 4800, applicants: 2600000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 154, OBC: 150, SC: 134, ST: 127 } },
    { year: 2020, papers: 1, vacancy: 5100, applicants: 2500000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 153, OBC: 149, SC: 133, ST: 126 } },
    { year: 2019, papers: 1, vacancy: 5600, applicants: 2400000, level: "EASY", changes: "Paper easy year", cutoff: { GENERAL: 160, OBC: 155, SC: 138, ST: 131 } },
    { year: 2018, papers: 1, vacancy: 5900, applicants: 2300000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 155, OBC: 151, SC: 135, ST: 128 } },
    { year: 2017, papers: 1, vacancy: 3500, applicants: 2200000, level: "TOUGH", changes: "Paper tough year", cutoff: { GENERAL: 148, OBC: 144, SC: 128, ST: 121 } },
    { year: 2016, papers: 1, vacancy: 5100, applicants: 2100000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 152, OBC: 148, SC: 132, ST: 125 } },
  ]
},

"RRB Group D": {
  years: [
    { year: 2025, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "New cycle pending", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2024, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2023, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2022, papers: 1, vacancy: 103769, applicants: 11500000, level: "MEDIUM", changes: "Massive vacancy + huge applicants", cutoff: { GENERAL: 72, OBC: 69, SC: 61, ST: 56 } },
    { year: 2021, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2020, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2019, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2018, papers: 1, vacancy: 62907, applicants: 10500000, level: "EASY", changes: "Paper easy + huge competition", cutoff: { GENERAL: 78, OBC: 75, SC: 67, ST: 62 } },
    { year: 2017, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    { year: 2016, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "No exam year", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
  ]
},

"IBPS PO": {
  years: [
    { year: 2025, papers: 1, vacancy: 6000, applicants: 950000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 52, OBC: 48, SC: 42, ST: 38 } },
    { year: 2024, papers: 1, vacancy: 5500, applicants: 920000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 51, OBC: 47, SC: 41, ST: 37 } },
    { year: 2023, papers: 1, vacancy: 5200, applicants: 900000, level: "TOUGH", changes: "Paper tough year", cutoff: { GENERAL: 47, OBC: 43, SC: 37, ST: 33 } },
    { year: 2022, papers: 1, vacancy: 6500, applicants: 880000, level: "EASY", changes: "Paper easy → cutoff up", cutoff: { GENERAL: 54, OBC: 50, SC: 44, ST: 40 } },
    { year: 2021, papers: 1, vacancy: 5900, applicants: 860000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 50, OBC: 46, SC: 40, ST: 36 } },
    { year: 2020, papers: 1, vacancy: 4100, applicants: 820000, level: "MEDIUM", changes: "Vacancy low year", cutoff: { GENERAL: 49, OBC: 45, SC: 39, ST: 35 } },
    { year: 2019, papers: 1, vacancy: 4300, applicants: 800000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 50, OBC: 46, SC: 40, ST: 36 } },
    { year: 2018, papers: 1, vacancy: 4250, applicants: 780000, level: "TOUGH", changes: "Paper tough year", cutoff: { GENERAL: 46, OBC: 42, SC: 36, ST: 32 } },
    { year: 2017, papers: 1, vacancy: 3560, applicants: 760000, level: "MEDIUM", changes: "Vacancy low year", cutoff: { GENERAL: 48, OBC: 44, SC: 38, ST: 34 } },
    { year: 2016, papers: 1, vacancy: 6000, applicants: 740000, level: "EASY", changes: "Paper easy year", cutoff: { GENERAL: 53, OBC: 49, SC: 43, ST: 39 } },
  ]
},

"SBI PO": {
  years: [
    { year: 2025, papers: 1, vacancy: 2500, applicants: 1200000, level: "TOUGH", changes: "SBI level tough paper", cutoff: { GENERAL: 58, OBC: 54, SC: 48, ST: 44 } },
    { year: 2024, papers: 1, vacancy: 2000, applicants: 1150000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 60, OBC: 56, SC: 50, ST: 46 } },
    { year: 2023, papers: 1, vacancy: 2300, applicants: 1100000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 61, OBC: 57, SC: 51, ST: 47 } },
    { year: 2022, papers: 1, vacancy: 1673, applicants: 1080000, level: "TOUGH", changes: "Vacancy low + tough paper", cutoff: { GENERAL: 57, OBC: 53, SC: 47, ST: 43 } },
    { year: 2021, papers: 1, vacancy: 2056, applicants: 1050000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 59, OBC: 55, SC: 49, ST: 45 } },
    { year: 2020, papers: 1, vacancy: 2000, applicants: 1020000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 60, OBC: 56, SC: 50, ST: 46 } },
    { year: 2019, papers: 1, vacancy: 2000, applicants: 1000000, level: "EASY", changes: "Paper easy year", cutoff: { GENERAL: 64, OBC: 60, SC: 54, ST: 50 } },
    { year: 2018, papers: 1, vacancy: 2200, applicants: 980000, level: "TOUGH", changes: "Paper tough year", cutoff: { GENERAL: 56, OBC: 52, SC: 46, ST: 42 } },
    { year: 2017, papers: 1, vacancy: 2400, applicants: 960000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 60, OBC: 56, SC: 50, ST: 46 } },
    { year: 2016, papers: 1, vacancy: 2428, applicants: 940000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 61, OBC: 57, SC: 51, ST: 47 } },
  ]
},

"CTET" : {
  years: [
    { year: 2025, papers: 2, vacancy: 0, applicants: 2600000, level: "MEDIUM", changes: "CTET qualifying exam (no vacancy)", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    { year: 2024, papers: 2, vacancy: 0, applicants: 2500000, level: "MEDIUM", changes: "Qualifying exam year", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    { year: 2023, papers: 2, vacancy: 0, applicants: 2400000, level: "EASY", changes: "Paper easy year", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    { year: 2022, papers: 2, vacancy: 0, applicants: 2300000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    { year: 2021, papers: 2, vacancy: 0, applicants: 2200000, level: "TOUGH", changes: "Paper tough year", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    { year: 2020, papers: 2, vacancy: 0, applicants: 2100000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    { year: 2019, papers: 2, vacancy: 0, applicants: 2000000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    { year: 2018, papers: 2, vacancy: 0, applicants: 1900000, level: "EASY", changes: "Paper easy year", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    { year: 2017, papers: 2, vacancy: 0, applicants: 1800000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
    { year: 2016, papers: 2, vacancy: 0, applicants: 1700000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 90, OBC: 82, SC: 82, ST: 82 } },
  ]
}
};



/* DOM */
const examSelect = document.getElementById("examSelect");
const catSelect = document.getElementById("catSelect");
const loadBtn = document.getElementById("loadBtn");

const kpiGrid = document.getElementById("kpiGrid");
const dashGrid = document.getElementById("dashGrid");

const kpiPapers = document.getElementById("kpiPapers");
const kpiVacancy = document.getElementById("kpiVacancy");
const kpiHigh = document.getElementById("kpiHigh");
const kpiLow = document.getElementById("kpiLow");
const kpiStability = document.getElementById("kpiStability");
const kpiSafe = document.getElementById("kpiSafe");

const summaryTable = document.getElementById("summaryTable");
const trendTable = document.getElementById("trendTable");
const changeTable = document.getElementById("changeTable");
const insightList = document.getElementById("insightList");

let cutoffChartRef = null;
let vaChartRef = null;

/* INIT DROPDOWN */
function initExamDropdown(){
  Object.keys(EXAMS).forEach(examName=>{
    const opt = document.createElement("option");
    opt.value = examName;
    opt.textContent = examName;
    examSelect.appendChild(opt);
  });
}
initExamDropdown();

/* HELPERS */
function formatNum(n){
  if(!n || n === 0) return "—";
  return n.toLocaleString("en-IN");
}

function safeScore(cut){
  if(!cut || cut === 0) return 0;
  return Math.min(cut + 8, 100);
}

function competitionRatio(applicants, vacancy){
  if(!applicants || !vacancy) return 0;
  return applicants / vacancy;
}

function getStability(validCutoffs){
  if(validCutoffs.length < 3) return "Medium";

  let diffs = [];
  for(let i=1;i<validCutoffs.length;i++){
    diffs.push(Math.abs(validCutoffs[i] - validCutoffs[i-1]));
  }
  const avg = diffs.reduce((a,b)=>a+b,0) / diffs.length;

  if(avg <= 3) return "High (Stable)";
  if(avg <= 6) return "Medium";
  return "Low (Unstable)";
}

function getTrend(curr, prev){
  if(curr === 0 || prev === 0) return {t:"—", cls:""};
  if(curr > prev){
    if(curr - prev >= 8) return {t:"⚠ Jump Up", cls:"warn"};
    return {t:"⬆ Up", cls:"up"};
  }
  if(curr < prev){
    if(prev - curr >= 8) return {t:"⚠ Jump Down", cls:"warn"};
    return {t:"⬇ Down", cls:"down"};
  }
  return {t:"— Same", cls:"same"};
}

function simpleReason(curr, prev, vacancy, level, applicants){
  if(curr === 0) return "Exam नहीं हुआ / Data नहीं";
  if(prev === 0) return "New/Return year";

  if(curr > prev){
    if(level === "EASY") return "Paper आसान था";
    if(vacancy < 10000) return "Vacancy कम थी";
    if(applicants > 2000000) return "Applicants बहुत ज्यादा थे";
    return "Competition ज्यादा";
  }

  if(curr < prev){
    if(level === "TOUGH") return "Paper tough था";
    if(vacancy > 30000) return "Vacancy ज्यादा थी";
    return "Paper tough / Vacancy ज्यादा";
  }

  return "Stable year";
}

/* CHARTS */
function renderCharts(years, cat){
  const labels = years.map(x=>x.year).reverse();

  const cutoffData = years.map(x=>x.cutoff[cat] || 0).reverse();
  const vacancyData = years.map(x=>x.vacancy || 0).reverse();
  const applicantData = years.map(x=>x.applicants || 0).reverse();

  // Destroy old charts
  if(cutoffChartRef) cutoffChartRef.destroy();
  if(vaChartRef) vaChartRef.destroy();

  // Cutoff Line
  cutoffChartRef = new Chart(document.getElementById("cutoffChart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: `Cutoff (${cat})`,
        data: cutoffData,
        tension: 0.35
      }]
    },
    options: {
      responsive:true,
      plugins:{
        legend:{labels:{color:"#fff"}},
      },
      scales:{
        x:{ticks:{color:"#aaa"}},
        y:{ticks:{color:"#aaa"}}
      }
    }
  });

  // Vacancy vs Applicants Bar
  vaChartRef = new Chart(document.getElementById("vaChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label:"Vacancy", data: vacancyData },
        { label:"Applicants", data: applicantData }
      ]
    },
    options: {
      responsive:true,
      plugins:{
        legend:{labels:{color:"#fff"}},
      },
      scales:{
        x:{ticks:{color:"#aaa"}},
        y:{ticks:{color:"#aaa"}}
      }
    }
  });
}

/* MAIN RENDER */
function renderDashboard(){
  const examName = examSelect.value;
  const cat = catSelect.value;

  if(!examName){
    alert("Bhai pehle exam select kar ");
    return;
  }

  const years = EXAMS[examName].years;

  kpiGrid.style.display = "grid";
  dashGrid.style.display = "grid";

  const validYears = years.filter(y => y.cutoff[cat] > 0);

  const totalPapers = years.reduce((a,b)=>a+(b.papers||0),0);
  const totalVacancy = years.reduce((a,b)=>a+(b.vacancy||0),0);

  const cutoffs = validYears.map(y=>y.cutoff[cat]);
  const highest = cutoffs.length ? Math.max(...cutoffs) : 0;
  const lowest = cutoffs.length ? Math.min(...cutoffs) : 0;

  const safeAvg = cutoffs.length
    ? Math.round(cutoffs.reduce((a,b)=>a+safeScore(b),0)/cutoffs.length)
    : 0;

  const stability = getStability(cutoffs);

  // KPI
  kpiPapers.textContent = totalPapers || "—";
  kpiVacancy.textContent = formatNum(totalVacancy);
  kpiHigh.textContent = highest || "—";
  kpiLow.textContent = lowest || "—";
  kpiStability.textContent = stability;
  kpiSafe.textContent = safeAvg ? safeAvg : "—";

  // Tables
  summaryTable.innerHTML = "";
  trendTable.innerHTML = "";
  changeTable.innerHTML = "";
  insightList.innerHTML = "";

  let prevCut = 0;

  years.forEach(row=>{
    const cut = row.cutoff[cat] || 0;

    // Summary table
    const tr1 = document.createElement("tr");
    tr1.innerHTML = `
      <td>${row.year}</td>
      <td>${formatNum(row.vacancy)}</td>
      <td>${formatNum(row.applicants)}</td>
      <td>${cut ? cut : "—"}</td>
    `;
    summaryTable.appendChild(tr1);

    // Trend table
    const trend = getTrend(cut, prevCut);
    const reason = simpleReason(cut, prevCut, row.vacancy, row.level, row.applicants);

    const tr2 = document.createElement("tr");
    tr2.innerHTML = `
      <td>${row.year}</td>
      <td><b>${trend.t}</b></td>
      <td>${reason}</td>
    `;
    trendTable.appendChild(tr2);

    // Changes table
    const tr3 = document.createElement("tr");
    tr3.innerHTML = `
      <td>${row.year}</td>
      <td>${row.level}</td>
      <td>${row.changes || "—"}</td>
    `;
    changeTable.appendChild(tr3);

    if(cut > 0) prevCut = cut;
  });

  // Insights
  const insightArr = [];

  // Competition ratio avg
  const ratios = validYears
    .map(y=>competitionRatio(y.applicants,y.vacancy))
    .filter(x=>x>0);

  const avgRatio = ratios.length ? (ratios.reduce((a,b)=>a+b,0)/ratios.length).toFixed(1) : 0;

  insightArr.push(`Average competition: <b>${avgRatio ? avgRatio : "—"}</b> applicants per seat`);
  insightArr.push(`Safe score suggestion: <b>Cutoff + 8</b> (target planning)`);

  // Toughest & easiest years
  const sorted = [...validYears].sort((a,b)=>a.cutoff[cat]-b.cutoff[cat]);
  if(sorted.length >= 3){
    insightArr.push(` Toughest years (low cutoff): <b>${sorted.slice(0,3).map(x=>x.year).join(", ")}</b>`);
    insightArr.push(` Easiest years (high cutoff): <b>${sorted.slice(-3).reverse().map(x=>x.year).join(", ")}</b>`);
  }

  insightArr.push(`Rule: Vacancy कम + Paper आसान + Applicants ज्यादा = Cutoff ऊपर `);

  insightArr.forEach(x=>{
    const li = document.createElement("li");
    li.innerHTML = x;
    insightList.appendChild(li);
  });

  // Charts
  renderCharts(years, cat);

  // Scroll
  dashGrid.scrollIntoView({behavior:"smooth", block:"start"});
}

/* EVENT */
loadBtn.addEventListener("click", renderDashboard);
