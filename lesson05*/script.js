'use strict';

let arr = ['43563', '32424', '23424', '54564', '83458', '23134', '44444'];

for(let i = 0; i < arr.length; i++){
    if(arr[i].charAt(0) == 4){
        console.log(arr[i]);
    }
    if(arr[i].charAt(0) == 2){
        console.log(arr[i]);
    }
}



let n = 100;

for(let i = 2; i < n; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0) break;
    }
    console.log(i + ' - Делители этого числа: ' + 1 + ' ' + i);
}