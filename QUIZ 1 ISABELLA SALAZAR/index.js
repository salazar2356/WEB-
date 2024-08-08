//selecciono los elementos del documento

const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const input = document.querySelectorAll(".input");
const cualquiera = document.querySelectorAll(".cualquiera");


//limpiar input

window.onload = inicio;

function inicio(){
    document.getElementById("limpiar")?.addEventListener('click',limpiar);
    document.getElementById("random")?.addEventListener('click',cambiar)

}

function limpiar(){
    var activo = document.activeElement.id;
    activo.innerHTML = "";
}

//metodo math floor para cambiar de palabra

const palabras = ["flower", "power", "women"]


//Función que ejecuta la palabra al azar
function cambiar(){
    const randomw = palabras[Math.floor(Math.random()*palabras.length)] 
    pantalla.textContent = randomw;
}





// Event listener para el input de palabra
//document.getElementById("word").addEventListener("input", verificar);

