const apiKey = ''
const apiCountryURL = 'https://flagsapi.com/'

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const humidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')

const weatherContainer = document.querySelector('#weather-data')

// funções

const getWeatherData = async (city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city)

    if(data === '' || !data.name) {
        alert('Por Favor, Digite uma cidade válida!')
        return
    }

    cityElement.textContent = data.name 
    descElement.textContent = data.weather[0].description
    countryElement.setAttribute('src', apiCountryURL + data.sys.country + '/flat/64.png')
    weatherIconElement.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    tempElement.textContent = Math.round(data.main.temp)
    humidityElement.textContent = `${data.main.humidity}%`
    windElement.textContent = `${data.wind.speed} m/s`

    cityInput.value = ''
    cityInput.focus()

    weatherContainer.classList.remove('hide')
}

// eventos

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const city = cityInput.value

    showWeatherData(city)
})

cityInput.addEventListener('keyup', (e) => {

    if (e.key === 'Enter') {
        const city = e.target.value
        showWeatherData(city)
    }

})

// Sujeito a melhorias