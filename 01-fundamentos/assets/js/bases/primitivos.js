let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`; //Baktiks`` (tienen mas app q un string comun)

// typeof // para saber que tipo de dato es el valor al que apunta una variable
console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);

let edad = 33; //enteros
console.log(typeof edad);

edad = 33.001; // flotantes
console.log(typeof edad);

let superPoder; // camelCase: iniciar la primera palabra en minuscula y la segunda palabra con la primera letra capitalizada (mayuscula), y si fueran mas palabras c/ una de esas palabras va con la primera letra capitalizada
let super_poder; // snakecase: todo en minuscula, y al enlazar las palabras se las hace con un _
class JuegoAnio{ // UpperCamelCase: todas las palabras se inicializan con mayuscula

}
let superpoder;
console.log(typeof superPoder); // ???

let soyNull = null;
console.log(typeof soynNull); // ???

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(symbol1 === symbol2);  

