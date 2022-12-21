//Propriedade

function validaNome(tamanho: number) {

  return (target: any, key: string) => {
    let valor = target[key];

    const getter = () => valor;

    const setter = (value: string) => {
      if (value === "") {
        console.log("Você não pode deixar em branco");
      } else if (value.length < tamanho) {
        console.log("Você não pode criar com esse tamanho")
      } else {
        valor = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }

}

class jogo {

  @validaNome(5)
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const jogo1 = new Jogo("God of Wor")