/* ==========================================
   SARKARINEXT – Exam Analytics Dashboard
   FINAL JS (PowerBI Style, Frontend Only)
========================================== */

/* ===============================
   DATA
=============================== */
/* Paste your EXAMS object here */
const EXAMS = EXAMS || {};

/* ===============================
   DOM
=============================== */
const examSelect = document.getElementById("examSelect");
const catSelect = document.getElementById("catSelect");
const loadBtn = document.getElementById("loadBtn");

/* KPI Grid + Dashboard */
const kpiGrid = document.getElementById("kpiGrid");
const dashGrid = document.getElementById("dashGrid");

/* KPI Values */
const kpiPapers = document.getElementById("kpiPapers");
const kpiVacancy = document.getElementById("kpiVacancy");
const kpiHigh = document.getElementById("kpiHigh");
const kpiLow = document.getElementById("kpiLow");
const kpiStability = document.getElementById("kpiStability");
const kpiSafe = document.getElementById("kpiSafe");

/* Tables */
const summaryTable = document.getElementById("summaryTable");
const trendTable = document.getElementById("trendTable");
const changeTable = document.getElementById("changeTable");

/* Insights */
const insightList = document.getElementById("insightList");

/* Charts */
let cutoffChartRef = null;
let vaChartRef = null;

/* ===============================
   INIT
=============================== */
function initExamDropdown() {
  if (!examSelect) return;

  examSelect.innerHTML = `<option value="">-- Select Exam --</option>`;

  Object.keys(EXAMS).forEach((examName) => {
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
function formatNum(n) {
  if (!n || n === 0) return "—";
  return n.toLocaleString("en-IN");
}

function safeScore(cut) {
  if (!cut || cut === 0) return 0;
  return Math.round(cut + 8);
}

function competitionRatio(applicants, vacancy) {
  if (!applicants || !vacancy) return 0;
  return applicants / vacancy;
}

function getStability(validCutoffs) {
  if (!validCutoffs || validCutoffs.length < 3) return "Medium";

  const diffs = [];
  for (let i = 1; i < validCutoffs.length; i++) {
    diffs.push(Math.abs(validCutoffs[i] - validCutoffs[i - 1]));
  }

  const avg = diffs.reduce((a, b) => a + b, 0) / diffs.length;

  if (avg <= 3) return "High";
  if (avg <= 6) return "Medium";
  return "Low";
}

function getTrend(curr, prev) {
  if (!curr || !prev) return { t: "—", cls: "" };

  if (curr > prev) {
    if (curr - prev >= 8) return { t: "Jump Up", cls: "warn" };
    return { t: "Up", cls: "up" };
  }

  if (curr < prev) {
    if (prev - curr >= 8) return { t: "Jump Down", cls: "warn" };
    return { t: "Down", cls: "down" };
  }

  return { t: "Same", cls: "same" };
}

function simpleReason(curr, prev, vacancy, level, applicants) {
  if (!curr || curr === 0) return "No exam or data missing";
  if (!prev || prev === 0) return "New or return year";

  if (curr > prev) {
    if (level === "EASY") return "Easy paper";
    if (vacancy && vacancy < 10000) return "Low vacancy";
    if (applicants && applicants > 3000000) return "High applicants";
    return "Higher competition";
  }

  if (curr < prev) {
    if (level === "TOUGH") return "Tough paper";
    if (vacancy && vacancy > 30000) return "High vacancy";
    return "Lower pressure year";
  }

  return "Stable year";
}

/* ===============================
   CHARTS
=============================== */
function renderCharts(years, cat) {
  if (!window.Chart) return;

  const labels = years.map((x) => x.year).reverse();

  const cutoffData = years.map((x) => x.cutoff?.[cat] || 0).reverse();
  const vacancyData = years.map((x) => x.vacancy || 0).reverse();
  const applicantData = years.map((x) => x.applicants || 0).reverse();

  const cutoffCanvas = document.getElementById("cutoffChart");
  const vaCanvas = document.getElementById("vaChart");

  if (!cutoffCanvas || !vaCanvas) return;

  if (cutoffChartRef) cutoffChartRef.destroy();
  if (vaChartRef) vaChartRef.destroy();

  cutoffChartRef = new Chart(cutoffCanvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: `Cutoff (${cat})`,
          data: cutoffData,
          tension: 0.35,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "#ffffff" } },
      },
      scales: {
        x: { ticks: { color: "rgba(255,255,255,.65)" } },
        y: { ticks: { color: "rgba(255,255,255,.65)" } },
      },
    },
  });

  vaChartRef = new Chart(vaCanvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label: "Vacancy", data: vacancyData },
        { label: "Applicants", data: applicantData },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "#ffffff" } },
      },
      scales: {
        x: { ticks: { color: "rgba(255,255,255,.65)" } },
        y: { ticks: { color: "rgba(255,255,255,.65)" } },
      },
    },
  });
}

