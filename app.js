var ingresado = document.getElementById('pantalla');
var numeros = [];

function escribirTexto(numero) {
   var diplay = document.getElementById('pantalla');
   diplay.value += numero ;
   numeros.push(numero);
   console.log(numeros);
   
}

function eliminar() {
    if (numeros.length > 0) {
        numeros.pop(); 
    }
    var diplay = document.getElementById('pantalla');
    diplay.value = numeros.join('');
    console.log(numeros);
}


