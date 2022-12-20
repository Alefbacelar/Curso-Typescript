"use strict";
/* let loja: object;
loja = {
  nome: 'Alef',
  endereço: 'Rua Dos Bobo',
  status: true,
} */
const BurguerK = {
    nome: 'BurguerK',
    endereco: 'Rua Dos Burguer',
    status: true,
};
//console.log(BurguerK)
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso`);
    console.log(`Endereço da Loja ${endereco}`);
    console.log(`Status da Loja: ${status}`);
    console.log("=========================");
}
novaLoja({ nome: "Red Burguer", endereco: "Esquina da Esperança", status: false });
novaLoja({ nome: "Blue Burguer", endereco: "Esquina do Desespero", status: true });
