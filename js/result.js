const data = [

 // 🔥 NTA Exams (Direct login)
 {
  title: "UGC NET Result (NTA)",
  date: "Latest Available",
  link: "https://ugcnet.nta.nic.in/"
 },
 {
  title: "JEE Main Result",
  date: "Latest Available",
  link: "https://jeemain.nta.nic.in/"
 },
 {
  title: "NEET UG Result",
  date: "Latest Available",
  link: "https://neet.nta.nic.in/"
 },

 // 🔥 CTET
 {
  title: "CTET Result",
  date: "Latest Available",
  link: "https://ctet.nic.in/"
 },

 // 🔥 Banking (Login system)
 {
  title: "IBPS Clerk Result",
  date: "Latest Available",
  link: "https://www.ibps.in/"
 },
 {
  title: "IBPS PO Result",
  date: "Latest Available",
  link: "https://www.ibps.in/"
 },
 {
  title: "SBI Clerk Result",
  date: "Latest Available",
  link: "https://sbi.co.in/web/careers"
 },
 {
  title: "SBI PO Result",
  date: "Latest Available",
  link: "https://sbi.co.in/web/careers"
 },

 // 🔥 State boards (login based)
 {
  title: "UP Board Result",
  date: "Latest Available",
  link: "https://upresults.nic.in/"
 },
 {
  title: "CBSE Board Result",
  date: "Latest Available",
  link: "https://results.cbse.nic.in/"
 },
 {
  title: "Bihar Board Result",
  date: "Latest Available",
  link: "https://results.biharboardonline.com/"
 },

 // 🔥 Other
 {
  title: "India Post GDS Result",
  date: "Latest Available",
  link: "https://indiapostgdsonline.gov.in/"
 },
 {
  title: "DSSSB Result",
  date: "Latest Available",
  link: "https://dsssb.delhi.gov.in/"
 }

];

const box = document.getElementById("resultList");

box.innerHTML = "";

data.forEach(r => {
 box.innerHTML += `
  <div class="card">
    <h3>${r.title}</h3>
    <p>${r.date}</p>
    <a href="${r.link}" target="_blank">Check Result</a>
  </div>`;
});