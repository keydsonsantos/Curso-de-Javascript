function contar() {
    var p1 = document.getElementById('n1')
    var p2 = document.getElementById('n2')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')
    
    if (p1.value.length == 0 || p2.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F449}` 
            }
        
        }
        res.innerHTML += `\u{1F6A7} Fim da linha` 
    }
}