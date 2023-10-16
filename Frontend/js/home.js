const BTNDARK = document.querySelector('#btnDark');
const NAVDARK = document.querySelector('#navDark');

const ticketNumberInput = document.querySelector('#ticketNumber');

const defaultClass = 'default';

const defaultElement = document.querySelectorAll(`.${defaultClass}:not([class*=""])`);

const currentPageURL = window.location.href;

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

// SCRIPT FORM

if (currentPageURL.includes("form1.html")) {
    const BTNSUBMIT = document.querySelector('#btnSubmit');
    const logged = document.querySelector('#logged');
    const emailCliente = document.querySelector('#emailCliente');
    const codiceCliente = document.querySelector('#codiceCliente');
    const ricordaPass = document.querySelector('#ricordaPass');
    const form = document.querySelector('#form');
    
    document.addEventListener('DOMContentLoaded', checkLoginStatus);
    
    BTNSUBMIT.addEventListener('click', login);
    
    function login(){
        fetch('http://localhost:9007/api/cliente')
        .then(data => {
            return data.json();
        })
        .then(clienti => {
                console.log(clienti);
                const email = emailCliente.value;
                const codice = codiceCliente.value;
                const clienteTrovato = clienti.find(cliente => cliente.email == email && cliente.cod_cliente == codice);
                if(clienteTrovato){
                    console.log(clienteTrovato);
                    renderTo(clienteTrovato);
                }else{
                    alert("Inserire indirizzo email e codice cliente validi");
                    form.reset();
                }
            });
            }
    
    function logOut() {
        logged.classList.remove('logOn');
        form.classList.remove('hiddenForm');
        localStorage.removeItem('cliente');
    }
    
    function renderTo(cliente) {
        form.classList.add('hiddenForm')
        logged.classList.add('logOn');
        logged.innerHTML = `<h3>Bentornato, ${cliente.nome}.</h3> <br>
        <h4>Il tuo indirizzo email: ${cliente.email}</h4>
        <button onclick="logOut()">Log out</button>`;
        if(ricordaPass.checked == true){
            localStorage.setItem('cliente', JSON.stringify(cliente));
        }
        
    }
    
    function checkLoginStatus() {
        const cliente = JSON.parse(localStorage.getItem('cliente'));
        if (cliente) {
            renderTo(cliente);
        }
    }
}
// function validateNumberTicket(event){
//     const ticketNumber = event.target.value;
//     if(ticketNumber === ""){
//         return;
//     }
//     if(ticketNumber < 1) {
//         alert('Selezionare almeno un biglietto');
//         ticketNumberInput.value = "";
//     }else if(ticketNumber > 5){
//         alert('Puoi acquistare massimo 5 biglietti');
//         ticketNumberInput.value = 5;
//     }
// }

// ticketNumberInput.addEventListener('change', validateNumberTicket);
// ticketNumberInput.addEventListener('keyup', validateNumberTicket);