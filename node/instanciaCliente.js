const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

contadorC.inc()
contadorC.inc()

console.log(contadorA.valor, contadorB.valor , contadorC.valor,contadorD.valor )