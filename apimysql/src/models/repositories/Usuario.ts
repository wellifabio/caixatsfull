import connection from "../../dao/db"
import { IUsuario } from "../Usuario"
import { OkPacket } from "mysql2"

export class UsuarioRepository {

    create(usuario: IUsuario): Promise<IUsuario> {
        return new Promise((resolve, reject) => {
            connection.query<OkPacket>(
                "INSERT INTO usuario (nome, email) VALUES(?,?)",
                [usuario.nome, usuario.email],
                (err, res) => {
                    if (err) reject(err)
                    else
                        this.readById(res.insertId)
                            .then(usuario => resolve(usuario!))
                            .catch(reject)
                }
            )
        })
    }

    readAll(): Promise<IUsuario[]> {
        return new Promise((resolve, reject) => {
            connection.query<IUsuario[]>("SELECT * FROM usuario", (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }

    readById(id: number): Promise<IUsuario | undefined> {
        return new Promise((resolve, reject) => {
            connection.query<IUsuario[]>(
                "SELECT * FROM usuario WHERE id = ?",
                [id],
                (err, res) => {
                    if (err) reject(err)
                    else resolve(res?.[0])
                }
            )
        })
    }

    update(usuario: IUsuario): Promise<IUsuario | undefined> {
        return new Promise((resolve, reject) => {
            connection.query<OkPacket>(
                "UPDATE usuario SET nome = ?, email = ? WHERE id = ?",
                [usuario.nome, usuario.email, usuario.id],
                (err, res) => {
                    if (err) reject(err)
                    else
                        this.readById(usuario.id!)
                            .then(resolve)
                            .catch(reject)
                }
            )
        })
    }

    remove(id: number): Promise<number> {
        return new Promise((resolve, reject) => {
            connection.query<OkPacket>(
                "DELETE FROM usuario WHERE id = ?",
                [id],
                (err, res) => {
                    if (err) reject(err)
                    else resolve(res.affectedRows)
                }
            )
        })
    }
}