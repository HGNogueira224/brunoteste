function mostrarAba(nome) {
  const abas = document.querySelectorAll('.aba');
  abas.forEach(aba => aba.classList.remove('ativa'));
  document.getElementById(nome).classList.add('ativa');

  // Mostra ou esconde o seletor de loja dependendo da aba
  const lojaBox = document.getElementById("lojaBox");
  if (nome === "orcamentos") {
    lojaBox.style.display = "inline-block";
  } else {
    lojaBox.style.display = "none";
  }
}


function calcularFreteUber() {
  window.open("https://www.uber.com/global/pt-br/price-estimate/", "_blank");
}


function calcularFreteCorreios() {
  const cepDestino = document.getElementById("cepDestino").value.replace(/\D/g, "");
  const lojaSelecionada = document.getElementById("lojaSelector").value;

  // CEPs reais das suas lojas
  const cepOrigem = lojaSelecionada === "loja1" ? "20720000" : "20725000";

  if (!cepDestino || cepDestino.length !== 8) {
    alert("Digite um CEP válido com 8 números.");
    return;
  }

  // Estimativa por distância do prefixo do CEP (simples)
  const origemPrefix = parseInt(cepOrigem.substring(0, 5));
  const destinoPrefix = parseInt(cepDestino.substring(0, 5));
  const diff = Math.abs(origemPrefix - destinoPrefix);

  let valor = 0;
  let prazo = 0;

  if (diff <= 100) {
    valor = 20;
    prazo = 3;
  } else if (diff <= 400) {
    valor = 30;
    prazo = 5;
  } else {
    valor = 45;
    prazo = 7;
  }

  document.getElementById("resultadoFrete").innerHTML =
    `<p><strong>Valor estimado do frete (PAC):</strong> R$ ${valor.toFixed(2)}</p>
     <p><strong>Prazo estimado de entrega:</strong> ${prazo} dias úteis</p>`;
}

window.onload = () => mostrarAba('inicio');
