let estacao = document.body
let temasalvo = localStorage.getItem('tema')
let botaotema = document.getElementById('tema')
if (temasalvo == 'escuro') {
        estacao.classList.add('escuro')
        botaotema.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }

function tema() {
    estacao.classList.toggle('escuro')
    if (estacao.classList.contains('escuro')) {
        botaotema.innerHTML = '<i class="fa-solid fa-sun"></i>'
        localStorage.setItem('tema', 'escuro')
} else {
        botaotema.innerHTML = '<i class="fa-solid fa-moon"></i>'
        localStorage.setItem('tema', 'claro')
    }
}