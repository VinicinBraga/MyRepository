//manipulando Arrays com Hofs

const myArray = [1, 2, 3, 4];

/*for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}*/

//exemplo 1
/*myArray.forEach(function imprimeParaMim(value, index, array) {
  console.log("value=", value, "index=", index, "array=", array)
});*/

//exemplo 2
/*function imprimeParaMim(value, index, array) {
  console.log("value=", value, "index=", index, "array=", array)
}
myArray.forEach(imprimeParaMim);*/

//exemplo 3
/*myArray.forEach((value, index, array) => 
  console.log("value=", value, "sindex=", index, "array=", array)
);*/

//Exemplo do map & filter- Transformando em dinheiro R$

const arraydinheiro = myArray.map((dinheiro) =>'R$'+ dinheiro +",00");

const arrayFiltrado = myArray.filter((value)=>{
  if(value===3) {
    return false;
  } else {
    return true
  }
})

//refatorado 1 - Sempre deve ter um (return true)
const arrayFiltrado2 = myArray.filter((value)=>{
  if(value===3) {
    return false;
  }
  return true;
})

//refatorado 3 - Sempre deve ter um (return true)
const arrayFiltrado3 = myArray.filter((value)=>{
  if(value!==3) {
    return true;
  }
})

//refatorado 4 - Melhor
const arrayFiltrado4 = myArray.filter(value=> value!==3)

console.log(arrayFiltrado);
console.log(arrayFiltrado2);
console.log(arrayFiltrado3);
console.log(arrayFiltrado4);
