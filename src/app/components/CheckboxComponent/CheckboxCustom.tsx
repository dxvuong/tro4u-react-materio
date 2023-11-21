import React from 'react'
import Checkbox from '@mui/material/Checkbox';
interface CheckboxCustomProps {
  disabled?: boolean 
  checked? : boolean
  color?: any
  icon?: any
  checkedIcon?: any
  defaultChecked?: boolean
}
const CheckboxCustom = ({disabled, checked, color, checkedIcon, icon, defaultChecked}: CheckboxCustomProps) => {
  return (
    <Checkbox defaultChecked={defaultChecked} disabled={disabled} checked={checked} color={color} icon={icon} checkedIcon={checkedIcon}/>
  )
}

export default CheckboxCustom