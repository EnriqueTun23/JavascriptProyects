function diasEntreFechas(fecha1, fecha2) {
    const unDía = 1000 * 60 * 60 * 24  
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor( diferencia/unDía)
}

const hoy = new Date()
const nacimiento = new Date(1994, 9, 23)