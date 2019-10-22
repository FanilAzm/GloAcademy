let money = 50000;
let income = 'фриланс';
let addExpenses = 'спортзал, кино, кафе';
let deposit = true;
let mission = 1000000;
let period = 9;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));


console.log(income.length);

console.log('Период: ' + period + ' месяцев');
console.log('Цель: заработать ' + mission + ' рублей');

console.log(addExpenses.toLocaleLowerCase().split(', '));

let budgetDay = money / 30;
console.log('Результат: ' + budgetDay.toFixed(2));
let budgetDay2 = money % 30;
console.log('Остаток: ' + budgetDay2);

