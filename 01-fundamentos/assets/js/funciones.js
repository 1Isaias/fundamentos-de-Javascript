// No se recomienda hacer la funcion de la sgte manera, por un tema de facil manipulacion sobre la misma
// Las funciones se declaran una sola vez y se pueden declarar infinitas veces 
// function saludar(nombre){
//     console.log(arguments);
//     console.log('Hola '+ nombre);
//     return [1, 2, 3, 4, 5];
//     Esto nunca se va a ejecutar
//     console.log('Soy un codigo que esta despues del return') 
// }

// Funcion tradicional. Al asignarla a una constante, no hay manera que saludar2 pueda ser reutilizado en mi app
// const saludar2 = function (nombre){
//     console.log('Hola '+ nombre);
// }

// const retornoDeSaludar = saludar('Isaias', 40, true, 'Costa Rica');
// console.log(retornoDeSaludar[0],[1]);
// saludar2('Isaias');

// funciones de flecha

// const saludarFlecha = () => {
//     console.log('Hola Flecha')
// }

// const saludarFlecha2 = (nombre) => { // En los argumentos de las funciones de flecha los parentesis son opcionales, sin embargo es buena practica colocar ()
//     console.log('Hola ' + nombre)
// }
// saludarFlecha();
// saludarFlecha2('Melissa');

// A lo largo del curso vamos a usar generalmente funciones de flecha porq son mas eficientes q las funciones tradicionales y evitan problemas con un objeto disc que veremos mas adelante

// Cada una de las funciones si no tienen la palabra reservada return de manera explicita, no regresa nada (undefined)

// function sumar(a, b){
//     return a + b;
// }


// const sumar2 = (a,b) =>{
//     return a + b;
// }

// Cuando dentro de las llaves tenemos una sola linea de codigo, y esa linea es un return, podemos hacer una forma mas corta 
// const sumar2 = (a,b) => a + b; // Es lo mismo que la constante de arriba

// const getAleatorio2 = () => Math.random();
    


// Ejercicio
// Transformar getAleatorio en una funcion de flecha, que no tenga llaves
// nombre de la funcion: getAleatorio2()


// console.log(getAleatorio2());