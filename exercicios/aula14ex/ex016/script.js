function contar() {
    let inicio = document.getElementById('inicio')
    let numi = Number(inicio.value)
    let fim = document.getElementById('fim')
    let numf = Number(fim.value)
    let passo = document.getElementById('passo')
    let nump = Number(passo.value)
    let res = document.getElementById('res')
    res.innerHTML = 'Contando: <br>'

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        return
    } else {
    if (nump <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1') 
        nump = 1
    } 
    if (numi <= numf) { 
        for (let c = numi; c <= numf; c = c + nump) {
        res.innerHTML += c + ' 👉 '
    }
    } else {
        for (let c = numi; c >= numf; c = c - nump) {
            res.innerHTML += c + ' 👉 '
        }
    }
    res.innerHTML += '🏴'
}
}