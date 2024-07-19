let display = document.getElementById('pantalla');
let  numeroUno = '';
let  numeroDos = '';
let operacion = undefined;

function escribirTexto(numero) {
  if (numero === '.' && numeroUno.includes('.')) return;  //verificar si el numero tiene descimal 
            numeroUno = numeroUno.toString() + numero.toString();  // ingresa los numero en el primera entrada 
            actulizaPantalla();
         
}
function actulizaPantalla() {
    pantalla.value = numeroUno;
    pantallaDos.value = numeroDos;

}
function limpiarPantalla(){
    numeroUno = '';
    actulizaPantalla();
}

function  eliminar(){

    numeroUno = numeroUno.slice(0,-1);
    actulizaPantalla();
}

function seleccioOperacion(op){

    if (op === 'suma' || op === 'resta' || op === 'divicion'
      || op === 'multiplicacion'  || op === 'porcentaje'
     ) {
        pantallaDos.value = op;
    }
}


function tipoOperacion(op) {
    if (numeroUno === '') return;  // evalua que este vacio  si es asi retorn
    if (numeroDos !== '') {
        calculadora();
    }
    operacion = op;
    numeroDos = numeroUno;
    numeroUno = '';
    seleccioOperacion(op);
}


  function calculadora(){
    let resultado;
    const  num1 = parseFloat(numeroUno);
    const  num2 = parseFloat(numeroDos); 
    if (isNaN(num1) || isNaN(num2)) return; // verifica si son numero , sino termina la funcion 
    

    switch (operacion){
        case 'suma':
         resultado = num1 + num2;
          console.log('numero 1',num1);
          console.log('numero 2',num2);
        console.log('soy una suma ',resultado);

        break;
        case 'resta':
            resultado = num2 - num1;     

        break;

        case 'divicion':
            resultado = num2 / num1;     
    

        break;
        
        case 'multiplicacion':
            resultado = num2 * num1;     

        break;

        case 'porcentaje':
            resultado = (num1 * num2) / 100;   
        break;

       }


    numeroUno = resultado;
    operacion = undefined;
    numeroDos ='';
      actulizaPantalla();
      
     }
