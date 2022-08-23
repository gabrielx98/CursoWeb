// promise é assincrono
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(frase >=10){
                resolve("entrou")
            }else{
                reject("passou")
            }
            
        }, segundos * 1000) //recebe em milisegundos
    })
}

falarDepoisDe(3, 50)
    .then((frase,abc) => frase.concat("?!?"))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

