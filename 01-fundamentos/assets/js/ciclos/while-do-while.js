

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while(i < carros.length){
//     console.log(carros[i]);
//     i = i + 1; // incrementa en 1
//     // i++;       // incrementa en 1
//     // i += 2;    // incrementa en 2
// }

console.warn('while')
// tanto undefined, null como false son consideradas condiciones falsas que harian que mi ciclo nunca se ejecute

while(carros[i]){
    if(i === 1){
        // break;
        i++;
        continue
    }

    console.log(carros[i]);
    i++;       // incrementa en 1
    // i += 2;    // incrementa en 2
}



// La unica diferencia con el hile es que el Do While va a ejecutar el bloque interno aunque sea una vez
// estructura:
// do{
// // este codigo se va a ejecutar al menos una vez
// }while(); // y se va a seguir repitiendo siempre y cuando esta condiion sea correcta
console.warn('do while')
j = 0;

