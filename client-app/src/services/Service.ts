import { AxiosInstance } from "axios";

export interface PaginationData<T> {
    rows: T[]
    meta: {
        page: number,
        limit: number,
        totalRows: number,
        totalPages: number
    }
}

export type Query<T> = Partial<T> & { page: number, limit: number }


export default interface Service<T extends any> {
    http: AxiosInstance
    add(values: T): Promise<T>
    update(id: string,values: T): Promise<T>
    getAll?(): Promise<T[]>
    getAllPagination(query: Query<T>): Promise<PaginationData<T>>
    getOne(query: Partial<T>): Promise<T>
}

