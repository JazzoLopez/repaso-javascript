//PRactica 11 Otros metodos utiles para arreglos (Useful Array Methods)"
const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 11: Otros metodos utiles para arreglos (Useful Array Methods");
CI('®Jazziel Rodríguez López 4A DSM');

let tecnologias=["HTML","JavaScript","Python","MySql","Angular","Flutter","React","Django","Flask","Jira","Git","Swagger"];
let numeros=[1,5,34,-4,33.5,3,-0.34,100,-1,10000];
/* Some - Algunos, busca dentro de los elementos y retorna true o false de acuerdo al resultado si aparecen*/
CT(numeros);
let resultado = numeros.some((numeros) => numeros>0)
C("%c Buscando en el arreglo hay algún numero mayor a 0:",style1)
C(resultado);
let resultadoMalo = numeros.some((numeros) => numeros>10000)
C("%c Buscando en el arreglo hay algún numero mayor a 1000:",style1)
C(resultadoMalo)


C("%c FIND - Encontrar...", style1); //Este te devuelve el primero que encuentre que cumpla la condicion
resultado = numeros.find((numero) => numero>10000);
C("No aparecio :c")
C(resultado)
resultado = numeros.find((numero) => numero> 3);
C("Encontrado")
C(resultado)

C("%c EVERY - Para cada....", style1); //evalua a todos si y solo si
resultado = numeros.every((numero) => numero > -100);
C("1er busqueda")
C(resultado)
resultado = numeros.every((numero) => numero> 3);
C("2da busqueda")
C(resultado)
resultado = tecnologias.every((elemento) => typeof elemento == "string");
C("2da busqueda")
C(resultado)

