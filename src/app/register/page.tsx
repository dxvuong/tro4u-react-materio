import { Button, FormControl, TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import "./page.scss"
const Register = () => {
  return (
    <div className="register-container">
      <div className="wrapper">
        <h1 className="title">METERIO</h1>
        <div className="content">
          <div className="greeting">
            <h2>Adventure starts here 🚀</h2>
            <span>Make your app management easy and fun!</span>
          </div>
          <FormControl fullWidth className="form-control">
          <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              type="number"
              />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password" />
          </FormControl>
          <Button variant="contained" className="btn-register">
            SIGN UP
          </Button>
          <span>Already have an account?   <Link href="/register" className="link">Sign in instead</Link> </span>
        </div>
      </div>
    </div>
  )
}

export default Register