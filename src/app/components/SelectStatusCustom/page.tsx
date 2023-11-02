import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'
interface SelectCustomProps {
    data: string
    onchange: (event: SelectChangeEvent<string>) => void;
}
const SelectStatusCustom = ({ data, onchange }: SelectCustomProps) => {
    const styledSelect = {
        marginBottom: "10px",
        '&.Mui-focused': {
          color: '#804bdf', // Thay đổi màu khi tập trung
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#804bdf',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#804bdf',
        },
        '.MuiSvgIcon-root ': {
          fill: "white !important",
        },
        
        
      }
    return (
        <FormControl fullWidth >
            <InputLabel sx={styledSelect} id="demo-simple-select-label">Trạng thái</InputLabel>
            <Select

                labelId="S"
                id="Status"
                value={data}
                onChange={onchange}
                label="trạng thái"
                sx={styledSelect}
            >
                <MenuItem value={"dt"}>đang trống</MenuItem>
                <MenuItem value={"ct"}>cho thuê</MenuItem>
                <MenuItem value={"dc"}>đang cọc</MenuItem>
                <MenuItem value={"bt"}>báo trả</MenuItem>
                <MenuItem value={"bt"}>trả/cọc</MenuItem>
            </Select>

        </FormControl>
    )
}

export default SelectStatusCustom