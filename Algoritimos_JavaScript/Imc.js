var nome = parseInt(prompt("Digite seu nome"))
var altura = parseFloat(prompt("Digite sua altura"))
var peso = parseFloat(prompt("Digite seu peso"))

var Imc = peso / (altura * altura)

if (Imc < 18.15) {
    document.write(`O valor do seu imc é ${Imc} <br/> voce está abaixo do peso ideal`)
}
else if (Imc >= 18.5 && Imc <= 24.9) {
    document.write(`O valor do seu imc é ${Imc} <br/> Parabems, você está no seu peso normal!`)
}
else if (Imc > 24.9 && Imc <= 30) {
    document.write(`O valor do seu imc é ${Imc} <br/> voce está acima do peso`)
}
else if (Imc > 30 && Imc <= 34.9) {
    document.write(`O valor do seu imc é ${Imc} <br/> voce está com obesidade grau 1`)
}
else if (Imc > 35 && Imc <= 39.9) {
    document.write(`O valor do seu imc é ${Imc} <br/> voce está com obesidade grau 2`)
}
else if (Imc > 40) {
    document.write(`O valor do seu imc é ${Imc}</br> voce esta com obesidade grau 3`)
}
