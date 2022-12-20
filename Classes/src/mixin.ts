import {applyMixins} from './mixin/applyMixin'

class Automovel{
  ligar():void{
    console.log("Automovel Ligado")
  }
  desligar():void{
    console.log("Automovel Desligado")
  }
}

class Especificacao{
  descricao:string;

  constructor(descricao:string){
    this.descricao = descricao
  }
}

class Carro{
  nome:string;

  constructor(nome:string){
    this.nome = nome;
  }
}

interface Carro extends Automovel, Especificacao{}

applyMixins(Carro,[Automovel, Especificacao])

const gol  = new Carro("Gol Quadrado");

gol.ligar();

gol.descricao = "Modelo Completo Automatico";

gol.desligar();

console.log(gol);