/*Practica 4: Objetos en JavaScript */
const C = console.log.bind(console);//Declaramos una funcion de prototipadon para acortarlo a solo c
const CT = console.table.bind(console);
console.info('®Jazziel Rodríguez López 4A DSM');
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
console.error("Practica 04: Objetos en JavaScript");

C("%c1.- Variables independientes",style)
const Producto ='tablet 5"'; //La comilla invertida nos ayuda a mostrar una comilla normal o si no dara un error
const Precio=3525.00;
const Disponibilidad = true;
C(`Leyendo los datos desde variables independientes`);
C(`Nombre: ${Producto}, ${typeof Producto}`);
C(`Precio: $${Precio}, ${typeof Precio}`);
C(`Disponibilidad: ${Disponibilidad}, ${typeof Disponibilidad}`);
 
//{} curly braces, [] Brackets
C("%c2.- Declaración de un Objeto",style);
let  productoObjeto = {//objeto
    Nombre: `Tablet 9"`,//propiedades
    Precio: 3525.00,
    Disponibilidad: true,

    //Al imprimir nos muestra un triangulo que dice que hay muchos campos
}
C(productoObjeto);
C(`Mostrando con product.table`);
CT(productoObjeto);
C(`Leyendo los datos del objeto uno por uno`);
C(`Nombre: ${productoObjeto.Nombre}, ${typeof productoObjeto.Nombre}`);
C(`Precio: $${productoObjeto.Precio}, ${typeof productoObjeto.Precio}`);
C(`Disponibilidad: ${productoObjeto.Disponibilidad}, ${typeof productoObjeto.Disponibilidad}`);
C( typeof productoObjeto);
//Desestructuración
//Al desestructurar modificamos una varaiable pero la original no cambia, solo la que utilizamos para ese momento, entendemos y fin
C("%c3.- Desestructuración de un objeto", style);
let {Nombre : productName, Precio: productPrice, Disponibilidad: productAvailability, Categoria: productCategory} = productoObjeto;
if(productAvailability== false)
    productAvailability ="No available";
if (productPrice > 1000)
    productPrice="To expensive";
if(productName.includes("Tablet")) //includes sirve para que encontrar una cadena de texto dentro de una cadena de texto
    productCategory = "Electronics";
C(`leyendo los datos desestructurados: Name ${productName}, price type: ${productPrice} , ${productCategory}`);
C(productoObjeto) //Comprobamos que no hemos cambiado nada solo los que tomamos en ese momento.
C(" ");
// console.warn("Continuamos la practica 5 aqui");

C("%c4.- Mejora de los Objetos (Object Literal Enchancement",style);
//Tengo variables independtiendes, las convertimos en un objeto
const productObject={productName, productPrice, productCategory, productAvailability}
CT(productObject);
/*A partir de aqui es la practica 5*/
console.error("Practica 05:Manipulacion de objetos")
C("%c5.- Agregar una propiedad a un objeto existente.",style);
CT(productoObjeto);
productoObjeto['Imagen']='img/products/tablet';
productoObjeto['Color']='Magenta';
CT(productoObjeto);

C("%c6.- Eliminar una propiedad a un objeto existente.",style);
/*Eliminamos propiedad */
delete productoObjeto['Color'];
CT(productoObjeto);

C("%c7.- Modificar el valor de una propiedad existente.",style);
CT(productoObjeto);
productoObjeto.Nombre='Tableta Ipad 10"';
CT(productoObjeto);

C("%c8.- Congelación de un objeto",style);
CT(productoObjeto);
// Object.freeze(productoObjeto); /*frezze */
productoObjeto.Precio=2000;
productoObjeto['Marca']="Apple";
delete productoObjeto['Disponibilidad'];
C("Consultamos de nuevo y verificamos que no");
CT(productoObjeto);

C("%c9.- Sellado de un objeto <SEAL>",style)

let Cliente_objeto={
    nombre:"jazziel",
    Correo:"jazziel@gmail.com",
    tipo:"normal"
}
console.warn("Ahora vemos que  cambiamos los atributos pero no las propiedades")
CT(Cliente_objeto);
Object.seal(Cliente_objeto);//Sellamos el objeto y solo modifica 
Cliente_objeto.Correo="jazzielrodriguezlopez@gmail.com";

CT(Cliente_objeto);

C("%c10.- Desestructuración de 2 o más objetos",style);
const{Nombre:nombreP,Precio:precioP,Disponibilidad:DisponibilidadP}=productoObjeto
const{nombre: nombreC, correo:correoC, tipo:tipoC}=Cliente_objeto;//Utilizamos alias para no tener problemas pues al ya estar declaradas tendremos un error ahi
C(nombreP,precioP,DisponibilidadP);
C(nombreC,correoC,tipoC);

C("%c11.- Unión de 2 o mas objetos utilizando Obtect.assing()<- realizarlo con precaución.",style)
 let ventaObjeto = Object.assign(productoObjeto, Cliente_objeto);
C("Objeto: producto");
C(productoObjeto);
C("Objeto: cliente");
C(Cliente_objeto);
C("Objeto Venta");
C(ventaObjeto);
//Siempre mutacion o combinacion no es recomendable el assing

C("%c12 Unión de 2 o mas objetos, utilizando Spread Operator(...)",style)
let cantidad=4;
ventaObjeto={
    producto:{...productoObjeto},
    cliente:{...Cliente_objeto},
    cantidad
}

C("Objeto: producto");
C(productoObjeto);
C("Objeto: Cliente");
C(Cliente_objeto);
C(ventaObjeto);
console.warn("Actualizando el correo electronico del cliente... ");
Cliente_objeto.Correo="cambiado@gmail.com";
C("Objeto: cliente");
C(Cliente_objeto);
C("Objeto: venta");
C(ventaObjeto);


