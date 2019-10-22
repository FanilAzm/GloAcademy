let lang = prompt('Введите ru или en');
let ruWeek = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let enWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

if(lang === 'ru'){
    console.log(ruWeek);
} else {
    console.log(enWeek);
}

switch(lang){
    case 'en': console.log(enWeek);
        break;
    case 'ru': console.log(ruWeek);
        break;
}

(lang === 'ru') ? console.log(ruWeek) : console.log(enWeek);


let namePerson = prompt('Введите имя');
let message = (namePerson === 'Артем') ? console.log('Директор') :
            (namePerson === 'Максим') ? console.log('Преподаватель') :
            console.log('Студент');