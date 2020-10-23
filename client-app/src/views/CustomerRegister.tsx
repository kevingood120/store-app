import React, { useCallback, useRef, useMemo, useEffect } from "react";
import * as Grid from "../components/Grid";
import { Form, Button, FormHandles } from "../components";
import {
    FieldForm
} from '../components/Controls/Form/FieldForm'
import _ from 'lodash'
import { useSnackbar } from '../hooks'
import { Validate, ValidateResult } from "react-hook-form";
import { CustomerService, AddressService} from '../services'
import { Customer } from "../models";

const CustomerRegister: React.FC<{customer?: any}> = ({customer}) => {

    const showMessage = useSnackbar()
    const formRef = useRef<FormHandles>(null)

    const idCustomer = useRef<string>(null)
    const idAddress = useRef<string>(null)

    const customerService = useMemo(() => new CustomerService(), [])
    const addressService = useMemo(() => new AddressService(), [])

    const handleSubmit = useCallback(async (data) => {
        try {
            const customer = await customerService.add(data)
            console.log(data)
            showMessage('Cliente cadastrado com sucesso')
        }
        catch {
            showMessage('Erro no servidor', 3000, 'error')
        }
        finally {
            console.log('ok')
        }
    }, [])  

    const validateCpf = async (value: string): Promise<ValidateResult> => {
        const data = await customerService.getOne({cpf: value})
        if(data && data.id !== idCustomer.current) 
            return 'CPF já cadastrado na base'
        else 
            return true
    }

    const validateZipcode = (): ValidateResult => {

        if(!idAddress.current) return 'Endereço inválido'
        else return true

    }

    const handleInputZipcode = async (ev: any) => {
        const { current } = formRef
        const zipcode: string = current?.getValues('address.zipcode')
        if(zipcode.length === 9) {
            const address = await addressService.getOne({zipcode})
            if(address) {
                for(let key in address) 
                    current?.setValue(`address.${key}`, address[key])

                current?.trigger('address.zipcode')
            }
            else {
                current?.setError('address.zipcode', {
                    type: 'manual',
                    message: 'Não encontrado'
                })
            }
        }
        else {
            current?.setValue('address.id', undefined)
        }
    }

    const defaultValues = {
        id: undefined,
        address: {
            id: undefined
        }
    }

    return (
        <Form onSubmit={handleSubmit} ref={formRef} formOptions={{defaultValues}}> 
            <Grid.Row>
                <Grid.Col size={12}>
                    <FieldForm type="text" name="name" title="Nome" validations={{ required: 'Name required' }}/>
                </Grid.Col>
                <Grid.Col size={12}>
                    <FieldForm name="email" title="Email" type="email" />
                </Grid.Col>
                <Grid.Col size={4}>
                    <FieldForm name="tel" mask="tel" title="Telefone" type="tel" />
                </Grid.Col>
                <Grid.Col size={4}>
                    <FieldForm name="cel" mask="cel" title="Celular" type="tel" />
                </Grid.Col>
                <Grid.Col size={4}>
                    <FieldForm name="cpf"  validations={{ required: 'Obrigátorio', minLength: { message: 'Minimo 11 caractéres', value: 11 },  validate: validateCpf }} title="CPF" type="tel" />
                </Grid.Col>
                <Grid.Col size={3}>
                    <FieldForm name="address.zipcode" onInput={handleInputZipcode} validations={{validate: validateZipcode}} mask="zipcode" title="CEP" type="tel" />
                </Grid.Col>
                <Grid.Col size={6}>
                    <FieldForm type="text" name="address.street" tabIndex={-1}  readOnly title="Logradouro" />
                </Grid.Col>
                <Grid.Col size={3}>
                    <FieldForm type="text" name="addressNumber"  title="Numero" />
                </Grid.Col>
                <Grid.Col size={5}>
                    <FieldForm type="text" name="address.neighborhood" tabIndex={-1} readOnly title="Bairro" />
                </Grid.Col>
                <Grid.Col size={4}>
                    <FieldForm type="text" name="address.city" tabIndex={-1} readOnly title="Cidade" />
                </Grid.Col>
                <Grid.Col size={3}>
                    <FieldForm type="text" maxLength={2} tabIndex={-1} readOnly name="address.state" title="UF" />
                </Grid.Col>
                <Grid.Col size={12}>
                    <FieldForm type="text" name="complement" title="Complemento" />
                </Grid.Col>
                <Grid.Col size={12}>
                    <FieldForm type="textarea" rows={4} title="Observações" name="comments" />
                </Grid.Col>
            </Grid.Row>
            <Button type={'submit'} backgroundColor={"success"}>Salvar</Button>
        </Form>
    );
};

export { CustomerRegister }
