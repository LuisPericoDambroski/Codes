var nome = prompt("Digite seu nome")
var numero = parseFloat(prompt("Digite um numero"))
var resultado

if(numero % 2== 0){resultado="par"}
else{resultado="impar"}

document.write(`O seu numero é ${resultado}`)