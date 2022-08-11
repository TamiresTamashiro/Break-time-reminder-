import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import {Emitter} from './Emitter.js';

const messages = [
  "Mantenha-se hidratado, beba água!",
  "Parabéns , 1 hora inteira estudando!",
  "Hora de levantar e esticar as pernas rsrs",
  "Que tal se alongar um pouquinho ?",
  "Que tal um cafézinho ?"
]

const notify = ()=> {
 
const randomIndex = Math.floor(Math.random()* messages.length)

 const notificacao = Notifyer.notify({
    title:"Hora de uma pausa!",
    body:messages[randomIndex],
    icon:'../intervalo_ico'
  })
  
  notificacao() 
  
}


const App = {
    async start() {
      try {
        await Notifyer.init()
    
Emitter.on('countdown-start', notify)
Emitter.on('countdown-end', Timer.init)

      
       Timer.init()
      } catch (err) {
        console.log(err.message)
      }
    }
}

export {App}