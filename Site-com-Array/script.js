let fnum = document.getElementById('numtxt')
let lista = document.getElementById('boxsel')
let res = document.getElementById("resultado")
let valores = []

function adicionar(){    
    if (fnum.value.length == 0){
        alert('Erro! Digite um número válido!')
    }
    else if (Number(fnum.value) > 100 || Number(fnum.value) < 1){
        alert('Erro! Digite um número de 1 a 100!')
    }
    else if (valores.indexOf(Number(fnum.value)) != -1){
        alert('Este número já está na lista, digite outro')
        }
    else{
        let num = Number(fnum.value)
        valores.push(num)
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado`
        item.value = `${num}`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    fnum.value = ''
    fnum.focus()
}

function calcular(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }
    else{
        res.innerHTML = ''
        var soma = valores.reduce((soma, currentElement) => soma + currentElement)
        res.innerHTML += `Ao todo, temos <strong>${valores.length}</strong> números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi <strong>${Math.max.apply(null, valores)}</strong>.<br>`
        res.innerHTML += `O menor valor informado foi <strong>${Math.min.apply(null, valores)}</strong>.<br>`
        res.innerHTML += `Somando todos os valores temos o total de <strong>${soma}</strong>.<br>`
        res.innerHTML += `A média dos valores informados foi <strong>${soma/valores.length}</strong>.`
    }
}
