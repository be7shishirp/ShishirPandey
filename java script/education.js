// education.js - small interactions
// highlight education entries when visible
const edu = document.querySelector('#education');
if(edu){edu.addEventListener('mouseenter',()=>edu.animate([{transform:'scale(1)'},{transform:'scale(1.01)'},{transform:'scale(1)'}],{duration:480}))}
