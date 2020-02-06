const passageiros = [
    '{"nome" : "gabriel" , "sobrenome" : "xavier"  , "lugar" : 1}',
    '{"nome" : "camila"  , "sobrenome" : "barrada" , "lugar" : 2}'

]

const paraObj = json => JSON.parse(json)
const exibir = function (passageiro){
    
    return `${passageiro.lugar} está ${passageiro.nome} ${passageiro.sobrenome}`
}

console.log(passageiros.map(paraObj).map(exibir))
