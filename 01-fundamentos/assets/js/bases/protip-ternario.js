
// const elMayor = (a, b) =>{
//     return(a > b) ? a : b;
// }

const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log(elMayor(10, 15));
console.log(tieneMembresia(true));


// El operador ternario tambien es muy util cuando queremos generar arreglos u objetos con alguna condicion implicita dentro de su creacion

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(10, 15)
];

console.log(amigosArr);

// Otro uso del operador ternario es el siguiente, imaginemosno que tenemos mas de una condicion
// Mentalicemonos que tenemos un sistema de nota (x persona saco x nota) y yo lo que necesito saber si esa nota es A+ A B+, etc

const nota = 93;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 80 ? 'C'  : 'F';

console.log({nota, grado})