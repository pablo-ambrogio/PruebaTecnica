/* example function name */
// const openAndCloseAccordion = () => {
//   alert ('do something')
// }


// accordion ---
let contenedorQuestions = document.querySelectorAll( '.question__header' );
let question = document.querySelectorAll( '.question' );
let paragraph = document.querySelectorAll( '.question__paragraph' );
let arrow = document.querySelectorAll( '.question__arrow' );
//  ---

// slider ---
let slider = document.querySelector( '.sliders' );
let circleNav = [ ...document.querySelectorAll( '.slider__navegation-circle' ) ];
// ---


// form ---
let form = document.getElementById( 'form' );
let inputName = document.getElementById( 'inputName' );
let email = document.getElementById( 'inputEmail' );
let textArea = document.getElementById( 'inputTextArea' );
let button = document.getElementById( 'button' );
let message = document.getElementById( 'message' );
let messageName = document.getElementById( 'messageName' );

// ---

//* accordion
contenedorQuestions.forEach( ( cadaContenedor, i ) => {
  
  let height = 0;

  contenedorQuestions[ i ].addEventListener( 'click', () => {
    question.forEach( ( cadaQuestion, i ) => {
      paragraph[ i ].style.overflow = 'hidden';
      paragraph[ i ].style.height = 0;
      paragraph[ i ].classList.remove( 'paragraph-active' );
      arrow[ i ].classList.remove( 'arrow-active' );
      paragraph[ i ].style.transition = '.8s';
      arrow[ i ].style.transition = '.8s';
    } );

    paragraph[ i ].style.overflow = 'visible';
    paragraph[ i ].classList.add( 'paragraph-active' );
    arrow[ i ].classList.add( 'arrow-active' );
    
    if( paragraph[ i ].clientHeight === 0 ) {
      height = paragraph[ i ].scrollHeight;
    }
    paragraph[ i ].style.height = height + 'px';

  } );
} );

// ---


// * slider

circleNav.forEach( ( cadaCircle, i ) => {
  circleNav[ i ].addEventListener( 'click', () => {

    let position = i;
    let operacion = position * -33;

    if( operacion === 0 || operacion === -33 ) {
      slider.style.transform = `translateX(${operacion}%)`;
    } else {
      slider.style.transform = `translateX(${-66.5  }%)`;
    }

    circleNav.forEach( ( cadaCircle, i ) => {
      circleNav[ i ].classList.remove( 'circle-active' );
    } );

    circleNav[ i ].classList.add( 'circle-active' );
  } )
} );
// ---


// * form 

form.addEventListener( 'submit', ( event ) => {
  event.preventDefault();
} );



message.style.visibility = 'hidden';

let enviar = () => {

    let verificarCaracteres = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let verificarLetras = /^[A-Z]+$/i;

    if( !verificarLetras.test( inputName.value )  ) {
      messageName.innerHTML = 'Porfavor, ingresar solo letras';
      message.style.visibility = 'visible';
      message.style.color = '#ff4242';
    } else {
      messageName.style.display = 'none';
    }
    
    if( !verificarCaracteres.test( email.value )) {
        // message.innerHTML = ' Good ';
        // message.style.visibility = 'visible';
        // message.style.color = 'green';
        message.innerHTML = ' Please enter a valid email addres ';
        message.style.visibility = 'visible';
        message.style.color = '#ff4242';
    }
    // else {
    //     message.innerHTML = ' Please enter a valid email addres ';
    //     message.style.visibility = 'visible';
    //     message.style.color = '#ff4242';
    // }
}

button.addEventListener( 'click', enviar );


// ---
