function scegliOperazione(simbolo) {
    const operazione = operations[simbolo];

    if (typeof operazione !== "function") {
        throw new Error("Operazione non supportata: " + simbolo);
    }
    return operazione;
}
function calcola() {
    const simbolo = document.getElementById("menu").value;

    const a = Number(document.getElementById("numero1").value);
    const b = Number(document.getElementById("numero2").value);

    const risultato = document.getElementById("risultato");
    const messaggio = document.getElementById("messaggio");

    risultato.textContent = "";
    messaggio.textContent = "";

    try {
        const operazione = scegliOperazione(simbolo);
        risultato.textContent = operazione(a, b);
    } catch (errore) {
        messaggio.textContent = errore.message;
    }
}
