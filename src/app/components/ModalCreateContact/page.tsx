"use client"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import "./page.scss"
import Divider from '@mui/material/Divider'

import IconButton from '@mui/material/IconButton';

import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from '@mui/material/DialogTitle'
import { DialogContent } from '@mui/material'
interface ModalCreateContactProps {
    open: boolean,
    close: () => void
}

const ModalCreateContact = ({ open, close }: ModalCreateContactProps) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "360px",
        bgcolor: '#fff',
        boxShadow: 24,
        borderRadius: "6px",
        border: "none !important",
        ":focus-visible": {
            outline: "none"
          },
        "@media (max-width: 783px)": {
            width: "350px",
        },
    };
    const styleModal = {
        maxWidth: "360px",
        minWidth: "360px",
        padding: "0",
        


        // "@media (max-width: 783px)": {
        //     height: "590px",
        //     padding: "10px !important"

        // },
        // "@media (min-width: 784px) and (max-width: 1537px)": {
        //     height: "590px",
        //     padding: "10px !important"

    }
    return (
        
            <Modal open={open} onClose={close} sx={{ border: "none" }}>
                <Box sx={style}>
                    <DialogTitle sx={{ m: 0, padding: " 10px 11px", color: "#fff", background: "#804bdf", borderRadius: "6px 6px 0 0" }} id="customized-dialog-title">
                        Tạo hợp đồng
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
                    <DialogContent style={styleModal}>
                        <div className='item'>
                            <Button variant='contained' className='btn-1'>tạo hợp đồng cọc</Button>
                            <Typography id="modal-modal-description" sx={{ mt: 2, color: "black" }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </div>

                        <Divider />
                        <div className='item'>
                            <Button variant='contained' className='btn-2'>tạo hợp đồng thuê</Button>
                            <Typography id="modal-modal-description" sx={{ mt: 2, color: "black" }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </div>
                    </DialogContent>

                </Box>
            </Modal>
        
    )
}

export default ModalCreateContact