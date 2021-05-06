function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas. `
    if (hora < 12){
        //BOM DIA
        msg.innerHTML += "Bom dia!"
        img.src = "imagens/manha.png"
        document.body.style.background = "#fde4c9"
    }
    else if (hora < 18){
        //BOA TARDE
        msg.innerHTML += "Boa tarde!"
        img.src = "imagens/tarde.png"
        document.body.style.background = "#fec720"
    }
    else{
        //BOA NOITE
        msg.innerHTML += "Boa noite!"
        img.src = "imagens/noite.png"
        document.body.style.background = "#0c1618"
    }
}