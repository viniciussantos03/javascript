// Arrow Function

/* 
(a, b) => {
    return a + b
}

(a, b) => a + b
*/

const a = 10
const b = 12

const somaResumida = (som1, som2) => som1 + som2

console.log(somaResumida(a, b))

const conta = (a, b) => {
    let op

    if(a >= 10) {
        op = a * b
    } else {
        op = a / b
    }

    return op
}

console.log(conta(a, b))

const frase = "O rato roeu a roupa do rei de roma."

let fraseArray = (frase) => frase.split(' ')

console.log(fraseArray(frase))

const e = () => console.log('Não tenho argumentos.')

e()

let roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 80, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'Camiseta', preco: 15, cor: 'Rosa'},
    {produto: 'Calção', preco: 20, cor: 'Azul'},
]

const precoMaiorQue50 = roupas.filter((roupa) => {
    return roupa.preco >= 50
})

console.log(precoMaiorQue50)

setTimeout(() => {
    console.log('Funcionou!')
}, 1500)

// Não usar Arrow!

let pessoa = {
    name: 'Vinícius',
    sayName: function() {
        console.log(this.name)
    }
}

pessoa.sayName()

const btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    this.classList.toggle('clicou')
})