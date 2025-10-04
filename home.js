// subtle entrance animations for panels on scroll
const panels = document.querySelectorAll('.panel');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.style.transform = 'translateY(0)';
    else e.target.style.transform = 'translateY(20px)';
  });
},{threshold:0.12});
panels.forEach(p=>{p.style.transition='transform 700ms ease, opacity .7s';p.style.transform='translateY(20px)';obs.observe(p)});

// 3D background subtle parallax on mouse move
const bg = document.getElementById('bg-3d');
window.addEventListener('mousemove', e=>{
  const x = (e.clientX/window.innerWidth - 0.5)*20;
  const y = (e.clientY/window.innerHeight - 0.5)*20;
  bg.style.transform = `translateZ(-200px) rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
});
