console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// todos para mesma função mas só o module.exports é retornado, com o valor de todos

exports = null
console.log(module.exports)

exports = {
    nome:'teste'
}

console.log(module.exports)

module.exports = {
    publico: true
}