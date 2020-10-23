import { FieldProps } from '../'
import styled, { keyframes, css } from 'styled-components'

const Label = styled.label`
    position: absolute;
    top: var(--padding-input);
    left: 0;
    right: 0;
    user-select: none;
    font-size: 1rem;
    transition-property: transform, font-size, color;
    transition-duration: var(--animation-duration);
    pointer-events: none;
    background-color: transparent;
`   



const Underline = styled.div`
    position: absolute;

    left: 0;
    right: 0;
    bottom: 0;

    height: 2px;
    z-index: 1;
    transform: scaleX(0);
    pointer-events: none;
   
    background-color: ${props => props.theme.defaultColor};
    transition-property: transform, background-color;
    transition-duration: var(--animation-duration);
`

const ButtonRight = styled.button`
    outline: 0;
    border: 0;
    display: inline-block;
    background-color: transparent;
    font-size: 1.2rem;
    margin-left: 5px;
    cursor: pointer;

    color: ${props => props.theme.defaultColor};
`

interface ContainerProps {
    rightButton?: boolean
}

const Container = styled.div<ContainerProps>`
    --message-position: 1rem;
    --padding-input: 5px;
    --animation-duration: 200ms;
    --width-prefix: 1.5rem;
    padding-top: .8rem;
    padding-bottom: var(--message-position);
    margin: 4.5px 0px;
    display: flex;

`

const AppendText = styled.span`
    position: absolute;
    top: var(--padding-input);
    left: 0;
    right: 0;
    width: var(--width-prefix);
    display: none;
`   



const BaseControl = css`
    -webkit-appearance: none;
    border: none;
    ${({width, prefix}: FieldProps) => {
        return css`
            width: ${width ?? '100%'};
            
            text-indent: ${prefix ? 'var(--width-prefix)' : '0px'};
        `
    }};
    border-style: none;
    border-radius: 0;
    outline: none;
    display: block;
    border-bottom: 1px solid black;
    padding-bottom: var(--padding-input)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;
    padding-top: var(--padding-input);
    
    font-size: 1rem;
    background-color: transparent;

    &:focus ~ ${Label} {
        color: ${props => props.theme.defaultColor};
    }

    &:focus ~ ${AppendText} {
        display: inline;
    }

    &:focus:not(:read-only) ~ ${Label},
    &:not(:placeholder-shown) ~ ${Label} {
        transform: translateY(calc(calc(-1 * var(--padding-input)) + -.8rem));
        font-size: .8rem;
    }

    &:not(:placeholder-shown) ~ ${AppendText} {
        display: inline;                                                                                                                                                                                        
    }

    &:focus ~ ${Underline} {
        transform: scaleX(1);
    }
    
`


const ContainerControl = styled.fieldset`
    border: none;
    position: relative;
    flex: 1;
`

const animacao = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`

const Message = styled.span`
    position: absolute;
    left: 0;
    right: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    bottom: calc(-1 * var(--message-position));
    font-size: 0.8rem;
    color: ${props => props.theme.palette.error};
    pointer-events: none;
    
    animation: ${animacao} 100ms linear;

    & ~ ${Underline} {
        transform: scaleX(1);
        background-color: ${props => props.theme.palette.error};
    }

    & ~ ${Label} {
        color: ${props => props.theme.palette.error} !important;
    }
`



export {
    Container,
    ContainerControl,
    Label,
    BaseControl,
    Underline,
    Message,
    AppendText,
    ButtonRight
}