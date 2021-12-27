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
    return Object.assign(employess, id);
};
/* console.log(pessoaContratada('suelen arruda')) */
console.log(newEmployees('Pedro Guerra'));
console.log(newEmployees('Luiza Drumond'));
console.log(newEmployees('Carla Paiva'));