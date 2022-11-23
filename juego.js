//En este programa vamos a evalura si una maquina le gana a un humano en piedra papel o tijera
//Necesitamos evalor espacios de memoria tanto para evaluar las respuestas manuales que introduciremos y otro espacio que calcule aleatoriamente el valor de la maquina.
//1. Piedra, 2. Papel, 3. Tijeras
//Reglas del juego:
// piedra le gana a tijeras pero pierde con papel
// papel le gana a piedra pero pierde con tijeras
// tijeras le gana a papel pero pierde con piedra
// empate cuando se elige la misma opcion

const opciones = [1, 2, 3];

function empiezaJuego(){

    var respuestaHumana = prompt('Introduce 1 para Piedra, 2 para Papel, 3 para Tijeras');
    var respuestaCPU = Math.floor(Math.random()*opciones.length);

    if (respuestaHumana == opciones[0] || respuestaHumana == opciones[1] || respuestaHumana == opciones[2]){
       if(respuestaHumana == opciones[0] && respuestaCPU == opciones[2]){
           console.log("Has elegido piedra y la CPU tijeras, TU GANAS");
        partidaNueva();
        return;}
   
       if(respuestaHumana == opciones[0] && respuestaCPU == opciones[1]){
           console.log("Has elegido piedra pero la CPU papel, TU PIERDES");
        partidaNueva();
        return;}
   
       if(respuestaHumana == opciones[1] && respuestaCPU == opciones[2]){
           console.log("Has elegido papel y la CPU tijeras, TU PIERDES");
        partidaNueva();
        return;}
   
       if(respuestaHumana == opciones[1] && respuestaCPU == opciones[0]){
           console.log("Has elegido papel y la CPU piedra, TU GANAS");
        partidaNueva();
        return;}
   
       if(respuestaHumana == opciones[2] && respuestaCPU == opciones[0]){
           console.log("Has elegido tijeras pero la CPU piedra, TU PIERDES");
        partidaNueva();
        return;}
   
       if(respuestaHumana == opciones[2] && respuestaCPU == opciones[1]){
           console.log("Has elegido tijeras y la CPU papel, TU GANAS");
        partidaNueva();
        return;}
   
       if(respuestaHumana==respuestaCPU){
           console.log("Empate por favor elige otra opcion para desempatar");}
           empiezaJuego();
       }
   
       else {
   
           console.log("Has introducido una respuesta incorrecta, por favor selecciona 1 para Piedra, 2 para Papel, 3 para Tijeras");
           empiezaJuego();
       }
}
function partidaNueva(){
    var nuevaPartida = prompt('¿Desea jugar una nueva partida? S/N').toUpperCase();
    
    if (nuevaPartida == "S"){
        empiezaJuego();
    }

    if(nuevaPartida == "N"){
        return;
    }

    else{
        console.log("Has escrito una opcion incorrecta, por favor escribe S/N");
        nuevaPartida = prompt("Opcion incorrecta. Escribe S/N con una letra").toUpperCase();
        if(nuevaPartida !="S" || nuevaPartida !="N"){
            partidaNueva();
        }
    }
}
empiezaJuego();
