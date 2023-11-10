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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuCustom from '../MenuCustom/page'
import { deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
interface TableCustomProps {
    types: boolean
}
interface TableRowData {
    id: string;
    guest: any;
    bike: string;
    phone: string;
    status: string;
    termContractIn: string;
    termContractOut: string;
    deposit: string;
    rentcost: string;
    date: string;
}

const TableCustom = ({ types }: TableCustomProps) => {

    const [openModalContact, setOpenModalContact] = useState(false)
    const [openModalEditTable, setOpenModalEditTable] = useState(false)
    const handleOpenModalEditTable = (row: TableRowData) => {
        setOpenModalEditTable(!openModalEditTable)
        setSelectedRow(row)

    }
    const handleCloseModalEditTable = () => {
        setOpenModalEditTable(false)
    }
    const [openMenu, setopenMenu] = useState(false)
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
    console.log("data:", selectedRow);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (row: TableRowData) => (event: React.MouseEvent<HTMLElement>) => {
        setSelectedRow(row);
        setAnchorEl(event.currentTarget);
        setopenMenu(!openMenu)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setopenMenu(false)
    };

    function createData(
        id: string,
        guest: any,
        bike: string,
        phone: string,
        status: string,
        termContractIn: string,
        termContractOut: string,
        deposit: string,
        rentcost: string,
        date: string,
    ) {
        return { id, guest, bike, phone, status, termContractIn, termContractOut, deposit, rentcost, date };
    }
    const rows = [
        createData("A00001", "", "0", "", "đang trống", "", "", "", '', ""),
        createData("A00002", "khách thuê2", "2", "0823273847", "cho thuê", "10/11/2023", "20/11/2024", "1.195.000", '5.000.000', "1-5"),
        createData("A00003", "khách thuê 3", "0", "0819673847", "giữ đến: 20/12/2023", "10/11/2023", "20/11/2024", "1.195.000", '5.000.000', "6-11"),
        createData("A00004", "khách thuê 4", "2", "0819673847", "báo trả: 01/11/2023 ", "10/11/2023", "20/11/2024", "1.195.000", '5.000.000', "1-5"),
        createData("A00005", "", "0", "", "đang trống", "", "", "", '', ""),
        createData("A00006", "khách thuê 6", "1", "0819673847", "Báo trả: 20/12/2022 Giữ đến: 20/11/2023", "10/11/2023", "20/11/2024", "1.195.000", '5.000.000', "11-15"),

    ];

    function createData2(
        id: string,
        guest: number,
        bike: string,
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
                createData2("A00001", 0, "0", "chưa có", "đang trống", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "09/27/2018"),
                createData2("A00002", 2, "2", "0823273847", "cho thuê", "10/11/2023 - 20/11/2024", "1..195.000", "5.000.000", "09/23/2016"),
            ]
        },
        {
            floor: 2,
            data: [
                createData2("A00003", 0, "0", "0819673847", "đang cọc", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "10/15/2017"),
                createData2("A00004", 1, "1", "0819673847", "báo trả", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "10/15/2017"),
                createData2("A00005", 0, "0", "chưa có", "đang trống", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "10/15/2017"),
            ]
        },
        {
            floor: 3,
            data: [

                createData2("A00006", 2, "1", "0819673847", "trả/cọc", "10/11/2023 - 20/11/2024", "1.195.000", "5.000.000", "10/15/2017"),
            ]
        },



    ];


    return (


        <div className='table-container'>
            {types ?
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
                                            <MoreVertIcon className='icon-action' onClick={() => handleClick(item)} />
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


                                            <div className="detail">
                                                {item.status === "đang trống" ?

                                                    <>
                                                        <AddCircleOutlineIcon className='icon-add' onClick={handleOpenModalContact} />
                                                    </>
                                                    :
                                                    <><span className='number-people'>{item.guest} <PermIdentityIcon className='icon-user' /></span>
                                                        <Avatar src='https://ad.tro4u.com/images/khachthue/avatar/64dae464867e3_1692066916.jpg' />
                                                        <span className='number-bike'>{item.bike} <TwoWheelerIcon className='icon-bike' /></span>
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
                <Paper >
                    <TableContainer >
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow >
                                    <TableCell align='center' component="th" scope='row' sx={{ fontWeight: "bold", zIndex: 10 }} className="fixed-cell bg-gray">Mã phòng</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"> Khách  thuê</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"> Xe</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"> Số  điện  thoại</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"> Tình  trạng</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"> Thời  hạn  hợp  đồng</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"> Tiền  cọc</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"> Giá  thuê</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"> Ngày  thanh  toán</TableCell>
                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"> Checkin</TableCell>



                                    <TableCell className='bg-gray' sx={{ fontWeight: "bold" }} align="center"></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {rows.map((row) => {
                                    return (
                                        <TableRow key={row.id}>

                                            <TableCell className={`fixed-cell center ${row.status === "đang trống" ? "bg-empty" :
                                                row.status === "cho thuê" ? "bg-rent" :
                                                    row.status.includes("giữ đến") ? "bg-deposit" :
                                                        row.status.includes("Giữ đến") ? "bg-return-deposit" : "bg-return"
                                                }`} > <span className='cell-item'>{row.id} </span>
                                            </TableCell>

                                            <TableCell className='center' >
                                                <span className='cell-item'>
                                                    {row.status === "đang trống" ? "" : <Avatar sx={{ bgcolor: deepPurple[400] }} src='https://ad.tro4u.com/images/khachthue/avatar/64dae464867e3_1692066916.jpg' />}

                                                </span>
                                            </TableCell>

                                            <TableCell className='center' >
                                                <span className="cell-item">
                                                    {row.status === "đang trống" ? "" : row.bike}{row.status === "đang trống" ? "" : <TwoWheelerIcon className='icon-bike' />}
                                                </span>  </TableCell>
                                            <TableCell className='center'> <span className='cell-item'>{row.phone} </span> </TableCell>

                                            <TableCell className='center'>
                                                <span className={`cell-item ct ${row.status === "cho thuê" ? "ct" :
                                                    row.status.includes("giữ đến") ? "dc" :
                                                        row.status.includes("Giữ đến") ? "tc" : "bt"

                                                    }`}>
                                                    {row.status === "đang trống" ? <ControlPointIcon onClick={handleOpenModalContact} className='icon-add' /> : row.status}
                                                </span>
                                            </TableCell>

                                            <TableCell className='center'> <span className='cell-item'>
                                                {row.status === "đang trống" ? "" :
                                                    <div className='term'>
                                                        <div className='item'>
                                                            <LoginIcon />
                                                            {row.termContractIn}
                                                        </div>
                                                        <div className='item'>
                                                            <LogoutIcon />
                                                            {row.termContractOut}
                                                        </div>
                                                    </div>
                                                }
                                            </span> </TableCell>
                                            <TableCell className='center'> <span className='cell-item'>{row.deposit} </span> </TableCell>
                                            <TableCell className='center'> <span className='cell-item'>{row.rentcost} </span> </TableCell>
                                            <TableCell className='center'> <span className='cell-item'>{row.date} </span> </TableCell>
                                            <TableCell className='center'> <span className='cell-item'><SmartDisplayOutlinedIcon sx={{ color: "#804bdf", fontSize: "1.875rem", cursor: "pointer" }} /> </span> </TableCell>
                                            <TableCell className='center' >
                                                <span className='cell-item icon-container' onClick={handleClick(row)}>
                                                    <ExpandMoreOutlinedIcon className='icon-edit' />

                                                    {/* <div className='menuEdit-container'>
                                                        <div className="menu-list">
                                                            <div className="menu-item" onClick={() => handleOpenModalEditTable(row)}>
                                                                Sửa
                                                            </div>
                                                            <div className="menu-item">
                                                                Xóa
                                                            </div>
                                                            <div className="menu-item">
                                                                Chi tiết
                                                            </div>
                                                        </div>
                                                       
                                                    </div> */}
                                                    <MenuCustom open={openModalEditTable} close={handleCloseModalEditTable} selectedRow={selectedRow} />

                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}

                                {/* <TableRow>
                                    <TableCell className='fixed-cell bg-gray' align='center' sx={{ height: "100px", backgroundColor: "#f4f5fa" }}>
                                        <span></span>
                                    </TableCell>

                                    

                                </TableRow> */}

                            </TableBody>

                        </Table>
                        <div className='note-container'>
                            <div className='note-wrapp'>
                                <div className='note-color'></div>
                                <div className='note-content'>Đang trống</div>
                            </div>
                            <div className='note-wrapp '>
                                <div className='note-color bg-rent'></div>
                                <div className='note-content'>Đang cho thuê </div>
                            </div>
                            <div className='note-wrapp'>
                                <div className='note-color bg-deposit '></div>
                                <div className='note-content'>Đã cọc giữ chỗ</div>
                            </div>
                            <div className='note-wrapp'>
                                <div className='note-color bg-return'></div>
                                <div className='note-content'>Khách Báo trả</div>
                            </div>
                            <div className='note-wrapp'>
                                <div className='note-color bg-return-deposit'></div>
                                <div className='note-content'>Khách Báo trả có người cọc giữ chỗ</div>
                            </div>
                        </div>
                    </TableContainer>
                </Paper>}

            <ModalCreateContact open={openModalContact} close={handleCloseModalContact} />
        </div>
    )
}

export default TableCustom