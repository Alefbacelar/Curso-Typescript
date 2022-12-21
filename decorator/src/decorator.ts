//Como criar um decorator 


// Target = recebet o contructor na nossa classe
/* function logInfo(target: any){
  console.log("Sistema está online!");
} */

/* function logInfo(mensagem: any){
  return(target: any)=>{
    console.log(`${mensagem},${target}`)
  }
}

@logInfo("Sistema está online!")
class Sistema{

} */



// =============== PRATICANDO ================

function setIpservidor(novoIp : string){
  return (target: any)=>{ //target é o construtor da nossa classe.
    return class extends target{
      ip = novoIp;
    }
  }
}

@setIpservidor("xxx.xxx.xx.x")
class Servidor{
  
}

const servidor1 = new Servidor();
console.log(servidor1)