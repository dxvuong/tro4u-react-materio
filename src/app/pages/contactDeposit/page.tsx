"use client"
import HeaderNameRoom from '@/app/components/HeaderNameRoom/page'
import InputComponent from '@/app/components/TextfiledComponent/InputComponent'
import SelectComponent from '@/app/components/TextfiledComponent/SelectComponent'
import WrappComponent from '@/app/components/Wrapp/page'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React, { useState } from 'react'
import hoadon from "../../../../public/assets/img/hoadon.png"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./page.scss"
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioCustom from '@/app/components/RadioComponent/RadioCustom'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import ButtonCustom from '@/app/components/ButtonComponent/ButtonCustom'
import AnchorIcon from '@mui/icons-material/Anchor';
const ContactDeposit = () => {
  const [hanhopdong, setHanhopdong] = useState<number | string | undefined>(1);

  const handleChangeHanhopdong = (event: React.ChangeEvent<{ value: unknown }>) => {
    setHanhopdong(event.target.value as number | string | undefined)

  }

  const [radio, setRadio] = useState('nv')
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value)
  }

  const [nvsale, setnvsale] = useState<number | string | undefined>('');

  const handleChangeNhanvienSale = (event: React.ChangeEvent<{ value: unknown }>) => {
    setnvsale(event.target.value as number | string | undefined)

  }

  const [nvguild, setnvguild] = useState<number | string | undefined>('');

  const handleChangeNhanvienGuild = (event: React.ChangeEvent<{ value: unknown }>) => {
    setnvguild(event.target.value as number | string | undefined)

  }

  const [checked, setChecked] = useState<boolean>(false);
  const handleCheck = () => {
    setChecked(!checked);
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
    '.MuiInputBase-input': {
      padding: "10px 14px"
    },

    width: "100%"
  }
  const styleSubmitBtn = {
    width: "100%",
    backgroundColor: "#804bdf",
    color: "#fff",
    padding: "8px 16px",
    marginTop: "10px",
    display: 'flex',
    gap: "5px",
    '&:hover': {
      backgroundColor: '#4a17a7'
    }
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <WrappComponent>
        <HeaderNameRoom name={"Test-nhatest"} />
        <div className="contactDeposit-container">
          <div className="left">
            <div className="header">
              <span style={{ color: "#004085" }}>Mã sản phẩm</span>
              <h5 style={{ fontSize: "1.25rem", color: "#004085" }}>Test-nhatest</h5>
            </div>
            <div className="content">
              <Typography sx={{ fontSize: "18px", color: "#656668" }}>Thông tin khách cọc giữ chỗ</Typography>
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
                  <label className='label'>Giữ đến <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                  <DatePicker sx={styleDate} />
                </div>
                <div className="input-form">
                  <label className='label'>Tính tiền từ <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
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

              </div>
              {/* <div className="img-container">

                <div className="img-wrapp">
                  <Image src={hoadon} width={80} height={80} alt='img' />
                </div>
                <div className="img-wrapp">
                  <Image src={hoadon} width={80} height={80} alt='img' />
                </div>
                <div className="img-wrapp">
                  <Image src={hoadon} width={80} height={80} alt='img' />
                </div>

              </div> */}

            </div>

            <div className='service'>
              <Typography sx={{ fontSize: "18px", color: "#656668" }}>Tiền thuê và dịch vụ</Typography>
              <div className="input">
                <div className="input-form">
                  <label className='label'>Tiền thuê <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                  <InputComponent variant='outlined' label='' />
                </div>

                <div className="input-form">
                  <label className='label'>Điện </label>
                  <InputComponent variant='outlined' label='' />
                </div>

                <div className="input-form">
                  <label className='label'>Nước </label>
                  <InputComponent variant='outlined' label='' />
                </div>

                <div className="input-form">
                  <label className='label'>Net </label>
                  <InputComponent variant='outlined' label='' />
                </div>

                <div className="input-form">
                  <label className='label'>Rác</label>
                  <InputComponent variant='outlined' label='' />
                </div>

                <div className="input-form">
                  <label className='label'>Xe </label>
                  <InputComponent variant='outlined' label='' />
                </div>

                <div className="input-form">
                  <label className='label'>Khác</label>
                  <InputComponent variant='outlined' label='' />
                </div>

              </div>
            </div>

          </div>
          <div className="right">
            <div className="deposit-money">
              <Typography sx={{ fontSize: "18px", color: "#656668" }}>Tiền khách cọc trước</Typography>
              <div className="select">
                <FormControl>

                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="nv"
                    name="radio-buttons-group"
                    row
                    value={radio}
                    onChange={handleChangeRadio}
                  >
                    <FormControlLabel value="nv" control={<Radio sx={{ '&.Mui-checked': { color: "#9155fd" } }}  />} label="Nhân viên" />
                    <FormControlLabel value="boss" control={<Radio sx={{ '&.Mui-checked': { color: "#9155fd" } }} />} label="Boss" />

                  </RadioGroup>
                </FormControl>
              </div>
              <div className="input">
                <div className="input-form">
                  <label className='label'>Tiền thu <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                  <InputComponent variant='outlined' label='' />
                </div>

                {radio === 'nv' ?
                  <div className="input-form">
                    <label className='label'>Người thu <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                    <SelectComponent variant='outlined' label='' >
                      <MenuItem value={'nv1'}>Nhân viên 1</MenuItem>
                      <MenuItem value={'nv2'}>Nhân viên 2</MenuItem>
                      <MenuItem value={'nv3'}>Nhân viên 3</MenuItem>
                      <MenuItem value={'nv4'}>Nhân viên 4</MenuItem>
                    </SelectComponent>
                  </div>
                  :
                  <div className="input-form">
                    <label className='label'>Hình thức <span style={{ position: "absolute", top: " 1px", color: "red" }}>*</span></label>
                    <SelectComponent variant='outlined' label='' >
                      <MenuItem value={'ht1'}>Hình thức 1</MenuItem>
                      <MenuItem value={'ht1'}>Hình thức 2</MenuItem>

                    </SelectComponent>
                  </div>}


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
            <div className="note-container">
              <Typography sx={{ fontSize: "18px", color: "#656668", position: "relative" }}>Ghi chú sửa chữa nội thất</Typography>
              <textarea placeholder='Nhập các ghi chú sửa chữa vào' className='form-control'></textarea>
            </div>
            <div className="commission">
              <Typography sx={{ fontSize: "18px", color: "#656668", position: "relative" }}>Thông tin tính hoa hồng</Typography>
              <div className="commission-item">
                <label className='commission-label'>Người Sale</label>
                <SelectComponent label='Chọn nhân viên' variant='outlined' onchange={handleChangeNhanvienSale} value={nvsale}>
                  <MenuItem value={'nv1'}>Nhân viên 1</MenuItem>
                  <MenuItem value={'nv2'}>Nhân viên 2</MenuItem>
                  <MenuItem value={'nv3'}>Nhân viên 3</MenuItem>
                  <MenuItem value={'nv4'}>Nhân viên 4</MenuItem>
                </SelectComponent>
              </div>

              <div className="commission-item">
                <label className='commission-label'>Dẫn khách</label>
                <SelectComponent label='Chọn nhân viên' variant='outlined' onchange={handleChangeNhanvienGuild} value={nvguild}>
                  <MenuItem value={'nv1'}>Nhân viên 1</MenuItem>
                  <MenuItem value={'nv2'}>Nhân viên 2</MenuItem>
                  <MenuItem value={'nv3'}>Nhân viên 3</MenuItem>
                  <MenuItem value={'nv4'}>Nhân viên 4</MenuItem>
                </SelectComponent>
              </div>

            </div>
            <div className="checkin">
              <span style={{ color: "darkgrey" }}>Tạo việc: </span>
              <div className="checkbox">
                <Checkbox
                  value={checked}
                  style={checked ? { color: "#9155fd" } : { color: "rgba(58, 53, 65, 0.68)" }}
                  onClick={handleCheck}
                />
                <span style={{color: "darkgray"}}>check-in</span>
              </div>



            </div>
            <div className='submit-btn'>
              <ButtonCustom variants='contained' sx={styleSubmitBtn}>
                <span>Tạo hợp đồng cọc</span>
                <AnchorIcon />
              </ButtonCustom>

            </div>
          </div>
        </div>
      </WrappComponent>
    </LocalizationProvider>

  )
}

export default ContactDeposit