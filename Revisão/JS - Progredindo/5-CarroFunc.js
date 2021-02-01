let statusCarro = 'desligado';
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar() {
  if (statusCarro === 'desligado') {
    statusCarro = 'ligado'
  } else { 
    statusCarro = 'desligado';
  }
  return statusCarro;
};

function acelerar(incremento) {
  aceleracao = aceleracao + incremento;
  return 'Acelerando a ' + aceleracao + 'km/h'
};  

function frear(decremento) {
  aceleracao = aceleracao - decremento;
  return 'Diminuindo a velocidade para ' + aceleracao + 'km/h'

};

function girarVolarnte(anguloDeRotação) {
  rotacaoDoVolante = anguloDeRotação;
  return 'Virando o volante ' + rotacaoDoVolante + ' graus';
};

console.log(ligarDesligar());
console.log(acelerar(40));
console.log(girarVolarnte(-45));
console.log(frear(5));
console.log(girarVolarnte(0));
console.log(ligarDesligar());