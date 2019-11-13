let date = new Date(),
    day = (date.getHours() > 6 && date.getHours() < 12) ? 'Утро' :
          (date.getHours() < 18) ? 'День' : 
          (date.getHours() < 24) ? 'Вечер' : 'Ночь',
    dayWeek = date.toLocaleString('ru', {  weekday: 'long' }),
    timeDay = (date.getHours() < 12) ? 'AM' : 'PM',
    time = date.toLocaleTimeString() + ' ' + timeDay,
    newYear = new Date(2020, 0, 1),
    dayToNewYear = Math.floor(((newYear - date) / 1000) / 60 / 60 / 24),
    body = document.querySelector('body');

console.log(day);
console.log(dayWeek);
console.log(time);
console.log(Math.floor(((newYear - date) / 1000) / 60 / 60 / 24));

body.style.cssText = `font-style: italic;
                      font-family: Helvetica;`;

window.document.write('Добрый ' + day + '<br>');
window.document.write('Сегодня: ' + dayWeek + '<br>');
window.document.write('Текущее время: ' + time + '<br>');
window.document.write('До нового года осталось ' + dayToNewYear + ' дней');
