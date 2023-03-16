console.log("5 é maior que 20 e também é menor que 2?", (5 > 20) && (5 < 2))
console.log("5 é igual a 5 ou é igual a '5'", (5 === 5) || (5 === "5"))
console.log("negação de 20 é maior que cinquenta", !20 > 50)
console.log("negação de 20 é maior que cinquenta ou cinquenta é maior que sessenta", (!20 > 50) || (50 > 60))

// Parte 2

// Informações pessoais

const nome = "Fulano da Silva"
const cpf = 00000000000
const dataNascimento = "10/02/1990"
let endereco = "Rua dos bobos, Número 0"
let filhos = 2
let cnh = "Sim"
let cargo = "Vendedor"
let salario = 2000
const dataEmprego = "2019"

// Dados adicionais

const auxilioCreche = 45.50 * filhos
let comissao = 0.1
const vendasJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarco = 4124.10
const vendasAbril = 1874.00
const vendasMaio = 7000.00
const vendasJunho = 9450.00
const desconto = 0.05
const liquido = 0.95

// Salario mensal

const salarioJaneiro = ((salario + vendasJaneiro) * (liquido)) + auxilioCreche
const salarioFevereiro = ((salario + vendasFevereiro) * (liquido)) + auxilioCreche
const salarioMarco = ((salario + vendasMarco) * (liquido)) + auxilioCreche
const salarioAbril = ((salario + vendasAbril) * (liquido)) + auxilioCreche
const salarioMaio = ((salario + vendasMaio) * (liquido)) + auxilioCreche
const salarioJunho = ((salario + vendasJunho) * (liquido)) + auxilioCreche

console.log("O salario fixo mais o auxilio da creche R$:", salario + auxilioCreche)
console.log(nome, "irá receber de comissão em janeiro R$:", vendasJaneiro * 0.1)
console.log(nome, "teve um desconto de inss de em janeiro R$:", (vendasJaneiro + salario) * (desconto))
console.log(nome, "recebeu seu sálario liquido em janeiro R$:", salarioJaneiro.toFixed(2))
console.log(nome, "recebeu seu sálario liquido em fevereiro R$:", salarioFevereiro.toFixed(2))
console.log(nome, "recebeu seu sálario liquido em março R$:", salarioMarco.toFixed(2))
console.log(nome, "recebeu seu sálario liquido em abril R$:", salarioAbril.toFixed(2))
console.log(nome, "recebeu seu sálario liquido em maio R$:", salarioMaio.toFixed(2))
console.log(nome, "recebeu seu sálario liquido em junho R$:", salarioJunho.toFixed(2))

// Média salarial

console.log(nome, "teve uma média salarial nos seis primeiros meses do ano de R$:", ((salarioJaneiro + salarioFevereiro + salarioMarco 
    + salarioAbril + salarioMaio + salarioJunho) / 6).toFixed(2))




