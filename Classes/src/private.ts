class Conta{
    private limite:number = 450;

    private aumentarLimit(qtd:number){
      if(qtd < 1000){
        this.limite = qtd;
        console.log(`Agora seu limite é: ${this.limite}`)
      }
    }

    solicitarLimiteApp(estaAutenticado: boolean, qtd: number){
      if(estaAutenticado){
        this.aumentarLimit(qtd);
      }else{
        return false
      }
    }
}

const fulano = new Conta();

fulano.solicitarLimiteApp(true, 700)

console.log(fulano);