"use client";
import React, { useState } from "react";
import "./page.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment } from "@mui/material";
import Link from "next/link";
import tree from "../../../public/assets/img/tree.png";
import leaf from "../../../public/assets/img/leaf.png";
import Image from "next/image";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

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
            <h5>Chào mừng đến với phòng trọ 4U 👋🏻</h5>
            <span>Vui lòng đăng nhập tài khoản của bạn!</span>
          </div>
          <FormControl fullWidth className="form-container">
            <div className="form-control">
              <TextField
                id="outlined-basic"
                label="Số Điện Thoại"
                type="tel"
                variant="outlined"
                className="custom-textfield"
                sx={{ borderRadius: "6px", color: "red" }}
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
                        <RemoveRedEyeOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
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
              ></div>
              <span
                style={{
                  color: "#9155FD",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                }}
              >
                <Link href="/pages/forgetPassword">Quên mật khẩu?</Link>
              </span>
            </div>
          </FormControl>

          <Button variant="contained" className="btn-login" >
            ĐĂNG NHẬP
          </Button>
          <div className="bot">
            <p>Bạn là người mới?</p>
            <Link href="/register" className="link">
              Tạo tài khoản
            </Link>
          </div>
        </div>
      </div>
      <Image src={tree} className="tree" alt="tree" />
      <Image src={leaf} className="leaf" alt="leaf" />
    </div>
  );
};

export default Login;
