// script.js - interactions & live counters

// Lightbox gallery
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbClose = document.getElementById('lb-close');
Array.from(document.querySelectorAll('.gallery-item')).forEach(img=>{
  img.addEventListener('click', ()=>{
    lbImg.src = img.src; lightbox.classList.remove('hidden');
  })
});
lbClose.addEventListener('click', ()=> lightbox.classList.add('hidden'));
lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) lightbox.classList.add('hidden') });

// Projects detail popup
const projects = document.querySelectorAll('.project');
const pd = document.getElementById('project-detail');
const pdTitle = document.getElementById('pd-title');
const pdDesc = document.getElementById('pd-desc');
const pdClose = document.getElementById('close-detail');
projects.forEach(p=> p.addEventListener('click', (e)=>{
  e.preventDefault(); pdTitle.textContent = p.dataset.title; pdDesc.textContent = p.dataset.desc; pd.classList.remove('hidden');
}));
pdClose.addEventListener('click', ()=> pd.classList.add('hidden'));

// Live age counter from AD dob (2004-10-23) and show running time from BS start in label
(function liveAge(){
  // Use AD date time as source for accuracy. You provided: 2004-10-23 AD and BS equivalent 2061-07-07 11:17 pm
  const dobAD = new Date('2004-10-23T23:17:00'); // local time assumed; adjust if needed
  const ageEl = document.getElementById('age-live');

  function update(){
    const now = new Date();
    let diff = now - dobAD; if(diff<0) diff=0;
    const msInSec=1000, msInMin=msInSec*60, msInHour=msInMin*60, msInDay=msInHour*24;
    const years = Math.floor(diff / (msInDay*365.2425));
    const days = Math.floor((diff % (msInDay*365.2425)) / msInDay);
    const hours = Math.floor((diff % msInDay) / msInHour);
    const minutes = Math.floor((diff % msInHour) / msInMin);
    const seconds = Math.floor((diff % msInMin) / msInSec);
    ageEl.innerHTML = `Age since 2061-07-07 BS (2004-10-23 AD): <strong>${years}y ${days}d ${hours}h ${minutes}m ${seconds}s</strong>`;
    ageEl.classList.add('glow');
  }
  update(); setInterval(update, 1000);
})();

// Logo initial animation control (small extra: zoom out/in after first appear)
const logo = document.getElementById('logo');
logo.addEventListener('animationend', ()=>{
  // after entry animation, briefly zoom out/in to add life
  logo.animate([
    {transform:'scale(1)'}, {transform:'scale(1.06)'}, {transform:'scale(1)'}
  ], {duration:1400, easing:'ease-in-out'});
});

// Search bar quick filter (simple client-side filter over project tiles and gallery captions)
const search = document.getElementById('site-search');
search.addEventListener('input', ()=>{
  const q = search.value.trim().toLowerCase();
  document.querySelectorAll('.project').forEach(p=>{
    p.style.display = p.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
  document.querySelectorAll('.gallery-item').forEach(g=>{
    g.style.display = g.alt.toLowerCase().includes(q) ? '' : '';
  });
});

// Tiny accessibility: keyboard close lightbox & project detail
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape'){
    lightbox.classList.add('hidden'); pd.classList.add('hidden');
  }
});
