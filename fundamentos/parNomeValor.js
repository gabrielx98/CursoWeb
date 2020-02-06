// par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec(){
    const saudacao = 'Falaaaaaa' //contexto lexico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Gabriel',
    idade: 20,
    peso: 110,
    endereco: {
        logradourou: 'Rua Saturno',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)