let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // negação dupla com !!

console.log(`os verdadeiros...`)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os negativos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log("operação "+!!('' || null || 1 || '')) 
// um precisa dar verdadeiro para imprimir verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')
nome = 'Gabriel'
console.log(nome || 'Desconhecido')