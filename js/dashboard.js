const API_BASE = "https://api.nripendra.online";

// ✅ token agar tum firebase use kar rahe ho to yaha nahi milega
// isliye abhi sirf demo batches dikhayenge
// baad me backend integration karenge

async function loadDashboard() {
  const list = document.getElementById("batchList");

  try {
    // ✅ TEMP: demo batches
    const batches = [
      { title: "UP Police 2026 (Free)", type: "free" },
      { title: "SSC GD 2026 (Free)", type: "free" },
      { title: "Railway NTPC 2026 (Paid)", type: "paid" }
    ];

    // KPI
    document.getElementById("kpiBatches").innerText = batches.length;
    document.getElementById("kpiFree").innerText = batches.filter(b => b.type === "free").length;
    document.getElementById("kpiPaid").innerText = batches.filter(b => b.type === "paid").length;

    // Render list
    list.innerHTML = "";

    batches.forEach((b) => {
      const div = document.createElement("div");
      div.className = "batch-item";
      div.innerHTML = `
        <div>
          <div style="font-weight:800">${b.title}</div>
          <div style="opacity:.7;font-size:13px">${b.type.toUpperCase()} Batch</div>
        </div>
        <button class="open-btn">Open</button>
      `;
      list.appendChild(div);
    });

  } catch (err) {
    console.log(err);
    list.innerHTML = `<div style="color:red;font-weight:700;">Failed to load dashboard</div>`;
  }
}

loadDashboard();
