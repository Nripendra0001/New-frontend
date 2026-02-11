/* ==========================================
   SARKARINEXT – Exam History (Frontend Only)
   FINAL (Applicants + Changes + Ratio + Safe)
========================================== */

const EXAMS = {
  "UP Police Constable": {
    years: [
      { year: 2024, papers: 1, vacancy: 60244, applicants: 4800000, level: "MEDIUM", changes: "High competition year", cutoff: { GENERAL: 72, OBC: 69, SC: 63, ST: 58 } },
      { year: 2023, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2022, papers: 1, vacancy: 26310, applicants: 3200000, level: "EASY", changes: "Paper easy → cutoff spike", cutoff: { GENERAL: 78, OBC: 74, SC: 67, ST: 61 } },
      { year: 2021, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2020, papers: 1, vacancy: 5000, applicants: 2800000, level: "TOUGH", changes: "Vacancy low + paper tough", cutoff: { GENERAL: 64, OBC: 61, SC: 55, ST: 50 } },
      { year: 2019, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2018, papers: 1, vacancy: 41520, applicants: 2500000, level: "MEDIUM", changes: "Vacancy high year", cutoff: { GENERAL: 70, OBC: 67, SC: 60, ST: 54 } },
      { year: 2017, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2016, papers: 1, vacancy: 35300, applicants: 2300000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 69, OBC: 66, SC: 59, ST: 52 } },
      { year: 2015, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2014, papers: 1, vacancy: 4150, applicants: 1900000, level: "TOUGH", changes: "Low vacancy year", cutoff: { GENERAL: 62, OBC: 59, SC: 52, ST: 46 } },
      { year: 2013, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2012, papers: 1, vacancy: 24000, applicants: 1800000, level: "EASY", changes: "Easy paper year", cutoff: { GENERAL: 76, OBC: 72, SC: 64, ST: 58 } },
      { year: 2011, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2010, papers: 1, vacancy: 5000, applicants: 1500000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 67, OBC: 64, SC: 57, ST: 50 } },
      { year: 2009, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2008, papers: 1, vacancy: 6500, applicants: 1200000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 66, OBC: 63, SC: 56, ST: 49 } },
      { year: 2007, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
      { year: 2006, papers: 1, vacancy: 4000, applicants: 900000, level: "TOUGH", changes: "Paper tough year", cutoff: { GENERAL: 60, OBC: 57, SC: 50, ST: 44 } },
      { year: 2005, papers: 0, vacancy: 0, applicants: 0, level: "—", changes: "—", cutoff: { GENERAL: 0, OBC: 0, SC: 0, ST: 0 } },
    ]
  },

  "SSC GD": {
    years: [
      { year: 2024, papers: 1, vacancy: 26146, applicants: 6500000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 74, OBC: 71, SC: 64, ST: 59 } },
      { year: 2023, papers: 1, vacancy: 50187, applicants: 7200000, level: "EASY", changes: "Paper easy year", cutoff: { GENERAL: 79, OBC: 76, SC: 68, ST: 62 } },
      { year: 2022, papers: 1, vacancy: 24369, applicants: 6100000, level: "TOUGH", changes: "Tough paper year", cutoff: { GENERAL: 66, OBC: 63, SC: 56, ST: 51 } },
      { year: 2021, papers: 1, vacancy: 25271, applicants: 5900000, level: "MEDIUM", changes: "Stable year", cutoff: { GENERAL: 71, OBC: 68, SC: 60, ST: 55 } },
      { year: 2020, papers: 1, vacancy: 22424, applicants: 5600000, level: "MEDIUM", changes: "Normal year", cutoff: { GENERAL: 70, OBC: 67, SC: 59, ST: 54 } },
    ]
  }
};

/* DOM */
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

/* INIT */
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

function getLevelBadge(level){
  if(level === "EASY") return `<span class="badge easy">EASY</span>`;
  if(level === "MEDIUM") return `<span class="badge medium">MEDIUM</span>`;
  if(level === "TOUGH") return `<span class="badge tough">TOUGH</span>`;
  return `<span class="badge">—</span>`;
}

