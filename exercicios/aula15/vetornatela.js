let valores = [1, 3, 9, 5, 6, 2]
valores.sort()
//console.log(valores)
/*
console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for (let num = 0; num < valores.length ; num++) {
    console.log(`A posição ${num} tem o valor ${valores[num]}`)
}
*/

for (let num in valores) {
    console.log(`A posição ${num} tem o valor ${valores[num]}`)
}