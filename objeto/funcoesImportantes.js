const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))   //pega os nomes           dos atributos
console.log(Object.values(pessoa)) //pega os valores         dos atributos 
console.log(Object.entries(pessoa))//pega os nomes e valores dos atributos

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});
/*
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
});
*/

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest,o1,o2)// pega o primeiro argumento e nele adiciona os argumentos seguintes

Object.freeze(obj)
obj.c = 1234
console.log(obj)