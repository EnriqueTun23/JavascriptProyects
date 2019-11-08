var angelica = {
    name: 'Angelica',
    lastName: 'Paredes',
    age: 23
}

var ferney = {
    name: 'Ferney',
    lastName: 'Moreno',
    age: 28
}

var lorena = {
    name: 'Lorena',
    lastName: 'Tun',
    age: 23
}

var juan = {
    name: 'Juan',
    lastName: 'valbuena',
    age: 8
}
var pepito = {
    name: 'Pepito',
    lastName: 'Hernandez',
    age: 15
}

var personas = [angelica, ferney, lorena, juan, pepito]

for (let i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.name} tiene ${persona.age} años`)
}