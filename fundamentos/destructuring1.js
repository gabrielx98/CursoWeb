// novo recurso do ES2015

const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    endereco: {
        logradouro: 'Rua Saturno',
        numero: 5000
    }
}

const {nome,idade} = pessoa // retira nome e idade de pessoa
console.log(nome,idade)

const {nome: nombre, idade: age} = pessoa // retira nome e idade de pessoa renomeando
console.log(nombre,age)

const {sobreNome,bemHumorado = true} = pessoa // retira indefinido pois n existe e seta dado padrão
console.log(sobreNome,bemHumorado)

const {endereco: {logradouro,numero,cep}}= pessoa //retira do objeto
console.log(logradouro,numero,cep)

console.log(pessoa)

//const { banco: {ag, conta}} = pessoa // erro pq n existe o ibjeto banco
//console.log(ag,conta)