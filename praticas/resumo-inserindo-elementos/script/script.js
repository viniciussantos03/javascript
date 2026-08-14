// Criar Elemento

const div = document.createElement('div')

div.classList = 'nova-div'

console.log(div)

const container = document.querySelector('#teste')

// Inserindo Elemento

container.appendChild(div)

// insertBefore - Insere antes

const div2 = document.createElement('div')

div2.classList = 'div-before'

console.log(div2)

const div3 = document.querySelector('#teste .nova-div')

container.insertBefore(div2, div3)