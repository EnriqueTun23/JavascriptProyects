var enrique = {
    nombre: 'Enrique',
    apellido: 'Tun',
    edad: 25
}
var dario = {
    nombre: 'Dario',
    apellido: 'Xix',
    edad: 18
}

function imprimirEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    var nombre = nombre.toUpperCase()
    console.log(nombre)
}

function imprimirEdadYNombre(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola, me llamo ${nombre} tengo ${edad} años`)
}

imprimirEnMayusculas(enrique)
imprimirEnMayusculas(dario)
imprimirEdadYNombre(enrique)
imprimirEdadYNombre(dario)


function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}