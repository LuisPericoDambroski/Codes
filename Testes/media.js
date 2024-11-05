var n = []
var media
function calculo() {

    n.push(parseFloat(document.getElementById("primeiraNota").value))
    n.push(parseFloat(document.getElementById("segundaNota").value))
    n.push(parseFloat(document.getElementById("terceiraNota").value))
    n.push(parseFloat(document.getElementById("quartaNota").value))

    var soma = 0;
    var count = 0;

    for (const nota of n) {
        if (!isNaN(nota) && nota !== null) {

            soma += nota;
            count++;
        }
    }

    media = soma / n.length

    if (count === 0) {
        alert("Nenhum valor válido inserido.")
    } else {


        media = soma / count;
        document.querySelector("p").innerHTML = (`Média foi ${media.toFixed(2)}`)
    }

    n.length = 0

}
function aprovado() {
    if (media < 5) {
        document.querySelector("p1").innerHTML = (`Você foi Reprovado com media de nota ${media.toFixed(2)}`)
    }
    else {
        document.querySelector("p1").innerHTML = (`Você foi Aprovado com a media de nota ${media.toFixed(2)}`)
    }
}