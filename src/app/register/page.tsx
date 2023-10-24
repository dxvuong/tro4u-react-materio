"use client";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  ThemeProvider,
} from "@mui/material";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import "./page.scss";
import tree from "../../../public/assets/img/tree.png";
import leaf from "../../../public/assets/img/leaf.png";
import Image from "next/image";
import CheckboxCustom from "../components/CheckboxCustom/page";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { themes } from "../components/themes/theme";
import { pink, purple, red } from "@mui/material/colors";

const Register = () => {
  const textfield = {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#9155fd",
      color: "#9155fd",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(58, 53, 65, 0.54)",
      color: "#9155fd",
    },
    ".MuiOutlinedInput-root": {
      borderRadius: "6px",
    },
    "& .MuiOutlinedInput-root:hover": {
      "& fieldset": {
        borderColor: "#9155fd",
      },
    },
  };
  const radioContainer = {
    display: "flex",
    justifyContent: "space-around",
    border: `1px solid rgb(196 196 196)`,
    borderRadius: "6px",
    "&:hover": {
      border: `1px solid ${themes.palette.primary.main}`,
    },
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = (newCheckedValue: boolean) => {
    setIsChecked(newCheckedValue);
    // Do something with the checked value if needed
  };
  const [checked, setChecked] = useState<boolean>(false);
  const handleCheck = () => {
    setChecked(!checked)
  };
  const [selectedValue, setSelectedValue] = React.useState("chủ nhà");
  const [erroCheck, setErrorCheck] = useState("");
  const handleChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  console.log(selectedValue);
  console.log("check checkbox:", checked);

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChangeRole,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [name, setName] = useState("");
  const [full_name, setfullName] = useState("");
  const [password, setPassword] = useState("");
  const [passErrors, setPassErrors] = useState("");
  const [id_nhom_user, setRoleDefault] = useState(2);
  const [role, setRole] = useState("");
  const [room, setRoom] = useState("");

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

  const handleChangeRoom = (event: SelectChangeEvent) => {
    setRoom(event.target.value as string);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleIconClick = () => {
    setShowPassword(!showPassword);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateForm()) {
      console.log("something wrong!");
    } else if (checked == false) {
      setErrorCheck("Hãy đồng ý với chính sách và các điều khoản!");
    } else {
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
        console.log(response);
        const data = await response.json();
        const dataLogin = await responseLogin.json();

        if (data.status === "true") {
          console.log(dataLogin.data);
          // Login successful
          // Store user data in sessionStorage
          sessionStorage.setItem("user", JSON.stringify(dataLogin.data));
          // // Redirect to another page if needed
          window.location.href = "/";
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
    <ThemeProvider theme={themes}>
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
                  id="outlined-basic"
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
                  id="outlined-basic"
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
                  id="outlined-basic"
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
                  id="outlined-basic"
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

              <FormControl>
                {/* <InputLabel id="demo-simple-select-label">Bạn là:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Bạn là"
                onChange={handleChange}
                sx={textfield}
              >
                <MenuItem value={"Chủ nhà"}>Chủ nhà</MenuItem>
                <MenuItem value={"Quản lý"}>Quản lý</MenuItem>
              </Select> */}

                <FormLabel id="demo-radio-buttons-group-label">
                  Bạn là:
                </FormLabel>
                <div className="radio-container">
                  <div className="radio-content">
                    <span
                      style={
                        selectedValue == "quản lý"
                          ? {
                              fontSize: "16px",
                              marginBottom: "-20px",
                              color: "rgb(151 148 148)",
                            }
                          : { fontSize: "16px", marginBottom: "-20px" }
                      }
                    >
                      Chủ nhà
                    </span>
                    <Radio
                      {...controlProps("chủ nhà")}
                      sx={{ color: purple[500] }}
                    />
                  </div>
                  <div
                    className="radio-content"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <span
                      style={
                        selectedValue == "chủ nhà"
                          ? {
                              fontSize: "16px",
                              marginBottom: "-20px",
                              color: "rgb(151 148 148)",
                            }
                          : { fontSize: "16px", marginBottom: "-20px" }
                      }
                    >
                      Quản lý
                    </span>
                    <Radio {...controlProps("quản lý")} />
                  </div>
                </div>
              </FormControl>

              <FormControl>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: themes.palette.primary.main }}
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
                    color: "white",
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
                  <MenuItem value={"dưới 20"}>dưới 20</MenuItem>
                  <MenuItem value={"từ 20 đến 100"}>từ 20 đến 100</MenuItem>
                  <MenuItem value={"từ 100 đến 500"}>từ 100 đến 500</MenuItem>
                  <MenuItem value={"trên 500"}>trên 500</MenuItem>
                </Select>
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
                    color: themes.palette.secondary.main,
                    lineHeight: "19px",
                  }}
                >
                  Tôi đồng ý
                  <span
                    style={{
                      color: themes.palette.primary.main,
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
              onClick={handleSubmitLogin}
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
        <Image src={tree} className="tree" alt="tree" />
        <Image src={leaf} className="leaf" alt="leaf" />
      </div>
    </ThemeProvider>
  );
};

export default Register;
