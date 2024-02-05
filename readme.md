# Vue To Do List

## Obiettivo

Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
- MILESTONE 1
  Stampare all'interno di una lista HTML un item per ogni todo.
  Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
- MILESTONE 2
  Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
- MILESTONE 3
  Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
- Bonus:
  1.  Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
  2.  Cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

## Procedimento

- Controllare il collegamento fra main.js e index.html con la struttura di base (il collegamento fra index.html verso main.js è già fornito)
- Inserire un array di objects nel data, dove saranno specificati per ogni objects/todos il nome e lo status
- Su index.html usare il nome e lo status degli objects appena creati per generare i vari todos
- Usare un ternario oppure if-else per assegnare la classe che fornisce il testo sbarrato
- Usare @click e una funzione ad hoc per creare l'opzione che permette di cancellare i todos da eliminare
- Usare v-model e una funzione dentro @cick per creare un form capace di generare nuovi todos
- Usare @keyUp e la stessa funziona usata nel punto precedente per abilitare la creazione di nuovi todos anche con il tasto enter
- Usare (sul testo dei todos) @click e una funzione per cambiare il booleano che regola se il testo dei todos è sbarrato o meno
