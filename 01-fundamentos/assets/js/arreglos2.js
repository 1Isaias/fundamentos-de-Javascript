let juegos = ['Mortal Komnbat', 'Mario', 'Fifa', 'God of War'];
console.log('Largo:', juegos.length);

// Metodos de los arreglos

// 1- .length: Cantidad de elementos
console.log('Largo:', juegos.length);

// 2-  .forEach: El metodo .forEach únicamente ejecuta la función callback que definimos
juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr})
});

// 3- .push: Insertar un nuevo elemento al final del arreglo
let nuevaLongitud = juegos.push('Crash');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Counter Strike');
console.log({nuevaLongitud, juegos});

// 4- .pop(): Borrar ultimo elemento
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// 5- .splice()Borrar elemento en una posicion especifica
let pos = 3;


let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

// .indexOf: Saber la posicion en la que se encuentra un elemento. CaseSensitive
let fifaIndex = juegos.indexOf('Fifa');
console.log({fifaIndex}); 
// Nota: cuando hacemos un indexOf y nos retorna -1 significa que no encontro el elemento
