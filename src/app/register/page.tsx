"use client";


import Link from "next/link";
import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import "./page.scss";
import tree from "../../../public/assets/img/tree.png";
import leaf from "../../../public/assets/img/leaf.png";
import Image from "next/image";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { purple } from "@mui/material/colors";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import styled from "@mui/material/styles/styled";
import Dialog from "@mui/material/Dialog";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DialogActions from "@mui/material/DialogActions";
import Radio from "@mui/material/Radio";

const Register = () => {
  const textfield = {
    ".MuiOutlinedInput-root": {
      borderRadius: "6px",
    },
    "& .MuiOutlinedInput-root:hover": {
      "& fieldset": {
        borderColor: "#9155fd",
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9155fd",
    },
  };

  const [isChecked, setIsChecked] = useState(false);

  // const handleCheckChange = (newCheckedValue: boolean) => {
  //   setIsChecked(newCheckedValue);
  //   // Do something with the checked value if needed
  // };
  const [checked, setChecked] = useState<boolean>(false);
  const handleCheck = () => {
    setChecked(!checked);
  };

  const [erroCheck, setErrorCheck] = useState("");

  // const handleChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedRole(event.target.value);
  // };
  // console.log(selectedValue);
  // console.log("check checkbox:", checked);

  const [selectedRole, setSelectedRole] = React.useState("CN");

  const handleChangeRole = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.value);
  }, []);

  console.log("role:", selectedRole);
  

 
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [name, setName] = useState("");
  const [full_name, setfullName] = useState("");
  const [password, setPassword] = useState("");
  const [passErrors, setPassErrors] = useState("");
  const [id_nhom_user, setRoleDefault] = useState(2);
  const [role, setRole] = useState("");
  const [room, setRoom] = useState("");


  const handleChangeRoom = (event: SelectChangeEvent) => {

    setRoom(event.target.value as string);
  };

  const [openModalRole, setOpenModalRole] = useState(false);

  

  console.log("open modal", openModalRole);
  


  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(3),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(2),
    },
  }));

  const validatePhoneNumber = (number: string) => {
    const isValid = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
    setPhoneError(isValid ? "" : "Số điện thoại không hợp lệ");
    return isValid;
  };
  const validatePassword = (pass: string) => {
    const isValid = password.length >= 6;
    setPassErrors(isValid ? "" : "Mật khẩu phải có 6 ký tự trở lên");
    return isValid;
  };
  const validateForm = () => {
    const isValidPhone = validatePhoneNumber(phone);
    const isValidFirstName = name.trim() !== "";
    const isValidLastName = full_name.trim() !== "";
    const isValidPassword = validatePassword(password); // Example password length validation

    return (
      isValidPhone && isValidFirstName && isValidLastName && isValidPassword
    );
  };
  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = event.target.value;

    setPhone(phoneNumber);
    setPhoneError("");
    setErrorMessage("");
  };

  const handleChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value as string);
  };
  const handleChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setfullName(event.target.value as string);
  };
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value as string);
    setPassErrors("");
  };



  const [showPassword, setShowPassword] = useState(false);
  const handleIconClick = () => {
    setShowPassword(!showPassword);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitInfo = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateForm()) {
      console.log("something wrong!");
    } else if (checked == false) {

      setErrorCheck("Hãy đồng ý với chính sách và các điều khoản!");
    } else {
      setOpenModalRole(!openModalRole);
    }

    // else {
    //
    // }
  };
  const handleCloseModalRegister = () => {
    setOpenModalRole(false);
  };
  const handleSubmitRegister = async (event: FormEvent) => {
    event.preventDefault();
    setOpenModalRole(false)
    console.log({

      phone, name, full_name, password, id_nhom_user, selectedRole, room
    });
    
    try {
      const response = await fetch(
        "https://api.tro4u.com/api/version/1.0/account/signup",
        {
          method: "POST",
          body: JSON.stringify({
            phone,
            name,
            full_name,
            password,
            id_nhom_user,
            role,
            room,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseLogin = await fetch(
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

      const data = await response.json();
      const dataLogin = await responseLogin.json();

      if (data.status === "true") {
        console.log(dataLogin.data);
        // Login successful
        // Store user data in sessionStorage
        sessionStorage.setItem("user", JSON.stringify(dataLogin.data));
        // // Redirect to another page if needed
        // alert("đăng ký thành công");
        window.location.href = "/";
      } else {
        // Handle error response from the server
        setErrorMessage(data.message); // Log the error message
        // You can show the error message to the user or handle it in any way you prefer
      }
    } catch (error) {
      console.error("An error occurred while processing your request:", error);
      // Handle other types of errors, like network issues
      // You can show a generic error message to the user in this case
    }
  };


  return (
    <div className="register-container">
      <div className="wrapper">
        <h1 className="title">4U</h1>
        <div className="content">
          <div className="greeting">
            <h5>Chào mừng đến với phòng trọ 4U 🚀</h5>
            <span>Đăng kí bằng số điện thoại của bạn</span>
          </div>
          {errorMessage ? (
            <span style={{ color: "red" }}>{errorMessage}</span>
          ) : (
            ""
          )}
          <form style={{ width: "100%" }} className="form-control">
            <FormControl>
              <span style={{ color: "red", marginBottom: "5px" }}>
                {phoneError}
              </span>
              <TextField
                id="phone"
                label="Số điện thoại"
                type="tel"
                variant="outlined"
                value={phone}
                onChange={handleChangePhone}
                sx={textfield}
                className="custom-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ cursor: "pointer" }} position="end">
                      <PhoneAndroidIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="fname"
                label="Họ"
                variant="outlined"
                value={name}
                onChange={handleChangeFirstName}
                sx={textfield}
                className="custom-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ cursor: "pointer" }} position="end">
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="lname"
                label="Tên"
                variant="outlined"
                value={full_name}
                onChange={handleChangeLastName}
                sx={textfield}
                className="custom-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ cursor: "pointer" }} position="end">
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormControl>
              <span style={{ color: "red", marginBottom: "5px" }}>
                {passErrors}
              </span>
              <TextField
                id="pass"
                label="Mật khẩu"
                value={password}
                onChange={handleChangePassword}
                type={showPassword ? "text" : "password"}
                variant="outlined"
                sx={textfield}
                className="custom-textfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{ cursor: "pointer" }}
                      position="end"
                      onClick={handleIconClick}
                    >
                      {showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <span style={{ color: "red" }}>
              {erroCheck == "" ? "" : erroCheck}
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "-10px",
                marginTop: "-30px",
              }}
            >
              {/* <Checkbox color="secondary" sx={{paddingLeft: 0}} /> */}
              <Checkbox
                value={checked}
                style={
                  checked
                    ? { color: "#9155fd" }
                    : { color: "rgba(58, 53, 65, 0.68)" }
                }
                onClick={handleCheck}
              />
              <span
                style={{
                  color: "9155fd",
                  lineHeight: "19px",
                }}
              >
                Tôi đồng ý
                <span
                  style={{
                    color: "9155fd",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  chính sách & điều khoản bảo mật
                </span>{" "}
              </span>
            </div>
          </form>
          <Button
            type="submit"
            variant="contained"
            className="btn-register"
            onClick={handleSubmitInfo}
          >
            ĐĂNG KÍ
          </Button>
          <div className="bot">
            <p>Bạn đã có tài khoản?</p>
            <Link href="/login" className="link">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
      <Image src={tree} className="tree" alt="tree" priority={true} />
      <Image src={leaf} className="leaf" alt="leaf" priority={true} />

      <BootstrapDialog
        onClose={handleCloseModalRegister}
        aria-labelledby="customized-dialog-title"
        open={openModalRole}
        sx={{ position: "fixed" }}
      >
        <DialogTitle sx={{ m: 0,  }} id="customized-dialog-title" style={{fontSize: "16px", padding: "24px 56px"}}>
          Hãy cho chúng tôi biết bạn là ai
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseModalRegister}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers sx={{maxWidth: "360px"}}>
          <div className="modal-register" style={{ display: "flex", flexDirection: "column" }}>
            <FormControl>
              <FormLabel sx={{color: "rgba(58, 53, 65, 0.68) !important"}} id="role">Bạn là: </FormLabel>
              <RadioGroup
                sx={{justifyContent: "space-around", marginBottom: "25px", }}
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel color="#333 !important" value="CN" checked={selectedRole === "CN"} control={<Radio onChange={handleChangeRole}  sx={{'&.Mui-checked' : {color: "#9155fd"}}} />} label="Chủ nhà" />
                <FormControlLabel value="QL" checked={selectedRole === "QL"} control={<Radio onChange={handleChangeRole}  sx={{'&.Mui-checked' : {color: "#9155fd"}}} />} label="Quản lý" />

              </RadioGroup>
            </FormControl>
            <FormControl>
              <InputLabel
                id="room"
                sx={{ color: "#9155fd" }}
              >
                Số lượng phòng hoặc giường:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={room}
                label="Số lượng phòng hoặc giường"
                onChange={handleChangeRoom}
                className="custom-textfield"
                sx={{
                  color: "rgba(0, 0, 0, 0.87)",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(58, 53, 65, 0.87)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#9155fd",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#9155fd",
                  },
                  ".MuiSvgIcon-root ": {
                    fill: "black !important",
                  },
                  
                }}
              >
                <MenuItem value={1}>dưới 20</MenuItem>
                <MenuItem value={2}>từ 20 đến 100</MenuItem>
                <MenuItem value={3}>từ 100 đến 500</MenuItem>
                <MenuItem value={4}>trên 500</MenuItem>
              </Select>
            </FormControl>
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            style={{
              background: "#9155fd",
            }}
            variant="contained"
            autoFocus
            onClick={handleSubmitRegister}
          >
            Hoàn tất
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default Register;
