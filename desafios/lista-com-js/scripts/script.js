function addLista() {
    const textoDigitado = document.querySelector('#tarefa').value

    if(textoDigitado) {
        const lista = document.querySelector('.template')

        const listaClonada = lista.cloneNode(true)

        listaClonada.querySelector('.texto').textContent = textoDigitado

        const jogarNaLista = document.querySelector('#lista')

        jogarNaLista.appendChild(listaClonada)

        listaClonada.classList.remove('template')
        listaClonada.classList.remove('hide')

        const removerBotao = listaClonada.querySelector('#remove').addEventListener('click', function() {
            remover(this)
        })

        const adicionarBotao = listaClonada.querySelector('#confere').addEventListener('click', function() {
            adicionar(this)
        })

        document.querySelector('#tarefa').value = ''
    }
}

function remover(task) {
    task.parentNode.parentNode.remove()
}

function adicionar(task) {
    const adicionar = task.parentNode.parentNode
    adicionar.classList.toggle('done')
}

const botao = document.querySelector('.botao')

botao.addEventListener('click', function(e) {
    e.preventDefault()

    addLista()
})