function multiplicar(){
    var fnum = document.getElementById("numtxt")
    if (fnum.value.length == 0){
        window.alert("Erro! Por favor, digite um valor para gerar a tabuada")
    }
    else{
        var num = Number(fnum.value)
        var res = document.getElementById("res")
        var box_res = document.getElementById("boxres")
        box_res.innerHTML = '' 
        for (var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${c*num}`
            item.value = `tab${c}`
            box_res.appendChild(item)
        }
    } 
}