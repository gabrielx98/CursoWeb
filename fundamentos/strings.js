const escola = "Gabriel"

console.log(escola.charAt(4))// retorna o valor na posição
console.log(escola.charAt(10))//retorna vazio S/n no lugar
console.log(escola.charCodeAt(3)) //valor da tabela unicode

console.log(escola.indexOf('b'))// index do caracter
console.log(escola.substring(1))// buscar a partir de X
console.log(escola.substring(0,3)) // buscar do 1 até o 2

console.log('Escola '.concat(escola).concat("!")) // concatenar
console.log('Escola '+ escola + "!") // concatenar
console.log(escola.replace('r', '3')) // trocar carcteres 1 pelo 2

console.log('Ana,Maria,Pedro'.split(','))//criar array apartir do argumento