function classificarTriangulo() {
  let entradaLado1 = document.getElementById('lado1');
  let entradaLado2 = document.getElementById('lado2');
  let entradaLado3 = document.getElementById('lado3');
  //prettier-ignore
  let lado1 = 0, lado2 = 0, lado3 = 0;

  // Verifica se os valores dos lados são válidos
  if (entradaLado1 instanceof HTMLInputElement) {
    lado1 = parseFloat(entradaLado1.value);
  }

  if (entradaLado2 instanceof HTMLInputElement) {
    lado2 = parseFloat(entradaLado2.value);
  }

  if (entradaLado3 instanceof HTMLInputElement) {
    lado3 = parseFloat(entradaLado3.value);
  }
  //prettier-ignore
  if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) ||
    lado1 <= 0 || lado2 <= 0 || lado3 <= 0 ) {
    return 'Por favor, insira valores positivos válidos para os lados do triângulo.';
  }

  // Classifica o triângulo
  //prettier-ignore
  if ((lado1 === lado2) && (lado2 === lado3)) {
    return 'O triângulo é equilátero.';
  } else if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
    return 'O triângulo é isósceles.';
  } else {
    return 'O triângulo é escaleno.';
  }
}

function exibirResultado(mensagem) {
  let saida = document.getElementById('resultado');

  if (saida instanceof HTMLElement) {
    saida.textContent = mensagem;
  }
}

function clicarNoBotao() {
  let mensagem = classificarTriangulo();
  exibirResultado(mensagem);
}

function iniciar() {
  let calcularBtn = document.getElementById('calcularBtn');

  if (calcularBtn != null) {
    calcularBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
