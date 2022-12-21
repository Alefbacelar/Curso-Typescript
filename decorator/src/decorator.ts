//Como criar um decorator 


// Target = recebet o contructor na nossa classe
/* function logInfo(target: any){
  console.log("Sistema está online!");
} */

function logInfo(mensagem: any){
  return(target: any)=>{
    console.log(`${mensagem},${target}`)
  }
}

@logInfo("Sistema está online!")
class Sistema{

}