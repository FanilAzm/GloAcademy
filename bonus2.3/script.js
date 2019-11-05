const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
  };

let country = document.getElementById('country').querySelectorAll('option'),
    city = document.getElementById('city'),
    result = document.querySelector('.result'),
    option;
    
function sortArr(val){
    option = '';
    cityArr[val].forEach(function(item){
        option += `<option>${item}</option>`;
    });
    city.innerHTML = option;
}

document.getElementById('country').addEventListener('change', function(e){
    sortArr(e.target.value);
});

    

