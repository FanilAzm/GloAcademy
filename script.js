const body = document.querySelector('body'),
    colorTitle = document.getElementById('color'),
    btn = document.getElementById('change');

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

body.style.cssText = 'text-align: center';
colorTitle.style.cssText = 'font-family: sans-serif; color: #fff;';
btn.style.cssText = 'padding: 15px; background-color: #fff;';

btn.addEventListener('click', () => {
    let color = getRandomColor()
    body.style.cssText = `
        background-color: ${color};
        text-align: center
    `;
    btn.style.cssText = `
        padding: 15px;
        background-color: #fff;
        color: ${color};
    `;
    colorTitle.innerHTML = color;
});


  
  