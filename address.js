// address.js - attaches map links (already simple anchors in markup). Add enhanced map popups if desired.
// Progressive enhancement: open maps in new window with proper query
Array.from(document.querySelectorAll('.map-btn')).forEach(a=>{
  a.addEventListener('click', ()=>{
    a.animate([{transform:'translateY(0)'},{transform:'translateY(-6px)'},{transform:'translateY(0)'}],{duration:280});
  });
});
