// Métodos de Array + repetições

const nomes = ["Vinicius", "João", "Maria", "José", "Ana"]

nomes.forEach( function(nome) {
    console.log(`O nome é ${nome}`)
})

const nomeModificado = nomes.map( function(nome) {
    if (nome === "Vinicius") {
        return "Gelo_Quent38"
    } else {
        return nome
    }
})

console.log(nomeModificado)

const numeroGrande = [1, 2, 3, 4, 5, 100, 1000].filter( function(numero) {
    return numero >= 5
})

console.log(numeroGrande)

const somaTudo = [10, 20, 30, 40, 50].reduce(function(acumulador, numero) {
    return acumulador + numero
})

console.log(somaTudo)

// Teste Object

const coisas = {
    nome: 'vinicus',
    idade: 17,
    profissao: 'programador',
}

const {nome, idade, profissao} = coisas

console.log(profissao)

// Arrow Functions

const minhaArrowFunction = (a, b) => {
    return a + b
}

console.log(minhaArrowFunction(5, 5))

const minhaSimplesArrowFunction = (a, b) => a + b

console.log(minhaSimplesArrowFunction(5, 3))

// Classes

class produto {

    constructor(nome, preco) {
    this.nome = nome
    this.preco = preco
    }

    detalhesProduto() {
        return `O nome do produto é ${this.nome} e o preço é R$${this.preco}`
    }

}

const meia = new produto ('meia branca', 10.99)

const camisa = new produto ('Camisa preta', 20.26)

console.log(meia.nome)
console.log(meia.preco)

console.log(camisa.nome)
console.log(camisa.preco)

console.log(meia.detalhesProduto())

// herança

class superProduto extends produto {
    constructor(nome, preco, tamanho) {
        super(nome,preco)
        this.tamanho = tamanho
    }

    showAdjective(adjetivo) {
        return `O ${this.nome} é muito ${adjetivo}`
    }

    //static

    static sayHello() {
        console.log('Hello')
    }
}

const tenis = new superProduto('Tênis Nike', 800.00, '32')

console.log(tenis.nome)

console.log(tenis.tamanho)

console.log(tenis.showAdjective('BOM'))

superProduto.sayHello()