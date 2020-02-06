const obj = { nome: "gabriel", sobrenome: "xavier" }
const obj2 = JSON.stringify(obj)
const obj3 = JSON.parse(obj2)
obj3.nome = "carlos"
console.log(obj3)

// transformando array em objeto e vice versa

Object.defineProperty(obj,'toString',{
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(obj.toString())

let array = []
array = obj.toString()
console.log(array)

let objeto = {}

for (let i=0;i<=array.length;i++){
if(array[i] != undefined ){
    //objeto.nome += " " + array[i]
    Object.defineProperty(objeto,`propriedade${i}`,{
        value: array[i],
        enumerable: true
    })
}}
    
console.log(objeto)