var numero= parseFloat(prompt("Digite um numero"))
var contador= 1
while (contador <=10){
    soma= numero*contador
    document.write(`${numero}x ${contador} =${soma}<br>`)
    contador++
}