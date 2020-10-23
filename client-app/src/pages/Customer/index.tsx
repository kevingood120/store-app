import React, { useState } from 'react'
import * as Card from '../../components/Card'
import { 
    Toolbar, Dialog, Button
} from '../../components'
import { CustomerRegister } from '../../views/CustomerRegister'
import { CustomerTable } from '../../views/CustomerTable'
import {
    FaTimes
} from 'react-icons/fa'

const Customer: React.FC = ({}) => {

    const [open, setOpen] = useState(false)
    const [customer, setCustomer] = useState({})

    const handleEdit = (row: any) => {
        setCustomer(row)
        setOpen(true)
    }

    return (
    <>
        <h2>Clientes</h2>
        <CustomerTable onEdit={handleEdit}/>
        <Button backgroundColor={'info'} onClick={() => setOpen(true)}>Novo cliente</Button>
        <Dialog open={open}>
            <Card.CardContainer width={'500px'}>
                <Card.CardHeader>
                    Adicionar cliente
                    <FaTimes onClick={ev => setOpen(false)}/>
                </Card.CardHeader>
                <Card.CardBody>
                    <CustomerRegister customer={customer}/>
                </Card.CardBody>
            </Card.CardContainer>
        </Dialog></>
    )
}

export { Customer }