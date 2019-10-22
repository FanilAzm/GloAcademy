let num = 266219;
function mult(number) {
    return [...number.toString()].reduce((p, v) => p * v);
}

console.log(mult(num));

let exp = mult(num)**3;

console.log(exp.toString().substr(0, 2));

