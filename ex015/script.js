function verificar() {
    var data = new Date() /*data atual do pc. */
    var ano = data.getFullYear() /*os 4 digitos do ano atual do pc.*/
    var fano = document.getElementById('txtano') /*Vai pegar o ano digitado no formulário. */
    var res = document.getElementById('res') /*daqui sai o resultado após*/

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
           gênero = 'Homem' 

           if (idade >=0 && idade < 12) {
            //criança
            img.setAttribute('src', 'foto-menino.png')
           } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto-meninoadoles.png')
           } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'foto-homem.png')
           } else {
            //idoso
            img.setAttribute('src', 'foto-homemvelho.png')
           }

        }else if (fsex[1].checked) {
            gênero = 'Feminino'

            if (idade >= 0 && idade < 12) {
                //criança
               } else if (idade < 21) {
                //jovem
               } else if (idade < 50) {
                //adulto
               } else {
                //idoso
               }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}