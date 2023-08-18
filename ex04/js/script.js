function compararValores() {
    /**
     * para validarmos o as condições devemos fazer modicações
     * no contexto de atribuição 
     * com e sem conversão 
     */
    // Obtém o valor do input com conversão para número
    let valor1 = +(document.getElementById("valor1Input").value);
    // Obtém o valor do input sem conversão para número
    let valor2 = (document.getElementById("valor2Input").value);

    // Compara os valores
    if (valor1 === valor2) {
        return "Os valores são estritamente iguais.";
    } else if (valor1 == valor2) {
        return "Os valores são iguais.";
    } else {
        return "Os valores são diferentes.";
    }
}

function exibirResultado(resultado) {
    // Obtém o elemento de saída
    let saida = document.getElementById("resultado");
    // Atualiza o conteúdo do elemento com o resultado da comparação
    saida.innerText = resultado;
}

function iniciar() {
    // Obtém o botão de comparação
    let compararBtn = document.getElementById("compararBtn");
    // Adiciona um ouvinte de evento para o clique no botão
    compararBtn.addEventListener("click", function () {
        // Chama a função de comparação e exibe o resultado
        let resultado = compararValores();
        exibirResultado(resultado);
    });
}

// Espera o carregamento do DOM e inicia a aplicação
document.addEventListener("DOMContentLoaded", iniciar);
