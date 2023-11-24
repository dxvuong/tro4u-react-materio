import Button from '@mui/material/Button'
import React from 'react'
interface ButtonCustomProps {
    variants: 'text' | 'outlined' | 'contained'
    disabled?: boolean
    color?: 'inherit' | 'primary' | 'secondary' | 'info' | 'warning' | 'error' | 'success'
    size?: 'small' | 'medium' | 'large'
    text?: any
    startIcon?: any
    endIcon?: any
    children: any
    sx?: any
}
const ButtonCustom = ({ variants,sx, disabled, color, size, children, startIcon, endIcon }: ButtonCustomProps) => {
    return (
        <Button
            variant={variants}
            disabled={disabled}
            endIcon={endIcon}
            startIcon={startIcon}
            color={color}
            size={size}
            sx= {sx}
        >
            {children}
        </Button>
    )
}

export default ButtonCustom