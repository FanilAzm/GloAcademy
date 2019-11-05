let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    addIncomeBtn = document.querySelector('.income_add'),
    addExpensesBtn = document.querySelector('.expenses_add'),
    depositCheckbox = document.querySelector('#deposit-check'),
    addIncomeInput = document.querySelectorAll('.additional_income-item'),
    resultInput = document.getElementsByClassName('result-total'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('input.income-title'),
    incomeItems = document.querySelectorAll('.income-items'),
    expensesTitle = document.querySelector('input.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    addExpensesInput = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    rangeInput = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    addIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    addExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    inputText = document.querySelectorAll('input[type=text]'),
    leftInputText = document.querySelector('.data').querySelectorAll('input[type=text]');


let appData = {
    budget: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    period: 0,
    budgetDay: 0,
    budgetMonth: 0,
    incomeMonth: 0,
    expensesMonth: 0,
    start: function(){

        salaryAmount.addEventListener('input', function(e){
            if(e.target.value === ''){
                start.setAttribute('disabled', true);
            } else {
                start.removeAttribute('disabled', true);
            }
        });

        if(salaryAmount.value === ''){
            start.setAttribute('disabled', true);
        } else {
            start.setAttribute('disabled', false);
            start.style.display = 'none';
            cancel.style.display = 'block';

            leftInputText = document.querySelector('.data').querySelectorAll('input[type=text]');
            leftInputText.forEach(function(item){
                item.setAttribute('disabled', true);
            });
        }

        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getIncomeMonth();
        this.getBudget();
        this.getAddExpenses();
        this.getAddIncome();

        this.showResult();
    },
    reset: function(){
        inputText.forEach(function(item){
            item.value = '';
            start.style.display = 'block';
            cancel.style.display = 'none';
            leftInputText.forEach(function(item){
                item.removeAttribute('disabled', true);
            });
        });
    },
    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        addExpensesValue.value = this.addExpenses.join(', ');
        addIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcPeriod();
        rangeInput.addEventListener('change',function(){
            incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
            incomePeriodValue.value = appData.budgetMonth * this.value;
        });
        
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);

        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpensesBtn);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3){
            addExpensesBtn.style.display = 'none';
        }
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);

        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, addIncomeBtn);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3){
            addIncomeBtn.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('input.expenses-title').value,
                cashExpenses = item.querySelector('input.expenses-amount').value;
            
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('input.income-title').value,
                cashIncome = item.querySelector('input.income-amount').value;
            
            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }
        });
    },
    getAddExpenses: function(){
        let addExpenses = addExpensesInput.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        addIncomeInput.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    asking: function(){
        this.deposit = confirm('Есть ли у вас депозит в банке?');
        this.getInfoDeposit();
    },
    getExpensesMonth: function(){

        for(let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }
    },
    getIncomeMonth: function(){
        for(let key in this.income){
            this.incomeMonth += +this.income[key];
        }
    },
    getBudget: function(){

        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getTargetMonth: function(){
        return (Math.ceil(targetAmount.value / this.budgetMonth));
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
    },
    getInfoDeposit: function(){
        if(this.deposit){
            this.persentDeposit = validationNum(prompt('Какой годовой процент?', '10'));
            this.moneyDeposit = validationNum(prompt('Какая сумма заложена?', '10000'));
        }
    },
    calcSavedMoney: function(){
        return this.budgetMonth * this.period;
    },
    calcPeriod: function(){
        return this.budgetMonth * rangeInput.value;
    },
};

start.addEventListener('click', appData.start.bind(appData));
cancel.addEventListener('click', appData.reset);

addExpensesBtn.addEventListener('click', appData.addExpensesBlock);
addIncomeBtn.addEventListener('click', appData.addIncomeBlock);
rangeInput.addEventListener('change', function(){
    periodAmount.textContent = this.value;
});



let validationNum = function(num){
    return (!isNaN(parseFloat(num))) ? parseFloat(num) : (!isNaN(parseInt(num))) ? parseInt(num) : validationNum(prompt('Введите число правильно'));
};

let validationStr = function(str){
    return ((isNaN(Number(str)) && typeof str === 'string') ? str : validationStr(prompt('Введите строку правильно')));
};






