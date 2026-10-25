const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
        if (b === 0) {
            throw new Error("Non puoi dividere per zero");
        }
        return a / b;
    },
    "%": (a, b) => {
        if (b === 0) {
            throw new Error("Non puoi dividere per zero");
        }
        return a % b;
    },

    "maggiore": (a, b) => Math.max(a, b),
    "media": (a, b) => (a + b) / 2,
    "potenza": (a, b) => a ** b
};