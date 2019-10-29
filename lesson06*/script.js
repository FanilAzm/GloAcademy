'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    body = document.querySelector('body'),
    div,
    weekEnd = week[5];
    weekEnd.style.fontStyle = 'italic';
    console.log(weekEnd);

for(let i = 0; i < week.length; i++){
    div = document.createElement('div');
    body.appendChild(div);
    div.innerHTML += week[i];

    // console.log(div);
}