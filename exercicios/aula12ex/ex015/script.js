function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente!')
    } else {
         var fsex = window.document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.png')
            } else {
                img.setAttribute('src', 'idoso-m.png')
            }
         } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f.png')
            } else {
                img.setAttribute('src', 'idoso-f.png')
            }
         }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}