function calculo() {
    var num = parseFloat(document.getElementById("primeiroNumero").value)
    var num1 = parseFloat(document.getElementById("segundoNumero").value)
    var calcular = num * num1
    var perimetro = 2 * (num + num1)

    document.getElementById("resultado").value = calcular
    document.getElementById("perimetro").value = perimetro

}