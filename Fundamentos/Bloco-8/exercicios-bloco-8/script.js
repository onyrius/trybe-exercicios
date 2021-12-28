/* numero 1 
 
const pessoaContratada = (nomeCompleto) => {
    const pessoa ={
    nomeCompleto, 
    email: `${nomeCompleto.split(' ').join('_').toLowerCase()}@trybe.com`
}

return pessoa
}

const newEmployees = (nomeCompleto) => {
    const employess = {};
    let id = pessoaContratada(nomeCompleto);
    if (!employess.id) {
    return Object.assign(employess, id);
    }
    
};
/* console.log(pessoaContratada('suelen arruda')) */
/* console.log(newEmployees('Pedro Guerra'));
console.log(newEmployees('Luiza Drumond'));
console.log(newEmployees('Carla Paiva')); */

/* numero 2

const geraNumeroAleatorio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const aposta = (numeroApostado) => {
    let numeroSorteado = geraNumeroAleatorio(1, 5);
    if (numeroApostado === numeroSorteado) {
        return `Parabéns você ganhou`
    }
    if (numeroApostado !== numeroSorteado) {
        return ` Tente novamente`
    }
};

console.log(aposta(1));
 */

const righAnswers =     ['A',  'C',  'B', 'D', 'A', 'A', 'D',   'A', 'D', 'C'];
const studentsAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaResposta = (studentsAnswers, righAnswers) => {
    let pontos = 0;         
     for ( let index = 0; index < studentsAnswers.length; index += 1) {
         for (let position = 0; position < righAnswers.length; position += 1) {
            if (studentsAnswers[index] === righAnswers[position] && index === position) {
                pontos += 1; 
            }
            if ((studentsAnswers[index] !== righAnswers[position] && index === position) && studentsAnswers[index] !== 'N.A') {
                pontos -= 0.5;
            }
         }
     }
     return pontos;
};

const avaliacao = (righAnswers, studentsAnswers, verificaResposta) => verificaResposta(studentsAnswers, righAnswers);

console.log(avaliacao(righAnswers, studentsAnswers, verificaResposta));
