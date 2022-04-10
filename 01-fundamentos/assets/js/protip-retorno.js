// function crearPersona(nombre, apellido){
//     return{
//         nombre: nombre,
//         apellido: apellido
//     }
// }

const crearPersona = (nombre, apellido) => {
    return {nombre, apellido}
}

const persona = crearPersona('Isaias', 'Fonseca');
console.log(persona)


function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, boolean, ...args) => {
    // console.log({edad, boolean, args})
    return edad;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Isaias', 'Hola', 'chau')
console.log({casado, vivo, nombre, saludo, despedida})


