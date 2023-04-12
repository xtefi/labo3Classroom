function saludar() {
    alert("Holu");
}

let boton;

window.addEventListener("load", function () {
    boton = document.getElementById("btnSaludo");   //hago esto para esperar a que la pagina este fabricada
boton.addEventListener("click", function() {
    alert("Hola manejador de click");
}); //paso sin parentesis porque lo llamo tipo delegado

} )
//a la funcion handlerClick, como no la voy a llamar en ningun lado, le puedo sacar el nombre
//handlerClick y usarla igualmente, pasaria a ser una funcion anonima

//parametros actuales son los que paso, formales son los de la definicion
