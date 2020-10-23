import styled, { css } from 'styled-components'
import { darken, rgba, shade } from 'polished'
import { ButtonProps } from '..'

const selectSize = ({small, normal, large}: any) => {
    if(small)
        return css`
            padding: .5rem;

            svg {
                width: 15px;
                height: 15px;
            }
        `

    if(normal) 
        return css`
            padding: .6rem;

            svg {
                width: 20px;
                height: 20px;
            }
        `

    if(large) 
        return css`
        
        `

    return css`
        padding: .7rem;

        svg {
            width: 20px;
            height: 20px;
        }
    `
}

const Button = styled.button<ButtonProps>`
    outline: none;
    background-color: ${({backgroundColor, theme}) => backgroundColor ? theme.palette[backgroundColor] : theme.defaultColor };
    color: ${props => props.theme.textColor};
    padding: .375rem .75rem;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    white-space: nowrap;
    display: inline-flex;
    text-align: center;
    line-height: 1.5;
    font-weight: 400;
    transition: background-color .1s, box-shadow .1s;
    user-select: none;

    

    ${({icon, ...props}) => icon ? css`
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        margin: none;
        ${selectSize(props)};
        &:disabled {
            background-color: transparent !important;
            color: grey;
        }
    ` : null }
    cursor: pointer;

    &:hover {
        background-color: ${({backgroundColor, theme}) => darken(.05, backgroundColor ? theme.palette[backgroundColor] : theme.defaultColor)};
    }

    &:focus {
        box-shadow: 0px 0px 0px 3px ${({backgroundColor, theme}) => rgba(backgroundColor ? theme.palette[backgroundColor] : theme.defaultColor, .3)};
    }

    &:active {
        background-color: ${({backgroundColor, theme}) => darken(.1, backgroundColor ? theme.palette[backgroundColor] : theme.defaultColor)};
        
    }

    &:disabled {
        pointer-events: none;
        background-color: ${props => shade(.8,props.theme.defaultColor)};
    }
`

export {
    Button
}