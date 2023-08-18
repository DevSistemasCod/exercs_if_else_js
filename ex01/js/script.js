// Função para verificar se um valor é positivo, negativo ou zero
function verificarValor() {
    // Obtém o valor digitado pelo usuário do campo de entrada
    let valor = parseFloat(document.getElementById("valorInput").value);

    // Verifica o valor e retorna a mensagem correspondente
    if (valor > 0) {
        return "O valor é positivo.";
    } else if (valor < 0) {
        return "O valor é negativo.";
    } else {
        return "O valor é zero.";
    }
}

// Função para exibir o resultado no elemento de saída
function exibirResultado(mensagem) {
    // Obtém o elemento de saída
    let saida = document.getElementById("resultado");

    // Define o texto do elemento de saída com a mensagem recebida
    saida.innerText = mensagem;
}

// Função de inicialização.
function iniciar() {
    // Obtém o botão de verificação
    let verificarBtn = document.getElementById("verificarBtn");

    // Adiciona um ouvinte de evento para o clique no botão de verificação
    verificarBtn.addEventListener("click", function () {
        // Chama a função para verificar o valor e obter a mensagem de resultado
        let mensagem = verificarValor();

        // Chama a função para exibir o resultado no elemento de saída
        exibirResultado(mensagem);
    });
}

// Adiciona evento de listener "ouvinte" para quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", iniciar);
