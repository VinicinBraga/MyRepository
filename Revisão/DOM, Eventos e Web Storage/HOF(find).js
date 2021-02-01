//exemplo 2

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}
console.log('Resultado sem HOF:' + ' ' + firstMultipleOf5);

// exemplo 2 com HOFs - find
const EX2numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

let EX2firstMultipleOf5 = EX2numbers.find( EX2n => EX2n % 5 === 0 );
console.log('Resultado com HOF(find):' + ' ' + EX2firstMultipleOf5)
