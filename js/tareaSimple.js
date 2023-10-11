const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);

/*Tareaaaaaa*/

// Arreglo de productos
const productos = [
    "Papas",
    "Helado",
    "Cereal",
    "Tortillas",
    "Tortillas de harina",
    "Jamon",
    "Limon",
    "Morron",
    "Fruztea",
    "Jabon A"
];

const precios = [15, 15, 46, 20, 25, 24, 55, 45.5, 17, 10];
const orden = [0,3,3,4,2,1,2,3,1,2];
// Arreglo de precios correspondientes
CT(productos)
CT(precios)
// Arreglo de órdenes, donde el índice i corresponde a la cantidad del producto i
// Usamos la función reduce para calcular el total
const total = productos.reduce((acumulador,productos, indice) => {
  const cantidad = orden[indice]; //primero toma la cantidad solicitada
  const precio = precios[indice]; //Ahora tomamos el precio
  return acumulador + cantidad* precio; //acumulamos los subtotales de cada producto y nos dara el total
}, 0);

console.log(`El total de la compra es: ${total}`);


const persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  },
};

persona.saludar(); // Imprime: Hola, soy Juan y tengo 30 años.

// Usando una función flecha en un contexto de objeto (nota el comportamiento diferente de "this")
const personaFlecha = {
  nombre: "Ana",
  edad: 25,
  saludar: () => {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  },
};

personaFlecha.saludar();