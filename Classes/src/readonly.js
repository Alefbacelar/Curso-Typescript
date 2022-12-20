"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.mostrarId = function () {
        console.log("Id user:", this.id);
    };
    return Pessoa;
}());
var alef = new Pessoa("Alef Bacelar", 27);
alef.id;
console.log(alef);
