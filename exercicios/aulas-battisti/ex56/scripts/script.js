function verificarCaracteresEspeciais(string) {
    return string.replace(/[^a-zA-Z0-9]/g, '')
}

console.log(verificarCaracteresEspeciais('Olá, Mundo!'))

console.log(verificarCaracteresEspeciais('(*@$*$(@$*@)$*)@$)@BHGJ@U*#@U(E(#*@EUJ()##*2*@HE*O)UH@EUJ(EDHEU)QJ)))))))))))))))))))))))))))Z)))'))

console.log(verificarCaracteresEspeciais('Meu Nome é Vinícius Arrócha'))

function verificarCaracteresEspecificos(string) {
    return string.replace(/[,!@]/g, '')
}

console.log(verificarCaracteresEspecificos('Olá, Mundo!'))