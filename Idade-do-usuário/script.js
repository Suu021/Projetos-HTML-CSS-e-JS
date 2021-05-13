function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("anotxt")
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("ERRO! Verifique os dados e tente novamente!")
    }
    else{
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName("radsex")
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var gênero = ""
        if (fsex[0].checked){
            gênero = "Homem"
            if (idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/crianca-m.png')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            }
            else if (idade < 60){
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }
        else{
            gênero = "Mulher"
            if (idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/crianca-f.png')
            }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            }
            else if (idade < 60){
                //adulta
                img.setAttribute('src', 'imagens/adulta.png')
            }
            else{
                //idosa
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        var res = document.getElementById("res")
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}