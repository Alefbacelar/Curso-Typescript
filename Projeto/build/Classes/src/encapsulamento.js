"use strict";
class Usuarios {
    constructor(nome, email, id) {
        this.nome = nome;
        this.email = email;
        this.id = id;
    }
}
class Adm extends Usuario {
    constructor(nome, email, cargo, nivel) {
        //chamando o contructor da classe pai
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo() {
        console.log("ALTERANDO CARGO");
    }
}
const user = new Adm("Alef", "Aled@Teste.com", "Programador", 213);
