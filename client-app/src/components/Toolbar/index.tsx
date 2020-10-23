import React from 'react'
import { 
    Title,
    Container
} from './style'
import { ToolbarProps } from '..'

const Toolbar: React.FC<ToolbarProps> = ({title, children}) => {

    return (
        <Container>
            { children }
            <Title>{title}</Title>
        </Container>
    )
}

export {
    Toolbar
}