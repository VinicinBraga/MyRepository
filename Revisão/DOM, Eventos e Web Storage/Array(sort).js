//sort com strings
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log('A ordem alfabetica do array: ' + food);

//Com numeros
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); 
//A lógica é a seguinte: a função recebe, da sort , todos os elementos do array, em pares (elemento1, elemento2) , e vai comparando-os. O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */) . Ou seja: para o array [1, 2, 3, 4] , a função receberá (1, 2) , (1, 3) , ..., (3, 4) como parâmetros e ordenará o array com base em seu resultado. 