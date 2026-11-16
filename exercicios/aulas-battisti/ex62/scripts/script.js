// Jeito antigo de usar promisse 

const novaPromessa = new Promise((resolve, reject) => {

})

// Nova forma

const {promise, resolve, reject} = Promise.withResolvers()

promise
.then((value) => {
    console.log('Promisse executada com sucesso!')
}).catch((error) => {
    console.log('Algo deu errado.')
})

if(2 === 3) {
    resolve()
} else {
    reject()
}

// Novos métodos de array
// métodos de array q n alteram os arrays originais 

const numeros = [3, 6, 9, 2, 8, 0, 0, 1]

const numerosCrescentes = numeros.toSorted()

console.log(numeros, numerosCrescentes)

const numeros2 = [1, 2, 3, 4, 5]

const numerosModificados = numeros2.toSpliced(3, 4, 'A', 'B')

const numerosReversos = numeros2.toReversed()

console.log(numeros2, numerosModificados, numerosReversos)

// groupBy => organizar por categorias

const pessoas = [
    {nome: 'José', idade: 18}, 
    {nome: 'Luly', idade: 24}, 
    {nome: 'Bistecone', idade: 27}, 
    {nome: 'Xandão', idade: 32}, 
    {nome: 'Gavi', idade: 18}, 
]

const pessoasAgrupadas = Object.groupBy(
    pessoas,
    (pessoa) => pessoa.idade
)

console.log(pessoasAgrupadas)

// new set => união, intersecção, diferença

const numA = new Set([1, 2, 3])
const numB = new Set([3, 4, 5])

console.log(numA.union(numB))
console.log(numA.intersection(numB))
console.log(numA.difference(numB))

// Import nativo

import configuracao from "../configuracao.json" with {type: "json"}

console.log(configuracao.servidor)

console.log(configuracao.maxConexoes)