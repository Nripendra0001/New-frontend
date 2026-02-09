/* ======================================
   Premium Mentor Page (Frontend Only)
   Booking + UI + LocalStorage
====================================== */

const mentors = [
  {
    id: "m1",
    name: "Rahul Verma",
    exam: "SSC",
    qualified: "SSC CGL (Tier-2 Qualified)",
    bio: "Math + Reasoning specialist. Strategy, mistakes, mock analysis.",
    rating: 4.8,
    price: 10
  },
  {
    id: "m2",
    name: "Anjali Singh",
    exam: "SSC",
    qualified: "SSC CHSL Qualified",
    bio: "English + GK. Short tricks and revision plan.",
    rating: 4.6,
    price: 10
  },
  {
    id: "m3",
    name: "Saurabh Yadav",
    exam: "UP Police",
    qualified: "UP Police Constable Qualified",
    bio: "UP Police exam pattern, GS + Reasoning focus.",
    rating: 4.7,
    price: 10
  },
  {
    id: "m4",
    name: "Pooja Mishra",
    exam: "Railway",
    qualified: "RRB NTPC Qualified",
    bio: "Railway preparation roadmap + mock approach.",
    rating: 4.5,
    price: 10
  },
  {
    id: "m5",
    name: "Amit Pandey",
    exam: "UPSSSC",
    qualified: "UPSSSC PET Qualified",
    bio: "PET syllabus + smart notes + time management.",
    rating: 4.4,
    price: 10
  },
  {
    id: "m6",
    name: "Vikash Chauhan",
    exam: "NDA",
    qualified: "NDA Written Qualified",
    bio: "Math + GAT strategy. Interview basics.",
    rating: 4.6,
    price: 10
  },
  {
    id: "m7",
    name: "Neha Sharma",
    exam: "NEET",
    qualified: "NEET Qualified",
    bio: "Biology + revision schedule. Doubt clearing.",
    rating: 4.7,
    price: 10
  }
];

const mentorGrid = document.getElementById("mentorGrid");
const searchInput = document.getElementById("searchInput");
const examFilter = document.getElementById("examFilter");
const sortFilter = document.getElementById("sortFilter");

const bookingModalBackdrop = document.getElementById("bookingModalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const payNowBtn = document.getElementById("payNowBtn");
const demoBookBtn = document.getElementById("demoBookBtn");

const modalMentorName = document.getElementById("modalMentorName");
const modalMentorMeta = document.getElementById("modalMentorMeta");
const modalMentorTitle = document.getElementById("modalMentorTitle");
const modalMentorExam = document.getElementById("modalMentorExam");
const modalAvatar = document.getElementById("modalAvatar");

const dateInput = document.getElementById("dateInput");
const timeSlotSelect = document.getElementById("timeSlotSelect");

const viewBookingsBtn = document.getElementById("viewBookingsBtn");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const closeDrawerBtn = document.getElementById("closeDrawerBtn");
const bookingList = document.getElementById("bookingList");
const clearBookingsBtn = document.getElementById("clearBookingsBtn");

let selectedMentor = null;

// ---------- Helpers ----------
function escapeHTML(str){
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  }[m]));
}

function getInitials(name){
  const parts = name.trim().split(" ");
  const a = parts[0]?.[0] || "M";
  const b = parts[1]?.[0] || "";
  return (a + b).toUpperCase();
}

function formatAMPM(time24){
  if(!time24) return "";
  const [h, m] = time24.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hh = ((h + 11) % 12) + 1;
  return `${String(hh).padStart(2,"0")}:${String(m).padStart(2,"0")} ${ampm}`;
}

function todayISO(){
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const dd = String(d.getDate()).padStart(2,"0");
  return `${yyyy}-${mm}-${dd}`;
}

function getBookings(){
  try{
    return JSON.parse(localStorage.getItem("nripendra_premium_bookings") || "[]");
  }catch{
    return [];
  }
}
function saveBookings(list){
  localStorage.setItem("nripendra_premium_bookings", JSON.stringify(list));
}

function toast(msg){
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);

  setTimeout(()=> el.classList.add("show"), 10);
  setTimeout(()=>{
    el.classList.remove("show");
    setTimeout(()=> el.remove(), 250);
  }, 2200);
}

