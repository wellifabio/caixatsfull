import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export class UsuarioController {

    teste(req: Request, res: Response) {
        res.send('API livrocaixa com Prisma respondendo!');
    }

    async create(req: Request, res: Response) {
        try {
            const usuario = await prisma.usuario.create({
                data: req.body
            });
            res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    async readAll(req: Request, res: Response) {
        try {
            const usuarios = await prisma.usuario.findMany({});
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async readById(req: Request, res: Response) {
        try {
            const usuarios = await prisma.usuario.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const usuario = await prisma.usuario.update({
                where: {
                    id: req.body.id
                },
                data: req.body
            });
            res.status(202).json(usuario);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const usuario = await prisma.usuario.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            res.status(204).json(usuario);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
}