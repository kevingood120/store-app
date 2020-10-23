import { AxiosInstance, AxiosStatic } from 'axios';
import { Customer } from '../models';
import Service, { PaginationData, Query } from './Service';
import http from '../configs/http'

export class CustomerService implements Service<Customer> {
    http: AxiosInstance

    constructor() {
        this.http = http
    }

    async getAllPagination(query: Query<Customer>): Promise<PaginationData<Customer>> {
        const response = await this.http.get<PaginationData<Customer>>('/customer', {
            params: query
        })

        return response.data
    }
    
    async add(values: Customer): Promise<Customer> {
        const response = await this.http.post<Customer>('/customer', values)
        return response.data
    }

    async update(id: string, values: Customer): Promise<Customer> {
        const response = await this.http.put<Customer>(`/customer/${id}`, values)
        return response.data
    }

    async getOne(query: Partial<Customer>): Promise<Customer> {
        const response = await this.http.get<Customer>('/customer/filter', {
            params: query
        })
        
        return response.data
    }
    
}