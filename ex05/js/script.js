/**
 * Classifica um triângulo com base nos seus lados.
 */
function classificarTriangulo() {
    // Obtém os valores dos lados do triângulo dos campos de entrada
    // Conversão explicita para número
    let lado1 = parseFloat(document.getElementById("lado1").value);
    // Conversão para número usando operador unário +
    let lado2 = +(document.getElementById("lado2").value);
    // Conversão para número usando operador unário +
    let lado3 = +(document.getElementById("lado3").value);

    // Verifica as condições para classificar o triângulo
    // Todos os lados iguais
    if ((lado1 === lado2) && (lado1 === lado3) && (lado2 === lado3)) {
        document.getElementById("resultado").innerText = "Triângulo Equilátero";
    }
    // Dois lados iguais
    else if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
        document.getElementById("resultado").innerText = "Triângulo Isósceles";
    }
    // Todos os lados diferentes
    else {
        document.getElementById("resultado").innerText = "Triângulo Escaleno";
    }
}
