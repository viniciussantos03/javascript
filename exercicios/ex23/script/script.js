var teste = 5

console.log(this.teste)

console.log(teste)

const pessoa = {
    nome: 'Vínicius',
    idade: 17,
    falar: function() {
        console.log('Olá Pessoas!')
    },
    dizerNome: function() {
        console.log('O meu nome é ' + this.nome)
    },
    fezAniversario: function() {
        this.idade += 1
    },
    saudacao: function() {
        return 'Sr. ' + this.nome
    }
}

pessoa.dizerNome()

console.log(pessoa.idade)

pessoa.fezAniversario()
pessoa.fezAniversario()
pessoa.fezAniversario()

console.log(pessoa.idade)

const sdc = pessoa.saudacao()

console.log('Olá ' + sdc)

