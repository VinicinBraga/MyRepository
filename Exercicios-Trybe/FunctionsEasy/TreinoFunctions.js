// function basic 1
function adicionaCinco(numero) {
  const resultado = numero + 5;
  return resultado;
}
// function basic 2
function adicionaCinco2(numero) {
  return numero + 5;
}

// function Intermediario 1
const funcao1 = function (numero) {
  return numero + 5;
}

// function Intermediario 2 - arrow
const funcao2 = (numero) => {
  return numero + 5;
}

// function Avançada 1 - arrow - 1 linha
const funcao3 = (numero) => numero + 5;

// function Avançada 2 - arrow - retornando objeto
const funcao4 = (numero) => ({objeto:numero + 5});

console.log(adicionaCinco(10));
console.log(adicionaCinco2(20));
console.log(funcao1(1));
console.log(funcao2(2));
console.log(funcao3(3));
console.log(funcao4(4));