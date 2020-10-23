import React, { useRef } from 'react'
import {
    Container,
    Nav,
    Avatar,
    AvatarName,
    AvatarContainer,
    CloseAside
} from './style'
import {
    CSSTransition
} from 'react-transition-group'
import { SidebarProps } from '../../components'
import {
    List,
    ListItem
} from '../../components/List'
import {
    NavLink,
} from '../../components'
import * as FontAwesome from 'react-icons/fa'

const links = [
    {
        text: 'Home',
        to: '/',
        icon: FontAwesome.FaHome,
        exact: true
    },
    {
        text: 'Endereços',
        to: '/address',
        icon: FontAwesome.FaMapMarked
    },
    {
        text: 'Funcionarios',
        to: '/employee',
        icon: FontAwesome.FaUserTie
    },
    {
        text: 'Clientes',
        to: '/customer',
        icon: FontAwesome.FaUser
    },
    {
        text: 'Ordem de Serviço',
        to: '/budget',
        icon: FontAwesome.FaUserMd
    },
    {
        text: 'Produtos',
        to: '/product',
        icon: FontAwesome.FaScrewdriver
    },
    {
        text: 'Serviços',
        to: '/service',
        icon: FontAwesome.FaUserCog
    },
    {
        text: 'Relatórios',
        to: '/report',
        icon: FontAwesome.FaChartBar
    },
    {
        text: 'Vendas',
        to: '/sale',
        icon: FontAwesome.FaShoppingBag
    }
]

const Sidebar: React.FC<SidebarProps> = ({show, close}) => {
    const nodeRef = useRef(null)
    return (
        <CSSTransition in={show} nodeRef={nodeRef}  timeout={200} unmountOnExit classNames="sidebar">
            <Container ref={nodeRef}>
                {
                    close && (
                        <CloseAside onClick={close}>
                            <FontAwesome.FaTimes/>
                        </CloseAside>
                    )
                }
                <AvatarContainer>
                    <Avatar/>
                    <AvatarName>Kevin Matheus</AvatarName>
                </AvatarContainer>
                <Nav>
                    <List>
                        {
                            links.map(link => (
                                <ListItem dense key={link.to}>
                                    <NavLink exact={link.exact} to={link.to}>
                                        <link.icon/>
                                        <span>{link.text}</span>
                                    </NavLink>
                                </ListItem>
                            ))
                        }
                    </List>
                </Nav>
            </Container>
        </CSSTransition>
    )
}

export {
    Sidebar
}