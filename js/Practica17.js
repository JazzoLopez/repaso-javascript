const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
//Declaracion de estilos para la linea de consola
CI('®Jazziel Rodríguez López 4A DSM');
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 17: Implementando APIS");

const endpointURL = "https://jsonplaceholder.typicode.com/comments";
console.log("%c1 Utilizando Promesas y fetch", style)
//Promises
console.log("Solicitando los datos al API por medio de una promesa...")




const consultarApi_Promesa = () => {
    fetch(endpointURL)
    .then ((respuesta) =>{
        return respuesta.json()
    })
    .then ((respuesta) => {
        respuesta.forEach((elemento,i) => 
        {
            C(`Post No. ${i}`)
            C(elemento)
        }
        )});

}

consultarApi_Promesa();

C("%c2 Utilizando programación asíncrona (Async/Await)", style);

const consultaAPI_asinc = async () => {

    setInterval(console.log("..."), 1000)
    const respuesta = await fetch(endpointURL)
    await C("He regresado con los datos...")
    const resultado = await respuesta.json()
    await C("Ya convertí los resultados en formato JSON")

    // Le da formato de JSON al objeto resultante de la API
    resultado.forEach(post => { C(post) })
    C("He terminado de imprimir los resultados del API")

}
C("Solicitando la información de un método asíncrono");

consultaAPI_asinc();

