function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 18) {
        img.src = 'img/fotomanhã.png'
    }
    else if (hora <= 12 && hora <= 18) {
        img.src = 'img/fototarde.png'
    } else {
        img.src 'img/fotonoite.png'
    }
}

