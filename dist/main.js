(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds"),m=()=>{let e=(()=>{let e=(new Date("15 february 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.days<10?"0"+e.days:e.days,n.textContent=e.hours<10?"0"+e.hours:e.hours,o.textContent=e.minutes<10?"0"+e.minutes:e.minutes,s.textContent=e.seconds<10?"0"+e.seconds:e.seconds,e.timeRemaining>0&&setTimeout(m,1e3)};m()})(),(()=>{const e=document.querySelector(" .header-modal");document.querySelectorAll(".menu_button"),console.log(e)})()})();