console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()

// this na função add no global, this fora da função deixa visivel para outros modulos