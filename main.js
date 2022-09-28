// Bienvenidos a Adivinanzas Mundiales
alert('Hola, bienvenido a Adivinanzas Mundiales')
alert('¿Estas listo para comenzar a jugar?')
nombre = prompt('¿Cómo es tu nombre?')
edad = parseInt( prompt('¿Cuántos años tienes '+nombre+' ?'))

if (edad >= 5 && edad <= 12){
// Juego de Adivinanzas mundiales - Nivel Niños
// Definimos el rango de edad para la siguiente pregunta

    let adivinanza = prompt('¿Quién usa el número 10 de la Selección Argentina?');

    function jugar(){

        if (adivinanza.length >= 3){
            // Respuesta correcta
            while (adivinanza != 'Messi'){
                alert ('La respuesta es incorrecta, a pensar un poquito más...');
                adivinanza= prompt('Vuelve a intentarlo, tu puedes!!!');
            } alert ('Excelente '+nombre+ ' lo lograste. FELICITACIONES!');
        } else {
            prompt ('Ingresa una respuesta válida');
        }
    }
}

// Juego de Adivinanzas mundiales - Nivel Adolecentes
// Definimos el rango de edad para la siguiente pregunta

if(edad >= 13 && edad <= 19){
    let adivinanza = prompt('¿En qué año ganó su primer mundial la Seleccón Argentina?');

function jugar(){

    if (adivinanza.length >= 3){
        // Respuesta correcta
        while (adivinanza != '1978'){
            alert ('La respuesta es incorrecta, a pensar un poquito más...');
            adivinanza= prompt('Vuelve a intentarlo, tu puedes!!!');
        } alert ('Excelente '+nombre+ ' lo lograste. FELICITACIONES!');
    } else {
        prompt ('Ingresa una respuesta válida');
    }
}
}else{

    // Juego de Adivinanzas mundiales - Nivel Adultos
    // Definimos el rango de edad para la siguiente pregunta
    if(edad >= 20 && edad <= 99){
        let adivinanza = prompt('¿Cuál es el segundo nombre de Lionel Messi?');
    
    function jugar(){
    
        if (adivinanza.length >= 3){
            // Respuesta correcta
            while (adivinanza != 'Andres'){
                alert ('La respuesta es incorrecta, a pensar un poquito más...');
                adivinanza= prompt('Vuelve a intentarlo, tu puedes!!!');
            } alert ('Excelente '+nombre+ ' lo lograste. FELICITACIONES!');
        } else {
            prompt ('Ingresa una respuesta válida');
        }
    }
}
}
// Retornamos la funcion jugar
jugar();