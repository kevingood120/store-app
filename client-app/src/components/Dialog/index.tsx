import React, { useRef } from 'react'
import { DialogProps } from '..'
import { Container } from './style'
import { CSSTransition } from 'react-transition-group'

const Dialog: React.FC<DialogProps> = ({open, children}) => {
    const nodeRef = useRef<HTMLDivElement>(null)
    return (
        <CSSTransition nodeRef={nodeRef} timeout={400} classNames="dialog" unmountOnExit in={open}>
            <Container ref={nodeRef}>
                { children }
            </Container>
        </CSSTransition>

    )
}


export { Dialog }
