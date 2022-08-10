

class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias'
    }

    static mensaje(){
        console.log(this.nombre); // undefined
        console.log('Hola a todos, soy un metodo estatico'); 
    }


    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'sin codigo', frase = 'sin frase'){
        if(!nombre) throw Error('Necesitamos el nombre');
 
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase; 

        Persona._conteo++;
        
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase(){

        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
// spiderman.comida = 'Duende verde';

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);
// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo'

console.log(Persona.propiedadExterna);
console.log(Persona);

// El objetivo de clases es que podamos tener propiedades y metodos que sean comunes en todas las instancias de esa misma clase
// Las propiedades y metodos estaticos nos permiten utilizar dichos metodos y propiedades sin necesidad de instanciar dicha clase
// Todas las clases en JS por defecto tienen use strict
// el constructor es un metodo que se va a ejecutar exactamente cuando se crea una nueva instancia 
// el constructor es el unico metodo que retorna una instancia de un objeto y no retorna undefined, aunque le pongamos 
// El set solo recibe un argumento
// El set no puede tener el mismo nombre de la propiedad que queremos establecer, ya que crearia un ciclo infinito. Para esto podemos hacer underscore y el mismo nombre
// A diferencia de los metodos, los sets se llaman de manera diferente































































