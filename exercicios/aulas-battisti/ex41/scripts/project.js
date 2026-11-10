const nameForm = document.querySelector('#name-form')
const welcome = document.querySelector('#welcome')
const logoutBtn = document.querySelector('#logout')

function checkUser() {
    const userName = localStorage.getItem('name')

    if(userName) {
        nameForm.style.display = 'none'
        welcome.style.display = 'block'

        const userNameElement = document.querySelector('#username')

        userNameElement.textContent = userName
    } else {
        nameForm.style.display = 'block'
        welcome.style.display = 'none'
    }
}

nameForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameInput = document.querySelector('#name')

    localStorage.setItem('name', nameInput.value)

    nameInput.value = ''

    checkUser()
}) 

logoutBtn.addEventListener('click', () => {

    localStorage.removeItem('name')
    
    checkUser()
})

checkUser()