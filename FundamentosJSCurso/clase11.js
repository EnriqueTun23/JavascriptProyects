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

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if (persona.ingenierio) {
        console.log('Ingenierio')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
}

var mayoriadeEdad = 18;

function validacionEdad(persona) {
    return persona.edad >= mayoriadeEdad;
}

function imprimirMayordeEdad(persona) {
    if (validacionEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}


imprimirProfesiones(Enrique);
imprimirMayordeEdad(Enrique);