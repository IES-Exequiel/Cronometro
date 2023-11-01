let tiempo = {
    horas: 0,
    minutos: 0,
    segundos: 0
};

let displayTiempo = document.getElementById("displayTiempo");

let btnIniciar = document.getElementById("btnIniciar");
let btnLap = document.getElementById("btnLap");
let btnDetener = document.getElementById("btnDetener");
let btnReiniciar = document.getElementById("btnReiniciar");

let listaUl = document.getElementById("listaUl");

let idIntervalo;
let intervaloFuncionando = false;

const displayCronometro = () => {
        tiempo.segundos+=1;
        if(tiempo.segundos == 60){
            tiempo.segundos = 0;
            tiempo.minutos++;
            if(tiempo.minutos == 60){
                tiempo.minutos = 0;
                tiempo.horas++;
            }
        }
    };

const actualizarDisplay = () => {
    displayTiempo.innerText = `${tiempo.horas}:${tiempo.minutos}:${tiempo.segundos}`;
};

const iniciarIntervalo = () => {
    idIntervalo = setInterval( ()=> {
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
    intervaloFuncionando = false;
    actualizarBtnReiniciar()
    btnDetener.disabled = true;
    btnIniciar.disabled = false;
    btnLap.disabled = true;
}

const funcionesInicio = () => {
    displayCronometro();
    actualizarDisplay();
}

const lapTiempo = () => {
    const tiempoLapeado = document.createElement("li");
    tiempoLapeado.textContent = `${tiempo.horas}:${tiempo.minutos}:${tiempo.segundos}`;
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
    tiempo.segundos = 0;
    tiempo.minutos = 0;
    tiempo.horas = 0;
    actualizarDisplay();
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

