const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'загрузка...',
        successMessage = 'Спасибо! Скоро мы с вами свяжемся!';

    const form = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3'),
        messageInput = document.getElementById('form2-message');
        
        form3.style.color  = 'white';
        messageInput.setAttribute('type', 'text');


    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    const funcForm = (form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            form.reset();

            postData(body)
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error('Status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        });
        
        form.addEventListener('input', (event) => {
            const target = event.target,
                inputPhone = document.querySelectorAll('.form-phone'),
                inputText = document.querySelectorAll('input[type=text]');

            
            const validateForm = (input, inputType, pattern) => {
                if(target.matches(inputType)){
                    input.forEach((item) => {
                        item.addEventListener('change', () => {
                            if(item.value != item.value.match(pattern)){
                                item.value = '';
                                item.style.border = '2px solid red';
                            } else {
                                item.style.border = 'none';
                            }
                        });
                    });
                }
            };

            validateForm(inputPhone, 'input[type=tel]', /^\+?[78]\d{10}$/);
            validateForm(inputText, 'input[type=text], .mess', /^[А-Яа-яЁё\s*]+$/);
        });
    };

    funcForm(form);
    funcForm(form2);
    funcForm(form3);

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;