class tipoDeHeroi {
    constructor(nome, idade, tipo) { 
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    Atacar(tipo) {
        let ataque;

        if (this.tipo === "Guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "Mago") {
            ataque = "feitiço";
        } else if (this.tipo === "Monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "Ninja") {
            ataque = "shuriken";
        }

        console.log(`${this.nome} ataca com ${ataque}!`);
    }
}

let heroi1 = new tipoDeHeroi("Aquiles", 30, "Guerreiro");
let heroi2 = new tipoDeHeroi("Patolino", 25, "Mago");
let heroi3 = new tipoDeHeroi("Yiang", 28, "Monge");
let heroi4 = new tipoDeHeroi("Kakashi", 22, "Ninja");

for (let heroi of [heroi1, heroi2, heroi3, heroi4]) {
    heroi.Atacar();
}