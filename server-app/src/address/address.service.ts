import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Address from './address.entity';
import { Search } from 'src/interfaces';
import { AddressQuery } from './address.query';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private addressRepo: Repository<Address>,
    ) {}

    async add(address: Address) {
        return await this.addressRepo.save(address)
    }

    async getOne(address: Address) {
        return await this.addressRepo.findOne({
            where: address
        })
    }

    async findAll({page, limit}: AddressQuery) {
        return await this.addressRepo.findAndCount({
            take: limit,
            skip: ((page - 1) * limit)
        })
    }
}
