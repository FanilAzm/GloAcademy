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
    period: 3,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'бензин, дорога, коморка');
            appData.addExpenses = addExpenses.split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let costs,
            num,
            sum = appData.expensesMonth;

        for(let i = 0; i < 2; i++){
            if(i === 0){
                costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'жкх');
                appData.expenses[costs] = parseInt(num);
            }
            if(i === 1){
                costs = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'кино');
                appData.expenses[costs] = parseInt(num);
            }

            num = prompt('Во сколько это обойдется?', '2000');
            for(let key in this.expenses){
                sum += this.expenses[key];
                console.log(sum);
            }
        }
    },
    showTypeof: function(data){
        console.log(data, typeof(data));
    },
    getExpensesMonth: function(){
        let sum = appData.budgetMonth;

        appData.asking();
        
        console.log('сумма: ' + sum);
        return sum;
    },
    getAccumulatedMonth: function(){
        return parseInt(money - sumPrice);
    },
    getTargetMonth: function(){
        return ((Math.floor(appData.mission / accumulatedMonth)) > 0) ? 'Цель будет достигнута' : 'Цель не будет достигнута';
    },
    getStatusIncome: function(){
        if(budgetDay > 800){
            return ('Высокий уровень дохода');
        } else if (budgetDay > 300 && budgetDay <= 800){
            return ('Средний уровень дохода');
        } else if (budgetDay > 0 && budgetDay <= 300){
            return ('Низкий уровень дохода');
        } else if (budgetDay === 0){
            return ('Что то пошло не так');
        }
    }
};

console.log(appData);

appData.showTypeof(money);
appData.showTypeof(appData.income);
appData.showTypeof(appData.deposit);

let validationNum = function(num){
    return (!isNaN(parseFloat(num))) ? parseFloat(num) : (!isNaN(parseInt(num))) ? parseInt(num) : validationNum(prompt('Введите число правильно'));
};

let sumPrice = appData.getExpensesMonth();

let accumulatedMonth = appData.getAccumulatedMonth();
appData.showTypeof((appData.period * accumulatedMonth));

appData.showTypeof(appData.getTargetMonth());

let budgetDay = Math.floor(accumulatedMonth / 30);
appData.showTypeof(budgetDay);

appData.showTypeof(appData.getStatusIncome());



