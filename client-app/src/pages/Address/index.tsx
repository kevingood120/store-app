import React from 'react'
import { Crud } from '../../components'
import { Property } from '../../components/Crud'

const Address: React.FC = () => {
    const schema: Property[] = [
        {
            property: 'zipcode',
            size: 4,
            text: 'CEP',
            mask: 'zipcode',
        },
        {
            property: 'street',
            size: 8,
            text: 'Logradouro',
        },
        {
            property: 'city',
            size: 5,
            text: 'Cidade',
        },
        {
            property: 'neighborhood',
            size: 5,
            text: 'Bairro',
        },
        {
            property: 'state',
            size: 2,
            text: 'UF',
            maxLength: 2,
            mask: 'uppercase'
        }
    ]

    return <Crud title="Endereço" schema={schema} endpoint="address"/>
}

export {
    Address
}