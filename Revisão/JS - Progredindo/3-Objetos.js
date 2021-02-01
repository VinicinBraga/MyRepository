// let name = 'Milton';
// let lastname = 'Nascimento';
// let nickname = 'Bituca';
// let age = 77;
// let bestAlbuns = ['Travessia', 'Clube da Esquina', 'Minas'];

//transformado itens acima em um só  em objeto()
let singer = {
  name: 'Milton',
  lastname:'Nascimento',
  nickname: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  born: {
    city: 'Rio de Janeiro', 
    state: 'RJ'
  }
};

console.log('O cantor ' + singer.name + ' ' + singer.lastname + ' possui ' + singer.age + ' anos');

singer.fullName = singer.name +' '+ singer.lastname + '';

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu na cidade do ' + singer.born.city + ' no estado do ' + singer.born.state + '.')
