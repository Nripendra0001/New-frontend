
//   SARKARINEXT - MAIN JS

// THEME SYSTEM

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
// MENU SYSTEM 

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

// PAGE SYSTEM 

let historyStack = ["home"];

function openPage(id) {
  // Protected Routes Guard
  const protectedPages = ["dashboardPage", "profilePage", "savedJobsPage"];
  if (protectedPages.includes(id) && typeof SarkariAuth !== "undefined" && !SarkariAuth.isLoggedIn()) {
    SarkariAuth.requireAuth(id);
    return;
  }

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

// SEARCH SYSTEM 

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

// BOOKMARK SYSTEM 

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

// EXAM FINDER 

function findExams() {
  // Upgraded — delegated to eligibility-engine.js (SarkariNext Eligibility Intelligence)
  if (typeof runEligibilityEngine === 'function') {
    runEligibilityEngine();
  }
}


// JOB SYSTEM 

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

// MOCK TEST SYSTEM 

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



// Auth UI is handled by auth.js
function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}


document.getElementById("footerYear").innerText = new Date().getFullYear();


  // HOME – LOAD LATEST BLOGS

(async function loadHomeBlogs(){
  const grid = document.getElementById("homeBlogsGrid");
  if(!grid) return;

  const API_BASE = "https://api.nripendra.online";

  try{
    const res = await fetch(API_BASE + "/api/blogs");
    const data = await res.json();

    if(!data.ok) throw new Error("Blog API error");

    const blogs = (data.blogs || []).slice(0, 6);

    if(blogs.length === 0){
      grid.innerHTML = `<div class="home-blog-loading">No blogs published yet.</div>`;
      return;
    }

    grid.innerHTML = "";

    blogs.forEach((b) => {
      const card = document.createElement("div");
      card.className = "home-blog-card";

      card.innerHTML = `
        <div class="home-blog-top">
          <span class="home-blog-tag">${(b.category || "General")}</span>
          <span class="home-blog-views">👁️ ${Number(b.views || 0)}</span>
        </div>

        <h3>${b.title || ""}</h3>
        <p>${b.excerpt || ""}</p>

        <a href="/blog/post.html?slug=${encodeURIComponent(b.slug)}">Read Full →</a>
      `;

      grid.appendChild(card);
    });

  }catch(e){
    grid.innerHTML = `<div class="home-blog-loading"> Blogs load nahi ho rahe.</div>`;
  }
})();





// =========================================================
// MOBILE UI GLOBAL LOGIC
// =========================================================

// 1. Sidebar Toggle Logic
function toggleSidebar() {
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if(sidebar && overlay) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
    if(sidebar.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}

// Expose globally
window.toggleSidebar = toggleSidebar;

// 2. Swipe Down to Close (Bottom Sheets)
function initBottomSheetSwipe() {
  const modals = document.querySelectorAll('.roadmap-modal-content, .auth-card');
  
  modals.forEach(modal => {
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    
    modal.addEventListener('touchstart', (e) => {
      // Only initiate drag if user touches the top area (header) of the modal
      // This prevents interfering with scrolling the content inside
      const touchY = e.touches[0].clientY;
      const modalTop = modal.getBoundingClientRect().top;
      
      // If touch is within top 60px of the modal
      if (touchY - modalTop < 60) {
        startY = touchY;
        isDragging = true;
        modal.style.transition = 'none'; // remove animation for 1:1 drag
      }
    }, { passive: true });
    
    modal.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentY = e.touches[0].clientY;
      const diffY = currentY - startY;
      
      if (diffY > 0) { // Only allow dragging downwards
        modal.style.transform = 	ranslateY( + diffY + px);
      }
    }, { passive: false });
    
    modal.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      modal.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      
      const diffY = currentY - startY;
      if (diffY > 150) {
        // Dismiss
        if (modal.classList.contains('roadmap-modal-content')) {
          if(typeof closeNodeModal === 'function') closeNodeModal();
        } else if (modal.classList.contains('auth-card')) {
          if(typeof closeAuthModal === 'function') closeAuthModal();
        }
      } else {
        // Snap back
        modal.style.transform = 'translateY(0)';
      }
      
      startY = 0;
      currentY = 0;
    });
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initBottomSheetSwipe, 1000); // Give DOM time to render
});
