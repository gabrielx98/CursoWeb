const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

// get mostra
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // converte paRa JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

//post inseri
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco

    })
    res.send(produto)
})

//put altera
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco

    })
    res.send(produto)
})

app.delete('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id) 
    res.send(produto)
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})