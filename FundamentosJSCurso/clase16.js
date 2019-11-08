var signo = prompt('¿Cual es tu signo?')


switch (signo.toLowerCase()) {
    case 'tauro':
        alert(`${signo.toUpperCase()}: Tendrás que adaptarte a los cambios que se presenten en el ámbito laboral. Una figura de poder demostrará inestabilidad.`)
        break
    case 'geminis':
    case 'géminis':
        alert(`${signo.toUpperCase()}: Evita que la subjetividad de alguien pueda mermar las ganas de sacar adelante ese proyecto`)
        break
    case 'cancer':
    case 'cáncer':
        alert(`${signo.toUpperCase()}: Evita excederte en preocupaciones. Algo estaría demorando que se concreten algunas labores.`)
        break
    case 'leo':
        alert(`${signo.toUpperCase()}: Cuidado con las reacciones que este día podrías tener con el entorno laboral. Evita conflictos.`)
        break
    case 'virgo':
        alert(`${signo.toUpperCase()}: Sabrás lidiar con las dificultades que se presenten. Tendrás que regular tu economía de las fluctuaciones.`)
        break
    case 'libra':
        alert(`${signo.toUpperCase()}: Tendrás que poner en orden algún tipo de documentación que has venido descuidando. Sabrás preservar tu economía.`)
        break
    case 'escorpion':
        alert(`${signo.toUpperCase()}: Pierdes interés en ese proyecto. Quizás la falta de motivación sea por otros motivos, que no son profesionales.`)
        break
    case 'sagitario':
        alert(`${signo.toUpperCase()}: Evita tomar a lo personal las diferencias con el entorno laboral. `)
        break
    case 'capricornio':
        alert(`${signo.toUpperCase()}: Estarás en desacuerdo con algunas formas que observes en tu trabajo.`)
        break
    case 'acuario':
        alert(`${signo.toUpperCase()}: Tomarás el control de algunas labores que tenías en mente. `)
        break
    case 'piscis':
        alert(`${signo.toUpperCase()}: Ideas creativas te permitirán dar buena forma a esas labores que ocupan tu tiempo. Si tomas iniciativa, esa persona demostrará su interés.`)
        break
    default:
        alert('No es un signo zodiacal válido')
        break
}