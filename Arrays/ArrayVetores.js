
var array = [[], []];


for (var i = 0; i < 5; i++) {
    var num = parseFloat(prompt("Digite o elemento " + (i + 1) + " do vetor A"));
    array[0].push(num)
}


for (var i = 0; i < 5; i++) {
    var num2 = parseFloat(prompt("Digite o elemento " + (i + 1) + " do vetor B"));
    array[1].push(num2)
}

var soma = [];
for (var i = 0; i < 5; i++) {
    soma.push(array[0][i] * array[1][i])
}

document.write("Resultado da soma dos vetores:<br>");
for (var i = 0; i < 5; i++) {
    document.write(`Elemento ${i + 1}: ${soma[i]}<br>`);
}
