// clearTimeout

let x = 0

let myTimer = setTimeout( function() {
    console.log('x é igual a 0')
}, 1500)

x = 5

if(x > 0) {

    clearTimeout(myTimer)
    console.log('O x passou de 0')
    
}

// clearInterval

let myInterval = setInterval( function() {
    console.log('Imprimindo')
}, 500)

setTimeout( function() {

    console.log('Não precisamos mais repetir!')
    clearInterval(myInterval)

}, 1500)