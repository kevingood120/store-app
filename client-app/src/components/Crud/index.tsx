import React, { useCallback, useState, useEffect, useRef } from 'react'
import { Button } from '../Button'
import { DataTable } from '../DataTable'
import { DataTableColumn, SizeColumn, PageSettings, MaskType } from '..'
import { Form } from '../Controls/Form'
import * as Grid from '../Grid'
import { Dialog } from '../Dialog'
import * as Card from '../Card'
import api from '../../configs/http'
import { showMessage } from '../../store/slices/snackbarSlice'
import { useDispatch } from 'react-redux'
import {
    FaPen
} from 'react-icons/fa'
import { FieldForm } from '../Controls/Form/FieldForm'
import { Field } from '../Controls/Field'

interface CrudProps {
    title: string
    endpoint: string
    schema: Property[]
}

export interface Property extends DataTableColumn {
    size: SizeColumn
    render?: 'TextField' | 'Textarea' | 'Combobox'
    mask?: MaskType
    maxLength?: number
}

interface Data {
    rows: [],
    meta: PageSettings
}


const Crud: React.FC<CrudProps> = ({title, endpoint,schema}) => {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    const dispatch = useDispatch()

    const [pageSettings, setPageSettings] = useState<PageSettings>({
        limit: 5,
        page: 1,
        totalPages: 1
    })

    const loadData = useCallback(async (page: number, limit: number) => {
        const response = await api.get<Data>(endpoint, {
            params: {
                page,
                limit
            }
        })

        const { rows, meta } = response.data
        setPageSettings(meta)
        setData(rows)
    }, [])

    useEffect(() => {
        loadData(1,5)
    }, [])

    const openDialog = useCallback(() => {
        setOpen(true)
    }, [open])

    const closeDialog = useCallback(() => {
        setId('')
        setOpen(false)
    }, [open])

    const openEdit = useCallback(row => {
        setId(row.id)
        openDialog()
    }, [open, id])

    console.log('render')

    const handleSubmit = useCallback(async (values, config) => {
        /*const newObj = { ...obj}
        try {
            if(id) newObj.id = id
        
            const response = await api.post(endpoint,newObj)

            loadData(1, pageSettings.limit)
            
            dispatch(showMessage({
                message: `Endereço salvo com sucesso`
            }))

        }
        catch(err) {
            console.log(err)
            dispatch(showMessage({
                message: "Erro desconhecido",
                backgroundColor: 'error',
                timeout: 10000
            }))
        }
        setId('')
        closeDialog()*/
        console.log(values)
        dispatch(showMessage({
            message: `Endereço salvo com sucesso`
        }))

    }, [endpoint, id])

    const handlePageChanged = async ({ totalPages, page, limit }: PageSettings) => {
        console.log(page, totalPages)
        await loadData(page, limit)
    }

    const actionColumn: DataTableColumn = {
        property: 'actions',
        text: 'Ações',
        customRender(row) {
            return (
                <FaPen onClick={() => openEdit(row)} cursor={'pointer'}/>
            )
        }
    }

    return (
        <>
            <h2 style={{marginBottom: '10px'}}>{title}</h2>
            <Field type="text" title="Pesquisar" containerStyle={{margin: 0}} name="street"/>
            <DataTable pageSettings={pageSettings} onPageChanged={handlePageChanged} data={data} columns={[...schema, actionColumn]} primaryKey={"id"} />
            <Dialog open={open}>
                <Card.CardContainer>
                    <Card.CardHeader>Endereço</Card.CardHeader>
                    <Card.CardBody>
                        <Form onSubmit={(data) => {}}>
                            <Grid.Row>
                                {
                                    schema.map((property: Property) => (
                                        <Grid.Col key={property.property} size={property.size}>
                                            <FieldForm type="text" maxLength={property.maxLength} title={property.text} mask={property.mask} name={property.property}/>
                                        </Grid.Col>
                                    ))
                                }
                            </Grid.Row>
                            <Button backgroundColor="success">Salvar</Button>
                            <Button type={'button'} style={{marginLeft: '5px'}} onClick={closeDialog} backgroundColor="info">Voltar</Button>
                        </Form>
                    </Card.CardBody>
                </Card.CardContainer>
            </Dialog>
            <Button onClick={openDialog} backgroundColor="success">Adicionar</Button>
        </>
    )
}

export {
    Crud
}