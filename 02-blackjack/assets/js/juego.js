

(() => {
    'use strict'
    let deck         = [];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];

    // let puntosJugador = 0,
    //     puntosComputadora = 0;
    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJugador     = document.querySelector('#jugador-cartas'),
          divCartasComputadora = document.querySelector('#computadora-cartas'),
          puntosHTML           = document.querySelectorAll('small');

    // Esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 1) => {
        deck = crearDeck();
        for(let i = 0; i < numJugadores; 2){
            puntosJugadores.push(0);
        }

        console.log({puntosJugadores});
    }

    // Esta función crea un nuevo deck
    const crearDeck = () => {
        
        deck = [];
        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tipos ) {
                deck.push( i + tipo);
            }
        }

        for( let tipo of tipos ) {
            for( let esp of especiales ) {
                deck.push( esp + tipo);
            }
        }
        return _.shuffle( deck );
    }


    // Esta función me permite tomar una carta
    const pedirCarta = () => {

        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }

    // Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = (tunro) =>{

        puntosJugadores[turno] = puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;

    }

    // turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        do {
            const carta = pedirCarta();

            // puntosComputadora = puntosComputadora + valorCarta( carta );
            // puntosHTML[1].innerText = puntosComputadora;
            
            // <img class="carta" src="assets/cartas/2C.png">
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
            imgCarta.classList.add('carta');
            divCartasComputadora.append( imgCarta );

            if( puntosMinimos > 21 ) {
                break;
            }

        } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

        setTimeout(() => {
            if( puntosComputadora === puntosMinimos ) {
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana')
            } else if( puntosComputadora > 21 ) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100 );
    }



    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        
        puntosJugador = puntosJugador + valorCarta( carta );
        puntosHTML[0].innerText = puntosJugador;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasJugador.append( imgCarta );

        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }

    });


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugador );
    });

    btnNuevo.addEventListener('click', () => {

        console.clear();
        inicializarJuego();

        // deck = [];
        // deck = crearDeck();

        puntosJugador     = 0;
        puntosComputadora = 0;
        
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled   = false;
        btnDetener.disabled = false;

});

}) ();

/*
    DOM: Document Object Model:
    Conjunto de objetos anidados para crear un documento HTML
    La idea del DOM es poder tener acceso dinamico (a traves de programacion) a sus elementos y poder manipularlos
    Por ejemplo:
    en HTML tenemos todo lo que es el documento o la pagina inicializada con HTML y todo esto es un objeto, un objeto del DOM.
    Dentro de ese HTML podemos tener otro objeto que es el <head> y este a su vez tener otras cosas adentro.
    Tambien podemos tener el body, el cual es otro ojeto, y que nosotros podemos hacer referencia a el y poder manipularlo como nosotros queramos.
    Dentro del body podemos tener un div y dentro del div un input y luego otro input y dentro un boton. Y todos estos elementos lo podemos manipular:
    Cambiar, borrar, añadir mas botones. Y todo esto mediante la manipulacion del DOM, utilizando unas sentencias especiales que solo van a funcionar 
    si estamos utilizando el codigo de JS en el NAVEGADOR WEB ¿Por que? Por que cuando estamos corriendo JS en el servidor, obviametne ahi no existe el DOM, porque no hay elementos HTML osea no hay nada que hacer ahi.

    querySelector y querySelectorAll, ¿Cual es la diferencia?
    querySelector: me permite a mi recuperar el primer elemento que cumpla la condicion que yo le especifique
    querySelectorAll: regresa todos los elementos que cumple la condicion, es la unica diferencia.
    innerText: permite poner texto, por ej: 10, Hola Mundo
    innerHTML: permite poner unicamente elemento HTML, por ej: '</b>Hola Mundo</b>'
*/

