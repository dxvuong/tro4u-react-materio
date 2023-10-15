"use client"
import Checkbox from '@mui/material/Checkbox'
import React, { useState } from 'react'

const CheckboxCustom = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const handleCheck = () => {
    setChecked(!checked);
  }
  return (
    <Checkbox  value={checked} onClick={handleCheck}
    style={checked? {color: "#9155fd", paddingLeft: 0} : {color: "#333", paddingLeft: 0}}  />
  )
}

export default CheckboxCustom