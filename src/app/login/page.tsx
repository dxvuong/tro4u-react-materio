import React from "react";
import "./page.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import tree from "../../../public/assets/img/tree.png"
import leaf from "../../../public/assets/img/leaf.png"
import Image from "next/image";
const Login = () => {
  return (
    <div className="login-container">
      <div className="wrapper">
        <h1 className="title">4U</h1>
        <div className="content">
          <div className="greeting">
            <h2>Chào mừng đến với phòng trọ 4U 👋🏻</h2>
            <span>Vui lòng đăng nhập tài khoản của bạn!</span>
          </div>
          <FormControl fullWidth className="form-control">
            <TextField
              id="outlined-basic"
              label="Số Điện Thoại"
              variant="outlined"
              
            />
            <TextField
              id="outlined-basic"
              label="Mật Khẩu"
              variant="outlined"
              type="password"
            />
          </FormControl>
          <Button variant="contained" className="btn-login">
            ĐĂNG NHẬP
          </Button>
          <span>Bạn là người mới?   <Link href="/register" className="link">Tạo tài khoản</Link> </span>
        </div>
      </div>
      <Image src={tree} className="tree" alt="tree" />
      <Image src={leaf} className="leaf" alt="leaf" />
    </div>
  );
};

export default Login;
