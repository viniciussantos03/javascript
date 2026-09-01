const pessoa = [
    {
    nome: "Vinícius",
    idade: 20,
    esta_trabalhando: true,
    detalhes_profissao: {
        trabalhalho: "programador",
        empresa: "empresa de tecnologia",
        salario: 2000,
    },
},
    {
    hobbies: ["animes", "programar", "jogar"],

    nome: "João",
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissao: {
        trabalhalho: null,
        empresa: null,
        salario: 0,
    },
    hobbies: ["academia", "estudar", "dançar"],
},
]

// JSON

// converter objeto para JSON
const pessoaJSON = JSON.stringify(pessoa)

console.log(pessoaJSON)
console.log(typeof pessoaJSON)

// converter JSON para objeto

const pessoaObjeto = JSON.parse(pessoaJSON)

console.log(pessoaObjeto)
console.log(typeof pessoaObjeto)

pessoaObjeto.map((pessoa) => {
    console.log(pessoa.nome)
})