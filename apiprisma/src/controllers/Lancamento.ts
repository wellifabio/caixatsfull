import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export class LancamentoController {

    async create(req: Request, res: Response) {
        try {
            const lancamento = await prisma.lancamento.create({
                data: req.body
            });
            res.status(201).json(lancamento);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    async readAll(req: Request, res: Response) {
        try {
            const lancamentos = await prisma.lancamento.findMany({
                orderBy: {
                    data: 'desc'
                }
            });
            res.status(200).json(lancamentos);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async readById(req: Request, res: Response) {
        try {
            const lancamento = await prisma.lancamento.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });
            res.status(200).json(lancamento);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async readByDate(req: Request, res: Response) {
        try {
            const inicio = new Date(req.params.date);
            inicio.setHours(0, 0, 0, 0);
            inicio.setDate(inicio.getDate() + 1);
            const fim = new Date(req.params.date);
            fim.setHours(23, 59, 59, 999);
            fim.setDate(fim.getDate() + 1);
            const lancamentos = await prisma.lancamento.findMany({
                where: {
                    data: {
                        gte: inicio,
                        lt: fim
                    }
                }
            });
            res.json(lancamentos);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const lancamento = await prisma.lancamento.update({
                where: {
                    id: req.body.id
                },
                data: req.body
            });
            res.status(202).json(lancamento);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const lancamento = await prisma.lancamento.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            res.status(204).json(lancamento);
        }
        catch (error) {
            res.status(400).json(error);
        }
    }
}