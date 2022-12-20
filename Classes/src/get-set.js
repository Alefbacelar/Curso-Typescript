"use strict";
var Jogo = /** @class */ (function () {
    function Jogo(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    Object.defineProperty(Jogo.prototype, "getServidorIp", {
        get: function () {
            console.log("== METODO GET ==");
            return this.servidor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jogo.prototype, "setServidorIP", {
        set: function (novoIp) {
            if (this.servidor === novoIp) {
                throw new Error("O novo IP deve ser diferente do IP antigo");
            }
            this.servidor = novoIp;
        },
        enumerable: false,
        configurable: true
    });
    return Jogo;
}());
var GTA5 = new Jogo("193.123.1.45");
try {
    GTA5.setServidorIP = "Fluindo";
}
catch (error) {
    console.log("Error:");
}
GTA5.setServidorIP = "HACKEADO";
console.log(GTA5.getServidorIp);
