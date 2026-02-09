const p = new URLSearchParams(window.location.search);

const title = p.get("title");
const date = p.get("date");
const link = p.get("link");

document.getElementById("title").innerText = title || "Not Available";
document.getElementById("date").innerText = date || "";
document.getElementById("officialLink").href = link || "#";
document.getElementById("pageTitle").innerText = title + " – SarkariNext";
