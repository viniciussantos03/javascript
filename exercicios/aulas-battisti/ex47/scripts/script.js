// pegar elementos
const generatePasswordButton = document.querySelector('#open-generate-password')

const generatedPasswordElement = document.querySelector('#generated-password')

// funções

const letterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const letterUperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSymbols = () => {
    const symbols = '!@#$%¨&*()=+-_{}[];:/?|.'

    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = 
(
    letterLowerCase,
    letterUperCase,
    getNumber,
    getSymbols
) => {
    let password = ''
    let passwordLength = 10

    const generators = [letterLowerCase, letterUperCase, getNumber, getSymbols]

    for(i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValues = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValues

        })
    }

    password = password.slice(0, -2)

    generatedPasswordElement.style.display = 'block'

    generatedPasswordElement.querySelector('h4').textContent = password
}

// eventos

generatePasswordButton.addEventListener('click', () => {
    generatePassword(letterLowerCase, letterUperCase, getNumber, getSymbols)
})