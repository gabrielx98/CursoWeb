let i = 0
function recursao (nome){
    
    console.log(`${i} - ${nome}`)
    i++
    recursao(nome)
}

recursao("gabriel")