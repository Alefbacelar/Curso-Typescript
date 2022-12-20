import {connnection, statusConnection} from './database/connection'
import status from './database/aplicativo'

function acessarSistema(){
  connnection({
    ip: "196.565.55.55",
    name: "MySql"
  })
}

acessarSistema();

statusConnection();

status();