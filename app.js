require('colors');

const functions = require('./proy_modules/math')


const main = async() => {
  
    console.log('*****************************************'.cyan);
    console.log(`*            `.cyan, 'MAYUSCULAS'.bgRed, `               *`.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*              `.cyan, "" + functions.mayusculas('jesus'), `                  *   `.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*            `.cyan, 'MINUSCULAS'.bgRed, `               *`.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*              `.cyan, "" + functions.minusculas('DAVID'), `                  *   `.cyan);
    console.log('*****************************************'.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*     `.cyan, 'MAYUSCULAS Y MINUSCULAS'.bgRed, `         *`.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*            `.cyan, "" + functions.mayusculasyminusculas('DAVID', 'JESUS'), `             *   `.cyan);
    console.log('*****************************************'.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*     `.cyan, 'SE QUITA LA ULTIMA LETRA'.bgRed, `        *`.cyan);
    console.log('*****************************************'.cyan);
    let derecha = "DAIMER GUERRERO";

    function quitarLetra1() {
      if ( derecha.length > 0) {
        derecha = derecha.slice(0, -1);
        console.log( derecha);
        quitarLetra1(); 
      }
    }
    quitarLetra1();
    console.log('*****************************************'.cyan);
}
main();
console.log('*****************************************'.cyan);
    console.log(`*  `.cyan, 'SE QUITA LA PRIMERA LETRA'.bgRed, `          *`.cyan);
    console.log('*****************************************'.cyan); 

let alreves = "jesus david";

function quitarLetra2() {
  if (alreves.length > 0) {
    console.log(alreves);
    alreves = alreves.slice(1); 
    quitarLetra2();
  }
}

quitarLetra2();
console.log('*****************************************'.cyan);