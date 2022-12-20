"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("./database/connection");
var aplicativo_1 = __importDefault(require("./database/aplicativo"));
function acessarSistema() {
    connection_1.connnection({
        ip: "196.565.55.55",
        name: "MySql"
    });
}
acessarSistema();
connection_1.statusConnection();
aplicativo_1.default();
