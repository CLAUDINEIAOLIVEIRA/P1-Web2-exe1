# P1 - Programação e Design para Web II

**Aluno:** Willian
**Matrícula:** 2521560991008
**Professora:** Claudineia Moreira de Oliveira
**Disciplina:** T303 - Programação e Design para Web II
**Avaliação:** P1 | **Data:** 02/10/2026 | **Valor:** 6,0

## Questão 1 - Node.js e Ecossistema NPM (2,0)

### Exercício 1.1: Criando um script CLI com Node.js
Criar a pasta `desafio-node`, inicializar com `npm init -y` e criar o `index.js`, que lê o nome do aluno pelo terminal (`process.argv`) e imprime uma mensagem de boas-vindas.

- Comando: `node index.js Maria`
- Saída esperada: `Olá, Maria! Bem-vinda ao curso de React.`

### Exercício 1.2: Gerenciamento de Pacotes NPM
Instalar o `chalk` (ou `pico-colors`), criar o script `start` no `package.json` que executa o `index.js` e validar o nome: sem nome, aviso em vermelho; com nome, mensagem em verde.

## Como executar
```bash
npm install
npm start -- Maria
npm start            # sem nome: aviso em vermelho
```
