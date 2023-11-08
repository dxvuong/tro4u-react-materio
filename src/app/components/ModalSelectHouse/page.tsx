"use client"
import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import CloseIcon from "@mui/icons-material/Close";
import SelectHouseComponent from '../SelectHouse/page'
import Select, { StylesConfig } from 'react-select';

interface ModalSelectHouseProps {
    open: boolean,
    close: () => void
    options: { value: string; label: string }[];
}
const ModalSelectHouse = ({ open, close, options }: ModalSelectHouseProps) => {
    const styleBox = {
        position: 'absolute' as 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "20%",
        bgcolor: 'background.paper',
        border: "none !important",
        boxShadow: 24,
        "@media (max-width: 783px)": {
            width: "80%",
        },

    };
    const content = {
        overflowY: 'unset'
    }
    const colourStyles: StylesConfig = {
        
        menuList: () => ({
            color: "black"
        }),
        menu: (baseStyles, state) => ({
            ...baseStyles,
            borderColor:  "#804bdf"
        })
        

    }


    return (
        <Modal
            onClose={close}
            aria-labelledby="customized-dialog-title"
            open={open}
            sx={{ position: "fixed", border: "none" }}
        >
            <Box sx={styleBox}>
                <DialogTitle sx={{ m: 0, p: 2, color: "#fff", background:"#804bdf" }} id="customized-dialog-title">
                    Chọn nhà
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={close}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent sx={content}  >

                    <Select options={options} styles={colourStyles} />
                </DialogContent>

            </Box>

        </Modal>
    )
}

export default ModalSelectHouse