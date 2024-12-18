## Node API TypeScript com MySQL
API Node.js com TypeScript e MySQL

### Inciar um projeto
- Criar uma pasta para a API, abrir com VsCode e no terminal **cmd** ou **bash** CTRL + ` digitar:
```bash
npm init -y
```
- Instalar as dependências:
```bash
npm install express @types/express typescript @types/typescript ts-node nodemon
npm install mysql2
```
- Criar o arquivo de configuração do TypeScript:
```bash
npx tsc --init
```
- Alterar o arquivo **tsconfig.json**:
```json
{
  "outDir": "./dist",
  "rootDir": "./src",
  "removeComments": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "strictFunctionTypes": true,
  "strictPropertyInitialization": true,
  "strictBindCallApply": true,
  "noImplicitThis": true,
  "noImplicitReturns": true,
  "alwaysStrict": true,
  "esModuleInterop": true,
  "skipLibCheck": true,
  "forceConsistentCasingInFileNames": true
}
```
- Criar a pasta **src** e o arquivo **index.ts**:
```bash
mkdir src
cd src
touch index.ts
```
- Adicionar o código no arquivo **index.ts**:
```typescript
import express, { Request, Response } from 'express';

const app = express();
const port = 4000;

// Rota de teste
app.get('/', (req: Request, res: Response) => {
  res.send('Esta é a rota de teste!');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor respondendo em http://localhost:${port}`);
});
```
- Adicionar o script no **package.json**:
```json
"scripts": {
  "dev": "nodemon src/index.ts"
}
```
- Iniciar o servidor:
```bash
npm run dev
```
- Resposta no colsole e acessar no navegador:
```
Servidor respondendo em http://localhost:4000
```