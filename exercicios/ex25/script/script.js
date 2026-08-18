function exibir(num) {
    console.log('O resultado da conta é: ' + num)
}

function soma(a, b, callback) {
    const som = a + b
    callback(som)
}

function multiplicacao(a, b, cb) {
    const mul = a * b
    cb(mul)
}

soma(2, 4, exibir)

multiplicacao(2, 4, exibir)