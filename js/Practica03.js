/*Practica 03: Tipos de datos en JS */
console.info('®Jazziel Rodríguez López 4A DSM');
const style = 'letter-spacing:5px; font-family: Jetbrains Mono; background-color: rgb(119, 255, 255); font-size:18px; border:2px solid black;  border-radius:5px; justify-content: center; text-align: center; height: 40px; text-shadow: 1px 0.5px rgb(0, 51, 11); box-shadow: 4px 4px 4px rgb(0, 0, 0);' ; //Declaracion de estilos para la consola

console.log("********************************************************************");
console.warn("👨🏻‍💻 Práctica:03 Tipos de datos en JavaScript 👨🏻‍💻");
console.log("********************************************************************");

/*Undefined*/
console.log("%c1.- UNDEFINED- no definido", style);
let nombreCliente; 
console.log(nombreCliente);
console.log(typeof nombreCliente);

/*Boolean*/
console.log("%c2. -BOOLEAN- boleado( true or false)", style);
var verdadero= true;
let falso=false;
console.log(`¿Eres mayor de edad? ${verdadero}`); //concatemanos la variable
console.log(typeof verdadero); //obtenemos el tipo de dato
console.log(`¿Estas inscrito? ${falso}`);
console.log(typeof falso);

/*Number*/
console.log("%c3. -NUMBER- Numero (int, double, float, negative...",style);
const edad=12;
const precio=155.73;
const temperatura =-5;
let tipoMoneda;
console.log(`tu edad es ${edad} años`);
console.log(typeof edad);
tipoMoneda="Pesos."
console.log(`El precio del producto es de: $ ${precio} ${tipoMoneda}`);
console.log(typeof precio);
console.log(typeof tipoMoneda);
console.log(`Estamos a ${temperatura} grados hoy, que loco`);
console.log(typeof temperatura);

/*String*/
console.log("%c4. -STRING o (VARCHAR)- cadena o cadena de caractéres",style)
nombreCliente="Jazziel Rodríguez López";
const generoCliente="Masculino";
const direccionCliente="AV Zaragoza #208 colonia centro, Xicotepec de Juárez, Puebla";
console.log("********DAtos del cliente********")
console.log(`Nombre: ${nombreCliente},`,typeof nombreCliente);
console.log(`Genero: ${generoCliente},`, typeof generoCliente);
console.log(`Edad: ${edad},`, typeof edad);
console.log(`Direccion: ${direccionCliente},`, typeof direccionCliente);

//BigInt
console.log("%c5. -BINGINT o (Entero grande)-",style);
let numero12Posiciones =123456789012; 
console.log(`El valor es de: ${numero12Posiciones}, ${typeof numero12Posiciones}`)//Podemos concatenar en una unica comilla
const numero24Posiciones=BigInt("123456789012345678901234");
console.log(`El valor es de: ${numero24Posiciones}, ${typeof numero24Posiciones}`)//Podemos concatenar en una unica comilla
//no podemos mezclar bigint a otros tipos, solo debemos convertirlo
 numero12Posiciones = BigInt(numero12Posiciones);
console.log(`La suma es: ${numero12Posiciones+numero24Posiciones}`);

//Symbol
console.log("%c6. -Symbol-", style);
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol === segundoSymbol);//Como vemos no pod3emos hacer una evaluacion extricta, es considerado como un unique
console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());

//null
console.log("%c7. -NULL u object-",style)
const descuento = null;
console.log(typeof descuento);
console.log (`El descuento es ${descuento}`);

const c = console.log.bind(console);//Declaramos una funcion de prototipadon para acortarlo a solo c
c("Hola")
c(primerSymbol)


function imprimirMatrizRecursivamente(matriz, fila, columna) {
    // Verificar si hemos llegado al final de la matriz
    if (fila === matriz.length) {
      return;
    }
  
    // Imprimir el elemento actual
    console.log(fila + "," + columna );
  
    // Mover a la siguiente columna
    if (columna < matriz[fila].length - 1) {
      imprimirMatrizRecursivamente(matriz, fila, columna + 1);
    }
    // Si hemos llegado al final de la fila, pasar a la siguiente fila
    else {
      imprimirMatrizRecursivamente(matriz, fila + 1, 0);
    }
  }
  
  // Ejemplo de uso
  const matriz = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
  ];
  
  imprimirMatrizRecursivamente(matriz, 0, 0);
  