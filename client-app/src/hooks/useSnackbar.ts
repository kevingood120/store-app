import React from 'react'
import { useDispatch } from 'react-redux'
import { Color } from '../components'
import { AppDispatch } from '../store'
import { showMessage } from '../store/slices/snackbarSlice'

function useSnackbar() {

    const dispatch = useDispatch<AppDispatch>()
    return (message: string, timeout: number = 3000, backgroundColor: Color = 'success') => {
        dispatch(showMessage({message, timeout, backgroundColor}))
    }
}

export {
    useSnackbar
}

