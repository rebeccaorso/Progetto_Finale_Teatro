const URL="http://localhost:9007/api/replica"

let selectData = document.querySelector("#selectDataBoheme")
let selectTraviata = document.querySelector("#selectDataTraviata");
let ticketTraviata = document.querySelector("#ticketTraviata");
let ticketBoheme = document.querySelector("#ticketBoheme");


let selectPoveri = document.querySelector("#selectDataPoveri");
let selectSogno = document.querySelector("#selectDataSogno");
let ticketPoveri = document.querySelector("#ticketPoveri");
let ticketSogno = document.querySelector("#ticketSogno");


let selectAppunti = document.querySelector("#selectDataAppunti");
let selectBirraio= document.querySelector("#selectDataBirraio");
let ticketAppunti = document.querySelector("#ticketAppunti");
let ticketBirraio = document.querySelector("#ticketBirraio");

let checkBox1 = document.querySelector('#check_1');
let checkBox2 = document.querySelector('#check_2');
let checkBox3 = document.querySelector('#check_3');
let checkBox4 = document.querySelector('#check_4');
let checkBox5 = document.querySelector('#check_5');
let checkBox6 = document.querySelector('#check_6');


let btn = document.querySelector("#btnAcquista");

fetch(URL) 
.then(data =>{return data.json()})
.then(response=>{
    console.log(response);

    creaSelect(response);  
})

/**
 * 
 * @param {Array} listaSpettacoli 
 */
function creaSelect(listaSpettacoli){  

    listaSpettacoli.forEach(spettacolo =>{

        let optSpettacolo = document.createElement("option");
        optSpettacolo.innerHTML = spettacolo.data_replica;

        optSpettacolo.setAttribute("value", spettacolo.data_replica);
        optSpettacolo.setAttribute("textContent", spettacolo.data_replica);
        
        if(spettacolo.cod_spettacolo == 1){ 
            
            if(selectAppunti != null){
                selectAppunti.appendChild(optSpettacolo);  
            }
        }else if(spettacolo.cod_spettacolo == 2){
            
            if(selectBirraio != null){
                selectBirraio.appendChild(optSpettacolo); 
            }             
        }else if(spettacolo.cod_spettacolo == 3) {
            
            if(selectTraviata != null){
                selectTraviata.appendChild(optSpettacolo);
            }
               
        }else if(spettacolo.cod_spettacolo == 4){
            if(selectData != null){
                selectData.appendChild(optSpettacolo);
            }           
        }else if(spettacolo.cod_spettacolo == 5){
           
            if(selectPoveri != null){
                selectPoveri.appendChild(optSpettacolo);
            }
        }else if(spettacolo.cod_spettacolo == 6){
                
                if(selectSogno != null){
                    selectSogno.appendChild(optSpettacolo);
            }
        }
    }  
)}  

    if(ticketAppunti != null){
        ticketAppunti.addEventListener('change', function() {
            const selectedValue = ticketAppunti.value;
            if (selectedValue !== '0') {
              
                checkBox1.checked = true;
                checkBox1.disabled = false;
            } else {
              
                checkBox1.checked = false;
                checkBox1.disabled = true;
            }
            
          })
        };
        
        if(ticketBirraio!= null){
          ticketBirraio.addEventListener('change', function() {
            const selectedValue = ticketBirraio.value;
            if (selectedValue !== '0') {
              
                checkBox2.checked = true;
                checkBox2.disabled = false;
            } else {
              
                checkBox2.checked = false;
                checkBox2.disabled = true;
            }
          })
        };
        
        if(ticketTraviata!= null){
        ticketTraviata.addEventListener('change', function() {
            const selectedValue = ticketTraviata.value;
            if (selectedValue !== '0') {
              
                checkBox3.checked = true;
                checkBox3.disabled = false;
            } else {
              
                checkBox3.checked = false;
                checkBox3.disabled = true;
            }
          })
        };
        
        if(ticketBoheme!= null){
          ticketBoheme.addEventListener('change', function() {
            const selectedValue = ticketBoheme.value;
            if (selectedValue !== '0') {
              
                checkBox4.checked = true;
                checkBox4.disabled = false;
            } else {
              
                checkBox4.checked = false;
                checkBox4.disabled = true;
            }
          })
        };
        
        if(ticketPoveri!= null){
          ticketPoveri.addEventListener('change', function() {
            const selectedValue = ticketPoveri.value;
            if (selectedValue !== '0') {
              
                checkBox5.checked = true;
                checkBox5.disabled = false;
            } else {
              
                checkBox5.checked = false;
                checkBox5.disabled = true;
            }
          })
        };
        if(ticketSogno!= null){
          ticketSogno.addEventListener('change', function() {
            const selectedValue = ticketSogno.value;
            if (selectedValue !== '0') {
              
                checkBox6.checked = true;
                checkBox6.disabled = false;
            } else {
              
                checkBox6.checked = false;
                checkBox6.disabled = true;
            }
          })
        };


