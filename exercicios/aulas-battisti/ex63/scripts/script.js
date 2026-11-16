// Closure

function contador(x) {
    return function (y) {
        return x * y
    }
}

const duplicador = contador(2)
const triplicador = contador(3)

console.log(duplicador(5))
console.log(triplicador(5))

function criarContador() {
    let contador = 0

    return function() {
        contador += 1
        console.log(contador)
    }
}

const meuContador = criarContador()

meuContador()
meuContador()
meuContador()