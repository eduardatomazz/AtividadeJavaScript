
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

// atividade 13
let somatorio = 0;
let x = 1;
while (x <= 100) {
    somatorio = somatorio + x;
    x = x + 1;
}
console.log("A soma dos números  é  " + somatorio)


// atividade 14
let azul = prompt("Digite:")
function substituirPalavra(azul){
    if (azul === "azul"){
        console.log("vermelho")
    }else {
        console.log(azul)
    }
}
substituirPalavra(azul)

// atividade 15
let tamanho = prompt("Digite a palavra:")
function verificarTamanho(tamanho){
    for (i=0;i<tamanho.length;i++);
    if (tamanho.length > 10){
        console.log("Tem mais de 10 caracteres!");
    }else {
        console.log("Tem menos de 10 caracteres!");
    }
}
verificarTamanho(tamanho)

// atividade 16
let frutas = ["Maçã", "Banana", "Laranja", "Malencia", "Morango" ];
console.log(frutas[2]);

// atividade 17
let nome = prompt("Digite seu nome:")
function saudacao(nome){
    console.log("Bem-vindo(a) " + nome)
}
saudacao(nome)

// atividade 18
let nota = prompt("Digite sua nota:")
function verificarAprovacao(nota){
    if (nota >= 6){
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}
verificarAprovacao(nota)

// atividade 19
let pares = 1;
while(pares <= 30){
    pares++;
    if (pares % 2 === 0){
        console.log(pares);
    } else {
    }
}

// atividade 20
function contarVogais(){
    let palavraa = prompt("Digite uma palavra:");
    letras = palavraa.split('');
    let nnv = 0
    for (let i=0;i<=palavraa.length;i++){
        if ((letras[i] == 'a') || (letras[i] == 'e') || (letras[i] == 'i') || (letras[i] == 'o') || (letras[i] == 'u') || (letras[i] == 'A') || (letras[i] == 'E') || (letras[i] == 'I') || (letras[i] == 'O') || (letras[i] == 'U')){
        nnv++;
        }  
        } 
    console.log(nnv)
}
contarVogais()

// atividade 21
let array = [2, 5, 9, 6, 3];
console.log(array[0] + array[1] + array[2] + array[3] + array[4])

// atividade 22
let n = prompt("Digite um número:")
function dobrarNumeros(n){
    console.log(parseInt(n) + parseInt(n))
}
dobrarNumeros(n)

// atividade 23
let paress = 2;
while(paress <= 20){
    paress++;
    if (paress % 2 === 0){
        console.log(paress);
    } else {
    }
}

// atividade 24
let maiuscula = prompt("Digite a palavra:")
function capitalizar(maiuscula){
    console.log(maiuscula.charAt(0).toUpperCase() + maiuscula.slice(1));
}
capitalizar(maiuscula)

// atividade 25
let anoo = prompt("Digite um ano:")
function anoBissexto(anoo){
    if (anoo % 4 === 0){
        console.log("É um ano bissexto")
    }else {
        console.log("Não é um ano bissexto")
    }
}
anoBissexto(anoo)
