//se utiliza para agregar colores y estilos a las salidas te textos en la terminal.
require('colors');

//lo utilizamos para acceder a las exportaciones que se hayan definido en ese archivo y utilizarlas en el actual 
const math =require('./proy_modules/math.js')
//se utiliza para definir un punto de entrada de un programa 
const main = async () => {
//muestra un mensaje en la consola 
    console.log('hola SENA CBA\n'.blue);
//define la palabra con varios numeros 
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    //Utilizamos for para crear bucles y repetir una seccion de codigo varias veces 
    for (const numero of numeros) {
        //utilizamos la funcion para invertir el numero 
        const invertidoComoNumero = math.invertirNumero(numero);
        //funcion para invertir un numero y devolver su representacion invertida como una cadena 
        const invertidoComoCadena =math.invertirNumeroComoCadena(numero);
        //mensaje de salida que muestra informacion de un numero y su inversion como numero y cadena 
        console.log("El número '%s' es '%s' invertido como nùmero, y ¹%s como cadena",
                        numero,invertidoComoNumero,invertidoComoCadena);
}
//arreglo que almacena una coleccion de cadenas de texto
const textos = ['Hola sena', 'Ficha 2798618', 'Analisis y desarrollo de sofware']
//repite a traves del arreglo "textos" y realiza una operacion para cada cadena de texto 
for(const texto of textos){
    //utiliza la funcio "invertir texto" para obtener la version invertida de ua cadena de texto
    const textoInvertido = math.invertirTexto(texto);
    //imprime informacio sobre la inversion de un texto
    console.log("el texto '%s' se invierte como '%s'", texto,textoInvertido);
}
//se utiliza para declarar una varible cuyo valor no cambiara una vez asignada 
const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO'] ]
for(let dato of datos){
    //se utiliza para cambiar el tipo de dato de una variable
    const datoConvertido = math.conversionDatos(dato);
    //se utiliza para insertar el valor de una variable detro de la cadena de texto
    console.log(`El resultado de coversion es : ${datoConvertido}`);
    }
}

main();