function competitionRatio(applicants, vacancy){
  if(!applicants || !vacancy) return "—";
  const ratio = applicants / vacancy;
  return `${ratio.toFixed(1)} / seat`;
}

function safeScore(cut){
  if(!cut || cut === 0) return "—";
  return Math.min(cut + 8, 100);
}

function simpleReason(curr, prev, vacancy, level, applicants){
  if(curr === 0) return "Exam नहीं हुआ / Data नहीं";
  if(!prev || prev === 0) return "New/Return year";

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

/* STABILITY SCORE */
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

/* MAIN RENDER */
function render(){
  const examName = examSelect.value;
  const cat = catSelect.value;

  if(!examName){
    alert("Bhai pehle exam select kar 😄");
    return;
  }

  const years = EXAMS[examName].years;

  tableTitle.textContent = `${examName} • Full Trend Report (${cat})`;

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
  let validCutList = [];

  years.forEach((row)=>{
    const cut = row.cutoff[cat] || 0;
    const ratioTxt = competitionRatio(row.applicants, row.vacancy);
    const safe = safeScore(cut);

    let trend = "same";
    let trendTxt = "—";

    let jump = false;

    if(cut === 0){
      trend = "same";
      trendTxt = "—";
    }else if(prevCut === 0){
      trend = "same";
      trendTxt = "—";
    }else if(cut > prevCut){
      trend = "up";
      trendTxt = "⬆ Up";
      if(cut - prevCut >= 8) jump = true;
    }else if(cut < prevCut){
      trend = "down";
      trendTxt = "⬇ Down";
      if(prevCut - cut >= 8) jump = true;
    }else{
      trend = "same";
      trendTxt = "— Same";
    }

    const reason = simpleReason(cut, prevCut, row.vacancy, row.level, row.applicants);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.year}</td>
      <td>${row.papers ? row.papers : "—"}</td>
      <td>${formatNum(row.vacancy)}</td>
      <td>${formatNum(row.applicants)}</td>
      <td>${ratioTxt}</td>
      <td>${getLevelBadge(row.level)}</td>
      <td>${cut ? cut : "—"}</td>
      <td>${safe}</td>
      <td class="trend ${jump ? "jump" : trend}">
        ${jump ? "⚠ Jump" : trendTxt}
      </td>
      <td>${reason}</td>
      <td>${row.changes ? row.changes : "—"}</td>
    `;

    tableBody.appendChild(tr);

    if(cut > 0){
      prevCut = cut;
      validCutList.push(cut);
    }
  });

  // Insights
  insightList.innerHTML = "";

  const insightArr = [];

  insightArr.push(`Total papers: <b>${totalPapers}</b>`);
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

  // Stability
  const stability = getStability(validCutList);
  insightArr.push(`Stability Score: <b>${stability}</b>`);

  // Toughest & easiest years (based on cutoff)
  const sorted = [...validYears].sort((a,b)=>a.cutoff[cat]-b.cutoff[cat]);
  const toughest = sorted.slice(0,3).map(x=>x.year).join(", ");
  const easiest = sorted.slice(-3).reverse().map(x=>x.year).join(", ");

  if(sorted.length >= 3){
    insightArr.push(`🔥 Toughest years (low cutoff): <b>${toughest}</b>`);
    insightArr.push(`😄 Easiest years (high cutoff): <b>${easiest}</b>`);
  }

  insightArr.push(`Rule: Vacancy कम + Paper आसान + Applicants ज्यादा = Cutoff ऊपर 🔥`);
  insightArr.push(`Safe Score = Cutoff + 8 (target planning के लिए)`);

  insightArr.forEach(x=>{
    const li = document.createElement("li");
    li.innerHTML = x;
    insightList.appendChild(li);
  });

  tableCard.scrollIntoView({behavior:"smooth", block:"start"});
}

/* EVENTS */
loadBtn.addEventListener("click", render);
