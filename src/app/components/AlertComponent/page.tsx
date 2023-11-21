"use client"
import React from 'react'
import WrappComponent from '../Wrapp/page'
import AlertCustom from './AlertCustom'
import "./page.scss"
import Stack from '@mui/material/Stack'
import { AlertTitle } from '@mui/material'
import ButtonCustom from '../ButtonComponent/ButtonCustom'
const AlertComponent = () => {
    return (
        <WrappComponent>
            <div className='alert-container'>
                <Stack sx={{ width: '100%' }} direction={{ lg: 'column' }} gap="10px">
                    <h2 style={{ textAlign: "left" }}>Basic Alerts</h2>
                    <AlertCustom severity="error">This is an error alert — check it out!</AlertCustom>
                    <AlertCustom severity="warning">This is a warning alert — check it out!</AlertCustom>
                    <AlertCustom severity="info">This is an info alert — check it out!</AlertCustom>
                    <AlertCustom severity="success">This is a success alert — check it out!</AlertCustom>
                </Stack>

                <Stack sx={{ width: '100%' }} direction={{ lg: 'column' }} gap="10px">
                    <h2 style={{ textAlign: "left" }}>Description</h2>
                    <AlertCustom severity='error'>
                        <AlertTitle sx={{ textAlign: "left" }}>Error</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                    </AlertCustom>
                    <AlertCustom severity='warning'>
                        <AlertTitle sx={{ textAlign: "left" }}>Warning</AlertTitle>
                        This is a warning alert — <strong>check it out!</strong>
                    </AlertCustom>
                    <AlertCustom severity='info'>
                        <AlertTitle sx={{ textAlign: "left" }}>Info</AlertTitle>
                        This is an info alert — <strong>check it out!</strong>
                    </AlertCustom>
                    <AlertCustom severity='success'>
                        <AlertTitle sx={{ textAlign: "left" }}>success</AlertTitle>
                        This is a success alert — <strong>check it out!</strong>
                    </AlertCustom>
                </Stack>

                <Stack sx={{ width: '100%' }} direction={{ lg: 'column' }} gap="10px">
                    <h2 style={{ textAlign: "left" }}>Alert with actions</h2>
                    <AlertCustom severity='success' onClose={() => { }}>
                        This is a success alert — check it out!
                    </AlertCustom>
                    <AlertCustom severity='success' action={
                        <ButtonCustom variants='text' color="inherit" size="small">
                            UNDO
                        </ButtonCustom>
                    }>
                        This is a success alert — check it out!
                    </AlertCustom>
                </Stack>

                <Stack sx={{ width: '100%' }} direction={{ lg: 'column' }} gap="10px" >
                    <h2 style={{ textAlign: "left" }}>Variants</h2>
                    <Stack direction="column" borderBottom="1px solid #ccc" gap="10px" borderRadius='6px'>
                        <AlertCustom variants='outlined' severity='error'>This is an error alert — check it out!</AlertCustom>
                        <AlertCustom variants='outlined' severity='warning'>This is a warning alert — check it out!</AlertCustom>
                        <AlertCustom variants='outlined' severity='info'>This is an info alert — check it out!</AlertCustom>
                        <AlertCustom variants='outlined' severity='success'>This is a success alert — check it out!</AlertCustom>
                    </Stack>
                    
                    <Stack direction="column" borderBottom="1px solid #ccc" gap="10px" borderRadius='6px'>
                        <AlertCustom variants='filled' severity='error'>This is an error alert — check it out!</AlertCustom>
                        <AlertCustom variants='filled' severity='warning'>This is a warning alert — check it out!</AlertCustom>
                        <AlertCustom variants='filled' severity='info'>This is an info alert — check it out!</AlertCustom>
                        <AlertCustom variants='filled' severity='success'>This is a success alert — check it out!</AlertCustom>
                    </Stack>
                </Stack>

            </div>
        </WrappComponent>

    )
}

export default AlertComponent