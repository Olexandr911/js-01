// const msg = 'Hello World!';
// alert(msg);

// const productTitle = 'Tesla X'; // String
// const productPrice = 150000; // Number
// const productAvailable = true; // Boolean
// alert(productTitle);
// alert(productPrice);
// alert(productAvailable);

// undefined
// null
// Object => Function, Array
// Symbol

// const userName = prompt('Enter your name');
// const msg = 'Hello, ' + userName;
// alert(msg);

const userAge = parseFloat(prompt('Enter your age'));
// const newAge = userAge + 1;
// const msgAge = 'Next year you will be ' + newAge;
// alert(msgAge);


// if (userAge == 18) {
//     alert('You are adult');
// } else {
//     alert('You are child');
// }
function sum(a, b, c) {
    return a + b + c;
}

const amount = sum(42, 43);
alert(amount);

const total = sum(100, "Hello");
alert(total);

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadr(a,b,c);

alert(result);

function solveQuadr(a, b, c) {
    const d = calcD(a,b,c);
    if (d > 0) {
        return 'x1 = ' + x1 + ', x2= ' + x2;
    }
    ...
}

function calcD(a, b, c) {
    return a * b ????
}