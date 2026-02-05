// creare un array con una lista di mail
const mail = ['lucagmail.com' , 'andreagmail.com' , 'fabiogmail.com' , 'diegogmail.com']

//creare un prompt per far scrivere all'utente la propria mail
let mailUtente = prompt('Inserisci la tua mail')
let message = 'Non sei registrato'
//controllare se la mailUtente è all'interno dell'array mail
for(let i=0; i<mail.length; i++){
    if(mail[i]===mailUtente){
        message = 'Accedi'
        break
    }   
}
console.log(message)