const canvas = document.getElementById('canvas'),
    paint = document.getElementById('paint');
const ctx = canvas.getContext('2d');
const color = document.getElementById('color'),
    range = document.getElementById('range');

const angle = (degrees) => (Math.PI/180) * degrees;



paint.addEventListener('mousemove', (event) => {
    const x = event.offsetX,
        y = event.offsetY,
        mx = event.movementX,
        my = event.movementY;

    const ctx = paint.getContext('2d');

    color.addEventListener('input', () => ctx.strokeStyle = color.value);
    range.addEventListener('input', () => ctx.lineWidth = range.value);

    if(event.buttons > 0){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - mx, y - my);
        ctx.stroke();
        ctx.closePath();
    }
});

ctx.beginPath();
ctx.moveTo(170, 100);
ctx.arc(100, 100, 70, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(340, 100);
ctx.arc(270, 100, 70, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(510, 100);
ctx.arc(440, 100, 70, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(255, 170);
ctx.arc(185, 185, 70, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(425, 170);
ctx.arc(355, 185, 70, 0, angle(360), false);
ctx.lineWidth = '10';
ctx.strokeStyle = 'yellow';
ctx.stroke();


