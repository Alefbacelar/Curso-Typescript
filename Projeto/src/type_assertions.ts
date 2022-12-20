//Afirma algum tipo
let statusAtual: unknown = 1;
let mudaStatus: number = 0;
// Estou afirmando que o status é de fato um numero!
mudaStatus = statusAtual as number

console.log(mudaStatus)