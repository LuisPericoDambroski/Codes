var array= []
var num
var soma=0
var nota
for(var i=1;i<=5;i++){
    num= parseInt(prompt("digite a nota"))
    array.push(num)
    soma=soma+num
    document.write(`${num}<br>`)
     nota=soma/array.length
   
}
parseFloat(document.write(` ${soma}<br>`))
parseFloat(document.write(` ${array}<br>`))
parseFloat(document.write(`a media da nota foi ${nota}`))