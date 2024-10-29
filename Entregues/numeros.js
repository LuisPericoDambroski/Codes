var num1= parseInt(prompt("Digite o primeito numero"))
var num2= parseInt(prompt("Digite o segundo numero"))
var num3= parseInt(prompt("Digite o terceiro numero"))
var num4= parseInt(prompt("Digite o quarto numero"))

if(num1<num2 && num1<num3 &&num1<num4){
    document.write(`O menor numero é ${num1}`)
}
if(num2<num1 && num2<num3 &&num2<num4){
    document.write(`O menor numero é ${num2}`)
}
if(num3<num1 && num3<num2 &&num3<num4){
    document.write(`O menor numero é ${num3}`)
}
if(num4<num1 && num4<num2 &&num4<num3){
    document.write(`O menor numero é ${num4}`)
}