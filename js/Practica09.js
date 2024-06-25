const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; backgroundq-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 09: Funciones en JavaScript (Function Expression) ");
CI('®Jazziel Rodríguez López 4A DSM');

C("%c1.- Utilizando FUNCTION EXPRESION - funciones com expresiones", style);

const sumar = function(a=0,b=0){
console.log(b+a);
return(a+b);
}
C(`El resultado de la suma es de: 8 + 4 es= ${sumar(4,8)}`)
//Extra, funcion que extraiga las vocales y si se repiten se repiten Luis Ivan 

const Vocales = function(cadena) {
  const vocales = "aeiouAEIOU";
  let resultado = "";

  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      resultado += cadena[i];
    }
  }

  return resultado;
};
const resultadoVocales = Vocales("Murcielago");
console.log(resultadoVocales); // Esto imprimirá "aei"
//
//
//  === Es estrictamente igual 

