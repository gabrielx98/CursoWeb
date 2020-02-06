function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // operação logica OU
    const comprarTv50 = trabalho1 && trabalho2 // operação logica E
    // const comprarTv50 = !!(trabalho1 ^ trabalho2) //bitwise xor - bit a bit OU exclusivo
    const comprarTv32 = trabalho1 != trabalho2 // operação logica diferente que representa ou exclusivo
    const manterSaudavel = !comprarSorvete // operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // criar de forma implicita variaveis com o mesmo nome
}

console.log('1) V e V :',compras(true,true))
console.log('2) V e F :',compras(true,false))
console.log('3) F e V :',compras(false,true))
console.log('4) F e F :',compras(false,false))