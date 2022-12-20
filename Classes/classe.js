"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
}
const redBurger = new Loja("Red Burguer", "Lanches");
redBurger.criarLoja();
const retornoLoja = redBurger.emitirPedido(48, "Suco", "Hamburguer", "Coke");
console.log(retornoLoja);
