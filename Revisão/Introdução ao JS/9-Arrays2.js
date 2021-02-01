//Queremos saber quantos estudantes vao pagar a trybe!
//Contador simples

let rendaDeCadaEstudantes = [4000, 3500, 3499, 3900, 6500];

let contadorDePagantes = 0;

//Acrescentando 1 ao contador a cada valor que for maior que 3500:
if (rendaDeCadaEstudantes[0] >= 3500) {
  contadorDePagantes = contadorDePagantes + 1;
}

if (rendaDeCadaEstudantes[1] >= 3500) {
  contadorDePagantes = contadorDePagantes + 1;
}

if (rendaDeCadaEstudantes[2] >= 3500) {
  contadorDePagantes = contadorDePagantes + 1;
}

console.log(contadorDePagantes) 
//Repare que para criar esse contador foi preciso criar um IF para cada posição, deixando um codigo grande.
//Para resolvermos isso mais facil o interessante é criarmos im Loop que faça o IF automaticamente em todas as posiçoes

