import React, { useCallback, useEffect, useRef, EventHandler, forwardRef, FormEvent } from 'react'
import styled from 'styled-components'
import {
    Container,
    ContainerControl,
    Label,
    Underline,
    Message,
    BaseControl,
    AppendText,
    ButtonRight
} from '../style'

import { FieldProps } from '../..'
import { masks } from '../masks'

const InputBox = styled.input<FieldProps>`
    ${BaseControl};
`

const TextAreaBox = styled.textarea<FieldProps>`
    ${BaseControl};
    resize: none;
`

const FieldRender: React.ForwardRefRenderFunction<HTMLInputElement | HTMLTextAreaElement, FieldProps> = (props,ref) => {

    const {errorMessage, type, title, name ,value, outline ,mask, maxLength, containerStyle, prefix, rightButtonOnClick, rightButtonIcon, onInput ,...rest} = props

    const handleInput = (ev: any) => {

        if(mask) {
            const { mask: masked, maxLength} = masks[mask]
            ev.target.value = masked(ev.target.value)
            ev.target.maxLength = maxLength
        }

        onInput && onInput(ev)
    }

    return (
        <Container style={containerStyle}  rightButton={!!rightButtonOnClick}>
            <ContainerControl>
                
                {
                    type !== 'textarea' ? (
                        <InputBox 
                            ref={ref as any}
                            prefix={prefix} 
                            autoComplete="chrome-off" 
                            type={type || 'text'} 
                            placeholder=" "  
                            onInput={handleInput}
                            id={name} 
                            name={name}
                            value={value} 
                            maxLength={maxLength} 
                            { ...rest}/>
                    ) : (
                        <TextAreaBox type="text" placeholder=" " maxLength={maxLength}  ref={ref as any} id={name} onInput={handleInput}  name={name} prefix={prefix} autoComplete="chrome-off"  { ...rest}/>
                    )
                }

                { errorMessage && <Message>{errorMessage}</Message> }
                { prefix && <AppendText>{prefix}</AppendText>}
                <Label htmlFor={name}>{title}</Label>
                <Underline/>
            </ContainerControl>
            { rightButtonOnClick && <ButtonRight type={'button'} onClick={rightButtonOnClick}>{rightButtonIcon}</ButtonRight> }
        </Container>
    )
}

const Field = forwardRef(FieldRender)

export {
    Field
}

