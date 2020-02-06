var numero = 1
{
    let numero = 2 // prcura o escopo menor e depois no maior
    console.log('dentro =',numero)
}
console.log('fora = ',numero)