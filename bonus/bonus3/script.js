let userNum = 0,
    sum = 0;

while(userNum != null){
    userNum = prompt('Введите число');

    if(!isNaN(parseFloat(userNum)) && isFinite(userNum)){
        sum += +userNum;
    }
}

console.log(sum);
