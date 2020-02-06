const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const china = funcionarios => funcionarios.pais == 'China'
const mulher = funcionarios => funcionarios.genero == 'F'
const menorSalario = function (anterior,atual){
    return anterior.salario<atual.salario?anterior:atual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const chinesa = funcionarios.filter(mulher).filter(china).reduce(menorSalario)
    
    console.log(chinesa)
    
})

/* axios.get(url).then(response => {
    const funcionarios = response.data
    const brasil = funcionarios.filter(func => func.pais=='Brazil')
    console.log(brasil)
}) */

