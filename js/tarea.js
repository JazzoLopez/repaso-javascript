// const boton = document.getElementById("miBoton");
// boton.addEventListener("click", function() {
//   alert("Botón clickeado");
// });

// const elemento = document.getElementById("miElemento");
// elemento.addEventListener("mouseover" ,() =>{
//   console.log("Mouse sobre el elemento");
// });

// elemento.addEventListener("mouseout", function() {
//   console.log("Mouse fuera del elemento");
// });

// elemento.addEventListener("dblclick", () =>{
//   alert("Doble clic en el elemento");
// });

// document.addEventListener("keydown", function(event) {
//   console.log(`Tecla presionada: ${event.key}`);
// });

// document.addEventListener("keyup", function(event) {
//   console.log(`Tecla liberada: ${event.key}`);
// });

// const formulario = document.getElementById("miFormulario");
// formulario.addEventListener("submit", function(event) {
//   event.preventDefault();
//   console.log("Formulario enviado");
// });

// const input = document.getElementById("miInput");
// input.addEventListener("change", function() {
//   console.log(`Valor cambiado a: ${input.value}`);
// });

// input.addEventListener("focus", function() {
//   console.log("Input enfocado");
// });

// input.addEventListener("blur", function() {
//   console.log("Input desenfocado");
// });

// input.addEventListener("select", function() {
//   console.log("Texto seleccionado en el input");
// });

// window.addEventListener("resize", function() {
//   console.log("Tamaño de la ventana cambió");
// });

window.addEventListener("beforeunload", function(event) {
  event.preventDefault();
  event.returnValue = "";
});

window.addEventListener("orientationchange", function() {
  console.log("Orientación del dispositivo cambió");
});

elemento.addEventListener("dragstart", function() {
  console.log("Elemento empezó a arrastrarse");
});

elemento.addEventListener("dragend", function() {
  console.log("Elemento fue soltado");
});

const contenedor = document.getElementById("miContenedor");
contenedor.addEventListener("dragover", function(event) {
  event.preventDefault();
  console.log("Elemento arrastrado sobre el contenedor");
});

contenedor.addEventListener("drop", function(event) {
  event.preventDefault();
  console.log("Elemento soltado en el contenedor");
});

window.addEventListener("mousemove", function(event) {
  console.log(`Posición del mouse: X=${event.clientX}, Y=${event.clientY}`);
});

window.addEventListener("wheel", function(event) {
  console.log(`Rueda del mouse girada: Delta=${event.deltaY}`);
});
// Aca arriba son veinte
const imagen = document.getElementById("miImagen");
imagen.addEventListener("load", function() {
  console.log("Imagen completamente cargada");
});

imagen.addEventListener("error", function() {
  console.log("Error en la carga de la imagen");
});

const video = document.getElementById("miVideo");
video.addEventListener("play", function() {
  console.log("Video empezó a reproducirse");
});

video.addEventListener("ended", function() {
  console.log("Video terminó de reproducirse");
});

const socket = new WebSocket("ws://mi-servidor.com");
socket.addEventListener("open", function() {
  console.log("Conexión WebSocket establecida");
});

socket.addEventListener("message", function(event) {
  console.log(`Mensaje recibido: ${event.data}`);
});

socket.addEventListener("close", function() {
  console.log("Conexión WebSocket cerrada");
});
