function verficarSeBissexto() {
  const entradaAno = document.getElementById('entradaAno');
  const resultado = document.getElementById('resultado');

  if (entradaAno instanceof HTMLInputElement) {
    let ano = parseInt(entradaAno.value);

    if (resultado != null) {
      //prettier-ignore
      if (((ano % 4) === 0) && ((ano % 100) !== 0) || ((ano % 400) === 0)) {
        resultado.textContent = ano + ' é um ano bissexto!';
      } else {
        resultado.textContent = ano + ' não é um ano bissexto.';
      }
    }
  }
}

function iniciar() {
  let verificarAnoBtn = document.getElementById('verificarAnoBtn');

  if (verificarAnoBtn != null) {
    verificarAnoBtn.addEventListener('click', verficarSeBissexto);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
