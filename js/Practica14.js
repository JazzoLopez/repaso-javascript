//Practica 14: Eventos del DOM.
const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
CI('®Jazziel Rodríguez López 4A DSM');
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 14: Eventos del DOM (Document Object Model)");
C("%c1 Eventos",style)
const heading = document.querySelector("h2");
const boton = document.querySelector("#button");
heading.addEventListener( 'click' ,() => C("Le diste click al heading..."));
boton.addEventListener( 'click' ,() => ("Le diste click al boton..."));
/*Function declaration, function expresion and arrow function*/
//Reto cuando demos clic mandamos funcion saluda y al dar click

//Function llamada por evento click

function saluda(){
    let hora=new Date()
    let horas = hora.getHours();

    if (horas >= 6 && horas < 12){
       
        console.log("Buenos dias");
        return `Buenos dias`;
    }
    else if(horas >=12 && horas<19){
        console.log("Buenas tardes");
        return `Buenas tardes`;
    }
    else{
        console.log("Buenas noches");
        return `Buenas noches`;
        }
    }





const raiz = function(a){
      return Math.sqrt(a);
    }

    
const anclas = document.querySelectorAll("a")
anclas[1].addEventListener( 'click' ,() => saluda());
anclas[4].addEventListener( 'click' ,() => console.log(raiz(81)));8



// anclas[1].addEventListener("dblclick", function() {
//     alert("Doble clic en el elemento");
//   });
  
//   document.addEventListener("keydown", function(event) {
//     console.log(`Tecla presionada: ${event.key}`);
//   });

    
const ele = document.querySelector('h1');
C(ele);

ele.addEventListener('click',()=>{
  C("Le diste click al h1")
});


C("%c 2. Agregando un evento -Submit",style);
const formulario = document.querySelector("#formulario");
C(formulario)

formulario.addEventListener(('submit'), e =>
{
    e.preventDefault()
    console.log("Enviaste los datos del formulario");
    const nombreUsuario = document.querySelector("#nombre");
    const contraseñaUsuario = document.querySelector("#password");
    console.log(`El usuario que esta intentando ingresar es: ${nombreUsuario.value}`);
    console.log(`El password ingresado es:  ${contraseñaUsuario.value}`);
if(nombreUsuario.value === '' || contraseñaUsuario.value === ''){
    C("Los datos no fueron llenados en su totalidad, verifica");
    alert("Llena los campos")
}
else{
    C("Datos registrados correctamente :)")
}
});




//Tarea 3 ejemplos funcionales personales
document.addEventListener("keydown", function(event) { //Tecla presionada
    console.log(`Tecla presionada: ${event.key}`);
  });
  
document.addEventListener("keyup", function(event) { //Soltamos la tecla
    console.log(`Tecla liberada: ${event.key}`);
  });

  window.addEventListener("mousemove", function(event) {  //Ubicacion del puntero del mouse
    console.log(`Posición del mouse: X=${event.clientX}, Y=${event.clientY}`);
  });

  window.addEventListener("wheel", function(event) { //Cuando hacemos scroll
    console.log(`Rueda del mouse girada: Delta=${event.deltaY}`);
  });
  window.addEventListener("beforeunload", function(event) {//cuando intentas salir de la pagina
    event.preventDefault();
    event.returnValue = "";
  });