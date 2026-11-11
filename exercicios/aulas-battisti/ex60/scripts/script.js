const input = document.querySelector('#input')
const counter = document.querySelector('.counter')
const toggleButton = document.querySelector('#toggle')

let mode = 'Characters'

toggleButton.addEventListener('click', () => {
    if(mode === 'Characters') {
        mode = 'Words'

        toggleButton.textContent = 'Contar caracteres'
    } else {
        mode = 'Characters'

        toggleButton.textContent = 'Contar palavras'
    }

    input.dispatchEvent(new Event('input'))
})

input.addEventListener('input', () => {

    let count = 0

    if(mode === 'Characters') {
        count = input.value.length

        counter.textContent = `${count} caracter(s)`
    } else {
        const words = input.value.trim().split(/\s+/)
        count = input.value.trim() === '' ? 0 : words.length
        
        counter.textContent = `${count} palavras`
    }

})