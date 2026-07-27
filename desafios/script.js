let estacao = document.body
let temasalvo = localStorage.getItem('tema')
if (temasalvo == 'escuro') {
        estacao.classList.add('escuro')
    }

function tema() {
    let tema = document.getElementById('tema')
    estacao.classList.toggle('escuro')
    if (estacao.classList.contains('escuro')) {
        tema.innerHTML = '<i class="fa-solid fa-sun"></i>'
        localStorage.setItem('tema', 'escuro')
} else {
        tema.innerHTML = '<i class="fa-solid fa-moon"></i>'
        localStorage.setItem('tema', 'claro')
    }
}