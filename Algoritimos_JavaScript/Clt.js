var nome = parseInt(prompt("Ola digite seu nome"))
var idade = parseInt(prompt("Digite sua idade"))
var clt= prompt("Possui carteira de trabalho")

if (idade>=14 && clt == "sim"){
    document.write("Você está apto para trabalhar")

}else if(idade >=14 && clt=="não"){
    document.write("Você esta apto para trabalhar providencie a clt")
}else{
    document.write("Ainda não esta apto para trabalhar, estute por enquanto")
}
