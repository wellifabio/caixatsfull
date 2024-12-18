import { RowDataPacket } from "mysql2"
export interface ILancamento extends RowDataPacket {
    id?: number
    usuario: number
    descricao: string
    valor: Float64Array
    tipo: string
    data?: Date
}