var numero= parseFloat(prompt("numero"))
var contador=1
var resultado=1
    for(contador=1;contador<=numero;contador++){
        numero*=contador
        document.write(`${numero}<br>`)
    }
    document.write(`${numero}}<br>`)