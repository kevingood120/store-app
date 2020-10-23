import styled from 'styled-components'
import { ColProps } from '..'

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0px -2px;
    
`

const Col = styled.div<ColProps>`
    flex-basis: ${({size}) => size ? ((100 * size) / 12) + '%': 'auto'};
    align-items: ${props => props.alignItems || 'stretch'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    padding: 0px 2px;
`

export {
    Row,
    Col
}