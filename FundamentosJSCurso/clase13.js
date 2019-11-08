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
    peso: 75
}

console.log(`Al inicio del año ${Juan.nombre} pesa ${Juan.peso} kg`)

const INCREMENTO_PESO = .5
const DIAS_DELA_ANIO = 365


const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (let i = 1; i <= DIAS_DELA_ANIO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(Juan);
    } else if (random < 0.5) {
        adelgazar(Juan);
    }

}

console.log(`Al Final del año ${Juan.nombre} pesa ${Juan.peso.toFixed(2)} kg`)