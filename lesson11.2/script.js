const start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    addIncomeBtn = document.querySelector('.income_add'),
    addExpensesBtn = document.querySelector('.expenses_add'),
    depositCheckbox = document.querySelector('#deposit-check'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    addIncomeInput = document.querySelectorAll('.additional_income-item'),
    resultInput = document.getElementsByClassName('result-total'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('input.income-title'),
    expensesTitle = document.querySelector('input.expenses-title'),
    addExpensesInput = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    rangeInput = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    addIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    addExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    inputText = document.querySelectorAll('input[type=text]');

let expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    leftInputText = document.querySelector('.data').querySelectorAll('input[type=text]');


class AppData{
    constructor(){
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
    }

    start(){
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
        this.getInfoDeposit();
        this.getBudget();
        this.getAdd(this.addExpenses, '.additional_expenses-item');
        this.getAdd(this.addIncome, '.additional_income-item');
    
        this.showResult();
    }

    reset(){
        inputText.forEach(function(item){
            item.value = '';
        });
        start.style.display = 'block';
        cancel.style.display = 'none';
    
        leftInputText = document.querySelector('.data').querySelectorAll('input[type=text]');
        leftInputText.forEach(function(item){
            item.removeAttribute('disabled', true);
        });

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
    
        rangeInput.value = 1;
        periodAmount.textContent = 1;
    }

    showResult(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        addExpensesValue.value = this.addExpenses.join(', ');
        addIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcPeriod();
        rangeInput.addEventListener('change', () => {
            incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
            incomePeriodValue.value = this.budgetMonth * rangeInput.value;
        });
    }

    addBlock(addBtn, str = ''){
        let items = document.querySelectorAll(str);
        let cloneItem = items[0].cloneNode(true);
        
        items[0].parentNode.insertBefore(cloneItem, addBtn);

        if(items.length === 2){
            addBtn.style.display = 'none';
        }
    }

    removeBlock(addBtn, str = ''){
        let items = document.querySelectorAll(str);
        items.forEach(function(item, index){
            if(index !== 0){
                item.remove();
                addBtn.style.display = 'block';
            }
        });
    }

    getExpenses(){
        expensesItems = document.querySelectorAll('.expenses-items');
        expensesItems.forEach((item) => {
            let itemExpenses = item.querySelector('input.expenses-title').value,
                cashExpenses = item.querySelector('input.expenses-amount').value;
            
            if(itemExpenses !== '' && cashExpenses !== ''){
                this.expenses[itemExpenses] = cashExpenses;
            }
        });
    }

    getIncome(){
        incomeItems = document.querySelectorAll('.income-items');
        incomeItems.forEach((item) => {
            let itemIncome = item.querySelector('input.income-title').value,
                cashIncome = item.querySelector('input.income-amount').value;
            
            if(itemIncome !== '' && cashIncome !== ''){
                this.income[itemIncome] = cashIncome;
            }
        });
    }

    getAdd(items, str = ''){
        let itemInput = document.querySelector(str);
        let itemsInput = itemInput.value.split(',');
        itemsInput.forEach((item) => {
            item = item.trim();
            if(item !== ''){
                items.push(item);
            }
        });
    }

    getExpensesMonth(){
        for(let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
        }
    }

    getIncomeMonth(){
        for(let key in this.income){
            this.incomeMonth += +this.income[key];
        }
    }

    getBudget(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.budget * this.persentDeposit)/12;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    }

    getTargetMonth(){
        return (Math.ceil(targetAmount.value / this.budgetMonth));
    }

    getStatusIncome(){
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

    getInfoDeposit(){
        if(this.deposit){
            this.persentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    }

    calcSavedMoney(){
        return this.budgetMonth * this.period;
    }

    calcPeriod(){
        return this.budgetMonth * rangeInput.value;
    }

    addEventListeners(){
        start.addEventListener('click', this.start.bind(this));
        cancel.addEventListener('click', () => {
            this.reset();
            this.removeBlock(addExpensesBtn, '.expenses-items');
            this.removeBlock(addIncomeBtn, '.income-items');
        });

        addExpensesBtn.addEventListener('click', () => this.addBlock(addExpensesBtn, '.expenses-items'));
        addIncomeBtn.addEventListener('click', () => this.addBlock(addIncomeBtn, '.income-items'));
        rangeInput.addEventListener('change', function(){
            periodAmount.textContent = this.value;
        });

        depositCheckbox.addEventListener('change', () => {
            if(depositCheckbox.checked){
                depositBank.style.display = 'inline-block';
                depositAmount.style.display = 'inline-block';
                this.deposit = 'true';
                depositBank.addEventListener('change', function(){
                    let selectIndex = this.options[this.selectedIndex].value;
                    if(selectIndex === 'other'){
                        depositPercent.style.display = 'inline-block';
                        depositPercent.value = '';
                    } else {
                        depositPercent.style.display = 'none';
                        depositPercent.value = selectIndex;
                    }
                });
            } else {
                depositBank.style.display = 'none';
                depositAmount.style.display = 'none';
                depositAmount.value = '';
                this.deposit = 'false';
            }
        });
    }
}


const appData = new AppData();
appData.addEventListeners();





let validationNum = function(num){
    return (!isNaN(parseFloat(num))) ? parseFloat(num) : (!isNaN(parseInt(num))) ? parseInt(num) : validationNum(prompt('Введите число правильно'));
};

let validationStr = function(str){
    return ((isNaN(Number(str)) && typeof str === 'string') ? str : validationStr(prompt('Введите строку правильно')));
};







