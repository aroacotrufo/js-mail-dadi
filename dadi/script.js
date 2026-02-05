let num_pc = Math.random()*6
let num_utente = Math.random()*6
let message
if(num_pc<num_utente){
        message = 'Utente vince'
}else{
    message = 'Pc vince'
}
console.log(message)