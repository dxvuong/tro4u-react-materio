import Alert from '@mui/material/Alert'
import React, { ReactNode } from 'react'
interface AlertCustomProps {
    severity?: 'error' | 'warning' | 'info' | 'success'
    children?: ReactNode | string
    action?: any
    onClose?: () => void
    variants?: 'outlined' | 'filled'
    color?: 'info' | 'warning' | 'error' | 'success'
}
const AlertCustom = ({ severity, children, action, onClose, variants, color }: AlertCustomProps) => {
    return (
        <Alert severity={severity} action={action} onClose={onClose} variant={variants} color={color}>{children}</Alert>
    )
}

export default AlertCustom