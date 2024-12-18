import { Request, Response } from 'express';
import { LancamentoRepository } from '../repositories/Lancamento';

const Lancamento = new LancamentoRepository();

export class LancamentoController {

    async create(req: Request, res: Response) {
        try {
            const id = await Lancamento.create(req.body);
            res.status(201).json({ id: id });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async readAll(req: Request, res: Response) {
        try {
            const Lancamentos = await Lancamento.readAll();
            res.json(Lancamentos);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async readById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const user = await Lancamento.readById(id);
            if (user) res.json(user);
            else res.status(404).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            await Lancamento.update(req.body);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await Lancamento.remove(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}