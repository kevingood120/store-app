import { Transform } from 'class-transformer/decorators'
import { IsNumberString, IsArray, IsNumber } from 'class-validator'
import Address from './address.entity'

export class AddressQuery{
    @Transform(limit => parseInt(limit))
    @IsNumber()
    limit?: number

    @Transform(page => parseInt(page))
    @IsNumber()
    page?: number
}