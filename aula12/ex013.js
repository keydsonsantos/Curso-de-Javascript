var agora = new Date()
var diaSem = agora.getDay()
/*  domingo = 0
    segunda = 1
    terça = 2
    quarta = 3
    quinta = 4
    sexta = 5
    SABADO = 6
*/
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('SABADO')
        break
}