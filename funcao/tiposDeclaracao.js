console.log(soma(3, 4))

// function declaration : pode ser chamada de qualquer parte do código
function soma(x, y) {
    return x + y
}

// function express : só pode ser chamada depois de declarada
const sub = function (x, y) {
    return x - y
}
console.log(sub(4, 3))

// named function express : só pode ser chamada depois de declarada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))
