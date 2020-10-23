import styled from 'styled-components'
import {
    Button
} from '../../components'

const Nav = styled.nav`
    margin-top: 15px;
`

const Avatar = styled.img.attrs({src: 'https://www.w3schools.com/howto/img_avatar.png'})`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: block;
`

const AvatarContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const AvatarName = styled.span`
    margin-top: 10px;
`

const CloseAside = styled(Button).attrs({circle: true}) `
    background-color: transparent;
    position: absolute;
    top: -5px;
    right: -5px;
    &:hover {
        background-color: transparent;
    }

    &:focus {
        box-shadow: none;
    }

    &:active {
        background-color: transparent;
    }

    svg {
        width: 30px;
        height: 30px;
    }
`

const Container = styled.aside`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 240px;
    background-color: ${props => props.theme.bgColor};
    box-shadow: 2px 0px 2px rgba(0,0,0,0.2);
    z-index: ${props => props.theme.zIndex.menu};

    &.sidebar-enter {
        transform: translateX(-100%);
    }
    &.sidebar-enter-active {
        transform: translateX(0);
        transition: transform 200ms;
    }
    &.sidebar-exit {
        transform: translateX(0);
    }
    &.sidebar-exit-active {
        transform: translateX(-100%);
        transition: transform 200ms;
    }
`


export {
    Container,
    Nav,
    Avatar,
    AvatarName,
    AvatarContainer,
    CloseAside
}