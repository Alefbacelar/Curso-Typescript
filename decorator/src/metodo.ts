

function verificaPessoas(idade:number){
  return (target: any, key:string, descriptor: PropertyDescriptor)=>{
    console.log("Target:", target)
    console.log("Key:", key)
    console.log("Descriptor:", descriptor)

    const metodoOriginal = descriptor.value //Salvar o metodo original

    descriptor.value = function () {
      if(idade < 18){
        console.log("Estamos cadastrando um menor")
      }else{
        console.log("Adulto cadastrado no sistema")
      }
    }
  }
}

class Pessoas{
  nome:string;

  constructor(nome:string){
    this.nome = nome;
  }

  @verificaPessoas(16)
  cadastrarPessoas(){
    console.log(`Bem vindo ${this.nome}`)
  }
}

const pessoa1 = new Pessoas("Alef B.");

pessoa1.cadastrarPessoas();