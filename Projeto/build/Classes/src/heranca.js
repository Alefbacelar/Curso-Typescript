"use strict";
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(nome, email, cargo, nivel) {
        //chamando o contructor da classe pai
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const user1 = new Admin("Alef", "Aled@Teste.com", "Programador", 2);
console.log(user1);
