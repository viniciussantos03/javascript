for(let x = 10; x >= 0; x--) {
    console.log(x)

    if(x === 5) {
        break
    }
}

console.log('Deu o break')

let c = 0

while(c < 10) {
    c++

    if(c === 5 || c === 9) {
        console.log('continue')
        continue
    }

    console.log('Testando o Continue ' + c)

}