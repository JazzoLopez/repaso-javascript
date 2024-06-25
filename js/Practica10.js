//PRactica 10 Funciones anonaimas o flechas
const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 10: Funciones Anónimas o flecha (Function Expression) ");
CI('®Jazziel Rodríguez López 4A DSM');


C("%cFunciones flecha",style);
const saludo =()=>console.log("%cHola holaaaaa",style1); //No retorna nada, puede tener miles de parametros, si solo retorna uno no es necesario return
C("Saludando desde una función anonima...")
saludo();
C("He terminado de saludar.")


/*Funcion que recibe variables*/
const  saludarVariables = (nombre,hora = new Date())=>
{
    let horas = hora.getHours();
    

    if(nombre === undefined){
        return `No se definido el nombre de la persona a saludar, por favor verifica el llamado de la función`
    }
    else{

    if (horas >= 6 && horas < 12){
        return `Buenos dias, ${nombre}`;
    }
    else if(horas >=12 && horas<19){
        return `Buenas tardes, ${nombre}`;
    }
    else{
        return `Buenas noches, ${nombre}`;
        }
    }
}

C(`El resultado de la función es: ${saludarVariables("Jazziel")}`)
//QuerySelector() regresa un objeto individual
//QuerySelectorAll() retorna todos los que aparecen en objeto de tipo arreglo.
C(`El resultado de la función es: ${saludarVariables("Jazziel",new Date(`January 06, 2004 11:15:00`))}`)//Casos de pruebas
