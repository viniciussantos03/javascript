// Criando Promisse

const myPromisse = new Promise((resolve, reject) => {
    const nome = 'Vinicius'

    if(nome === 'Vinicius') {
        resolve('Usuário Vinicius encontrado!')
    } else {
        reject('Usuário Vinicius não encontrado!')
    }
})

myPromisse.then((data) => {
    console.log(data)
})

// Encadeamento de then's

const myPromisse2 = new Promise((resolve, reject) => {
    const nome = 'Vinicius'

    if(nome === 'Vinicius') {
        resolve('Usuário Vinicius encontrado!')
    } else {
        reject('Usuário Vinicius não encontrado!')
    }
})

myPromisse2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// Retorno do Catch

const myPromisse3 = new Promise((resolve, reject) => {
    const nome = 'lalala'

    if(nome === 'Vinicius') {
        resolve('Usuário Vinicius encontrado!')
    } else {
        reject('Usuário Vinicius não encontrado!')
    }
})

myPromisse3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})

// Resolver Várias Promisse

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Ok! Timeout')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 Ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 Ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('Depois do all()')

// Várias Promessas com race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 Ok! Timeout')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 Ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 Ok!')
})

const vel = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

// Fetch request na API do GitHub
// Fetch API

const userName = 'viniciussantos03'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'Get',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)

    console.log(response)

    return response.json()
}).then((data) => {
    console.log(data.name)
}).catch((err) => {
    console.log('Houve algum erro: ' + err)
})