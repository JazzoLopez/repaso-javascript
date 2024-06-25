/*Practica 07 iteradores en javascript*/
const C = console.log.bind(console);
const CE=console.error.bind(console);//Declaramos una funcion de prototipadon para acortarlo a solo c
const CW=console.warn.bind(console);
const CI = console.info.bind(console);
const CT = console.table.bind(console);
const style1 ='letter-spacing:5px; font-family; sans-serif; background-color: #98ff96; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar

const style = 'letter-spacing:5px; font-family; sans-serif; background-color: aqua; font-size:15px; border:2px solid black; border-radius:5px;'; //declaramos estilos para identificar
CE("Practica 07: Iteradores en JavaScript");
console.info('®Jazziel Rodríguez López 4A DSM');

/**Ciclo for */
C("%c1.- Utilizando el Buclie de FOR",style);
let tecnologias=["HTML","JavaScript","Python","MySql","Angular","Flutter","React","Django","Flask","Jira","Git","Swagger","HTML"];

for(let i=0; i<tecnologias.length;i++){
    console.log(`Elmenento en la posición ${i}: ${tecnologias[i]}`)
}
C("");
/**FOREACH */

C("%c2- Utilizanbdo el ciclo FOREACH",style);
C("%cSolucion a)",style1)
tecnologias.forEach((elemento,i)=> console.log(`Elemento en la posición ${i}: ${elemento}`));
C("%cSolucion b)",style1);
tecnologias.forEach((elemento)=> console.log(`Elemento en la posición ${tecnologias.indexOf(elemento)}: ${elemento}`));

tecnologias.push
C("%c3.- Utilizando MAP para transformar los elementos dentro del arreglo",style);
tecnologias.map((elemento)=>console.log(elemento));
let tecnologiastipo= tecnologias.map(
    (elemento)=>{
if (["HTML","Angular","React"].includes(elemento))
return(elemento+", frontend")
else if(["Python","Django","Flask","Jira","MySql"].includes(elemento))
return(elemento+", backend")
else
return(elemento+", frontend y backend")
});
CT(tecnologiastipo);

let i=0;
while(i<tecnologias.length){
    console.log(`Elmenento en la posición ${i}: ${tecnologias[i]} con while`);
    i++
}