function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas. </br>`
    if (hora >= 0 && hora <= 12) {
        img.src = 'img/fotomanhã.png'
        msg.innerHTML += 'Bom dia!'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'img/fototarde.png'
        msg.innerHTML += 'Boa tarde!' 
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'img/fotonoite.png'
        msg.innerHTML += 'Boa noite!'
        document.body.style.background = '#515154'
    }
}

