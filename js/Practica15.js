//Practica 15: -------


import andale from './Practica16.js';
const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
CI('®Jazziel Rodríguez López 4A DSM');
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
C("%c Practica 15: Agregando nuevos elementos al DOM",style);
    
const ele = document.querySelector('h1');
C(ele);




ele.addEventListener('click',()=>{
  C("Le diste click al h1")
});


 

formulario.addEventListener(('submit'), e =>
{
    e.preventDefault()
    console.log("Enviaste los datos del formulario");

    const nombreUsuario = document.querySelector("#nombre");
    const passwordUsuario = document.querySelector("#password");
    console.log(`El usuario que esta intentando ingresar es: ${nombreUsuario.value}`);
    console.log(`El password ingresado es:${passwordUsuario.value}`);

    const alerta = document.createElement("DIV");//Creando <div></div>
alerta.classList.add("alerta")
const hayAlerta =document.querySelector(".alerta")
if(hayAlerta)
hayAlerta.remove()

if(nombreUsuario.value === '' || passwordUsuario.value === ''){
    alerta.textContent= "Los datos no fueron llenados en su totalidad, verifica";
    alerta.classList.add("Error")
}
else{
    alerta.textContent="Datos registrados correctamente";
    alerta.classList.add("Exito");
}
formulario.appendChild(alerta);     


const si_login = andale(nombreUsuario.value,passwordUsuario.value);

console.log(si_login);

si_login? console.log("Ingresaste chavo"):console.log("fallido amigo mio ");
});



    
//Reto de mensajes de error

//importaremos

