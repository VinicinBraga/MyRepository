const numbers = [19, 21, 30, 3, 45, 22, 15];

let verifyEven = (number) => number % 2 === 0;
let isEven = numbers.find(verifyEven);

console.log(isEven);

console.log(verifyEven(9));
console.log(verifyEven(10));
