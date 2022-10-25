document.getElementById("button").addEventListener("click", function () {

    reset();

    var oggetti = 0;
    var budget = document.getElementById("customBudget").valueAsNumber;
    var limite = document.getElementById("customLimit").valueAsNumber;

    document.getElementById("budget").innerHTML = budget;
    document.getElementById("limit").innerHTML = limite;

    while (budget > limite) {

        var spesa = Math.floor(Math.random() * 100);

        if (spesa < budget) {
            budget = budget - spesa;
            
            document.getElementById("listaSpese").innerHTML += `<li>Hai speso: <span>${spesa}</span> &euro;<br>Ti rimangono <span>${budget}</span> &euro;</li>`;
            oggetti++;
        }
        
    }
    
    document.getElementById("msgAcquistato").innerHTML = `<li>Hai acquistato <span>${oggetti}</span> oggetti.</li>`;

    document.getElementById("msgTroppo").innerHTML = `<li>Hai meno di <span>${limite}</span> &euro;. Ora basta! Stai spendendo troppo!</li>`;
})

function reset() {
    budget = "";
    limite = "";
    oggetti = 0;

    document.getElementById("listaSpese").innerHTML = "";
}