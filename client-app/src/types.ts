import { Color } from "./components";

export interface SnackbarRedux {
    message: string
    timeout: number
    backgroundColor: Color
    show: boolean
}


export interface SnackbarShowMessagePayload {
    message: string
    timeout?: number
    backgroundColor?: Color
}