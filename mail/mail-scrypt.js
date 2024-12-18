// =========== CONSEGNA=============
// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Non è necessario provvedere alla validazione delle email.

// ======SVOLGIMENTO========

// 1) Identifico prima di tutto le variabili, l'array con la lista mail, la mail derivante dal prompt ( senza definirla), una variabile per il controllo della validità del dato nel prompt e una variabile messaggio.

// 2) la mia logica prevede prima l'utilizzo di un ciclo while per verificare che l'input del prompt sia effettivamente una mail. Per farlo, all'interno del ciclo while, subito dopo il prompt che definisce la mail, metto una condizione (if) che garantisce la presenza del carattere "@" all'interno dell'input. Al termine del ciclo while verrà così ridefinito il valore della variabile che permette la chiusura del ciclo.

// 3) per rispettare infine la consegna creo una condizione (if) che verifica l'appartenenza della mail definita con il prompt all'array della mail list. Verrà poi generato un messaggio per definire l'esito dell'accesso, anche in caso di input sbagliato.



const accessList = ['alfredo@gmail.com', 'andrea@gmail.com'];
let accessMail
let accessMailValid = false
let message

while (!accessMailValid){
  accessMail = prompt('INSERISCI EMAIL');
  if (accessMail.includes('@')){
    accessMailValid = true;
  }
    
  else {
    message = 'Input di email non valido';
    console.log(message);
  }

}

// if ( accessList.includes(accessMail) == true){
//   message = 'Puoi accedere';
//   } else if( accessList.includes(accessMail) == false){
//   message = 'Non puoi accedere';
//   }
//   console.log(message);

// NON AVEVO LETTO IL MESSAGGIO SULLA CHAT GENERAL

let found = false
for (let i = 0; i < accessList.length; i++) {
  if (accessList[i] === accessMail) {
    found = true;

  }
}

if (found) {
  message = 'Puoi accedere';
} else {
  message = 'Non puoi accedere';
}
console.log(message);