var num1= parseFloat(prompt("Digite primeiro numero"))
var num2= parseFloat(prompt("Digite segundo numero"))
var calculo
var operação= prompt("Escolha qual operação deseja: Soma,Subtração,Multiplicação,Divisão")

switch(operação){
    case "Soma":
        calculo=num1+num2
    break;

    case"Subtração":
    calculo=num1-num2
    break;

    case"Multiplicação":
    calculo=num1*num2
    break;
    
    case"Divisão":
    calculo=num1/num2
    break;
    
    default:
        alert("Operação incorreta")
        break;
}

alert(`O resultado foi: ${calculo.toFixed(2)}`)