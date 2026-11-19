
const counterElem = document.getElementById("valore")
// contiene il riferimento all'elemento HTML che mostra il valore del contatore

const più10Bnt = document.getElementById("più10")
// contiene il riferimento al pulsante +10

const avvisoElem = document.getElementById("avviso")
// contiene il riferimento all'elemento HTML che mostra gli avvisi

let counter = 0
// variabile che conserva il valore attuale del contatore


function cambiaDi(n){
    return () => {
        // cambiaDi(n) restituisce una funzione anonima
        // che verrà eseguita quando si clicca un pulsante
        // oppure quando viene premuto un tasto della tastiera

        avviso(counter + n)
        // richiama la funzione avviso passando il nuovo valore da controllare
    }
}


function avviso(newVal){
    if (newVal < 0 || newVal > 100) {
        // controlla che il nuovo valore non sia inferiore a 0
        // oppure superiore a 100

        avvisoElem.textContent = "Limite raggiunto"
        return
        // interrompe la funzione: il contatore non cambia
    }

    counter = newVal
    // se il valore è valido, aggiorna la variabile counter

    counterElem.textContent = counter
    // aggiorna il valore visualizzato nell'HTML

    avvisoElem.textContent = ""
    // cancella l'avviso precedente perché il nuovo valore è valido
}


function azzera(){
    // funzione che serve per riportare il contatore a 0

    counter = 0
    counterElem.textContent = counter
    avvisoElem.textContent = ""

    // restituisce undefined perché non è presente un return
}


// azzera() vs azzera
// azzera() esegue subito la funzione
// azzera passa la funzione come riferimento, senza eseguirla


// COLLEGAMENTO DEI PULSANTI

più10Bnt.addEventListener("click", cambiaDi(10))
// quando si clicca il pulsante +10, aumenta il contatore di 10

document.getElementById("meno10").addEventListener("click", cambiaDi(-10))
// quando si clicca il pulsante -10, diminuisce il contatore di 10

document.getElementById("azzera").addEventListener("click", azzera)
// quando si clicca il pulsante azzera, il contatore torna a 0


// COLLEGAMENTO DELLA TASTIERA

const tasti = {
    ArrowUp: cambiaDi(1),
    // freccia su: aumenta il contatore di 1

    ArrowDown: cambiaDi(-1),
    // freccia giù: diminuisce il contatore di 1

    PageUp: cambiaDi(10),
    // PagSu: aumenta il contatore di 10

    PageDown: cambiaDi(-10),
    // PagGiù: diminuisce il contatore di 10

    Escape: azzera
    // Esc: azzera il contatore
}


document.addEventListener("keydown", (event) => {
    // addEventListener ascolta gli eventi della tastiera
    // keydown si verifica quando viene premuto un tasto

    const azione = tasti[event.key]
    // event.key contiene il nome del tasto premuto
    // cerca nell'oggetto tasti l'azione corrispondente

    if (azione) {
        // controlla se il tasto premuto è presente nell'oggetto tasti

        event.preventDefault()
        // impedisce il comportamento predefinito del tasto
        // ad esempio lo scorrimento della pagina

        azione()
        // esegue la funzione associata al tasto premuto
    }
})
