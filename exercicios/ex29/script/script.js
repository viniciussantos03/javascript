// inserir click

const btn = document.querySelector('#btn')

btn.addEventListener('click', function(){

    console.log('clicou!')
    console.log(this)
    this.style.color = 'red'

})

// click afetando outros elementos

const title = document.querySelector('#title')
const subtitle = document.querySelector('.subtitle')

title.addEventListener('click', function() {

    console.log('título')
    subtitle.style.display = 'none'

})

// double click

subtitle.addEventListener('dblclick', function() {

    console.log('click duplo!')
    
})