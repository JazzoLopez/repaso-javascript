/*Practica 06 Arreglos en JavaScript(Array)*/
const C = console.log.bind(console);
const CE=console.error.bind(console);//Declaramos una funcion de prototipadon para acortarlo a solo c
const CW=console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
const style1 ='letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar

const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 04: Objetos en JavaScript");
console.info('®Jazziel Rodríguez López 4A DSM');

C("%c1.- Declaracion de un arreglo (Array)",style);
const meses= ['Febrero','Marzo','Abril','Mayo','Junio','Julio','Perico','Septiembre','Octubre','Noviembre'];
C(meses);
CT(meses);
C(typeof meses);


CE("Construccion de un arreglo mixto");
const mixto= ["String",10,-58.2,false,Symbol(45),'a', -0.00000001,true,{prop1: "Valor", prop: "2"}];
C(mixto);
CT(mixto);
C(typeof mixto);

let matrix =[[1,2,3],["a","b","c","d"]];
C(matrix);
CT(matrix);
CT(matrix[1][2])
C("%c2.- Recuperar el valor de los elementos de un arreglo",style)
C(`El mes en la posicion 8 ${meses[8]}, que en realidad es el noveno mes, por que en arreglos la posición siempre
sera n-1`);
C(`Accediendo al elemento en la posición 12 del arreglo mixto: ${mixto[12]}`);

//Métodos que modifican el Arreglo original

C("%c3.- Funciones en un arreglo (Array Methods)",style);
C("Para saber el total de elementos de un arreglo utilizaremos el método de :LENGTH");
C(`El arreglo de meses tiene: ${meses.length} elementos`);
C(`El arreglo mixto tiene: ${mixto.length} elementos`);
C("Para agregar un nuevo elemento al arreglo en la posicion final usaremos el método: PUSH");
meses.push('Gato');
CT(meses);
C("Para agregar un elemento en la posición inicial usaremos el metodo: UNNSHIFT")
meses.unshift('Perro');
CT(meses);

C("Para eliminar el elemento en la ultima posición se utiliza el método: POP");
C(`Elimminando el elemmento de la última posición: ${meses[meses.length-1]}`);
meses.pop();//Eliminamos el incorrecto
meses.push('Diciembre');
C("El arreglo actual es: ")
CT(meses)

C("Para eliminar el elemento en la primer posición se utiliza el método: SHIFT");
C(`Elimminando el elemmento de la última posición: ${meses[0]}`);
meses.shift();//Eliminamos el incorrecto
meses.unshift('Enero');
C("El arreglo actual es: ");
CT(meses);
C("Dividir el arreglo original, sacar los primeros 3 elementos");
//meses.splice(3); Si no mandamos dos parametros elimina los restantes a su tamaño
meses.splice(7,1)
//Como insertar un elemento en una posicion indeterminada Tarea investigacion e implementeacion del metodo de insersion de valores en un arreglo en una posicion
CT(meses);

C("%c4.- Métodos para manipulacion de Arreglos, que no mutan al arreglo original",style);
let signosZodiacales = ["Aries","Tauro","Géminis","Cáncer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"]
C(`El total de signos zodiacales es: ${signosZodiacales.length}`);

//Tarea
console.warn("Mostramos el arreglo principal");
let miArreglo=[1,2,3,4,5];
console.table(miArreglo);
miArreglo.splice(2,0,7);
console.warn("Vemos que agregamos el 7 en la posicion 2")
console.table(miArreglo);
miArreglo.splice(17,0,true);
console.table("Intentamos insertar el numero 1 en la posicion 17 pero...")
console.table(miArreglo);
console.warn("Se inserto en pa posicion 6");
miArreglo.splice(-2,0,"Cambiado");
miArreglo[1000]="pepe"
console.table(miArreglo);
console.warn("Vemos que si intentamos insertar un dato en una posicion negativa lo que hare es eliminar desde el numero final, si es 7 y ponemos -2 bajara 2 posiciones")
C("%c5.- Desestructuración de Arreglos",style);
C(`El total de signos zodiacales es: ${signosZodiacales.length}`);
let [signo0,signo1,signo2,signo4,signo5,signo6,signo7]=signosZodiacales;//Para desestructurar un arreglo utilizamos brackets
C(`El signo zodiacal en la posición [0] es: ${signo0}`);
let [signo_0,,,,,,,signo_7]=signosZodiacales;//Para desestructurar un arreglo utilizamos brackets
C(`El signo zodiacal en la posición [7] es: ${signo_7}`);

("%c6.- Métodos de Arreglos que crean un nuevo arreglo, para no modificar el original",style)
C("El arreglo original es",signosZodiacales);
C("%c6.1- Filtrer",style1)
let result = signosZodiacales.filter((signosZodiacales) => signosZodiacales.length>6);
let vista=signosZodiacales.filter((signosZodiacales) =>signosZodiacales.includes("a"));//reto fltrado 
C("END FILTER...")
C("El resultado de filtrar por signos con mas de 6 letras de longitud",result)//Persistencia de datos
C("Este filtro por letra");
C(vista);
C("%c6.2-Map",style1);
const numeros=[1,2,3,4,5];
C("Arreglo sin modificaciones")
C(numeros);
const doubles= numeros.map(numeros=>numeros*2)
C("Arreglo ya modificado, duplicamos los elementos")
C(doubles);

let palabras=["carro","comida","leon","pepe","papo","popa","programacion","es","genial"];
const resultados= palabras.map(palabras=>palabras.length)//Extra jesus reto maps
C(resultados);

C("%c6.3 REDUCE",style);
const numbers=[1,2,3,4,];
const suma2=numbers.reduce(function (resultado,numbers){
return resultado+numbers;
});
console.log(suma2);


var mascotas=["perro","gato","pollo","pollo","perro","gato"];

var recuentos=mascotas.reduce(function(obj,mascotas){
if(!obj[mascotas]){
    obj[mascotas]=1;
}
else{
    obj[mascotas]++;
}
return obj;
},{})
C(recuentos);

//Tarea arreglo de productos con precios, 10 productos y calcular el total de compra.