var bolinhas= 82



for(var cont=1;cont<=5;cont++){
    var numero= parseInt(prompt("digite quantas bolinhas acha que tem no saquinho"))
if(numero>82){
    alert("existe menos bolinhas que o numero digitado")
    
}
else if(numero<82){
    alert("existe mais bolinhas que o numero digitado")
}
else if (numero===82){
    document.write(`Parabems você acertou o numero de bolinhas era ${bolinhas}`)
    {break;}
}

}
