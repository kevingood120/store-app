import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Customer from './customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private customerRepo: Repository<Customer>,
    ) {}

    async add(customer: Customer) {
        return this.customerRepo.save(customer)
    }

    async findAll() {
        return await this.customerRepo.find({relations: ['address']})
    }

    async findWithFilters(customer: Customer) {
        return await this.customerRepo.findOne({
            where: customer,
            relations: ['address']
        })
    }
}