/* ===============================
   MAIN RENDER
=============================== */
function renderDashboard() {
  const examName = examSelect?.value;
  const cat = catSelect?.value;

  if (!examName) {
    alert("Select an exam first.");
    return;
  }

  const years = EXAMS[examName]?.years || [];
  if (!years.length) {
    alert("No data found for this exam.");
    return;
  }

  /* Show grids */
  if (kpiGrid) kpiGrid.style.display = "grid";
  if (dashGrid) dashGrid.style.display = "grid";

  /* Valid cutoff years */
  const validYears = years.filter((y) => (y.cutoff?.[cat] || 0) > 0);

  /* KPI Calculations */
  const totalPapers = years.reduce((a, b) => a + (b.papers || 0), 0);
  const totalVacancy = years.reduce((a, b) => a + (b.vacancy || 0), 0);

  const cutoffs = validYears.map((y) => y.cutoff[cat]);
  const highest = cutoffs.length ? Math.max(...cutoffs) : 0;
  const lowest = cutoffs.length ? Math.min(...cutoffs) : 0;

  const safeAvg = cutoffs.length
    ? Math.round(cutoffs.reduce((a, b) => a + safeScore(b), 0) / cutoffs.length)
    : 0;

  const stability = getStability(cutoffs);

  /* KPI Render */
  if (kpiPapers) kpiPapers.textContent = totalPapers || "—";
  if (kpiVacancy) kpiVacancy.textContent = formatNum(totalVacancy);
  if (kpiHigh) kpiHigh.textContent = highest || "—";
  if (kpiLow) kpiLow.textContent = lowest || "—";
  if (kpiStability) kpiStability.textContent = stability || "—";
  if (kpiSafe) kpiSafe.textContent = safeAvg || "—";

  /* Clear Tables */
  if (summaryTable) summaryTable.innerHTML = "";
  if (trendTable) trendTable.innerHTML = "";
  if (changeTable) changeTable.innerHTML = "";
  if (insightList) insightList.innerHTML = "";

  /* Table Build */
  let prevCut = 0;

  years.forEach((row) => {
    const cut = row.cutoff?.[cat] || 0;

    /* Summary table */
    if (summaryTable) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.year}</td>
        <td>${formatNum(row.vacancy)}</td>
        <td>${formatNum(row.applicants)}</td>
        <td>${cut ? cut : "—"}</td>
      `;
      summaryTable.appendChild(tr);
    }

    /* Trend table */
    if (trendTable) {
      const trend = getTrend(cut, prevCut);
      const reason = simpleReason(
        cut,
        prevCut,
        row.vacancy,
        row.level,
        row.applicants
      );

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.year}</td>
        <td class="${trend.cls}"><b>${trend.t}</b></td>
        <td>${reason}</td>
      `;
      trendTable.appendChild(tr);
    }

    /* Changes table */
    if (changeTable) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.year}</td>
        <td>${row.level || "—"}</td>
        <td>${row.changes || "—"}</td>
      `;
      changeTable.appendChild(tr);
    }

    if (cut > 0) prevCut = cut;
  });

  /* Insights */
  const insightArr = [];

  const ratios = validYears
    .map((y) => competitionRatio(y.applicants, y.vacancy))
    .filter((x) => x > 0);

  const avgRatio = ratios.length
    ? (ratios.reduce((a, b) => a + b, 0) / ratios.length).toFixed(1)
    : 0;

  insightArr.push(`Average competition: <b>${avgRatio || "—"}</b> applicants per seat`);
  insightArr.push(`Safe score suggestion: <b>Cutoff + 8</b>`);

  if (validYears.length >= 3) {
    const sorted = [...validYears].sort(
      (a, b) => a.cutoff[cat] - b.cutoff[cat]
    );

    const toughYears = sorted.slice(0, 3).map((x) => x.year).join(", ");
    const easyYears = sorted.slice(-3).reverse().map((x) => x.year).join(", ");

    insightArr.push(`Lowest cutoff years: <b>${toughYears}</b>`);
    insightArr.push(`Highest cutoff years: <b>${easyYears}</b>`);
  }

  insightArr.push(`Rule: Low vacancy + easy paper + high applicants = cutoff increase`);

  if (insightList) {
    insightArr.forEach((txt) => {
      const li = document.createElement("li");
      li.innerHTML = txt;
      insightList.appendChild(li);
    });
  }

  /* Charts */
  renderCharts(years, cat);

  /* Scroll */
  if (dashGrid) {
    dashGrid.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ===============================
   EVENTS
=============================== */
if (loadBtn) {
  loadBtn.addEventListener("click", renderDashboard);
}

/* Auto load first exam if needed */
window.addEventListener("DOMContentLoaded", () => {
  if (examSelect && examSelect.options.length > 1) {
    examSelect.selectedIndex = 1;
  }
});
