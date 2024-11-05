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
    if (media <= 5) {
        document.querySelector("p1").innerHTML = (`Você foi Reprovado com media de nota ${media.toFixed(2)}`)
    }
    else {
        document.querySelector("p1").innerHTML = (`Você foi Aprovado com a media de nota ${media.toFixed(2)}`)
    }
}