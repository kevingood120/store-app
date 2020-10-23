import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, Generated } from "typeorm"

@Entity()
export default class Address {
    @PrimaryColumn({type: 'uuid', length: 36})
    @Generated('uuid')
    id!: string

    @Column({type: 'char', length: 9, unique: true})
    zipcode: string

    @Column('varchar', { length: 200})
    street: string

    @Column('varchar', { length: 100})
    neighborhood: string

    @Column('varchar', { length: 100})
    city: string

    @Column('char', { length: 2})
    state: string
}