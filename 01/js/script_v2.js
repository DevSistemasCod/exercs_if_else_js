function verificarValor() {
  let entradaValor = document.getElementById('valorInput');

  if (entradaValor instanceof HTMLInputElement) {
    let valor = parseFloat(entradaValor.value);
    if (valor > 0) {
      return 'O valor é positivo.';
    } else if (valor < 0) {
      return 'O valor é negativo.';
    } else {
      return 'O valor é zero.';
    }
  }
}


function exibirResultado(mensagem) {
  let resultado = document.getElementById('resultado');

  if (resultado instanceof HTMLElement) {
    resultado.textContent = mensagem;
  }
}

function clicarNoBotao() {
  let mensagem = verificarValor();
  exibirResultado(mensagem);
}

function iniciar() {
  let verificarBtn = document.getElementById('verificarBtn');

  if (verificarBtn != null) {
    verificarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
