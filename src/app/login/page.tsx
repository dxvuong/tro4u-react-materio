"use client";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
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
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import router from "next/router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleIconClick = () => {
    setShowPassword(!showPassword);
  };

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const textfield = {
    ".MuiOutlinedInput-root" : {
      borderRadius: "6px",
    },
    "& .MuiOutlinedInput-root:hover" : {
      "& fieldset": {
        borderColor: "#9155fd"
      }
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9155fd",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#9155fd",
    }
  }

  const handleOnchangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    setErrorMessage("")
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setErrorMessage("")
  };
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (phone == "" || password == "") {
      setErrorMessage("Số điện thoại và mật khẩu không được để trống");
    } else {
      try {
        const response = await fetch(
          "https://api.tro4u.com/api/version/1.0/account/login",
          {
            method: "POST",
            body: JSON.stringify({
              phone,
              password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        const data = await response.json();
        console.log(data.status);

        if (data.status === 1) {
          // Login successful
          // Store user data in sessionStorage
          sessionStorage.setItem("user", JSON.stringify(data.data));
          // Redirect to another page if needed
          alert("Dang nhap thanh cong")
          // window.location.href = "/";
        } else {
          // Handle error response from the server

          setErrorMessage(data.message); // Log the error message
          // You can show the error message to the user or handle it in any way you prefer
        }
      } catch (error) {
        console.error(
          "An error occurred while processing your request:",
          error
        );
        // Handle other types of errors, like network issues
        // You can show a generic error message to the user in this case
      }
    }
  };
  return (
    <div className="login-container">
      <div className="wrapper">
        <h1 className="title">4U</h1>
        <div className="content">
          <div className="greeting">
            <h5>Chào mừng đến với phòng trọ 4U 👋🏻</h5>
            <span>Vui lòng đăng nhập tài khoản của bạn!</span>
            <span style={{ color: "red" }}>
              {errorMessage ? errorMessage : ""}
            </span>
          </div>
          <FormControl fullWidth className="form-container">
            <div className="form-control">
              <TextField
                id="outlined-basic"
                label="Số Điện Thoại"
                type="tel"
                variant="outlined"
                onChange={handleOnchangePhone}
                className="custom-textfield"
                sx={textfield}
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
                sx={textfield}
                onChange={handlePasswordChange}
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
                <Link href="./forgetPassword">Quên mật khẩu?</Link>
              </span>
            </div>
          </FormControl>

          <Button
            variant="contained"
            className="btn-login"
            onClick={handleSubmitLogin}
          >
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
