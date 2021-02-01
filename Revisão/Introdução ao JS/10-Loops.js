//Resolvendo com um Loop
let rendaDeCadaEstudantes = [4000, 3500, 3499, 3900, 6500];

let contadorDePagantes = 0;

for (let i = 0; i < rendaDeCadaEstudantes.length; i = i + 1) {
  if (rendaDeCadaEstudantes[i] >= 3500) {
    contadorDePagantes = contadorDePagantes + 1;
  }  
}

console.log(contadorDePagantes);

//Loop com string
//

let palavra = "TRYBE"

for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i])
}