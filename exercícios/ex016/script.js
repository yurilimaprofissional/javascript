function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Faltam Dados!')
    }
    else {
        res.innerHTML = 'Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f) {
            //Contagem crescente
            for(var c = i ; c <= f ; c = c + p){
                res.innerHTML += ` ${c} \u{1f449}`
           }
        } else {
            //Contagem decrescente
            for(var c = i; c >= f; c = c - p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
     }
    }

