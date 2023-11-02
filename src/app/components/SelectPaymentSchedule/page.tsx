import React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
interface SelectPaymentScheduleProps {
    data: string
    onchange: (event: SelectChangeEvent<string>) => void;
}
const SelectPaymentSchedule = ({data, onchange} : SelectPaymentScheduleProps) => {
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
            <InputLabel sx={styledSelect} id="thanhToan">Mốc thanh toán</InputLabel>
            <Select

                labelId="M"
                id="mốc thanh toán"
                value={data}
                onChange={onchange}
                label="mốc thanh toán"
                sx={styledSelect}
            >
                <MenuItem value={"1"}>1 - 5</MenuItem>
                <MenuItem value={"2"}>6 - 10</MenuItem>
                <MenuItem value={"3"}>11 - 15</MenuItem>
                <MenuItem value={"4"}>16 - 20</MenuItem>
                <MenuItem value={"5"}>21 - 25</MenuItem>
                <MenuItem value={"6"}>26 - cuối tháng</MenuItem>
            </Select>

        </FormControl>
    )
}

export default SelectPaymentSchedule