'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import SliderCarousel from './modules/SliderCarousel';
import changeImg from './modules/changeImg';
import calcValidate from './modules/calcValidate';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

//Таймер
countTimer('12 december 2019');

//Меню
toggleMenu();

//Popup
togglePopup();

//Tabs
tabs();

//slider
slider();

//carousel
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




changeImg();


calcValidate();

//calc
calculator(100);

//send-ajax-form
sendForm();

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

// form1.init();
// form2.init();
// form3.init();