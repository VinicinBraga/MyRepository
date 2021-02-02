const inquirer = require('inquirer');

function validateFloat (input) {
  return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
}

async function cauculateIMC () {
  const answers = await inquirer.prompt([
    { name: 'peso', type: 'input', message: 'Qual o seu peso (kg)?', validate: validateFloat },
    { name: 'altura', type: 'input', message: 'Qual a sua altura (m)?', validate: validateFloat }
  ]);

  const peso = parseFloat(answers.peso);;
  const altura = parseFloat(answers.altura);

  console.log('peso: %s, altura: %s', peso, altura);

  const imc = (peso / Math.pow(altura, 2)).toFixed(1);

  console.log('IMC: %s', imc);

  if(imc < 18.5) {
    console.log('Abaixo do peso (magreza)')
  } else if (imc >=18.5 && imc <= 24.9) {
    console.log('Peso normal') 
  } else if  (imc >=25.0 && imc <= 29.9) {
    console.log('Acima do peso (sobrepeso)') 
  } else if  (imc >=30.0 && imc <= 34.9) {
    console.log('Obesidade grau I')
  } else if  (imc >=35.0 && imc <= 39.9) {s
    console.log('Obesidade grau II')
  } else if(imc >= 40.0) { 
    console.log('Obesidade graus III e IV')   
  };
}

cauculateIMC();
