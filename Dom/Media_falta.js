var media
function calculo() {

    var n1 = parseFloat(document.getElementById("primeiraNota").value)
    var n2 = parseFloat(document.getElementById("segundaNota").value)
    var n3 = parseFloat(document.getElementById("terceiraNota").value)
    var n4 = parseFloat(document.getElementById("quartaNota").value)

    media = (n1 + n2 + n3 + n4) / 4
    parseFloat(document.querySelector("p").innerHTML = (`sua media é ${media}`))




}
function aprovado() {
    var faltas = parseFloat(document.getElementById("qtdFaltas").value)
    var prova = parseFloat(document.getElementById("nota_prova").value)
    if (media >= 7 && faltas < 10) {
        document.querySelector("p1").innerHTML = (`Você foi Aprovado com media de nota ${media.toFixed(2)}<br> e com ${faltas.toFixed(2)} faltas`)
    }
    else if (media >= 5 && media <= 6.9) {
        document.querySelector("p1").innerHTML = (`Você ficou de recuperação com a media de nota ${media.toFixed(2)}<br> e com ${faltas.toFixed(2)} faltas`)
    }
    else if (media < 5 || faltas > 10) {
        document.querySelector("p1").innerHTML = (`Você Foi reprovado com a media de nota ${media.toFixed(2)} <br> e com ${faltas.toFixed(2)} faltas`)
    }
}