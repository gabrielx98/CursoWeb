// não aceita repetição/não indexada
// const times = new Set()
// times.add('Vasco').add('São Paulo').add('Palmeiras').add('Corinthians').add('Flamengo').add('Vasco')

// console.log(times)
// console.log(times.size)
// console.log(times.has('vasco'))
// console.log(times.has('Vasco'))
// times.delete('Flamengo')
// console.log(times.has('Flamengo'))

// const nomes = ['Raquel','Lucas','Julia','Lucas']
// const nomesSet = new Set (nomes)
// console.log(nomesSet)

// adicionar valores no array apartir do set, se tiver no set add não array, se não tiver no set add no array

const nomes = new Set()
const arrayNomes = []

function adicionar(valor) {

    if (!(nomes.has(valor))) {
        arrayNomes[arrayNomes.length] = valor
        nomes.add(valor)
    } else {
        imprimir(`${valor} já cadastrado!!`)
    }
}

function imprimir(texto) {
    console.log(texto)
}

adicionar("Gabriel")
adicionar("Gabriel")
adicionar("Daniel")
adicionar("Rafael")
imprimir(arrayNomes)






