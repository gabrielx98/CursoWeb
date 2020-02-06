// !!!!!!!!RECURSO ASSINCRONO!!!!!!!


//const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

/* if(anonimo) {
    process.stdout.write('Fala anonimo!\n')
    process.exit()

}else{
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace("\r\n", "")
        
        process.stdout.write(`Fala ${nome} !!\n`)
        process.exit()
    })
} */

let destruir = process.argv.indexOf('destruir') != -1
const criar = process.argv.indexOf('criar') != -1


if (destruir) {
    process.stdout.write("O que deseja destruir? : ")
    
    process.stdin.on('data', data1 => {
        const desejo1 = data1.toString().replace("\r\n", "")
        process.stdout.write(`${desejo1} destruido!!\n`)
        process.exit();
        
    })
}

if (criar) {

     process.stdout.write("O que deseja criar? : ")
    process.stdin.on('data', data2 => {
        const desejo2 = data2.toString().replace("\r\n", "")
        process.stdout.write(`${desejo2} criado!!\n`)
        process.exit()

    })

}


