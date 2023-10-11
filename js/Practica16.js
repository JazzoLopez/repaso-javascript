//Imports y exports en javascript.

//Practica 15: -------
const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
CI('®Jazziel Rodríguez López 4A DSM');
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 16: Imports y exports en JavaScript");


function validar(usr, pass) {
    //Sera sustituida por una bd_conection
    let estatusLogin = false;
    if (usr === "Jazziel" && pass === "1234") {
        return estatusLogin = true;
    } else {
        return estatusLogin = false;
    }
}
export default validar;
