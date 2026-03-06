// Desafio: Calculadora de Nível do Herói
let heroi = {
    nome: "Ichigo Kurosaki",
    vitorias: 180,
    derrotas: 20
};
// Função principal para executar o desafio
function resultado(h) {
    if (h.vitorias < 0 || h.derrotas < 0) {
        console.log("Erro: Números de vitórias ou derrotas não podem ser negativos.");
        return;
    }

    const saldo = calcularSaldo(h.vitorias, h.derrotas);
    const nivel = nivelDoHeroi(saldo);
    

    
    Dados(h.nome, saldo, nivel);
}

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function nivelDoHeroi(saldo) {
    // Para retornar o nível do jogador com base no saldo de vitórias e derrotas.
    if (saldo <= 10) return "Ferro";
    if (saldo <= 20) return "Bronze";
    if (saldo <= 50) return "Prata";
    if (saldo <= 80) return "Ouro";
    if (saldo <= 90) return "Diamante";
    if (saldo <= 100) return "Lendário";
    return "Imortal";
}

function Dados (nome, saldo, nivel) {
    console.log("--------------------------------------------------------------------");
    console.log(`O Herói ${nome} tem ${saldo} vitorias e está no nível: ${nivel}`);
    
    // mensagem de incentivo para o jogador.
    if (nivel !== "Imortal") {
        console.log("Continue jogando para alcançar o próximo nivel!");
    } else {
        console.log("Você esta no apice, parabéns!");
    }
    console.log("---------------------------------------------------------------------");
}

// Execução
resultado(heroi);