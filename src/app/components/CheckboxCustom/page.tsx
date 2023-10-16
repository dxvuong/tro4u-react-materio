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
    style={checked? {color: "#9155fd"} : {color: "rgba(58, 53, 65, 0.68)"}}  />
  )
}

export default CheckboxCustom