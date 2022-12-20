
class Usuario{
  nome: string;
  email: string;

  constructor(nome: string, email:string){
    this.nome = nome;
    this.email = email;
  }
}

class Admin extends Usuario{
  cargo: string;
  nivel: number;

  constructor(nome:string, email:string, cargo:string, nivel:number){
//chamando o contructor da classe pai
    super(nome, email);

    this.cargo = cargo;
    this.nivel = nivel;
  }
}

const user1 = new Admin("Alef", "Aled@Teste.com", "Programador", 2);
console.log(user1);