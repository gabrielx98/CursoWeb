// constante -> endereço de memoria -> dado
// pessoa    -> 123                 -> {...}
const pessoa = { nome: 'Joâo' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)
// congela objeto e nenhuma alteração pode ser feita

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
