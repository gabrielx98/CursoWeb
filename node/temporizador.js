//import { setImmediate } from 'timers';

const schedule = require('node-schedule')


// let segundo = new Date().getSeconds()

// for(let i=1;i!=0;i++) {
    
//     let segundoAtual = new Date().getSeconds()
//     let minutoAtual = new Date().getMinutes()
//     let horaAtual = new Date().getHours()

//     if(segundoAtual != segundo /*&&*/ /* tentar fazer com q coloque o horario a cada segundo*/   /*|| date.getSeconds() == 0*/){
        
//     console.log(`${horaAtual} - ${minutoAtual} - ${segundoAtual}`) 
//     segundo = segundoAtual
// }}
    



const tarefa1 = schedule.scheduleJob('*/5 * * * * 2', function () { 
    
    //  segundo = 0 - 59
    //  minuto = 0 - 59
    //  hora  = 0 - 23
    //  dia/mes = 1 -31
    //  mes = 1 - 12
    //  dia/semana = 0 - 7 <- 0 e 7 é domingo
    // "*/" = a cada X
    
    
    console.log('Executando Tarefa 1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // 0 - domingo ... 6 - sabado
regra.hour = 20
regra.second = 2

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2', new Date().getSeconds())
})