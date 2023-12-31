"use client";
import React, { useState } from "react";
import "./page.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import tree from "../../../public/assets/img/tree.png";
import leaf from "../../../public/assets/img/leaf.png";
import Image from "next/image";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";

const ResetPassword = () => {
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
  const [showPassword, setShowPassword] = useState(false);
  const handleIconClick = () => {
    setShowPassword(!showPassword);
  };

  const [shownewPassword, setShowNewPassword] = useState(false);
  const handleIconNewClick = () => {
    setShowNewPassword(!shownewPassword);
  };
  return (
    <div className="reset-container">
      <div className="wrapper">
        <div className="content">
          <div className="greeting">
            <h5 style={{ textAlign: "center" }}>Đặt lại mật khẩu</h5>
          </div>
          <FormControl fullWidth className="form-container">
            <div className="form-control">
              <TextField
                id="outlined-basic"
                label="Mật khẩu mới"
                type={showPassword? "password" : "text"}
                variant="outlined"
                className="custom-textfield"
                sx={textfield}
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
              <TextField
                id="outlined-basic"
                label="Xác nhận mật khẩu"
                variant="outlined"
                type={shownewPassword? "password" : "text"}
                className="custom-textfield"
                sx={{ borderRadius: "6px", color: "red" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{ cursor: "pointer" }}
                      position="end"
                      onClick={handleIconNewClick}
                    >
                      {shownewPassword ? (
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
            </div>
          </FormControl>

          <Button variant="contained" className="btn-reset">
            Xác nhận 
          </Button>
        </div>
      </div>
      <Image src={tree} className="tree" alt="tree" priority={true} />
      <Image src={leaf} className="leaf" alt="leaf" priority={true} />
    </div>
  );
};

export default ResetPassword;
