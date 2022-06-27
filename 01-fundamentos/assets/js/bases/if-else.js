

let a = 5;

if(a >= 10){ // undefined, null, una asignacion
    console.log('A es mayor o igual a 10')
}else{
    console.log('A es menor a 10')
}

// console.log('Fin de programa')

const hoy = new Date(); // {} Date: obtiene la informacion del momento actual, que, al asignarlo a una variable, me crea una referencia a la hora, minuto, segundo, dia, fecha, todo relacionado al momento actual
let dia = hoy.getDay(); //    getDay:  0: Domingo, 1: Lunes, 2: Martes ....

console.log({hoy, dia});

// Si en lugar de imprimir el numero del dia, quiero imprimir que dia es ¿Como lo hago?

// NUNCA USAR = CUANDO ESTEMOS TRABAJANDO CON CONDICIONES
// el == lo que dice es, quiero confirmar si el dia es igual al valor x, pero no me importa el tipo, es decir, no importa si el dia es un numero, una string, etc, tiene que ser igual al valor x, por ej:
  
if (dia === '5'){ 
    console.log('Domingo');
}else{
    console.log('No es Domingo')
}
