/*************************************************
   SARKARINEXT - MAIN JS (FINAL CLEAN & STABLE)
*************************************************/

/* ========== THEME SYSTEM ========== */

function toggleDark() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};

/* ========== MENU SYSTEM ========== */

let menuOpen = false;

function toggleMenu() {
  const m = document.getElementById("sideMenu");
  const main = document.getElementById("mainContent");

  if (!m || !main) return;

  if (menuOpen) {
    m.style.left = "-260px";
    main.classList.remove("shift");
    menuOpen = false;
  } else {
    m.style.left = "0px";
    main.classList.add("shift");
    menuOpen = true;
  }
}

/* ========== PAGE SYSTEM ========== */

let historyStack = ["home"];

function openPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.add("hide"));

  const page = document.getElementById(id);
  if (page) page.classList.remove("hide");

  const backBtn = document.getElementById("backBtn");

  if (id !== "home") {
    if (backBtn) backBtn.style.display = "block";
    historyStack.push(id);
  } else {
    if (backBtn) backBtn.style.display = "none";
    historyStack = ["home"];
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  historyStack.pop();
  let last = historyStack[historyStack.length - 1] || "home";
  openPage(last);
}

document.addEventListener("DOMContentLoaded", () => {
  openPage("home");
});

/* ========== SEARCH SYSTEM ========== */

function smartSearch() {
  const box = document.getElementById("searchBox");
  if (!box) return;

  const v = box.value.toLowerCase();
  if (!v) return alert("Type something to search");

  if (v.includes("job")) openPage("jobs");
  else if (v.includes("result")) openPage("results");
  else if (v.includes("admit")) openPage("admit");
  else if (v.includes("answer")) openPage("answer");
  else if (v.includes("exam")) openPage("exams");
  else if (v.includes("note")) openPage("notes");
  else openPage("home");
}

/* ========== BOOKMARK SYSTEM ========== */

let saved = [];

function addExam(name) {
  if (saved.includes(name)) return;
  saved.push(name);
  renderBookmarks();
}

function renderBookmarks() {
  const box = document.getElementById("bookmarks");
  if (!box) return;

  if (saved.length === 0) {
    box.innerText = "No exams added yet.";
    return;
  }

  box.innerHTML = saved.map((e) => "✔ " + e).join("<br>");
}

/* ========== EXAM FINDER ========== */

