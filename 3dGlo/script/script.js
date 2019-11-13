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
            return {days, hours, minutes, seconds, timeRemaining};
        }

        function addZero(time){
            if(time.textContent.length !== 2){
                time.textContent = '0' + time.textContent.slice(0, 1);
            }
        }

        let idInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let timer = getTimeRemaining();
            
            timerDays.textContent = timer.days;
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            
            addZero(timerDays);
            addZero(timerHours);
            addZero(timerMinutes);
            addZero(timerSeconds);

            if(timer.timeRemaining < 0){
                timerDays.innerHTML = '00';
                timerHours.innerHTML = '00';
                timerMinutes.innerHTML = '00';
                timerSeconds.innerHTML = '00';
                clearInterval(idInterval);
            }
        }
    }

    countTimer('12 december 2019');





























});