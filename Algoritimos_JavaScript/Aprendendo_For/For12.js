var temperatura
var formula
var calculo
var terminado
while (true){
    temperatura= parseFloat(prompt("digite a temperatura"))
    formula= prompt("digite de qual deseja converter Celsius,Fahrenheit,Kelvin  ")
    calculo= prompt("digite para qual quer converter Celsius,Fahrenheit,Kelvin ")
    if(formula=== "Celsius"& calculo=="Fahrenheit"){
        terminado=temperatura*1.8+32
    }
    if(formula=== "Fahrenheit"& calculo=="Celsius"){
        terminado=(temperatura-32)/1.8
    }
    if(formula=== "Fahrenheit"& calculo=="Celsius"){
        terminado=(temperatura-32)/1.8
    }
}