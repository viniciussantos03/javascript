// keydown

document.addEventListener('keydown', function(event) {

    if(event.key === '') {

        console.log('clicou no a')

    }

}) 

//keyup

document.addEventListener('keyup', function(e){

    if(e.key === 'Enter')
        console.log('soltou o Enter')
})