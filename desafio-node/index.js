// Exercício 1.1 e 1.2 - Script CLI com Node.js
import chalk from 'chalk';

// process.argv[2] é o primeiro parâmetro digitado depois de "node index.js"
const nome = process.argv[2];

if (nome) {
  console.log(chalk.green(`Olá, ${nome}! Bem-vinda ao curso de React.`));
} else {
  console.log(chalk.red('Por favor, informe o nome do aluno.'));
}
