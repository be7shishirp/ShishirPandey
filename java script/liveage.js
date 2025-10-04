// Live age counter. Uses known AD datetime: 2004-10-23T23:17:00 (local time)
const birth = new Date(2004,9,23,23,17,0); // months are 0-indexed (9 = Oct)
const elYears = document.getElementById('years');
const elMonths = document.getElementById('months');
const elDays = document.getElementById('days');
const elHours = document.getElementById('hours');
const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');
const elTotalDays = document.getElementById('total-days');
const elTotalHours = document.getElementById('total-hours');

function updateAge(){
  const now = new Date();
  let diff = now - birth; // milliseconds
  const totalSeconds = Math.floor(diff/1000);
  const totalMinutes = Math.floor(totalSeconds/60);
  const totalHours = Math.floor(totalMinutes/60);
  const totalDays = Math.floor(totalHours/24);

  // compute Y M D H M S roughly
  const years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  let hours = now.getHours() - birth.getHours();
  let minutes = now.getMinutes() - birth.getMinutes();
  let seconds = now.getSeconds() - birth.getSeconds();
  if(seconds<0){seconds+=60;minutes-=1}
  if(minutes<0){minutes+=60;hours-=1}
  if(hours<0){hours+=24;days-=1}
  if(days<0){
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonth;
    months -= 1;
  }
  if(months<0){months+=12;years-=1}

  elYears.textContent = years;
  elMonths.textContent = months;
  elDays.textContent = days;
  elHours.textContent = String(hours).padStart(2,'0');
  elMinutes.textContent = String(minutes).padStart(2,'0');
  elSeconds.textContent = String(seconds).padStart(2,'0');
  elTotalDays.textContent = totalDays.toLocaleString();
  elTotalHours.textContent = totalHours.toLocaleString();
}

updateAge();
setInterval(updateAge, 1000);

// NOTE: This uses Gregorian calculation. If you need strict Nepali BS live conversion, integrate a BS converter library or API and replace calculations.
