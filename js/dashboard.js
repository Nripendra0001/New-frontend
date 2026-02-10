requireAuth();

const hello = document.getElementById("hello");
const subline = document.getElementById("subline");

const kpiBatches = document.getElementById("kpiBatches");
const kpiFree = document.getElementById("kpiFree");
const kpiPaid = document.getElementById("kpiPaid");

const batchList = document.getElementById("batchList");

async function fetchMyBatches() {
  const token = getToken();

  const res = await fetch(`${API_BASE}/api/batches/my`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return await res.json();
}

function renderBatches(batches) {
  batchList.innerHTML = "";

  if (!batches || batches.length === 0) {
    batchList.innerHTML = `
      <div class="item">
        <div class="title">No batch found</div>
        <div class="meta">आपने अभी कोई batch नहीं लिया है।</div>
      </div>
    `;
    return;
  }

  batches.forEach((b) => {
    batchList.innerHTML += `
      <div class="item">
        <div class="title">${b.title || "Untitled Batch"}</div>
        <div class="meta">
          Type: <b>${b.isFree ? "FREE" : "PAID"}</b> •
          Access: <b>${b.accessStatus || "ACTIVE"}</b>
        </div>
      </div>
    `;
  });
}

(async () => {
  // profile
  const user = await fetchMyProfile();
  if (user) {
    hello.innerText = `Hello, ${user.name} 👋`;
    subline.innerText = `Email: ${user.email}`;
  } else {
    subline.innerText = "Profile load नहीं हो पाया";
  }

  // batches
  try {
    const data = await fetchMyBatches();

    const batches = data.batches || [];

    const total = batches.length;
    const free = batches.filter((x) => x.isFree).length;
    const paid = total - free;

    kpiBatches.innerText = total;
    kpiFree.innerText = free;
    kpiPaid.innerText = paid;

    renderBatches(batches);
  } catch (e) {
    batchList.innerHTML = `
      <div class="item">
        <div class="title">Server Error</div>
        <div class="meta">Backend response नहीं आया।</div>
      </div>
    `;
  }
})();
