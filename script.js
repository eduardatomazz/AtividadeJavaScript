/*
//atividade 1
let numero = 1
function calculo(numero){
    if (numero % 2 === 0){
        console.log("É um número par");
    } else {
        console.log("É um número ímpar");
    }
}
calculo(numero)

//atividade 2
let numeroum = 2
let numerodois = 4
function calcular(numeroum, numerodois){
   console.log(numeroum + numerodois)
   console.log(numeroum - numerodois)
   console.log(numeroum * numerodois)
   console.log(numeroum / numerodois)
}
calcular(numeroum, numerodois)

//atividade 3
let count = 10;
while(count >= 1){
    console.log(count);
    count--;
}

//atividade 4
let texto = prompt("Digite uma palavra:");
function inverterTexto(texto){
    console.log(texto.split("").reverse().join(""));
}
inverterTexto(texto)

//atvidade 5
let palavra = prompt("Digite uma palavra:");
function contarCaracteres(palavra){
    console.log(palavra.split(''));
    for (i=0;i<palavra.length;i++);
}
contarCaracteres(palavra)

//atividade 6
let carro = {
    marca : prompt("Digite a marca:"),
    modelo : prompt("Digite o modelo:"),
    ano : prompt("Digite o ano:"),
    cr: function() {
        console.log(this.modelo);
    }
};
carro.cr();

//atividade 7
let msg = {
    nome: prompt("Digite seu nome:"),
    mensagem : "Olá",
    mensagemPersonalizada: function(){
        console.log(this.mensagem + " " + this.nome);
    }
};
msg.mensagemPersonalizada()

//atividade 8
let n1 = prompt("Digite o primeiro número:") *1;
let n2 = prompt("Digite o segundo número:") *1;
let n3 = prompt("Digite o terceiro número:") *1;
function media(n1, n2, n3){
    console.log((n1 + n2 + n3) / 3)
}
media(n1, n2, n3)

//atividade 9
let multiplo = 1;
 while(multiplo <= 20){ 
    if (multiplo % 3 === 0){ 
     console.log(multiplo + " é " + "múltiplo de 3"); 
    } else { 
        console.log(multiplo + " é " + "um não múltiplo de 3"); 
    } 
    multiplo++;
 }


//atividade 10
let palindromo = prompt("Digite uma palavra:")
function verificarPalindromo(palindromo){
    if (palindromo === palindromo.split("").reverse().join("")){
        console.log("true");
    } else { 
        console.log("false");
    }
}
verificarPalindromo(palindromo)

//atividade 11
let nnumero = prompt("Digite um número:")
function verificarSinal(nnumero){
    if (nnumero === 0){
        console.log("Zero");
    }if (nnumero > 0){
        console.log("Positivo");
    } else {
        console.log("Negativo");
    }
}
verificarSinal(nnumero)

//atividade 12
let temperatura = prompt("Digite a temperatura em Celsius:");
function converterTemperatura(temperatura){
    console.log("A temperatura em Fahrenheit é " + ((temperatura * 1.8) + 32));
}
converterTemperatura(temperatura)
*/
// atividade 13
let somatorio = 1;
while(somatorio <= 100){
    console.log(somatorio)
    somatorio++; 
}