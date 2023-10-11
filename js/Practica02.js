/*Practica 2: Declaracion de variables */
console.info('®Jazziel Rodríguez López 4A DSM');
const style = 'letter-spacing:5px; font-family: Jetbrains Mono; background-color: rgb(119, 255, 255); font-size:18px; border:2px solid black;  border-radius:5px; justify-content: center; text-align: center; height: 40px; text-shadow: 1px 0.5px rgb(0, 51, 11); box-shadow: 4px 4px 4px rgb(0, 0, 0);' ; //Declaracion de estilos para la consola
/*************************************************/
console.log("********************************************************************");
console.warn("👨🏻‍💻 Practica:02 Declaración de variables 👨🏻‍💻");
console.log("********************************************************************");
console.log("%c a) Declaración de variables con var", style);
var nombre; //Declaaramos una variable pero no le asignamos un valor
console.log(nombre); //Undefined, lo creamos pero no tiene un valor asignado
var nombre = "Jazziel";//Declaramos variable la cual automaticamente ya la identifica como string
console.log("Hola " + nombre + "¡!");//imprimimos en consola
console.log(typeof (nombre)); //Mostramos el tipo de dato
nombre = 19;
console.log(nombre);

console.log("%c b) Declaración de variables con let", style)
//funcionan igual que las variables pero en estas podemos cambiar el tipo de dato
let colorFav = "azul";
console.log(`tu color favorito es ${colorFav}`); //una buena practica para mostrar datos y variables haciendo concatenaciones
//de mejor manera

//mutabilidad
colorFav = 174; //Hacemos cambios de valor en una variable
console.log(colorFav);
console.log(typeof (colorFav)); //Mostramos que modificamos el tipo de dato
//Las variables constantes como sabemos es ahora un espacio 
//ya definido el cual no podemos cambiarlo ni dejarlo sin inicializarlo 
console.log("%c c) Declaracion de variables con const", style);
const cancionFav = "Hayloft II";

console.log(`Tu cancion favorita es ${cancionFav}`);
console.log(typeof (cancionFav));

const persona = { //Declaración de un objeto
  nombre: "Jazziel",
  edad: 19
};

console.table(persona);
console.log(`Es un tipo de dato: ${typeof persona}`);
console.log("%c d) Mutando un objeto", style);
console.warn("Objeto original");
console.table(persona);
persona.nombre = "change";
persona.edad = 21;
console.warn("Objeto modificado");
console.table(persona);
