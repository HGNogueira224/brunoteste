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

window.onload = () => mostrarAba('inicio');
