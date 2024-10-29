var notas=[]
var nomes=[]
var nota
var nome
var i
function nomesAlunos() {
    for( i=0;i<=5;i++){
   nome=prompt("digite o nome dos alunos")
   nomes.push(nome)



    }
}
function notaAlunos(){
    for(i=0;i<=5;i++){
        nota=parseFloat(prompt(`notas dos alunos ${nomes}`))
        notas.push(nota)
    }
}
function resultadoAlunos(){
document.querySelector("p").innerHTML=(`Aluno :${nomes[0]}  nota : ${notas[0]}`)
document.querySelector("p1").innerHTML=(`Aluno  :${nomes[1]}  nota : ${notas[1]}<br>`)
document.querySelector("p2").innerHTML=(`Aluno  :${nomes[2]}  nota :${notas[2]}<br>`)
document.querySelector("p3").innerHTML=(`Aluno  :${nomes[3]}  nota :${notas[3]}<br>`)
document.querySelector("p4").innerHTML=(`Aluno  :${nomes[4]}  nota :${notas[4]}<br>`)

}