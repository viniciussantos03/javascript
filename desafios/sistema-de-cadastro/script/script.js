const botao = document.querySelector('#cadastrar')

botao.addEventListener('click', function(e) {
    e.preventDefault()

    cadastro()
})

function cadastro() {
    const nome = document.querySelector('#nome')
    const nomeValor = nome.value

    const idade = document.querySelector('#idade')

    const idadeValor = Number(idade.value)

    const email = document.querySelector('#email')
    const emailValor = email.value
    const temArroba = /@/.test(emailValor)

    const cidade = document.querySelector('#cidade')
    const cidadeV1 = cidade.value
    const cidadeValor = Number(cidade.value)

    if(nomeValor === '') {
        alert('Por favor, digite seu nome!')
        return
    }

    if(idade.value === '' || idadeValor <= 0 || idadeValor >= 123) {
        alert('Por favor, digite uma idade válida!')
        return
    }

    if(email.value.length <= 6) {
        alert('Por favor, digite um email acima de 6 caracteres!')
        return
    }

    if(!temArroba) {
        alert('Por favor, coloque @!')
        return
    }
    
    if(cidadeV1 === '') {
        alert('Por favor, digite uma cidade válida')
        return
    }

    if(cidadeValor) {
        alert('Por favor, coloque letras')
        return
    } else {
        const resultado = document.querySelector('.resultado')

        const informacoes = resultado.cloneNode(true)

        informacoes.querySelector('.informacao').innerHTML += `${nomeValor} de ${idadeValor} anos, com email ${emailValor} da cidade ${cidadeV1} foi cadastrado com sucesso! <br>`

        informacoes.querySelector('.editar').classList.remove('hide')

        informacoes.querySelector('.excluir').classList.remove('hide')

        const containerResultado = document.querySelector('#container-resultado')

        containerResultado.appendChild(informacoes)

        console.log(containerResultado)

        nome.value = ''
        idade.value = ''
        email.value = ''
        cidade.value = ''

        informacoes.querySelector('.excluir').addEventListener('click', function() {
            remover(this)
        })

        informacoes.querySelector('.editar').addEventListener('click', function() {
            edicao(this)
        })

        function remover(del) {
        del.parentNode.remove()
        }

        function edicao(add) {
            informacoes.textContent = ''
            nome.value = nomeValor
            idade.value = idadeValor
            email.value = emailValor
            cidade.value = cidadeV1
        }
    }
}