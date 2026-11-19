# Esercizio 2 – Contatore

Un contatore con pulsanti per aumentare e diminuire il valore.

---

## Passo A – Meccanismo del contatore

In questa prima parte creiamo:

- La variabile `counter`, che conserva il valore attuale del contatore.
- La funzione `cambiaDi(n)`, che restituisce un gestore di click che aggiunge `n` al contatore.
- La funzione `azzera()`, che riporta il contatore a 0.
- Il collegamento dei quattro pulsanti.

### Codice

    const counterElem = document.getElementById("valore")
    // contiene il riferimento all'elemento HTML che mostra il valore del contatore

    const più10Bnt = document.getElementById("più10")
    // contiene il riferimento al pulsante +10

    let counter = 0
    // variabile che conserva il valore attuale del contatore


    function cambiaDi(n){
        return () => {
            // restituisce un gestore di click che aggiunge n al contatore
            // e aggiorna la pagina

            counter = counter + n
            counterElem.textContent = counter
        }
    }


    function azzera(){
        // funzione che serve per riportare il contatore a 0

        counter = 0
        counterElem.textContent = counter
    }


    // COLLEGAMENTO DEI PULSANTI

    più10Bnt.addEventListener("click", cambiaDi(10))
    // aumenta il contatore di 10

    document.getElementById("meno10").addEventListener("click", cambiaDi(-10))
    // diminuisce il contatore di 10

    document.getElementById("più1").addEventListener("click", cambiaDi(1))
    // aumenta il contatore di 1

    document.getElementById("meno1").addEventListener("click", cambiaDi(-1))
    // diminuisce il contatore di 1

    document.getElementById("azzera").addEventListener("click", azzera)
    // riporta il contatore a 0


---

## Passo B – Controllo dei limiti

Il contatore deve rimanere tra 0 e 100.

In questa parte aggiungiamo:

- Il controllo per impedire al contatore di scendere sotto 0.
- Il controllo per impedire al contatore di superare 100.
- Il messaggio `Limite raggiunto` quando si supera un limite.
- La cancellazione dell'avviso al primo cambiamento valido.

### Codice

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
            // restituisce un gestore di click che aggiunge n al contatore

            avviso(counter + n)
            // controlla il nuovo valore prima di aggiornare il contatore
        }
    }


    function avviso(newVal){
        if (newVal < 0 || newVal > 100) {
            // controlla se il nuovo valore supera i limiti

            avvisoElem.textContent = "Limite raggiunto"
            return
            // interrompe la funzione: il contatore non cambia
        }

        counter = newVal
        // aggiorna la variabile counter

        counterElem.textContent = counter
        // aggiorna il valore visualizzato nell'HTML

        avvisoElem.textContent = ""
        // cancella l'avviso precedente
    }


    function azzera(){
        // funzione che serve per riportare il contatore a 0

        counter = 0
        counterElem.textContent = counter
        avvisoElem.textContent = ""
    }


    // COLLEGAMENTO DEI PULSANTI

    più10Bnt.addEventListener("click", cambiaDi(10))

    document.getElementById("meno10").addEventListener("click", cambiaDi(-10))

    document.getElementById("più1").addEventListener("click", cambiaDi(1))

    document.getElementById("meno1").addEventListener("click", cambiaDi(-1))

    document.getElementById("azzera").addEventListener("click", azzera)


---

## Passo C – Utilizzo della tastiera

In quest'ultima parte aggiungiamo la possibilità di utilizzare il contatore anche tramite tastiera.

Riutilizziamo le funzioni già create:

- `cambiaDi(n)` per modificare il contatore.
- `azzera()` per riportare il contatore a 0.
- I controlli dei limiti realizzati nel Passo B.

### Tasti disponibili

| Tasto | Azione |
|---|---|
| ArrowUp | +1 |
| ArrowDown | -1 |
| PageUp | +10 |
| PageDown | -10 |
| Escape | Azzera |

### Codice completo

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
            // restituisce un gestore di click che aggiunge n al contatore

            avviso(counter + n)
        }
    }


    function avviso(newVal){
        if (newVal < 0 || newVal > 100) {
            // controlla se il nuovo valore supera i limiti

            avvisoElem.textContent = "Limite raggiunto"
            return
            // il contatore non cambia
        }

        counter = newVal
        counterElem.textContent = counter
        avvisoElem.textContent = ""
    }


    function azzera(){
        // funzione che serve per riportare il contatore a 0

        counter = 0
        counterElem.textContent = counter
        avvisoElem.textContent = ""
    }


    // COLLEGAMENTO DEI PULSANTI

    più10Bnt.addEventListener("click", cambiaDi(10))

    document.getElementById("meno10").addEventListener("click", cambiaDi(-10))

    document.getElementById("più1").addEventListener("click", cambiaDi(1))

    document.getElementById("meno1").addEventListener("click", cambiaDi(-1))

    document.getElementById("azzera").addEventListener("click", azzera)


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
        // ascolta gli eventi della tastiera

        const azione = tasti[event.key]
        // cerca nell'oggetto tasti l'azione corrispondente

        if (azione) {
            // controlla se il tasto premuto è presente nell'oggetto tasti

            event.preventDefault()
            // impedisce il comportamento predefinito del tasto

            azione()
            // esegue la funzione associata al tasto premuto
        }
    })


---

## Riepilogo dell'esercizio

| Passaggio | Obiettivo |
|---|---|
| A | Creare il contatore e collegare i pulsanti |
| B | Aggiungere il controllo dei limiti 0-100 |
| C | Aggiungere i comandi tramite tastiera |

### Importante

I tre passaggi sono progressivi:

- **Passo A:** contiene il meccanismo base del contatore.
- **Passo B:** aggiunge il controllo dei limiti.
- **Passo C:** aggiunge l'utilizzo della tastiera.

Il codice del Passo C contiene già tutte le funzionalità dei passaggi A e B. Nel progetto finale si utilizza quindi un solo codice: quello del Passo C.