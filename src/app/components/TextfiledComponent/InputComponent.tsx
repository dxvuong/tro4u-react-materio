"use client"
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'

interface InputComponentProps {
    label: string
    data?: number | string | []
    onchange?: any
    variant: "outlined" | "standard" | "filled"
    size?: "small" | "medium"
    multiline?: boolean
    
}
const InputComponent = ({ data, label, onchange, variant, size, multiline }: InputComponentProps) => {

    const textfield = {
        // maxHeight: "30px",
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#804bdf',
        },
        '.css-1jg2gny:after': {
            borderBottom: "2px solid #804bdf"
        },
        '.css-12rx5qu:after': {
            borderBottom: "2px solid #804bdf"
        },

        '.MuiSelect-select': {
            paddingLeft: "30px",
            color: "#804bdf"
        },

        '.MuiInputBase-root': {
            marginTop: 0,
            height: "40px"
        },
        '.MuiSvgIcon-root ': {
            fill: "black !important",
        },
        '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#9155fd"
        },
        ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
            color: "#ccc",
        },
        ".css-2y464i-MuiInputBase-root-MuiFilledInput-root:after": {
            borderBottom: "2px solid #9155fd "
        },
        ".css-l4u8b9-MuiInputBase-root-MuiInput-root:after": {
            borderBottom: "2px solid #9155fd "
        },

        "& .MuiFormLabel-root": {
            color: "#cfcfcf",
            top: "-2px",
            paddingBottom: "2px"
        },

        '.MuiInputLabel-outlined.Mui-focused': {
            color: "#9155fd"
        },
        '.Mui-focused': {
            color: '#804bdf !important', // Màu khi textfield được focus

        },
        '&.MuiInputBase-input': {
            paddingLeft: "30px"
        },

        background: "#fff",
        marginBottom: "15px"
    };
    return (
        <>

            <TextField
                id="input basic"
                label={label}
                size={size}
                multiline={multiline}
                value={data}
                variant={variant}
                onChange={onchange}
                fullWidth
                sx={textfield}
                inputProps={{
                    style: {
                        paddingLeft: "30px",
                        color: "#804bdf",
                        
                    }
                }}

            />
        </>




    )
}

export default InputComponent