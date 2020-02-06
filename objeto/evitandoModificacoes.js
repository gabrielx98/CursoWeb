// Object.preventExtensions => não deixa adicionar atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto)) // verifica se é extensivel ou não

produto.nome = 'Borracha'
produto.descricao = "Borracha escolar branca"
delete produto.tag
console.log(produto)

// Object.seal => não permite adicionar atributos, excluir atributos
const pessoa = { nome: 'juliana', idade: 39 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // verifica se está selado

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze => selado + valores constantes