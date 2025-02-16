function clicarNoBotao() {
  let entradaPalavra = document.getElementById('palavraInput');

  if (entradaPalavra instanceof HTMLInputElement) {
    let palavra = entradaPalavra.value.trim();
    let mensagem;

    // Divide a string em um array de caracteres, inverte a ordem dos caracteres,
    // e então junta os caracteres de volta em uma string.
    // Exemplo: "casa" -> ["c", "a", "s", "a"] -> ["a", "s", "a", "c"] -> "asac"
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
