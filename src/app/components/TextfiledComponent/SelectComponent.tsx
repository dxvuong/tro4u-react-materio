import TextField from '@mui/material/TextField';
import React from 'react'
import { ReactNode } from "react";

interface SelectComponentProps {
    label: string
    value?: number | string | [] | undefined
    onchange?: any
    variant: "outlined" | "standard" | "filled"
    children: ReactNode;
}
const SelectComponent = ({ label, value, onchange, children, variant }: SelectComponentProps) => {

    const textfield = {
        // maxHeight: "30px",
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#804bdf',
        },
        '.css-12rx5qu:after': {
            borderBottom: "2px solid #804bdf"
        },
        '.css-1jg2gny:after': {
            borderBottom: "2px solid #804bdf"
        },
        '.css-1rgmeur.Mui-focused': {
            color: "#804bdf"
        },
        '.css-348fk2.Mui-focused': {
            color: "#804bdf"
        },

        '.MuiSelect-select': {
            paddingLeft: "30px",
            color: "#804bdf",
            textAlign: "left"
        },
        '.css-2y464i-MuiInputBase-root-MuiFilledInput-root:after': {
            borderColor: '#804bdf',
        },
        '.css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
            color: "#804bdf"
        },
        '.MuiInputBase-root': {
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
        "& .MuiFormLabel-root": {
            color: "#cfcfcf",
            top: "-2px",
            paddingBottom: "2px"
        },
        '.MuiInputLabel-outlined.Mui-focused': {
            color: "#9155fd"
        },
        '&.Mui-focused': {
            color: '#804bdf', // Màu khi textfield được focus
            borderColor: '#804bdf !important', // Màu viền khi textfield được focus
        },
        '&.MuiInputBase-input': {
            paddingLeft: "30px"
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#804bdf !important', // Màu viền khi textfield được hover
        },
        background: "#fff",
        marginBottom: "15px"
    };
    return (

        <TextField
            id="select"
            select
            label={label}
            value={value || ''}
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

        >
            {children}
        </TextField>


    )
}

export default SelectComponent