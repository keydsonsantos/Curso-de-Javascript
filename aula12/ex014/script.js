function carregar() {
    var msg = window.document.getElementById('img')
var img = window.document.getElementById('imagem')
}
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=  && hora < 12) {
        //BOM DIA!
        img.src = ""
     } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
     } else (hora >= 18) {
        //BOA NOITE!
     }