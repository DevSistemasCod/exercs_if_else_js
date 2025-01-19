
function calcularMedia() {
    let entradaNota1 = document.getElementById('inputNota1');
    let nota1 = 0, nota2 = 0, nota3 = 0, media = 0;

    if (entradaNota1 instanceof HTMLInputElement) {
        nota1 = parseFloat(entradaNota1.value);
    }

    let entradaNota2 = document.getElementById('inputNota2');
    if (entradaNota2 instanceof HTMLInputElement) {
        nota2 = parseFloat(entradaNota2.value);
    }

    let entradaNota3 = document.getElementById('inputNota3');
    if (entradaNota3 instanceof HTMLInputElement) {
        nota3 = parseFloat(entradaNota3.value);
    }

    media = ((nota1 + nota2 + nota3) / 3);    
    return media.toFixed(2);
}


function exibirResultado(media) {
    let saida = document.getElementById("resultado");

    if (saida instanceof HTMLElement) {
        saida.textContent = "Média do aluno: "+media;
    }
}


function clicarNoBotao() {
    let mensagem = calcularMedia();
    exibirResultado(mensagem);
}


function iniciar() {
    let calcularBtn = document.getElementById("calcularBtn");

    if (calcularBtn != null) {
        calcularBtn.addEventListener('click', clicarNoBotao);
    }
}


document.addEventListener("DOMContentLoaded", iniciar);
