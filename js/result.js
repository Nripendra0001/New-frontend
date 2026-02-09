const data = [
 {title:"UP Police Constable Result 2026", date:"Declared: Jan 2026", link:"https://uppbpb.gov.in"},
{title:"UP Police SI Result 2026", date:"Declared: Jan 2026", link:"https://uppbpb.gov.in"},
{title:"UPSSSC Lekhpal Result 2026", date:"Declared: Feb 2026", link:"https://upsssc.gov.in"},
{title:"UPSSSC Junior Assistant Result 2026", date:"Declared: Feb 2026", link:"https://upsssc.gov.in"},
{title:"UP TGT PGT Result 2026", date:"Declared: Feb 2026", link:"https://upsecondaryeducationboard.up.gov.in"},
{title:"UP Primary Teacher Result 2026", date:"Declared: Mar 2026", link:"https://basiceducation.up.gov.in"},
{title:"UP NHM Staff Nurse Result 2026", date:"Declared: Feb 2026", link:"https://upnrhm.gov.in"},
{title:"UP Forest Guard Result 2026", date:"Declared: Feb 2026", link:"https://upforest.gov.in"},
{title:"UP Jail Warder Result 2026", date:"Declared: Mar 2026", link:"https://prisons.up.gov.in"},
{title:"UP Polytechnic Lecturer Result 2026", date:"Declared: Mar 2026", link:"https://bteup.ac.in"},

{title:"Bihar Police Constable Result 2026", date:"Declared: Jan 2026", link:"https://csbc.bih.nic.in"},
{title:"Bihar Police SI Result 2026", date:"Declared: Feb 2026", link:"https://bpssc.bih.nic.in"},
{title:"Bihar SSC Inter Level Result 2026", date:"Declared: Feb 2026", link:"https://bssc.bihar.gov.in"},
{title:"Bihar Teacher Result 2026", date:"Declared: Mar 2026", link:"https://education.bihar.gov.in"},
{title:"MP Police Constable Result 2026", date:"Declared: Jan 2026", link:"https://peb.mp.gov.in"},
{title:"MP Police SI Result 2026", date:"Declared: Feb 2026", link:"https://peb.mp.gov.in"},
{title:"MP Forest Guard Result 2026", date:"Declared: Mar 2026", link:"https://forest.mp.gov.in"},
{title:"Rajasthan Police Constable Result 2026", date:"Declared: Feb 2026", link:"https://police.rajasthan.gov.in"},
{title:"Rajasthan Patwari Result 2026", date:"Declared: Mar 2026", link:"https://rsmssb.rajasthan.gov.in"},
{title:"Haryana Police Result 2026", date:"Declared: Mar 2026", link:"https://hssc.gov.in"},

{title:"Delhi DSSSB Clerk Result 2026", date:"Declared: Feb 2026", link:"https://dsssb.delhi.gov.in"},
{title:"UKSSSC Group C Result 2026", date:"Declared: Mar 2026", link:"https://sssc.uk.gov.in"},
{title:"Uttarakhand Police Result 2026", date:"Declared: Apr 2026", link:"https://uttarakhandpolice.uk.gov.in"},
{title:"Chhattisgarh Vyapam Result 2026", date:"Declared: Apr 2026", link:"https://vyapam.cgstate.gov.in"},
{title:"CG Police Constable Result 2026", date:"Declared: Apr 2026", link:"https://cgpolice.gov.in"},
{title:"Jharkhand Police Result 2026", date:"Declared: Apr 2026", link:"https://jhpolice.gov.in"},
{title:"Himachal Police Result 2026", date:"Declared: Apr 2026", link:"https://citizenportal.hppolice.gov.in"},
{title:"Punjab Police Result 2026", date:"Declared: Apr 2026", link:"https://punjabpolice.gov.in"},
{title:"Gujarat Police Result 2026", date:"Declared: Apr 2026", link:"https://police.gujarat.gov.in"},
{title:"Maharashtra Police Result 2026", date:"Declared: Apr 2026", link:"https://mahapolice.gov.in"},

{title:"SSC GD Constable Result 2026", date:"Declared: Feb 2026", link:"https://ssc.nic.in"},
{title:"SSC CHSL Result 2026", date:"Declared: Mar 2026", link:"https://ssc.nic.in"},
{title:"SSC MTS Result 2026", date:"Declared: Apr 2026", link:"https://ssc.nic.in"},
{title:"Railway Group D Result 2026", date:"Declared: Apr 2026", link:"https://indianrailways.gov.in"},
{title:"Railway NTPC Result 2026", date:"Declared: Mar 2026", link:"https://indianrailways.gov.in"},
{title:"IBPS Clerk Result 2026", date:"Declared: Apr 2026", link:"https://ibps.in"},
{title:"SBI Clerk Result 2026", date:"Declared: Apr 2026", link:"https://sbi.co.in"},
{title:"Post Office GDS Result 2026", date:"Declared: May 2026", link:"https://indiapostgdsonline.gov.in"},
{title:"Indian Army Agniveer Result 2026", date:"Declared: Apr 2026", link:"https://joinindianarmy.nic.in"},
{title:"Indian Navy SSR Result 2026", date:"Declared: Apr 2026", link:"https://www.joinindiannavy.gov.in"},
{title:"Airforce Agniveer Result 2026", date:"Declared: Apr 2026", link:"https://agnipathvayu.cdac.in"},

{title:"UP Civil Court Result 2026", date:"Declared: Apr 2026", link:"https://districts.ecourts.gov.in"},
{title:"UP Roadways Conductor Result 2026", date:"Declared: Apr 2026", link:"https://upsrtc.com"},
{title:"UP Jal Nigam JE Result 2026", date:"Declared: Apr 2026", link:"https://upjn.org"},
{title:"UP Electricity JE Result 2026", date:"Declared: Apr 2026", link:"https://uppcl.org"},
{title:"UP Anganwadi Result 2026", date:"Declared: Mar 2026", link:"https://anganwadi.up.gov.in"},
{title:"UP Gram Panchayat Sahayak Result 2026", date:"Declared: Apr 2026", link:"https://panchayatiraj.up.nic.in"},
{title:"UP Cooperative Bank Clerk Result 2026", date:"Declared: May 2026", link:"https://upcb.org.in"}

];

const box = document.getElementById("resultList");
data.forEach(r=>{
 box.innerHTML += `
  <div class="card">
    <h3>${r.title}</h3>
    <p>Date: ${r.date}</p>
    <a href="${r.link}">View Result</a>
  </div>`;
});
