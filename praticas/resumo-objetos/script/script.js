const pessoa = {
    nome: 'Vínicius',
    idade: 17,
    falar: function() {
        console.log('Olá Pessoas!')
    },
    soma: function(a, b) {
        return a + b
    }
}

console.log(pessoa.nome)

console.log(pessoa.idade)

pessoa.falar()

const soma = pessoa.soma(2, 2)

console.log(soma)
