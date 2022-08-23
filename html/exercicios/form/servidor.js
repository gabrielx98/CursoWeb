// comando usado no terminal => npm i --save express@4.16.3 body-parser@1.18.2

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.post('/usuarios',(req,resp)=>{
    console.log(req.body)//post
    console.log(req.query)//get
    resp.send('<h1>Parabéns</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})

app.listen(3003)