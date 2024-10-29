
var array= []
var num

for(var i=1;i<=6;i++){
    num= parseInt(prompt("digite um numero"))
    array.push(num)
    
    document.write(`${num}<br>`)
   
}

var invertidoArray = [...array].reverse();

document.write(`Array normal ${array}<br>`)
document.write(`Array invertido: ${invertidoArray}<br>`);