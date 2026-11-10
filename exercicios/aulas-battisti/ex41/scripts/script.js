// 1 - Inserir Dados

localStorage.setItem('name', 'Vinícius')

// 2 - Restart sem perder dados

// 3 - Resgatar item 

const name = localStorage.getItem('name', 'Gabriel')

console.log(name)

// 4 - Resgate do item que não existe

const lastName = localStorage.getItem('lastname')

console.log(lastName)

if(!lastName) {
    console.log('Não tem sobreNome!')
}

// 5 - Remover Item

localStorage.removeItem('name')

// 6 - Limpar todos os items
localStorage.setItem('a', 1)
localStorage.setItem('b', 2)

// console.log(typeof localStorage.getItem('a'))

//localStorage.clear()

// 7 - session storage

sessionStorage.setItem('number', 123)

// 8 - reiniciar e perder dados

const n = sessionStorage.getItem('number')

console.log(n)

// sessionStorage.removeItem('number')

sessionStorage.clear()

// localStorage.setItem("person", person)

const person = {
    name: 'Vinicius',
    age: 17,
    job: 'Student'
}

localStorage.setItem('person', JSON.stringify(person))

const getPerson = localStorage.getItem('person')

console.log(getPerson)

const personObject = JSON.parse(getPerson)

console.log(typeof personObject)

console.log(personObject.name)