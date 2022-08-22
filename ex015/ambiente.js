let num = [5, 8, 2, 9, 3]
num.push(1)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O vetor tem estes valores ${num}.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Os vetores em ordem crescente são ${num.sort()}`)
let pos = num.indexOf(5)
console.log(`O valor 5 esta na posição ${pos}`)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log('Eis o seu valor.')
}