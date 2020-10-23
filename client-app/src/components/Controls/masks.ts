import { Masks } from '../'

const masks: Masks = {
    currency: {
        mask(value: string) {
            const newValue = value
                .replace(/\D/g, "")
                .replace(/(\d)(\d{2})$/, '$1,$2')
                .replace(/(?=(\d{3})+(\D))\B/g, '.')

            return newValue
        },
        unmask(value: string) {
            const newValue = value
                .replace('.', '')
                .replace(',', '.')

            return newValue
        }
    },
    tel: {
        mask(value: string) {
            const newValue = value
                .replace(/\D/g, "")
                .replace(/(^\d{2})(\d{4})(\d{4})/g, '($1)$2-$3')
            return newValue
        },
        unmask(value: string) {
            const newValue = value  
                .replace(/[()-]/, '')

            return newValue
        },
        maxLength: 10
    },
    cel: {
        mask(value: string) {
            const newValue = value
                .replace(/\D/g, "")
                .replace(/(^\d{2})(\d{5})(\d{4})$/g, '($1)$2-$3')
            return newValue
        },
        unmask(value: string) {
            const newValue = value  
                .replace(/[()-]/, '')
            return newValue
        },
        maxLength: 12
    },
    cpf: {
        mask(value: string) {
            const newValue = value  
                .replace(/\D/g, "")
                .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
            
            return newValue        
        },
        unmask(value: string) {
            const newValue = value
                .replace(/[.-]/,'')

            return newValue
        },
        maxLength: 11
    },
    zipcode: {
        mask(value: string) {
            const newValue = value
                .replace(/\D/g, "")
                .replace(/^(\d{5})(\d{3})$/g, '$1-$2')
            return newValue
        },
        unmask(value: string) {
            const newValue = value
                .replace('-', '')
            return newValue
        },
        maxLength: 8
    }
}


export {
    masks
}