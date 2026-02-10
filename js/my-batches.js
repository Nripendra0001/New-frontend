requireAuth();

const list = document.getElementById("list");

async function fetchMyBatches() {
  const token = getToken();

  const res = await fetch(`${API_BASE}/api/batches/my`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return await res.json();
}

function render(batches) {
  list.innerHTML = "";

  if (!batches || batches.length === 0) {
    list.innerHTML = `
      <div class="item">
        <div class="title">No Batches</div>
        <div class="meta">आपने अभी कोई batch नहीं लिया है।</div>
      </div>
    `;
    return;
  }

  batches.forEach((b) => {
    list.innerHTML += `
      <div class="item">
        <div class="title">${b.title || "Untitled Batch"}</div>
        <div class="meta">
          Price: <b>${b.isFree ? "FREE" : "PAID"}</b> •
          Status: <b>${b.accessStatus || "ACTIVE"}</b>
        </div>
      </div>
    `;
  });
}

(async () => {
  try {
    const data = await fetchMyBatches();
    render(data.batches || []);
  } catch (e) {
    list.innerHTML = `
      <div class="item">
        <div class="title">Server Error</div>
        <div class="meta">Backend response नहीं आया।</div>
      </div>
    `;
  }
})();
