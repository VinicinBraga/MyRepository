//quadrado
let numero = 5
let contador = ''
let contador2 = ''
let asterisco ='*'

for (let i = 0; i < numero; i++) {
  contador = asterisco + contador;
}

for (let i = 0; i < numero; i++) {
  console.log(contador);
}

//triangulo retangulo

for (let i = 0; i < numero; i++) {
  contador2 = asterisco + contador2;
  console.log(contador2);
}

//triangulo retangulo - invertido
let n = 5;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
s
//Piramide
let n2 = 5;
let lineIndex2;
let lineColumn2;
let lineInput2 = '';
let symbol2 = '*';

let midOfMatrix = (n2 + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (lineIndex2 = 0; lineIndex2 <= midOfMatrix; lineIndex2 += 1) {
  for (lineColumn2 = 1; lineColumn2 <= n2; lineColumn2 += 1) {
    if (lineColumn2 > controlRight && lineColumn2 < controlLeft) {
      lineInput2 = lineInput2 + symbol2;
    } else {
      lineInput2 = lineInput2 + ' ';
    }
  }
  console.log(lineInput2);
  lineInput2 = '';
  controlRight -= 1;
  controlLeft += 1;
};