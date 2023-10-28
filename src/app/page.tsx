"use client";
import HeaderComponent from "./components/header/page";
import "./globals.scss";
import Footer from "./components/footer/page";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import "./page.scss";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import ModalCustom from "./components/ModalCustom/page";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@mui/material/styles/styled";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";


export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(3),


    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(2),
    },
  }));

  const styleModal = {
    maxWidth: "360px",
    padding: "20px",

    "@media (max-width: 767px)": {
      padding: "10px !important"
    },
  }

  return (
    <div className="container">
      <HeaderComponent />
      <div className="main">
        <div className="home-container">
          <div className="top">
            <div
              className="info"
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            >
              <span className="home-info">
                quang trung <ArrowDropDown sx={{ color: "#9155fd" }} />{" "}
              </span>
              <span className="address">
                315/272/26 Phạm Văn Chiêu, Phường 9, Gò vấp
              </span>
            </div>
            <div className="actions">
              <Button
                onClick={handleOpenModal}
                variant="outlined"
                className="btn-actions1"
              >
                {" "}
                <GridViewOutlinedIcon className="icon" /> <span>hiển thị</span>
              </Button>
              <Button
                onClick={handleOpenModal}
                variant="contained"
                className="btn-actions2"
              >
                {" "}
                <AddHomeWorkIcon className="icon" /> <span>thêm nhà</span>{" "}
              </Button>
            </div>
          </div>
          <div className="bottom">
            <div className="section1">
              <div className="content">
                <div className="data">
                  <div className="data-item">
                    <Typography className="text">test1</Typography>
                    <Typography className="text">test1</Typography>
                    <Typography className="text">test1</Typography>
                  </div>
                  <div className="data-item">
                    <Typography className="text">test1</Typography>
                    <Typography className="text">test1</Typography>
                    <Typography className="text">test1</Typography>
                  </div>

                </div>
                <div className="actions">
                  <div className="action1">
                    <Button variant="outlined" className="btn1">Button 1</Button>
                  </div>
                  <div className="action2">
                    <Button variant="contained" className="btn2">Button 2</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />






      {/* this is modal section */}
      <div className="modal " >
        <BootstrapDialog
          onClose={handleCloseModal}
          aria-labelledby="customized-dialog-title"
          open={openModal}
          
          sx={{ position: "fixed",  }}
        >
          <DialogTitle sx={{ m: 0, p: 3 }} id="customized-dialog-title">
            Modal title
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
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
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>

          </DialogContent>

          <DialogActions>
            <Button style={{
              background: "#9155fd"
            }} variant="contained" autoFocus onClick={handleCloseModal}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      {/* this is modal section */}

    </div>
  );
}
