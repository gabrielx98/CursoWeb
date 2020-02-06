/* let Pessoa = {}
let setNome = nome => Pessoa.nome = nome
let setIdade = idade => Pessoa.idade = idade
let pessoas = [2.2]    
   



function getPessoa(nome="gabriel",idade=20){
    setNome(nome)
    setIdade(idade)
    console.log(` ${Pessoa.nome} tem ${Pessoa.idade}`)
    pessoas [1.1] = nome
    pessoas [1.2] = idade
}

getPessoa()


console.log(pessoas[1.1], pessoas[1.2]) */

// gabriel, não conegui colocar this 
// vamo tenta
// this dentro da função tipo classe define publico

/*function Pessoa(nomeRecebido = "",idadeRecebida=0){
    let nome = nomeRecebido
    let idade = idadeRecebida

    this.getNome = function(){
        return nome
    }
    this.getIdade = function(){
        return idade
    }
    
}

let Gabis = new Pessoa("gabriel",20)
console.log(Gabis.getNome())*/

//por enquanto é só, vai incrementando...

//classe mesmo

class Pessoa {
    constructor(nome, idade) {
        this._nome = nome
        this._idade = idade
    }
    
    get nome() { return this._nome }
    
    set nome(recebeNome) {
        recebeNome = recebeNome.trim()
        if (!!recebeNome) {
            this._nome = recebeNome
        } else {
            this.nome = "vazio"
        }
    }
    
    get idade() { return this._idade }
    
    set idade(recebeIdade) {
        if (recebeIdade == typeof String) {
            recebeIdade = recebeIdade.trim()
        }
        if (isNaN(recebeIdade)){
            recebeIdade = "vazio"
            
        }
        if (!!recebeIdade) {
            this._idade = recebeIdade
        } else {
            this.idade = "vazio"
        }
    }

}

const p1 = new Pessoa()
n = "gabriel"
i = 10
p1.nome = n
p1.idade = i
console.log(p1)
console.log(n == true)
console.log(n.length)
const people = [,]
if (p1.nome != "vazio" && p1.idade != "vazio") {
    people[0,0] = p1.nome
    people[0,1] = p1.idade
    console.log(people)
}

