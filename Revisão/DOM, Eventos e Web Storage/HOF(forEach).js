const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' }
];

function verifyGrade (student){
  if (student.grade >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}
let i;
for (i = 0; i < students.length; i += 1) {
  verifyGrade(students[i]);
}
console.log(students);

//exemplo refatorado com HOFs
const EX1students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' }
];
function EX1verifyGrade (EX1){
  if (EX1.grade >= 60) {
    EX1.approved = 'Aprovado';
  } else {
    EX1.approved = 'Recuperação';
  }
}
EX1students.forEach(EX1verifyGrade);
console.log(EX1students);
