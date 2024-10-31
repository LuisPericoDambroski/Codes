function escrevaCalcular() {
    var numero = parseInt(document.getElementById("primeiroFatorial").value)
    var contador 
    var resultado=1
    
    if(numero===0){
        resultado=1
    }
    for (contador =numero ; contador >=1;contador--){

        resultado*=contador
       
    }
    var calculo = resultado

    parseInt(document.getElementById("Resultado").value = (`${calculo.toFixed(2)}`))

}