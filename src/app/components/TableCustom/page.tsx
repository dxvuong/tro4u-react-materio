"use client"
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useState } from 'react'
import "./page.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ModalCreateContact from '../ModalCreateContact/page'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import MenuCustom from '../MenuCustom/page'
interface TableCustomProps {
    type: boolean
}
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

const TableCustom = ({ type }: TableCustomProps) => {

    const [openModalContact, setOpenModalContact] = useState(false)
    const handleOpenModalContact = () => {
        setOpenModalContact(!openModalContact)
    }
    const handleCloseModalContact = () => {
        setOpenModalContact(false)
    }
    const handleEditRow = (row: TableRowData) => {
        console.log("Thông tin của row:", row);
    }

    const [selectedRow, setSelectedRow] = useState<TableRowData | null>(null);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick =(row: TableRowData) => (event: React.MouseEvent<HTMLElement>) => {
        setSelectedRow(row);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function createData(
        id: string,
        guest: any,
        bike: number,
        phone: string,

        status: string,
        termContract: string,
        deposit: string,
        rentcost: string,
        date: string,
    ) {
        return { id, guest, bike, phone, status, termContract, deposit, rentcost, date };
    }
    const rows = [
        createData("A00001", "", 0, "", "đang trống", "", "", '', ""),
        createData("A00002", "khách thuê2", 2, "0823273847", "cho thuê", "10/11/2023 - 20/11/2024", "1.195.000", '5.000.000', "09/23/2016"),
        createData("A00003", "khách thuê 3", 0, "0819673847", "đang cọc", "10/11/2023 - 20/11/2024", "1.195.000", '5.000.000', "10/15/2017"),
        createData("A00004", "khách thuê 4", 2, "0819673847", "báo trả", "10/11/2023 - 20/11/2024", "1.195.000", '5.000.000', "10/15/2017"),
        createData("A00005", "", 0, "", "đang trống", "", "", '', ""),
        createData("A00006", "khách thuê 6", 1, "0819673847", "trả/cọc", "10/11/2023 - 20/11/2024", "1.195.000", '5.000.000', "10/15/2017"),
    ];

    function createData2(
        id: string,
        guest: number,
        bike: number,
        phone: string,
        status: string,
        termContract: string,
        deposit: string,
        rentcost: string,
        date: string,
    ) {
        return { id, guest, bike, phone, status, termContract, deposit, rentcost, date };
    }
    const gridRows = [
        {
            floor: 1,
            data: [
                createData2("A00001", 0, 0, "chưa có", "đang trống", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "09/27/2018"),
                createData2("A00002", 2, 2, "0823273847", "cho thuê", "10/11/2023 - 20/11/2024", "1..195.000", "5.000.000", "09/23/2016"),
            ]
        },
        {
            floor: 2,
            data: [
                createData2("A00003", 0, 0, "0819673847", "đang cọc", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "10/15/2017"),
                createData2("A00004", 1, 1, "0819673847", "báo trả", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "10/15/2017"),
                createData2("A00005", 0, 0, "chưa có", "đang trống", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "10/15/2017"),
            ]
        },
        {
            floor: 3,
            data: [

                createData2("A00006", 2, 1, "0819673847", "trả/cọc", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "10/15/2017"),
            ]
        },



    ];


    return (


        <div className='table-container'>
            {type ?
                gridRows.map((floors) => {
                    return (
                        <div className='grid-container' key={floors.floor}>

                            <div className="floor-container">
                                <Typography className='floor'>Tầng {floors.floor}</Typography>
                            </div>

                            <div className='item-wrapp'>
                                {floors.data.map((item) => {
                                    return (
                                        <div className={`item-container ${item.status === "đang trống" ? "bg-empty" :
                                            item.status === "cho thuê" ? "bg-rent" :
                                                item.status === "đang cọc" ? "bg-deposit" :
                                                    item.status === "báo trả" ? "bg-return" : "bg-return-deposit"}`} key={item.id}>
                                            <h2 className='item-name'>{item.id}</h2>
                                            <MoreVertIcon className='icon-action' onClick={handleClick(item)} />
                                            <Menu
                                                id="fade-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'fade-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}

                                            >
                                                <MenuItem onClick={handleClose}>Sửa</MenuItem>
                                                <MenuItem onClick={handleClose}>Xóa</MenuItem>
                                                <MenuItem onClick={handleClose}>Chi tiết</MenuItem>
                                            </Menu>

                                            {/* <Menu
                                                id="fade-menu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'fade-button',
                                                }}
                                                
                                                open={openMenu}
                                                onClose={handleCloseMenu}
                                                
                                            >
                                                <MenuItem onClick={handleCloseMenu}>Sửa</MenuItem>
                                                <MenuItem onClick={handleCloseMenu}>Xóa</MenuItem>
                                                <MenuItem onClick={handleCloseMenu}>Chi tiết</MenuItem>
                                            </Menu> */}
                                            <div className="detail">
                                                {item.status === "đang trống" ?

                                                    <>
                                                        <AddCircleOutlineIcon className='icon-add' onClick={handleOpenModalContact} />
                                                    </>
                                                    :
                                                    <><span className='number-people'>{item.guest} <PermIdentityIcon /></span>
                                                        <Avatar>H</Avatar>
                                                        <span className='number-bike'>{item.bike} <TwoWheelerIcon /></span>
                                                    </>}

                                            </div>
                                            <div className='price'>{item.rentcost}</div>
                                        </div>
                                    )
                                })}
                            </div>





                        </div>
                    )
                })

                :
                <Paper sx={{ overflow: "hidden" }}>
                    <TableContainer>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow >
                                    <TableCell align='center' component="th" scope='row' sx={{ fontWeight: "bold", zIndex: 10 }} className="fixed-cell bg-gray">Mã phòng</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center">Khách thuê</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center">Xe</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center">Số điện thoại</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center">Tình trạng</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center">Thời hạn hợp đồng</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center">Tiền cọc</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center">Giá thuê</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center">Ngày thanh toán</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center">Sửa / Xóa</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {


                                    return (
                                        <TableRow key={row.id}>

                                            <TableCell align='center' className={`fixed-cell ${row.status === "đang trống" ? "bg-empty" :
                                                row.status === "cho thuê" ? "bg-rent" :
                                                    row.status === "đang cọc" ? "bg-deposit" :
                                                        row.status === "báo trả" ? "bg-return" : "bg-return-deposit"
                                                }`} > <span className='cell-item'>{row.id} </span> </TableCell>
                                            <TableCell align='center'> <span className='cell-item'>{row.guest} </span>  </TableCell>
                                            <TableCell align='center'> <span className='cell-item'>{row.status ==="đang trống"? "" : row.bike }{row.status ==="đang trống"? "" : <TwoWheelerIcon className='icon-bike' />}  </span>  </TableCell>
                                            <TableCell align='center'> <span className='cell-item'>{row.phone} </span> </TableCell>
                                            <TableCell align='right'> <span className='cell-item'>{row.status === "đang trống" ? <ControlPointIcon onClick={handleOpenModalContact} className='icon-add' /> : row.status}   </span> </TableCell>
                                            <TableCell align='center'> <span className='cell-item'>{row.termContract} </span> </TableCell>
                                            <TableCell align='center'> <span className='cell-item'>{row.deposit} </span> </TableCell>
                                            <TableCell align='center'> <span className='cell-item'>{row.rentcost} </span> </TableCell>
                                            <TableCell sx={{ textAlign: "-webkit-center" }} align='center'> <span className='cell-item'>{row.date} </span> </TableCell>
                                            <TableCell align='right'>
                                                <span className='cell-item'>
                                                    <MoreVertIcon
                                                        className='icon-edit'
                                                        onClick={handleClick(row)}
                                                    />
                                                    <MenuCustom  open={open} close={handleClose} anchorEl={anchorEl} selectedRow={selectedRow} />
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>}

            <ModalCreateContact open={openModalContact} close={handleCloseModalContact} />
        </div>
    )
}

export default TableCustom