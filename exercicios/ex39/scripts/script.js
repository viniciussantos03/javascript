const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
]

// 1 - Reverse

const dataReversa = data.reverse()

console.log(dataReversa)

// 2 - find

const maiorValor = data.find((user) => user.sallary > 5000)

console.log(maiorValor)

// 3 - findIndex


const menorValor = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000)

data[menorValor].sallary += 200

console.log(data[menorValor])

// 4 - Includes
const numeros = [1, 2, 3, 4, 5]

const quatroIncluido = numeros.includes(4)

console.log(quatroIncluido)

const cemIncluido = numeros.includes(100)

console.log(cemIncluido)

// 5 - map

data.map((user) => (user.newsletter = false));

console.log(data);

// 6 - Filter

const drivers = data.filter((user) => user.driverLicense)

console.log(drivers)

// 7 - Reduce

const umValor = data.reduce((salariototal, user) => (salariototal += user.sallary), 0)

console.log(umValor)

// 8 - forEach

const todosNomes = (users) => {
    users.forEach((user) => {
    console.log(`Olá ${user.name}!`)
  })
}

todosNomes(data)

// 9 - some

let alguemComNewsLetter = data.some((user) => user.newsletter)

console.log(alguemComNewsLetter)

data[0].newsletter = true

alguemComNewsLetter = data.some((user) => user.newsletter)

console.log(alguemComNewsLetter)

// 10 - every

const todosUsuariosComNome = data.every((user) => user.name)

console.log(todosUsuariosComNome)

const todosTemBomSalario = data.every((user) => user.sallary)

console.log(todosTemBomSalario)