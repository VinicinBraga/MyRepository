let ingredientItens = [
'500g de feijãoo',
'200g toucinho',
'1 concha de óleo',
'1 dente de alho',
'5 ovos',
'1 colher de sopa de sal com alho',
'Cheiro verde a gosto',
'200g de farinha de mandioca'
];

let inserindoLista = document.querySelector('.ingredientes-list')

for (let index = 0; index < ingredientItens.length; index++) {
  let item = ingredientItens[index];
  
  let compodoLista = document.createElement('li');
  compodoLista.innerText = item;
  compodoLista.className = 'ingredientes-list-itens';

  inserindoLista.appendChild(compodoLista);
}




let excluindoDaLista = document.querySelectorAll('.ingredientes-list-itens');
console.log(excluindoDaLista);

for(let index = 0; index < excluindoDaLista.length; index++) {
  let element = excluindoDaLista[index];

  if (element.innerText.includes('sal')) {
    inserindoLista.removeChild(element);
  }
}

