"use strict";
class Loja {
    constructor(nome, categoria) {
        this.categoria = categoria;
        this.nome = nome;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
    }
}
