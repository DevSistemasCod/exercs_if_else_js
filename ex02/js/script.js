// Função para exibir o número do mês com base no mês selecionado
function exibirNumeroDoMes() {
    // Obtém o valor selecionado no menu suspenso
    let mesSelecionado = document.getElementById("mesSelect").value;

    // Verifica o valor selecionado e retorna o número do mês correspondente
    if (mesSelecionado === "janeiro") {
        return "1";
    } else if (mesSelecionado === "fevereiro") {
        return "2";
    } else if (mesSelecionado === "marco") {
        return "3";
    } else if (mesSelecionado === "abril") {
        return "4";
    } else if (mesSelecionado === "maio") {
        return "5";
    } else if (mesSelecionado === "junho") {
        return "6";
    } else if (mesSelecionado === "julho") {
        return "7";
    } else if (mesSelecionado === "agosto") {
        return "8";
    } else if (mesSelecionado === "setembro") {
        return "9";
    } else if (mesSelecionado === "outubro") {
        return "10";
    } else if (mesSelecionado === "novembro") {
        return "11";
    } else if (mesSelecionado === "dezembro") {
        return "12";
    } else {
        return "Mês inválido";
    }
}

// Função para exibir o resultado na página
function exibirResultado(numeroDoMes) {
    let saida = document.getElementById("resultado");
    saida.innerText = "Número do mês: "+numeroDoMes;
}

// Função principal que é executada quando a página é carregada
function iniciar() {
    let exibirBtn = document.getElementById("exibirBtn");
    // Adiciona um ouvinte de evento para o clique no botão "Exibir Número do Mês"
    exibirBtn.addEventListener("click", function () {
        let numeroDoMes = exibirNumeroDoMes(); // Chama a função para obter o número do mês
        exibirResultado(numeroDoMes); // Exibe o resultado na página
    });
}

// Adiciona um ouvinte de evento para o carregamento da página
document.addEventListener("DOMContentLoaded", iniciar);
