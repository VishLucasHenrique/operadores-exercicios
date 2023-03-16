const primeiroNumero = prompt("Por favor insira um número")
const segundoNumero = prompt("Por favor insira um segundo número")

const divisao1 = primeiroNumero % segundoNumero
const divisao2 = segundoNumero % primeiroNumero

console.log("Seu primeiro número é", primeiroNumero, "e o segundo número é", segundoNumero)

console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo numero?", divisao1 === 0)
console.log("O segundo número é divisível pelo primeiro?", divisao2 === 0)