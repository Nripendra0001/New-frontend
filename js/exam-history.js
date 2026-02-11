/* ==========================================
   SARKARINEXT – Exam History (Frontend Only)
========================================== */

/* ✅ DATA (tu yaha aur exams add karega) */
const EXAMS = {
  "UP Police Constable": {
    years: [
      { year: 2024, papers: 1, vacancy: 60244, level: "MEDIUM", cutoff: { GENERAL: 72, OBC: 69, SC: 63, ST: 58 } },
      { year: 2023, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2022, papers: 1, vacancy: 26310, level: "EASY", cutoff: { GENERAL: 78, OBC: 74, SC: 67, ST: 61 } },
      { year: 2021, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2020, papers: 1, vacancy: 5000, level: "TOUGH", cutoff: { GENERAL: 64, OBC: 61, SC: 55, ST: 50 } },
      { year: 2019, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2018, papers: 1, vacancy: 41520, level: "MEDIUM", cutoff: { GENERAL: 70, OBC: 67, SC: 60, ST: 54 } },
      { year: 2017, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2016, papers: 1, vacancy: 35300, level: "MEDIUM", cutoff: { GENERAL: 69, OBC: 66, SC: 59, ST: 52 } },
      { year: 2015, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2014, papers: 1, vacancy: 4150, level: "TOUGH", cutoff: { GENERAL: 62, OBC: 59, SC: 52, ST: 46 } },
      { year: 2013, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2012, papers: 1, vacancy: 24000, level: "EASY", cutoff: { GENERAL: 76, OBC: 72, SC: 64, ST: 58 } },
      { year: 2011, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2010, papers: 1, vacancy: 5000, level: "MEDIUM", cutoff: { GENERAL: 67, OBC: 64, SC: 57, ST: 50 } },
      { year: 2009, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2008, papers: 1, vacancy: 6500, level: "MEDIUM", cutoff: { GENERAL: 66, OBC: 63, SC: 56, ST: 49 } },
      { year: 2007, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2006, papers: 1, vacancy: 4000, level: "TOUGH", cutoff: { GENERAL: 60, OBC: 57, SC: 50, ST: 44 } },
      { year: 2005, papers: 0, vacancy: 0, level: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    ]
  },

  "SSC GD": {
    years: [
      { year: 2024, papers: 1, vacancy: 26146, level: "MEDIUM", cutoff: { GENERAL: 74, OBC: 71, SC: 64, ST: 59 } },
      { year: 2023, papers: 1, vacancy: 50187, level: "EASY", cutoff: { GENERAL: 79, OBC: 76, SC: 68, ST: 62 } },
      { year: 2022, papers: 1, vacancy: 24369, level: "TOUGH", cutoff: { GENERAL: 66, OBC: 63, SC: 56, ST: 51 } },
      { year: 2021, papers: 1, vacancy: 25271, level: "MEDIUM", cutoff: { GENERAL: 71, OBC: 68, SC: 60, ST: 55 } },
      { year: 2020, papers: 1, vacancy: 22424, level: "MEDIUM", cutoff: { GENERAL: 70, OBC: 67, SC: 59, ST: 54 } },
    ]
  }
};

/* ===============================
   DOM
=============================== */
const examSelect = document.getElementById("examSelect");
const catSelect = document.getElementById("catSelect");
const loadBtn = document.getElementById("loadBtn");

const statsBox = document.getElementById("statsBox");
const tableCard = document.getElementById("tableCard");
const insightCard = document.getElementById("insightCard");

const stPapers = document.getElementById("stPapers");
const stVacancy = document.getElementById("stVacancy");
const stHigh = document.getElementById("stHigh");
const stLow = document.getElementById("stLow");

const tableBody = document.getElementById("tableBody");
const tableTitle = document.getElementById("tableTitle");
const insightList = document.getElementById("insightList");

/* ===============================
   INIT
=============================== */
function initExamDropdown(){
  Object.keys(EXAMS).forEach(examName=>{
    const opt = document.createElement("option");
    opt.value = examName;
    opt.textContent = examName;
    examSelect.appendChild(opt);
  });
}
initExamDropdown();

/* ===============================
   HELPERS
=============================== */
function formatNum(n){
  if(!n || n === 0) return "—";
  return n.toLocaleString("en-IN");
}

function getLevelBadge(level){
  if(level === "EASY") return `<span class="badge easy">EASY</span>`;
  if(level === "MEDIUM") return `<span class="badge medium">MEDIUM</span>`;
  if(level === "TOUGH") return `<span class="badge tough">TOUGH</span>`;
  return `<span class="badge">—</span>`;
}

function simpleReason(curr, prev, vacancy, level){
  if(curr === 0) return "Exam नहीं हुआ / Data नहीं";
  if(!prev || prev === 0) return "New/Return year";

  if(curr > prev){
    if(level === "EASY") return "Paper आसान था";
    if(vacancy < 10000) return "Vacancy कम थी";
    return "Competition ज्यादा / Paper आसान";
  }

  if(curr < prev){
    if(level === "TOUGH") return "Paper tough था";
    if(vacancy > 30000) return "Vacancy ज्यादा थी";
    return "Paper tough / Vacancy ज्यादा";
  }

  return "Stable year";
}

/* ===============================
   MAIN RENDER
=============================== */
function render(){
  const examName = examSelect.value;
  const cat = catSelect.value;

  if(!examName){
    alert("Bhai pehle exam select kar 😄");
    return;
  }

  const years = EXAMS[examName].years;

  tableTitle.textContent = `${examName} • Cutoff Trend (${cat})`;

  // Stats calc
  const validYears = years.filter(y => y.cutoff[cat] > 0);

  const totalPapers = years.reduce((a,b)=>a + (b.papers || 0), 0);
  const totalVacancy = years.reduce((a,b)=>a + (b.vacancy || 0), 0);

  const cutoffs = validYears.map(y => y.cutoff[cat]);
  const highest = cutoffs.length ? Math.max(...cutoffs) : 0;
  const lowest  = cutoffs.length ? Math.min(...cutoffs) : 0;

  stPapers.textContent = totalPapers || "—";
  stVacancy.textContent = formatNum(totalVacancy);
  stHigh.textContent = highest ? `${highest}` : "—";
  stLow.textContent = lowest ? `${lowest}` : "—";

  statsBox.style.display = "grid";
  tableCard.style.display = "block";
  insightCard.style.display = "block";

  // Table render
  tableBody.innerHTML = "";

  let prevCut = 0;

  years.forEach((row, i)=>{
    const cut = row.cutoff[cat] || 0;

    let trend = "same";
    let trendTxt = "—";

    if(cut === 0){
      trend = "same";
      trendTxt = "—";
    }else if(prevCut === 0){
      trend = "same";
      trendTxt = "—";
    }else if(cut > prevCut){
      trend = "up";
      trendTxt = "⬆ Up";
    }else if(cut < prevCut){
      trend = "down";
      trendTxt = "⬇ Down";
    }else{
      trend = "same";
      trendTxt = "— Same";
    }

    const reason = simpleReason(cut, prevCut, row.vacancy, row.level);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.year}</td>
      <td>${row.papers ? row.papers : "—"}</td>
      <td>${formatNum(row.vacancy)}</td>
      <td>${getLevelBadge(row.level)}</td>
      <td>${cut ? cut : "—"}</td>
      <td class="trend ${trend}">${trendTxt}</td>
      <td>${reason}</td>
    `;

    tableBody.appendChild(tr);

    if(cut > 0) prevCut = cut;
  });

  // Insights
  insightList.innerHTML = "";

  const insightArr = [];

  insightArr.push(`Total papers: <b>${totalPapers}</b> (20 years approx)`);
  insightArr.push(`Total vacancy: <b>${formatNum(totalVacancy)}</b>`);
  if(highest) insightArr.push(`Highest cutoff (${cat}): <b>${highest}</b>`);
  if(lowest) insightArr.push(`Lowest cutoff (${cat}): <b>${lowest}</b>`);

  // Trend count
  let upCount = 0, downCount = 0;
  for(let i=1;i<validYears.length;i++){
    const a = validYears[i-1].cutoff[cat];
    const b = validYears[i].cutoff[cat];
    if(b > a) upCount++;
    if(b < a) downCount++;
  }

  insightArr.push(`Cutoff Up years: <b>${upCount}</b>`);
  insightArr.push(`Cutoff Down years: <b>${downCount}</b>`);
  insightArr.push(`Rule: Vacancy कम + Paper आसान = Cutoff ऊपर 🔥`);

  insightArr.forEach(x=>{
    const li = document.createElement("li");
    li.innerHTML = x;
    insightList.appendChild(li);
  });

  // Smooth scroll to report
  tableCard.scrollIntoView({behavior:"smooth", block:"start"});
}

/* ===============================
   EVENTS
=============================== */
loadBtn.addEventListener("click", render);
