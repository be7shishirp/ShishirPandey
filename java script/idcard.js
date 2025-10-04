const idcard = document.getElementById('idcard');
let rotating = false;
let zoomed = false;

document.getElementById('rotate-toggle').addEventListener('click', ()=>{
  rotating = !rotating;
  if(rotating){
    idcard.style.transition = 'transform 5s linear';
    idcard.style.transform = 'rotateY(360deg)';
    setTimeout(()=>{ idcard.style.transform='rotateY(0deg)'; if(rotating) idcard.style.transform='rotateY(360deg)'; }, 120);
  } else { idcard.style.transition='transform .9s ease'; idcard.style.transform='rotateY(0deg)'; }
});

document.getElementById('zoom-toggle').addEventListener('click', ()=>{
  zoomed = !zoomed;
  idcard.style.transform += zoomed? ' scale(1.18)':' scale(1)';
});

// Drag to rotate (360 interactive)
let isDown=false, startX=0, rotY=0;
idcard.addEventListener('pointerdown', e=>{isDown=true;startX=e.clientX;idcard.setPointerCapture(e.pointerId);});
idcard.addEventListener('pointerup', e=>{isDown=false;});
idcard.addEventListener('pointermove', e=>{if(!isDown) return; const dx = e.clientX - startX; rotY += dx*0.3; startX = e.clientX; idcard.style.transform = `rotateY(${rotY}deg)`});
