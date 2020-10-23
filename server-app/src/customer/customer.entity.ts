import { Entity, Column, PrimaryColumn, Generated, JoinColumn, OneToOne, OneToMany, ManyToOne } from "typeorm"
import Address from "src/address/address.entity"

@Entity()
export default class Customer {

    @PrimaryColumn({type: 'uuid', length: 36})
    @Generated('uuid')
    id: string

    @Column({type: 'varchar', length: 200})
    name: string

    @Column({type: 'varchar', length: 13})
    tel: string

    @Column({type: 'varchar', length: 14})
    cel: string

    @Column({type: 'varchar', length: 14, unique: true})
    cpf: string

    @Column({type: 'varchar', length: 200})
    email: string

    @Column({type: 'varchar', length: 10})
    addressNumber!: string

    @Column({type: 'varchar', length: 255})
    comments!: string

    @ManyToOne(() => Address)
    @JoinColumn()
    address!: Address

}