// =

const pessoa = {}

pessoa.nome = 'Vinícius'
pessoa.idade = 17
pessoa.profissao = 'Estudande EM'

console.log(pessoa)

// []

const carro = {
    carro: 'Ferrari',
    cor: 'Azul'
}

carro['cor'] = 'Amarelo'

const quantidadeRodas = 'quantidadeRodas'

carro[quantidadeRodas] = 4

console.log(carro)

// Object => defineProperty

Object.defineProperty(carro, 'moto', {
    value: 2.0,
    writable: false,
})

console.log(carro)