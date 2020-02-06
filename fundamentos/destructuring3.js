function rand({ min =0, max =1000}){
    const valor = Math.random()*(max-min)+min
    
    return Math.floor(valor)
    
}

const obj={mas:50,min:40}
console.log(rand(obj))
console.log(rand({min:900}))
console.log(rand({}))

// apartir daqui autoria minha

function randomizar({min = 0,max =1000}){
    const randomico = Math.random()
    const RDD = randomico * (max-min)+min
    return RDD
}

console.log(randomizar({min:10,max:1000}))
console.log(Math.floor(randomizar({min:10,max:1000})))