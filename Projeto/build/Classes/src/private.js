"use strict";
class Conta {
    constructor() {
        this.limite = 450;
    }
    aumentarLimit(qtd) {
        if (qtd < 1000) {
            this.limite = qtd;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log(`Infelizmente seu limite foi negado`);
        }
    }
    solicitarLimite(qtd) {
        return this.aumentarLimit(qtd);
    }
    solicitarLimiteApp(estaAutenticado, qtd) {
        if (estaAutenticado) {
            this.aumentarLimit(qtd);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteConta() {
        return this.solicitarLimite(1500);
    }
}
const fulano = new Conta();
fulano.solicitarLimiteApp(true, 700);
console.log(fulano);
const joao = new BancoAfiliado();
console.log(joao);
