function principal(nome,callback){
    callback(nome.concat(" ola")," mundo")
}

function voic(){
    principal("gabriel",(e,s)=>console.log(e,s))
}

function operacao (n1,n2,operador,callback){
    
    callback(n1+n2)
}

function voit(){
    operacao(1,2,"+",(e)=>console.log(e))
}

voit()

