import React from 'react'
import { ThemeContext, DefaultTheme, ThemeConsumer, ThemeProvider } from 'styled-components'
import { Theme } from '..'

const DarkTheme: Theme = {
    bgColor: '#fbfbfb',
    listBgColor: '#fff',
    textColor: '#000',
    defaultColor: '#36558F',
    palette: {
        error: '#f00',
        info: '#FFB800',
        success: '#679436'
    },
    devices: {
        cell: '360px',
        computer: '1080px',
        tablet: '768px'
    },
    zIndex: {
        backdrop: '2',
        dialog: '4',
        menu: '3',
        snackbar: '5',
        dropdown: '1'
    }
}

const ThemeContainer: React.FC = ({children}) => {

    return (
        <ThemeProvider theme={DarkTheme}>
            { children }
        </ThemeProvider>
    )
}

export {
    DarkTheme,
    ThemeContainer
}


 