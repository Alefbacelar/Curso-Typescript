
class Usuarios{
  nome: string;
  email: string;

  constructor(nome: string, email:string){
    this.nome = nome;
    this.email = email;
  }
}

class Adm extends Usuario{
  cargo: string;
  nivel: number;

  constructor(nome:string, email:string, cargo:string, nivel:number){
//chamando o contructor da classe pai
    super(nome, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }

  mudarCargo():void{
    console.log("ALTERANDO CARGO")
  }
}

const user = new Adm("Alef", "Aled@Teste.com", "Programador", 2);

user.cargo = "Mobile"
user.mudarCargo();