class Validator {
    constructor({selector, pattern = {}, method}){
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button';
        });
        this.error = new Set();
    }

    init(){
        this.applyStyle();
        this.elementForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
        this.setPattern();
    }

    isValid(elem){
        return false;
    }

    checkIt(event){
        const target = event.target;
        if(this.isValid(target)){
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
        console.log(this.error);
    }

    showError(elem){
        elem.classList.remove('success');
        elem.classList.add('error');

        if(elem.nextElementSibling.classList.contains('valid-error')){
            return;
        }

        const errorText = document.createElement('div');
        errorText.textContent = 'В этом поле ошибка';
        errorText.classList.add('valid-error');

        elem.insertAdjacentElement('afterend', errorText);
    }

    showSuccess(elem){
        elem.classList.remove('error');
        elem.classList.add('success');

        if(elem.nextElementSibling.classList.contains('valid-error')){
            elem.nextElementSibling.remove();
        }
    }

    applyStyle(){
        const style = document.createElement('style');
        style.textContent = `
            input.success {
                border: 2px solid green;
            }
            input.error {
                border: 2px solid red;
            }
            .valid-error {
                font-size: 12px;
                font-family: sans-serif;
                color: red;
            }
        `;
        document.head.appendChild(style);
    }

    setPattern(){
        if(!this.pattern.phone){
            this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
        }
        if(!this.pattern.email){
            this.pattern.email = /^\w+@\w+\.\w{2,}$/;
        }
        console.log(this.pattern);
    }
}