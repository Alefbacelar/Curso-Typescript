interface NovoProduto<V extends number>{
  nome:string,
  preco: V;
}

const arroz: NovoProduto<number>= {
  nome: "Arroz Branco",
  preco: 1500
}

console.log(arroz)