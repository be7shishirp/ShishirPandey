// script.js — interactions, animations, age counter, gallery, projects
document.addEventListener('DOMContentLoaded', ()=>{
  // initial reveal
  document.querySelector('.home-section').classList.add('show');
  document.querySelectorAll('.card').forEach((c,i)=>setTimeout(()=>c.classList.add('show'), 220*i));

  // nav scrolling with floating-paper effect
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const t= document.querySelector(btn.dataset.target);
      if(t){
        // cute floating effect
        t.classList.add('fly-in');
        setTimeout(()=>t.classList.remove('fly-in'), 900);
        t.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })

  // logo zoom/glow toggle after intro
  const logo = document.getElementById('logo');
  setTimeout(()=>{
    logo.classList.add('glow');
    setInterval(()=>{logo.classList.toggle('glow')}, 2800);
  },1800);

  // age counter (live) — uses AD birth timestamp but shows BS as text
  const birth = new Date('2004-10-23T23:17:00'); // approximate: 11:17 pm (AD)
  const ageEl = document.getElementById('age-counter');
  function updateAge(){
    const now = new Date();
    let diff = now - birth; if(diff<0) diff=0;
    const ms = diff;
    const sec = Math.floor(ms/1000)%60;
    const min = Math.floor(ms/60000)%60;
    const hr = Math.floor(ms/3600000)%24;
    const days = Math.floor(ms/86400000);
    const years = Math.floor(days/365.2425);
    const remDays = days - Math.floor(years*365.2425);
    ageEl.textContent = `${years}y ${remDays}d ${hr}h ${min}m ${sec}s`;
  }
  updateAge(); setInterval(updateAge,1000);

  // project stream population — sample entries (user can replace)
  const projects = [
    {title:'Audit project — Tally', url:'#', desc:'1 year audit with Tally & Excel'},
    {title:'Website UI', url:'#', desc:'Single page aesthetic portfolio'},
    {title:'Data cleanup', url:'#', desc:'Excel automations & reports'}
  ];
  const stream = document.getElementById('project-stream');
  const inner = document.createElement('div'); inner.className='inner';
  // duplicate sequence to create seamless loop
  const makeProjectEl = (p)=>{const el=document.createElement('div');el.className='project';el.innerHTML=`<a href="${p.url}"><h4>${p.title}</h4><p>${p.desc}</p></a>`;return el}
  projects.forEach(p=>inner.appendChild(makeProjectEl(p)));
  projects.forEach(p=>inner.appendChild(makeProjectEl(p)));
  stream.appendChild(inner);

  // gallery — load all images from folder (user will replace with real uploads)
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryImgs = ['-1837825668.jpg','-124304408.jpg','-204272677.jpg','-742519375.jpg','-1848877252.jpg','1837825668.jpg','-359982719.jpg','-1151310230.jpg'];
  galleryImgs.forEach(src=>{
    const img=document.createElement('img');img.src=src;img.alt='gallery';
    img.addEventListener('click', ()=>openLightbox(src));
    galleryGrid.appendChild(img);
  });

  // lightbox
  const lb = document.getElementById('lightbox'); const lbImg = document.getElementById('lb-img');
  const lbClose = document.getElementById('lb-close');
  function openLightbox(src){lbImg.src=src;lb.style.display='flex';lb.setAttribute('aria-hidden','false')}
  function closeLightbox(){lb.style.display='none';lbImg.src='';lb.setAttribute('aria-hidden','true')}
  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e)=>{ if(e.target===lb) closeLightbox(); });

  // small search placeholder behavior
  document.querySelector('.search-wrap input').addEventListener('keydown', (e)=>{
    if(e.key==='Enter'){ alert('Search is a placeholder — replace with real search if desired.'); }
  });

  // clickable photos in biography
  document.querySelectorAll('.bio-photos img').forEach(i=>i.addEventListener('click', ()=>openLightbox(i.src)));

});
