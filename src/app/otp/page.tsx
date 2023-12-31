"use client";
import "./page.scss";
import tree from "../../../public/assets/img/tree.png";
import leaf from "../../../public/assets/img/leaf.png";
import Image from "next/image";

import OtpInput from "react-otp-input";

import React, { useState } from "react";
import Button from "@mui/material/Button";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    if (otp.length < 6) {
      alert("Mã OTP không hợp lệ");
    } else {
      alert("Mã OTP hợp lệ");
      window.location.href = "/resetPassword";
    }
  };
  return (
    <div className="otp-container">
      <div className="wrapper">
        <div className="content">
          <div className="greeting">
            <h5 style={{ textAlign: "center" }}>Xác nhận OTP</h5>
          </div>
          <OtpInput
            shouldAutoFocus
            value={otp}
            inputType="tel"
            onChange={setOtp}
            numInputs={6}
            renderSeparator={"-"}
            renderInput={(props) => <input {...props} />}
            containerStyle={{
              display: "flex",
              justifyContent: "space-between",
            }}
            inputStyle={{
              width: 40,
              height: 40,
              border: "1px solid #804bdf",
              borderRadius: "5px",
            }}
          />
          
          <Button
            variant="contained"
            className="btn-otp"
            onClick={handleSubmit}
            
          >
            Xác thực
          </Button>
        </div>
      </div>
      <Image src={tree} className="tree" alt="tree" priority={true} />
      <Image src={leaf} className="leaf" alt="leaf" priority={true}/>
    </div>
  );
};

export default Otp;
