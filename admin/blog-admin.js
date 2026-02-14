const API_BASE = "https://api.nripendra.online";

let TOKEN = localStorage.getItem("mentor_token") || "";

// Elements
const loginBox = document.getElementById("loginBox");
const adminBox = document.getElementById("adminBox");
const loginMsg = document.getElementById("loginMsg");

const logoutBtn = document.getElementById("logoutBtn");
const loginBtn = document.getElementById("loginBtn");

const username = document.getElementById("username");
const password = document.getElementById("password");

const title = document.getElementById("title");
const slug = document.getElementById("slug");
const category = document.getElementById("category");
const date = document.getElementById("date");
const excerpt = document.getElementById("excerpt");
const content = document.getElementById("content");

const msg = document.getElementById("msg");

const createBtn = document.getElementById("createBtn");
const updateBtn = document.getElementById("updateBtn");
const clearBtn = document.getElementById("clearBtn");

const blogsList = document.getElementById("blogsList");

function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function setMessage(text, ok = true) {
  msg.innerText = text;
  msg.style.color = ok ? "#4ade80" : "#ff5a5a";
}

function showLogin() {
  loginBox.classList.remove("hidden");
  adminBox.classList.add("hidden");
}

function showAdmin() {
  loginBox.classList.add("hidden");
  adminBox.classList.remove("hidden");
}

title.addEventListener("input", () => {
  if (!slug.value.trim()) {
    slug.value = slugify(title.value);
  }
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("mentor_token");
  TOKEN = "";
  showLogin();
});

loginBtn.addEventListener("click", async () => {
  loginMsg.innerText = "Logging in...";

  try {
    const res = await fetch(`${API_BASE}/api/chat/mentor-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username.value.trim(),
        password: password.value.trim(),
      }),
    });

    const data = await res.json();

    if (!data.ok) {
      loginMsg.innerText = "❌ " + (data.msg || "Login failed");
      return;
    }

    TOKEN = data.token;
    localStorage.setItem("mentor_token", TOKEN);

    loginMsg.innerText = "✅ Login Success";
    showAdmin();
    loadBlogs();
  } catch (e) {
    loginMsg.innerText = "❌ Server error";
  }
});

async function loadBlogs() {
  blogsList.innerHTML = "Loading...";

  try {
    const res = await fetch(`${API_BASE}/api/blogs`);
    const data = await res.json();

    if (!data.ok) {
      blogsList.innerHTML = "❌ Failed to load blogs";
      return;
    }

    const blogs = data.blogs || [];

    if (blogs.length === 0) {
      blogsList.innerHTML = "No blogs yet.";
      return;
    }

    blogsList.innerHTML = "";

    blogs.forEach((b) => {
      const div = document.createElement("div");
      div.className = "item";

      div.innerHTML = `
        <div>
          <b>${b.title}</b>
          <div class="mini">
            slug: ${b.slug} • views: ${b.views || 0} • ${b.category || "General"}
          </div>
        </div>

        <div class="actions">
          <button class="small" data-edit="${b.slug}">Edit</button>
          <button class="small danger" data-del="${b.slug}">Delete</button>
        </div>
      `;

      blogsList.appendChild(div);
    });

    // Edit
    document.querySelectorAll("[data-edit]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const s = btn.getAttribute("data-edit");
        const res = await fetch(`${API_BASE}/api/blogs/${s}`);
        const data = await res.json();

        if (data.ok) {
          const b = data.blog;
          title.value = b.title || "";
          slug.value = b.slug || "";
          category.value = b.category || "";
          date.value = b.date || "";
          excerpt.value = b.excerpt || "";
          content.value = b.content || "";
          setMessage("Loaded for edit ✅");
        }
      });
    });

    // Delete
    document.querySelectorAll("[data-del]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const s = btn.getAttribute("data-del");
        if (!confirm("Delete this blog?")) return;

        const res = await fetch(`${API_BASE}/api/blogs/${s}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${TOKEN}` },
        });

        const data = await res.json();

        if (data.ok) {
          setMessage("Blog deleted ✅");
          loadBlogs();
        } else {
          setMessage(data.msg || "Delete failed", false);
        }
      });
    });
  } catch (e) {
    blogsList.innerHTML = "❌ Error";
  }
}

createBtn.addEventListener("click", async () => {
  setMessage("Publishing...");

  try {
    const payload = {
      slug: slug.value.trim(),
      title: title.value.trim(),
      excerpt: excerpt.value.trim(),
      category: category.value.trim() || "General",
      date: date.value.trim() || new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      content: content.value.trim(),
    };

    const res = await fetch(`${API_BASE}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.ok) {
      setMessage("✅ Blog published!");
      loadBlogs();
    } else {
      setMessage(data.msg || "Publish failed", false);
    }
  } catch (e) {
    setMessage("Server error", false);
  }
});

updateBtn.addEventListener("click", async () => {
  setMessage("Updating...");

  try {
    const s = slug.value.trim();
    if (!s) return setMessage("Slug missing", false);

    const payload = {
      title: title.value.trim(),
      excerpt: excerpt.value.trim(),
      category: category.value.trim() || "General",
      date: date.value.trim(),
      content: content.value.trim(),
    };

    const res = await fetch(`${API_BASE}/api/blogs/${s}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.ok) {
      setMessage("✅ Blog updated!");
      loadBlogs();
    } else {
      setMessage(data.msg || "Update failed", false);
    }
  } catch (e) {
    setMessage("Server error", false);
  }
});

clearBtn.addEventListener("click", () => {
  title.value = "";
  slug.value = "";
  category.value = "";
  date.value = "";
  excerpt.value = "";
  content.value = "";
  setMessage("Cleared");
});

// Auto login if token exists
if (TOKEN) {
  showAdmin();
  loadBlogs();
} else {
  showLogin();
}
