"use strict";
var Loja = /** @class */ (function () {
    function Loja(nome, categoria) {
        this.categoria = categoria;
        this.nome = nome;
    }
    Loja.prototype.criarLoja = function () {
        console.log("Loja " + this.nome + ", categoria: " + this.categoria);
    };
    Loja.prototype.emitirPedido = function (mesa) {
        var pedidos = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            pedidos[_i - 1] = arguments[_i];
        }
        pedidos.map(function (pedido) {
            console.log("Saindo novo pedido: " + pedido);
        });
    };
    return Loja;
}());
