const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
  };

let country = document.getElementById('country'),
    city = document.getElementById('city'),
    result = document.querySelector('.result'),
    option = document.querySelectorAll('option');
    
function sortArr(val){
    option = '';
    cityArr[val].forEach(function(item){
        option += `<option>${item}</option>`;
    });
    city.innerHTML = option;
}

console.log('option.selectedIndex: ', country[option.selectedIndex]);

document.getElementById('country').addEventListener('change', function(e){
    sortArr(e.target.value);
});

document.getElementById('city').addEventListener('change', function(e){
    result.textContent = [option.selectedIndex]  + ' ' + e.target.value;
});



    

