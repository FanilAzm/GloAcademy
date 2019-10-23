let money = +prompt('Ваш месячный доход?');
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(', ');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;
let period = 9;

function showTypeof(data){
    console.log(data, typeof(data));
}

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let costs = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let answer = costs;
let price = +prompt('Во сколько это обойдется?');
let answer3 = price;

let costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let answer2 = costs2;
let price2 = +prompt('Во сколько это обойдется?');
let answer4 = price2;

// возвращает сумму расходов
function getExpensesMonth(){
    return price + price2;
}

// возвращает разницу доходов и расходов
let accumulatedMonth = function getAccumulatedMonth(){
    return (money - getExpensesMonth());
}

function getTargetMonth(){
    return (Math.floor(mission / accumulatedMonth()));
}

showTypeof((period * accumulatedMonth()));

let budgetMonth = money - getExpensesMonth();
showTypeof(budgetMonth);

let monthLehgth = getTargetMonth();
showTypeof(monthLehgth);

let budgetDay = Math.floor(budgetMonth / 30);
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



