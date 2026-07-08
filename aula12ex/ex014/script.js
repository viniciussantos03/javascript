function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += ' Bom Dia!'
        img.src = 'manha.png'
        document.body.style.background = '#c3a97f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += ' Boa Tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#bda98c'
    } else {
        msg.innerHTML += ' Boa Noite!'
        img.src = 'noite.png'
        document.body.style.background = '#636e8c'
    }
}