import { RowDataPacket } from "mysql2"
export interface IUsuario extends RowDataPacket {
    id?: number
    nome: string
    email: string
}