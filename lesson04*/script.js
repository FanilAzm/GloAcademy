'use strict';

function argument(event){
    event = prompt('Введите строку');
    event.trim();
    if(!isNaN(event)){
        return alert('Вы ввели не строку!');
    } else {
        if(event.length > 30){
            event = event.slice(0, 30) + '...';
        }
        return event;
    }
}

console.log(argument('строка'));