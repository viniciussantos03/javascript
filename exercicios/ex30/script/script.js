// mouseover

const title = document.querySelector('#title')

title.addEventListener('mouseover', function() {

    title.style.backgroundColor = 'blue'

})

// mouseout

title.addEventListener('mouseout', function() {

    title.style.backgroundColor = 'white'

})

// aparecer elemento

const subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('mouseover', function() {

    const legenda = document.querySelector('#legenda')
    legenda.classList.remove('hide')

})

subtitle.addEventListener('mouseout', function() {

    const legenda = document.querySelector('#legenda')
    legenda.classList.add('hide')

})