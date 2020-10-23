import React, { forwardRef, useImperativeHandle } from 'react'
import { FormProps } from '../..'
import {
    useForm,
    FormProvider
} from 'react-hook-form'
import { FormHandles } from '../../types'

export const Form = forwardRef<FormHandles, FormProps & { children: any }>(({children, onSubmit, formOptions}, ref) => {

    useImperativeHandle(ref, () => ({
        ...formMethods
    }))

    const formMethods = useForm(formOptions ?? { defaultValues: {} })

    return (
        <FormProvider { ...formMethods}>
            <form autoComplete={'off'} noValidate={true} onSubmit={formMethods.handleSubmit(onSubmit)}> 
                { children }
            </form>
        </FormProvider>
    )   
}) 