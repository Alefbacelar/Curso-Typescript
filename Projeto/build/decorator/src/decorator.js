"use strict";
//Como criar um decorator 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function setIpservidor(novoIp) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.ip = novoIp;
            }
        };
    };
}
let Servidor = class Servidor {
};
Servidor = __decorate([
    setIpservidor("xxx.xxx.xx.x")
], Servidor);
const servidor1 = new Servidor();
console.log(servidor1);
