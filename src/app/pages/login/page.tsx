import React from "react";
import "./page.scss";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
const Login = () => {
  return (
      <div className="login-container">
        <h1 className="title">METEGIO</h1>
        <div className="content">
          <div className="greeting">
            <h2>Welcome to Meterio</h2>
            <span>Please sign-in to your account and start the adventure</span>
          </div>
          <FormControl fullWidth className="form-control">
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </FormControl>
        </div>
      </div>
    
  );
};

export default Login;
