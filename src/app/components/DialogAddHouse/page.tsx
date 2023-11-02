"use client"
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import React, { ChangeEvent, useState } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import styled from "@mui/material/styles/styled";
import Dialog from "@mui/material/Dialog";
import TextfiledCustom from '../TextfiledCustom/page';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
interface BootstrapDialogCustomProps {
    open: boolean,
    close: () => void
}

const DialogAddHouse = ({ open, close }: BootstrapDialogCustomProps) => {
    
    const styleModal = {
        maxWidth: "360px",
        minWidth: "360px",
        padding: "20px",


        "@media (max-width: 783px)": {
            display: "flex",
            gap: "5px",
            padding: "10px !important"
        },
    }
    const [nameHouse, setNameHouse] = useState("")
    const [floor, setFloor] = useState("")

    const handleChangeNameHouse = (event: ChangeEvent<HTMLInputElement>) => {
        setNameHouse(event.target.value)
    }

    const handleChangeFloor = (event: ChangeEvent<HTMLInputElement>) => {
        setFloor(event.target.value)
    }


    const textfield = {
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
        '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#9155fd"
        },
        ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
            color: "#ccc",
        },
        '.MuiInputLabel-outlined.Mui-focused': {
            color: "#9155fd"
        },
        marginBottom: "10px"
    };


    const styleBox = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 360,
        bgcolor: 'background.paper',

        boxShadow: 24,

    };
    return (
        <Modal
            onClose={close}
            aria-labelledby="customized-dialog-title"
            open={open}

            sx={{ position: "fixed", }}
        >
            <Box sx={styleBox}>
                <DialogTitle sx={{ m: 0, p: 3 }} id="customized-dialog-title">
                    Quản lý nhà
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

                <DialogContent dividers sx={styleModal} >
                    <div className='input'>
                        <TextField
                            id="name"
                            value={nameHouse}
                            label="Tên nhà"
                            variant="outlined"
                            onChange={handleChangeNameHouse}
                            fullWidth
                            sx={textfield}
                        />
                        <TextField
                            id="floor"
                            value={floor}
                            label="Số lầu"
                            variant="outlined"
                            onChange={handleChangeFloor}
                            fullWidth
                            sx={textfield}
                        />
                        <TextField
                            id="nhom"
                            // value={floor}
                            label="Nhóm"
                            variant="outlined"
                            // onChange={handleChangeFloor} 
                            fullWidth
                            sx={textfield}
                        />
                        <TextField
                            id="khu"
                            // value={floor}
                            label="Khu"
                            variant="outlined"
                            // onChange={handleChangeFloor} 
                            fullWidth
                            sx={textfield}
                        />
                        <TextField
                            id="date"
                            // value={floor}
                            label=""
                            type='date'
                            placeholder=''
                            variant="outlined"
                            // onChange={handleChangeFloor} 
                            fullWidth
                            sx={textfield}
                        />
                    </div>

                    <div className='input'>
                        <TextField
                            id="tt"
                            // value={floor}
                            label="Tình trạng"
                            variant="outlined"
                            // onChange={handleChangeFloor} 
                            fullWidth
                            sx={textfield}
                        />
                        <TextField
                            id="dc"
                            // value={floor}
                            label="Địa chỉ"
                            variant="outlined"
                            // onChange={handleChangeFloor} 
                            fullWidth
                            sx={textfield}
                        />
                        <TextField
                            id="sdtql1"
                            // value={floor}
                            label="SDT Quản lý 1"
                            variant="outlined"
                            // onChange={handleChangeFloor} 
                            fullWidth
                            sx={textfield}
                        />
                        <TextField
                            id="sdtql2"
                            // value={floor}
                            label="SDT Quản lý 2"
                            variant="outlined"
                            // onChange={handleChangeFloor} 
                            fullWidth
                            sx={textfield}
                        />
                        <TextField
                            id="link"
                            // value={floor}
                            label="Link giới thiệu"
                            variant="outlined"
                            // onChange={handleChangeFloor} 
                            fullWidth
                            sx={textfield}
                        />
                    </div>


                </DialogContent>

                <DialogActions>
                    <Button style={{
                        background: "#9155fd"
                    }} variant="contained" autoFocus onClick={close}>
                        Thêm
                    </Button>
                </DialogActions>
            </Box>

        </Modal>
    )
}

export default DialogAddHouse