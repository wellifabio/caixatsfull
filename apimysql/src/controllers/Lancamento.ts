import { Request, Response } from 'express';
import { LancamentoRepository } from '../models/repositories/Lancamento';

const lancamento = new LancamentoRepository();

export class LancamentoController {

    async create(req: Request, res: Response) {
        try {
            const id = await lancamento.create(req.body);
            res.status(201).json({ id: id });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async readAll(req: Request, res: Response) {
        try {
            const Lancamentos = await lancamento.readAll();
            res.json(Lancamentos);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async readById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const lanc = await lancamento.readById(id);
            if (lanc) res.json(lanc);
            else res.status(404).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async readByDate(req: Request, res: Response) {
        try {
            const date = new Date(req.params.date);
            const user = await lancamento.readByDate(date);
            if (user) res.json(user);
            else res.status(404).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            await lancamento.update(req.body);
            res.status(202).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await lancamento.remove(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}