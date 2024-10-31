function calcular() {
    var valor_raio = parseFloat(document.getElementById("raio").value)
    var pi = 3.14
    var calculoarea = pi * valor_raio * valor_raio
    var calculoperimetro = 2 * pi * valor_raio

    document.querySelector("p").innerHTML = (`a area é ${calculoarea}`)
    document.querySelector("p1").innerHTML = (`o perimetro é ${calculoperimetro}`)
}