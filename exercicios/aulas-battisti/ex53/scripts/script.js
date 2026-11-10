const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    // Verifica se o nome está vazio
    if(nameInput.value === '') {
        alert('Por favor, preencha o nome!')
        return
    }

    // verifica se o e-mail está preenchido e é válido 

    if(emailInput.value === '' || !isEmailValid(emailInput.value)) {
        alert('Por favor, preencha o email!')
        return
    }

    // verifica se a senha é válida

    if(!validatePassword(passwordInput.value, 8)) {
        alert('A senha precisa ter no mínimo 8 dígitos!')
        return
    }

     // verifica se a situação foi selecionada

     if(jobSelect.value === '') {
        alert('Por favor, selecione a sua situação!')
        return
     }

     // Verifica se a mensagem está preenchida
     if(messageTextarea.value === '') {
        alert('Por favor, digite uma mensagem!')
        return
     }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit()
})


// Função que valida e-mail
function isEmailValid(email) {
    // Cria uma regex para validar e-mail
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)) {
        return true
    }

    return false
}

// Função que valida senha

function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        return true
    }

    return false
}