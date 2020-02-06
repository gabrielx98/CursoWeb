const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.8]

// sem callback
const notaBaixa1 = []
for (let i in notas){
    if(nota < 7){
        notaBaixa1.push(notas[i])
    }
}

console.log(notaBaixa1)

//com callback
const notaBaixa2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notaBaixa2)

const notaMenorQue7 = nota => nota < 7
const notaBaixa3 = notas.filter(notaMenorQue7)
console.log(notaBaixa3)