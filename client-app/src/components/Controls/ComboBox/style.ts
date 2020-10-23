import styled from 'styled-components'

import { List, ListItem } from '../../List'
import { rgba } from 'polished'

const Container = styled.div`
    position: relative;


    .list-enter {
        opacity: 0;
    }

    .list-enter-active {
        opacity: 1;
        transition:opacity 300ms;
    }

    .list-exit {
        opacity: 1;
    }

    .list-exit-active {
        opacity: 0;
        transition:opacity 300ms;
    }

    & > ${List} {
        position: absolute;
        min-width: 100px;
        top: 0;
        left: 0;
        right: 0;
        z-index: ${props => props.theme.zIndex.dropdown};
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.5);
    }
`

const Fieldset = styled.fieldset`
    border: none;
    width: 100%;
    position: relative;

`

const Select = styled.div`
    width: 100%;
    padding: 2px 0px;
    position: relative;
    border: none;
    border-bottom: 1px solid #000;
    transition: border-bottom 100ms;
    &:focus {
        border-bottom: 1px solid ${props => props.theme.defaultColor};
    }
    outline: none;

    padding-right: 20px;
    cursor: pointer;

    &::after {
        content: '▼';
        width: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1px;
        font-size: .7rem;
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
    }


`

const Label = styled.label`
    position: absolute;
    top: calc(1rem);
    left: 0;
    background-color: transparent;
    pointer-events: none;
    transition: 300ms;
    ${Select}:not(:empty) ~ &{
        top: 0;
        font-size: .8rem;
    }
`

export {
    Select,
    Container,
    Fieldset,
    Label
}