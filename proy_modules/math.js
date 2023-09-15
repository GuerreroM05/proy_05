const functions = {}


function mayusculas(jesus) {
    return jesus.toUpperCase();
}
function minusculas(DAVID) {
    return DAVID.toLowerCase();
}
function mayusculasyminusculas(jesus , david) {
    return jesus[0].toUpperCase() + jesus.substring(1).toLowerCase() +"  " + david[0].toUpperCase() + david.substring(1).toLowerCase();
}





functions.minusculas = minusculas;
functions.mayusculas = mayusculas;
functions.mayusculasyminusculas = mayusculasyminusculas;

module.exports = functions;