// IMC DATA
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

// seleção de elmentos
const imcTable = document.querySelector('#imc-table')

const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const calcBtn = document.querySelector('#calc-btn')
const clearBtn = document.querySelector('#clear-btn')

const calcContainer = document.querySelector('#calc-container')
const resultContainer = document.querySelector('#result-container')

const imcNumber = document.querySelector('#imc-number span')
const imcInfo = document.querySelector('#imc-info span')

const backBtn = document.querySelector('#back-btn')

// Funções 

function createTable(data) {
    data.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('table-data')

        const classification = document.createElement('p')
        classification.textContent = item.classification

        const info = document.createElement('p')
        info.textContent = item.info

        const obesity = document.createElement('p')
        obesity.textContent = item.obesity

        div.appendChild(classification)
        div.appendChild(info)
        div.appendChild(obesity)

        imcTable.appendChild(div)
    })
    
}

function clearDigits() {
    heightInput.value = ''
    weightInput.value = ''
    imcNumber.classList = ''
    imcInfo.classList = ''
}

function validiDigits(text) {
    return text.replace(/[^0-9,]/g, "")
}

function calcIMC(height, weigth) {
    const imc = (weigth / (height * height)).toFixed(1)

    return imc
}

function showOrHideResults() {
    calcContainer.classList.toggle('hide')
    resultContainer.classList.toggle('hide')
}

// Inicialização
createTable(data);

// Eventos 

[heightInput, weightInput].forEach((el) => {
    el.addEventListener('input', (e) => {
        const updateValue = validiDigits(e.target.value)
        e.target.value = updateValue
    })
})

calcBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const height = +heightInput.value.replace(',', '.')
    const weigth = +weightInput.value.replace(',', '.')

    if(!height || !weigth) return

    const imc = calcIMC(height, weigth)

    let info

    data.forEach((item) => {
        if(imc >= item.min && imc <= item.max) {
            info = item.info
        }
    })
    
    if(!info) return

    imcNumber.textContent = imc
    imcInfo.textContent = info

    switch(info) {
        case 'Magreza':
            imcNumber.classList.add('low');
            imcInfo.classList.add('low');
        break;
        case 'Normal':
            imcNumber.classList.add('good');
            imcInfo.classList.add('good');
        break;
        case 'Sobrepeso':
            imcNumber.classList.add('low');
            imcInfo.classList.add('low');
        break;
        case 'Obesidade':
            imcNumber.classList.add('medium');
            imcInfo.classList.add('medium');
        break;
        case 'Obesidade Grave':
            imcNumber.classList.add('high');
            imcInfo.classList.add('high');
        break;
    }

    showOrHideResults()
})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault()

    clearDigits()
})

backBtn.addEventListener('click', () => {
    clearDigits()
    showOrHideResults()
})