// Desafio: Calculadora de Nível do Herói
let heroi = {
    nome: "Ichigo Kurosaki",
    vitorias: 180,
    derrotas: 20
};
// Função principal para executar o desafio
function executarDesafio(h) {
    if (h.vitorias < 0 || h.derrotas < 0) {
        console.log("Erro: Números de vitórias ou derrotas não podem ser negativos.");
        return;
    }

    const saldo = calcularSaldo(h.vitorias, h.derrotas);
    const nivel = determinarNivel(saldo);
    

    
    exibirRelatorio(h.nome, saldo, nivel);
}

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function determinarNivel(saldo) {
    // Para retornar o nível do jogador com base no saldo de vitórias e derrotas.
    if (saldo <= 10) return "Ferro";
    if (saldo <= 20) return "Bronze";
    if (saldo <= 50) return "Prata";
    if (saldo <= 80) return "Ouro";
    if (saldo <= 90) return "Diamante";
    if (saldo <= 100) return "Lendário";
    return "Imortal";
}

function exibirRelatorio(nome, saldo, nivel) {
    console.log("--------------------------------------------------------------------");
    console.log(`O Herói ${nome} tem ${saldo} vitorias e está no nível: ${nivel}`);
    
    // Adicionando uma lógica de "Próxima Meta"
    if (nivel !== "Imortal") {
        console.log("Continue jogando para alcançar o próximo ranking!");
    } else {
        console.log("Você esta no apice, parabéns!");
    }
    console.log("---------------------------------------------------------------------");
}

// Execução
executarDesafio(heroi);