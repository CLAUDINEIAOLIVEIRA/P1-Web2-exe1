# Exercício 1: Script de terminal com Node.js

## Parte 1: Criando o projeto

**Passo 1. Abra o terminal.**
No VS Code, abra o menu **Terminal > Novo Terminal** (ou use o atalho `Ctrl + '`).

**Passo 2. Confira se o Node.js está instalado.**

```
node -v
npm -v
```

Se aparecerem números de versão (por exemplo, `v24.16.0`), está tudo certo.

**Passo 3. Crie a pasta do projeto e entre nela.**

```
mkdir desafio-node
cd desafio-node
```

**Passo 4. Inicialize o projeto Node.js.**

```
npm init -y
```

Esse comando cria o arquivo `package.json`, que guarda as informações e as dependências do projeto.

**Passo 5. Abra a pasta no VS Code.**

```
code .
```

## Parte 2: Exercício 1.1, lendo o nome pelo terminal

**Passo 6. Crie o arquivo `index.js`** dentro da pasta `desafio-node` e escreva:

```js
const nome = process.argv[2];

console.log(`Olá, ${nome}! Bem-vinda ao curso de React.`);
```

> **O que é `process.argv`?** É uma lista com tudo o que foi digitado no terminal.
> Se você digitar `node index.js Maria`, a lista fica assim:
>
> - posição `[0]`: o caminho do Node
> - posição `[1]`: o caminho do arquivo `index.js`
> - posição `[2]`: `Maria`, que é o nome que queremos

**Passo 7. Teste.**

```
node index.js Maria
```

O resultado esperado é `Olá, Maria! Bem-vinda ao curso de React.`

## Parte 3: Exercício 1.2, instalando e usando o chalk

**Passo 8. Instale a biblioteca chalk**, que serve para colorir textos no terminal:

```
npm install chalk
```

Depois disso, repare que:

- apareceu a pasta `node_modules`, onde ficam as bibliotecas instaladas;
- o `package.json` ganhou a seção `"dependencies"` com o chalk.

**Passo 9. Edite o `package.json`.** Faça duas alterações:

1. Na seção `"scripts"`, adicione o script `"start"`.
2. Troque `"type": "commonjs"` por `"type": "module"`. Essa mudança é necessária para podermos usar `import`, igual fazemos no React.

O arquivo vai ficar assim:

```json
{
  "name": "desafio-node",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "type": "module",
  "dependencies": {
    "chalk": "^6.0.1"
  }
}
```

**Passo 10. Atualize o `index.js`** para colorir as mensagens e verificar se o nome foi informado:

```js
import chalk from 'chalk';

const nome = process.argv[2];

if (nome) {
  console.log(chalk.green(`Olá, ${nome}! Bem-vinda ao curso de React.`));
} else {
  console.log(chalk.red('Por favor, informe o nome do aluno.'));
}
```

**Passo 11. Teste os três casos.**

| Comando | Resultado esperado |
|---|---|
| `node index.js Maria` | Mensagem de boas-vindas em **verde** |
| `node index.js` | Aviso em **vermelho** pedindo o nome |
| `npm start -- Maria` | Mensagem em **verde**, rodando pelo script `start` |

> **Por que o `--` no `npm start`?** Ele avisa ao npm que o que vem depois (`Maria`) deve ser passado para o nosso programa, e não para o próprio npm.

## Problemas comuns

- **Erro `Cannot use import statement outside a module`**: faltou trocar o `"type"` para `"module"` no `package.json` (Passo 9).
- **Erro dizendo que a execução de scripts foi desabilitada, ao rodar `npm`**: é o PowerShell bloqueando comandos. Troque o terminal para o **Prompt de Comando (cmd)**, pela setinha ao lado do `+` no terminal do VS Code.
- **Aparece `Olá, undefined!`**: o nome não foi digitado depois de `node index.js`.

## Entrega

Não coloque a pasta `node_modules` no .zip. Ela é grande e pode ser recriada com `npm install`.
