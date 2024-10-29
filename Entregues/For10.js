// matricula
// ano
//nome
var matricula

for(var cont=10;cont<12;cont++){
    var nome= prompt("digite seu nome")
    
    var ano= parseInt(prompt("digite o ano"))
    
    if (ano=== 2024){
        matricula=24
        
    }
    
    else if(ano=== 2023){
        matricula=23 
        
    }

    else{alert("ano invalido somente de 2023 a 2024")
    }

    document.write(`<br> seu cadastro foi feito com o nome= ${nome} <br> sua matricula é ${matricula}${cont}<br>`)
}

    
   

