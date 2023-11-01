let segundos = 0;
let minutos = 0;
let horas = 0;

let spanSegundos = document.getElementById("displaySegundos");
let spanMinutos = document.getElementById("displayMinutos");
let spanHoras = document.getElementById("displayHoras");

let buttonIniciar = document.getElementById("btnIniciar");
let buttonLap = document.getElementById("btnLap");
let buttonDetener = document.getElementById("btnDetener");

let idIntervalo

let condicional = false

function displayCronometro() {
    window.setInterval(()=> {
        segundos+=1;
        if(segundos == 60){
            segundos = 0;
            minutos++;
            if(minutos == 60){
                minutos = 0;
                horas++;
            }
        }
    }, 1000)
};

function aplicarCambios() {window.setInterval(()=> {
    spanSegundos.innerText = segundos;
    spanMinutos.innerText = minutos;
    spanHoras.innerText = horas}, 1000)
}

function llamarDosFunciones() {
    displayCronometro();
    aplicarCambios();
}

buttonIniciar.addEventListener("click", llamarDosFunciones())



