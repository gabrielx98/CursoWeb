const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados

            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }
                catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// recurso ecmaScript 8
// objetivo simplificar o uso de promise...
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}//retorna um objeto AsyncFunction

//obterAlunos()
//.then(alunos => alunos.map(aluno => aluno.nome))
//.then(nomes => console.log(nomes))

let obterAlunos2 = async (letra1,letra2,letra3) => {
    const turma = await getTurma(letra1)
    const turmb = await getTurma(letra2)
    const turmc = await getTurma(letra3)
    return [].concat(turma,turmb,turmc)
}



const map = alunos => alunos.map(aluno => aluno.nome)
const arrayToString = alunos => {
    let nomesDoPacuri = ' Alunos das Turmas:'
    alunos.forEach(nome => {
        nomesDoPacuri += nome + ", "

    })
    return nomesDoPacuri
}



obterAlunos2('A','B','C')
    .then(map)
    .then(arrayToString)
    .then(nomes => console.log(nomes))


