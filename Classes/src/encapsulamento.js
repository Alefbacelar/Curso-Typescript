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
var Usuarios = /** @class */ (function () {
    function Usuarios(nome, email, id) {
        this.nome = nome;
        this.email = email;
        this.id = id;
    }
    return Usuarios;
}());
var Adm = /** @class */ (function (_super) {
    __extends(Adm, _super);
    function Adm(nome, email, cargo, nivel) {
        var _this = 
        //chamando o contructor da classe pai
        _super.call(this, nome, email) || this;
        _this.cargo = cargo;
        _this.nivel = nivel;
        return _this;
    }
    Adm.prototype.mudarCargo = function () {
        console.log("ALTERANDO CARGO");
    };
    return Adm;
}(Usuario));
var user = new Adm("Alef", "Aled@Teste.com", "Programador", 213);
