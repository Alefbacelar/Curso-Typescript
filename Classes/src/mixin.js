"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applyMixin_1 = require("./mixin/applyMixin");
var Automovel = /** @class */ (function () {
    function Automovel() {
    }
    Automovel.prototype.ligar = function () {
        console.log("Automovel Ligado");
    };
    Automovel.prototype.desligar = function () {
        console.log("Automovel Desligado");
    };
    return Automovel;
}());
var Especificacao = /** @class */ (function () {
    function Especificacao(descricao) {
        this.descricao = descricao;
    }
    return Especificacao;
}());
var Carro = /** @class */ (function () {
    function Carro(nome) {
        this.nome = nome;
    }
    return Carro;
}());
applyMixin_1.applyMixins(Carro, [Automovel, Especificacao]);
var gol = new Carro("Gol Quadrado");
gol.ligar();
gol.descricao = "Modelo Completo Automatico";
gol.desligar();
console.log(gol);
