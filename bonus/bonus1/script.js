let num1,
    num2;

let checkNum = function(num){
    num = +prompt('Введите число');
    while(isNaN(num) || num === '' || num === null){
        num = +prompt('Введите число правильно');
    }
    return num;
};

num1 = checkNum(num1);
num2 = checkNum(num2);

if(num1 > num2){
    console.log('Первое число больше второго');
} else if(num1 < num2){
    console.log('Второе число больше первого');
} else if(num1 === num2){
    console.log('Числа равны');
}