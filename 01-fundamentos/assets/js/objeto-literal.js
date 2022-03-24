// Los objetos literales, son objetos que tienen pares de valores: una propiedad conocida como llave y su valor

//let personaje = {
//  Llave=> nombre: valor=> 'Tony Stark'
//};

// Para obtener el valor de 'Tony Stark' debemos hacer referencia a la variable(que en realidad es un objeto) y luego a la llave, de la sgte manera:
// let personaje = {
//     nombre: 'Tony Stark'
// };
// console.log('Nombre:', personaje.nombre);

//No hay un limite de propidades que puedan tener los objetos
let personaje ={
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        ing: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '45646, 4446',
        ubicacion: 'New York, Estados Unidos'
    }
};

// console.log(personaje)

// La otra forma de acceder a las propiedades es a traves de [] en lugar de .
// console.log(personaje);
// console.log('Nombre', personaje.nombre);
// console.log('Nombre', personaje['nombre']);
// console.log('Edad', personaje.edad);
// console.log('Lat', personaje.coords.lat);

//Tarea: mostrar el ultimo traje de Ironman

// console.log('Ult: traje', personaje.trajes[personaje.trajes.length-1]);


// Mas detalles

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares)

// Bloquear modificaciones de propiedades:
Object.freeze(personaje);

personaje.dinero = 10000000;
personaje.casado = false;
console.log(personaje);
// El método Object.freeze() congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve el objeto recibido.
personaje.direccion.ubicacion = 'Costa Rica';


// El método Object.getOwnPropertyNames() devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto
const propiedades =Object.getOwnPropertyNames(personaje);
console.log({propiedades});

// El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
const valores =Object.values(personaje);
console.log({valores}); 
