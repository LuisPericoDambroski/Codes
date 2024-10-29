var array= []
var num
var soma=0
for(var i=1;i<=5;i++){
    num= parseInt(prompt("digite um numero"))
    array.push(num)
    soma=soma+num
    document.write(`${num}<br>`)
   
}

document.write(`a soma dos numero digitados é ${soma}<br>`)
document.write(`${array}<br>`)
document.write(array[3])
