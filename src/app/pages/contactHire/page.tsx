"use client"
import WrappComponent from '@/app/components/Wrapp/page'
import React, { useState } from 'react'
import ProductDetail from '../productDetail/page'
import HeaderNameRoom from '@/app/components/HeaderNameRoom/page'
import Typography from '@mui/material/Typography'
import InputComponent from '@/app/components/TextfiledComponent/InputComponent'
import "./page.scss"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SelectComponent from '@/app/components/TextfiledComponent/SelectComponent'
import hoadon from "../../../../public/assets/img/hoadon.png"
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'

import RadioCustom from '@/app/components/RadioComponent/RadioCustom'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import TableContactHire from '@/app/components/TableComponent/TableContactHire'
const ContactHire = () => {
    const [hanhopdong, setHanhopdong] = useState<number | string | undefined>(1);

    const handleChangeHanhopdong = (event: React.ChangeEvent<{ value: unknown }>) => {
        setHanhopdong(event.target.value as number | string | undefined)

    }

    const [mocthanhtoan, setMocthanhtoan] = React.useState('1-3');

    const handleChangeMocthanhtoan = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMocthanhtoan((event.target as HTMLInputElement).value);
    };
    console.log("thanhtoan:", mocthanhtoan);

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
        '.MuiInputBase-input': {
            padding: "10px 14px"
        },

        width: "100%"
    }
    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <WrappComponent>

                <HeaderNameRoom name={"Test-nhatest"} />
                <div className="contactHire-container">
                    <div className="left">
                        <div className="header">
                            <span style={{ color: "#155724" }}>Mã sản phẩm</span>
                            <h5 style={{ fontSize: "1.25rem", color: "#155724" }}>Test-nhatest</h5>
                        </div>
                        <div className="content">
                            <Typography sx={{ fontSize: "18px", color: "#656668" }}>Người đại diện hợp đồng</Typography>
                            <div className="input">
                                <div className="input-form">
                                    <label className='label'>Tên khách <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                                    <InputComponent variant='outlined' label='Tên khách' />
                                </div>
                                <div className="input-form">
                                    <label className='label'>Điện thoại <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                                    <InputComponent variant='outlined' label='Điện thoại' />
                                </div>
                                <div className="input-form">
                                    <label className='label'>HĐ từ <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                                    <DatePicker sx={styleDate} />
                                </div>
                                <div className="input-form">
                                    <label className='label'>Hạn HĐ <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                                    <SelectComponent variant='outlined' label='' onchange={handleChangeHanhopdong} value={hanhopdong}>
                                        <MenuItem value={1}>1 tháng</MenuItem>
                                        <MenuItem value={2}>2 tháng</MenuItem>
                                        <MenuItem value={3}>3 tháng</MenuItem>
                                        <MenuItem value={4}>4 tháng</MenuItem>
                                        <MenuItem value={6}>6 tháng</MenuItem>
                                        <MenuItem value={12}>12 tháng</MenuItem>
                                        <MenuItem value={24}>24 tháng</MenuItem>
                                    </SelectComponent>
                                </div>
                                <div className="input-form">
                                    <label className='label'>Hết HĐ <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                                    <DatePicker sx={styleDate} />
                                </div>
                            </div>
                            <div className="img-container">
                                <div className="img-wrapp">
                                    <Image src={hoadon} width={80} height={80} alt='img' />
                                </div>
                                <div className="img-wrapp">
                                    <Image src={hoadon} width={80} height={80} alt='img' />
                                </div>
                                <div className="img-wrapp">
                                    <Image src={hoadon} width={80} height={80} alt='img' />
                                </div>

                            </div>

                        </div>
                        <div className='paymentTrack'>
                            <Typography sx={{ fontSize: "18px", color: "#656668", position: "relative" }}>Chọn mốc thanh toán <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></Typography>
                            <FormControl>

                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    onChange={handleChangeMocthanhtoan}
                                >
                                    <FormControlLabel value="1-3" control={<Radio sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Từ ngày 1 đến ngày 3" />
                                    <FormControlLabel value="11-13" control={<Radio sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Từ ngày 11 đến ngày 13" />
                                    <FormControlLabel value="21-23" control={<Radio sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Từ ngày 21 đến ngày 23" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className="note-container">
                            <Typography sx={{ fontSize: "18px", color: "#656668", position: "relative" }}>Ghi chú sửa chữa nội thất</Typography>
                            <textarea placeholder='Nhập các ghi chú sửa chữa vào' className='form-control'></textarea>
                        </div>

                    </div>
                    <div className="right">
                        <div className="contact-container">
                            <div className="datetime-container">
                                <div className='datetime'>
                                    <DatePicker sx={styleDate} />
                                    <DatePicker sx={styleDate} />
                                </div>
                                <div className="sumday">
                                    <span className='sumday-text'>Tổng số ngày:</span>
                                    <span className='day-text'>1 ngày</span>
                                </div>

                                <div className="sumday2">
                                    <span className='sumday-text2'></span>
                                    <span className='day-text2'>1 ngày tháng 11-2023</span>
                                </div>

                            </div>
                            <div className="tableContactHire">
                                <TableContactHire />
                                
                            </div>

                        </div>
                    </div>
                </div>
            </WrappComponent>
        </LocalizationProvider>

    )
}

export default ContactHire