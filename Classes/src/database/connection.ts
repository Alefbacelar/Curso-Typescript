type Connection={
  ip: String;
  name: String;
}

export function connnection(info: Connection):boolean{
  console.log("Conexão Realizada Com Sucesso", info.ip)
  return true;
}

export function statusConnection(): void{
  console.log("Servidor Funcionando 100%")
}