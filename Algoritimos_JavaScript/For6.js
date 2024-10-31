var atleta190=0
for(var cont=1;cont<=12;cont++){
    var altura= parseFloat(prompt("digite a altura do atleta"))
    if(altura>1.90){
        atleta190=atleta190+1
    }
}
document.write(`a quantidade de atletas com mais de 1.90 é ${atleta190}`)