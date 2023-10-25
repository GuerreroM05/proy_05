    // definimos la variable math como constante y de tipo objeto.
    const math ={};
    
    //definimos la funcion flecha invertirNumero como constante con parametro numero
const invertirNumero = numero => {
    //definimos invertido como variable y de tipo numero
    let invertido = 0;
    //ciclo while que se repite mientras el numero sea diferente de 0
    while (numero != 0) {
        invertido =10 * invertido + numero % 10
        numero = (Math.floor(numero/ 10))
    }
    //devuelve el valor "invertido"
    return invertido
};
//funcion que invierte un numero y lo representa como un texto                                                                                                                               
const invertirNumeroComoTexto = numero => {
    //El método toString  se utiliza para convertir un valor en una cadena de texto
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
    //split indica que se dividirá en cada carácter individual.
    //reverse Esta función invierte el orden de los elementos en el array.
    //join indica que no se usará ningún separador entre los elementos al unirlos.
    return numeroInvertidoComoTexto;
};

const invertirTexto = texto => {
       //el split se utiliza para dividir una cadena de texto en un array de subcadenas utilizando un delimitador especificado.
    const splitText = texto.split('');
    //El método reverse se utiliza para invertir el orden de los elementos en un array
    const reversedText = splitText.reverse();
    //utilizamos el join para combinar todos los elementos de un array en una cadena de texto, separados por un delimitador especificado.
    const joinedText = reversedText.join('');
    return joinedText;
};

const invertirArreglo = arreglo => {
//Un arreglo se utiliza para almacenar y organizar múltiples valores en una sola variable
    const reverseObject = arreglo.reverse();
    return reverseObject;
};

const conversionDatos = (data) => {
    //el tipeof lo utilizamos para determinar el tipo de datos de una variable o expresion
    let dataType = typeof data;
    let dataVar;
//el if Permite controlar el flujo del programa y tomar decisiones basadas en condiciones booleanas (verdadero o falso).
    if (data=== '' || data === null || data === undefined || data.length === 0) {
        dataVar = 'El valor ingresado està vacio o incorrecto';
        //La declaración "else"se utiliza junto con la declaración "if" para ejecutar un bloque de código alternativo cuando la condición del "if" no se cumple.
    }else {
        console.log(`el valor ingresado es de tipo: ${dataType},con un valor de: ${data}`);
        //La declaración "switch"se utiliza para evaluar una expresión y ejecutar diferentes bloques de código según el valor de la expresión
        switch (dataType) {
            //el "case" se utiliza dentro de una declaración "switch"para definir los diferentes casos que se evaluarán.
            case 'number':
                dataVar = invertirNumero(data);
                //el break se utiliza dentro de un bucle o una estructura de control (como "switch") para salir inmediatamente del bloque actual y continuar con la ejecución del código después del bloque.
                break;
                case 'string':
                    dataVar = invertirTexto(data);
                    break;
                    case 'object':
                        dataVar = invertirArreglo(data);
                        break;
                        // el default se utiliza para asignar un valor predeterminado a una variable si no se proporciona ningun valor
                        default:
                            datavar = 'el valor ingresado no se puede invertir';
        }
    }
    return dataVar;
}

math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
// se invierte un arreglo para cambiar el orden de los elementos del arreglo, de manera que el último elemento se convierta en el primer elemento
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

module.exports =math;
