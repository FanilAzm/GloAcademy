let contain = document.querySelector('.books'),
    item = document.querySelectorAll('.book');

contain.insertBefore(item[1], item[0]);
contain.insertBefore(item[4], item[2]);
contain.insertBefore(item[2], null);

document.body.style = 'background-image: url(./image/you-dont-know-js.jpg);'

let banner = document.querySelector('.adv');
banner.style = 'display: none';

let title = document.querySelectorAll('.book')[2].querySelector('h2');
title.textContent = 'Книга 3. this и Прототипы Объектов';

let book2 = document.querySelectorAll('.book')[1].querySelector('ul'),
    li = document.querySelectorAll('.book')[1].querySelectorAll('li');

book2.insertBefore(li[6], li[4]);
book2.insertBefore(li[8], li[4]);
book2.insertBefore(li[2], li[10]);

let book5 = document.querySelectorAll('.book')[4].querySelector('ul'),
    li5 = document.querySelectorAll('.book')[4].querySelectorAll('li');

book5.insertBefore(li5[9], li5[2]);
book5.insertBefore(li5[2], li5[5]);
book5.insertBefore(li5[5], li5[8]);

let book6 = document.querySelectorAll('.book')[5].querySelector('ul'),
    li6 = document.createElement('li'),
    li7 = document.querySelectorAll('.book')[5].querySelectorAll('li')[8];

li6.textContent = 'Глава 8: За пределами ES6';
li7.insertAdjacentElement('afterend', li6);



console.log(li6);