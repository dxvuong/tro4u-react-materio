import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputComponent from '../TextfiledComponent/InputComponent';
import "./page.scss"
import InputComponentForTable from '../TextfiledComponent/InputComponentForTable';
import { useEffect, useState } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#f0f6fd",
        color: "#333",
    },
    padding: "5px 10px"
}))

function createData(
    name: string,
    price: number,
    quantity: number,
    money: number,
) {
    return { name, price, quantity, money };
}

const rows = [
    createData('$ Thuê', 0, 1, 0),
    createData('$ Điện', 0, 1, 0),
    createData('$ Nước', 0, 1, 0),
    createData('$ Net', 0, 1, 0),
    createData('$ Xe', 0, 1, 0),
    createData('$ Rác', 0, 1, 0),
    createData('$ Khác', 0, 1, 0),
];

export default function TableContactHire() {
    const [priceHire, setPriceHire] = useState(0)
    const [quantityHire, setQuantityHire] = useState(1)
    const [moneyHire, setMoneyHire] = useState(0)
    const handleChanePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceHire(Number(event.target.value));
    }
    const handleChaneQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantityHire(Number(event.target.value))
    }
    useEffect(() => {
        setMoneyHire(priceHire * quantityHire)

    }, [priceHire, quantityHire])


    const [priceElectric, setPriceElectric] = useState(0)
    const [quantityElectric, setQuantityElectric] = useState(1)
    const [moneyElectric, setMoneyElectric] = useState(0)

    const handleChanePriceElectric = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceElectric(Number(event.target.value));
    }
    const handleChaneQuantityElectric = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantityElectric(Number(event.target.value))
    }
    useEffect(() => {
        setMoneyElectric(priceElectric * quantityElectric)

    }, [priceElectric, quantityElectric])



    const [priceWater, setPriceWater] = useState(0)
    const [quantityWater, setQuantityWater] = useState(1)
    const [moneyWater, setMoneyWater] = useState(0)

    const handleChanePriceWater = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceWater(Number(event.target.value));
    }
    const handleChaneQuantityWater = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantityWater(Number(event.target.value))
    }
    useEffect(() => {
        setMoneyWater(priceWater * quantityWater)

    }, [priceWater, quantityWater])


    const [priceNet, setPriceNet] = useState(0)
    const [quantityNet, setQuantityNet] = useState(1)
    const [moneyNet, setMoneyNet] = useState(0)

    const handleChanePriceNet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceNet(Number(event.target.value));
    }
    const handleChaneQuantityNet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantityNet(Number(event.target.value))
    }
    useEffect(() => {
        setMoneyNet(priceNet * quantityNet)

    }, [priceNet, quantityNet])


    const [priceBic, setPriceBic] = useState(0)
    const [quantityBic, setQuantityBic] = useState(1)
    const [moneyBic, setMoneyBic] = useState(0)

    const handleChanePriceBic = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceBic(Number(event.target.value));
    }
    const handleChaneQuantityBic = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantityBic(Number(event.target.value))
    }
    useEffect(() => {
        setMoneyBic(priceBic * quantityBic)

    }, [priceBic, quantityBic])


    const [priceRac, setPriceRac] = useState(0)
    const [quantityRac, setQuantityRac] = useState(1)
    const [moneyRac, setMoneyRac] = useState(0)

    const handleChanePriceRac = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRac(Number(event.target.value));
    }
    const handleChaneQuantityRac = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantityRac(Number(event.target.value))
    }
    useEffect(() => {
        setMoneyRac(priceRac * quantityRac)

    }, [priceRac, quantityRac])

    const [priceOther, setPriceOther] = useState(0)
    const [quantityOther, setQuantityOther] = useState(1)
    const [moneyOther, setMoneyOther] = useState(0)

    const handleChanePriceOther = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceOther(Number(event.target.value));
    }
    const handleChaneQuantityOther = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantityOther(Number(event.target.value))
    }
    useEffect(() => {
        setMoneyOther(priceOther * quantityOther)

    }, [priceOther, quantityOther])

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center" sx={{ width: "100px", textTransform: "uppercase", fontSize: "14px", color: "#656468 !important", fontWeight: "600" }}>Dịch vụ</StyledTableCell>
                            <StyledTableCell align="center" sx={{ width: "100px", textTransform: "uppercase", fontSize: "14px", color: "#656468 !important", fontWeight: "600" }}>Đơn giá</StyledTableCell>
                            <StyledTableCell align="center" sx={{ width: "100px", textTransform: "uppercase", fontSize: "14px", color: "#656468 !important", fontWeight: "600" }}>Số lượng</StyledTableCell>
                            <StyledTableCell align="center" sx={{ Width: "100px", textTransform: "uppercase", fontSize: "14px", color: "#656468 !important", fontWeight: "600" }}>Tiền</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow className='custom'>
                            <StyledTableCell component="th" scope="row" align='center' sx={{ width: "100px" }} >
                                $ Thuê
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='outlined' data={priceHire} onchange={handleChanePrice} />
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <InputComponentForTable label='' variant='outlined' data={quantityHire} onchange={handleChaneQuantity} type='number' />
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='filled' data={moneyHire} />
                            </StyledTableCell>
                        </TableRow>

                        <TableRow className='custom'>
                            <StyledTableCell component="th" scope="row" align='center' sx={{ width: "100px" }} >
                                $ Điện
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='outlined' data={priceElectric} onchange={handleChanePriceElectric} />
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <InputComponentForTable label='' variant='outlined' data={quantityElectric} onchange={handleChaneQuantityElectric} type='number' />
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='filled' data={moneyElectric} />
                            </StyledTableCell>
                        </TableRow>

                        <TableRow className='custom'>
                            <StyledTableCell component="th" scope="row" align='center' sx={{ width: "100px" }} >
                                $ Nước
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='outlined' data={priceWater} onchange={handleChanePriceWater} />
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <InputComponentForTable label='' variant='outlined' data={quantityWater} onchange={handleChaneQuantityWater} type='number' />
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='filled' data={moneyWater} />
                            </StyledTableCell>
                        </TableRow>

                        <TableRow className='custom'>
                            <StyledTableCell component="th" scope="row" align='center' sx={{ width: "100px" }} >
                                $ Net
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='outlined' data={priceNet} onchange={handleChanePriceNet} />
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <InputComponentForTable label='' variant='outlined' data={quantityNet} onchange={handleChaneQuantityNet} type='number' />
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='filled' data={moneyNet} />
                            </StyledTableCell>
                        </TableRow>

                        <TableRow className='custom'>
                            <StyledTableCell component="th" scope="row" align='center' sx={{ width: "100px" }} >
                                $ Xe
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='outlined' data={priceBic} onchange={handleChanePriceBic} />
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <InputComponentForTable label='' variant='outlined' data={quantityBic} onchange={handleChaneQuantityBic} type='number' />
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='filled' data={moneyBic} />
                            </StyledTableCell>
                        </TableRow>

                        <TableRow className='custom'>
                            <StyledTableCell component="th" scope="row" align='center' sx={{ width: "100px" }} >
                                $ Rác
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='outlined' data={priceRac} onchange={handleChanePriceRac} />
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <InputComponentForTable label='' variant='outlined' data={quantityRac} onchange={handleChaneQuantityRac} type='number' />
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='filled' data={moneyRac} />
                            </StyledTableCell>
                        </TableRow>

                        <TableRow className='custom'>
                            <StyledTableCell component="th" scope="row" align='center' sx={{ width: "100px" }} >
                                $ Khác
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='outlined' data={priceOther} onchange={handleChanePriceOther} />
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <InputComponentForTable label='' variant='outlined' data={quantityOther} onchange={handleChaneQuantityOther} type='number' />
                            </StyledTableCell>

                            <StyledTableCell align="center" sx={{ width: "150px" }}>
                                <InputComponentForTable label='' variant='filled' data={moneyOther} />
                            </StyledTableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
            <div className="total">
                <div className="totalMoneyRound">
                    <span className='title'>Tổng tiền làm tròn: </span>
                    <span className='money'>0</span>
                </div>
                <div className="congtiencoc">
                    <span className='title'>Cộng tiền cọc:</span>
                    <InputComponent label='' variant='outlined' />
                </div>
            </div>

        </>

    );
}