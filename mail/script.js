// creare un array con una lista di mail
const mail = ['lucagmail.com' , 'andreagmail.com' , 'fabiogmail.com' , 'diegogmail.com']

//creare un prompt per far scrivere all'utente la propria mail
let mailUtente = prompt('Inserisci la tua mail')
let found = false
//controllare se la mailUtente è all'interno dell'array mail
for(let i=0; i<mail.length; i++){
    if(mail[i]===mailUtente){
        found = true  
    }   
}
if(found){
    console.log('Accedi')
}else{
    console.log('Non sei registrato')
}
