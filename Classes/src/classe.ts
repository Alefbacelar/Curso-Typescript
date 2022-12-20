type Status = "Aberto" | "Fechado";

class Loja{
  nome: string;
  categoria: string;

  constructor(nome:string, categoria:string){
    this.categoria = categoria;
    this.nome = nome;
  }

  public criarLoja(): void{
    console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
  }

  emitirPedido(mesa: number, ...pedidos: string[]){
    pedidos.map((pedido)=>{
      console.log(`Saindo novo pedido: ${pedido}`)
    })

  }
}