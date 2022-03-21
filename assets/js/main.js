// Dichiarazione variabili
let container = document.getElementById("gridContainer")

// Ciclo for per la creazione 
for (let i = 1; i <= 100; i++){
        container.innerHTML += `<div class="myc_col">${(i)}</div>`;
}