import connection from "../../dao/db"
import { ILancamento } from "../Lancamento"
import { OkPacket } from "mysql2"

export class LancamentoRepository {
    readAll(): Promise<ILancamento[]> {
        return new Promise((resolve, reject) => {
            connection.query<ILancamento[]>("SELECT * FROM Lancamento", (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }

    readById(id: number): Promise<ILancamento | undefined> {
        return new Promise((resolve, reject) => {
            connection.query<ILancamento[]>(
                "SELECT * FROM Lancamento WHERE id = ?",
                [id],
                (err, res) => {
                    if (err) reject(err)
                    else resolve(res?.[0])
                }
            )
        })
    }

    readByDate(date: Date): Promise<ILancamento[]> {
        return new Promise((resolve, reject) => {
            connection.query<ILancamento[]>(
                "SELECT * FROM Lancamento WHERE data LIKE ?",
                [date.toISOString().slice(0, 10)+'%'],
                (err, res) => {
                    if (err) reject(err)
                    else resolve(res)
                }
            )
        })
    }

    create(Lancamento: ILancamento): Promise<ILancamento> {
        return new Promise((resolve, reject) => {
            connection.query<OkPacket>(
                "INSERT INTO Lancamento (usuario, descricao, valor, tipo) VALUES(?,?,?,?)",
                [Lancamento.usuario, Lancamento.descricao, Lancamento.valor, Lancamento.tipo],
                (err, res) => {
                    if (err) reject(err)
                    else
                        this.readById(res.insertId)
                            .then(Lancamento => resolve(Lancamento!))
                            .catch(reject)
                }
            )
        })
    }

    update(Lancamento: ILancamento): Promise<ILancamento | undefined> {
        return new Promise((resolve, reject) => {
            connection.query<OkPacket>(
                "UPDATE Lancamento SET usuario = ?, descricao = ?, valor = ?, tipo = ? WHERE id = ?",
                [Lancamento.usuario, Lancamento.descricao, Lancamento.valor, Lancamento.tipo, Lancamento.id],
                (err, res) => {
                    if (err) reject(err)
                    else
                        this.readById(Lancamento.id!)
                            .then(resolve)
                            .catch(reject)
                }
            )
        })
    }

    remove(id: number): Promise<number> {
        return new Promise((resolve, reject) => {
            connection.query<OkPacket>(
                "DELETE FROM Lancamento WHERE id = ?",
                [id],
                (err, res) => {
                    if (err) reject(err)
                    else resolve(res.affectedRows)
                }
            )
        })
    }
}