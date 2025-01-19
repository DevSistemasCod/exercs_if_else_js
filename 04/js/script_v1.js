function clicarNoBotao() {
  let resultado = document.getElementById('resultado');
  let entradaLado1 = document.getElementById('lado1');
  let entradaLado2 = document.getElementById('lado2');
  let entradaLado3 = document.getElementById('lado3');

  //prettier-ignore
  if ((entradaLado1 instanceof HTMLInputElement) && (entradaLado2 instanceof HTMLInputElement) && (entradaLado3 instanceof HTMLInputElement)) {
    let lado1 = parseFloat(entradaLado1.value);
    let lado2 = parseFloat(entradaLado2.value);
    let lado3 = parseFloat(entradaLado3.value);
    let mensagem;

    //prettier-ignore
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || 
    lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
      mensagem = 'Por favor, insira valores positivos válidos para os lados do triângulo.';
    } 
    else if ((lado1 === lado2) && (lado2 === lado3)) {
      mensagem = 'O triângulo é equilátero.';
    } 
    else if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
      mensagem = 'O triângulo é isósceles.';
    } 
    else {
      mensagem = 'O triângulo é escaleno.';
    }

    if (resultado instanceof HTMLElement) {
      resultado.textContent = mensagem;
    }
  }
}

function iniciar() {
  let calcularBtn = document.getElementById('calcularBtn');

  if (calcularBtn != null) {
    calcularBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
