import styled, { css } from 'styled-components'
import { ListItemProps, ListProps } from '..'
import {
    rgba
} from 'polished'

const List = styled.ul<ListProps>`
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.listBgColor};

    ${props => props.hoverable ? css`
        ${ListItem}:hover {
            background-color: ${props => rgba(props.theme.defaultColor, .3)};
        }
    ` : null}
`

const ListItem = styled.li<ListItemProps>`
    padding: ${props => props.dense ? 0 : '.8rem .4rem'};
    ${props => {
        if(props.active) {
            return css`
                background-color: ${props => props.theme.defaultColor} !important;
            `
        }   

        return null;
    }}

    cursor: pointer;
`


export {
    List,
    ListItem
}