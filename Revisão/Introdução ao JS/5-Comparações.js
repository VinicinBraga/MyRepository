//Comparações - Igual(===), Diferente(!==), maior(>) ou menor(<), maior ou igual(>=) ou menor ou igual(<=)

//Variaveis
let mediaAlturaDoHomem = 1.80
let mediaAlturaDaMulher = 1.65 

//Igual(===)
let resultadoDaComparacao = mediaAlturaDoHomem === mediaAlturaDaMulher;
console.log("É igual? " + resultadoDaComparacao);

//Diferente(!==)
resultadoDaComparacao = mediaAlturaDoHomem !== mediaAlturaDaMulher;
console.log("É diferente? " + resultadoDaComparacao);

//maior(>)
resultadoDaComparacao = mediaAlturaDoHomem > mediaAlturaDaMulher;
console.log("A media do Homem é maior? " + resultadoDaComparacao);

//menor(<)
resultadoDaComparacao = mediaAlturaDoHomem < mediaAlturaDaMulher;
console.log("A media do Homem é menor? " + resultadoDaComparacao);

//maior ou igual(>=)
resultadoDaComparacao = mediaAlturaDoHomem >= mediaAlturaDaMulher;
console.log("A media do Homem é maior ou igual? " + resultadoDaComparacao);

//menor ou igual(<=)
resultadoDaComparacao = mediaAlturaDaMulher <= mediaAlturaDoHomem  ;
console.log("A media da Mulher é menor ou igual do homem? " + resultadoDaComparacao);
