// Inserir o elemento no body

const paragrafo = document.createElement('p')

const textoParagrafo = document.createTextNode('Este é o texto do parágrafo')

paragrafo.appendChild(textoParagrafo)

console.log(paragrafo)

const body = document.querySelector('body')

console.log(body)

body.appendChild(paragrafo)

// Inserir em container

const div = document.getElementById('teste')

const span = document.createElement('span')

span.appendChild(document.createTextNode('Texto do span'))

console.log(div)

div.appendChild(span)