// Arrays : 
// const arr = new Array(10);
// console.log(arr);

// Forma tradicional:
// const arr = []

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});

// Primera posicion de un array : índice [0]
console.log(videoJuegos[0])

// Otra forma de crear un arreglo
let arregloCosas = [
    true,
    123,
    'Isaias',
    1 + 2, //esta permitido hacer operaciones dentro de un arreglo
    function(){}, // funciones
    ()=>{}, // funciones de flecha
    {a: 1}, // objetos literales
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

// console.log({arregloCosas});
console.log(arregloCosas[7][4][1]);