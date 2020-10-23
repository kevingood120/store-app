import React from 'react'
import styled from 'styled-components'
import { BackdropProps } from '../'

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: ${props => props.theme.zIndex.backdrop};
    background-color: rgba(0,0,0,0.5);
`



export { Backdrop }