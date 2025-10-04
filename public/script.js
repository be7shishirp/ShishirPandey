// Global small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// social buttons: touch -> pop-up then open
document.querySelectorAll('.social').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.animate([{transform:'scale(1)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{duration:280});
    setTimeout(()=>{window.open(btn.dataset.link, '_blank')},220);
  });
});

// CV content data (mocked; replace with your full CV text)
const cvData = `
<p><strong>Shishir Pandey</strong></p>
<p>Professional summary: Energetic accounting student with 1+ year auditing experience, strong MS Office & Tally skills.</p>
<h4>Education</h4>
<ul>
<li>SEE — 2076 BS — 3.70 GPA</li>
<li>SLC — 2081 BS — 3.08 GPA</li>
<li>BBS — 2nd Year — ongoing</li>
</ul>
<h4>Experience</h4>
<ul>
<li>1+ year auditing</li>
<li>Internships — practical accounting tasks</li>
</ul>
`;

document.getElementById('cv-content').innerHTML = cvData;

// View CV -> open modal like view (simple new window with full CV view)
document.getElementById('view-cv').addEventListener('click', ()=>{
  const w = window.open('', '_blank', 'width=900,height=800');
  w.document.write(`<html><head><title>CV - Shishir Pandey</title><style>body{font-family:Arial;padding:20px}</style></head><body><h1>Shishir Pandey — CV</h1>${cvData}</body></html>`);
  w.document.close();
});
