'use strict';

function argument(arg){
    arg = prompt('Введите строку');
    arg.trim();
    if(!isNaN(arg)){
        return alert('Вы ввели не строку!');
    } else {
        if(arg.length > 30){
            arg = arg.slice(0, 30) + '...';
        }
        return arg;
    }
}

console.log(argument());