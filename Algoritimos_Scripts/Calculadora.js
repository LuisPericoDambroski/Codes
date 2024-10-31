var titulo = document.querySelector(`h1`)
titulo.innerHTML = "hello world"
var paragrafo = document.querySelector(`p`)

function escrevasoma() {
    var num1 = parseFloat(prompt("digite um numero"))
    var num = parseFloat(prompt("digite outro numero"))
    soma = num1 + num
    alert(`o resultado da soma foi ${soma}`)
}
function nome_sobrenome() {
    var nome = document.getElementById("firstName").value
    var sobrenome = document.getElementById("lastName").value
    document.getElementById("first_last").value = (`${nome}${sobrenome}`)
}
function escrevamultiplicar() {
    var mum1 = parseFloat(document.getElementById("firstNumber").value)
    var mum2 = parseFloat(document.getElementById("secondNumber").value)

    var operação = prompt("Escolha qual operação deseja: Soma,Subtração,Multiplicação,Divisão")

    var calculo

    switch (operação) {
        case "Soma":
            calculo = mum1 + mum2
            break;

        case "Subtração":
            calculo = mum1 - mum2
            break;

        case "Multiplicação":
            calculo = mum1 * mum2
            break;

        case "Divisão":
            calculo = mum1 / mum2
            break;

        default:
            alert("Operação incorreta")
            break;
    }

    document.getElementById("first_second").value = (`${calculo.toFixed(2)}`)
}

function calculoimc() {
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var Imc = peso / (altura * altura)

    parseFloat(document.getElementById("situação").value = (`${Imc}`))

    if (Imc < 18.15) {
        var imc2 = document.querySelector("p2")
        imc2.innerHTML = ("abaixo do peso")

    }
    else if (Imc >= 18.5 && Imc <= 24.9) {
        imc2 = document.querySelector("p2")
        imc2.innerHTML = (`O valor do seu imc é ${Imc}  Parabems, você está no seu peso normal!`)
    }
    else if (Imc > 24.9 && Imc <= 30) {
        imc2 = document.querySelector("p2")
        imc2.innerHTML = (`O valor do seu imc é ${Imc}  voce está acima do peso`)
    }
    else if (Imc > 30 && Imc <= 34.9) {
        imc2 = document.querySelector("p2")
        imc2.innerHTML = (`O valor do seu imc é ${Imc}  voce está com obesidade grau 1`)
    }
    else if (Imc > 35 && Imc <= 39.9) {
        imc2 = document.querySelector("p2")
        imc2.innerHTML = (`O valor do seu imc é ${Imc}  voce está com obesidade grau 2`)
    }
    else if (Imc > 40) {
        imc2 = document.querySelector("p2")
        imc2.innerHTML = (`O valor do seu imc é ${Imc} voce esta com obesidade grau 3`)
    }

}

