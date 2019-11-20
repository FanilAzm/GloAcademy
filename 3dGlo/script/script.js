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

        tabContent[1].classList.add('d-none');
        tabContent[2].classList.add('d-none');

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

    //slider
    const slider = () => {
        const slider = document.querySelector('.portfolio-content'),
              slide = document.querySelectorAll('.portfolio-item'),
              btn = document.querySelectorAll('.portfolio-btn'),
              dots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval,
            dot;

        const addDots = () => {
            let dotsHTML;

            slide.forEach((item, index) => {
                
                if(index === 0){
                    dotsHTML = `<li class="dot dot-active"></li>`;
                } else {
                    dotsHTML +=  `<li class="dot"></li>`;
                }
            });

            dots.innerHTML = dotsHTML;
            dot = dots.querySelectorAll('li.dot');
        };

        addDots();

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        
        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')){
                currentSlide++;
            } else if (target.matches('#arrow-left')){
                currentSlide--;
            } else if(target.matches('.dot')){
                dot.forEach((elem, index) => {
                    if(elem === target){
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if(currentSlide < 0){
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            }
        });

        startSlide();
    };

    slider();

    //carousel
    class SliderCarousel{
        constructor({main, wrap, position = 0, prev, next, slidesToShow = 3, infinity = false, responsive = []}){

            if(!main || !wrap){
                console.warn('sliderCarousel: Необходимо 2 свойства "main" и "wrap"!');
            }
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.option = {
                position,
                infinity,
                slideWidth: Math.floor(100 / this.slidesToShow)
            };
            this.responsive = responsive;
        }

        init(){
            this.addClass();
            this.addStyle();
            if(this.prev && this.next){
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }
            if(this.responsive){
                this.responsiveInit();
            }

        }

        addClass(){
            this.main.classList.add('glo-slider');
            this.wrap.classList.add('glo-slider__wrap');
            for(let item of this.slides){
                item.classList.add('glo-slider__item');
            }
        }

        addStyle(){
            let style = document.getElementById('sliderCarousel');
            
            if(!style){
                style = document.createElement('style');
                style.id = 'sliderCarousel';
            }
            
            style.textContent = `
                .glo-slider {
                    overflow: hidden;
                    position: relative;
                }
                .glo-slider__wrap {
                    display: flex;
                    transition: transform 0.5s;
                    will-change: transform;
                }
                .glo-slider__item {
                    display: flex;
                    align-items: center;
                    flex: 0 0 ${this.option.slideWidth}%;
                    margin: auto 0 !important;
                }
            `;
            document.head.appendChild(style);
        }

        controlSlider(){
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }

        prevSlider(){
            if(this.option.infinity || this.option.position > 0){
                --this.option.position;
                if(this.option.position < 0){
                    this.option.position = this.slides.length - this.slidesToShow;
                }
                this.wrap.style.transform = `translateX(-${this.option.position * this.option.slideWidth}%)`;
            }
        }

        nextSlider(){
            if(this.option.infinity || this.option.position < this.slides.length - this.slidesToShow){
                ++this.option.position;
                if(this.option.position > this.slides.length - this.slidesToShow){
                    this.option.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.option.position * this.option.slideWidth}%)`;
            }
        }

        addArrow(){
            this.prev = document.createElement('button');
            this.next = document.createElement('button');

            this.prev.className = 'glo-slider__prev';
            this.next.className = 'glo-slider__next';

            this.main.appendChild(this.prev);
            this.main.appendChild(this.next);

            const style = document.createElement('style');
            style.textContent = `
                .glo-slider__prev,
                .glo-slider__next {
                    position: absolute;
                    top: 25px;
                    margin: 0 10px;
                    border: 15px solid transparent;
                    outline: none;
                }
                .glo-slider__prev {
                    border-right-color: #19b5fe;
                    left: -40px;
                }
                .glo-slider__next {
                    border-left-color: #19b5fe;
                    right: -40px;
                }

                .glo-slider__prev:hover,
                .glo-slider__next:hover,
                .glo-slider__prev:focus,
                .glo-slider__next:focus {
                    background-color: transparent;
                }
            `;
            document.head.appendChild(style);
        }

        responsiveInit(){
            const slideToShowDefault = this.slidesToShow;
            const allResponse = this.responsive.map(item => item.breakpoint);
            const maxResponse = Math.max(...allResponse);

            const checkResponse = () => {
                const windowWidth = document.documentElement.clientWidth;
                if(windowWidth < maxResponse){
                    for(let i = 0; i < allResponse.length; i++){
                        if(windowWidth < allResponse[i]){
                            this.slidesToShow = this.responsive[i].slideToShow;
                            this.option.slideWidth = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        }
                    }
                } else {
                    this.slidesToShow = slideToShowDefault;
                    this.option.slideWidth = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                }
            };
            checkResponse();
            
            window.addEventListener('resize', checkResponse);
        }
    }

    const carousel = new SliderCarousel({
        main: '.companies-wrapper',
        wrap: '.companies-hor',
        // prev: '#prev-slide',
        // next: '#next-slide',
        infinity: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                slideToShow: 3
            },
            {
                breakpoint: 768,
                slideToShow: 2
            },
            {
                breakpoint: 576,
                slideToShow: 1
            }
        ],
    });

    carousel.init();


    const changeImg = () => {
        const image = document.querySelectorAll('.command__photo');

        image.forEach((item) => {
            const oldImage = item.getAttribute('src');
            item.addEventListener('mouseenter', (event) => {
                event.target.src = event.target.dataset.img;
            });
    
            item.addEventListener('mouseleave', (event) => {
                event.target.src = oldImage;
            });
        });
        
    };

    changeImg();

    const calcValidate = () => {
        const calcBlock = document.querySelector('.calc-block');

        calcBlock.addEventListener('input', (event) => {
            let target = event.target;

            if(target.matches('input') || target.matches('.calc-count') || target.matches('.calc-day')){
                const calcInput = document.querySelector('.calc-item');

                calcInput.value = calcInput.value.replace(/\D/g, '');
            }
        });

        
    };

    calcValidate();

    const calculator = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
              calcType = document.querySelector('.calc-type'),
              calcSquare = document.querySelector('.calc-square'),
              calcCount = document.querySelector('.calc-count'),
              calcDay = document.querySelector('.calc-day'),
              totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;
                
            if(calcCount.value > 1){
                countValue += (calcCount.value - 1) / 10;
            }

            if(calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            } else if(calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            }

            if(typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            const numAnimate = () => {
                let number = 1,
                    result = total,
                    interval = setInterval(anim, 0.001);
                
                function anim(){
                    number++;
                    if(number <= result){
                        totalValue.textContent = number;
                    }
                    document.addEventListener('change', () => {
                        clearInterval(interval);
                        totalValue.textContent = parseInt(total);
                    });
                }
            };
            numAnimate();

            
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if(target.matches('select') || target.matches('input')){
                countSum();
            }
        });
    };

    calculator(100);

    // Валидация форм
    const form1 = new Validator({
        selector: '#form1',
        pattern: {
            // phone: /^\d+$/
        },
        method: {
            'form1-name': [
                ['notEmpty'],
                ['pattern', 'name']
            ],
            'form1-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ],
            'form1-email': [
                ['notEmpty'],
                ['pattern', 'email']
            ]
        }
    });

    const form2 = new Validator({
        selector: '#form2',
        pattern: {
            // phone: /^\d+$/
        },
        method: {
            'form2-name': [
                ['notEmpty'],
                ['pattern', 'name']
            ],
            'form2-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ],
            'form2-email': [
                ['notEmpty'],
                ['pattern', 'email']
            ],
            'form2-message': [
                ['notEmpty'],
                ['pattern', 'name']
            ]
        }
    });

    const form3 = new Validator({
        selector: '#form3',
        pattern: {
            // phone: /^\d+$/
        },
        method: {
            'form3-name': [
                ['notEmpty'],
                ['pattern', 'name']
            ],
            'form3-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ],
            'form3-email': [
                ['notEmpty'],
                ['pattern', 'email']
            ]
        }
    });
    
    form1.init();
    form2.init();
    form3.init();
























});