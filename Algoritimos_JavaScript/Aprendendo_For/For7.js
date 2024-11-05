// precisa de media
// precisa dos valores
// quantidade sacada por cliente
// 10 clientes no dia 
// valor total sacado no dia
var total
var maior_saque= 1
var cont
var soma =0
for( cont=1;cont<=10;cont++){
    var valor= parseFloat(prompt("digite o valor que deseja sacar"))
    document.write(` o cliente ${cont} valor ${valor} <br>`)
    if(maior_saque<valor){
        maior_saque=valor
    }
    soma=soma+valor
   
   
}
var media = soma/10
document.write(` o maior saque foi $ ${maior_saque}<br>`)
document.write(`A media dos saques foi $ ${media} <br>`)
document.write(`o total dos saques de hoje foi $ ${soma} <br>`)

