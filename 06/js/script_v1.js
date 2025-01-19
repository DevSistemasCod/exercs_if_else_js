function verificarPalindromo() {
  let entradaPalavra = document.getElementById('palavraInput');
  let palavra = '';

  if (entradaPalavra instanceof HTMLInputElement) {
    palavra = entradaPalavra.value.trim();
  }

  if (palavra === '') {
    return 'Por favor, insira uma palavra válida.';
  }

  let palavraReversa = palavra.split('').reverse().join('');

  if (palavra === palavraReversa) {
    return 'A palavra é um palíndromo!';
  } else {
    return 'A palavra não é um palíndromo.';
  }
}

function exibirResultado(mensagem) {
  alert(mensagem);
}

function clicarNoBotao() {
  let mensagem = verificarPalindromo();
  exibirResultado(mensagem);
}

function iniciar() {
  let verificarBtn = document.getElementById('verificarBtn');

  if (verificarBtn != null) {
    verificarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
