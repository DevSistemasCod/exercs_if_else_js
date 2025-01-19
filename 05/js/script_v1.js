function clicarNoBotao() {
  let resultado = document.getElementById('resultado');
  let entradaNota = document.getElementById('nota');

  if (entradaNota instanceof HTMLInputElement) {
    let nota = parseFloat(entradaNota.value);
    let mensagem;

    //prettier-ignore
    if (nota >= 5) {
      mensagem = 'Aprovado';
    } else if ((nota >= 3) && (nota < 5)) {
      mensagem = 'Recuperação';
    } else if (nota < 3) {
      mensagem = 'Reprovado';
    } else {
      mensagem = 'Nota inválida. A nota deve ser entre 0 e 10.';
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
