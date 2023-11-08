"use client"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import "./page.scss"
import Divider from '@mui/material/Divider'
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
        width: 400,
        bgcolor: '#fff',
        boxShadow: 24,
        borderRadius: "6px",
        border: "none"
    };
    return (
        <div className='modalCreateContace-container'>
            <Modal open={open} onClose={close} sx={{border: "none"}}>
                <Box sx={style}>
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
                </Box>

            </Modal>
        </div>
    )
}

export default ModalCreateContact