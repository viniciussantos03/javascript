// length

const nome = 'Vínicius'

console.log(nome.length)

const obj = 'bola'

console.log(obj.length)

// indexOf

console.log(nome[1])

const frase = 'O rato roeu a roupa do rei de Roma'

console.log(frase.indexOf('roeu'))

// slice

const roeu = frase.slice(7, 11)

console.log(roeu)

//replace 

const novaFrase = frase.replace('roeu', 'moeu')

console.log(novaFrase)

// toLowerCase e toUpperCase

const frase2 = 'Gabriel adora comer batata frita!'

const fraseCaixaAlta = frase2.toUpperCase()

console.log(fraseCaixaAlta)

console.log(fraseCaixaAlta.toLowerCase())

// trim

const nome2 = '              Vínicius           '

console.log(nome2)

console.log(nome2.trim())

// split

console.log(frase2.split(' '))

const lista = 'PHP, HTML, CSS, JavaScript'

console.log(lista.split(', '))

// lastIndexOf

const frase3 = 'Eu quero a última palavra teste para fazer um teste.'

console.log(frase3.indexOf('teste'))

console.log(frase3.lastIndexOf('teste'))