/**
 * Dias de semna abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 0; // 0: doming... 1: lunes...
const horaActual = 10; 

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, Hoy abrimos a las XX

// Forma larga
if(dia === 0 || dia === 6){  
    console.log( 'Fin de semana');
    horaApertura = 9;
}else{
    console.log('Dia de semana');
    horaApertura = 11;
} 

if(horaActual >= horaApertura){
    mensaje = 'Esta abierto'  
}else{
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({horaApertura, mensaje})

// // Tarea: hacer la misma condicion ternaria de arriba, hacerla abajo, con el mensaje, es decir, resumir lo de arriba en una unica linea de operador ternario

mensaje = (horaActual >= horaApertura) ?  'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}` 


// Forma resumida:
// if( [0,6].includes(dia) ){  


// // Forma  resumida:
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// console.log({horaApertura, mensaje})


