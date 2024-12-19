# Livro Caixa
## App de controle de finanças pessoais
Solução da situação problema proposta na aula 11 do curso de Desenvolvimento de Sistemas do SENAI.
## Tecnologias Front-End
|Stack|Tecnologia|
|-|-|
|Front-End|HTML|
|Front-End|CSS|
|Front-End|Vanilla JavaScript|
## Tecnologias Back-End Mysql SQL
|Stack|Tecnologia|
|-|-|
|Back-End|Node.js|
|Back-End|TypeScript|
|Banco de Dados|XAMPP (MySQL)|
## Tecnologias Back-End Mysql SQL
|Stack|Tecnologia|
|-|-|
|Back-End|Node.js|
|Back-End|TypeScript|
|ORM|Prisma|
## Tecnologias Versionamento
|Stack|Tecnologia|
|-|-|
|Versionamento|Git|

## Tutorial de como testar com Back-End sem ORM
- 1 Clone o repositório ./livrocaixa
- 2 Abra o repositório ./livrocaixa no VsCode
- 3 Abra o XAMPP e inicie o Apache e o MySQL
- 4 No VsCode abra um terminal CTLR + ' do tipo **cmd** ou **bash**, navegue até a pasta ./apimysql, instale as dependências.
```bash
cd api
npm install
```
- 5 acesse o SGBD via shell ou phpmyasmin e execute o script a seguir
```sql
DROP DATABASE IF EXISTS `livrocaixa`;
CREATE DATABASE `livrocaixa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `livrocaixa`;
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Lancamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` INTEGER NOT NULL,
    `descricao` TEXT NOT NULL,
    `valor` DOUBLE NOT NULL,
    `tipo` ENUM('entrada', 'saida') NOT NULL DEFAULT 'entrada',
    `data` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `Lancamento` ADD CONSTRAINT `Lancamento_usuario_fkey` FOREIGN KEY (`usuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
```
- 6 No terminal do VsCode execute o comando para iniciar a API
```bash
npm run dev
```
## Tutorial de como testar com Back-End com ORM Prisma
- 1 Clone o repositório ./livrocaixa
- 2 Abra o repositório ./livrocaixa no VsCode
- 3 Abra o XAMPP e inicie o Apache e o MySQL
- 4 No VsCode abra um terminal CTLR + ' do tipo **cmd** ou **bash**, navegue até a pasta ./apimysql, instale as dependências.
```bash
cd api
npm install
```
- 5 crie o arquivo .env na pasta ./api e adicione as seguintes variáveis de ambiente
```bash
DATABASE_URL="mysql://root@localhost:3306/livrocaixa?schema=public&timezone=utc"
```
- 6 No terminal do VsCode execute o comando para criar o banco de dados
```bash
npx prisma migrate dev --name init
```
- 7 No terminal do VsCode execute o comando para iniciar a API
```bash
npm run dev
```

## Dados de teste e Front-End
- 1 Para preencher com dados de teste execute o script a seguir no PhpMyAdmin ou Shell do MySQL
```sql
use livrocaixa;

insert into usuario (nome, email) values
('Ana Silva','ana@email.com'),
('Maria Costa','maria@email.com');

