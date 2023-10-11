//Practica 13 Manupulación del DOM (Document Object Model)
const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
CI('®Jazziel Rodríguez López 4A DSM');
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 13: Manupulación del DOM (Document Object Model)");
C("%c1. Accediendo a los elementos del DOM",style)
C("%c1.1 A travéz del queryselector().",style1);
/*queryselector es un método que incluido de manera automática por el interpretador de JS, el cual permite buscar y acceder a cada elemento
declarado por el maquetador web, devolviendo solo el primer elemento encontrado*/

const encabezado = document.querySelector("h2");
const noExiste = document.querySelector("h3"); //Buscando un elemento que no existe
const noExiste2 = document.querySelectorAll("h4"); 
C(encabezado)
C("Busqueda del boton.")
const boton = document.querySelector("#button"); //Reto query selector (:
C(boton) 
const tecnologias = document.querySelector(".tecnologias"); //Reto query selector (:
C(`El encabezado es un: ${boton}`)
C(tecnologias) 
C(`El encabezado es un: ${typeof encabezado}`);
C(`El boton es un: ${typeof boton}`);
C(`El elementoClase es un: ${typeof tecnologias}`);
C("%c1.2 A travéz de los elementos con queryselectorAll utilizando TAG.",style1);/*Busca y retorna todos los elementos que coincidan con el filtro.(TAG, ID o CLASE) */
const anclas = document.querySelectorAll("a")
C(anclas)
C(`${anclas} , ${typeof anclas}`) 
C("%c1.3 A travéz de los elementos por ID.",style1);
const elemento1 = document.querySelectorAll("#elemento1");//Array no existe en JS.
C(elemento1);//JS no es fuertemente tipado, puedes mezclar todo con todo. 
const patito = document.querySelectorAll(".patito");
C("%c1.4 Buscando y accediendo a los elementos por clase - patito",style1);
C(patito);

C("%c2 Accediendo a las propiedades del elemento del DOM",style);
C(`El elemento extraido del DOM es un: ${encabezado.tagName}`);
C(`El elemento extraido del DOM es un: ${encabezado.innerText}`);    //Uso de innerText
C(`El elemento extraido del DOM es un: ${encabezado.textContent}`);  //Uso de textContent
C(`El elemento extraido del DOM tiene las clases de: ${encabezado.classList}`);
C(`El elemento <header> extraido del DOM tiene las clases de: ${document.querySelector("header").classList}`);
C(`El elemento <div> extraido del DOM tiene las clases de: ${encabezado.classList}`);

C(`De los elementos extraidos del DOM en la varibale: liga, son un: ${anclas.tagName}`);
C(`De los elementos extraidos del DOM en la varibale: liga, son un: ${anclas.textContent}`);
C(`De los elementos extraidos del DOM en la varibale: liga, son un: ${anclas.classList}`);


//QuerySelector() regresa un objeto individual
//QuerySelectorAll() retorna todos los que aparecen en objeto de tipo arreglo.
C("Buscando y accediendo al elemento h3, sabemos que no existe asi que arroja");
C(noExiste);//Esta linea regresa null, puesto que no existe en el elemento
C("Buscando y accediendo al elemento h4, sabemos que no existen ninguno y nos arroja un Array vacio");//No es lo mismo un arreglo vacio que un dato null
C(noExiste2);//Esta linea regresa null, puesto que no existe en el elemento
const encabezado1 = document.querySelectorAll("h1");
C(encabezado1);

anclas.forEach((elemento, i) =>console.log(`Los elementos extraidos del DOM en la variable: ligas[${i}, es un ${elemento.tagName}]`));   
elemento1.forEach((elemento, i) =>console.log(`Los elementos extraidos del DOM en la variable: elemento1[${i}, es un ${elemento.tagName}]`));   
patito.forEach((elemento, i) =>console.log(`Los elementos extraidos del DOM en la variable: patito[${i}, es un ${elemento.tagName}]`));      

C("%c3. Modificando los valores de los atributos de los objetos del DOM",style);
C(encabezado);
C(`Modificando el texto que el maquetador puso, de: '${encabezado.textContent}' a 'Modificando los elementos del DOM'`);
encabezado.textContent="Modificando los elementos del DOM";

anclas[2].textContent="google.com";
C(boton)
boton.setAttribute('disabled','');
boton.setAttribute('style','background-color:orange; font-style:italic');



//Reto: Input password caracter especificos

const passwordInput = document.getElementById("password"); //Obtenemos lo que escribamos

passwordInput.addEventListener("input", () => {
    // Obtén el valor actual del campo de contraseña
    const passwordValue = passwordInput.value;

    // Cambia el tipo de input a "text" para mostrar corazones
    passwordInput.setAttribute("type", "text");

    // Establece el valor con corazones
    passwordInput.value = passwordValue.replace(/./g, "♥");
});

