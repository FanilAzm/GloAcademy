let money = +prompt('Ваш месячный доход?');
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(', ');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

let costs = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let answer = costs;
let costs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let answer2 = costs2;

let price = +prompt('Во сколько это обойдется?');
let answer3 = price;
let price2 = +prompt('Во сколько это обойдется?');
let answer4 = price2;

let budgetMonth = money - answer3 - answer4;
console.log(budgetMonth);

let monthLehgth = Math.ceil(mission / budgetMonth);
console.log(monthLehgth);

let budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);

if(budgetDay > 800){
    console.log('Высокий уровень дохода');
} else if (budgetDay > 300 && budgetDay <= 800){
    console.log('Средний уровень дохода');
} else if (budgetDay > 0 && budgetDay <= 300){
    console.log('Низкий уровень дохода');
} else if (budgetDay === 0){
    console.log('Что то пошло не так');
}

