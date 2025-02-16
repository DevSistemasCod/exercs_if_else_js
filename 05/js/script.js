function verificarNota() {
  let entradaNota = document.getElementById('nota');

  if (entradaNota instanceof HTMLInputElement) {
    let nota = parseFloat(entradaNota.value);
    let mensagem;

    //prettier-ignore
    if ((nota <= 10) && (nota >= 5)) {
      mensagem = 'Aprovado';
    } else if ((nota >= 3) && (nota < 5)) {
      mensagem = 'Recuperação';
    } else if ((nota >= 0) && (nota < 3)) {
      mensagem = 'Reprovado';
    } else {
      mensagem = 'Nota inválida. A nota deve ser entre 0 e 10.';
    }

    return mensagem;
  }
}

function exibirResultado(mensagem) {
  let resultado = document.getElementById('resultado');

  if (resultado instanceof HTMLElement) {
    resultado.textContent = mensagem;
  }
}

function clicarNoBotao() {
  let mensagem = verificarNota();
  exibirResultado(mensagem);
}

function iniciar() {
  let verificarBtn = document.getElementById('verificarBtn');

  if (verificarBtn != null) {
    verificarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
