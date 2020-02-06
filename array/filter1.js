const produtos = [
    { nomw: 'notebook', preco: 2499, fragil: true },
    { nomw: 'ipad pro', preco: 4199, fragil: true },
    { nomw: 'copo de vidro', preco: 12.49, fragil: true },
    { nomw: 'copo de plastico', preco: 18.99, fragil: false }

]

console.log(produtos.filter(function (p) {
    return false
}))

const caro = produtos => produtos.preco > 2000
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))