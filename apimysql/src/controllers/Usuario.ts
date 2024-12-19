import { Request, Response } from 'express';
import { UsuarioRepository } from '../models/repositories/Usuario';

const usuario = new UsuarioRepository();

export class UsuarioController {

    teste(req: Request, res: Response) {
        res.send('API livrocaixa respondendo!');
    }

    async create(req: Request, res: Response) {
        try {
            const user = req.body;
            const newUser = await usuario.create(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async readAll(req: Request, res: Response) {
        try {
            const usuarios = await usuario.readAll();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async readById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const user = await usuario.readById(id);
            if (user) res.json(user);
            else res.status(404).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
    
    async update(req: Request, res: Response) {
        try {
            const user = req.body
            const updatedUser = await usuario.update(user);
            if (updatedUser) res.status(202).json(updatedUser).end();
            else res.status(404).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const deleted = await usuario.remove(id);
            if (deleted) res.status(204).end();
            else res.status(404).end();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}