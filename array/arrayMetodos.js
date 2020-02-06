const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // retira o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona em ultimo
console.log(pilotos)

pilotos.shift() //retira o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria array apartir do indice
console.log(algunsPilotos1, pilotos)

const algunsPilotos2 = pilotos.slice(1,4) // cria array a partir do indice até anterior do ultimo indice
console.log(algunsPilotos2)