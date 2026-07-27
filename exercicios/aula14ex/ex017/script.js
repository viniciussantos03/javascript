function tabuada() {
    var num = document.getElementById('numero')
    var numv = Number(num.value)
    var tab = document.getElementById('tab')
    var numero = 1
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else { 
    tab.innerHTML = ''
    for (numero; numero <= 10; numero++) {
    let item = document.createElement('option')
    item.text = `${numv} x ${numero} = ${numv*numero}`
    item.value = `tab${numero}`
    tab.appendChild(item)
    }
}
}