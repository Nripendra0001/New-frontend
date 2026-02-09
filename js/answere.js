const data = [
{title:"UP Police Constable Answer Key 2026", date:"Released: Jan 2026", link:"https://uppbpb.gov.in"},
{title:"UP Police SI Answer Key 2026", date:"Released: Jan 2026", link:"https://uppbpb.gov.in"},
{title:"UPSSSC Lekhpal Answer Key 2026", date:"Released: Feb 2026", link:"https://upsssc.gov.in"},
{title:"UPSSSC Junior Assistant Answer Key 2026", date:"Released: Feb 2026", link:"https://upsssc.gov.in"},
{title:"UP TGT PGT Answer Key 2026", date:"Released: Feb 2026", link:"https://upsecondaryeducationboard.up.gov.in"},
{title:"UP Primary Teacher Answer Key 2026", date:"Released: Mar 2026", link:"https://basiceducation.up.gov.in"},
{title:"UP NHM Staff Nurse Answer Key 2026", date:"Released: Feb 2026", link:"https://upnrhm.gov.in"},
{title:"UP Forest Guard Answer Key 2026", date:"Released: Feb 2026", link:"https://upforest.gov.in"},
{title:"UP Jail Warder Answer Key 2026", date:"Released: Mar 2026", link:"https://prisons.up.gov.in"},
{title:"UP Polytechnic Lecturer Answer Key 2026", date:"Released: Mar 2026", link:"https://bteup.ac.in"},

{title:"Bihar Police Constable Answer Key 2026", date:"Released: Jan 2026", link:"https://csbc.bih.nic.in"},
{title:"Bihar Police SI Answer Key 2026", date:"Released: Feb 2026", link:"https://bpssc.bih.nic.in"},
{title:"Bihar SSC Inter Level Answer Key 2026", date:"Released: Feb 2026", link:"https://bssc.bihar.gov.in"},
{title:"Bihar Teacher Answer Key 2026", date:"Released: Mar 2026", link:"https://education.bihar.gov.in"},
{title:"MP Police Constable Answer Key 2026", date:"Released: Jan 2026", link:"https://peb.mp.gov.in"},
{title:"MP Police SI Answer Key 2026", date:"Released: Feb 2026", link:"https://peb.mp.gov.in"},
{title:"MP Forest Guard Answer Key 2026", date:"Released: Mar 2026", link:"https://forest.mp.gov.in"},
{title:"Rajasthan Police Constable Answer Key 2026", date:"Released: Feb 2026", link:"https://police.rajasthan.gov.in"},
{title:"Rajasthan Patwari Answer Key 2026", date:"Released: Mar 2026", link:"https://rsmssb.rajasthan.gov.in"},
{title:"Haryana Police Answer Key 2026", date:"Released: Mar 2026", link:"https://hssc.gov.in"},

{title:"Delhi DSSSB Clerk Answer Key 2026", date:"Released: Feb 2026", link:"https://dsssb.delhi.gov.in"},
{title:"UKSSSC Group C Answer Key 2026", date:"Released: Mar 2026", link:"https://sssc.uk.gov.in"},
{title:"Uttarakhand Police Answer Key 2026", date:"Released: Apr 2026", link:"https://uttarakhandpolice.uk.gov.in"},
{title:"Chhattisgarh Vyapam Answer Key 2026", date:"Released: Apr 2026", link:"https://vyapam.cgstate.gov.in"},
{title:"CG Police Constable Answer Key 2026", date:"Released: Apr 2026", link:"https://cgpolice.gov.in"},
{title:"Jharkhand Police Answer Key 2026", date:"Released: Apr 2026", link:"https://jhpolice.gov.in"},
{title:"Himachal Police Answer Key 2026", date:"Released: Apr 2026", link:"https://citizenportal.hppolice.gov.in"},
{title:"Punjab Police Answer Key 2026", date:"Released: Apr 2026", link:"https://punjabpolice.gov.in"},
{title:"Gujarat Police Answer Key 2026", date:"Released: Apr 2026", link:"https://police.gujarat.gov.in"},
{title:"Maharashtra Police Answer Key 2026", date:"Released: Apr 2026", link:"https://mahapolice.gov.in"},

{title:"SSC GD Constable Answer Key 2026", date:"Released: Feb 2026", link:"https://ssc.nic.in"},
{title:"SSC CHSL Answer Key 2026", date:"Released: Mar 2026", link:"https://ssc.nic.in"},
{title:"SSC MTS Answer Key 2026", date:"Released: Apr 2026", link:"https://ssc.nic.in"},
{title:"Railway Group D Answer Key 2026", date:"Released: Apr 2026", link:"https://indianrailways.gov.in"},
{title:"Railway NTPC Answer Key 2026", date:"Released: Mar 2026", link:"https://indianrailways.gov.in"},
{title:"IBPS Clerk Answer Key 2026", date:"Released: Apr 2026", link:"https://ibps.in"},
{title:"SBI Clerk Answer Key 2026", date:"Released: Apr 2026", link:"https://sbi.co.in"},
{title:"Post Office GDS Answer Key 2026", date:"Released: May 2026", link:"https://indiapostgdsonline.gov.in"},
{title:"Indian Army Agniveer Answer Key 2026", date:"Released: Apr 2026", link:"https://joinindianarmy.nic.in"},
{title:"Indian Navy SSR Answer Key 2026", date:"Released: Apr 2026", link:"https://www.joinindiannavy.gov.in"},
{title:"Airforce Agniveer Answer Key 2026", date:"Released: Apr 2026", link:"https://agnipathvayu.cdac.in"},

{title:"UP Civil Court Answer Key 2026", date:"Released: Apr 2026", link:"https://districts.ecourts.gov.in"},
{title:"UP Roadways Conductor Answer Key 2026", date:"Released: Apr 2026", link:"https://upsrtc.com"},
{title:"UP Jal Nigam JE Answer Key 2026", date:"Released: Apr 2026", link:"https://upjn.org"},
{title:"UP Electricity JE Answer Key 2026", date:"Released: Apr 2026", link:"https://uppcl.org"},
{title:"UP Anganwadi Answer Key 2026", date:"Released: Mar 2026", link:"https://anganwadi.up.gov.in"},
{title:"UP Gram Panchayat Sahayak Answer Key 2026", date:"Released: Apr 2026", link:"https://panchayatiraj.up.nic.in"},
{title:"UP Cooperative Bank Clerk Answer Key 2026", date:"Released: May 2026", link:"https://upcb.org.in"}

];

const box = document.getElementById("answerList");
data.forEach(a=>{
 box.innerHTML += `
  <div class="card">
    <h3>${a.title}</h3>
    <p>Date: ${a.date}</p>
    <a href="${a.link}">Download</a>
  </div>`;
});