// ---------- Render ----------
function renderMentors(){
  const q = searchInput.value.trim().toLowerCase();
  const exam = examFilter.value;

  let list = mentors.filter(m => {
    const matchQ =
      m.name.toLowerCase().includes(q) ||
      m.exam.toLowerCase().includes(q) ||
      m.qualified.toLowerCase().includes(q);

    const matchExam = (exam === "all") ? true : m.exam === exam;
    return matchQ && matchExam;
  });

  const sort = sortFilter.value;
  if(sort === "priceLow"){
    list.sort((a,b)=> a.price - b.price);
  }else if(sort === "ratingHigh"){
    list.sort((a,b)=> b.rating - a.rating);
  }else{
    list.sort((a,b)=> b.rating - a.rating);
  }

  mentorGrid.innerHTML = list.map(m => `
    <article class="card">
      <div class="row">
        <div class="left">
          <div class="avatar">${escapeHTML(getInitials(m.name))}</div>
          <div class="title">
            <h3>${escapeHTML(m.name)}</h3>
            <p><strong>${escapeHTML(m.exam)}</strong> • ${escapeHTML(m.qualified)}</p>
            <p>${escapeHTML(m.bio)}</p>
          </div>
        </div>

        <div class="badges">
          <span class="badge premium">Premium</span>
          <span class="badge">₹${m.price} / 3 min</span>
        </div>
      </div>

      <div class="meta">
        <div class="rating">
          <span class="star">★</span>
          <span>${m.rating.toFixed(1)}</span>
        </div>
        <div>Scheduled Call</div>
      </div>

      <div class="card-actions">
        <button class="btn" onclick="openBookingModal('${m.id}')">Book Call</button>
        <button class="btn ghost" onclick="quickView('${m.id}')">View</button>
      </div>
    </article>
  `).join("");
}

window.quickView = function(id){
  const m = mentors.find(x => x.id === id);
  if(!m) return;
  alert(
    `${m.name}\n\nExam: ${m.exam}\nQualified: ${m.qualified}\n\nAbout: ${m.bio}\n\nPrice: ₹${m.price} / 3 minutes`
  );
};

window.openBookingModal = function(id){
  selectedMentor = mentors.find(x => x.id === id);
  if(!selectedMentor) return;

  modalMentorName.textContent = `Book Call: ${selectedMentor.name}`;
  modalMentorMeta.textContent = `₹${selectedMentor.price} / 3 minutes • Scheduled`;
  modalMentorTitle.textContent = selectedMentor.name;
  modalMentorExam.textContent = `Qualified: ${selectedMentor.qualified}`;
  modalAvatar.textContent = getInitials(selectedMentor.name);

  dateInput.min = todayISO();
  dateInput.value = todayISO();
  timeSlotSelect.value = "";

  bookingModalBackdrop.classList.add("show");
};

// ---------- Modal close ----------
function closeModal(){
  bookingModalBackdrop.classList.remove("show");
}
closeModalBtn.addEventListener("click", closeModal);
bookingModalBackdrop.addEventListener("click", (e)=>{
  if(e.target === bookingModalBackdrop) closeModal();
});

// ---------- Booking ----------
function getSelectedCallType(){
  const checked = document.querySelector('input[name="callType"]:checked');
  return checked ? checked.value : "Audio";
}

function createBooking(paymentMode){
  if(!selectedMentor){
    toast("Mentor not selected.");
    return;
  }

  const date = dateInput.value;
  const time = timeSlotSelect.value;

  if(!date){
    toast("Please select date.");
    return;
  }
  if(!time){
    toast("Please select time slot.");
    return;
  }

  const callType = getSelectedCallType();

  const booking = {
    bookingId: "BK" + Date.now(),
    mentorId: selectedMentor.id,
    mentorName: selectedMentor.name,
    exam: selectedMentor.exam,
    qualified: selectedMentor.qualified,
    price: selectedMentor.price,
    durationMin: 3,
    callType,
    date,
    time,
    createdAt: new Date().toISOString(),
    payment: {
      status: paymentMode === "PAID" ? "PAID" : "DEMO",
      mode: paymentMode
    }
  };

  const list = getBookings();
  list.unshift(booking);
  saveBookings(list);

  closeModal();
  toast("Booking Confirmed ✅");
}

