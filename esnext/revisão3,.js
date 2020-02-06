// Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na notação literal
const nome = 'Calrla'
const pessoa = {
    nome,
    falar(){
        return 'oi gente'
    }
}
console.log(pessoa.nome,pessoa.falar())

//class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return ' Au Au'
    }
}
console.log(new Cachorro().falar())