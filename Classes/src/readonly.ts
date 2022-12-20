class Pessoa{
  nome:string;
  idade:number;
  readonly id: string = "123"

  constructor(nome:string, idade:number){
    this.nome = nome;
    this.idade = idade;
  }

  mostrarId(){
    console.log(`Id user:`, this.id) 
  }
}

const alef = new Pessoa("Alef Bacelar", 27);

alef.id

console.log(alef)