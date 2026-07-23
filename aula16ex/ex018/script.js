let num = document.getElementById('num')
let lista = document.getElementById('tab')
let res = document.getElementById('res')
let sequencia = []

function ifNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (ifNumero(num.value) && !inList(num.value, sequencia)) {
        sequencia.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Seu número não é válido ou já está na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (sequencia.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let tot = sequencia.length
        let maior = sequencia[0]
        let menor = sequencia[0]
        let soma = 0
        for (let pos in sequencia) {
            soma += sequencia[pos]
            if (sequencia[pos] > maior) {
                maior = sequencia[pos]
            }
            if (sequencia[pos] < menor) {
                menor = sequencia[pos]
            }
        }
        let media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p> `
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}