const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 12: Sentencias de control ");
CI('®Jazziel Rodríguez López 4A DSM');
C("%c1. Si (if)",style)

let mayorEdad=true;

if(mayorEdad == true){
    console.log("Es mayor de edad.")
}

C("%c2. Si además, (IF-ELSE)",style);

if(mayorEdad == true){
    C("Mayor de edad.");
}
else
    console.log("Es menor de edad.");

    C("%c3. Sí, además (IF - ELSE - IF)- Anidados",style);

    let person = {"nombre": "Marco",
                    "edad":18,
                    "pais":"MX",
                    "Mayor de edad":null
                }
if(person.pais == "MX")
    if(person.edad >=18)
    person.mayorEdad=true;
    else
    person.mayorEdad=false;
else (person.pais == "US")
    if(person.edad >=21)
    person.mayorEdad=true;
    else
    person.mayorEdad=false;


console.log("Los datos del objeto son:")
console.table(person);

console.log("%c4 Operador ternario", style)
console.log("Verificando la mayoría de edad usando el operador ternario");

//* Validación? si es correcto; si no es correcto

mayorEdad?console.log("Es mayor de edad."):console.log("No es mayor de edad")

person.pais=="MX"?person.edad>=18?person.mayorEdad=true: person.mayorEdad=false:person.pais=="USA"?person.edad >=21?person.mayorEdad=true:person.mayorEdad=false:undefined

console.log("Los datos del objeto son:")
console.table(person);

/*OPERADORES DE IGUALDAD 

    = Asignar el valor a una variable
    == Comparar igualdad de valores
    === Comparar igualdad y tipo de dato de valores

*/

console.log(`Creando una variable a y asignándole un valor numérico = 2`)
let a = 2;
console.log(`Creando una variable b y asignándole un valor numérico = 2.0`)
let b = 2.0;
console.log(`Creando una variable c y asignándole un valor string = 2`)
let c = "2";
console.log(`Ya que están inicializadas empezamos a comparar:`)
console.log(`Es a igual b: ${a == b}`)
console.log(`Es a igual c: ${a == c}`)
console.log(`Es a estricamente igual c? ${a === c}`)