function findExams() {
  const edu = document.getElementById("edu")?.value;
  const age = parseInt(document.getElementById("age")?.value);

  if (!edu || !age) {
    document.getElementById("examResult").innerHTML =
      "⚠ Please select qualification and enter age.";
    return;
  }

  let exams = [];

  if (edu === "8") {
    exams.push(
      "Peon / Office Attendant (State Govt)",
      "Municipal Helper / Safai Karmi",
      "Railway Trackman / Helper",
      "Home Guard",
      "Anganwadi Helper",
      "Chowkidar / Watchman",
      "Public sector daily wage jobs",
      "Cantonment board helper posts"
    );
  }

  if (edu === "10") {
    exams.push(
      "UP Police Constable",
      "SSC GD Constable (CAPF, BSF, CISF, CRPF, ITBP, SSB)",
      "Railway Group D",
      "Forest Guard / Van Rakshak",
      "Fireman / Home Guard",
      "Post Office GDS",
      "Army / Navy / Airforce Agniveer",
      "State Police Constable",
      "Paramilitary Tradesman",
      "Data Entry Operator (10th based)",
      "Driver recruitment (state/central)",
      "Prison warder",
      "Village chowkidar / gram rakshak"
    );
  }

  if (edu === "12") {
    exams.push(
      "SSC CHSL (LDC, DEO, PA, SA)",
      "SSC Stenographer",
      "Railway NTPC (Clerk, Typist, Guard)",
      "UP Police Constable",
      "Army Clerk / Tradesman",
      "Indian Navy SSR / AA",
      "Indian Coast Guard",
      "Court clerk",
      "State secretariat assistant",
      "Lower division clerk (LDC)",
      "Data Entry Operator",
      "Bank clerk (some state exams)",
      "Patwari (in some states)",
      "Village development assistant"
    );
  }

  if (edu === "grad") {
    exams.push(
      "SSC CGL (Inspector, Auditor, ASO, Income Tax, CBI etc.)",
      "UP Police Sub Inspector",
      "SSC CPO (Delhi Police SI, CAPF SI)",
      "Railway NTPC (Graduate posts)",
      "IBPS PO / Clerk",
      "SBI PO / Clerk",
      "RRB PO / Clerk",
      "State PCS / Lower PCS",
      "UP Lekhpal / VDO",
      "Teaching exams (CTET, UPTET, Super TET)",
      "Defence Officer entries (CDS, AFCAT)",
      "Assistant Section Officer",
      "Excise inspector",
      "Food inspector",
      "Lab assistant",
      "Statistical assistant",
      "Insurance exams (LIC AAO, ADO, AO)"
    );
  }

  if (edu === "pg") {
    exams.push(
      "Assistant Professor",
      "PGT Teacher",
      "Scientist (ISRO, DRDO, BARC)",
      "Senior research fellow",
      "State lecturer recruitment",
      "Medical officer / specialist posts",
      "University professor / assistant",
      "High level technical officer",
      "Planning officer",
      "Economist / statistician posts",
      "UPSC Civil Services",
      "State PSC officer services",
      "Senior auditor",
      "Law officer",
      "Public prosecutor",
      "Assistant director"
    );
  }

  if (age < 16) {
    exams = [" Most government jobs require minimum age 16–18+"];
  }

  if (age > 42) {
    exams.push(
      "⚠ Age relaxation based recruitments",
      "Contract based government projects",
      "Teaching & academic recruitments",
      "University & research posts"
    );
  }

  exams = [...new Set(exams)];

  let output = `
    <h3> Exams / Jobs you can target:</h3>
    <p style="font-weight:700;color:#2563eb">Based on your qualification & age</p>
    <ul style="line-height:1.7">
  `;

  exams.forEach((e) => {
    output += `<li> ${e}</li>`;
  });

  output += `</ul>
    <p style="margin-top:12px;font-weight:800;color:#065f46">
     SarkariNext Tip: Inme se 1–2 exam choose karo, unka roadmap follow karo, daily mock lagao.
    </p>
  `;

  document.getElementById("examResult").innerHTML = output;
}

/* ========== JOB SYSTEM ========== */

