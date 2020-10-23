import React, { useState } from 'react'
import {
    GlobalStyle
} from '../../style'
import {
    Customer
} from '../../pages/Customer'
import {
    BrowserRouter, Switch, Route
} from 'react-router-dom'
import { ThemeContainer, Toolbar, Button, Container, Snackbar } from '../../components'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from '../Sidebar'
import { Provider } from 'react-redux'
import store from '../../store'
import { Address } from '../../pages/Address'

const RouteList = [
    {
        component: () => <div>Home</div>,
        path: '/',
        exact: true
    },
    {
        component: Customer,
        path: '/customer'
    },
    {
        component: Address,
        path: '/address'
    }
]

const Routes: React.FC = () => {

    const [show, setShow] = useState(false)

    return (
        <Provider store={store}>
            <ThemeContainer>
                <BrowserRouter>
                    <Snackbar/>
                    <Toolbar title={'Sistema'}>
                            <Button icon onClick={() => setShow(true)}>
                                <FaBars/>
                            </Button>
                        </Toolbar>
                        <Sidebar close={() => setShow(false)} show={show}/>
                        <Container>
                            <Switch>
                                {
                                    RouteList.map(value => (
                                        <Route exact={value.exact} component={value.component} key={value.path} path={value.path}/>
                                    ))
                                }
                            </Switch>
                        </Container>
                </BrowserRouter>
                <GlobalStyle/>
            </ThemeContainer>
        </Provider>
    )
}

export { Routes }