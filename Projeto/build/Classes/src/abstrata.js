"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("=================");
        console.log(`Nova conta pessoa fisica criada com sucesso ${dados.nome}`);
        console.log("=================");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("=================");
        console.log(`Nova conta pessoa Juridica criada com sucesso ${dados.nome}`);
        console.log("=================");
        return true;
    }
}
const bacelar = new PessoaFisica();
bacelar.abrirConta({
    nome: "Alef Bacelar",
    numero: "1025-x",
    endereco: "Rua dos bobos numero 0"
});
const programador = new PessoaJuridica();
programador.abrirConta({
    nome: "Programador",
    numero: "192.156.2.123",
    endereco: "Servidor 0"
});
