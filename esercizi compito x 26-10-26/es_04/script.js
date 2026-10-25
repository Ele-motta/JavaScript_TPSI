function scegliOperazione(simbolo) {
    const operazione = operations[simbolo];
    if (typeof operazione !== "function") {
        throw new Error("Operazione non supportata: " + simbolo);
    }
    return operazione;
}
const regole = [
    (t1, t2) => {
        if (t1 === "" || t2 === "") {
            return "Inserisci entrambi i numeri";
        }

        return "";
    },
    (t1, t2) => {
        if (Math.abs(Number(t1)) > 10000 ||
            Math.abs(Number(t2)) > 10000) {
            return "Numeri troppo grandi";
        }

        return "";
    },
    (t1, t2) => {
        if (Number(t1) === Number(t2)) {
            return "I due numeri devono essere diversi";
        }
        return "";
    }
];

function valida(regole, t1, t2) {
    for (const regola of regole) {
        const errore = regola(t1, t2);

        if (errore !== "") {
            return errore;
        }
    }
    return "";
}
function calcola() {
    const simbolo = document.getElementById("menu").value;
    const t1 = document.getElementById("numero1").value;
    const t2 = document.getElementById("numero2").value;

    const risultato = document.getElementById("risultato");
    const messaggio = document.getElementById("messaggio");

    risultato.textContent = "";
    messaggio.textContent = "";

    try {
        const errore = valida(regole, t1, t2);

        if (errore !== "") {
            throw new Error(errore);
        }
        const operazione = scegliOperazione(simbolo);
        risultato.textContent = operazione(Number(t1), Number(t2));
    } catch (errore) {
        messaggio.textContent = errore.message;
    }
}