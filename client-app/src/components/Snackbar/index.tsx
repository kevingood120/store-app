import React, { useRef, useEffect } from 'react'
import {
    Container,
    Message,
} from './style'
import {
    CSSTransition
} from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { toggle } from '../../store/slices/snackbarSlice'

const animationTimeout = 350

const Snackbar: React.FC = () => {
    const nodeRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    const { backgroundColor, message, show, timeout } = useSelector((state: RootState) => state.snackbar)

    useEffect(() => {
        setTimeout(() => show && dispatch(toggle(false)), timeout + animationTimeout)
    }, [show])
    

    return (
        <CSSTransition 
            in={show} 
            timeout={animationTimeout} 
            nodeRef={nodeRef} 
            unmountOnExit
            classNames={'snack'} >
            <Container timeout={timeout} backgroundColor={backgroundColor} ref={nodeRef}>
                <Message>{message}</Message>
            </Container>
        </CSSTransition>
    )
}

export { Snackbar }