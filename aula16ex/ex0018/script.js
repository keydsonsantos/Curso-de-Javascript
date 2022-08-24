let num = document.getElementById('fnum')//digitar o numero
let lista = document.getElementById('flista')//barra de lista
let res = document.getElementById('res')//aparecer resposta
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adiconar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}