import styled from 'styled-components'
import { SnackbarContainerProps } from '..'


const Container = styled.div<SnackbarContainerProps>`
    z-index: ${({theme}) => theme.zIndex.snackbar};
    position: fixed;
    --x: 150px;
    bottom: var(--x);
    right: 10px;
    width: 350px;
    padding: 10px;
    padding-bottom: 30px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${(props) => props.backgroundColor ? props.theme.palette[props.backgroundColor] : props.theme.defaultColor};
    border-radius: 5px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    &.snack-enter {
        bottom: 0;
        transform: translateY(100%);
    }
    &.snack-enter-active {
        bottom: var(--x);
        transform: translateY(0);
        transition: transform 350ms, bottom 350ms;
    }
    &.snack-exit {
        bottom: var(--x);
        transform: translateY(0);
    }
    &.snack-exit-active {
        bottom: 0;
        transform: translateY(100%);
        transition: transform 350ms, bottom 350ms;
    }

    &::after {
        width: 0;
        height: 4px;
        border-bottom-left-radius: 5px;
        background-color: rgba(0,0,0,0.5);
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
    }

    &.snack-enter-done::after {
        width: 100%;
        transition: width ${props => props.timeout + 'ms'} linear;
    }

    &.snack-exit-done::after, &.snack-exit-active::after, &.snack-exit::after  {
        width: 100%;
    }

`

const Message = styled.strong`
    font-weight: 400;
    color: #fff;
`

export {
    Container,
    Message
}