insert into lancamento (usuario,descricao, valor, tipo, data) values
(1,'Capital inicial dos sócios', 5000.00, 'entrada', date_sub(now(), interval 200 hour)),
(1,'Compra de mercadorias para revenda', 2000.00, 'saida', date_sub(now(), interval 199 hour)),
(1,'Pagamento do Aluguel', 1000.00, 'saida', date_sub(now(), interval 198 hour)),
(2,'Venda de mercadoria no balcão', 200.00, 'entrada', date_sub(now(), interval 186 hour)),
(2,'Pagamento de conta de Luz CPFL', 345.50, 'saida', date_sub(now(), interval 180 hour)),
(2,'Pagamento de conta de água SABESP', 55.35, 'saida', date_sub(now(), interval 170 hour)),
(2,'Pagamento de conta de telefone', 100.00, 'saida', date_sub(now(), interval 168 hour)),
(1,'Venda de mercadoria no balcão', 1000.00, 'entrada', date_sub(now(), interval 165 hour)),
(1,'Venda de mercadoria no balcão', 500.00, 'entrada', date_sub(now(), interval 159 hour)),
(1,'Pagamento de fornecedor', 500.00, 'saida', date_sub(now(), interval 148 hour)),
(1,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 102 hour)),
(1,'Venda pelo site', 99.99,'entrada', date_sub(now(), interval 97 hour)),
(1,'Pagamento de fornecedor', 1000.00, 'saida', date_sub(now(), interval 96 hour)),
(1,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 95 hour)),
(1,'Venda de mercadoria no balcão', 199.99,'entrada', date_sub(now(), interval 94 hour)),
(1,'Pagamento de fornecedor', 100.00, 'saida', date_sub(now(), interval 90 hour)),
(1,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 80 hour)),
(1,'Venda pelo site', 99.99,'entrada', date_sub(now(), interval 78 hour)),
(1,'Pagamento de fornecedor', 500.00, 'saida', date_sub(now(), interval 75 hour)),
(1,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 73 hour)),
(1,'Venda de mercadoria no balcão', 99.99,'entrada', date_sub(now(), interval 70 hour)),
(1,'Pagamento de fornecedor', 100.00, 'saida', date_sub(now(), interval 65 hour)),
(1,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 59 hour)),
(2,'Venda pelo site', 99.99,'entrada', date_sub(now(), interval 55 hour)),
(2,'Pagamento de fornecedor', 1000.00, 'saida', date_sub(now(), interval 48 hour)),
(2,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 47 hour)),
(2,'Venda pelo site', 99.99,'entrada', date_sub(now(), interval 46 hour)),
(2,'Pagamento de fornecedor', 100.00, 'saida', date_sub(now(), interval 7 hour)),
(2,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 45 hour)),
(2,'Venda de mercadoria no balcão', 99.99,'entrada', date_sub(now(), interval 44 hour)),
(2,'Pagamento de fornecedor', 100.00, 'saida', date_sub(now(), interval 30 hour)),
(2,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 29 hour)),
(2,'Venda de mercadoria no balcão', 99.99,'entrada', date_sub(now(), interval 28 hour)),
(1,'Pagamento de fornecedor', 100.00, 'saida', date_sub(now(), interval 27 hour)),
(1,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 22 hour)),
(1,'Venda pelo site', 99.99,'entrada', date_sub(now(), interval 10 hour)),
(1,'Pagamento de fornecedor', 150.00, 'saida', date_sub(now(), interval 5 hour)),
(1,'Venda pelo site', 149.99,'entrada', date_sub(now(), interval 4 hour)),
(1,'Venda de mercadoria no balcão', 89.99,'entrada', date_sub(now(), interval 3 hour)),
(1,'Venda de mercadoria no balcão', 99.99,'entrada', date_sub(now(), interval 3 hour)),
(1,'Venda pelo site', 79.99,'entrada', date_sub(now(), interval 2 hour)),
(1,'Venda de mercadoria no balcão', 139.99,'entrada', date_sub(now(), interval 2 hour)),
(1,'Venda pelo site', 49.99,'entrada', date_sub(now(), interval 1 hour)),
(1,'Pagamento de fornecedor', 150.00, 'saida', now()),
(1,'Pagamento de fornecedor', 120.00, 'saida', now()),
(1,'Pagamento de fornecedor', 100.00, 'saida', now());
```
- 2 Execute o arquivo ./vanilla/index.html com live server ou abra o arquivo no navegador

## Wireframes
- Tela de cadastro de usuários
![Tela de cadastro de usuários](./wireframe1.png)
- Tela de cadastro de lançamentos
![Tela de cadastro de lançamentos](./wireframe2.png)
- Tela principal com os lançamentos do dia
![Tela principal com os lançamentos do dia](./wireframe3.png)
- Filtro de lançamentos por data
![Filtro de lançamentos por data](./wireframe4.png)
