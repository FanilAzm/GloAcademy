const calculator = {
    a: document.getElementById('a'),
    b: document.getElementById('b'),
    btnSum: document.getElementById('sum'),
    btnMult: document.getElementById('mult'),
    result: document.getElementById('res'),
    sum: function(){
       this.result.value = +this.a.value + +this.b.value;
    },
    mult: function(){
        this.result.value = +this.a.value * +this.b.value;
    },
    show: function(){
        this.btnSum.addEventListener('click', calculator.sum.bind(calculator));
        this.btnMult.addEventListener('click', calculator.mult.bind(calculator));
    }
};

calculator.show();

