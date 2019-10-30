let money,
    start = function(){
        money = prompt('Ваш месячный доход?', '30000');
        while(isNaN(money) || money === '' || money === null){
            money = prompt('Ваш месячный доход?', '30000');
        }
    };
start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: function(){
        return parseInt(this.mission / this.budgetMonth);
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин, дорога, коморка');
            this.addExpenses = addExpenses.split(', ');
            this.deposit = confirm('Есть ли у вас депозит в банке?');
        let costs,
            num;

        for(let i = 0; i < 2; i++){
            
            if(i === 0){
                costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'жкх');
            }
            if(i === 1){
                costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'кино');
            }
            
            num = prompt('Во сколько это обойдется?', '2000');
            this.expenses[costs] = parseInt(num);

        }
    },
    getExpensesMonth: function(){
        let sum = 0;

        this.asking();

        for(let key in this.expenses){
            sum += this.expenses[key];
        }
        
        return this.expensesMonth = sum;
        
    },
    getBudget: function(){
        this.budgetDay = this.mission / this.budgetMonth;
        this.budgetMonth = money - this.expensesMonth;
    },
    getTargetMonth: function(){
        return (Math.floor(this.mission / this.budgetMonth > 0)) ? 'Цель будет достигнута за ' + this.period() + ' месяцев' : 'Цель не будет достигнута';
    },
    getStatusIncome: function(){
        if(this.budgetMonth > 800){
            return ('Высокий уровень дохода');
        } else if (this.budgetMonth > 300 && this.budgetMonth <= 800){
            return ('Средний уровень дохода');
        } else if (this.budgetMonth > 0 && this.budgetMonth <= 300){
            return ('Низкий уровень дохода');
        } else if (this.budgetMonth === 0){
            return ('Что то пошло не так');
        }
    }
};

let validationNum = function(num){
    return (!isNaN(parseFloat(num))) ? parseFloat(num) : (!isNaN(parseInt(num))) ? parseInt(num) : validationNum(prompt('Введите число правильно'));
};

console.log(appData);

console.log('Расходы за месяц: ' + appData.getExpensesMonth());

appData.getBudget();

console.log(appData.getTargetMonth());

console.log('Уровень дохода: ' + appData.budgetMonth);

for(let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' ' + appData[key]);
}


