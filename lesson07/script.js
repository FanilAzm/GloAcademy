// let money,
//     start = function(){
//         money = prompt('Ваш месячный доход?', '30000');
//         while(isNaN(money) || money === '' || money === null){
//             money = prompt('Ваш месячный доход?', '30000');
//         }
//     };
// start();

// let appData = {
//     budget: money,
//     income: {},
//     addIncome: [],
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     persentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 500000,
//     period: 0,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     asking: function(){

//         if(confirm('Есть ли у вас дополнительный заработок?')){
//             let itemIncome = validationStr(prompt('Какой у вас дополнительный заработок?', 'фриланс'));
//             let cashIncome = validationNum(prompt('Сколько в месяц вы на этом зарабатываете?', '10000'));

//             this.income[itemIncome] = cashIncome;
//         }

//         let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин, дорога, коморка');
//             this.addExpenses = addExpenses.split(', ');
//             this.deposit = confirm('Есть ли у вас депозит в банке?');
//             this.getInfoDeposit();
//         let costs,
//             num;

//         for(let i = 0; i < 2; i++){
            
//             if(i === 0){
//                 costs = validationStr(prompt('Какие обязательные ежемесячные расходы у вас есть?', 'жкх'));
//             }
//             if(i === 1){
//                 costs = validationStr(prompt('Какие обязательные ежемесячные расходы у вас есть?', 'кино'));
//             }
            
//             num = prompt('Во сколько это обойдется?', '2000');
//             this.expenses[costs] = validationNum(num);

//         }
//     },
//     getExpensesMonth: function(){
//         let sum = 0;

//         this.asking();

//         for(let key in this.expenses){
//             sum += this.expenses[key];
//         }
        
//         return this.expensesMonth = sum;
        
//     },
//     getBudget: function(){

//         this.budgetMonth = money - this.expensesMonth;
//         this.budgetDay = Math.floor(this.budgetMonth / 30);
//         this.period = parseInt(this.mission / this.budgetMonth);
//     },
//     getTargetMonth: function(){
//         return (Math.floor(this.mission / this.budgetMonth > 0)) ? 'Цель будет достигнута за ' + this.period + ' месяцев' : 'Цель не будет достигнута';
//     },
//     getStatusIncome: function(){
//         if(this.budgetMonth > 800){
//             return ('Высокий уровень дохода');
//         } else if (this.budgetMonth > 300 && this.budgetMonth <= 800){
//             return ('Средний уровень дохода');
//         } else if (this.budgetMonth > 0 && this.budgetMonth <= 300){
//             return ('Низкий уровень дохода');
//         } else if (this.budgetMonth === 0){
//             return ('Что то пошло не так');
//         }
//     },
//     getInfoDeposit: function(){
//         if(this.deposit){
//             this.persentDeposit = validationNum(prompt('Какой годовой процент?', '10'));
//             this.moneyDeposit = validationNum(prompt('Какая сумма заложена?', '10000'));
//         }
//     },
//     calcSavedMoney: function(){
//         return this.budgetMonth * appData.period;
//     }
// };

// let validationNum = function(num){
//     return (!isNaN(parseFloat(num))) ? parseFloat(num) : (!isNaN(parseInt(num))) ? parseInt(num) : validationNum(prompt('Введите число правильно'));
// };

// let validationStr = function(str){
//     return ((isNaN(Number(str)) && typeof str === 'string') ? str : validationStr(prompt('Введите строку правильно')));
// };

// console.log(appData);

// console.log('Расходы за месяц: ' + appData.getExpensesMonth());

// appData.getBudget();

// console.log(appData.getTargetMonth());

// console.log('Уровень дохода: ' + appData.budgetMonth);

// for(let key in appData){
//     console.log('Наша программа включает в себя данные: ' + key + ' ' + appData[key]);
// }

// console.log(appData.moneyDeposit, appData.persentDeposit, appData.calcSavedMoney());


// let upperCase = appData.addExpenses.map(function(item){
//     return item[0].toUpperCase() + item.slice(1).toLowerCase();
// });

// console.log(upperCase.join(', '));


let start = document.getElementById('start'),
    addIncomeBtn = document.querySelector('.income_add'),
    addExpensesBtn = document.querySelector('.expenses_add'),
    depositCheckbox = document.querySelector('#deposit-check'),
    addIncomeInput = document.querySelectorAll('.additional_income-item'),
    resultInput = document.getElementsByClassName('result-total'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    addExpensesInput = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    rangeInput = document.querySelector('.period-select');

for(let i = 1; i < resultInput.length; i++){
    console.log(resultInput[i]);
}

