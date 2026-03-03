// Lista de palavras
const palavras = ["casa", "carro", "porta", "janela", "mesa", "cadeira", "computador", "teclado", "mouse", "monitor"];

// Elementos
let word = document.getElementById("palavra");
let form = document.getElementById("formulario");
let textinput = document.querySelector("input");

// Controle do jogo
let round = 1;
let maxRounds = 5;
let startTime;
let resultados = [];

// Função gerar palavra
function gerarPalavra() {
    let randomindex = Math.floor(Math.random() * palavras.length);
    return palavras[randomindex];
}

// Palavra inicial
let randomword = gerarPalavra();
word.textContent = randomword;

// Começa cronômetro
startTime = Date.now();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (round > maxRounds) return;

    let textvalue = textinput.value;
    let endTime = Date.now();
    let tempo = ((endTime - startTime) / 1000).toFixed(2); // segundos

    let acertou = textvalue === randomword;

    resultados.push({
        palavra: randomword,
        digitado: textvalue,
        tempo: tempo,
        acertou: acertou
    });

    if (acertou) {
        console.log("Resposta Certa");
    } else {
        console.log("Resposta Errada");
    }

    round++;

    if (round > maxRounds) {
        console.log("Jogo acabou!");
        console.log(resultados);
        word.textContent = "Fim do jogo";
        return;
    }

    // Nova palavra
    randomword = gerarPalavra();
    word.textContent = randomword;

    textinput.value = "";
    startTime = Date.now(); // reinicia cronômetro
});