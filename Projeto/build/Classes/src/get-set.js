"use strict";
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    get getServidorIp() {
        console.log("== METODO GET ==");
        return this.servidor;
    }
    set setServidorIP(novoIp) {
        if (this.servidor === novoIp) {
            throw new Error("O novo IP deve ser diferente do IP antigo");
        }
        this.servidor = novoIp;
    }
}
const GTA5 = new Jogo("193.123.1.45");
try {
    GTA5.setServidorIP = "Fluindo";
}
catch (error) {
    console.log("Error:");
}
GTA5.setServidorIP = "HACKEADO";
console.log(GTA5.getServidorIp);
