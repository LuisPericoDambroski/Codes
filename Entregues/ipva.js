var nome= prompt("Digite seu nome")
var valor= parseFloat(prompt("Valor do veiculo"))
var tipo
var combustivel
var porcentagem;
var ipva;


while(true){
tipo= prompt("tipo do veiculo : carro, moto,caminhonete,pesado")

if(tipo=="carro"||tipo=="moto"||tipo=="caminhonete"||tipo=="pesado"){break;}
else{alert("Tipo De veiculo incorreto")}}

while(true){
combustivel= prompt("Tipo do combustivel: gasolina, flex ,outros")
if(combustivel=="gasolina"||combustivel=="flex"||combustivel=="outros"){{break}}
else{alert("Tipo de combustivel incorreto")}}


if(tipo==="carro"){
    porcentagem=4;}
    else{
        porcentagem=1.5;}
    
   

if(combustivel==="outros"){
        porcentagem=3
        }

if(tipo==="moto"||tipo==="caminhonete"||tipo==="pesado" &&porcentagem ==3){
    porcentagem=1.5;
}
        
    
   ipva=(valor*porcentagem)/100
   document.write(`o valor do ipva é ${ipva}`)
