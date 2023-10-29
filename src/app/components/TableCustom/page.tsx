import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React from 'react'
import "./page.scss"
const TableCustom = () => {
    const columns = [
        {
            id: 1,
            name: "Mẫ phòng"
        },
        {
            id: 2,
            name: "Khách thuê"
        },
        {
            id: 3,
            name: "Điện thoại"
        },
        {
            id: 4,
            name: "Tình trạng"
        },
        {
            id: 5,
            name: "Thời hạn hợp đồng"
        },
        {
            id: 6,
            name: "Tiền cọc"
        },
        {
            id: 7,
            name: "Giá thuê"
        },
        {
            id: 8,
            name: "Ngày thanh toán"
        },
    ]
    function createData(
        id: number,
        guest: string,
        phone: string,
        status: string,
        termContract: string,
        deposit: number,
        rentcost: number,
        date: string,
    ) {
        return { id, guest, phone, status, termContract, deposit, rentcost, date };
    }
    const rows = [
        createData(1, "khách thuê", "0819433847", "đang trống", "10/11/2023 - 20/11/2024", 1195000, 5000000, "09/27/2018"),
        createData(2, "khách thuê 2", "0823273847", "cho Thuê", "10/11/2023 - 20/11/2024", 1195000, 5000000, "09/23/2016"),
        createData(3, "khách thuê 3", "0819673847", "đang trống", "10/11/2023 - 20/11/2024", 1195000, 5000000, "10/15/2017"),
        createData(4, "khách thuê 4", "0819673847", "báo trả", "10/11/2023 - 20/11/2024", 1195000, 5000000, "10/15/2017"),
        createData(5, "khách thuê 5", "0819673847", "cho Thuê", "10/11/2023 - 20/11/2024", 1195000, 5000000, "10/15/2017"),
        createData(6, "khách thuê 6", "0819673847", "đang trống", "10/11/2023 - 20/11/2024", 1195000, 5000000, "10/15/2017"),
    ];
    return (
        <div className='table-container'>
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell sx={{fontWeight: "bold"}} className="fixed-cell">Mã phòng</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} align="right">Khách thuê</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} align="right">Số điện thoại</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} align="right">Tình trạng</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} align="right">Thời hạn hợp đồng</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} align="right">Tiền cọc</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} align="right">Giá thuê</TableCell>
                                <TableCell sx={{fontWeight: "bold"}} align="right">Ngày thanh toán</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell className="fixed-cell" component="th" scope='row'>{row.id}</TableCell>
                                        <TableCell align='right'>{row.guest}</TableCell>
                                        <TableCell align='right'>{row.phone}</TableCell>
                                        <TableCell align='right'>{row.status}</TableCell>
                                        <TableCell align='right'>{row.termContract}</TableCell>
                                        <TableCell align='right'>{row.deposit}</TableCell>
                                        <TableCell align='right'>{row.rentcost}</TableCell>
                                        <TableCell align='right'>{row.date}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default TableCustom