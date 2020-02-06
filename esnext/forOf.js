let i1 = 0
for (let letra of "Cod3r") {
    console.log(i1++,letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

imprimir("indice")
for (let i in assuntosEcma) { //imprime indice
    console.log(i)
}

imprimir("valor")
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

imprimir("estrutura")
for (let assunto of assuntosMap) {
    console.log(assunto)
}

imprimir("chave")
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

imprimir("valor")
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

imprimir("chave e valor")
for (let [ch, vl] of assuntosMap.entries()) {
    console.log([ch, vl])
}

imprimir("valor")
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}

function imprimir(texto){
    console.log("\n<= imprime "+texto)
}
