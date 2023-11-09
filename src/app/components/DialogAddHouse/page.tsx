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
import Divider from '@mui/material/Divider';
import "./page.scss"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { block } from 'sharp';
interface BootstrapDialogCustomProps {
    open: boolean,
    close: () => void
}

const DialogAddHouse = ({ open, close }: BootstrapDialogCustomProps) => {

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

        // },
    }
    // const [nameHouse, setNameHouse] = useState("")
    // const [floor, setFloor] = useState("")

    // const handleChangeNameHouse = (event: ChangeEvent<HTMLInputElement>) => {
    //     setNameHouse(event.target.value)
    // }

    // const handleChangeFloor = (event: ChangeEvent<HTMLInputElement>) => {
    //     setFloor(event.target.value)
    // }
    const [nameHouse, setNameHouse] = useState("")
    const [floor, setFloor] = useState("")
    const [group, setGroup] = useState("")
    const [status, setStatus] = useState("")
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")
    const [ward, setWard] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [link, setLink] = useState("")
    const [linkMap, setLinkMap] = useState("")
    const handleChangeLinkMap = (event: ChangeEvent<HTMLInputElement>) => {
        setLinkMap(event.target.value)
    }
    const handleChangeLink = (event: ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value)
    }
    const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value)
    }
    const handleChangeAddress = (event: SelectChangeEvent) => {
        setAddress(event.target.value)
    }
    const handleChangeWard = (event: SelectChangeEvent) => {
        setWard(event.target.value)
    }
    const handleChangeGroupt = (event: SelectChangeEvent) => {
        setGroup(event.target.value)
    }
    const handleChangeDistrict = (event: SelectChangeEvent) => {
        setDistrict(event.target.value)
    }
    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value)
    }
    const handleChangeCity = (event: SelectChangeEvent) => {
        setCity(event.target.value)
    }

    const handleChangeNameHouse = (event: ChangeEvent<HTMLInputElement>) => {
        setNameHouse(event.target.value)
    }

    const handleChangeFloor = (event: ChangeEvent<HTMLInputElement>) => {
        setFloor(event.target.value)
    }

    const textfield = {

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
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
        '&.Mui-focused': {
            color: '#804bdf', // Màu khi textfield được focus
            borderColor: '#804bdf !important', // Màu viền khi textfield được focus
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#804bdf !important', // Màu viền khi textfield được hover
        },
        background: "#fff",
        marginBottom: "10px"
    };

    const styleDate = {
        marginBottom: "10px",
        '&.Mui-focused': {
            color: '#804bdf', // Thay đổi màu khi tập trung
        },
        backgroundColor: "#fff",
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#804bdf',
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#804bdf',
        },
        '.MuiSvgIcon-root ': {
            fill: "#804bdf !important",
            fontSize: "30px"
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
        ".MuiPickersPopper-root.css-1anqmj6-MuiPopper-root-MuiPickersPopper-root.MuiPopper-root": {
            position: "absolute !important",
            left: "19px !important"
        },

        width: "100%"
    }
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
        backgroundColor: "#fff",

        '&:.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#804bdf',
        },
        '.MuiSvgIcon-root ': {
            fill: "black !important",
        },
    }


    const styleBox = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 360,
        bgcolor: 'background.paper',
        borderRadius: "6px",
        boxShadow: 24,
        "@media (max-width: 783px)": {
            width: 330,
            top: '70%',
        },
        "@media (min-width: 783px) and (max-width: 1537px)": {
            top: '65%',
        },

    };

    const styleInput = {
        borderRadius: "6px",
        marginBottom: "10px",


    }
    const styleInputBottom = {
        padding: "10px",
        background: "rgb(222 255 223)",
        borderRadius: "6px",
        marginTop: "10px",



    }
    return (
        // <LocalizationProvider dateAdapter={AdapterDayjs}>
        //     <Modal
        //         onClose={close}
        //         aria-labelledby="customized-dialog-title"
        //         open={open}
        //         className='modal-container'
        //         sx={{ position: "fixed", }}
        //     >
        //         <Box sx={styleBox}>
        //             <DialogTitle sx={{ m: 0, color: "#fff", background: "#804bdf" }} id="customized-dialog-title">
        //                 Thêm nhà
        //             </DialogTitle>
        //             <IconButton
        //                 aria-label="close"
        //                 onClick={close}
        //                 sx={{
        //                     position: "absolute",
        //                     right: 8,
        //                     top: 8,
        //                     color: (theme) => theme.palette.grey[500],
        //                 }}
        //             >
        //                 <CloseIcon />
        //             </IconButton>

        //             <DialogContent dividers sx={styleModal} >
        //                 <div className='input' style={{ padding: "10px", borderRadius: "6px", marginBottom: "10px" }}>
        //                     <TextField
        //                         id="name"
        //                         value={nameHouse}
        //                         label="Tên nhà"
        //                         variant="outlined"
        //                         onChange={handleChangeNameHouse}
        //                         fullWidth
        //                         sx={textfield}
        //                     />
        //                     <TextField
        //                         id="floor"
        //                         value={floor}
        //                         label="Số lầu"
        //                         variant="outlined"
        //                         onChange={handleChangeFloor}
        //                         fullWidth
        //                         sx={textfield}
        //                     />
        //                     <TextField
        //                         id="nhom"
        //                         // value={floor}
        //                         label="Nhóm"
        //                         variant="outlined"
        //                         // onChange={handleChangeFloor} 
        //                         fullWidth
        //                         sx={textfield}
        //                     />
        //                     <TextField
        //                         id="khu"
        //                         // value={floor}
        //                         label="Khu"
        //                         variant="outlined"
        //                         // onChange={handleChangeFloor} 
        //                         fullWidth
        //                         sx={textfield}
        //                     />

        //                     <DatePicker label="Ngày tính số liệu" sx={styleDate} />

        //                     {/* <TextField
        //                         id="date"
        //                         // value={floor}
        //                         label=""
        //                         type='date'
        //                         placeholder=''
        //                         variant="outlined"
        //                         // onChange={handleChangeFloor} 
        //                         fullWidth
        //                         sx={textfield}
        //                     /> */}
        //                     <TextField
        //                         id="tt"
        //                         // value={floor}
        //                         label="Tình trạng"
        //                         variant="outlined"
        //                         // onChange={handleChangeFloor} 
        //                         fullWidth
        //                         sx={textfield}
        //                     />
        //                 </div>

        //                 <div className='input' style={{ background: "#f4f5fa", borderRadius: "6px" }}>

        //                     <TextField
        //                         id="dc"
        //                         // value={floor}
        //                         label="Địa chỉ"
        //                         variant="outlined"
        //                         // onChange={handleChangeFloor} 
        //                         fullWidth
        //                         sx={textfield}
        //                     />
        //                     <TextField
        //                         id="sdtql1"
        //                         // value={floor}
        //                         label="SDT Quản lý 1"
        //                         variant="outlined"
        //                         // onChange={handleChangeFloor} 
        //                         fullWidth
        //                         sx={textfield}
        //                     />
        //                     <TextField
        //                         id="sdtql2"
        //                         // value={floor}
        //                         label="SDT Quản lý 2"
        //                         variant="outlined"
        //                         // onChange={handleChangeFloor} 
        //                         fullWidth
        //                         sx={textfield}
        //                     />
        //                     <TextField
        //                         id="link"
        //                         // value={floor}
        //                         label="Link giới thiệu"
        //                         variant="outlined"
        //                         // onChange={handleChangeFloor} 
        //                         fullWidth
        //                         sx={textfield}
        //                     />
        //                 </div>


        //             </DialogContent>

        //             <DialogActions>
        //                 <Button
        //                     style={{
        //                         background: "#fff",
        //                         color: "#333",
        //                         border: "none"
        //                     }}
        //                     variant="outlined" autoFocus onClick={close}>
        //                     Đóng
        //                 </Button>

        //                 <Button
        //                     style={{
        //                         background: "#9155fd"
        //                     }} variant="contained" autoFocus onClick={close}>
        //                     Thêm
        //                 </Button>
        //             </DialogActions>
        //         </Box>

        //     </Modal>
        // </LocalizationProvider>
        
            <Modal
                onClose={close}
                aria-labelledby="customized-dialog-title"
                open={open}
                className='modal-container'
                sx={{position: "absolute", overflowY: "auto", overflowX: "hidden" }}
            >
                <Box sx={styleBox}>
                    <DialogTitle sx={{ padding: " 10px 11px", m: 0, color: "#fff", background: "#804bdf", borderRadius: "6px 6px 0 0" }} id="customized-dialog-title">
                        Thêm nhà
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

                    <DialogContent sx={styleModal} >
                        
                            <div className='input' style={styleInput}>
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
                                <FormControl fullWidth>
                                    <InputLabel sx={styledSelect} id="demo-simple-select-label">Nội bộ</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={group}
                                        label="Nội bộ"
                                        onChange={handleChangeGroupt}
                                        sx={styledSelect}
                                    >
                                        <MenuItem value={"1"}>Nội bộ 1 </MenuItem>
                                        <MenuItem value={"2"}>Nội bộ 2</MenuItem>
                                        <MenuItem value={"3"}>Nội bộ 3</MenuItem>

                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel sx={styledSelect} id="demo-simple-select-label">Tình trạng</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={status}
                                        label="Tình trạng"
                                        onChange={handleChangeStatus}
                                        sx={styledSelect}
                                    >
                                        <MenuItem value={"đt"}>đang trống </MenuItem>
                                        <MenuItem value={"ct"}>cho thuê</MenuItem>
                                        <MenuItem value={"đc"}>đang cọc</MenuItem>
                                        <MenuItem value={"bt"}>báo trả</MenuItem>
                                        <MenuItem value={"tc"}>trả/cọc</MenuItem>

                                    </Select>
                                </FormControl>


                                {/* <TextField
                                id="date"
                                // value={floor}
                                label=""
                                type='date'
                                placeholder=''
                                variant="outlined"
                                // onChange={handleChangeFloor} 
                                fullWidth
                                sx={textfield}
                            /> */}

                            </div>
                            <Divider />
                            <div className='input' style={styleInput}>

                                <FormControl fullWidth>
                                    <InputLabel sx={styledSelect} id="demo-simple-select-label">Tỉnh/Thành</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={city}
                                        label="Tỉnh/Thành"
                                        onChange={handleChangeCity}
                                        sx={styledSelect}
                                    >
                                        <MenuItem value={"tt1"}>Tỉnh/Thành 1</MenuItem>
                                        <MenuItem value={"tt2"}>Tỉnh/Thành 2</MenuItem>
                                        <MenuItem value={"tt3"}>Tỉnh/Thành 3</MenuItem>


                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel sx={styledSelect} id="demo-simple-select-label">Quận</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={district}
                                        label="Quận"
                                        onChange={handleChangeDistrict}
                                        sx={styledSelect}
                                    >
                                        <MenuItem value={"q1"}>Quận 1</MenuItem>
                                        <MenuItem value={"q2"}>Quận 2</MenuItem>
                                        <MenuItem value={"q3"}>Quận 3</MenuItem>


                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel sx={styledSelect} id="demo-simple-select-label">Phường</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={ward}
                                        label="Phường"
                                        onChange={handleChangeWard}
                                        sx={styledSelect}
                                    >
                                        <MenuItem value={"p1"}>Phường 1</MenuItem>
                                        <MenuItem value={"p2"}>Phường 2</MenuItem>
                                        <MenuItem value={"p3"}>Phường 3</MenuItem>


                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel sx={styledSelect} id="demo-simple-select-label">Địa chỉ</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={address}
                                        label="Địa chỉ"
                                        onChange={handleChangeAddress}
                                        sx={styledSelect}
                                    >
                                        <MenuItem value={"dc1"}>Địa chỉ 1</MenuItem>
                                        <MenuItem value={"dc2"}>Địa chỉ 2</MenuItem>
                                        <MenuItem value={"dc3"}>Địa chỉ 3</MenuItem>


                                    </Select>
                                </FormControl>
                            </div>

                            <div className='input' style={styleInputBottom}>
                                <TextField
                                    id="phone"
                                    value={phone}
                                    label="Số điện thoại"
                                    variant="outlined"
                                    onChange={handleChangePhone}
                                    fullWidth
                                    sx={textfield}
                                />
                                <TextField
                                    id="link"
                                    value={link}
                                    label="Link giới thiệu"
                                    variant="outlined"
                                    onChange={handleChangeLink}
                                    fullWidth
                                    sx={textfield}
                                />
                                <TextField
                                    id="map"
                                    value={linkMap}
                                    label="Map"
                                    variant="outlined"
                                    onChange={handleChangeLinkMap}
                                    fullWidth
                                    sx={textfield}
                                />
                            </div>
                        

                    </DialogContent>
                    {/* <DialogContent sx={styleModalBottom}  >
                        

                    </DialogContent> */}
                    <Divider sx={{ color: "#804bdf" }} />
                    <DialogActions>
                        <Button

                            className='btn'
                            variant="outlined" autoFocus onClick={close}>
                            Đóng
                        </Button>

                        <Button
                            style={{
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