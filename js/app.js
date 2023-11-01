let segundos = 0;
let minutos = 0;
let horas = 0;

let spanSegundos = document.getElementById("displaySegundos");
let spanMinutos = document.getElementById("displayMinutos");
let spanHoras = document.getElementById("displayHoras");

let btnIniciar = document.getElementById("btnIniciar");
let btnLap = document.getElementById("btnLap");
let btnDetener = document.getElementById("btnDetener");
let btnReiniciar = document.getElementById("btnReiniciar");

let listaUl = document.getElementById("listaUl");

let idIntervalo;
let intervaloFuncionando = false;

const displayCronometro = () => {
        segundos+=1;
        if(segundos == 60){
            segundos = 0;
            minutos++;
            if(minutos == 60){
                minutos = 0;
                horas++;
            }
        }
    };

const aplicarCambios = () => {
    spanSegundos.innerText = segundos;
    spanMinutos.innerText = minutos;
    spanHoras.innerText = horas;
};

const iniciarIntervalo = () => {
    idIntervalo = setInterval( ()=> {
        console.log("Funcionando");
        funcionesInicio();
    }, 1000)
    intervaloFuncionando = true;
    actualizarBtnReiniciar();
    btnDetener.disabled = false;
    btnIniciar.disabled = true;
    btnLap.disabled = false;
}

const detenerIntervalo = () => {
    clearInterval(idIntervalo);
    console.log("Intervalo detenido");
    intervaloFuncionando = false;
    actualizarBtnReiniciar()
    btnDetener.disabled = true;
    btnIniciar.disabled = false;
    btnLap.disabled = true;
}

const funcionesInicio = () => {
    displayCronometro();
    aplicarCambios();
}

const lapTiempo = () => {
    const tiempoLapeado = document.createElement("li");
    tiempoLapeado.textContent = `${horas}:${minutos}:${segundos}`;
    listaUl.appendChild(tiempoLapeado);
}

const actualizarBtnReiniciar = () => {
    if (intervaloFuncionando) {
    btnReiniciar.disabled = intervaloFuncionando;
    btnReiniciar.style.visibility = "hidden";
    } else {
        btnReiniciar.disabled = intervaloFuncionando;
        btnReiniciar.style.visibility = "visible";
    }
}

const limpiarDisplay = () => {
    segundos = 0;
    minutos = 0;
    horas = 0;
    aplicarCambios();
    btnReiniciar.disabled = intervaloFuncionando;
    btnReiniciar.style.visibility = "hidden";
}

const limpiarLaps = () => {
    listaUl.innerHTML = "";
}

const funcionesReiniciar = () => {
    limpiarDisplay();
    limpiarLaps();
}

btnIniciar.addEventListener("click", iniciarIntervalo);
btnDetener.addEventListener("click", detenerIntervalo);
btnLap.addEventListener("click", lapTiempo);
btnReiniciar.addEventListener("click", funcionesReiniciar);

