const URL = "http://localhost:9007/api/spettacolo"
const URL3 = "http://localhost:9007/api/replica"
const URL2 = "http://localhost:9007/api/biglietto"
let demo = document.querySelector("#demo")
let btn = document.querySelector("#btnAcquista");
let demo2 = document.querySelector("#demo2");
let demo3 = document.querySelector("#demo3");

let arrayRecuperato;

fetch(URL) // recupero array in local storage e confronto dati con DB
.then(data =>{return data.json()})
.then(spettacoli=>{
    console.log(spettacoli);

    fetch(URL3)
    .then(data =>{return data.json()})
      .then(repliche=>{
    console.log(repliche);

    let arraySalvato = localStorage.getItem("spettacolo"); 
    if (arraySalvato) {
      arrayRecuperato = JSON.parse(arraySalvato);
      console.log("array salvato "+ arrayRecuperato);
    } else {
      console.log("Nessun array trovato nel localStorage.");
    }
  
    let dataReplica = arrayRecuperato[1];
    console.log("data replica "+ dataReplica);


    let dataRep = repliche.find(replica => replica.data_replica == dataReplica);
    console.log(dataRep);
    let codiceReplica;
    if(dataRep){
       codiceReplica = dataRep.cod_replica;

      console.log("codice replica " + codiceReplica);
    }
    
  console.log(dataReplica)

  const codiceSpettacolo = arrayRecuperato[0]; //recupero cod_spettacolo dall'array salvato
  console.log(codiceSpettacolo);
  const codiceTrovato = spettacoli.filter(spettacoli => spettacoli.cod_spettacolo == codiceSpettacolo);
  console.log(codiceTrovato);  
  
  let biglietto;
 
  codiceTrovato.forEach(spettacolo =>{  // stampa HTML dati acquisto nel carrello
    const quantitaBiglietti = arrayRecuperato[2];
    const prezzoTotale = spettacolo.prezzo * quantitaBiglietti;

    demo.innerHTML += `
    <div class="col-md-2 d-flex justify-content-center">
    <div>
      <p class="small text-muted mb-4 pb-2">Titolo</p>
      <p class="lead fw-normal mb-0">${spettacolo.titolo}</p>
    </div>
  </div>
  <div class="col-md-2 d-flex justify-content-center">
    <div>
      <p class="small text-muted mb-4 pb-2">Autore</p>
      <p class="lead fw-normal mb-0">${spettacolo.autore}</p>
    </div>
  </div>
  <div class="col-md-2 d-flex justify-content-center">
    <div>
      <p class="small text-muted mb-4 pb-2">Regista</p>
      <p class="lead fw-normal mb-0">${spettacolo.regista}</p>
    </div>
  </div>
  <div class="col-md-2 d-flex justify-content-center">
    <div>
      <p class="small text-muted mb-4 pb-2">Prezzo</p>
      <p class="lead fw-normal mb-0">${spettacolo.prezzo},00€</p>
    </div>
  </div>
  <div class="col-md-2 d-flex justify-content-center">
    <div>
      <p class="small text-muted mb-4 pb-2">Quantità</p>
      <p class="lead fw-normal mb-0">${arrayRecuperato[2]}</p>
    </div>
  </div>
  <div class="col-md-2 d-flex justify-content-center">
  <div>
    <p class="small text-muted mb-4 pb-2">Data Spettacolo</p>
    <p class="lead fw-normal mb-0">${arrayRecuperato[1]}</p>
  </div>
</div>
    `
    demo2.innerHTML += `
    
                  <p class="mb-0 me-5 d-flex align-items-center float-end">
                    <span class="small text-muted me-2">Prezzo Totale:</span> 
                    <span  class="lead fw-normal">${prezzoTotale},00€ </span>
                  </p>
             
               `


                const inputCodiceSconto = document.getElementById('codiceSconto');

inputCodiceSconto.addEventListener('keypress', function(event) { 
  if (event.key === 'Enter') {
    applicaSconto();
  }
});

function applicaSconto() { // applica sconto al prezzo totale
  const codiceScontoInserito = inputCodiceSconto.value.trim().toLowerCase();

  if (codiceScontoInserito === 'carlotta') {
    
    let prezzoIngresso = prezzoTotale; 
    const sconto = 0.15; 
    const prezzoScontato = prezzoIngresso - (prezzoIngresso * sconto);

    console.log(prezzoScontato)

  demo3.innerHTML += `
                  <p class="mb-0 me-5 d-flex align-items-center float-end">
                    <span class="small text-muted me-2">Prezzo Scontato:</span> 
                    <span  class="lead fw-normal">${prezzoScontato}€ </span>
                  </p>
  `
}

  }

btn.addEventListener("click", function() {
  inviaDati();
})

function inviaDati(){  // funzione invia dati al DB
  
  let clienteSalvato = localStorage.getItem("cliente");
  let codiceCliente;
  if(clienteSalvato){
    let clienteRecuperato = JSON.parse(clienteSalvato);
    codiceCliente = clienteRecuperato.cod_cliente;
  }
  // const codUtente = clienti.find(cliente => cliente.cod_cliente == codiceUtente);

// codiceTrovato.forEach(elemento =>{
  let metodoPagamento;
  let bonifico = document.querySelector("#bonifico").checked;
  let cartaCredito = document.querySelector("#cartaCredito").checked;

  if(bonifico){
    metodoPagamento = "bonifico";
  }else{
  metodoPagamento = "Carta di Credito";
  }
  console.log(metodoPagamento);

  const dataAttuale = new Date();
  biglietto = {
   cod_cliente: codiceCliente,
   cod_replica: codiceReplica,
   data_ora: dataAttuale.toISOString(),
   tipo_pagamento: metodoPagamento,
   quantita: arrayRecuperato[2],
     data: arrayRecuperato[1],
     titolo: spettacolo.titolo

 };

           console.log(biglietto);
           fetch(URL2, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(biglietto)
          })
          .then(response => response.json())
          .then(message => {
            console.log(message); 
          })
          .catch(error => {
            console.error("Error:", error);
          });

          window.open("form1.html", "_blank");        
           }       
          })

})
})

 //  dark mode

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
 
 
 