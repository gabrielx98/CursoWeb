const alunos = [
    { nome: 'joão', nota: 7.3, bolsista: true },
    { nome: 'maria', nota: 9.2, bolsista: false },
    { nome: 'pedro', nota: 9.8, bolsista: true },
    { nome: 'ana', nota: 8.7, bolsista: false }
]

const mapear = a => a.nota

const acumular = function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}

console.log(alunos.map(mapear))

const resultado = alunos.map(mapear).reduce(acumular, 0)

console.log(resultado)