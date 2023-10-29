"use client";
import React, { useState } from "react";
import "./page.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import Link from "next/link";
import tree from "../../../public/assets/img/tree.png";
import leaf from "../../../public/assets/img/leaf.png";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
const ForgotPassword = () => {
  const textfield = {
    ".MuiOutlinedInput-root" : {
      borderRadius: "6px",
    },
    "& .MuiOutlinedInput-root:hover" : {
      "& fieldset": {
        borderColor: "#9155fd"
      }
    }
  }
  return (
    <div className="forget-container">
      <div className="wrapper">
        <div className="content">
          <div className="greeting">
            <h5 style={{ textAlign: "center" }}>Đặt lại mật khẩu</h5>
          </div>
          <FormControl fullWidth className="form-container">
            <div className="form-control">
              <TextField
                id="outlined-basic"
                label="Số Điện Thoại"
                type="tel"
                variant="outlined"
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
            </div>
          </FormControl>
          <Link href="./otp">
            <Button fullWidth variant="contained" className="btn-forget">
              Tiếp tục <ArrowRightAltIcon sx={{ marginLeft: "5px" }} />
            </Button>
          </Link>
        </div>
      </div>
      <Image src={tree} className="tree" alt="tree" priority={true} />
      <Image src={leaf} className="leaf" alt="leaf" priority={true} />
    </div>
  );
};

export default ForgotPassword;
