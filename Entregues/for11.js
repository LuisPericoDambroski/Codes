var nome
var preço
var preço_alto=0

while(true){
    nome= prompt("digite o nome do produto")

    preço= parseFloat(prompt("digite o preço do produto"))
    if(preço_alto<preço){
        preço_alto=preço
    }
    document.write(`<br>${nome} $ ${preço}`)
    produto= prompt("digitar outro produto sim,nao")

    if(produto==="nao"){
        document.write(`<br> produto mais caro ${nome} $ ${preço_alto}`)
        {break;}}
    }