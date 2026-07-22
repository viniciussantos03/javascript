let num = [1, 5, 9, 3, 0]
num.push(4)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} poscições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}