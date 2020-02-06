let valor //não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
/*console.log(valor.toString())
Erro: não da pra acessar metodo com valor nulo*/

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined// não fazer
console.log(!!produto.preco)
//delete produto.preco // correto a fazer
console.log(produto)

produto.preco = null // ausencia de preço
console.log(!!produto.preco)
console.log(produto)