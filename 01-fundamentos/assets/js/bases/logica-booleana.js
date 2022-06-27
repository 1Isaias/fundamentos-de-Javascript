
const regresaTrue = () =>{
    console.log('Regresa true');
    return true;
}

const regresaFalse = () =>{
    console.log('Regresa false');
    return false;
}

// NOT o negaacion
console.warn('NOT');
console.log(true); // true
console.log(!true); // false 
console.log(!false); // true 

// AND
console.warn('And'); //true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // true
console.log(false && !false); // true
console.log(false && !false); // true

console.log('========');
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

// OR
console.warn('OR'); // true
console.log(true || false);

console.log(regresaTrue() || regresaFalse());



console.log(true || true || true || false ); //?



// Asignaciones con operadores

// No es lo mas comun hacer asignaciones con AND, pero de igal manera vamos a practicarlo
console.warn('Asignaciones');
console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
console.log({a1, a2})

// Lo mas comun es hacer asignaciones con OR
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; //¡No deberia ejecutar el true! porque como ya encontro un valor ('Ya no soy falso'), lo que viene despues no se ejecuta
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;  // En este caso al reves, al esta regresaTrue() primero, no va a ejecutar lo demas
console.log({a1, a2, a3, a4, a5})
          
// La mayor parte de la logica booleana que vamos a ver es en funciones
if(regresaFalse() && regresaTrue() && true || false || true){
    console.log('Hacer algo');
}else{
    console.log('Hacer otra cosa')
}
// Usualmente para esto se utiliza la logica booleana
// No deberiamos tener mas de tres condiciones, si tenemos mas condiciones deberiamos pensar alguna forma de simplificarlo