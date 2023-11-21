"use client"
import Box from '@mui/material/Box'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import React, { ChangeEvent, useState } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from '@mui/material'

interface BootstrapDialogCustomProps {
    open: boolean,
    close: () => void
}

const DialogAddRoom = ({ open, close }: BootstrapDialogCustomProps) => {
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
    const [product, setProduct] = useState("")

    const handleChangeNameHouse = (event: ChangeEvent<HTMLInputElement>) => {
        setNameHouse(event.target.value)
    }

    const handleChangeFloor = (event: ChangeEvent<HTMLInputElement>) => {
        setFloor(event.target.value)
    }
    const handleChangeProduct = (event: ChangeEvent<HTMLInputElement>) => {
        setProduct(event.target.value)
    }


    const textfield = {
        // maxHeight: "30px",
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#804bdf',
        },
        '.MuiSelect-select': {
            paddingLeft: "30px",
            color: "#804bdf"
        },

        '.MuiInputBase-root': {
            height: "40px"
        },
        '.MuiSvgIcon-root ': {
            fill: "#804bdf",
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

        },
        '.MuiInputLabel-outlined.Mui-focused': {
            color: "#9155fd"
        },
        '&.Mui-focused': {
            color: '#804bdf', // Màu khi textfield được focus
            borderColor: '#804bdf !important', // Màu viền khi textfield được focus
        },
        '.MuiInputBase-input': {
            paddingLeft: "30px",
            color: "#804bdf"
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#804bdf !important', // Màu viền khi textfield được hover
        },
        background: "#fff",
        marginBottom: "15px",

    };


    const styleBox = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 360,
        bgcolor: 'background.paper',
        borderRadius: "6px",
        boxShadow: 24,
        ":focus-visible": {
            outline: "none"
        },
        "@media (max-width: 783px)": {
            width: "350px"
        }

    };
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
        <Modal
            onClose={close}
            aria-labelledby="customized-dialog-title"
            open={open}
            sx={{ position: "fixed", }}
        >
            <Box sx={styleBox}>
                <DialogTitle sx={{ m: 0, padding: " 10px 11px", color: "#fff", background: "#804bdf", borderRadius: "6px 6px 0 0" }} id="customized-dialog-title">
                    Tạo phòng
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
                    <div className='wrapp' style={{ display: "flex", gap: "5px", marginBottom: "5px" }}>
                        <TextField
                            id="name"
                            value={nameHouse}
                            label="Tên phòng"
                            variant="outlined"
                            onChange={handleChangeNameHouse}
                            fullWidth
                            sx={textfield}
                        />
                        <TextField
                            id="floor"
                            select
                            value={floor}
                            label="Lầu"
                            variant="outlined"
                            onChange={handleChangeFloor}
                            fullWidth
                            sx={textfield}
                        >
                            <MenuItem value={"f1"}>Lầu 1 </MenuItem>
                            <MenuItem value={"f2"}>Lầu 2 </MenuItem>
                            <MenuItem value={"f3"}>Lầu 3 </MenuItem>
                        </TextField>
                    </div>
                    <TextField
                        select
                        id="demo-simple-select"
                        value={product}
                        fullWidth
                        label="Sản phẩm"
                        onChange={handleChangeProduct}
                        sx={textfield}
                    >
                        <MenuItem value={"1"}>Giường </MenuItem>
                        <MenuItem value={"2"}>Phòng </MenuItem>
                        <MenuItem value={"3"}>Căn hộ</MenuItem>
                        <MenuItem value={"4"}>Mặt bằng </MenuItem>
                        <MenuItem value={"5"}>Văn phòng </MenuItem>
                        <MenuItem value={"6"}>Sleep box</MenuItem>
                    </TextField>
                    


                </DialogContent>
                
                <DialogActions>
                    <Button style={{
                        background: "rgb(253 85 85)",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                    }} variant="contained" autoFocus >
                        Copy
                        <ContentCopyIcon className='icon' sx={{ fontSize: "16px" }} />
                    </Button>
                    <Button style={{
                        background: "#9155fd",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                    }} variant="contained" autoFocus onClick={close}>
                        Thêm
                        <AddIcon sx={{ fontSize: "16px" }} />
                    </Button>
                </DialogActions>
            </Box>

        </Modal>
    )
}

export default DialogAddRoom