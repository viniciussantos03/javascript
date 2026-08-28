const botao = document.querySelector('#botao')

botao.addEventListener('click', function(e) {
    e.preventDefault()

    calcular()
})

function calcular() {

    const nome = document.querySelector('#nome').value
    const idade = document.querySelector('#idade')
    const idadeValor = Number(idade.value)

    const peso = document.querySelector('#peso')
    const pesoValor = Number(peso.value)

    const altura = document.querySelector('#altura')
    const alturaValor = Number(altura.value)
    
    const texto = document.querySelector('.texto')

    if(nome === '') {
        alert('digite seu nome')
        return
    }
    
    if(idade.value === '') {
        alert('digite sua idade')
        return
    }

    if(idadeValor > 0 && idadeValor <= 122) {

    if ((pesoValor >= 4 && pesoValor <= 635) && (alturaValor > 0 && alturaValor <= 2.72)) {
        const calculoIMC = (pesoValor / (alturaValor * alturaValor)).toFixed(2)

        if(calculoIMC  <= 18.5) {
            texto.textContent = `${nome} de ${idadeValor} anos tem o IMC de ${calculoIMC}, está abaixo da média!`
        } else if(calculoIMC > 18.5 && calculoIMC <= 24.9) {
            texto.textContent = `${nome} de ${idadeValor} anos tem o IMC de ${calculoIMC}, está na média`
        } else if(calculoIMC > 24.9) {
            texto.textContent = `${nome} de ${idadeValor} anos tem o IMC de ${calculoIMC}, está acima da média!`
        }
    } else {
        texto.textContent = 'Por favor, digite números válidos!'
    }
    } else {
        texto.textContent = 'adicione uma idade válida!'
    }
}
