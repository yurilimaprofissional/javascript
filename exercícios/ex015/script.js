function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
    window.alert ('Verifique os dados e tente novamente!')
   }
   else {
    var sexo = document.getElementsByName('sexo')
    var idade = ano - Number(fano.value)
    var gênero = '' }
    var img = document.createElement('img')
    img.setAttribute(`id`, `foto`)
    if (sexo[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10) {// Criança
        }
        
        else if (idade < 21) {
            //Jovem
        }

        else if (idade < 50) {
            //adulto
        }

        else { //senhor 
             }
    }


    else 
        {gênero = 'Mulher'

        if (idade >= 0 && idade < 10) {// Criança
            }
        
        else if (idade < 21) {
            //Jovem
        }

        else if (idade < 50) {
            //adulto
        }

        else { //senhor 
             }
    res.computedStyleMap.textAlignh = 'center'
    res.innerHTML = `É uma mulher com ${idade} anos.`}
   
}