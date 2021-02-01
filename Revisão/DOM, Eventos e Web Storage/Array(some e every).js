//some
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); 


//every

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => {
  return Object.values(studentGrades).every((grade) => grade === 'Aprovado');
};

console.log(verifyGrades(grades));