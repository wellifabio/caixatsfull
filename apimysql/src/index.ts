import express, { Request, Response } from 'express';
import { routes } from './routes/routes';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
routes(app);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor respondendo em http://localhost:${port}`);
});