var num1
var num2 
var num3 
var num4 
var num5 
var resultado

while (true){
    num1 = parseFloat(prompt("Digite o primeiro numero"))
    if(num1>0 && num1<=1000){break;}
    else{alert("o numero tem que estar entre 1 a 1000")}
}

while (true){
    num2 = parseFloat(prompt("Digite o segundo numero"))
    if(num2>0 && num2<=1000){break;}
    else{alert("o numero tem que estar entre 1 a 1000")}
}
while (true){
    num3 = parseFloat(prompt("Digite o terceiro numero"))
    if(num3>0 && num3<=1000){break;}
    else{alert("o numero tem que estar entre 1 a 1000")}
}

while (true){
    num4 = parseFloat(prompt("Digite o quarto numero"))
    if(num4>0 && num4<=1000){break;}
    else{alert("o numero tem que estar entre 1 a 1000")}
}

while (true){
    num5 = parseFloat(prompt("Digite o quinto numero"))
    if(num5>0 && num5<=1000){break;}
    else{alert("o numero tem que estar entre 1 a 1000")}
}

resultado= (num1+num2+num3+num4+num5)/5

document.write(`A media dos numeros foi ${resultado}`)