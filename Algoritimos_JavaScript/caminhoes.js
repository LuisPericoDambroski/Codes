var nome = prompt("Digite seu nome")
var decrição = prompt("Digite descrição")
var peso = parseFloat(prompt("Digite o peso"))
var qtd = parseFloat(prompt("Digite a quantidade"))
var codigo = parseFloat(prompt("Digite o codigo"))
var preçou = parseFloat(prompt("Digite o preço"))
var bruto = preçou * qtd
var imposto
var pesot = peso * qtd
var frete = 0
var total
var impostot

if (bruto < 500) {
    imposto = 0.05
}
if (bruto >= 500 && bruto < 1500) {
    imposto = 0.075

}
if (bruto >= 1500) {
    imposto = 0.1
}
if (pesot > 10) {
    frete = 50
}
impostot = bruto * imposto
total = (bruto + impostot) + frete

document.write(` Codigo: ${codigo}<br>`)
document.write(` Descrição: ${decrição}<br>`)
document.write(` Quantidade: ${qtd}<br>`)
document.write(` Preço unitario: ${preçou.toFixed(2)}<br>`)
document.write(` Imposto: ${impostot}<br>`)
document.write(` Peso total : ${pesot}Kg <br>`)
document.write(` Peso unitario: ${peso}Kg <br>`)
document.write(` Preço total: ${total.toFixed(2)}<br>`)