payNowBtn.addEventListener("click", ()=>{
  createBooking("PAID");
});

demoBookBtn.addEventListener("click", ()=>{
  createBooking("DEMO");
});

// ---------- Drawer ----------
function openDrawer(){
  drawerBackdrop.classList.add("show");
  renderBookings();
}
function closeDrawer(){
  drawerBackdrop.classList.remove("show");
}
viewBookingsBtn.addEventListener("click", openDrawer);
closeDrawerBtn.addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", (e)=>{
  if(e.target === drawerBackdrop) closeDrawer();
});

function renderBookings(){
  const list = getBookings();

  if(list.length === 0){
    bookingList.innerHTML = `
      <div class="booking">
        <h4>No bookings yet</h4>
        <p>Book a 3 minute premium call with a selected mentor.</p>
      </div>
    `;
    return;
  }

  bookingList.innerHTML = list.map(b => {
    const when = `${b.date} • ${formatAMPM(b.time)}`;
    const pay = b.payment?.status || "PENDING";

    return `
      <div class="booking">
        <h4>${escapeHTML(b.mentorName)} <span style="opacity:.7">(${escapeHTML(b.exam)})</span></h4>
        <p><strong>Time:</strong> ${escapeHTML(when)}</p>
        <p><strong>Call:</strong> ${escapeHTML(b.callType)} • <strong>Duration:</strong> 3 min</p>
        <p><strong>Payment:</strong> ${escapeHTML(pay)}</p>

        <div class="b-actions">
          <button class="btn small" onclick="joinCall('${b.bookingId}')">Join Call</button>

          <button class="btn ghost small" onclick="openMentorPage('${b.bookingId}')">
            Mentor Page
          </button>

          <button class="btn ghost small" onclick="copyMentorLink('${b.bookingId}')">
            Copy Mentor Link
          </button>

          <button class="btn ghost small" onclick="deleteBooking('${b.bookingId}')">Delete</button>
        </div>
      </div>
    `;
  }).join("");
}

window.deleteBooking = function(bookingId){
  const list = getBookings().filter(x => x.bookingId !== bookingId);
  saveBookings(list);
  renderBookings();
  toast("Deleted.");
};

clearBookingsBtn.addEventListener("click", ()=>{
  saveBookings([]);
  renderBookings();
  toast("All cleared.");
  closeDrawer();
});

/* ✅ Student Join Call */
window.joinCall = function(bookingId){
  window.location.href = "./call.html?bookingId=" + encodeURIComponent(bookingId) + "&role=student";
};

/* ✅ Open Mentor Page */
window.openMentorPage = function(bookingId){
  window.location.href = "./mentor.html?bookingId=" + encodeURIComponent(bookingId);
};

/* ✅ Copy Mentor Call Link */
window.copyMentorLink = async function(bookingId){
  const link =
    window.location.origin +
    "/call.html?bookingId=" +
    encodeURIComponent(bookingId) +
    "&role=mentor";

  try{
    await navigator.clipboard.writeText(link);
    toast("Mentor link copied ✅");
    alert("Mentor को ये link भेजो:\n\n" + link);
  }catch{
    alert("Copy failed ❌\n\nMentor link:\n" + link);
  }
};

// ---------- Events ----------
searchInput.addEventListener("input", renderMentors);
examFilter.addEventListener("change", renderMentors);
sortFilter.addEventListener("change", renderMentors);

// ---------- Toast style inject ----------
(function injectToastCSS(){
  const css = `
    .toast{
      position:fixed;
      left:50%;
      bottom:18px;
      transform: translateX(-50%) translateY(18px);
      background: rgba(15,17,26,.95);
      border:1px solid rgba(255,255,255,.10);
      color:#fff;
      padding:12px 14px;
      border-radius: 14px;
      box-shadow: 0 18px 60px rgba(0,0,0,.55);
      opacity:0;
      transition: all .2s ease;
      z-index: 9999;
      font-weight:900;
      font-size: 13px;
    }
    .toast.show{
      opacity:1;
      transform: translateX(-50%) translateY(0px);
    }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
})();

// Init
renderMentors();
