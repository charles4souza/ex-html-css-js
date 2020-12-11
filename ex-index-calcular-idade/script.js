function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade <10){
                //criança
                img.setAttribute('src', 'foto-meninocriança.png')
            } else if(idade<21){
                //Jovem
                img.setAttribute('src', 'foto-homemjovem.png')
            }else if(idade<50) {
                //Adulto
                img.setAttribute('src', 'foto-homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-homemidoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade>=0 && idade <10){
                //criança
                img.setAttribute('src', 'foto-meninacriança.png')
            } else if(idade<21){
                //Jovem
                img.setAttribute('src', 'foto-mulherjovem.png')
            }else if(idade<50) {
                //Adulto
                img.setAttribute('src', 'foto-mulheradulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-mulheridosa.png')
            }
        }    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}