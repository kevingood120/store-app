import styled from 'styled-components'

const Container = styled.header`
    color: ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.defaultColor};
    padding: .5rem .5rem;
    
    display: flex;
    align-items: center;
`

const Title = styled.span`
    font-size: 1.3rem;
    font-weight: 500;
    margin-left: 10px;
`

export {
    Container,
    Title
}