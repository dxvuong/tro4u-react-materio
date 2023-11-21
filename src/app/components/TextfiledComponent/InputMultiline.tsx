import TextField from '@mui/material/TextField'
import React from 'react'

const InputMultiline = () => {
    const textfield = {
        // maxHeight: "30px",
        
        '.MuiSelect-select': {
            paddingLeft: "30px",
            color: "#804bdf"
        },

        '.MuiInputBase-root': {
            height: "auto"
        },
        '.MuiSvgIcon-root ': {
            fill: "black !important",
        },
        
        ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
            color: "#ccc",
        },
        "& .MuiFormLabel-root": {
            color: "#cfcfcf",
            top: "-2px",
            paddingBottom: "2px"
        },
        '.MuiInputLabel-outlined.Mui-focused': {
            color: "#9155fd"
        },
        
        '&.MuiInputBase-input': {
            paddingLeft: "30px"
        },
        
        background: "#fff",
        marginBottom: "15px"
    };
    return (
        <TextField
            sx={textfield}
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            fullWidth
            maxRows={4}
        />
    )
}

export default InputMultiline