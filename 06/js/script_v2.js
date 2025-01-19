function clicarNoBotao() {
  let entradaPalavra = document.getElementById('palavraInput');

  if (entradaPalavra instanceof HTMLInputElement) {
    let palavra = entradaPalavra.value.trim();
    let mensagem;

    let palavraReversa = palavra.split('').reverse().join('');

    if (palavra === palavraReversa) {
      mensagem = 'A palavra é um palíndromo!';
    } else {
      mensagem = 'A palavra não é um palíndromo.';
    }

    alert(mensagem);
  }
}

function iniciar() {
  let verificarBtn = document.getElementById('verificarBtn');

  if (verificarBtn != null) {
    verificarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
