import { combineReducers } from '@reduxjs/toolkit'
import snackbarReducer from './slices/snackbarSlice'

const rootReducer = combineReducers({
    snackbar: snackbarReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

