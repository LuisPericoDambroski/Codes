var nome =prompt("digite seu nome")

var media1 = parseFloat(prompt("Digite a primeira nota:   "))
var media2 = parseFloat(prompt("Digite a segunda nota:    "))
var media3 = parseFloat(prompt("Digite a terceira nota: "))
var media4 = parseFloat(prompt("digite a quarta nota: "))
var resultado

resultado= (media1+media2+media3+media4)/4

if(resultado>=7){
    alert("Voce foi aprovado") 
     document.write(`ó resultado do seu fracasso é ${resultado}`)
}
if(resultado=10){
    alert("parabems voce passou perfeitamente")
    document.write(`voce passou com a perfeição que é ${reultado}`)
}
else {
    alert("você foi reprovado")
     document.write(`ó resultado do seu fracasso é ${resultado}`)
}

