// =========== CONSEGNA=============
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
/// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// ==============SVOLGIMENTO===========


// 1) identifico una variabile messaggio senza però darle un valore e definisco inoltre 2 variabili (i dadi) che genereranno un numero randomico tra 1 e 6 utilizzando il Math.floor(Math.random()) * 6 al quale andro poi a sommare un +1 per ottenere tutto lo spettro di variabili escludendo comunquel lo 0

// 2)vado poi a definire una condizione (if) che confronti i due risultati e per ogni outcome dare un valore alla variabile messaggio diverso. Le condizioni saranno dunque : dado giocatore > dado computer e viceversa. Ho previsto anche un messaggio in caso di pareggio.

// 3) Ho aggiunto infine un prompt iniziale per avviare il gioco, non particolarmente utile ma mi sembrava carino. 




let comando = prompt(`Per giocare scrivi "tira"`)
let message
if (comando.includes(`tira`)){
  let dadoGiocatore = Math.floor(Math.random() * 6) + 1;
  console.log(`Questo è il tuo tiro: ${dadoGiocatore}`);
  let dadoComputer = Math.floor(Math.random() * 6) + 1;
  console.log(`Questo è il mio tiro: ${dadoComputer}`);

  if (dadoGiocatore > dadoComputer){
  message = `${dadoGiocatore} è maggiore di ${dadoComputer}! Congratulazioni! Hai avuto solo fortuna!`
  } else if (dadoComputer > dadoGiocatore){
  message = `${dadoComputer} è maggiore di ${dadoGiocatore} Ahahahah ho vinto io!`
  } else{
  message = `Ah! Un pareggio! Giochiamo ancora!`
  }
  console.log(message)

} else {
  message = `Le regole le faccio IO! Scrivi tira per giocare!`
  console.log(message)
}



















