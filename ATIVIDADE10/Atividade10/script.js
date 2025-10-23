
document.addEventListener("DOMContentLoaded", function() {


    const alturaInput = document.getElementById("altura");
    const pesoInput = document.getElementById("peso");
    const calcularBtn = document.getElementById("btnCalcular");
    const resultadoDiv = document.getElementById("resultado");

    calcularBtn.addEventListener("click", exibirResultado);

    
    function exibirResultado() {

        const altura = parseFloat(alturaInput.value);
        const peso = parseFloat(pesoInput.value);
     
        resultadoDiv.textContent = "";
        resultadoDiv.classList.remove("error");

    
        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            resultadoDiv.textContent = "Por favor, insira valores válidos para altura e peso.";
            resultadoDiv.classList.add("error"); 
            return; 
        }


        const imc = calcularIMC(peso, altura);
        
        const classificacao = classificarIMC(imc);

        resultadoDiv.innerHTML = `Seu IMC é: <strong>${imc.toFixed(2)}</strong><br>${classificacao}`;
    }

    
    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    
    function classificarIMC(imc) {
        if (imc < 18.5) {
            return "Classificação: Magreza (Saudável)";
        } else if (imc >= 18.5 && imc <= 24.9) {
            return "Classificação: Normal (Saudável)";
        } else if (imc >= 25.0 && imc <= 29.9) {
            return "Classificação: Sobrepeso (Obesidade Grau I)";
        } else if (imc >= 30.0 && imc <= 39.9) {
            return "Classificação: Obesidade (Obesidade Grau II)";
        } else { // Maior que 40.0
            return "Classificação: Obesidade Grave (Obesidade Grau III)";
        }
    }

});