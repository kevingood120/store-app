import styled from 'styled-components'
import { TableColumnProps, TableCellProps } from '..'

const Container = styled.div`
    margin: 10px 0px;
`

const Content = styled.div`
    white-space: nowrap;
    overflow-x: auto;
`

const TableRow = styled.tr`

`

const TableCell = styled.td<TableCellProps>`
    text-align: ${props => props.textAlign ?? 'left'};
    white-space: nowrap;
`

const TableHeader = styled.thead`
    background-color: ${props => props.theme.defaultColor};
    color: white;
`

const TableBody = styled.tbody`

`

const TableColumn = styled.th<TableColumnProps>`
    text-align: ${props => props.textAlign ?? 'left'};
    white-space: nowrap;
` 

const Table = styled.table`
    &, ${TableHeader}, ${TableRow} {
        border-collapse: collapse;
    }

    ${TableColumn}, ${TableCell} {
        padding: 1rem .5rem;
    }
    width: 100%;    

`

export {
    Container,
    Table,
    TableRow,
    TableHeader,
    TableCell,
    TableColumn,
    TableBody,
    Content,
}