import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import Customer from './customer.entity';

@Controller('customer')
export class CustomerController {
    constructor(
        private customerService: CustomerService
    ) { }


    @Post()
    async add(@Body() customer: Customer) {
        return await this.customerService.add(customer)
    }

    @Get('/filter') 
    async findByEmail(@Query() customer: Customer) {
        console.log(customer)
        return await this.customerService.findFilters(customer)
    }

    @Get()
    async findAll() {
        return await this.customerService.findAll()
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.customerService.findById(id)
    }


}
