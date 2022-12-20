class Jogo{
  private servidor : string;
  private id:string = "1234";

  constructor(servidor: string){
    this.servidor = servidor;
  }

  get getServidorIp(){
    console.log("== METODO GET ==")
    return this.servidor;
  }

  set setServidorIP(novoIp:string){
    if(this.servidor === novoIp){
      throw new Error("O novo IP deve ser diferente do IP antigo")
    }
    this.servidor = novoIp;
  }
}

const GTA5 = new Jogo("193.123.1.45");

try{
  GTA5.setServidorIP = "Fluindo"
}catch(error){
  console.log("Error:")
}

GTA5.setServidorIP = "HACKEADO"

console.log(GTA5.getServidorIp);
