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
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.5

const META = Juan.peso - 3
var dias = 0

while (Juan.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(Juan)
    }
    if (realizaDeporte()) {
        adelgazar(Juan)
    }

    dias += 1
}


console.log(`Pasaron ${dias} días hasta que ${Juan.nombre} adelgazó 3kg`)