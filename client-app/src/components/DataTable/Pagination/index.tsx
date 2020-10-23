import React, { useMemo, useCallback } from 'react'
import {
    Container,
    Text,
    ContentShowRows
} from './style'
import { 
    Button,
    ComboBox
} from '../../'
import {
    FaAngleRight,
    FaAngleLeft,
    FaAngleDoubleLeft,
    FaAngleDoubleRight
} from 'react-icons/fa'
import { PaginationProps } from '../..'

const Pagination: React.FC<PaginationProps> = ({ pageSettings , onPageChanged }) => {
    
    const { limit, totalPages, page } = pageSettings

    const textPagination = useMemo(() => `${page} - ${totalPages}`, [page, totalPages])

    const handleClick = useCallback((newPage: number) => {
        onPageChanged({
            ...pageSettings,
            page: newPage
        })
    }, [pageSettings, onPageChanged])

    const handleLimitChanged = useCallback((ev: any,newLimit: number) => {
        onPageChanged({
            ...pageSettings,
            limit: newLimit
        })
    }, [])

    return (
        <Container>
            <ContentShowRows>
                <span>Exibindo</span>
                <ComboBox selectedItem={limit} onChange={handleLimitChanged} data={[5,10,20,50]}/>
                <span>linhas</span>
            </ContentShowRows>
            <Button small disabled={page === 1} onClick={() => handleClick(1)} icon >
                <FaAngleDoubleLeft/>
            </Button>
            <Button small disabled={page === 1} onClick={() => handleClick(page - 1)} icon>
                <FaAngleLeft/>
            </Button>
            <Text>{textPagination}</Text>
            <Button small disabled={page === totalPages} onClick={() => handleClick(page + 1)} icon>
                <FaAngleRight/>
            </Button>
            <Button small disabled={page === totalPages} onClick={() => handleClick(totalPages)} icon>
                <FaAngleDoubleRight/>
            </Button>
        </Container>
    )
} 

export {
    Pagination
}