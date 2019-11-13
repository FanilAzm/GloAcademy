let date = new Date(),
    time = date.toLocaleTimeString(),
    dateNow = date.toLocaleDateString();

window.document.write(time + ' ' + dateNow);

let timerHours = document.getElementById('timer-hours'),
    timerMinutes = document.getElementById('timer-minutes'),
    timerSeconds = document.getElementById('timer-seconds'),
    day = document.getElementById('day'),
    month = document.getElementById('month'),
    year = document.getElementById('year');

function addZero(time){
    if(time.textContent.length !== 2){
        time.textContent = '0' + time.textContent.slice(0, 1);
    }
}

addZero(timerHours);
addZero(timerMinutes);
addZero(timerSeconds);
addZero(day);
addZero(month);
