
/* Variabili */
//selezioniamo il bottone di inizio
let start = document.getElementById('btn');
//selezioniamo il valore della difficoltà scelta
let select = document.getElementById('difficoltà');
// Selezioniamo <p></p> nella griglia
let paragrafo = document.getElementById('welcome');





/* Eventi */
start.addEventListener('click', function(){

        // Reset del contenuto interno della griglia per nuova partita
        grid.innerHTML = '';
        // Aggiungo la classe griglia all'ellemento grid
        grid.classList.add('griglia');
        // Rimuovo la classe "none" dall'elemento grid
        grid.classList.remove('none');
        //Aggiungo la classe "none" al <p></p>
        paragrafo.classList.add('none');

        console.log(select.value);
        
        //Condizione legata alla difficoltà scelta
        if (select.value == "facile"){

                for(let i = 0; i < 100; i++){ 
                        // Selezioniamo la griglia
                        let grid = document.getElementById('grid');
                        // Creazione del box interno alla griglia
                        let box = document.createElement('div');
                        //Inserire 100 box all'interno della griglia      
                        grid.appendChild(box);
                        //Aggiungere classe al singolo box
                        box.classList.add('box-10');
                        // Inserire numero dentro il box
                        box.innerHTML += `<span>${(array[i])}</span>`;
                        // Al click del box cambia il colore della cella diventando blu
                        box.addEventListener('click', function(){
                                this.classList.add('clicked')
                        }
                       
                        )
                }

        }else if (select.value == "media"){
                for(let i = 0; i < 81; i++){ 
                        // Selezioniamo la griglia 9x9(81 cells)
                        let grid = document.getElementById('grid');
                        // Creazione del box interno alla griglia
                        let box = document.createElement('div');
                        //Inserire 100 box all'interno della griglia      
                        grid.appendChild(box);
                        //Aggiungere classe al singolo box
                        box.classList.add('box-9');
                        // Inserire numero dentro il box
                        box.innerHTML += `<span>${(array[i])}</span>`;
                        // Al click del box cambia il colore della cella diventando blu
                        box.addEventListener('click', function(){
                                this.classList.add('clicked')
                        }
                       
                        )
                }
        }else{
                for(let i = 0; i < 49; i++){ 
                        // Selezioniamo la griglia 7x7(49 cells)
                        let grid = document.getElementById('grid');
                        // Creazione del box interno alla griglia
                        let box = document.createElement('div');
                        //Inserire 100 box all'interno della griglia      
                        grid.appendChild(box);
                        //Aggiungere classe al singolo box
                        box.classList.add('box-7');
                        // Inserire numero dentro il box
                        box.innerHTML += `<span>${(array[i])}</span>`;
                        // Al click del box cambia il colore della cella diventando blu
                        box.addEventListener('click', function(){
                                this.classList.add('clicked')
                        }
                       
                        )
                }
        }
        
} )

function getRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()* (max - min + 1) + min);
}


    let array = [];

        for (y=0; y <= 100; y++){
        array.push(y);        
        }

        function shuffle(array){
                return array.sort(() => Math.random() - 0.5);
        }


        array = shuffle(array);