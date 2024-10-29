function calcular() {
    var num = parseFloat(document.getElementById("primeiroNumero").value)
    if (num > 0) {
        document.querySelector("p").innerHTML = (`O número 	é positivo. `)
        console.log(`O número 	é positivo. `)
    }
    else if (num < 0) {
        document.querySelector("p").innerHTML = (`O número 	é negativo. `)
        console.log(`O número 	é negativo. `)
    }
    else if (num === 0) {
        document.querySelector("p").innerHTML = (`O número 	é zero. `)
        console.log(`O número 	é zero. `)
    }


}
