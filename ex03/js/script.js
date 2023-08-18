// Função para calcular a média das notas
function calcularMedia() {
    // Captura os valores das notas dos elementos de entrada
    let nota1 = parseFloat(document.getElementById("inputNota1").value);
    let nota2 = parseFloat(document.getElementById("inputNota2").value);
    let nota3 = parseFloat(document.getElementById("inputNota3").value);

    // Calcula a média das notas
    let media = ((nota1 + nota2 + nota3) / 3);
    //Retorna a média formatada com 2 casas decimais
    return media.toFixed(2);
}

// Função para exibir o resultado da média
function exibirResultado(media) {
    let saida = document.getElementById("resultado");
    saida.innerText = `Média do aluno: ${media}`;
}

// Função que será executada ao carregar a página
function iniciar() {
    let calcularBtn = document.getElementById("calcularBtn");
    // Adiciona um ouvinte de evento ao botão de cálculo
    calcularBtn.addEventListener("click", function () {
        // Calcula a média das notas
        let media = calcularMedia();
        // Exibe o resultado da média na página
        exibirResultado(media);
    });
}

// Adiciona um ouvinte de evento para quando o DOM estiver totalmente carregado
document.addEventListener("DOMContentLoaded", iniciar);
