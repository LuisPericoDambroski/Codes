function escrevacalculo() {


  var preco_paes = 0.80;
  var preco_paodoce = 1.50;
  var preco_paoforma = 8.50;
  var preco_bisnaga = 7.60;
  var preco_leite = 4.50;
  var preco_queijo = 15.00;
  var preco_suspiro = 5.50;

  var paes = parseInt(document.getElementById("pão").value)

  var paodoce = parseInt(document.getElementById("pâoDoce").value)

  var paodoce = parseInt(document.getElementById("pãoForma").value)

  var bisnaga = parseInt(document.getElementById("bisnaga").value)

  var leite = parseInt(document.getElementById("leite").value)

  var queijo = parseInt(document.getElementById("queijo").value)

  var suspiro = parseInt(document.getElementById("suspiro").value)

  var total = (paes * preco_paes) + (paodoce * preco_paodoce) + (paoforma * preco_paoforma) + (bisnaga * preco_bisnaga) + (leite * preco_leite) + (queijo * preco_queijo) + (suspiro * preco_suspiro);

  var porcentagem = 0;

  if (leite > 0 && (paodoce > 0 || suspiro > 0)) {
    porcentagem = 0.05;
  }

  if (paes >= 10 && queijo >= 1) {
    porcentagem = 0.10;
  }
  if (bisnaga > 0 || paoforma > 0) {
    porcentagem = 0.15;
  }


  var desconto = total * porcentagem
  total -= desconto

  document.getElementById("resultado").value = (`Você teve ${porcentagem * 100}% de desconto.`)

  var texto = document.querySelector("p2")
  texto.innerHTML = (`Total a pagar é R$ ${total.toFixed(2)}`)
  var texto2 = document.querySelector("p3")
  texto2.innerHTML = (`Seu desconto foi de R$ ${desconto.toFixed(2)}`)

  var texto3 = document.querySelector("p4")
  texto3.innerHTML = ("Obrigada por escolher a Padaria Pão Doce! Volte Sempre!")

}