"use client"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import CloseIcon from "@mui/icons-material/Close";

import React from 'react'
interface ModalPolicyProps {
    open: boolean,
    close: () => void
}
const ModalPolicy = ({ open, close }: ModalPolicyProps) => {
    const styleBox = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50%",
        bgcolor: 'background.paper',
        height: "60%",
        boxShadow: 24,

    };
    const styleModal = {
        maxWidth: "360px",
        minWidth: "360px",
        padding: "20px",
        display: "flex",
        gap: "5px",
        "@media (max-width: 783px)": {
            display: "flex",
            gap: "5px",
            padding: "10px !important"
        },
    }
    return (
        <Modal
            onClose={close}
            aria-labelledby="customized-dialog-title"
            open={open}
            sx={{ position: "fixed", }}
        >
            <Box sx={styleBox}>
                <DialogTitle sx={{ m: 0, p: 3 }} id="customized-dialog-title">
                    Chính sách & điều khoản
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

                <DialogContent  sx={styleModal} >
                    
                    
                </DialogContent>
               
            </Box>

        </Modal>
    )
}

export default ModalPolicy