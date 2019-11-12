window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    function countTimer(deadline){
        let timerDays = document.getElementById('timer-days'),
            timerHours = document.getElementById('timer-hours'),
            timerMinutes = document.getElementById('timer-minutes'),
            timerSeconds = document.getElementById('timer-seconds');
        
        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor(timeRemaining / 60) % 60,
                hours = Math.floor(timeRemaining / 60 / 60) % 24,
                days = Math.floor(timeRemaining / 60 / 60 / 24);
                return {days, hours, minutes, seconds};
        }

        function updateClock(){
            let timer = getTimeRemaining();

            timerDays.textContent = timer.days;
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if(timer.timeRemaining > 0){
                setTimeout(updateClock, 1000);
            }
        }

        updateClock();
    }

    // countTimer('01 december 2019');
    setInterval(countTimer, 1000, '01 december 2019');





























});