import React, { useState, useEffect } from 'react'
import { DataTable, DataTableColumn, PageSettings } from '../../components'
import {
    FaPen
} from 'react-icons/fa'
import api from '../../configs/http'

interface Customer {
    id?: string
    name: string
    tel: string
    cel: string
    cpf: string
    email: string
    addressNumber?: string
    address?: Address
    comments: string
}

interface Address {
    id: string
    zipcode: string
    city: string
    state: string
    street: string
    neighborhood: string
}

const CustomerTable: React.FC<{onEdit?: (row: any) => void}> = ({onEdit}) => {

    const [data, setData] = useState<Customer[]>([])

    const columns: DataTableColumn[] = [
        {
            property: 'name',
            text: 'Nome'
        },
        {
            property: 'email',
            text: 'Email',
        },
        {
            property: 'tel',
            text: 'Telefone'
        },
        {
            property: 'cel',
            text: 'Celular'
        },
        {
            property: 'cpf',
            text: 'CPF'
        },
        {
            property: 'address.zipcode',
            text: 'CEP'
        },
        {
            property: 'address.street',
            text: 'Endereço',
            customRender(row: Customer, column) {
                if(row.address) 
                    return `${row.address?.street}, ${row.addressNumber}`
                
                return null;
            }
        },
        {
            property: 'address.neighborhood',
            text: 'Bairro'
        },
        {
            property: 'address.city',
            text: 'Cidade'
        },
        {
            property: 'address.state',
            text: 'Estado'
        },
        {
            property: 'actions',
            text: 'Ações',
            customRender(row: any) {
                return (
                    <>
                        <FaPen cursor={'pointer'} onClick={() => onEdit && onEdit(row)}/>
                    </>
                )
            }
        }
    ]

    const handlePageChanged = async (pageSettings: PageSettings) => {
        
    }

    const [pageSettings, setPageSettings] = useState<PageSettings>({
        limit: 5,
        page: 1,
        totalPages: 1
    })

    useEffect(() => {
        api.get<Customer[]>('customer').then(response => setData(response.data))
    }, [])

    return (
        <>
            <DataTable pageSettings={pageSettings} onPageChanged={handlePageChanged} data={data} primaryKey="id" columns={columns} />
        </>
    )
}

export { CustomerTable }