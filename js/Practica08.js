/*Practica 08 Funciones en javascript*/
//Declaracion de variables para acortar escritura, no es muy buen practica
const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 08: Funciones en JavaScript");
CI('®Jazziel Rodríguez López 4A DSM');
C("%c1.- Utilizando FUNCTION DECLARATION - declaración formal", style)

suma(); //JavaScript revisa todas las funciones que existen y las carga primero
C("%c1.1-Sin parametros", style1);
function suma() {
    console.log(2 + 2);
}
suma();
C("%c1.2 Con parametros", style1);

//Reto de validacion en funciones reaizado por Alejandro Briones
function suma2(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Revisa los datos");
        return "Estas mal perro";
    }

    else {
        return num1 + num2;
    }
}
C(`El resultado de la suma es: ${suma2(2, 2)}`);
C(`El resultado de la suma es: ${suma2("e", 2)}`);

//En este caso de prueba si es necesario validar los datos antes de realizar la operacion suma
//Regla de negocio

C("%c1.3 .- Con parametros por Default", style1);
function multiplicar(a = 1, b = 2) { //Con un valor inicial porque si no saldria NaN
    return (a * b)
}
C(`El resultado de la multiplicación es: ${multiplicar(5, 3)}`);
C(`El resultado de la multiplicación es: ${multiplicar(5)}`);

function saludarHora(persona, hora = new Date()) {
    const horas = hora.getHours(), minutos = hora.getMinutes(), segundos = hora.getSeconds();
    let saludo;
    C(`La hora actual es: ${horas}:${minutos}:${segundos}`);

    if (horas >= 6 && horas < 12) {
        saludo = "Buenos dias";
    }
    else if (horas >= 12 && horas < 19) {
        saludo = "Buenas tardes";
    }
    else {
        saludo = "Buenas noches"
    }
    return [persona, hora, `${saludo}, ${persona}`];
}

let saludo = saludarHora("elwoddy");
C(saludo);
let [, , saludoweb] = saludo;
C(saludo)


