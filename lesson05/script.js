let money,
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин, дорога, коморка').split(', '),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 9;

let start = function(){
    money = prompt('Ваш месячный доход?', '30000');
    while(isNaN(money) || money === '' || money === null){
        money = prompt('Ваш месячный доход?', '30000');
    }
};
start();

function showTypeof(data){
    console.log(data, typeof(data));
}

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let costs,
    costs2;

// проверка на ввод числа до тех пор пока не введут число
// let validationNum = function(num){
    
//     if(!isNaN(parseFloat(num))){
//         return parseFloat(num);
//     } else if(!isNaN(parseInt(num))){
//         return parseInt(num);
//     } else {
//         validationNum(prompt('Введите число правильно'));
//     }
// };

let validationNum = function(num){
    return (!isNaN(parseFloat(num))) ? parseFloat(num) : (!isNaN(parseInt(num))) ? parseInt(num) : validationNum(prompt('Введите число правильно'));
};

// возвращает сумму расходов
function getExpensesMonth(){
    let sum = 0,
        num;
    
    for(let i = 0; i < 2; i++){
        if(i === 0){
            costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'жкх');
        } else {
            costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'кино');
        }

        num = +prompt('Во сколько это обойдется?', '2000');
        sum += validationNum(num);
    }
    console.log('сумма: ' + sum);
    return sum;
}

let sumPrice = getExpensesMonth();

// возвращает разницу доходов и расходов
function getAccumulatedMonth(){
    return parseInt(money - sumPrice);
}
let accumulatedMonth = getAccumulatedMonth();
showTypeof((period * accumulatedMonth));

function getTargetMonth(){
    // return ((Math.floor(mission / accumulatedMonth)) > 0) ? console.log('Цель будет достигнута') : console.log('Цель не будет достигнута');
    return ((Math.floor(mission / accumulatedMonth)) > 0) ? 'Цель будет достигнута' : 'Цель не будет достигнута';
}
showTypeof(getTargetMonth());

let budgetDay = Math.floor(accumulatedMonth / 30);
showTypeof(budgetDay);

let levelMoney = function(){
    if(budgetDay > 800){
        return ('Высокий уровень дохода');
    } else if (budgetDay > 300 && budgetDay <= 800){
        return ('Средний уровень дохода');
    } else if (budgetDay > 0 && budgetDay <= 300){
        return ('Низкий уровень дохода');
    } else if (budgetDay === 0){
        return ('Что то пошло не так');
    }
};
showTypeof(levelMoney());



