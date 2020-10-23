import styled from 'styled-components'

const Container = styled.div`
    padding: .8rem;
    background-color: ${({theme}) => theme.defaultColor};
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        margin: 0px 2px;
    }
    
`

const Text = styled.span`
    margin: 0px .5rem;
`

const ContentShowRows = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
    span {
        margin: 0px 5px;
    }
    margin-right: 10px;
`

export {
    Container,
    Text,
    ContentShowRows
}