"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="right" ref={ref} {...props} />;
});

export default function ModalSlideRight() {
    const styleModal = {
        maxWidth: "360px",
        
        padding: "10px 15px",
    }
    const dialogCustom = {
         //for production
         '.css-uhb5lp': {
            backgroundColor: "unset !important",
            boxShadow: "unset !important",
            margin: "10px !important",
            overflow: 'hidden !important'
        },
        //for production
        '.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
            backgroundColor: "unset !important",
            boxShadow: "unset !important",
            margin: "10px !important",
            overflow: 'hidden !important'
        },

    }
    const styleDialogAction = {


        "@media (max-width: 783px)": {
            padding: "8px 20px"
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
    const styleBox = {


        width: 360,
        bgcolor: 'background.paper',
        borderRadius: "6px",
        boxShadow: 24,
        ":focus-visible": {
            outline: "none"
        },
        "@media (max-width: 783px)": {
            width: "350px"
        }

    };
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
                Modal Slide Right
            </Button>
            <Dialog
                sx={dialogCustom}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

            >
                <Box sx={styleBox}>
                    <DialogTitle sx={{ m: 0, padding: " 10px 11px", color: "#fff", background: "#804bdf", borderRadius: "6px 6px 0 0" }} id="customized-dialog-title">
                        Modal Slide Right
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

                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.

                    </DialogContent>

                    <DialogActions  sx={styleDialogAction}>
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
    )
}