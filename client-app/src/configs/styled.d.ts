import 'styled-components'
import { Theme } from '../components'

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}