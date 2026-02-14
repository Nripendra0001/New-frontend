/* ===============================
   SarkariNext Blog Frontend (API)
================================ */

// ✅ CHANGE THIS (Render backend)
const API_BASE = "https://api.nripendra.online";


// Elements
const blogGrid = document.getElementById("blogGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

function safeHTML(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ===============================
   ✅ BLOG LIST PAGE
================================ */
async function loadBlogList() {
  if (!blogGrid) return;

  blogGrid.innerHTML = `<div class="empty">Loading blogs...</div>`;

  try {
    const res = await fetch(`${API_BASE}/api/blogs`);
    const data = await res.json();

    if (!data.ok) throw new Error(data.msg || "Failed");

    const blogs = data.blogs || [];

    // Fill categories
    if (categorySelect) {
      const cats = ["all", ...new Set(blogs.map((b) => b.category || "General"))];

      categorySelect.innerHTML = "";
      cats.forEach((cat) => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.innerText = cat === "all" ? "All Categories" : cat;
        categorySelect.appendChild(opt);
      });
    }

    function render() {
      const q = (searchInput?.value || "").toLowerCase().trim();
      const selected = categorySelect?.value || "all";

      const filtered = blogs.filter((b) => {
        const title = (b.title || "").toLowerCase();
        const excerpt = (b.excerpt || "").toLowerCase();
        const cat = b.category || "General";

        const matchesSearch = title.includes(q) || excerpt.includes(q);
        const matchesCategory = selected === "all" ? true : cat === selected;

        return matchesSearch && matchesCategory;
      });

      blogGrid.innerHTML = "";

      if (filtered.length === 0) {
        blogGrid.innerHTML = `<div class="empty">No blogs found 😕</div>`;
        return;
      }

      filtered.forEach((b) => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
          <div class="cardTop">
            <span class="tag">${safeHTML(b.category || "General")}</span>
            <span class="date">${safeHTML(b.date || "")}</span>
          </div>

          <h2 class="title">${safeHTML(b.title || "")}</h2>
          <p class="excerpt">${safeHTML(b.excerpt || "")}</p>

          <div class="cardBottom">
            <span class="viewsSmall">👁️ ${Number(b.views || 0)}</span>
            <a class="read" href="post.html?slug=${encodeURIComponent(b.slug)}">Read Full →</a>
          </div>
        `;

        blogGrid.appendChild(card);
      });
    }

    searchInput?.addEventListener("input", render);
    categorySelect?.addEventListener("change", render);

    render();
  } catch (e) {
    blogGrid.innerHTML = `<div class="empty">❌ Blog load error: ${safeHTML(e.message)}</div>`;
  }
}

/* ===============================
   ✅ SINGLE POST PAGE
================================ */
async function loadSinglePost() {
  const postEl = document.getElementById("post");
  if (!postEl) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug) {
    postEl.innerHTML = `<h1>Blog Not Found</h1><p>Slug missing.</p>`;
    return;
  }

  postEl.innerHTML = `<div class="empty">Loading post...</div>`;

  try {
    // 1) Get blog
    const res = await fetch(`${API_BASE}/api/blogs/${encodeURIComponent(slug)}`);
    const data = await res.json();

    if (!data.ok) throw new Error(data.msg || "Blog not found");

    const post = data.blog;

    // 2) SEO
    document.title = (post.title || "Blog") + " • SarkariNext";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", post.excerpt || "SarkariNext Blog");

    // 3) Render
    postEl.innerHTML = `
      <div class="postHead">
        <span class="tag">${safeHTML(post.category || "General")}</span>
        <span class="date">${safeHTML(post.date || "")}</span>
        <span class="views" id="viewsBox">👁️ Views: ...</span>
      </div>

      <h1>${safeHTML(post.title || "")}</h1>
      <p class="excerpt">${safeHTML(post.excerpt || "")}</p>

      <div class="content">
        ${post.content || ""}
      </div>
    `;

    // 4) View Count (anti-refresh spam)
    await countView(slug);

    // 5) More posts
    await loadMorePosts(slug);
  } catch (e) {
    postEl.innerHTML = `<h1>Blog Not Found</h1><p>${safeHTML(e.message)}</p>`;
  }
}

/* ===============================
   🔥 VIEW COUNTER
================================ */
async function countView(slug) {
  const viewsBox = document.getElementById("viewsBox");
  if (!viewsBox) return;

  try {
    // 30 min anti-refresh spam
    const key = "viewed_" + slug;
    const last = localStorage.getItem(key);

    if (last && Date.now() - Number(last) < 30 * 60 * 1000) {
      // Already viewed recently => show existing views by re-fetching blog
      const res2 = await fetch(`${API_BASE}/api/blogs/${encodeURIComponent(slug)}`);
      const data2 = await res2.json();
      if (data2.ok) {
        viewsBox.innerHTML = `👁️ Views: <b>${Number(data2.blog.views || 0)}</b>`;
      } else {
        viewsBox.innerHTML = `👁️ Views: <b>0</b>`;
      }
      return;
    }

    localStorage.setItem(key, Date.now());

    // Increment
    const res = await fetch(`${API_BASE}/api/blogs/${encodeURIComponent(slug)}/view`, {
      method: "POST",
    });

    const data = await res.json();

    if (data.ok) {
      viewsBox.innerHTML = `👁️ Views: <b>${Number(data.views || 0)}</b>`;
    } else {
      viewsBox.innerHTML = `👁️ Views: <b>0</b>`;
    }
  } catch (e) {
    viewsBox.innerHTML = `👁️ Views: <b>0</b>`;
  }
}

/* ===============================
   ✅ MORE POSTS
================================ */
async function loadMorePosts(currentSlug) {
  const moreGrid = document.getElementById("moreGrid");
  if (!moreGrid) return;

  try {
    const res = await fetch(`${API_BASE}/api/blogs`);
    const data = await res.json();
    if (!data.ok) return;

    const blogs = (data.blogs || []).filter((b) => b.slug !== currentSlug).slice(0, 6);

    moreGrid.innerHTML = "";

    blogs.forEach((b) => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <div class="cardTop">
          <span class="tag">${safeHTML(b.category || "General")}</span>
          <span class="date">${safeHTML(b.date || "")}</span>
        </div>
        <h2 class="title">${safeHTML(b.title || "")}</h2>
        <p class="excerpt">${safeHTML(b.excerpt || "")}</p>
        <div class="cardBottom">
          <span class="viewsSmall">👁️ ${Number(b.views || 0)}</span>
          <a class="read" href="post.html?slug=${encodeURIComponent(b.slug)}">Read Full →</a>
        </div>
      `;

      moreGrid.appendChild(card);
    });
  } catch (e) {
    // ignore
  }
}

/* ===============================
   INIT
================================ */
loadBlogList();
loadSinglePost();
