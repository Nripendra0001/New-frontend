const data = [
 {title:"UP Police Constable Admit Card 2026", date:"Released: Jan 2026", link:"https://uppbpb.gov.in"},
{title:"UP Police SI Admit Card 2026", date:"Released: Jan 2026", link:"https://uppbpb.gov.in"},
{title:"UPSSSC Lekhpal Admit Card 2026", date:"Released: Feb 2026", link:"https://upsssc.gov.in"},
{title:"UPSSSC Junior Assistant Admit Card 2026", date:"Released: Feb 2026", link:"https://upsssc.gov.in"},
{title:"UP TGT PGT Admit Card 2026", date:"Released: Feb 2026", link:"https://upsecondaryeducationboard.up.gov.in"},
{title:"UP Primary Teacher Admit Card 2026", date:"Released: Mar 2026", link:"https://basiceducation.up.gov.in"},
{title:"UP NHM Staff Nurse Admit Card 2026", date:"Released: Feb 2026", link:"https://upnrhm.gov.in"},
{title:"UP Forest Guard Admit Card 2026", date:"Released: Feb 2026", link:"https://upforest.gov.in"},
{title:"UP Jail Warder Admit Card 2026", date:"Released: Mar 2026", link:"https://prisons.up.gov.in"},
{title:"UP Polytechnic Lecturer Admit Card 2026", date:"Released: Mar 2026", link:"https://bteup.ac.in"},

{title:"Bihar Police Constable Admit Card 2026", date:"Released: Jan 2026", link:"https://csbc.bih.nic.in"},
{title:"Bihar Police SI Admit Card 2026", date:"Released: Feb 2026", link:"https://bpssc.bih.nic.in"},
{title:"Bihar SSC Inter Level Admit Card 2026", date:"Released: Feb 2026", link:"https://bssc.bihar.gov.in"},
{title:"Bihar Teacher Admit Card 2026", date:"Released: Mar 2026", link:"https://education.bihar.gov.in"},
{title:"MP Police Constable Admit Card 2026", date:"Released: Jan 2026", link:"https://peb.mp.gov.in"},
{title:"MP Police SI Admit Card 2026", date:"Released: Feb 2026", link:"https://peb.mp.gov.in"},
{title:"MP Forest Guard Admit Card 2026", date:"Released: Mar 2026", link:"https://forest.mp.gov.in"},
{title:"Rajasthan Police Constable Admit Card 2026", date:"Released: Feb 2026", link:"https://police.rajasthan.gov.in"},
{title:"Rajasthan Patwari Admit Card 2026", date:"Released: Mar 2026", link:"https://rsmssb.rajasthan.gov.in"},
{title:"Haryana Police Admit Card 2026", date:"Released: Mar 2026", link:"https://hssc.gov.in"},

{title:"Delhi DSSSB Clerk Admit Card 2026", date:"Released: Feb 2026", link:"https://dsssb.delhi.gov.in"},
{title:"UKSSSC Group C Admit Card 2026", date:"Released: Mar 2026", link:"https://sssc.uk.gov.in"},
{title:"Uttarakhand Police Admit Card 2026", date:"Released: Apr 2026", link:"https://uttarakhandpolice.uk.gov.in"},
{title:"Chhattisgarh Vyapam Admit Card 2026", date:"Released: Apr 2026", link:"https://vyapam.cgstate.gov.in"},
{title:"CG Police Constable Admit Card 2026", date:"Released: Apr 2026", link:"https://cgpolice.gov.in"},
{title:"Jharkhand Police Admit Card 2026", date:"Released: Apr 2026", link:"https://jhpolice.gov.in"},
{title:"Himachal Police Admit Card 2026", date:"Released: Apr 2026", link:"https://citizenportal.hppolice.gov.in"},
{title:"Punjab Police Admit Card 2026", date:"Released: Apr 2026", link:"https://punjabpolice.gov.in"},
{title:"Gujarat Police Admit Card 2026", date:"Released: Apr 2026", link:"https://police.gujarat.gov.in"},
{title:"Maharashtra Police Admit Card 2026", date:"Released: Apr 2026", link:"https://mahapolice.gov.in"},

{title:"SSC GD Constable Admit Card 2026", date:"Released: Feb 2026", link:"https://ssc.nic.in"},
{title:"SSC CHSL Admit Card 2026", date:"Released: Mar 2026", link:"https://ssc.nic.in"},
{title:"SSC MTS Admit Card 2026", date:"Released: Apr 2026", link:"https://ssc.nic.in"},
{title:"Railway Group D Admit Card 2026", date:"Released: Apr 2026", link:"https://indianrailways.gov.in"},
{title:"Railway NTPC Admit Card 2026", date:"Released: Mar 2026", link:"https://indianrailways.gov.in"},
{title:"IBPS Clerk Admit Card 2026", date:"Released: Apr 2026", link:"https://ibps.in"},
{title:"SBI Clerk Admit Card 2026", date:"Released: Apr 2026", link:"https://sbi.co.in"},
{title:"Post Office GDS Admit Card 2026", date:"Released: May 2026", link:"https://indiapostgdsonline.gov.in"},
{title:"Indian Army Agniveer Admit Card 2026", date:"Released: Apr 2026", link:"https://joinindianarmy.nic.in"},
{title:"Indian Navy SSR Admit Card 2026", date:"Released: Apr 2026", link:"https://www.joinindiannavy.gov.in"},
{title:"Airforce Agniveer Admit Card 2026", date:"Released: Apr 2026", link:"https://agnipathvayu.cdac.in"},

{title:"UP Civil Court Admit Card 2026", date:"Released: Apr 2026", link:"https://districts.ecourts.gov.in"},
{title:"UP Roadways Conductor Admit Card 2026", date:"Released: Apr 2026", link:"https://upsrtc.com"},
{title:"UP Jal Nigam JE Admit Card 2026", date:"Released: Apr 2026", link:"https://upjn.org"},
{title:"UP Electricity JE Admit Card 2026", date:"Released: Apr 2026", link:"https://uppcl.org"},
{title:"UP Anganwadi Admit Card 2026", date:"Released: Mar 2026", link:"https://anganwadi.up.gov.in"},
{title:"UP Gram Panchayat Sahayak Admit Card 2026", date:"Released: Apr 2026", link:"https://panchayatiraj.up.nic.in"},
{title:"UP Cooperative Bank Clerk Admit Card 2026", date:"Released: May 2026", link:"https://upcb.org.in"}

];

const box = document.getElementById("admitList");
data.forEach(a=>{
 box.innerHTML += `
  <div class="card">
    <h3>${a.title}</h3>
    <p>Date: ${a.date}</p>
    <a href="${a.link}">Download</a>
  </div>`;
});
