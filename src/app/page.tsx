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
import TableCustom from "./components/TableCustom/page";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModalDisplay from "./components/ModalDisplay/page";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import NewuserPage from "./components/NewUser/page";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { purple } from '@mui/material/colors';
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SelectCustom from "./components/SelectStatusCustom/page";
import SelectStatusCustom from "./components/SelectStatusCustom/page";
import SelectPaymentSchedule from "./components/SelectPaymentSchedule/page";
import BootstrapDialogCustom from "./components/DialogAddHouse/page";
import DialogAddHouse from "./components/DialogAddHouse/page";
import DialogAddRoom from "./components/DialogAddRoom/page";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import React from "react";
import SelectHouseComponent from "./components/SelectHouse/page";
import ModalSelectHouse from "./components/ModalSelectHouse/page";
import DialogEditHouse from "./components/DialogEditHouse/page";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function Home() {
  const MenuHouse = [
    { value: 'Qt1', label: 'Quang trung 1' },
    { value: 'Qt2', label: 'Quang trung 2' },
    { value: 'Qt3', label: 'Quang trung 3' }
  ]
  const [openModalAddHouse, setOpenModalAddHouse] = useState(false);
  const [openModalAddRoom, setOpenModalAddRoom] = useState(false);
  const [displayGrid, setDisplayGrid] = useState(false)
  const [openModalEditHouse, setOpenModalEditHouse] = useState(false);
  const [openModalSelectHouse, setModalOpenSelectHouse] = useState(false)
  
  const handleOpenSelectHouse = () => {
    setModalOpenSelectHouse(!openModalSelectHouse)
  }
  const handleCloseSeclectHouse = () => {
    setModalOpenSelectHouse(false)
  }
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

  const handleOpenModalEditHouse = () => {
    setOpenModalEditHouse(!openModalEditHouse);
  };

  const handleCloseModalEditHouse = () => {
    setOpenModalEditHouse(false);
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
      <HeaderComponent />
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
                <div className="action3">
                    <Button
                      // onClick={handleOpenModalDisplay}
                      variant="outlined"
                      className="btn3"
                    >
                      {" "}
                      <LocalPrintshopOutlinedIcon className="icon" /> <span>Xuất excel</span>
                      <div className='modalDisplay-container'>
                        <Modal open={openModalDisplay} onClose={handleCloseModalDisplay}>
                          <Box sx={styleBox}>
                            <DialogTitle sx={{ padding: " 10px 11px", m: 0, color: "#fff", background: "#804bdf", borderRadius: "6px 6px 0 0" }} id="customized-dialog-title">
                              Kiểu hiển thị
                            </DialogTitle>
                            <IconButton
                              aria-label="close"
                              onClick={handleCloseModalDisplay}
                              sx={{
                                position: "absolute",
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                              }}
                            >
                              <CloseIcon />
                            </IconButton>
                            <DialogContent sx={styleDialogContent}>
                              <Button sx={styleBtnDisplay1} className="btn-1" onClick={handleDisplayGrid} variant="outlined">Kiểu lưới</Button>

                              <Button sx={styleBtnDisplay2} onClick={handleDisplayTable} variant="contained">Kiểu bảng</Button>
                            </DialogContent>



                          </Box>

                        </Modal>
                      </div>
                    </Button>
                  </div>
                  <div className="action3">
                    <Button
                      onClick={handleOpenModalDisplay}
                      variant="outlined"
                      className="btn3"
                    >
                      {" "}
                      <GridViewOutlinedIcon className="icon" /> <span>hiển thị</span>
                      <div className='modalDisplay-container'>
                        <Modal open={openModalDisplay} onClose={handleCloseModalDisplay}>
                          <Box sx={styleBox}>
                            <DialogTitle sx={{ padding: " 10px 11px", m: 0, color: "#fff", background: "#804bdf", borderRadius: "6px 6px 0 0" }} id="customized-dialog-title">
                              Kiểu hiển thị
                            </DialogTitle>
                            <IconButton
                              aria-label="close"
                              onClick={handleCloseModalDisplay}
                              sx={{
                                position: "absolute",
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                              }}
                            >
                              <CloseIcon />
                            </IconButton>
                            <DialogContent sx={styleDialogContent}>
                              <Button sx={styleBtnDisplay1} className="btn-1" onClick={handleDisplayGrid} variant="outlined">Kiểu lưới</Button>

                              <Button sx={styleBtnDisplay2} onClick={handleDisplayTable} variant="contained">Kiểu bảng</Button>
                            </DialogContent>



                          </Box>

                        </Modal>
                      </div>
                    </Button>
                  </div>
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
                        <DialogTitle sx={{ m: 0, padding: " 10px 15px", color: "#fff", background: "#804bdf", borderRadius: "6px 6px 0 0" }} id="customized-dialog-title">
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
                          {/* <SelectStatusCustom data={status} onchange={handleChangeStatus} />
                          <SelectPaymentSchedule data={paymentSchedule} onchange={handleChangePaymentSchedule} /> */}
                          <Box

                          >
                            <Typography sx={{
                              fontSize: "18px",
                              color: "#804bdf",
                              fontWeight: "600"
                            }}>Trạng thái</Typography>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>

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
                            <Box sx={{ display: "flex", flexDirection: "column" }}>

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
                          <Button className="btn-close" variant="outlined" autoFocus onClick={handleCloseModalFilter}>
                            Đóng
                          </Button>
                          <Button style={{
                            background: "#9155fd"
                          }} variant="contained" autoFocus onClick={handleCloseModalFilter}>
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
                </div>
              </div>
            </div>

            <div className="section2">
              <TableCustom types={displayGrid} />

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

      {/* this is modal section */}
      <div className="modal " >
        <ModalSelectHouse open={openModalSelectHouse} close={handleCloseSeclectHouse} options={MenuHouse} />
      </div>
      {/* this is modal section */}
      <DialogEditHouse open={openModalEditHouse} close={handleCloseModalEditHouse} />
    </div>
  );
}
