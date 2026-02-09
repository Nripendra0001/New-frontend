const channelImages = {
  rojgar: "https://rojgarwithankit.com/wp-content/uploads/2024/01/unnamed.png",

  exampur: "https://images.yourstory.com/cs/images/companies/ExamPur-1624520180983.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff",

  adda247: "https://images.yourstory.com/cs/images/companies/Gurgaon-1596956923343.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff",

  studyiq: "https://yt3.ggpht.com/a/AATXAJwm--wBxEx8llUCEEqw9sfuVV2FJ1sBwSHrhg=s900-c-k-c0xffffffff-no-rj-mo",

  careerwill: "https://play-lh.googleusercontent.com/kEa-ftsB33wVBeS3EDFZHlDN3FMKTEJ8KgBDz39WspreIt7QD07Hy4SAbUPDWXl1Li96"
};

const prep = localStorage.getItem("selectedPrep");

const prepName = document.getElementById("prepName");
const channelGrid = document.getElementById("channelGrid");

/* ===============================
   PREP NAME SHOW
================================ */
if (!prep) {
  prepName.innerText = "❌ कोई preparation select नहीं है";
} else {
  prepName.innerText = "🎯 Selected: " + prep;
}

/* ===============================
   ALL CHANNELS (MASTER LIST)
================================ */
const channels = [
  /* ===== Govt Exam Channels ===== */
  { name: " Rojgar With Ankit", key: "rojgar" },
  { name: " Exampur", key: "exampur" },
  { name: " Khan Sir GS", key: "khansir" },
  { name: " Adda 247", key: "adda247" },
  { name: " Study IQ", key: "studyiq" },
  { name: " Unacademy", key: "unacademy" },
  { name: " Careerwill", key: "careerwill" },

  /* ===== School / Board Channels ===== */
  { name: " Physics Wallah (PW)", key: "pw" },
  { name: " Magnet Brains", key: "magnetbrains" },
  { name: " Vidyakul (UP Board)", key: "vidyakul" },

  /* ===== Extra School Channels ===== */
  { name: " LearnoHub", key: "learnhub" },
  { name: " Vedantu", key: "vedantu" },
  { name: " Khan Academy", key: "khanacademy" },
  { name: " Apni Kaksha", key: "apnikaksha" },
  { name: " CBSE Class Videos", key: "cbsevideos" },
  { name: " Byju's Learning", key: "byjus" }
];

/* ===============================
   PREP WISE CHANNEL FILTER
   (Keys MUST match preparations keys)
================================ */
const channelsByPrep = {

  /* ============================
     GOVERNMENT EXAMS
  ============================ */

  "UP Police": [
    "rojgar", "exampur", "khansir",
    "adda247", "studyiq", "careerwill"
  ],

  "SSC": [
    "adda247", "exampur", "rojgar",
    "studyiq", "unacademy", "careerwill"
  ],

  "Railway": [
    "exampur", "rojgar", "adda247",
    "studyiq", "careerwill"
  ],

  "Banking": [
    "adda247", "unacademy",
    "studyiq", "careerwill"
  ],

  "Teaching": [
    "studyiq", "unacademy",
    "careerwill", "adda247"
  ],

  "Defence": [
    "studyiq", "unacademy",
    "khansir", "adda247"
  ],

  "UPSC": [
    "studyiq", "unacademy",
    "khansir"
  ],

  "UPSSSC": [
    "rojgar", "exampur",
    "adda247", "studyiq",
    "careerwill"
  ],

  "Judiciary": [
    "unacademy", "studyiq"
  ],

  "JE": [
    "unacademy", "adda247", "studyiq"
  ],

  "Nursing": [
    "adda247", "unacademy", "studyiq"
  ],

  "TGT_PGT": [
    "unacademy", "studyiq",
    "adda247", "careerwill"
  ],

  "Fireman": [
    "rojgar", "exampur",
    "adda247", "studyiq"
  ],


  /* ============================
     SCHOOL (UP BOARD)
  ============================ */

  "Class 9 UP Board": [
    "pw", "magnetbrains", "vidyakul",
    "learnhub", "vedantu"
  ],

  "Class 10 UP Board": [
    "pw", "magnetbrains", "vidyakul",
    "learnhub", "vedantu"
  ],

  "Class 11 UP Board": [
    "pw", "unacademy", "magnetbrains",
    "vedantu", "khanacademy", "apnikaksha",
    "learnhub", "cbsevideos", "byjus"
  ],

  "Class 12 UP Board": [
    "pw", "unacademy", "magnetbrains",
    "vedantu", "khanacademy", "apnikaksha",
    "learnhub", "cbsevideos", "byjus"
  ]
};

/* ===============================
   FILTER CHANNELS
================================ */
const allowedKeys = channelsByPrep[prep] || [];
const filteredChannels = channels.filter(ch => allowedKeys.includes(ch.key));

/* ===============================
   RENDER UI
================================ */
channelGrid.innerHTML = "";

/* ---- if no prep selected ---- */
if (!prep) {
  channelGrid.innerHTML = `
    <div class="box">
      <h2> पहले preparation select करो</h2>
      <p>Preparation page पर जाकर exam चुनो</p>
    </div>
  `;
}

/* ---- if prep selected but no channels ---- */
else if (filteredChannels.length === 0) {
  channelGrid.innerHTML = `
    <div class="box">
      <h2> ${prep} के लिए अभी channel data नहीं है</h2>
      <p>जल्दी add कर दिया जाएगा</p>
    </div>
  `;
}

/* ---- render channels ---- */
filteredChannels.forEach((c) => {
  const div = document.createElement("div");
  div.className = "box";

  const img = channelImages[c.key] || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  div.innerHTML = `
    <div class="card-row">
      <img class="ch-logo" src="${img}" />
      <div class="ch-text">
        <h2>${c.name}</h2>
        <p>Tap to open course</p>
      </div>
      <div class="ch-arrow">›</div>
    </div>
  `;

  div.onclick = () => {
    localStorage.setItem("selectedChannel", c.key);
    window.location.href = "course.html";
  };

  channelGrid.appendChild(div);
});


