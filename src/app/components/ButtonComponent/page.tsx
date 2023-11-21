import React from 'react'
import WrappComponent from '../Wrapp/page'
import "./page.scss"
import ButtonCustom from './ButtonCustom'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
const ButtonComponent = () => {
    return (
        <WrappComponent>
            <div className="button-container">
                <h2>Basic Buttons</h2>
                <div className='item'>
                    <ButtonCustom variants='text'>TEXT</ButtonCustom>
                    <ButtonCustom variants='outlined'>OUTLINED</ButtonCustom>
                    <ButtonCustom variants='contained'>CONTAINED</ButtonCustom>
                </div>

                <h2>Color Buttons</h2>
                <Stack direction={{ xs: 'row', lg: 'column' }} alignItems="center" justifyContent="center" spacing={2} >
                    <Stack direction={{ xs: 'column', lg: 'row', xl: 'row' }} spacing={2}>
                        <ButtonCustom variants='text' color='primary'>primary</ButtonCustom>
                        <ButtonCustom variants='text' color='secondary'>secondary</ButtonCustom>
                        <ButtonCustom variants='text' color='success'>success</ButtonCustom>
                        <ButtonCustom variants='text' color='info'>info</ButtonCustom>
                        <ButtonCustom variants='text' color='warning'>warning</ButtonCustom>
                        <ButtonCustom variants='text' color='error'>error</ButtonCustom>
                    </Stack>
                    <Stack direction={{ xs: 'column', lg: 'row', xl: 'row' }} spacing={2}>
                        <ButtonCustom variants='outlined' color='primary'>primary</ButtonCustom>
                        <ButtonCustom variants='outlined' color='secondary'>secondary</ButtonCustom>
                        <ButtonCustom variants='outlined' color='success'>success</ButtonCustom>
                        <ButtonCustom variants='outlined' color='info'>info</ButtonCustom>
                        <ButtonCustom variants='outlined' color='warning'>warning</ButtonCustom>
                        <ButtonCustom variants='outlined' color='error'>error</ButtonCustom>
                    </Stack>
                    <Stack direction={{ xs: 'column', lg: 'row', xl: 'row' }} spacing={2}>
                        <ButtonCustom variants='contained' color='primary'>primary</ButtonCustom>
                        <ButtonCustom variants='contained' color='secondary'>secondary</ButtonCustom>
                        <ButtonCustom variants='contained' color='success'>success</ButtonCustom>
                        <ButtonCustom variants='contained' color='info'>info</ButtonCustom>
                        <ButtonCustom variants='contained' color='warning'>warning</ButtonCustom>
                        <ButtonCustom variants='contained' color='error'>error</ButtonCustom>
                    </Stack>

                </Stack>

                <h2>Size</h2>
                <Stack direction='column' justifyContent="center" alignItems='center' spacing={2}>
                    <Stack direction="row" spacing={2}>
                        <ButtonCustom variants='text' size='small'>small</ButtonCustom>
                        <ButtonCustom variants='outlined' size='small'>small</ButtonCustom>
                        <ButtonCustom variants='contained' size='small'>small</ButtonCustom>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <ButtonCustom variants='text' size='medium'>medium</ButtonCustom>
                        <ButtonCustom variants='outlined' size='medium'>medium</ButtonCustom>
                        <ButtonCustom variants='contained' size='medium'>medium</ButtonCustom>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <ButtonCustom variants='text' size='large'>large</ButtonCustom>
                        <ButtonCustom variants='outlined' size='large'>large</ButtonCustom>
                        <ButtonCustom variants='contained' size='large'>large</ButtonCustom>
                    </Stack>
                </Stack>



                <h2>Buttons with icons and label</h2>
                <div className='item'>
                    <ButtonCustom variants='contained' color='primary' startIcon={<DeleteIcon />} >Delete</ButtonCustom>
                    <ButtonCustom variants='contained' color='primary' endIcon={<SendIcon />} >Send</ButtonCustom>
                </div>
            </div>
        </WrappComponent >
    )
}

export default ButtonComponent