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


  const [paymentSchedule, setPaymentSchedule] = useState('')
  const handleChangePaymentSchedule = (event: SelectChangeEvent) => {
    event.preventDefault()
    setPaymentSchedule(event.target.value as string)
  }
  // const status = [
  //   { label: 'đang trống', id: 1 },
  //   { label: 'cho thuê', id: 2 },
  //   { label: 'đang cọc', id: 3 },
  //   { label: 'báo trả', id: 4 },
  //   { label: 'trả/cọc', id: 5 },
  // ];

  const styleBox = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 360,
    bgcolor: 'background.paper',

    boxShadow: 24,

  };
  const styleModal = {
    maxWidth: "360px",
    minWidth: "360px",
    padding: "20px",


    "@media (max-width: 783px)": {
      padding: "10px !important"
    },
  }
  const ModalFilter = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(3),


    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(2),
    },
  }));


  const styleModalDisplay = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    display: "flex",
    gap: "10px",
    boxShadow: 24,
    p: 4,
    "@media (max-width: 783px)": {
      width: 318,
      left: "50%"
    },
  };
  // const CustomInputLabel = styled(InputLabel)({
  //   '&.Mui-focused': {
  //     color: 'green', // Thay đổi màu khi tập trung
  //   },
  // });

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
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            >
              <div className="info-wrapp">
                <span className="home-info">
                  quang trung <ArrowDropDown sx={{ color: "#9155fd" }} />

                </span>
                <span className="address">
                  315/272/26 Phạm Văn Chiêu, Phường 9, Gò vấp
                </span>
              </div>
              <MoreVertIcon sx={{ color: "black" }} className="icon-menu" onClick={handleClick} />
              <Menu
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
              </Menu>
            </div>
            <div className="actions">
              <Button
                onClick={handleOpenModalDisplay}
                variant="outlined"
                className="btn-actions1"
              >
                {" "}
                <GridViewOutlinedIcon className="icon" /> <span>hiển thị</span>
                <div className='modalDisplay-container'>
                  <Modal open={openModalDisplay} onClose={handleCloseModalDisplay}>
                    <Box sx={styleModalDisplay}>

                      <Button sx={styleBtnDisplay1} className="btn-1" onClick={handleDisplayGrid} variant="outlined">Kiểu lưới</Button>

                      <Button sx={styleBtnDisplay2} onClick={handleDisplayTable} variant="contained">Kiểu bảng</Button>

                    </Box>

                  </Modal>
                </div>
              </Button>


              <Button
                onClick={handleOpenModalAddHouse}
                variant="contained"
                className="btn-actions2"
              >
                {" "}
                <AddHomeWorkIcon className="icon" />
                <span>thêm nhà</span>
              </Button>
            </div>
          </div>

          <div className="bottom">
            <div className="section1">
              <div className="content">
                <div className="data">
                  <div className="data-item">
                    <Typography className="text" sx={{ fontWeight: "bold", color: "#ff00ff !important" }}>tổng giá thuê: </Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "green !important" }}>tổng tiền cọc: </Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "black !important" }}>tổng xe: </Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "orange !important" }}>tổng người ở: </Typography>
                  </div>
                  <div className="data-item">
                    <Typography className="text" sx={{ fontWeight: "bold", color: "purple !important" }}>số phòng trống: </Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "blue !important" }}>phòng đã cọc: </Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "#83db10 !important" }}>đang cho thuê: </Typography>
                    <Typography className="text" sx={{ fontWeight: "bold", color: "red !important" }}> báo trả: </Typography>
                  </div>

                </div>
                {/* <div className="actions">
                  <div className="action1">
                    <Button variant="outlined" className="btn1" onClick={handleOpenModalFilter}>
                      <FilterAltOutlinedIcon />
                      <span>Bộ lọc</span>

                    </Button>
                    <Modal
                      onClose={handleCloseModalFilter}
                      aria-labelledby="customized-dialog-title"
                      open={openModalfilter}

                      sx={{ position: "fixed", }}
                    >
                      <Box sx={styleBox}>
                        <DialogTitle sx={{ m: 0, p: 3, fontWeight: "600", color: "black" }} id="customized-dialog-title">
                          Bộ lọc
                        </DialogTitle>
                        <IconButton
                          aria-label="close"
                          onClick={handleCloseModalFilter}
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
                          
                          <Box

                          >
                            <Typography sx={{
                              fontSize: "18px",
                              color: "#804bdf",
                              fontWeight: "600"
                            }}>Trạng thái</Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap" }}>

                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="đang trống" />
                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="cho thuê" />
                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="đang cọc" />
                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="báo trả" />
                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="trả/cọc" />
                            </Box>
                          </Box>
                          <Divider />
                          <Box sx={{ marginTop: "10px" }}>
                            <Typography sx={{
                              fontSize: "18px",
                              color: "#804bdf",
                              fontWeight: "600"
                            }}>Mốc thanh toán</Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", }}>

                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="1 - 5" />
                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="6 - 10" />
                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="11 - 15" />
                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="16 - 20" />
                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="21 - 25" />
                              <FormControlLabel sx={{ color: "black" }} control={<Checkbox sx={{ '&.Mui-checked': { color: purple[400] } }} />} label="26 - cuối tháng" />
                            </Box>
                          </Box>




                        </DialogContent>

                        <DialogActions>
                          <Button style={{
                            background: "#9155fd"
                          }} variant="contained" autoFocus onClick={handleCloseModal}>
                            Lọc
                          </Button>
                        </DialogActions>
                      </Box>

                    </Modal>

                  </div>
                  <div className="action2">
                    <Button variant="contained" className="btn2" onClick={handleOpenModalAddRoom}>
                      <AddHomeOutlinedIcon />
                      <span>Tạo phòng</span>

                    </Button>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="section2">
              {/* <TableCustom type={displayGrid} /> */}
              <div className='newUser-container'>
                <div className="content">
                  <Typography className='text'>Nhà chưa có sản phẩm nào </Typography>
                  <Typography className='text'>Vui lòng nhấn để tạo nhà </Typography>
                  <Button variant="contained" className='btn'>tạo nhà</Button>
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
