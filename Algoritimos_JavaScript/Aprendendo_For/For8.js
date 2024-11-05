var cont
var soma =0
for( cont=1;cont<=30;cont++){
    
    var data= parseFloat(prompt("Idade do bebe"))
    document.write(`o bebe ${cont++} tem   ${data} <br>`)
    
    soma=soma+data
    
   
}
var media = soma/30
document.write(`A media dos dias dos bebes  foi ${media} <br>`)
