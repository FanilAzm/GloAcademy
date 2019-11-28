const calcValidate = () => {
    const calcBlock = document.querySelector('.calc-block');

    calcBlock.addEventListener('input', (event) => {
        let target = event.target;

        if(target.matches('input') || target.matches('.calc-count') || target.matches('.calc-day')){
            const calcInput = document.querySelector('.calc-item');

            calcInput.value = calcInput.value.replace(/\D/g, '');
        }
    });

    
};

export default calcValidate;