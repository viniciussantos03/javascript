// 1 - Promisse
// promise based => then e catch's
/*
function loadSomeData() {
    return new Promise(function(resolve, reject) {

        setTimeout(() => {

            const data = {id: 1, name: 'qualquer coisa',}

            resolve(data)
        }, 1000)

    })
}

loadSomeData()
.then(function(data) {
    console.log(`Dados carregados com sucesso, `, data)
    return data
})
.then(function(newData) {
    console.log(`O nome é: ${newData.name}, e seu id é: ${newData.id}`)
})
.catch(function(error) {
    console.log(`aconteceu um ${error}`)
}) 
*/

// 2 - Arrow Function 

function soma(a, b) {
    return a + b
}

console.log(soma(2, 2))

// Arrow Function equivalentes

const somaB = (a, b) => a + b

console.log(somaB(10, 10))

const numeros = [1, 2, 3, 4, 5]

const numerosPares = (numeros).filter((numero) => numero % 2 === 0)

console.log(numerosPares)

// 3 - Destructuring

const pessoa = {
    nome: 'Vinicius',
    idade: 17,
    email: 'vinicius@naosei.com',
}

// extrair nome e email 

const {nome, email} = pessoa

console.log(nome)
console.log(email)

// extrair dados do array 

const numerosB = [1, 2, 3, 4, 5]

const [a, b, c] = numerosB

console.log('A:', a)
console.log('B:', b)
console.log('C:', c)

// extrair na função 

function dadosDoUsuario({nome, email}) {
    console.log(`Nome: ${nome}`)
    console.log(`Email: ${email}`)
}

dadosDoUsuario(pessoa)

// 4 - Template Literals

const nomeUsuario = 'Enzo'
const idade = 67

// strings com concatenação

console.log(`Oi! Meu nome é ${nomeUsuario}, e eu tenho ${idade} anos.`)

// verificar saldo 

const saldo = 1000

const mensagemB = `O saldo é: ${saldo > 0 ? `R$${saldo}` : 'negativo'}`

console.log(mensagemB)

// 5 - Rest e Spread

// rest

function somaC(...numeros) {
    return numeros.reduce((total, numero) => total + numero)
}

console.log(somaC(1, 2, 3, 4, 5))
console.log(somaC(20, 20, 20, 20, 20, 20, 20, 15))

// spread 

const numerosD = [1, 2, 3]
const numerosE = [4, 5, 6]

const numerosConcatenados = [...numerosD, ...numerosE]

console.log(numerosConcatenados)

const pessoaB = {
    nome: 'Vitória',
    idade: 17
}

const dadosPessoaB = {...pessoaB, endereço: 'rua: 1, numero: 10'}

console.log(dadosPessoaB)

// 6 - Class

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresenta() {
        console.log(`Meu nome ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

const pessoa1 = new Pessoa('Vinicius', 17)
const pessoa2 = new Pessoa('Vitória', 17)

pessoa1.apresenta()
pessoa2.apresenta()

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade)
        this.salario = salario
    }

    funcionarioDoAno() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, e meu salário é de R$${this.salario}`)
    }
}

const funcionario1 = new Funcionario('Daniel', 18, 10000)

funcionario1.apresenta()
funcionario1.funcionarioDoAno()

// 7 - Métodos de Array

// map

const numerosF = [1, 2, 3]

const resultado = numerosF.map((numero) => numero * 2)

console.log(resultado)

// filter 

const numerosG = [1, 2, 3, 4, 5]

const resultadoA = numerosG.filter((numero) => numero % 2 === 1)

console.log(resultadoA)

// reduce

const numerosH = [1, 2, 3, 4, 5, 6]

const resultadoB = numerosH.reduce((total, numero) => total + numero, 0)

console.log(resultadoB)

// find

const numerosI = [1, 2, 3]

const resultadoC = numerosI.find((numero) => numero === 3)

console.log(resultadoC)

// forEach

const nomes = ['Pedro', 'Paulo', 'Pietro']

nomes.forEach((nome) => console.log(nome))