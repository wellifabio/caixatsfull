## Node API TypeScript com Prisma e MySQL
API Node.js com TypeScript e ORM Prisma para MySQL

### Inciar um projeto
- Criar uma pasta para a API, abrir com VsCode e no terminal **cmd** ou **bash** CTRL + ` digitar:
```bash
npm init -y
```
- Instalar as dependências:
```bash
npm install prisma typescript tsx @types/node --save-dev
npm install express @types/express typescript @types/typescript ts-node nodemon
npm install cors
npm install --save-dev @types/cors
```
- Criar o arquivo de configuração do TypeScript:
```bash
npx tsc --init
```
- Alterar o arquivo **tsconfig.json**:
```json
{
  "compilerOptions": {
    "incremental": true,
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true
  },
  "include": [
    "src/**/*.ts"
  ]
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
- Iniciar o Projeto ORM Prisma
```bash
npx prisma init
```
- Iniciar o servidor:
```bash
npm run dev
```
- Resposta no colsole e acessar no navegador:
```
Servidor respondendo em http://localhost:4000
```
- Iniciar ao configuração do Model em: **./prisma/shema.prisma**
- Configurar o arquivo **.env** com o seguinte conteúdo:
```typescript
DATABASE_URL="mysql://root@localhost:3306/livrocaixa?schema=public&timezone=utc"
```
- Ao concluir as configurações, realizar a implantação do banco de dados no MySQL, para isso:
  - Abrir o XAMPP Controll-panel e dar start em Mysql
  - Executar o comando a seguir no terminal
```bash
npx prisma migrate dev --name init
```
- Desenvolver os controles e rotas