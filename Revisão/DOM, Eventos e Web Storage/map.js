let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let fazendoMap = numeros.map((position) => {
  return { n: position, nota: 10 }
});

console.log(fazendoMap)