function exibirNumeroDoMes() {
  let entradaMes = document.getElementById('mesSelect');

  if (entradaMes instanceof HTMLSelectElement) {
    let mesSelecionado = entradaMes.value;

    if (mesSelecionado === 'janeiro') {
      return '1';
    } else if (mesSelecionado === 'fevereiro') {
      return '2';
    } else if (mesSelecionado === 'marco') {
      return '3';
    } else if (mesSelecionado === 'abril') {
      return '4';
    } else if (mesSelecionado === 'maio') {
      return '5';
    } else if (mesSelecionado === 'junho') {
      return '6';
    } else if (mesSelecionado === 'julho') {
      return '7';
    } else if (mesSelecionado === 'agosto') {
      return '8';
    } else if (mesSelecionado === 'setembro') {
      return '9';
    } else if (mesSelecionado === 'outubro') {
      return '10';
    } else if (mesSelecionado === 'novembro') {
      return '11';
    } else if (mesSelecionado === 'dezembro') {
      return '12';
    } else {
      return 'Mês inválido';
    }
  }
}

function clicarNoBotao(){
    let numeroDoMes = exibirNumeroDoMes(); 
    exibirResultado(numeroDoMes); 
}

function exibirResultado(numeroDoMes) {
  let resultado = document.getElementById('resultado');

  if (resultado instanceof HTMLElement) {
    resultado.textContent = 'Número do mês: ' + numeroDoMes;
  }
}



function iniciar() {
  let exibirBtn = document.getElementById('exibirBtn');
  
  if (exibirBtn != null) {
    exibirBtn.addEventListener('click', clicarNoBotao )
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
