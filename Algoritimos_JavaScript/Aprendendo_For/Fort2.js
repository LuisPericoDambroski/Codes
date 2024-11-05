var cont
var tabuada= parseInt(prompt("Digite o numero da tabuada desejada"))

for(cont=1;cont<=10;cont++){
    document.write(`${tabuada} x ${cont} =`,tabuada*cont,"<br>")
}