let num_pc = Math.floor(Math.random()*6)+1
let num_utente = Math.floor(Math.random()*6)+1
let message
if(num_pc<num_utente){
        message = 'Utente vince'
}else if(num_pc>num-utente){
    message = 'Pc vince'
}else{
    message = 'Pareggio'
}
console.log(message)