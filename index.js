// Terceiro desafio de Lógica de Programação:

class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "usando magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usando espada";
        } else if (this.tipo === "monge") {
            ataque = "usando artes marciais";
        } else {
            ataque = "usando shuriken";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou ${ataque}`);
    }
}

let fHero = new Hero("Brendon", 24, "mago");
let sHero = new Hero("Viking", 34, "guerreiro");
let tHero = new Hero("Bagueshi", 40, "monge");
let foHero = new Hero("Hiroshi", 26, "ninja");

fHero.atacar();
sHero.atacar();
tHero.atacar();
foHero.atacar();
