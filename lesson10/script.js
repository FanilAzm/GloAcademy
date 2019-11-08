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


const AppData = function(){
    this.budget = 0;
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.persentDeposit = 0;
    this.moneyDeposit = 0;
    this.period = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.incomeMonth = 0;
    this.expensesMonth = 0;
};

AppData.prototype.start = function(){

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
};

AppData.prototype.reset = function(){
    inputText.forEach(function(item){
        item.value = '';
    });
    start.style.display = 'block';
    cancel.style.display = 'none';

    leftInputText = document.querySelector('.data').querySelectorAll('input[type=text]');
    leftInputText.forEach(function(item){
        item.removeAttribute('disabled', true);
    });

    expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems.forEach(function(item, index){
        if(index !== 0){
            item.remove();
            addExpensesBtn.style.display = 'block';
        }
    });

    incomeItems = document.querySelectorAll('.income-items');
    incomeItems.forEach(function(item, index){
        if(index !== 0){
            item.remove();
            addIncomeBtn.style.display = 'block';
        }
    });
};

AppData.prototype.showResult = function(){
    let _this = this;
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    addExpensesValue.value = this.addExpenses.join(', ');
    addIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcPeriod();
    rangeInput.addEventListener('change',function(){
        incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
        incomePeriodValue.value = _this.budgetMonth * this.value;
    });  
};

AppData.prototype.addExpensesBlock = function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpensesBtn);
    expensesItems = document.querySelectorAll('.expenses-items');

    if(expensesItems.length === 3){
        addExpensesBtn.style.display = 'none';
    }
};

AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);

    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, addIncomeBtn);
    incomeItems = document.querySelectorAll('.income-items');

    if(incomeItems.length === 3){
        addIncomeBtn.style.display = 'none';
    }
};

AppData.prototype.getExpenses = function(){
    let _this = this;
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('input.expenses-title').value,
            cashExpenses = item.querySelector('input.expenses-amount').value;
        
        if(itemExpenses !== '' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
};

AppData.prototype.getIncome = function(){
    let _this = this;
    incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('input.income-title').value,
            cashIncome = item.querySelector('input.income-amount').value;
        
        if(itemIncome !== '' && cashIncome !== ''){
            _this.income[itemIncome] = cashIncome;
        }
    });
};

AppData.prototype.getAddExpenses = function(){
    let addExpenses = addExpensesInput.value.split(',');
    let _this = this;
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            _this.addExpenses.push(item);
        }
    });
};

AppData.prototype.getAddIncome = function(){
    let _this = this;
    addIncomeInput.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};

AppData.prototype.asking = function(){
    this.deposit = confirm('Есть ли у вас депозит в банке?');
    this.getInfoDeposit();
};

AppData.prototype.getExpensesMonth = function(){
    for(let key in this.expenses){
        this.expensesMonth += +this.expenses[key];
    }
};

AppData.prototype.getIncomeMonth = function(){
    for(let key in this.income){
        this.incomeMonth += +this.income[key];
    }
};

AppData.prototype.getBudget = function(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function(){
    return (Math.ceil(targetAmount.value / this.budgetMonth));
};

AppData.prototype.getStatusIncome = function(){
    if(this.budgetMonth > 800){
        return ('Высокий уровень дохода');
    } else if (this.budgetMonth > 300 && this.budgetMonth <= 800){
        return ('Средний уровень дохода');
    } else if (this.budgetMonth > 0 && this.budgetMonth <= 300){
        return ('Низкий уровень дохода');
    } else if (this.budgetMonth === 0){
        return ('Что то пошло не так');
    }
};

AppData.prototype.getInfoDeposit = function(){
    if(this.deposit){
        this.persentDeposit = validationNum(prompt('Какой годовой процент?', '10'));
        this.moneyDeposit = validationNum(prompt('Какая сумма заложена?', '10000'));
    }
};

AppData.prototype.calcSavedMoney = function(){
    return this.budgetMonth * this.period;
};

AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * rangeInput.value;
};

AppData.prototype.addEventListeners = function(){
    start.addEventListener('click', this.start.bind(this));
    cancel.addEventListener('click', this.reset);

    addExpensesBtn.addEventListener('click', this.addExpensesBlock);
    addIncomeBtn.addEventListener('click', this.addIncomeBlock);
    rangeInput.addEventListener('change', function(){
        periodAmount.textContent = this.value;
    });
};


const appData = new AppData();
appData.addEventListeners();





let validationNum = function(num){
    return (!isNaN(parseFloat(num))) ? parseFloat(num) : (!isNaN(parseInt(num))) ? parseInt(num) : validationNum(prompt('Введите число правильно'));
};

let validationStr = function(str){
    return ((isNaN(Number(str)) && typeof str === 'string') ? str : validationStr(prompt('Введите строку правильно')));
};







