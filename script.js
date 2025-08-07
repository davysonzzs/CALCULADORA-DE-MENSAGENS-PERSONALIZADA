let nome = "Davyson"
let idade = 20
let cidade = "General Sampaio"
let profissao = "Engenheiro de sorftware"
let anoAtual = 2025
let salario = 10000
let bonus = 5000

//Calculos
let anoDeNascimento = anoAtual - idade
let totalDoMes = salario + bonus
let totalDoAno = totalDoMes * 12
let salarioAnualDobrado = totalDoAno * 2

alert(`
    ======= RELATÓRIO DO USUÁRIO =======
    Nome: ${nome}
    Idade: ${idade}
    Ano de Nascimento: ${anoDeNascimento}
    Cidade: ${cidade}
    Profissão: ${profissao}

    Salário base: U$${salario}
    Bônus: U$${bonus}
    Total mensal: U$${totalDoMes}
    Total anual: U$${totalDoAno}
    Total anual (salário dobrado): U$${salarioAnualDobrado} 
    =======================================
    `)
