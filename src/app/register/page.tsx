import { Box, Button, Checkbox, FormControl, InputAdornment, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";
import "./page.scss";
import tree from "../../../public/assets/img/tree.png";
import leaf from "../../../public/assets/img/leaf.png";
import Image from "next/image";
import CheckboxCustom from "../components/CheckboxCustom/page";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
const Register = () => {
  return (
    <div className="register-container">
      <div className="wrapper">
        <h1 className="title">4U</h1>
        <div className="content">
          <div className="greeting">
            <h2>Chào mừng đến với phòng trọ 4U 🚀</h2>
            <span>Đăng kí bằng số điện thoại của bạn</span>
          </div>
          <FormControl fullWidth className="form-control">
            <TextField
              id="outlined-basic"
              label="Số điện thoại"
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <Checkbox color="secondary" sx={{paddingLeft: 0}} /> */}
              <CheckboxCustom/>
              <span style={{color: "rgba(58, 53, 65, 0.68)", lineHeight: "19px"}}>
                Tôi đồng ý
                <span style={{ color: "#9155FD" }}> chính sách & điều khoản bảo mật</span>{" "}
              </span>
            </div>
          </FormControl>
          <Button variant="contained" className="btn-register">
            ĐĂNG KÍ
          </Button>
          <span>
            Bạn đã có tài khoản?{" "}
            <Link href="/register" className="link">
              Đăng nhập
            </Link>{" "}
          </span>
        </div>
      </div>
      <Image src={tree} className="tree" alt="tree" />
      <Image src={leaf} className="leaf" alt="leaf" />
    </div>
  );
};

export default Register;
