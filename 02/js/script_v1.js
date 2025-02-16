function clicarNoBotao() {
  let entradaMes = document.getElementById('mesSelect');
  let resultado = document.getElementById('resultado');

  if (entradaMes instanceof HTMLSelectElement) {
    let mesSelecionado = entradaMes.value;
    let escolha;

    if (mesSelecionado === 'janeiro') {
      escolha = '1';
    } else if (mesSelecionado === 'fevereiro') {
      escolha = '2';
    } else if (mesSelecionado === 'marco') {
      escolha = '3';
    } else if (mesSelecionado === 'abril') {
      escolha = '4';
    } else if (mesSelecionado === 'maio') {
      escolha = '5';
    } else if (mesSelecionado === 'junho') {
      escolha = '6';
    } else if (mesSelecionado === 'julho') {
      escolha = '7';
    } else if (mesSelecionado === 'agosto') {
      escolha = '8';
    } else if (mesSelecionado === 'setembro') {
      escolha = '9';
    } else if (mesSelecionado === 'outubro') {
      escolha = '10';
    } else if (mesSelecionado === 'novembro') {
      escolha = '11';
    } else if (mesSelecionado === 'dezembro') {
      escolha = '12';
    } else {
      escolha =  'Mês inválido';
    }

    if (resultado instanceof HTMLElement) {
      resultado.textContent = 'Número do mês: ' + escolha;
    }
  }
}


function iniciar() {
  let exibirBtn = document.getElementById('exibirBtn');
  
  if (exibirBtn != null) {
    exibirBtn.addEventListener('click', clicarNoBotao )
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
