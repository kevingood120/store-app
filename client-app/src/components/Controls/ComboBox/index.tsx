import React, { useState, useCallback, useEffect, useRef, useLayoutEffect } from 'react'
import {
    Select,
    Container,
    Fieldset,
    Label,
} from './style'

import { List, ListItem } from '../../List'

import { ComboBoxProps } from '../..'
import { CSSTransition } from 'react-transition-group'

const ComboBox: React.FC<ComboBoxProps> = ({data, displayMember, title, onChange, valueMember, selectedItem , ...rest}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const listRef = useRef(null)
    const selectRef = useRef<HTMLDivElement>(null)

    const [show, setShow] = useState(false)

    const clickItem = useCallback((ev, item) => {
        onChange && onChange(ev,item)
        setShow(false)
    }, [data])

    const handleClickOutside = useCallback(ev => {
        if(containerRef.current && !containerRef.current.contains(ev.target)) 
            setShow(false)
    }, [show])

    const handleFocus = useCallback(ev => {
        setShow(true)
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const renderItems = useCallback(() => {
        let listItems = []
        if(!Array.isArray(data)) {
            const newData = Object(data)
            if(displayMember && valueMember ) {
                for(let key in newData) {
                    listItems.push({
                        [displayMember]: newData[key],
                        [valueMember]: key 
                    })
                }
            }
            else
                throw new Error('displayMember and valueMember empty')
        }
        else {
            listItems = [...data]
        }
        return listItems.map(item => (
            <ListItem
                active={selectedItem === item}
                onClick={(ev) => clickItem(ev, item)}
                key={item}
            >
                {displayMember ? item[displayMember] : item}
            </ListItem>
        ))
    }, [data])

    return (
        <Container ref={containerRef}>
            <Fieldset>
                <Select ref={selectRef} tabIndex={0} onFocus={handleFocus}>
                    { selectedItem }
                </Select>
                {title && <Label>{title}</Label> }
            </Fieldset>
            <CSSTransition nodeRef={listRef} in={show} timeout={300} classNames="list" unmountOnExit>
                <List hoverable ref={listRef}>
                    { renderItems() }
                </List>
            </CSSTransition>
        </Container>
    )
}

export {
    ComboBox
}