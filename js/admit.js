/* =========================================================
   SARKARINEXT – COMPLETE UPDATED ADMIT CARD LIST (45+ ITEMS)
========================================================= */

const data = [
  // --- UTTAR PRADESH (UP) UPDATES ---
  {title:"UP Police Constable Admit Card 2026", date:"Released: Feb 2026", link:"https://uppbpb.gov.in"},
  {title:"UP Police SI Admit Card 2026", date:"Released: Feb 2026", link:"https://uppbpb.gov.in"},
  {title:"UPSSSC Lekhpal Admit Card 2026", date:"Released: Feb 2026", link:"https://upsssc.gov.in"},
  {title:"UPSSSC Junior Assistant Admit Card 2026", date:"Released: Feb 2026", link:"https://upsssc.gov.in"},
  {title:"UP TGT PGT Exam Admit Card 2026", date:"Released: Feb 2026", link:"https://upsecondaryeducationboard.up.gov.in"},
  {title:"UP Primary Teacher Admit Card 2026", date:"Available: Mar 2026", link:"https://basiceducation.up.gov.in"},
  {title:"UP NHM Staff Nurse Admit Card 2026", date:"Released: Feb 2026", link:"https://upnrhm.gov.in"},
  {title:"UP Forest Guard Admit Card 2026", date:"Released: Feb 2026", link:"https://upforest.gov.in"},
  {title:"UP Jail Warder Admit Card 2026", date:"Available: Mar 2026", link:"https://prisons.up.gov.in"},
  {title:"UP Polytechnic Lecturer Admit Card 2026", date:"Available: Mar 2026", link:"https://bteup.ac.in"},

  // --- BIHAR & MP UPDATES ---
  {title:"Bihar Police Constable Admit Card 2026", date:"Released: Feb 2026", link:"https://csbc.bih.nic.in"},
  {title:"Bihar Police SI Admit Card 2026", date:"Released: Feb 2026", link:"https://bpssc.bih.nic.in"},
  {title:"Bihar SSC Inter Level Admit Card 2026", date:"Released: Feb 2026", link:"https://bssc.bihar.gov.in"},
  {title:"Bihar Teacher (TRE 4.0) Admit Card 2026", date:"Available: Mar 2026", link:"https://bpsc.bih.nic.in"},
  {title:"MP Police Constable Admit Card 2026", date:"Released: Feb 2026", link:"https://esb.mp.gov.in"},
  {title:"MP Police SI Admit Card 2026", date:"Available: Mar 2026", link:"https://esb.mp.gov.in"},
  {title:"MP Forest Guard Admit Card 2026", date:"Available: Mar 2026", link:"https://forest.mp.gov.in"},
  {title:"Rajasthan Police Constable Admit Card 2026", date:"Released: Feb 2026", link:"https://police.rajasthan.gov.in"},
  {title:"Rajasthan Patwari Admit Card 2026", date:"Available: Mar 2026", link:"https://rsmssb.rajasthan.gov.in"},
  {title:"Haryana Police HSSC Admit Card 2026", date:"Available: Mar 2026", link:"https://hssc.gov.in"},

  // --- OTHER STATES & DELHI ---
  {title:"Delhi DSSSB Clerk Admit Card 2026", date:"Released: Feb 2026", link:"https://dsssb.delhi.gov.in"},
  {title:"UKSSSC Group C Admit Card 2026", date:"Available: Mar 2026", link:"https://sssc.uk.gov.in"},
  {title:"Uttarakhand Police Admit Card 2026", date:"Available: Apr 2026", link:"https://uttarakhandpolice.uk.gov.in"},
  {title:"Chhattisgarh Vyapam Admit Card 2026", date:"Available: Apr 2026", link:"https://vyapam.cgstate.gov.in"},
  {title:"CG Police Constable Admit Card 2026", date:"Available: Apr 2026", link:"https://cgpolice.gov.in"},
  {title:"Jharkhand Police Admit Card 2026", date:"Available: Apr 2026", link:"https://jssc.nic.in"},
  {title:"Himachal Police Admit Card 2026", date:"Available: Apr 2026", link:"https://citizenportal.hppolice.gov.in"},
  {title:"Punjab Police Admit Card 2026", date:"Available: Apr 2026", link:"https://punjabpolice.gov.in"},
  {title:"Gujarat Police Admit Card 2026", date:"Available: Apr 2026", link:"https://police.gujarat.gov.in"},
  {title:"Maharashtra Police Admit Card 2026", date:"Available: Apr 2026", link:"https://mahapolice.gov.in"},

  // --- SSC, RAILWAY & BANKING ---
  {title:"SSC GD Constable Admit Card 2026", date:"Released: Feb 2026", link:"https://ssc.gov.in"},
  {title:"SSC CHSL Admit Card 2026", date:"Available: Mar 2026", link:"https://ssc.gov.in"},
  {title:"SSC MTS Admit Card 2026", date:"Available: Apr 2026", link:"https://ssc.gov.in"},
  {title:"Railway Group D Admit Card 2026", date:"Available: Apr 2026", link:"https://www.rrbcdg.gov.in"},
  {title:"Railway NTPC CBT Admit Card 2026", date:"Available: Mar 2026", link:"https://www.rrbcdg.gov.in"},
  {title:"IBPS Clerk Mains Admit Card 2026", date:"Available: Apr 2026", link:"https://ibps.in"},
  {title:"SBI Clerk Admit Card 2026", date:"Available: Apr 2026", link:"https://sbi.co.in"},
  {title:"Post Office GDS Selection List 2026", date:"Available: May 2026", link:"https://indiapostgdsonline.gov.in"},
  {title:"Indian Army Agniveer Admit Card 2026", date:"Available: Apr 2026", link:"https://joinindianarmy.nic.in"},
  {title:"Indian Navy SSR/MR Admit Card 2026", date:"Available: Apr 2026", link:"https://www.joinindiannavy.gov.in"},
  {title:"Airforce Agniveer Vayu Admit Card 2026", date:"Available: Apr 2026", link:"https://agnipathvayu.cdac.in"},

  // --- LOCAL & SPECIAL RECRUITMENT ---
  {title:"UP Civil Court Admit Card 2026", date:"Available: Apr 2026", link:"https://allahabadhighcourt.in"},
  {title:"UP Roadways Conductor Admit Card 2026", date:"Available: Apr 2026", link:"https://upsrtc.up.gov.in"},
  {title:"UP Jal Nigam JE Admit Card 2026", date:"Available: Apr 2026", link:"https://upjn.org"},
  {title:"UP Electricity JE Admit Card 2026", date:"Available: Apr 2026", link:"https://uppcl.org"},
  {title:"UP Anganwadi Merit List/Card 2026", date:"Available: Mar 2026", link:"https://upanganwadibharti.in"},
  {title:"UP Gram Panchayat Sahayak Card 2026", date:"Available: Apr 2026", link:"https://panchayatiraj.up.nic.in"},
  {title:"UP Cooperative Bank Clerk Admit Card 2026", date:"Available: May 2026", link:"https://upcb.org.in"}
];

const box = document.getElementById("admitList");

if(box) {
  box.innerHTML = ""; // पुरानी लिस्ट क्लियर करने के लिए
  data.forEach(a => {
    box.innerHTML += `
      <div class="card">
        <h3>${a.title}</h3>
        <p>Status: <strong>${a.date}</strong></p>
        <a href="${a.link}" target="_blank" class="download-btn">Download Admit Card</a>
      </div>`;
  });
}