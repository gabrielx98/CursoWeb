const array = [
{ nome: 'joão', nota: 7.3, bolsista: true },
{ nome: 'maria', nota: 9.2, bolsista: false },
{ nome: 'pedro', nota: 9.8, bolsista: true },
{ nome: 'ana', nota: 8.7, bolsista: false }
]

console.log(array.map(a => a.nome).reduce(function(acc,atual,i,array){
    console.log(acc, atual)

    return  acc + atual 
}))