const jobs = [
  {
    title: "UP Police Constable Recruitment 2026",
    eligibility: "12th pass",
    age: "18 – 25",
    lastDate: "30 April 2026",
    selection: "Written → Physical → Medical",
    desc: "Uttar Pradesh Police recruitment.",
    link: "https://www.upprpb.in/",
  },
  {
    title: "SSC GD Constable Recruitment 2026",
    eligibility: "10th pass",
    age: "18 – 23",
    lastDate: "20 June 2026",
    selection: "CBT → PET → Medical",
    desc: "CAPF recruitment.",
    link: "https://ssc.nic.in/",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const jobList = document.getElementById("jobList");
  if (!jobList) return;

  jobList.innerHTML = "";

  jobs.forEach((job, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<a href="#">${job.title}</a><span>Last Date: ${job.lastDate}</span>`;
    div.onclick = () => openJob(index);
    jobList.appendChild(div);
  });
});

function openJob(i) {
  const job = jobs[i];
  openPage("jobDetail");

  document.getElementById("jobTitle").innerText = job.title;
  document.getElementById("jobEligibility").innerText = job.eligibility;
  document.getElementById("jobAge").innerText = job.age;
  document.getElementById("jobLastDate").innerText = job.lastDate;
  document.getElementById("jobSelection").innerText = job.selection;
  document.getElementById("jobDesc").innerText = job.desc;
  document.getElementById("applyLink").href = job.link;
}

/* ========== MOCK TEST SYSTEM ========== */

let totalAttempt = 0;
let correctCount = 0;

window.checkAns = function (btn, isCorrect) {
  const box = btn.closest(".q-box");
  if (!box || box.dataset.done === "yes") return;
  box.dataset.done = "yes";

  const all = box.querySelectorAll("button");
  totalAttempt++;

  if (isCorrect) {
    btn.classList.add("correct");
    correctCount++;
  } else {
    btn.classList.add("wrong");
    all.forEach((b) => {
      const fn = b.getAttribute("onclick");
      if (fn && fn.includes("true")) b.classList.add("correct");
    });
  }

  all.forEach((b) => (b.disabled = true));

  let attempted = document.querySelectorAll(
    ".q-box button.correct, .q-box button.wrong"
  ).length;

  const done = document.getElementById("mockDone");
  const fill = document.getElementById("mockProgressFill");

  if (done) done.innerText = attempted;
  if (fill) fill.style.width = attempted + "%";
};

window.finishTest = function () {
  alert(
    " Attempted: " +
      totalAttempt +
      "\n Correct: " +
      correctCount +
      "\n Wrong: " +
      (totalAttempt - correctCount)
  );

  const t = document.getElementById("testsDone");
  const c = document.getElementById("correctCount");
  const s = document.getElementById("streak");

  if (t) t.innerText = Number(t.innerText || 0) + 1;
  if (c) c.innerText = correctCount;
  if (s) s.innerText = Number(s.innerText || 0) + 1;

  totalAttempt = 0;
  correctCount = 0;
};

/* ========== FREE PLAYLIST SYSTEM ========== */

const freePlaylists = {
  upPolice: {
    maths: "https://www.youtube.com/results?search_query=up+police+maths+playlist+hindi",
    reasoning: "https://www.youtube.com/results?search_query=up+police+reasoning+playlist+hindi",
    gs: "https://www.youtube.com/results?search_query=up+police+gs+playlist+hindi",
    english: "https://www.youtube.com/results?search_query=up+police+english+playlist",
    computer: "https://www.youtube.com/results?search_query=up+police+computer+playlist",
    current: "https://www.youtube.com/results?search_query=up+police+current+affairs",
  },

  ssc: {
    maths: "https://www.youtube.com/results?search_query=ssc+maths+complete+playlist",
    reasoning: "https://www.youtube.com/results?search_query=ssc+reasoning+playlist",
    gs: "https://www.youtube.com/results?search_query=ssc+gs+playlist",
    english: "https://www.youtube.com/results?search_query=ssc+english+playlist",
    computer: "https://www.youtube.com/results?search_query=ssc+computer+playlist",
    current: "https://www.youtube.com/results?search_query=ssc+current+affairs",
  },

  railway: {
    maths: "https://www.youtube.com/results?search_query=railway+maths+playlist",
    reasoning: "https://www.youtube.com/results?search_query=railway+reasoning+playlist",
    gs: "https://www.youtube.com/results?search_query=railway+gs+playlist",
    english: "https://www.youtube.com/results?search_query=railway+english+playlist",
    computer: "https://www.youtube.com/results?search_query=railway+computer+playlist",
    current: "https://www.youtube.com/results?search_query=railway+current+affairs",
  },

  bank: {
    maths: "https://www.youtube.com/results?search_query=bank+exam+quant+playlist",
    reasoning: "https://www.youtube.com/results?search_query=bank+reasoning+playlist",
    gs: "https://www.youtube.com/results?search_query=bank+general+awareness+playlist",
    english: "https://www.youtube.com/results?search_query=bank+english+playlist",
    computer: "https://www.youtube.com/results?search_query=bank+computer+playlist",
    current: "https://www.youtube.com/results?search_query=bank+current+affairs",
  },

  teaching: {
    maths: "https://www.youtube.com/results?search_query=ctet+maths+playlist",
    reasoning: "https://www.youtube.com/results?search_query=ctet+reasoning+playlist",
    gs: "https://www.youtube.com/results?search_query=ctet+gs+playlist",
    english: "https://www.youtube.com/results?search_query=ctet+english+playlist",
    computer: "https://www.youtube.com/results?search_query=ctet+computer+playlist",
    current: "https://www.youtube.com/results?search_query=teaching+current+affairs",
  },

  defence: {
    maths: "https://www.youtube.com/results?search_query=nda+maths+playlist",
    reasoning: "https://www.youtube.com/results?search_query=nda+reasoning+playlist",
    gs: "https://www.youtube.com/results?search_query=nda+gs+playlist",
    english: "https://www.youtube.com/results?search_query=nda+english+playlist",
    computer: "https://www.youtube.com/results?search_query=defence+computer+playlist",
    current: "https://www.youtube.com/results?search_query=defence+current+affairs",
  },
};

function findPlaylist() {
  const exam = document.getElementById("plExam").value;
  const subject = document.getElementById("plSubject").value;
  const box = document.getElementById("playlistBox");

  if (!exam || !subject) {
    box.innerHTML = "⚠ Please select both exam and subject.";
    return;
  }

  const link = freePlaylists[exam][subject];

  box.innerHTML = `
    <h3> Free study source found</h3>
    <p>Best free YouTube playlists for your preparation:</p>
    <a href="${link}" target="_blank" style="display:inline-block;margin-top:10px;padding:10px 16px;background:#111;color:white;border-radius:8px;text-decoration:none">
      ▶️ Start Free Study
    </a>
  `;
}

/* ========== ROADMAP SYSTEM ========== */

function buildExamPath() {
  const exam = document.getElementById("pathExam").value;
  const months = document.getElementById("pathMonths").value;
  const time = document.getElementById("pathTime").value;
  const level = document.getElementById("pathLevel").value;
  const out = document.getElementById("pathOutput");

  if (!exam || !months || !time || !level) {
    out.innerHTML = "Please fill all details to generate your personal exam path.";
    return;
  }

  let phase1 = "Foundation & concept building";
  let phase2 = "Full syllabus coverage + practice";
  let phase3 = "Mock tests + speed + accuracy";
  let phase4 = "Revision, cutoff drills & exam mode";

  if (level === "repeater") {
    phase1 = "Quick revision of basics + error fixing";
  }

  out.innerHTML = `
    <h3> Target Exam: ${exam}</h3>
    <p> Time Left: <b>${months} months</b> |  Daily: <b>${time} hrs</b> |  Level: <b>${level}</b></p>
    <hr>

    <h3> Your Personal Exam Path</h3>

    <div class="roadmap-box">
      <b> Phase 1 (Month 1):</b><br>
      ${phase1}<br>
      • Strong basics<br>
      • One subject focus per day<br>
      • 1 weekly test
    </div>

    <div class="roadmap-box">
      <b> Phase 2 (Middle Months):</b><br>
      ${phase2}<br>
      • Full syllabus cycle<br>
      • Sectional tests<br>
      • Weak-area repair
    </div>

    <div class="roadmap-box">
      <b> Phase 3 (Last 40 days):</b><br>
      ${phase3}<br>
      • 3–4 mocks per week<br>
      • Analysis notebook<br>
      • Speed improvement
    </div>

    <div class="roadmap-box">
      <b> Phase 4 (Final 15 days):</b><br>
      ${phase4}<br>
      • Only revision<br>
      • Formula + notes<br>
      • Documents + physical check one time 
    </div>

    <div class="student-note">
      SarkariNext Advice: Ab tumhara kaam “kya padhu?” nahi hai.  
      Tumhara kaam hai sirf “aaj ka path follow karna”.
    </div>
  `;
}
// ===============================
// Home Topbar Auth Buttons (FINAL)
// ===============================
(function () {
  const authButtons = document.getElementById("authButtons");
  if (!authButtons) return;

  const token = localStorage.getItem("token");

  if (token) {
    authButtons.innerHTML = `
      <a class="primary" href="dashboard.html">Dashboard</a>
      <a href="my-batches.html">My Batches</a>
      <a href="#" id="logoutBtn">Logout</a>
    `;

    document.getElementById("logoutBtn").addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "index.html";
    });
  } else {
    authButtons.innerHTML = `
      <a href="login.html">Login</a>
      <a class="primary" href="signup.html">Signup</a>
    `;
  }
})();

