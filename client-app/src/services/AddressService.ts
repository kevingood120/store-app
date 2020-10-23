import Service, { PaginationData, Query } from './Service'
import {
    Address
} from '../models'
import { AxiosInstance } from 'axios'
import http from '../configs/http'

export class AddressService implements Service<Address> {

    constructor () {
        this.http = http
    }

    http: AxiosInstance

    async add(values: Address): Promise<Address> {
        const { data } = await this.http.post('address', values)
        return data
    }
    async update(id: string, values: Address): Promise<Address> {
        throw new Error('Method not implemented.')
    }
    async getAllPagination(query: Query<Address>): Promise<PaginationData<Address>> {
        throw new Error('Method not implemented.')
    }
    async getOne(query: Partial<Address>): Promise<Address> {
        const { data } = await this.http.get('address/filter', {
            params: query
        })
        return data

    }
}