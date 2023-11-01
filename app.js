[33mcommit fc15131427578cf473325cf5074765c77f2ade50[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: ExequielA <alaniz.exequielalejandro@iesconcepcion.edu.ar>
Date:   Wed Nov 1 15:54:53 2023 -0300

    optimized da code replacing the spans and stuff...

[1mdiff --git a/js/app.js b/js/app.js[m
[1mindex b649adc..087a127 100644[m
[1m--- a/js/app.js[m
[1m+++ b/js/app.js[m
[36m@@ -1,10 +1,10 @@[m
[31m-let segundos = 0;[m
[31m-let minutos = 0;[m
[31m-let horas = 0;[m
[32m+[m[32mlet tiempo = {[m
[32m+[m[32m    horas: 0,[m
[32m+[m[32m    minutos: 0,[m
[32m+[m[32m    segundos: 0[m
[32m+[m[32m};[m
 [m
[31m-let spanSegundos = document.getElementById("displaySegundos");[m
[31m-let spanMinutos = document.getElementById("displayMinutos");[m
[31m-let spanHoras = document.getElementById("displayHoras");[m
[32m+[m[32mlet displayTiempo = document.getElementById("displayTiempo");[m
 [m
 let btnIniciar = document.getElementById("btnIniciar");[m
 let btnLap = document.getElementById("btnLap");[m
[36m@@ -17,21 +17,19 @@[m [mlet idIntervalo;[m
 let intervaloFuncionando = false;[m
 [m
 const displayCronometro = () => {[m
[31m-        segundos+=1;[m
[31m-        if(segundos == 60){[m
[31m-            segundos = 0;[m
[31m-            minutos++;[m
[31m-            if(minutos == 60){[m
[31m-                minutos = 0;[m
[31m-                horas++;[m
[32m+[m[32m        tiempo.segundos+=1;[m
[32m+[m[32m        if(tiempo.segundos == 60){[m
[32m+[m[32m            tiempo.segundos = 0;[m
[32m+[m[32m            tiempo.minutos++;[m
[32m+[m[32m            if(tiempo.minutos == 60){[m
[32m+[m[32m                tiempo.minutos = 0;[m
[32m+[m[32m                tiempo.horas++;[m
             }[m
         }[m
     };[m
 [m
[31m-const aplicarCambios = () => {[m
[31m-    spanSegundos.innerText = segundos;[m
[31m-    spanMinutos.innerText = minutos;[m
[31m-    spanHoras.innerText = horas;[m
[32m+[m[32mconst actualizarDisplay = () => {[m
[32m+[m[32m    displayTiempo.innerText = `${tiempo.horas}:${tiempo.minutos}:${tiempo.segundos}`;[m
 };[m
 [m
 const iniciarIntervalo = () => {[m
[36m@@ -58,12 +56,12 @@[m [mconst detenerIntervalo = () => {[m
 [m
 const funcionesInicio = () => {[m
     displayCronometro();[m
[31m-    aplicarCambios();[m
[32m+[m[32m    actualizarDisplay();[m
 }[m
 [m
 const lapTiempo = () => {[m
     const tiempoLapeado = document.createElement("li");[m
[31m-    tiempoLapeado.textContent = `${horas}:${minutos}:${segundos}`;[m
[32m+[m[32m    tiempoLapeado.textContent = `${tiempo.horas}:${tiempo.minutos}:${tiempo.segundos}`;[m
     listaUl.appendChild(tiempoLapeado);[m
 }[m
 [m
[36m@@ -78,10 +76,10 @@[m [mconst actualizarBtnReiniciar = () => {[m
 }[m
 [m
 const limpiarDisplay = () => {[m
[31m-    segundos = 0;[m
[31m-    minutos = 0;[m
[31m-    horas = 0;[m
[31m-    aplicarCambios();[m
[32m+[m[32m    tiempo.segundos = 0;[m
[32m+[m[32m    tiempo.minutos = 0;[m
[32m+[m[32m    tiempo.horas = 0;[m
[32m+[m[32m    actualizarDisplay();[m
     btnReiniciar.disabled = intervaloFuncionando;[m
     btnReiniciar.style.visibility = "hidden";[m
 }[m
