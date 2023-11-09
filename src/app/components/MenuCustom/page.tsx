"use client"

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Modal from '@mui/material/Modal';
import React, { ChangeEvent, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from '@mui/material/DialogContent';
import { DialogActions, Divider } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./page.scss"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Link from 'next/link';
interface TableRowData {
    id: string;
    guest: any;
    bike: string;
    phone: string;
    status: string;
    termContract: string;
    deposit: string;
    rentcost: string;
    date: string;
}
interface MenuCustomProps {
    open: any,
    close: () => void,
    selectedRow: TableRowData | null;
}

const MenuCustom = ({ open, close, selectedRow }: MenuCustomProps) => {



    const [openModal, setOpenModal] = React.useState(false);
    const handleClose = () => setOpenModal(false);
    const handleOpenModal = () => setOpenModal(true);
    const [dataEdit, setDataEdit] = useState<TableRowData | null | string>(selectedRow)
    const [editId, setEditId] = useState(selectedRow?.id)
    const [editGuest, setEditGuest] = useState(selectedRow?.guest)
    const [editBike, setEditBike] = useState(selectedRow?.bike)
    const [editPhone, setEditPhone] = useState(selectedRow?.phone)
    const [editStatus, setEditStatus] = useState(selectedRow?.status)
    const [editTerm, setEditTerm] = useState(selectedRow?.termContract)
    const [editDeposit, setEditDeposit] = useState(selectedRow?.deposit)
    const [editRentCost, setEditRentCost] = useState(selectedRow?.rentcost)

    useEffect(() => {
        // Set initial state for dataEdit after the component is mounted
        setDataEdit(selectedRow);
    }, [selectedRow]);
    const handleOnchangeId = (event: ChangeEvent<HTMLInputElement>) => {
        setDataEdit(event.target.value)
        setEditId(event.target.value)

    }
    const handleOnchangeGuest = (event: ChangeEvent<HTMLInputElement>) => {
        setDataEdit(event.target.value)
        setEditGuest(event.target.value)
    }
    const handleOnchangeBike = (event: ChangeEvent<HTMLInputElement>) => {
        setDataEdit(event.target.value)
        setEditBike(event.target.value)
    }
    const handleOnchangePhone = (event: ChangeEvent<HTMLInputElement>) => {
        setDataEdit(event.target.value)
        setEditPhone(event.target.value)
    }
    const handleOnchangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
        setDataEdit(event.target.value)
        setEditStatus(event.target.value)
    }
    const handleOnchangeTerm = (event: ChangeEvent<HTMLInputElement>) => {
        setDataEdit(event.target.value)
        setEditTerm(event.target.value)
    }
    const handleOnchangeDeposit = (event: ChangeEvent<HTMLInputElement>) => {
        setDataEdit(event.target.value)
        setEditDeposit(event.target.value)
    }
    const handleOnchangeRentCost = (event: ChangeEvent<HTMLInputElement>) => {
        setDataEdit(event.target.value)
        setEditRentCost(event.target.value)
    }
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target;
    //     setDataEdit(prevState => {
    //         if (typeof prevState === 'object' && prevState !== null) {
    //             return { ...prevState, [name]: value };
    //         }
    //         return prevState;
    //     });
    // }


    const handleSubmit = () => {
        console.log({
            editId, editGuest, editBike, editPhone, editStatus, editTerm, editDeposit, editRentCost
        });
        setEditId("")
        setEditGuest("")
        setOpenModal(false)
    }
    const styleBox = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 360,
        bgcolor: 'background.paper',
        boxShadow: 24,
        "@media (max-width: 783px)": {
            width: 330,
        },
    };
    const styleModal = {
        maxWidth: "360px",
        minWidth: "360px",
        padding: "10px",
        marginTop: "10px",

        "@media (max-width: 783px)": {
            minWidth: "330px",
        },
    }
    console.log("selected: ", selectedRow);

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
            borderColor: '#804bdf', // Màu viền khi textfield được hover
        },

        marginBottom: "10px"
    };
    console.log(selectedRow);

    return (
        <>
            {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={close}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{ minWidth: "150px" }}
            >
                <MenuItem onClick={handleOpenModal}>Sửa </MenuItem>
                <MenuItem onClick={close}>Xóa</MenuItem>
                <MenuItem onClick={close}>Chi tiết</MenuItem>
            </Menu> */}
            <div className='menuEdit-container'>
                <div className="menu-list">
                    <div className="menu-item" onClick={handleOpenModal}>
                        <EditOutlinedIcon />
                        Sửa
                    </div>
                    <div className="menu-item">
                        
                            <DeleteOutlinedIcon />
                            Xóa
                        

                    </div>
                    <div className="menu-item">
                        
                            <InfoOutlinedIcon />
                            Chi tiết
                        
                    </div>
                </div>

            </div>


            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleBox}>
                    <DialogTitle sx={{ m: 0, color: "#fff", background: "#804bdf" }} id="customized-dialog-title">
                        Cập nhật phòng
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent sx={styleModal}>
                        <TextField
                            fullWidth
                            sx={textfield}
                            label="Mã phòng"
                            autoFocus
                            value={(dataEdit as TableRowData)?.id!}
                            onChange={handleOnchangeId}
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true, // Giữ cho label không bao giờ rơi xuống khi có dữ liệu trong input field
                            }} />
                        <TextField
                            fullWidth
                            sx={textfield}
                            label="Khách thuê"
                            autoFocus
                            value={(dataEdit as TableRowData)?.guest!}
                            onChange={handleOnchangeGuest}
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true, // Giữ cho label không bao giờ rơi xuống khi có dữ liệu trong input field
                            }} />
                        <TextField
                            fullWidth
                            sx={textfield}
                            type='number'
                            label="Số lượng xe"
                            value={(dataEdit as TableRowData)?.bike!}
                            onChange={handleOnchangeBike}
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true, // Giữ cho label không bao giờ rơi xuống khi có dữ liệu trong input field
                            }} />
                        <TextField
                            fullWidth
                            sx={textfield}
                            label="Số điện thoại"
                            value={(dataEdit as TableRowData)?.phone!}
                            onChange={handleOnchangePhone}
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true, // Giữ cho label không bao giờ rơi xuống khi có dữ liệu trong input field
                            }} />
                        <TextField
                            fullWidth
                            sx={textfield}
                            label="Tình trạng"
                            value={(dataEdit as TableRowData)?.status!}
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true, // Giữ cho label không bao giờ rơi xuống khi có dữ liệu trong input field
                            }}
                            onChange={handleOnchangeStatus}
                        />
                        <TextField
                            fullWidth
                            sx={textfield}
                            label="Thời hạn hợp đồng"
                            value={(dataEdit as TableRowData)?.termContract}
                            onChange={handleOnchangeTerm}
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true, // Giữ cho label không bao giờ rơi xuống khi có dữ liệu trong input field
                            }} />
                        <TextField
                            fullWidth
                            sx={textfield}
                            label="Tiền cọc"
                            value={(dataEdit as TableRowData)?.deposit!}
                            onChange={handleOnchangeDeposit}
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true, // Giữ cho label không bao giờ rơi xuống khi có dữ liệu trong input field
                            }} />
                        <TextField
                            fullWidth
                            sx={textfield}
                            label="Giá thuê"
                            value={(dataEdit as TableRowData)?.rentcost!}
                            onChange={handleOnchangeRentCost}
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true, // Giữ cho label không bao giờ rơi xuống khi có dữ liệu trong input field
                            }} />
                    </DialogContent>
                    <Divider />
                    <DialogActions style={{
                        textAlign: "right"
                    }}>
                        <Button className='btn' variant="outlined" autoFocus onClick={handleClose}>
                            Đóng
                        </Button>
                        <Button style={{
                            background: "#9155fd",
                            textAlign: "right"
                        }} variant="contained" autoFocus onClick={handleSubmit}>
                            Cập nhật
                        </Button>
                    </DialogActions>

                </Box>
            </Modal>
        </>

    )
}

export default MenuCustom