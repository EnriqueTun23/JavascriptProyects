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

function imprimirMayordeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}


imprimirProfesiones(Enrique);
imprimirMayordeEdad(Enrique);