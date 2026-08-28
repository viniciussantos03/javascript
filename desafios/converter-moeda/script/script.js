const botao = document.querySelector('#botao')

botao.addEventListener('click', function(e) {
    e.preventDefault()

    conversao()
})

function conversao() {
    const numero = document.querySelector('#numero').value
    const numeroValor = Number(numero)

    const escolha = document.querySelector('#escolha-moeda').value

    const resultado = document.querySelector('.resultado')

    if(numero === '') {
        alert('Por favor, digite um número!')

        return
    }

    if(escolha === '') {
        alert('Por favor, selecione uma moeda!')

        return
    } else if(escolha === 'usd') {
        const formatadoDolar = new Intl.NumberFormat('en-US', {
            style:  "currency", 
            currency: 'USD',
        })

        const calculoDolar = numeroValor / 5.16

        resultado.textContent = formatadoDolar.format(calculoDolar)

        resultado.classList.remove('hide')
    } else if (escolha === 'eur') {
        const formatadoEuro = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        })

        const calculoEuro = numeroValor / 6.02

        resultado.textContent = formatadoEuro.format(calculoEuro)

        resultado.classList.remove('hide')
    } else if(escolha === 'gbp') {
        const formatadoLibraEstrelina = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        })

        const calculoLibraE = numeroValor / 7.02

        resultado.textContent = formatadoLibraEstrelina.format(calculoLibraE)

        resultado.classList.remove('hide')
    } else if(escolha === 'jpy') {
        const formatadoIene = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',
        })

        const calculoIene = numeroValor * 30.87

        resultado.textContent = formatadoIene.format(calculoIene)

        resultado.classList.remove('hide')
    } else if(escolha === 'cad') {
        const formatadoDC = new Intl.NumberFormat('fr-CA', {
            style: 'currency',
            currency: 'CAD'
        })

        const calculoDC = numeroValor * 0.27

        resultado.textContent = formatadoDC.format(calculoDC)

        resultado.classList.remove('hide')
    } else if(escolha === 'aud') {
        const formatadoDA = new Intl.NumberFormat('en-AU', {
            style: 'currency',
            currency: 'AUD',
        })

        const calculoDA = numeroValor * 0.27

        resultado.textContent = formatadoDA.format(calculoDA)

        resultado.classList.remove('hide')
    }
}
