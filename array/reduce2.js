const alunos = [
    { nome: 'joão', nota: 7.3, bolsista: true },
    { nome: 'maria', nota: 9.2, bolsista: false },
    { nome: 'pedro', nota: 9.8, bolsista: true },
    { nome: 'ana', nota: 8.7, bolsista: false }
]

// desafio 1: todos os alunos são bolsistas?

const bolsas = alunos => alunos.bolsista

console.log(alunos.map(bolsas))

const todosBolsista = (resultado, bolsista) => resultado && bolsista
/*function(acumulador, atual){
    let res
    if (acumulador == true && atual == true){
        res = atual
    }else{
        res = false
    }
    return res
}
*/
const algumBolsista = (resultado,bolsista) => resultado || bolsista
/*function(acumulador, atual){
    let res
    console.log("ac:"+acumulador+" atual :"+atual)
    if (acumulador == true){
        res = acumulador
    }
    return res
}*/

const final = alunos.map(bolsas).reduce(todosBolsista)
const final2 = alunos.map(bolsas).reduce(algumBolsista)
console.log("Bolsistas: Todos: "+final+" Algum: "+final2)