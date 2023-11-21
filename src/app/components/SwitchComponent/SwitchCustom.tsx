import Switch from '@mui/material/Switch'
import React from 'react'
interface SwitchCustomProps {
    defaultChecked?: boolean
    disabled?: boolean
    size?: any
    color?: any
    focusVisibleClassName?:any
}
const SwitchCustom = ({defaultChecked, disabled, size, color,focusVisibleClassName}: SwitchCustomProps) => {
  return (
    <Switch defaultChecked={defaultChecked} disabled={disabled} size={size} color={color} focusVisibleClassName={focusVisibleClassName} />
  )
}

export default SwitchCustom