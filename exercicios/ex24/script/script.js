// Criar um Elemento

const el = document.createElement('h3')

el.classList = 'Testando-Classe'

const texto = document.createTextNode('Esse é o h3')

el.appendChild(texto)

console.log(el)

// Selecionar o elemento que quero trocar

const title = document.querySelector('#title')

console.log(title)

// Selecionar o pai do el

const pai = title.parentNode

// Trocar os Elementos

pai.replaceChild(el, title)