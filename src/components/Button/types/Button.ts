export interface  ButtonProps {
    variant: 'primary' | 'secondary-light' | 'outline'
    condition: 'approved' | 'revised' | 'outstanding'
    IconOnly : boolean
    outline: boolean
}