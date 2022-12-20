"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusConnection = exports.connnection = void 0;
function connnection(info) {
    console.log("Conexão Realizada Com Sucesso", info.ip);
    return true;
}
exports.connnection = connnection;
function statusConnection() {
    console.log("Servidor Funcionando 100%");
}
exports.statusConnection = statusConnection;
