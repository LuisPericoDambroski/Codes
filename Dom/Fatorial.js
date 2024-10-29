function escrevaCalcular() {
    var numero = parseFloat(document.getElementById("primeiroFatorial").value)
    var contador = numero
    resultado = 0
    for (contador = numero; contador >= 0; contador--) {
        var resultado = numero * contador * resultado

    }

    parseFloat(document.getElementById("Resultado").value = (`${calculo}`))

}