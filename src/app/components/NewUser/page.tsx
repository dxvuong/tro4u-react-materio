"use client";

import "../../globals.scss";

import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import "./page.scss";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import styled from "@mui/material/styles/styled";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { purple } from '@mui/material/colors';
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import React from "react";
import HeaderComponent from "../header/page";
import Footer from "../footer/page";
import DialogAddHouse from "../DialogAddHouse/page";
import DialogAddRoom from "../DialogAddRoom/page";
import HeaderDisableComponent from "../HeaderDisable/page";

export default function NewuserPage() {
  const [openModalAddHouse, setOpenModalAddHouse] = useState(false);
  const [openModalAddRoom, setOpenModalAddRoom] = useState(false);
  const [displayGrid, setDisplayGrid] = useState(false)

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleDisplayGrid = () => {
    setDisplayGrid(true)
  }
  const handleDisplayTable = () => {
    setDisplayGrid(false)
  }

  const handleOpenModalAddHouse = () => {
    setOpenModalAddHouse(!openModalAddHouse);
  };

  const handleCloseModalAddHouse = () => {
    setOpenModalAddHouse(false);
  };

  const handleOpenModalAddRoom = () => {
    setOpenModalAddRoom(!openModalAddRoom);
  };

  const handleCloseModalAddRoom = () => {
    setOpenModalAddRoom(false);
  };

  const [openModalDisplay, setOpenModalDisplay] = useState(false)
  const handleOpenModalDisplay = () => {
    setOpenModalDisplay(!openModalDisplay);
  };

  const handleCloseModalDisplay = () => {
    setOpenModalDisplay(false);
  };

  const [openModalfilter, setOpenModalfilter] = useState(false)

  const handleOpenModalFilter = () => {
    setOpenModalfilter(true)

  }
  console.log("modal filter", openModalfilter);
  const handleCloseModalFilter = () => {
    setOpenModalfilter(false)
  }
  const [status, setStatus] = useState('')
  const handleChangeStatus = (event: SelectChangeEvent) => {
    event.preventDefault()
    setStatus(event.target.value as string)
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openModalEditHouse, setOpenModalEditHouse] = useState(false);
  const handleOpenModalEditHouse = () => {
    setOpenModalEditHouse(!openModalEditHouse);
  };

  const handleCloseModalEditHouse = () => {
    setOpenModalEditHouse(false);
  };
  const [openModalSelectHouse, setModalOpenSelectHouse] = useState(false)
  
  const handleOpenSelectHouse = () => {
    setModalOpenSelectHouse(!openModalSelectHouse)
  }
  const handleCloseSeclectHouse = () => {
    setModalOpenSelectHouse(false)
  }
  const [paymentSchedule, setPaymentSchedule] = useState('')
  const handleChangePaymentSchedule = (event: SelectChangeEvent) => {
    event.preventDefault()
    setPaymentSchedule(event.target.value as string)
  }
  const styleBox = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 360,
    bgcolor: 'background.paper',
    borderRadius: "6px",
    boxShadow: 24,
    "@media (max-width: 783px)": {
      width: "350px"
    }

  };
  const styleDialogContent = {
    display: "flex",
    padding: "15px",
    gap: "10px"
  }
  const styleModal = {
    maxWidth: "360px",
    minWidth: "360px",
    padding: "10px",



    
  }
  
  


  

  const styleBtnDisplay1 = {
    color: "#9155fd",
    width: "50%",
    border: "1px solid #804bdf",
    backgroundColor: "rgba(145, 85, 253, 0.04)",
    marginLeft: "2px",
    "&:hover ": {
      backgroundColor: "#fff",
      border: "1px solid #804bdf"
    }

  };
  const styleBtnDisplay2 = {
    color: "#fff",
    width: "50%",
    border: "1px solid #804bdf",
    backgroundColor: "#804bdf",
    "&:hover ": {
      backgroundColor: "#804bdf",

    }

  }



  return (
    <div className="container">
      <HeaderDisableComponent />
      <div className="main">
        <div className="home-container">
        <div className="top">
            <div
              className="info"

              style={{ cursor: "pointer" }}
            >
              <div className="info-wrapp" onClick={handleOpenSelectHouse}>
                <span className="home-info">
                  quang trung <ArrowDropDown sx={{ color: "#9155fd" }} />

                </span>
                <span className="address">
                  315/272/26 Phạm Văn Chiêu, Phường 9, Gò vấp
                </span>

              </div>
              {/* <div className={`select-container ${openSelectHouse ? "active-select" : ""}`}>
                <SelectHouseComponent close ={handleCloseSeclectHouse} options={MenuHouse}/>
              </div> */}
              <div className="menuHouseIcon">
                <MoreVertIcon sx={{ color: "black" }} className="icon-menu" /* onClick={() =>handleClick}*/ />
                <div className="menuHouse-container">
                  <div className="menuHouse-list">
                    <div className="menuHouse-item" onClick={handleOpenModalEditHouse}>
                      <EditOutlinedIcon sx={{ color: "#17a2b8" }} />
                      <span style={{color:"#333"}}>Sửa</span>
                    </div>
                    <div className="menuHouse-item">
                      <DeleteOutlineOutlinedIcon sx={{ color: "#dc3545" }} /> 
                      <span style={{color:"#333"}}>Xóa</span>
                    </div>
                    <div className="menuHouse-item">
                      <InfoOutlinedIcon sx={{ color: "#804bdf" }} /> 
                      <span style={{color:"#333"}}>Chi tiết</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Sửa</MenuItem>
                <MenuItem onClick={handleClose}>Xóa </MenuItem>
                <MenuItem onClick={handleClose}>Chi tiết</MenuItem>
              </Menu> */}

            </div>

            <div className="actions">



              <Button
                onClick={handleOpenModalAddHouse}
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
                    <Typography className="text" sx={{ fontWeight: "bold", color: "#ff00ff !important" }}>tổng thuê: 394.324.000 </Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "green !important" }}>tổng cọc: 1.324.234.234</Typography>
                    
                    <Typography className="text" sx={{ fontWeight: "bold", color: "orange !important" }}>tổng người: 56 </Typography>
                  </div>
                  <div className="data-item2">
                    <Typography className="text" sx={{ fontWeight: "bold", color: "purple !important" }}>trống: 14 </Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "blue !important" }}>cọc: 23</Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "black !important" }}>tổng xe: 24</Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "#83db10 !important" }}>thuê: 28</Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "red !important" }}> báo trả: 04</Typography>
                  </div>

                </div>
                <div className="actions">
                
                </div>
              </div>
            </div>

            <div className="section2">
              {/* <TableCustom type={displayGrid} /> */}
              <div className='newUser-container'>
                <div className="content">
                  <Typography className='text'>Nhà chưa có sản phẩm nào </Typography>
                  <Typography className='text'>Vui lòng nhấn để tạo nhà </Typography>
                  <Button variant="contained" className='btn'>Tạo nhà</Button>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* <NewuserPage/> */}
      </div>
      <Footer />
      {/* this is modal section */}
      <div className="modal " >
        <DialogAddHouse open={openModalAddHouse} close={handleCloseModalAddHouse} />
      </div>
      {/* this is modal section */}

      {/* this is modal section */}
      <div className="modal " >
        <DialogAddRoom open={openModalAddRoom} close={handleCloseModalAddRoom} />
      </div>
      {/* this is modal section */}

    </div>
  );
}
