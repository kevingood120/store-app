import {Address}  from "./Address";

export interface Customer {
    id?: string
    name: string
    email: string
    cel?: string
    tel?: string
    cpf: string
    address?: Address
}
