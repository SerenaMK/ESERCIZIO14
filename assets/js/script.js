// Quando faccio click sul button....

document.getElementById("button").addEventListener("click", function () {

    // Resetta tutto
    reset();

    var oggetti = 0;
    var budget = document.getElementById("customBudget").valueAsNumber;
    var limite = document.getElementById("customLimit").valueAsNumber;


    // Se i campi sono vuoti, mostra l'avviso, altrimenti rimuovi l'avviso e procedi
    if (!budget || !limite) {
        document.getElementById("warning").innerHTML = "Attenzione! Compilare entrambi i campi.";
        return;
    } else {
        document.getElementById("warning").innerHTML = "";
    }


    // Mostra quali sono il budget ed il limite
    document.getElementById("budget").innerHTML = budget;
    document.getElementById("limit").innerHTML = limite;

    // Ciclo while. Continua a generare un valore random ed a sottrarlo al budget, poi stampa il risultato sulla pagina... ma solo se il valore di spesa non supera quello del budget!
    while (budget > limite) {

        var spesa = Math.floor(Math.random() * 100);

        if (spesa < budget) {
            budget = budget - spesa;
            
            document.getElementById("listaSpese").innerHTML += `<li>Hai speso: <span>${spesa}</span> &euro;<br>Ti rimangono <span>${budget}</span> &euro;</li>`;
            oggetti++;
        }
        
    }

    // Concludi stampando quanti oggetti sono stati acquistati ed avvisando che è stato superato il valore limite.
    document.getElementById("msgAcquistato").innerHTML = `<li>Hai acquistato <span>${oggetti}</span> oggetti.</li>`;

    document.getElementById("msgTroppo").innerHTML = `<li>Hai meno di <span>${limite}</span> &euro;. Ora basta! Stai spendendo troppo!</li>`;

})


// Funzione di reset
function reset() {
    budget = "";
    limite = "";
    oggetti = 0;

    document.getElementById("listaSpese").innerHTML = "";
}