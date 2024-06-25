const C = console.log.bind(console);
const CE = console.error.bind(console);
const CW = console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);

const endpointPostURL = "https://jsonplaceholder.typicode.com/comments";
const endpointPhotosURL = "https://jsonplaceholder.typicode.com/photos";
//Declaracion de estilos para la linea de consola
CI('®Jazziel Rodríguez López 4A DSM');
const style3 = 'letter-spacing:5px; font-family; sans-serif; background-color: #f7f592; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style1 = 'letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
const style2 = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
console.error("Practica 18: Multiples peticiones a un API");
C("%c Titulo",style1)
C("%c Subtitulos",style2)
C("%cSubConsoles",style3)



C("%c1.) Petición múltiple", style1)

const consultaAPI_Posts = async()=> {
    
    const respuestaPosts = await fetch(endpointPostURL)
    
    await console.log("%cHe regresado los datos de los posts....",style1)

    const resultadoPosts = await respuestaPosts.json()//le da formato de JSON al objeto resultante de la API

    
    
    console.log(resultadoPosts);
    

}



const consultaAPI_Photos = async()=> {
    
    const respuestaPhotos = await fetch(endpointPhotosURL)
    
    await console.log("%cHe regresado los datos de las PHOTOS....",style1)

    const resultadoPhotos = await respuestaPhotos.json()//le da formato de JSON al objeto resultante de la API
    await console.log("%cYa converti los resultados de las PHOTOS en formato JSON",style1)
    console.log(resultadoPhotos);
    
    
}





const consulta_Paralela_API= async() =>
{
    const [respuestaPost2, respuestaPhotos2] = await Promise.all([fetch(endpointPostURL), fetch(endpointPhotosURL)]);

    const resultadoPosts = await respuestaPost2.json();
    const resultadoPhotos = await respuestaPhotos2.json();
    console.log("%cResultado POSTS Paralelo",style1)
    console.log(resultadoPosts);
    console.log("%cResultado ",style1)
    console.log(resultadoPhotos);


}

const llamadoSerie = async ()=> {
    const inicio = performance.now();
    console.log("%cIniciando los llamados en SERIE",style2)
    console.log("%cConsultando los POSTS",style2)
    await consultaAPI_Posts();
    console.log("%cConsultando los PHOTOS",style2)
    await consultaAPI_Photos();
    const fin = performance.now();
    console.log(`%cLlamado en SERIE ${fin-inicio}ms`,style2)
}


const llamadoParalelo = () =>
{
    const inicio = performance.now();
    console.log("%cIniciando los llamados en PARALELO",style1)
    console.log("%cConsultando los POSTS y PHOTOS al mismo tiempo",style1)
    consulta_Paralela_API();
    const fin = performance.now();
    console.log(`%cLlamado en PARALELO ${fin-inicio}ms`,style1)
}



Promise.all([llamadoParalelo(), llamadoSerie()]).then(() => {
    console.log("Ambas funciones han terminado");
  });