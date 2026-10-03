/**
 * P1 - T303 - Programação e Design para Web II
 * Professora: Claudineia Moreira de Oliveira
 * Aluno: Willian | Matrícula: 2521560991008
 * Questão 1 - Exercícios 1.1 e 1.2: Script CLI com Node.js e chalk
 */

// Exercício 1.1 e 1.2 - Script CLI com Node.js e chalk
const chalk = require("chalk");

// process.argv[0] = caminho do node, [1] = caminho do script, [2] = primeiro parâmetro
const nome = process.argv[2];

if (!nome) {
  // Exercício 1.2: validação - sem nome, aviso em vermelho
  console.log(chalk.red("Aviso: você precisa informar o nome do aluno!"));
  console.log(chalk.red("Exemplo: node index.js Maria"));
  process.exit(1);
}

// Exercício 1.2: nome informado, mensagem em verde
console.log(chalk.green(`Olá, ${nome}! Bem-vinda ao curso de React.`));
