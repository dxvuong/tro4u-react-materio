import React from "react";
import "./page.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import Link from "next/link";
const Login = () => {
  return (
    <div className="login-container">
      <div className="wrapper">
        <h1 className="title">METERIO</h1>
        <div className="content">
          <div className="greeting">
            <h2>Welcome to Materio! 👋🏻</h2>
            <span>Please sign-in to your account and start the adventure</span>
          </div>
          <FormControl fullWidth className="form-control">
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              type="numberz"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
          </FormControl>
          <Button variant="contained" className="btn-login">
            LOGIN
          </Button>
          <span>New on our platform?   <Link href="/register" className="link">Create an account</Link> </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
