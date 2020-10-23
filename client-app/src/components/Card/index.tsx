import styled from 'styled-components'
import {
    CardContainerProps
} from '../types'

const CardContainer = styled.div<CardContainerProps>`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px rgba(0,0,0,.5);
    background-color: #fff;
    width: ${props => props.width ?? '450px'};
    overflow: auto;
    border-radius: 5px;
    padding: .8rem;
`

const CardHeader = styled.div`
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;

    svg {
        cursor: pointer;
    }
    padding-bottom: .5rem;
`

const CardBody = styled.div`
    flex: 1;
`

const CardFooter = styled.div`

`

export {
    CardContainer,
    CardHeader,
    CardBody,
    CardFooter,
}