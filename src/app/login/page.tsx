"use client";
import React, { useState } from "react";
import "./page.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Box, Button, Checkbox, InputAdornment } from "@mui/material";
import Link from "next/link";
import tree from "../../../public/assets/img/tree.png";
import leaf from "../../../public/assets/img/leaf.png";
import Image from "next/image";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CheckboxCustom from "../components/CheckboxCustom/page";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleIconClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-container">
      <div className="wrapper">
        <h1 className="title">4U</h1>
        <div className="content">
          <div className="greeting">
            <h2>Chào mừng đến với phòng trọ 4U 👋🏻</h2>
            <span>Vui lòng đăng nhập tài khoản của bạn!</span>
          </div>
          <FormControl fullWidth className="form-container">
            <div className="form-control">
              <TextField
                id="outlined-basic"
                label="Số Điện Thoại"
                variant="outlined"
                className="custom-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ cursor: "pointer" }} position="end">
                      <PhoneAndroidIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="outlined-basic"
                label="Mật Khẩu"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                className="custom-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{ cursor: "pointer" }}
                      position="end"
                      onClick={handleIconClick}
                    >
                      {showPassword ? (
                        <RemoveRedEyeIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* <Checkbox color="secondary" sx={{paddingLeft: 0}} /> */}
                <CheckboxCustom />
                <span>Nhớ mật khẩu</span>
              </div>
              <span
                style={{
                  color: "#9155FD",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Quên mật khẩu?
              </span>
            </div>
          </FormControl>

          <Button variant="contained" className="btn-login">
            ĐĂNG NHẬP
          </Button>
          <span>
            Bạn là người mới?
            <Link href="/register" className="link">
              Tạo tài khoản
            </Link>
          </span>
        </div>
      </div>
      <Image src={tree} className="tree" alt="tree" />
      <Image src={leaf} className="leaf" alt="leaf" />
    </div>
  );
};

export default Login;
