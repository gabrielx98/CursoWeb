const fs = require('fs')

const caminho = __dirname + '/arquivo.json' // __dirname = variavel de caminho até a pasta

// sincrono... segue a ordem de linhas
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// assincrono... é executado depois que executou tudo
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname,(err,arquivos) => {
    console.log('Conteudo da pasta ...')
    console.log(arquivos)
})
