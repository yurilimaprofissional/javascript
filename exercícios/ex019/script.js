var num = document.getElementById('add')
var lista = document.querySelector('select#lista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }

}

function inLista(n, l) {
    if (l.index(Number(n)) != -1) {
        return true
}

    else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

}