import React, { useCallback, useState, useMemo, useEffect } from 'react'
import {  
    Container,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Content,
} from './style'

import {
    Pagination
} from './Pagination'

import { DataTableProps, DataTableColumn, PageSettings } from '../'
import _ from 'lodash'

const DataTable: React.FC<DataTableProps> = ( {columns, data, primaryKey, onPageChanged, pageSettings }) => {

    const renderColumnContent = useCallback((item: any, column: DataTableColumn) => {
        if(!column.customRender)
            return _.get(item, column.property)
        return column.customRender(item, column)
    }, [columns])
    
    return (
        <Container>
                <Content>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {
                                    columns.map((column, index) => (
                                        <TableColumn textAlign={column.textAlign} key={index}>{column.text}</TableColumn>
                                    ))
                                }
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                (data && data.length) ? data.map(item => (
                                    <TableRow key={item[primaryKey]}>
                                        {
                                            columns.map((column, index) => (
                                                <TableCell textAlign={column.textAlign} key={index}>
                                                    {
                                                        renderColumnContent(item, column)
                                                    }
                                                </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                )) :
                                <TableRow>
                                    <TableCell style={{textAlign: 'center'}} colSpan={columns.length}>Sem linhas para mostrar</TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </Content>
                <Pagination pageSettings={pageSettings} onPageChanged={onPageChanged}/>
        </Container>
    )
}

export {
    DataTable
}