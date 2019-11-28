'use strict';

const card = document.querySelector('.card'),
    dogBtn = document.querySelector('.btn-dog'),
    catBtn = document.querySelector('.btn-cat');

dogBtn.addEventListener('click', () => {
    fetch('https://random.dog/woof.json')
        .then((response) => {
            if(response.status !== 200){
                throw new Error('Status network not 200');
            }
            return (response.json());
        })
        .then((response) => {
            const url = response.url;
            card.setAttribute('src', url);
        })
        .catch(error => console.error(error));
});

catBtn.addEventListener('click', () => {
    fetch('https://aws.random.cat/meow')
        .then((response) => {
            if(response.status !== 200){
                throw new Error('Status network not 200');
            }
            return (response.json());
        })
        .then((response) => {
            const url = response.file;
            card.setAttribute('src', url);
        })
        .catch(error => console.error(error));
});