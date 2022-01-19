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

console.log(personaje)

// La otra forma de acceder a las propiedades es a traves de [] en lugar de .
console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Lat', personaje.coords.lat);

//Tarea: mostrar el ultimo traje de Ironman

console.log('Ult: traje', personaje.trajes[personaje.trajes.length-1]);


