//Como criar um decorator 


// Target = recebet o contructor na nossa classe
function logInfo(target: any){
  console.log(target);
}

@logInfo
class Sistema{

}