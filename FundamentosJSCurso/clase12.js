var Enrique = {
    nombre: 'Enrique',
    apellido: 'Tun',
    edad: 25,
    ingenierio: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true,
    drone: false
}
var Juan = {
    nombre: 'Juanisimo',
    apellido: 'Tun',
    edad: 15,
    ingenierio: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: true,
    drone: false
}



var mayoriadeEdad = 18;

// se le quita parentesis si es solo un dato
//const validacionEdad = persona => persona.edad >= mayoriadeEdad;
const validacionEdad = ({ edad }) => edad >= mayoriadeEdad;

function imprimirMayordeEdad(persona) {
    if (validacionEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

function permitirAcceso(persona) {
    if (!validacionEdad(persona)) {
        console.log('ACCESO DENEGADO');
    }
}