/* var board =
//  0   1   2   3   4   5   6   7
[ ['R','N','B','Q','K','B','N','R'], //0
//------------------------------------------
  ['P','P','P','P','P','P','P','P'], // 1
//------------------------------------------ 
  [' ',' ',' ',' ',' ',' ',' ',' '], // 2
//------------------------------------------  
  [' ',' ',' ',' ',' ',' ',' ',' '], // 3
//------------------------------------------  
  [' ',' ',' ',' ',' ',' ',' ',' '], // 4
//------------------------------------------  
  [' ',' ',' ',' ',' ',' ',' ',' '], // 5
//------------------------------------------  
  ['p','p','p','p','p','p','p','p'], // 6
//------------------------------------------  
  ['r','n','b','q','k','b','n','r']];// 7
//------------------------------------------  
console.table(board.join('\n') + '\n\n');

// Fazendo o King's Pawn avançar 2
board[3][4] = board[6][4];
board[6][4] = ' ';
console.table(board.join('\n'));
board[6][4] = 'LORIS';
board[6][5] = ' E PATATINA'
console.table(board.join('\n')); */

/* let head1 = document.querySelector('#head1');
head1.addEventListener('click', () => alert('ti amo')
); */


/* const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);
 */

const numbers = [19, 21, 30, 3, 45, 22, 15];
/* const verifyDivisible = (number) => {
  numbers */
/* } */
/* const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0)

}

console.log(findDivisibleBy3And5()) */

/* const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
 return names.find((name) =>  name.length === 5)

}

console.log(findNameWithFiveLetters()); */

/* const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((musica) => musica.id === id)
}

console.log(findMusic('31031685')) */

/* const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some()
}

console.log(hasName(names, 'Ana')) */

