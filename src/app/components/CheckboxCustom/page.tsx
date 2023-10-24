// "use client"
// import Checkbox from '@mui/material/Checkbox'
// import React, { useState } from 'react'

// interface CheckboxCustomProps {
//   onCheckChange: (newCheckedValue: boolean) => void;
// }
// const CheckboxCustom = ({onCheckChange} : CheckboxCustomProps) => {
//   const [checked, setChecked] = useState<boolean>(false)
//   const handleCheck = () => {
//     const newCheckedValue = !checked;
//     setChecked(newCheckedValue);

//     if(onCheckChange) {
//       onCheckChange(newCheckedValue)
//     }
//   }
//   console.log("ischecked: ", checked);
  
//   return (
//     <Checkbox  value={checked} onClick={handleCheck}
//     style={checked? {color: "#9155fd"} : {color: "rgba(58, 53, 65, 0.68)"}}  />
//   )
// }

// export default CheckboxCustom

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page