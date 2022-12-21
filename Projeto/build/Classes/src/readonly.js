"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    mostrarId() {
        console.log(`Id user:`, this.id);
    }
}
const alef = new Pessoa("Alef Bacelar", 27);
alef.id;
console.log(alef);
