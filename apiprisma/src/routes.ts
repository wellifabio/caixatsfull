import { Application } from "express";
import { UsuarioController } from "./controllers/Usuario";
import { LancamentoController } from "./controllers/Lancamento";

const usuario = new UsuarioController();
const lancamento = new LancamentoController();

export const routes = (app: Application) => {
    app.get("/", usuario.teste);
    app.post("/usuarios", usuario.create);
    app.get("/usuarios", usuario.readAll);
    app.get("/usuarios/:id", usuario.readById);
    app.put("/usuarios", usuario.update);
    app.delete("/usuarios/:id", usuario.delete);

    app.post("/lancamentos", lancamento.create);
    app.get("/lancamentos", lancamento.readAll);
    app.get("/lancamentos/id/:id", lancamento.readById);
    app.get("/lancamentos/:date", lancamento.readByDate);
    app.put("/lancamentos", lancamento.update);
    app.delete("/lancamentos/:id", lancamento.delete);
};