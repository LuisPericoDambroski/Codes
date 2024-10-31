var moeda
var converção
var qtd
var convertido
var resultado

while (true){
    moeda = prompt("Qual moeda voce quer converter: Real,Dolar,Euro")
    if(moeda=="Real"||moeda=="Dolar"||moeda=="Euro"){break;}
    else{alert("Tipo de Moeda incorreto")}
    
}

qtd= parseFloat(prompt("Digite a quantidade "))

while(true){
    converção= prompt("Para qual moeda deseja converter: Real,Dolar,Euro")
    if(converção=="Real"||converção=="Dolar"||converção=="Euro"){break;}
    else{alert("tipo de Moeda incorreto")}
}

if (moeda==="Real" && converção==="Dolar"){
    convertido=0.1844
}

if(moeda==="Real" && converção==="Euro"){
    convertido=0.1719

}

if(moeda==="Dolar" && converção==="Real"){
    convertido=5.4240
}

if(moeda==="Dolar"&&converção==="Euro"){
    convertido=0.9324
}

if(moeda==="Euro" && converção==="Dolar"){
    convertido=1.0725
}

if(moeda==="Euro" && converção==="Real"){
    convertido=5.8168
}

resultado= qtd * convertido

document.write(`O valor da converção da foi ${resultado.toFixed(2)}`)