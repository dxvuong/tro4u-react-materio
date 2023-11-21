import Radio from '@mui/material/Radio'
import React from 'react'
interface RadioCustomProps {
    size?: any
    color?: any
    disable?: boolean
    checked?: boolean
    sx?: any
}
const RadioCustom = ({ size, color, disable, checked,sx }: RadioCustomProps) => {
    return (
        <Radio sx={sx} size={size} color={color} disabled={disable} checked={checked} />
    )
}

export default RadioCustom