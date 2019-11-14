window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //Таймер
    const countTimer = (deadline) => {
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
    };

    countTimer('12 december 2019');

    //Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
                menu = document.querySelector('menu'),
                menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        
        btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('close-btn')){
                menu.classList.remove('active-menu');
            } else {
                target = target.closest('ul>li');
                if(target){
                    menuItems.forEach((item) => {
                        handlerMenu();
                    });
                }
            }
        });
    };

    toggleMenu();

    //Popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popupContent = document.querySelector('.popup-content'),
              clientWidth = document.documentElement.clientWidth;

        const popupAnimate = () => {
            if(clientWidth <= 768){
                return;
            } else {
                let start = Date.now();
                let timer = setInterval(function() {
                    let timePassed = Date.now() - start;
                    popupContent.style.top = timePassed / 25 + '%';
                    if (timePassed > 400) clearInterval(timer);
                }, 20);
            }
        };

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupAnimate();
                popup.style.display = 'block';
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if(!target){
                    popup.style.display = 'none';
                }
            }
        });
    };

    togglePopup();

    //Tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');
            
            if(target){
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
    };

    tabs();

    





























});