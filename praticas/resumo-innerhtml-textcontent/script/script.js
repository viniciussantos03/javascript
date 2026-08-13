//selecionar elemento

const title = document.querySelector('#title')

//innerHTML

title.innerHTML = 'Título Alterado!'

//textContent -> mais utilizado, recomendado e prefomático

const subtitle = document.querySelector('.subtitle')

console.log(subtitle)

subtitle.textContent = 'Subtítulo Alterado Também!'
