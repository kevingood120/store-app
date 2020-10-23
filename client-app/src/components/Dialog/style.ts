import styled from 'styled-components'
import { Backdrop } from '../Backdrop'
import { CardContainer } from '../Card'

const Container = styled(Backdrop)`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    
    &.dialog-enter {
        opacity: 0;

        & > ${CardContainer} {
            transform: scale(0);
        }
    }

    &.dialog-enter-active {
        opacity: 1;
        transition: opacity 350ms linear;

        & > ${CardContainer} {
            transform: scale(1);
            transition: transform 350ms ease-in;
        }
    }

    &.dialog-exit {
        opacity: 1;
        & > ${CardContainer} {
            transform: scale(1);
        }
    }

    &.dialog-exit-active {
        opacity: 0;
        transition: opacity 350ms ease-out;

        & > ${CardContainer} {
            transform: scale(0);
            transition: transform 350ms linear;
        }
    }
`

export {
    Container
}