"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from "@mui/icons-material/Close";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function ModalLarge() {
    const styleModal = {

        padding: "10px 15px",
    }
    const dialogCustom = {
        //for production
        '.css-uhb5lp': {
            backgroundColor: "unset !important",
            boxShadow: "unset !important",
            margin: "10px !important"
        },
        //for production
        '.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
            backgroundColor: "unset !important",
            boxShadow: "unset !important",
            margin: "10px !important"
        },

    }
    const styleBoxLarge = {



        bgcolor: 'background.paper',
        borderRadius: "6px",
        boxShadow: 24,
        ":focus-visible": {
            outline: "none"
        },
        "@media (max-width: 783px)": {

        }

    };

    const btnText = {
        border: 'none',
        color: "#333",
        '&:hover': {
            backgroundColor: "unset",
            color: "#804bdf"
        }
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button style={{
                color: "#9155fd",
                border: "1px solid #9155fd",

            }} variant="outlined" onClick={handleClickOpen}>
                Modal Large
            </Button>
            <Dialog
                open={open}
                sx={dialogCustom}

                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

            >
                <Box sx={styleBoxLarge}>
                    <DialogTitle sx={{ m: 0, padding: " 10px 11px", color: "#fff", background: "#804bdf", borderRadius: "6px 6px 0 0" }} id="customized-dialog-title">
                        Modal Large
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

                    <DialogContent dividers sx={styleModal} >
                        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} >
                            <Stack sx={{ background: "#f4f5fa", padding: "10px", borderRadius: "6px" }}>
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </Stack>
                            <Stack sx={{ background: "#f4f5fa", padding: "10px", borderRadius: "6px" }}>
                                Rioght Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </Stack>
                        </Stack>



                    </DialogContent>

                    <DialogActions>
                        <Button

                            sx={btnText}
                            variant="text" autoFocus onClick={handleClose}>
                            Đóng
                        </Button>

                        <Button
                            style={{
                                background: "#9155fd"
                            }} variant="contained" autoFocus onClick={handleClose}>
                            Thêm
                        </Button>
                    </DialogActions>
                </Box>

            </Dialog>
        </React.Fragment>
    );
}
