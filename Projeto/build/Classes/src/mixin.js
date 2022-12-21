"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log("Automovel Ligado");
    }
    desligar() {
        console.log("Automovel Desligado");
    }
}
class Especificacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
applyMixin_1.applyMixins(Carro, [Automovel, Especificacao]);
const gol = new Carro("Gol Quadrado");
gol.ligar();
gol.descricao = "Modelo Completo Automatico";
gol.desligar();
console.log(gol);
