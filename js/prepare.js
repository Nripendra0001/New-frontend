const preparations = [
  { name: "UP Police (Constable/SI)", key: "UP Police" },
  { name: "SSC (CGL/CHSL/GD/MTS)", key: "SSC" },
  { name: "Railway (NTPC/Group-D/ALP)", key: "Railway" },
  { name: "Banking (IBPS/SBI/RRB)", key: "Banking" },
  { name: "Teaching (CTET/UPTET/Super TET)", key: "Teaching" },
  { name: "Defence (NDA/CDS/Agniveer)", key: "Defence" },

  { name: "UPSC (IAS/IPS/PCS)", key: "UPSC" },
  { name: "UPSSSC (PET/VDO/Lekhpal)", key: "UPSSSC" },

  { name: "UP Judiciary (Civil Judge)", key: "Judiciary" },
  { name: "UP JE / SSC JE", key: "JE" },
  { name: "Nursing / NHM Exams", key: "Nursing" },
  { name: "TGT / PGT Exams", key: "TGT_PGT" },
  { name: "Fireman / Home Guard", key: "Fireman" },

  { name: "Class 9 UP Board", key: "Class 9 UP Board" },
  { name: "Class 10 UP Board", key: "Class 10 UP Board" },
  { name: "Class 11 UP Board", key: "Class 11 UP Board" },
  { name: "Class 12 UP Board", key: "Class 12 UP Board" }
];

const prepGrid = document.getElementById("prepGrid");

const prepImages = {

  /* Govt Exams */
  "UP Police": "https://cdn-icons-png.flaticon.com/512/929/929426.png",
  "SSC": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  "Railway": "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
  "Banking": "https://cdn-icons-png.flaticon.com/512/2830/2830289.png",
  "Teaching": "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  "Defence": "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",

  "UPSC": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  "UPSSSC": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

  "Judiciary": "https://cdn-icons-png.flaticon.com/512/2490/2490411.png",
  "JE": "https://cdn-icons-png.flaticon.com/512/3522/3522090.png",
  "Nursing": "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
  "TGT_PGT": "https://cdn-icons-png.flaticon.com/512/3135/3135800.png",
  "Fireman": "https://cdn-icons-png.flaticon.com/512/482/482138.png",

  /* UP Board */
  "Class 9 UP Board": "https://cdn-icons-png.flaticon.com/512/2436/2436874.png",
  "Class 10 UP Board": "https://cdn-icons-png.flaticon.com/512/2436/2436874.png",
  "Class 11 UP Board": "https://cdn-icons-png.flaticon.com/512/2436/2436874.png",
  "Class 12 UP Board": "https://cdn-icons-png.flaticon.com/512/2436/2436874.png"
};


prepGrid.innerHTML = "";

preparations.forEach((p) => {
  const div = document.createElement("div");
  div.className = "box";

  const img = prepImages[p.key] || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  div.innerHTML = `
    <div class="card-row">
      <img class="ch-logo" src="${img}" />
      <div class="ch-text">
        <h2>${p.name}</h2>
        <p>Tap to select</p>
      </div>
      <div class="ch-arrow">›</div>
    </div>
  `;

  div.onclick = () => {
    localStorage.setItem("selectedPrep", p.key);
    window.location.href = "channels.html";
  };

  prepGrid.appendChild(div);
});
