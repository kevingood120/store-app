import React, { useCallback, useMemo } from 'react'
import { useFormContext, ValidationRules } from 'react-hook-form'
import { FieldProps } from '../..'
import { Field } from '../Field'
import _ from 'lodash'

const FieldForm: React.FC<FieldProps & { inputRef?: HTMLInputElement, validations?: ValidationRules}> = ({name, inputRef, onBlur, validations ,...rest}) => {

    const { errors, register, watch } = useFormContext()



    if(rest.type === 'hidden') return <input type="hidden" name={name} ref={register}/>

    return (
        <Field errorMessage={_.get(errors, name)?.message} name={name} ref={validations ? register(validations) : register} {...rest} />
    )
}

export {
    FieldForm
}