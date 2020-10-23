import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SnackbarRedux, SnackbarShowMessagePayload } from '../../types'
import { initial } from 'lodash';

const initialState: SnackbarRedux = {
    backgroundColor: 'success',
    message: '',
    show: false,
    timeout: 1500
}

const { actions, reducer } = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showMessage(state, action: PayloadAction<SnackbarShowMessagePayload>) {
            if(state.show)
                return state;
            const newState = { ...initialState ,...action.payload }

            return { ...newState, show: !state.show } as SnackbarRedux
        },
        toggle(state, action:PayloadAction<boolean>) {
            return { ...state, show: action.payload }
        }
    }
})


export const { showMessage, toggle } = actions

export default reducer
