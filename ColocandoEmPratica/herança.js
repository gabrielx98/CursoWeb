const veiculo = {
    rodas: 0,
    passageiros: 0,
    porte: 0,
    escrita:"",
    falar: function(escrita){
        
        console.log(`${escrita} : ${this.rodas} e ${this.passageiros} e ${this.porte}`)
    }
}

console.log(veiculo)
veiculo.falar('veiculo')

const carro = {
    __proto__: veiculo
}

carro.falar('carro com proto')

carro.__proto__.rodas = 10

carro.falar('carro com 10')

veiculo.falar("veiculo")

//const barco = new veiculo

console.log(veiculo.prototype)

function gabriel(){
    num = 10
}
console.log(gabriel.prototype)
let biel = Object.create(gabriel)
console.log(biel.__proto__)
biel.__proto__.num = 0
gabriel.prototype.num=11
console.log(biel,gabriel())