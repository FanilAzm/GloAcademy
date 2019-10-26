let count,
    userNum;

count = (Math.floor(Math.random() * 100) + 1);

let guessNum = function(){
    userNum  = prompt('Угадайте число от 0 до 100');

    if(!isNaN(parseFloat(userNum)) && isFinite(userNum)){
        if(userNum < count){
            alert('Больше! Попробуйте еще раз =)');
            guessNum();
        } else if(userNum > count){
            alert('Меньше! Попробуйте еще раз =)');
            guessNum();
        } else if(userNum == count){
            alert('Поздравляю вы угадали!!!');
            let repeatNum = confirm('Хотите сыграть еще?') ? guessNum() : alert('Игра окончена');
        }
    } else if(userNum == null){
        alert('Игра окончена');
    } else {
        alert('Введите число!');
        guessNum();
    }
};
guessNum();


    




