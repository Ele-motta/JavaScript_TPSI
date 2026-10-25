function calcola() {
    const scelta = document.getElementById("menu").value;

    const a = Number(document.getElementById("numero1").value);
    const b = Number(document.getElementById("numero2").value);
    const risultato = document.getElementById("risultato");

    if (scelta === "") {
        risultato.textContent = "Seleziona un'operazione";
        return;
    }
    if (operations[scelta] === undefined) {
        risultato.textContent = "Operazione non disponibile";
        return;
    }
    risultato.textContent = operations[scelta](a, b);
}
