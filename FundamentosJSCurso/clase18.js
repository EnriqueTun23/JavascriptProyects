var angelica = {
    name: 'Angelica',
    lastName: 'Paredes',
    age: 23,
    height: 1.75
}

var ferney = {
    name: 'Ferney',
    lastName: 'Moreno',
    age: 28,
    height: 1.75
}

var lorena = {
    name: 'Lorena',
    lastName: 'Tun',
    age: 23,
    height: 1.45
}

var juan = {
    name: 'Juan',
    lastName: 'valbuena',
    age: 8,
    height: 1.25
}
var pepito = {
    name: 'Pepito',
    lastName: 'Hernandez',
    age: 15,
    height: 1.35
}

const esAlta = persona => persona.height > 1.7
const esBaja = persona => persona.height < 1.5


var personas = [angelica, ferney, lorena, juan, pepito]

/*
    Filtrar arrar es con filter

*/


var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)


for (let i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.name} tiene ${persona.age} años`)
}

console.log(personasAltas)
console.log(personasBajas)