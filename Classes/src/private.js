"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta() {
        this.limite = 450;
    }
    Conta.prototype.aumentarLimit = function (qtd) {
        if (qtd < 1000) {
            this.limite = qtd;
            console.log("Agora seu limite \u00E9: " + this.limite);
        }
        else {
            console.log("Infelizmente seu limite foi negado");
        }
    };
    Conta.prototype.solicitarLimite = function (qtd) {
        return this.aumentarLimit(qtd);
    };
    Conta.prototype.solicitarLimiteApp = function (estaAutenticado, qtd) {
        if (estaAutenticado) {
            this.aumentarLimit(qtd);
        }
        else {
            return false;
        }
    };
    return Conta;
}());
var BancoAfiliado = /** @class */ (function (_super) {
    __extends(BancoAfiliado, _super);
    function BancoAfiliado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BancoAfiliado.prototype.limiteConta = function () {
        return this.solicitarLimite(1500);
    };
    return BancoAfiliado;
}(Conta));
var fulano = new Conta();
fulano.solicitarLimiteApp(true, 700);
console.log(fulano);
var joao = new BancoAfiliado();
console.log(joao);
