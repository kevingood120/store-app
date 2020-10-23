import { ReactElement, CSSProperties, FormEvent } from 'react'
import { SubmitHandler, UnpackNestedValue, UseFormMethods, UseFormOptions } from 'react-hook-form'

export interface BackdropProps {
    open: boolean
}

export interface DataTableProps extends PaginationProps {
    data: any[]
    columns: DataTableColumn[]
    primaryKey: string 
}

export interface PageSettings {
    page: number
    totalPages: number
    limit: number
}

export interface PaginationProps {
    pageSettings: PageSettings
    onPageChanged: (settings: PageSettings) => void
}

export interface DataTableColumn {
    text: string
    property: string
    textAlign?: Align
    customRender?: (row: any, column: DataTableColumn) => ReactElement | string | null
}

export interface MessageProps {
    message?: string
}

export interface TableColumnProps {
    textAlign?: Align
}

export interface TableCellProps {
    textAlign?: Align
}

export interface MaskProperies {
    maxLength?: number
    mask: (value: string) => string
    unmask?: (value: string) => string
}

export interface Masks {
    [key: string]: MaskProperies
    zipcode: MaskProperies
    cpf: MaskProperies
    tel: MaskProperies
    cel: MaskProperies
    currency: MaskProperies

}

export type MaskType = keyof Masks

export interface FieldProps {
    mask?: MaskType
    name: string
    rows?: number
    type: 'textarea' | 'tel' | 'email' | 'text' | 'hidden'
    containerStyle?: CSSProperties
    rightButtonOnClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
    rightButtonIcon?: JSX.Element
    errorMessage?: string
    title?: string
    outline?: boolean
    prefix?: string
    width?: string
    maxLength?: number
    tabIndex?: number
    readOnly?: boolean
    disabled?: boolean
    onInput?: (ev: any) => void
    onChange?: (ev: any) => void
    onBlur?: (ev: any) => void
    onFocus?: (ev: any) => void
    value?: string
    valueAsNumber?: number
    valueAsDate?: Date
}

export interface SidebarProps {
    show: boolean
    close?: () => void
}

export interface ButtonProps {
    backgroundColor?: Color
    icon?: boolean
    large?: boolean
    small?: boolean
    normal?: boolean
    
}

export interface ColProps {
    size?: SizeColumn
    alignItems?: 'start' | 'end' | 'stretch' | 'center'
    justifyContent?: 'flex-start'|'flex-end'|'center'|'space-between'|'space-around'|'initial'|'inherit';
}

export interface FormProps {
    onSubmit(data: UnpackNestedValue<any>) : void
    formOptions?: Partial<UseFormOptions>
}

export interface ToolbarProps {
    title: string
}

export interface ListItemProps {
    dense?: boolean
    active?: boolean
}

export interface ProgressProps {
    timeout: number
}

export interface SnackbarProps {
    message: string
    show: boolean
    backgroundColor?: Color
    timeout: number
    close: () => void
}

export interface DialogProps {
    open: boolean
}

export interface SnackbarContainerProps {
    backgroundColor?: Color
    timeout: number
}

export interface ListProps {
    hoverable?: boolean
}

export type Color = "error" | "success" | "info"
export type Device = "cell" | "computer" | "tablet"
export type zIndex = "dialog" | "backdrop" | "menu" | "snackbar" | "dropdown"
export type Align = 'left' | 'right' | 'center'
export type SizeColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface Theme{
    palette: { [k in Color]: string  }
    devices: { [k in Device]: string }
    defaultColor: string,
    bgColor: string,
    listBgColor: string
    textColor: string,
    zIndex: { [k in zIndex]: string }
}

export interface ComboBoxProps {
    data: any[] | Object
    displayMember?: string
    valueMember?: string
    defaultValue?: any
    title?: string
    selectedItem?: any
    onChange?: (event: React.ChangeEvent<HTMLDivElement>, value: any) => void
}

export interface CardContainerProps {
    width?: string
}

export interface FormHandles extends UseFormMethods {

}
