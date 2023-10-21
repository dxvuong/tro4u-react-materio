"use client";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import "./page.scss";
import tree from "../../../public/assets/img/tree.png";
import leaf from "../../../public/assets/img/leaf.png";
import Image from "next/image";
import CheckboxCustom from "../components/CheckboxCustom/page";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Register = () => {
  const [role, setRole] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    console.log("selected role: ", role);
    
    setRole(event.target.value as string);
  };

  const [room, setRoom] = useState("");

  const handleChangeRoom = (event: SelectChangeEvent) => {
    console.log("selected room: ", room);
    setRoom(event.target.value as string);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleIconClick = () => {
    setShowPassword(!showPassword);
  };
  const [dataUser, setDataUser] = useState([])
  // const handleSubmit = (e) => {
  //   setDataUser([role, room])
  // }

  return (
    <div className="register-container">
      <div className="wrapper">
        <h1 className="title">4U</h1>
        <div className="content">
          <div className="greeting">
            <h5>Chào mừng đến với phòng trọ 4U 🚀</h5>
            <span>Đăng kí bằng số điện thoại của bạn</span>
          </div>
          <form style={{ width: "100%" }} className="form-control">
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Số điện thoại"
                type="tel"
                variant="outlined"
                sx={{
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(58, 53, 65, 0.54)",
                  },
                  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#9155fd",
                    },
                }}
                className="custom-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ cursor: "pointer" }} position="end">
                      <PhoneAndroidIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Tên"
                variant="outlined"
                sx={{
                  "&:hover .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root":
                    {
                      borderColor: "red",
                    },
                  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#9155fd",
                    },
                }}
                className="custom-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ cursor: "pointer" }} position="end">
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormControl>
              <TextField
                id="outlined-basic"
                label="Mật khẩu"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                sx={{
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(58, 53, 65, 0.54)",
                  },
                  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#9155fd",
                    },
                }}
                className="custom-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{ cursor: "pointer" }}
                      position="end"
                      onClick={handleIconClick}
                    >
                      {showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            

            <FormControl>
              <InputLabel id="demo-simple-select-label">Bạn là:</InputLabel>
              <Select
                
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Bạn là"
                onChange={handleChange}
                sx={{
                  
                  
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#9155fd',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(58, 53, 65, 0.54)',
                  },
                  
                }}
                
              >
                <MenuItem value={1}>Chủ nhà</MenuItem>
                <MenuItem value={2}>Quản lý</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Số lượng phòng hoặc giường:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={room}
                label="Số lượng phòng hoặc giường"
                onChange={handleChangeRoom}
                sx={{
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#9155fd",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(58, 53, 65, 0.54)",
                  },
                }}
              >
                <MenuItem value={1}>dưới 20</MenuItem>
                <MenuItem value={2}>từ 20 đến 100</MenuItem>
                <MenuItem value={3}>từ 100 đến 500</MenuItem>
                <MenuItem value={4}>trên 500</MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "-10px",
              }}
            >
              {/* <Checkbox color="secondary" sx={{paddingLeft: 0}} /> */}
              <CheckboxCustom />
              <span
                style={{ color: "rgba(58, 53, 65, 0.68)", lineHeight: "19px" }}
              >
                Tôi đồng ý
                <span style={{ color: "#9155FD" }}>
                  {" "}
                  chính sách & điều khoản bảo mật
                </span>{" "}
              </span>
            </div>
          </form>
          <Button type="submit" variant="contained" className="btn-register" >
            ĐĂNG KÍ
          </Button>
          <div className="bot">
            <p>Bạn đã có tài khoản?</p>
            <Link href="/login" className="link">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
      <Image src={tree} className="tree" alt="tree" />
      <Image src={leaf} className="leaf" alt="leaf" />
    </div>
  );
};

export default Register;
