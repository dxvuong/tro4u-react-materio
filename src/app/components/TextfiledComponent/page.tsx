"use client"
import React, { ChangeEvent, useState } from 'react'
import WrappComponent from '../Wrapp/page'
import "./page.scss"
import MenuItem from '@mui/material/MenuItem'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'
import InputMultiline from './InputMultiline'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]
const TextFieldComponent = () => {

  const [dataInput, setDataInput] = useState('')
  const handleOnchangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDataInput(event.target.value)
  }
  const [personName, setPersonName] = useState<string[]>([])
  const [personNameNative, setPersonNameNative] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setPersonName(event.target.value as string[])
  }
  const textfield = {
    // maxHeight: "30px",
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#804bdf',
    },
    '.css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: "#804bdf !important"
    },
    '.MuiSelect-select': {

      color: "#804bdf",
      textAlign: "left"
    },
    '.css-2y464i-MuiInputBase-root-MuiFilledInput-root:after': {
      borderColor: '#804bdf',
    },
    '.css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: "#804bdf"
    },
    '.css-bct7tv-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      height: "40px !important"
    },
    '.MuiInputBase-root': {
      height: "40px"
    },
    '.MuiSvgIcon-root ': {
      fill: "black !important",
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
      paddingBottom: "2px"
    },
    '.MuiInputLabel-outlined.Mui-focused': {
      color: "#9155fd"
    },
    '&.Mui-focused': {
      color: '#804bdf', // Màu khi textfield được focus
      borderColor: '#804bdf !important', // Màu viền khi textfield được focus
    },
    
    '&.MuiInputBase-input': {
      padding: 0
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#804bdf !important', // Màu viền khi textfield được hover
    },
    background: "#fff",
    marginBottom: "15px"
  };

  const [dataSelect, setDataSelect] = useState(
    [
      {
        value: "opt1",
        label: "Lựa chọn 1"
      },
      {
        value: "opt2",
        label: "Lựa chọn 2"
      },
      {
        value: "opt3",
        label: "Lựa chọn 3"
      },
    ]
  )
  return (
    <WrappComponent>
      <div className='textfiled-container'>

        <Grid container spacing={2}  >
          <Grid item xs={12} >
            <div className="item" style={{ padding: "10px" }} >
              <h2 style={{ textAlign: "left", marginBottom: "10px" }}>Variants</h2>
              <form className='demo-space-x' noValidate autoComplete='off' style={{ display: "flex", gap: "10px" }}>
                <InputComponent label='Outlined' variant='outlined' />
                <InputComponent label='Filled' variant='filled' />
                <InputComponent label='Standard' variant='standard' />
              </form>
            </div>

          </Grid>
          <Grid item xs={12}>
            <div className="item" style={{ padding: "10px" }} >
              <h2 style={{ textAlign: "left", marginBottom: "10px" }}>Variants Select</h2>


              <SelectComponent
                label='Age'
                variant='outlined'
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </SelectComponent>



              <SelectComponent label='Age' variant='filled'  >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </SelectComponent>



              <SelectComponent label='Age' variant='standard' >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </SelectComponent>
            </div>


          </Grid>

          <Grid item xs={12}>
            <div className="item" style={{ padding: "10px", }} >
              <h2 style={{ textAlign: "left", marginBottom: "10px" }}>Muiltiple Select</h2>

              <FormControl fullWidth>
                <InputLabel id='demo-multiple-chip-label' sx={textfield}>Chip</InputLabel>
                <Select
                  sx={textfield}
                  multiple
                  label='Chip'
                  value={personName}
                  MenuProps={MenuProps}
                  id='demo-multiple-chip'
                  onChange={handleChange}
                  labelId='demo-multiple-chip-label'
                  renderValue={selected => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      {(selected as unknown as string[]).map(value => (
                        <Chip key={value} label={value} sx={{ m: 0.75 }} />
                      ))}
                    </Box>
                  )}
                >
                  {names.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

            </div>


          </Grid>

        </Grid>



      </div>
    </WrappComponent>

  )
}

export default TextFieldComponent