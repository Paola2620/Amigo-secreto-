//Mis variables
let nombres =[];
let lista;
let resultado;

//Primera función 
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value; 
    
    if (nombreAmigo.trim() ==='') {
        alert('Hola, ingresa un nombre'); 
        return;  
    }

nombres.push(nombreAmigo);
lista = document.getElementById('listaAmigos');
lista.innerHTML=nombres.join(', ');

document.getElementById('amigo').value = '';
}

//Segunda función
function sortearAmigo() {
    if (nombres.lenght <2) {
        alert('Se requieren como mínimo dos nombres para sortear');
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * nombres.length);
    let nombreGanador = nombres[numeroAleatorio];

    resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${nombreGanador}`;
}




