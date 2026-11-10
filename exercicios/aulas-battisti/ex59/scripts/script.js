// verificar data

function isValidDate(dateString) {
    const date = new Date(dateString)

    return !isNaN(date.getTime())
}

console.log(isValidDate('2026-11-10'))

console.log(isValidDate('13091930239'))

// verificar outros formatos de data com regex

function isValidDateRegex(dateString) {

    const date = /^\d{2}\/\d{2}\/\d{4}$/

    return date.test(dateString)
}

console.log(isValidDateRegex('2026-11-10'))

console.log(isValidDateRegex('14/05/2009'))

console.log(isValidDateRegex('9128129183'))