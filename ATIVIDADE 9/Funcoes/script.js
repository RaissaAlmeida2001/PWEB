function verificaPalindroma(texto) {
    const textoFormatado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const comprimento = textoFormatado.length;

    if (comprimento === 0) {
        return true;
    }

    for (let i = 0; i < Math.floor(comprimento / 2); i++) {
        
        const indiceFinal = comprimento - 1 - i;

        if (textoFormatado[i] !== textoFormatado[indiceFinal]) {
            return false; 
        }
    }

    return true; 
}


function digitePalindromo() {
    var frase = prompt("Digite uma frase para verificar se é um palíndromo:");

    if (frase === null || frase === "") {
        return; 
    }

    const ePalindromo = verificaPalindroma(frase);

    let resultadoMensagem;

    if (ePalindromo) {
        resultadoMensagem = `A frase "${frase}" é um Palíndromo!`;
    } else {
        resultadoMensagem = `A frase "${frase}" NÃO é um palíndromo.`;
    }

    alert(resultadoMensagem);
}


function classificaTriangulo(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Erro: Todos os lados devem ser números válidos.";
    }

    if (a <= 0 || b <= 0 || c <= 0) {
        return "Erro: Todos os lados devem ser números positivos.";
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não é um triângulo (A soma de dois lados deve ser maior que o terceiro).";
    }

    
    if (a === b && b === c) {
        return "Triângulo Equilátero (três lados iguais).";
    }
    else if (a === b || a === c || b === c) {
        return "Triângulo Isósceles (dois lados iguais).";
    }
    else {
        return "Triângulo Escaleno (três lados diferentes).";
    }
}


function interacaoTriangulo() {
    var ladoA = parseFloat(prompt("Digite o comprimento do primeiro lado (A):"));
    var ladoB = parseFloat(prompt("Digite o comprimento do segundo lado (B):"));
    var ladoC = parseFloat(prompt("Digite o comprimento do terceiro lado (C):"));

    const resultado = classificaTriangulo(ladoA, ladoB, ladoC);

    alert(resultado);
}


function retornaCrescente() {
    var n1 = parseFloat(prompt("Digite um número: "));
    var n2 = parseFloat(prompt("Digite o segundo número: "));
    var n3 = parseFloat(prompt("Digite o terceiro número: "));

    let primeiro = 0;
    let segundo = 0;
    let terceiro = 0;
    
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, digite números válidos.");
        return;
    }

    if (n1 >= n2 && n1 >= n3) {
        terceiro = n1; 
        if (n2 >= n3) {
            segundo = n2;
            primeiro = n3;
        } else { 
            segundo = n3;
            primeiro = n2;
        }
    } 
    else if (n2 >= n1 && n2 >= n3) {
        terceiro = n2;
        if (n1 >= n3) {
            segundo = n1;
            primeiro = n3;
        } else { 
            segundo = n3;
            primeiro = n1;
        }
    } 
    else {
        terceiro = n3;
        if (n1 >= n2) {
            segundo = n1;
            primeiro = n2;
        } else { 
            segundo = n2;
            primeiro = n1;
        }
    }

    alert("A ordem crescente é: " + primeiro + ", " + segundo + ", " + terceiro);
}


function MaiorEmenor(){
    var n1 = parseFloat(prompt("Digite um número: "));
    var n2 = parseFloat(prompt("Digite o segundo número: "));
    var n3 = parseFloat(prompt("Digite o terceiro número: "));

    let maior;
    let menor;

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, digite números válidos.");
        return;
    }

    if (n1 >= n2 && n1 >= n3) {
        maior = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        maior = n2;
    } else { 
        maior = n3;
    }

    if (n1 <= n2 && n1 <= n3) {
        menor = n1;
    } else if (n2 <= n1 && n2 <= n3) {
        menor = n2;
    } else {
        menor = n3;
    }

    alert("O maior número é o " + maior + " e o menor número é o " + menor);
}