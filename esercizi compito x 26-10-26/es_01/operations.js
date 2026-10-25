const operations = {
    somma: (a, b) => a + b,
    sottrazione: (a, b) => a - b,
    moltiplicazione: (a, b) => a * b,
    divisione: (a, b) => {
        if (b === 0) {
            return "Errore: divisione per zero";
        }
        return a / b;
    }
};
