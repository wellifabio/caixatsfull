import express, { Request, Response } from 'express';
import { routes } from './routes';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
routes(app);

app.listen(port, () => {
  console.log(`Servidor respondendo em http://localhost:${port}`);
});