const paginaCorrenteURL = window.location.href;


function salvaDati() { 

    let data = null;
    let biglietti = null;

    
if(paginaCorrenteURL.includes("teatroCarignano.html")){ 
    if(checkBox1.checked == true){
        data = selectAppunti.value;
        biglietti = ticketAppunti.value;
        const arrayBiglietto = [1, data, biglietti];
        localStorage.setItem("spettacolo", JSON.stringify(arrayBiglietto));  
    }


    if (checkBox2.checked == true) {
        data = selectBirraio.value;
        biglietti = ticketBirraio.value;
        const arrayBiglietto = [2, data, biglietti];
        localStorage.setItem("spettacolo", JSON.stringify(arrayBiglietto));  
    }
}
    

if(paginaCorrenteURL.includes("teatroRegio.html")){ 
    if (checkBox3.checked == true){
    data = selectTraviata.value;
    biglietti = ticketTraviata.value;
    const arrayBiglietto = [3, data, biglietti];
    localStorage.setItem("spettacolo", JSON.stringify(arrayBiglietto));  
} 
 if(checkBox4.checked == true){
    data = selectData.value;
    biglietti = ticketBoheme.value;
    const arrayBiglietto = [4, data, biglietti];
    localStorage.setItem("spettacolo", JSON.stringify(arrayBiglietto));  
} 
}

if(paginaCorrenteURL.includes("teatroAlfieri.html")){
if(checkBox5.checked == true){
    data = selectPoveri.value;
    biglietti = ticketPoveri.value;
    const arrayBiglietto = [5, data, biglietti];
    localStorage.setItem("spettacolo", JSON.stringify(arrayBiglietto));  
}
if (checkBox6.checked == true){
    data = selectSogno.value;
    biglietti = ticketSogno.value;
    const arrayBiglietto = [6, data, biglietti];
    localStorage.setItem("spettacolo", JSON.stringify(arrayBiglietto));  
}
}


window.open("carrello.html", "_blank");
}


btn.addEventListener("click", function() {
    
    if(localStorage.getItem("cliente") !== null){
        salvaDati();
    }else {
        window.open("form1.html", "_blank");
}
    }) ;


  // DARK MODE

    const defaultClass = 'default';

const defaultElement = document.querySelectorAll(`.${defaultClass}:not([class*=""])`);

    const BTNDARK = document.querySelector('#btnDark');
    const NAVDARK = document.querySelector('#navDark');
    BTNDARK.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            defaultElement.forEach(elemento => {
                elemento.classList.remove('default');
                elemento.classList.add('dark-mode');
                NAVDARK.classList.remove('bg-white');
                NAVDARK.classList.add('dark-mode');
            });
        } else {
            defaultElement.forEach(elemento => { 
                elemento.classList.remove('dark-mode');
                elemento.classList.add('default');
            });
            NAVDARK.classList.remove('dark-mode');
            NAVDARK.classList.add('bg-white');
        }
    });


