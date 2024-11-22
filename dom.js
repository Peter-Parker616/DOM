// Função principal para mudar o background
function mudarBG(cor) {
    // Altera o background do corpo
    document.body.style.backgroundColor = cor;

    // Seleciona o elemento <h1>
    const titulo = document.querySelector("#titulo");

    // Lógica condicional para mudar a cor do texto
    if (cor.toLowerCase() === "black" || cor === "#000000") {
        titulo.style.color = "white";
    } else if (cor.toLowerCase() === "white" || cor === "#ffffff") {
        titulo.style.color = "black";
    } else {
        titulo.style.color = ""; // Restaura a cor padrão
    }
}

// Captura a cor via prompt
const corEscolhida = prompt("Digite o nome ou código hexadecimal da cor do fundo:");
if (corEscolhida) {
    mudarBG(corEscolhida);
} else {
    alert("Nenhuma cor foi escolhida.");
}
