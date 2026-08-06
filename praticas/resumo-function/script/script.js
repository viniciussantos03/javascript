function funcao() {
    console.log('Hello World das funções')
}

funcao()

function seuNome(nome) {
    console.log('Seu nome é: ' + nome)
}

seuNome('Vinicius')
seuNome('Gustavo')
seuNome('Daniel')

let nomenoBanco = 'João'

seuNome(nomenoBanco)

function soma(a, b) {
    var res = a += b
    return res
}

let soma1 = soma(10, 5)

console.log(soma1)

let soma2 = soma(30, 19)

console.log(soma2)

console.log(soma(5, 5))