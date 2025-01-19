function clicarNoBotao() {
  let resultado = document.getElementById('resultado');
  let entradaValor = document.getElementById('valorInput');
  
  if (entradaValor instanceof HTMLInputElement) {
    let valor = parseFloat(entradaValor.value);
    let mensagem;

    if (valor > 0) {
      mensagem = 'O valor é positivo.';
    } else if (valor < 0) {
      mensagem = 'O valor é negativo.';
    } else {
      mensagem = 'O valor é zero.';
    }
    if (resultado instanceof HTMLElement) {
      resultado.textContent = mensagem;
    }
  }
}

function iniciar() {
  let verificarBtn = document.getElementById('verificarBtn');

  if (verificarBtn != null) {
    verificarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
