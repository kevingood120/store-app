import { Controller, Get, Post, Body, Param, Query, Header } from '@nestjs/common';
import { AddressService } from './address.service';
import Address from './address.entity';
import { Data, Search } from 'src/interfaces';
import { AddressQuery } from './address.query';

@Controller('address')
export class AddressController {
    constructor (
        private addressService: AddressService
    ) { }

    @Get()
    async findAll(
        @Query() addressQuery: AddressQuery
    ): Promise<Data> {
        const { page, limit } = addressQuery
        console.log(typeof page)
        const [rows, totalRows] = await this.addressService.findAll({page, limit})
        return {
            rows,
            meta: {
                page,
                limit,
                totalRows,
                totalPages: Math.ceil(totalRows / limit)
            }
        }
    }

    @Post()
    async add(@Body() address: Address) {
        return await this.addressService.add(address)
    }

    @Get("/filter")
    async findByFilter(@Query() address: Address) {
        return await this.addressService.getOne(address)
    }
}
