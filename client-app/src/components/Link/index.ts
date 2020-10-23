import styled from 'styled-components'
import {
    NavLink as Link
} from 'react-router-dom'
import { 
    lighten,
    darken
} from 'polished'

const NavLink = styled(Link).attrs({activeClassName: 'active'})`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    transition: background-color 100ms;
    &:hover {
        background-color: ${({theme}) => lighten('.1', theme.defaultColor)};
    }

    &:active,
    &.active {
        background-color: ${({theme}) => darken('.1',theme.defaultColor)};
    }
    span {
        padding-left: 1.2rem;
    }

    padding: .9rem .6rem;

    svg {
        width: 20px;
        height: 20px;
    }
`

export { NavLink }